---
title: "Reti Neurali Artificiali e Deep Learning"
description: "Architettura e training delle reti neurali artificiali: percettrone, multilayer perceptron (MLP), funzioni di attivazione (ReLU, sigmoidea, softmax), loss function, gradient descent e back propagation."
type: lecture
---
# Reti neurali

Le reti neurali, o ANN (Artificial Neural Network) è un metodo di machine learning che si ispira alla struttura e funzionamento di reti neurali biologiche presenti nei cervelli degli animali. 

Una rete neurale è formata da unità connesse fra loro, chiamati nodi, che simulano il compito di un neurone. Sono connessi fra di loro tramite degli archi che simulano le sinapsi tra neuroni biologici.

Ogni neurone artificiale riceve dei segnali dai neuroni connessi ad esso, processa questi input e invia dei segnali ai neuroni collegati ad esso.

Il "segnale" è rappresentato da un numero reale, e l'output di ogni neurone è calcolato da una funzione non lineare della somma dei suoi input, chiamata la "funzione di attivazione".

La "forza" della connessione del segnale è determinata dai "pesi", ed è la parte che viene aggiustata durante il processo di learning

<svg viewBox="0 0 610 412" width="100%" style="max-width:610px;display:block;margin:1.5rem auto" role="img" aria-label="Grafo computazionale: ingressi x₁ = 2, x₂ = 2, x₃ = 1; nodi nascosti 2*2=4, 2*2*1=4, 2*1+1*7=9, ln(4)=1.386, exp = 54.6, √9=3; nodo di uscita 1.386*54.6*3=227">
<defs><marker id="i20241219213557-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 z" style="fill:currentColor;fill:context-stroke"/></marker></defs>
<g stroke="currentColor" stroke-width="1.4" marker-end="url(#i20241219213557-arrow)">
<line x1="118" y1="126" x2="170" y2="126"/>
<line x1="109.9" y1="145.7" x2="178.4" y2="213.6"/>
<line x1="109.9" y1="214.3" x2="178.4" y2="146.4"/>
<line x1="118" y1="234" x2="170" y2="234"/>
<line x1="109.4" y1="254.2" x2="178.9" y2="326.1"/>
<line x1="109.8" y1="323.2" x2="178.5" y2="254.5"/>
<line x1="118" y1="344" x2="170" y2="345.9"/>
<line x1="227" y1="126" x2="282" y2="126"/>
<line x1="227" y1="234" x2="282" y2="234"/>
<line x1="227" y1="347" x2="282" y2="347"/>
<line x1="330.9" y1="145.7" x2="399.4" y2="213.6"/>
<line x1="339" y1="234" x2="391" y2="234"/>
<line x1="330.4" y1="326.8" x2="399.9" y2="254.9"/>
</g>
<g fill="none" stroke="currentColor" stroke-width="1.4"><circle cx="90" cy="126" r="28"/><circle cx="90" cy="234" r="28"/><circle cx="90" cy="343" r="28"/><circle cx="199" cy="126" r="28"/><circle cx="199" cy="234" r="28"/><circle cx="199" cy="347" r="28"/><circle cx="311" cy="126" r="28"/><circle cx="311" cy="234" r="28"/><circle cx="311" cy="347" r="28"/><circle cx="420" cy="234" r="28"/></g>
<g font-size="17" font-weight="bold" text-anchor="middle" fill="currentColor">
<text x="90" y="132">x₁</text>
<text x="90" y="240">x₂</text>
<text x="90" y="349">x₃</text>
<text x="199" y="132">*</text>
<text x="199" y="240">*</text>
<text x="199" y="353">+</text>
<text x="311" y="132">ln</text>
<text x="311" y="240">exp</text>
<text x="311" y="353">√</text>
<text x="420" y="240">*</text>
</g>
<!-- valori calcolati -->
<g font-size="16" font-weight="bold" text-anchor="middle" fill="currentColor">
<text x="90" y="88">2</text>
<text x="90" y="196">2</text>
<text x="90" y="305">1</text>
<text x="199" y="88">2*2=4</text>
<text x="199" y="196">2*2*1=4</text>
<text x="311" y="88">ln(4)=1.386</text>
<text x="311" y="196">54.6</text>
<text x="199" y="397">2*1+1*7=9</text>
<text x="311" y="397">√9=3</text>
<text x="388" y="190" text-anchor="start">1.386*54.6*3=227</text>
<text x="160" y="303" text-anchor="start">w₂=1</text>
<text x="112" y="372" text-anchor="start">w₃=7</text>
</g>
<g font-size="15" font-weight="bold" font-family="sans-serif" text-anchor="middle" fill="currentColor">
<text x="232" y="26">HIDDEN NODES</text>
<text x="420" y="291">OUTPUT</text><text x="420" y="309">NODE</text>
<text transform="translate(35,234) rotate(-90)">INPUT NODES</text>
</g></svg>

# Percettrone

Il percettrone utilizza vari "neuroni" collegati ad un neurone finale per calcolare il valore dell'output. è visto come un modello a "sigolo strato", dato che contiene solo uno strato di neuroni:

<svg viewBox="0 0 540 362" width="100%" style="max-width:540px;display:block;margin:1.5rem auto" role="img" aria-label="Percettrone: cinque ingressi x₁…x₅ con pesi w₁…w₅ e un bias +1 con peso b entrano nel nodo di uscita, che somma (Σ) e applica una funzione a gradino, producendo y">
<defs><marker id="i20241219213844-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 z" style="fill:currentColor;fill:context-stroke"/></marker></defs>
<g stroke="currentColor" stroke-width="1.3" marker-end="url(#i20241219213844-arrow)">
<line x1="189" y1="69.2" x2="308.4" y2="178.9"/>
<line x1="191.6" y1="132.4" x2="308.2" y2="187.2"/>
<line x1="193" y1="189.7" x2="308.1" y2="195.1"/>
<line x1="191.8" y1="253.2" x2="308.2" y2="203.9"/>
<line x1="189" y1="322.8" x2="308.4" y2="213.1"/>
<line x1="234" y1="322" x2="334" y2="232"/>
</g>
<g fill="none" stroke="currentColor" stroke-width="1.5">
<polygon points="48,56.5 152,56.5 152,53 161,59 152,65 152,61.5 48,61.5"/><circle cx="178" cy="59" r="15"/>
<polygon points="48,123.5 152,123.5 152,120 161,126 152,132 152,128.5 48,128.5"/><circle cx="178" cy="126" r="15"/>
<polygon points="48,186.5 152,186.5 152,183 161,189 152,195 152,191.5 48,191.5"/><circle cx="178" cy="189" r="15"/>
<polygon points="48,256.5 152,256.5 152,253 161,259 152,265 152,261.5 48,261.5"/><circle cx="178" cy="259" r="15"/>
<polygon points="48,330.5 152,330.5 152,327 161,333 152,339 152,335.5 48,335.5"/><circle cx="178" cy="333" r="15"/>
<ellipse cx="377" cy="196" rx="70" ry="45" stroke-width="2.5"/><line x1="377" y1="151" x2="377" y2="241"/>
<path d="M389,212 h12 v-32 h14" stroke-width="5"/>
<polygon points="447,193.5 488,193.5 488,190 497,196 488,202 488,198.5 447,198.5"/>
<rect x="216" y="322" width="28" height="28" stroke-width="2"/>
</g>
<g font-size="18" font-weight="bold" font-family="sans-serif" fill="currentColor">
<text x="14" y="65">x<tspan font-size="12" dy="5">1</tspan></text>
<text x="14" y="132">x<tspan font-size="12" dy="5">2</tspan></text>
<text x="14" y="195">x<tspan font-size="12" dy="5">3</tspan></text>
<text x="14" y="265">x<tspan font-size="12" dy="5">4</tspan></text>
<text x="14" y="339">x<tspan font-size="12" dy="5">5</tspan></text>
<text x="341" y="209" font-size="38" text-anchor="middle">Σ</text>
<text x="503" y="202">y</text>
<text x="237" y="95" font-size="15">w<tspan font-size="11" dy="4">1</tspan></text>
<text x="236" y="137" font-size="15">w<tspan font-size="11" dy="4">2</tspan></text>
<text x="219" y="182" font-size="15">w<tspan font-size="11" dy="4">3</tspan></text>
<text x="219" y="227" font-size="15">w<tspan font-size="11" dy="4">4</tspan></text>
<text x="223" y="273" font-size="15">w<tspan font-size="11" dy="4">5</tspan></text>
<text x="262" y="301" font-size="16">b</text>
<text x="230" y="342" font-size="15" text-anchor="middle">+1</text>
<text x="250" y="342" font-size="15">BIAS</text>
<text x="153" y="21" font-size="15" text-anchor="middle">INPUT NODES</text>
<text x="377" y="139" font-size="15" text-anchor="middle">OUTPUT NODE</text>
</g></svg>

Modelliamo un neurone in maniera semplice:

Un neurone può rievere segnali da altri neuroni, questi segnali sono combinati insieme, e se il risultato di questa combinazione supera una certa soglia, allora il neurone stesso lancerà un segnale, in caso che non superi la soglia, non fa nulla.

Possiamo modellare ciò vedendo come input numeri $x_1, ..., x_n$ a questo punto il neurone calcola $y = w_1 x_1 + ... + w_nx _n$ dove $w_1, ..., w_n$ sono i valori dei "pesi".

Se $y > t$, dove $t$ è un valore di "soglia", allora il neurone emette un segnale di "1" ai neuroni a cui è collegato, altrimenti il segnale avrà valore "0"

Il percettrone aggiunge un *bias* $b \in \mathbb{R}$ che viene aggiunto alla lista pesata dei neuroni, serve per aggiustare il "confine" del nodo finale.
- Con un bias $= 0$, il modello classificherà l'input solo in base al risultato dei neuroni
- Con un bias $>0$, il modello ha bisogno di un valore maggiore dai neuroni per potersi attivare
- Con un bias $<0$, il modello ha bisogno di un valore minore dai neuroni per potersi attivare

A questo punto, la funzione $g(x)$, ritorna 0 se $x <=$ 0 e 1 se $x > 0$. 

Per trovare il valore del percettrone, usiamo $y = g(w \cdot x + b)$  dove $y \in \{ 0, 1\}$.
Possiamo semplificare l'equazione rimuovendo il bias dalla equazione, e creando un nuovo neurone che ha come valore quello del bias

## Training del percettrone

Abbiamo un training set $D$ di $m$ esempi $e^{(1)}, ..., e^{(m)}$ dove ogni $e^{(i)}$ ha associato la label output $y^{(i)}$.
Fare il training del percettrone su $D$ vuol dire derivare i pesi $w_1, ... w_n$ che rendono le predizioni $\hat{y}^{(i)} = g(w \cdot e)$ il più vicino possibile a $y^{(i)}$ per $i = 1, ..., n$.

### Euristica di Rosenblatt

è una tecnica usata per fare training di un percettrone. 

Si parte da $w_1, ..., w_n$ inizializzati con valori randomici, a questo punto, per ogni esempio del training set con indice $i$ calcoliamo $\hat{y}^{(i)}$ come visto precedentemente, e aggiustiamo i pesi in questo modo:
$$
w_j = w_j + \lambda(y^{(i)} - \hat{y}^{(i)})x_j^{(i)}
$$
dove $\lambda > 0$ è un iperparametro chiamato il "learning rate".

Assumendo che $x_j^{(i)} > 0$, allora questo training funziona perchè:
- Se $y^{(i)} > \hat{y}^{(i)}$, allora $w_j$ incrementa, dato che $\lambda > 0$. Questo causerà $\hat{y}^{(i)}$ di aumentare il proprio valore, avvicinandosi al valore $y^{(i)}$ 
- Se $y^{(i)} < \hat{y}^{(i)}$, allora $w_j$ decresce. Questo causerà $\hat{y}^{(i)}$ di diminuire il proprio valore, avvicinandosi al valore $y^{(i)}$ 

In entrambi i casi, il valore del percettrone si avvicina a quello desiderato $^{(i)}$.

--- 
Questo ciclo viene eseguito più volte, dove ogni iterazione è chiamata "epoch" (epoca). L'algoritmo terminerà se arriva ad un numero massimo di iterazioni, o quando l'errore è abbastanza piccolo.

--- 
Se abbiamo una funzione di attivazione lineare $g(\cdot)$, il percettrone corrisponde ad un modello lineare che separa linearmente i dati. Questo funziona bene se i dati sono linearmente separabili.

```plot
x: [11, 52]
y: [0, 19.5]
width: 600
aspect: equal
axes: false
items:
  - line: [[13.2, 4.3], [26.79, 18.5]]
  - points: [[13.53, 7.19], [14.63, 7.36], [14.3, 8.59], [14.3, 10.45], [16.03, 10.88], [16.36, 9.35], [17.46, 11.52], [18.49, 11.78], [16.96, 13.18], [18.96, 13.18], [20.09, 13.31], [18.59, 15.07], [20.69, 14.61], [20.93, 16.4], [21.86, 17.2], [21.96, 16.07], [23.29, 16.57], [23.76, 17.83]]
    shape: star
    size: 2.2
  - points: [[26.35, 15.9], [27.89, 16.57], [24.99, 14.28], [27.22, 13.31], [23.79, 13.18], [25.22, 12.35], [22.56, 12.28], [24.09, 11.12], [21.06, 11.28], [20.59, 9.45], [22.12, 9.59], [18.86, 8.59], [21.76, 8.09], [17.13, 6.99], [18.49, 6.39], [20.03, 6.89], [16.46, 4.97], [18.49, 4.77]]
    shape: plus
  - points: [[47.28, 16.49], [48.69, 16.21], [50.01, 14.96], [46.8, 14.71], [48.64, 14.51], [48.14, 13.75], [49.43, 13.44], [46.77, 13.16], [48.69, 12.48], [34.5, 7.29], [35.92, 7.57], [37.26, 7.57], [38.37, 6.86], [36.17, 6.43], [38.19, 5.95], [34.8, 5.74], [37.49, 5.49], [35.89, 4.91], [38.04, 4.5]]
    shape: star
    size: 2.2
  - points: [[37.84, 16.51], [36.35, 15.9], [37.66, 15.24], [38.95, 15.19], [35.28, 14.18], [36.78, 14.13], [38.14, 13.95], [35.89, 13.21], [37.66, 12.53], [47.18, 9.17], [47.98, 8.21], [46.39, 7.37], [47.61, 6.68], [49.55, 6.66], [46.49, 5.87], [44.87, 5.52], [46.52, 4.88], [48.14, 4.78]]
    shape: plus
  - text: $\textit{Linearly}$
    at: [19, 2.6]
  - text: $\textit{separable data}$
    at: [19, 1]
  - text: $\textit{Not linearly}$
    at: [42, 2.6]
  - text: $\textit{separable data}$
    at: [42, 1]
```

Però, il percettrone, come anche altri modelli, possono usare funzioni di attivazioni non lineari.

# Percettrone multi livello

Il percettrone a singolo livello è molto limitato, ma diventa molto più interessante quando mettiamo in sieme (uno dopo l'altro), più strati.

A questo punto vediamo il percettrone in 3 strati principali
- L'input layer, che sono i neuroni iniziali con cui ci si interfaccia quando si da l'input da analizzare
- L'output layer è il neurone finale dove viene comunicato l'output
- L'hidden layer sono tutti gli strati intermedi tra l'input e l'ouput layer

**Perceptron**

<svg viewBox="0 0 540 362" width="100%" style="max-width:540px;display:block;margin:1.5rem auto" role="img" aria-label="Percettrone: cinque ingressi x₁…x₅ con pesi w₁…w₅ e un neurone di bias +1 con peso b entrano nel nodo di uscita, che somma (Σ) e applica una funzione a gradino, producendo y">
<defs><marker id="i20241220124314-p-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 z" style="fill:currentColor;fill:context-stroke"/></marker></defs>
<g stroke="currentColor" stroke-width="1.3" marker-end="url(#i20241220124314-p-arrow)">
<line x1="189" y1="69.2" x2="308.4" y2="178.9"/>
<line x1="191.6" y1="132.4" x2="308.2" y2="187.2"/>
<line x1="193" y1="189.7" x2="308.1" y2="195.1"/>
<line x1="191.8" y1="253.2" x2="308.2" y2="203.9"/>
<line x1="189" y1="322.8" x2="308.4" y2="213.1"/>
<line x1="234" y1="322" x2="334" y2="232"/>
</g>
<g fill="none" stroke="currentColor" stroke-width="1.5">
<polygon points="48,56.5 152,56.5 152,53 161,59 152,65 152,61.5 48,61.5"/><circle cx="178" cy="59" r="15"/>
<polygon points="48,123.5 152,123.5 152,120 161,126 152,132 152,128.5 48,128.5"/><circle cx="178" cy="126" r="15"/>
<polygon points="48,186.5 152,186.5 152,183 161,189 152,195 152,191.5 48,191.5"/><circle cx="178" cy="189" r="15"/>
<polygon points="48,256.5 152,256.5 152,253 161,259 152,265 152,261.5 48,261.5"/><circle cx="178" cy="259" r="15"/>
<polygon points="48,330.5 152,330.5 152,327 161,333 152,339 152,335.5 48,335.5"/><circle cx="178" cy="333" r="15"/>
<ellipse cx="377" cy="196" rx="70" ry="45" stroke-width="2.5"/><line x1="377" y1="151" x2="377" y2="241"/>
<path d="M389,212 h12 v-32 h14" stroke-width="5"/>
<polygon points="447,193.5 488,193.5 488,190 497,196 488,202 488,198.5 447,198.5"/>
<rect x="216" y="322" width="28" height="28" stroke-width="2"/>
</g>
<g font-size="18" font-weight="bold" font-family="sans-serif" fill="currentColor">
<text x="14" y="65">x<tspan font-size="12" dy="5">1</tspan></text>
<text x="14" y="132">x<tspan font-size="12" dy="5">2</tspan></text>
<text x="14" y="195">x<tspan font-size="12" dy="5">3</tspan></text>
<text x="14" y="265">x<tspan font-size="12" dy="5">4</tspan></text>
<text x="14" y="339">x<tspan font-size="12" dy="5">5</tspan></text>
<text x="341" y="209" font-size="38" text-anchor="middle">Σ</text>
<text x="503" y="202">y</text>
<text x="237" y="95" font-size="15">w<tspan font-size="11" dy="4">1</tspan></text>
<text x="236" y="137" font-size="15">w<tspan font-size="11" dy="4">2</tspan></text>
<text x="219" y="182" font-size="15">w<tspan font-size="11" dy="4">3</tspan></text>
<text x="219" y="227" font-size="15">w<tspan font-size="11" dy="4">4</tspan></text>
<text x="223" y="273" font-size="15">w<tspan font-size="11" dy="4">5</tspan></text>
<text x="262" y="301" font-size="16">b</text>
<text x="230" y="342" font-size="15" text-anchor="middle">+1</text>
<text x="250" y="342" font-size="15">BIAS NEURON</text>
<text x="153" y="21" font-size="15" text-anchor="middle">INPUT NODES</text>
<text x="377" y="139" font-size="15" text-anchor="middle">OUTPUT NODE</text>
</g></svg>

**Multilayer perceptron (MLP)**

<svg viewBox="0 0 580 330" width="100%" style="max-width:580px;display:block;margin:1.5rem auto" role="img" aria-label="Percettrone multistrato: cinque ingressi, uno strato nascosto con due colonne di tre neuroni, un neurone di uscita che produce y; un neurone di bias +1 per ogni livello dopo l'ingresso">
<defs><marker id="i20241220124314-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 z" style="fill:currentColor;fill:context-stroke"/></marker></defs>
<g stroke="currentColor" stroke-width="0.9" marker-end="url(#i20241220124314-arrow)">
<line x1="109.2" y1="51.8" x2="213.9" y2="109.7"/>
<line x1="106.9" y1="54.9" x2="216.4" y2="165.4"/>
<line x1="105" y1="56.5" x2="218.5" y2="220.7"/>
<line x1="111" y1="110.8" x2="212" y2="116.2"/>
<line x1="109.5" y1="116.3" x2="213.6" y2="169.2"/>
<line x1="107.2" y1="119.6" x2="216.1" y2="222.7"/>
<line x1="109.8" y1="168.4" x2="213.3" y2="123"/>
<line x1="111" y1="174.2" x2="212" y2="175.8"/>
<line x1="109.7" y1="179.8" x2="213.3" y2="226.8"/>
<line x1="107.2" y1="228.5" x2="216" y2="127.2"/>
<line x1="109.6" y1="232" x2="213.5" y2="182.5"/>
<line x1="111" y1="237.5" x2="212" y2="233.6"/>
<line x1="105.3" y1="283.7" x2="218.2" y2="129.1"/>
<line x1="107.3" y1="285.5" x2="215.9" y2="186.1"/>
<line x1="109.6" y1="289" x2="213.5" y2="239.5"/>
<line x1="241" y1="117" x2="316" y2="117"/>
<line x1="239.2" y1="123.9" x2="318" y2="168.6"/>
<line x1="236.3" y1="127.4" x2="321" y2="221.8"/>
<line x1="239.2" y1="169.1" x2="318" y2="124.4"/>
<line x1="241" y1="176" x2="316" y2="176"/>
<line x1="239.3" y1="182.7" x2="317.8" y2="225.8"/>
<line x1="236.3" y1="222.6" x2="321" y2="128.2"/>
<line x1="239.3" y1="226.3" x2="317.8" y2="183.2"/>
<line x1="241" y1="233" x2="316" y2="233"/>
<line x1="343.7" y1="122.9" x2="445.4" y2="170.6"/>
<line x1="345" y1="176.1" x2="444" y2="176.9"/>
<line x1="343.8" y1="227.4" x2="445.3" y2="183"/>
<line x1="147" y1="285" x2="220.6" y2="130.5"/>
<line x1="147" y1="285" x2="218.1" y2="188.1"/>
<line x1="147" y1="285" x2="214.4" y2="241.2"/>
<line x1="273" y1="286" x2="326.1" y2="131.2"/>
<line x1="273" y1="286" x2="324" y2="189.3"/>
<line x1="273" y1="286" x2="319.9" y2="243.1"/>
<line x1="398" y1="257" x2="449.9" y2="188.9"/>
</g>
<g fill="none" stroke="currentColor" stroke-width="1.5">
<polygon points="26,42.5 72,42.5 72,39 81,45 72,51 72,47.5 26,47.5"/>
<polygon points="26,107.5 72,107.5 72,104 81,110 72,116 72,112.5 26,112.5"/>
<polygon points="26,171.5 72,171.5 72,168 81,174 72,180 72,176.5 26,176.5"/>
<polygon points="26,235.5 72,235.5 72,232 81,238 72,244 72,240.5 26,240.5"/>
<polygon points="26,292.5 72,292.5 72,289 81,295 72,301 72,297.5 26,297.5"/>
<circle cx="97" cy="45" r="14"/>
<circle cx="97" cy="110" r="14"/>
<circle cx="97" cy="174" r="14"/>
<circle cx="97" cy="238" r="14"/>
<circle cx="97" cy="295" r="14"/>
<circle cx="227" cy="117" r="14"/>
<circle cx="227" cy="176" r="14"/>
<circle cx="227" cy="233" r="14"/>
<circle cx="331" cy="117" r="14"/>
<circle cx="331" cy="176" r="14"/>
<circle cx="331" cy="233" r="14"/>
<circle cx="459" cy="177" r="14"/>
<polygon points="473,174.5 508,174.5 508,171 517,177 508,183 508,179.5 473,179.5"/>
<rect x="134" y="285" width="26" height="26" stroke-width="2"/>
<rect x="260" y="286" width="26" height="26" stroke-width="2"/>
<rect x="381" y="257" width="26" height="26" stroke-width="2"/>
<rect x="198" y="95" width="160" height="166" stroke-width="2" stroke-dasharray="7 4"/>
</g>
<g stroke="currentColor" stroke-width="1" marker-end="url(#i20241220124314-arrow)"><line x1="191" y1="286" x2="162" y2="298"/><line x1="233" y1="291" x2="258" y2="299"/></g>
<g font-size="15" font-weight="bold" font-family="sans-serif" fill="currentColor">
<text x="2" y="50" font-size="16">x<tspan font-size="11" dy="4">1</tspan></text>
<text x="2" y="115" font-size="16">x<tspan font-size="11" dy="4">2</tspan></text>
<text x="2" y="179" font-size="16">x<tspan font-size="11" dy="4">3</tspan></text>
<text x="2" y="243" font-size="16">x<tspan font-size="11" dy="4">4</tspan></text>
<text x="2" y="300" font-size="16">x<tspan font-size="11" dy="4">5</tspan></text>
<text x="523" y="183" font-size="17">y</text>
<text x="147" y="303" text-anchor="middle" font-size="13">+1</text>
<text x="273" y="304" text-anchor="middle" font-size="13">+1</text>
<text x="394" y="275" text-anchor="middle" font-size="13">+1</text>
<g text-anchor="middle" font-size="13">
<text x="90" y="18">INPUT LAYER</text>
<text x="275" y="74">HIDDEN LAYER</text>
<text x="487" y="152">OUTPUT LAYER</text>
<text x="212" y="288" font-size="12">BIAS</text><text x="212" y="303" font-size="12">NEURONS</text>
<text x="443" y="260" font-size="12">BIAS</text><text x="443" y="275" font-size="12">NEURON</text>
</g></g></svg>

Questo percettrone è chiamato "multi level perceptron" o MLP.

Ha un numero fissato di $k$ strati, ed ogni strato $L_p$ ha un numero fisso di neuroni $d_p$. Ogni strato può avere un numero arbitrario di neuroni, eccetto l'ultimo che ne ha uno solo

Ogni neurone $\eta_u^{(p)}$, dello strato $L_p$, $u = 1, \dots, d_p$, riceve come input, gli output $y_1^{(p-1)}, \dots, y_{d_{p-1}}^{(p-1)}$ di tutti i neuroni $\eta_1^{(p-1)}, \dots, \eta_{d_{p-1}}^{(p-1)}$ dello strato precedente $L_{p-1}$.

L'output $y_u^{(p)}$ del neurone $\eta_u^{(p)}$ viene calcolata come una combinazione lineare dei suoi input  $y_1^{(p-1)}, \dots, y_{d_{p-1}}^{(p-1)}$ con i pesi $w_{1,u}^{(p)}, \dots, w_{d_{p-1},u}^{(p)}$, seguita dall'applicazione di una funzione di attivazione $g(\cdot)$:

$$
y_u^{(p)} = g\left( \sum_v w_{v,u}^{(p)} y_v^{(p-1)} \right)
$$

![[Pasted image 20241220125543.png]]

La matematica di un perceptrone multistrato può essere espressa in una forma più compatta e forse più comprensibile adottando una notazione matriciale.

Per semplificare la spiegazione di un layer con indice $p$, usiamo "$\text{in}$" per rappresentare l'input di questo strato (lo strato con indice $p - 1$), ed usiamo "$\text{out}$" per rappresentare l'output dello strato corrente (lo strato con indice $p$)

Sia $\mathbf{y}^\text{in} = (y_1^\text{in}, \dots, y_{d_\text{in}}^\text{in}) \in \mathbb{R}^{d_\text{in}}$ un vettore (colonna) $d_\text{in}$-dimensionale contenente gli output dello strato di input $L_\text{in}$.

Sia $\mathbf{W} \in \mathbb{R}^{d_\text{out} \times d_\text{in}}$ una matrice $(d_\text{out} \times d_\text{in})$-dimensionale che raccoglie tutti i pesi dallo strato di input (dimensione $d_\text{in}$) allo strato di output (dimensione $d_\text{out}$), ovvero:

$$
\mathbf{W^\text{out}} =
\begin{bmatrix}
w_{1,1}^\text{out} & \dots & w_{d_\text{in},1}^\text{out} \\
\vdots & \ddots & \vdots \\
w_{1,d_\text{out}}^\text{out} & \dots & w^\text{out}_{d_\text{in},d_\text{out}}
\end{bmatrix}
$$

Le uscite $\mathbf{y}^\text{out} = (y_1^\text{out}, \dots, y_{d_\text{out}}^\text{out}) \in \mathbb{R}^{d_\text{out}}$ possono essere espresse come:

$$
\mathbf{y}^\text{out} = g\left( \mathbf{W}^\text{out} \mathbf{y}^\text{in} \right)
$$

dove $g(\cdot)$ è applicata elemento per elemento a tutte le componenti del vettore $\mathbf{W}^\text{out} \mathbf{y}^\text{in}$.

<svg viewBox="0 0 700 258" width="100%" style="max-width:700px;display:block;margin:1.5rem auto" role="img" aria-label="Rete feed-forward: l'ingresso x viene moltiplicato per W⁽¹⁾, passa nel livello L₁ (neuroni η₁ … η_d₁), si ottiene y⁽¹⁾ = g(W⁽¹⁾x), e così via fino a W⁽ᵏ⁾ e al livello di uscita Lₖ">
<defs><marker id="i20241220131810-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 z" style="fill:currentColor;fill:context-stroke"/></marker></defs>
<g fill="none" stroke="currentColor" stroke-width="2">
<rect x="2" y="16" width="28" height="235"/>
<path d="M52,16 L120,34 L120,232 L52,251 z"/>
<rect x="142" y="34" width="42" height="202"/><rect x="205" y="34" width="57" height="202"/>
<path d="M281,34 L341,49 L341,218 L281,232 z"/>
<rect x="369" y="60" width="41" height="146"/><rect x="430" y="60" width="80" height="146"/>
<path d="M531,60 L589,75 L589,191 L531,206 z"/>
<rect x="608" y="75" width="41" height="119"/>
<g stroke-width="1.5">
<circle cx="163" cy="58" r="18"/>
<circle cx="163" cy="214" r="18"/>
<circle cx="388" cy="86" r="18"/>
<circle cx="388" cy="182" r="18"/>
<circle cx="628" cy="101" r="18"/>
<circle cx="628" cy="169" r="18"/>
</g>
<g stroke-width="1.5" marker-end="url(#i20241220131810-arrow)">
<line x1="120" y1="135" x2="140" y2="135"/>
<line x1="184" y1="135" x2="203" y2="135"/>
<line x1="410" y1="135" x2="428" y2="135"/>
<line x1="589" y1="135" x2="605" y2="135"/>
<line x1="649" y1="135" x2="694" y2="135"/>
</g></g>
<g fill="currentColor">
<!-- moltiplicazioni e puntini -->
<g font-size="22" text-anchor="middle"><text x="41" y="142">×</text><text x="272" y="142">×</text><text x="352" y="142">⋯</text><text x="520" y="142">×</text></g>
<g font-size="18" font-weight="bold" text-anchor="middle"><text x="163" y="141">⋮</text><text x="388" y="141">⋮</text><text x="628" y="141">⋮</text></g>
<g font-family="serif" font-weight="bold" font-style="italic" font-size="20" text-anchor="middle">
<text x="16" y="142">x</text>
<text x="84" y="142">W<tspan font-size="11" dx="2" dy="-7">(1)</tspan></text>
<text x="309" y="142">W<tspan font-size="11" dx="2" dy="-7">(2)</tspan></text>
<text x="559" y="142">W<tspan font-size="11" dx="2" dy="-7">(k)</tspan></text>
<text x="164" y="24">L<tspan font-size="13" dy="4">1</tspan></text>
<text x="392" y="46">L<tspan font-size="13" dy="4">k−1</tspan></text>
<text x="628" y="54">L<tspan font-size="13" dy="4">k</tspan></text>
<text font-size="17" transform="translate(238,135) rotate(-90)">y<tspan font-size="11" dx="2" dy="-7">(1)</tspan><tspan dy="7"> = g(W</tspan><tspan font-size="11" dx="2" dy="-7">(1)</tspan><tspan dy="7">x)</tspan></text>
<text font-size="16" transform="translate(459,134) rotate(-90)">y<tspan font-size="11" dx="2" dy="-7">(k−1)</tspan><tspan dy="7"> =</tspan></text>
<text font-size="16" transform="translate(486,134) rotate(-90)">g(W<tspan font-size="11" dx="2" dy="-7">(k−1)</tspan><tspan dy="7">y</tspan><tspan font-size="11" dx="2" dy="-7">(k−2)</tspan><tspan dy="7">)</tspan></text>
</g>
<g font-family="serif" font-style="italic">
<text x="152" y="62" font-size="13">η</text><text x="160" y="56" font-size="7.5">(1)</text><text x="160" y="67" font-size="8">1</text><text x="152" y="218" font-size="13">η</text><text x="160" y="212" font-size="7.5">(1)</text><text x="160" y="223" font-size="8">d<tspan font-size="6" dy="2">1</tspan></text>
<text x="377" y="90" font-size="13">η</text><text x="385" y="84" font-size="7.5">(k−1)</text><text x="385" y="95" font-size="8">1</text><text x="377" y="186" font-size="13">η</text><text x="385" y="180" font-size="7.5">(k−1)</text><text x="385" y="191" font-size="8">d<tspan font-size="6" dy="2">k−1</tspan></text>
<text x="617" y="105" font-size="13">η</text><text x="625" y="99" font-size="7.5">(k)</text><text x="625" y="110" font-size="8">1</text><text x="617" y="173" font-size="13">η</text><text x="625" y="167" font-size="7.5">(k)</text><text x="625" y="178" font-size="8">d<tspan font-size="6" dy="2">k</tspan></text>
</g>
<g font-family="serif" font-weight="bold" font-size="9" text-anchor="middle">
<text x="16" y="9">INPUT</text><text x="673" y="150">OUTPUT</text>
</g></g></svg>

A questo punto denotiamo $f^{(p)}$ come la funzione $\mathbf{y}^{(p)} = g\left( \mathbf{W}^{(p)} \mathbf{y}^{(p-1)} \right)$ dello strato $L_p$ i un MLP a $k$ strati. 
Abbiamo $x$ l'input dato all'MLP, allora la funzione finale che rappresenta l'intero MLP sarà del tipo:

$$
\begin{aligned}
M L P(\boldsymbol{x}) &= 
\left(f^{(k)} \circ f^{(k-1)} \circ \cdots \circ f^{(2)} \circ f^{(1)}\right)(\boldsymbol{x}) \\
&=f^{(k)}\left(f^{(k-1)}\left(\cdots\left(f^{(2)}\left(f^{(1)}(\boldsymbol{x})\right)\right)\right)\right)
\end{aligned}
$$

Nel caso in cui tutte le funzioni di attivazione siano lineari, le funzioni effettuerebbero semplicemente una moltiplicazione, a questo punto potremmo rappresentare il tutto tramite una produttoria dei pesi, ma a questo punto stiamo creando l'equivalente di un percettrone a singolo strato.

--- 
Gli MLP sono considerati come "feed forward neural networks", cioè che i dati fluiscono da sinistra verso destra (da input ad output)

# Funzione di attivazione

Si può modificare le funzioni di attivazione all'interno di un MLP in maniera da migliorare il learning del modello e gestire task che non sono solo quelli di classificazione binaria.

Di solito la funzione di attivazione è definita come un iperparametro e scelto durante la fase di training tramite lo step di validazione. 

## ReLU

La funzione di attivazione ReLU è quella più consigliata per la maggior parte dei MLP.
é una funzione non lineare ma che rimane molto vicina ad essere lineare, infatti è "lineare in parti", perchè è una funzione che continene due "parti" lineari. 

Dato che è quasi lineare, conserva molte proprietà dei modelli lineari, ed è facile da ottimizzare tramite metodi del gradiente, spesso usati per allenare gli MLP

$$
r(x)=\max \{0, x\}= \begin{cases}0, & x<0 \\ x, & x \geq 0\end{cases}
$$

```plot
# matplotlib-style frame: no axes, grid and ticks drawn by hand
x: [-13.4, 11.6]
y: [-1.9, 11.9]
width: 520
height: 290
axes: false
alt: ReLU Activation Function
items:
  - text: ReLU Activation Function
    at: [0, 10.8]
    anchor: n
  # grid
  - line: [[-10, -0.5], [-10, 10.5], [-7.5, 10.5], [-7.5, -0.5], [-5, -0.5], [-5, 10.5], [-2.5, 10.5], [-2.5, -0.5], [0, -0.5], [0, 10.5], [2.5, 10.5], [2.5, -0.5], [5, -0.5], [5, 10.5], [7.5, 10.5], [7.5, -0.5], [10, -0.5], [10, 10.5]]
    color: muted
    width: 0.4
  - line: [[-11, 0], [11, 0], [11, 2], [-11, 2], [-11, 4], [11, 4], [11, 6], [-11, 6], [-11, 8], [11, 8], [11, 10], [-11, 10]]
    color: muted
    width: 0.4
  # frame
  - line: [[-11, -0.5], [11, -0.5], [11, 10.5], [-11, 10.5], [-11, -0.5]]
    width: 1
  - fn: max(0, x)
    domain: [-10, 10]
    color: blue
  - text: $\max(0,x)$
    at: [5.6, 1]
  # tick labels
  - { text: "$-10.0$", at: [-10, -0.5], anchor: s }
  - { text: "$-7.5$", at: [-7.5, -0.5], anchor: s }
  - { text: "$-5.0$", at: [-5, -0.5], anchor: s }
  - { text: "$-2.5$", at: [-2.5, -0.5], anchor: s }
  - { text: "$0.0$", at: [0, -0.5], anchor: s }
  - { text: "$2.5$", at: [2.5, -0.5], anchor: s }
  - { text: "$5.0$", at: [5, -0.5], anchor: s }
  - { text: "$7.5$", at: [7.5, -0.5], anchor: s }
  - { text: "$10.0$", at: [10, -0.5], anchor: s }
  - { text: "$0$", at: [-11, 0], anchor: w }
  - { text: "$2$", at: [-11, 2], anchor: w }
  - { text: "$4$", at: [-11, 4], anchor: w }
  - { text: "$6$", at: [-11, 6], anchor: w }
  - { text: "$8$", at: [-11, 8], anchor: w }
  - { text: "$10$", at: [-11, 10], anchor: w }
```

## Funzione sigmoidea

è la più comune approssimazione alla funzione "step", è monotona crescente ed ha limite 0 quando tende a $-\infty$ e ad 1 quando tende a $+\infty$ 

$$
sigm(x) = \frac{1}{1+e^{-x}}
$$

```plot
x: [-6, 6]
y: [0, 1]
width: 480
height: 270
xticks: [-6, -4, -2, 0, 2, 4, 6]
yticks: [0, 0.5, 1]
items:
  # grid: every 2 on x, every 0.5 on y
  - { vline: -6, color: muted, dash: false, width: 0.4 }
  - { vline: -4, color: muted, dash: false, width: 0.4 }
  - { vline: -2, color: muted, dash: false, width: 0.4 }
  - { vline: 2, color: muted, dash: false, width: 0.4 }
  - { vline: 4, color: muted, dash: false, width: 0.4 }
  - { vline: 6, color: muted, dash: false, width: 0.4 }
  - { hline: 0.5, color: muted, dash: false, width: 0.4 }
  - { hline: 1, color: muted, dash: false, width: 0.4 }
  - fn: 1/(1 + exp(-x))
    color: blue
```

## Funzione iperbolica

è monotona crescente, ed ha limite -1 quando tende a $-\infty$ e ad 1 quando tende a $+\infty$ 

```plot
x: [-2.9, 2.9]
y: [-1.4, 1.55]
aspect: equal
grid: 0.5
xticks: [-2, -1, 1, 2]
yticks: [-1, 1]
xlabel: $x$
ylabel: $\tanh(x)$
items:
  - fn: tanh(x)
    domain: [-2.75, 2.75]
    color: red
    width: 3
```

## Arctan 

è l'inverso della funzione tangente, è monotona crescente, ed ha limite $-\frac{\pi}{2}$ quando tende a $-\infty$ e ad $\frac{\pi}{2}$ quando tende a $+\infty$ 

```plot
x: [-4.8, 4.95]
y: [-2.15, 2.35]
aspect: equal
xticks: [-4, -3, -2, -1, 1, 2, 3, 4]
yticks: { "pi/2": "$\\frac{\\pi}{2}$", "-pi/2": "$-\\frac{\\pi}{2}$" }
xlabel: $x$
ylabel: $\arctan(x)$
items:
  # grid: integers on x, ±π/2 on y
  - line: [[-4, -5], [-4, 5], [-3, 5], [-3, -5], [-2, -5], [-2, 5], [-1, 5], [-1, -5], [0, -5], [0, 5], [1, 5], [1, -5], [2, -5], [2, 5], [3, 5], [3, -5], [4, -5], [4, 5]]
    color: muted
    width: 0.4
  - { hline: pi/2, color: muted, dash: false, width: 0.4 }
  - { hline: -pi/2, color: muted, dash: false, width: 0.4 }
  - fn: atan(x)
    domain: [-4.5, 4.5]
    color: red
    width: 3
```

## Softmax

è una funzione che converte un vettore $d$-dimensionale in un vettore di valori reali che contiene la distribuzione di probabilità, cioè normalizzarle ad un valore compreso fra 0 e 1, e che sommano tutti ad 1. 

$$
\sigma:\mathbb{R}^d \rightarrow (0,1)^d
$$
Softmax:

$$
\sigma(\boldsymbol{x})_i=\frac{e^{x_i}}{\sum_{j=1}^d e^{x_j}}
$$

è principalmente usato nell'output layer

# Loss function

Fare il training di un modello richiede trovare i migliori pesi $W = \{W^{(1)}, ..., W^{(k)}\}$  che minimizzano la "distanza" fra l'esempio in $D$ e il proprio label.

Questa funzione che calcola la distanza è chiamata la "loss function", formalmente espressa come $l: \mathbb{R}^n \times R^{n^\prime} \rightarrow \mathbb{R}$ che calcola la distanza $l(f_w(x_i), y_i)$ fra la label $f_w(x_i)$ calcolata dall'MLP e la vera label $y_i$. Se la differenza è un valore grande, allora vuol dire che sia numericamente che "concettualmente", i due risultati sono molto differenti. 

Questo è applicato su un singolo esempio del dataset, possiamo definire la funzione che calcola l'errore complessivo semplicementte effettuando una somma pesata di ogni esempio nel dataset 

$$
\mathcal{L}\left(\boldsymbol{W}, f_W, D\right)=\frac{1}{|D|} \sum_{\left(\boldsymbol{x}_i, y_i\right) \in D} \ell\left(f_W\left(\boldsymbol{x}_i\right), \boldsymbol{y}_i\right) .
$$

e quindi possiamo definire il problema di ML come un problema di ottimizzazione, dove dobbiamo minimizzare:

$$
argmin_w \ \mathcal{L}(W, f_w, D)
$$

## Gradient descent

Questo problema di ottimizzazione può essere risolto tramite una tecnica di ottimizzazione chiamata "gradient descent", che è l'opposto dell'algoritmo di hill climbing.

è una funzione definita come $\phi: \mathbb{R}^d \rightarrow \mathbb{R}$, la "direzione" dello steepest descent in un punto $z \in \mathbb{R}^d$ corrisponde al negativo del gradiente di $\phi$ in $z$, denotato come:

$$
\nabla_z \phi=\left(\frac{\partial \phi}{\partial x_1}(\mathbf{z}), \ldots, \frac{\partial \phi}{\partial x_d}(\mathbf{z})\right) .
$$

che contiene le derivate parziali di $\phi$ su $z$ 

Il gradient descent inizia ad un punto casuale $z \in \mathbb{R}^d$, ed applica iterativamente:
- Calcola la direzione del deepest descent in $z$, cioè $-\nabla_z \phi$ 
- Aggiorna $z$ facendo un passo verso la direzione del steepest descent, cioè: $z = z - \lambda\nabla_z \phi$ dove $lambda > 0$ è un iper parametro chiamato il "learning rate" che dice "quanto grande" è il passo da fare verso lo steepest descent
fino a quando $z$ non decresce più la funzione obiettivo, e quindi si è arrivati ad un minimo locale

![[Pasted image 20241220143619.png]]

Nel contesto del MLP, il gradient descent è applicato durante la fase di training, applicandola ai pesi $W$ per minimizzare la funzione obiettivo $\phi = \mathcal{L}(W, f_w, D)$ 

Ora lo step chiave è di calcolare il gradiente della funzione $\phi$, che può essere complesso, dato che la funzione $f_w$ implementata nell'MLP potrebbe essere molto complessa, dato che può essere composizione di molte funzioni, una per ogni layer.

Un modo per risolvere ciò sarebbe di applicare la "chain rule". Possiamo vedere la funzione da analizzare dell'MLP come:

$$
M L P(\boldsymbol{x})=\left(f^{(k)} \circ f^{(k-1)} \circ \cdots \circ f^{(2)} \circ f^{(1)}\right),
$$

La chain rule ci dice che la derivata $D(f_1 \circ f_2) = (D f_1 \circ f_2)D f_2$, dove $Df$ indica la derivata di $f$. 
A questo punto possiamo applicare ricorsivamente la chain rule per ottenere: 

$$
D(f_1 \circ ... \circ f_n) =
\prod_{k=1}^n\left(D f_k \circ f_{(k+1) .. n}\right)
$$

dove $f_{a . . b}=f_a \circ \cdots \circ f_b$  

## Back propagation

Eseguendo l'applicazione ricorsiva della chain rule ci potrebbe portare ad una duplicazione della stessa derivata, ripetendo inutilmente dei calcoli. 

Per evitare ciò possiamo usare un approccio di programmazione dinamica, chiamato "back propagation". 
è chiamata in questo modo perchè l'algoritmo prima effettua un passo in "avanti" dove le derivate di ogni strato sono calcolate e salvate, per poi effettuare un passo "indietro" dove i gradienti vengono calcolati, muovendosi dall'ultimo al primo strato, combinando tramite programmazione dinamica, le derivate intermedie usate durante il forward pass

--- 

Il gradient descent ha delle limitazioni:
- funziona solo se la funzione da minimizzare è differenziabile, cosi da poter calcolare il gradiente 
- ci si potrebbe fermare ad un minimo locale 
- scegliere un $\lambda$ corretto è difficile, se usiamo un $\lambda$ troppo grande, potremmo saltare il minimo, se $\lambda$ è piccolo, potremmo convergere troppo lentamente
- aumentare il numero degli strati potrebbe causare i gradienti di diventare molto piccoli o molto grandi, causando problemi di rappresentazione numerica
  - Durante lo step backward, durante il calcolo dei gradienti dall'output layer all'input layer, i gradienti diventano man mano più piccoli più andiamo avanti, convergendo a 0. Questo causa i pesi ad essere aggiornati in maniera minima, e quindi mai convergere al minimo locale
  - Allo stesso modo, i gradienti potrebbero essere molto grandi, causando grandi cambiamenti nei pesi, causando il modello a divergere. 

## Gradient descent stocastico 

Calcolare l'errore complessivo del dataset ad ogni step del gradient descent può essere molto dispendioso. Per risolvere questo problema, usiamo una variante del gradient descent che approssima $\mathcal{L}(W, f_w, D)$ calcolando la loss function solo su un subset (piccolo) di $M \subseteq D$, che chiamiamo "minibatch", e quindi calcolando la somma della loss function complessiva solo su questo subset.

- Usiamo l'intero training set D che è mischiato "randomicamente" e suddiviso in minibatch.
- Ogni minibatch è usato come singolo step del gradient descent 
- Una volta aver processato tutti i minibatch, ci ritroviamo al punto in cui abbiamo analizzato tutti i dati nel nostro dataset, quindi consideriamo questo come una singola epoca di training
- Ripetiamo questo proccesso (randomizzando $D$ ogni volta) per un certo numero di epoche.

**for** a fixed number of epochs **do**
- shuffle training set $D$ and split it into minibatches
- **for** every minibatch $M$ **do**
  - compute $f_{\boldsymbol{W}}(\boldsymbol{x}_i)$ (output of the MLP given current weights $\boldsymbol{W}$) for every $(\boldsymbol{x}_i, \boldsymbol{y}_i) \in M$
  - compute (approximate) loss $\hat{\mathcal{L}} = \frac{1}{\lvert M\rvert}\sum_{(\boldsymbol{x}_i,\boldsymbol{y}_i)\in M} \ell(f_{\boldsymbol{W}}(\boldsymbol{x}_i), \boldsymbol{y}_i)$
  - compute gradient $\nabla_{\boldsymbol{W}}\hat{\mathcal{L}}$ of $\hat{\mathcal{L}}$
  - take a step of gradient descent: update current weights $\boldsymbol{W}$ as $\boldsymbol{W} \leftarrow \boldsymbol{W} - \lambda\nabla_{\boldsymbol{W}}\hat{\mathcal{L}}$
- **endfor**

**endfor**

# Loss functions

Elenchiamo alcune loss function più usate. 
Indicheremo con $\hat{y} = f_w(x)$ è la predizione, mentre $y$ la label corretta.
### $L_p$ distance 
è una metrica utile per problemi di regressione, la dimensionalità di $\hat y$ e $y$ deve essere uguale. 

$$
\ell(\widehat{\boldsymbol{y}}, \boldsymbol{y})=\|\widehat{\boldsymbol{y}}-\boldsymbol{y}\|^p
$$

### NLL (Negative log-likelihood)
Assumiamo che ogni elemento di $\hat y$ rappresenti la probabilità che quell'esempio faccia parte di una certa classe, e che la classe corretta sia il $q$-esimo elemento.

$$
\ell(\widehat{\boldsymbol{y}}, \boldsymbol{y})=- log \ \hat y_q
$$

### CE (Cross entropy)

La funzione NLL richiede che i valori $\hat y$ rappresentino una distribuzione di probabilità.
il CE è semplicemente la funzione NLL ma che trasforma, tramite uno strato softmax, qualsiasi vettore numerico in una distribuzione di probabilità.

Softmax:

$$
\operatorname{SOFTMAX}(\widehat{\boldsymbol{y}})=\frac{e^{\hat{y}_i}}{\sum_{j=1}^n e^{\hat{y}_j}}

$$
CE:

$$
\ell(\widehat{\boldsymbol{y}}, \boldsymbol{y})=-\log \frac{e^{\widehat{\boldsymbol{y}}_q}}{\sum_{j=1}^n e^{\hat{\boldsymbol{y}}_j}}=-\widehat{\boldsymbol{y}}_q+\log \sum_{j=1}^n e^{\hat{\boldsymbol{y}}_j}
$$

### BCE (Binary cross entropy)

Corrisponde a NLL però nel caso di classificazione binaria. Assume che $\hat y \in [0,1]$ sia uno scalare e che $y \in \{0,1\}$ sia uno scalare.
$\hat y$ rappresenta la probabilità che $y = 1$, e $1-\hat y$ rappresenta la probabilità che $y = 0$ 

$$ 
\ell(\mathbf{y}, \hat{\mathbf{y}}) = - \left( \mathbf{y} \log \hat{\mathbf{y}} + (1 - \mathbf{y}) \log(1 - \hat{\mathbf{y}}) \right) 
$$

# Deep learning vs Machine learning vs AI
Il termine **deep learning** si riferisce a un insieme di tecniche di **machine learning** in cui i modelli sono rappresentati come **circuiti algebrici complessi**, con connessioni i cui pesi (o "forze") possono essere modificati durante l'addestramento.

La parola "deep" ("profondo") indica che questi circuiti sono organizzati in **molti strati**: ciò implica che i percorsi di calcolo dagli input agli output attraversano numerosi passaggi.

Questi circuiti algebrici corrispondono a **reti neurali artificiali**. Di conseguenza, il deep learning utilizza reti neurali con **molti strati di neuroni artificiali connessi tra loro**.

<svg viewBox="0 0 600 400" width="100%" style="max-width:600px;display:block;margin:1.5rem auto" role="img" aria-label="Tre ellissi annidate: l'intelligenza artificiale contiene il machine learning, che contiene il deep learning">
<!-- three nested ellipses touching at the bottom -->
<ellipse cx="300" cy="200" rx="235" ry="190" fill="var(--palette-blue)" fill-opacity="0.15" stroke="var(--palette-blue)" stroke-width="2"/>
<ellipse cx="300" cy="262" rx="168" ry="128" fill="var(--palette-teal)" fill-opacity="0.2" stroke="var(--palette-teal)" stroke-width="2"/>
<ellipse cx="300" cy="322" rx="108" ry="68" fill="var(--palette-orange)" fill-opacity="0.25" stroke="var(--palette-orange)" stroke-width="2"/>
<g fill="currentColor" text-anchor="middle" font-size="14">
<text x="300" y="74" font-size="19" font-weight="bold">ARTIFICIAL INTELLIGENCE</text>
<text x="300" y="97">Programs with the ability to</text>
<text x="300" y="116">learn and reason like humans</text>
<text x="300" y="170" font-size="17" font-weight="bold">MACHINE LEARNING</text>
<text x="300" y="192">Algorithms with the ability to learn</text>
<text x="300" y="211">without being explicitly programmed</text>
<text x="300" y="284" font-size="15" font-weight="bold">DEEP LEARNING</text>
<text x="300" y="303" font-size="13">Subset of machine learning</text>
<text x="300" y="320" font-size="13">in which artificial neural</text>
<text x="300" y="337" font-size="13">networks adapt and learn</text>
<text x="300" y="354" font-size="13">from vast amounts of data</text>
</g>
</svg>

<svg viewBox="0 0 720 370" width="100%" style="max-width:720px;display:block;margin:1.5rem auto" role="img" aria-label="Riquadri annidati: l'intelligenza artificiale contiene il machine learning, diviso in supervised, unsupervised e reinforcement learning; il deep learning attraversa tutti e tre">
<g stroke="currentColor" stroke-width="1.2">
<rect x="6" y="4" width="708" height="362" rx="24" fill="var(--palette-muted)" fill-opacity="0.15"/>
<rect x="18" y="132" width="684" height="226" rx="16" fill="var(--palette-orange)" fill-opacity="0.3"/>
<!-- the three learning paradigms -->
<rect x="30" y="158" width="212" height="192" rx="28" fill="var(--palette-teal)" fill-opacity="0.25"/>
<rect x="254" y="158" width="212" height="192" rx="28" fill="var(--palette-teal)" fill-opacity="0.25"/>
<rect x="478" y="158" width="212" height="192" rx="28" fill="var(--palette-teal)" fill-opacity="0.25"/>
<!-- deep learning spans all three -->
<rect x="40" y="246" width="640" height="96" rx="20" fill="var(--palette-muted)" fill-opacity="0.2"/>
</g>
<g fill="currentColor" font-size="15">
<text x="26" y="26">Artificial intelligence</text>
<text x="48" y="151">Machine learning</text>
<g text-anchor="middle">
<text x="136" y="180">Supervised</text>
<text x="136" y="198">learning</text>
<text x="360" y="180">Unsupervised</text>
<text x="360" y="198">learning</text>
<text x="584" y="180">Reinforcement</text>
<text x="584" y="198">learning</text>
<text x="360" y="266">Deep learning</text>
</g>
</g>
</svg>

## Teorema dell'approssimazione universale

è un teorema molto importante sulla rappresentazione e potenza approssimativa delle reti neurali di funzioni arbitrarie.

Il teorema dice che un MLP con solo 1 output layer lineare e un hidden layer con qualsiasi funzione di attivazione non lineare, può approssimare qualsiasi funzione *Borel* misurabile, cioè qualsiasi funzione continua su un sottoinsieme chiuso e delimitato di $\mathbb{R}^n$, con qualsiasi errore non zero desiderato, a condizione che siano dati abbastanza hidden units. 

Quindi ci dice che un MLP con un singolo hidden layer (ma non ci dice quanto grande questo hidden layer sia) riesce ad approssimare qualsiasi funzione Borel misurabile con un arbitrario livello di precisione. 

---
Di solito, in pratica, nelle deep MLP, rappresentazioni più complesse sono costruite sopra rappresentazioni più semplici, arrivando ad una rappresentazione man mano più astratta e significativa.

![[Pasted image 20241220164232.png]]
