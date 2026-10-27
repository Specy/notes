---
title: "LLM e Generative AI"
description: "Language modeling e Large Language Models (LLM): architettura transformer, fine-tuning, in-context learning (zero/one/few-shot), RAG (retrieval-augmented generation) e panoramica sulla Generative AI per testo, immagini e video."
type: lecture
---
In generale, il compito di NLP è quello di predirre quale sarà la prossima parola in una sequenza di testo. 
In maniera più formale, dato un vocabolario di simboli $V$, il *language modeling* impara una distribuzione di probabilità $P\left(w_1, \ldots, w_m\right)=\prod_{i=1}^m P\left(w_i \mid w_1, \ldots, w_{i-1}\right)$ su tutte le sequenze di parole $V$, questa probabilità $P$ è chiamata *language model*

Il language modeling può essere visto come un problema many-to-one dato che prende una sequenza di input e da un token in output, ma concettualmente può essere visto come un many-to-many dato che verrà eseguito ripetutamente fino ad una condizione di terminazione. 

![[Frame 11 figura.png]]

```mermaid
block-beta
  columns 11
  space:8 sm["softmax"] space:2
  space:11
  d1["…"] space R1["RNN<br/>h⁽¹⁾"] space R2["RNN<br/>h⁽²⁾"] space R3["RNN<br/>h⁽³⁾"] space R4["RNN<br/>h⁽⁴⁾"] space d2["…"]
  space:11
  space:2 e1["e⁽¹⁾"] space e2["e⁽²⁾"] space e3["e⁽³⁾"] space e4["e⁽⁴⁾"] space:2
  space:11
  w0["…"] space x1["the<br/>x⁽¹⁾"] space x2["students<br/>x⁽²⁾"] space x3["opened<br/>x⁽³⁾"] space x4["their<br/>x⁽⁴⁾"] space w5["…"]
  d1 --> R1
  R1 --> R2
  R2 --> R3
  R3 --> R4
  R4 --> d2
  R4 --> sm
  e1 --> R1
  e2 --> R2
  e3 --> R3
  e4 --> R4
  x1 --> e1
  x2 --> e2
  x3 --> e3
  x4 --> e4
```

Ogni blocco *RNN* può essere qualsiasi architettura RNN, principalmente è il modello transformer .
Qualsiasi $x^{(t)}$ è una rappresentazione vettoriale della sequenza di parole, l'output finale è un softmax su $|V|$ valori.

---
Il transformer è considerato oggi giorno come l'architettura di riferimento in molti domini NLP, ma è applicato anche in molti altri campi in cui c'è il bisogno di analizzare sequenze.

# LLM (Large language models)

Gli LLM fanno riferimento a modelli di linguaggio che sono allenati con un numero molto grande di parametri, anche miliardi. Di solito un numero più grande di parametri aumenta la qualità dell'LLM.

```mermaid
flowchart BT
  P(["Parameters"])
  S["Small LM<br/># of params &lt; 1B"]
  M["Medium LM<br/>1B &lt; # of params &lt; 10B"]
  L["Large LM<br/>10B &lt; # of params &lt; 100B"]
  V["Very Large LM<br/>100B &lt; # of params"]
  P --- S
  P --- M
  P --- L
  P --- V
```

![[Pasted image 20241221123021.png]]

# Fine tuning, Context learning e RAG 

Di solito gli LLM vengono addestrati su una quantità enorme di testo per essere "generalisti", e poi tramite fine-tuning si settorializza l'LLM per adattarlo allo scopo necessario. 

Si prende un dataset di esempi della task da risolvere e viene effettuato un nuovo "addestramento" partendo dall'LLM iniziale già addestrato. 

---
In context prompting/learning è un altro metodo per specializzare un LLM, dove viene data la descrizione del comportamento dell'LLM all'interno della stringa in input, questo non modifica i parametri come fa il fine tuning, ma fa affidamento completamente ai parametri iniziali del modello.

Questa stringa di istruzione è detta "prompt", che può anche contenere degli esempi di come dovrebbe essere il risultato, in questo caso vengono chiamati:
- Zero shot, se non ci sono esempi, solo la descrizione
- One shot, c'è un solo esempio
- Few-shot, se ci sono più di 1, di solito 10

Zero-shot prompt:

```text
Classifying the sentiment of a text consists of assessing the tone of the opinion expressed in the given text as
positive, negative, or neutral.
Text: I think the vacation was okay. Sentiment:
```

One-shot prompt:

```text
Classifying the sentiment of a text consists of assessing the tone of the opinion expressed in the given text as
positive, negative, or neutral.
Text: The product is terrible. Sentiment: Negative.
Text: I think the vacation was okay. Sentiment:
```

Few-shot prompt:

```text
Classifying the sentiment of a text consists of assessing the tone of the opinion expressed in the given text as
positive, negative, or neutral.
Text: The product is terrible. Sentiment: Negative.
Text: Super helpful, worth it Sentiment: Positive.
Text: I think the vacation was okay. Sentiment: Neutral.
Text: It doesnt work! Sentiment:
```

---
Un problema degli LLM è che è limitato alla "conoscenza" presente nel testo che è stato fornito durante il training. Se chiediamo qualcosa che LLM non ha mai visto, non sarà capace di trattarla. 
Per questo motivo si usa la RAG (retrival augmented generation) dove, data una domanda o messaggio, rappresentante il "task" da effettuare, vengono estratti documenti rilevanti da una base di conoscenza.

Mischiato alle istruzioni del prompt ed eventuali esempi, si riesce ad aumentare la qualità della risposta dell'LLM.

```mermaid
block-beta
  columns 9
  docs["Reference<br/>documents"] space e1{{"LLM<br/>embedding"}} space db[("embeddings<br/>Vector database")] space:3 ret["retrieve context<br/>from relevant<br/>documents"]
  space:9
  uq(["User query"]) space e2{{"LLM<br/>embedding"}} space qv[/"Query<br/>vector"\] space find["find relevant<br/>documents by<br/>comparing<br/>embeddings"] space ctx(["Context chunks"])
  space:9
  space:9
  space:4 aug("Augmented query e.g.<br/>...<br/>Answer the above,<br/>based on:<br/>&lt;chunk 1&gt;,<br/>&lt;chunk 2&gt;,<br/>&lt;chunk 3&gt;,") space:4
  space:9
  space:4 gen{{"LLM<br/>generation"}} space:4
  space:9
  space:4 resp(["Response"]) space:4
  docs --> e1
  e1 --> db
  uq --> e2
  e2 --> qv
  qv --> find
  db --- ret
  find --- ret
  ret --- ctx
  uq --> aug
  ctx --> aug
  aug --> gen
  gen --> resp
```

# Generative AI

La _Generative AI_ (GenAI) è una branca dell'intelligenza artificiale che crea contenuti digitali, come testo, immagini, video e musica. Sebbene spesso utilizzi modelli linguistici di grandi dimensioni (_LLM_, come ChatGPT), non si limita a questi. Il principio chiave è generalizzare i concetti degli LLM per lavorare con simboli diversi dai semplici elementi testuali, ad esempio unità di immagini, video o musica. L'avanzamento degli LLM ha portato a un boom della GenAI nei primi anni 2020, con applicazioni come chatbot (ChatGPT), sistemi testo-immagine (DALL-E) e testo-video (Sora).
