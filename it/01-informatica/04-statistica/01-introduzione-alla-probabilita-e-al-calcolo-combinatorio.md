---
title: Introduzione alla probabilità e al calcolo combinatorio
description: "Fondamenti della teoria della probabilità: spazi campionari, sigma-algebra, assiomi di Kolmogorov e principi del calcolo combinatorio (disposizioni, permutazioni, combinazioni)."
type: lecture
---

La probabilità ci permette di studiare fenomeni aleatori, cioè fenomeni di cui non è possibile (o non conviene) usare una legge deterministica, o perchè non è nota, o perchè non sono noti i dati iniziali o perchè è troppo complesso.

La legge di probabilità dipende dalle informazioni che abbiamo o nella nostra "ignoranza" sul sistema, cioè non conosciamo tutti gli eventi elementari.

Ci sono vari casi in cui possiamo applicare la probabilità:

- Lancio di una moneta
- Comportamento delle particelle in un gas
- Estrazione di 5 carte in un mazzo da 52


Nel caso della moneta e comportamento delle particelle in un gas, non conosciamo esattamente le condizioni iniziali.
Nel caso delle carte, noi non conosciamo l'ordine delle carte. 

In generale, quando vogliamo affrontare un problema, lo suddividiamo in 2 fasi:

1) Modellazione matematica (con la scelta della probabilità)
2) Analisi matematica per risolvere il problema.

---

# Insiemistica e definizioni

Denotiamo con $\Omega$ l'insieme di tutti i possibili risultati di un esperimento, detto spazio campionario.
Per esempio, nel lancio di una moneta, $\Omega = \{ Testa, Croce \}$.
Nel lancio di un dado, $\Omega = \{ 1, 2, 3, 4, 5, 6 \}$.

Un qualsiasi sottoinsieme $A \subseteq \Omega$ è detto evento.

Può essere utile ricordare alcune proprietà degli insiemi:

- $(A \cap B) \cup C = (A \cup C) \cap (B \cup C)$
- Denotiamo con $A^c$ il complemento di $A$, cioè l'insieme degli elementi di $\Omega$ che non appartengono ad $A$.

---

# Spazio di probabilità

Lo spazio di probabilità è una tripla $(\Omega, \mathcal{F}, P)$, dove:
## $\Omega$ 
$\Omega$ è lo spazio degli eventi, cioè l'insieme di tutti i possibili risultati di un esperimento.
## $\mathcal{F}$
$\mathcal{F}$ è una $\sigma$-algebra di sottoinsiemi di $\Omega$ (l'insieme degli eventi che possono essere misurati). Per esempio se proviamo ad estrarre una pallina da un urna che ha palline di colore rosso, verde e nero, ho 3 tipi di eventi che possono succedere quando estraggo una pallina. 

Ha tre proprietà:
- $\emptyset,\Omega \in \mathcal{F}$, cioè l'evento certo è misurabile, così come l'evento impossibile
- Se $A \in \mathcal{F}$, allora anche $A^c \in \mathcal{F}$, cioè se un evento è misurabile, allora anche il suo complemento è misurabile
- Se $A_1, A_2, \ldots \in \mathcal{F}$, allora anche $\bigcup_{n=1}^\infty A_n \in \mathcal{F}$, cioè se una successione di eventi è misurabile, allora anche la loro unione è misurabile. Quindi si dice che è chiusa per unione numerabile.

In oltre possiamo dare altri teoremi:

Se $A, B \in \mathcal{F}$, allora anche $A \cup B, A \cap B \in \mathcal{F}$, cioè se due eventi sono misurabili, allora anche la loro unione e intersezione sono misurabili. Inoltre $A \setminus B = A \cap B^c$, cioè se due eventi sono misurabili, allora anche la loro differenza è misurabile.

## $P$ 
$P$ è una funzione di probabilità, che assegna a ogni evento $A \in \mathcal{F}$ un numero reale $P(A) \in [0, 1]$, tale che:
  - $P(\Omega) = 1$,
  - Per ogni successione di eventi $(A_n)_{n \in \mathbb{N}}$ disgiunti, cioè $A_i \cap A_j = \emptyset$ per $i \neq j$, si ha:
    $$P\left(\bigcup_{n=1}^\infty A_n\right) = \sum_{n=1}^\infty P(A_n).$$

Proviamo a fare alcuni esempi, come testa o croce
$\Omega = \{ T, C \}$
$\mathcal{F} = \{ \emptyset,  T , C , \Omega \}$
$P(\emptyset) = 0$
$P(T) = p$ con $p \in [0, 1]$

Allora quanto è $P(C)$?

Sappiamo che $P(\Omega) = 1$, quindi $P(T) + P(C) = 1$, da cui $P(C) = 1 - P(T) = 1 - p$.

Ora proviamo a fare un esempio con il lancio di un dado:
$\Omega = \{ 1, 2, 3, 4, 5, 6 \}$
$\mathcal{F} = \left\{ \emptyset, \{1\}, \{2\}, \{3\}, \{4\}, \{5\}, \{6\}, \{1, 2\}, \ldots, \Omega \right\}$
- $P(i \cap j) = 0$ per $\forall i \neq j$ 
- $P(\{\{1\}\cup\{2\}\cup\{3\}\cup\{4\}\cup\{5\}\cup\{6\}\}) = P(\Omega) = 1$

Quindi $P(i) = \frac{1}{6}$ per $i = \{1, 2, 3, 4, 5, 6\}$.

Ora consideriamo l'evento $A = \{ \text{esce un numero pari} \} = \{2, 4, 6\}$.

Allora $P(A) = P(\{2, 4, 6\}) = P(\{2\}) + P(\{4\}) + P(\{6\}) = \frac{1}{6} + \frac{1}{6} + \frac{1}{6} = \frac{1}{2}$.

# Proprietà della probabilità


## 1 
$P(A^c) = 1 - P(A)$, cioè la probabilità del complemento di un evento è uno meno la probabilità dell'evento

## 2
Se: 
- $A, B \in \mathcal{F}$ 
- $A \cap B \ne \emptyset$ e quindi $P(A \cap B) \ne 0$, 

Allora $P(A \cup B) = P(A) + P(B) - P(A \cap B)$, cioè la probabilità dell'unione di due eventi è la somma delle probabilità dei singoli eventi meno la probabilità della loro intersezione

In generale:

$$
\begin{aligned}
P\left(\bigcup_{i=1}^n A_i\right) &= \sum_{i=1}^n P(A_i) - \sum_{1 \le i < j \le n} P(A_i \cap A_j) + \sum_{1 \le i < j < k \le n} P(A_i \cap A_j \cap A_k) - \ldots + (-1)^{n+1} P\left(\bigcap_{i=1}^n A_i\right)
\end{aligned}
$$

# Esempio 

Giovanni decide di portare in vacanza due libri.
- $E_1$ Il primo libro gli piacerà con probabilità $1/2$ 
- $E_2$ Il secondo libro gli piacerà con probabilità $2/5$
- $E_1 \cap E_2$ Entrambi i libri gli piaceranno con probabilità $3/10$

Quale è la probabilità che Giovanni non gradisca nessuno dei due libri? Cioè $P(E_1^c \cap E_2^c)$?

Possiamo riscrivere l'evento $E_1^c \cap E_2^c$ come il complemento di $E_1 \cup E_2$, cioè $P((E_1 \cup E_2)^c) = 1 - P(E_1 \cup E_2)$.

Allora applichiamo la formula di probabilità dell'unione di due eventi ed otteniamo: 

$$
\begin{aligned}
1 - P(E_1 \cup E_2) &= 1 - (P(E_1) + P(E_2) - P(E_1 \cap E_2)) \\
&= 1 - \left(\frac{1}{2} + \frac{2}{5} - \frac{3}{10}\right) \\
&= 1 - \left(\frac{5}{10} + \frac{4}{10} - \frac{3}{10}\right) \\
&= 1 - \frac{6}{10} = \frac{4}{10} = \frac{2}{5}
\end{aligned}
$$

## 3
$$
\begin{aligned}
P(\bigcap_{i=1}^\infty A_i) = 1 - P\left(\bigcup_{i=1}^\infty A_i^c\right)
\end{aligned}       
$$

## 4
Se $A \subseteq B$, allora $P(A) \le P(B)$ cioè se un evento è un sottoinsieme di un altro, allora la sua probabilità è minore o uguale alla probabilità dell'altro evento

Se $A$ è contenuto in $B$, allora ogni volta che si verifica $A$ si verifica anche $B$, ma non viceversa. Quindi $B$ "copre più casi" di $A$.

## 5

Se $A_1, A_2, \ldots$ è una successione di eventi, tale che:
$A_1 \subset A_2 \subset A_3 \subset \ldots$ (successione crescente), allora:
$$
\begin{aligned}
P\left(\bigcup_{n=1}^\infty A_n\right) = \lim_{n \to \infty} P(A_n)
\end{aligned}
$$

Se gli eventi "crescono" (ogni evento contiene il precedente), l'unione infinita è l'evento limite. La probabilità cresce gradualmente verso quella dell'unione totale.

## 6 
Se $A_1, A_2, \ldots$ è una successione di eventi, tale che:
$A_1 \supset A_2 \supset A_3 \supset \ldots$ (successione decrescente), allora:
$$
\begin{aligned}
P\left(\bigcap_{n=1}^\infty A_n\right)  = \lim_{n \to \infty} P(A_n)
\end{aligned}
$$

Se gli eventi "si restringono" (ogni evento è contenuto nel precedente), l'intersezione infinita è ciò che rimane. La probabilità decresce verso quella dell'intersezione totale.

## 7 
Se $A_1, A_2, \ldots$ è una successione di eventi qualsiasi (possibilmente non disgiunti):
$$
P(\bigcup_{i=1}^\infty A_i) \le \sum_{i=1}^\infty P(A_i)
$$

Se gli eventi non sono disgiunti, allora gli eventi avranno delle "sovrapposizioni". Facendone l'unione, stiamo rimuovendo queste sovrapposizioni (non contando duplicati), mentre nella somma della probabilità dei singoli eventi, stiamo sommando anche queste sovrapposizioni, quindi la somma sarà maggiore o uguale alla probabilità dell'unione.

Se gli eventi sono disgiunti, la loro sovrapposizione è nulla, quindi la probabilità dell'unione è esattamente uguale alla somma delle probabilità dei singoli eventi.


# $\sigma$-algebra generata
Sia $\Omega$ un insieme e sia $\mathcal{A}$ un insieme contenente una partizione di $\Omega$, cioè $\mathcal{A} = \{ A_1, A_2, \ldots, A_n \}$ con $A_i \cap A_j = \emptyset$ per $i \neq j$ e $\bigcup_{i=1}^n A_i = \Omega$.

Allora definiamo con $\mathcal{F}(A)$ la $\sigma$-algebra generata da $\mathcal{A}$, cioè l'insieme di tutti i possibili sottoinsiemi di $\Omega$ che possono essere formati unendo gli elementi di $\mathcal{A}$, come per esempio tramite operazioni di unione, intersezione e complemento, etc... Questa $\mathcal{A}$ la chiamiamo il generatore di $\mathcal{F}(A)$.

Da questa definizione segue che se conosciamo la probabilità dei singoli elementi di $\mathcal{A}$, allora possiamo calcolare la probabilità di qualsiasi evento in $\mathcal{F}(A)$, perchè ogni evento in $\mathcal{F}(A)$ è una combinazione degli elementi di $\mathcal{A}$.

# Spazio di probabilità equiprobabile

Se $\forall \omega \in \mathcal{F}$ abbiamo che $P(\omega) = p$ dove $\omega$ è un elemento della partizione di $\Omega$, e abbiamo che:
$$
\begin{aligned}
&\sum_{\omega \in \Omega} P(\omega) = \sum_{\omega \in \Omega} p = p \cdot \sum_{\omega \in \Omega} 1 = p \cdot |\Omega| = 1 \\
&\Rightarrow P(\omega) = \frac{1}{|\Omega|} \quad \forall \omega \in \Omega
\end{aligned}
$$

## Esempio
Se lancio due dadi, quale è la probabilità che la somma dei due dadi sia 7?

Allora definiamo $\overline{\Omega}$ = gli esiti possibili dove la somma dei due dadi fa 7.

Potremmo pensare inizialmente di contare i possibili casi favorevoli come le possibili somme di due dadi, cioè 11 possibili somme. Il problema è che queste somme non sono equiprobabili. C'è un solo modo di ottenere 2 (1+1) ma ci sono più modi di ottenere 7, quindi non possiamo usare la formula della probabilità equiprobabile sulle possibili somme.

Però possiamo usarla su eventi equiprobabili, cioè su tutte le combinazioni di dadi, che sono 36 (6 per il primo dado e 6 per il secondo dado). Allora contiamo i casi favorevoli, cioè le combinazioni di dadi che danno come somma 7: (1,6), (2,5), (3,4), (4,3), (5,2), (6,1). Quindi ci sono 6 casi favorevoli. 
Ottenendo quindi che:

- $\Omega = \{ (1,1), (1,2), \ldots, (6,5), (6,6) \}$ con $|\Omega| = 36$
- $P(\alpha) = \frac{\text{numero di coppie che danno} \ \alpha}{|\Omega|}$

allora
$$
P(7) = \frac{|\{(1,6), (2,5), (3,4), (4,3), (5,2), (6,1)\}|}{|\Omega|} = \frac{6}{36} = \frac{1}{6}
$$

Da notare che contiamo sia (1,6) che (6,1) dato che dobbiamo considerare le facce sia del primo che secondo dado.

# Principio fondamentale del calcolo combinatorio
Se gli elementi di un insieme $E$ possono essere determinati meediante $k$ scelte successive, in cui ad ogni scelta ho $n_1, n_2, \ldots, n_k$ esiti, allora il numero totale di elementi di $E$ è dato da:
$$|E| = n_1 \cdot n_2 \cdot \ldots \cdot n_k$$

## Esempio

Un comitato universitario è composto da 3 studenti, 4 ricercatori, 5 professori e 2 amministrativi. In quanti modi si può formare un sottocomitato di 4 persone composto da 1 rappresentante di ogni categoria?

Ci sono $3 \cdot 4 \cdot 5 \cdot 2 = 120$ sottocomitati possibili

# Fattoriale 

$$
n! = n \cdot (n-1) \cdot (n-2) \cdot \ldots \cdot 2 \cdot 1 = n \cdot (n-1)!
$$
Per definizione $0! = 1! = 1$.

# Calcolo della cardinalità di insiemi
Ci sono vari modi per calcolare la cardinalità di insiemi:

## Disposizioni con ripetizioni
dispongo gli elementi in uno specifico ordine, cioè le sequnze di tipo $AB \ne BA$. Posso scegliere un elemento anche più di una volta, tipo $AA$. Se ho $n$ elementi e voglio formare sequenze di $k$ elementi, allora il numero di sequenze è dato da $n^k$.

## Permutazioni 
dispongo gli elementi in uno specifico ordine, cioè le sequnze di tipo $AB \ne BA$. Posso scegliere un elemento al più una volta, per esempio $AA$ non è una permutazione. è come se prendessi man mano un elemento da una scatola e lo mettessi in fila, avrò $n \cdot (n-1) \cdot (n-2) \cdot \ldots \cdot 2 \cdot 1 = n!$ modi per disporre $n$ elementi in fila.

Per esempio:
- in quanti modi posso disporre 9 persone in fila? $9!$.
- In una gara dove ci sono 6 donne e 4 uomini, quali sono le possibili classifiche finali? $10!$. E se le classifiche fossero separate? $6! \cdot 4!$.

## Disposizioni senza ripetizioni
Dispongo gli elementi in uno specifico ordine, cioè le sequnze di tipo $AB \ne BA$. Posso scegliere un elemento al più una volta, per esempio $AA$ non è una disposizione. Se ho $n$ elementi e voglio formare sequenze di $k$ elementi, allora il numero di sequenze è dato da $\frac{n!}{(n-k)!}$. Notiamo che se $k = n$, allora otteniamo $n!$, cioè il numero di permutazioni di $n$ elementi.

Per esempio:
In una gara tra 9 concorrenti, quante sono le possibili classifiche dei migliori 3? $\frac{9!}{(9-3)!} = \frac{9!}{6!} = 9 \cdot 8 \cdot 7$.

## Combinazioni senza ripetizioni
Non dispongo gli elementi in un ordine specifico, cioè le sequnze di tipo $AB = BA$. Posso scegliere un elemento al più una volta. Se ho $n$ elementi e voglio formare sequenze di $k$ elementi, allora il numero di sequenze è dato da $\binom{n}{k} = \frac{n!}{k! (n-k)!}$.

Per esempio:
Da un urna con 6 palline numerate, voglio calcolare il numero di combinazioni di 2 estrazioni (senza reinserire le palline estratte) pere poter estrarre le palline 1 e 2. Allora il numero di coppie non ordinate è dato da $\binom{6}{2} = \frac{6!}{2! \cdot 4!} = 15$ e quindi la probabilità che questa coppia sia 1 e 2 è $\frac{1}{15}$