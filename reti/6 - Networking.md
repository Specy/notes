# Livello di link

Il data link layer ha la responsonsabilità di trasferire i dati tra due nodi fisicamente adiacenti in una rete. 
I nodi sono host o router, e i link sono i collegamenti tra i nodi (cablati, wireless, lan, etc...). I link comunicano tra loro inviando dei *frame* che incapsulano i datagrammi (operazione di framing)

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

## Protocolli di rotazione

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

In questo modo, il traffico viene isolato tra le VLAN. Un frame da/verso una porta di VLAN1 non può essere inoltrato a una porta di VLAN2.
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
1. l'utente ha bisogno del proprio indirizzo IP, l'indirizzo del router di first-hop e l'indirizzo del server DNS del sito web. **usa DHCP**
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

