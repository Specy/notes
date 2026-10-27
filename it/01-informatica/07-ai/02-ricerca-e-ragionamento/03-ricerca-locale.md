---
title: "Ricerca Locale e Algoritmi Evolutivi"
description: "Algoritmi di ricerca locale (hill climbing, simulated annealing, local beam search) e algoritmi evolutivi per la massimizzazione di funzioni obiettivo in spazi grandi o continui senza memoria del percorso."
type: lecture
---
Gli algoritmi di ricerca locale operano dallo stato iniziale, senza tenere traccia degli stati o percorsi che sono stati raggiunti. 

Vuol dire che gli algoritmi di ricerca locale potrebbero non esplorare mai una porzione dello spazio che ha la soluzione, che li rende molto differenti dagli algoritmi precedentemente visti. Gli algoritmi che abbiamo visto sono chiamati "sistematici", cioè che è sempre possibile raggiungere un qualsiasi stato che è connesso tramite un percorso, allo stato iniziale.

Gli algoritmi di ricerca locale sono non sistematici. Non sono completi, ne ottimali, ma utilizzano pochissima meoria e possono comunque trovare soluzioni "accettabili" in spazi grandi o infiniti, che non sono facilmente eseguibili tramite algoritmi sistematici.

Lo scopo degli algoritmi di ricerca locale è di massimizzare una funzione obiettivo, ignorando gli stati goal da raggiungere, in questo modo si riesce a trovare il miglior stato rispetto la funzione obiettivo.

## Hill climbing
L'algoritmo di **hill climbing** tiene traccia dello stato corrente e ad ogni iterazione, si muove nel prossimo stato che ha il più alto valore della funzione obiettivo:

- Si dirige verso la direzione che ha la salita più rapida 
- l'ideale finale sarebbe quello di trovare il massimo globale, ma tipicamente riesce a trovare solo un massimo locale
- l'algoritmo termina quando raggiunge un "picco", dove nessuno stato vicino ha un valore maggiore della funzione obiettivo. Questo vuol dire che se una curva ha due picchi, il secondo più alto del primo, l'algoritmo si fermerà al primo picco.

```plot
x: [0, 41]
y: [0, 28]
width: 560
height: 340
xlabel: state space
ylabel: objective function
items:
  - fn: f
    through: [[1, 4.1], [3.9, 5.8], [6.4, 8.5], [7.9, 13.9], [9.9, 13.9], [11.5, 21], [12.1, 25.1], [13, 21], [14.6, 12.8], [15.8, 7.9], [17.8, 3.6], [19.8, 2.2], [21.4, 5.7], [23.9, 12.6], [25.7, 6.3], [26.9, 3.9], [28.1, 7.9], [28.8, 8.5], [31.1, 8.5], [33.1, 4.7], [34.6, 2.8], [37, 2.3]]
    color: teal
    width: 2
  - text: global maximum
    at: [16.6, 26.9]
    anchor: e
  - line: [[16.3, 26.9], [12.7, 25.6]]
  - text: shoulder
    at: [4.7, 18.8]
  - line: [[6.9, 17.4], [8.1, 14.5]]
  - text: local maximum
    at: [29.4, 14.5]
    anchor: e
  - line: [[29.1, 14.5], [24.6, 13.1]]
  - text: “flat” local maximum
    at: [33.9, 11.8]
    anchor: e
  - line: [[33.6, 11.8], [31.3, 9.1]]
  - line: [[21.4, 0], [21.4, 5]]
    arrow: true
  - line: [[21.6, 6.3], [22.5, 9.2]]
    arrow: true
  - point: [21.4, 5.7]
    color: muted
  - text: current
    at: [21.4, -1.3]
  - text: state
    at: [21.4, -2.8]
```

Per aumentare la possibilità di trovare il massimo locale:

- permettiamo movimenti "laterali", cioè di muoversi tra stati che hanno lo stesso valore della funzione obiettivo (shoulders)
- **Stochastic hill climbing**: è una variante che, anzichè scegliere lo stato vicino con il valore della funzione obiettivo più alta, sceglie randomicamente uno stato tra quelli vicini con valore più alti 
- **First choice hill climbing**: come lo stochastic hill climbing, ma continua generare stati successivi finchè non ne trova uno che è migliore rispetto al corrente
- **Random restart**, esegue una serie di hill-climbing da uno stato iniziale randomico, scegliendo poi la soluzione ottima tra queste

Tutti gli algoritmi di hill climbing trovano il massimo locale, massimizzando il valore di una funzione. 
Se vogliamo trovare il *minimo* locale, ci basta invertire il segno della funzione obiettivo 

## Simulated annealing

Il simulated annealing è un algoritmo di ricerca locale che cerca di limitare la possibilità di essere bloccati in uno stato di massimo locale, permettendo di muoversi in stati di valore minore.

Il nome è dato dal processo di "annealing" nella metallurgia dove per aumentare la durezza di un metallo, lo si riscalda ad alte temperature per poi raffreddarlo lentamente.

Nel contesto dell'ottimizzazione della funzione obiettivo, partiamo da uno stato iniziale randomico, scegliendo un valore di "temperatura". A questo punto iteriamo fino ad una condizione terminale, ed ad ogni iterazione, in base al valore della temperatura, possiamo scegliere o meno se accettare un nuovo stato con valore della funzione obiettivo minore rispetto a quello corrente. 
Ad ogni iterazione diminuiamo il valore di temperatura, causando la diminuzione di probabilità che uno stato peggiore venga scelto. 

La struttura generale è simile ad hill climbing, ma anzichè scegliere la migliore mossa, sceglie una mossa randomica.

Se questa mossa è migliore di quella corrente, essa viene sempre accettata.
Se la soluzione è peggiore, allora l'algoritmo accetta la soluzione con una probablità minore di 1.

La probabilità di accettare un nuovo stato diminuisce esponenzialmente in base a quanto "peggiore" sia la mossa, cioè dal suo $\Delta E$ (differenza dei due stati). 

La probabilità diminuisce anche quando il valore della temperatura diminuisce. Mosse che possono essere viste come "peggiori" sono favorite all'inizio quando il valore di temperatura $T$ è alto, e diminuisce man mano nelle iterazioni

```text
function SIMULATED-ANNEALING(problem, schedule) returns a solution state
  current ← problem.INITIAL
  for t = 1 to ∞ do
    T ← schedule(t)
    if T = 0 then return current
    next ← a randomly selected successor of current
    ΔE ← VALUE(next) − VALUE(current)
    if ΔE > 0 then current ← next
    else current ← next only with probability e^(ΔE/T)
```

## Local beam search

Tiene traccia di $k$ stati anzichè uno solo, partendo da $k$ stati scelti randomicamente
Ad ogni passo, i successori di tutti i $k$ sono generati, se uno di questi è il goal, allora si ferma. Se nessuno di loro è il goal, seleziona il migliore $k$ di questi e ripeti 

Una variante è il **Stochastic beam search** che sceglie i migliori $k$ successori, li sceglie con una probabilità in base alla funzione obiettivo

## Algoritmi evoluzionari 

Sono varianti degli algoritmi **stochastic beam search** che seguono il concetto di "selezione naturale". 

C'è una popolazione di individui (gli stati) dove i più forti (valore funzione obiettivo più alto) si "riproducono" generando altri individui (i prossimi stati) tramite un processo di "ricombinazione"

Ogni individuo ha una "stringa" che rappresenta il proprio "dna" e durante il processo di ricombinazione°

<svg viewBox="0 0 720 176" width="100%" style="max-width:720px;display:block;margin:1.5rem auto" role="img" aria-label="Algoritmo genetico: popolazione iniziale, funzione di fitness, selezione, crossover e mutazione di stringhe di 8 cifre">
<defs><marker id="i20241201163350-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 z" style="fill:currentColor;fill:context-stroke"/></marker></defs>
<g font-family="monospace" font-size="18" text-anchor="middle" fill="currentColor">
<!-- popolazione iniziale -->
<rect x="10" y="10" width="120" height="30" fill="var(--palette-blue)" fill-opacity="0.3"/><rect x="10" y="10" width="120" height="30" fill="none" stroke="currentColor"/><text x="28 40 52 64 76 88 100 112" y="32">24748552</text>
<rect x="10" y="50" width="120" height="30" fill="var(--palette-blue)" fill-opacity="0.3"/><rect x="10" y="50" width="120" height="30" fill="none" stroke="currentColor"/><text x="28 40 52 64 76 88 100 112" y="72">32752411</text>
<rect x="10" y="94" width="120" height="30" fill="var(--palette-blue)" fill-opacity="0.3"/><rect x="10" y="94" width="120" height="30" fill="none" stroke="currentColor"/><text x="28 40 52 64 76 88 100 112" y="116">24415124</text>
<rect x="10" y="134" width="120" height="30" fill="var(--palette-blue)" fill-opacity="0.3"/><rect x="10" y="134" width="120" height="30" fill="none" stroke="currentColor"/><text x="28 40 52 64 76 88 100 112" y="156">32543213</text>
<!-- selezione -->
<rect x="245" y="10" width="120" height="30" fill="var(--palette-red)" fill-opacity="0.3"/><rect x="245" y="10" width="120" height="30" fill="none" stroke="currentColor"/><text x="263 275 287 299 311 323 335 347" y="32">32752411</text>
<rect x="245" y="50" width="120" height="30" fill="var(--palette-blue)" fill-opacity="0.3"/><rect x="245" y="50" width="120" height="30" fill="none" stroke="currentColor"/><text x="263 275 287 299 311 323 335 347" y="72">24748552</text>
<rect x="245" y="94" width="120" height="30" fill="var(--palette-red)" fill-opacity="0.3"/><rect x="245" y="94" width="120" height="30" fill="none" stroke="currentColor"/><text x="263 275 287 299 311 323 335 347" y="116">32752411</text>
<rect x="245" y="134" width="120" height="30" fill="var(--palette-blue)" fill-opacity="0.3"/><rect x="245" y="134" width="120" height="30" fill="none" stroke="currentColor"/><text x="263 275 287 299 311 323 335 347" y="156">24415124</text>
<!-- crossover -->
<rect x="430" y="10" width="48" height="30" fill="var(--palette-red)" fill-opacity="0.3"/><rect x="478" y="10" width="72" height="30" fill="var(--palette-blue)" fill-opacity="0.3"/><rect x="430" y="10" width="120" height="30" fill="none" stroke="currentColor"/><text x="448 460 472 484 496 508 520 532" y="32">32748552</text>
<rect x="430" y="50" width="48" height="30" fill="var(--palette-blue)" fill-opacity="0.3"/><rect x="478" y="50" width="72" height="30" fill="var(--palette-red)" fill-opacity="0.3"/><rect x="430" y="50" width="120" height="30" fill="none" stroke="currentColor"/><text x="448 460 472 484 496 508 520 532" y="72">24752411</text>
<rect x="430" y="94" width="72" height="30" fill="var(--palette-red)" fill-opacity="0.3"/><rect x="502" y="94" width="48" height="30" fill="var(--palette-blue)" fill-opacity="0.3"/><rect x="430" y="94" width="120" height="30" fill="none" stroke="currentColor"/><text x="448 460 472 484 496 508 520 532" y="116">32752124</text>
<rect x="430" y="134" width="72" height="30" fill="var(--palette-blue)" fill-opacity="0.3"/><rect x="502" y="134" width="48" height="30" fill="var(--palette-red)" fill-opacity="0.3"/><rect x="430" y="134" width="120" height="30" fill="none" stroke="currentColor"/><text x="448 460 472 484 496 508 520 532" y="156">24415411</text>
<!-- mutazione -->
<rect x="590" y="10" width="120" height="30" fill="var(--palette-blue)" fill-opacity="0.3"/><rect x="590" y="10" width="120" height="30" fill="none" stroke="currentColor"/><text x="608 620 632 644 656 668 680 692" y="32">32748152</text><rect x="661" y="13" width="14" height="24" fill="none" stroke="currentColor" stroke-width="2"/>
<rect x="590" y="50" width="120" height="30" fill="var(--palette-blue)" fill-opacity="0.3"/><rect x="590" y="50" width="120" height="30" fill="none" stroke="currentColor"/><text x="608 620 632 644 656 668 680 692" y="72">24752411</text>
<rect x="590" y="94" width="120" height="30" fill="var(--palette-blue)" fill-opacity="0.3"/><rect x="590" y="94" width="120" height="30" fill="none" stroke="currentColor"/><text x="608 620 632 644 656 668 680 692" y="116">32252124</text><rect x="625" y="97" width="14" height="24" fill="none" stroke="currentColor" stroke-width="2"/>
<rect x="590" y="134" width="120" height="30" fill="var(--palette-blue)" fill-opacity="0.3"/><rect x="590" y="134" width="120" height="30" fill="none" stroke="currentColor"/><text x="608 620 632 644 656 668 680 692" y="156">24415417</text><rect x="685" y="137" width="14" height="24" fill="none" stroke="currentColor" stroke-width="2"/>
</g>
<!-- fitness -->
<g font-family="sans-serif" font-size="14" font-weight="bold" fill="currentColor">
<text x="150" y="30">24</text><text x="174" y="30">31%</text>
<text x="150" y="70">23</text><text x="174" y="70">29%</text>
<text x="150" y="114">20</text><text x="174" y="114">26%</text>
<text x="150" y="154">11</text><text x="174" y="154">14%</text>
</g>
<g stroke="currentColor" stroke-width="1.2" fill="none" marker-end="url(#i20241201163350-arrow)">
<line x1="130" y1="36" x2="244" y2="66"/>
<line x1="130" y1="54" x2="244" y2="25"/>
<line x1="130" y1="77" x2="244" y2="109"/>
<line x1="130" y1="121" x2="244" y2="149"/>
<line x1="550" y1="25" x2="589" y2="25"/>
<line x1="550" y1="65" x2="589" y2="65"/>
<line x1="550" y1="109" x2="589" y2="109"/>
<line x1="550" y1="149" x2="589" y2="149"/>
</g>
<!-- punti di taglio e accoppiamento -->
<g stroke="currentColor" stroke-width="1.2" fill="none">
<path d="M293,4 V86 M317,88 V172" stroke-dasharray="4 3"/>
<path d="M366,28 L390,45 L366,62"/>
<path d="M390,45 L428,27 M390,45 L428,63" marker-end="url(#i20241201163350-arrow)"/>
<path d="M366,112 L390,129 L366,146"/>
<path d="M390,129 L428,111 M390,129 L428,147" marker-end="url(#i20241201163350-arrow)"/>
</g></svg>

## Ricerca locale in spazi continui

Gli ambienti dove le azioni sono locati su spazi continui, cioè dove le variabili di uno stato possono assumere valori in un intervallo continuo (per esempio tutti i numeri tra 0 e 1). Questo causa la creazione di infiniti fattori di branching.

Un metodo per approssimare la soluzione a questo problema è di discretizzare l'intervallo selezionando un numero fisso di "sezioni" di questo intervallo, come per esempio `[0, 0.2] [0.2, 0.4] [0.4, 0.6]`...

Oppure di risolvere il problema in maniera analitica anzichè empirica, tramite l'uso di gradienti. 
