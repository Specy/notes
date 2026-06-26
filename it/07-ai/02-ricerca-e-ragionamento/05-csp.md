---
title: "Constraint Satisfaction Problems (CSP)"
description: "Definizione formale dei CSP con variabili, domini e vincoli; algoritmi di risoluzione tramite backtracking search, propagazione dei vincoli (AC-3), coerenza locale e ricerca locale su assegnamenti completi."
type: lecture
---
CSP (Constraint satisfaction problems) è un problema descritto da una serie di variabili, ed una serie di vincoli.
Una soluzione per un CSP è un assegnamento i variabili che soddisfa tutti i vincoli.

Gli algoritmi di soluzione per CSP sfruttano la struttura edgli stati anzichè euristiche sul problema che stiamo risolveno, per risolvere problemi complessi. Vengono risolti tramite eliminazione dello spazio di ricerca, cercando di diminuire la dimensione dei possibili stati, individuando combinazioni di valori delle variabili che violando i vincoli

Un CSP è formato da:
- $\mathcal{X}$:  è un insieme di variabili $\{\mathcal{X_1},..., \mathcal{X_n}\}$ 
- $\mathcal{D}$:  è un insieme di domini $\{\mathcal{D_1},..., \mathcal{D_n}\}$,  uno per ogni variabile. Per esempio, il dominio $D_i = \{true, false\}$ dice che la variabile $X_i$ è booleana
- $\mathcal{C}$: è un insieme di vincoli. Un vincolo è definito come una tupla <scope, relation> dove lo scope è una tupla di variabili che fanno parte di questo vincolo, e la relazione può essere un insieme di tuple che rappresentano i valori validi delle variabili definite nello scope, oppure una funzione che computa se la tupla è parte della relazione o meno.
Un esempio di vincolo su variabili $X_1, X_2$ con entrambi dominio $\{1, 2, 3\}$, allora il vincolo che dice che "$X_1$ deve essere più grande i $X_2$" può essere scritto come:
- $\langle \ (X_1, X_2), \ \{(3,1), (3,2), (2,1)\} \ \rangle$ 
- $\langle \ (X_1, X_2), \ X_1 > X_2 \ \rangle$ 

Il CSP lavora su assegnamenti di variabili $\{X_1 = v_1, ..., X_n = v_n \}$.
- Un assegnamento dove a tutte le variabili è assegnato un valore è detto **completo** o **totale**
- Un assegnamento che soddisfa tutti i vincoli viene chimato "coerente" o "legale"
- Un assegnamento che ha alcune variabili non assegnate è detto **assenamento parziale**
- Una soluzione al CSP è sia coerente che completo
- Una soluzione parziale è un assegnamento parziale che è coerente

Risolvere un generico problema CSP è un problema NP completo, ma alcune sottoclassi di CSP possono essere risolte efficientemente

# Grafo dei vincoli

Quando i vincoli di un CSP sono unari o binari, cioè rappresentano al più 2 variabili, possono essere rappresentati tramite un grafo dei vincoli, dove i nodi rappresentano le variabili del problema, e gli archi rappresentano il vincolo fra le due variabili

# Confronto tra CSP e problemi di ricerca su spazi arbitrari

Nei problemi di ricerca che abbiamo visto precedentemente, lo "stato" è una black box, dove dati sono arbitrari. La funzione obiettivo può essere qualsiasi funzione, e la funzione di transizione può essere arbitraria.

I CSP sono un sottoinsieme di questi problemi di ricerca arbitrari, dove lo stato è rappresentato in una forma specifica e formale, tramite variabili con valori appartenenti ad un certo dominio. La condizione goal è anche essa definita nello stesso modo, tramite un insieme di vincoli in cui sono presenti i valori validi delle variabili per soddisfare il vincolo.

# Tipi di vincoli

I vincoli di CSP possono essere di vari tipi:

- Vincoli Lineari, che insieme a variabili continue, possono essere risolte tramite programmazione lineare, che può essere risolto in tempo lineare
- Vincoli lineari, che insieme a variabili intere, possono essere risolti tramite programmazione lineare intera, questo è un problema NP hard
- Vincoli lineari, che insieme a variabili sia continue che intere, può essere risolto tramite programmazione lineare mista, questo è un problema NP hard
- Vincolo non lineari, che insieme a variabili intere, genera un problema indecidibile, cioè non esiste un algoritmo che riesce a risolverlo

Invece in base al numero di variabili di un vincolo:
- Unario, se il vincolo ha una sola variabile 
- Binario, se il vincolo ha due variabili
- Ordine superiore a 2, ha 3 o più variabili 
- Globale, ha un numero arbitrario i variabili (Alldiff constraint)

# CSP Binario e riduzione

Un CSP binario è un CSP che permette solo vincoli binari o unari. Può essere rappresentato tramaite un albero di vincoli. 

Ogni dominio finito può essere ridotto ad un insieme di vincoli binari, introducendo variabili ausiliarie.
Un modo per convertire un CSP n-ario in uno binario è tramite la trasformazione duale del grafo. Creiamo un nuovo grafo dove è presente una variabile per ogni vincolo, e un vincolo binario per ogni paio di vincoli nel problema originale che condivide variabili. (?)

Questo ha il lato positivo di poter usare algoritmi per il CSP binario per risolvere CSP n-ari. 

# Vincoli Hard e Soft

I vincoli possono essere di 2 tipi diversi:
- Vincoli **HARD** sono vincoli che *devono* essere rispettati in ogni soluzione per il CSP
- Vincoli **SOFT** sono vincoli che *possono* essere rispettati, e se essi non sono rispettati, introducono una penalità nella funzione obiettivo.

# Risolvere CSP: approccio semplice

Possiamo risolvere un CSP tramite i vari algoritmi di ricerca che abbiamo esplorato in precedenza tramite il grafo dello spazio di ricerca

I nodi (stati) sono tutte i possibili assegnamenti di variabili, anche parziali. Mentre gli archi sono definiti seguendo la funzione di transizione, dove preso un assegnamento parziale, i successori di questo stato sono tutte le estensioni di questo stato che aggiunge uno dei valori di una variabile non ancora assegnata. 

Per esempio, per un problema CSP con variabili $\{A,B,C\}$ con valori $\{1,2\}$, i successori di $\{ A = 1\}$ sono: $\{ \{A = 1, B = 1 \}, \{A = 1, B = 1 \}, \{A = 1, C = 1 \}, \{A = 1, B = 2 \}, \{A = 1, C = 2 \} \}$   

La condizione finale è creare un assegnamento che è completo e valido. Partendo dallo stato iniziale $\{\}$ 

Le possibili soluzione sono necessariamente nelle foglie, ma non tutte le foglie sono assegnamenti validi. 

Potremmo usare una DFS per trovare assegnamenti validi, ma usando questa tecnica, avremmo $n!d^n$ foglie nell'albero di ricerca, questo perchè consideriamo come diverse soluzioni che hanno permutazioni di uno stesso stato (stesso assegnamento, solo con ordine delle variabili diverso), che naturalmente non cambia la soluzione. Questa "ottimizzazione" ci permette di ridurre drasticamente lo spazio di ricerca, che però è comunque formato da $d^n$ foglie, cioè il numero di possibili assegnamenti.

Un altro problema è che i vincoli vengono (e possono) essere controllati completamente solo quando ci troviamo in una foglia, anche se l'assegnamento parziale viola già alcuni vincoli. Se un assegnamento parziale viola un vincolo, allora di sicuro ogni sua estensione violerà comunque almeno gli stessi vincoli, quindi continuare la ricerca in questo branch è inutile.

Possiamo controllare i vincoli ad ogni assegnamento parziale, e ignorare tutti i branch che violano dei vincoli parziali. Questo viene chiamato "pruning" 

## Ricerca Backtracking per CSP

Uno degli algoritmi più noti per la risoluzione di CSP è la ricerca con backtracking che unisce la ricerca con backtracking, l'ordinamento delle variabili per evitare le permutazioni, e il pruning dei branch non validi.

![[Pasted image 20241202210235.png]]

La selezione della variabile da aggiungere  `SELECT-UNASSIGNED-VARIABLE` può essere effettuata a caso, oppure scegliendo la prossima variabile più "ristretta" (con dominio più piccolo), che ci permette di tagliare lo spazio provando il minor numero possibile di varianti di questo spazio, raggiungendo più velocemente una soluzione.
## Propagazione dei vincoli

Un algoritmo per CSP può fruttare i vincoli per ridurre il numero di valori legali per una variabile, che a sua volta può causare la riduzione di valori legali per altre variabili, etc... Riducendo i valori possibili di altre variabili, ci aiuta in futuro quando dovremmo considerare i valori di queste altre variabili.

Questa propagazione di vincoli può essere effettuata come preprocessing prima di risolvere il CSP, oppure durante la ricerca di una soluzione per il CSP. 

# Coerenza locale

Se consideriamo il problema CSP come un grafo binario, quindi con variabili come nodi e archi come le relazioni tra due variabili, allora possiamo estrarre un sottografo di questo grafo, contenente le sole variabili dell'assegnamento locale, e tutti i vincoli che connettono le variabili di questo sottografo. 

A questo punto, forzare la coerenza di questo sottografo, ci permette di eliminare valori incoerenti dal resto del grafo.

Dato che abbiamo visto che un problema CSP n-ario può essere trasformato in uno binario, possiamo usare questa tecnica per risolvere il problema CSP n-ario
## Coerenza dei nodi

Una singola variabile (cioè un nodo del grafo) è detto "node consistent" (1-consistency) se tutti i valori del suo dominio soddisfano tutti i vincoli unari. 

Possiamo rendere un nodo 1-coerente rimuovendo tutti i valori dal suo dominio che non soddisfano tutti i vincoli unari. 

## Coerenza degli archi e AC-3

Una variabile $X_i$ è detta "arc consistent" (2-consistency) rispetto $X_j$ se per ogni valore nel dominio $D_i$ esiste *almeno* un valore in $D_j$ tale che il vincolo nell'arco $(X_i, X_j)$ è soddisfattto

L'algoritmo più popolare per applicare l'arc-consistency è AC-3:

![[Pasted image 20241202212626.png]]

L'algoritmo tiene una coda di archi ancora da considerare, che inizialmente contiene tutti gli archi nel CSP.

A questo punto l'algoritmo fa *pop* di un arco arbitrario $(X_i, X_j)$ e rende $X_i$ arc-consistent rispetto $X_j$. 

Se questa operazione non modifica il dominio di $D_i$ allora l'algoritmo continua con il prossimo arco

Se questa operazione modifica il dominio $D_i$ (riducendone la grandezza) allora aggiungiamo alla coda tutti gli archi $(X_k, X_i)$ dove $X_k$ sono tutti i vicini di $X_i$. 
Facciamo cio perchè la riduzione di questo dominio potrebbe aver causato alcuni vincoli precedentemente rimossi che non avevano causato riduzioni di domini, di poter causare riduzioni una volta rivisitati, dato che il dominio di una delle due variabili di questo arco è più piccolo. 

Se $D_i$ è ridotto all'insieme vuoto, allora vuol dire che non esiste un assegnamento per variabile $X_i$ che soddisfa il CSP, allora possiamo ritornare un errore dicendo che il problema non ha assegnamenti validi.

Altrimenti, continuiamo ad eseguire l'algoritmo finchè non ci sono più archi nella coda.

A questo punto, se l'algoritmo non ha ritornato un errore, abbiamo un nuovo CSP equivalente all'originale (sottografo), che condividono le stesse soluzioni, ma dato che è arc-consistent, sarà più veloce risolverlo, dato che lo spazio di ricerca è più piccolo. 

La complessità di AC-3 è $O(c \times d^3)$ dove $c$ è il numero di vincoli e $d$ è la grandezza del dominio più grande.

## Coerenza dei percorsi

Un set $\{X_i, X_j\}$ è detto "path-consistent" rispetto una terza variabile $X_m$
se per ogni assegnamento $\{X_i = a, X_j = b\}$ coerente rispetto ai vincoli di $\{X_i, X_j\}$, esiste un assegnamento di $X_m$ che soddisfa i vincoli di $\{X_i, X_m\}$ e $\{X_m, X_j\}$ 

Questo garantisce che sono parte di cammini da $X_i$ a $X_j$ con $X_m$ nel mezzo, sono coerenti.

## K-Coerenza

Un CSP è detto K-coerente se per ogni set di $k-1$ variabili, e per ogni assegnamento coerente di queste variabili, allora può essere sempre trovato un valore coerente per qualsiasi k-esima variabile 

## K-Coerenza forte

Un CSP è detto fortemente k-coerente se è k-coerente ed è anche $(k-1)$ coerente, $(k-2)$ coerente, fino a 1-coerente.

Un CSP con n variabili $(X_1, ..., X_n)$ che è  fortemente $n$-coerente può essere risolto facilmente senza una ricerca backtracking.
Possiamo semplicemente trovare un valore valido per $X_1$, e grazie alla forte k-coerenza, sappiamo che indifferentemente da quale valore scegliamo per $X_i$ riusciremo a trovare un valore valido per $X_2, ... X_n$ dato che è fortemente $n$-coerente

A questo punto, risolvere questo problema è possibile in $O(n^2d)$ 

## Forward checking

Il forward checking esegue un "look-ahead" di un passaggio durante la scelta di assegnamenti quando stiamo trovando una soluzione al CSP, controlliamo la arc-consistency.

Per ogni variabile non assegnata $Y$ che è connessa ad una variabile $X$ da un vincolo, rimuovi dal dominio di $Y$ ogni valore che non è consistente con il valore scelto di $X$

# Ricerca locale in CSP

Metodi di soluzione di CSP tramite ricerca locale tipicamente funzionano modificando assegnamenti completi anzichè espandere assegnamenti parziali come la ricerca backtracking.

Parte da un assegnamento completo per CSP, anche se non coerente, e poi lo modifica cambiando una variabile alla volta, finchè non trova un assegnamento valido.

La scelta della variabile da migliorare può essere scelta randomicamente in base alle variabili che violano almeno un vincolo.

E possiamo scegliere un euristica per il valore da scegliere, scegliendo il valore che viola il minor numero possibile di vincoli.

Questo è equivalente all'algoritmo di hill-climbing dove $h(x)$ = "numero di vincoli violati"

Anche se questo metodo non ha garanzia di completezza o tempo di convergenza, in pratica sono molto efficienti.
