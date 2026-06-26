---
title: "Reti wireless e mobilità: Wi-Fi, 4G e 5G"
description: "Elementi delle reti wireless, CDMA, standard 802.11 (CSMA/CA, RTS-CTS), architettura LTE/4G-5G, handover tra base station e gestione della mobilità con routing diretto e indiretto."
type: lecture
---

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

- **Adattamento del rate**: Un AP e dispositivo mobile possono dinaminacamente cambiare la velocità di trasmissione, in base alla qualità del segnale. se il SNR decresce, il BER aumenta, e viceversa.
- **Power Management**: Un host può entrare in modalità di risparmio energetico, segnalando all'AP di non inviare frame fino al prossimo beacon frame.
- **Ad hoc mode**: Gli host possono comunicare direttamente tra loro senza AP, designando un host come _coordinator_ che si occupa di gestire la rete.

# Reti 4G e 5G

![[Pasted image 20241104174739.png]]

- **Device mobile (UE - User Equipment)**: smartphone, tablet, laptop, hanno una SIM che contiene un codice a 64bit chiamato IMSI (International Mobile Subscriber Identity)
- **Base station (eNode-B)**: è il "confine" della rete del gestore telefonico. Ha il compito di gestire la comunicazione con i dispositivi mobili presenti nel suo raggio di copertura. Comunica con altre base station per ottimizzare l'uso delle frequenze.
- **Home Subscriber Service (HSS)**: contiene le informazioni degli utenti, come il loro IMSI, contratto, numero di telefono, ecc. Interagisce con il MME per autenticare l'utente.
- **Serving Gateway (SGW) e PDN Gateway (PGW)**: Sono nel cammino tra le base station e l'internet pubblico, il SGW è il punto di accesso alla rete, il PGW è il punto di accesso alla rete pubblica. Gli eNode-B comunicano con il SGW, e il SGW con il PGW.
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

Come nel wifi e bluetooth, il mobile LTE può mettere la radio in "sleep" mode per consumare meno batteria.
In modalità light sleep il mobile device si sveglia ogni 100ms di inattività per controllare se ci sono dati da ricevere.
In modalità deep sleep, il mobile device si sveglia ogni 5-10sec di inattività, durante questo periodo può cambiare base station, e quindi necessita di ristabilire la connessione. 

# Mobilità della rete

I device devono poter muoversi tra reti multiple senza perdere la connessione. 
Questo si può implementare in 2 modi:
- **Se ne occupa il routing**: i router comunicano gli indirizzi IP o numero di telefono dei nodi mobili, modificano le tabelle di routing. Le tabelle di routing vengono aggiornate quando un nodo mobile cambia rete. In questo modo non si devono applicare modifiche negli end system, ma non è scalabile.
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

1. la BS corrente (source) seleziona una target BS e invia una richiesta di Handover al BS target
2. il BS target pre alloca le risorse per il mobile device e risponde con HR ACK al BS source con delle info per il mobile device
3. il BS source infoma il mobile device della nuova BS. A questo punto il mobile device può inviare dati alla nuova BS. L'handover appare completo al mobile device.
4. la BS source smette di inviare datagrammi al mobile device, e invece li invia alla nuova BS, che a sua volta li inoltra al mobile device.
5. il BS target informa MME che essa è la nuova BS per il mobile device, allora l'MME informa il SGW di cambiare l'endpoint tunnel verso la nuova BS.
6. il BS target manda un ACK al BS source. A questo punto l'handover è completato, e il BS source può liberare le risorse.
7. i datagrammi del mobile ora viaggiano attraverso il nuovo tunnel dal BS target al SGW
