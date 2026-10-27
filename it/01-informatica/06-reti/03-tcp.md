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

<svg viewBox="0 0 720 272" width="100%" style="max-width:720px;display:block;margin:1.5rem auto" role="img" aria-label="Interfacce del trasferimento dati affidabile: lato invio con rdt_send() dall'alto e udt_send() verso il canale inaffidabile, lato ricezione con rdt_rcv() dal canale e deliver_data() verso l'alto">
<defs><marker id="i20241102221718-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L10,5 L0,9 z" style="fill:currentColor;fill:context-stroke"/></marker></defs>
<g transform="translate(-125,-105)">
<!-- lato invio -->
<line x1="195" y1="118" x2="425" y2="118" stroke="var(--palette-red)" stroke-width="3"/>
<text x="330" y="146" fill="currentColor" font-size="16" text-anchor="end" font-family="monospace" font-weight="bold">rdt_send()</text>
<line x1="342" y1="124" x2="342" y2="160" stroke="currentColor" stroke-width="2" marker-end="url(#i20241102221718-arrow)"/>
<rect x="355" y="130" width="46" height="22" fill="none" stroke="currentColor" stroke-width="1.5"/>
<text x="378" y="146" fill="currentColor" font-size="14" text-anchor="middle">dati</text>
<path d="M212,165 V158 H430 V246 H420 V165 Z" fill="var(--palette-blue)" stroke="none" stroke-width="0" fill-opacity="0.85"/>
<rect x="205" y="165" width="215" height="88" fill="none" stroke="currentColor" stroke-width="3"/>
<text x="312" y="192" fill="currentColor" font-size="15" text-anchor="middle"><tspan x="312">protocollo di trasf.</tspan><tspan x="312" dy="20">dati affidabile</tspan><tspan x="312" dy="20">(lato invio)</tspan></text>
<text x="162" y="202" fill="var(--palette-blue)" font-size="21" text-anchor="middle"><tspan x="162">lato</tspan><tspan x="162" dy="30">invio</tspan></text>
<text x="300" y="286" fill="currentColor" font-size="16" text-anchor="end" font-family="monospace" font-weight="bold">udt_send()</text>
<line x1="312" y1="258" x2="312" y2="298" stroke="currentColor" stroke-width="2" marker-end="url(#i20241102221718-arrow)" marker-start="url(#i20241102221718-arrow)"/>
<rect x="326" y="262" width="100" height="22" fill="none" stroke="currentColor" stroke-width="1.5"/>
<text x="376" y="278" fill="currentColor" font-size="14" text-anchor="middle">pacchetto</text>
<line x1="190" y1="304" x2="430" y2="304" stroke="var(--palette-red)" stroke-width="3"/>
<!-- lato ricezione -->
<line x1="480" y1="118" x2="710" y2="118" stroke="var(--palette-red)" stroke-width="3"/>
<rect x="488" y="136" width="46" height="22" fill="none" stroke="currentColor" stroke-width="1.5"/>
<text x="511" y="152" fill="currentColor" font-size="14" text-anchor="middle">dati</text>
<line x1="548" y1="162" x2="548" y2="126" stroke="currentColor" stroke-width="2" marker-end="url(#i20241102221718-arrow)"/>
<text x="558" y="158" fill="currentColor" font-size="16" font-family="monospace" font-weight="bold">deliver_data()</text>
<path d="M482,170 V163 H712 V246 H703 V170 Z" fill="var(--palette-green)" stroke="none" stroke-width="0" fill-opacity="0.85"/>
<rect x="475" y="170" width="228" height="83" fill="none" stroke="currentColor" stroke-width="3"/>
<text x="589" y="196" fill="currentColor" font-size="15" text-anchor="middle"><tspan x="589">protocollo di trasf.</tspan><tspan x="589" dy="20">dati affidabile</tspan><tspan x="589" dy="20">(lato ricezione)</tspan></text>
<text x="785" y="202" fill="var(--palette-blue)" font-size="21" text-anchor="middle"><tspan x="785">lato</tspan><tspan x="785" dy="30">ricezione</tspan></text>
<rect x="478" y="262" width="100" height="22" fill="none" stroke="currentColor" stroke-width="1.5"/>
<text x="528" y="278" fill="currentColor" font-size="14" text-anchor="middle">pacchetto</text>
<line x1="605" y1="258" x2="605" y2="298" stroke="currentColor" stroke-width="2" marker-end="url(#i20241102221718-arrow)" marker-start="url(#i20241102221718-arrow)"/>
<text x="618" y="286" fill="currentColor" font-size="16" font-family="monospace" font-weight="bold">rdt_rcv()</text>
<line x1="480" y1="304" x2="705" y2="304" stroke="var(--palette-red)" stroke-width="3"/>
<!-- canale inaffidabile -->
<path d="M352,325 H580 A10,20 0 0 1 580,365 H352 A10,20 0 0 1 352,325 A10,20 0 0 0 352,365" fill="none" stroke="currentColor" stroke-width="2"/>
<text x="468" y="352" fill="currentColor" font-size="17" text-anchor="middle">canale inaffidabile</text>
<path d="M312,345 V308" fill="none" stroke="currentColor" stroke-width="2" marker-end="url(#i20241102221718-arrow)"/>
<path d="M312,345 H338" fill="none" stroke="currentColor" stroke-width="2" marker-end="url(#i20241102221718-arrow)"/>
<path d="M605,345 V308" fill="none" stroke="currentColor" stroke-width="2" marker-end="url(#i20241102221718-arrow)"/>
<path d="M605,345 H592" fill="none" stroke="currentColor" stroke-width="2" marker-end="url(#i20241102221718-arrow)"/>
</g>
</svg>

- `rdt_send()`: chiamata dall'alto, (ad es. dall'applicazione). Trasferisce i dati da consegnare al livello superiore del ricevente
- `deliver_data()`: chiamata da **rdt** per consegnare i dati al livello superiore
- `udt_send()`: chiamata da rdt per trasferire il pacchetto al ricevente tramite il canale inaffidabile
- `rdt_rcv()`: chiamata quando il pacchetto arriva nel lato ricezione del canale

In un ipotesi di implementazione del nostro algoritmo RDT (reliable data transfer) che ha un canale di comunicazione affidabile, il mittente invia i dati al canale di comunicazione e il ricevente legge i messaggi dal canale.

Se il canale sottostante può confondere dei bit (e quindi avere errori), abbiamo bisogno del checksum per sapere se il valore è corretto o meno. 
Utilizziamo gli ACK per confermare che un pacchetto è stato ricevuto senza errori, mentre un NAK per dire che abbiamo ricevuto un pacchetto con errori, permettendo al mittente di rinviare i pacchetti con errori.

<svg viewBox="0 0 720 392" width="100%" style="max-width:720px;display:block;margin:1.5rem auto" role="img" aria-label="Macchine a stati finiti di rdt2.0: il mittente alterna tra attesa di chiamata dall'alto e attesa di ACK o NAK, ritrasmettendo se riceve un NAK; il ricevente invia NAK se il pacchetto è corrotto, altrimenti consegna i dati e invia ACK">
<defs><marker id="i20241102222115-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L10,5 L0,9 z" style="fill:currentColor;fill:context-stroke"/></marker></defs>
<g transform="scale(0.8)">
<!-- mittente -->
<ellipse cx="115" cy="145" rx="50" ry="45" fill="none" stroke="currentColor" stroke-width="1.5"/>
<text x="115" y="130.5" fill="currentColor" font-size="17" text-anchor="middle"><tspan x="115">Attesa di</tspan><tspan x="115" dy="20.4">chiamata</tspan><tspan x="115" dy="20.4">dall'alto</tspan></text>
<ellipse cx="280" cy="145" rx="48" ry="45" fill="none" stroke="currentColor" stroke-width="1.5"/>
<text x="280" y="130.5" fill="currentColor" font-size="17" text-anchor="middle"><tspan x="280">Attesa</tspan><tspan x="280" dy="20.4">di ACK</tspan><tspan x="280" dy="20.4">o NAK</tspan></text>
<line x1="30" y1="85" x2="72" y2="112" stroke="currentColor" stroke-width="2" stroke-dasharray="7 5" marker-end="url(#i20241102222115-arrow)"/>
<path d="M125,101 C160,70 235,70 268,101" fill="none" stroke="currentColor" stroke-width="2" marker-end="url(#i20241102222115-arrow)"/>
<path d="M272,190 C240,226 160,226 118,191" fill="none" stroke="currentColor" stroke-width="2" marker-end="url(#i20241102222115-arrow)"/>
<path d="M318,118 C365,100 365,190 328,165" fill="none" stroke="currentColor" stroke-width="2" marker-end="url(#i20241102222115-arrow)"/>
<text x="108" y="16" fill="currentColor" font-size="18">rdt_send(data)</text>
<line x1="108" y1="24.1" x2="246" y2="24.1" stroke="currentColor" stroke-width="1.5"/>
<text x="108" y="45.5" fill="currentColor" font-size="18"><tspan x="108">sndpkt = make_pkt(data, checksum)</tspan><tspan x="108" dy="22.5">udt_send(sndpkt)</tspan></text>
<text x="446" y="88" fill="currentColor" font-size="18" text-anchor="middle"><tspan x="446">rdt_rcv(rcvpkt) &amp;&amp;</tspan><tspan x="446" dy="22.5">isNAK(rcvpkt)</tspan></text>
<line x1="396" y1="118.6" x2="496" y2="118.6" stroke="currentColor" stroke-width="1.5"/>
<text x="370" y="155" fill="currentColor" font-size="18">udt_send(sndpkt)</text>
<text x="112" y="245" fill="currentColor" font-size="18">rdt_rcv(rcvpkt) &amp;&amp; isACK(rcvpkt)</text>
<line x1="112" y1="253.1" x2="216" y2="253.1" stroke="currentColor" stroke-width="1.5"/>
<text x="160" y="279" fill="currentColor" font-size="18" text-anchor="middle">Λ</text>
<text x="85" y="325" fill="var(--palette-red)" font-size="30">mittente</text>
<!-- ricevente -->
<text x="705" y="52" fill="var(--palette-red)" font-size="30">ricevente</text>
<ellipse cx="730" cy="275" rx="48" ry="50" fill="none" stroke="currentColor" stroke-width="1.5"/>
<text x="730" y="260.6" fill="currentColor" font-size="17" text-anchor="middle"><tspan x="730">Attesa di</tspan><tspan x="730" dy="20.4">chiamata</tspan><tspan x="730" dy="20.4">dal basso</tspan></text>
<line x1="640" y1="225" x2="686" y2="249" stroke="currentColor" stroke-width="2" stroke-dasharray="7 5" marker-end="url(#i20241102222115-arrow)"/>
<path d="M705,231 C690,200 770,200 755,229" fill="none" stroke="currentColor" stroke-width="2" marker-end="url(#i20241102222115-arrow)"/>
<path d="M705,319 C690,350 770,350 755,321" fill="none" stroke="currentColor" stroke-width="2" marker-end="url(#i20241102222115-arrow)"/>
<text x="674" y="132" fill="currentColor" font-size="18"><tspan x="674">rdt_rcv(rcvpkt) &amp;&amp;</tspan><tspan x="674" dy="22.5">  corrupt(rcvpkt)</tspan></text>
<line x1="674" y1="162.6" x2="778" y2="162.6" stroke="currentColor" stroke-width="1.5"/>
<text x="674" y="184" fill="currentColor" font-size="18">udt_send(NAK)</text>
<text x="645" y="377" fill="currentColor" font-size="18"><tspan x="645">rdt_rcv(rcvpkt) &amp;&amp;</tspan><tspan x="645" dy="22.5">  notcorrupt(rcvpkt)</tspan></text>
<line x1="645" y1="407.6" x2="795" y2="407.6" stroke="currentColor" stroke-width="1.5"/>
<text x="645" y="429" fill="currentColor" font-size="18"><tspan x="645">extract(rcvpkt,data)</tspan><tspan x="645" dy="22.5">deliver_data(data)</tspan><tspan x="645" dy="22.5">udt_send(ACK)</tspan></text>
</g>
</svg>

Ma gli ACK e NAK sono essi stessi pacchetti, cosa fare se essi sono danneggiati? Può ritrasmettere un pacchetto inviato aggiungendo un numero di sequenza, cosi da poter scartare eventuali pacchetti duplicati. 

<svg viewBox="0 0 680 418" width="100%" style="max-width:680px;display:block;margin:1.5rem auto" role="img" aria-label="Macchina a stati finiti del mittente rdt2.1: quattro stati, attesa di chiamata 0 dall'alto, attesa di ACK o NAK 0, attesa di chiamata 1 dall'alto, attesa di ACK o NAK 1; ritrasmette se il pacchetto è corrotto o NAK, passa allo stato successivo con un ACK integro">
<defs><marker id="i20241102222329-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L10,5 L0,9 z" style="fill:currentColor;fill:context-stroke"/></marker></defs>
<g transform="translate(-55,-6) scale(0.9)">
<!-- stati -->
<ellipse cx="335" cy="148" rx="46" ry="46" fill="none" stroke="currentColor" stroke-width="1.5"/>
<text x="335" y="134.4" fill="currentColor" font-size="16" text-anchor="middle"><tspan x="335">Attesa di</tspan><tspan x="335" dy="19.2">chiamata 0</tspan><tspan x="335" dy="19.2">dall'alto</tspan></text>
<ellipse cx="530" cy="148" rx="46" ry="46" fill="none" stroke="currentColor" stroke-width="1.5"/>
<text x="530" y="134.4" fill="currentColor" font-size="16" text-anchor="middle"><tspan x="530">Attesa di</tspan><tspan x="530" dy="19.2">ACK o</tspan><tspan x="530" dy="19.2">NAK 0</tspan></text>
<ellipse cx="550" cy="340" rx="46" ry="46" fill="none" stroke="currentColor" stroke-width="1.5"/>
<text x="550" y="326.4" fill="currentColor" font-size="16" text-anchor="middle"><tspan x="550">Attesa di</tspan><tspan x="550" dy="19.2">chiamata 1</tspan><tspan x="550" dy="19.2">dall'alto</tspan></text>
<ellipse cx="318" cy="345" rx="46" ry="46" fill="none" stroke="currentColor" stroke-width="1.5"/>
<text x="318" y="331.4" fill="currentColor" font-size="16" text-anchor="middle"><tspan x="318">Attesa di</tspan><tspan x="318" dy="19.2">ACK o</tspan><tspan x="318" dy="19.2">NAK 1</tspan></text>
<line x1="260" y1="103" x2="296" y2="122" stroke="currentColor" stroke-width="2" stroke-dasharray="7 5" marker-end="url(#i20241102222329-arrow)"/>
<!-- transizioni -->
<path d="M350,105 C390,82 470,82 512,106" fill="none" stroke="currentColor" stroke-width="2" marker-end="url(#i20241102222329-arrow)"/>
<path d="M565,178 C590,220 590,260 572,300" fill="none" stroke="currentColor" stroke-width="2" marker-end="url(#i20241102222329-arrow)"/>
<path d="M515,370 C470,392 400,392 360,362" fill="none" stroke="currentColor" stroke-width="2" marker-end="url(#i20241102222329-arrow)"/>
<path d="M286,311 C280,260 280,230 292,190" fill="none" stroke="currentColor" stroke-width="2" marker-end="url(#i20241102222329-arrow)"/>
<path d="M560,114 C565,80 610,95 576,148" fill="none" stroke="currentColor" stroke-width="2" marker-end="url(#i20241102222329-arrow)"/>
<path d="M280,320 C245,330 250,390 290,382" fill="none" stroke="currentColor" stroke-width="2" marker-end="url(#i20241102222329-arrow)"/>
<!-- etichette: evento / azione -->
<text x="325" y="26" fill="currentColor" font-size="18">rdt_send(data)</text>
<line x1="325" y1="34.1" x2="607" y2="34.1" stroke="currentColor" stroke-width="1.5"/>
<text x="325" y="55.5" fill="currentColor" font-size="18"><tspan x="325">sndpkt = make_pkt(0, data, checksum)</tspan><tspan x="325" dy="22.5">udt_send(sndpkt)</tspan></text>
<text x="602" y="92" fill="currentColor" font-size="18"><tspan x="602">rdt_rcv(rcvpkt) &amp;&amp;</tspan><tspan x="602" dy="22.5">( corrupt(rcvpkt) ||</tspan><tspan x="602" dy="22.5">isNAK(rcvpkt) )</tspan></text>
<line x1="602" y1="145.1" x2="752" y2="145.1" stroke="currentColor" stroke-width="1.5"/>
<text x="602" y="166.5" fill="currentColor" font-size="18">udt_send(sndpkt)</text>
<text x="585" y="218" fill="currentColor" font-size="18"><tspan x="585">rdt_rcv(rcvpkt)</tspan><tspan x="585" dy="22.5">&amp;&amp; notcorrupt(rcvpkt)</tspan><tspan x="585" dy="22.5">&amp;&amp; isACK(rcvpkt)</tspan></text>
<line x1="585" y1="271.1" x2="691" y2="271.1" stroke="currentColor" stroke-width="1.5"/>
<text x="644" y="306" fill="currentColor" font-size="18" text-anchor="middle">Λ</text>
<text x="70" y="202" fill="currentColor" font-size="18"><tspan x="70">rdt_rcv(rcvpkt)</tspan><tspan x="70" dy="22.5">&amp;&amp; notcorrupt(rcvpkt)</tspan><tspan x="70" dy="22.5">&amp;&amp; isACK(rcvpkt)</tspan></text>
<line x1="70" y1="255.1" x2="246" y2="255.1" stroke="currentColor" stroke-width="1.5"/>
<text x="152" y="288" fill="currentColor" font-size="18" text-anchor="middle">Λ</text>
<text x="75" y="364" fill="currentColor" font-size="18"><tspan x="75">rdt_rcv(rcvpkt) &amp;&amp;</tspan><tspan x="75" dy="22.5">( corrupt(rcvpkt) ||</tspan><tspan x="75" dy="22.5">isNAK(rcvpkt) )</tspan></text>
<line x1="75" y1="417.1" x2="237" y2="417.1" stroke="currentColor" stroke-width="1.5"/>
<text x="75" y="438.5" fill="currentColor" font-size="18">udt_send(sndpkt)</text>
<text x="350" y="408" fill="currentColor" font-size="18">rdt_send(data)</text>
<line x1="350" y1="416.1" x2="646" y2="416.1" stroke="currentColor" stroke-width="1.5"/>
<text x="350" y="437.5" fill="currentColor" font-size="18"><tspan x="350">sndpkt = make_pkt(1, data, checksum)</tspan><tspan x="350" dy="22.5">udt_send(sndpkt)</tspan></text>
</g>
</svg>

- **Il mittente** aggiunge un numero di sequenza al pacchetto, valore di 0 e 1 bastano dato che i pacchetti sono inviati con metodo di stop and wait, quindi semplicemente pacchetti con la stessa sequenza rispetto l'ultimo pacchetto sono scartati. 
- **Il ricevente**: controlla se il pacchetto ricevuto è duplicato tramite il numero di sequenza, ed in caso lo scarta. 

Un protocollo non ha bisogno dei NAK, si possono usare semplicemente gli ACK per specificare quali pacchetti sono stati ricevuti correttamente. Il destinatario invia un ACK con il numero di sequenza dell'ultimo pacchetto con l'ACK, che se è duplicato, determina che bisogna rinviare il pacchetto corrente.

Il canale può perdere il pacchetto di ACK dato che viene accordato che gli ACK devono essere ricevuti entro un tempo "ragionevole", il cui se superato può indicare il mancato ricevimento di un ACK, e quindi pensando al pacchetto come perso, verrà inviato un altra volta duplicato.

<svg viewBox="0 0 700 474" width="100%" style="max-width:700px;display:block;margin:1.5rem auto" role="img" aria-label="rdt3.0 in azione: (a) nessuna perdita, pacchetti e ACK si alternano; (b) perdita di pacchetto, pkt1 va perso, scade il timeout e il mittente ritrasmette pkt1">
<defs><marker id="i20241102222916-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L10,5 L0,9 z" style="fill:currentColor;fill:context-stroke"/></marker></defs>
<!-- (a) nessuna perdita -->
<line x1="100" y1="30" x2="100" y2="330" stroke="var(--palette-muted)" stroke-width="1"/>
<line x1="250" y1="30" x2="250" y2="330" stroke="var(--palette-muted)" stroke-width="1"/>
<text x="100" y="18" fill="var(--palette-blue)" font-size="15" text-anchor="middle" font-style="italic" text-decoration="underline">mittente</text>
<text x="250" y="18" fill="var(--palette-green)" font-size="15" text-anchor="middle" font-style="italic" text-decoration="underline">ricevente</text>
<text x="86" y="52" fill="currentColor" font-size="13" text-anchor="end">send pkt0</text>
<line x1="100" y1="48" x2="250" y2="84" stroke="var(--palette-blue)" stroke-width="1.6" marker-end="url(#i20241102222916-arrow)"/>
<text x="175" y="61" fill="var(--palette-blue)" font-size="12" text-anchor="middle">pkt0</text>
<text x="258" y="84" fill="currentColor" font-size="13">rcv pkt0</text>
<text x="258" y="99.6" fill="currentColor" font-size="13">send ack0</text>
<line x1="250" y1="100" x2="100" y2="136" stroke="var(--palette-green)" stroke-width="1.6" marker-end="url(#i20241102222916-arrow)"/>
<text x="175" y="113" fill="var(--palette-green)" font-size="12" text-anchor="middle">ack0</text>
<text x="86" y="132" fill="currentColor" font-size="13" text-anchor="end"><tspan x="86">rcv ack0</tspan><tspan x="86" dy="15.6">send pkt1</tspan></text>
<line x1="100" y1="144" x2="250" y2="180" stroke="var(--palette-blue)" stroke-width="1.6" marker-end="url(#i20241102222916-arrow)"/>
<text x="175" y="157" fill="var(--palette-blue)" font-size="12" text-anchor="middle">pkt1</text>
<text x="258" y="180" fill="currentColor" font-size="13">rcv pkt1</text>
<text x="258" y="195.6" fill="currentColor" font-size="13">send ack1</text>
<line x1="250" y1="196" x2="100" y2="232" stroke="var(--palette-green)" stroke-width="1.6" marker-end="url(#i20241102222916-arrow)"/>
<text x="175" y="209" fill="var(--palette-green)" font-size="12" text-anchor="middle">ack1</text>
<text x="86" y="228" fill="currentColor" font-size="13" text-anchor="end"><tspan x="86">rcv ack1</tspan><tspan x="86" dy="15.6">send pkt0</tspan></text>
<line x1="100" y1="240" x2="250" y2="276" stroke="var(--palette-blue)" stroke-width="1.6" marker-end="url(#i20241102222916-arrow)"/>
<text x="175" y="253" fill="var(--palette-blue)" font-size="12" text-anchor="middle">pkt0</text>
<text x="258" y="276" fill="currentColor" font-size="13">rcv pkt0</text>
<text x="258" y="291.6" fill="currentColor" font-size="13">send ack0</text>
<line x1="250" y1="292" x2="100" y2="328" stroke="var(--palette-green)" stroke-width="1.6" marker-end="url(#i20241102222916-arrow)"/>
<text x="175" y="305" fill="var(--palette-green)" font-size="12" text-anchor="middle">ack0</text>
<text x="175" y="372" fill="currentColor" font-size="14" text-anchor="middle">(a) nessuna perdita</text>
<!-- (b) perdita di pacchetto -->
<line x1="460" y1="30" x2="460" y2="440" stroke="var(--palette-muted)" stroke-width="1"/>
<line x1="610" y1="30" x2="610" y2="440" stroke="var(--palette-muted)" stroke-width="1"/>
<text x="460" y="18" fill="var(--palette-blue)" font-size="15" text-anchor="middle" font-style="italic" text-decoration="underline">mittente</text>
<text x="610" y="18" fill="var(--palette-green)" font-size="15" text-anchor="middle" font-style="italic" text-decoration="underline">ricevente</text>
<text x="446" y="52" fill="currentColor" font-size="13" text-anchor="end">send pkt0</text>
<line x1="460" y1="48" x2="610" y2="84" stroke="var(--palette-blue)" stroke-width="1.6" marker-end="url(#i20241102222916-arrow)"/>
<text x="535" y="61" fill="var(--palette-blue)" font-size="12" text-anchor="middle">pkt0</text>
<text x="618" y="84" fill="currentColor" font-size="13">rcv pkt0</text>
<text x="618" y="99.6" fill="currentColor" font-size="13">send ack0</text>
<line x1="610" y1="100" x2="460" y2="136" stroke="var(--palette-green)" stroke-width="1.6" marker-end="url(#i20241102222916-arrow)"/>
<text x="535" y="113" fill="var(--palette-green)" font-size="12" text-anchor="middle">ack0</text>
<text x="446" y="132" fill="currentColor" font-size="13" text-anchor="end"><tspan x="446">rcv ack0</tspan><tspan x="446" dy="15.6">send pkt1</tspan></text>
<line x1="460" y1="144" x2="542.5" y2="163.8" stroke="var(--palette-blue)" stroke-width="1.6" marker-end="url(#i20241102222916-arrow)"/>
<text x="505" y="149.8" fill="var(--palette-blue)" font-size="12" text-anchor="middle">pkt1</text>
<line x1="541.5" y1="160.8" x2="551.5" y2="170.8" stroke="var(--palette-red)" stroke-width="3"/>
<line x1="541.5" y1="170.8" x2="551.5" y2="160.8" stroke="var(--palette-red)" stroke-width="3"/>
<text x="546.5" y="185.8" fill="var(--palette-red)" font-size="13" text-anchor="middle" font-style="italic">loss</text>
<path d="M448,150 H454 V238 H448" fill="none" stroke="currentColor" stroke-width="2"/>
<g stroke="var(--palette-red)" stroke-width="1.5" fill="none"><circle cx="384" cy="228" r="8"/><path d="M384,223 V228 H388"/></g>
<text x="446" y="232" fill="var(--palette-red)" font-size="13" text-anchor="end" font-style="italic">timeout</text>
<text x="446" y="256" fill="currentColor" font-size="13" text-anchor="end">resend pkt1</text>
<line x1="460" y1="250" x2="610" y2="286" stroke="var(--palette-blue)" stroke-width="1.6" marker-end="url(#i20241102222916-arrow)"/>
<text x="535" y="263" fill="var(--palette-blue)" font-size="12" text-anchor="middle">pkt1</text>
<text x="618" y="286" fill="currentColor" font-size="13">rcv pkt1</text>
<text x="618" y="301.6" fill="currentColor" font-size="13">send ack1</text>
<line x1="610" y1="302" x2="460" y2="338" stroke="var(--palette-green)" stroke-width="1.6" marker-end="url(#i20241102222916-arrow)"/>
<text x="535" y="315" fill="var(--palette-green)" font-size="12" text-anchor="middle">ack1</text>
<text x="446" y="334" fill="currentColor" font-size="13" text-anchor="end"><tspan x="446">rcv ack1</tspan><tspan x="446" dy="15.6">send pkt0</tspan></text>
<line x1="460" y1="346" x2="610" y2="382" stroke="var(--palette-blue)" stroke-width="1.6" marker-end="url(#i20241102222916-arrow)"/>
<text x="535" y="359" fill="var(--palette-blue)" font-size="12" text-anchor="middle">pkt0</text>
<text x="618" y="382" fill="currentColor" font-size="13">rcv pkt0</text>
<text x="618" y="397.6" fill="currentColor" font-size="13">send ack0</text>
<line x1="610" y1="398" x2="460" y2="434" stroke="var(--palette-green)" stroke-width="1.6" marker-end="url(#i20241102222916-arrow)"/>
<text x="535" y="411" fill="var(--palette-green)" font-size="12" text-anchor="middle">ack0</text>
<text x="535" y="468" fill="currentColor" font-size="14" text-anchor="middle">(b) perdita di pacchetto</text>
</svg>

<svg viewBox="0 0 720 522" width="100%" style="max-width:720px;display:block;margin:1.5rem auto" role="img" aria-label="rdt3.0 in azione: (c) perdita di ACK, il mittente ritrasmette pkt1 e il ricevente scarta il duplicato; (d) timeout prematuro per un ACK in ritardo, con pacchetti duplicati rilevati dal ricevente">
<defs><marker id="i20241102222953-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L10,5 L0,9 z" style="fill:currentColor;fill:context-stroke"/></marker></defs>
<!-- (c) perdita di ACK -->
<line x1="100" y1="30" x2="100" y2="464" stroke="var(--palette-muted)" stroke-width="1"/>
<line x1="250" y1="30" x2="250" y2="464" stroke="var(--palette-muted)" stroke-width="1"/>
<text x="100" y="18" fill="var(--palette-blue)" font-size="15" text-anchor="middle" font-style="italic" text-decoration="underline">mittente</text>
<text x="250" y="18" fill="var(--palette-green)" font-size="15" text-anchor="middle" font-style="italic" text-decoration="underline">ricevente</text>
<text x="86" y="52" fill="currentColor" font-size="13" text-anchor="end">send pkt0</text>
<line x1="100" y1="48" x2="250" y2="84" stroke="var(--palette-blue)" stroke-width="1.6" marker-end="url(#i20241102222953-arrow)"/>
<text x="175" y="61" fill="var(--palette-blue)" font-size="12" text-anchor="middle">pkt0</text>
<text x="258" y="84" fill="currentColor" font-size="13">rcv pkt0</text>
<text x="258" y="99.6" fill="currentColor" font-size="13">send ack0</text>
<line x1="250" y1="100" x2="100" y2="136" stroke="var(--palette-green)" stroke-width="1.6" marker-end="url(#i20241102222953-arrow)"/>
<text x="175" y="113" fill="var(--palette-green)" font-size="12" text-anchor="middle">ack0</text>
<text x="86" y="132" fill="currentColor" font-size="13" text-anchor="end"><tspan x="86">rcv ack0</tspan><tspan x="86" dy="15.6">send pkt1</tspan></text>
<line x1="100" y1="144" x2="250" y2="180" stroke="var(--palette-blue)" stroke-width="1.6" marker-end="url(#i20241102222953-arrow)"/>
<text x="175" y="157" fill="var(--palette-blue)" font-size="12" text-anchor="middle">pkt1</text>
<text x="258" y="180" fill="currentColor" font-size="13">rcv pkt1</text>
<text x="258" y="195.6" fill="currentColor" font-size="13">send ack1</text>
<line x1="250" y1="196" x2="167.5" y2="215.8" stroke="var(--palette-green)" stroke-width="1.6" marker-end="url(#i20241102222953-arrow)"/>
<text x="205" y="201.8" fill="var(--palette-green)" font-size="12" text-anchor="middle">ack1</text>
<line x1="158.5" y1="212.8" x2="168.5" y2="222.8" stroke="var(--palette-red)" stroke-width="3"/>
<line x1="158.5" y1="222.8" x2="168.5" y2="212.8" stroke="var(--palette-red)" stroke-width="3"/>
<text x="163.5" y="237.8" fill="var(--palette-red)" font-size="13" text-anchor="middle" font-style="italic">loss</text>
<path d="M88,150 H94 V238 H88" fill="none" stroke="currentColor" stroke-width="2"/>
<g stroke="var(--palette-red)" stroke-width="1.5" fill="none"><circle cx="24" cy="228" r="8"/><path d="M24,223 V228 H28"/></g>
<text x="86" y="232" fill="var(--palette-red)" font-size="13" text-anchor="end" font-style="italic">timeout</text>
<text x="86" y="256" fill="currentColor" font-size="13" text-anchor="end">resend pkt1</text>
<line x1="100" y1="250" x2="250" y2="286" stroke="var(--palette-blue)" stroke-width="1.6" marker-end="url(#i20241102222953-arrow)"/>
<text x="175" y="263" fill="var(--palette-blue)" font-size="12" text-anchor="middle">pkt1</text>
<text x="258" y="286" fill="currentColor" font-size="13">rcv pkt1</text>
<text x="258" y="301.6" fill="currentColor" font-size="11">(detect duplicate)</text>
<text x="258" y="313.6" fill="currentColor" font-size="13">send ack1</text>
<line x1="250" y1="318" x2="100" y2="354" stroke="var(--palette-green)" stroke-width="1.6" marker-end="url(#i20241102222953-arrow)"/>
<text x="175" y="331" fill="var(--palette-green)" font-size="12" text-anchor="middle">ack1</text>
<text x="86" y="350" fill="currentColor" font-size="13" text-anchor="end"><tspan x="86">rcv ack1</tspan><tspan x="86" dy="15.6">send pkt0</tspan></text>
<line x1="100" y1="366" x2="250" y2="402" stroke="var(--palette-blue)" stroke-width="1.6" marker-end="url(#i20241102222953-arrow)"/>
<text x="175" y="379" fill="var(--palette-blue)" font-size="12" text-anchor="middle">pkt0</text>
<text x="258" y="402" fill="currentColor" font-size="13">rcv pkt0</text>
<text x="258" y="417.6" fill="currentColor" font-size="13">send ack0</text>
<line x1="250" y1="418" x2="100" y2="454" stroke="var(--palette-green)" stroke-width="1.6" marker-end="url(#i20241102222953-arrow)"/>
<text x="175" y="431" fill="var(--palette-green)" font-size="12" text-anchor="middle">ack0</text>
<text x="175" y="510" fill="currentColor" font-size="14" text-anchor="middle">(c) perdita di ACK</text>
<!-- (d) timeout prematuro: ack1 arriva dopo il timeout -->
<line x1="470" y1="30" x2="470" y2="490" stroke="var(--palette-muted)" stroke-width="1"/>
<line x1="620" y1="30" x2="620" y2="490" stroke="var(--palette-muted)" stroke-width="1"/>
<text x="470" y="18" fill="var(--palette-blue)" font-size="15" text-anchor="middle" font-style="italic" text-decoration="underline">mittente</text>
<text x="620" y="18" fill="var(--palette-green)" font-size="15" text-anchor="middle" font-style="italic" text-decoration="underline">ricevente</text>
<text x="456" y="52" fill="currentColor" font-size="13" text-anchor="end">send pkt0</text>
<line x1="470" y1="48" x2="620" y2="84" stroke="var(--palette-blue)" stroke-width="1.6" marker-end="url(#i20241102222953-arrow)"/>
<text x="545" y="61" fill="var(--palette-blue)" font-size="12" text-anchor="middle">pkt0</text>
<text x="628" y="84" fill="currentColor" font-size="13">rcv pkt0</text>
<text x="628" y="99.6" fill="currentColor" font-size="13">send ack0</text>
<line x1="620" y1="100" x2="470" y2="136" stroke="var(--palette-green)" stroke-width="1.6" marker-end="url(#i20241102222953-arrow)"/>
<text x="545" y="113" fill="var(--palette-green)" font-size="12" text-anchor="middle">ack0</text>
<text x="456" y="132" fill="currentColor" font-size="13" text-anchor="end"><tspan x="456">rcv ack0</tspan><tspan x="456" dy="15.6">send pkt1</tspan></text>
<line x1="470" y1="144" x2="620" y2="180" stroke="var(--palette-blue)" stroke-width="1.6" marker-end="url(#i20241102222953-arrow)"/>
<text x="545" y="157" fill="var(--palette-blue)" font-size="12" text-anchor="middle">pkt1</text>
<text x="628" y="180" fill="currentColor" font-size="13">rcv pkt1</text>
<text x="628" y="195.6" fill="currentColor" font-size="13">send ack1</text>
<line x1="620" y1="196" x2="470" y2="310" stroke="var(--palette-green)" stroke-width="1.6" marker-end="url(#i20241102222953-arrow)"/>
<text x="575" y="224.2" fill="var(--palette-green)" font-size="12" text-anchor="middle">ack1</text>
<path d="M458,150 H464 V266 H458" fill="none" stroke="currentColor" stroke-width="2"/>
<g stroke="var(--palette-red)" stroke-width="1.5" fill="none"><circle cx="394" cy="256" r="8"/><path d="M394,251 V256 H398"/></g>
<text x="456" y="260" fill="var(--palette-red)" font-size="13" text-anchor="end" font-style="italic">timeout</text>
<text x="456" y="282" fill="currentColor" font-size="13" text-anchor="end">resend pkt1</text>
<line x1="470" y1="278" x2="620" y2="296" stroke="var(--palette-blue)" stroke-width="1.6" marker-end="url(#i20241102222953-arrow)"/>
<text x="563" y="284.2" fill="var(--palette-blue)" font-size="12" text-anchor="middle">pkt1</text>
<text x="628" y="296" fill="currentColor" font-size="13">rcv pkt1</text>
<text x="628" y="311.6" fill="currentColor" font-size="11">(detect duplicate)</text>
<text x="628" y="323.6" fill="currentColor" font-size="13">send ack1</text>
<text x="456" y="310" fill="currentColor" font-size="13" text-anchor="end"><tspan x="456">rcv ack1</tspan><tspan x="456" dy="15.6">send pkt0</tspan></text>
<line x1="470" y1="326" x2="620" y2="366" stroke="var(--palette-blue)" stroke-width="1.6" marker-end="url(#i20241102222953-arrow)"/>
<text x="530" y="338" fill="var(--palette-blue)" font-size="12" text-anchor="middle">pkt0</text>
<line x1="620" y1="328" x2="470" y2="372" stroke="var(--palette-green)" stroke-width="1.6" marker-end="url(#i20241102222953-arrow)"/>
<text x="507.5" y="355" fill="var(--palette-green)" font-size="12" text-anchor="middle">ack1</text>
<text x="628" y="366" fill="currentColor" font-size="13">rcv pkt0</text>
<text x="628" y="381.6" fill="currentColor" font-size="13">send ack0</text>
<line x1="620" y1="384" x2="470" y2="410" stroke="var(--palette-green)" stroke-width="1.6" marker-end="url(#i20241102222953-arrow)"/>
<text x="545" y="392" fill="var(--palette-green)" font-size="12" text-anchor="middle">ack0</text>
<text x="456" y="372" fill="currentColor" font-size="13" text-anchor="end"><tspan x="456">rcv ack1</tspan><tspan x="456" dy="15.6">send pkt0</tspan></text>
<line x1="470" y1="390" x2="620" y2="420" stroke="var(--palette-blue)" stroke-width="1.6" marker-end="url(#i20241102222953-arrow)"/>
<text x="593" y="408.6" fill="var(--palette-blue)" font-size="12" text-anchor="middle">pkt0</text>
<text x="628" y="420" fill="currentColor" font-size="13">rcv pkt0</text>
<text x="628" y="435.6" fill="currentColor" font-size="11">(detect duplicate)</text>
<text x="628" y="447.6" fill="currentColor" font-size="13">send ack0</text>
<line x1="620" y1="450" x2="470" y2="484" stroke="var(--palette-green)" stroke-width="1.6" marker-end="url(#i20241102222953-arrow)"/>
<text x="545" y="462" fill="var(--palette-green)" font-size="12" text-anchor="middle">ack0</text>
<text x="545" y="510" fill="currentColor" font-size="14" text-anchor="middle">(d) timeout prematuro per ACK in ritardo</text>
</svg>

La tecnica stop and wait ha una latenza molto alta dato che si deve aspettare 2 RTT per ogni pacchetto inviato. Per questo si usano protocolli con pipeline, dove il mittente ammette che ci siano più di un pacchetto in transito. Si usano due forme di protocolli con pipeline, **go Back N** e **ripetizione selettiva**

- Go back N: il mittente può avere fino a N pacchetti consecutivi non riscontrati nella pipeline, il ricevente invia solo ACK cumulativi, e quindi non riscontra un pacchetto se c'è un buco (esempio se 5 6 8 sono arrivati, il pacchetto 8 non è riscontrato finchè 7 non arriva). Il mittente fa partire un timer, e se entro quel tempo non sono stati riscontrati tutti i pacchetti, essi vengono rinviati 
- **Ripetizione selettiva**: Il mittente può avere fino ad N pacchetti consecutivi non riscontrati in pipeline ed il ricevente invia un ACK per ogni pacchetto. Il mittente ha un timer per ogni pacchetto non riscontrato, se esso scade, il pacchetto viene rinviato 

# TCP

è un protocollo di comunicazione con garanzia dei dati. 
Ha controllo di congestione e flusso, i dati possono essere inviati sia dal ricevente che dal mittente in maniera full duplex, è orientato alla connessione (tramite handshaking), e il mittente non sovraccarica il destinatario.

<svg viewBox="0 0 520 420" width="100%" style="max-width:520px;display:block;margin:1.5rem auto" role="img" aria-label="Struttura del segmento TCP, larga 32 bit: porte sorgente e destinazione, sequence number, acknowledgement number, head len, not used, flag C E U A P R S F, finestra di ricezione, puntatore dati urgenti, opzioni e dati applicazione di lunghezza variabile">
<defs><marker id="i20241102223857-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L10,5 L0,9 z" style="fill:currentColor;fill:context-stroke"/></marker></defs>
<line x1="223.2" y1="16" x2="60" y2="16" stroke="currentColor" stroke-width="1.2" marker-end="url(#i20241102223857-arrow)"/>
<line x1="296.8" y1="16" x2="460" y2="16" stroke="currentColor" stroke-width="1.2" marker-end="url(#i20241102223857-arrow)"/>
<text x="260" y="21.6" fill="currentColor" font-size="16" text-anchor="middle">32 bit</text>
<rect x="60" y="32" width="200" height="36" fill="none" stroke="currentColor" stroke-width="1.5"/>
<text x="160" y="55.2" fill="currentColor" font-size="15" text-anchor="middle">Nº porta sorgente</text>
<rect x="260" y="32" width="200" height="36" fill="none" stroke="currentColor" stroke-width="1.5"/>
<text x="360" y="55.2" fill="currentColor" font-size="15" text-anchor="middle">Nº porta destinazione</text>
<rect x="60" y="68" width="400" height="36" fill="none" stroke="currentColor" stroke-width="1.5"/>
<text x="260" y="91.2" fill="currentColor" font-size="15" text-anchor="middle">sequence number</text>
<rect x="60" y="104" width="400" height="36" fill="none" stroke="currentColor" stroke-width="1.5"/>
<text x="260" y="127.2" fill="currentColor" font-size="15" text-anchor="middle">acknowledgement number</text>
<rect x="60" y="140" width="37.5" height="36" fill="none" stroke="currentColor" stroke-width="1.5"/>
<text x="78.8" y="155.5" fill="currentColor" font-size="11" text-anchor="middle"><tspan x="78.8">head</tspan><tspan x="78.8" dy="12.6">len</tspan></text>
<rect x="97.5" y="140" width="37.5" height="36" fill="none" stroke="currentColor" stroke-width="1.5"/>
<text x="116.2" y="155.5" fill="currentColor" font-size="11" text-anchor="middle"><tspan x="116.2">not</tspan><tspan x="116.2" dy="12.6">used</tspan></text>
<rect x="135" y="140" width="15.6" height="36" fill="none" stroke="currentColor" stroke-width="1.5"/>
<text x="142.8" y="162.9" fill="currentColor" font-size="14" text-anchor="middle">C</text>
<rect x="150.6" y="140" width="15.6" height="36" fill="none" stroke="currentColor" stroke-width="1.5"/>
<text x="158.4" y="162.9" fill="currentColor" font-size="14" text-anchor="middle">E</text>
<rect x="166.2" y="140" width="15.6" height="36" fill="none" stroke="currentColor" stroke-width="1.5"/>
<text x="174.1" y="162.9" fill="currentColor" font-size="14" text-anchor="middle" fill-opacity="0.45">U</text>
<rect x="181.9" y="140" width="15.6" height="36" fill="none" stroke="currentColor" stroke-width="1.5"/>
<text x="189.7" y="162.9" fill="currentColor" font-size="14" text-anchor="middle">A</text>
<rect x="197.5" y="140" width="15.6" height="36" fill="none" stroke="currentColor" stroke-width="1.5"/>
<text x="205.3" y="162.9" fill="currentColor" font-size="14" text-anchor="middle" fill-opacity="0.45">P</text>
<rect x="213.1" y="140" width="15.6" height="36" fill="none" stroke="currentColor" stroke-width="1.5"/>
<text x="220.9" y="162.9" fill="currentColor" font-size="14" text-anchor="middle">R</text>
<rect x="228.8" y="140" width="15.6" height="36" fill="none" stroke="currentColor" stroke-width="1.5"/>
<text x="236.6" y="162.9" fill="currentColor" font-size="14" text-anchor="middle">S</text>
<rect x="244.4" y="140" width="15.6" height="36" fill="none" stroke="currentColor" stroke-width="1.5"/>
<text x="252.2" y="162.9" fill="currentColor" font-size="14" text-anchor="middle">F</text>
<rect x="260" y="140" width="200" height="36" fill="none" stroke="currentColor" stroke-width="1.5"/>
<text x="360" y="163.2" fill="currentColor" font-size="15" text-anchor="middle">finestra di ricezione</text>
<rect x="60" y="176" width="200" height="36" fill="none" stroke="currentColor" stroke-width="1.5"/>
<rect x="260" y="176" width="200" height="36" fill="none" stroke="currentColor" stroke-width="1.5"/>
<text x="360" y="199.2" fill="currentColor" font-size="15" text-anchor="middle" fill-opacity="0.45">puntatore dati urgenti</text>
<rect x="60" y="212" width="400" height="56" fill="none" stroke="currentColor" stroke-width="1.5"/>
<text x="260" y="245.2" fill="currentColor" font-size="15" text-anchor="middle">opzioni (lunghezza variabile)</text>
<rect x="60" y="268" width="400" height="130" fill="none" stroke="currentColor" stroke-width="1.5"/>
<text x="260" y="321" fill="currentColor" font-size="15" text-anchor="middle"><tspan x="260">dati</tspan><tspan x="260" dy="17.2">applicazione</tspan><tspan x="260" dy="17.2">(lunghezza variabile)</tspan></text>
</svg>

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

<svg viewBox="0 0 720 505" width="100%" style="max-width:720px;display:block;margin:1.5rem auto" role="img" aria-label="Ritrasmissioni TCP: a sinistra scenario con ACK perso, l'ACK=100 va perso e allo scadere del timeout Host A ritrasmette Seq=92; a destra timeout prematuro, Host A ritrasmette Seq=92 prima che arrivino ACK=100 e ACK=120, e SendBase avanza a 100 e poi a 120">
<defs><marker id="i20241102224937-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L10,5 L0,9 z" style="fill:currentColor;fill:context-stroke"/></marker></defs>
<!-- scenario con ACK perso -->
<text x="45" y="18" fill="currentColor" font-size="16" text-anchor="middle">Host A</text>
<g><rect x="25" y="30" width="40" height="28" rx="2" fill="currentColor" fill-opacity="0.15" stroke="currentColor" stroke-width="1.5"/><path d="M40,58 L38,64 L52,64 L50,58" fill="none" stroke="currentColor" stroke-width="1.5"/><rect x="21" y="67" width="40" height="6" fill="none" stroke="currentColor" stroke-width="1.2"/></g>
<line x1="45" y1="82" x2="45" y2="450" stroke="var(--palette-muted)" stroke-width="1"/>
<text x="290" y="18" fill="currentColor" font-size="16" text-anchor="middle">Host B</text>
<g><rect x="270" y="30" width="40" height="28" rx="2" fill="currentColor" fill-opacity="0.15" stroke="currentColor" stroke-width="1.5"/><path d="M285,58 L283,64 L297,64 L295,58" fill="none" stroke="currentColor" stroke-width="1.5"/><rect x="266" y="67" width="40" height="6" fill="none" stroke="currentColor" stroke-width="1.2"/></g>
<line x1="290" y1="82" x2="290" y2="450" stroke="var(--palette-muted)" stroke-width="1"/>
<line x1="25" y1="112" x2="25" y2="290" stroke="currentColor" stroke-width="1.2" marker-end="url(#i20241102224937-arrow)" marker-start="url(#i20241102224937-arrow)"/>
<line x1="20" y1="112" x2="30" y2="112" stroke="currentColor" stroke-width="1.2"/>
<line x1="20" y1="290" x2="30" y2="290" stroke="currentColor" stroke-width="1.2"/>
<text x="21" y="201" fill="currentColor" font-size="14" text-anchor="middle" transform="rotate(-90 21 201.0)">timeout</text>
<line x1="45" y1="112" x2="290" y2="170" stroke="var(--palette-blue)" stroke-width="2" marker-end="url(#i20241102224937-arrow)"/>
<text x="170" y="118" fill="currentColor" font-size="14" text-anchor="middle">Seq=92, 8 byte di dati</text>
<line x1="290" y1="182" x2="143" y2="214.4" stroke="var(--palette-blue)" stroke-width="2" marker-end="url(#i20241102224937-arrow)"/>
<text x="230" y="185" fill="currentColor" font-size="14" text-anchor="middle">ACK=100</text>
<line x1="129" y1="208.4" x2="139" y2="218.4" stroke="var(--palette-red)" stroke-width="3"/>
<line x1="129" y1="218.4" x2="139" y2="208.4" stroke="var(--palette-red)" stroke-width="3"/>
<line x1="45" y1="292" x2="290" y2="343" stroke="var(--palette-blue)" stroke-width="2" marker-end="url(#i20241102224937-arrow)"/>
<text x="170" y="297" fill="currentColor" font-size="14" text-anchor="middle">Seq=92, 8 byte di dati</text>
<line x1="290" y1="350" x2="45" y2="430" stroke="var(--palette-blue)" stroke-width="2" marker-end="url(#i20241102224937-arrow)"/>
<text x="170" y="376" fill="currentColor" font-size="14" text-anchor="middle">ACK=100</text>
<text x="167" y="492" fill="currentColor" font-size="16" text-anchor="middle">scenario con ACK perso</text>
<!-- timeout prematuro -->
<text x="445" y="18" fill="currentColor" font-size="16" text-anchor="middle">Host A</text>
<g><rect x="425" y="30" width="40" height="28" rx="2" fill="currentColor" fill-opacity="0.15" stroke="currentColor" stroke-width="1.5"/><path d="M440,58 L438,64 L452,64 L450,58" fill="none" stroke="currentColor" stroke-width="1.5"/><rect x="421" y="67" width="40" height="6" fill="none" stroke="currentColor" stroke-width="1.2"/></g>
<line x1="445" y1="82" x2="445" y2="450" stroke="var(--palette-muted)" stroke-width="1"/>
<text x="688" y="18" fill="currentColor" font-size="16" text-anchor="middle">Host B</text>
<g><rect x="668" y="30" width="40" height="28" rx="2" fill="currentColor" fill-opacity="0.15" stroke="currentColor" stroke-width="1.5"/><path d="M683,58 L681,64 L695,64 L693,58" fill="none" stroke="currentColor" stroke-width="1.5"/><rect x="664" y="67" width="40" height="6" fill="none" stroke="currentColor" stroke-width="1.2"/></g>
<line x1="688" y1="82" x2="688" y2="450" stroke="var(--palette-muted)" stroke-width="1"/>
<line x1="425" y1="113" x2="425" y2="290" stroke="currentColor" stroke-width="1.2" marker-end="url(#i20241102224937-arrow)" marker-start="url(#i20241102224937-arrow)"/>
<line x1="420" y1="113" x2="430" y2="113" stroke="currentColor" stroke-width="1.2"/>
<line x1="420" y1="290" x2="430" y2="290" stroke="currentColor" stroke-width="1.2"/>
<text x="421" y="201.5" fill="currentColor" font-size="14" text-anchor="middle" transform="rotate(-90 421 201.5)">timeout</text>
<text x="415" y="117" fill="currentColor" font-size="14" text-anchor="end">SendBase=92</text>
<line x1="445" y1="113" x2="688" y2="168" stroke="var(--palette-blue)" stroke-width="2" marker-end="url(#i20241102224937-arrow)"/>
<text x="575" y="120" fill="currentColor" font-size="14" text-anchor="middle">Seq=92, 8 byte di dati</text>
<line x1="445" y1="152" x2="688" y2="208" stroke="var(--palette-blue)" stroke-width="2" marker-end="url(#i20241102224937-arrow)"/>
<text x="536" y="208" fill="currentColor" font-size="14" text-anchor="middle">Seq=100, 20 byte di dati</text>
<line x1="688" y1="180" x2="445" y2="340" stroke="var(--palette-blue)" stroke-width="2" marker-end="url(#i20241102224937-arrow)"/>
<text x="500" y="283" fill="currentColor" font-size="14" text-anchor="middle">ACK=100</text>
<line x1="688" y1="216" x2="445" y2="375" stroke="var(--palette-blue)" stroke-width="2" marker-end="url(#i20241102224937-arrow)"/>
<text x="650" y="273" fill="currentColor" font-size="14" text-anchor="middle">ACK=120</text>
<text x="437" y="344" fill="currentColor" font-size="14" text-anchor="end">SendBase=100</text>
<text x="437" y="379" fill="currentColor" font-size="14" text-anchor="end">SendBase=120</text>
<line x1="445" y1="293" x2="688" y2="358" stroke="var(--palette-blue)" stroke-width="2" marker-end="url(#i20241102224937-arrow)"/>
<text x="640" y="312" fill="currentColor" font-size="14" text-anchor="middle"><tspan x="640">Seq=92, 8</tspan><tspan x="640" dy="17">byte di dati</tspan></text>
<line x1="688" y1="362" x2="445" y2="440" stroke="var(--palette-blue)" stroke-width="2" marker-end="url(#i20241102224937-arrow)"/>
<text x="560" y="390" fill="currentColor" font-size="14" text-anchor="middle">ACK=120</text>
<text x="437" y="446" fill="currentColor" font-size="14" text-anchor="end">SendBase=120</text>
<text x="566" y="492" fill="currentColor" font-size="16" text-anchor="middle">timeout prematuro</text>
</svg>

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

<svg viewBox="0 0 720 340" width="100%" style="max-width:720px;display:block;margin:1.5rem auto" role="img" aria-label="Handshake a tre vie di TCP: il client in LISTEN invia SYN con Seq=x e passa in SYNSENT; il server risponde con SYNACK (Seq=y, ACKnum=x+1) e passa in SYN RCVD; il client invia ACK (ACKnum=y+1) e passa in ESTAB, poi anche il server passa in ESTAB">
<defs><marker id="i20241102225449-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L10,5 L0,9 z" style="fill:currentColor;fill:context-stroke"/></marker></defs>
<g transform="scale(0.8)">
<!-- stati del client e del server -->
<text x="80" y="26" fill="var(--palette-blue)" font-size="18" text-anchor="middle" font-style="italic">stato client</text>
<text x="66" y="64" fill="currentColor" font-size="17" text-anchor="middle">LISTEN</text>
<line x1="66" y1="72" x2="66" y2="115" stroke="currentColor" stroke-width="1.5" marker-end="url(#i20241102225449-arrow)"/>
<text x="66" y="134" fill="currentColor" font-size="17" text-anchor="middle">SYNSENT</text>
<line x1="66" y1="142" x2="66" y2="277" stroke="currentColor" stroke-width="1.5" marker-end="url(#i20241102225449-arrow)"/>
<text x="66" y="296" fill="var(--palette-red)" font-size="17" text-anchor="middle">ESTAB</text>
<text x="810" y="26" fill="var(--palette-blue)" font-size="18" text-anchor="middle" font-style="italic">stato server</text>
<text x="852" y="64" fill="currentColor" font-size="17" text-anchor="middle">LISTEN</text>
<line x1="852" y1="72" x2="852" y2="171" stroke="currentColor" stroke-width="1.5" marker-end="url(#i20241102225449-arrow)"/>
<text x="852" y="190" fill="currentColor" font-size="17" text-anchor="middle">SYN RCVD</text>
<line x1="852" y1="198" x2="852" y2="377" stroke="currentColor" stroke-width="1.5" marker-end="url(#i20241102225449-arrow)"/>
<text x="852" y="396" fill="var(--palette-red)" font-size="17" text-anchor="middle">ESTAB</text>
<!-- client e server -->
<g><rect x="325" y="18" width="40" height="28" rx="2" fill="currentColor" fill-opacity="0.15" stroke="currentColor" stroke-width="1.5"/><path d="M340,46 L338,52 L352,52 L350,46" fill="none" stroke="currentColor" stroke-width="1.5"/><rect x="321" y="55" width="40" height="6" fill="none" stroke="currentColor" stroke-width="1.2"/></g>
<g><rect x="577" y="17" width="26" height="46" rx="2" fill="currentColor" fill-opacity="0.15" stroke="currentColor" stroke-width="1.5"/><line x1="582" y1="26" x2="598" y2="26" stroke="currentColor" stroke-width="1.5"/><line x1="582" y1="33" x2="598" y2="33" stroke="currentColor" stroke-width="1.5"/><line x1="582" y1="40" x2="598" y2="40" stroke="currentColor" stroke-width="1.5"/><circle cx="584" cy="56" r="2" fill="var(--palette-green)"/><circle cx="590" cy="56" r="2" fill="var(--palette-red)"/></g>
<line x1="328" y1="74" x2="328" y2="412" stroke="var(--palette-muted)" stroke-width="1"/>
<line x1="590" y1="74" x2="590" y2="412" stroke="var(--palette-muted)" stroke-width="1"/>
<!-- messaggi -->
<text x="318" y="84" fill="currentColor" font-size="16" text-anchor="end"><tspan x="318">sceglie seq num iniz, x</tspan><tspan x="318" dy="19">invia messaggio TCP SYN</tspan></text>
<line x1="328" y1="92" x2="584" y2="162" stroke="var(--palette-blue)" stroke-width="2.5" marker-end="url(#i20241102225449-arrow)"/>
<text x="470" y="108" fill="currentColor" font-size="17" text-anchor="middle">SYNbit=1, Seq=x</text>
<text x="598" y="154" fill="currentColor" font-size="16"><tspan x="598">sceglie seq num iniz, y</tspan><tspan x="598" dy="19">invia messaggio TCP</tspan><tspan x="598" dy="19">SYNACK, ack-ando SYN</tspan></text>
<line x1="586" y1="176" x2="332" y2="278" stroke="var(--palette-blue)" stroke-width="2.5" marker-end="url(#i20241102225449-arrow)"/>
<text x="470" y="272" fill="currentColor" font-size="17" text-anchor="middle"><tspan x="470">SYNbit=1, Seq=y</tspan><tspan x="470" dy="20.4">ACKbit=1; ACKnum=x+1</tspan></text>
<text x="318" y="252" fill="currentColor" font-size="16" text-anchor="end"><tspan x="318">riceve SYNACK(x)</tspan><tspan x="318" dy="19">che indica che il server è vivo;</tspan><tspan x="318" dy="19">invia l'ACK per SYNACK;</tspan><tspan x="318" dy="19">questo segmento può già</tspan><tspan x="318" dy="19">contenere dati client-to-server</tspan></text>
<line x1="328" y1="290" x2="584" y2="360" stroke="var(--palette-blue)" stroke-width="2.5" marker-end="url(#i20241102225449-arrow)"/>
<text x="462" y="375" fill="currentColor" font-size="17" text-anchor="middle">ACKbit=1, ACKnum=y+1</text>
<text x="598" y="360" fill="currentColor" font-size="16"><tspan x="598">riceve ACK(y) che</tspan><tspan x="598" dy="19">indica che il client è vivo</tspan></text>
</g>
</svg>

Mentre per terminare una connessione, inviano un pacchetto TCP con flag FIN ad 1, ed una volta ricevuto un ACK, la connessione può essere considerata terminata

<svg viewBox="0 0 716 392" width="100%" style="max-width:716px;display:block;margin:1.5rem auto" role="img" aria-label="Chiusura di una connessione TCP: il client invia FIN (seq=x) e passa in FIN_WAIT_1, il server risponde con ACK (ACKnum=x+1) e passa in CLOSE_WAIT, il client in FIN_WAIT_2; il server invia FIN (seq=y) e passa in LAST_ACK, il client risponde con ACK (ACKnum=y+1), resta in TIME_WAIT per 2 volte il tempo massimo di vita di un segmento e poi passa in CLOSED">
<defs><marker id="i20241102225634-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L10,5 L0,9 z" style="fill:currentColor;fill:context-stroke"/></marker></defs>
<g transform="scale(0.78)">
<!-- stati del client e del server -->
<text x="128" y="28" fill="var(--palette-blue)" font-size="19" text-anchor="middle" font-style="italic">stato client</text>
<text x="120" y="70" fill="currentColor" font-size="18" text-anchor="middle">ESTAB</text>
<line x1="120" y1="78" x2="120" y2="116" stroke="currentColor" stroke-width="1.5" marker-end="url(#i20241102225634-arrow)"/>
<text x="120" y="136" fill="currentColor" font-size="18" text-anchor="middle">FIN_WAIT_1</text>
<line x1="120" y1="144" x2="120" y2="202" stroke="currentColor" stroke-width="1.5" marker-end="url(#i20241102225634-arrow)"/>
<text x="120" y="222" fill="currentColor" font-size="18" text-anchor="middle">FIN_WAIT_2</text>
<line x1="120" y1="230" x2="120" y2="310" stroke="currentColor" stroke-width="1.5" marker-end="url(#i20241102225634-arrow)"/>
<text x="120" y="330" fill="currentColor" font-size="18" text-anchor="middle">TIME_WAIT</text>
<line x1="120" y1="338" x2="120" y2="474" stroke="currentColor" stroke-width="1.5" marker-end="url(#i20241102225634-arrow)"/>
<text x="120" y="494" fill="currentColor" font-size="18" text-anchor="middle">CLOSED</text>
<text x="808" y="30" fill="var(--palette-blue)" font-size="19" text-anchor="middle" font-style="italic">stato server</text>
<text x="826" y="72" fill="currentColor" font-size="18" text-anchor="middle">ESTAB</text>
<line x1="826" y1="80" x2="826" y2="146" stroke="currentColor" stroke-width="1.5" marker-end="url(#i20241102225634-arrow)"/>
<text x="826" y="166" fill="currentColor" font-size="18" text-anchor="middle">CLOSE_WAIT</text>
<line x1="826" y1="174" x2="826" y2="262" stroke="currentColor" stroke-width="1.5" marker-end="url(#i20241102225634-arrow)"/>
<text x="826" y="282" fill="currentColor" font-size="18" text-anchor="middle">LAST_ACK</text>
<line x1="826" y1="290" x2="826" y2="390" stroke="currentColor" stroke-width="1.5" marker-end="url(#i20241102225634-arrow)"/>
<text x="826" y="410" fill="currentColor" font-size="18" text-anchor="middle">CLOSED</text>
<!-- client e server -->
<g><rect x="342" y="22" width="40" height="28" rx="2" fill="currentColor" fill-opacity="0.15" stroke="currentColor" stroke-width="1.5"/><path d="M357,50 L355,56 L369,56 L367,50" fill="none" stroke="currentColor" stroke-width="1.5"/><rect x="338" y="59" width="40" height="6" fill="none" stroke="currentColor" stroke-width="1.2"/></g>
<g><rect x="597" y="19" width="26" height="46" rx="2" fill="currentColor" fill-opacity="0.15" stroke="currentColor" stroke-width="1.5"/><line x1="602" y1="28" x2="618" y2="28" stroke="currentColor" stroke-width="1.5"/><line x1="602" y1="35" x2="618" y2="35" stroke="currentColor" stroke-width="1.5"/><line x1="602" y1="42" x2="618" y2="42" stroke="currentColor" stroke-width="1.5"/><circle cx="604" cy="58" r="2" fill="var(--palette-green)"/><circle cx="610" cy="58" r="2" fill="var(--palette-red)"/></g>
<line x1="350" y1="80" x2="350" y2="480" stroke="var(--palette-muted)" stroke-width="1"/>
<line x1="610" y1="80" x2="610" y2="430" stroke="var(--palette-muted)" stroke-width="1"/>
<!-- messaggi -->
<text x="343" y="102" fill="currentColor" font-size="15" text-anchor="end" font-family="monospace">clientSocket.close()</text>
<text x="283" y="136" fill="currentColor" font-size="16" text-anchor="middle"><tspan x="283">non può più</tspan><tspan x="283" dy="19">inviare ma può</tspan><tspan x="283" dy="19">ricevere dati</tspan></text>
<line x1="352" y1="106" x2="606" y2="164" stroke="var(--palette-blue)" stroke-width="2.5" marker-end="url(#i20241102225634-arrow)"/>
<text x="480" y="116" fill="currentColor" font-size="17" text-anchor="middle">FINbit=1, seq=x</text>
<line x1="606" y1="176" x2="354" y2="230" stroke="var(--palette-blue)" stroke-width="2.5" marker-end="url(#i20241102225634-arrow)"/>
<text x="480" y="182" fill="currentColor" font-size="17" text-anchor="middle">ACKbit=1; ACKnum=x+1</text>
<text x="266" y="220" fill="currentColor" font-size="16" text-anchor="middle"><tspan x="266">attende la chiusura</tspan><tspan x="266" dy="19">del server</tspan></text>
<text x="622" y="208" fill="currentColor" font-size="16"><tspan x="622">può ancora</tspan><tspan x="622" dy="19">inviare dati</tspan></text>
<line x1="606" y1="268" x2="354" y2="318" stroke="var(--palette-blue)" stroke-width="2.5" marker-end="url(#i20241102225634-arrow)"/>
<text x="480" y="324" fill="currentColor" font-size="17" text-anchor="middle">FINbit=1, seq=y</text>
<text x="622" y="324" fill="currentColor" font-size="16"><tspan x="622">non può più</tspan><tspan x="622" dy="19">inviare dati</tspan></text>
<line x1="354" y1="334" x2="608" y2="390" stroke="var(--palette-blue)" stroke-width="2.5" marker-end="url(#i20241102225634-arrow)"/>
<text x="480" y="399" fill="currentColor" font-size="17" text-anchor="middle">ACKbit=1; ACKnum=y+1</text>
<!-- attesa in TIME_WAIT -->
<path d="M282,326 H300 M291,326 V362 M291,438 V494 M282,494 H300" fill="none" stroke="currentColor" stroke-width="1.5"/>
<text x="291" y="384" fill="currentColor" font-size="16" text-anchor="middle"><tspan x="291">tempo pari a</tspan><tspan x="291" dy="19">2*max tempo</tspan><tspan x="291" dy="19">di vita di un segmento</tspan></text>
</g>
</svg>

### Controllo di congestione in TCP

Per gestire la congestione, si deve trovare un throughput tale da non scartare alcun pacchetto per colpa di buffer pieni. Si usa una tecnica chiamata **AIMD**, **Additive Increase** incrementa il rate di invio di 1 messaggio per RTT finchè non ci sono perdite. Una volta che si trovano perdite, si riduce di metà il rate di invio. 

Questo ha il lato negativo di avere una partenza di connessione lenta, dato che si deve partire da 1 messaggio inviato, per poi crescere fino a trovare il throughput massimo. Per mitigare ciò, anzichè inviare solo un pacchetto per round trip, nella fase iniziale viene raddoppiato il numero di pacchetti inviati per ogni Round trip, cosi da poter trovare più velocemente il valore massimo di throughput della connessione.

In alternativa alla crescita lineare, possiamo usare il metodo Cubic dove ogni volta che si dimezza, si incrementa esponenzialmente all'inizio, per poi crescere più lentamente man mano che ci si avvicina al precedente valore massimo

```plot
x: [0, 5.9]
y: [0, 1.32]
width: 580
height: 270
xlabel: time
ylabel: TCP sending rate
xticks: { 0.7: "$t_0$", 1.7: "$t_1$", 2.7: "$t_2$", 3.7: "$t_3$", 4.7: "$t_4$" }
yticks: { 1: "$W_{max}$" }
items:
  - line: [[0.55, 1], [4.15, 1]]
    dash: true
    width: 1
  - fn: s
    through: [[0.06, 0.01], [0.31, 0.02], [0.43, 0.04], [0.51, 0.1], [0.56, 0.25], [0.59, 0.5], [0.62, 0.8], [0.65, 1]]
    color: muted
    width: 2
  - line: [[0.73, 0.49], [1.68, 1]]
    color: red
    width: 2
  - line: [[1.73, 0.49], [2.68, 1]]
    color: red
    width: 2
  - line: [[2.73, 0.49], [3.68, 1]]
    color: red
    width: 2
  - line: [[3.73, 0.49], [5.29, 1.31]]
    color: red
    width: 2
  - fn: c0
    through: [[0.74, 0.49], [0.82, 0.83], [0.95, 0.91], [1.13, 0.95], [1.44, 0.97], [1.68, 0.98]]
    color: blue
    dash: true
    width: 2
  - fn: c1
    through: [[1.74, 0.49], [1.82, 0.83], [1.95, 0.91], [2.13, 0.95], [2.44, 0.97], [2.68, 0.98]]
    color: blue
    dash: true
    width: 2
  - fn: c2
    through: [[2.74, 0.49], [2.82, 0.83], [2.95, 0.91], [3.13, 0.95], [3.44, 0.97], [3.68, 0.98]]
    color: blue
    dash: true
    width: 2
  - fn: c3
    through: [[3.74, 0.49], [3.84, 0.8], [3.97, 0.91], [4.28, 0.96], [4.7, 0.98], [5.0, 1.0], [5.15, 1.04], [5.38, 1.12], [5.56, 1.21], [5.68, 1.31]]
    color: blue
    dash: true
    width: 2
  - text: TCP Reno
    at: [4.7, 0.78]
    anchor: e
    color: red
  - text: TCP CUBIC
    at: [4.7, 0.63]
    anchor: e
    color: blue
```

 ### Explicit Congestion Notification (ECN)
 TCP spesso implementano un controllo di congestione assistito alla rete, dove 2 bit dell'header IP sono marcati dal router per indicare il livello di congestione. La destinazione, se congestionata, setta i bit ECE nel segmento ACK per notificare della congestione.
 ![[Pasted image 20241102230809.png]]

### QUIC

è un protocollo che usa UDP insieme al controllo degli errori a livello di applicazione per poter inviare pacchetti senza perdite. 
Inoltre ha bisogno di soli 2 RTT per stabilire una connessione sicura, in confronto ai 4 RTT necessari per il TCP.
