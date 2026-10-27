---
title: "Seq2Seq, Encoder-Decoder e Attention"
description: "Architettura sequence-to-sequence con encoder-decoder RNN per traduzione automatica e generazione; meccanismo di attention per superare il bottleneck informativo; architettura transformer con multi-head self-attention."
type: lecture
---
# Seq2Seq

Il Sequence to Sequence modeling è il task che mappa una sequenza in input, ad una sequenza in output, senza alcuna assunzione sulla lunghezza delle due sequenze. 
è molto usata in problemi NLP: traduzione, generazione codice, riassunto di testo, risposte a domande. 
Ma viene usato anche in: trascrizione audio/video, peptide-binding protein prediction.

# Architettura encoder-decoder

è un esempio di architettura per implementare seq2seq, suddivisa in due parti principali:
- **Encoder** è una RNN che codifica la sequenza in input in un vettore numerico che rappresenta una versione compressa del dato in input. Il modello usato nell'encoder ha il compito di imparare come comprimere i dati in input in un "latent space", che è uno spazio con dimensionalità minore dell'input che raccoglie le feature "essenziali" dei dati in input. è importante specificare che il vettore in cui è stato convertita la sequenza in input è di dimensione *FISSA*, il che potrebbe creare problemi dato che è impossibile salvare tutte le informazioni necessarie in un dato che è potenzialmente di dimensione minore rispetto all'input.
- **Decoder** è una RNN che decodifica il vettore codificato in una sequenza di output

<svg viewBox="0 0 720 336" width="100%" style="max-width:720px;display:block;margin:1.5rem auto" role="img" aria-label="Architettura encoder-decoder: tre RNN dell'encoder leggono x₁, x₂, x₃ e producono l'encoder vector, da cui due RNN del decoder generano y₁ e y₂">
<defs><marker id="i20241221101438-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0 0L10 5L0 10z" style="fill:currentColor;fill:context-stroke"/></marker></defs>
<g stroke="currentColor" stroke-width="1.2">
<rect x="49" y="175" width="62" height="50" rx="8" fill="var(--palette-green)" fill-opacity="0.3"/>
<rect x="6" y="302" width="60" height="28" rx="8" fill="var(--palette-green)" fill-opacity="0.55"/>
<rect x="181" y="175" width="62" height="50" rx="8" fill="var(--palette-green)" fill-opacity="0.3"/>
<rect x="138" y="302" width="60" height="28" rx="8" fill="var(--palette-green)" fill-opacity="0.55"/>
<rect x="315" y="175" width="62" height="50" rx="8" fill="var(--palette-green)" fill-opacity="0.3"/>
<rect x="272" y="302" width="60" height="28" rx="8" fill="var(--palette-green)" fill-opacity="0.55"/>
<rect x="426" y="120" width="28" height="88" rx="14" fill="none"/>
<rect x="505" y="95" width="62" height="50" rx="8" fill="var(--palette-red)" fill-opacity="0.25"/>
<rect x="506" y="28" width="60" height="28" rx="8" fill="var(--palette-red)" fill-opacity="0.55"/>
<rect x="639" y="95" width="62" height="50" rx="8" fill="var(--palette-red)" fill-opacity="0.25"/>
<rect x="640" y="28" width="60" height="28" rx="8" fill="var(--palette-red)" fill-opacity="0.55"/>
</g>
<g stroke="currentColor" stroke-width="1.4" fill="none" marker-end="url(#i20241221101438-arrow)">
<path d="M24 302V216H48"/>
<path d="M0 200H48"/>
<path d="M156 302V216H180"/>
<path d="M111 200H180"/>
<path d="M290 302V216H314"/>
<path d="M243 200H314"/>
<path d="M377 190H425"/>
<path d="M454 134H504"/>
<path d="M536 95V57"/>
<path d="M670 95V57"/>
<path d="M567 120H638"/>
</g>
<g fill="currentColor">
<text x="80" y="205" text-anchor="middle" font-size="14">RNN</text>
<text x="32" y="290" font-size="17" font-style="italic">x<tspan font-size="11" dy="4">1</tspan></text>
<text x="18" y="192" font-size="15" font-style="italic">h<tspan font-size="10" dy="4">1</tspan></text>
<text x="212" y="205" text-anchor="middle" font-size="14">RNN</text>
<text x="164" y="290" font-size="17" font-style="italic">x<tspan font-size="11" dy="4">2</tspan></text>
<text x="154" y="192" font-size="15" font-style="italic">h<tspan font-size="10" dy="4">2</tspan></text>
<text x="346" y="205" text-anchor="middle" font-size="14">RNN</text>
<text x="298" y="290" font-size="17" font-style="italic">x<tspan font-size="11" dy="4">3</tspan></text>
<text x="288" y="192" font-size="15" font-style="italic">h<tspan font-size="10" dy="4">3</tspan></text>
<text transform="translate(437 164) rotate(90)" text-anchor="middle" font-size="10">Encoder Vector</text>
<text x="536" y="125" text-anchor="middle" font-size="14">RNN</text>
<text x="528" y="18" font-size="17" font-style="italic">y<tspan font-size="11" dy="4">1</tspan></text>
<text x="670" y="125" text-anchor="middle" font-size="14">RNN</text>
<text x="662" y="18" font-size="17" font-style="italic">y<tspan font-size="11" dy="4">2</tspan></text>
<text x="212" y="84" text-anchor="middle" font-size="26">Encoder</text>
<text x="600" y="262" text-anchor="middle" font-size="26">Decoder</text>
</g>
</svg>

Come si può notare, per poter creare un training set, è necessario fornire sia input che un output per ogni esempio del dataset. Nel vocabolario gestito dalle RNN viene aggiunto anche due token speciali, uno che rappresenta l'inizio e uno che rappresenta la fine della sequenza.

Di solito dato un training set, l'allenamento del modello funziona con il dare l'input all'RNN encoder, per poi permettere al decoder di predirre la sequenza in output tramite l'output dell'encoder, per poi comparare il risultato con il valore effettivo per quella coppia di valori tramite una loss function, con lo scopo di minimizzare la differenza.

---
L'inferenza può esser vista come esser fatta dalla RNN decoder. 
Ad ogni step, il decoder da in output una distribuzione di probabilità di un set di elementi (parte del vocabolario).
Possiamo scegliere tra questi elementi in vari modi, con la soluzione "greedy" possiamo semplicemente scegliere l'elemento con la più alta probabilità, ma questa soluzione rende il modello troppo selettivo.

Un alternativa è il **Beam search**:
Seleziona $k \geq 1$  intero che rappresenterà il numero di sottosequenze che verranno mantenute ad ogni passaggio.

Vediamo il compito di scegliere la prossima sequenza come un albero, dove la nostra sequenza finale sarà rappresentata da un cammino dalla sorgente alla foglia. La sorgente avrà il simbolo di inizio, e le foglie conterrano il token di fine. 

Nel primo step dell'algoritmo dobbiamo scegliere, fra tutti i possibili token della prossima sequenza, i migliori $k$.
Una volta scelti questi k simboli, scartiamo tutti gli altri dall'albero e continuiamo la generazione di sequenza solo sui $k$ simboli scelti. 

Nelle prossime iterazioni continuiamo a fare lo stesso su tutte le sottosequenze ancora "aperte". Una volta che tutte le sottosequenze raggiungono la fine (hanno generato il token di fine), abbiamo le nostre sequenze candidate. 

<svg viewBox="0 0 620 466" width="100%" style="max-width:620px;display:block;margin:1.5rem auto" role="img" aria-label="Albero della beam search con log-probabilità sugli archi e punteggi cumulativi sui nodi; le ipotesi scartate sono barrate con una X rossa">
<defs><marker id="i20241221103612-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0 0L10 5L0 10z" style="fill:currentColor;fill:context-stroke"/></marker></defs>
<g stroke="currentColor" stroke-width="1.3" fill="none">
<rect x="7" y="275.0" width="46" height="30"/>
<rect x="171" y="193.0" width="46" height="30"/>
<line x1="165" y1="189.0" x2="223" y2="189.0"/>
<rect x="171" y="275.0" width="46" height="30"/>
<line x1="165" y1="271.0" x2="223" y2="271.0"/>
<rect x="171" y="357.0" width="46" height="30"/>
<line x1="165" y1="353.0" x2="223" y2="353.0"/>
<rect x="364" y="25.0" width="46" height="30"/>
<line x1="358" y1="21.0" x2="416" y2="21.0"/>
<rect x="364" y="110.0" width="46" height="30"/>
<line x1="358" y1="106.0" x2="416" y2="106.0"/>
<rect x="364" y="190.0" width="46" height="30"/>
<line x1="358" y1="186.0" x2="416" y2="186.0"/>
<rect x="364" y="270.0" width="46" height="30"/>
<line x1="358" y1="266.0" x2="416" y2="266.0"/>
<rect x="364" y="350.0" width="46" height="30"/>
<line x1="358" y1="346.0" x2="416" y2="346.0"/>
<rect x="364" y="430.0" width="46" height="30"/>
<line x1="358" y1="426.0" x2="416" y2="426.0"/>
<rect x="554" y="110.0" width="46" height="30"/>
<line x1="548" y1="106.0" x2="606" y2="106.0"/>
<rect x="554" y="350.0" width="46" height="30"/>
<line x1="548" y1="346.0" x2="606" y2="346.0"/>
</g>
<g stroke="currentColor" stroke-width="1.2" marker-end="url(#i20241221103612-arrow)">
<line x1="53" y1="290" x2="170" y2="208"/>
<line x1="53" y1="290" x2="170" y2="290"/>
<line x1="53" y1="290" x2="170" y2="372"/>
<line x1="217" y1="208" x2="363" y2="40"/>
<line x1="217" y1="208" x2="363" y2="125"/>
<line x1="217" y1="208" x2="363" y2="205"/>
<line x1="217" y1="290" x2="363" y2="285"/>
<line x1="217" y1="290" x2="363" y2="365"/>
<line x1="217" y1="290" x2="363" y2="445"/>
<line x1="410" y1="125" x2="553" y2="125"/>
<line x1="410" y1="365" x2="553" y2="365"/>
</g>
<g fill="currentColor" text-anchor="middle">
<text x="30" y="296" font-size="16">&lt;s&gt;</text>
<text x="194" y="214" font-size="16">“a”</text>
<text x="194" y="185.0" font-size="17">-1.05</text>
<text x="194" y="296" font-size="16">“b”</text>
<text x="194" y="267.0" font-size="17">-0.92</text>
<text x="194" y="378" font-size="16">&lt;/s&gt;</text>
<text x="194" y="349.0" font-size="17">-1.39</text>
<text x="387" y="46" font-size="16">“a”</text>
<text x="387" y="17.0" font-size="17">-2.95</text>
<text x="387" y="131" font-size="16">“b”</text>
<text x="387" y="102.0" font-size="17">-1.27</text>
<text x="387" y="211" font-size="16">&lt;/s&gt;</text>
<text x="387" y="182.0" font-size="17">-4.05</text>
<text x="387" y="291" font-size="16">“a”</text>
<text x="387" y="262.0" font-size="17">-1.84</text>
<text x="387" y="371" font-size="16">“b”</text>
<text x="387" y="342.0" font-size="17">-1.61</text>
<text x="387" y="451" font-size="16">&lt;/s&gt;</text>
<text x="387" y="422.0" font-size="17">-3.22</text>
<text x="577" y="131" font-size="16">&lt;/s&gt;</text>
<text x="577" y="102.0" font-size="17">-1.27</text>
<text x="577" y="371" font-size="16">&lt;/s&gt;</text>
<text x="577" y="342.0" font-size="17">-1.61</text>
<text x="92" y="222" font-size="17">-1.05</text>
<text x="116" y="280" font-size="17">-0.92</text>
<text x="90" y="354" font-size="17">-1.39</text>
<text x="287" y="80" font-size="17">-1.90</text>
<text x="332" y="120" font-size="17">-0.22</text>
<text x="320" y="196" font-size="17">-3.00</text>
<text x="310" y="272" font-size="17">-0.92</text>
<text x="304" y="316" font-size="17">-0.69</text>
<text x="290" y="416" font-size="17">-2.30</text>
<text x="479" y="110" font-size="17">0</text>
<text x="479" y="350" font-size="17">0</text>
</g>
<g stroke="var(--palette-red)" stroke-width="3.5" stroke-linecap="round" fill="none">
<path d="M180 359L208 385M208 359L180 385"/>
<path d="M373 27L401 53M401 27L373 53"/>
<path d="M373 192L401 218M401 192L373 218"/>
<path d="M373 272L401 298M401 272L373 298"/>
<path d="M373 432L401 458M401 432L373 458"/>
</g>
</svg>

---
Nei problemi di NMT (Neural Machine Translation), spesso si usa un architettura encoder-decoder. Negli ultimi anni si sta rimpiazzando l'uso di RNN al suo interno per l'architettura *Transformer*

# Attention

Come detto in precedenza, l'encoder *comprime* e codifica la sequenza in input in un vettore numerico *di dimensione fissa*. La compressione a dimensione fissa non può mantenere tutte le informazioni dell'input originale, e quindi si comporta come un *information bottleneck* facendo perdere informazioni utili nell'input.

Per mitigare ciò si è creato un una nuova tecnica chiamata *Attention*, dove ogni step del decoder può "guardare" direttamente le diverse parti della rappresentazione dell'input durante i vari stati della fase di encoding, assegnando pesi diversi ad ogni parte per modificarne l'influenza, permettendo l'uso di informazioni "meno compresse" durante la fase di decoding.

<svg viewBox="0 0 680 250" width="100%" style="max-width:680px;display:block;margin:1.5rem auto" role="img" aria-label="Attenzione in un seq2seq: lo stato del decoder alla parola hit viene confrontato con ogni stato dell'encoder della frase il a m' entarté, producendo un punteggio per ciascuno">
<defs><marker id="i20241221104954-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0 0L10 5L0 10z" style="fill:currentColor;fill:context-stroke"/></marker></defs>
<g stroke="var(--palette-muted)" stroke-width="1.3" marker-end="url(#i20241221104954-arrow)">
<line x1="98" y1="172" x2="98" y2="130"/>
<line x1="107" y1="100" x2="133" y2="100"/>
<line x1="143" y1="172" x2="143" y2="130"/>
<line x1="152" y1="100" x2="177" y2="100"/>
<line x1="187" y1="172" x2="187" y2="130"/>
<line x1="196" y1="100" x2="222" y2="100"/>
<line x1="232" y1="172" x2="232" y2="130"/>
<line x1="241" y1="100" x2="318" y2="100"/>
<line x1="328" y1="172" x2="328" y2="130"/>
<line x1="337" y1="100" x2="363" y2="100"/>
<line x1="373" y1="172" x2="373" y2="130"/>
<line x1="382" y1="100" x2="408" y2="100"/>
<line x1="418" y1="172" x2="418" y2="130"/>
<line x1="427" y1="100" x2="453" y2="100"/>
<line x1="463" y1="172" x2="463" y2="130"/>
<line x1="472" y1="100" x2="498" y2="100"/>
<line x1="508" y1="172" x2="508" y2="130"/>
<line x1="517" y1="100" x2="543" y2="100"/>
<line x1="553" y1="172" x2="553" y2="130"/>
<line x1="562" y1="100" x2="588" y2="100"/>
<line x1="598" y1="172" x2="598" y2="130"/>
<line x1="98" y1="73" x2="98" y2="24"/>
<line x1="418" y1="73" x2="102" y2="21"/>
<line x1="143" y1="73" x2="143" y2="24"/>
<line x1="418" y1="73" x2="147" y2="21"/>
<line x1="187" y1="73" x2="187" y2="24"/>
<line x1="418" y1="73" x2="191" y2="21"/>
<line x1="232" y1="73" x2="232" y2="24"/>
<line x1="418" y1="73" x2="236" y2="21"/>
</g>
<g stroke="var(--palette-red)" fill="var(--palette-red)"><rect x="89" y="73" width="18" height="55" rx="4" fill-opacity="0.12"/><circle cx="98" cy="83" r="3.5" fill-opacity="0.8"/><circle cx="98" cy="95" r="3.5" fill-opacity="0.8"/><circle cx="98" cy="107" r="3.5" fill-opacity="0.8"/><circle cx="98" cy="119" r="3.5" fill-opacity="0.8"/></g>
<g stroke="var(--palette-red)" fill="var(--palette-red)"><rect x="134" y="73" width="18" height="55" rx="4" fill-opacity="0.12"/><circle cx="143" cy="83" r="3.5" fill-opacity="0.8"/><circle cx="143" cy="95" r="3.5" fill-opacity="0.8"/><circle cx="143" cy="107" r="3.5" fill-opacity="0.8"/><circle cx="143" cy="119" r="3.5" fill-opacity="0.8"/></g>
<g stroke="var(--palette-red)" fill="var(--palette-red)"><rect x="178" y="73" width="18" height="55" rx="4" fill-opacity="0.12"/><circle cx="187" cy="83" r="3.5" fill-opacity="0.8"/><circle cx="187" cy="95" r="3.5" fill-opacity="0.8"/><circle cx="187" cy="107" r="3.5" fill-opacity="0.8"/><circle cx="187" cy="119" r="3.5" fill-opacity="0.8"/></g>
<g stroke="var(--palette-red)" fill="var(--palette-red)"><rect x="223" y="73" width="18" height="55" rx="4" fill-opacity="0.12"/><circle cx="232" cy="83" r="3.5" fill-opacity="0.8"/><circle cx="232" cy="95" r="3.5" fill-opacity="0.8"/><circle cx="232" cy="107" r="3.5" fill-opacity="0.8"/><circle cx="232" cy="119" r="3.5" fill-opacity="0.8"/></g>
<g stroke="var(--palette-green)" fill="var(--palette-green)"><rect x="319" y="73" width="18" height="55" rx="4" fill-opacity="0.12"/><circle cx="328" cy="83" r="3.5" fill-opacity="0.8"/><circle cx="328" cy="95" r="3.5" fill-opacity="0.8"/><circle cx="328" cy="107" r="3.5" fill-opacity="0.8"/><circle cx="328" cy="119" r="3.5" fill-opacity="0.8"/></g>
<g stroke="var(--palette-green)" fill="var(--palette-green)"><rect x="364" y="73" width="18" height="55" rx="4" fill-opacity="0.12"/><circle cx="373" cy="83" r="3.5" fill-opacity="0.8"/><circle cx="373" cy="95" r="3.5" fill-opacity="0.8"/><circle cx="373" cy="107" r="3.5" fill-opacity="0.8"/><circle cx="373" cy="119" r="3.5" fill-opacity="0.8"/></g>
<g stroke="var(--palette-green)" fill="var(--palette-green)"><rect x="409" y="73" width="18" height="55" rx="4" fill-opacity="0.12"/><circle cx="418" cy="83" r="3.5" fill-opacity="0.8"/><circle cx="418" cy="95" r="3.5" fill-opacity="0.8"/><circle cx="418" cy="107" r="3.5" fill-opacity="0.8"/><circle cx="418" cy="119" r="3.5" fill-opacity="0.8"/></g>
<g stroke="var(--palette-green)" fill="var(--palette-green)"><rect x="454" y="73" width="18" height="55" rx="4" fill-opacity="0.12"/><circle cx="463" cy="83" r="3.5" fill-opacity="0.8"/><circle cx="463" cy="95" r="3.5" fill-opacity="0.8"/><circle cx="463" cy="107" r="3.5" fill-opacity="0.8"/><circle cx="463" cy="119" r="3.5" fill-opacity="0.8"/></g>
<g stroke="var(--palette-green)" fill="var(--palette-green)"><rect x="499" y="73" width="18" height="55" rx="4" fill-opacity="0.12"/><circle cx="508" cy="83" r="3.5" fill-opacity="0.8"/><circle cx="508" cy="95" r="3.5" fill-opacity="0.8"/><circle cx="508" cy="107" r="3.5" fill-opacity="0.8"/><circle cx="508" cy="119" r="3.5" fill-opacity="0.8"/></g>
<g stroke="var(--palette-green)" fill="var(--palette-green)"><rect x="544" y="73" width="18" height="55" rx="4" fill-opacity="0.12"/><circle cx="553" cy="83" r="3.5" fill-opacity="0.8"/><circle cx="553" cy="95" r="3.5" fill-opacity="0.8"/><circle cx="553" cy="107" r="3.5" fill-opacity="0.8"/><circle cx="553" cy="119" r="3.5" fill-opacity="0.8"/></g>
<g stroke="var(--palette-green)" fill="var(--palette-green)"><rect x="589" y="73" width="18" height="55" rx="4" fill-opacity="0.12"/><circle cx="598" cy="83" r="3.5" fill-opacity="0.8"/><circle cx="598" cy="95" r="3.5" fill-opacity="0.8"/><circle cx="598" cy="107" r="3.5" fill-opacity="0.8"/><circle cx="598" cy="119" r="3.5" fill-opacity="0.8"/></g>
<circle cx="98" cy="18" r="4.5" fill="var(--palette-blue)" fill-opacity="0.3" stroke="var(--palette-blue)"/>
<circle cx="143" cy="18" r="4.5" fill="var(--palette-blue)" fill-opacity="0.3" stroke="var(--palette-blue)"/>
<circle cx="187" cy="18" r="4.5" fill="var(--palette-blue)" fill-opacity="0.3" stroke="var(--palette-blue)"/>
<circle cx="232" cy="18" r="4.5" fill="var(--palette-blue)" fill-opacity="0.3" stroke="var(--palette-blue)"/>
<path d="M84 73Q76 73 76 81V92Q76 100 68 100Q76 100 76 108V120Q76 128 84 128" stroke="var(--palette-red)" fill="none" stroke-width="1.4"/>
<path d="M612 73Q620 73 620 81V92Q620 100 628 100Q620 100 620 108V120Q620 128 612 128" stroke="var(--palette-green)" fill="none" stroke-width="1.4"/>
<path d="M86 204Q86 212 94 212H164Q172 212 172 220Q172 212 180 212H250Q258 212 258 204" stroke="currentColor" fill="none" stroke-width="1.4"/>
<g fill="currentColor" font-size="14">
<text x="98" y="194" text-anchor="middle" font-style="italic">il</text>
<text x="143" y="194" text-anchor="middle" font-style="italic">a</text>
<text x="187" y="194" text-anchor="middle" font-style="italic">m’</text>
<text x="232" y="194" text-anchor="middle" font-style="italic">entarté</text>
<text x="328" y="194" text-anchor="middle" font-style="italic">&lt;START&gt;</text>
<text x="373" y="194" text-anchor="middle" font-style="italic">he</text>
<text x="418" y="194" text-anchor="middle" font-style="italic">hit</text>
<text x="463" y="194" text-anchor="middle" font-style="italic">me</text>
<text x="508" y="194" text-anchor="middle" font-style="italic">with</text>
<text x="553" y="194" text-anchor="middle" font-style="italic">a</text>
<text x="598" y="194" text-anchor="middle" font-style="italic">pie</text>
<text x="172" y="242" text-anchor="middle">Source sentence (input)</text>
<text transform="translate(48 100) rotate(-90)" text-anchor="middle" fill="var(--palette-red)"><tspan x="0" dy="-4">Encoder</tspan><tspan x="0" dy="17">RNN</tspan></text>
<text transform="translate(640 100) rotate(90)" text-anchor="middle" fill="var(--palette-green)">Decoder RNN</text>
</g>
</svg>

Ogni passo del decoder effettua una combinazione convessa di tutti gli output degli encoder. 

- **Output di un encoder**, sono gli hidden state, per ogni passo dell'encoder abbiamo un vettore di numeri, quindi la sequenza finale dell'encoder non è più un vettore numerico, ma un vettore di vettori numerici: $h_1, ..., h_t \in \mathbb{R}^a$ , dove $a$ è la dimensione dei vettori degli encoder, mentre $T$ è la lunghezza dell'input
- **Stato nascosto del decoder**, at uno step $t$, lo stato $s_t = f(s_{t-1}, t_{t-1}, c_t) \in \mathbb{R^b}$, dove $f$ è applicato sullo stato nascosto del decoder precedente ($s_{t-1}$), l'output del decoder precedente $y_{t-1}$ ed un "contesto" $c_t$. 
  - Nel caso di un encoder-decoder che non usa attention, allora $c_t = h_T$ se $t = 1$, altrimenti $c_t = 0^a$
  - Nel caso di un encoder-decoder che usa attention, allora $\mathbf{c}_t=\sum_{i=1}^T \alpha_i \mathbf{h}_i$ cioè una combinazione convessa tra l'output dell'encoder $h_i$ e i pesi di *attention* $\alpha_i$ 
- **Pesi dell'attention**: $[\alpha_1, ...,\alpha_T ] = softmax(e_1, ..., e_T) \in \mathbb{R}^T$, cioè $\alpha_i=\exp \left(e_i\right) / \sum_{j=1}^N \exp \left(e_j\right) \in \mathbb{R}$  dove $e_i = a(s_{t-1}, h_i) \in \mathbb{R}$ è un numero reale che è il risulttato della combinazione di $s_{t-1}$ e $h_i$ che di solito è il prodotto scalare.
Da notare che i pesi dell'attention sono imparati *indirettamente* come visto nel punto precedente, e quindi non vengono "allenati" ma imparati dinamicamente durante l'esecuzione.

<svg viewBox="0 0 620 310" width="100%" style="max-width:620px;display:block;margin:1.5rem auto" role="img" aria-label="Calcolo dei pesi di attenzione: il query vector di hate viene confrontato con i key vector di kono, eiga, ga, kirai, ottenendo i punteggi a₁…a₄ che la softmax trasforma nei pesi α₁=0.76, α₂=0.08, α₃=0.13, α₄=0.03">
<defs><marker id="i20241221111316-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0 0L10 5L0 10z" style="fill:currentColor;fill:context-stroke"/></marker></defs>
<rect x="221" y="36" width="374" height="72" rx="12" fill="none" stroke="var(--palette-blue)" stroke-width="2"/>
<rect x="241" y="42" width="18" height="60" rx="2" fill="none" stroke="currentColor"/>
<circle cx="250" cy="52" r="8" fill="var(--palette-purple)" fill-opacity="0.75" stroke="var(--palette-purple)"/>
<circle cx="250" cy="72" r="8" fill="var(--palette-purple)" fill-opacity="0.75" stroke="var(--palette-purple)"/>
<circle cx="250" cy="92" r="8" fill="var(--palette-purple)" fill-opacity="0.75" stroke="var(--palette-purple)"/>
<rect x="343" y="42" width="18" height="60" rx="2" fill="none" stroke="currentColor"/>
<circle cx="352" cy="52" r="8" fill="var(--palette-purple)" fill-opacity="0.75" stroke="var(--palette-purple)"/>
<circle cx="352" cy="72" r="8" fill="var(--palette-purple)" fill-opacity="0.75" stroke="var(--palette-purple)"/>
<circle cx="352" cy="92" r="8" fill="var(--palette-purple)" fill-opacity="0.75" stroke="var(--palette-purple)"/>
<rect x="446" y="42" width="18" height="60" rx="2" fill="none" stroke="currentColor"/>
<circle cx="455" cy="52" r="8" fill="var(--palette-purple)" fill-opacity="0.75" stroke="var(--palette-purple)"/>
<circle cx="455" cy="72" r="8" fill="var(--palette-purple)" fill-opacity="0.75" stroke="var(--palette-purple)"/>
<circle cx="455" cy="92" r="8" fill="var(--palette-purple)" fill-opacity="0.75" stroke="var(--palette-purple)"/>
<rect x="548" y="42" width="18" height="60" rx="2" fill="none" stroke="currentColor"/>
<circle cx="557" cy="52" r="8" fill="var(--palette-purple)" fill-opacity="0.75" stroke="var(--palette-purple)"/>
<circle cx="557" cy="72" r="8" fill="var(--palette-purple)" fill-opacity="0.75" stroke="var(--palette-purple)"/>
<circle cx="557" cy="92" r="8" fill="var(--palette-purple)" fill-opacity="0.75" stroke="var(--palette-purple)"/>
<rect x="59" y="158" width="18" height="60" rx="2" fill="none" stroke="currentColor"/>
<circle cx="68" cy="168" r="8" fill="var(--palette-purple)" fill-opacity="0.75" stroke="var(--palette-purple)"/>
<circle cx="68" cy="188" r="8" fill="var(--palette-purple)" fill-opacity="0.75" stroke="var(--palette-purple)"/>
<circle cx="68" cy="208" r="8" fill="var(--palette-purple)" fill-opacity="0.75" stroke="var(--palette-purple)"/>
<rect x="98" y="158" width="18" height="60" rx="2" fill="none" stroke="currentColor"/>
<circle cx="107" cy="168" r="8" fill="var(--palette-purple)" fill-opacity="0.75" stroke="var(--palette-purple)"/>
<circle cx="107" cy="188" r="8" fill="var(--palette-purple)" fill-opacity="0.75" stroke="var(--palette-purple)"/>
<circle cx="107" cy="208" r="8" fill="var(--palette-purple)" fill-opacity="0.75" stroke="var(--palette-purple)"/>
<rect x="139" y="158" width="18" height="60" rx="2" fill="none" stroke="currentColor"/>
<circle cx="148" cy="168" r="8" fill="var(--palette-purple)" fill-opacity="0.75" stroke="var(--palette-purple)"/>
<circle cx="148" cy="188" r="8" fill="var(--palette-purple)" fill-opacity="0.75" stroke="var(--palette-purple)"/>
<circle cx="148" cy="208" r="8" fill="var(--palette-purple)" fill-opacity="0.75" stroke="var(--palette-purple)"/>
<rect x="131" y="146" width="34" height="78" rx="9" fill="none" stroke="var(--palette-orange)" stroke-width="2"/>
<g stroke="var(--palette-muted)" fill="none"><circle cx="225" cy="146" r="10" stroke-width="5" stroke-dasharray="3.2 2.04"/><circle cx="225" cy="146" r="4.5" stroke-width="2"/></g>
<g stroke="var(--palette-muted)" fill="none"><circle cx="318" cy="146" r="10" stroke-width="5" stroke-dasharray="3.2 2.04"/><circle cx="318" cy="146" r="4.5" stroke-width="2"/></g>
<g stroke="var(--palette-muted)" fill="none"><circle cx="420" cy="146" r="10" stroke-width="5" stroke-dasharray="3.2 2.04"/><circle cx="420" cy="146" r="4.5" stroke-width="2"/></g>
<g stroke="var(--palette-muted)" fill="none"><circle cx="523" cy="146" r="10" stroke-width="5" stroke-dasharray="3.2 2.04"/><circle cx="523" cy="146" r="4.5" stroke-width="2"/></g>
<rect x="205" y="228" width="392" height="30" fill="var(--palette-muted)" fill-opacity="0.2" stroke="var(--palette-muted)"/>
<g stroke="currentColor" stroke-width="1.5" fill="none" marker-end="url(#i20241221111316-arrow)">
<path d="M249 27L250 39"/>
<line x1="262" y1="72" x2="340" y2="72" marker-start="url(#i20241221111316-arrow)"/>
<path d="M351 27L352 39"/>
<line x1="364" y1="72" x2="443" y2="72" marker-start="url(#i20241221111316-arrow)"/>
<path d="M454 27L455 39"/>
<line x1="467" y1="72" x2="545" y2="72" marker-start="url(#i20241221111316-arrow)"/>
<path d="M556 27L557 39"/>
<path d="M78 188H96"/>
<path d="M117 188H137"/>
<path d="M107 138V155"/>
<path d="M148 138V155"/>
<path d="M240 112L231 129"/>
<path d="M156 172C170 122 165 112 219 131"/>
<path d="M234 157L247 170"/>
<path d="M342 112L324 129"/>
<path d="M156 172C170 122 258 112 312 131"/>
<path d="M327 157L340 170"/>
<path d="M445 112L426 129"/>
<path d="M156 172C170 122 360 112 414 131"/>
<path d="M429 157L442 170"/>
<path d="M547 112L529 129"/>
<path d="M156 172C170 122 463 112 517 131"/>
<path d="M532 157L545 170"/>
<path d="M400 204V223"/>
<path d="M400 260V280"/>
</g>
<g fill="currentColor">
<text x="247" y="22" text-anchor="middle" font-style="italic" font-size="17">kono</text>
<text x="349" y="22" text-anchor="middle" font-style="italic" font-size="17">eiga</text>
<text x="452" y="22" text-anchor="middle" font-style="italic" font-size="17">ga</text>
<text x="554" y="22" text-anchor="middle" font-style="italic" font-size="17">kirai</text>
<text x="214" y="58" text-anchor="end" font-size="20" fill="var(--palette-blue)">Key</text>
<text x="214" y="84" text-anchor="end" font-size="20" fill="var(--palette-blue)">Vectors</text>
<text x="107" y="134" text-anchor="middle" font-size="17">I</text>
<text x="148" y="134" text-anchor="middle" font-size="17">hate</text>
<text x="88" y="250" text-anchor="middle" font-size="19" fill="var(--palette-orange)">Query Vector</text>
<text x="248" y="196" text-anchor="middle" font-size="17">a₁=2.1</text>
<text x="342" y="196" text-anchor="middle" font-size="17">a₂=-0.1</text>
<text x="440" y="196" text-anchor="middle" font-size="17">a₃=0.3</text>
<text x="545" y="196" text-anchor="middle" font-size="17">a₄=-1.0</text>
<text x="401" y="247" text-anchor="middle" font-size="13">softmax</text>
<text x="240" y="302" text-anchor="middle" font-size="17">α₁=0.76</text>
<text x="333" y="302" text-anchor="middle" font-size="17">α₂=0.08</text>
<text x="432" y="302" text-anchor="middle" font-size="17">α₃=0.13</text>
<text x="545" y="302" text-anchor="middle" font-size="17">α₄=0.03</text>
</g>
</svg>

L'attention risolve il problema del bottleneck di informazioni, rendendo possibile al decoder di visualizzare direttamente l'input sorgente. 

Aiuta con il problema del vanishing graddient, dato che permette la visione di stati lontani

Fornisce un modello di learning più simile a quello umano, dove per produrre la sequenza di decoding, si deve spesso tornare a controllare cosa si è fatto in precedenza per capire cosa fare dopo.

Tramite i pesi di attention si può capire più facilmente quali parti dell'input sono più importanti per produrre una parte specifica della sequenza in output.

In a **lookup table**, we have a table of **keys** that map to **values**. The **query** matches one of the keys, returning its value.

In **attention**, the **query** matches all **keys** *softly*, to a weight between 0 and 1. The keys' **values** are multiplied by the weights and summed.

<svg viewBox="0 0 660 210" width="100%" style="max-width:660px;display:block;margin:1.5rem auto" role="img" aria-label="A sinistra una lookup table: la query d corrisponde esattamente alla chiave d e restituisce v4. A destra l'attenzione: la query q è collegata a tutte le chiavi k1…k5 con pesi diversi (spessore delle linee) e i valori v1…v5 vengono sommati in modo pesato">
<defs><marker id="i20241221111659-arrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse"><path d="M0 0L10 5L0 10z" style="fill:currentColor;fill:context-stroke"/></marker></defs>
<g stroke="none">
<rect x="108" y="37" width="40" height="22" fill="var(--palette-orange)" fill-opacity="0.55"/>
<rect x="108" y="72" width="40" height="22" fill="var(--palette-orange)" fill-opacity="0.55"/>
<rect x="108" y="107" width="40" height="22" fill="var(--palette-orange)" fill-opacity="0.55"/>
<rect x="108" y="144" width="40" height="22" fill="var(--palette-orange)" fill-opacity="0.55"/>
<rect x="150" y="144" width="55" height="22" fill="var(--palette-teal)" fill-opacity="0.45"/>
<rect x="108" y="179" width="40" height="22" fill="var(--palette-orange)" fill-opacity="0.55"/>
<rect x="37" y="108" width="40" height="22" fill="var(--palette-red)" fill-opacity="0.4"/>
<rect x="215" y="144" width="44" height="22" fill="var(--palette-teal)" fill-opacity="0.45"/>
<line x1="318" y1="0" x2="318" y2="208" stroke="currentColor" stroke-width="1.5"/>
<rect x="432" y="37" width="44" height="22" fill="var(--palette-orange)" fill-opacity="0.55"/>
<rect x="476" y="37" width="42" height="22" fill="var(--palette-teal)" fill-opacity="0.45"/>
<rect x="432" y="72" width="44" height="22" fill="var(--palette-orange)" fill-opacity="0.55"/>
<rect x="476" y="72" width="42" height="22" fill="var(--palette-teal)" fill-opacity="0.15"/>
<rect x="432" y="107" width="44" height="22" fill="var(--palette-orange)" fill-opacity="0.55"/>
<rect x="476" y="107" width="42" height="22" fill="var(--palette-teal)" fill-opacity="0.15"/>
<rect x="432" y="144" width="44" height="22" fill="var(--palette-orange)" fill-opacity="0.55"/>
<rect x="476" y="144" width="42" height="22" fill="var(--palette-teal)" fill-opacity="0.45"/>
<rect x="432" y="179" width="44" height="22" fill="var(--palette-orange)" fill-opacity="0.55"/>
<rect x="476" y="179" width="42" height="22" fill="var(--palette-teal)" fill-opacity="0.15"/>
<rect x="362" y="108" width="40" height="22" fill="var(--palette-red)" fill-opacity="0.4"/>
<rect x="608" y="108" width="44" height="22" fill="var(--palette-teal)" fill-opacity="0.6"/>
</g>
<g stroke="currentColor" fill="none" marker-end="url(#i20241221111659-arrow)">
<path d="M77 119C96 119 86 155 106 155" stroke-width="2"/>
<path d="M207 155H213" stroke-width="2"/>
<path d="M576 119H604" stroke-width="1.5"/>
</g>
<g fill="currentColor" font-size="14">
<text x="128" y="22" text-anchor="middle">keys</text>
<text x="176" y="22" text-anchor="middle">values</text>
<text x="128" y="53" text-anchor="middle">a</text>
<text x="176" y="53" text-anchor="middle">v1</text>
<text x="128" y="88" text-anchor="middle">b</text>
<text x="176" y="88" text-anchor="middle">v2</text>
<text x="128" y="123" text-anchor="middle">c</text>
<text x="176" y="123" text-anchor="middle">v3</text>
<text x="128" y="160" text-anchor="middle">d</text>
<text x="177.5" y="160" text-anchor="middle">v4</text>
<text x="128" y="195" text-anchor="middle">e</text>
<text x="176" y="195" text-anchor="middle">v5</text>
<text x="57" y="96" text-anchor="middle">query</text>
<text x="57" y="124" text-anchor="middle">d</text>
<text x="236" y="134" text-anchor="middle">output</text>
<text x="237" y="160" text-anchor="middle">v4</text>
<text x="454" y="22" text-anchor="middle">keys</text>
<text x="497" y="22" text-anchor="middle">values</text>
<text x="562" y="20" text-anchor="middle">Weighted</text>
<text x="562" y="38" text-anchor="middle">Sum</text>
<text x="454" y="53" text-anchor="middle">k1</text>
<text x="497" y="53" text-anchor="middle">v1</text>
<path d="M402 119C422 119 412 48 432 48" fill="none" stroke="currentColor" stroke-width="2.8"/>
<path d="M518 48C538 48 528 119 546 119" fill="none" stroke="currentColor" stroke-width="2.8"/>
<text x="454" y="88" text-anchor="middle">k2</text>
<text x="497" y="88" text-anchor="middle">v2</text>
<path d="M402 119C422 119 412 83 432 83" fill="none" stroke="currentColor" stroke-width="1"/>
<path d="M518 83C538 83 528 119 546 119" fill="none" stroke="currentColor" stroke-width="1"/>
<text x="454" y="123" text-anchor="middle">k3</text>
<text x="497" y="123" text-anchor="middle">v3</text>
<path d="M402 119C422 119 412 118 432 118" fill="none" stroke="currentColor" stroke-width="1.8"/>
<path d="M518 118C538 118 528 119 546 119" fill="none" stroke="currentColor" stroke-width="1.8"/>
<text x="454" y="160" text-anchor="middle">k4</text>
<text x="497" y="160" text-anchor="middle">v4</text>
<path d="M402 119C422 119 412 155 432 155" fill="none" stroke="currentColor" stroke-width="3.4"/>
<path d="M518 155C538 155 528 119 546 119" fill="none" stroke="currentColor" stroke-width="3.4"/>
<text x="454" y="195" text-anchor="middle">k5</text>
<text x="497" y="195" text-anchor="middle">v5</text>
<path d="M402 119C422 119 412 190 432 190" fill="none" stroke="currentColor" stroke-width="1.6"/>
<path d="M518 190C538 190 528 119 546 119" fill="none" stroke="currentColor" stroke-width="1.6"/>
<text x="382" y="96" text-anchor="middle">query</text>
<text x="382" y="124" text-anchor="middle">q</text>
<text x="560" y="128" text-anchor="middle" font-size="28">Σ</text>
<text x="630" y="100" text-anchor="middle">output</text>
</g>
</svg>

---
Si può anche usare il *Self attention* quando per processare uno step della sequenza si usano gli altri step precedentemente processati, questo permette di aggiungere il concetto di attention anche nella fase di decoding.

---
Un altra variante ancora è il _Multi-head attention_ che utilizza più moduli di attenzione in parallelo, ognuno con una versione diversa della query (chiamata "head"), ottenuta tramite trasformazioni lineari apprese. L'output finale è la concatenazione dei risultati delle varie head, ognuna delle quali può concentrarsi su parti diverse dell'input, rendendo il modello più flessibile e potente. Ad esempio, una head può imparare a collegare i verbi ai loro soggetti, mentre un'altra può collegare i pronomi ai loro riferimenti.

# Architettura transformer

L'architettura transformer dice l'attention è l'unica cosa necessaria, e non c'è bisogno della ricorrenza. 

Gli RNN durante lo step $t$ del processamento della sequenza output, producono una rappresentazione cumulativa delle sottosequenze da step $1$ a step $t$, che è dipendente da tutti i simboli delle sequenze fino a $t$

Nell'architettura *Transformer*, l'input è convertito nella sua rappresentazione numerica. Prendendo caso in cui questo sia testo, la rappresentazione numerica non aggiunge ancora alcuna informazione all'input, e se visti i singoli elementi singolarmente, non possiamo derivare "semantica" da solo. Per esempio, la parola "sinistro" può significare più cose se visto da solo, ma acquista semantica quando è visto in una frase.

Per questo motivo, per ogni simblo si analizza il "contesto" del simbolo all'interno dell'intera sequenza, e quindi la propria rappresentazione è dipendente da quella di tutti gli altri token nella sequenza. 
Una volta effettuato questa analisi, viene ricostituito la rappresentazione finale dell'input semplicemente concatenando tutti gli elementi della sequenza. 

Questa analisi viene effettuata tramite il multi-head self attention, ed il transformer completo può essere visto come un architettura encoder-decoder, ma si può utilizzare solo l'encoder o solo il decoder in isolazione.

![[Pasted image 20241221113517.png]]

Il lato positivo dell'architettura transformer è che è facilmente parallelizzabile. 
Mentre il RNN deve eseguire i passaggi in maniera sequenziale, nel transformer, ogni singolo token può essere analizzato separatamente, spesso tramite operazioni matriciali, che possono essere facilmente calcolate tramite GPU o TPU
