---
title: "Esercizi: indirizzamento IP e routing"
description: "Esercizi d'esame sulla prima parte del corso: schemi di indirizzamento IP, tabelle di routing, Excalidraw e analisi di protocolli per livello OSI."
type: exercise
---

# Esercizi esame

![[Pasted image 20241111091010.png]]

# 1.i. Schema di indirizzamento

![[Drawing 2024-11-11 09.12.21.excalidraw|100%]]
# 1.ii. Tabella di routing rispetto R3

![[Drawing 2024-11-11 10.08.55.excalidraw|100%]]

Specifichiamo cosa è raggiungibile direttamente (verde), e chi è raggiungibile tramite next-hop (rosso).

La routing table ci dice tutti i network che riusciamo a raggiungere direttamente (verde) *oppure* il link da usare come prossimo step dell'istradamento (rosso).

come valore di next hop, mettiamo "direttamente connessa" se esiste una connessione diretta tra il router e la destinazione (verde), mentre per quelle che richiedono il next-hop, inseriamo l'indirizzo del router del link (quindi la destinazione del link).

La domanda che ci dobbiamo fare è "voglio andare da R3 fino ad un certo indirizzo IP, cosa devo fare (next hop)?"
- Se il client è collegato direttamente, allora il next hop sarà semplicemente andare verso quell'IP
- Se il client non è collegato direttamente, allora per raggiungere quell'IP si deve instradare *verso* il next-hop, per poi essere gestito dal prossimo router

| Nome   | IP                | next hop                            |
| ------ | ----------------- | ----------------------------------- |
| Rete C | 143.31.107.96/28  | direttamente connessa               |
| Link 2 | 141.31.107.116/30 | direttamente connessa               |
| Link 3 | 143.31.107.120/30 | direttamente connessa               |
| Rete A | 143.31.107.64/26  | 141.31.107.121 (R1 tramite link L3) |
| Rete B | 143.31.107.0/27   | 143.31.107.118 (R2 tramite link L2) |
# 1.iii. 
 todo
# 2.i

Descrivere lo scopo e il livello della pila internet in cui operano i seguenti protocolli: 
1) BGP, Layer 3, usato nel routing
2) NAT, Layer 3, usato per tradurre un indirizzo ip privato a pubblico
3) DHCP, Layer 1, assegna indirizzi IP a dispositivi connessi alla rete
4) ARP, Layer 3, traduce indirizzo MAC in indirizzi IP
5) FTP, Layer 1, protocollo di invio file

# 3.i

![[Pasted image 20241111105837.png]]


| Flusso | IP sorgente   | IP destinazione | Porta sorgente | Porta destinazione |
| ------ | ------------- | --------------- | -------------- | ------------------ |
| 1      | 10.0.0.2      | 141.82.41.78    | 3346           | 80                 |
| 2      | 128.86.129.71 | 141.82.41.78    | 5001           | 80                 |
| 3      | 141.82.41.78  | 128.86.129.71   | 80             | 5001               |
| 4      | 141.82.41.78  | 10.0.0.2        | 80             | 3346               |
|        |               |                 |                |                    |
| 5      | 10.0.0.3      | 141.82.41.78    | 4419           | 80                 |
| 6      | 128.86.129.71 | 141.82.41.78    | 5002           | 80                 |
| 7      | 141.82.41.78  | 128.86.129.71   | 80             | 5002               |
| 8      | 141.82.41.78  | 10.0.0.3        | 80             | 4419               |

# 4.i 

![[Drawing 2024-11-12 12.11.40.excalidraw|100%]]


# 5.i

![[Drawing 2024-11-11 11.01.39.excalidraw|100%]]


| S2                                         |            |
| ------------------------------------------ | ---------- |
| Match                                      | Action     |
| IP Src = `10.2.0.4`<br>IP Dst = `10.3.*.*` | forward(2) |
| IP Src = `10.2.0.3`<br>IP Dst = `10.3.*.*` | forward(1) |

| S1                                                            |            |
| ------------------------------------------------------------- | ---------- |
| Match                                                         | Action     |
| Ingress Port 4<br>IP Src = `10.2.0.4`<br>IP Dest = `10.3.*.*` | forward(1) |

| S3                                    |            |
| ------------------------------------- | ---------- |
| Match                                 | Action     |
| Ingress Port 3<br>IP Dst = `10.3.0.6` | forward(1) |
| Ingress Port 3<br>IP Dst = `10.4.0.5` | forward(2) |
| Ingress Port 4<br>IP Dst = `10.3.0.6` | forward(1) |
| Ingress Port 4<br>IP Dst = `10.3.0.5` | forward(2) |

# 6.i 

![[Pasted image 20241111111022.png]]

1) Client Richiede al DNS l'indirizzo IP del sito
2) Client Effettua handshake con il sito
3) Client fa richiesta GET per `ciao.html`
4) Server risponde con status 200 e il contenuto del file `ciao.html`
5) Se la pagina contiene un immagine, il client farà di nuovo una richiesta GET al server per ottenerla

