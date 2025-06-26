# Architettura ANSI-SPARC
La commissione SPARC dell'ANSI propose un modello il cui scopo era quello di garantire un isolamento tra dati e programmi che operano su di esso, è un architettura a 3 livelli rappresentati da:
1) **Livello esterno**: La vista di un utente del database descrive ciò che è di interesse al singolo utente, esclude dati di cui non ha bisogno o di cui non ha accesso, possono esserci infinite viste 
2) **Livello concettuale**: Descrive i dati salvati nell'intero database e come si relazionano tra di loro, ma non definisce come vengono salvati fisicamente, definito dallo schema concettuale, che è singolo in un database
3) **Internal level**: come il database è salvato all'interno dell'hardware del computer, ne esiste solo uno.
In questo modo, i programmi che fanno uso del database non devono preoccuparsi di come verranno presi e salvati i dati, si limitano a effettuae le operazioni 

Un DBMS esegue dei "programmi" chiamati transazioni che terminano in due stati diversi
- **COMMIT**: Il database viene aggiornato con i nuovi dati modificati dalla transazione e l'integrità del database è già verificata come valida
- **ABORT**: Il database non viene aggiornato, per motivi di integrità o perchè la transazione viene annullata.
Si possono fare operazioni di INSERT, UPDATE, SELECT, DELETE per modificare le informazioni contenute nel database. 
# Proprietà ACID delle transazioni

- **ATOMICITA'**: Una transazione è eseguita completamente o non è eseguita a fatto
- **CONSISTENZA**: Una transazione passa da uno stato consistente del database, ad un altro stato consistente, il DBMS in particolare, assicura che tutti i vincoli del database siano validi
- **ISOLAMENTO**: Ogni transazione è eseguita in maniera indipendente l'una dall'altra, quindi i valori parziali di una transazione, non devono essere visibili ad altre transazioni
- **DURABILITY**: Ogni transazione che termina in una commit deve essere salvata in modo permanente sul database
# Componenti di un Database

- **Gestore degli accessi**: modulo di un DBMS che effettua il controllo degli accessi alla base di dati. Esso garantisce che solo utenti e applicazioni autorizzati abbiano accesso alle informazioni della base di dati e che le loro operazioni siano compatibili con i loro privilegi/ruoli.
- **Gestore delle query**: Gestisce l'ottimizzazione delle query tramite un linguaggio intermedio del dbms che usa per ridurre il costo dell'esecuzione di una query 
- **Gestore della memoria**: Gestisce il trasferimento e accesso dei dati da memoria di massa a memoria centrale e viceversa
- **Gestore dei file**: Gestisce i file su memoria di massa come i file di dati, i log, etc, del database
- **Gestore dell'integrità**: Verifica che le informazioni presenti nella base di dati seguano i vincoli di integrità definiti nel database
- **Gestore della concorrenza**: Ha il compito di gestire l'esecuzione all'accesso dei dati di transazioni concorrenti usando i lock per prevenire anomalie di accesso alle informazioni
- **Gestore dell'affidabilità**: Si occupa del salvataggio delle operazioni del database su file di log, ed effettua procedure di ripristino in caso di malfunzionamenti