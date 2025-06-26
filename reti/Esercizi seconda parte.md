![[Pasted image 20250121123132.png]]

La PKI utilizza due chiavi per ogni host, una pubblica accessibile a tutti, ed una privata, conosciuta solo dall'host. 
Per inviare un messaggio da A a B, A utilizzerà una funzione criptografica utilizzando la chiave pubblica di B per cifrare il messaggio, per poi inviarlo a B. B per decifrare il messaggio utilizzerà la funzione criptografica utilizzando la propria chiave privata per ottenere il messaggio originale.
Infatti si ha la proprietà che Fa(Fb(m)) = m = Fb(Fa(m)) dove Fa è l'applicazione della chiave privata e Fb la chiave pubblica. Il tutto funziona grazie alla proprietà dei moduli, ed utilizzando due chiavi molto grandi p e q (privata e pubblica), riusciamo a criptare il messaggio in maniera tale che l'unico modo per decriptare il messaggio sarebbe quello di conoscere la chiave privata (che è un numero molto grande)

La prima parte del blocco garantisce l'autenticità e integrità del messaggio tramite il calcolo della funzione hash del messaggio per poi essere criptata usando la chiave privata di alice. Lo step successivo combina il messaggio con il suo hash criptato e cripta tutti e due utilizzando una chiave simmetrica. A questo punto, il messaggio finale sarà formato da (messaggio con hash) criptato dalla chiave simmetrica + la chiave simmetrica criptata usando PKI
Quando bob riceve la mail, usa la propria chiave privata per decriptare la chiave simmetrica, utilizzerà la chiave simmetrica per decriptare il messaggio e l'hash criptato, eseguirà l'hash del messaggio e decripterà l'hash criptato da alice tramite la sua chiave pubblica, se i due hash combaciano allora il messaggio è stato inviato da alice e non è stato modificato. 

---

![[Pasted image 20250121122103.png]]
Espandiamo i due indirizzi ip:

192.150.181.11000110
192.150.181.11001110

Con subnet mask:

255.255.255.11111000

1. I due host non hanno connettività perchè si trovano su due reti diverse. Infatti una volta applicata la maschera vediamo che l'indirizzo della rete è differente (A è in 11000, B è in 11001)
2. dobbiamo modificare l'indirizzo in maniera tale che esso faccia parte della stessa rete. 
   A questo punto ci basta selezionare un indirizzo per B che sia parte della stessa rete di A (quindi la parte di rete deve essere 11000), dato che se rimpiazziamo semplicemente questa parte i due indirizzi sono uguali, scegliamo un qualsiasi IP host all'interno di quella rete, come:
   192.150.181.11000010
3. Ci basta spostare di 1 bit a sinistra la maschera, quindi diventa 255.255.255.11110000, in questo modo i due indirizzi sono nella stessa rete (1100).

---
![[Pasted image 20250121124108.png]]
![[Pasted image 20250121124136.png]]


| ARP TABLE Di B | IP  | MAC   |
| -------------- | --- | ----- |
| Router         | 1.1 | 11:11 |
| H              | 1.7 | 4B:23 |
| A              | 1.3 | AA:11 |


| ARP TABLE Di H | IP  | MAC   |
| -------------- | --- | ----- |
| B              | 1.4 | BB:22 |

| ARP TABLE Di H | IP  | MAC   |
| -------------- | --- | ----- |
| Router         | 2.1 | 22:22 |

| SWITCH TABLE 1 | Interfaccia | MAC   | VLAN |
| -------------- | ----------- | ----- | ---- |
|                | 2           | BB:22 | 1    |
|                | 1           | AA:11 | 1    |
|                | 24          | 4B:23 | 1    |
|                | G2          | 22:22 | 2    |
|                | 24          | 1B:86 | 2    |
|                | G1          | 11:11 | 1    |

| SWITCH TABLE 2 | Interfaccia | MAC   | VLAN |
| -------------- | ----------- | ----- | ---- |
|                | 24          | BB:22 | 1    |
|                | 2           | 4B:23 | 1    |
|                | 24          | 22:22 | 2    |
|                | 5           | 1B:86 | 2    |

Ora B farà questi ping:
1) ping 192.168.1.3 (1.3)
- B sa 1.3 nella sua arp table? no, allora invia una ARP request per 1.3 da mac sorgente BB:22 e mac destinazione FF:FF
- Lo switch 1 riceve la ARP request da B su porta 2 quindi scopre B con IP 1.4 e mac BB:22 su vlan 1
- Lo switch 1 invia il pacchetto in broadcast a tutte le interfacce tranne la 2, inclusa interfaccia 24, parte della vlan 1
- Lo switch 2 riceve la il pacchetto, impara l'esistenza di B su interfaccia 24 con vlan 1
- Lo switch 2 invia il pacchetto broadcast a tutte le interfacce tranne la 24 parte della vlan 1
- ARP reply da parte di A con MAC sorgente AA:11, destinazione BB:22
- Lo switch 2 riceve il pacchetto e aggiorna la propria tabella aggiungendo A
- Lo switch 1 invia la ARP reply a B, quindi B aggiorna la propria ARP table 
- B fa un ICMP con ip sorgente 1.4 e mac BB:22, ip destinazione 1.3 e mac AA:11
- Lo switch riceve il pacchetto, conosce già il mac destinazione AA:11 verso interfaccia 1, e lo invia
- A fa ICMP reply con ip sorgente 1.3, mac AA:11, ip destinazione 1.4 e mac BB:22
- Lo switch riceve il pacchetto, conosce già il mac destinazione BB:22 verso interfaccia 2, e lo invia
- Fine ping 

2. ping 192.168.1.7
- B sa già il MAC di 1.7, allora fa un ICMP request con ip sorgente 1.3 e mac BB:22, ip destinazione 1.7 e mac 4B:23
- Lo switch 1 riceve il messaggio da B, ma non conosce il mac 4B:23, allora fa flooding inviandolo a tutte le interfacce tranne la sorgente, incluso la 24, della vlan 1
- Lo switch 2 riceve il pacchetto, conosce già B quindi non aggiorna la propria tabella, ma fa a sua volta flooding su tutte le interfaccie, tranne la sorgente, della vlan 1
- H riceve la ICMP request, sa già il MAC di B quindi fa una ICMP reply verso B con ip sorgente 1.7 e mac 4B:23, ip destinazione 1.3 e mac BB:22
- Lo switch 2 riceve il pacchetto da H, aggiorna la propria switch table aggiungendo H, consoce già dove è B allora invia il pacchetto verso interfaccia 24
- Lo switch 1 riceve il pacchetto, impara H veso interfaccia 24 e conoscendo già B, gli invia il pacchetto
- Fine ping

3. ping 192.168.2.8
- 2.8 non fa parte della stessa rete di B, allora B invia il pacchetto al router. B già conosce nella sua ARP table quale è il MAC del router, allora fa un ICMP request con ip sorgente 1.4 e mac BB:22, ip destinazione 1.1 e mac 11:11
- Lo switch 1 riceve il pacchetto da B, ma non conosce il mac 11:11 allora fa flooding su tutte le porte tranne la sorgente in vlan 1.
- Lo switch 2 riceve il pacchetto, fa flooding ma non succede nulla
- Il router riceve il pacchetto, vede che 2.8 fa parte della VLAN 2, e sa già tutti i mac dei dispositivi, allora invia il pacchetto verso G2 con ip sorgente 1.4 e mac 22:22, ip destinazione 2.8 e mac 1B:86
- Lo switch 1 riceve il pacchetto, aggiorna la propria switch table aggiungendo 22:22 su G2, ma non conosce il mac destinazione 1B:86, allora fa flooding su tutte le interfacce tranne la sorgente di vlan 2, inclusa la 24
- Lo switch 2 riceve il pacchetto, aggiorna la propria switch table aggiungendo 22:22 su 24, ma non sapendo dove si trova 1B:86 fa flooding 
- M riceve il pacchetto, vede che il messaggio non fa parte della propria rete, ma esso non conosce il MAC del gateway con IP 2.1, allora fa un ARP request broadcast con ip destinazione 2.1, mac sorgente 1B:86, mac destinazione FF:FF
- Lo switch 2 riceve il pacchetto, aggiorna la propria switch table aggiungendo 1B:86 su interfaccia 5, vede che è un messaggio broadcast allora lo invia a tutte le interfacce tranne la sorgente, di vlan 2, inclusa la 24
- Lo switch 1 riceve il pacchetto, aggiorna la propria switch table aggiungendo 1B:86 su interfaccia 24, e poi fa broadcast del pacchetto su tutte le interfacce tranne la sorgente, di vlan 2.
- Il router riceve il pacchetto, crea un ARP reply con mac destinazione 1B:86 e mac sorgente 22:22
- Lo switch 1 riceve il pacchetto, conosce già la destinazione allora lo invia su interfaccia 24
- Lo switch 2 riceve il pacchetto, conosce già la destinazione allora lo invia su interfaccia 5
- M riceve la arp reply, a questo punto conosce il mac del gateway e invia un ICMP con ip sorgente 2.8 e mac 1B:86, ip destinazione 1.4 e mac 22:22
- Lo switch 2 riceve il pacchetto, conosce già la destinazione allora lo invia su interfaccia 24
- Lo switch 1 riceve il pacchetto, conosce già la destinazione allora lo invia su interfaccia G2
- Il router riceve il pacchetto, conosce già il MAC di destinazione allora invia il pacchetto su G1 con ip sorgente 2.8 e mac 11:11, ip destinazione 1.4 e mac BB:22
- Lo switch 1 riceve il pacchetto, aggiunge 11:11 su interfaccia G1, e invia il pacchetto a interfaccia 2
- B riceve il pacchetto, fine ping


B vedrebbe che l'ip destinazione non fa parte della propria rete, allora invierebbe un ICMP con ip sorgente 1.4 e mac BB:22, ip destinazione 2.20 (e 3.20) e mac 11:11.

nel caso di 3.20, il router non conosce quella rete, allora ignora il pacchetto
nel caso 2.20, il router non conosce il MAC di 2.20, allora fa una ARP request a cui nessuno risponderà

![[Pasted image 20250201163108.png]]
1)
Nella fase iniziale dell'handshake SSL si condividono due messaggi di hello, il client hello, dove il client invia al server una lista di algoritmi crittografici che supporta, insieme ad un nonce. 

Il server sceglie uno di questi algoritmi e da al client il proprio certificato SSL, un nonce server, e gli algoritmi scelti per la comunicazione.

A questo punto il client genera una pre master key che cifra tramite la chiave pubblica del server e invia al server, il server e il client a questo punto utilizzeranno i nonce + chiave pre master key per derivare altre chiavi usate per la comunicazione fra i due host.

Alla fine inviano sia client che server, un MAC cifrato con la chiave derivata, a questo punto l'handshake è terminato.

2)
Il record header contiene delle informazioni sul frammento, come la versione del tls usata. La seconda parte è quella criptata, cioè i dati e il MAC, sono criptati tramite la chiave derivata dal premaster secret, usando un algoritmo di cifratura simmetrico (dove la chiave è stata condivisa tramite un algoritmo di cifratura asimmetrico). 

La certificazione serve a dimostrare che il server a cui si sta parlando è effettivamente chi ci aspettiamo. Il certificato è criptato tramite una CA, e il client può verificarlo tramite la chiave pubblica della CA. Una volta verificato, utilizzerà la chiave pubblica dell'host del certificato per criptare i dati da inviare.

![[Pasted image 20250201190633.png]]

Sono in due reti diverse, allora vuol dire che Robert e Mary stanno comunicando sapendo solo dell'esistenza del router, i due router conoscono gli indirizzi dei dispositivi che sono connessi alla propria rete, inclusi i router. 

| ARP TABLE Di Robert | IP         | MAC    |
| ------------------- | ---------- | ------ |
|                     | 10.1.2.254 | *:0456 |

| ARP TABLE Di Mary | IP         | MAC    |
| ----------------- | ---------- | ------ |
|                   | 10.1.3.254 | *:0567 |

| ARP TABLE Di Router1 | IP         | MAC    |
| -------------------- | ---------- | ------ |
|                      | 10.1.1.253 | *:0123 |
|                      | 10.1.3.3   | *:3333 |

| ARP TABLE Di Router2 | IP         | MAC    |
| -------------------- | ---------- | ------ |
|                      | 10.1.1.254 | *:0124 |
|                      | 10.1.2.2   | *:2222 |



