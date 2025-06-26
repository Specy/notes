![[Pasted image 20230709110711.png]]

# Gestore di metodi di accesso e file

Ogni query viene analizzata attraverso un modulo chiamato *Gestore delle query* che effettua ottimizzazioni.
Il gestore dei metodi di accesso e file ha bisogno di informazioni sui buffer di dati gestiti in memoria, il Gestore di buffer di memoria ha il compito di determinare come e quando trasferire dati da memoria centrare a memoria di massa e viceversa.
Il gestore dello spaio su disco implementa la lettura, scrittura, allocazione e rilascio delle pagine su disco.
Il gestore della concorrenza assicura l'esecuzione corretta delle transazioni, garantendone le proprietà ACID, filtrando opportunamente le query
Il gestore di affidabilità interviene in caso ci siano guasti del sistema, registrando tutto quello che accade all'interno di LOG, e poi eventualmente effettua operazioni di ripristino se il sistema ha un guasto
Il gestore di integrità assicura che i vincoli di integrità siano sempre soddisfatti.

# Struttura dei file

La struttura tipica per memorizzare delle informazioni di un database è quella di usare file di record.
L'unità di informazione letta o scritta da un dispositivo di memorizzazione è detta *Pagina*, solitamente grande 4-8kb.
Leggere o scrivere una pagina impiega un certo costo di I/O che è molto più grande rispetto a tutte le altre operazioni sul database.

Ci sono varie tecniche per strutturare i file che immagazzinano i dati del database:

## File heap

I record del database sono memorizzati in modo casuale su file, quando aggiungiamo un nuovo record, esso viene aggiunto alla fine delle pagine del file, questo porta a operazioni di inserimento molto efficienti ma l'unico modo di trovare un record è quello di leggere tutti i record, come anche l'operazione di ricerca e modifica. Nella cancellazione non si cancella effettivamente il record, ma viene marcato come eliminato, richiedendo anche un sistema di pulizia dei dati in futuro.

## File ordinati

I record sono ordinati in base ad uno o più campi, la ricerca è veloce dato che può utilizzare la ricerca binaria, mentre inserimento e cancellazione richiedono più passi dato che bisogna prima trovare la posizione corretta dove inserire l'elemento, creare lo spazio necessario e inserire gli elementi. La cancellazione richiede di riorganizzare i file per rimuovere lo spazio libero.

## File HASH

 La posizione del record nel file viene calcolato usando una funzione *Hash* che converte il record in una chiave di hash usata poi come posizione di salvataggio, ma a questo punto potrebbe capitare di avere due record con la stessa chiave, quindi bisogna implementare un sistema di bucket dove record con stessa chiave hash possono essere salvati

## Indici di accesso

Un indice è una struttura dati che permette di organizzare i record al fine di rendere efficiente il recupero dell'informazione, usando una chiave di ricerca sull'indice.

Possiamo memorizzare le informazioni in un file non ordinato, mentre le posizioni si possono memorizzare in un file ordinato con un capo ID.

![[Pasted image 20230709112650.png]]

All'interno di un file indice vengono memorizzati i *Data entry*, una coppia <chiave, valore> dove la chiave viene usata per la ricerca, e il valore è l'ID della risorsa. In questo modo le risorse possono essere salvate in maniera indipendente dal file di indice.

## Indice multilivello

Anzichè avere un singolo file contentente tutti gli indici, possiamo suddividere il file di indici in più file di indici.
Usando una struttura ad albero possiamo rappresentare nelle foglie i record del database, e nei nodi interni gli indici di vario livello. 

![[Pasted image 20230709113600.png]]

## Indici B+ Tree

Possiamo implementare la struttura di indici multilivello usando i B+ Tree.
è un implementazione più efficiente del B-Tree. Il B-Tree è strutturato con ogni nodo contenente una lista alternata di valore - chiave $\langle P_{1}, K_{1},..., K_{q}, P_{q} \rangle$ dove $K_{1} \lt ,..., \lt K_{q-1}$ e $P_{K_{i}}$ punta ai dati relativi alla chiave $K_i$. 
Tutti i nodi foglia sono allo stesso livello 

![[Pasted image 20230709114439.png]]

Con l'aggiunta di un elemento, l'albero è mantenuto bilanciato tenendo tutte le foglie allo stesso livello, quando un nodo diventa completo, esso si divide in due nodi, il nodo radice avrà solo il valore centrale del nodo, mentre i figli avranno la parte sinistra e destra rispettivamente. Quando uno di questi due nodi si riempie, il nodo viene diviso in due, e aggiunto al padre, posizionandolo correttamente in base alla chiave.
Se il padre si riempie, anche esso è diviso e si propaga a tutto il resto dell ramo verso l'alto.

Dopo un eliminazione di un elemento, si controlla se il nodo è pieno per metà della sua capacità, se lo è, allora viene fuso con uno dei suoi nodi vicini, potenzialmente propagando fino alla radice.

L'albero *B+Tree* ha anche un puntatore tra i vari nodi foglia, e ogni nodo foglia memorizza gli indici dei dati. Essendo bilanciato, la ricerca di un indice è costante all'altezza dell'albero

![[Pasted image 20230709115122.png]]

In oltre usando questa struttura è possibile implementre facilmente un range di ricerca.

## Indici di bitmap e indici di JOIN

Gli *indici di bitmap* sono usati per immagazzinare quegli attributi che presentano un numero ridotto di valori possibili, avendo un vettore di bit dove un bit uguale a 1 rappresenta che quel specifico valore è presente nella tupla.

![[Pasted image 20230709115423.png]]

Gli *Indici di JOIN* permette di precalcolare l'operazione di join, evitando di ricacolarla ogni volta che viene eseguita una query.

# Gestione della memoria

Ha il compito di gestire le informazioni presenti nel buffer di memoria centrale, rimuovendo e aggiungendo. 
Utilizza strategie di aggiunta/rimozione di dati per decidere se un dato può essere rimosso dalla memoria di massa per liberare spazio ad altre risorse da leggere da disco, esistono varie strategie:
- **FIFO** (First in first out)
- **LRU** (Least recently used)

O ogni dato ha due variabili di stato, count e dirty, count indica quanti programmi stanno usando una certa apgina e dirty indica se la pagina è stata modificata o meno. Quando si richiede una pagina da disco, il gestore del buffer controlla se esiste già in memoria, se esiste allora incrementa il count di 1, e se viene modificata, pone il dirty a 1.

In caso che la pagina non sia presente, viene scelto una pagina da liberare tramite le politiche di FIFO o LRU, se non è presenta alcuna pagina libera, il gestore di buffer può applicare politiche chiamate *steal* o *no steal*. Una volta che la pagina richiesta è trasferita in memoria, si setta il count a 1 e dirty a 0.

- Politica **Steal** scrive su disco prima della commit di una transazione, *Rubando* una pagina dalla transazione
- Politica **No steal** non viene rimossa la pagina ad un altra commit, e la richiesta corrente viene messa in attesa finchè una pagina viene liberata.
- Politica **Force** si assicura che tutte le pagine modificate da una transazione siano immediatamente scritte su memoria di massa appena abbiano fatto la commit, liberando la pagina. Altrimenti si chiama politica *no force* 

# Query processor

Ha il compito di ottimizzare le query scegliendo strateglie migliori a ridurre i tempi di risposta e passaggi intermedi di una query. é diviso in vari passaggi:

- **Analisi lessicale, sintattica e semantica**: Si determina se una query è corretta in base alle informazioni dello schema del database, e viene poi convertita nella sua relativa forma algebrica
- **Ottimizzazione algebrica**: Trasforma la query in ingresso in una forma equivalente ma più efficientemente eseguibile
- **Ottimizzazione basata sui costo**: Viene ottimizzata la query in base alle informazioni sulle relazioni del database, questo poi determina il piano finale di esecuzione in sequenza di operazioni di basso di livello.

Un euristica fondamentale dell'ottimizzazione delle query è di *Push selections down* e *push projections down*  

Per esempio partendo dalla query:

```sql
SELECT * FROM DIPARTIMENTI D JOIN IMPIEGATI I ON D.Cod=I.Dip WHERE I.Cognome=‘Moscato’;
```

Abbiamo l'equivalente forma algebrica come:
$$
\huge{\sigma_{I.Cognome = 'Moscato'}(D \triangleright \triangleleft_{D.Cod = I.Dip} I)}
$$
Tramite il **Pushing selection down** troviamo che se $A$ e $B$ due generiche relazioni e $\tilde{X}$ una condizione di selezione sugli attributi di $B$, abbiamo che:
$$
\huge{\sigma_{\tilde{\chi}}(A \triangleright \triangleleft_{\chi}B) = (A \triangleright \triangleleft_{\chi}\sigma_{\tilde{\chi}}(B))}
$$

Perchè anticipa la selezione alla join, permettendo di ridurre il numero di tuple nell'operazione di join, quindi la query finale sarà del tipo:
$$
\huge{D\triangleright\triangleleft_{D.Cod = I.Dip} \ \sigma_{I.Cognome = 'Moscato'}(I)}
$$

In oltre abbiamo ulteriori ottimizzazioni che possiamo effettuare:
- Decomporre le selezioni in AND in successive selezioni atomiche
- Anticipare il più possibile le selezioni 
- Tra le sequenze di selezioni, anticipare quelle più selettive
- Anticipare il più possibile le proiezioni

In seguito il DBMS effettua le ottimizzazioni in base allo schema del database effettuando ottimizzazioni creando un piano di esecuzione in base a:
- Cardinalità delle relazioni
- Dimensioni delle tuple
- Dimensioni degli attributi
- Numero di valori distinti degli attributi 
- Valore minimo e massimo di ogni attributo
- ecc...
Queste ottimizzazioni servono per ridurre al più possibile le dimensioni degli step intermedi, e decide la migliore sequenza di operazioni a basso livello come scansione, accesso, ordinamento e join

Il piano di esecuzione può poi essere memorizzato in un catalogo ed essere richiamato più volte se la stessa query viene eseguita nuovamente (Compile & Store), oppure essere riottimizzata ogni volta (Compile & Go)

# Gestore della Concorrenza

I programmi utenti esistono simultaneamente e viene richiesto l'accesso contemporaneo di operazioni al database, e il DBMS deve garantire la consistenza, integrità e affidabilità dei dati.

Una transazione è un operazione, o sequenza di operazioni che legge e aggiorna il contenuto di un database. Una transazione è quindi un unità logica che corrisponde a una serie di operazioni di lettura/scrittura sul database.

Una transazione può terminare con successo tramite una *Commit* garantendo quindi che i dati modificati dalla transazione siano salvati, o fallire con un *Abort*, eliminando tutte le modifiche intermedie effettuate al database

Una transazione va attraverso vari stati
- **Partially committed**: Quando viene eseguita l'ultima istruzione della transazione, a questo punto la transazione  può essere abortita se ha violato qualche vincolo di integrità o il sistema non ha potuto portare a termine la transazione per qualche errore, mandando la transazione nello stato *Failed* e in futuro abortita. Se tutto va bene, allora passa allo stato *Committed*
- **Failed**: si verifica quando una transazione non può essere committata o se viene abortita durante l'esecuzione.

Il compito del DBMS a questo punto è far terminare le transazioni massimizzano il throughput, aumentando il numero di transazioni effettuate al secondo, e riducendone i tempi medi di risposta mantenendo comunque le proprietà ACID del database.

Le operazioni di una transazione possono essere modellati come sequenza di read e write, specificate come
- $read(x,y)$  dove X è l'oggetto da leggere e Y è il dato letto
- $write(x,y)$ dove X è l'oggetto da scrivere e Y è il dato scritto
Tutti questi valori sono etichettate in maniera temporale in cui avvengono

## Perdita di aggiornamento

La perdita di aggiornamento *Lost update* avviene quando un operazione di aggiornamento di una transazione si sovrappone a un altra che sta aggiornando lo stesso oggetto, annullandone gli effetti 

![[Pasted image 20230709130859.png]]

## Lettura sporca

La lettura sporca *Dirty read* si verifica quando una transazione legge un valore modificato da una transazione che poi verrà abortita 

![[Pasted image 20230709131416.png]]

## Lettura inconsistente

La lettura inconsistente *Inconsistent read* si verifica quando una transazione legge in due istanti diversi uno stesso oggetto, con valori differenti nelle due letture, anche se la transazione stessa non lo ha modificato, questo perchè è stato modificato da un altra transazione.

![[Pasted image 20230709131606.png]]

## Aggiornamento fantasma

Un aggiornamento fantasma *Ghost update* si verifica quando una o più operazioni di aggiornamento riguardano due o più oggetti del database il cui valore è correlato (esempio per vincoli di integrità), non vengono viste da altre transazioni sovrapposte temporalmente. Per loro questo aggiornamento è come se non fosse stato effettuato

![[Pasted image 20230709132020.png]]

## Controllo della concorrenza

Ogni transazione è formata da una sequenza temporale di lettura/scrittura su oggetti del database, rappresentati come:
$$
T_{1}: r_{1}(X), w_{1}(X), r_{1}(Y), r_{1}(Z), w_{1}(Z)
$$
$$
T_{2}: r_{2(X)}, r_{2}(Y), r_{2}(Z), w_{2}(Y) 
$$
Bisogna poter eseguire le transazioni in contemporanea evitando anomalie.

Uno **Schedule** è una sequenza di operazioni di lettura/scrittura generate da un insieme di transazioni concorrenti che preserva l'ordine temporale delle operazioni
Uno **Scheduler** è un sistema che accetta/rifiuta/riordina le operazioni richieste dalle transazioni
Uno **Schedule seriale** è un particolare schedule le cui operazioni vengono eseguite in maniera consecutiva senza sovrapposizioni di operazioni di altre transazioni
Uno **Schedule serializzabile** é uno schedule non seriale che produce gli stessi risultati di uno schedule seriale (anche non essendolo), ed esso può essere trasformato per diventare seriale

Esempio schedule seriale:
$$
S_{3}: r_{1}(X), w_{1}(X), r_{1}(Y), r_{1}(Z), w_{1}(Z), r_{2}(X), r_{2}(Y), r_{2}(Z), w_{2}(Y)
$$
Esempio di schedule non seriale
$$
S_{4}: r_{1}(X), w_{1}(X), r_{2}(X), r_{2}(Y), r_{2}(Z), w_{2}(Y), r_{1}(Y), r_{1}(Z), w_{1}(Z)
$$

I DBMS implementano metodi basati su lock e timestamp per garantire direttamente la serializzabilità, e vengono chiamati metodi "Pessimistici o conservativi" in quanto ritardano l'esecuzione di transazioni che potrebbero generare conflitti nello schedule corrente.

## Metodi basati su lock

Ogni oggetto del database è protetto da un lock
- Ogni volta che una transazione deve leggere l'oggetto, richiede l'autorizzazione tramite un operazione di "read_lock(x)", e una volta acquisito il lock, può effettuare la lettura, il lock di sola lettura può essere condiviso da più transazioni. 
- Ogni volta che una transazione deve scrivere su un oggetto deve richiederne l'autorizzazione tramite operazione di "write_lock(x)" e una volta acquisito il lock, può eseguire la scrittura, il lock di scrittura è esclusivo e non può essere condiviso da più transazioni.

Una volta che una transazione termina l'operazione che ha richiesto il lock, lo rilascia attravero un "unlock" e ogni oggetto nel database ha 3 stati possibili, "libero" (free), "bloccato in lettura" (r_lock), "bloccato in scrittura" (w_lock)

Il gestore della concorrenza possederà un componente chiamato lock manager che tiene conto di tutti gli stati degli oggetti e accoglie o rifiuta richieste in base alla tavola di conflitti.

## Lock a due fasi (2PL)

Ogni transazione deve proteggere tutte le letture e scritture con un lock, allora entra in fase "crescente" acquisendo tutti i lock di cui ha bisogno, e dopo li rilascia nella fase "decrescente", una volta aver rilasciato un lock, non può più acquisirne altri. Questa tecnica non previene il dirty read, esiste un altra strategia chiamata "strict 2PL" che rilascia le risorse solo dopo aver effettuato commit o abort, garantendo che i dati siano corretti.

Il 2PL può causare problemi tramite il deadlock dove due o più transazioni sono bloccate l'una con l'altra in richieste di lock cicliche, i DBMS prevengono l'avvenirsi di deadlock riconoscendo quando, garantendo una richiesta, si possa generare deadlock

## Metodo a timestamp

Ad ogni transazione viene assegnato un timestamp in base a quando nascono e quando accedono a determinati oggetti per operazioni di lettura e scrittura.

Uno schedule è accettato solo se:
- Una transazione non può leggere un oggetto scritto da una transazione più giovane 
- Una transazione non può scrivere un oggetto letto o scritto da una transazione più giovane

Ad ogni oggetto $X$ viene assegnato due variabili 
- $RTM(X)$: Rappresenta il timestamp dell'ultima transazione che ha letto $X$
- $WTM(X)$: Rappresenta il timestamp dell'ultima transazione che ha scritto X

Lo scheduler riceve richieste di $read(\tau, X)$ e $write(\tau, X)$ dove $\tau$ è il timestamp della transazione. 
- In caso di richiesta di lettura, essa viene respinta e la transazione uccisa se $\tau < WTM(X)$, altrimenti la richiesta viene accolta e si aggiorna $RTM(X) = max(\tau, RTM(X))$
- In caso di richiesta di scrittura, essa viene respinta e la transazione uccisa se $\tau < WTM(X)$ o se $\tau < RTM(X)$, altrimenti la richiesta viene accolta e $WTM(X) = \tau$ 

## Approccio ottimistico

In alcuni database casi di conflitti tra transazioni concorrenti sono rari, e quindi le tecniche basate su lock e timestamp non sono necessarie, in questi casi si usa una tecnica ottimistica dove ogni transazione effettua liberamente le proprie operazioni e solo all'atto del commit viene effettuato un controllo per stabilire se ci sono stati conflitti, e in caso, viene effettuato rollnback delle azioni della transazione e rieseguita *restarting*. 

Questo approccio è diviso in 3 fasi:
- **Fase di lettura**: ogni tansazione legge i valori degli oggetti di cui ha bisogno e le memorizza in variabili locali dove vengono eventualmente effettuati aggiornamenti
- **Fase di validazione**: vengono effettuati controlli sulla serializzabilità degli schedule nel caso che gli aggiornamenti locali dovranno essere propagati sulla base di dati
- **Fase di scrittura**: dopo aver superato la fase di validazione, gli aggiornamenti sono propagati al database

## Isolamento di una transazione

Una transazione può definire il livello di isolamento richiesto in 3 tipolgie:
- **READ UNCOMMITTED**: La transazione accetta di leggere dati modificati da transazioni che non hanno ancora fatto commit. Ignora i lock esclusivi e non acquisice lock in lettura
- **READ COMMITTED**: La transazione accetta di leggere dati modificati da transazioni che hanno fatto commit, ma se legge più volte lo stesso dato, potrebbero esserci dati diversi
- **REPEATABLE READ**: La transazione accetta di leggere dati modificati da transazioni che hanno fatto commit, e se legge più volte lo stesso dato, si avrà sempre lo stesso risultato 
- **SERIALIZABLE**: produce schedule serializzabili senza alcuna anomalia

# Gestore di Affidabilità

La memorizzazione dei dati in un DBMS coinvolge 3 memorie:

- **Memoria centrale**: rappresenta lo storage primario di un sistema di database, ha la caratteristica di essere molto veloce in scrittura e lettura ma ha capacità ridotta ed le informazioni non sono volatili 
- **Memoria di massa e memoria stabile**: permette di persistere i dati e ha elevata capacità, ma è molto più lento. La memoria stabile è anche vista come una memoria che non può essere "danneggiata" (come repliche del database) mentre la memoria di massa potrebbe potenzialmente avere guasti e perdita di dati.

Il compito del gestore di affidabilità è di garantire che tutti gli effetti delle transazioni che hanno effettuato commit siano memorizzate in maniera permanente, in modo che in caso di eventuali guasti hardware o software sia sempre possibile ripristinare il corretto contenuto del database. 

Il gestore di affidabilità gestisce l'esecuzione di tutti i comandi transazionali di begin, commit, rollback e di ripristino dopo guasti. Salva tutte queste informazioni in un file di log che in qualsiasi istante permette di ricostruire il contenuto del database a seguito di malfunzionamenti.

## Checkpoint e Dump

- **CHECKPOINT**: è un operazione che segna che tutte le operazioni precedenti ad essa siano correttamente salvate nel database.
- **DUMP**: è un operazione di backup o copia del contenuto del database sulla memoria stabile che è necessaria alla ricostruzione della memoria di massa in caso di guasto di esso.

Durante l'operazione di checkpoint vengono sospese l'accettazione di nuove transazioni, si trasferiscono in memoria di massa tutte le pagine dirty (modificate) da transazioni andate in commit e registra sul logo in modo sincrono un checkpoint che contiene gli identificatori di transazioni attive, e poi si continua a ricevere operazioni.

Dopo un checkpoint si è sicuri che tutte le transazioni che hanno effettuato commit sono in memoria di massa.

## Struttura dei Log di sistema

Il log di sistema del database contiene record di transazione e record di sistema. 

Il **record di transazione** contiene:
- **Identificativo** della transazione ($T$)
- **Timestamp** delle varie azioni ($t_s$) 
- L'**azione** ($O_p$) svolta dalla transazione:  begin ($B$), update ($U$), delete ($D$), insert ($I$), commit ($C$), abort ($A$)
- L'**identificativo** dell'oggetto del database coinvolto ($O$)
- Il **valore dell'oggetto prima della modifica** ($B_I$) da parte della transazione (before image)
- Il **valore dell'oggetto dopo la modifica** ($A_I$) da parte di una transazione (after image)
Possiamo semplificare schematizzando i record delle transazioni nella forma $O_{p}(T, t_{s},O, B_{I}, A_{I})$, se non abbiamo bisogno dell'istante preciso in cui avvengono le operazioni si può omettere $t_s$, indicando quindi che tutte le operazioni sono eseguite uno dopo l'altro
per esempio: $U(T_{1},-, qtaP, 100, 90)$

Il **Record di sistema** contiene:
- **DUMP** (DP) contenente l'istante $t_s$ in cui è stato effettuato l'ultimo backup 
- **CHECKPOINT** (CK) contiene l'insieme delle transazioni attive ($\huge{\tau}$) in un dato istante ($t_s$) 
Possiamo semplificare schematizzando i record di sistema nella forma: $DP(t_s)$ e $CK(t_{s}, \huge{\tau})$ 

Esempio di un log:

```haskell
DP, B(T1,-,-,-,-), U(T1,-,qtaP,100,90), U(T1,-,qtaC,NULL,10), C(T1,-,-,-,-), B(T2,-,-,-,-), CK(T2), U(T2,-,qtaP,90,70), U(T1,-,qtaC,NULL,20), C(T2,-,-,- ,-), B(T3,-,-,-,-), U(T3,-,qtaP,100,90), U(T3,-,qtaC,NULL,10), C(T3,-,-,-,-)
```

## Ripristino

- (**UNDO**): L'esito di una transazione è determinato quando viene scritto il record di commit nel log, un guasto prima di questo istante potrebbe comportare un disfacimento di tutte le azioni di una transazione registrate nel log in caso che i dati siano già stati memorizzati sul database.
- (**REDO**): Un guasto successivo al commit potrebbe causare un rifacimento di tutte le azioni svolte da una transazione e registrate nel log nel caso in cui non siano ancora state registrate nella memoria di massa.

Per garantire un corretto ripristino si seguono delle regole per la scrittura sul log: 
- **Write ahead**: Ogni transazione scrive su log i record prima di effettuare l'operazione sul database, consentendo di disfare le azioni
- **Commit precedenza**: Ogni transazione scrive su log tutti i record prima di effettuare commit, consentendo di rifare le azioni se i dati non sono ancora stati scritti su memoria di massa

Con 3 modalità differenti:
- **Modalità immediata**: ogni scrittura su log è immediatamente seguita da scrittura su base di dati, evitando operazioni di redo, avendo eventualmente solo operazioni di undo
- **Modalità differita**: ogni scrittura di transazioni sul database è differita alla successiva memorizzazione del record di commit nel log, evitando operazioni di undo, avendo solo operazioni di redo
- **Modalità mista**: la scrittura può avvenire sia in modalità immediata e differita, richiedendo sia undo e redo.

## Tipi di guasti e recovery

- **Warm restart**: A seguito di *guasti soft*, cioè errori di programma, crash di sistema, etc. Si perde solo il contenuto della memoria centrale e rimangono intatti memoria secondaria e stabile. In questo caso si effettua un *warm restart*
- **Cold restart**: A seguito di *guasti hard* dei dispositivi di memoria di massa e centrale ma non quella stabile. In questo caso si effettua un *cold restart* 

In entrambi i casi si effettua un ripristino seguendo:
1) Si forza l'arresto completo delle transazioni attive
2) Viene ripristinato il funzionamento del sistema operativo
3) Si effettua la procedura di ripristino

### Ripresa a caldo 

In caso di warm restart si effettuano:
1) Viene ripercorso il log a ritroso finche non si trova l'ultimo checkpoint
2) Viene costruito l'insieme *undo* delle transazioni da disfare, cioè quelle che hanno effettuato abort prima del guasto o che non hanno ancora effettuato commit ma hanno scritto su database. E viene costruito l'insieme *redo* di tutte quelle transazioni che hanno effettuato commit prima del guasto ma che non fossero ancora salvate nel database
3) Viene ripercorso il log "all'indietro", disfacendo tutte le azioni delle transazioni nell'insieme undo. Nel caso di update si ripristina il valore $B_I$, nel caso di insert si cancella l'oggetto inserito e nel caso di delete si ripristina l'oggetto rimosso
4) Viene percorso il log "in avanti" rifacendo tutte le azioni delle transazioni nell'insieme *redo*. Nel caso di update si ripristina il valore $A_I$, nel caso di insert si inserisce l'oggetto nel database, nel caso di delete si cancella l'oggetto nel database

### Algoritmo ripresa a caldo

1) Trovo **L'ULTIMO** checkpoint, inizializzo l'insieme undo con le transazioni nel checkpoint
2) Si continua da li fino alla fine aggiungendo in UNDO le transazioni che hanno fatto begin (nuove transazioni) e in REDO tutte le transazioni che hanno fatto commit, in caso rimuovendole dall'undo
3) Si parte a ritroso disfacendo tutte le operazioni delle transazioni all'interno di UNDO, invertendone l'operazione
4) Si parte dall'inizio rifacendo tutte le operazioni delle transazioni all'interno di REDO



## Ripresa a freddo

1) Si ripristina i dati partendo dal backup più recente del dump 
2) Si eseguono tutte le operazioni registrare sul log della parte deteriorata portandoci allo stesso istante del guasto 
3) Si esegue una ripresa a caldo

# Database distribuiti

Un database distribuito consiste in un unico database logico suddiviso da un insieme di frammenti, dove ogni frammento è memorizzato in uno o più sever in rete, ognuno con il proprio DBMS. Ogni server è in grado di elaborare in modo indipendente le richieste degli utenti che richiedono accesso ai dati memorizzati localmente ed è in grado di elaborare dati presenti in altri siti della rete

Questa tecnica ha dei lati positivi che comporta la distribuzione su più server con harder meno costoso e performante, aumenta la scalabilità del sistema e aumenta l'affidabilità e disponibilità dei dati.
Ma ha anche lati negativi, complicando il sistema hardware e software.

Se tutti i server usano lo stesso DBMS allora si tratta di database omogenei, altrimenti si parla di database eterogenei. Allo stesso modo se un singolo server ha completa autonomia, si parla di sistema *multi database* 

## Frammentazione 

Esistono due tipologie di frammentazione:
- **Frammentazione orizzontale**: frammenta la tabella, cioè ogni frammento ha una parte della tabella
- **Frammentazione verticale** frammenta gli attributi, cioè ogni frammento ha una parte degli attributi di un database
Un operazione di frammentazione di una relazione $r$ in frammenti $r_{1}, ..., r_{m}$ è corretta solo se valgono:
- **Completezza**: Ogni tupla che compare in $r$ deve essere trovata in almeno un frammento $r_i$ 
- **Ricostruibilità**: è possibile definire una operazione che dai frammenti $r_i$ permetta di ricorstruire la relazionr $r$ in modo da mantenere le dipendenze funzionali di $r$ 
- **Disgiunzione**: se un dato appare in un frammento, non deve essere presente in nessun altro frammento, evitando la ridondanza 

In un frammento orizzontale, un operazione di selezione avviene effettuando la selezione in tutti i frammenti e unendone i risultati.
In un frammento verticale si ottiene la proiezione degli attributi effettuando la proiezione in ogni frammento per poi effettuarne il join.

Bisogna anche garantire le proprietà ACID della transazione globale, questo necessita di un coordinatore globale su ogni server che ha il compito di coordinare l'esecuzione sia delle transazioni globali sia di quelle locali, e le comunicazioni tra i diversi server devono avvenire attraverso comunicazione iter server 

## Verifica delle proprietà ACID nei frammenti
- **Consistenza e atomicità**: I vincoli sono locali quindi se un vincolo è rispettato localmente, lo è anche globalmente, stesso vale per l'atomicità (senza considerare la presenza di fallimenti di sistema). 
- **Isolamento**: Se ogni server usa *2PL ristretto* allora lo scheduling globale è serializzabile, se ogni server usa il metodo dei timestamp e i timestamp sono assegnati in maniera globale, allora lo scheduling è serializzabile. Quindi se uno schedule locale è serializzabile, lo è anche quello globale, visto come l'unione di tutti gli schedule locali
- **Persistenza**: Si deve porre attenzione alla persistenza, soprattutto in caso di fallimenti, infatti bisogna tener conto la possibilità di perdita di messaggi, caduta di connessione o di un server e eventuale partizionamento della rete di comunicazione.

## Two Phase Commit (2PC)

Per garantire l'atomicità di una transazione globale si deve assicurare che una singola sottotransazione vada in abort o commit. 

Si utilizza il *Rito del matrimonio* per garantire ciò, il server che inizia la transazione sarà il coordinatore, e tutti gli altri server locali coinvolti saranno i partecipanti, il coordinatore conosce tutti i partecipanti, e i partecipanti conoscono il coordinatore. 

Il coordinatore chiede ai partecipanti se sono tutti d'accordo a concludere la transazione positivamente (pronti a fare commit, fase di voting), se almeno uno dei partecipanti non vota in tempo, o vota per l'abort, l'intera transazione globale viene abortita, altrimenti si può continuare con il commit globale

## Replicazione dei database

Un modello di replicazione di database consente di copiare le informazioni di un database in più server distribuiti, richiedendo che qualsiasi modifica sul database principale sia replicato negli altri. Questo modello aumenta l'affidabilità del sistema, permettendo recovery a caldo più efficiente, e allo stesso modo aumenta le prestazioni del sistema riducendo il carico di ogni singolo sistema, distribuendolo sull'intera rete, permettendo un numero maggiore di utenti contemporanei. 

Il server principale viene chiamato *Master*, ha il compito di controllare che tutte le modifiche fatte su di esso siano propagati agli *slaves*
I server di replicazione, chiamati anche *Slaves*, hanno il compito di mantenersi in linea con le informazioni presenti sul master

Ci sono due tipologie di sincronizzazione tra master e slave:

- **Sincrona**: Una modifica nel master modifica immediatamente anche tutti gli slave, facendo uso di opportuni protocolli tipo il 2PC.
- **Asincrona**: Periodicamente vengono prelevate le modifiche effettuate al master e replicate negli slave


