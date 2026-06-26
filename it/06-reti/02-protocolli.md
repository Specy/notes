---
title: "Protocolli applicativi: HTTP, DNS e CDN"
description: "Architettura client-server e P2P, socket, HTTP (cookies, cache, HTTP/2), DNS, SMTP, CDN e streaming video adattivo."
type: lecture
---

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
- **UDP**
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
