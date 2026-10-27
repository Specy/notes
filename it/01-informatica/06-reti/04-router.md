---
title: "Router, indirizzamento IP e SDN"
description: "Architettura dei router, forwarding e switching fabric, indirizzamento IP con CIDR, DHCP, NAT, IPv6, e introduzione al Software-Defined Networking con OpenFlow."
type: lecture
---

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

<svg viewBox="0 0 520 420" width="100%" style="max-width:520px;display:block;margin:1.5rem auto" role="img" aria-label="Formato del datagramma IPv4, largo 32 bit: ver, head. len, type of service, length; 16-bit identifier, flgs, fragment offset; time to live, upper layer, header checksum; indirizzi IP sorgente e destinazione a 32 bit; campi opzionali; dati">
<defs><marker id="i20241103140238-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L10,5 L0,9 z" style="fill:currentColor;fill:context-stroke"/></marker></defs>
<line x1="218.4" y1="16" x2="60" y2="16" stroke="currentColor" stroke-width="1.2" marker-end="url(#i20241103140238-arrow)"/>
<line x1="301.6" y1="16" x2="460" y2="16" stroke="currentColor" stroke-width="1.2" marker-end="url(#i20241103140238-arrow)"/>
<text x="260" y="21.6" fill="currentColor" font-size="16" text-anchor="middle">32 bits</text>
<rect x="60" y="32" width="50" height="44" fill="none" stroke="currentColor" stroke-width="1.5"/>
<text x="85" y="59.2" fill="currentColor" font-size="15" text-anchor="middle">ver</text>
<rect x="110" y="32" width="50" height="44" fill="none" stroke="currentColor" stroke-width="1.5"/>
<text x="135" y="50.6" fill="currentColor" font-size="15" text-anchor="middle"><tspan x="135">head.</tspan><tspan x="135" dy="17.2">len</tspan></text>
<rect x="160" y="32" width="100" height="44" fill="none" stroke="currentColor" stroke-width="1.5"/>
<text x="210" y="50.6" fill="currentColor" font-size="15" text-anchor="middle"><tspan x="210">type of</tspan><tspan x="210" dy="17.2">service</tspan></text>
<rect x="260" y="32" width="200" height="44" fill="none" stroke="currentColor" stroke-width="1.5"/>
<text x="360" y="59.2" fill="currentColor" font-size="15" text-anchor="middle">length</text>
<rect x="60" y="76" width="200" height="44" fill="none" stroke="currentColor" stroke-width="1.5"/>
<text x="160" y="103.2" fill="currentColor" font-size="15" text-anchor="middle">16-bit identifier</text>
<rect x="260" y="76" width="37.5" height="44" fill="none" stroke="currentColor" stroke-width="1.5"/>
<text x="278.8" y="102.9" fill="currentColor" font-size="14" text-anchor="middle">flgs</text>
<rect x="297.5" y="76" width="162.5" height="44" fill="none" stroke="currentColor" stroke-width="1.5"/>
<text x="378.8" y="94.6" fill="currentColor" font-size="15" text-anchor="middle"><tspan x="378.8">fragment</tspan><tspan x="378.8" dy="17.2">offset</tspan></text>
<rect x="60" y="120" width="100" height="44" fill="none" stroke="currentColor" stroke-width="1.5"/>
<text x="110" y="138.6" fill="currentColor" font-size="15" text-anchor="middle"><tspan x="110">time to</tspan><tspan x="110" dy="17.2">live</tspan></text>
<rect x="160" y="120" width="100" height="44" fill="none" stroke="currentColor" stroke-width="1.5"/>
<text x="210" y="138.6" fill="currentColor" font-size="15" text-anchor="middle"><tspan x="210">upper</tspan><tspan x="210" dy="17.2">layer</tspan></text>
<rect x="260" y="120" width="200" height="44" fill="none" stroke="currentColor" stroke-width="1.5"/>
<text x="360" y="138.6" fill="currentColor" font-size="15" text-anchor="middle"><tspan x="360">header</tspan><tspan x="360" dy="17.2">checksum</tspan></text>
<rect x="60" y="164" width="400" height="40" fill="none" stroke="currentColor" stroke-width="1.5"/>
<text x="260" y="189.2" fill="currentColor" font-size="15" text-anchor="middle">32 bit indirizzo IP sorgente</text>
<rect x="60" y="204" width="400" height="40" fill="none" stroke="currentColor" stroke-width="1.5"/>
<text x="260" y="229.2" fill="currentColor" font-size="15" text-anchor="middle">32 bit indirizzo IP destinazione</text>
<rect x="60" y="244" width="400" height="40" fill="none" stroke="currentColor" stroke-width="1.5"/>
<text x="260" y="269.2" fill="currentColor" font-size="15" text-anchor="middle">campi opzionali</text>
<rect x="60" y="284" width="400" height="124" fill="none" stroke="currentColor" stroke-width="1.5"/>
<text x="260" y="325.4" fill="currentColor" font-size="15" text-anchor="middle"><tspan x="260">dati</tspan><tspan x="260" dy="17.2">(lunghezza variabile,</tspan><tspan x="260" dy="17.2">tipicamente un</tspan><tspan x="260" dy="17.2">segmento TCP o UDP)</tspan></text>
</svg>

- *ver*: numero di versione protocollo IP
- *head. len*: lunghezza header (byte)
- *type of service*: "tipo" di dati
- *length*: lunghezza totale datagramma (byte)
- *16-bit identifier*, *flgs*, *fragment offset*: per frammentazione/riassemblaggio
- *time to live*: massimo numero di salti rimanenti (decrementato in ogni router)
- *upper layer*: protocollo del livello superiore
- *campi opzionali*: es. timestamp, registrazione dei percorsi, elenco dei router

*overhead*
- 20 byte per TCP
- 20 byte per IP
- = 40 byte + overhead del livello di applicazione

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

<svg viewBox="0 0 480 444" width="100%" style="max-width:480px;display:block;margin:1.5rem auto" role="img" aria-label="Scambio DHCP tra il server DHCP 223.1.2.5 e un cliente in arrivo: DHCP discover, offerta DHCP, richiesta DHCP e DHCP ACK, tutti in broadcast">
<defs><marker id="i20241103141707-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L10,5 L0,9 z" style="fill:currentColor;fill:context-stroke"/></marker></defs>
<g transform="scale(0.85) translate(-140,0)">
<!-- server DHCP e cliente -->
<text x="146" y="22" fill="var(--palette-red)" font-size="18">server DHCP : 223.1.2.5</text>
<g><rect x="167" y="35" width="26" height="46" rx="2" fill="currentColor" fill-opacity="0.15" stroke="currentColor" stroke-width="1.5"/><line x1="172" y1="44" x2="188" y2="44" stroke="currentColor" stroke-width="1.5"/><line x1="172" y1="51" x2="188" y2="51" stroke="currentColor" stroke-width="1.5"/><line x1="172" y1="58" x2="188" y2="58" stroke="currentColor" stroke-width="1.5"/><circle cx="174" cy="74" r="2" fill="var(--palette-green)"/><circle cx="180" cy="74" r="2" fill="var(--palette-red)"/></g>
<line x1="180" y1="90" x2="180" y2="495" stroke="var(--palette-muted)" stroke-width="1.2" marker-end="url(#i20241103141707-arrow)"/>
<text x="645" y="22" fill="var(--palette-red)" font-size="20" text-anchor="middle"><tspan x="645">cliente in</tspan><tspan x="645" dy="22">arrivo</tspan></text>
<g><rect x="635" y="58" width="40" height="28" rx="2" fill="currentColor" fill-opacity="0.15" stroke="currentColor" stroke-width="1.5"/><path d="M650,86 L648,92 L662,92 L660,86" fill="none" stroke="currentColor" stroke-width="1.5"/><rect x="631" y="95" width="40" height="6" fill="none" stroke="currentColor" stroke-width="1.2"/></g>
<line x1="632" y1="108" x2="632" y2="510" stroke="var(--palette-muted)" stroke-width="1.2" marker-end="url(#i20241103141707-arrow)"/>
<!-- messaggi (le linee passano dietro ai riquadri) -->
<line x1="625" y1="92" x2="605" y2="94.4" stroke="currentColor" stroke-width="1.5"/>
<line x1="425.3" y1="116" x2="184" y2="145" stroke="currentColor" stroke-width="1.5" marker-end="url(#i20241103141707-arrow)"/>
<rect x="347" y="38" width="258" height="78" fill="none" stroke="currentColor" stroke-width="1"/>
<text x="355" y="30" fill="currentColor" font-size="15" font-weight="bold">DHCP discover</text>
<text x="476" y="72" fill="var(--palette-red)" font-size="19" text-anchor="middle"><tspan x="476">Broadcast: c'è un server</tspan><tspan x="476" dy="23">DHCP ?</tspan></text>
<line x1="184" y1="188" x2="350" y2="208.6" stroke="currentColor" stroke-width="1.5"/>
<line x1="614" y1="241.3" x2="628" y2="243" stroke="currentColor" stroke-width="1.5" marker-end="url(#i20241103141707-arrow)"/>
<rect x="350" y="156" width="264" height="94" fill="none" stroke="currentColor" stroke-width="1"/>
<text x="358" y="148" fill="currentColor" font-size="15" font-weight="bold">offerta DHCP</text>
<text x="482" y="186" fill="var(--palette-red)" font-size="19" text-anchor="middle"><tspan x="482">Broadcast: sono un server</tspan><tspan x="482" dy="23">DHCP! Ecco un indirizzo</tspan><tspan x="482" dy="23">IP che puoi usare</tspan></text>
<line x1="628" y1="313" x2="482" y2="330.8" stroke="currentColor" stroke-width="1.5"/>
<line x1="207" y1="364.2" x2="184" y2="367" stroke="currentColor" stroke-width="1.5" marker-end="url(#i20241103141707-arrow)"/>
<rect x="207" y="276" width="275" height="96" fill="none" stroke="currentColor" stroke-width="1"/>
<text x="215" y="268" fill="currentColor" font-size="15" font-weight="bold">richiesta DHCP</text>
<text x="344.5" y="319" fill="var(--palette-red)" font-size="19" text-anchor="middle"><tspan x="344.5">Broadcast: OK.  Prenderò</tspan><tspan x="344.5" dy="23">quell'indirizzo IP!</tspan></text>
<line x1="184" y1="416" x2="360" y2="437.4" stroke="currentColor" stroke-width="1.5"/>
<line x1="600" y1="466.6" x2="628" y2="470" stroke="currentColor" stroke-width="1.5" marker-end="url(#i20241103141707-arrow)"/>
<rect x="360" y="416" width="240" height="96" fill="none" stroke="currentColor" stroke-width="1"/>
<text x="368" y="408" fill="currentColor" font-size="15" font-weight="bold">DHCP ACK</text>
<text x="480" y="459" fill="var(--palette-red)" font-size="19" text-anchor="middle"><tspan x="480">Broadcast: OK.</tspan><tspan x="480" dy="23">Quell'indirizzo IP è tuo!</tspan></text>
</g>
</svg>

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

<svg viewBox="0 0 520 316" width="100%" style="max-width:520px;display:block;margin:1.5rem auto" role="img" aria-label="Formato del datagramma IPv6, largo 32 bit: ver, pri, flow label; payload len, next hdr, hop limit; source address e destination address a 128 bit; data">
<defs><marker id="i20241103142742-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L10,5 L0,9 z" style="fill:currentColor;fill:context-stroke"/></marker></defs>
<rect x="60" y="8" width="56.2" height="32" fill="none" stroke="currentColor" stroke-width="1.5"/>
<text x="88.1" y="29.2" fill="currentColor" font-size="15" text-anchor="middle">ver</text>
<rect x="116.2" y="8" width="56.2" height="32" fill="none" stroke="currentColor" stroke-width="1.5"/>
<text x="144.4" y="29.2" fill="currentColor" font-size="15" text-anchor="middle">pri</text>
<rect x="172.5" y="8" width="287.5" height="32" fill="none" stroke="currentColor" stroke-width="1.5"/>
<text x="316.2" y="29.2" fill="currentColor" font-size="15" text-anchor="middle">flow label</text>
<rect x="60" y="40" width="192.5" height="32" fill="none" stroke="currentColor" stroke-width="1.5"/>
<text x="156.2" y="61.2" fill="currentColor" font-size="15" text-anchor="middle">payload len</text>
<rect x="252.5" y="40" width="95" height="32" fill="none" stroke="currentColor" stroke-width="1.5"/>
<text x="300" y="61.2" fill="currentColor" font-size="15" text-anchor="middle">next hdr</text>
<rect x="347.5" y="40" width="112.5" height="32" fill="none" stroke="currentColor" stroke-width="1.5"/>
<text x="403.8" y="61.2" fill="currentColor" font-size="15" text-anchor="middle">hop limit</text>
<rect x="60" y="72" width="400" height="58" fill="none" stroke="currentColor" stroke-width="1.5"/>
<text x="260" y="97.6" fill="currentColor" font-size="15" text-anchor="middle"><tspan x="260">source address</tspan><tspan x="260" dy="17.2">(128 bits)</tspan></text>
<rect x="60" y="130" width="400" height="62" fill="none" stroke="currentColor" stroke-width="1.5"/>
<text x="260" y="157.6" fill="currentColor" font-size="15" text-anchor="middle"><tspan x="260">destination address</tspan><tspan x="260" dy="17.2">(128 bits)</tspan></text>
<rect x="60" y="192" width="400" height="96" fill="none" stroke="currentColor" stroke-width="1.5"/>
<text x="260" y="245.2" fill="currentColor" font-size="15" text-anchor="middle">data</text>
<line x1="218.4" y1="306" x2="60" y2="306" stroke="currentColor" stroke-width="1.2" marker-end="url(#i20241103142742-arrow)"/>
<line x1="301.6" y1="306" x2="460" y2="306" stroke="currentColor" stroke-width="1.2" marker-end="url(#i20241103142742-arrow)"/>
<text x="260" y="311.6" fill="currentColor" font-size="16" text-anchor="middle">32 bits</text>
</svg>

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

| Rule | Action | Stats |
| ---- | ------ | ----- |
| Switch Port<br>**Link layer**: VLAN ID, MAC src, MAC dst, Eth type<br>**Network layer**: IP Src, IP Dst, IP Prot<br>**Transport layer**: TCP sport, TCP dport | 1. Inoltra il pacchetto sulla/e porta/e<br>2. Incapsula e inoltra al controller<br>3. Drop del pacchetto<br>4. Invia ai processi di elaborazione<br>5. Modifica campi | Contatori di pacchetti e byte |

Esempi:

**Forwarding basato sulla destinazione:**

| Campo | Valore |
| --- | --- |
| Switch Port | \* |
| MAC src | \* |
| MAC dst | \* |
| Eth type | \* |
| VLAN ID | \* |
| IP Src | \* |
| IP Dst | 51.6.0.8 |
| IP Prot | \* |
| TCP sport | \* |
| TCP dport | \* |
| Action | port6 |

*i datagrammi IP destinati all'indirizzo IP 51.6.0.8 devono essere inoltrati sulla porta di uscita 6 del router*

**Firewall:**

| Campo | Valore |
| --- | --- |
| Switch Port | \* |
| MAC src | \* |
| MAC dst | \* |
| Eth type | \* |
| VLAN ID | \* |
| IP Src | \* |
| IP Dst | \* |
| IP Prot | \* |
| TCP sport | \* |
| TCP dport | 22 |
| Forward | drop |

*non inoltrare (block) tutti i datagrammi destinati alla porta TCP 22*

| Campo | Valore |
| --- | --- |
| Switch Port | \* |
| MAC src | \* |
| MAC dst | \* |
| Eth type | \* |
| VLAN ID | \* |
| IP Src | 128.119.1.1 |
| IP Dst | \* |
| IP Prot | \* |
| TCP sport | \* |
| TCP dport | \* |
| Forward | drop |

*non inoltrare (block) tutti i datagrammi inviati dall'host 128.119.1.1*

