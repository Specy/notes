---
title: "Algoritmi di routing: OSPF, BGP e SDN"
description: "Algoritmi link-state (Dijkstra) e distance-vector (Bellman-Ford), Autonomous System, protocolli IGP/OSPF e BGP inter-AS, SDN con OpenFlow, ICMP."
type: lecture
---

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

Sono protocolli di routing intra-AS, usati per scambiare le routing table tra gateway dell'AS, come per esempio RIP, OSPF, IGRP. 

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
