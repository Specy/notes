---
title: "Internet e architettura di rete"
description: "Struttura di Internet, mezzi trasmissivi, routing con store-and-forward, modello ISO/OSI e tipologie di ritardo dei pacchetti."
type: lecture
---

## Cos'è Internet?

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

<svg viewBox="0 0 640 378" width="100%" style="max-width:640px;display:block;margin:1.5rem auto" role="img" aria-label="FDM e TDM con 4 utenti: in FDM ogni utente ha una banda di frequenza per tutto il tempo, in TDM ogni utente usa tutta la banda a turno in slot di tempo">
<defs><marker id="i20241101192113-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L10,5 L0,9 z" style="fill:currentColor;fill:context-stroke"/></marker></defs>
<!-- legenda -->
<text x="380" y="32" fill="currentColor" font-size="17">Esempio:</text>
<text x="380" y="64" fill="currentColor" font-size="17">4 utenti</text>
<rect x="470" y="49" width="16" height="16" fill="var(--palette-blue)" fill-opacity="0.85" stroke="currentColor" stroke-width="1"/>
<rect x="491" y="49" width="16" height="16" fill="var(--palette-green)" fill-opacity="0.85" stroke="currentColor" stroke-width="1"/>
<rect x="512" y="49" width="16" height="16" fill="var(--palette-orange)" fill-opacity="0.85" stroke="currentColor" stroke-width="1"/>
<rect x="533" y="49" width="16" height="16" fill="var(--palette-purple)" fill-opacity="0.85" stroke="currentColor" stroke-width="1"/>
<!-- FDM: una banda di frequenza per utente -->
<text x="20" y="58" fill="currentColor" font-size="17">FDM</text>
<line x1="180" y1="172" x2="180" y2="76" stroke="currentColor" stroke-width="2" marker-end="url(#i20241101192113-arrow)"/>
<line x1="180" y1="172" x2="540" y2="172" stroke="currentColor" stroke-width="2" marker-end="url(#i20241101192113-arrow)"/>
<rect x="186" y="99" width="330" height="17" fill="var(--palette-blue)" fill-opacity="0.85" stroke="currentColor" stroke-width="1"/>
<line x1="186" y1="107.5" x2="516" y2="107.5" stroke="currentColor" stroke-width="0.8" stroke-dasharray="3 3"/>
<rect x="186" y="116" width="330" height="17" fill="var(--palette-green)" fill-opacity="0.85" stroke="currentColor" stroke-width="1"/>
<line x1="186" y1="124.5" x2="516" y2="124.5" stroke="currentColor" stroke-width="0.8" stroke-dasharray="3 3"/>
<rect x="186" y="133" width="330" height="17" fill="var(--palette-orange)" fill-opacity="0.85" stroke="currentColor" stroke-width="1"/>
<line x1="186" y1="141.5" x2="516" y2="141.5" stroke="currentColor" stroke-width="0.8" stroke-dasharray="3 3"/>
<rect x="186" y="150" width="330" height="17" fill="var(--palette-purple)" fill-opacity="0.85" stroke="currentColor" stroke-width="1"/>
<line x1="186" y1="158.5" x2="516" y2="158.5" stroke="currentColor" stroke-width="0.8" stroke-dasharray="3 3"/>
<text x="170" y="140" fill="currentColor" font-size="16" text-anchor="end">frequenza</text>
<text x="368" y="200" fill="currentColor" font-size="16" text-anchor="middle">tempo</text>
<!-- TDM: tutta la banda a turno, uno slot di tempo per utente -->
<text x="20" y="216" fill="currentColor" font-size="17">TDM</text>
<line x1="180" y1="333" x2="180" y2="237" stroke="currentColor" stroke-width="2" marker-end="url(#i20241101192113-arrow)"/>
<line x1="180" y1="333" x2="540" y2="333" stroke="currentColor" stroke-width="2" marker-end="url(#i20241101192113-arrow)"/>
<rect x="186" y="260" width="16.5" height="67" fill="var(--palette-blue)" fill-opacity="0.85" stroke="currentColor" stroke-width="1"/>
<line x1="194.2" y1="260" x2="194.2" y2="327" stroke="currentColor" stroke-width="0.8" stroke-dasharray="3 3"/>
<rect x="202.5" y="260" width="16.5" height="67" fill="var(--palette-green)" fill-opacity="0.85" stroke="currentColor" stroke-width="1"/>
<line x1="210.8" y1="260" x2="210.8" y2="327" stroke="currentColor" stroke-width="0.8" stroke-dasharray="3 3"/>
<rect x="219" y="260" width="16.5" height="67" fill="var(--palette-orange)" fill-opacity="0.85" stroke="currentColor" stroke-width="1"/>
<line x1="227.2" y1="260" x2="227.2" y2="327" stroke="currentColor" stroke-width="0.8" stroke-dasharray="3 3"/>
<rect x="235.5" y="260" width="16.5" height="67" fill="var(--palette-purple)" fill-opacity="0.85" stroke="currentColor" stroke-width="1"/>
<line x1="243.8" y1="260" x2="243.8" y2="327" stroke="currentColor" stroke-width="0.8" stroke-dasharray="3 3"/>
<rect x="252" y="260" width="16.5" height="67" fill="var(--palette-blue)" fill-opacity="0.85" stroke="currentColor" stroke-width="1"/>
<line x1="260.2" y1="260" x2="260.2" y2="327" stroke="currentColor" stroke-width="0.8" stroke-dasharray="3 3"/>
<rect x="268.5" y="260" width="16.5" height="67" fill="var(--palette-green)" fill-opacity="0.85" stroke="currentColor" stroke-width="1"/>
<line x1="276.8" y1="260" x2="276.8" y2="327" stroke="currentColor" stroke-width="0.8" stroke-dasharray="3 3"/>
<rect x="285" y="260" width="16.5" height="67" fill="var(--palette-orange)" fill-opacity="0.85" stroke="currentColor" stroke-width="1"/>
<line x1="293.2" y1="260" x2="293.2" y2="327" stroke="currentColor" stroke-width="0.8" stroke-dasharray="3 3"/>
<rect x="301.5" y="260" width="16.5" height="67" fill="var(--palette-purple)" fill-opacity="0.85" stroke="currentColor" stroke-width="1"/>
<line x1="309.8" y1="260" x2="309.8" y2="327" stroke="currentColor" stroke-width="0.8" stroke-dasharray="3 3"/>
<rect x="318" y="260" width="16.5" height="67" fill="var(--palette-blue)" fill-opacity="0.85" stroke="currentColor" stroke-width="1"/>
<line x1="326.2" y1="260" x2="326.2" y2="327" stroke="currentColor" stroke-width="0.8" stroke-dasharray="3 3"/>
<rect x="334.5" y="260" width="16.5" height="67" fill="var(--palette-green)" fill-opacity="0.85" stroke="currentColor" stroke-width="1"/>
<line x1="342.8" y1="260" x2="342.8" y2="327" stroke="currentColor" stroke-width="0.8" stroke-dasharray="3 3"/>
<rect x="351" y="260" width="16.5" height="67" fill="var(--palette-orange)" fill-opacity="0.85" stroke="currentColor" stroke-width="1"/>
<line x1="359.2" y1="260" x2="359.2" y2="327" stroke="currentColor" stroke-width="0.8" stroke-dasharray="3 3"/>
<rect x="367.5" y="260" width="16.5" height="67" fill="var(--palette-purple)" fill-opacity="0.85" stroke="currentColor" stroke-width="1"/>
<line x1="375.8" y1="260" x2="375.8" y2="327" stroke="currentColor" stroke-width="0.8" stroke-dasharray="3 3"/>
<rect x="384" y="260" width="16.5" height="67" fill="var(--palette-blue)" fill-opacity="0.85" stroke="currentColor" stroke-width="1"/>
<line x1="392.2" y1="260" x2="392.2" y2="327" stroke="currentColor" stroke-width="0.8" stroke-dasharray="3 3"/>
<rect x="400.5" y="260" width="16.5" height="67" fill="var(--palette-green)" fill-opacity="0.85" stroke="currentColor" stroke-width="1"/>
<line x1="408.8" y1="260" x2="408.8" y2="327" stroke="currentColor" stroke-width="0.8" stroke-dasharray="3 3"/>
<rect x="417" y="260" width="16.5" height="67" fill="var(--palette-orange)" fill-opacity="0.85" stroke="currentColor" stroke-width="1"/>
<line x1="425.2" y1="260" x2="425.2" y2="327" stroke="currentColor" stroke-width="0.8" stroke-dasharray="3 3"/>
<rect x="433.5" y="260" width="16.5" height="67" fill="var(--palette-purple)" fill-opacity="0.85" stroke="currentColor" stroke-width="1"/>
<line x1="441.8" y1="260" x2="441.8" y2="327" stroke="currentColor" stroke-width="0.8" stroke-dasharray="3 3"/>
<rect x="450" y="260" width="16.5" height="67" fill="var(--palette-blue)" fill-opacity="0.85" stroke="currentColor" stroke-width="1"/>
<line x1="458.2" y1="260" x2="458.2" y2="327" stroke="currentColor" stroke-width="0.8" stroke-dasharray="3 3"/>
<rect x="466.5" y="260" width="16.5" height="67" fill="var(--palette-green)" fill-opacity="0.85" stroke="currentColor" stroke-width="1"/>
<line x1="474.8" y1="260" x2="474.8" y2="327" stroke="currentColor" stroke-width="0.8" stroke-dasharray="3 3"/>
<rect x="483" y="260" width="16.5" height="67" fill="var(--palette-orange)" fill-opacity="0.85" stroke="currentColor" stroke-width="1"/>
<line x1="491.2" y1="260" x2="491.2" y2="327" stroke="currentColor" stroke-width="0.8" stroke-dasharray="3 3"/>
<rect x="499.5" y="260" width="16.5" height="67" fill="var(--palette-purple)" fill-opacity="0.85" stroke="currentColor" stroke-width="1"/>
<line x1="507.8" y1="260" x2="507.8" y2="327" stroke="currentColor" stroke-width="0.8" stroke-dasharray="3 3"/>
<text x="170" y="300" fill="currentColor" font-size="16" text-anchor="end">frequenza</text>
<text x="368" y="362" fill="currentColor" font-size="16" text-anchor="middle">tempo</text>
</svg>

- **Frequency division multiplexing**: può essere usato solo in connessioni analogiche, permette di far comunicare più utenti, assegnando ad ogni host una frequenza specifica
- **Time division multiplexing**: può essere usato sia in una connesione analogica che digitale, usa una singola frequenza ma trasmette i messaggi in piccoli segmenti, uno per utente.

## Suddivisione della rete

Il problema è permettere il collegamento di tutti gli ISP che gestiscono la propria rete, a tutti quanti gli altri ISP. 
Naturalmente un collegamento diretto fra tutti gli ISP non è fattibile, per questo motivo ci sono diversi "strati" di ISP, che rendono più facile la connessione fra un ISP agli altri, passando da un ISP più grande intermediario. 

![[Pasted image 20241101192843.png]]

Al centro troviamo un piccolo numero di grandi reti che sono collegati fra di loro (le grandi ISP, anche considerabili come un intera nazione), ai cui i più piccoli ISP si connettono per parlare con il resto dell'internet

## Ritardo dei pacchetti

Un pacchetto può essere perso o ritardare, le cause di ciò sono:

![[Pasted image 20241101193241 figura.png]]

$$
\boxed{d_{\text{nodal}} = d_{\text{proc}} + d_{\text{queue}} + d_{\text{trans}} + d_{\text{prop}}}
$$

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
