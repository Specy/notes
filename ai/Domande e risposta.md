### Descrivere informalmente e brevemente il concetto di agente intelligente. (4-5 frasi)
Un agente intelligente utilizza dei sensori (percept) e la conoscenza del mondo in cui si trova per raggiungere un "goal" prefissato tramite delle azioni che modificano il proprio stato nel mondo.
### Cosa s'intende per 'percept' e 'percept sequence'? (2-3 frasi)
I percept sono i sensori che utilizza l'agente per ricevere informazioni sul mondo in cui si trova, la percept sequence è lo storico di tutti i valori dei sensori, letti fino ad ora.

### Cosa s'intende per ambiente 'deterministico' e ambiente 'non deterministico'? Fornire un esempio per ognuna di queste due tipologie di ambiente (4-5 frasi)
Un ambiente deterministico è un ambiente dove possiamo sempre sapere quale sarà il prossimo stato dopo aver effettuato un azione (da uno stato precedente), l'azione stessa è deterministica. Mentre un ambiente non deterministico, effettuare un azione potrebbe portarci a più stati. 
Un esempio di ambiente deterministico è un agente che si muove in un labirinto. Mentre un esempio di non deterministico può essere un agente che si muove nel traffico.

### Definire i concetti di 'agent function', 'agent program' e 'agent architecture' (3-4 frasi)
La agent function è una descrizione astratta del comportamento di un agente, menttre l'agent program è un implementazione dell'agent function. L'agent architecture è l'architettura fisica usata per far eseguire l'agent program.

### Fornire la definizione formale di search problem. (6-10 frasi)
Un problema di ricerca ha il compito di scoprire quale è la catena di azioni da effettuare per raggiungere un goal. 
I componenti di un problema di ricerca sono, lo stato iniziale dove l'agente inizia. Tutti i possibili stati dell'environment, le azioni che l'agente può effettuare (che mappa uno stato ad un altro), l'insieme degli statti terminali e una funzione di costo che ci dice quanto è costoso applicare un azione.

Il nostro scopo finale è quello di trovare una catena di azioni di costo minimo per raggiungere il goal dallo stato iniziale.

### Fornire un esempio di search problem del mondo reale, specificando in maniera chiara e precisa i vari elementi alla base della definizione formale di search problem. (6-10 frasi)


### Cosa s'intende per 'uninformed search' e 'informed search'? (3-5 frasi)
Per informed search si intende una ricerca dove si conosce quanto è "distante" lo stato corrente da uno dei goal, mentre un uninformed search non ci da alcun indizio su quanto distanti siamo dalla soluzione.

### Descrivere precisamente (mediante pseudocodice o codice in un qualsiasi linguaggio di programmazione) l'algoritmo A*.

### Discutere (informalmente) i principali principi algoritmici e il razionale dell'algoritmo A*. (4-5 frasi)
l'algoritmo A* è un estensione dell'algoritmo di dijkstra che aggiunge al costo del cammino da sorgente a nodo corrente, anche una stima di costo dal nodo corrente alla destinazione.
L'algoritmo A* utilizza una metrica di distanza euristica ammissibile, cioè che l'euristica ha un valore sempre minore rispetto al valore effetttivo. 

### Definire (informalmente) cosa s'intende per 'completezza' di un algoritmo di search. (4-5 frasi)
Un algoritmo si dice completo se riesce sempre a scoprire una soluzione se esiste, e dare un errore se non esiste soluzione. 

### Descrivere (informalmente) il processo di generazione di euristiche per informed search mediante rilassamento del problema originario. Se reputato opportuno, corredare la descrizione con esempi. (5-10 frasi)
Il rilassamento del problema originario è una tecnica di generazione di euristica che rimuove dei vincoli dal problema originario, riuscendoci a dare delle informazioni utili sullo stato corrente e il goal finale. Un esempio è quello del rilassamento del problema del cammino minimo, come euristica rilassata possiamo considerare la distanza aerea (rilassato perchè nel problema originario c'è il vincolo di dover passare per le "strade", mentre nel rilassamento, ignoriamo le strade), che riesce a darci una stima sulla distanza dello stato corrente a quello goal.


### Discutere le principali limitazioni dell'algoritmo hill climbing. (5-8 frasi)
La limitazione principale è quella di cadere in un minimo locale. Lo scopo della ricerca è quello di trovare lo stato che ha il valore più alto della funzione obiettivo. L'algoritmo di hill climbing sceglie il prossimo stato con funzione obiettivo maggiore rispetto a quella corrente, ma se ci troviamo in un massimo locale (dove i prossimi stati hanno costo minore, ma dopo alcuni altri stati troviamo un nuovo stato con valore maggiore), allora l'algoritmo di fermerà in quello stato.
Possiamo mitigare ciò facendo scelte che potrebbero non essere ottimali in quel momento, come scegliere di continuare ad esplorare stati con costo della funzione minore, ma in questo caso potremmo "saltare" il massimo globale durante questa ricerca.

### Cos'è e a cosa serve un AND-OR search tree? (5-8 frasi)
Un albero AND-OR riesce a rappresentare la ricerca in un albero dove la scelta del prossimo stato può essere un nodo AND oppure OR. 
Un nodo AND ci dice che devono essere considerati TUTTI i figli di questo nodo, mentre un nodo OR ci dice che dobbiamo considerare solo uno dei figli. 

Questo ci è utile quando dobbiamo fare ricerca su un ambiente non deterministico, dato che dobbiamo effettuare tutte le azioni degli stati in cui ci crediamo di trovare, e quando abbiamo un solo stato dove andare, a quel punto la scelta della prossima azione da effettuare è un OR

### Fornire e descrivere brevemente un esempio di search in ambienti nondeterministici. (4-5 frasi)


### Fornire la definizione formale di un CSP e discutere un esempio di problema rappresentato mediante il formalismo CSP. (5-8 frasi)
Il CSP (constraint satisfaction problem) è formato da vincoli, domini e variabili. Le variabili hanno ogniuna un dominio associato, e quello che si sta cercando di risolvere è trovare un assegnamento delle variabili che soddisfa tutti i vincoli. Un esempio di CSP è il problema di colorazione di un grafo, dove nessun nodo del grafo deve avere come vicino un nodo con lo stesso colore.

### Cosa s'intende per 'arc consistency' in un CSP? Descrivere il concetto in generale, e fornire un esempio concreto. (5-8 frasi)

### Fornire uno pseudcodice che calcola il minimax value.

### Qual è il minimax value associato a ognuno dei nodi intermedi del seguente game tree?

### Quali nodi sono oggetto di pruning durante l'esecuzione dell'algoritmo alpha-beta search sul seguente game tree?

### Definire e discutere brevemente (se reputato opportuno, anche mediante l'ausilio di esempi) il concetto di entailment in logica proposizionale. (4-5 frasi)
L'implicazione (entailment) ci dice che a implica b se per tutti gli assignment di a dove a è vero, allora anche b è vero, cioè che l'insieme di tutti gli assignment dove a è vero è un sottoinsieme di quello di dove b è vero.

### Definire e discutere brevemente (se reputato opportuno, anche mediante l'ausilio di esempi) la regola modus ponens in logica proposizionale. (4-5 frasi)
Ci dice che se a implica b è vero, e a è vero, allora b è anche essa vera. Questo è derivato dalla tabella di verità dell'implicazione, dove l'implicazione è falsa solo se a è vero e b è falso. Dato che abbiamo la certezza che l'implicazione sia vera, ci mancano 2 casi, uno in cui a è vero e dove a è falso, ma dato che abbiamo detto che a è falso, allora b deve essere necessariamente vero.

### Spiegare perché la regola di resolution in logica proposizionale è sound. (5-8 frasi)
è sound perchè non modifica le regole della knowledge base, cioè non rilassa ne aggiunge nuovi vincoli, mantenendo gli assegnamenti veri della kb precedente ancora validi. (TODO)
### Descrivere le principali funzionalità della logica del primo ordine aggiuntive rispetto alla logica proposizionale. (5-8 frasi)
L'aggiunta di predicati come il "per ogni" e "esiste" ci permettono di scrivere vincoli più facilmente ed in maniera più espressiva, inoltre l'aggiunta delle funzioni ci permette di astrarre le relazioni fra entità nel nostro problema

### Fornire un esempio di knowledge base che può essere rappresentata in logica del primo ordine in maniera molto più compatta rispetto a una rappresentazione equivalente in logica proposizionale. (5-8 frasi) 
Qualsiasi KB che utilizza molte variabili dello stesso "tipo" che si comportano ugualmente fra di loro, possono essere rappresentate più facilmente tramite logica di primo ordine, dato che ci basta generalizzare la relazioni delle classi, per poi aggiungere ogni elemento alle proprie corrispettive classi
### Descrivere il task di supervised learning. (5-8 frasi)
Il supervised learning è un task di learning dove abbiamo un dataset di esempi, dove per ogni esempio abbiamo anche il valore che vogliamo predirre. 

### Descrivere le fasi di model training e inference in machine learning. (5-8 frasi)
Le fasi principali sono quella di:
- Analisi e pulizia dei dati
- suddivisione del dataset in training e test set
- scelta degli iper parametri per il learning
- allenamento del modello tramite il training set e iperparametri
- inferenza dei dati utilizzando il modello allenato
### Descrivere (informalmente) i concetti di bias e varianza in machine learning. (5-8 frasi)
Il bias ci dice quante informazioni il modello è capace di estrarre dal training data. Una varianza molto alta ci dice che il modello sta avendo underfitting, cioè non riesce a trovare pattern o informazioni nel modello
La varianza ci dice quanto il modello è capace di adattarsi alla vista di nuovi dati nel training set, una varianza alta ci dice che il modello si sta adattando troppo ai dati di training, e non ha capacità "generalista" di classificare correttamente dati mai visti,

### Descrivere la metodologia di cross-validation in machine learning. (3-5 frasi)
Si suddivide il training set in k chunk di grandezza uguale. vengono poi fatti k round di allenmento dove k-1 chunk vengono usati per l'allenamento e 1 chunk viene usato come validation set, alla fine dei k round, ogni chunk è stato usato k-1 volte nel training, e 1 volta nel validation

### Descrivere (formalmente) il modello matematico alla base del multilayer perceptron. (8-10 frasi)
Il multilayer perceptron è suddiviso in 3 parti, l'input layer, hidden layer e output layer.
l'hidden layer è suddiviso a sua volta in vari strati, dove ogni strato ha una serie di neuroni con funzione di attivazione (possibilmente) diversa dagli altri strati. 
Possiamo considerare ogni strato come una matrice numerica contenente i pesi di tutti i neuroni di quello strato, chiamiamo questa matrice W, a questo punto definiamo anche i vettori dei valori in input ed output dello strato come Yin e Yout, allora Yout = g(W * yin), dove g è la funzione di attivazione del nodo. 

A questo punto possiamo vedere l'intera MLP come composizione di queste funzioni, una per ogni strato. 


### Descrivere in maniera sintetica e schematica il processo di training tipicamente utilizzato per un multilayer perceptron. (8-10 frasi)


### Dicutere il ruolo del learning rate nel training di una neural network: cos'è? Dove e perché viene utilizzato? Cosa comportano valori più o meno alti di learning rate?
Il learning rate ci dice di quanto permutare i pesi del modello in ogni step di training. è definito come iperparametro del modello, valori alti velocizzano il training ma potrebbero causare il modello di "saltare" un minimo locale/globale perchè la perturbazione dei pesi fa sorpassare il punto di mezzo ottimale. 
Un valore più basso allena il modello più lentamente, ma ha anche il problema di aumentare la probabilità che il modello si fermi ad un minimo locale, e non vada oltre esso, causando un risultato meno che ottimo. Ma questo è risolto tramite algoritmi di training come il simulated annealing etc.

### Descrivere (informalmente) l'algoritmo di minibatch stochastic gradient descent per il training di una neural network. In particolare, spiegare in cosa tale algoritmo differisce dall'algoritmo di gradient descent di base. (5-8 frasi)
Il problema del traning senza l'uso di minibatch è che la fase del calcolo del loss viene effettuata sull'intero dataset, rendendo il calcolo molto dispendioso. Per questo motivo si suddivide il datasett in "minibatch", cioè partizioni di uguale dimensione del dataset. A questo punto si effettua il training su ogni minibatch, ed una volta averli usati tutti, si esegue uno shuffle dei minibatch e usato per il prossimo step di training. 