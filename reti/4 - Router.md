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