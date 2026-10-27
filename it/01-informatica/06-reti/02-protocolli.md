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

```text
[ metodo ][sp][ URL ][sp][ versione ][cr][lf]       riga di richiesta

[ campo di intestazione ][ ][ value ][cr][lf]       righe di
                  ...                               intestazione
[ campo di intestazione ][ ][ value ][cr][lf]

[cr][lf]

[            corpo dell'entità            ]          corpo
```

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

1) Jane usa il suo user agent per comporre il messaggio da inviare "a" `bob@someschool.edu`
2) l'UA di Jane invia un messaggio al server di posta di Jane; il messaggio è posto nella coda di messaggi
3) il lato client di SMTP apre una connessione TCP con il server di posta di Bob
4) il client SMTP invia il messaggio di Jane sulla connessione TCP
5) il server di posta di Bob pone il messaggio nella casella di posta di Bob
6) Bob invoca il suo user agent per leggere il messaggio

<svg viewBox="0 0 720 205" width="100%" style="max-width:720px;display:block;margin:1.5rem auto" role="img" aria-label="Invio di un messaggio di posta: user agent di Jane, mail server di Jane con la coda dei messaggi, mail server di Bob con le caselle di posta, user agent di Bob; passi numerati da 1 a 6">
<defs><marker id="i20241102125306-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L10,5 L0,9 z" style="fill:currentColor;fill:context-stroke"/></marker></defs>
<!-- Jane e il suo user agent -->
<circle cx="28" cy="74" r="9" fill="none" stroke="currentColor" stroke-width="1.5"/>
<path d="M13,104 Q13,86 28,86 Q43,86 43,104" fill="none" stroke="currentColor" stroke-width="1.5"/>
<text x="28" y="122" fill="currentColor" font-size="14" text-anchor="middle">Jane</text>
<rect x="62" y="62" width="80" height="46" fill="none" stroke="currentColor" stroke-width="1.5"/>
<text x="102" y="81" fill="currentColor" font-size="14" text-anchor="middle"><tspan x="102">user</tspan><tspan x="102" dy="16">agent</tspan></text>
<circle cx="56" cy="50" r="10" fill="none" stroke="var(--palette-blue)" stroke-width="1.5"/>
<text x="56" y="55" fill="currentColor" font-size="14" text-anchor="middle">1</text>
<!-- mail server di Jane: coda (verde) e caselle (arancioni) -->
<rect x="215" y="40" width="120" height="100" fill="none" stroke="currentColor" stroke-width="1.5"/>
<text x="275" y="58" fill="currentColor" font-size="14" text-anchor="middle"><tspan x="275">mail</tspan><tspan x="275" dy="16">server</tspan></text>
<rect x="249" y="88" width="76" height="15" fill="var(--palette-green)" fill-opacity="0.8" stroke="currentColor" stroke-width="1"/>
<line x1="260" y1="91" x2="260" y2="100" stroke="currentColor" stroke-width="1"/>
<line x1="271" y1="91" x2="271" y2="100" stroke="currentColor" stroke-width="1"/>
<line x1="282" y1="91" x2="282" y2="100" stroke="currentColor" stroke-width="1"/>
<line x1="293" y1="91" x2="293" y2="100" stroke="currentColor" stroke-width="1"/>
<line x1="304" y1="91" x2="304" y2="100" stroke="currentColor" stroke-width="1"/>
<line x1="315" y1="91" x2="315" y2="100" stroke="currentColor" stroke-width="1"/>
<rect x="228" y="110" width="14" height="14" fill="var(--palette-orange)" fill-opacity="0.8" stroke="currentColor" stroke-width="1"/>
<rect x="247.5" y="110" width="14" height="14" fill="var(--palette-orange)" fill-opacity="0.8" stroke="currentColor" stroke-width="1"/>
<rect x="267" y="110" width="14" height="14" fill="var(--palette-orange)" fill-opacity="0.8" stroke="currentColor" stroke-width="1"/>
<rect x="286.5" y="110" width="14" height="14" fill="var(--palette-orange)" fill-opacity="0.8" stroke="currentColor" stroke-width="1"/>
<rect x="306" y="110" width="14" height="14" fill="var(--palette-orange)" fill-opacity="0.8" stroke="currentColor" stroke-width="1"/>
<text x="275" y="160" fill="currentColor" font-size="14" text-anchor="middle">mail server di Jane</text>
<circle cx="234" cy="95" r="10" fill="none" stroke="var(--palette-blue)" stroke-width="1.5"/>
<text x="234" y="100" fill="currentColor" font-size="14" text-anchor="middle">3</text>
<!-- mail server di Bob -->
<rect x="420" y="55" width="120" height="100" fill="none" stroke="currentColor" stroke-width="1.5"/>
<text x="480" y="73" fill="currentColor" font-size="14" text-anchor="middle"><tspan x="480">mail</tspan><tspan x="480" dy="16">server</tspan></text>
<rect x="454" y="103" width="76" height="15" fill="var(--palette-green)" fill-opacity="0.8" stroke="currentColor" stroke-width="1"/>
<line x1="465" y1="106" x2="465" y2="115" stroke="currentColor" stroke-width="1"/>
<line x1="476" y1="106" x2="476" y2="115" stroke="currentColor" stroke-width="1"/>
<line x1="487" y1="106" x2="487" y2="115" stroke="currentColor" stroke-width="1"/>
<line x1="498" y1="106" x2="498" y2="115" stroke="currentColor" stroke-width="1"/>
<line x1="509" y1="106" x2="509" y2="115" stroke="currentColor" stroke-width="1"/>
<line x1="520" y1="106" x2="520" y2="115" stroke="currentColor" stroke-width="1"/>
<rect x="433" y="125" width="14" height="14" fill="var(--palette-orange)" fill-opacity="0.8" stroke="currentColor" stroke-width="1"/>
<rect x="452.5" y="125" width="14" height="14" fill="var(--palette-orange)" fill-opacity="0.8" stroke="currentColor" stroke-width="1"/>
<rect x="472" y="125" width="14" height="14" fill="var(--palette-orange)" fill-opacity="0.8" stroke="currentColor" stroke-width="1"/>
<rect x="491.5" y="125" width="14" height="14" fill="var(--palette-orange)" fill-opacity="0.8" stroke="currentColor" stroke-width="1"/>
<rect x="511" y="125" width="14" height="14" fill="var(--palette-orange)" fill-opacity="0.8" stroke="currentColor" stroke-width="1"/>
<text x="480" y="196" fill="currentColor" font-size="14" text-anchor="middle">mail server di Bob</text>
<circle cx="480" cy="168" r="10" fill="none" stroke="var(--palette-blue)" stroke-width="1.5"/>
<text x="480" y="173" fill="currentColor" font-size="14" text-anchor="middle">5</text>
<!-- user agent di Bob e Bob -->
<rect x="600" y="50" width="80" height="46" fill="none" stroke="currentColor" stroke-width="1.5"/>
<text x="640" y="69" fill="currentColor" font-size="14" text-anchor="middle"><tspan x="640">user</tspan><tspan x="640" dy="16">agent</tspan></text>
<circle cx="700" cy="62" r="9" fill="none" stroke="currentColor" stroke-width="1.5"/>
<path d="M685,92 Q685,74 700,74 Q715,74 715,92" fill="none" stroke="currentColor" stroke-width="1.5"/>
<text x="700" y="110" fill="currentColor" font-size="14" text-anchor="middle">Bob</text>
<!-- frecce 2, 4, 6 -->
<line x1="142" y1="96" x2="213" y2="112" stroke="var(--palette-blue)" stroke-width="1.5" marker-end="url(#i20241102125306-arrow)"/>
<circle cx="172" cy="88" r="10" fill="none" stroke="var(--palette-blue)" stroke-width="1.5"/>
<text x="172" y="93" fill="currentColor" font-size="14" text-anchor="middle">2</text>
<line x1="335" y1="112" x2="418" y2="122" stroke="var(--palette-blue)" stroke-width="1.5" marker-end="url(#i20241102125306-arrow)"/>
<circle cx="375" cy="101" r="10" fill="none" stroke="var(--palette-blue)" stroke-width="1.5"/>
<text x="375" y="106" fill="currentColor" font-size="14" text-anchor="middle">4</text>
<line x1="540" y1="120" x2="598" y2="90" stroke="var(--palette-blue)" stroke-width="1.5" marker-end="url(#i20241102125306-arrow)"/>
<circle cx="560" cy="88" r="10" fill="none" stroke="var(--palette-blue)" stroke-width="1.5"/>
<text x="560" y="93" fill="currentColor" font-size="14" text-anchor="middle">6</text>
</svg>

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

**query iterativa:**

- il server contattato risponde con il nome del server da contattare
- “non conosco questo nome, ma chiedi a questo server”

<svg viewBox="0 0 640 412" width="100%" style="max-width:640px;display:block;margin:1.5rem auto" role="img" aria-label="Query DNS iterativa: l'host richiedente chiede al DNS locale (1), che interroga a turno il root server (2, 3), il server TLD (4, 5) e il server autoritativo (6, 7), poi risponde all'host (8)">
<defs><marker id="i20241102130437-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L10,5 L0,9 z" style="fill:currentColor;fill:context-stroke"/></marker></defs>
<g transform="translate(40,0)">
<!-- host e server -->
<g><rect x="20" y="170" width="40" height="28" rx="2" fill="currentColor" fill-opacity="0.15" stroke="currentColor" stroke-width="1.5"/><path d="M35,198 L33,204 L47,204 L45,198" fill="none" stroke="currentColor" stroke-width="1.5"/><rect x="16" y="207" width="40" height="6" fill="none" stroke="currentColor" stroke-width="1.2"/></g>
<g><rect x="207" y="163" width="26" height="46" rx="2" fill="currentColor" fill-opacity="0.15" stroke="currentColor" stroke-width="1.5"/><line x1="212" y1="172" x2="228" y2="172" stroke="currentColor" stroke-width="1.5"/><line x1="212" y1="179" x2="228" y2="179" stroke="currentColor" stroke-width="1.5"/><line x1="212" y1="186" x2="228" y2="186" stroke="currentColor" stroke-width="1.5"/><circle cx="214" cy="202" r="2" fill="var(--palette-green)"/><circle cx="220" cy="202" r="2" fill="var(--palette-red)"/></g>
<g><rect x="317" y="43" width="26" height="46" rx="2" fill="currentColor" fill-opacity="0.15" stroke="currentColor" stroke-width="1.5"/><line x1="322" y1="52" x2="338" y2="52" stroke="currentColor" stroke-width="1.5"/><line x1="322" y1="59" x2="338" y2="59" stroke="currentColor" stroke-width="1.5"/><line x1="322" y1="66" x2="338" y2="66" stroke="currentColor" stroke-width="1.5"/><circle cx="324" cy="82" r="2" fill="var(--palette-green)"/><circle cx="330" cy="82" r="2" fill="var(--palette-red)"/></g>
<g><rect x="397" y="163" width="26" height="46" rx="2" fill="currentColor" fill-opacity="0.15" stroke="currentColor" stroke-width="1.5"/><line x1="402" y1="172" x2="418" y2="172" stroke="currentColor" stroke-width="1.5"/><line x1="402" y1="179" x2="418" y2="179" stroke="currentColor" stroke-width="1.5"/><line x1="402" y1="186" x2="418" y2="186" stroke="currentColor" stroke-width="1.5"/><circle cx="404" cy="202" r="2" fill="var(--palette-green)"/><circle cx="410" cy="202" r="2" fill="var(--palette-red)"/></g>
<g><rect x="397" y="297" width="26" height="46" rx="2" fill="currentColor" fill-opacity="0.15" stroke="currentColor" stroke-width="1.5"/><line x1="402" y1="306" x2="418" y2="306" stroke="currentColor" stroke-width="1.5"/><line x1="402" y1="313" x2="418" y2="313" stroke="currentColor" stroke-width="1.5"/><line x1="402" y1="320" x2="418" y2="320" stroke="currentColor" stroke-width="1.5"/><circle cx="404" cy="336" r="2" fill="var(--palette-green)"/><circle cx="410" cy="336" r="2" fill="var(--palette-red)"/></g>
<g><rect x="500" y="308" width="40" height="28" rx="2" fill="currentColor" fill-opacity="0.15" stroke="currentColor" stroke-width="1.5"/><path d="M515,336 L513,342 L527,342 L525,336" fill="none" stroke="currentColor" stroke-width="1.5"/><rect x="496" y="345" width="40" height="6" fill="none" stroke="currentColor" stroke-width="1.2"/></g>
<text x="40" y="250" fill="currentColor" font-size="15" text-anchor="middle">requesting host at</text>
<text x="40" y="270" fill="var(--palette-blue)" font-size="15" text-anchor="middle" font-style="italic">engineering.nyu.edu</text>
<text x="220" y="250" fill="currentColor" font-size="15" text-anchor="middle">local DNS server</text>
<text x="220" y="270" fill="var(--palette-blue)" font-size="15" text-anchor="middle" font-style="italic">dns.nyu.edu</text>
<text x="330" y="24" fill="currentColor" font-size="15" text-anchor="middle">root DNS server</text>
<text x="410" y="146" fill="currentColor" font-size="15" text-anchor="middle">TLD DNS server</text>
<text x="430" y="380" fill="currentColor" font-size="15" text-anchor="middle">authoritative DNS server</text>
<text x="430" y="400" fill="currentColor" font-size="15" text-anchor="middle" font-weight="bold">dns.cs.umass.edu</text>
<text x="520" y="290" fill="currentColor" font-size="15" text-anchor="middle" font-style="italic">gaia.cs.umass.edu</text>
<!-- messaggi -->
<line x1="80" y1="178" x2="198" y2="178" stroke="var(--palette-red)" stroke-width="2" marker-end="url(#i20241102130437-arrow)"/>
<text x="139" y="168" fill="var(--palette-red)" font-size="16" text-anchor="middle">1</text>
<line x1="198" y1="198" x2="80" y2="198" stroke="var(--palette-red)" stroke-width="2" marker-end="url(#i20241102130437-arrow)"/>
<text x="139" y="220" fill="var(--palette-red)" font-size="16" text-anchor="middle">8</text>
<line x1="226" y1="156" x2="310" y2="72" stroke="var(--palette-red)" stroke-width="2" marker-end="url(#i20241102130437-arrow)"/>
<text x="255" y="106" fill="var(--palette-red)" font-size="16" text-anchor="middle">2</text>
<line x1="318" y1="92" x2="236" y2="172" stroke="var(--palette-red)" stroke-width="2" marker-end="url(#i20241102130437-arrow)"/>
<text x="293" y="133" fill="var(--palette-red)" font-size="16" text-anchor="middle">3</text>
<line x1="240" y1="176" x2="388" y2="176" stroke="var(--palette-red)" stroke-width="2" marker-end="url(#i20241102130437-arrow)"/>
<text x="314" y="166" fill="var(--palette-red)" font-size="16" text-anchor="middle">4</text>
<line x1="388" y1="196" x2="240" y2="196" stroke="var(--palette-red)" stroke-width="2" marker-end="url(#i20241102130437-arrow)"/>
<text x="314" y="218" fill="var(--palette-red)" font-size="16" text-anchor="middle">5</text>
<line x1="258" y1="206" x2="392" y2="314" stroke="var(--palette-red)" stroke-width="2" marker-end="url(#i20241102130437-arrow)"/>
<text x="338" y="248" fill="var(--palette-red)" font-size="16" text-anchor="middle">6</text>
<line x1="384" y1="330" x2="250" y2="212" stroke="var(--palette-red)" stroke-width="2" marker-end="url(#i20241102130437-arrow)"/>
<text x="304" y="294" fill="var(--palette-red)" font-size="16" text-anchor="middle">7</text>
</g>
</svg>

**query ricorsiva:**

- affida il compito di tradurre il nome al server DNS contattato
- grosso carico per gli alti livelli della gerarchia?

<svg viewBox="0 0 640 412" width="100%" style="max-width:640px;display:block;margin:1.5rem auto" role="img" aria-label="Query DNS ricorsiva: l'host chiede al DNS locale (1), che chiede al root server (2), che chiede al server TLD (3), che chiede al server autoritativo (4); le risposte tornano indietro (5, 6, 7, 8)">
<defs><marker id="i20241102130504-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L10,5 L0,9 z" style="fill:currentColor;fill:context-stroke"/></marker></defs>
<g transform="translate(40,0)">
<g><rect x="20" y="170" width="40" height="28" rx="2" fill="currentColor" fill-opacity="0.15" stroke="currentColor" stroke-width="1.5"/><path d="M35,198 L33,204 L47,204 L45,198" fill="none" stroke="currentColor" stroke-width="1.5"/><rect x="16" y="207" width="40" height="6" fill="none" stroke="currentColor" stroke-width="1.2"/></g>
<g><rect x="207" y="163" width="26" height="46" rx="2" fill="currentColor" fill-opacity="0.15" stroke="currentColor" stroke-width="1.5"/><line x1="212" y1="172" x2="228" y2="172" stroke="currentColor" stroke-width="1.5"/><line x1="212" y1="179" x2="228" y2="179" stroke="currentColor" stroke-width="1.5"/><line x1="212" y1="186" x2="228" y2="186" stroke="currentColor" stroke-width="1.5"/><circle cx="214" cy="202" r="2" fill="var(--palette-green)"/><circle cx="220" cy="202" r="2" fill="var(--palette-red)"/></g>
<g><rect x="317" y="37" width="26" height="46" rx="2" fill="currentColor" fill-opacity="0.15" stroke="currentColor" stroke-width="1.5"/><line x1="322" y1="46" x2="338" y2="46" stroke="currentColor" stroke-width="1.5"/><line x1="322" y1="53" x2="338" y2="53" stroke="currentColor" stroke-width="1.5"/><line x1="322" y1="60" x2="338" y2="60" stroke="currentColor" stroke-width="1.5"/><circle cx="324" cy="76" r="2" fill="var(--palette-green)"/><circle cx="330" cy="76" r="2" fill="var(--palette-red)"/></g>
<g><rect x="387" y="167" width="26" height="46" rx="2" fill="currentColor" fill-opacity="0.15" stroke="currentColor" stroke-width="1.5"/><line x1="392" y1="176" x2="408" y2="176" stroke="currentColor" stroke-width="1.5"/><line x1="392" y1="183" x2="408" y2="183" stroke="currentColor" stroke-width="1.5"/><line x1="392" y1="190" x2="408" y2="190" stroke="currentColor" stroke-width="1.5"/><circle cx="394" cy="206" r="2" fill="var(--palette-green)"/><circle cx="400" cy="206" r="2" fill="var(--palette-red)"/></g>
<g><rect x="387" y="303" width="26" height="46" rx="2" fill="currentColor" fill-opacity="0.15" stroke="currentColor" stroke-width="1.5"/><line x1="392" y1="312" x2="408" y2="312" stroke="currentColor" stroke-width="1.5"/><line x1="392" y1="319" x2="408" y2="319" stroke="currentColor" stroke-width="1.5"/><line x1="392" y1="326" x2="408" y2="326" stroke="currentColor" stroke-width="1.5"/><circle cx="394" cy="342" r="2" fill="var(--palette-green)"/><circle cx="400" cy="342" r="2" fill="var(--palette-red)"/></g>
<g><rect x="500" y="314" width="40" height="28" rx="2" fill="currentColor" fill-opacity="0.15" stroke="currentColor" stroke-width="1.5"/><path d="M515,342 L513,348 L527,348 L525,342" fill="none" stroke="currentColor" stroke-width="1.5"/><rect x="496" y="351" width="40" height="6" fill="none" stroke="currentColor" stroke-width="1.2"/></g>
<text x="40" y="250" fill="currentColor" font-size="15" text-anchor="middle">requesting host at</text>
<text x="40" y="270" fill="var(--palette-blue)" font-size="15" text-anchor="middle" font-style="italic">engineering.nyu.edu</text>
<text x="220" y="250" fill="currentColor" font-size="15" text-anchor="middle">local DNS server</text>
<text x="220" y="270" fill="var(--palette-blue)" font-size="15" text-anchor="middle" font-style="italic">dns.nyu.edu</text>
<text x="330" y="20" fill="currentColor" font-size="15" text-anchor="middle">root DNS server</text>
<text x="424" y="182" fill="currentColor" font-size="15">TLD DNS server</text>
<text x="420" y="384" fill="currentColor" font-size="15" text-anchor="middle">authoritative DNS server</text>
<text x="420" y="404" fill="currentColor" font-size="15" text-anchor="middle" font-weight="bold">dns.cs.umass.edu</text>
<text x="520" y="296" fill="currentColor" font-size="15" text-anchor="middle" font-style="italic">gaia.cs.umass.edu</text>
<!-- messaggi -->
<line x1="80" y1="178" x2="198" y2="178" stroke="var(--palette-red)" stroke-width="2" marker-end="url(#i20241102130504-arrow)"/>
<text x="139" y="168" fill="var(--palette-red)" font-size="16" text-anchor="middle">1</text>
<line x1="198" y1="198" x2="80" y2="198" stroke="var(--palette-red)" stroke-width="2" marker-end="url(#i20241102130504-arrow)"/>
<text x="139" y="220" fill="var(--palette-red)" font-size="16" text-anchor="middle">8</text>
<line x1="228" y1="154" x2="308" y2="70" stroke="var(--palette-red)" stroke-width="2" marker-end="url(#i20241102130504-arrow)"/>
<text x="256" y="104" fill="var(--palette-red)" font-size="16" text-anchor="middle">2</text>
<line x1="310" y1="84" x2="240" y2="160" stroke="var(--palette-red)" stroke-width="2" marker-end="url(#i20241102130504-arrow)"/>
<text x="288" y="134" fill="var(--palette-red)" font-size="16" text-anchor="middle">7</text>
<line x1="352" y1="62" x2="394" y2="158" stroke="var(--palette-red)" stroke-width="2" marker-end="url(#i20241102130504-arrow)"/>
<text x="386" y="100" fill="var(--palette-red)" font-size="16" text-anchor="middle">3</text>
<line x1="382" y1="160" x2="342" y2="82" stroke="var(--palette-red)" stroke-width="2" marker-end="url(#i20241102130504-arrow)"/>
<text x="351" y="128" fill="var(--palette-red)" font-size="16" text-anchor="middle">6</text>
<line x1="410" y1="222" x2="410" y2="296" stroke="var(--palette-red)" stroke-width="2" marker-end="url(#i20241102130504-arrow)"/>
<text x="424" y="264" fill="var(--palette-red)" font-size="16" text-anchor="middle">4</text>
<line x1="390" y1="296" x2="390" y2="222" stroke="var(--palette-red)" stroke-width="2" marker-end="url(#i20241102130504-arrow)"/>
<text x="376" y="264" fill="var(--palette-red)" font-size="16" text-anchor="middle">5</text>
</g>
</svg>

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
