---
title: "Recurrent Neural Networks (RNN)"
description: "Modellazione di sequenze con le RNN: sequence modeling, NLP, architettura ricorrente con hidden state, training via BPTT, problemi di vanishing gradient e soluzione con le LSTM a porte di input/output/forget."
type: lecture
---

# Sequence modeling

I modelli Sequence sono modelli di machine learning che processano e/o restituiscono sequenze di dati (come per esempio liste ordinate di simboli o numeri), tenendo in conto le dipendenti sequenziali al proprio interno.

Per esempio, nel testo, l'ordine delle parole in una frase è molto importante, e anche se usano le stesse parole, la struttura di una frase scritta in un determinato modo può avere un significato molto differente rispetto ad un altra che usa le stesse parole
Per esempio "il gatto insegue il topo" contro "il topo insegue il gatto". Esempi di sequence modeling:

- **Time series** forecasting 
- **Speech** recognition 
- **DNA** sequence analysis 
- **Code** generation 
- **Music** generation/transcription 
- **Temporal** graph processing

# Natural Language Processing (NLP)

NLP studia l'interazione tra i computer e il linguaggio umano, in particolare come un programma analizza grandi quantità di nati in linguaggio naturale.

Lo scopo del computer è "capire" i contenuti di documenti, incluse le regole del linguaggio, ed estrarre informazioni utili.

# Recurrent neural networks (RNN)

è un tipo di rete neurale artificiale progettata per trattare sequenze di dati, come testo, audio, o serie temporali. Le RNN daranno come risultato una "lista" di elementi, e questi elementi vengono creati uno ad uno.
A differenza delle reti neurali tradizionali (feedforward), che trattano i dati come un input singolo per volta (e quindi perdono contesto delle generazioni precedenti), le **RNN** hanno la capacità di "memorizzare" informazioni provenienti dai passaggi precedenti attraverso **connessioni ricorrenti**. Questo le rende particolarmente utili per compiti in cui l'ordine o la dipendenza temporale degli input è importante.
Per esempio, in una risposta di 3 elementi, per poter predirre il secondo (e terzo) elemento, dobbiamo sapere quali sono stati gli elementi precedentemente generati.

L'idea dietro il RNN è di tenere uno stato interno chiamato "hidden representation/state" che è aggiornato ogni volta che un nuovo input deve essere computato. In questo modo si tiene una "storia" dei passati input.

Si può simulare una RNN tramite l'unrolling, cioè applicare esattamente quello che farebbe una RNN, ma usando tante MLP, il cui output viene usato come input nella prossima fase

```mermaid
flowchart BT
  x["x̄ₜ<br/>ENCODED WORD"] -- "W<sub>xh</sub>" --> h["h̄ₜ<br/>HIDDEN REPRESENTATION"]
  h -- "W<sub>hy</sub>" --> y["ȳₜ<br/>PREDICTED WORD LIKELIHOODS"]
  h -- "W<sub>hh</sub>" --> h
```

unrolling ⇒

```mermaid
block-beta
  columns 7
  y1["ȳ₁"] space y2["ȳ₂"] space y3["ȳ₃"] space y4["ȳ₄"]
  space:7
  h1["h̄₁"] space h2["h̄₂"] space h3["h̄₃"] space h4["h̄₄"]
  space:7
  x1["x̄₁<br/>the"] space x2["x̄₂<br/>cat"] space x3["x̄₃<br/>chased"] space x4["x̄₄<br/>the"]
  h1 -- "W<sub>hy</sub>" --> y1
  h2 -- "W<sub>hy</sub>" --> y2
  h3 -- "W<sub>hy</sub>" --> y3
  h4 -- "W<sub>hy</sub>" --> y4
  h1 -- "W<sub>hh</sub>" --> h2
  h2 -- "W<sub>hh</sub>" --> h3
  h3 -- "W<sub>hh</sub>" --> h4
  x1 -- "W<sub>xh</sub>" --> h1
  x2 -- "W<sub>xh</sub>" --> h2
  x3 -- "W<sub>xh</sub>" --> h3
  x4 -- "W<sub>xh</sub>" --> h4
```

**many-to-one**

```mermaid
block-beta
  columns 5
  space:4 o3["&nbsp;&nbsp;&nbsp;&nbsp;"]
  space:5
  h1(["&nbsp;&nbsp;&nbsp;&nbsp;"]) space h2(["&nbsp;&nbsp;&nbsp;&nbsp;"]) space h3(["&nbsp;&nbsp;&nbsp;&nbsp;"])
  space:5
  i1["&nbsp;&nbsp;&nbsp;&nbsp;"] space i2["&nbsp;&nbsp;&nbsp;&nbsp;"] space i3["&nbsp;&nbsp;&nbsp;&nbsp;"]
  i1 --> h1
  i2 --> h2
  i3 --> h3
  h1 --> h2
  h2 --> h3
  h3 --> o3
```

**one-to-many**

```mermaid
block-beta
  columns 5
  o1["&nbsp;&nbsp;&nbsp;&nbsp;"] space o2["&nbsp;&nbsp;&nbsp;&nbsp;"] space o3["&nbsp;&nbsp;&nbsp;&nbsp;"]
  space:5
  h1(["&nbsp;&nbsp;&nbsp;&nbsp;"]) space h2(["&nbsp;&nbsp;&nbsp;&nbsp;"]) space h3(["&nbsp;&nbsp;&nbsp;&nbsp;"])
  space:5
  i1["&nbsp;&nbsp;&nbsp;&nbsp;"] space:4
  i1 --> h1
  h1 --> h2
  h2 --> h3
  h1 --> o1
  h2 --> o2
  h3 --> o3
```

**many-to-many**

```mermaid
block-beta
  columns 5
  o1["&nbsp;&nbsp;&nbsp;&nbsp;"] space o2["&nbsp;&nbsp;&nbsp;&nbsp;"] space o3["&nbsp;&nbsp;&nbsp;&nbsp;"]
  space:5
  h1(["&nbsp;&nbsp;&nbsp;&nbsp;"]) space h2(["&nbsp;&nbsp;&nbsp;&nbsp;"]) space h3(["&nbsp;&nbsp;&nbsp;&nbsp;"])
  space:5
  i1["&nbsp;&nbsp;&nbsp;&nbsp;"] space i2["&nbsp;&nbsp;&nbsp;&nbsp;"] space i3["&nbsp;&nbsp;&nbsp;&nbsp;"]
  i1 --> h1
  i2 --> h2
  i3 --> h3
  h1 --> h2
  h2 --> h3
  h1 --> o1
  h2 --> o2
  h3 --> o3
```

**many-to-many**

```mermaid
block-beta
  columns 9
  space:4 o3["&nbsp;&nbsp;&nbsp;&nbsp;"] space o4["&nbsp;&nbsp;&nbsp;&nbsp;"] space o5["&nbsp;&nbsp;&nbsp;&nbsp;"]
  space:9
  h1(["&nbsp;&nbsp;&nbsp;&nbsp;"]) space h2(["&nbsp;&nbsp;&nbsp;&nbsp;"]) space h3(["&nbsp;&nbsp;&nbsp;&nbsp;"]) space h4(["&nbsp;&nbsp;&nbsp;&nbsp;"]) space h5(["&nbsp;&nbsp;&nbsp;&nbsp;"])
  space:9
  i1["&nbsp;&nbsp;&nbsp;&nbsp;"] space i2["&nbsp;&nbsp;&nbsp;&nbsp;"] space i3["&nbsp;&nbsp;&nbsp;&nbsp;"] space:3
  i1 --> h1
  i2 --> h2
  i3 --> h3
  h1 --> h2
  h2 --> h3
  h3 --> h4
  h4 --> h5
  h3 --> o3
  h4 --> o4
  h5 --> o5
```

**many-to-one**, e.g., *text classification, sentiment classification*

**one-to-many**, e.g., *image captioning* (from an image to a sequence of words)

**many-to-many**, e.g., *machine translation, question answering*

Il training di un RNN unrolled è simile a quello di una normale rete neurale.
- la funzione loss è applicata all'ultima rete
- si usa una variante di gradient descent che usa BPTT (backpropagation through time) che tiene conto che l'input è una sequenza e che i parametri sono condivisi fra i vari strati dell'RNN unrolled

```mermaid
block-beta
  columns 9
  y1["ȳ<sub>1</sub>"] space y2["ȳ<sub>2</sub>"] space y3["ȳ<sub>3</sub>"] space space space yT["ȳ<sub>T</sub>"]
  space:9
  K1["h̄<sub>1</sub><sup>(K)</sup>"] space K2["h̄<sub>2</sub><sup>(K)</sup>"] space K3["h̄<sub>3</sub><sup>(K)</sup>"] space Kd["⋯"] space KT["h̄<sub>T</sub><sup>(K)</sup>"]
  space:9
  v1["⋮"] space v2["⋮"] space v3["⋮"] space space space vT["⋮"]
  space:9
  m1["h̄<sub>1</sub><sup>(2)</sup>"] space m2["h̄<sub>2</sub><sup>(2)</sup>"] space m3["h̄<sub>3</sub><sup>(2)</sup>"] space md["⋯"] space mT["h̄<sub>T</sub><sup>(2)</sup>"]
  space:9
  a1["h̄<sub>1</sub><sup>(1)</sup>"] space a2["h̄<sub>2</sub><sup>(1)</sup>"] space a3["h̄<sub>3</sub><sup>(1)</sup>"] space ad["⋯"] space aT["h̄<sub>T</sub><sup>(1)</sup>"]
  space:9
  x1["x̄<sub>1</sub>"] space x2["x̄<sub>2</sub>"] space x3["x̄<sub>3</sub>"] space space space xT["x̄<sub>T</sub>"]
  K1 --> y1
  v1 --> K1
  m1 --> v1
  a1 --> m1
  x1 --> a1
  K2 --> y2
  v2 --> K2
  m2 --> v2
  a2 --> m2
  x2 --> a2
  K3 --> y3
  v3 --> K3
  m3 --> v3
  a3 --> m3
  x3 --> a3
  KT --> yT
  vT --> KT
  mT --> vT
  aT --> mT
  xT --> aT
  K1 --> K2
  K2 --> K3
  K3 --> Kd
  Kd --> KT
  m1 --> m2
  m2 --> m3
  m3 --> md
  md --> mT
  a1 --> a2
  a2 --> a3
  a3 --> ad
  ad --> aT
```

RNN layers can be *stacked*, so as to make the RNN *deeper*.

The only difference w.r.t. single-layer RNN is that *the first layer only depends on the input*, while the internal layers depend on the previous layers.

Formally:

$$
\begin{aligned}
\bar h_t^{(1)} &= g\left(W_{xh}\bar x_t + W_{hh}^{(1)}\bar h_{t-1}^{(1)}\right), &&\forall t \in [1..T] \\
\bar h_t^{(k)} &= g\left(W_{hh}^{(k)}\left[\bar h_t^{(k-1)}, \bar h_{t-1}^{(k)}\right]\right), &&\forall k \in [2..K],\, t \in [1..T] \\
\bar y_t &= W_{hy}\bar h_t^{(K)}, &&\forall t \in [1..T]
\end{aligned}
$$

The resulting unrolled deep RNN is a *bidimensional* computational graph. It can still be trained via *BPTT*.

Le RNN più performanti sono di solito multilayer, e si è visto che 2 strati sono molto meglio di 1 strato, ma 3 è minimamente meglio di 2, e che per migliorare le RNN più profonde si deve usare le "residual connections" 

![[Pasted image 20241220171316 figura.png]]

A.k.a. RNN with *skip-connections* or *residual networks* (ResNet).

*Idea*: add the output of the previous layer directly to the result of the next layer:

$$
\begin{aligned}
\bar h_t^{(1)} &= g\left(W_{xh}\bar x_t + W_{hh}^{(1)}\bar h_{t-1}^{(1)}\right) + \bar x_t, &&\forall t \in [1..T] \\
\bar h_t^{(k)} &= g\left(W_{hh}^{(k)}\left[\bar h_t^{(k-1)}, \bar h_{t-1}^{(k)}\right]\right) + \bar h_t^{k-1}, &&\forall k \in [2..K],\, t \in [1..T]
\end{aligned}
$$

This trick is beneficial for *vanishing gradients* (due to the use of *summation*).

Oppure potrebbe essere utile "andare in avanti" nella sequenza per capire meglio la semantica della sequenza (in confronto a guardare solo indietro).

é formata da due RNN indipendenti, una processa l'input normalmente, mentre l'altra processa l'input in ordine inverso. Il risultato finale è la concatenazione dei due 

```mermaid
block-beta
  columns 6
  y1["y⁽ᵗ⁻¹⁾"]:2 y2["y⁽ᵗ⁾"]:2 y3["y⁽ᵗ⁺¹⁾"]:2
  space:6
  L1["L⁽ᵗ⁻¹⁾"]:2 L2["L⁽ᵗ⁾"]:2 L3["L⁽ᵗ⁺¹⁾"]:2
  space:6
  o1["o⁽ᵗ⁻¹⁾"]:2 o2["o⁽ᵗ⁾"]:2 o3["o⁽ᵗ⁺¹⁾"]:2
  space:6
  g1["g⁽ᵗ⁻¹⁾"] space g2["g⁽ᵗ⁾"] space g3["g⁽ᵗ⁺¹⁾"] space
  space:6
  space h1["h⁽ᵗ⁻¹⁾"] space h2["h⁽ᵗ⁾"] space h3["h⁽ᵗ⁺¹⁾"]
  space:6
  x1["x⁽ᵗ⁻¹⁾"]:2 x2["x⁽ᵗ⁾"]:2 x3["x⁽ᵗ⁺¹⁾"]:2
  y1 --> L1
  y2 --> L2
  y3 --> L3
  o1 --> L1
  o2 --> L2
  o3 --> L3
  g1 --> o1
  g2 --> o2
  g3 --> o3
  h1 --> o1
  h2 --> o2
  h3 --> o3
  h1 --> h2
  h2 --> h3
  g3 --> g2
  g2 --> g1
  x1 --> h1
  x2 --> h2
  x3 --> h3
  x1 --> g1
  x2 --> g2
  x3 --> g3
```

---
Il problema di questo approccio di RNN è che funziona solo per sequenze corte, principalmente per colpa di:

- Vanishing gradients, più è lunga la sequenza, più è il numero di unrolled RNN, e dato che i gradienti sono calcolti ad ogni step della catena di RNN, diventano man mano più piccoli strato dopo strato, e quindi i primi strati hanno meno effetto sull'output. 
- Capacità di rappresentazione limitata, è un problema intrinseco del architettura del modello, dato che l'hidden state è unico ed esso viene riscritto continuamente, rende l'architettura troppo semplice, e non capace di trattare sequenze più lunghe

# Long Short-Term Memory LSTM
è un tipo particolare di RNN, ma ha la differenza che ogni cella individuale del LSTM non è una semplice rete neurale, ma può essere molto più sofisticata. Sono state ideate per risolvere i problemi di Vanishing gradient. Risolve ciò aggiungendo un nuovo elemento, la short term memory. Una unità di LSTM ricorda valori su intervalli di tempo arbitrari, e le porte di ogni unità decidono quale informazioni "dimenticare"

Una singola unità di un LSTM è formata da 3 porte:
- Input gate
- Output gate, decide quali informazioni la cella corrente deve passare alla cella successiva.
- Forget gate, decide quale informazione da rimuovere dalla memoria, con un valore (arrotondato) a 0 dice che quell'informazione va dimenticata, mentre un valore arrotondato a 1 dice di mantenerla.

![[Pasted image 20241220172802.png]]
