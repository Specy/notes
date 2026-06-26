---
title: "Riepilogo completo del corso di reti"
description: "Raccolta integrale di tutti gli argomenti del corso in un unico documento di ripasso: Internet, protocolli applicativi, TCP/UDP, router, routing, link layer, wireless e sicurezza."
type: summary
---

## Cos’è Internet?

è una lista di *host* collegati tra loro, queste connessioni possono essere effettuate (in maniera fisica) grazie ad una rete di connessioni di rame/fibra ottica/satellitare o wireless. 
I vari host riescono a comunicare tra di loro inviandosi pacchetti, che vengono instradati nella direzione giusta tramite router e switch.

Un host può essere un singolo dispositivo come una rete interna ad un azienda. I vari host comunicano tramite pacchetti i cui contenuti vengono interpretati grazie all'utilizzo di protocolli standard.

## DSL

![[Pasted image 20241101185934.png]]
Riutilizzano le reti telefoniche per trasferimento di dati e chiamate vocali su una stessa rete

## Reti di accesso wireless

Due categorie:
- **WLAN**, sono connessioni wireless a basso raggio, di solito in un edificio/casa
- WWAN, sono connessioni wireless a largo raggio, di solito forniti dagli operatori telefonici. Esempio sono 3G, 4G, etc...

## Trasferimento dati

Un applicativo di un host vuole inviare un messaggio tramite l'internet, allora lo spezzetta in porzioni piccole chiamati pacchetti di lunghezza $L$ (bits), e li trasferisce su una rete che ha una capacità di trasmissione $R$ (bits/sec). E quindi per poter trasmettere un messaggio di L bits in una connessione che ha capacità R ci impiega $\frac{L}{R}$ secondi

## Tipologie di mezzi trasmissivi 

- **Cavo coassiale**: ha due conduttori concentrici di rame, permette comunicazione bidirezionale ed è a banda larga.
- **Fibra ottica**: fibra di vetro che trasmette impulsi luminosi, riesce ad avere una velocità di trasmissione molto elevata, ed è immune al rumore elettromagnetico 
- **WLAN**: classica connessione wifi
- **WWAN**: connessioni telefoniche 3g/4g etc...
- **Satellitare**: connessione wireless tramite satellite. 

## Nucleo della rete

Un host comunica con l'esterno tramite dei pacchetti. Questi pacchetti devono essere instradati alla corretta destinazione, questo è il compito dei router. 

I router usano la strategia del **Store and forward**, quello che fanno è *propagare* un pacchetto da un host ad un altro host/router. Ma prima di poter propagare il pacchetto, esso deve essere ricevuto nella sua interezza. 

![[Pasted image 20241101191530.png]]

Se il rapporto dei dati in arrivo eccede il trasmission rate della connessione fra due host, i pacchetti inviati vengono accodati in attesa di essere trasmessi, e se questa coda raggiunge la sua massima capacità, i pacchetti possono essere "scartati" e quindi verranno persi. 

I router hanno due compiti fondamentali:
- **routing**: determina il cammino sorgente-destinazione dei pacchetti, cercando di minimizzare la durata di trasmissione. 
- **Forwarding**: Muove i pacchetti in ingresso al router, alla prossima destinazione

In alternativa si può creare una connessione **diretta** fra due host, in maniera fisica, cosi che possano comunicare senza router nel mezzo. Questa tecnica veniva usata nelle reti telefoniche tradizionali.


## FDM vs TDM

![[Pasted image 20241101192113.png]]

- **Frequency division multiplexing**: può essere usato solo in connessioni analogiche, permette di far comunicare più utenti, assegnando ad ogni host una frequenza specifica
- **Time division multiplexing**: può essere usato sia in una connesione analogica che digitale, usa una singola frequenza ma trasmette i messaggi in piccoli segmenti, uno per utente.

## Suddivisione della rete

Il problema è permettere il collegamento di tutti gli ISP che gestiscono la propria rete, a tutti quanti gli altri ISP. 
Naturalmente un collegamento diretto fra tutti gli ISP non è fattibile, per questo motivo ci sono diversi "strati" di ISP, che rendono più facile la connessione fra un ISP agli altri, passando da un ISP più grande intermediario. 

![[Pasted image 20241101192843.png]]

Al centro troviamo un piccolo numero di grandi reti che sono collegati fra di loro (le grandi ISP, anche considerabili come un intera nazione), ai cui i più piccoli ISP si connettono per parlare con il resto dell'internet


## Ritardo dei pacchetti

Un pacchetto può essere perso o ritardare, le cause di ciò sono:

![[Pasted image 20241101193241.png]]

- $d_{proc}$ il tempo di elaborazione di un nodo, come per esempio controllare che il pacchetto sia valido, determinare il canale di uscita, etc
- $d_{queue}$ il tempo di accodamento, in attesa che il pacchetto venga spedito dal router, dipende dal livello di congestione del router
- $d_{trans}$ il ritardo di trasmissione, quanto tempo ci vuole per trasmettere il pacchetto di lunghezza $L$ su una bandwidth di capacità $R$
- $d_{prop}$ il tempo di propagazione fisico, quindi quanto tempo ci mette il segnale a percorrere il tragitto che collega un nodo ad un altro


Un pacchetto può essere perso all'interno dell'internet per colpa del riempimento dei buffer dei router, che se è ricevuto quando è pieno, non può essere salvato da alcuna parte, e quindi semplicemente scartato. Questo pacchetto può poi essere reinviato dall'host originale, o semplicemente ignorato.

## Modello ISO/OSI

L'intero concetto di trasmissione di dati viene astratto ad una struttura a strati, dove ogni strato ha un compito specifico ed indipendente. Il modello ISO/OSI ha 7 strati:

- **Applicazione**: Supporto alle applicazioni tramite protocolli come FTP, HTTP, SMTP, etc...
- **Presentazione**: premette alle applicazioni di interpretare il significato dei dati, es., crittografia, compressione, convenzioni machine-specific (**NON IN INTERNET**)
- **Sessione**: sincronizzazione, checkpointing, recupero di uno scambio di dati (**NON IN INTERNET**)
- **Trasporto**: Trasferimento di dati da processo a processo come TCP, UDP
- **Rete**: instradamento dei datagrammi dalla sorgente alla destinazione, IP e protocolli di routing
- **Link**: trasferimento dei dati tra elementi vicini
- **Fisico**: trasferimento fisico dei dati tramite un mezzo di trasmissione

![[Pasted image 20241101194507.png]]

## Sicurezza in internet

- DoS: Denial of Service, quando tanti host inviano moltissimi pacchetti ad un singolo host con lo scopo di sovraccaricarlo e non permettere agli host legittimi di comunicare con l'host attaccato dal DoS
- Packet Sniffing: Il malintenzionato ascolta i messaggi inviati in una rete
- Ip spoofing: Il malintenzionato finge di essere l'host legittimo, per poter ricevere i messaggi

## Architettura client-server

 Due host, uno chiamato server e l'altro client. Il server è un host sempre attivo ad un indirizzo IP fisso, di solito datacenter etc. Un client comunica con il server, ma esso può avere un indirizzo IP dinamico, e può non essere sempre connesso alla rete. Due client non comunicano tra di loro, solo client to server.

## Architettura P2P

Non esiste un server sempre attivo, i vari client comunicano direttamente fra di loro. I client vengono chiamati *peer*, e questi peer possono richiedere e offrire servizi agli altri peer.

## Comunicazione tra processi

Un programma in esecuzione su un host può comunicare con altri programmi tramite comunicazione inter processo, che il sistema operativo mette a disposizione. Anche qui si applica in concetto di processi client-server e p2p

## Socket

Un processo invia e riceve messaggi tramite una porta (socket), e due socket possono comunicare tra di loro inviando messaggi facendo affidamento al trasporto "fuori porta" che ha il compito di spostare il messaggio alla corretta destinazione.
Di solito un socket ha un identificativo numerico che viene utilizzato per specificare a quale porta inviare il messaggio.

## Servizi richiesti dalle applicazioni

Le applicazioni possono aver bisogno di differenti combinazioni di servizi:
- **integrità dati**: trasferimento dei dati può essere affidabile al 100% o permettere delle perdite
- **temporizzazione**: trasferimento di dati deve avere un ritardo minore possibile per poter essere efficaci
- **throughput**: il trasferimento dei dati deve avere un minimo di throughput per poter essere efficaci
- **sicurezza**: crittografia, integrità di dati etc...

## Servizi di protocolli di trasporto 

Ci sono 2 principali protocolli usati per il trasporto dati nell'internet:

- **TCP**
  - _trasporto affidabile_, tutti i dati devono essere inviati correttamente
  - _controllo di flusso_, il mittente non sovraccarica il destinatario
  - _controllo di congestione_, rallenta il processo di invio dati se la rete è sovraccaricata 
  - _orientato alla connessione_, richiede dei setup tra i processi client e server
  - non fornisce temporizzazione, sicurezza e throughput minimo.
- **UDP**: 
  - _trasporto non affidabile_, i dati possono essere persi
  - _non fornisce_ affidabilità, controllo di flusso, controllo di congestione, temporizzazione, throughput minimo e sicurezza.
  - _orientato al datagram_, non richiede setup tra i processi client e server

## Rendere sicuro il TCP

Il TCP e UDP non hanno alcun tipo di sicurezza, viene aggiunto il protocollo TLS a livello di applicazione per implementare la crittografia delle connessioni, integrità dei dati e autenticazione.

## Web e HTTP

Il protocollo HTTP usa il modello client/server per trasferire le risorse web.
Utilizza TCP come protocollo di trasporto, con il server che ascolta sulla porta 80.
Una connessione HTTP può essere persistente o non persistente, nel caso del persistente, una singola connessione viene usata per richiedere più risorse.


## Tempo di risposta in HTTP

Il tempo di risposta di una richiesta HTTP è chiamato RTT (round trip time), ed è il tempo che impiega un singolo pacchetto per andare dal client al server, e ritornare al client.
Il tempo di risposta richiede 1 RTT per stabilire la connessione TCP, e 1 RTT per inviare la richiesta e ricevere la risposta. Quindi il tempo di risposta è 2RTT + tempo di trasferimento dati.

In una connessione persistente, il tempo di risposta per la prima richiesta è 2RTT + tempo di trasferimento dati, mentre per le successive richieste, viene pagato solo 1RTT + tempo di trasferimento dati.

## HTTP 1.0

è un protocollo puramente testuale di questo formato:

![[Pasted image 20241102123621.png]]

Una richiesta HTTP ha diversi metodi per specificare l'azione che il server deve fare:
- GET: richiede una risorsa, utilizza l'URL per specificare la risorsa
- POST: invia dei dati al server all'interno del corpo della richiesta
- HEAD: simile a GET, ma il server risponde solo con l'header della risorsa
- (http 1.1) PUT: carica una risorsa sul server
- (http 1.1) DELETE: elimina una risorsa dal server

Una risposta HTTP ha un codice di stato che indica il risultato della richiesta:
- 200: OK, la richiesta è andata a buon fine
- 400: Bad Request, la richiesta non è stata compresa dal server
- 404: Not Found, la risorsa richiesta non è stata trovata
- 500: Internal Server Error, il server ha riscontrato un errore interno

## Mantenere stato fra utente e server

HTTP è un protocollo stateless, il server non mantiene alcuno stato tra le richieste. Per mantenere lo stato, si possono usare i cookie, che sono dei piccoli file di testo che vengono inviati dal client al server in ogni richiesta. Questo può contenere un arbitrario valore testuale, ma di solito contiene una lista di coppie chiave-valore.

Il server può decidere di ritornare al client un comando di settare un cookie ad un valore specifico, o di modificarlo/cancellarlo. 
Questo server può per esempio usare il cookie per identificare l'utente, e mantenere lo stato della sessione.

## Cache e server proxy

Un server proxy è un server che si interpone tra il client e il server, viene usato per instradare le richieste del client ad un server nella sua rete. Questo può aiutare a distribuire il carico di richieste, e se una risorsa può essere "salvata", il server proxy può salvarla in cache e ritornarla direttamente al client senza doverla richiedere al server.
Questo riduce il tempo di risposta e il carico di lavoro del server. Molto utile anche in caso in cui il collegamento tra il server e l'esterno è limitato, il server proxy può salvare le risorse più richieste e ridurre il traffico in uscita.

Una chiamata a un server proxy si dice abbia un _cache hit_ se la risorsa richiesta è presente nella cache del server proxy, altrimenti si dice _cache miss_. 
## HTTP 2.0

Tramite HTTP 1.1 si possono effettuare più richieste in una singola connessione TCP, ma il server deve rispondere in ordine alle richieste, questo ha il problema del _head of line blocking_, ovvero se una richiesta è lenta, tutte le richieste successive devono aspettare che essa finisca.

Mentre in HTTP 2.0 un singolo oggetto viene suddiviso in frame più piccoli. Anche se i frame vengono inviati uno dopo l'altro, il server può decidere di inviare un frame di un'altra richiesta prima di finire di inviare il frame di una richiesta precedente.

![[Pasted image 20241102124849.png]]

## Protocolli livello applicazione

I protocolli di livello applicazione sono protocolli che vengono usati per specificare come i dati vengono scambiati tra i processi client e server. Questi protocolli sono usati per specificare come i dati vengono incapsulati, come vengono formattati, e come vengono interpretati.

### SMTP

Usato per inviare mail. Un client da affidamento alla propria casella mail ad un mail server, che ha il compito di ricevere e salvare le mail in arrivo. Un client può inviare una mail ad un altro client delegando il proprio mail server a inviare la mail al mail server del destinatario.

Il protocollo usa TCP sulla porta 25, ed un trasferimento è formato da 3 parti, una parte di inizializzazione chiamato handshaking, il trasferimento dei dati, e la chiusura della connessione.

![[Pasted image 20241102125306.png]]


### POP, IMAP, HTTP

Mentre il protocollo SMTP viene usato per inviare una mail, i protocilli POP, IMAP e HTTP vengono usati da un client per richiedere mail ad un mail server.

- **POP**: Post Office Protocol, suddiviso in 2 fasi, la prima l'utente si autentica al server tramite username e password, la seconda l'utente può richiedere una lista di id delle mail presenti sul server, e può scaricare e cancellare le mail dal server.
- **IMAP**: Internet Mail Access Protocol, tiene sincronizzati i messaggi sul client e server.

## DNS

é un database distrubuito che ha il compito di mappare un nome di dominio ad un indirizzo IP. Un client può richiedere un indirizzo IP ad un server DNS, che può rispondere con l'indirizzo IP del dominio richiesto. Questo indirizzo IP può poi essere usato per stabilire una connessione dal client al server.

Un singolo server (indirizzo IP) può essere raggiungibile tramite diversi nomi di dominio.

Il DNS è strutturato in un albero gerarchico, alla radice c'è il ROOT DNS che contiene i server DNS dei TLD (Top Level Domain), che a loro volta contengono i server DNS dei SLD (Second Level Domain), e così via.

Un client richiede al root server per trovare il server DNS TLD del dominio richiesto, e poi chiede al server TLD ... ed infine trovare l'indirizzo IP del dominio richiesto.

- **ROOT DNS**: Esistono 13 root server DNS, di solito suddivisi per regione geografica.
- **TLD DNS**: Contiene i server DNS dei SLD, come .com, .org, .it etc...
- **DNS autoritivi**: Contiene i record DNS di un dominio specifico, come www.google.com

Esistono anche DNS locali che vengono usati per memorizzare i record DNS per un certo periodo di tempo (TTL), in questo modo si evita di dover richiedere sempre al server DNS autoritativo e scendere per tutta la gerarchia.

![[Pasted image 20241102130437.png]]

![[Pasted image 20241102130504.png]]


## Record DNS

Un DNS memorizza i record DNS, di tipologia diverse, che hanno compiti diversi:
- **A**: mappa un nome di dominio ad un indirizzo IP
- **CNAME**: mappa un nome di dominio ad un altro nome di dominio, utile per fare alias, per esempio goo.gle -> google.com
- **MX**: mappa un nome di dominio ad un server mail
- **NS**: mappa un nome di dominio ad un server DNS che contiene i record DNS del dominio

## Attacchi ai DNS

- DDOS: un attaccante può sovraccaricare un server DNS con richieste in modo da renderlo inutilizzabile, non molto efficace dato che i server DNS salvano gli indirizzi IP per un certo periodo di tempo.
- Cache poisoning: un attaccante può inviare un record DNS falso ad un server DNS locale, in modo da farlo memorizzare e farlo usare per risolvere un nome di dominio ad un indirizzo IP 

## Architettura P2P pura

Un sistema P2P puro non ha un server centrale, i peer comunicano direttamente tra di loro e la rete si auto organizza per trovare i peer che hanno la risorsa richiesta. 
Un utilizzo comune è il file sharing. In un architettura classica client-server, per trasferire un singolo file a N peer, il server deve inviare N copie del file.
In un architettura P2P, un peer deve caricare il file _almeno_ una volta per essere accessibile alla rete, ma una volta ricevuto da un altro peer, esso stesso può contribuire a distribuire il file, riducendo il carico di lavoro del peer iniziale.

Un esempio classico di ciò è il trasferimento file tramite torrent, dove la rete è suddivisa in _swarm_, ovvero gruppi di peer che condividono un file, e un _tracker_ che tiene traccia dei peer che hanno il file. Un peer può richiedere al tracker la lista dei peer che hanno il file, e può iniziare a scaricare il file da questi peer.

nel TIT for TAT, Il peer ha una capacità di trasmissione più alta può decidere di comunicare con un altro peer ad altra trasmissione per ottenere il file più velocemente, in cambio dello stesso

## CDN 

Sono *Content delivery networks* come youtube, netflix, etc... Trasferiscono grandi volumi di dati nell'internet, come per esempio contenuti multimediali.

La condivisione di video può essere del tipo:
- **CBR**: Constant bitrate, un video è trasferito ad un rate di encoding fisso
- **VBR**: Variable bitrate, un video è trasferito ad un rate variabile, in base all coding temporale e spaziale.

In una comunicazione tra client e CDN, la bandwidth tra i due può variare, se la comunicazione fosse costante ad un singolo chunk video alla volta, un riduzione improvvisa della bandwidth causerebbe un blocco del video. Per questo motivo si mette un "buffer" di chunk precaricati.

Lo scopo dei CDN è distribuire copie delle risorse in varie località nel mondo in maniera tale da poterle inviare in maniera più efficiente ai client che la richiedono. 

## Multiplexing e demultiplexing

Il Multiplexing in invio aggiunge metadati i pacchetti inviati, mentre il demultiplexing in ricezione utilizza questi metadati per indirizzare il pacchetto al socket appropriato:

![[Pasted image 20241102163653.png]]

Un segmento inviato tramite TCP/UDP contiene il numero porta sorgente e destinazione, l'IP di sorgente e destinazione, dei metadati e i dati veri e propri. l'host utilizzerà l'indirizzo IP e il numero di porta per decidere dove mandare il segmento.

## Trasporto in UDP

Il protocollo UDP permette ai segmenti di essere perduti/consegnati in una qualsiasi sequenza, anche non ordinata. Non ha bisogno di handshaking tra mittente e destinatario.
è usato nello streaming multimediale o realtime, e se necessario, è possibile aggiungere affidabilità e recupero degli errori nell'applicazione che utilizza UDP, dato che non è gestito dal protocollo stesso.

Ha il vantaggio di essere più veloce nell'invio dei dati, dato che non ha bisogno di instanziare una connessione, ha un intestazione del segmento più piccola, ed è in generale più semplice.

Una gestione dell'errore che viene implementata è però il checksum, UDP non garantisce che un pacchetto arrivi a destinazione, ma tramite il checksum, che è una sequenza di 16bit, permette al ricevente di confermare che i dati presenti nel segmento siano corretti.
Il calcolo del checksum viene effettuato tramite somma a complemento a 1 dei contenuti del segmento

## Trasferimento dati affidabile:

![[Pasted image 20241102221718.png]]

In un ipotesi di implementazione del nostro algoritmo RDT (reliable data transfer) che ha un canale di comunicazione affidabile, il mittente invia i dati al canale di comunicazione e il ricevente legge i messaggi dal canale.

Se il canale sottostante può confondere dei bit (e quindi avere errori), abbiamo bisogno del checksum per sapere se il valore è corretto o meno. 
Utilizziamo gli ACK per confermare che un pacchetto è stato ricevuto senza errori, mentre un NAK per dire che abbiamo ricevuto un pacchetto con errori, permettendo al mittente di rinviare i pacchetti con errori.

![[Pasted image 20241102222115.png]]

Ma gli ACK e NAK sono essi stessi pacchetti, cosa fare se essi sono danneggiati? Può ritrasmettere un pacchetto inviato aggiungendo un numero di sequenza, cosi da poter scartare eventuali pacchetti duplicati. 

![[Pasted image 20241102222329.png]]

- **Il mittente** aggiunge un numero di sequenza al pacchetto, valore di 0 e 1 bastano dato che i pacchetti sono inviati con metodo di stop and wait, quindi semplicemente pacchetti con la stessa sequenza rispetto l'ultimo pacchetto sono scartati. 
- **Il ricevente**: controlla se il pacchetto ricevuto è duplicato tramite il numero di sequenza, ed in caso lo scarta. 

Un protocollo non ha bisogno dei NAK, si possono usare semplicemente gli ACK per specificare quali pacchetti sono stati ricevuti correttamente. Il destinatario invia un ACK con il numero di sequenza dell'ultimo pacchetto con l'ACK, che se è duplicato, determina che bisogna rinviare il pacchetto corrente.

Il canale può perdere il pacchetto di ACK dato che viene accordato che gli ACK devono essere ricevuti entro un tempo "ragionevole", il cui se superato può indicare il mancato ricevimento di un ACK, e quindi pensando al pacchetto come perso, verrà inviato un altra volta duplicato.

![[Pasted image 20241102222916.png]]
![[Pasted image 20241102222953.png]]

La tecnica stop and wait ha una latenza molto alta dato che si deve aspettare 2 RTT per ogni pacchetto inviato. Per questo si usano protocolli con pipeline, dove il mittente ammette che ci siano più di un pacchetto in transito. Si usano due forme di protocolli con pipeline, **go Back N** e **ripetizione selettiva**

- Go back N: il mittente può avere fino a N pacchetti consecutivi non riscontrati nella pipeline, il ricevente invia solo ACK cumulativi, e quindi non riscontra un pacchetto se c'è un buco (esempio se 5 6 8 sono arrivati, il pacchetto 8 non è riscontrato finchè 7 non arriva). Il mittente fa partire un timer, e se entro quel tempo non sono stati riscontrati tutti i pacchetti, essi vengono rinviati 
- **Ripetizione selettiva**: Il mittente può avere fino ad N pacchetti consecutivi non riscontrati in pipeline ed il ricevente invia un ACK per ogni pacchetto. Il mittente ha un timer per ogni pacchetto non riscontrato, se esso scade, il pacchetto viene rinviato 


# TCP

è un protocollo di comunicazione con garanzia dei dati. 
Ha controllo di congestione e flusso, i dati possono essere inviati sia dal ricevente che dal mittente in maniera full duplex, è orientato alla connessione (tramite handshaking), e il mittente non sovraccarica il destinatario.

![[Pasted image 20241102223857.png]]

Il valore del timeout per i pacchetti deve essere di sicuro più alto del RTT, che viene stimato tramite il tempo speso in media speso dai pacchetti per essere inviati e ricevere ACK. Con un valore troppo piccolo di timeout si andrebbe a ritrasmettere pacchetti inutilmente, mentre un valore troppo alto rallenterebbe la velocità di trasmissione

Il numero di sequenza è il numero del primo byte del segmento del flusso di byte, una volta che un ACK è ricevuto.

![[Pasted image 20241102224937.png]]
![[Pasted image 20241102225005.png]]

### Controllo di flusso in TCP

Il destinatario modera il mittente rispetto a quanti pacchetti riesce ad elaborare, in maniera tale da non sovraccaricare il buffer, e permettere a meno pacchetti di essere persi. 
Il destinatario invia al mittente quanto spazio libero del buffer ha, cosi che il mittente limiti la quantità di pacchetti unacked, garantendo che il buffer non vada in overflow.

### Gestione della connessione

Prima di scambiarsi dati, il sender e il receiver effettuano un handshake per accordarsi che entrambi vogliano stabilire la connessione, e condividono vari parametri della connessione, come per esempio la grandezza del buffer del destinatario, etc...
L'handshake è effettuato in 3 roundtrips:

![[Pasted image 20241102225449.png]]

Mentre per terminare una connessione, inviano un pacchetto TCP con flag FIN ad 1, ed una volta ricevuto un ACK, la connessione può essere considerata terminata

![[Pasted image 20241102225634.png]]

### Controllo di congestione in TCP

Per gestire la congestione, si deve trovare un throughput tale da non scartare alcun pacchetto per colpa di buffer pieni. Si usa una tecnica chiamata **AIMD**, **Additive Increase** incrementa il rate di invio di 1 messaggio per RTT finchè non ci sono perdite. Una volta che si trovano perdite, si riduce di metà il rate di invio. 

Questo ha il lato negativo di avere una partenza di connessione lenta, dato che si deve partire da 1 messaggio inviato, per poi crescere fino a trovare il throughput massimo. Per mitigare ciò, anzichè inviare solo un pacchetto per round trip, nella fase iniziale viene raddoppiato il numero di pacchetti inviati per ogni Round trip, cosi da poter trovare più velocemente il valore massimo di throughput della connessione.

In alternativa alla crescita lineare, possiamo usare il metodo Cubic dove ogni volta che si dimezza, si incrementa esponenzialmente all'inizio, per poi crescere più lentamente man mano che ci si avvicina al precedente valore massimo

![[Pasted image 20241102230504.png]]

 ### Explicit Congestion Notification (ECN)
 TCP spesso implementano un controllo di congestione assistito alla rete, dove 2 bit dell'header IP sono marcati dal router per indicare il livello di congestione. La destinazione, se congestionata, setta i bit ECE nel segmento ACK per notificare della congestione.
 ![[Pasted image 20241102230809.png]]

### QUIC

è un protocollo che usa UDP insieme al controllo degli errori a livello di applicazione per poter inviare pacchetti senza perdite. 
Inoltre ha bisogno di soli 2 RTT per stabilire una connessione sicura, in confronto ai 4 RTT necessari per il TCP. 

## Compito dei router

I router hanno 2 compiti fondamentali:

- **Forwarding**: inoltrare i pacchetti in base all'indirizzo di destinazione
- **Routing**: determinare il percorso migliore per inoltrare i pacchetti

Il forwarding (piano dei dati) è effettuato localmente per router e determina su quale porta deve essere inoltrato il pacchetto.

Il routing (piano di controllo) è effettuato da un algoritmo di routing che determina il percorso migliore per inoltrare il pacchetto.

![[Pasted image 20241103133330.png]]

| architettura | modello     | garanzia bandwidth | perdite | ordine | timing | congestione               |
| ------------ | ----------- | ------------------ | ------- | ------ | ------ | ------------------------- |
| Internet     | best effort | nessuna            | no      | no     | no     | no (dedotta alle perdite) |
| ATM          | CBR         | rate costante      | si      | si     | si     | nessuna congestione       |
| ATM          | VBR         | rate garantito     | si      | si     | si     | nessuna congestione       |
| ATM          | ABR         | minima garantita   | no      | si     | no     | si                        |
| ATM          | UBR         | nessuna garanzia   | no      | si     | no     | no                        |

# Architettura di un router

Formata da:

- **Porte di ingresso**: connessione con la rete locale
- **Switching fabric**: connessione tra le porte di ingresso e quelle di uscita
- **Porte di uscita**: connessione con la rete esterna

![[Pasted image 20241103133732.png]]

## Porte di ingresso

La porta di ingresso decide la porta d'uscita dei pacchetti, usano le informazioni della tabella d'inoltro presente nella porta di ingresso. Gestisce anche l'accodamento di pacchetti in caso che il rate di arrivo sia superiore a quello di inoltro. La porta di uscita è decisa o solo sull'indirizzo IP (destination based forwarding) oppure basato su altri valori dell'intestazione (generalized forwarding)

## Destination based forwarding

| Da indirizzo | A indirizzo   | Interfaccia del link |
| ------------ | ------------- | -------------------- |
| 200.23.16.0  | 200.23.23.255 | 0                    |
| 200.23.24.0  | 200.23.24.255 | 1                    |
| ...          | ...           | ...                  |

## Longest prefix matching

Quando si consulta la forwarding table per una destinazione, si usa il più lungo prefisso dell'indirizzo che coincide con l'indirizzo di destinazione, se non c'è nessun prefisso che coincide si usa il default gateway.

## Switching fabric

Trasferisce i pacchetti dal buffer di input a quello di output appropriato, può essere implementato in 3 modi:

- **Switching memory**: i pacchetti vengono memorizzati nella memoria e poi inoltrati
- **Switching bus**: i pacchetti vengono trasferiti attraverso il bus
- **Switching via interconnessione**: i pacchetti vengono trasferiti attraverso una rete di interconnessione
  ![[Pasted image 20241103134711.png]]

Lo switching memory è stato la prima generazione di router, utilizza normali computer per inoltrare i pacchetti, ma è limitato dalla velocità della memoria.

Lo switching tramite bus ha una connessione tra la porta di ingresso e quella di uscita usando un singolo bus, che dovrà essere condiviso tra tutte le porte di ingresso e uscita. è limitato dalla velocità dello switching del bus.

Lo switching tramite interconnessione collega le porte di ingresso e uscita tramite una rete di interconnessione, permettendo di avere più pacchetti inoltrati contemporaneamente, evitando il problema del bus condiviso.

## Accodamento di ingresso

I pacchetti sono messi in coda nella porta di ingresso, e quindi i pacchetti sono persi se il buffer di ingresso è pieno.
C'è anche HOL dove pacchetti accodati in testa impediscono ad altri pacchetti di essere inoltrati.

![[Pasted image 20241103135508.png]]

## Accodamento in uscita

I pacchetti sono messi in coda nella porta di uscita.
Viene scelto un criterio di scheduling per dare priorità a chi ha migliori performance.

![[Pasted image 20241103135604.png]]

## Meccanismi di scheduling

Lo scopo dello scheduling è scegliere il successivo pacchetto da inviare, i criteri di scheduling sono:

- **FIFO**: First In First Out, i pacchetti vengono inoltrati nell'ordine in cui sono arrivati
- **Priority**: i pacchetti vengono inoltrati in base alla priorità, dove viene inviato il pacchetto che ha la priorità più alta. Viene assegnata una classe, ogni classe ha una priorità.
- **Round Robin**: i pacchetti vengono inoltrati in ordine ciclico, dove viene inviato un pacchetto per ogni classe.
- **Weighted Fair Queuing**: Come il round robin, ma viene aggiunto un peso per ogni classe, il peso è il numero di pacchetti in coda, dove le classi con peso maggiore vengono servite prima.

## Livello di rete

![[Pasted image 20241103140238.png]]

I link in una rete hanno una unità massima di trasmissione (MTU), che è la dimensione massima di un pacchetto che può essere trasmesso su quel link. Se un pacchetto è più grande della MTU, viene frammentato in pacchetti più piccoli, per poi essere ricomposto alla destinazione utilizzando l'offset di frammentazione.

# Indirizzamento IP

Un indirizzo IP è un numero a 32 bit che identifica un host/router in una rete.

## Sottorete (subnet)

Un indirizzo IP è diviso in 2 parti:

- **Parte di sottorete**: identifica la sottorete, sono i bit più significativi
- **Parte di host**: identifica l'host, sono i bit meno significativi
  Una sottorete è un insieme di host che condividono la stessa sottorete nell'indirizzo IP.
  Si usa una _subnet mask_ per identificare la parte di sottorete e di host, ponendo a 1 i bit della parte di sottorete e a 0 quelli della parte di host.

## CIDR (Classless Inter-Domain Routing)

CIDR ha la porzione di indirizzo di una sottorete di lunghezza arbitraria, che è specificata con una notazione slash (/) seguita dalla lunghezza della parte di sottorete.
Per esempio `a.b.c.d/n` indica che i primi n bit sono la parte di sottorete, mentre il resto è la parte di host. `200.23.16.0/23`.

## DHCP (Dynamic Host Configuration Protocol)

In mancanza di DHCP, un host deve essere configurato manualmente ad un indirizzo IP statico.
Il protocollo DHCP permette di ottenere un indirizzo IP dinamicamente da un server quando si collega ad una rete.

Il server DHCP assegna un indirizzo IP a un host per un periodo di tempo limitato, chiamato _lease_, può decidere di rinnovare l'assegnazione dando lo stesso indirizzo precedente. Questo permette di mantenere in utilizzo solo gli indirizzi IP necessari, cioè quelli degli host attivi connessi alla rete.

Avviene in 4 fasi:

1. **Discover**: l'host invia un messaggio di broadcast per trovare un server DHCP
2. **Offer**: il server DHCP invia un messaggio di offerta all'host
3. **Request**: l'host invia un messaggio di richiesta per un IP al server DHCP
4. **Acknowledge**: il server DHCP invia un messaggio di conferma all'host

![[Pasted image 20241103141707.png]]

Il DHCP può anche restituire informazioni aggiuntive come il gateway predefinito, il server DNS, la network mask, etc.

## Assegnazione IP da parte di un ISP

Un ISP può assegnare un blocco di indirizzi IP a un'organizzazione, che può poi assegnare gli indirizzi IP ai suoi host.
Questo permette all'ISP di inoltrare tutti gli indirizzi IP che si trovano nel range di indirizzi assegnati all'organizzazione.

L'ISP stesso deve ottenere un blocco di indirizzi IP che poi userà, questo blocco di indirizzi IP è assegnato da un'autorità di assegnazione di indirizzi IP, come ICANN, che è il DNS root.

## NAT (Network Address Translation)

Una NAT permette di usare un singolo indirizzo IP pubblico per tutti gli host di una rete privata. Più host a questo punto condividono lo stesso indirizzo IP pubblico, ma hanno un indirizzo IP privato univoco alla propria rete.

Questo semplifica la gestione degli indirizzi IP, in quanto non è necessario avere un indirizzo IP pubblico per ogni host, ma solo per il router NAT. Ed è anche più flessibile dato che la NAT può essere gestita internamente senza dover coinvolgere l'ISP.

- **Nei diagrammi uscenti**: Usa l'indirizzo IP sorgente e il numero di porta sorgente per mappare l'indirizzo IP privato e il numero di porta privato.
- **Ricordare**: Ogni coppia IP sorgente e numero di porta viene mappata in una coppia IP privato e numero di porta privato.
- **Nei diagrammi entranti**: Viene applicato il mapping inverso, mappando l'indirizzo IP pubblico e il numero di porta pubblico all'indirizzo IP privato e al numero di porta privato.

Il numero di porta ha un valore di 16 bit, quindi si possono avere fino a 65536 connessioni contemporanee. Permettendo di collegare 65536 host alla rete pubblica con un singolo indirizzo IP pubblico.

## IPv6

L'indirizzamento IPv4 ha problemi di esaurimento degli indirizzi IP, dato che usa solo 32 bit. L'IPv6 risolve questo problema usando 128 bit.

![[Pasted image 20241103142742.png]]

Altri cambiamenti rispetto all'IPv4 sono:

- **Header semplificato**: l'header è più semplice e più veloce da processare, viene rimosso il checksum.
- **Estensione delle opzioni**: le opzioni sono spostate in estensioni, che sono opzionali e possono essere aggiunte all'header.

Il problema dell'IPv6 è che non è retrocompatibile con l'IPv4, quindi è necessario un meccanismo di transizione per passare da IPv4 a IPv6.
Per permettere di supportare entrambi i protocolli, si usa il tunneling, dove un pacchetto IPv6 è incapsulato in un pacchetto IPv4.

## Generalized forwarding e SDN

Con **SDN** si rimuove il compito di calcolare la strada che i pacchetti devono fare dai router, ai controller SDN.
Ogni router ha una *flow table*, che contiene le regole per inoltrare i pacchetti, che viene aggiornata dal controller SDN.
A questo punto il compito del router è solo di inoltrare i pacchetti seguendo le regole della flow table.

Il **Generalized forwarding** permette di definire le regole della flow table:
- **Match**: definisce i campi dell'intestazione del pacchetto che devono essere confrontati
- **Action**: definisce l'azione da eseguire se il pacchetto corrisponde alla regola
- **Priority**: definisce la priorità della regola in caso di conflitti 
- **Counters**: contatori per monitorare il traffico

Per esempio:
1. src = `1.2.*.*`, dest = `3.4.5.*` -> DROP
2. src = `*.*.*.*`, dest = `3.4.*.*` -> FORWARD(2)
3. src = `10.1.2.3`, dest = `*.*.*.*` -> invia al controller

## Open Flow

Definisce la struttura di una entry della flow table. 
è formato da 3 parti:
- **Match fields**: campi dell'intestazione del pacchetto da confrontare
- **Actions**: azioni da eseguire se il pacchetto corrisponde alla regola
- **Counters**: contatori per monitorare il traffico

![[Pasted image 20241103150942.png]]

Esempi:
![[Pasted image 20241103150930.png]]

# Protocolli di routing

Il compito dei protocolli di routing è di determinare il cammino migliore dall'host mittente al ricevente, passando per la rete dei router.

Gli algritmi di routing possono essere di due categorie:

- **Algoritmi link state**: tutti i router hanno la topologia completa e i costi di ogni link fra i router.
- **Algoritmi distance vector**: i router si scambiano informazioni per determinare la topologia della rete e i costi dei link.

## Algoritmi link state

Algoritmi che calcolano il cammino minimo su un grafico pressochè statico e noto, come per esempio l'algoritmo di Dijkstra.

## Algoritmo distance vector

Algoritmi che calcolano il cammino minimo su un grafico dinamico e non noto, come per esempio l'algoritmo di Bellman-Ford.

$d_x(y) = \text{stima del costo minimo da x a y}$
e x mantiene il vettore distanza $[d_x(y): y \in N]$

Un generico nodo x conosce il costo verso ogni vicino, e il vettore distanza di ogni vicino.

Ogni nodo invia una copia del proprio vettore distanza a ciascuno dei suoi vicini.
Quando un nodo x riceve un nuovo vettore di distanza DV, lo salva e usa l'algoritmo di Bellman-Ford per calcolare il nuovo vettore distanza. $d_x(y) = \min_v \{c(x,v) + d_v(y)\}$

Questo algoritmo è iterativo e asincrono, dove ogni iterazione locale è causata da un cambiamento di un vicino o del costo di un proprio link.
è distribuito perchè ogni nodo aggiorna i propri vicini solo se il proprio vettore distanza cambia, che a loro volta aggiornano i propri vicini se necessario.

- Nodo rileva un cambiamento
- Nodo ricalcola il proprio vettore distanza
- Nodo informa i vicini del cambiamento se il proprio vettore distanza è cambiato

### Poisoned reverse

Quando un costo di un link viene modificato, se questo causa un aumento del costo, la propagazione del nuovo costo (e quindi la stabilizzazione della rete) impiega molte iterazioni.

Per evitare questo problema, si può usare la tecnica del poisoned reverse, che consiste nel comunicare ai vicini il costo infinito per raggiungere il nodo che ha modificato il costo. In questo modo, i vicini non utilizzeranno più quel nodo come passaggio per raggiungere la destinazione.

## Autonomous System (AS)

Un AS è un insieme di reti e router sotto un unico controllo amministrativo. Gli AS sono collegati tra loro tramite router di confine.

- **Intra-AS routing**: routing tra l'host e il router nello stesso AS (rete), tutti i router nello stesso AS eseguono lo stesso protocollo di routing, mentre i router appartenenti ad AS diversi possono eseguire protocolli di routing diversi. La forward table intra-AS si occupano di instradare i pacchetti all'interno dello stesso AS.
- **Inter-AS routing**: routing tra AS. la forward table inter-AS e intra-AS si occupano di instradare i pacchetti tra AS diversi.

## Interior Gateway Protocol (IGP)

Sono protocolli di routing intra-AS, come per esempio RIP, OSPF, IGRP.

### OSPF (Open Shortest Path First)

Usa un algoritmo link state, ogni nodo conosce la topologia della rete, calcolando il cammino minimo con l'algoritmo di Dijkstra.

- **Scoperta vicini**: quando un router viene collegato alla rete, cerca di scoprire i router OSPF adiacenti con cui stabilire un adiacenza. Viene fatto tramite i messaggi Hello. Quando i vicini rispondono con un messaggio Hello, il router sa che il vicino è attivo e può scambiare messaggi con lui.
- **Scambio di informazioni**: una volta connessi, i router scambiano informazioni LSA (Link State Advertisement) per comunicare la topologia della rete.
- **Costruzione della LSDB**: Ogni router usa le informazioni LSA ricevute per costruire la LSDB (Link State Database), che contiene la topologia della rete.
- **Calcolo del cammino minimo**: Ogni router usa l'algoritmo di Dijkstra sul proprio LSDB per calcolare il cammino minimo verso ogni destinazione, generando un SPT (Shortest Path Tree), con il router stesso come radice.
- **Aggiornamentti solo se necessario**: Gli aggiornamenti vengono inviati solo se la topologia della rete cambia, e non periodicamente.

OSPF si può anche applicare a reti di grandi dimensioni tramite gerarchie a due livelli:

- **Area locale (backbone)** (area 0): contiene tutti i router OSPF, e tutti i router devono essere connessi a questa area.
- **Altre aree**: sono figlie dell'area 0, e i router in queste aree possono conoscere solo la topologia della propria area e dell'area 0, riducendo il carico di lavoro.

Ci sono 3 tipi di router OSPF:

- **Router di border area**: riassumono le distanze verso le reti della propria area e le inviano agli altri router di border area.
- **Router di backbone**: collegano l'area 0 con le altre aree.
- **Router di boundary**: scambiano informazioni con i router di altri AS.

## BGP (Border Gateway Protocol)

è il protocollo di routing usato nell'internet.
è un protocollo di routing inter-AS che usa un algoritmo distance vector, dove i router scambiano informazioni di raggiungibilità delle sottoreti.

Due router BGP stabiliscono connessioni tra loro per scambiarsi informazioni di routing. Queste connessioni sono chiamate **sessioni BGP**, e i due router sono chiamati **peer** o **neighbor**.
Le sessioni BGP sono di due tipi:
- **Between ASes (eBGP)**: per ottenere informazioni sulla raggiungibilità delle sottoreti da parte di AS confinanti.
- **Within ASes (iBGP)**: per ottenere informazioni sulla raggiungibilità delle sottoreti da parte di router interni all'AS.

BGP consente ai router di annunciare i prefissi IP che possono instradare, una rotta è formata da prefisso + attributo, due attributi principali sono:
- **AS-PATH**: lista degli AS dove il prefisso è passato. usato per evitare loop.
- **NEXT-HOP**: indirizzo IP del prossimo router di next-hop.

![[Pasted image 20241103164845.png]]

i messaggi BGP sono scambiati tra peer tramite TCP, e sono di 4 tipi:
- **OPEN**: apre una connessione TCP e autentica il mittente.
- **UPDATE**: annuncia nuove rotte o aggiorna una rotta esistente.
- **KEEPALIVE**: mantiene la connessione TCP attiva.
- **NOTIFICATION**: riporta errori nei messaggi precedenti, usato anche per chiudere la connessione.

Esempio di inserimento di una entry verso prefissi distanti:

![[Pasted image 20241103165223.png]]
![[Pasted image 20241103165233.png]]

Naturalmente esistono più rotte verso un determinato prefisso, il router sceglierà la rotta migliore in base a:
- **Local preference**: preferenza locale assegnata dal router.
- **AS-PATH**: lunghezza dell'AS-PATH, più corto è meglio è.
- **NEXT-HOP più vicino**: il router sceglie il next-hop più vicino (hot potato routing), cioè quello che ha costo minore secondo il protocollo intra-AS.

![[Pasted image 20241103165553.png]]
In questa rete A,B,C sono provider network e x,y,z sono clienti.

Un ISP può scegliere di trasportare traffico solo da/per reti dei suoi clienti, e non da/per reti di altri ISP.

- A annuncia il percorso AW ad B e C
- B sceglie di non annunciare il percorso `B→A→w` a C, perchè non ha interesse di trasportare traffico nella rotta `C→B→A→w`, dato che nessuno dei due è un suo cliente. Quindi C non apprenderà la rotta `C→B→A→w` e invece userà `C→A→w` per raggiungere w

## SDN (Software Defined Networking)

Il routing tradizionale non permette di:
- scegliere il cammino di un pacchetto in maniera differente a quello minimo
- se si vuole dividere il traffico in base a certe regole per implementare un load balancing

Allora suddividiamo la rete in 3 strati:
- **Swith del data plane**: Switch veloci che implementano il data-plane forwarding in hardware. Questi switch usano la flow table calcolata dai controller ed usano protocolli come OpenFlow
- **Controller SDN**: Mantiene informazioni sullo stato della rete e interagisce con le applicazioni di rete tramite la northbound API, e con gli switch tramite la southbound API.
- **Applicazioni di rete**: Sono il cervello della rete, e implementano le proprie regole per modificare il comportamento dei controller.

![[Pasted image 20241104133100.png]]

### Protocollo OpenFlow

è un protocollo di comunicazione tra il controller e gli switch.
Ha 3 classi di messaggi:
- **Controller-to-switch**: usati per configurare gli switch
    - **feature**: chiede informazioni sulle capacità dello switch
    - **configure**: il controller interroga o imposta i parametri di configurazione dello switch
    - **modify-state**: il controller aggiunge/modifica/rimuove le entry della flow table OpenFlow
    - **packet-out**: il controller può inviare un pacchetto indicando una porta specifica dalla quale inoltrarlo.
- **Switch-to-controller (asincrone)**: usati per informare il controller sullo stato dello switch
    - **packet-in**: lo switch invia al controller (e la sua gestione) un pacchetto.
    - **flow-removed**: lo switch informa il controller che una entry della flow table è stata rimossa
    - **port-status**: lo switch informa il controller che lo stato di una porta è cambiato
- **Simmetriche**: messaggi misti

![[Frame 12.png]]

### Controller ODL (OpenDayLight)

Le applicazioni di rete possono essere contenute o esterne al controller, ed usa il service abstraction layer per interconnettere applicazioni interne e esterne.

![[Pasted image 20241104141804.png]]

### Controller ONOS

Le applicazioni di controllo sono separate dal controller.
Usa un framework per intenti dove le specifiche di servizio sono ad alto livello, specificando che "cosa" vogliono e non il "come".

![[Pasted image 20241104141831.png]]


## ICMP (Internet Control Message Protocol)

Usato dagli host e router per scambiarsi informazioni a livello di rete, come per esempio errori di routing o di trasmissione.
Un messaggio ICMP è composto da 3 sezioni, un numero che indica il tipo, un numero che indica il codice e un campo dati.

| Codice | Sotto-codice | Descrizione                            |
|--------|--------------|----------------------------------------|
| 0      | 0            | risposta eco (a ping)                 |
| 3      | 0            | rete destin. irraggiungibile          |
| 3      | 1            | host destin. irraggiungibile          |
| 3      | 2            | protocollo dest. irraggiungibile      |
| 3      | 3            | porta destin. irraggiungibile         |
| 3      | 6            | rete destin. sconosciuta              |
| 3      | 7            | host destin. sconosciuto              |
| 4      | 0            | riduzione (controllo di congestione)  |
| 8      | 0            | richiesta eco (ping)                  |
| 9      | 0            | annuncio del router                   |
| 10     | 0            | scoperta del router                   |
| 11     | 0            | TTL scaduto                           |
| 12     | 0            | errata intestazione IP                |

## Network management e SNMP

???

# Livello di link

Il data link layer ha la responsonsabilità di trasferire i dati tra due nodi fisicamente adiacenti in una rete. 
I nodi sono host o router, e i link sono i collegamenti tra i nodi (cablati, wireless, lan, etc...). I link comunicano tra loro inviando dei *frame* che incapulano i datagrammi (operazione di framing)

## Servizi del data link layer

- **Framing**: incapsulamento dei datagrammi in frame, usano l'indirizzo MAC negli header del frame per identificare il mittente e il destinatario
- **Consegna affidabile tra nodi adiacenti**: i protocolli di link layer sono progettati per essere affidabili, quindi se un frame non viene consegnato correttamente, il protocollo di link layer lo rileva e lo ritrasmette, usato principalmente in link wireless dove i frame possono essere persi a causa di interferenze.
- **Controllo di flusso**: la velocità di trasmissione tra due nodi adiacenti viene regolata in base alle loro capacità.
- **Rilevazione e correzione degli errori**: i frame possono essere corrotti durante la trasmissione, il nodo ricevente individua la presenza di errori e può richiedere la ritrasmissione del frame, o scartarlo.
- **Correzione degli errori**: alcuni protocolli di link layer possono correggere gli errori senza richiedere la ritrasmissione del frame.
- **Half duplex e Full duplex**: i collegamenti possono essere half-duplex (un solo nodo può trasmettere alla volta) o full-duplex (entrambi i nodi possono trasmettere contemporaneamente).

Il link layer è implementato su tutti gli host, tramite le schede di rete (NIC - Network Interface Card).

Chi invia un datagramma lo incapsula in un frame, aggiunge bit di error checking, controllo di flusso etc... e chi riceve il frame, controlla gli errori, controllo di flusso etc... per poi estrarre il datagramma e passarlo allo strato superiore.

## Rilevazione degli errori

Un datagramma è diviso in due sezioni: 
- **EDC** (Error Detection and Correction) che aggiungono informazioni di ridondanza per peremettere di rilevare e correge gli errori
- **D** (Data) che contiene i dati del datagramma che sono coperti dall'EDC

Non è possibile rilevare e correggere tutti gli errori, ma si diminuisce la possibilità aumentando la lunghezza dell'EDC.

### Controllo di parità

può essere implementato a 2 dimensioni. 
- **Singola dimensione**: si aggiunge un bit di parità per ogni riga o colonna, se il numero di bit a 1 è dispari, il bit di parità è 1, altrimenti è 0. Questo ci permette di sapere se nella riga o colonna ci sono stati errori.
- **Due dimensioni**: Come nella singola dimensione ma si aggiunge un bit di parità per ogni riga e colonna, in questo modo è possibile sapere esattamente dove si è verificato l'errore.

### Controllo a ridondanza ciclica (CRC)

è una tecnica di error detection più potente rispetto al controllo di parità. Preso un messaggio $D$:
Il Mittente e ricevente concordano su un polinomio generatore $G$ (es. 1001) di $r + 1$ bit, scegliendolo in modo tale che `<D,R>` (insieme) sono divisibili per G (modulo 2).
In questo modo, il destinatario divide `<D,R>` per G, se il resto è diverso da 0, c'è stato un errore. Questo permette di rilevare errori consecutivi inferiori a $r + 1$ bit.

![[Pasted image 20241104145510.png]]
![[Pasted image 20241104145536.png]]

## Protocollo di accesso multiplo

Ci sono due tipologie di link:
- **Point to Point Protocol (PPP)** che collega soltanto due host, per esempio connessioni telefoniche o connessioni via cavo.
- **Broadcast link** che collega più di due host, per esempio una rete wireless o una rete ethernet.

Il canale di broadcast è condiviso, quindi se due host trasmettono contemporaneamente, i frame si scontrano e non possono essere ricevuti correttamente. Per evitare questo problema, si utilizzano i protocolli di accesso multiplo.

L'ideale in un canale di broadcast con rate R bytes al secondo e M nodi che devono inviare dati, essi dispongono di un rate di trasmissione di $\frac{R}{M}$ bytes al secondo, senza sincronizzazioni tra i nodi o nodi speciali per coordinare le trasmissioni.

## Protocolli MAC

Ci sono 3 categorie di protocolli MAC:
- **Suddivisione del canale**: Il canale è suddiviso in parti più piccole, o tramite slot di tempo o tramite frequenze diverse.
- **Accesso casuale**: I canali non vengono suddivisi e si possono verificare collisioni, ma si hanno meccanismi di recupero a seguito di una collisione.
- **Rotazione**: I nodi si alternano per accedere al canale, ma i nodi che hanno bisogno di trasmettere molti dati possono avere turni più lunghi.

### Protocolli a suddivisione del canale

#### TDMA (Time Division Multiple Access)

Viene creato un "turno" composto da un certo numero di slot, ogni nodo ottiene uno slot di lunghezza prefissata dove può trasmettere pacchetti. Slot non utilizzati rimangono vuoti.
![[Pasted image 20241104151014.png]]


#### FDMA (Frequency Division Multiple Access)

Il canale è diviso in bande di frequenza, ogni nodo ottiene una banda di frequenza dove può trasmettere pacchetti.
![[Pasted image 20241104151024.png]]

#### Slotted ALOHA

Si assume che:
- tutti i pacchetti hanno la stessa dimensione
- il tempo è diviso in slot di lunghezza uguale alla trasmissione di un pacchetto. 
- i nodi trasmettono solo all'inizio di uno slot e non durante.
- se 2 o più nodi trasmettoono nello stesso slot, si verifica una collisione e tutti i nodi rilevano che c'è stata una collisione

Quando un nodo ha un nuovo pacchetto da spedire, aspetta che un nuovo slot inizi e trasmette il pacchetto.
- **Se non c'è collisione**, il nodo può trasmettere un nuovo pacchetto al prossimo slot.
- **Se c'è collisione**, il nodo ritrasmette con una probabilità $p$ (es. 0.5) negli slot successivi.

![[Pasted image 20241104151852.png]]

Se c'è un solo nodo, esso può trasmettere alla massima velocità del canale, inoltre, questa implementazione è completamente decentralizzata.

Ha il lato negativo che le collisioni sprecano slot, dato che potrebbero esserci slot vuoti dove nessun nodo trasmette. Inoltre, c'è bisogno di un meccanismo per sincronizzare i nodi per poter sapere quando inizia uno slot.

Supponiamo di avere $N$ nodi, ognuno trasmette i pacchetti con probabilità $p$. 
La probabilità di successo di un dato nodo è di $p(1-p)^{N-1}$, 
La probabilità che ogni nodo abbia successo è $Np(1-p)^{N-1}$

A questo punto cerchiamo un $p^*$ che massimizza la probabilità che ogni nodo abbia successo. Per un elevato numero di nodi ($N \to \infty$), la probabilità di successo è di $\frac{1}{e} \approx 0.37$. Quindi nel caso migliore, solo il 37% degli slot è utilizzato per trasmettere pacchetti.

### Protocolli di accesso casuale

#### Pure ALOHA (unslotted)

è simile allo slotted ALOHA, ma i nodi possono trasmettere in qualsiasi momento. Appena un nodo ha un pacchetto da trasmettere, lo trasmette. La probabilità di collisione aumenta.
Nello slotted aloha, un frame poteva essere corrotto solo all'inizio, mentre nel pure aloha, un frame può essere corrotto in qualsiasi momento. 

#### CSMA (Carrier Sense Multiple Access)

Prima di inviare un pacchetto, un nodo ascolta il canale per vedere se c'è un'altra trasmissione in corso. Se il canale è libero, il nodo trasmette, altrimenti ritarda la trasmissione.

La collisione è comunque possibile, dato che il tempo di propagazione del segnale non è nullo, quindi due nodi possono iniziare a trasmettere nello stesso momento.

#### CSMA/CD (Collision Detection)

Trasmette come CSMA, ma quando un nodo rileva una collisione, interrompe la trasmissione e invia un segnale (segnale di jam) per notificare che c'è stata una collisione.
Il nodo interrompe la trasmissione e attende prima di riprovare la trasmissione. Il tempo di attesa è dato dalla binary exponential backoff: dopo $K$ collisioni, il prossimo tempo di attesa è dato scegliendo un numero casuale tra 0 e $2^k - 1$.

$t_{prop}$ è il massimo ritardo di propagazione tra 2 nodi.
$t_{trans}$ è il tempo di trasmissione di un frame.
Allora l'efficienza è data da $\frac{1}{1 + 5t_{prop}/t_{trans}}$
E l'efficienza tende a 1 quando $t_{prop} \to 0$ e $t_{trans} \to \infty$. 
Ha prestazioni migliori di ALOHA, è semplice, non richiede sincronizzazione ed è decentralizzato.

### Protocolli di rotazione

#### Polling

Un nodo master invia un messaggio di polling ai nodi slave, uno alla volta, per vedere se hanno dati da trasmettere. Se un nodo ha dati da trasmettere, il master gli permette di trasmettere, altrimenti passa al nodo successivo. 
Ha difetto di aggiungere overhead per il polling, e se il nodo master fallisce, la rete fallisce.

#### Token Passing

Un token viene passato tra i nodi, solo il nodo che possiede il token può trasmettere. Quando un nodo ha finito di trasmettere, passa il token al nodo successivo.
Ha il difetto di aggiungere overhead per inviare il token, e se il nodo che possiede il token fallisce, la rete fallisce.

## Indirizzi MAC

Ogni scheda di rete ha un proprio indirizzo MAC univoco. è lungo 48bit.
Quando un azienda vuole costruire un adattatore di rete, compra un blocco di spazi di indirizzi MAC dalla IEEE, e assegna un indirizzo MAC a ciascun adattatore.

## ARP 

Il protocollo ARP (Address Resolution Protocol) è usato per mappare un indirizzo IP a un indirizzo MAC.
Una ARP table contiene le associazioni tra indirizzi IP e indirizzi MAC di nodi nella LAN. Dopo un certo tempo (TTL - Time To Live), le associazioni scadono e vengono cancellate.

![[Pasted image 20241104154854.png]]
![[Pasted image 20241104154942.png]]
![[Pasted image 20241104154957.png]]

## Indirizzamento LAN verso un altra LAN

Vogliamo inviare un datagramma da un nodo A a B, passando per un router R.
A conosce l'indirizzo IP di B, ma non il suo indirizzo MAC.
A conosce l'indirizzo IP e MAC di R.

Allora:
1. A crea un datagramma IP con origine A e destinazione B.
2. Crea un frame con l'indirizzo MAC di R come destinazione, con il datagramma IP all'interno del frame
3. Il frame viene inviato da A ad R
4. R riceve il frame, estrae il datagramma IP e lo usa per determinare l'indirizzo MAC di B
5. R crea un nuovo frame con l'indirizzo MAC di B come destinazione, e il datagramma IP all'interno del frame

## Ethernet

Ethernet è il protocollo di link layer più diffuso. In tempi passati, era usato il bus Ethernet, dove tutti i nodi erano collegati ad un unico cavo. Ora si usa lo switch Ethernet, dove i nodi sono collegati ad uno switch.

Il protocollo ethernet è connectionless, non c'è handshake tra mittente e destinatario.
Non è affidabile dato che il ricevente non invia ACK o NACK al mittente, quindi i protocolli di rete superiori devono gestire la ritrasmissione dei pacchetti persi. (come TCP).
Utilizza CSMA/CD per l'accesso al canale con exponential binary backoff.

Il trasmittente incapsula i datagrammi/pacchetti in frame Ethernet formati da:
- **Preambolo**: segnale di sincronizzazione, 7 byte di 10101010 e 1 byte di 10101011. Viene usato per sincronizzare il clock del ricevente. L'alternanza di 0 e 1 permette di capire il clock, e quando arriva il byte 10101011, il ricevente sa che il frame sta iniziando.
- **Indirizzo MAC di destinazione**: 6 byte
- **Indirizzo MAC di origine**: 6 byte, se un adattatore riceve un frame con il suo indirizzo MAC (o l'indirizzo di broadcast, come per esempio un pacchetto ARP), lo accetta, altrimenti lo scarta.
- **Tipo**: 2 byte, indica il protocollo di rete superiore (es. IP)
- **Dati**: Il payload del datagramma
- **CRC**: I bit di cyclic redundancy check per rilevare errori

## Switch Ethernet

Uno switch ethernet ha il ruolo di unire più segmenti di rete in una rete più grande.
Ha collegato a se diversi nodi, e può selettivamente inoltrare i frame ai nodi giusti.
Gli host non sanno che ci sono switch, pensano di essere collegati ad un unico segmento di rete, e lo switch non ha bisogno di essere configurato, dato che impara da solo quali nodi sono collegati a quali porte.

Ogni switch ha una *switch table* che mappa gli indirizzi MAC ai numeri di porta. 
Quando arriva un frame, lo switch memorizza nella switch table l'indirizzo MAC del mittente e la porta a cui è collegato. Se l'indirizzo MAC di destinazione è già nella switch table, lo switch inoltra il frame alla porta corretta, altrimenti inoltra il frame a tutte le porte tranne quella di arrivo.

### Router vs Switch

- **Router**: opera a livello 3, inoltra i pacchetti in base all'indirizzo IP
- **Switch**: opera a livello 2, inoltra i frame in base all'indirizzo MAC

- **Router**: Elaborano le forwarding table tramite algoritmi di routing.
- **Switch**: Elaborano le switch table tramite l'apprendimento.

## VLAN (Virtual LAN)

Le porte degli switch sono raggruppate, in modo che un singolo switch fisico operi come più switch logici, mappando le porte a VLAN diverse.

In questo modo, il traffico viene isolato tra le VLAN. Un frame da/verso una port di VLAN1 non può essere inoltrato a una porta di VLAN2.
Essendo un concetto virtuale, le porte possono essere assegnate ad una VLAN in maniera dinamica. Ed è possibile creare VLAN che attraversano più switch tramite _porte trunk_.

Un frame VLAN aggiunge 4 byte all'header del frame, i primi 2 byte sono il `Tag protocol identifier` e i successivi 2 byte sono il `Tag control information` che contiene l'ID della VLAN.

## MPLS (Multiprotocol Label Switching)

MPLS è una tecnica di inoltro di pacchetti che permette di instradare pacchetti in base ad una label invece che in base all'indirizzo IP.
I router hanno una forwarding table che mappa le etichette all'interfaccia di uscita del router.

- Imposizione dell’etichetta (Labeling): Quando un pacchetto entra nella rete MPLS, il primo router, chiamato Label Edge Router (LER), esamina l'indirizzo IP e assegna un'etichetta al pacchetto. Questa etichetta identifica il percorso specifico (path) che il pacchetto seguirà attraverso la rete.

- Forwarding: I router intermedi, detti Label Switch Routers (LSR), non devono analizzare l’indirizzo IP del pacchetto. Si limitano a leggere l’etichetta e a inoltrare il pacchetto lungo il percorso predefinito.

- Rimozione dell’etichetta: Quando il pacchetto raggiunge il router di destinazione alla fine del percorso MPLS, l’etichetta viene rimossa, e il pacchetto viene inoltrato come un normale pacchetto IP alla sua destinazione finale.

## Reti di datacenter

![[Pasted image 20241104163438.png]]

## Il cammino di una richiesta web

Mettiamo il caso che un utente voglia visitare un sito web, il cammino che la richiesta fa è il seguente:
1. l'utente ha bisogno del proprio indirizzo IP, l'indirizzo del router di first-hop e l'indirizzo del server DNS del sito web. **usaa DHCP**
2. La richiesta DHCP è incapsulata in UDP, incapsulata in IP e incapsulata in Ethernet.
3. Il frame ethernet in broadcast sulla LAN viene ricevuto dal router che fa da server DHCP.
4. Il frame Ethernet è decapsulato verso IP, decapsulato verso UDP, e decapsulato verso DHCP.
5. Il server HDCP formula il **DHCP ACK** che contiene l'indirizzo IP dell'utente, l'indirizzo IP del router di first-hop e l'indirizzo del server DNS.
6. Il server DHCP effettua l'incapsulamento e inoltrato attaverso la LAN, e il client decapsula il frame.
7. Il client DHCP riceve il reply DHCP ACK, a questo punto il client ha tutto quello di cui ha bisogno
8. L'utente vuole visitare il sito web, quindi il client invia una richiesta DNS per ottenere l'indirizzo IP del sito web che vuole visitare.
9. La richiesta DNS è incapsulata in UDP, incapsulata in IP e incapsulata in Ethernet. Ma per inviare il frame al router di first hop, il client deve sapere l'indirizzo MAC del router. usa **ARP**
10. La query ARP in broadcase è ricevuta dal router, che risponde con il proprio indirizzo MAC tramite una ARP reply.
11. Il client riceve la risposta ARP e incapsula la richiesta DNS in un frame Ethernet con l'indirizzo MAC del router come destinazione.
12. Il datagramma IP che contiene la query DNS viene inoltrat tramite lo switch LAN al router di first hop
13. Il datagramma IP viene inoltrato verso la rete Internet fino a raggiungere il DNS server.
14. Il messaggio viene decapsulato e il server DNS risponde con l'indirizzo IP del sito web.
15. Il client riceve la risposta dal DNS ma prima di inviare una richiesta HTTP deve aprire una socket TCP verso il server web.
16. Il segmento *SYN* TCP arriva al web server tramite routing inter-domain
17. Il server web risponde con un segmento *SYN-ACK*
18. Connessione TCP stabilita, il client invia la richiesta HTTP nella socket TCP
19. Il datagramma IP contenente la richiesta HTTP arriva al server web tramite il routing. 
20. Il server web risponde con un HTTP reply contenente la pagina web richiesta.
21. Il datagramma IP contenente la risposta HTTP arriva al client tramite il routing.
22. fine

# Elementi di una rete wireless

- **Host wireless**: dispositivo che può inviare e ricevere dati in una rete wireless
- **Base station (o Access point AP)**: trasmettitore fisso o mobile connesso alla rete cablata che permette la comunicazione tra la rete cablata e gli host wireless
- **link wireless**: canale di comunicazione tra host wireless e base station
- **rete con infrastruttura**: La base station connette gli utenti mobili a una rete cablata, e gli utenti mobili possono eseguire _handoff_, cioè cambiare base station.
- **rete ad hoc**: non c'è base station, gli host comunicano direttamente tra loro se sono in raggio di comunicazione

| Tipo di Connessione          | Single Hop                                                                                     | Multiple Hop                                                                                                                              |
| ---------------------------- | ---------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------- |
| **Infrastruttura (es., AP)** | Gli host si connettono a una base station (WiFi, WiMAX, cellulari) che si collega a reti wired | Gli host possono dover attraversare diversi nodi wireless per connettersi alla rete, formando una mesh network                            |
| **Nessuna infrastruttura**   | Nessuna base station, nessuna connessione a reti wired (Bluetooth, reti ad hoc)                | Nessuna base station, nessuna connessione a reti wired. Gli host devono attraversare vari nodi per arrivare a destinazione (MANET, VANET) |

Ci sono importanti differenze tra le reti wireless e quelle cablate:

- **Attenuazione del segnale**: il segnale si attenua con la distanza, con ostacoli, con la riflessione e la rifrazione
- **Interferenza**: il segnale può essere disturbato da altri segnali
- **Propagazione su più cammini**: Il segnale radio riflette su oggetti, e potrebbe arrivare a destinazione su più cammini.

## SNR (Signal-to-Noise Ratio) e BER (Bit Error Rate)

è il rapporto tra la potenza del segnale e la potenza del rumore. Maggiore è il SNR e più è facile decodificare il segnale.
La BER è la probabilità che un bit sia ricevuto erroneamente. Maggiore è il SNR e minore è la BER.

## Problema del _Hidden Terminal_

Se due host A e C vogliono comunicare con B, ma non si vedono, possono trasmettere contemporaneamente e interferire tra loro. B riceverà un segnale corrotto.

# CDMA (Code Division Multiple Access)

Tutti gli utenti di una rete condividono la stessa frequenza, ma ogni utente ha una propria "sequenza di chipping" cioè un codice usato per codificare i dati. Questo permette a diversi utenti di trasmettere simultaneamente senza interferire tra loro (se i codici sono ortogonali).

Il segnale è codificato moltiplicando i bit da trasmettere per il codice dell'utente.
Il segnale è decodificato effettuando il prodotto scalare tra il segnale ricevuto e il codice di chipping dell'utente.

![[Pasted image 20241104170806.png]]

# LAN wireless IEEE 802.11

Gli host wireless comunicano con un Access Point, ogni AP ha una frequenza di trasmissione diversa, bisogna cercare di non avere due AP vicini con la stessa frequenza, o si avranno interferenze.

Un host deve associarsi ad un AP, allora scansiona i canali per trovare l'eventuale presenza di un **beacon frame**, cioè un frame trasmesso da un AP per indicare la sua presenza, questo frame contiene un SSID (Service Set Identifier) e il proprio indirizzo MAC.
In seguito l'host effettua l'associazione dell'AP tramite autenticazione.

Ci sono 2 tipi di scansione per trovare un AP:
- **Passiva**: l'host ascolta i beacon frame trasmessi dagli AP
- **Attiva**: l'host trasmette un frame di richiesta in broadcast, e gli AP rispondono con un frame di risposta.

## Protocollo MAC 802.11 CSMA/CA

Il protocollo MAC802.11 usa CSMA/CA (Carrier Sense Multiple Access with Collision Avoidance) per evitare collisioni.

- **Mittente**: quando un host vuole trasmettere, controlla se il canale è libero, se lo è trasmette, altrimenti aspetta un tempo backoff casuale e riprova.
- **Destinatario**: quando un host riceve un frame, invia un ACK al mittente, serve per aiutare il problema del terminale nascosto.

## RTS-CTS

Per evitare collisioni quando si vuole inviare grandi dati, un host può inviare un frame di richiesta RTS (Request To Send) all'AP tramite CSMA/CA, se l'AP risponde con un frame CTS (Clear To Send) allora l'host può trasmettere. Il CTS è rilevato da tutti i nodi vicini, che ritardano la trasmissione.

![[Pasted image 20241104172153.png]]

## Indirizzamento Frame 802.11

Un frame 802.11 ha 4 indirizzi:
- **Indirizzo di destinazione**: Indirizzo MAC dell'host wireless o AP che riceverà il frame
- **Indirizzo di sorgente**: Indirizzo MAC dell'host wireless o AP che ha trasmesso il frame
- **Indirizzo destinatario**: Indirizzo MAC del destinatario
- **Indirizzo hoc**: Indirizzo usato solo in reti ad hoc

Quando un host comunica un frame verso un AP, il frame contiene tutti e 4 gli indirizzi, e quando l'AP lo riceve, li rimuove e li sostituisce con l'indirizzo di destinazione e di sorgente.
![[Pasted image 20241104172755.png]]

## Altre capacità di 802.11

- **adattamento del rate**: Un AP e dispositivo mobile possono dinaminacamente cambiare la velocità di trasmissione, in base alla qualità del segnale. se il SNR decresce, il BER aumenta, e viceversa.
- **Power Management**: Un host può entrare in modalità di risparmio energetico, segnalando all'AP di non inviare frame fino al prossimo beacon frame.
- **Ad hoc mode**: Gli host possono comunicare direttamente tra loro senza AP, designando un host come _coordinator_ che si occupa di gestire la rete.

# Reti 4G e 5G
![[Pasted image 20241104174739.png]]

- **Device mobile (UE - User Equipment)**: smartphone, tablet, laptop, hanno una SIM che contiene un codice a 64bit chiamato IMSI (International Mobile Subscriber Identity)
- **Base station (eNode-B)**: è il "confine" della rete gel gestore telefonico. Ha il compito di gestire la comunicazione con i dispositivi mobili presenti nel suo raggio di copertura. Comunica con altre base station tramite per ottimizzare l'uso delle frequenze.
- **Home Subscriber Service (HSS)**: contiene le informazioni degli utenti, come il loro IMSI, contratto, numero di telefono, ecc. Interagisce con il MME per autenticare l'utente.
- **Serving Gateway (SGW) e PDN Gateway (PGW)**: Sono nel cammino tra le base station e l'internet pubblico, il SGW è il punto di accesso alla rete, il PGW è il punto di accesso alla rete pubblica. Gli eNode-B comunicano con il SGW, e il SGW con il PGW. Il PGW 
- **Mobility Management Entity (MME)**: Si occupa di gestire l'autenticazione degli utenti, coordinato con l'HSS. Inoltre si occupa di gestire il _handoff_ tra base station, e tracciare la posizione degli utenti. Calcola il cammino (tunneling) dal device mobile al PGW.

![[Pasted image 20241104184917.png]]
Protocolli LTE del link layer:
- **Packet data convergence protocol (PDCP)**: Si occupa di comprimere i dati, e di gestire la sicurezza dei dati.
- **Radio Link Control (RLC)**: Si occupa di gestire la trasmissione dei dati, e di garantire che i dati siano ricevuti correttamente.
- **Medium Access Control (MAC)**: Si occupa di gestire l'accesso all'uso di un canale radio.

## Associazione ad una Base Station

1. La base station manda in broadcast un segnale di primary synchronization signal (PSS) ogni 5ms in tutte le frequenze
2. Il device mobile che riceve questo segnale richiede un segnale di secondary synchronization signal (SSS), per sincronizzarsi con la base station. La base station risponde con la banda del canale, le configurazioni e dati del gestore.
3. Il mobile device sceglie a quale base station associarsi, e manda un messaggio di richiesta di associazione.

## Sleep mode

Come nel wifi e bluetooth, il mobile LTE può mettere la radio in "sleep" mode per consumare batteria.
In modalità light sleep il mobile device si sveglia ogni 100ms di inattività per controllare se ci sono dati da ricevere.
In modalità deep sleep, il mobile device si sveglia ogni 5-10sec di inattività, durante questo periodo può cambiare base station, e quindi necessita di ristabilire la connessione. 

# Mobilità della rete

I device devono poter moversi tra reti multiple senza perdere la connessione. 
Questo si può implementare in 2 modi:
- **Se ne occupa il routing**: i router comunicano gli indirizzi IP o numero di telefno dei nodi mobili, modificano le tabelle di routing. Le tabelle di routing vengono aggiornate quando un nodo mobile cambia rete. In questo modo non si devono applicare modifiche negli end system, ma non è scalabile.
- **Se ne occupano gli end system**: 
    - **Routing indiretto**: Le comunicazioni vengono reindirizzate tramite un nodo fisso, chiamato _home agent_, che si occupa di instradare i pacchetti verso il nodo mobile. Il nodo mobile comunica con l'home agent tramite un _care-of-address_ (COA), che è l'indirizzo IP temporaneo del nodo mobile. L'home agent mantiene una tabella di binding tra l'indirizzo IP del nodo mobile e il COA.
    - **Routing diretto**: Il nodo mobile comunica direttamente con il nodo fisso, chiamato _correspondent node_, che si occupa di instradare i pacchetti verso il nodo mobile. Il nodo mobile comunica con il correspondent node tramite un _home address_ (HA), che è l'indirizzo IP permanente del nodo mobile. Il correspondent node mantiene una tabella di binding tra l'indirizzo IP del nodo mobile e l'HA.

Considera il caso dove si vuole contattare un mobile device che cambia spesso rete. Definiamo:
- **Home network**: come la rete dove il mobile device è registrato tramite il provider cellulare. è Anche dove l'HSS mantiene le info su identità e servizi
- **Visited network**: è una network differente dalla home network che ha accordi di servizio con altre reti per fornire connettività ai mobile device che stanno visitando.
## Mobilità con routing indiretto

![[Pasted image 20241104191355.png]]
![[Pasted image 20241104191409.png]]

Ha il lato negativo di essere inefficiente quando un nodo mobile e il correspondent node sono nello stesso network, ma i pacchetti devono passare per l'home agent. 
Ma ha il lato positivo che quando un nodo mobile cambia rete, non deve cambiare il suo indirizzo IP, e quindi può mantenere eventuali connessioni attive (esempio TCP).
## Mobilità con routing diretto

![[Pasted image 20241104191509.png]]

è più efficiente se il nodo mobile e il correspondent node sono nello stesso network, ma non è trasparente al correspondent, dato che deve sapere l'indirizzo temporaneo (COA) del nodo mobile.
## Funzioni principali della mobilità nelle reti 4G

![[Pasted image 20241104201524.png]]

1. **Associazione con la base station**, il mobile device fornisce il proprio IMSI
2. **Configurazione del control-pane**: MME e HSS stabiliscono lo stato nel control-plane
3. **Configurazione del data-plane**: MME configura i tunnel per il forwarding del mobile device e i visited network instaurano i tunnel dall'home PGW al mobile device.
4. **Handover**: Il mobile device a questo punto è connesso e naviga tramite la visited network.
## Handover tra BS nella stessa rete

![[Pasted image 20241104201446.png]]

1. la BS corrente (source) seleziona una target BS e inia una richiesta di Handover al BS target
2. il BS target pre alloca le risorse per il mobile device e risponde con HR ACK al BS source con delle info per il mobile device
3. il BS source infoma il mobile device della nuova BS. A questo punto il mobile device può inviare dati alla nuova BS. L'handover appare completo al mobile device.
4. la BS source smette di inviare datagrammi al mobile device, e invece li invia alla nuova BS, che a sua volta li inoltra al mobile device.
5. il BS target informa MME che essa è la nuova BS per il mobile device, allora l'MME informa il SGW di cambiare l'endpoint tunnel verso la nuova BS.
6. il BS target manda un ACK al BS source. A questo punto l'handover è completato, e il BS source può liberare le risorse.
7. i datagrammi del mobile ora viaggiano attraverso il nuovo tunnel dal BS target al SGW


Nelle reti si considera la sicurezza come:

- *riservatezza*: solo il mittente e destinatario devono capire il contenuto del messaggio.
- *autenticazione*: mittente e destinatario vogliono confermare la propria identità.
- *integrità del messaggio*: mittente e destinatario vogliono essere sicuri che il messaggio non sia stato alterato.
- *accesso e disponibilità*: i servizi devono essere accessibili e disponibili agli utenti

## Membri di una potenziale comunicazione non sicura

![[Pasted image 20241118170900.png]]

Usiamo:
- Alice e bob, come due utenti che comunicano fra di loro. Questi due utenti possono essere una qualsiasi entità che usa l'internet per comunicare, come client/server, dns, IOT, etc...
- Trudy, come il malintenzionato che vuole rompere la sicurezza della comunicazione fra Alice e Bob. Trudy può:
  - **origliare**: intercettare i messaggi
  - **Inserire** messaggi nella connessione
  - **Impersonare** gli indirizzi sorgente dei pacchetti per sembrare Alice o Bob
  - **DoS** impedire l'uso di un servizio da parte degli utenti, come per esempio sovraccaricando le risorse

# Crittografia

![[Pasted image 20241118171728.png]]
- $m$ è il messaggio in chiaro
- $K_A(M)$ è il messaggio cifrato con chiave $K_A$ 
- $m = K_B(K_A(m))$ 

Per poter violare questo schema di cifratura, Trudy dovrebbe provare tutte le possibili chiavi di cifratura tramite brute force, o indovinare la chiave tramite metodi statistici 

## Crittografia a chiave simmetrica 

![[Pasted image 20241118172017.png]]

è uno schema di cifratura molto semplice, sia Bob che Alice condividono la stessa chiave $K_S$.
Questa chiave può essere utilizzata in vari modi in algoritmi di cifratura. C'è un problema, come si fa a condividere questa chiave in maniera sicura?

## DES: Data Encryption Standard

é uno standard di cifratura che usa una chiave simmetrica a 56bit per input in chiarao a 64bit. Il DES è stato sconfitto tramite brute force tramite cluster di computer.

Esegue 16 round di cifratura, ognuno dei quali esegue una permutazione e una sostituzione dei bit del messaggio in chiaro tramite una chiave di cifratura.

## AES: Advanced Encryption Standard

é uno standard di cifratura che usa una chiave simmetrica a 128, 192 o 256 bit. L'AES è molto più sicuro del DES, e viene usato in molte applicazioni. è quasi impossible battere AES tramite brute force dato che impiegherebbe troppo tempo.

## Crittografia a chiave pubblica

Torniamo al problema di come condividere la chiave simmetrica in maniera sicura. La crittografia a chiave pubblica risolve questo problema. In questo schema, ogni utente ha due chiavi:
- una chiave pubblica, che può essere condivisa con chiunque, ed è pubblicamente disponibile a tutti
- una chiave privata, che è segreta e conosciuta solo all'utente

![[Pasted image 20241118173155.png]]

Abbiamo bisogno di $K_B^+$ e $K_B^-$ tale che $K_B^+(K_A^-(m)) = m$, e che non sia possibile che tramite la chiave pubblica $K_B^+$ si possa risalire alla chiave privata $K_B^-$

## Aritmetica modulare

$x \mod n$ è il resto della divisione di $x$ per $n$. Se $x = nq + r$, allora $x \mod n = r$, alcune proprietà dell'aritmetica modulare sono:
- $[(a \mod n) + (b \mod n)] \mod n = (a + b) \mod n$
- $[(a \mod n) - (b \mod n)] \mod n = (a - b) \mod n$
- $[(a \mod n) \cdot (b \mod n)] \mod n = (a \cdot b) \mod n$
- $[(a \mod n)^d] \mod n = (a^d) \mod n$

## RSA: Rivest-Shamir-Adleman

Si ha una sequenza di bit come messaggio, rappresentata da un numero intero, allora:
1. Scelgo due numeri primi $p$ e $q$ molto grandi (esempio da 1024 bit)
2. Calcola $n = p \cdot q$ e $z = (p-1)(q-1)$
3. Scegliamo $e$ tale che $1 < e < n$ in maniera che $e$ e $z$ siano coprimi tra loro (cioè non abbiano divisori in comune)
4. Calcoliamo $d$ tale che $d \cdot e \mod z = 1$, cioè che $e \cdot d - 1$ sia divisibile per $z$
5. La chiave pubblica è $K^+ = (n, e)$ e la chiave privata è $K^- = (n, d)$

A questo punto per cifrare un messaggio $m$ con la chiave pubblica $K^+ = (n, e)$, si calcola $c = m^e \mod n$. Per decifrare il messaggio si calcola $m = c^d \mod n$.
E quindi che:
$$m = c^d \ mod \ n = (m^e \ mod \ n)^d \ mod \ n$$

In oltre, applicando prima la chiave pubblica e poi la chiave privata, o viceversa, si ottiene lo stesso risultato. cioè che
$$
  K_B^-(K_B^+(m)) = m = K_B^+(K_B^-(m))
$$

L'algoritmo è sicuro perchè per poterlo sconfiggere, dovremmo trovare i due fattori $p$ e $q$, che essendo molto grandi, è molto difficile da fare.

## RSA: esempio

Bob sceglie $p = 5$ e $q = 7$, allora $n = 35$ e $z = 24$. Sceglie $e = 5$ e $d = 29$.

![[Pasted image 20241118174926.png]]

## Limitazioni di RSA

L'esponenziazione di RSA è computazionalmente molto pesante, infatti DES è almeno 100 volte più veloce di RSA.

Per questo motivo, si usa RSA per scambiare una chiave simmetrica, e poi si usa la chiave simmetrica (chiamata di sessione) per cifrare il messaggio con DES.

## Autenticazione

Si vuole provare che il messaggio sia statto effettivamente inviato da chi dice di averlo inviato.

In assenza di autenticazione, un malintenzionato potrebbe impersonare un utente e inviare messaggi in suo nome.

Ci sono molti approcchi che non funzionano:
- **IP address**: Non si può usare l'indirizzo IP per autenticare un utente, dato che l'indirizzo IP può essere facilmente falsificato
- **Identificativo**: non si può usare l'identificativo dell'utente, dato che può essere usato anche dal malintenzionato per impersonare l'utente
- **Password**: non si può usare una password, dato che può essere intercettata dal malintenzionato e memorizzata, e poi usata per impersonare l'utente tramite "playback attack" che riutilizza il pacchetto contenente la password per impersonare l'utente. Anche se la password è cifrata, il malintenzionato non ha bisogno di decifrarla, può semplicemente inviare il pacchetto cifrato.

Vogliamo evitare l'attacco playback, allora il mittente invia un numero $R$ chiamato nonce (number used once), il destinatario dovrà rispondere al mittente con $R$ cifrato tramite una chiave segreta condivisa tra i due, dimostrando che conosce la chiave segreta, e quindi che è effettivamente il destinatario.

Come visto precedentemente, possiamo usare la tecnica di chiave pubblica-privata per scambiare la chiave segreta, e poi usare la chiave segreta per autenticare il mittente. Cioè che:

![[Pasted image 20241118180708.png]]

Questa tecnica è comunque vulnerabile ad un attacco **MITM** dove il malintenzionato si pone in mezzo alla comunicazione fra destinatario e mittente, intercettando e inoltrando i messaggi scamabiati con il destinatario. Questo attacco è difficile da rilevare, dato che per mittente e destinatario, la comunicazione sembra essere andata a buon fine.

### Firma digitale

Il mittente vuole inviare un messaggio $m$, allora lo firma usando la propria chiave privata, generando il messaggio $K_B^-(m)$, a questo punto invia il messaggio $m$ e la firma $K_B^-(m)$ al destinatario. Il destinatario verifica che il messaggio e la firma combacino usando la chiave pubblica del mittente, cioè che $K_B^+(K_B^-(m)) = m$, che è valido solo se chi ha firmato il messaggio conosce la chiave privata.
Questo garantisce anche la non ripudiabilità del messaggio, cioè che il mittente non può negare di aver inviato il messaggio.

Anzichè firmare l'intero messaggio, si può firmare un digest del messaggio, cioè applicando una funzione di hash al messaggio e firmando il digest. In questo modo si riduce la quantità di dati da firmare e inviare.

### MD5

è una funzione di hash che prende un messaggio di lunghezza arbitraria e restituisce un digest di 128 bit.

## Certificazione della chiave pubblica

La falla precedente dell'attacco MITM è dovuta al fatto che durante la comunicazione di $R$ e lo scambio della chiave pubblica, il malintenzionato può intercettare $R$ e criptarlo con la propria chiave pubblica, per poi rinviarlo al mittente, ponendosi come il destinatario. Stessa cosa farà con la chiave pubblica del destinatario, inviando la propria chiave pubblica al mittente. A questo punto il malintenzionato può intercettare i messaggi scambiati fra mittente e destinatario, e inoltrarli al destinatario e mittente rispettivamente, facendo credere a entrambi che la comunicazione sia andata a buon fine.

Per evitare questo, ci deve essere un ente fidato chiamato **Certification Authority (CA)**. Un utente $E$ di internet registra la propria chiave pubblica $K_B^+$ presso la CA, fornendo una prova di identità. A questo punto la CA crea un certificato contenente la garanzia che "$K_B^+$ appartiene a $E$". Il certificato è firmato dalla CA con la chiave privata della CA. Il mittente può verificare il certificato usando la chiave pubblica della CA, e quindi può essere sicuro che la chiave pubblica del destinatario è effettivamente quella del destinatario.
![[Pasted image 20241118182843.png]]

A questo punto quando un utente vuole comunicare con un altro, può richiedere il certificato del destinatario alla CA, ed usarla per verificare la chiave pubblica del destinatario.

## Email sicure

![[Pasted image 20241118183013.png]]

Il mittente:
- Genera una chiave simmetrica $K_S$
- Cifra il messaggio con $K_S$
- Cifra $K_S$ con la chiave pubblica del destinatario
- Invia il messaggio cifrato e la chiave cifrata al destinatario
- Il destinatario usa la propria chiave privata per decifrare $K_S$
- Il destinatario usa $K_S$ per decifrare il messaggio

![[Pasted image 20241118183214.png]]

Possiamo aggiungere la firma digitale al messaggio. Il mittente può firmare il messaggio con la propria chiave privata, e il destinatario può verificare la firma con la chiave pubblica del mittente

![[Pasted image 20241118183239.png]]

Il mittente può fornire riservatezza, autenticazione e integrità del messaggio. Allora usa tutte e 3 le chiavi, la privata, pubblica e simmetrica.

## SSL/TLS

è un protocollo di sicurezza utilizzato sopra il transport layer che fornisce:
- **riservatezza**: i messaggi sono cifrati tramite cifratura simmetrica
- **autenticazione**: tramite crittografia a chiave pubblica
- **integrità del messaggio**: tramite firma digitale

Le fasi principali per stabilire una connessione sicura sono:
- **Handshake**: Viene stabilita una connessione TCP, e i due client usano crittografia a chiave pubblica per scambiare una chiave simmetrica. 
- **Key Derivation**: I due client usano la chiave simmetrica per derivare un insieme di chiavi.
- **Data Transfer**: I dati da trasferire sono spezzati in blocchi.
- **Termination**: Vengono inviati messaggi speciali per terminare la connessione in maniera sicura.

### Handshake

- Il mittente crea una connessione TCP con il destinatario
- Il mittente verifica che il destinatario sia chi dice di essere tramite la CA
- Il mittente e il destinatario scambiano una chiave simmetrica (Master Secret) usata per generare le altre chiavi simmetriche della sessione TLS

### Key Derivation

Nota: Il MAC (Message Authentication Code) è un codice che viene aggiunto al messaggio per garantirne l'integrità. Il MAC è generato tramite una funzione di hash e una chiave segreta condivisa tra mittente e destinatario.

Tramite il Master Secret vengono generate 4 chiavi:
- $K_c$: chiave per cifrare i dati inviati dal client al server
- $M_c$: chiave MAC per i dati dal client al server
- $K_s$: chiave per cifrare i dati inviati dal server al client
- $M_s$: chiave MAC per i dati dal server al client

### Data Transfer

Dobbiamo poter inviare il MAC che garantisce l'integrità del messaggio. Potremmo mettere il MAC alla fine del messaggio, ma a questo punto dovremmo attendere che tutti i dati siano arrivati per poter verificare l'integrità del messaggio. 

Per evitare ciò, suddividiamo un messaggio in blocchi, e per ogni blocco ci sono 3 segmenti:
- la lunghezza del blocco dati 
- il blocco dati
- il MAC del blocco dati

Dobbiamo anche aggiungere un sequence number nel MAC, dove il MAC sarà formato da $MAC = H(M_x, \text{dati}, \text{sequence number})$, altrimenti un attaccante potrebbe catturare e reinviare un blocco di dati con lo stesso MAC, oppure potrebbe invertire l'ordine dei blocchi.

### Termination

Un attaccante potrebbe creare un segmento di chiusura connessione TCP, a questo punto uno o entrambi i lati potrebbero pensare che ci siano meno dati da trasferire di quanto si aspettassero.
Per risolvere questo problema, si aggiunge un nuovo field al blocco chiamato "type" dove un valore di 0 indica un blocco di dati, e un valore di 1 indica un blocco di chiusura.
A questo punto il MAC diventa $MAC = H(M_x, \text{dati}, \text{tipo},  \text{sequence number})$

## TLS reale

L'algorimo effettivamente usato per la comunicazione sicura aggiunge più informazioni alla comunicazione, come l'algoritmo di cifratura usato, e se usare RSA o DHE per lo scambio della chiave simmetrica.

1. Il client invia una lista di algoritmi che supporta, insieme ad un nonce
2. Il server sceglie gli algoritmi dalla lista e risponde al client con la scelta + certificato + nonce
3. Il client verifica il certificato, ne estrae la chiave pubblica del server e genera un "pre-master secret" che cifra con la chiave pubblica del server e invia al server
4. Client e server calcolano indipendentemente dal "pre-master secret" e nonce, la cifratura e chiavi MAC 
5. Il client invia un MAC di tutti i messaggi di handshake
6. Il server invia un MAC di tutti i messaggi di handshake

Gli step 5 e 6 servono per evitare che un MITM possa intercettare i messaggi di handshake e modificarli, come per esempio rimuovere gli algoritmi più forti dalla lista di algoritmi supportati.

Vengono usati due nonce casuali perchè un attaccante potrebbe intercettare il nonce del client e la sequenza di pacchetti handshake tra client e server, e in futuro riutilizzare il nonce e la sequenza di pacchetti per impersonare il client.

![[Pasted image 20241118190659.png]]
- **Record header**: contiene il tipo di messaggio, la versione del protocollo, la lunghezza del messaggio
- **MAC**: $H(M_x, \text{dati}, \text{tipo}, \text{sequence number})$
- **Fragment**: contiene i dati, che ha lunghezza di ~16KB

![[Pasted image 20241118190933.png]]

## VPN (Virtual Private Network)

Le istituzioni vogliono poter usare una rete privata per comunicare, ma per poter creaare 
una rete privata, sono necessari Router separati, link, infrastruttura DNS etc...

Per evitare ciò, si usa una VPN, che è una rete privata virtuale che usa la rete pubblica per trasmettere dati in maniera sicura,
cifrando i dati prima di inviarli sulla rete pubblica.

# Sicurezza a livello di rete (IPSec)

Aggiunge autenticazione, cifratura e controllo di integrità ai pacchetti IP. 
Permette di proteggere i protocolli di livello superiore, rimanendo trasparenti ad essi.

Può essere implementato come `transport mode` dove viene criptato solo il payload del pacchetto IP (negli host), oppure come `tunnel mode` dove viene criptato l'intero pacchetto IP (nei router).

A differenza di IP, IPsec è connection-oriented.

## IPSec: Authentication Header (AH)

Fornisce autenticazione e integrità del pacchetto IP, ma non riservatezza

## IPSec: Encapsulating Security Payload (ESP)

Fornisce autenticazione, integrità e riservatezza del pacchetto IP

## IPSec: Security Association (SA)

Prima di inviare i dati, viene stabilita una SA tra le due entità, questo contiene:
- Indirizzo IP del mittente e destinatario
- Protocollo di sicurezza (AH o ESP)
- Le tecniche di cifratura, e le chiavi usate
- Un numero 32 bit chiamato Security Parameter Index (SPI) che identifica la SA

Un esempio di SA da R1 a R2

![[Pasted image 20241121155647.png]]

R1 memorizza:
1. Identificatoer SA, l'SPI
2. Interfacia di origine della SA (200.168.1.100)
3. Interfaccia di destinazione della SA (193.68.2.23)
4. Tipo di cifratura usata (es. 3DES con CBC)
5. Chiave di cifratura
6. Tipo di integrity check usato (es. HMAC con MD5)
7. Chiave di autenticazione

## IPSec: Security Association Database (SAD)

l'endpoint trattiene lo stato della SA nel SAD, quando invia datagrammi 
IPsec, R1 accede al SAD per determinare come trattare il datagramma.

Quando i datagrammi IPsec arrivano a R2, R2 esamina l'SPI nei datagrammi e indicizza il SAD con l'SPI per determinare come trattare il datagramma.

![[Pasted image 20241121161149.png]]

## IPSec: Security Policy Database (SPD)

Dato un datagramma, l'entità inviante deve sapere se deve usare IPsec, e quale SA usare.

Le informazioni prese dall'SPD dice all'entità "cosa" fare quando arriva un datagramma, mentre l'SAD dice all'entità "come" farlo.

## Convertire pacchetti IP in IPsec

Preso un datagramma IP, esso contiene un header IP e un payload, per convertirlo in un datagramma IPsec si:
- Aggiunge in fondo al datagramma originale un "ESP trailer" che contiene del padding per allineare il payload, il padding length che indica la lunghezza del padding, il next header che indica il protocollo del payload.
- Cifra questo datagramma aggiornato con l'algoritmo e chiave specificati nell'SA
- Aggiunge all'inizio della parte cifrata un "ESP header" che contiene il SPI e sequence number
- Crea un MAC del datagramma e lo aggiunge alla fine
- Crea un nuovo header IP con tutti i classici header di IPv4, e viene inserito all'inizio del datagramma IPsec

Il sequence number viene inizializzato a 0 per ogni nuova SA. Ogni volta che viene inviato un datagramma, il mittente incrementa il 
sequence number e lo mette come valore nel campo del datagramma.

Questo permette di evitare attacchi di tipo sniffing e replay, e ignora i pacchetti duplicati.

## IKE: Internet Key Exchange, PSK e PKI

IKE è un protocollo usato da IPsec per stabilire una comunicazione sicura tra dspositivi. Ha il compito di 
negoziare, stabilire e gestire gli SA. 

- PSK (Pre-Shared Key) si usa una chiave condivisa tra mittente e destinatario. Questa chiave è pre condivisa in partenza e viene usata per autenticare le due entità.
- PKI, usano la crittografia a chiave pubblica per scambiare le chiavi simmetriche, simile all'handshake di SSL/TLS

l'IKE ha due fasi:

1. Impostare le SA IKE bi-direzionali (ISAKMP SA), ha due modalità, aggressive mode che usa meno messaggi, e main mode che è più sicura e flessibile
2. Si usa la ISAKMP per negoziare in sicurezza le coppie di SA IPsec

## WEP: Wired Equivalent Privacy

Ha il compito di fornire riservatezza e integrità dei dati trasmessi su una rete wireless.

Un dispositivo e l'access point (AP) condividono una chiave segreta (PSK) usata nella connessione.

1. Il dispositivo fa richiesta di autenticazione all'AP
2. L'AP invia una chiave casuale al dispositivo (nonce) di 128 bytes
3. Il dispositivo cifra il nonce con la chiave segreta e lo invia all'AP
4. L'AP decifra il nonce e verifica che sia corretto

Questi step sono eseguiti prima dell'associazione del dispositivo alla rete.

Ogni pacchetto contiene un IV (Initialization Vector) di 24 bit, che viene concatenato alla chiave segreta per cifrare il pacchetto. L'IV è differente per ogni pacchetto.

![[Pasted image 20241121164136.png]]

### Violazione cifratura WEP 802.11

L'IV da 24 bit è troppo piccolo, ed essendo uno per frame, evenutalmente si andrà a riutilizzare un IV. E dato che essi sono trasmessi in plain text, si può rilevare un IV duplicato.

Un attacco può essere:
- Attaccante fa cifrare al mittente un testo conosciuto $d_1, d_2, d_3, ...$
- Attaccante cattura un pacchetto cifrato $c_i = d_i \oplus k_i^{IV}$
- Attaccante conosce $c_i$ e $d_i$, quindi può calcolare $k_i^{IV}$
- Attaccante conosce la sequenza delle chiavi di cifratura $k_i^{IV}$

La prossima volta che un IV viene riutilizzato, l'attaccante può decifrare il pacchetto.

## Autenticazione e cifratura in WPA3

1. L'AP annuncia la sua presenza e i metodi di autenticazione e cifratura forniti.
2. Il dispositivo richiede uno specifico metodo di autenticazione e cifratura 
3. Il server di autenticazione (AS) ha una chiave segreta che è stata condivisa in precendenza (password).
4. L'AS genera un NonceAS e lo invia al dispositivo
5. Il dispositivo riceve il NONCEAS, genera un NonceM, una chiave di sessione simmetrica $K_{M - {AP}}$ usando il NonceAS, NonceM e la password
6. Invia il NonceM e un valore HMAC al server usando il NonceAS e la password
7. Il server deriva la chiave di sessione simmetrica $K_{M - {AP}}$ e verifica il valore HMAC.
8. A questo punto l'AS ha la stessa chiave di sessione simmetrica del dispositivo, e può iniziare a comunicare in maniera sicura.

![[Pasted image 20241121165313.png]]

## Autenticazione e cifratura in 4G LTE

Il dispositivo mobile che vuole connettersi alla Base Station (BS) deve autenticarsi nella rete e autenticare la retete stessa.

La sim stessa contiee un identità globale,e le chiavi condivise.

![[Pasted image 20241121172722.png]]
Il mobile e il BS usano la chiave di sssione derivata $K_{BS-M}$ per cifrare le comunicazioni sul link 4G

L'MME della visited network e il HHS della home network prendono insieme lo stesso ruolo che ha AS nel WiFi. 
L'autenticatore è l'HSS, e ci sono accordi di fiducia tra i vari MME e HSS.

1. Il mobile invia richiesta di autenticazione all'HSS, inviand un "attah message" che contine il proprio IMSI, e informazioni
sulla rete di origine. Questo viene inoltrato dalla BS alla visited MME alla home HHS. 
2. L'HSS usa la chiave segreta precondivisa $K_{HSS-M}$ per generare un codice di autenticazione (auth_token) che contiene le info dell'HSS cifrate usando $K_{HSS-M}$,
questo garantisce al mobile che chiunque abbia generato il token conosce $K_{HSS-M}$. A questo punto il mobile ha autenticato la rete. Riceve un $xres_{hss}$ che verrà usato per autenticare il mobile.
3. Il mobile elabora un messaggio di risposta $res_M$ usando la propria chiave segreta, ed eseguire gli stessi calcoli che ha compiuto l'HSS per calcolare $xres_{hss}$, e lo invia all'MME
4. L'MME confronta il valore di $res_M$ con quello calcolato da se stesso ($xres_{hss}$) , e se sono uguali, il mobile è autenticato nella rete. A questo punto l'MME informa la BS che il mobile è autenticato e genera le chiavi per la BS. 
5. Mobile e BS determinano le chiavi per cifrare i dati e si inviano dei frame di controllo sul canale wireless 4G, a questo punto si può usare AES.

# Firewall e IDS

Un firewall ha il compito di isolare la rete interna di un organizzazione dal resto dell'internet, permettendo solo ad alcuni pacchetti di passare.

I firewall evitato attacchi DoS di SYN flooding, non permettendo l'istaurazione di connessioni TCP da parte di host non autorizzati.

## Filtro stateless di pacchetti 

La rete interna è connessa all'internet tramite un router firewall che filtra pacchetto per pacchetto in base all'IP sorgente e destinazione, numeri di porta TCP e UDP sorgnte o destinazione, i tipi di messaggi ICMP e i bit TCP SYN e attack

Per esempio se un firewall bloca tutti i pacchetti on porta sorgente o destinazione 23, che usano protocollo IP 17 (UDP), allora blocca tutte le connessioni telnet e UDP.


| **Obiettivo**                                              | **Regola**                                                                                     |
|------------------------------------------------------------|------------------------------------------------------------------------------------------------|
| Nessun accesso Web verso l’esterno                        | Scarta tutti i pacchetti in uscita verso qualsiasi indirizzo IP, porta 80                      |
| Nessuna connessione TCP in entrata, tranne verso il server Web dell’istituzione | Scarta tutti i pacchetti TCP SYN in entrata verso qualsiasi IP tranne 130.207.244.203, porta 80 |
| Impedisci ai Web-radios di consumare tutta la bandwidth disponibile | Scarta tutti i pacchetti UDP in entrata tranne DNS e router broadcast                          |
| Impedisci che la tua rete sia usata per un attacco DoS     | Scarta tutti i pacchetti ICMP in uscita verso un indirizzo “broadcast” (es. 130.207.255.255)   |
| Impedisci che la tua rete risponda al traceroute           | Scarta tutti i pacchetti ICMP in uscita con TTL expired                                        |

## Access Control List (ACL)

è una tabella di regole che vengono applicate dalla prima all'ultima, sono coppie (azione, condizione)

| **Action** | **Source Address** | **Dest Address** | **Protocol** | **Source Port** | **Dest Port** | **Flag Bit** |
|------------|--------------------|------------------|--------------|------------------|---------------|--------------|
| Allow      | 222.22/16          | Outside of 222.22/16 | TCP          | > 1023           | 80            | Any          |
| Allow      | Outside of 222.22/16 | 222.22/16        | TCP          | 80               | > 1023        | ACK          |
| Allow      | 222.22/16          | Outside of 222.22/16 | UDP          | > 1023           | 53            | ---          |
| Allow      | Outside of 222.22/16 | 222.22/16        | UDP          | 53               | > 1023        | ----         |
| Deny       | All                | All              | All          | All              | All           | All          |

## Filtro stateful di pacchetti

Il filtraggio stateless non sa nulla sulle connessioni, per esempio permette un pacchetto TCP con ACK settato, anche se non c'è stata una connessione TCP.

Il filtraggio stateful di pacchetti tiene traccia di ogni connessione TCP, e determina se pacchietti in entrata e uscita fanno parte di una connessione TCP esistente.

## Application layer gateway (ALG)

???

## Limitazioni di firewall e gateway

- è possibile fare IP spoofing, i router non possono sapere se i dati arrivano realmente dalla sorgente dichiarata.
- se occorre un trattamento speciale per piu di un applicazione, allora ogniuna deve avere il proprio gateway
- il client deve sapere come comunicare con il gateway

## Intrusion Detection System (IDS)

Opera solo sugli header TCP/IP, ed analizza se i pacchetti contengono pattern di attacco.




