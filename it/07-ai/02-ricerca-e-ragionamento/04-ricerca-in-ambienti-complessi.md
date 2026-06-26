---
title: "Ricerca in Ambienti Complessi"
description: "Ricerca in ambienti parzialmente osservabili e non deterministici tramite belief state, alberi AND-OR e piani condizionali; trattamento di problemi sensorless e con osservazioni parziali."
type: lecture
---
Fino ad ora abbiamo lavorato nella soluzione di problemi in ambienti completamente "osservabili" e deterministici. Questo ci permette di pensare "mi trovo in stato $s_1$  se faccio azione $a$ arriverò in stato $s_2$". 

Se ci troviamo invece in un ambiente "parzialmente osservabile", allora l'agente non sa con certezza in quale stato si trova

E se ci troviamo in un ambiente non deterministico, l'agente non conosce lo stato a cui transirà dopo aver effettuato un azione.

In queste condizioni, non pensiamo più in maniera deterministica, invece pensiamo "mi trovo in stato $s_1$ oppure $s_3$, e se faccio azione $a$ arriverò a staato $s_2$, $s_4$ oppure $s_5$" 

Chiamiamo l'insieme di stati che l'agente crede essere possibili, il "Belief state"

In un ambiente parzialmente osservabile/non deterministico, la soluzione ad un problema non è più una sequenza di azioni, ma una "strategia", cioè una piano condizionale in base ai valori dei sensori (percepts) che l'agente riceve durante l'esecuzione della strategia

# Modelli di transizione con più stati output

In ambienti non deterministici, il risultato dell'esecuzione di un azione possono essere un insieme di stati output, non più solo uno stato come negli ambienti deterministici. 


Esempio:

![[Pasted image 20241201165727.png]]

In questo mondo "erratico" dell'aspirapolvere, quando l'azione di pulizia viene applicata ad un quadrato sporco, allora lo pulisce, ma potrebbe pulire anche il quadrato adiacente
Quando l'azione di pulire viene applicata ad un quadrato pulito, allora potrebbe diventare sporco.

Per esempio, se applichiamo `RESULTS(1, "Suck") = { 5, 7 }`  
Un piano condizionale che risolve il problema è: `["Suck"; if State=5 then [Right", "Suck"] else [ ]]`
# Alberi AND-OR per ambienti non deterministici

Negli alberi decisionali di ambienti deterministici, la scelta di branching è dettata da "posso fare questa azione **OPPURE** quest'altra". Questi stati generati sono chiamati nodi "OR"

In un ambiente non deterministico, la scelta di branching è influenzata anche dall'environment e i valori dei sensori durante l'esecuzione del piano. Questi stati generati da questo branching sono chiamati nodi "AND". 

Nell'esempio precedente, in un nodo "OR", l'agente sceglierebbe se andare a destra, sinistra, o pulire. Mentre nei nodi AND come `RESULTS(1, "Suck") = { 5, 7 }`, l'agente deve trovare piano per gli stati 5 e 7

La soluzione ad un problema AND-OR è un sottoalbero dell'albero di ricerca dove i goal sono in ogni nodo foglia, ed ogni azione specifica un azione per ogni nodo OR, e il risultato di OGNI branch per i nodi AND 

![[Pasted image 20241201170854.png]]

Questi alberi possono essere generati modificando gli algoritmi precedentemente visti, permettendo all'algoritmo di ritornare un albero come soluzione, anzichè un singolo percorso

# Ricerca in ambienti parzialmente osservabili 

Ora cerchiamo di risolvere il problema di risolvere la parziale osservabilità dell'ambiente, dove i sensori dell'agente non sono abbastanza per poter sapere esattamente in quale stato l'agente si trova. 

A questo punto parte delle azioni dell'agente serviranno per ridurre l'incertezza su quale stato ci troviamo

## Ricerca in ambienti parzialmente osservabili senza sensori

Quando i sensori dell'agente non ci danno alcune informazioni, allora si tratta di un problema senza sensori (conformant problem/sensorless problem)

Consideriamo una versione senza sensori del problema dell'aspirapolvere precedente, ma senza alcun sensore.

Assumiamo che l'agente conosce la geografia del proprio mondo, ma non dove si trova in questo momento, o lo stato di pulizia dei quadrati. 

![[Pasted image 20241201171851.png]]

Inizialmente, il *belief state* dell'agente è $\{1,2,...,7,8\}$.
Se l'agente si muove a destra, allora si troverà in uno tra gli stati $\{2,4,6,8 \}$, l'agente è riuscito a trovare informazioni senza l'utilizzo di alcun sensore. 

Se l'agente esegue `[Right, Suck]`, allora l'agente potrà trovarsi negli stati $\{4,8\}$

Se l'agente esegue `[Right, Suck, Left, Suck]` l'agente è garantito trovarsi nello stato finale 7 indipendentemente dallo stato iniziale.

Di sicuro in un problema sensorless, la soluzione di un problema è una sequenza di azioni, non un piano condizionale, dato che non ci sono sensori da usare per i branch. Ma anzichè fare ricerca negli stati "fisici", cerchiamo nello spazio dei "belief states"

Dato un problema di ricerca $P$, il corrispondente problema "belief state" è:
- **Stati**: Lo spazio degli "belief state" contiene ogni sottoinsieme degli spazi fisici, la maggior parte di questi non saranno raggiungibili dallo stato iniziale
- **Stato iniziale**: consiste di tutti gli stati in $P$, alcune volte può essere un insieme più piccolo date assunzioni sullo stato iniziale dell'agente
- **Azioni**: Unione o intersezione delle azioni che possono essere effettuate dagli stati nel "belief state"
- **Modello di transizioni**: Il risultato di ogni azione $a$ effettuato sul belief state $b$ sono i belief state:
  - **Azioni deterministiche**: l'insieme di tutti gli stati che sono il risultato di applicare $a$ a qualsiasi degli stati nel belief state corrente $b$, saranno 1 stato per stato nel belief state
  - **Azioni non deterministiche**: L'unione di tutti i possibili che sono il risultato di applicare $a$ a qualsiasi degli stati nel belief state corrente $b$, possono essere più di 1 stato per ogni stato nel belief state
- **Test del goal**: 
  - L'agente può "possibilmente" essere nello stato goal se è presente almeno uno stato goal nel belief state
  - L'agente può "necessariamente" essere nello sttato gol se ogni stato nel belief state è uno stato goal
- **Costo di un azione**: Questo è un po delicato, la stessa azione può avere costi differenti per stati differenti. Infatti se la stessa azione può avere costi differenti per stati differenti, allora il costo di effettuare un azione può essere uno tra i costi dei vari stati. Per semplicità assumiamo che i costi di effettuare un azione su vari stati sia uguale.

La difficolta di questi problemi è la dimensione dello spazio di ricerca di $2^N$, dove $N$ sono il numero di stati.
Per semplificare questo, possiamo invece iniziare da un agente che non conosce "nulla", e man mano aumentare cosa "sa". Per esempio, dopo essersi mosso a destra, sappiamo che l'agente non si trova a sinistra. 

Alternativamente, possiamo costruire la ricerca in maniera incrementale. Partendo dal belief state di tutti gli stati possibli, dobbiamo trovare un azione che funziona per tutti e 8 gli stati, possiamo farlo trovando un azione che funziona per lo stato 1, poi controlliamo se funziona anche per stato 2, se non lo è, torniamo indietro e troviamo un altra soluzione per stato 1, etc...


## Ricerca con osservazioni parziali

Molti problemi non possono essere risolti senza informazioni dei percept, ma molti problemi possono essere risolti con *qualche* percept.

In ambienti parzialmente osservabili, possiamo mappare i percept agli stati. Lo stesso percept può essere prodotto da diversi stati.

In questo modo, ogni percept crea un belief state, e il problema sottostante è simile a quello di trovare una soluzione in un problema su uno spazio belief-state

Per esempio, il problema dell'aspirapolvere, aggiungiamo 3 percept:
- percept L nel riquaro a sinistra
- percept R nel riquadro a destra
- percept Dirty se il riquadro corrente è sporco
- percept Clean se il riquadro corrente è pulito

![[Pasted image 20241201190621.png]]
In questo caso, i valori del percept a state 1 e 3 sono `[L, Dirty]`. Allora, usando questo percept iniziale, il belief state iniziale sarà $\{1,3\}$ 

La ricerca in un ambiente parzialmente osservabile è sicuramente non deterministica. Data la non possibilità di sapere esattamente in quale stato ci si trova. Per questo il processo di ricerca può essere modellato come un albero di ricerca AND-OR.
