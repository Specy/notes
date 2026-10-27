---
title: "LLM e Generative AI"
description: "Language modeling e Large Language Models (LLM): architettura transformer, fine-tuning, in-context learning (zero/one/few-shot), RAG (retrieval-augmented generation) e panoramica sulla Generative AI per testo, immagini e video."
type: lecture
---
In generale, il compito di NLP è quello di predirre quale sarà la prossima parola in una sequenza di testo. 
In maniera più formale, dato un vocabolario di simboli $V$, il *language modeling* impara una distribuzione di probabilità $P\left(w_1, \ldots, w_m\right)=\prod_{i=1}^m P\left(w_i \mid w_1, \ldots, w_{i-1}\right)$ su tutte le sequenze di parole $V$, questa probabilità $P$ è chiamata *language model*

Il language modeling può essere visto come un problema many-to-one dato che prende una sequenza di input e da un token in output, ma concettualmente può essere visto come un many-to-many dato che verrà eseguito ripetutamente fino ad una condizione di terminazione. 

<svg viewBox="0 0 600 684" width="100%" style="max-width:560px;display:block;margin:1.5rem auto" role="img" aria-label="Language model con RNN: le parole the students opened their passano per gli embedding e(1)…e(4) e gli stati h(1)…h(4); da h(4) la softmax produce la distribuzione sulla parola successiva, con picchi su books e laptops">
<defs><marker id="iframe11-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0 0L10 5L0 10z" style="fill:currentColor;fill:context-stroke"/></marker></defs>
<rect x="331.0" y="160" width="16.2" height="10" fill="var(--palette-green)" fill-opacity="0.6" stroke="currentColor" stroke-width="0.8"/>
<rect x="347.2" y="89" width="16.2" height="81" fill="var(--palette-green)" fill-opacity="0.6" stroke="currentColor" stroke-width="0.8"/>
<rect x="363.4" y="150" width="16.2" height="20" fill="var(--palette-green)" fill-opacity="0.6" stroke="currentColor" stroke-width="0.8"/>
<rect x="379.6" y="137" width="16.2" height="33" fill="var(--palette-green)" fill-opacity="0.6" stroke="currentColor" stroke-width="0.8"/>
<rect x="395.8" y="160" width="16.2" height="10" fill="var(--palette-green)" fill-opacity="0.6" stroke="currentColor" stroke-width="0.8"/>
<rect x="412.0" y="134" width="16.2" height="36" fill="var(--palette-green)" fill-opacity="0.6" stroke="currentColor" stroke-width="0.8"/>
<rect x="428.2" y="137" width="16.2" height="33" fill="var(--palette-green)" fill-opacity="0.6" stroke="currentColor" stroke-width="0.8"/>
<rect x="444.4" y="109" width="16.2" height="61" fill="var(--palette-green)" fill-opacity="0.6" stroke="currentColor" stroke-width="0.8"/>
<rect x="460.6" y="155" width="16.2" height="15" fill="var(--palette-green)" fill-opacity="0.6" stroke="currentColor" stroke-width="0.8"/>
<rect x="476.8" y="143" width="16.2" height="27" fill="var(--palette-green)" fill-opacity="0.6" stroke="currentColor" stroke-width="0.8"/>
<rect x="493.0" y="134" width="16.2" height="36" fill="var(--palette-green)" fill-opacity="0.6" stroke="currentColor" stroke-width="0.8"/>
<rect x="509.2" y="164" width="16.2" height="6" fill="var(--palette-green)" fill-opacity="0.6" stroke="currentColor" stroke-width="0.8"/>
<line x1="310" y1="170" x2="545" y2="170" stroke="var(--palette-teal)" stroke-width="2"/>
<rect x="74" y="285" width="44" height="120" rx="6" fill="none" stroke="var(--palette-red)" stroke-width="2"/>
<rect x="75" y="454" width="42" height="111" rx="6" fill="none" stroke="var(--palette-purple)" stroke-width="2"/>
<circle cx="96" cy="470" r="8" fill="var(--palette-purple)" fill-opacity="0.6" stroke="var(--palette-purple)" stroke-width="1.5"/>
<circle cx="96" cy="494" r="8" fill="var(--palette-purple)" fill-opacity="0.6" stroke="var(--palette-purple)" stroke-width="1.5"/>
<circle cx="96" cy="519" r="8" fill="var(--palette-purple)" fill-opacity="0.6" stroke="var(--palette-purple)" stroke-width="1.5"/>
<circle cx="96" cy="543" r="8" fill="var(--palette-purple)" fill-opacity="0.6" stroke="var(--palette-purple)" stroke-width="1.5"/>
<rect x="195" y="285" width="44" height="120" rx="6" fill="none" stroke="var(--palette-red)" stroke-width="2"/>
<rect x="196" y="454" width="42" height="111" rx="6" fill="none" stroke="var(--palette-purple)" stroke-width="2"/>
<circle cx="217" cy="470" r="8" fill="var(--palette-purple)" fill-opacity="0.6" stroke="var(--palette-purple)" stroke-width="1.5"/>
<circle cx="217" cy="494" r="8" fill="var(--palette-purple)" fill-opacity="0.6" stroke="var(--palette-purple)" stroke-width="1.5"/>
<circle cx="217" cy="519" r="8" fill="var(--palette-purple)" fill-opacity="0.6" stroke="var(--palette-purple)" stroke-width="1.5"/>
<circle cx="217" cy="543" r="8" fill="var(--palette-purple)" fill-opacity="0.6" stroke="var(--palette-purple)" stroke-width="1.5"/>
<rect x="317" y="285" width="44" height="120" rx="6" fill="none" stroke="var(--palette-red)" stroke-width="2"/>
<rect x="318" y="454" width="42" height="111" rx="6" fill="none" stroke="var(--palette-purple)" stroke-width="2"/>
<circle cx="339" cy="470" r="8" fill="var(--palette-purple)" fill-opacity="0.6" stroke="var(--palette-purple)" stroke-width="1.5"/>
<circle cx="339" cy="494" r="8" fill="var(--palette-purple)" fill-opacity="0.6" stroke="var(--palette-purple)" stroke-width="1.5"/>
<circle cx="339" cy="519" r="8" fill="var(--palette-purple)" fill-opacity="0.6" stroke="var(--palette-purple)" stroke-width="1.5"/>
<circle cx="339" cy="543" r="8" fill="var(--palette-purple)" fill-opacity="0.6" stroke="var(--palette-purple)" stroke-width="1.5"/>
<rect x="439" y="285" width="44" height="120" rx="6" fill="none" stroke="var(--palette-red)" stroke-width="2"/>
<rect x="440" y="454" width="42" height="111" rx="6" fill="none" stroke="var(--palette-purple)" stroke-width="2"/>
<circle cx="461" cy="470" r="8" fill="var(--palette-purple)" fill-opacity="0.6" stroke="var(--palette-purple)" stroke-width="1.5"/>
<circle cx="461" cy="494" r="8" fill="var(--palette-purple)" fill-opacity="0.6" stroke="var(--palette-purple)" stroke-width="1.5"/>
<circle cx="461" cy="519" r="8" fill="var(--palette-purple)" fill-opacity="0.6" stroke="var(--palette-purple)" stroke-width="1.5"/>
<circle cx="461" cy="543" r="8" fill="var(--palette-purple)" fill-opacity="0.6" stroke="var(--palette-purple)" stroke-width="1.5"/>
<g stroke="var(--palette-muted)" stroke-width="2" marker-end="url(#iframe11-arrow)">
<line x1="335" y1="181" x2="521" y2="181" stroke="var(--palette-teal)" stroke-width="2" marker-start="url(#iframe11-arrow)"/>
<line x1="355" y1="54" x2="355" y2="87" stroke="var(--palette-teal)"/>
<line x1="452" y1="76" x2="452" y2="108" stroke="var(--palette-teal)"/>
<line x1="461" y1="284" x2="461" y2="194"/>
<line x1="96" y1="453" x2="96" y2="407"/>
<line x1="96" y1="610" x2="96" y2="567"/>
<line x1="119" y1="347" x2="193" y2="347"/>
<line x1="217" y1="453" x2="217" y2="407"/>
<line x1="217" y1="610" x2="217" y2="567"/>
<line x1="240" y1="347" x2="315" y2="347"/>
<line x1="339" y1="453" x2="339" y2="407"/>
<line x1="339" y1="610" x2="339" y2="567"/>
<line x1="362" y1="347" x2="437" y2="347"/>
<line x1="461" y1="453" x2="461" y2="407"/>
<line x1="461" y1="610" x2="461" y2="567"/>
<line x1="33" y1="347" x2="71" y2="347"/>
<line x1="484" y1="347" x2="517" y2="347"/>
</g>
<g fill="currentColor">
<text x="415" y="26" text-anchor="middle" font-size="18"><tspan font-weight="bold" font-style="italic">ŷ</tspan><tspan font-size="12" dy="-7">(4)</tspan><tspan dy="7"> = P(</tspan><tspan font-weight="bold" font-style="italic">x</tspan><tspan font-size="12" dy="-7">(5)</tspan><tspan dy="7">|the students opened their)</tspan></text>
<text x="337" y="200" text-anchor="middle" font-size="16" font-weight="bold" fill="var(--palette-teal)">a</text>
<text x="510" y="200" text-anchor="middle" font-size="16" font-weight="bold" fill="var(--palette-teal)">zoo</text>
<text x="355" y="48" text-anchor="middle" font-size="16" font-style="italic" font-weight="bold" fill="var(--palette-teal)">books</text>
<text x="452" y="70" text-anchor="middle" font-size="16" font-style="italic" font-weight="bold" fill="var(--palette-teal)">laptops</text>
<text x="451" y="234" text-anchor="end" font-size="16">softmax</text>
<text x="96" y="320" text-anchor="middle" font-size="26" font-weight="bold">R</text>
<text x="96" y="355" text-anchor="middle" font-size="26" font-weight="bold">N</text>
<text x="96" y="390" text-anchor="middle" font-size="26" font-weight="bold">N</text>
<text x="92" y="282" text-anchor="end" font-size="20"><tspan font-weight="bold" font-style="italic">h</tspan><tspan font-size="13" dy="-8">(1)</tspan></text>
<text x="70" y="517" text-anchor="end" font-size="20"><tspan font-weight="bold" font-style="italic">e</tspan><tspan font-size="13" dy="-8">(1)</tspan></text>
<text x="96" y="644" text-anchor="middle" font-size="24" font-style="italic" font-weight="bold">the</text>
<text x="102" y="674" text-anchor="middle" font-size="20"><tspan font-weight="bold" font-style="italic">x</tspan><tspan font-size="13" dy="-8">(1)</tspan></text>
<text x="217" y="320" text-anchor="middle" font-size="26" font-weight="bold">R</text>
<text x="217" y="355" text-anchor="middle" font-size="26" font-weight="bold">N</text>
<text x="217" y="390" text-anchor="middle" font-size="26" font-weight="bold">N</text>
<text x="213" y="282" text-anchor="end" font-size="20"><tspan font-weight="bold" font-style="italic">h</tspan><tspan font-size="13" dy="-8">(2)</tspan></text>
<text x="191" y="517" text-anchor="end" font-size="20"><tspan font-weight="bold" font-style="italic">e</tspan><tspan font-size="13" dy="-8">(2)</tspan></text>
<text x="217" y="644" text-anchor="middle" font-size="24" font-style="italic" font-weight="bold">students</text>
<text x="223" y="674" text-anchor="middle" font-size="20"><tspan font-weight="bold" font-style="italic">x</tspan><tspan font-size="13" dy="-8">(2)</tspan></text>
<text x="339" y="320" text-anchor="middle" font-size="26" font-weight="bold">R</text>
<text x="339" y="355" text-anchor="middle" font-size="26" font-weight="bold">N</text>
<text x="339" y="390" text-anchor="middle" font-size="26" font-weight="bold">N</text>
<text x="335" y="282" text-anchor="end" font-size="20"><tspan font-weight="bold" font-style="italic">h</tspan><tspan font-size="13" dy="-8">(3)</tspan></text>
<text x="313" y="517" text-anchor="end" font-size="20"><tspan font-weight="bold" font-style="italic">e</tspan><tspan font-size="13" dy="-8">(3)</tspan></text>
<text x="339" y="644" text-anchor="middle" font-size="24" font-style="italic" font-weight="bold">opened</text>
<text x="345" y="674" text-anchor="middle" font-size="20"><tspan font-weight="bold" font-style="italic">x</tspan><tspan font-size="13" dy="-8">(3)</tspan></text>
<text x="461" y="320" text-anchor="middle" font-size="26" font-weight="bold">R</text>
<text x="461" y="355" text-anchor="middle" font-size="26" font-weight="bold">N</text>
<text x="461" y="390" text-anchor="middle" font-size="26" font-weight="bold">N</text>
<text x="457" y="282" text-anchor="end" font-size="20"><tspan font-weight="bold" font-style="italic">h</tspan><tspan font-size="13" dy="-8">(4)</tspan></text>
<text x="435" y="517" text-anchor="end" font-size="20"><tspan font-weight="bold" font-style="italic">e</tspan><tspan font-size="13" dy="-8">(4)</tspan></text>
<text x="461" y="644" text-anchor="middle" font-size="24" font-style="italic" font-weight="bold">their</text>
<text x="467" y="674" text-anchor="middle" font-size="20"><tspan font-weight="bold" font-style="italic">x</tspan><tspan font-size="13" dy="-8">(4)</tspan></text>
<text x="17" y="354" text-anchor="middle" font-size="20" font-weight="bold">…</text>
<text x="538" y="354" text-anchor="middle" font-size="20" font-weight="bold">…</text>
<text x="33" y="644" text-anchor="middle" font-size="20" font-weight="bold">…</text>
<text x="531" y="644" text-anchor="middle" font-size="20" font-weight="bold">…</text>
</g>
</svg>

Ogni blocco *RNN* può essere qualsiasi architettura RNN, principalmente è il modello transformer .
Qualsiasi $x^{(t)}$ è una rappresentazione vettoriale della sequenza di parole, l'output finale è un softmax su $|V|$ valori.

---
Il transformer è considerato oggi giorno come l'architettura di riferimento in molti domini NLP, ma è applicato anche in molti altri campi in cui c'è il bisogno di analizzare sequenze.

# LLM (Large language models)

Gli LLM fanno riferimento a modelli di linguaggio che sono allenati con un numero molto grande di parametri, anche miliardi. Di solito un numero più grande di parametri aumenta la qualità dell'LLM.

<svg viewBox="0 0 677 398" width="100%" style="max-width:677px;display:block;margin:1.5rem auto" role="img" aria-label="Classificazione dei language model per numero di parametri: Small LM sotto 1B, Medium LM tra 1B e 10B, Large LM tra 10B e 100B, Very Large LM oltre 100B, disegnati come cerchi di dimensione crescente">
<circle cx="75" cy="297" r="68" fill="var(--palette-orange)" fill-opacity="0.15" stroke="var(--palette-orange)" stroke-width="2"/>
<circle cx="165" cy="185" r="90" fill="var(--palette-orange)" fill-opacity="0.3" stroke="var(--palette-orange)" stroke-width="2"/>
<circle cx="345" cy="117" r="114" fill="var(--palette-red)" fill-opacity="0.25" stroke="var(--palette-red)" stroke-width="2"/>
<circle cx="535" cy="229" r="136" fill="var(--palette-red)" fill-opacity="0.6" stroke="var(--palette-red)" stroke-width="2"/>
<g fill="none" stroke="currentColor" stroke-width="2">
<path d="M313 320C282 273 194 273 143 297"/>
<path d="M313 320C275 250 309 246 229 250"/>
<path d="M313 320C316 267 330 239 345 231"/>
<path d="M313 320C330 267 371 226 401 230"/>
</g>
<path d="M213 396V363Q313 287 415 363V396Z" fill="var(--palette-blue)" fill-opacity="0.2" stroke="var(--palette-blue)" stroke-width="2"/>
<g fill="currentColor" text-anchor="middle">
<text x="75" y="286" font-size="23">Small LM</text>
<text x="75" y="314" font-size="12"># of params &lt;1B</text>
<text x="165" y="170" font-size="24">Medium LM</text>
<text x="165" y="208" font-size="12">1B &lt; # of params &lt;10B</text>
<text x="345" y="98" font-size="24">Large LM</text>
<text x="345" y="145" font-size="12">10B &lt; # of params &lt;100B</text>
<text x="535" y="206" font-size="24">Very Large LM</text>
<text x="535" y="263" font-size="12">100B &lt; # of params</text>
<text x="313" y="374" font-size="22">Parameters</text>
</g>
</svg>

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

<svg viewBox="0 0 680 602" width="100%" style="max-width:680px;display:block;margin:1.5rem auto" role="img" aria-label="Pipeline RAG: i documenti di riferimento vengono trasformati in embedding e salvati in un vector database; la query dell'utente viene trasformata in un query vector, confrontata con gli embedding per recuperare i context chunks, che insieme alla query formano l'augmented query data all'LLM per generare la risposta">
<defs><marker id="i20241221122522-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0 0L10 5L0 10z" style="fill:currentColor;fill:context-stroke"/></marker></defs>
<g transform="scale(1.15) translate(-182 -8)">
<g stroke-width="1.2">
<path d="M200 45V40H310V90H310" fill="none" stroke="var(--palette-purple)"/>
<path d="M195 50V45H305V95H305" fill="none" stroke="var(--palette-purple)"/>
<path d="M190 50H300V105Q272 95 245 105T190 105Z" fill="var(--palette-purple)" fill-opacity="0.2" stroke="var(--palette-purple)"/>
<polygon points="341,72 354,54 390,54 403,72 390,90 354,90" fill="var(--palette-teal)" fill-opacity="0.35" stroke="var(--palette-teal)"/>
<path d="M430 48V96A80 10 0 0 0 590 96V48" fill="var(--palette-muted)" fill-opacity="0.3" stroke="currentColor"/>
<ellipse cx="510" cy="48" rx="80" ry="10" fill="var(--palette-muted)" fill-opacity="0.3" stroke="currentColor"/>
<rect x="650" y="37" width="113" height="68" fill="var(--palette-purple)" fill-opacity="0.2" stroke="currentColor"/>
<rect x="190" y="153" width="117" height="44" rx="8" fill="var(--palette-blue)" fill-opacity="0.2" stroke="currentColor"/>
<polygon points="341,175 354,157 390,157 403,175 390,193 354,193" fill="var(--palette-teal)" fill-opacity="0.35" stroke="var(--palette-teal)"/>
<path d="M430 156L460 162V188L430 194Z" fill="var(--palette-muted)" fill-opacity="0.5" stroke="currentColor"/>
<rect x="480" y="140" width="112" height="70" fill="none" stroke="currentColor"/>
<rect x="647" y="155" width="118" height="43" rx="8" fill="var(--palette-purple)" fill-opacity="0.2" stroke="currentColor"/>
<rect x="413" y="254" width="149" height="132" rx="14" fill="var(--palette-orange)" fill-opacity="0.2" stroke="currentColor"/>
<polygon points="456,432 469,414 505,414 518,432 505,450 469,450" fill="var(--palette-teal)" fill-opacity="0.35" stroke="var(--palette-teal)"/>
<rect x="437" y="482" width="100" height="43" rx="8" fill="var(--palette-blue)" fill-opacity="0.2" stroke="currentColor"/>
</g>
<g fill="none" stroke="currentColor" stroke-width="1">
<path d="M260 40V15H510V38"/>
<path d="M312 72H339" marker-end="url(#i20241221122522-arrow)"/>
<path d="M404 72H428" marker-end="url(#i20241221122522-arrow)"/>
<path d="M590 70H650"/>
<path d="M707 105V155"/>
<path d="M307 175H339" marker-end="url(#i20241221122522-arrow)"/>
<path d="M404 175H428" marker-end="url(#i20241221122522-arrow)"/>
<path d="M461 175H478" marker-end="url(#i20241221122522-arrow)"/>
<path d="M592 175H622V70"/>
<path d="M248 197V320H411" marker-end="url(#i20241221122522-arrow)"/>
<path d="M707 198V320H564" marker-end="url(#i20241221122522-arrow)"/>
<path d="M487 386V412" marker-end="url(#i20241221122522-arrow)"/>
<path d="M487 451V480" marker-end="url(#i20241221122522-arrow)"/>
</g>
<g fill="currentColor">
<text x="245" y="75" text-anchor="middle" font-size="14">Reference</text>
<text x="245" y="93" text-anchor="middle" font-size="14">documents</text>
<text x="372" y="74" text-anchor="middle" font-size="15">LLM</text>
<text x="372" y="84" text-anchor="middle" font-size="7">embedding</text>
<text x="510" y="52" text-anchor="middle" font-size="9">embeddings</text>
<text x="510" y="80" text-anchor="middle" font-size="16">Vector database</text>
<text x="706" y="58" text-anchor="middle" font-size="12">retrieve context</text>
<text x="706" y="74" text-anchor="middle" font-size="12">from relevant</text>
<text x="706" y="90" text-anchor="middle" font-size="12">documents</text>
<text x="248" y="181" text-anchor="middle" font-size="16" font-weight="bold">User query</text>
<text x="372" y="177" text-anchor="middle" font-size="15">LLM</text>
<text x="372" y="187" text-anchor="middle" font-size="7">embedding</text>
<text x="445" y="173" text-anchor="middle" font-size="7">Query</text>
<text x="445" y="182" text-anchor="middle" font-size="7">vector</text>
<text x="536" y="156" text-anchor="middle" font-size="12">find relevant</text>
<text x="536" y="172" text-anchor="middle" font-size="12">documents by</text>
<text x="536" y="188" text-anchor="middle" font-size="12">comparing</text>
<text x="536" y="204" text-anchor="middle" font-size="12">embeddings</text>
<text x="706" y="173" text-anchor="middle" font-size="16">Context</text>
<text x="706" y="192" text-anchor="middle" font-size="16">chunks</text>
<text x="487" y="274" text-anchor="middle" font-size="15">Augmented</text>
<text x="487" y="292" text-anchor="middle" font-size="15">query <tspan font-size="10">e.g.</tspan></text>
<text x="427" y="306.0" text-anchor="start" font-size="11" font-family="monospace">...</text>
<text x="427" y="320.4" text-anchor="start" font-size="11" font-family="monospace">Answer the above,</text>
<text x="427" y="334.8" text-anchor="start" font-size="11" font-family="monospace">based on:</text>
<text x="427" y="349.2" text-anchor="start" font-size="11" font-family="monospace">&lt;chunk 1&gt;,</text>
<text x="427" y="363.6" text-anchor="start" font-size="11" font-family="monospace">&lt;chunk 2&gt;,</text>
<text x="427" y="378.0" text-anchor="start" font-size="11" font-family="monospace">&lt;chunk 3&gt;,</text>
<text x="487" y="434" text-anchor="middle" font-size="15">LLM</text>
<text x="487" y="444" text-anchor="middle" font-size="7">generation</text>
<text x="487" y="509" text-anchor="middle" font-size="16" font-weight="bold">Response</text>
</g>
</g>
</svg>

# Generative AI

La _Generative AI_ (GenAI) è una branca dell'intelligenza artificiale che crea contenuti digitali, come testo, immagini, video e musica. Sebbene spesso utilizzi modelli linguistici di grandi dimensioni (_LLM_, come ChatGPT), non si limita a questi. Il principio chiave è generalizzare i concetti degli LLM per lavorare con simboli diversi dai semplici elementi testuali, ad esempio unità di immagini, video o musica. L'avanzamento degli LLM ha portato a un boom della GenAI nei primi anni 2020, con applicazioni come chatbot (ChatGPT), sistemi testo-immagine (DALL-E) e testo-video (Sora).
