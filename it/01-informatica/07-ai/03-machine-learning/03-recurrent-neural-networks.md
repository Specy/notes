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

<svg viewBox="0 0 720 256" width="100%" style="max-width:720px;display:block;margin:1.5rem auto" role="img" aria-label="RNN con il ciclo ricorrente W_hh e la stessa rete srotolata nel tempo sulle parole the, cat, chased, the">
<defs><marker id="i20241220170323-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0 0L10 5L0 10z" fill="currentColor"/></marker></defs>
<g stroke="currentColor" stroke-width="1.5" fill="none">
<rect x="145" y="24" width="30" height="44"/>
<rect x="137" y="103" width="46" height="30"/>
<rect x="145" y="170" width="30" height="44"/>
<line x1="160" y1="103" x2="160" y2="69" marker-end="url(#i20241220170323-arrow)"/>
<line x1="160" y1="170" x2="160" y2="134" marker-end="url(#i20241220170323-arrow)"/>
<path d="M183 110 C208 96 208 140 183 126" fill="none" marker-end="url(#i20241220170323-arrow)"/>
<rect x="397" y="24" width="30" height="44"/>
<rect x="390" y="103" width="44" height="30"/>
<rect x="397" y="170" width="30" height="44"/>
<line x1="412" y1="103" x2="412" y2="69" marker-end="url(#i20241220170323-arrow)"/>
<line x1="412" y1="170" x2="412" y2="134" marker-end="url(#i20241220170323-arrow)"/>
<line x1="434" y1="118" x2="477" y2="118" marker-end="url(#i20241220170323-arrow)"/>
<rect x="485" y="24" width="30" height="44"/>
<rect x="478" y="103" width="44" height="30"/>
<rect x="485" y="170" width="30" height="44"/>
<line x1="500" y1="103" x2="500" y2="69" marker-end="url(#i20241220170323-arrow)"/>
<line x1="500" y1="170" x2="500" y2="134" marker-end="url(#i20241220170323-arrow)"/>
<line x1="522" y1="118" x2="565" y2="118" marker-end="url(#i20241220170323-arrow)"/>
<rect x="573" y="24" width="30" height="44"/>
<rect x="566" y="103" width="44" height="30"/>
<rect x="573" y="170" width="30" height="44"/>
<line x1="588" y1="103" x2="588" y2="69" marker-end="url(#i20241220170323-arrow)"/>
<line x1="588" y1="170" x2="588" y2="134" marker-end="url(#i20241220170323-arrow)"/>
<line x1="610" y1="118" x2="653" y2="118" marker-end="url(#i20241220170323-arrow)"/>
<rect x="661" y="24" width="30" height="44"/>
<rect x="654" y="103" width="44" height="30"/>
<rect x="661" y="170" width="30" height="44"/>
<line x1="676" y1="103" x2="676" y2="69" marker-end="url(#i20241220170323-arrow)"/>
<line x1="676" y1="170" x2="676" y2="134" marker-end="url(#i20241220170323-arrow)"/>
</g>
<g fill="currentColor" font-size="13">
<text x="160" y="51" text-anchor="middle" font-size="15">ȳₜ</text>
<text x="160" y="123" text-anchor="middle" font-size="15">h̄ₜ</text>
<text x="160" y="197" text-anchor="middle" font-size="15">x̄ₜ</text>
<text x="165" y="92" text-anchor="start">W<tspan font-size="10" dy="4">hy</tspan></text>
<text x="165" y="160" text-anchor="start">W<tspan font-size="10" dy="4">xh</tspan></text>
<text x="204" y="124" text-anchor="start">W<tspan font-size="10" dy="4">hh</tspan></text>
<text x="132" y="30" text-anchor="end" font-size="12" font-weight="bold">PREDICTED</text>
<text x="132" y="45" text-anchor="end" font-size="12" font-weight="bold">WORD</text>
<text x="132" y="60" text-anchor="end" font-size="12" font-weight="bold">LIKELIHOODS</text>
<text x="132" y="112" text-anchor="end" font-size="12" font-weight="bold">HIDDEN</text>
<text x="132" y="127" text-anchor="end" font-size="12" font-weight="bold">REPRESENTATION</text>
<text x="132" y="186" text-anchor="end" font-size="12" font-weight="bold">ENCODED</text>
<text x="132" y="201" text-anchor="end" font-size="12" font-weight="bold">WORD</text>
<text x="286" y="112" text-anchor="middle" font-size="15">unrolling</text>
<text x="286" y="146" text-anchor="middle" font-size="34">⟹</text>
<text x="366" y="14" font-size="12" font-weight="bold">OUTPUT</text>
<text x="338" y="234" font-size="12" font-weight="bold">INPUT</text>
<text x="338" y="249" font-size="12" font-weight="bold">WORDS</text>
<text x="412" y="51" text-anchor="middle" font-size="15">ȳ₁</text>
<text x="412" y="123" text-anchor="middle" font-size="15">h̄₁</text>
<text x="412" y="197" text-anchor="middle" font-size="15">x̄₁</text>
<text x="417" y="92" text-anchor="start">W<tspan font-size="10" dy="4">hy</tspan></text>
<text x="417" y="160" text-anchor="start">W<tspan font-size="10" dy="4">xh</tspan></text>
<text x="412" y="234" text-anchor="middle" font-size="13" font-weight="bold">the</text>
<text x="438" y="112" text-anchor="start">W<tspan font-size="10" dy="4">hh</tspan></text>
<text x="500" y="51" text-anchor="middle" font-size="15">ȳ₂</text>
<text x="500" y="123" text-anchor="middle" font-size="15">h̄₂</text>
<text x="500" y="197" text-anchor="middle" font-size="15">x̄₂</text>
<text x="505" y="92" text-anchor="start">W<tspan font-size="10" dy="4">hy</tspan></text>
<text x="505" y="160" text-anchor="start">W<tspan font-size="10" dy="4">xh</tspan></text>
<text x="500" y="234" text-anchor="middle" font-size="13" font-weight="bold">cat</text>
<text x="526" y="112" text-anchor="start">W<tspan font-size="10" dy="4">hh</tspan></text>
<text x="588" y="51" text-anchor="middle" font-size="15">ȳ₃</text>
<text x="588" y="123" text-anchor="middle" font-size="15">h̄₃</text>
<text x="588" y="197" text-anchor="middle" font-size="15">x̄₃</text>
<text x="593" y="92" text-anchor="start">W<tspan font-size="10" dy="4">hy</tspan></text>
<text x="593" y="160" text-anchor="start">W<tspan font-size="10" dy="4">xh</tspan></text>
<text x="588" y="234" text-anchor="middle" font-size="13" font-weight="bold">chased</text>
<text x="614" y="112" text-anchor="start">W<tspan font-size="10" dy="4">hh</tspan></text>
<text x="676" y="51" text-anchor="middle" font-size="15">ȳ₄</text>
<text x="676" y="123" text-anchor="middle" font-size="15">h̄₄</text>
<text x="676" y="197" text-anchor="middle" font-size="15">x̄₄</text>
<text x="681" y="92" text-anchor="start">W<tspan font-size="10" dy="4">hy</tspan></text>
<text x="681" y="160" text-anchor="start">W<tspan font-size="10" dy="4">xh</tspan></text>
<text x="676" y="234" text-anchor="middle" font-size="13" font-weight="bold">the</text>
</g>
</svg>

<svg viewBox="0 0 530 270" width="100%" style="max-width:530px;display:block;margin:1.5rem auto" role="img" aria-label="Quattro architetture RNN: many-to-one, one-to-many e due varianti di many-to-many; input in blu, stati nascosti in arancione, output in verde">
<defs><marker id="i20241220170453-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse"><path d="M0 0L10 5L0 10z" style="fill:currentColor;fill:context-stroke"/></marker></defs>
<g stroke="var(--palette-muted)" stroke-width="1.3" marker-end="url(#i20241220170453-arrow)">
<line x1="56" y1="52" x2="69" y2="52"/>
<line x1="102" y1="52" x2="115" y2="52"/>
<line x1="40" y1="83" x2="40" y2="63"/>
<line x1="86" y1="83" x2="86" y2="63"/>
<line x1="132" y1="83" x2="132" y2="63"/>
<line x1="132" y1="42" x2="132" y2="22"/>
<line x1="362" y1="52" x2="375" y2="52"/>
<line x1="408" y1="52" x2="421" y2="52"/>
<line x1="346" y1="83" x2="346" y2="63"/>
<line x1="346" y1="42" x2="346" y2="22"/>
<line x1="392" y1="42" x2="392" y2="22"/>
<line x1="438" y1="42" x2="438" y2="22"/>
<line x1="56" y1="192" x2="69" y2="192"/>
<line x1="102" y1="192" x2="115" y2="192"/>
<line x1="40" y1="223" x2="40" y2="203"/>
<line x1="86" y1="223" x2="86" y2="203"/>
<line x1="132" y1="223" x2="132" y2="203"/>
<line x1="40" y1="182" x2="40" y2="162"/>
<line x1="86" y1="182" x2="86" y2="162"/>
<line x1="132" y1="182" x2="132" y2="162"/>
<line x1="316" y1="192" x2="329" y2="192"/>
<line x1="362" y1="192" x2="375" y2="192"/>
<line x1="408" y1="192" x2="421" y2="192"/>
<line x1="454" y1="192" x2="467" y2="192"/>
<line x1="300" y1="223" x2="300" y2="203"/>
<line x1="346" y1="223" x2="346" y2="203"/>
<line x1="392" y1="223" x2="392" y2="203"/>
<line x1="392" y1="182" x2="392" y2="162"/>
<line x1="438" y1="182" x2="438" y2="162"/>
<line x1="484" y1="182" x2="484" y2="162"/>
</g>
<g stroke="currentColor" stroke-width="1.2" fill-opacity="0.35">
<rect x="21" y="83" width="38" height="18" rx="4" fill="var(--palette-blue)"/>
<rect x="67" y="83" width="38" height="18" rx="4" fill="var(--palette-blue)"/>
<rect x="113" y="83" width="38" height="18" rx="4" fill="var(--palette-blue)"/>
<rect x="113" y="3" width="38" height="18" rx="4" fill="var(--palette-green)"/>
<rect x="327" y="83" width="38" height="18" rx="4" fill="var(--palette-blue)"/>
<rect x="327" y="3" width="38" height="18" rx="4" fill="var(--palette-green)"/>
<rect x="373" y="3" width="38" height="18" rx="4" fill="var(--palette-green)"/>
<rect x="419" y="3" width="38" height="18" rx="4" fill="var(--palette-green)"/>
<rect x="21" y="223" width="38" height="18" rx="4" fill="var(--palette-blue)"/>
<rect x="67" y="223" width="38" height="18" rx="4" fill="var(--palette-blue)"/>
<rect x="113" y="223" width="38" height="18" rx="4" fill="var(--palette-blue)"/>
<rect x="21" y="143" width="38" height="18" rx="4" fill="var(--palette-green)"/>
<rect x="67" y="143" width="38" height="18" rx="4" fill="var(--palette-green)"/>
<rect x="113" y="143" width="38" height="18" rx="4" fill="var(--palette-green)"/>
<rect x="281" y="223" width="38" height="18" rx="4" fill="var(--palette-blue)"/>
<rect x="327" y="223" width="38" height="18" rx="4" fill="var(--palette-blue)"/>
<rect x="373" y="223" width="38" height="18" rx="4" fill="var(--palette-blue)"/>
<rect x="373" y="143" width="38" height="18" rx="4" fill="var(--palette-green)"/>
<rect x="419" y="143" width="38" height="18" rx="4" fill="var(--palette-green)"/>
<rect x="465" y="143" width="38" height="18" rx="4" fill="var(--palette-green)"/>
<g fill="var(--palette-orange)">
<ellipse cx="40" cy="52" rx="16" ry="10"/>
<ellipse cx="86" cy="52" rx="16" ry="10"/>
<ellipse cx="132" cy="52" rx="16" ry="10"/>
<ellipse cx="346" cy="52" rx="16" ry="10"/>
<ellipse cx="392" cy="52" rx="16" ry="10"/>
<ellipse cx="438" cy="52" rx="16" ry="10"/>
<ellipse cx="40" cy="192" rx="16" ry="10"/>
<ellipse cx="86" cy="192" rx="16" ry="10"/>
<ellipse cx="132" cy="192" rx="16" ry="10"/>
<ellipse cx="300" cy="192" rx="16" ry="10"/>
<ellipse cx="346" cy="192" rx="16" ry="10"/>
<ellipse cx="392" cy="192" rx="16" ry="10"/>
<ellipse cx="438" cy="192" rx="16" ry="10"/>
<ellipse cx="484" cy="192" rx="16" ry="10"/>
</g>
</g>
<g fill="currentColor" font-size="14" font-weight="bold" text-anchor="middle">
<text x="86" y="122">many-to-one</text>
<text x="392" y="122">one-to-many</text>
<text x="86" y="262">many-to-many</text>
<text x="392" y="262">many-to-many</text>
</g>
</svg>

**many-to-one**, e.g., *text classification, sentiment classification*

**one-to-many**, e.g., *image captioning* (from an image to a sequence of words)

**many-to-many**, e.g., *machine translation, question answering*

Il training di un RNN unrolled è simile a quello di una normale rete neurale.
- la funzione loss è applicata all'ultima rete
- si usa una variante di gradient descent che usa BPTT (backpropagation through time) che tiene conto che l'input è una sequenza e che i parametri sono condivisi fra i vari strati dell'RNN unrolled

<svg viewBox="0 0 330 302" width="100%" style="max-width:330px;display:block;margin:1.5rem auto" role="img" aria-label="RNN profonda srotolata: K strati di stati nascosti impilati, ciascuno collegato allo stato successivo nel tempo e allo strato superiore">
<defs><marker id="i20241220171054-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0 0L10 5L0 10z" style="fill:currentColor;fill:context-stroke"/></marker></defs>
<g stroke="currentColor" stroke-width="1.5" fill="none">
<rect x="20" y="7" width="28" height="34"/>
<rect x="20" y="265" width="28" height="34"/>
<rect x="10" y="78" width="48" height="28"/>
<rect x="10" y="146" width="48" height="28"/>
<rect x="10" y="206" width="48" height="28"/>
<rect x="96" y="7" width="28" height="34"/>
<rect x="96" y="265" width="28" height="34"/>
<rect x="86" y="78" width="48" height="28"/>
<rect x="86" y="146" width="48" height="28"/>
<rect x="86" y="206" width="48" height="28"/>
<rect x="172" y="7" width="28" height="34"/>
<rect x="172" y="265" width="28" height="34"/>
<rect x="162" y="78" width="48" height="28"/>
<rect x="162" y="146" width="48" height="28"/>
<rect x="162" y="206" width="48" height="28"/>
<rect x="282" y="7" width="28" height="34"/>
<rect x="282" y="265" width="28" height="34"/>
<rect x="272" y="78" width="48" height="28"/>
<rect x="272" y="146" width="48" height="28"/>
<rect x="272" y="206" width="48" height="28"/>
</g>
<g stroke="currentColor" stroke-width="1.4" marker-end="url(#i20241220171054-arrow)">
<line x1="34" y1="265" x2="34" y2="235"/>
<line x1="34" y1="206" x2="34" y2="175"/>
<line x1="34" y1="146" x2="34" y2="138"/>
<line x1="34" y1="114" x2="34" y2="107"/>
<line x1="34" y1="78" x2="34" y2="42"/>
<line x1="110" y1="265" x2="110" y2="235"/>
<line x1="110" y1="206" x2="110" y2="175"/>
<line x1="110" y1="146" x2="110" y2="138"/>
<line x1="110" y1="114" x2="110" y2="107"/>
<line x1="110" y1="78" x2="110" y2="42"/>
<line x1="186" y1="265" x2="186" y2="235"/>
<line x1="186" y1="206" x2="186" y2="175"/>
<line x1="186" y1="146" x2="186" y2="138"/>
<line x1="186" y1="114" x2="186" y2="107"/>
<line x1="186" y1="78" x2="186" y2="42"/>
<line x1="296" y1="265" x2="296" y2="235"/>
<line x1="296" y1="206" x2="296" y2="175"/>
<line x1="296" y1="146" x2="296" y2="138"/>
<line x1="296" y1="114" x2="296" y2="107"/>
<line x1="296" y1="78" x2="296" y2="42"/>
<line x1="58" y1="92" x2="85" y2="92"/>
<line x1="134" y1="92" x2="161" y2="92"/>
<line x1="210" y1="92" x2="230" y2="92"/>
<line x1="252" y1="92" x2="271" y2="92"/>
<line x1="58" y1="160" x2="85" y2="160"/>
<line x1="134" y1="160" x2="161" y2="160"/>
<line x1="210" y1="160" x2="230" y2="160"/>
<line x1="252" y1="160" x2="271" y2="160"/>
<line x1="58" y1="220" x2="85" y2="220"/>
<line x1="134" y1="220" x2="161" y2="220"/>
<line x1="210" y1="220" x2="230" y2="220"/>
<line x1="252" y1="220" x2="271" y2="220"/>
</g>
<g fill="currentColor" font-size="15">
<text x="31" y="29" text-anchor="middle">ȳ<tspan font-size="10" dy="4">1</tspan></text>
<text x="31" y="287" text-anchor="middle">x̄<tspan font-size="10" dy="4">1</tspan></text>
<text x="24" y="97" text-anchor="middle">h̄</text>
<text x="30" y="91" font-size="10">(K)</text>
<text x="30" y="102" font-size="10">1</text>
<text x="24" y="165" text-anchor="middle">h̄</text>
<text x="30" y="159" font-size="10">(2)</text>
<text x="30" y="170" font-size="10">1</text>
<text x="24" y="225" text-anchor="middle">h̄</text>
<text x="30" y="219" font-size="10">(1)</text>
<text x="30" y="230" font-size="10">1</text>
<text x="34" y="130" text-anchor="middle" font-size="16">⋮</text>
<text x="107" y="29" text-anchor="middle">ȳ<tspan font-size="10" dy="4">2</tspan></text>
<text x="107" y="287" text-anchor="middle">x̄<tspan font-size="10" dy="4">2</tspan></text>
<text x="100" y="97" text-anchor="middle">h̄</text>
<text x="106" y="91" font-size="10">(K)</text>
<text x="106" y="102" font-size="10">2</text>
<text x="100" y="165" text-anchor="middle">h̄</text>
<text x="106" y="159" font-size="10">(2)</text>
<text x="106" y="170" font-size="10">2</text>
<text x="100" y="225" text-anchor="middle">h̄</text>
<text x="106" y="219" font-size="10">(1)</text>
<text x="106" y="230" font-size="10">2</text>
<text x="110" y="130" text-anchor="middle" font-size="16">⋮</text>
<text x="183" y="29" text-anchor="middle">ȳ<tspan font-size="10" dy="4">3</tspan></text>
<text x="183" y="287" text-anchor="middle">x̄<tspan font-size="10" dy="4">3</tspan></text>
<text x="176" y="97" text-anchor="middle">h̄</text>
<text x="182" y="91" font-size="10">(K)</text>
<text x="182" y="102" font-size="10">3</text>
<text x="176" y="165" text-anchor="middle">h̄</text>
<text x="182" y="159" font-size="10">(2)</text>
<text x="182" y="170" font-size="10">3</text>
<text x="176" y="225" text-anchor="middle">h̄</text>
<text x="182" y="219" font-size="10">(1)</text>
<text x="182" y="230" font-size="10">3</text>
<text x="186" y="130" text-anchor="middle" font-size="16">⋮</text>
<text x="293" y="29" text-anchor="middle">ȳ<tspan font-size="10" dy="4">T</tspan></text>
<text x="293" y="287" text-anchor="middle">x̄<tspan font-size="10" dy="4">T</tspan></text>
<text x="286" y="97" text-anchor="middle">h̄</text>
<text x="292" y="91" font-size="10">(K)</text>
<text x="292" y="102" font-size="10">T</text>
<text x="286" y="165" text-anchor="middle">h̄</text>
<text x="292" y="159" font-size="10">(2)</text>
<text x="292" y="170" font-size="10">T</text>
<text x="286" y="225" text-anchor="middle">h̄</text>
<text x="292" y="219" font-size="10">(1)</text>
<text x="292" y="230" font-size="10">T</text>
<text x="296" y="130" text-anchor="middle" font-size="16">⋮</text>
<text x="241" y="96" text-anchor="middle" font-size="16">⋯</text>
<text x="241" y="164" text-anchor="middle" font-size="16">⋯</text>
<text x="241" y="224" text-anchor="middle" font-size="16">⋯</text>
</g>
</svg>

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

<svg viewBox="0 0 290 368" width="100%" style="max-width:290px;display:block;margin:1.5rem auto" role="img" aria-label="RNN bidirezionale srotolata su tre passi: lo stato h procede in avanti nel tempo, lo stato g all'indietro, ed entrambi alimentano l'output o e la loss L">
<defs><marker id="i20241220171541-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0 0L10 5L0 10z" style="fill:currentColor;fill:context-stroke"/></marker></defs>
<g stroke="currentColor" stroke-width="1.4" fill="none">
<circle cx="50" cy="24" r="20"/>
<circle cx="50" cy="88" r="20"/>
<circle cx="50" cy="152" r="20"/>
<circle cx="50" cy="216" r="20"/>
<circle cx="50" cy="280" r="20"/>
<circle cx="50" cy="344" r="20"/>
<circle cx="150" cy="24" r="20"/>
<circle cx="150" cy="88" r="20"/>
<circle cx="150" cy="152" r="20"/>
<circle cx="150" cy="216" r="20"/>
<circle cx="150" cy="280" r="20"/>
<circle cx="150" cy="344" r="20"/>
<circle cx="250" cy="24" r="20"/>
<circle cx="250" cy="88" r="20"/>
<circle cx="250" cy="152" r="20"/>
<circle cx="250" cy="216" r="20"/>
<circle cx="250" cy="280" r="20"/>
<circle cx="250" cy="344" r="20"/>
</g>
<g stroke="currentColor" stroke-width="1.4" fill="none" marker-end="url(#i20241220171541-arrow)">
<line x1="50" y1="44" x2="50" y2="67"/>
<line x1="50" y1="132" x2="50" y2="109"/>
<line x1="50" y1="196" x2="50" y2="173"/>
<line x1="50" y1="324" x2="50" y2="301"/>
<path d="M38 264 C14 230 12 192 35 166"/>
<path d="M38 328 C14 294 12 256 35 230"/>
<line x1="70" y1="280" x2="129" y2="280"/>
<line x1="130" y1="216" x2="71" y2="216"/>
<line x1="150" y1="44" x2="150" y2="67"/>
<line x1="150" y1="132" x2="150" y2="109"/>
<line x1="150" y1="196" x2="150" y2="173"/>
<line x1="150" y1="324" x2="150" y2="301"/>
<path d="M138 264 C114 230 112 192 135 166"/>
<path d="M138 328 C114 294 112 256 135 230"/>
<line x1="170" y1="280" x2="229" y2="280"/>
<line x1="230" y1="216" x2="171" y2="216"/>
<line x1="250" y1="44" x2="250" y2="67"/>
<line x1="250" y1="132" x2="250" y2="109"/>
<line x1="250" y1="196" x2="250" y2="173"/>
<line x1="250" y1="324" x2="250" y2="301"/>
<path d="M238 264 C214 230 212 192 235 166"/>
<path d="M238 328 C214 294 212 256 235 230"/>
</g>
<g fill="currentColor" font-size="14">
<text x="50" y="29" text-anchor="middle"><tspan font-style="italic" font-weight="bold">y</tspan><tspan font-size="9" dy="-6">(t−1)</tspan></text>
<text x="50" y="93" text-anchor="middle"><tspan font-style="italic" font-weight="bold">L</tspan><tspan font-size="9" dy="-6">(t−1)</tspan></text>
<text x="50" y="157" text-anchor="middle"><tspan font-style="italic" font-weight="bold">o</tspan><tspan font-size="9" dy="-6">(t−1)</tspan></text>
<text x="50" y="221" text-anchor="middle"><tspan font-style="italic" font-weight="bold">g</tspan><tspan font-size="9" dy="-6">(t−1)</tspan></text>
<text x="50" y="285" text-anchor="middle"><tspan font-style="italic" font-weight="bold">h</tspan><tspan font-size="9" dy="-6">(t−1)</tspan></text>
<text x="50" y="349" text-anchor="middle"><tspan font-style="italic" font-weight="bold">x</tspan><tspan font-size="9" dy="-6">(t−1)</tspan></text>
<text x="150" y="29" text-anchor="middle"><tspan font-style="italic" font-weight="bold">y</tspan><tspan font-size="9" dy="-6">(t)</tspan></text>
<text x="150" y="93" text-anchor="middle"><tspan font-style="italic" font-weight="bold">L</tspan><tspan font-size="9" dy="-6">(t)</tspan></text>
<text x="150" y="157" text-anchor="middle"><tspan font-style="italic" font-weight="bold">o</tspan><tspan font-size="9" dy="-6">(t)</tspan></text>
<text x="150" y="221" text-anchor="middle"><tspan font-style="italic" font-weight="bold">g</tspan><tspan font-size="9" dy="-6">(t)</tspan></text>
<text x="150" y="285" text-anchor="middle"><tspan font-style="italic" font-weight="bold">h</tspan><tspan font-size="9" dy="-6">(t)</tspan></text>
<text x="150" y="349" text-anchor="middle"><tspan font-style="italic" font-weight="bold">x</tspan><tspan font-size="9" dy="-6">(t)</tspan></text>
<text x="250" y="29" text-anchor="middle"><tspan font-style="italic" font-weight="bold">y</tspan><tspan font-size="9" dy="-6">(t+1)</tspan></text>
<text x="250" y="93" text-anchor="middle"><tspan font-style="italic" font-weight="bold">L</tspan><tspan font-size="9" dy="-6">(t+1)</tspan></text>
<text x="250" y="157" text-anchor="middle"><tspan font-style="italic" font-weight="bold">o</tspan><tspan font-size="9" dy="-6">(t+1)</tspan></text>
<text x="250" y="221" text-anchor="middle"><tspan font-style="italic" font-weight="bold">g</tspan><tspan font-size="9" dy="-6">(t+1)</tspan></text>
<text x="250" y="285" text-anchor="middle"><tspan font-style="italic" font-weight="bold">h</tspan><tspan font-size="9" dy="-6">(t+1)</tspan></text>
<text x="250" y="349" text-anchor="middle"><tspan font-style="italic" font-weight="bold">x</tspan><tspan font-size="9" dy="-6">(t+1)</tspan></text>
</g>
</svg>

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
