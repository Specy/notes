---
title: "Algoritmi di Ricerca"
description: "Formulazione formale dei problemi di ricerca e panoramica degli algoritmi uninformed (BFS, DFS, IDS, UCS) e informed (greedy best-first, A*) con analisi di completezza, ottimalità e complessità."
type: lecture
---
# Plan ahead agent

Un agente "goal-based" potrebbe richiedere una sequenza di azioni da eseguire prima di completare il goal. 
Questi agenti vengono chiamati "problem-solving" ed utilizzano un processo chiamato "search" (ricerca) per trovare gli step da eseguire, e massimizzare/minimizzare una condizione (utilità).

Un esempio potrebbe essere trovare un percorso per andare da A a B minimizzando la distanza tra i due punti

Il processo di problem solving è suddiviso in quattro fasi:

1. Formulazione dello scopo, definisce cosa deve compiere l'agente
2. Formulazione del problema, un astrazione del problema che descrive gli stati e azioni necessarie per raggiungere il goal, insieme alle utilità (se esistono)
3. Ricreca, trova una soluzione al problema formulato, cioè una sequenza di azioni che permette all'agente di raggiungere il goal
4. Esecuzione, esegue la soluzione trovata

# Problema di ricerca
Un problema di ricerca può essere definito formalmente come:
- Spazio di stati, il set di tutti i possibili stati dell'environment 
- Stato iniziale, lo stato dove l'agente parte
- Stato(i) finali, uno o più stati che l'agente vuole raggiungere
- Azioni, le possibili azioni che possono essere eseguite in un certo stato
- Modello di transizione, una descrizione di cosa fa ogni azione, cioè il risultato dell'applicazione di un azione su un certo stato, e a quale stato ci porta
- Funzione costo dell'azione, una funzione che ci dice il costo di applicare una azione da uno stato ad un altro stato

![[Pasted image 20241130164728.png]]

Una sequenza di azioni forma un percorso. Una soluzione è un percorso che porta dallo stato iniziale allo stato finale. 
Si assume che i costi delle azioni siano positive e additive, cioè che il costo di un percorso è la somma dei costi di ogni azione al suo interno.
Una soluzione ottima è il percorso con il costo minore rispetto a tutte le altre soluzioni

# Spazio di stato come grafo

Possiamo rappresentare lo spazio degli stati come un grafo, dove ogni nodo è lo stato (univoco!), e gli archi sono le azioni che ci permettono di passare da uno stato ad un altro.

Per la gran maggior parte dei problemi, questo grafo è troppo grande per poter essere costruito in memoria interamente. Tipicamente viene costruito (quando necessario) solo le parti del grafo che sono necessarie per ogni passaggio.

# Algoritmo di ricerca e albero di ricerca

Un algoritmo di ricerca prende come input un problema di ricerca, e ritorna una soluzione, se esiste, oppure un errore.
Un grafo di ricerca rappresenta in maniera matematica e compatta il problema di ricerca, invece un albero di ricerca rappresenta l'esecuzione del processo di ricerca da parte di un algoritmo di ricerca. 

Un albero di ricerca potrebbe avere più di un percorso dal nodo iniziale a uno specifico stato (gli stati possono essere ripetuti all'interno dell'albero), ma il percorso da uno stato allo stato iniziale è unico.

Come il grafo, anche l'albero è troppo grande da calcolare nella sua totalità, e data la possibilità di ripetizione degli stati, potrebbe essere anche infinito. Per questo motivo viene creato solo parti dell'albero che sono necessarie in un certo step della ricerca.

## Creazione dell'albero di ricerca

Partiamo dal nodo iniziale ed espandiamo l'albero considerando tutte le azioni che possiamo eseguire sullo stato corrente, generando un nuovo nodo per ogni azione che può essere eseguita, e lo stato che si raggiunge 

A questo punto scegliamo uno dei nodi che abbiamo aggiunto e rieseguiamo l'espansione su di esso.

Tutti i nodi che sono stati generati ma non ancora espansi vengono chiamati "frontiera" (le foglie dell'albero)

Tutti gli stati che sono presenti in almeno un nodo vengono detti "scoperti"

## Algoritmo di ricerca

Un algoritmo di ricerca prende un problema di ricerca come input e ritorna una soluzione o un errore.

Crea e visita il grafo di stati tramite costruzione "on the fly" dell'albero di ricerca.

Tiene in memoria tutti gli stati da visitare prossimamente (la frontiera) e sceglie uno di questi stati per poi espanderlo.
La strategia è guidata dallo scopo da raggiungere

![[Pasted image 20241130174502.png]]

Gli algoritmi di ricerca variano in base alle strutture dati usate per la frontiera, la strategia che usano per scegliere il prossimo nodo da espandere e come calcolare il costo di un percorso.

Possono in generale essere classificati in:
- Uninformed search, che non ha indizi sul quanto è distante dallo stato finale 
- Informed search, usa indizi (euristiche) sul quanto uno stato è distante dalla soluzione

Per valutare la performance di un algoritmo di ricerca usiamo le metriche di:

- Completezza, l'algoritmo garantisce di trovare soluzione se esiste? e di generare errore se non esiste soluzione?
- Ottimalità del costo, Trova la soluzione di costo minore? 
- Complessità temporale, Quanto tempo impiega l'algoritmo a trovare una soluzione? 
- Complessità spaziale, Quanta memoria viene impiegata per effettuare la ricerca?

# Uninformed search

## Breadth first search - BFS
Si parte dalla radice, espandendola, per poi espandere i nodi che sono stati creati espandendo la radice. A questo punto visitiamo ogniuno di questi nodi e rieseguiamo in ordine l'espansione.

- La frontiera è definita tramite una struttura dati FIFO
- La strategia nello scegliere quale nodo espandere successivamente è tramite il principio del FIFO
- I costi dei percorsi sono tutti uguali 

Ha la proprietà di essere completo, infattti da costruzione, visiterà tutto il grafo, quindi se esiste una soluzione, verrà visitata.

Trova La soluzione ottima dato che visita in ordine tutti i percorsi di costo $d$ prima di visitare quelli di costo $d+1$, se tutte le azioni hanno lo stesso costo

Ma ha una complessità temporale e spaziale di $O(b^d)$ dove b è il numero di stati, e $d$ è la profondità di una soluzione. Se non esiste una soluzione, deve visitare l'intero albero $O(b^m)$ che potrebbe anche essere infinito.

## Depth first search - DFS

Si parte dalla radice, espandendola, per poi espandere ricorsivamente uno dei nodi generati fino a raggiungere una foglia o una soluzione. Se si raggiunge una foglia senza trovare una soluzione, si torna indietro e si esplora un altro ramo.

- La frontiera è definita tramite una struttura dati LIFO (Last In, First Out), come una pila.
- La strategia nello scegliere quale nodo espandere successivamente è tramite il principio del LIFO.
- I costi dei percorsi possono variare, ma l'algoritmo non tiene conto di questi per la sua espansione.

La DFS **non ha la proprietà di essere completa** in generale, poiché potrebbe esplorare rami infiniti senza mai raggiungere una soluzione, soprattutto se il grafo o l'albero di ricerca non è limitato in profondità. é completa solo se il grafo di stati è aciclico e finito

La DFS **non garantisce di trovare una soluzione ottima**, poiché si concentra esclusivamente su un ramo alla volta, senza confrontare i percorsi esplorati.

La complessità temporale è **$O(b^m)$**, dove $b$ è il branching factor (numero di stati figli per ogni nodo) e $m$ è la profondità massima del grafo o albero di ricerca.  
La complessità spaziale è **$O(b \cdot m)$**, poiché la DFS utilizza spazio solo per mantenere i nodi lungo il cammino corrente e i nodi non espansi lungo quel cammino. Questo la rende più efficiente in termini di spazio rispetto alla BFS.

Se il grafo o l'albero di ricerca è finito, la DFS è completa e troverà una soluzione, ma non necessariamente la migliore.

## Backtracking DFS 

Quando espandiamo un nodo, anzichè espanderlo completamente, solo un successore è alla volta è generato. E se un branch non trova soluzione, torna indietro (backtracking) per provare con il prossimo nodo fratello. Questo usa $O(m)$ spazio

## Depth Limited search - DLS

La **Depth-Limited Search** è una variante della **Depth-First Search (DFS)** in cui l'espansione dei nodi è limitata ad una profondità massima predefinita, chiamata **limite di profondità** $l$. Questo significa che l'algoritmo esplora i nodi fino a un certo livello nell'albero di ricerca, senza mai superare il limite stabilito.

- La frontiera è definita tramite una struttura dati LIFO (Last In, First Out), come una pila.
- La strategia nello scegliere quale nodo espandere successivamente è tramite il principio del LIFO, come nella DFS, ma si espandono solo i nodi che non superano il limite di profondità.
- I costi dei percorsi possono variare, ma l'algoritmo non tiene conto di questi per la sua espansione.

La **DLS non è completa** per grafi o alberi con profondità illimitata, poiché non esplora i rami che superano il limite di profondità. Se la soluzione si trova al di sotto del limite, la DLS troverà la soluzione, ma se si trova oltre il limite, la ricerca non la troverà.

La **DLS non garantisce una soluzione ottima** poiché non esplora tutti i percorsi fino a una soluzione, limitandosi solo a quelli che rientrano nel limite di profondità.

La **complessità temporale** è **$O(b^l)$**, dove $b$ è il branching factor (numero di figli per ogni nodo) e $l$ è il limite di profondità, poiché l'algoritmo esplora solo i nodi fino a quella profondità.  
La **complessità spaziale** è **$O(b \cdot l)$**, poiché la DLS utilizza solo spazio per mantenere i nodi lungo il cammino corrente e i nodi non espansi lungo quel cammino fino al limite.

Se non esiste una soluzione all'interno del limite di profondità, l'algoritmo termina senza successo senza esplorare oltre, ma se la soluzione è trovata entro il limite, la DLS la troverà.

## Iterative Deepening Search - IDS

L'**Iterative Deepening Search** è un algoritmo che combina le caratteristiche della **Depth-First Search (DFS)** e della **Depth-Limited Search (DLS)**. Inizia con un limite di profondità di 0 e aumenta progressivamente il limite di profondità fino a trovare la soluzione o esplorare completamente l'albero. Ogni iterazione esegue una **Depth-Limited Search** con un limite di profondità crescente.

- La frontiera è definita tramite una struttura dati LIFO (Last In, First Out), come una pila.
- La strategia nello scegliere quale nodo espandere successivamente è tramite il principio del LIFO, come nella DFS, ma l'algoritmo esegue ripetutamente ricerche DFS con limiti di profondità incrementali.
- I costi dei percorsi possono variare, ma l'algoritmo non tiene conto di questi per la sua espansione.

L'**IDS è completo**, poiché esplora ogni livello dell'albero, iniziando dalla radice, e aumenta il limite di profondità fino a trovare una soluzione. Quindi, se esiste una soluzione, l'IDS la troverà.

L'**IDS è ottimo** se tutte le azioni hanno lo stesso costo, poiché visita prima tutti i percorsi di costo $d$ (profondità) prima di passare a quelli di costo $d+1$, garantendo di trovare la soluzione ottima se esiste.

La **complessità temporale** è **$O(b^d)$**, dove $b$ è il branching factor (numero di figli per nodo) e $d$ è la profondità della soluzione. Anche se l'algoritmo esegue più ricerche DFS, la ripetizione dei nodi esplorati ad ogni iterazione non incide significativamente sul risultato, poiché i costi sono comunque proporzionali alla profondità totale del grafo.

La **complessità spaziale** è **$O(b \cdot d)$**, poiché la memoria è utilizzata solo per la pila di ricerca durante l'esplorazione di ciascun livello, ed è simile alla DFS, che conserva solo i nodi del cammino corrente.

L'**IDS è completo** e ottimale per grafi con una profondità finita e quando i costi sono uniformi, ed è particolarmente utile quando la profondità della soluzione è sconosciuta. Tuttavia, l'algoritmo può essere inefficiente in termini di tempo se la profondità della soluzione è molto grande, a causa delle ripetizioni di lavoro tra le iterazioni.

## Best first search 

Il **Best-First Search** è un algoritmo di ricerca che seleziona quale nodo espandere successivamente basandosi su una funzione di valutazione $f(n)$ che stima quanto promettente sia ogni nodo per portare a una soluzione. L'algoritmo espande prima i nodi che sembrano essere i più promettenti secondo la funzione di valutazione.

- La frontiera è definita tramite una **struttura dati di coda prioritaria (priority queue)**.
- La strategia nello scegliere quale nodo espandere successivamente si basa sulla valutazione di ciascun nodo tramite una funzione $f(n)$. A ogni nodo viene associato un valore di costo, e i nodi con i valori più bassi di $f(n)$ vengono espansi prima.
- I costi dei percorsi possono essere variabili, e la funzione di valutazione si basa solitamente su una combinazione di fattori, come il costo del percorso corrente più una stima della distanza dalla soluzione

La Best first search è una generalizazione di BFS e DFS, infattti se la funzione da minimizzare $f$ ritorna la profondità di un nodo, allora è equivalente alla BFS. Mentre se ritorna la profondità di un nodo, con segno negativo, allora si comporta come DFS. Se la funzione ritorna la somma di tutti i costi delle azioni effettuate dalla radice al nodo, allora equivale alla **uniform cost search**

## Uniform cost search - UCS - Dijkstra

Quando effettuare un azione ha costi diversi (prima abbiamo visto azioni con costi uguali), allora possiamo effettuare la best-first search tramite il costo del percorso dalla radice al nodo in cui ci troviamo (sommando tutti i costi delle azioni del cammino). Questo algoritmo può essere vista come una variante della BFS, e quindi ritorna il cammino con costo minore. Questo algoritmo è chiamato UCS nella community AI, è più comunemente conosciuto come algoritmo di dijkstra 

UCS è completo se lo spazio di ricerca ha almeno una soluzione, oppure è finito.
UCS trova soluzione ottima se i costi sono non negativi 

Se ha una soluzione ottima di costo $C^*$ e gli archi hanno costo di almeno $\epsilon > 0$, allora la profondità effettiva raggiunta da UCS può essere assunta essere _$1 + \lfloor C^\star / \epsilon \rfloor$.  Allora la complessità spaziale e temporale è circa $O(b^{1 + \lfloor C^\star / \epsilon \rfloor})$ 

## Bidirectional search

Cerca in contemporanea in avanti partendo dallo stato iniziale in cerca di uno stato finale, ed indietro dagli stati finali in cerca dello stato iniziale, sperando che le due ricerche si incontrino, formando la soluzione. 

Questo potrebbe diminuire significativamente il costo di ricerca. Se per esempio una ricerca avrebbe compiuto $b^d$ passaggi, usando la ricerca bidirezionale, avrebbe impiegato $b^{d/2} + b^{d/2}$   

Questo algoritmo può essere implementato usando uno qualsiasi degli algoritmi precedentemente visti

![[Pasted image 20241130184719.png]]
![[Pasted image 20241130184734.png]]

# Informed search

Una ricerca informata usa informazioni sullo specifico dominio per aggiungere suggerimenti sul quanto lontano sia una soluzione dallo stato corrente.

Questo suggerimento è definito tramite una funzione euristica $h(n) =$ "stima del costo del cammino minimo dallo stato del nodo $n$ ad uno stato finale" 

Un esempio di funzione euristica nella ricerca del cammino minimo fra due città potrebbe essere la distanza aerea delle città alla destinazione

## Greedy best-first search

é una forma di Best-first search che espande prima i nodi con il valore $h(\cdot)$ più basso, cioè quello che sembra essere il più vicino alla soluzione in base all'euristica data. 
Implementata semplicemente usando la best-first search tramite $-h(n)$ come valore per la priorità del nodo $n$ 

è completo solo su spazi finiti, non ha garanzia sulla soluzione ottima dato che utilizza l'euristica per calcolare il costo del percorso, ed ha complessità temporale al caso peggiore di $O(b^d)$ se c'è soluzione. Ma tramite una buona funzione euristica, la complessità può essere ridotta in maniera significativa.

# A*
é un algoritmo best-first searhc che usa come funzione di valutazione $f(n) = g(n) + h(n)$ dove $g(n)$ è il costo del cammino dal nodo radice ad $n$, mentre $h(n)$ è la funzione euristica. 

![[Pasted image 20241130190632.png]]

A* è completo se lo spazio degli stati ha soluzione o è finito. Ha complessità simile al greedy best first search.

L'ottimalità del costo dipende dalla funzione euristica che deve essere "ammissibile", cioè che $0 \le h(n) \le h^*(n)$ dove $h^*(n)$ è il vero costo da $n$ al suo più vicino goal.

Se la funzione euristica è ammissibile, allora A* trova una soluzione ottima

Una proprietà più forte è la "consistenza" della funzione euristica, cioè se: $h(n) \le c(n,a,n^\prime) \le h^*(n^\prime)$ dove $c(n,a,n^\prime)$ è il costo di fare un azione $a$ da nodo $n$ per arrivare a $n^\prime$. 
Questa proprietà è simile alla disuguaglianza triangolare

![[Pasted image 20241130191429.png]]

Se un euristica è coerente, allora è anche ammissibile (l'oppost non è vero), quindi trova soluzione ottima. 

Inoltre, la prima volta che raggiungiamo un certo stato, allora il cammino dalla radice a quello stato sarà ottima, il che vale anche per gli stati finali. Lo stesso non è vero con un euristica non coerente, dato che potrebbero esistere più cammini che raggiungono un certo stato. 

Se e solo se la funzione $h(\cdot)$ è coerente, allora ad ogni passaggio di A*, il costo dallo stato iniziale incrementa in maniera monotona.

A* non espande mai nodi $n$ che hanno $f(n) > C^*$, dove $C^*$ è il costo della soluzione ottima, e possiamo anche dire che A* è _ottimalmente efficiente_, cioè che un qualsiasi algoritmo ottimo che usa la stessa funzione euristica e che parte dal nodo radice, dovrà di sicuro espandere tutti i nodi che espande $A^*$  

Ecco la traduzione con l'uso del markdown per le liste:

Il principale problema con A* è il suo utilizzo della memoria. Questo può essere migliorato con diverse tecniche/astuzie:

- **Contatori di riferimento**: tenere traccia del numero di volte che uno stato è stato raggiunto e rimuoverlo dalla tabella degli stati raggiunti quando non ci sono più modi per raggiungere quello stato.
- **Beam search**: limita la dimensione del fronte, ad esempio mantenendo solo i k nodi con i migliori punteggi 𝑓, scartando qualsiasi altro nodo espanso (questo, naturalmente, rende la ricerca incompleta e subottimale).
- **Ricerca A* con approfondimento iterativo (IDA*)**: combina A* con il principio di approfondimento iterativo (discusso alcune slide fa, nel contesto di DFS).
- **Ricerca best-first ricorsiva (RBFS)**: imita il funzionamento della ricerca best-first standard, ma utilizzando solo spazio lineare.
- **A* a memoria limitata (MA*) e A* semplificato (SMA*)**: determina quanta memoria è disponibile e permette a un algoritmo di utilizzarla tutta.
