# Esercizio

Calcoliamo la probabilità delle varie combinazioni nel gioco di poker a 5 carte. Il mazzo ha 52 carte, e l'estrazione di 5 carte senza rinserimento è equiprobabile, possiamo usare $P(A) = \frac{|A|}{|\Omega|}$ dove $|\Omega| = \binom{52}{5}$, e $|A|$ è il numero di combinazioni che soddisfano la condizione che stiamo cercando.

1) $A_1$ = una coppia 
2) $A_2$ = due coppie
3) $A_3$ = tris
4) $A_4$ = scala (non reale)
5) $A_5$ = colore
6) $A_6$ = full
7) $A_7$ = poker
8) $A_8$ = scala reale

## $A_1$, una coppia

Un esempio è se in una mano ci sono 2 carte dello stesso valore (es. un 4 di picche e un 4 di cuori) e 3 carte di valore diverso (che NON includono un altra coppia)

- Numero di modi di scegliere 1 valore su 13 (da 1 a 13), quindi $\binom{13}{1}$
- Numero di modi di scegliere 2 semi diversi sui 4 disponibili, contando anche il fatto che l'ordine non conta, allora $\binom{4}{2}$
- Numero di carte rimanenti, dobbiamo evitare di formare un tris, un altra coppia o un full, abbiamo già una coppia quindi 12 valori rimanenti delle carte e quindi dobbiamo scegliere 3 valori diversi tra i 12 rimasti, allora $\binom{12}{3}$
- Per ogni valore scelto delle 3 carte, abbiamo 4 semi disponibili da assegnare ad ogni carta quindi $4\cdot4\cdot4 = 4^3$

Riassumendo tutto otteniamo che $|A_1| = \binom{13}{1} \cdot \binom{4}{2} \cdot \binom{12}{3} \cdot 4^3$, e quindi $P(A_1) = \frac{|A_1|}{|\Omega|}$.

## $A_2$, due coppie

Un esempio è se in una mano ci sono 2 carte dello stesso valore (es. un 4 di picche e un 4 di cuori), altre 2 carte dello stesso valore (es. un 7 di fiori e un 7 di quadri) e una carta di valore diverso.

- Numero di modi di scegliere 2 valori su 13 per formare 2 coppie di valori diversi $\binom{13}{2}$
- Per ogni coppia, numero di modi di scegliere 2 semi diversi sui 4 disponibili, allora $\binom{4}{2} \cdot \binom{4}{2}$
- Ultima carta rimanente escludendo il full $\binom{11}{1}$
- Per l'ultima carta, abbiamo 4 semi disponibili da assegnare, quindi $\binom{4}{1}$

Riassumendo otteniamo che $|A_2| = \binom{13}{2} \cdot \binom{4}{2} \cdot \binom{4}{2} \cdot \binom{11}{1} \cdot \binom{4}{1}$, e quindi $P(A_2) = \frac{|A_2|}{|\Omega|}$.

## $A_3$, tris

Analogo al caso con la coppia ma usando 3 carte dello stesso valore, e 2 carte di valore diverso, allora $|A_3| = \binom{13}{1} \cdot \binom{4}{3} \cdot \binom{12}{2} \cdot 4^2$, e quindi $P(A_3) = \frac{|A_3|}{|\Omega|}$.

## $A_4$, scala (non reale)
Per formare una scala, dobbiamo scegliere 5 valori consecutivi. Ce ne sono 10 dato che abbiamo A-2-3-4-5, 2-3-4-5-6, 3-4-5-6-7, ..., 10-J-Q-K-A

- Numero di sequenze possibili $\binom{10}{1} = 10$
- Numero di semi per ogni carta della scala, 4 per ogni carta, 5 carte in totale quindi $4^5$
- Dobbiamo però togliere i 4 casi in cui le carte hanno tutti lo stesso seme (sennò sarebbe reale)

Riassumendo otteniamo che $|A_4| = \binom{10}{1} \cdot (4^5 - 4)$, e quindi $P(A_4) = \frac{|A_4|}{|\Omega|}$.


## $A_5$, colore

Ovvero 5 carte tutte dello stesso seme, ignorando il colore 

- Numero di carte da scegliere 5 su 13 $\binom{13}{5}$
- Numero di semi da scegliere 1 su 4 $\binom{4}{1}$
- Da rimuovere tutte le configurazioni che portano ad una scala reale, cioè $\binom{10}{1} \cdot \binom{4}{1}$

Riassumendo otteniamo che $|A_5| = \binom{13}{5} \cdot \binom{4}{1} - \binom{10}{1} \cdot \binom{4}{1}$, e quindi $P(A_5) = \frac{|A_5|}{|\Omega|}$.

## $A_6$, full
Un esempio è se in una mano ci sono 3 carte dello stesso valore (es. un 4 di picche, un 4 di cuori e un 4 di fiori) e altre 2 carte dello stesso valore (es. un 7 di fiori e un 7 di quadri). Dobbiamo combinare una coppia con un tris:

- Numero di modi di scegliere 1 valore su 13 (da 1 a 13), quindi $\binom{13}{1}$
- Numero di modi di scegliere 2 semi diversi sui 4 disponibili, allora $\binom{4}{2}$
- Numero di modi di scegliere 1 valore su 12 (12 perchè uno è già usato nella coppia) $\binom{12}{1}$
- Numero di modi di scegliere 3 semi diversi sui 4 disponibili, allora $\binom{4}{3}$

Riassumendo otteniamo che $|A_6| = \binom{13}{1} \cdot \binom{4}{2} \cdot \binom{12}{1} \cdot \binom{4}{3}$, e quindi $P(A_6) = \frac{|A_6|}{|\Omega|}$.

## $A_7$, poker
Un esempio è se in una mano ci sono 4 carte dello stesso valore (es. un 4 di picche, un 4 di cuori, un 4 di fiori e un 4 di quadri) e una carta di valore diverso. 

- Numero di modi di scegliere 1 valore su 13 (da 1 a 13), quindi $\binom{13}{1}$
- Numero di modi di scegliere i restanti 3 semi dello stesso valore, 1 ogniuno quindi $1^3$
- Numero di modi di scegliere 4 semi su 4, $\binom{4}{4} = 1$ 
- Numero di modi di scegliere 1 valore su 12 per l'ultima carta $\binom{12}{1}$
- Numero di modi di scegliere 1 seme su 4 per l'ultima carta $\binom{4}{1}$

Riassumendo otteniamo che $|A_7| = \binom{13}{1} \cdot 1^3 \cdot \binom{4}{4} \cdot \binom{12}{1} \cdot \binom{4}{1}$, e quindi $P(A_7) = \frac{|A_7|}{|\Omega|}$.

## $A_8$, scala colore
Un esempio è se in una mano ci sono 5 carte dello stesso seme (es. tutte di picche) e con valori consecutivi (es. A-2-3-4-5). escluso il caso di scala reale, cioè A-K-Q-J-10

- Numero di sequenze possibili, rimuovendo la reale $\binom{9}{1} = 9$
- Numero di modi di scegliere 1 seme su 4 $\binom{4}{1}$

Riassumendo otteniamo che $|A_8| = \binom{9}{1} \cdot \binom{4}{1}$, e quindi $P(A_8) = \frac{|A_8|}{|\Omega|}$.

## $A_9$, scala reale

C'è un solo modo per fare scala reale, cioè A-K-Q-J-10, e 4 modi per scegliere il seme, quindi $|A_9| = \binom{4}{1}$, e quindi $P(A_9) = \frac{|A_9|}{|\Omega|}$.

# Paradosso dei compleanni

Date $k$ persone, quale è la probabilità che due persone aabbiano il compleanno nello stesso giorno?

Vogliamo sapere per quale valore $k$ la probabilità è maggiore di 0.5, cioè $P(A) > 0.5$.

I casi totali sono $|\Omega| = 365^k$, dato che ogni persona può avere uno dei 365 giorni come compleanno.

A questo punto possiamo calcolare il suo complemento, trovare questo risultato è equivalente a trovare sottrarre ad 1 la probabilità che tutte le persone abbiano compleanni diversi.

Che tutti abbiano i compleanni diversi, scegliamo per ogni persona uno dei giorni rimanenti:

$365 \cdot 364 \cdot 363 \cdot \dots \cdot (365 - k + 1)$

Quindi otteniamo:

$$
1 - \frac{365 \cdot 364 \cdot \dots \cdot (365 - k + 1)}{(365)^k}
$$

Che possiamo riscrivere usando la produttoria:

$$
= 1 - \prod_{i=0}^{k-1} \frac{365-i}{365} 
$$

Separando il primo termine ($i=0$) che è uguale a 1, e riscrivendo la frazione:

$$
= 1 - \prod_{i=1}^{k-1} \left(1 - \frac{i}{365}\right)
$$

Supponendo che $k \ll 365$ (cosa che verificheremo alla fine), allora $\frac{i}{365} \ll 1$. Possiamo usare l'approssimazione di Taylor $e^x \approx 1+x$ (o meglio $\ln(1+x) \approx x$ per $x \ll 1$), quindi $1 - \frac{i}{365} \approx e^{-\frac{i}{365}}$.

$$
\cong 1 - \prod_{i=1}^{k-1} e^{-\frac{i}{365}}
$$

Sfruttando le proprietà degli esponenziali (prodotto di potenze con stessa base è la somma degli esponenti):

$$
= 1 - e^{-\sum_{i=1}^{k-1} \frac{i}{365}} = 1 - e^{-\frac{1}{365} \sum_{i=1}^{k-1} i}
$$

Sapendo che la somma dei primi $n$ interi è $\frac{n(n+1)}{2}$, qui $n=k-1$:

$$
= 1 - e^{-\frac{k(k-1)}{2 \cdot 365}}
$$

Ora supponiamo anche che $k(k-1) \ll 2 \cdot 365 = 730$.
In tal caso possiamo usare l'approssimazione $e^{\epsilon} \approx 1 + \epsilon + o(\epsilon^2)$.

$$
\approx 1 - \left[ 1 + \left( - \frac{k(k-1)}{2 \cdot 365} \right) \right] = \frac{k(k-1)}{2 \cdot 365}
$$

Vogliamo quindi trovare $k$ tale che:

$$
P_k \approx \frac{k(k-1)}{730} > \frac{1}{2}
$$

Proviamo con alcuni valori:
- Se $k=19 \rightarrow \frac{19 \cdot 18}{730} = \frac{342}{730} < \frac{1}{2}$
- Se $k=20 \rightarrow \frac{20 \cdot 19}{730} = \frac{380}{730} > \frac{1}{2}$

Controlliamo l'ipotesi iniziale: $380 < 730$ (l'approssimazione è accettabile).


# Formula di stirling

La formula di Stirling è un'approssimazione per i fattoriali, che dice che per n grande:

$$
n! \approx n^n e^{-n}\sqrt{2 \pi n}
$$

# Probabilità condizionata

Prendiamo un dado come esempio, ha 6 facce e se non è truccato, ogni faccia è equiprobabile. Allora:

- $\Omega = \{ 1,2,3,4,5,6 \}$ 
- $P(i) = \frac{1}{6} \forall i \in \{1, \cdot, 6\}$ equiprobabile

A questo punto, aggiungiamo un informazione, cioè che il dado è truccato e il dado da solo numeri dispari.

Noi dobbiamo stabilire le leggi di probabilità in base alle informazioni che sappiamo del sistema, ogni volta che aggiungo un informazione su un evento che posso considerare "certo" (come in questo caso di avere solo le facciate dispari), posso dire di avere una probabilità condizionata, assumendo che quell'evento si sia relizzato.

Allora chiamiamo la nostra nuova probabilità condizionata come $\tilde{P}$, allora il suo nuovo inieme sarà
- $B = \{1,3,5\}$
- $B^c = \{2,4,6\}$
- $B \cup B^c = \Omega$

Allora definiamo $\tilde{P}$:

$$
\tilde{P}(A) = P(A | B)
$$

tale che $\tilde{P}(B | B) = 1$

A questo punto vediamo che:

- $P(A \cap B)$ = la probabilità che entrambi gli eventi accadano insieme
- $P(B)$ = la probabilità che l'evento certo accada 

$$
P(A|B) = \frac{P(A \cap B)}{P(B)}
$$

Che nel caso di eventi equiprobabili, è la cardinalità.

Note:

$$
|A \cap B| \le |B| \le |A| \implies \frac{P(A \cap B)}{P(B)} \le 1
$$

Quindi la probabilità condizionata non è altro che la probabilità aaggiungendo l'informazione che accade un evento certo

# Probabilità totale

La probabilità totale, è la probabilità che si realizzino almeno uno tra due o più eventi

Partizioniamo $\Omega$ in $i$ partizioni: $\Omega = \cup_{i=1}^n E_i$ con $E_i \cap E_j = \emptyset$ se $i \ne j$.

Sappiamo che per identità:

$$
A = A \cap \Omega
$$

Allora sostituiamo $\Omega$ con le sue partizioni:

$$
P(A) = P(A \cap \Omega) = P\left(A \cap \bigcup_{i=1}^n E_i\right) = P\left(\bigcup_{i=1}^n (A \cap E_i)\right)
$$

Dato che le partizioni sono disgiunte, allora anche le loro intersezioni lo sono, e allora per gli assiomi dell probabilità abbiamo che:

$$
P(A) = \sum_{i=1}^n P(A \cap E_i) = \sum_{i=1}^n P(A | E_i) P(E_i)
$$

In parole, trovare la probabilità totale di A è uguale a considerare quanto è probabile A nello scenario $E_i$, per poi moltiplicarlo per quanto è probabile che $E_i$ accada.

## Esempio

Ci sono 5 ristoranti: $R_1, R_2, R_3, R_4, R_5$ e ogniuno è aperto con probabilità $\frac{1}{5}$


3 di questi ristoranti si trovano a destra di un bivio, e 2 a sinistra

Quale è la probabilità che trascorrendo la strada io trovi un ristorante aperto?

$$
\begin{aligned}
P(A) &= P(A_1, S) + P(A_2, S) + P(A_3, D) + P(A_4, D) + P(A_5, D) = \\
&= \left(\frac{1}{5} \cdot \frac{1}{2}\right) \cdot 2 + \left(\frac{1}{5} \cdot \frac{1}{2}\right) \cdot 3 = \frac{1}{2}
\end{aligned}
$$

Però possiamo usare la probabilità totale, partizionando in base alla scelta di andare a sinistra o a destra:

$$
\begin{aligned}
P(A | \text{vado a sinistra}) &= \frac{2}{5} \\
P(A | \text{vado a destra}) &= \frac{3}{5}
\end{aligned}
$$

Mettendo tutto insieme usando la formula otteniamo

$$
\begin{aligned}
P(A) &= P(A | \text{vado a sinistra})P(S) +
P(A | \text{vado a destra})P(D) \\ 
&= \frac{1}{2}\left(\frac{3}{5} + \frac{2}{5} \right) \\
&= \frac{1}{2}
\end{aligned}
$$

# Proprietà della probabilità condizionata

- Se $E \subset F$, allora $P(E | F) = \frac{P(E)}{P(F)}$
- Se $P(E | F) = 1$, allora $E \subseteq F$
- Se $E \cap F = \emptyset$, allora $P(E | F) = 0$
- $P(E^c | F) = 1 - P(E | F)$
- $P(F) = P(F \cap E) + P(F \cap E^c)$
- Per due eventi $E_1, E_2$ con $E_1 \cap E_2 \ne \emptyset$, allora $P(E_1 \cup E_2 |F) = P(E_1 | F) + P(E_2 | F) - P(E_1 \cap E_2 | F)$