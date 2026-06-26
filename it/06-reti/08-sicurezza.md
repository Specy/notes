---
title: "Sicurezza nelle reti: crittografia, TLS e IPSec"
description: "Crittografia simmetrica (DES, AES) e a chiave pubblica (RSA), autenticazione, firma digitale, TLS/SSL, VPN, IPSec, WEP/WPA3, sicurezza 4G e firewall/IDS."
type: lecture
---

Nelle reti si considera la sicurezza come:

- *riservatezza*: solo il mittente e destinatario devono capire il contenuto del messaggio.
- *autenticazione*: mittente e destinatario vogliono confermare la propria identità.
- *integrità del messaggio*: mittente e destinatario vogliono essere sicuri che il messaggio non sia stato alterato.
- *accesso e disponibilità*: i servizi devono essere accessibili e disponibili agli utenti

## Membri di una potenziale comunicazione non sicura

![[Pasted image 20241118170900.png]]

Usiamo:
- Alice e bob, come due utenti che comunicano fra di loro. Questi due utenti possono essere una qualsiasi entità che usa l'internet per comunicare, come client/server, dns, IOT, etc...
- Trudy, come il malintenzionato che vuole rompere la sicurezza della comunicazione fra Alice e Bob. Trudy può:
  - **origliare**: intercettare i messaggi
  - **Inserire** messaggi nella connessione
  - **Impersonare** gli indirizzi sorgente dei pacchetti per sembrare Alice o Bob
  - **DoS** impedire l'uso di un servizio da parte degli utenti, come per esempio sovraccaricando le risorse

# Crittografia

![[Pasted image 20241118171728.png]]
- $m$ è il messaggio in chiaro
- $K_A(M)$ è il messaggio cifrato con chiave $K_A$ 
- $m = K_B(K_A(m))$ 

Per poter violare questo schema di cifratura, Trudy dovrebbe provare tutte le possibili chiavi di cifratura tramite brute force, o indovinare la chiave tramite metodi statistici 

## Crittografia a chiave simmetrica 

![[Pasted image 20241118172017.png]]

è uno schema di cifratura molto semplice, sia Bob che Alice condividono la stessa chiave $K_S$.
Questa chiave può essere utilizzata in vari modi in algoritmi di cifratura. 

C'è un problema, come si fa a condividere questa chiave in maniera sicura?

## DES: Data Encryption Standard

é uno standard di cifratura che usa una chiave simmetrica a 56bit per input in chiaro a 64bit. Il DES è stato sconfitto tramite brute force tramite cluster di computer.

Esegue 16 round di cifratura, ognuno dei quali esegue una permutazione e una sostituzione dei bit del messaggio in chiaro tramite una chiave di cifratura.

## AES: Advanced Encryption Standard

é uno standard di cifratura che usa una chiave simmetrica a 128, 192 o 256 bit. L'AES è molto più sicuro del DES, e viene usato in molte applicazioni. è quasi impossible battere AES tramite brute force dato che impiegherebbe troppo tempo.

## Crittografia a chiave pubblica

Torniamo al problema di come condividere la chiave simmetrica in maniera sicura. La crittografia a chiave pubblica risolve questo problema. In questo schema, ogni utente ha due chiavi:
- una chiave pubblica, che può essere condivisa con chiunque, ed è pubblicamente disponibile a tutti
- una chiave privata, che è segreta e conosciuta solo all'utente

![[Pasted image 20241118173155.png]]

Abbiamo bisogno di $K_B^+$ e $K_B^-$ tale che $K_B^+(K_A^-(m)) = m$, e che non sia possibile che tramite la chiave pubblica $K_B^+$ si possa risalire alla chiave privata $K_B^-$

## Aritmetica modulare

$x \mod n$ è il resto della divisione di $x$ per $n$. Se $x = nq + r$, allora $x \mod n = r$, alcune proprietà dell'aritmetica modulare sono:
- $[(a \mod n) + (b \mod n)] \mod n = (a + b) \mod n$
- $[(a \mod n) - (b \mod n)] \mod n = (a - b) \mod n$
- $[(a \mod n) \cdot (b \mod n)] \mod n = (a \cdot b) \mod n$
- $[(a \mod n)^d] \mod n = (a^d) \mod n$

## RSA: Rivest-Shamir-Adleman

Si ha una sequenza di bit come messaggio, rappresentata da un numero intero, allora:
1. Scelgo due numeri primi $p$ e $q$ molto grandi (esempio da 1024 bit)
2. Calcola $n = p \cdot q$ e $z = (p-1)(q-1)$
3. Scegliamo $e$ tale che $1 < e < n$ in maniera che $e$ e $z$ siano coprimi tra loro (cioè non abbiano divisori in comune)
4. Calcoliamo $d$ tale che $d \cdot e \mod z = 1$, cioè che $e \cdot d - 1$ sia divisibile per $z$
5. La chiave pubblica è $K^+ = (n, e)$ e la chiave privata è $K^- = (n, d)$

A questo punto per cifrare un messaggio $m$ con la chiave pubblica $K^+ = (n, e)$, si calcola $c = m^e \mod n$. Per decifrare il messaggio si calcola $m = c^d \mod n$.
E quindi che:
$$m = c^d \ mod \ n = (m^e \ mod \ n)^d \ mod \ n$$

In oltre, applicando prima la chiave pubblica e poi la chiave privata, o viceversa, si ottiene lo stesso risultato. cioè che
$$
  K_B^-(K_B^+(m)) = m = K_B^+(K_B^-(m))
$$

L'algoritmo è sicuro perchè per poterlo sconfiggere, dovremmo trovare i due fattori $p$ e $q$, che essendo molto grandi, è molto difficile da fare.

## RSA: esempio

Bob sceglie $p = 5$ e $q = 7$, allora $n = 35$ e $z = 24$. Sceglie $e = 5$ e $d = 29$.

![[Pasted image 20241118174926.png]]

## Limitazioni di RSA

L'esponenziazione di RSA è computazionalmente molto pesante, infatti DES è almeno 100 volte più veloce di RSA.

Per questo motivo, si usa RSA per scambiare una chiave simmetrica, e poi si usa la chiave simmetrica (chiamata di sessione) per cifrare il messaggio con DES.

## Autenticazione

Si vuole provare che il messaggio sia statto effettivamente inviato da chi dice di averlo inviato.

In assenza di autenticazione, un malintenzionato potrebbe impersonare un utente e inviare messaggi in suo nome.

Ci sono molti approcchi che non funzionano:
- **IP address**: Non si può usare l'indirizzo IP per autenticare un utente, dato che l'indirizzo IP può essere facilmente falsificato
- **Identificativo**: non si può usare l'identificativo dell'utente, dato che può essere usato anche dal malintenzionato per impersonare l'utente
- **Password**: non si può usare una password, dato che può essere intercettata dal malintenzionato e memorizzata, e poi usata per impersonare l'utente tramite "playback attack" che riutilizza il pacchetto contenente la password per impersonare l'utente. Anche se la password è cifrata, il malintenzionato non ha bisogno di decifrarla, può semplicemente inviare il pacchetto cifrato.

Vogliamo evitare l'attacco playback, allora il mittente invia un numero $R$ chiamato nonce (number used once), il destinatario dovrà rispondere al mittente con $R$ cifrato tramite una chiave segreta condivisa tra i due, dimostrando che conosce la chiave segreta, e quindi che è effettivamente il destinatario.

Come visto precedentemente, possiamo usare la tecnica di chiave pubblica-privata per scambiare la chiave segreta, e poi usare la chiave segreta per autenticare il mittente. Cioè che:

![[Pasted image 20241118180708.png]]

Questa tecnica è comunque vulnerabile ad un attacco **MITM** dove il malintenzionato si pone in mezzo alla comunicazione fra destinatario e mittente, intercettando e inoltrando i messaggi scamabiati con il destinatario. Questo attacco è difficile da rilevare, dato che per mittente e destinatario, la comunicazione sembra essere andata a buon fine.

### Firma digitale

Il mittente vuole inviare un messaggio $m$, allora lo firma usando la propria chiave privata, generando il messaggio $K_B^-(m)$, a questo punto invia il messaggio $m$ e la firma $K_B^-(m)$ al destinatario. Il destinatario verifica che il messaggio e la firma combacino usando la chiave pubblica del mittente, cioè che $K_B^+(K_B^-(m)) = m$, che è valido solo se chi ha firmato il messaggio conosce la chiave privata.
Questo garantisce anche la non ripudiabilità del messaggio, cioè che il mittente non può negare di aver inviato il messaggio.

Anzichè firmare l'intero messaggio, si può firmare un digest del messaggio, cioè applicando una funzione di hash al messaggio e firmando il digest. In questo modo si riduce la quantità di dati da firmare e inviare.

### MD5

è una funzione di hash che prende un messaggio di lunghezza arbitraria e restituisce un digest di 128 bit.

## Certificazione della chiave pubblica

La falla precedente dell'attacco MITM è dovuta al fatto che durante la comunicazione di $R$ e lo scambio della chiave pubblica, il malintenzionato può intercettare $R$ e criptarlo con la propria chiave pubblica, per poi rinviarlo al mittente, ponendosi come il destinatario. Stessa cosa farà con la chiave pubblica del destinatario, inviando la propria chiave pubblica al mittente. A questo punto il malintenzionato può intercettare i messaggi scambiati fra mittente e destinatario, e inoltrarli al destinatario e mittente rispettivamente, facendo credere a entrambi che la comunicazione sia andata a buon fine.

Per evitare questo, ci deve essere un ente fidato chiamato **Certification Authority (CA)**. Un utente $E$ di internet registra la propria chiave pubblica $K_B^+$ presso la CA, fornendo una prova di identità. A questo punto la CA crea un certificato contenente la garanzia che "$K_B^+$ appartiene a $E$". Il certificato è firmato dalla CA con la chiave privata della CA. Il mittente può verificare il certificato usando la chiave pubblica della CA, e quindi può essere sicuro che la chiave pubblica del destinatario è effettivamente quella del destinatario.
![[Pasted image 20241118182843.png]]

A questo punto quando un utente vuole comunicare con un altro, può richiedere il certificato del destinatario alla CA, ed usarla per verificare la chiave pubblica del destinatario.

## Email sicure

![[Pasted image 20241118183013.png]]

Il mittente:
- Genera una chiave simmetrica $K_S$
- Cifra il messaggio con $K_S$
- Cifra $K_S$ con la chiave pubblica del destinatario
- Invia il messaggio cifrato e la chiave cifrata al destinatario
- Il destinatario usa la propria chiave privata per decifrare $K_S$
- Il destinatario usa $K_S$ per decifrare il messaggio

![[Pasted image 20241118183214.png]]

Possiamo aggiungere la firma digitale al messaggio. Il mittente può firmare il messaggio con la propria chiave privata, e il destinatario può verificare la firma con la chiave pubblica del mittente

![[Pasted image 20241118183239.png]]

Il mittente può fornire riservatezza, autenticazione e integrità del messaggio. Allora usa tutte e 3 le chiavi, la privata, pubblica e simmetrica.

## SSL/TLS

è un protocollo di sicurezza utilizzato sopra il transport layer che fornisce:
- **riservatezza**: i messaggi sono cifrati tramite cifratura simmetrica
- **autenticazione**: tramite crittografia a chiave pubblica
- **integrità del messaggio**: tramite firma digitale

Le fasi principali per stabilire una connessione sicura sono:
- **Handshake**: Viene stabilita una connessione TCP, e i due client usano crittografia a chiave pubblica per scambiare una chiave simmetrica. 
- **Key Derivation**: I due client usano la chiave simmetrica per derivare un insieme di chiavi.
- **Data Transfer**: I dati da trasferire sono spezzati in blocchi.
- **Termination**: Vengono inviati messaggi speciali per terminare la connessione in maniera sicura.

### Handshake

- Il mittente crea una connessione TCP con il destinatario
- Il mittente verifica che il destinatario sia chi dice di essere tramite la CA
- Il mittente e il destinatario scambiano una chiave simmetrica (Master Secret) usata per generare le altre chiavi simmetriche della sessione TLS

### Key Derivation

Nota: Il MAC (Message Authentication Code) è un codice che viene aggiunto al messaggio per garantirne l'integrità. Il MAC è generato tramite una funzione di hash e una chiave segreta condivisa tra mittente e destinatario.

Tramite il Master Secret vengono generate 4 chiavi:
- $K_c$: chiave per cifrare i dati inviati dal client al server
- $M_c$: chiave MAC per i dati dal client al server
- $K_s$: chiave per cifrare i dati inviati dal server al client
- $M_s$: chiave MAC per i dati dal server al client

### Data Transfer

Dobbiamo poter inviare il MAC che garantisce l'integrità del messaggio. Potremmo mettere il MAC alla fine del messaggio, ma a questo punto dovremmo attendere che tutti i dati siano arrivati per poter verificare l'integrità del messaggio. 

Per evitare ciò, suddividiamo un messaggio in blocchi, e per ogni blocco ci sono 3 segmenti:

- la lunghezza del blocco dati 
- il blocco dati
- il MAC del blocco dati

Dobbiamo anche aggiungere un sequence number nel MAC, dove il MAC sarà formato da $MAC = H(M_x, \text{dati}, \text{sequence number})$, altrimenti un attaccante potrebbe catturare e reinviare un blocco di dati con lo stesso MAC, oppure potrebbe invertire l'ordine dei blocchi.

### Termination

Un attaccante potrebbe creare un segmento di chiusura connessione TCP, a questo punto uno o entrambi i lati potrebbero pensare che ci siano meno dati da trasferire di quanto si aspettassero.
Per risolvere questo problema, si aggiunge un nuovo field al blocco chiamato "type" dove un valore di 0 indica un blocco di dati, e un valore di 1 indica un blocco di chiusura.
A questo punto il MAC diventa $MAC = H(M_x, \text{dati}, \text{tipo},  \text{sequence number})$

## TLS reale

L'algorimo effettivamente usato per la comunicazione sicura aggiunge più informazioni alla comunicazione, come l'algoritmo di cifratura usato, e se usare RSA o DHE per lo scambio della chiave simmetrica.

1. Il client invia una lista di algoritmi che supporta, insieme ad un nonce client
2. Il server sceglie gli algoritmi dalla lista e risponde al client con la scelta + certificato + nonce server
3. Il client verifica il certificato, ne estrae la chiave pubblica del server e genera un "pre-master secret" che cifra con la chiave pubblica del server e invia al server
4. Client e server calcolano indipendentemente dal "pre-master secret" e nonce, la cifratura e chiavi MAC 
5. Il client invia un MAC di tutti i messaggi di handshake
6. Il server invia un MAC di tutti i messaggi di handshake

Gli step 5 e 6 servono per evitare che un MITM possa intercettare i messaggi di handshake e modificarli, come per esempio rimuovere gli algoritmi più forti dalla lista di algoritmi supportati.

Vengono usati due nonce casuali perchè un attaccante potrebbe intercettare il nonce del client e la sequenza di pacchetti handshake tra client e server, e in futuro riutilizzare il nonce e la sequenza di pacchetti per impersonare il client.

![[Pasted image 20241118190659.png]]
- **Record header**: contiene il tipo di messaggio, la versione del protocollo, la lunghezza del messaggio
- **MAC**: $H(M_x, \text{dati}, \text{tipo}, \text{sequence number})$
- **Fragment**: contiene i dati, che ha lunghezza di ~16KB

![[Pasted image 20241118190933.png]]

## VPN (Virtual Private Network)

Le istituzioni vogliono poter usare una rete privata per comunicare, ma per poter creare 
una rete privata, sono necessari Router separati, link, infrastruttura DNS etc...

Per evitare ciò, si usa una VPN, che è una rete privata virtuale che usa la rete pubblica per trasmettere dati in maniera sicura,
cifrando i dati prima di inviarli sulla rete pubblica.

# Sicurezza a livello di rete (IPSec)

Aggiunge autenticazione, cifratura e controllo di integrità ai pacchetti IP. 
Permette di proteggere i protocolli di livello superiore, rimanendo trasparenti ad essi.

Può essere implementato come `transport mode` dove viene criptato solo il payload del pacchetto IP (negli host), oppure come `tunnel mode` dove viene criptato l'intero pacchetto IP (nei router).

A differenza di IP, IPsec è connection-oriented.

## IPSec: Authentication Header (AH)

Fornisce autenticazione e integrità del pacchetto IP, ma non riservatezza

## IPSec: Encapsulating Security Payload (ESP)

Fornisce autenticazione, integrità e riservatezza del pacchetto IP

## IPSec: Security Association (SA)

Prima di inviare i dati, viene stabilita una SA tra le due entità, questo contiene:
- Indirizzo IP del mittente e destinatario
- Protocollo di sicurezza (AH o ESP)
- Le tecniche di cifratura, e le chiavi usate
- Un numero 32 bit chiamato Security Parameter Index (SPI) che identifica la SA

Un esempio di SA da R1 a R2

![[Pasted image 20241121155647.png]]

R1 memorizza:
1. Identificatore SA, l'SPI
2. Interfacia di origine della SA (200.168.1.100)
3. Interfaccia di destinazione della SA (193.68.2.23)
4. Tipo di cifratura usata (es. 3DES con CBC)
5. Chiave di cifratura
6. Tipo di integrity check usato (es. HMAC con MD5)
7. Chiave di autenticazione

## IPSec: Security Association Database (SAD)

l'endpoint trattiene lo stato della SA nel SAD, quando invia datagrammi 
IPsec, R1 accede al SAD per determinare come trattare il datagramma.

Quando i datagrammi IPsec arrivano a R2, R2 esamina l'SPI nei datagrammi e indicizza il SAD con l'SPI per determinare come trattare il datagramma.

![[Pasted image 20241121161149.png]]

## IPSec: Security Policy Database (SPD)

Dato un datagramma, l'entità inviante deve sapere se deve usare IPsec, e quale SA usare.

Le informazioni prese dall'SPD dice all'entità "cosa" fare quando arriva un datagramma, mentre l'SAD dice all'entità "come" farlo.

## Convertire pacchetti IP in IPsec

Preso un datagramma IP, esso contiene un header IP e un payload, per convertirlo in un datagramma IPsec si:
- Aggiunge in fondo al datagramma originale un "ESP trailer" che contiene del padding per allineare il payload, il padding length che indica la lunghezza del padding, il next header che indica il protocollo del payload.
- Cifra questo datagramma aggiornato con l'algoritmo e chiave specificati nell'SA
- Aggiunge all'inizio della parte cifrata un "ESP header" che contiene il SPI e sequence number
- Crea un MAC del datagramma e lo aggiunge alla fine
- Crea un nuovo header IP con tutti i classici header di IPv4, e viene inserito all'inizio del datagramma IPsec

Il sequence number viene inizializzato a 0 per ogni nuova SA. Ogni volta che viene inviato un datagramma, il mittente incrementa il 
sequence number e lo mette come valore nel campo del datagramma.

Questo permette di evitare attacchi di tipo sniffing e replay, e ignora i pacchetti duplicati.

## IKE: Internet Key Exchange, PSK e PKI

IKE è un protocollo usato da IPsec per stabilire una comunicazione sicura tra dispositivi. Ha il compito di negoziare, stabilire e gestire gli SA. 

- PSK (Pre-Shared Key) si usa una chiave condivisa tra mittente e destinatario. Questa chiave è pre condivisa in partenza e viene usata per autenticare le due entità.
- PKI, usano la crittografia a chiave pubblica per scambiare le chiavi simmetriche, simile all'handshake di SSL/TLS

l'IKE ha due fasi:

1. Impostare le SA IKE bi-direzionali (ISAKMP SA), ha due modalità, aggressive mode che usa meno messaggi, e main mode che è più sicura e flessibile
2. Si usa la ISAKMP per negoziare in sicurezza le coppie di SA IPsec

## WEP: Wired Equivalent Privacy

Ha il compito di fornire riservatezza e integrità dei dati trasmessi su una rete wireless.

Un dispositivo e l'access point (AP) condividono una chiave segreta (PSK) usata nella connessione.

1. Il dispositivo fa richiesta di autenticazione all'AP
2. L'AP invia una chiave casuale al dispositivo (nonce) di 128 bytes
3. Il dispositivo cifra il nonce con la chiave segreta e lo invia all'AP
4. L'AP decifra il nonce e verifica che sia corretto

Questi step sono eseguiti prima dell'associazione del dispositivo alla rete.

Ogni pacchetto contiene un IV (Initialization Vector) di 24 bit, che viene concatenato alla chiave segreta per cifrare il pacchetto. L'IV è differente per ogni pacchetto.

![[Pasted image 20241121164136.png]]

### Violazione cifratura WEP 802.11

L'IV da 24 bit è troppo piccolo, ed essendo uno per frame, evenutalmente si andrà a riutilizzare un IV. E dato che essi sono trasmessi in plain text, si può rilevare un IV duplicato.

Un attacco può essere:
- Attaccante fa cifrare al mittente un testo conosciuto $d_1, d_2, d_3, ...$
- Attaccante cattura un pacchetto cifrato $c_i = d_i \oplus k_i^{IV}$
- Attaccante conosce $c_i$ e $d_i$, quindi può calcolare $k_i^{IV}$
- Attaccante conosce la sequenza delle chiavi di cifratura $k_i^{IV}$

La prossima volta che un IV viene riutilizzato, l'attaccante può decifrare il pacchetto.

## Autenticazione e cifratura in WPA3

1. L'AP annuncia la sua presenza e i metodi di autenticazione e cifratura forniti.
2. Il dispositivo richiede uno specifico metodo di autenticazione e cifratura 
3. Il server di autenticazione (AS) ha una chiave segreta che è stata condivisa in precendenza (password).
4. L'AS genera un NonceAS e lo invia al dispositivo
5. Il dispositivo riceve il NONCEAS, genera un NonceM, una chiave di sessione simmetrica $K_{M - {AP}}$ usando il NonceAS, NonceM e la password
6. Invia il NonceM e un valore HMAC al server usando il NonceAS e la password
7. Il server deriva la chiave di sessione simmetrica $K_{M - {AP}}$ e verifica il valore HMAC.
8. A questo punto l'AS ha la stessa chiave di sessione simmetrica del dispositivo, e può iniziare a comunicare in maniera sicura.

![[Pasted image 20241121165313.png]]

## Autenticazione e cifratura in 4G LTE

Il dispositivo mobile che vuole connettersi alla Base Station (BS) deve autenticarsi nella rete e autenticare la retete stessa.

La sim stessa contiene un identità globale, e le chiavi condivise.

![[Pasted image 20241121172722.png]]
Il mobile e il BS usano la chiave di sessione derivata $K_{BS-M}$ per cifrare le comunicazioni sul link 4G

L'MME della visited network e il HHS della home network prendono insieme lo stesso ruolo che ha AS nel WiFi. 
L'autenticatore è l'HSS, e ci sono accordi di fiducia tra i vari MME e HSS.

1. Il mobile invia richiesta di autenticazione all'HSS, inviando un "attach message" che contine il proprio IMSI, e informazioni sulla rete di origine. Questo viene inoltrato dalla BS alla visited MME alla home HHS. 
2. L'HSS usa la chiave segreta precondivisa $K_{HSS-M}$ per generare un codice di autenticazione (auth_token) che contiene le info dell'HSS cifrate usando $K_{HSS-M}$, questo garantisce al mobile che chiunque abbia generato il token conosce $K_{HSS-M}$. A questo punto il mobile ha autenticato la rete. Riceve un $xres_{hss}$ che verrà usato per autenticare il mobile.
3. Il mobile elabora un messaggio di risposta $res_M$ usando la propria chiave segreta, ed eseguire gli stessi calcoli che ha compiuto l'HSS per calcolare $xres_{hss}$, e lo invia all'MME
4. L'MME confronta il valore di $res_M$ con quello calcolato da se stesso ($xres_{hss}$) , e se sono uguali, il mobile è autenticato nella rete. A questo punto l'MME informa la BS che il mobile è autenticato e genera le chiavi per la BS. 
5. Mobile e BS determinano le chiavi per cifrare i dati e si inviano dei frame di controllo sul canale wireless 4G, a questo punto si può usare AES.

# Firewall e IDS

Un firewall ha il compito di isolare la rete interna di un organizzazione dal resto dell'internet, permettendo solo ad alcuni pacchetti di passare.

I firewall evitato attacchi DoS di SYN flooding, non permettendo l'istaurazione di connessioni TCP da parte di host non autorizzati.

## Filtro stateless di pacchetti 

La rete interna è connessa all'internet tramite un router firewall che filtra pacchetto per pacchetto in base all'IP sorgente e destinazione, numeri di porta TCP e UDP sorgnte o destinazione, i tipi di messaggi ICMP e i bit TCP SYN e attack

Per esempio se un firewall bloca tutti i pacchetti su porta sorgente o destinazione 23, che usano protocollo IP 17 (UDP), allora blocca tutte le connessioni telnet e UDP.


| **Obiettivo**                                              | **Regola**                                                                                     |
|------------------------------------------------------------|------------------------------------------------------------------------------------------------|
| Nessun accesso Web verso l'esterno                        | Scarta tutti i pacchetti in uscita verso qualsiasi indirizzo IP, porta 80                      |
| Nessuna connessione TCP in entrata, tranne verso il server Web dell'istituzione | Scarta tutti i pacchetti TCP SYN in entrata verso qualsiasi IP tranne 130.207.244.203, porta 80 |
| Impedisci ai Web-radios di consumare tutta la bandwidth disponibile | Scarta tutti i pacchetti UDP in entrata tranne DNS e router broadcast                          |
| Impedisci che la tua rete sia usata per un attacco DoS     | Scarta tutti i pacchetti ICMP in uscita verso un indirizzo "broadcast" (es. 130.207.255.255)   |
| Impedisci che la tua rete risponda al traceroute           | Scarta tutti i pacchetti ICMP in uscita con TTL expired                                        |

## Access Control List (ACL)

è una tabella di regole che vengono applicate dalla prima all'ultima, sono coppie (azione, condizione)

| **Action** | **Source Address** | **Dest Address** | **Protocol** | **Source Port** | **Dest Port** | **Flag Bit** |
|------------|--------------------|------------------|--------------|------------------|---------------|--------------|
| Allow      | 222.22/16          | Outside of 222.22/16 | TCP          | > 1023           | 80            | Any          |
| Allow      | Outside of 222.22/16 | 222.22/16        | TCP          | 80               | > 1023        | ACK          |
| Allow      | 222.22/16          | Outside of 222.22/16 | UDP          | > 1023           | 53            | ---          |
| Allow      | Outside of 222.22/16 | 222.22/16        | UDP          | 53               | > 1023        | ----         |
| Deny       | All                | All              | All          | All              | All           | All          |

## Filtro stateful di pacchetti

Il filtraggio stateless non sa nulla sulle connessioni, per esempio permette un pacchetto TCP con ACK settato, anche se non c'è stata una connessione TCP.

Il filtraggio stateful di pacchetti tiene traccia di ogni connessione TCP, e determina se pacchietti in entrata e uscita fanno parte di una connessione TCP esistente.

## Application layer gateway (ALG)

???

## Limitazioni di firewall e gateway

- è possibile fare IP spoofing, i router non possono sapere se i dati arrivano realmente dalla sorgente dichiarata.
- se occorre un trattamento speciale per piu di un applicazione, allora ogniuna deve avere il proprio gateway
- il client deve sapere come comunicare con il gateway

## Intrusion Detection System (IDS)

Opera solo sugli header TCP/IP, ed analizza se i pacchetti contengono pattern di attacco.

