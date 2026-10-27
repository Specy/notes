---
title: "Livello di trasporto: UDP, RDT e TCP"
description: "Multiplexing e demultiplexing, protocollo UDP, trasferimento dati affidabile (RDT), protocollo TCP con controllo di flusso, gestione connessione e controllo di congestione AIMD."
type: lecture
---

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

```mermaid
flowchart TB
    subgraph invio["lato invio"]
        S["protocollo di trasf. dati affidabile<br/>(lato invio)"]
    end
    subgraph ricezione["lato ricezione"]
        R["protocollo di trasf. dati affidabile<br/>(lato ricezione)"]
    end
    SU["livello superiore"] -- "rdt_send()<br/>dati" --> S
    S -- "udt_send()<br/>pacchetto" --> C(["canale inaffidabile"])
    C -- "rdt_rcv()<br/>pacchetto" --> R
    R -- "deliver_data()<br/>dati" --> RU["livello superiore"]
```

- `rdt_send()`: chiamata dall'alto, (ad es. dall'applicazione). Trasferisce i dati da consegnare al livello superiore del ricevente
- `deliver_data()`: chiamata da **rdt** per consegnare i dati al livello superiore
- `udt_send()`: chiamata da rdt per trasferire il pacchetto al ricevente tramite il canale inaffidabile
- `rdt_rcv()`: chiamata quando il pacchetto arriva nel lato ricezione del canale

In un ipotesi di implementazione del nostro algoritmo RDT (reliable data transfer) che ha un canale di comunicazione affidabile, il mittente invia i dati al canale di comunicazione e il ricevente legge i messaggi dal canale.

Se il canale sottostante può confondere dei bit (e quindi avere errori), abbiamo bisogno del checksum per sapere se il valore è corretto o meno. 
Utilizziamo gli ACK per confermare che un pacchetto è stato ricevuto senza errori, mentre un NAK per dire che abbiamo ricevuto un pacchetto con errori, permettendo al mittente di rinviare i pacchetti con errori.

**mittente**

```mermaid
stateDiagram-v2
    state "Attesa di chiamata dall'alto" as A
    state "Attesa di ACK o NAK" as B
    [*] --> A
    A --> B: rdt_send(data) /<br/>sndpkt = make_pkt(data, checksum)<br/>udt_send(sndpkt)
    B --> B: rdt_rcv(rcvpkt) &&<br/>isNAK(rcvpkt) /<br/>udt_send(sndpkt)
    B --> A: rdt_rcv(rcvpkt) && isACK(rcvpkt) / Λ
```

**ricevente**

```mermaid
stateDiagram-v2
    direction LR
    state "Attesa di chiamata dal basso" as W
    state chk <<choice>>
    [*] --> W
    W --> chk: rdt_rcv(rcvpkt)
    chk --> W: corrupt(rcvpkt) /<br/>udt_send(NAK)
    chk --> W: notcorrupt(rcvpkt) /<br/>extract(rcvpkt,data)<br/>deliver_data(data)<br/>udt_send(ACK)
```

Ma gli ACK e NAK sono essi stessi pacchetti, cosa fare se essi sono danneggiati? Può ritrasmettere un pacchetto inviato aggiungendo un numero di sequenza, cosi da poter scartare eventuali pacchetti duplicati. 

```mermaid
stateDiagram-v2
    state "Attesa di chiamata 0 dall'alto" as S0
    state "Attesa di ACK o NAK 0" as A0
    state "Attesa di chiamata 1 dall'alto" as S1
    state "Attesa di ACK o NAK 1" as A1
    [*] --> S0
    S0 --> A0: rdt_send(data) /<br/>sndpkt = make_pkt(0, data, checksum)<br/>udt_send(sndpkt)
    A0 --> A0: rdt_rcv(rcvpkt) &&<br/>(corrupt(rcvpkt) ||<br/>isNAK(rcvpkt)) /<br/>udt_send(sndpkt)
    A0 --> S1: rdt_rcv(rcvpkt)<br/>&& notcorrupt(rcvpkt)<br/>&& isACK(rcvpkt) / Λ
    S1 --> A1: rdt_send(data) /<br/>sndpkt = make_pkt(1, data, checksum)<br/>udt_send(sndpkt)
    A1 --> A1: rdt_rcv(rcvpkt) &&<br/>(corrupt(rcvpkt) ||<br/>isNAK(rcvpkt)) /<br/>udt_send(sndpkt)
    A1 --> S0: rdt_rcv(rcvpkt)<br/>&& notcorrupt(rcvpkt)<br/>&& isACK(rcvpkt) / Λ
```

- **Il mittente** aggiunge un numero di sequenza al pacchetto, valore di 0 e 1 bastano dato che i pacchetti sono inviati con metodo di stop and wait, quindi semplicemente pacchetti con la stessa sequenza rispetto l'ultimo pacchetto sono scartati. 
- **Il ricevente**: controlla se il pacchetto ricevuto è duplicato tramite il numero di sequenza, ed in caso lo scarta. 

Un protocollo non ha bisogno dei NAK, si possono usare semplicemente gli ACK per specificare quali pacchetti sono stati ricevuti correttamente. Il destinatario invia un ACK con il numero di sequenza dell'ultimo pacchetto con l'ACK, che se è duplicato, determina che bisogna rinviare il pacchetto corrente.

Il canale può perdere il pacchetto di ACK dato che viene accordato che gli ACK devono essere ricevuti entro un tempo "ragionevole", il cui se superato può indicare il mancato ricevimento di un ACK, e quindi pensando al pacchetto come perso, verrà inviato un altra volta duplicato.

**(a) nessuna perdita**

```mermaid
sequenceDiagram
    participant M as mittente
    participant R as ricevente
    Note over M: send pkt0
    M->>R: pkt0
    Note over R: rcv pkt0<br/>send ack0
    R->>M: ack0
    Note over M: rcv ack0<br/>send pkt1
    M->>R: pkt1
    Note over R: rcv pkt1<br/>send ack1
    R->>M: ack1
    Note over M: rcv ack1<br/>send pkt0
    M->>R: pkt0
    Note over R: rcv pkt0<br/>send ack0
    R->>M: ack0
```

**(b) perdita di pacchetto**

```mermaid
sequenceDiagram
    participant M as mittente
    participant R as ricevente
    Note over M: send pkt0
    M->>R: pkt0
    Note over R: rcv pkt0<br/>send ack0
    R->>M: ack0
    Note over M: rcv ack0<br/>send pkt1
    M-xR: pkt1 (loss)
    Note over M: timeout
    Note over M: resend pkt1
    M->>R: pkt1
    Note over R: rcv pkt1<br/>send ack1
    R->>M: ack1
    Note over M: rcv ack1<br/>send pkt0
    M->>R: pkt0
    Note over R: rcv pkt0<br/>send ack0
    R->>M: ack0
```

**(c) perdita di ACK**

```mermaid
sequenceDiagram
    participant M as mittente
    participant R as ricevente
    Note over M: send pkt0
    M->>R: pkt0
    Note over R: rcv pkt0<br/>send ack0
    R->>M: ack0
    Note over M: rcv ack0<br/>send pkt1
    M->>R: pkt1
    Note over R: rcv pkt1<br/>send ack1
    R-xM: ack1 (loss)
    Note over M: timeout
    Note over M: resend pkt1
    M->>R: pkt1
    Note over R: rcv pkt1<br/>(detect duplicate)<br/>send ack1
    R->>M: ack1
    Note over M: rcv ack1<br/>send pkt0
    M->>R: pkt0
    Note over R: rcv pkt0<br/>send ack0
    R->>M: ack0
```

**(d) timeout prematuro per ACK in ritardo**

```mermaid
sequenceDiagram
    participant M as mittente
    participant R as ricevente
    Note over M: send pkt0
    M->>R: pkt0
    Note over R: rcv pkt0<br/>send ack0
    R->>M: ack0
    Note over M: rcv ack0<br/>send pkt1
    M->>R: pkt1
    Note over R: rcv pkt1<br/>send ack1
    Note over M: timeout
    Note over M: resend pkt1
    M->>R: pkt1
    Note over R: rcv pkt1<br/>(detect duplicate)<br/>send ack1
    R->>M: ack1
    Note over M: rcv ack1<br/>send pkt0
    M->>R: pkt0
    Note over R: rcv pkt0<br/>send ack0
    R->>M: ack1
    Note over M: rcv ack1<br/>send pkt0
    R->>M: ack0
    M->>R: pkt0
    Note over R: rcv pkt0<br/>(detect duplicate)<br/>send ack0
    R->>M: ack0
```

La tecnica stop and wait ha una latenza molto alta dato che si deve aspettare 2 RTT per ogni pacchetto inviato. Per questo si usano protocolli con pipeline, dove il mittente ammette che ci siano più di un pacchetto in transito. Si usano due forme di protocolli con pipeline, **go Back N** e **ripetizione selettiva**

- Go back N: il mittente può avere fino a N pacchetti consecutivi non riscontrati nella pipeline, il ricevente invia solo ACK cumulativi, e quindi non riscontra un pacchetto se c'è un buco (esempio se 5 6 8 sono arrivati, il pacchetto 8 non è riscontrato finchè 7 non arriva). Il mittente fa partire un timer, e se entro quel tempo non sono stati riscontrati tutti i pacchetti, essi vengono rinviati 
- **Ripetizione selettiva**: Il mittente può avere fino ad N pacchetti consecutivi non riscontrati in pipeline ed il ricevente invia un ACK per ogni pacchetto. Il mittente ha un timer per ogni pacchetto non riscontrato, se esso scade, il pacchetto viene rinviato 

# TCP

è un protocollo di comunicazione con garanzia dei dati. 
Ha controllo di congestione e flusso, i dati possono essere inviati sia dal ricevente che dal mittente in maniera full duplex, è orientato alla connessione (tramite handshaking), e il mittente non sovraccarica il destinatario.

```mermaid
packet-beta
    title 32 bit
    0-15: "Nº porta sorgente"
    16-31: "Nº porta destinazione"
    32-63: "sequence number"
    64-95: "acknowledgement number"
    96-99: "head len"
    100-103: "not used"
    104: "C"
    105: "E"
    106: "U"
    107: "A"
    108: "P"
    109: "R"
    110: "S"
    111: "F"
    112-127: "finestra di ricezione"
    128-143: " "
    144-159: "puntatore dati urgenti"
    160-191: "opzioni (lunghezza variabile)"
    192-223: "dati applicazione (lunghezza variabile)"
```

- **numero di riscontro**: numero di sequenza del prossimo byte atteso; A bit: numero di riscontro valido
- **numero di sequenza**: conteggio dei byte nel flusso di dati (non dei segmenti!)
- **lunghezza** (dell'header TCP)
- **C, E**: notifica di congestione
- **opzioni TCP**
- **RST, SYN, FIN**: gestione della connessione
- **controllo di flusso**: numero di byte che il destinatario vuole accettare
- **dati** inviati dall'applicazione nella socket TCP

Il valore del timeout per i pacchetti deve essere di sicuro più alto del RTT, che viene stimato tramite il tempo speso in media dai pacchetti per essere inviati e ricevere ACK. Con un valore troppo piccolo di timeout si andrebbe a ritrasmettere pacchetti inutilmente, mentre un valore troppo alto rallenterebbe la velocità di trasmissione

Il numero di sequenza è il numero del primo byte del segmento del flusso di byte, una volta che un ACK è ricevuto.

**scenario con ACK perso**

```mermaid
sequenceDiagram
    participant A as Host A
    participant B as Host B
    A->>B: Seq=92, 8 byte di dati
    B-xA: ACK=100
    Note over A: timeout
    A->>B: Seq=92, 8 byte di dati
    B->>A: ACK=100
```

**timeout prematuro**

```mermaid
sequenceDiagram
    participant A as Host A
    participant B as Host B
    Note over A: SendBase=92
    A->>B: Seq=92, 8 byte di dati
    A->>B: Seq=100, 20 byte di dati
    Note over A: timeout
    A->>B: Seq=92, 8 byte di dati
    B->>A: ACK=100
    Note over A: SendBase=100
    B->>A: ACK=120
    Note over A: SendBase=120
    B->>A: ACK=120
    Note over A: SendBase=120
```

| evento nel destinatario | azione del ricevente TCP |
|---|---|
| arrivo ordinato di un segmento con numero di sequenza atteso. Tutti i dati fino al numero di sequenza atteso sono già stati riscontrati | ACK ritardato. Attende fino a 500 ms l'arrivo del prossimo segmento. Se il segmento non arriva, invia un ACK |
| arrivo ordinato di un segmento con numero di sequenza atteso. Per un altro segmento è stato inviato l'ACK ma non ancora riscontrato | invia immediatamente un singolo ACK cumulativo, riscontrando entrambi i segmenti ordinati |
| arrivo non ordinato di un segmento con numero di sequenza superiore a quello atteso. Viene rilevato un buco | invia immediatamente un *ACK duplicato*, indicando il numero di sequenza del prossimo byte atteso |
| arrivo di un segmento che colma parzialmente o completamente il buco | invia immediatamente un ACK, ammesso che il segmento cominci all'estremità inferiore del buco |

### Controllo di flusso in TCP

Il destinatario modera il mittente rispetto a quanti pacchetti riesce ad elaborare, in maniera tale da non sovraccaricare il buffer, e permettere a meno pacchetti di essere persi. 
Il destinatario invia al mittente quanto spazio libero del buffer ha, cosi che il mittente limiti la quantità di pacchetti unacked, garantendo che il buffer non vada in overflow.

### Gestione della connessione

Prima di scambiarsi dati, il sender e il receiver effettuano un handshake per accordarsi che entrambi vogliano stabilire la connessione, e condividono vari parametri della connessione, come per esempio la grandezza del buffer del destinatario, etc...
L'handshake è effettuato in 3 roundtrips:

```mermaid
sequenceDiagram
    participant C as client
    participant S as server
    Note over C: stato client: LISTEN
    Note over S: stato server: LISTEN
    Note over C: sceglie seq num iniz, x<br/>invia messaggio TCP SYN
    C->>S: SYNbit=1, Seq=x
    Note over C: SYNSENT
    Note over S: sceglie seq num iniz, y<br/>invia messaggio TCP<br/>SYNACK, ack-ando SYN
    Note over S: SYN RCVD
    S->>C: SYNbit=1, Seq=y<br/>ACKbit=1#59; ACKnum=x+1
    Note over C: riceve SYNACK(x)<br/>che indica che il server è vivo#59;<br/>invia l'ACK per SYNACK#59;<br/>questo segmento può già<br/>contenere dati client-to-server
    Note over C: ESTAB
    C->>S: ACKbit=1, ACKnum=y+1
    Note over S: riceve ACK(y) che<br/>indica che il client è vivo
    Note over S: ESTAB
```

Mentre per terminare una connessione, inviano un pacchetto TCP con flag FIN ad 1, ed una volta ricevuto un ACK, la connessione può essere considerata terminata

```mermaid
sequenceDiagram
    participant C as client
    participant S as server
    Note over C: stato client: ESTAB
    Note over S: stato server: ESTAB
    Note over C: clientSocket.close()
    Note over C: FIN_WAIT_1<br/>non può più inviare<br/>ma può ricevere dati
    C->>S: FINbit=1, seq=x
    Note over S: CLOSE_WAIT
    S->>C: ACKbit=1#59; ACKnum=x+1
    Note over C: FIN_WAIT_2<br/>attende la chiusura del server
    Note over S: può ancora inviare dati
    S->>C: FINbit=1, seq=y
    Note over S: non può più inviare dati
    Note over S: LAST_ACK
    Note over C: TIME_WAIT
    C->>S: ACKbit=1#59; ACKnum=y+1
    Note over S: CLOSED
    Note over C: tempo pari a 2*max tempo<br/>di vita di un segmento
    Note over C: CLOSED
```

### Controllo di congestione in TCP

Per gestire la congestione, si deve trovare un throughput tale da non scartare alcun pacchetto per colpa di buffer pieni. Si usa una tecnica chiamata **AIMD**, **Additive Increase** incrementa il rate di invio di 1 messaggio per RTT finchè non ci sono perdite. Una volta che si trovano perdite, si riduce di metà il rate di invio. 

Questo ha il lato negativo di avere una partenza di connessione lenta, dato che si deve partire da 1 messaggio inviato, per poi crescere fino a trovare il throughput massimo. Per mitigare ciò, anzichè inviare solo un pacchetto per round trip, nella fase iniziale viene raddoppiato il numero di pacchetti inviati per ogni Round trip, cosi da poter trovare più velocemente il valore massimo di throughput della connessione.

In alternativa alla crescita lineare, possiamo usare il metodo Cubic dove ogni volta che si dimezza, si incrementa esponenzialmente all'inizio, per poi crescere più lentamente man mano che ci si avvicina al precedente valore massimo

```plot
x: [-0.7, 4.9]
y: [0, 1.35]
width: 520
height: 280
xlabel: time
ylabel: TCP sending rate
xticks: { 0: "$t_0$", 1: "$t_1$", 2: "$t_2$", 3: "$t_3$", 4: "$t_4$" }
yticks: { 1: "$W_{max}$" }
items:
  - line: [[-0.05, 1], [4.9, 1]]
    dash: true
    color: muted
  - fn: g(x) = exp(8x)
    domain: [-0.6, 0]
    color: muted
    width: 3
  - line: [[0, 0.5], [1, 1]]
    color: red
  - line: [[1, 0.5], [2, 1]]
    color: red
  - line: [[2, 0.5], [3, 1]]
    color: red
  - line: [[3, 0.5], [4.9, 1.45]]
    color: red
  - fn: c0(x) = 1 + 0.5 (x - 1)^3
    domain: [0, 1]
    color: blue
    dash: true
  - fn: c1(x) = 1 + 0.5 (x - 2)^3
    domain: [1, 2]
    color: blue
    dash: true
  - fn: c2(x) = 1 + 0.5 (x - 3)^3
    domain: [2, 3]
    color: blue
    dash: true
  - fn: c3(x) = 1 + 0.5 (x - 4)^3
    domain: [3, 4.9]
    color: blue
    dash: true
  - text: TCP Reno
    at: [3.9, 0.35]
    color: red
  - text: TCP CUBIC
    at: [3.9, 0.22]
    color: blue
```

 ### Explicit Congestion Notification (ECN)
 TCP spesso implementano un controllo di congestione assistito alla rete, dove 2 bit dell'header IP sono marcati dal router per indicare il livello di congestione. La destinazione, se congestionata, setta i bit ECE nel segmento ACK per notificare della congestione.
 ![[Pasted image 20241102230809.png]]

### QUIC

è un protocollo che usa UDP insieme al controllo degli errori a livello di applicazione per poter inviare pacchetti senza perdite. 
Inoltre ha bisogno di soli 2 RTT per stabilire una connessione sicura, in confronto ai 4 RTT necessari per il TCP.
