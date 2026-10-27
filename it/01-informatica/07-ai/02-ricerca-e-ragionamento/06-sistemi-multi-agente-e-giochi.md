---
title: "Sistemi Multi-Agente e Giochi"
description: "Ricerca in ambienti multi-agente competitivi e cooperativi; algoritmo minimax per giochi zero-sum a due giocatori, alpha-beta pruning per ridurre lo spazio di ricerca, e Monte Carlo Tree Search (MCTS)."
type: lecture
---

Molti problemi nella realtà non sono modellati tramite un singolo agente, ma con più agenti che interagiscono insieme nello stesso ambiente.

La scelta che fa uno degli agenti influenza le azioni di tutti gli agenti. Per questo motivo, un agente deve tenere in conto gli effetti delle azioni degli altri agenti prima di effettuare la propria.

Dato che le azioni degli altri agenti non possono essere sempre predette, l'ambiente è considerato parzialmente osservabile e con knowledge parziale

## Tipi di agenti

Agenti in un ambiente condiviso possono essere del tipo:
- Pienamente cooperativi, cioè comunicano tra di loro e ottimizzano un obiettivo globale condiviso. Può essere visto come un team, come il calcio.
- Pienamente competitivi (o avversari), gli agenti hanno scopi confliggenti, cioè che un agente raggiunge il proprio scopo se un altro agente non raggiunge il proprio. Per esempio, giochi dove solo uno dei due lati vince, come gli scacchi.

# Giochi
Un "gioco" può essere classificato tramite vari assi:
- è deterministico o stocastico? (per esempio scacchi è deterministico, mentre poker è stocastico)
- uno, due o più giocatori?
- competitivo o collaborativo?
- Completamente o parzialmente osservabile? 

una "mossa" è un azione effettuata da un agente mentre la "posizione" è lo stato in cui l'agente si trova

# Giochi Zero sum

La maggiorparte dei problemi studiati in AI sono giochi deterministici, con due giocatori, a turni, completamente osservabile e "zero sum", che da ora in poi chiameremo "giochi zero-sum"

Zero sum vuol dire che in un gioco completamente competitivo, un azione positiva per un agente, ha una reazione negativa nell'altro agente, la cui somma è 0. 

Quindi in un gioco zero-sum, i valori obiettivo dei due agenti sono l'opposto dell'altro. Quindi dobbiamo voler massimizzare l'obiettivo di un agente, minimizzando l'altro.

Formalizziamo un gioco zero-sum in questo modo:
- **Spazio di ricerca**, è un set di possibili stati in cui il gioco può far parte
- **Stato iniziale**, è lo stato usato all'inizio del gioco. Per semplicità assumiamo che il primo giocatore MAX inizi il gioco, giocando a turni con MIN fino alla fine
- **Test terminale**, per ogni stato $s$, ritnorna $true$ se il gioco è terminato, altrimenti $false$. Questi sono anche chiamati stati terminali
- **Azioni**, per ogni stato $s$, il set di mosse legali in $s$ 
- **Modello di transizione**, per ogni stato $s$ ed azione $a$, lo stato risultante applicando $a$ ad $s$
- **Funzione obiettivo**, per ogni giocatore $p$ e stati terminali $s$, definisce il valore finale del giocatore $p$ quando lo stato finisce in $s$. Per esempio in scacchi, vittoria, sconfitta e patta sono 1, 0 e 1/2 

Come un problema generale, lo stato iniziale, azioni e transizioni definiscono un grafo dello spazio degli stati.

Un algoritmo di ricerca può essere eseguito sopra questo grafo che definisce una serie di mosse.
Definiamo come albero completo del gioco, l'albero di ricerca di tutte le sequenze di mosse che portano allo stato terminale.

# Ricerca Min Max

Nei giochi zero-sum, i giocatori MAX e MIN hanno obiettivi contrastanti. Entrambi vogliono trovare una serie di azioni che li porteranno alla vittoria, causando quindi l'altro giocatore a perdere.

La strategia di MAX (e analogamente di MIN) è quella di trovare una strategia che riesce a "rispondere" ad ogni possibile mossa di MIN

Per giochi che hanno un risultato binario (vittoria o sconfitta), possiamo usare un albero AND-OR per generare un piano condizionale che risponde (appunto condizionalmente) ad ogni mossa dell'avversario.
Ma per giochi con più punteggi finali, usiamo la ricerca min-max.

Dato l'albero del gioco, lo scopo è quello di trovare una strategia ottimale di MAX, dove si assume che faccia la prima mossa. 

La strategia ottimale per MAX può essere trovata scoprendo il valore minmax di ogni stato $s$ nell'albero, che chiamiamo $MINIMAX(s)$ che, assumendo che entrambi i giocatori giochino per massimizzare il proprio obiettivo, è uguale al valore della funzione obiettivo nello stato $s$.

Una volta aver calcolato questo valore per ogni stato, la strategia è quella di trovare, ad ogni passaggio, la mossa che ci porta allo stato con il massimo valore minmax

```python
def value(state):
    if the state is terminal: return the state's utility
    if the next agent is MAX: return max-value(state)
    if the next agent is MIN: return min-value(state)
```

```python
def max-value(state):
    initialize v = -∞
    for each successor of state:
        v = max(v, value(successor))
    return v
```

```python
def min-value(state):
    initialize v = +∞
    for each successor of state:
        v = min(v, value(successor))
    return v
```

<svg viewBox="0 0 600 490" width="100%" style="max-width:600px;display:block;margin:1.5rem auto" role="img" aria-label="Albero minimax: radice MAX con valore 7, nodi MIN con valori 7, 2 e 6; il sottoalbero di sinistra contiene un nodo MAX 7 e un nodo MIN 0">
<g stroke="currentColor" stroke-width="1.2">
<line x1="287" y1="51" x2="74" y2="142"/>
<line x1="287" y1="51" x2="289" y2="142"/>
<line x1="287" y1="51" x2="494" y2="142"/>
<line x1="74" y1="178" x2="32" y2="239"/>
<line x1="74" y1="178" x2="108" y2="239"/>
<line x1="108" y1="275" x2="74" y2="327"/>
<line x1="108" y1="275" x2="147" y2="327"/>
<line x1="147" y1="363" x2="98" y2="421"/>
<line x1="147" y1="363" x2="150" y2="421"/>
<line x1="147" y1="363" x2="204" y2="421"/>
<line x1="289" y1="178" x2="231" y2="239"/>
<line x1="289" y1="178" x2="289" y2="239"/>
<line x1="289" y1="178" x2="347" y2="239"/>
<line x1="494" y1="178" x2="464" y2="239"/>
<line x1="494" y1="178" x2="534" y2="239"/>
</g>
<g fill="none" stroke="currentColor" stroke-width="1.4">
<circle cx="287" cy="33" r="18"/>
<rect x="56" y="142" width="36" height="36"/>
<rect x="271" y="142" width="36" height="36"/>
<rect x="476" y="142" width="36" height="36"/>
<circle cx="32" cy="257" r="18"/>
<circle cx="108" cy="257" r="18"/>
<circle cx="231" cy="257" r="18"/>
<circle cx="289" cy="257" r="18"/>
<circle cx="347" cy="257" r="18"/>
<circle cx="464" cy="257" r="18"/>
<circle cx="534" cy="257" r="18"/>
<rect x="56" y="327" width="36" height="36"/>
<rect x="129" y="327" width="36" height="36"/>
<circle cx="98" cy="439" r="18"/>
<circle cx="150" cy="439" r="18"/>
<circle cx="204" cy="439" r="18"/>
</g>
<g font-size="16" text-anchor="middle" fill="currentColor">
<text x="287" y="39" font-weight="bold" font-size="18">7</text>
<text x="74" y="166" font-weight="bold" font-size="18">7</text>
<text x="289" y="166" font-weight="bold" font-size="18">2</text>
<text x="494" y="166" font-weight="bold" font-size="18">6</text>
<text x="32" y="263">9</text>
<text x="108" y="263" font-weight="bold" font-size="18">7</text>
<text x="231" y="263">5</text>
<text x="289" y="263">2</text>
<text x="347" y="263">8</text>
<text x="464" y="263">6</text>
<text x="534" y="263">8</text>
<text x="74" y="351">7</text>
<text x="147" y="351" font-weight="bold" font-size="18">0</text>
<text x="98" y="445">1</text>
<text x="150" y="445">9</text>
<text x="204" y="445">0</text>
</g>
<g font-size="13" font-weight="bold" fill="currentColor">
<text x="313" y="38">MAX</text>
<text x="100" y="165">MIN</text>
<text x="315" y="165">MIN</text>
<text x="520" y="165">MIN</text>
<text x="32" y="293" text-anchor="middle">LEAF</text>
<text x="134" y="262">MAX</text>
<text x="231" y="293" text-anchor="middle">LEAF</text>
<text x="289" y="293" text-anchor="middle">LEAF</text>
<text x="347" y="293" text-anchor="middle">LEAF</text>
<text x="464" y="293" text-anchor="middle">LEAF</text>
<text x="534" y="293" text-anchor="middle">LEAF</text>
<text x="74" y="381" text-anchor="middle">LEAF</text>
<text x="173" y="350">MIN</text>
<text x="98" y="475" text-anchor="middle">LEAF</text>
<text x="150" y="475" text-anchor="middle">LEAF</text>
<text x="204" y="475" text-anchor="middle">LEAF</text>
</g></svg>

Questo algoritmo può essere implementato ricorsivamente, visitando fino alle foglie per poi risalire quando la ricorsione viene srotolata.
Complessivamente, l'algoritmo minmax effettua una ricerca completa DFS dell'albero del gioco 

Questo algoritmo ha complessità temporale $O(b^m)$ dato che deve poter esplorare l'intero albero. Ed una complessità spaziale di $O(b \times m)$ (oppure $O(m)$ tramite backtracking).
Il che rende questo algoritmo non utilizzabile per giochi "complessi" come gli scacchi, che avendo $m = 80$ e $b = 35$ ha all'incirca $35^{80} > 10^{123}$ 

La definizione di mossa ottimale di MAX per l'algoritmo minmax assume che MIN faccia anche esso una mossa ottimale. Ma se MIN non facesse la mossa ottimale? Allora vuol dire che MAX potrebbe fare una mossa ancora migliore rispetto quelle che aveva considerato.

Però questa scelta potrebbe non essere quella migliore. Consideriamo il caso in cui la mossa ottimale da entrambe le parti porti ad una patta, ma c'è una mossa "rischiosa" che MAX può fare che lo portrebbe portare alla vittoria 9/10 volte, e sconfitta 1/10 volte. Se MAX crede che MIN non riesca a calcolare la propria mosse ottimale, potrebbe provare ad effettuare la mossa rischiosa.
# Alpha beta pruning

Il numero di stati in un gioco è esponenziale in base alla profondità dell'albero. 

Nessun algoritmo è capace di eliminare completamente l'esponente, ma è possibile ridurre l'esponente a metà, facendo la scelta corretta minmax senza esaminare tutti gli stati, tagliando grandi parti dell'albero di ricerca che non contribuiscono al risultato.

<svg viewBox="0 0 430 440" width="100%" style="max-width:430px;display:block;margin:1.5rem auto" role="img" aria-label="Albero di gioco: se il giocatore ha una mossa migliore m più in alto nell'albero, il nodo n non verrà mai raggiunto">
<g stroke="currentColor" stroke-width="1.2" fill="none">
<line x1="408" y1="10" x2="354" y2="82"/>
<line x1="342" y1="120" x2="219" y2="167"/>
<line x1="374" y1="120" x2="392" y2="126"/>
<line x1="203" y1="202" x2="133" y2="260"/>
<line x1="203" y1="202" x2="198" y2="260"/>
<line x1="203" y1="202" x2="259" y2="260"/>
<line x1="292" y1="354" x2="220" y2="388"/>
<line x1="292" y1="354" x2="356" y2="388"/>
<path d="M348,122 Q331,131 342,146 Q352,162 335,170 Q318,179 328,195 Q339,210 322,219 Q305,228 316,243 Q326,259 309,268 Q292,276 302,292 Q313,307 296,316" stroke-width="2.2" stroke-dasharray="6 4"/>
</g>
<g stroke="currentColor" stroke-width="1" fill="var(--palette-purple)" fill-opacity="0.35"><path d="M354,82 L376,120 L332,120 z"/><path d="M292,316 L314,354 L270,354 z"/></g>
<g stroke="currentColor" stroke-width="1" fill="var(--palette-orange)" fill-opacity="0.35"><path d="M183,167 L223,167 L203,202 z"/><path d="M200,388 L240,388 L220,423 z"/><path d="M336,388 L376,388 L356,423 z"/></g>
<g font-size="16" fill="currentColor">
<text x="25" y="99">Player</text>
<text x="25" y="190">Opponent</text>
<text x="25" y="337">Player</text>
<text x="25" y="405">Opponent</text>
<circle cx="55" cy="228" r="2.5"/><circle cx="55" cy="256" r="2.5"/><circle cx="55" cy="283" r="2.5"/>
</g>
<g font-size="16" font-style="italic" text-anchor="middle" fill="currentColor">
<text x="203" y="180">m</text>
<text x="220" y="401">m′</text>
<text x="356" y="401">n</text>
</g></svg>

Considera un nodo $n$ nel grafo dove il giocatore ha la scelta di fare una mossa per arrivare a $n$. 
Se il giocatore può fare una scelta migliore di $n$, o tra il livello corrente (quello dove si trova $n$, per esempio $m'$) oppure in qualsiasi altro punto nei livelli superiori dove ha il proprio turno (per esempio $m$), allora il giocatore non si muoverà mai su $n$, dato che le altre mosse sono migliori. 
Una volta che abbiamo raccolto abbastanza informazioni su $n$ per arrivare a questa conclusione, possiamo tagliare il sottoalbero di $n$.

Esempio:

**(a)**

<svg viewBox="0 0 440 210" width="100%" style="max-width:440px;display:block;margin:1.5rem auto" role="img" aria-label="Potatura alfa-beta, passo (a): radice MAX A [−∞, +∞]; nodo MIN B [−∞, 3] con foglie 3">
<!-- archi e nodi non ancora esplorati (tratteggiati) -->
<g stroke="var(--palette-muted)" stroke-dasharray="4 3"><line x1="140" y1="112" x2="140" y2="163"/><line x1="140" y1="112" x2="180" y2="163"/><line x1="260" y1="42" x2="260" y2="88"/><line x1="260" y1="112" x2="220" y2="163"/><line x1="260" y1="112" x2="260" y2="163"/><line x1="260" y1="112" x2="300" y2="163"/><line x1="260" y1="42" x2="380" y2="88"/><line x1="380" y1="112" x2="340" y2="163"/><line x1="380" y1="112" x2="380" y2="163"/><line x1="380" y1="112" x2="420" y2="163"/></g>
<g stroke="currentColor" stroke-width="1.5"><line x1="260" y1="42" x2="140" y2="88"/><line x1="140" y1="112" x2="100" y2="163"/></g>
<g stroke-width="1.2"><path d="M128,88 L152,88 L140,112 z" fill="var(--palette-orange)" fill-opacity="0.35" stroke="currentColor"/><path d="M100,163 L112,187 L88,187 z" fill="var(--palette-purple)" fill-opacity="0.35" stroke="currentColor"/><path d="M140,163 L152,187 L128,187 z" fill="none" stroke="var(--palette-muted)" stroke-dasharray="4 3"/><path d="M180,163 L192,187 L168,187 z" fill="none" stroke="var(--palette-muted)" stroke-dasharray="4 3"/><path d="M248,88 L272,88 L260,112 z" fill="none" stroke="var(--palette-muted)" stroke-dasharray="4 3"/><path d="M220,163 L232,187 L208,187 z" fill="none" stroke="var(--palette-muted)" stroke-dasharray="4 3"/><path d="M260,163 L272,187 L248,187 z" fill="none" stroke="var(--palette-muted)" stroke-dasharray="4 3"/><path d="M300,163 L312,187 L288,187 z" fill="none" stroke="var(--palette-muted)" stroke-dasharray="4 3"/><path d="M368,88 L392,88 L380,112 z" fill="none" stroke="var(--palette-muted)" stroke-dasharray="4 3"/><path d="M340,163 L352,187 L328,187 z" fill="none" stroke="var(--palette-muted)" stroke-dasharray="4 3"/><path d="M380,163 L392,187 L368,187 z" fill="none" stroke="var(--palette-muted)" stroke-dasharray="4 3"/><path d="M420,163 L432,187 L408,187 z" fill="none" stroke="var(--palette-muted)" stroke-dasharray="4 3"/><path d="M260,18 L272,42 L248,42 z" fill="var(--palette-purple)" fill-opacity="0.35" stroke="currentColor"/></g>
<g font-size="11" text-anchor="middle" fill="currentColor"><text x="260" y="39">A</text><text x="140" y="101">B</text></g>
<g font-size="16" fill="currentColor"><text x="122" y="98" text-anchor="end">[−∞, 3]</text><text x="100" y="209" text-anchor="middle">3</text><text x="242" y="32" text-anchor="end">[−∞, +∞]</text></g>
</svg>

The first leaf below *B* has the value 3. Hence, *B*, which is a MIN node, has a value of at most 3.

**(b)**

<svg viewBox="0 0 440 210" width="100%" style="max-width:440px;display:block;margin:1.5rem auto" role="img" aria-label="Potatura alfa-beta, passo (b): radice MAX A [−∞, +∞]; nodo MIN B [−∞, 3] con foglie 3, 12">
<!-- archi e nodi non ancora esplorati (tratteggiati) -->
<g stroke="var(--palette-muted)" stroke-dasharray="4 3"><line x1="140" y1="112" x2="180" y2="163"/><line x1="260" y1="42" x2="260" y2="88"/><line x1="260" y1="112" x2="220" y2="163"/><line x1="260" y1="112" x2="260" y2="163"/><line x1="260" y1="112" x2="300" y2="163"/><line x1="260" y1="42" x2="380" y2="88"/><line x1="380" y1="112" x2="340" y2="163"/><line x1="380" y1="112" x2="380" y2="163"/><line x1="380" y1="112" x2="420" y2="163"/></g>
<g stroke="currentColor" stroke-width="1.5"><line x1="260" y1="42" x2="140" y2="88"/><line x1="140" y1="112" x2="100" y2="163"/><line x1="140" y1="112" x2="140" y2="163"/></g>
<g stroke-width="1.2"><path d="M128,88 L152,88 L140,112 z" fill="var(--palette-orange)" fill-opacity="0.35" stroke="currentColor"/><path d="M100,163 L112,187 L88,187 z" fill="var(--palette-purple)" fill-opacity="0.35" stroke="currentColor"/><path d="M140,163 L152,187 L128,187 z" fill="var(--palette-purple)" fill-opacity="0.35" stroke="currentColor"/><path d="M180,163 L192,187 L168,187 z" fill="none" stroke="var(--palette-muted)" stroke-dasharray="4 3"/><path d="M248,88 L272,88 L260,112 z" fill="none" stroke="var(--palette-muted)" stroke-dasharray="4 3"/><path d="M220,163 L232,187 L208,187 z" fill="none" stroke="var(--palette-muted)" stroke-dasharray="4 3"/><path d="M260,163 L272,187 L248,187 z" fill="none" stroke="var(--palette-muted)" stroke-dasharray="4 3"/><path d="M300,163 L312,187 L288,187 z" fill="none" stroke="var(--palette-muted)" stroke-dasharray="4 3"/><path d="M368,88 L392,88 L380,112 z" fill="none" stroke="var(--palette-muted)" stroke-dasharray="4 3"/><path d="M340,163 L352,187 L328,187 z" fill="none" stroke="var(--palette-muted)" stroke-dasharray="4 3"/><path d="M380,163 L392,187 L368,187 z" fill="none" stroke="var(--palette-muted)" stroke-dasharray="4 3"/><path d="M420,163 L432,187 L408,187 z" fill="none" stroke="var(--palette-muted)" stroke-dasharray="4 3"/><path d="M260,18 L272,42 L248,42 z" fill="var(--palette-purple)" fill-opacity="0.35" stroke="currentColor"/></g>
<g font-size="11" text-anchor="middle" fill="currentColor"><text x="260" y="39">A</text><text x="140" y="101">B</text></g>
<g font-size="16" fill="currentColor"><text x="122" y="98" text-anchor="end">[−∞, 3]</text><text x="100" y="209" text-anchor="middle">3</text><text x="140" y="209" text-anchor="middle">12</text><text x="242" y="32" text-anchor="end">[−∞, +∞]</text></g>
</svg>

The second leaf below *B* has a value of 12; MIN would avoid this move, so the value of *B* is still at most 3.

**(c)**

<svg viewBox="0 0 440 210" width="100%" style="max-width:440px;display:block;margin:1.5rem auto" role="img" aria-label="Potatura alfa-beta, passo (c): radice MAX A [3, +∞]; nodo MIN B [3, 3] con foglie 3, 12, 8">
<!-- archi e nodi non ancora esplorati (tratteggiati) -->
<g stroke="var(--palette-muted)" stroke-dasharray="4 3"><line x1="260" y1="42" x2="260" y2="88"/><line x1="260" y1="112" x2="220" y2="163"/><line x1="260" y1="112" x2="260" y2="163"/><line x1="260" y1="112" x2="300" y2="163"/><line x1="260" y1="42" x2="380" y2="88"/><line x1="380" y1="112" x2="340" y2="163"/><line x1="380" y1="112" x2="380" y2="163"/><line x1="380" y1="112" x2="420" y2="163"/></g>
<g stroke="currentColor" stroke-width="1.5"><line x1="260" y1="42" x2="140" y2="88"/><line x1="140" y1="112" x2="100" y2="163"/><line x1="140" y1="112" x2="140" y2="163"/><line x1="140" y1="112" x2="180" y2="163"/></g>
<g stroke-width="1.2"><path d="M128,88 L152,88 L140,112 z" fill="var(--palette-orange)" fill-opacity="0.35" stroke="currentColor"/><path d="M100,163 L112,187 L88,187 z" fill="var(--palette-purple)" fill-opacity="0.35" stroke="currentColor"/><path d="M140,163 L152,187 L128,187 z" fill="var(--palette-purple)" fill-opacity="0.35" stroke="currentColor"/><path d="M180,163 L192,187 L168,187 z" fill="var(--palette-purple)" fill-opacity="0.35" stroke="currentColor"/><path d="M248,88 L272,88 L260,112 z" fill="none" stroke="var(--palette-muted)" stroke-dasharray="4 3"/><path d="M220,163 L232,187 L208,187 z" fill="none" stroke="var(--palette-muted)" stroke-dasharray="4 3"/><path d="M260,163 L272,187 L248,187 z" fill="none" stroke="var(--palette-muted)" stroke-dasharray="4 3"/><path d="M300,163 L312,187 L288,187 z" fill="none" stroke="var(--palette-muted)" stroke-dasharray="4 3"/><path d="M368,88 L392,88 L380,112 z" fill="none" stroke="var(--palette-muted)" stroke-dasharray="4 3"/><path d="M340,163 L352,187 L328,187 z" fill="none" stroke="var(--palette-muted)" stroke-dasharray="4 3"/><path d="M380,163 L392,187 L368,187 z" fill="none" stroke="var(--palette-muted)" stroke-dasharray="4 3"/><path d="M420,163 L432,187 L408,187 z" fill="none" stroke="var(--palette-muted)" stroke-dasharray="4 3"/><path d="M260,18 L272,42 L248,42 z" fill="var(--palette-purple)" fill-opacity="0.35" stroke="currentColor"/></g>
<g font-size="11" text-anchor="middle" fill="currentColor"><text x="260" y="39">A</text><text x="140" y="101">B</text></g>
<g font-size="16" fill="currentColor"><text x="122" y="98" text-anchor="end">[3, 3]</text><text x="100" y="209" text-anchor="middle">3</text><text x="140" y="209" text-anchor="middle">12</text><text x="180" y="209" text-anchor="middle">8</text><text x="242" y="32" text-anchor="end">[3, +∞]</text></g>
</svg>

The third leaf below *B* has a value of 8; we have seen all *B*'s successor states, so the value of *B* is exactly 3. Now we can infer that the value of the root is at least 3, because MAX has a choice worth 3 at the root.

**(d)**

<svg viewBox="0 0 440 210" width="100%" style="max-width:440px;display:block;margin:1.5rem auto" role="img" aria-label="Potatura alfa-beta, passo (d): radice MAX A [3, +∞]; nodo MIN B [3, 3] con foglie 3, 12, 8; nodo MIN C [−∞, 2] con foglie 2">
<!-- archi e nodi non ancora esplorati (tratteggiati) -->
<g stroke="var(--palette-muted)" stroke-dasharray="4 3"><line x1="260" y1="112" x2="260" y2="163"/><line x1="260" y1="112" x2="300" y2="163"/><line x1="260" y1="42" x2="380" y2="88"/><line x1="380" y1="112" x2="340" y2="163"/><line x1="380" y1="112" x2="380" y2="163"/><line x1="380" y1="112" x2="420" y2="163"/></g>
<g stroke="currentColor" stroke-width="1.5"><line x1="260" y1="42" x2="140" y2="88"/><line x1="140" y1="112" x2="100" y2="163"/><line x1="140" y1="112" x2="140" y2="163"/><line x1="140" y1="112" x2="180" y2="163"/><line x1="260" y1="42" x2="260" y2="88"/><line x1="260" y1="112" x2="220" y2="163"/></g>
<g stroke-width="1.2"><path d="M128,88 L152,88 L140,112 z" fill="var(--palette-orange)" fill-opacity="0.35" stroke="currentColor"/><path d="M100,163 L112,187 L88,187 z" fill="var(--palette-purple)" fill-opacity="0.35" stroke="currentColor"/><path d="M140,163 L152,187 L128,187 z" fill="var(--palette-purple)" fill-opacity="0.35" stroke="currentColor"/><path d="M180,163 L192,187 L168,187 z" fill="var(--palette-purple)" fill-opacity="0.35" stroke="currentColor"/><path d="M248,88 L272,88 L260,112 z" fill="var(--palette-orange)" fill-opacity="0.35" stroke="currentColor"/><path d="M220,163 L232,187 L208,187 z" fill="var(--palette-purple)" fill-opacity="0.35" stroke="currentColor"/><path d="M260,163 L272,187 L248,187 z" fill="none" stroke="var(--palette-muted)" stroke-dasharray="4 3"/><path d="M300,163 L312,187 L288,187 z" fill="none" stroke="var(--palette-muted)" stroke-dasharray="4 3"/><path d="M368,88 L392,88 L380,112 z" fill="none" stroke="var(--palette-muted)" stroke-dasharray="4 3"/><path d="M340,163 L352,187 L328,187 z" fill="none" stroke="var(--palette-muted)" stroke-dasharray="4 3"/><path d="M380,163 L392,187 L368,187 z" fill="none" stroke="var(--palette-muted)" stroke-dasharray="4 3"/><path d="M420,163 L432,187 L408,187 z" fill="none" stroke="var(--palette-muted)" stroke-dasharray="4 3"/><path d="M260,18 L272,42 L248,42 z" fill="var(--palette-purple)" fill-opacity="0.35" stroke="currentColor"/></g>
<g font-size="11" text-anchor="middle" fill="currentColor"><text x="260" y="39">A</text><text x="140" y="101">B</text><text x="260" y="101">C</text></g>
<g font-size="16" fill="currentColor"><text x="122" y="98" text-anchor="end">[3, 3]</text><text x="100" y="209" text-anchor="middle">3</text><text x="140" y="209" text-anchor="middle">12</text><text x="180" y="209" text-anchor="middle">8</text><text x="242" y="98" text-anchor="end">[−∞, 2]</text><text x="220" y="209" text-anchor="middle">2</text><text x="242" y="32" text-anchor="end">[3, +∞]</text></g>
</svg>

The first leaf below *C* has the value 2. Hence, *C*, which is a MIN node, has a value of at most 2. But we know that *B* is worth 3, so MAX would never choose *C*. Therefore, there is no point in looking at the other successor states of *C*. *This is an example of alpha–beta pruning.*

**(e)**

<svg viewBox="0 0 440 210" width="100%" style="max-width:440px;display:block;margin:1.5rem auto" role="img" aria-label="Potatura alfa-beta, passo (e): radice MAX A [3, 14]; nodo MIN B [3, 3] con foglie 3, 12, 8; nodo MIN C [−∞, 2] con foglie 2; nodo MIN D [−∞, 14] con foglie 14">
<!-- archi e nodi non ancora esplorati (tratteggiati) -->
<g stroke="var(--palette-muted)" stroke-dasharray="4 3"><line x1="260" y1="112" x2="260" y2="163"/><line x1="260" y1="112" x2="300" y2="163"/><line x1="380" y1="112" x2="380" y2="163"/><line x1="380" y1="112" x2="420" y2="163"/></g>
<g stroke="currentColor" stroke-width="1.5"><line x1="260" y1="42" x2="140" y2="88"/><line x1="140" y1="112" x2="100" y2="163"/><line x1="140" y1="112" x2="140" y2="163"/><line x1="140" y1="112" x2="180" y2="163"/><line x1="260" y1="42" x2="260" y2="88"/><line x1="260" y1="112" x2="220" y2="163"/><line x1="260" y1="42" x2="380" y2="88"/><line x1="380" y1="112" x2="340" y2="163"/></g>
<g stroke-width="1.2"><path d="M128,88 L152,88 L140,112 z" fill="var(--palette-orange)" fill-opacity="0.35" stroke="currentColor"/><path d="M100,163 L112,187 L88,187 z" fill="var(--palette-purple)" fill-opacity="0.35" stroke="currentColor"/><path d="M140,163 L152,187 L128,187 z" fill="var(--palette-purple)" fill-opacity="0.35" stroke="currentColor"/><path d="M180,163 L192,187 L168,187 z" fill="var(--palette-purple)" fill-opacity="0.35" stroke="currentColor"/><path d="M248,88 L272,88 L260,112 z" fill="var(--palette-orange)" fill-opacity="0.35" stroke="currentColor"/><path d="M220,163 L232,187 L208,187 z" fill="var(--palette-purple)" fill-opacity="0.35" stroke="currentColor"/><path d="M260,163 L272,187 L248,187 z" fill="none" stroke="var(--palette-muted)" stroke-dasharray="4 3"/><path d="M300,163 L312,187 L288,187 z" fill="none" stroke="var(--palette-muted)" stroke-dasharray="4 3"/><path d="M368,88 L392,88 L380,112 z" fill="var(--palette-orange)" fill-opacity="0.35" stroke="currentColor"/><path d="M340,163 L352,187 L328,187 z" fill="var(--palette-purple)" fill-opacity="0.35" stroke="currentColor"/><path d="M380,163 L392,187 L368,187 z" fill="none" stroke="var(--palette-muted)" stroke-dasharray="4 3"/><path d="M420,163 L432,187 L408,187 z" fill="none" stroke="var(--palette-muted)" stroke-dasharray="4 3"/><path d="M260,18 L272,42 L248,42 z" fill="var(--palette-purple)" fill-opacity="0.35" stroke="currentColor"/></g>
<g font-size="11" text-anchor="middle" fill="currentColor"><text x="260" y="39">A</text><text x="140" y="101">B</text><text x="260" y="101">C</text><text x="380" y="101">D</text></g>
<g font-size="16" fill="currentColor"><text x="122" y="98" text-anchor="end">[3, 3]</text><text x="100" y="209" text-anchor="middle">3</text><text x="140" y="209" text-anchor="middle">12</text><text x="180" y="209" text-anchor="middle">8</text><text x="242" y="98" text-anchor="end">[−∞, 2]</text><text x="220" y="209" text-anchor="middle">2</text><text x="362" y="98" text-anchor="end">[−∞, 14]</text><text x="340" y="209" text-anchor="middle">14</text><text x="242" y="32" text-anchor="end">[3, 14]</text></g>
</svg>

The first leaf below *D* has the value 14, so *D* is worth at most 14. This is still higher than MAX's best alternative (i.e., 3), so we need to keep exploring *D*'s successor states. Notice also that we now have bounds on all of the successors of the root, so the root's value is also at most 14.

**(f)**

<svg viewBox="0 0 440 210" width="100%" style="max-width:440px;display:block;margin:1.5rem auto" role="img" aria-label="Potatura alfa-beta, passo (f): radice MAX A [3, 3]; nodo MIN B [3, 3] con foglie 3, 12, 8; nodo MIN C [−∞, 2] con foglie 2; nodo MIN D [2, 2] con foglie 14, 5, 2">
<!-- archi e nodi non ancora esplorati (tratteggiati) -->
<g stroke="var(--palette-muted)" stroke-dasharray="4 3"><line x1="260" y1="112" x2="260" y2="163"/><line x1="260" y1="112" x2="300" y2="163"/></g>
<g stroke="currentColor" stroke-width="1.5"><line x1="260" y1="42" x2="140" y2="88"/><line x1="140" y1="112" x2="100" y2="163"/><line x1="140" y1="112" x2="140" y2="163"/><line x1="140" y1="112" x2="180" y2="163"/><line x1="260" y1="42" x2="260" y2="88"/><line x1="260" y1="112" x2="220" y2="163"/><line x1="260" y1="42" x2="380" y2="88"/><line x1="380" y1="112" x2="340" y2="163"/><line x1="380" y1="112" x2="380" y2="163"/><line x1="380" y1="112" x2="420" y2="163"/></g>
<g stroke-width="1.2"><path d="M128,88 L152,88 L140,112 z" fill="var(--palette-orange)" fill-opacity="0.35" stroke="currentColor"/><path d="M100,163 L112,187 L88,187 z" fill="var(--palette-purple)" fill-opacity="0.35" stroke="currentColor"/><path d="M140,163 L152,187 L128,187 z" fill="var(--palette-purple)" fill-opacity="0.35" stroke="currentColor"/><path d="M180,163 L192,187 L168,187 z" fill="var(--palette-purple)" fill-opacity="0.35" stroke="currentColor"/><path d="M248,88 L272,88 L260,112 z" fill="var(--palette-orange)" fill-opacity="0.35" stroke="currentColor"/><path d="M220,163 L232,187 L208,187 z" fill="var(--palette-purple)" fill-opacity="0.35" stroke="currentColor"/><path d="M260,163 L272,187 L248,187 z" fill="none" stroke="var(--palette-muted)" stroke-dasharray="4 3"/><path d="M300,163 L312,187 L288,187 z" fill="none" stroke="var(--palette-muted)" stroke-dasharray="4 3"/><path d="M368,88 L392,88 L380,112 z" fill="var(--palette-orange)" fill-opacity="0.35" stroke="currentColor"/><path d="M340,163 L352,187 L328,187 z" fill="var(--palette-purple)" fill-opacity="0.35" stroke="currentColor"/><path d="M380,163 L392,187 L368,187 z" fill="var(--palette-purple)" fill-opacity="0.35" stroke="currentColor"/><path d="M420,163 L432,187 L408,187 z" fill="var(--palette-purple)" fill-opacity="0.35" stroke="currentColor"/><path d="M260,18 L272,42 L248,42 z" fill="var(--palette-purple)" fill-opacity="0.35" stroke="currentColor"/></g>
<g font-size="11" text-anchor="middle" fill="currentColor"><text x="260" y="39">A</text><text x="140" y="101">B</text><text x="260" y="101">C</text><text x="380" y="101">D</text></g>
<g font-size="16" fill="currentColor"><text x="122" y="98" text-anchor="end">[3, 3]</text><text x="100" y="209" text-anchor="middle">3</text><text x="140" y="209" text-anchor="middle">12</text><text x="180" y="209" text-anchor="middle">8</text><text x="242" y="98" text-anchor="end">[−∞, 2]</text><text x="220" y="209" text-anchor="middle">2</text><text x="362" y="98" text-anchor="end">[2, 2]</text><text x="340" y="209" text-anchor="middle">14</text><text x="380" y="209" text-anchor="middle">5</text><text x="420" y="209" text-anchor="middle">2</text><text x="242" y="32" text-anchor="end">[3, 3]</text></g>
</svg>

The second successor of *D* is worth 5, so again we need to keep exploring. The third successor is worth 2, so now *D* is worth exactly 2. MAX's decision at the root is to move to *B*, giving a value of 3.

- Here we can observe that *the effectiveness of alpha-beta pruning is (highly) dependent on the order* in which the states are examined: we could not prune any successors of *D* at all because the worst successors (from the point of view of MIN) were generated first.
- If the third successor of *D* had been generated first, with value 2, we would have been able to prune the other two successors.
- This suggests that it might be worthwhile to try to first examine the successors that are likely to be best.

Il nome alpha-beta viene dal fatto che per ogni nodo dobbiamo tenere traccia di due valori, appunto alpha e beta, che ci dicono 
- $\alpha$ il valore della miglior mossa che abbiamo trovato fino ad ora nel cammino di MAX
- $\beta$ il valore della miglior mossa che abbiamo trovato fino ad ora nel cammino di MIN

Questo algoritmo ha una complessità temporale di $O(b^{m/2})$ se scegliamo ogni volta la miglior mossa. 
Usando l'orinamento random move, il numero di nodi esaminati sarà invece $O(b^{3m/4})$. 
Naturalmente non possiamo sapere la mossa perfetta, altrimenti useremo questa scelta per giocare il gioco perfetto, ma possiamo andarci vicino tramite euristiche.

# Alberi di ricerca Monte Carlo

L'agoritmo "Monte Carlo Tree Search" (MCTS) è un alternativa ad alpha-search che rimpiazza la funzione euristica ed invece calcola il valore di uno stato tramite la media del valore obiettivo di un numero di simulazioni di giochi completi, partendo dallo stato iniziale.
