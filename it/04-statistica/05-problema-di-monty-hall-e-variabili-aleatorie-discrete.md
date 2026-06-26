---
title: "Esercizio: problema di Monty Hall e variabili aleatorie discrete"
description: "Risoluzione formale del paradosso di Monty Hall tramite probabilità condizionata, introduzione alle variabili aleatorie discrete con distribuzione, valore atteso e proprietà."
type: lecture
---

# Esercizio

Il gioco di monty hall ci sono 3 scatole, $A, B, C$ e si svolge:

1) In una scatola ho un premio e le altre 2 sono vuote
2) Il giocatore sceglie una scatola ma non la apre
3) Il conduttore sa dove si trova il premio, ne sceglie un altra tra le altre 2 dove sa che non c'è il premio e la apre, escludendola dal gioco.
4) Il giocatore può decidere se restare con la scatola scelta o cambiare con l'altra scatola rimasta.

A questo punto, cosa conviene al giocatore? Restare, cambiare o è indifferente?

è da notare che il conduttore sa dove si trova il premio, quindi questo condiziona la scelta del giocatore. Se non lo sapesse, la probabilità di vincere sarebbe 50% restando o cambiando.

Abbiamo 3 eventi $A, B, C$ cioè se il premio è nella scatola A, B o C rispettivamente. Facciamo l'ipotesi che il giocatore scelga la scatola A.

Inizialmente $P(A) = P(B) = P(C) = \frac{1}{3}$
Ma poi il conduttore apre una scatola vuota, facciamo sia la $C$. 

Allora analizziamo i casi:

| Scenario | La tua scelta iniziale | Azione di Monty (scatola aperta) | Risultato se CAMBI |
| --- | --- | --- | --- |
| **1** | Scegli la **Scatola Vuota A** | Apre la Scatola Vuota B | **VINCI la Scatola Premio** |
| **2** | Scegli la **Scatola Vuota B** | Apre la Scatola Vuota A | **VINCI la Scatola Premio** |
| **3** | Scegli la **Scatola Premio** | Apre una delle scatole vuote | **PERDI (Prendi Scatola Vuota)** |


Ora calcoliamolo formalmente:
- $A$ = probabilità che il premio è nella scatola A
- $A^c$ = probabilità che il premio non è nella scatola A, ma è in $B \cup C$
- $C^{con}$ = probabilità che il **con**duttore scelga tra $B$ e $C$ quella senza premio, senza perdere generalità, diciamo che apre la scatola $C$.
- $B$ = probabilità che il premio è nella scatola B

Vogliamo calcolare $P(A | C^{con})$, vediamo i due casi, cioè se il premio è nella scatola A o se è nella scatola B:


**Caso 1: Il premio è nella scatola A**
$$
P(A | C^{con}) = \frac{P(A \cap C^{con})}{P(C^{con})}
$$

Dato che se il premio è in $A$, non sarà in C, allora $A \subset C^{con}$, quindi $P(A \cap C^{con}) = P(A)$.
Sappiamo anche che l'evento $C^{con}$ è certo, quindi ha probabilità 1, quindi $P(C^{con}) = 1$.

$$
P(A | C^{con}) = \frac{P(A)}{1} = P(A) = \frac{1}{3}
$$

**Caso 2: Il premio è nella scatola B**
Dato che questo è l'evento complementare al caso 1:
$$
P(B | C^{con}) = 1 - P(A | C^{con}) = 1 - \frac{1}{3} = \frac{2}{3}
$$

E quindi al giocatore conviene sempre cambiare, perché ha una probabilità di vincere del 2/3 contro 1/3 se resta con la scelta iniziale.

# Variabili aleatorie discrete

Una variabile aleatoria è un applicazione dello spazio delle configurazioni $\Omega$ in $\mathbb{R}$, cioè associa ad ogni evento un numero reale. Questo è discreto se lo spazio delle configurazioni è discreto, cioè finito o numerabile.

$$
X: \Omega \to \mathbb{R}
$$

Facciamo per esempio il lancio di una moneta.

- $\Omega = \{T, C\}$
- $X = \mathbb{1}_\text{testa}$
    - $X(T) = 1$   
    - $X(C) = 0$
- $P(\{T\}) = p$
- $P(\{C\}) = 1 - p$

$$
\begin{aligned}
P(\{T\}) &= P(\{w \in \mathcal{F} : X(w) = 1\}) = p 
\\ \\
P(\{C\}) &= P(\{w \in \mathcal{F} : X(w) = 0\}) = 1 - p \\ \\
P(\{ \Omega \}) &= P(\{w \in \mathcal{F} : X(w) = \{0,1 \}\}) \\
&= P(\{w \in \mathcal{F} : X(w) = 0\} \cup \{w \in \mathcal{F} : X(w) = 1\}) \\
&= P(\{C\}) + P(\{T\}) = 1
\end{aligned}
$$


## Osservazione (Legge o Distribuzione di X)

Se l'immagine $Im_X(\Omega)$ (ovvero l'insieme dei possibili valori che assume la variabile aleatoria) è discreta, allora in genere anche lo spazio degli eventi $\Omega$ è trattabile come discreto (finito o numerabile).

La probabilità che la variabile aleatoria $X$ assuma un valore all'interno di un certo sottoinsieme di valori $A$ si definisce come **misura di probabilità (o legge) di $X$** e si indica con $\mu_{X}(A)$. Formalmente:

$$
\begin{aligned}
\mu_{X}(A) = P(X \in A) &= P(\{w \in \mathcal{F} : X(w) \in A\}) \\
&= \sum_{x_i \in A} P(X = x_i) = \sum_{x_i \in A} P_X(x_i)
\end{aligned}
$$

**Scomposizione della formula:**
- $\mu_{X}(A)$ oppure $P(X \in A)$: indicano la probabilità complessiva che il risultato numerico della variabile $X$ si trovi tra i valori dell'insieme $A$.
- $P(\{w \in \mathcal{F} : X(w) \in A\})$: definizione rigorosa. Calcola la probabilità considerando tutti i risultati fisici originari ($w$ dello spazio campionario) per i quali la regola $X$ restituisce un numero che fa parte di $A$.
- $\sum_{x_i \in A} P(X = x_i)$: essendo nel caso discreto, la probabilità totale su $A$ è pari alla somma delle probabilità dei singoli scenari $x_i$ che appartengono ad $A$.
- $P_X(x_i)$: è la notazione più compatta per $P(X = x_i)$ ed è conosciuta come **Funzione di Massa di Probabilità (PMF)**.

Calcolare la distrubuzione di una variabile aleatoria vuol dire specificare che valori può assumere la variabile e con che probabilità.

## Esempio

- $\Omega = \{ \omega_1, \omega_2, \omega_3, \omega_4 \}$
- $X: \Omega \to \mathbb{R}$:
$$
\begin{cases}
X(\omega_1) = 3 & x_1 \\
X(\omega_2) = X(\omega_3) = 1 & x_2 \\
X(\omega_4) = 2 & x_3
\end{cases}
$$

Ora supponiamo che 
$$
P(\omega = 1) = P(\omega = 2) = P(\omega = 3) = P(\omega = 4) = \frac{1}{4}
$$

Calcoliamo la distribuzione di $X$:

$P(X = 1) = \mu_X(1) = P(\{\omega: X(\omega) = 1\})$

Dato che $X=1$ per $\omega_2$ e $\omega_3$, allora
$$
\begin{aligned}
P(\{\omega: X(\omega) = 1\}) &= P(\{\omega_2 = 2 \} \cup \{\omega_3 = 3\}) \\
&= P(\{\omega_2 = 2\}) + P(\{\omega_3 = 3\}) \\
&= \frac{1}{4} + \frac{1}{4} = \frac{1}{2}
\end{aligned}
$$

Allo stesso modo facciamo anche per $x=2$ e $x=3$:
$$
P_X(x = 2) = P_X(x = 3) = \frac{1}{4}
$$

## Esempio

Supponiamo che il nosto esperimento consista nel lanciare 1 moneta 3 volte. Definiamo $X$ = numero di teste ottenute.

Calcolare la distribuzione di $X$.

- $\Omega$ = sequenze di 3 lanci equiprobabili, quindi $\Omega = \{TTT, TTC, TCT, TCC, CTT, CTC, CCT, CCC\}$ con $|\Omega| = 2^3$.
- $X: \Omega \to \mathbb{R}$, allora $X = \{0, 1, 2, 3\}$, dove $X(\omega)$ è il numero di teste nella sequenza $\omega$.

- $P(X = 0) = P(\omega = C_1C_2C_3) = (\frac{1}{2})^3 = \frac{1}{8}$, dove abbiamo $C_1C_2C_3$ che rappresenta la sequenza di 3 lanci con tutte le monete che mostrano croce.
- $P(X = 1) = P(\omega = T_1C_2C_3 \cup C_1T_2C_3 \cup C_1C_2T_3) = 3 \cdot (\frac{1}{2})^3 = \frac{3}{8}$, dove abbiamo 3 sequenze che rappresentano il caso in cui c'è una sola testa e due croci.
- $P(X = 2) = P(\omega = T_1T_2C_3 \cup T_1C_2T_3 \cup C_1T_2T_3) = 3 \cdot (\frac{1}{2})^3 = \frac{3}{8}$, dove abbiamo 3 sequenze che rappresentano il caso in cui ci sono due teste e una croce.
- $P(X = 3) = P(\omega = T_1T_2T_3) = (\frac{1}{2})^3 = \frac{1}{8}$, dove abbiamo la sequenza di 3 lanci equiprobabili che rappresenta il caso in cui tutte le monete mostrano testa.

Controlliamo che sia una distribuzione di probabilità, cioè che la somma delle probabilità sia 1:
$$
\begin{aligned}
\sum_{i \in X} P(X = i) &= P(X = 0) + P(X = 1) + P(X = 2) + P(X = 3) \\
&= \frac{1}{8} + \frac{3}{8} + \frac{3}{8} + \frac{1}{8} = 1
\end{aligned}
$$

# Valore atteso: Media di una variabile aleatoria

Data una variabile aleatoria $x \in \mathbb{R}$ chiamiamo valore atteso la media pesata dei valori della variabile, cioè:

$$
\text{valore atteso} = \mathbb{E}[X] = \sum_{x_i \in X} x_i P(X = x_i)
$$

## Esempio

![[Pasted image 20260318152544.png]]

## Esempio

Prendiamo una distribuzione simmetrica rispetto a 0

- $X \in \{-1, 1\}$
- $P(X = -1) = P(X = 1) = \frac{1}{2}$
Allora il valore atteso è:
$$
\begin{aligned}
\mathbb{E}[X] &= (-1) \cdot \frac{1}{2} + 1 \cdot \frac{1}{2} \\
&= 0
\end{aligned}
$$

Che in generale vale per tutte le distribuzioni simmetriche rispetto a 0:

Se per $P(x) = P(-x) \ \forall x$, allora $\mathbb{E}[X] = 0$. 

# Distrubuzione congiuntiva e indipendenza di variabili aleatorie

Sia $(X_1, ..., X_n)$ un vettore di variabili aleatorie, allora definiamo la distribuzione di probabilità **Congiunta** delle variabili aleatorie $X_1, ..., X_n$ come la probabilità con:

$$
X_i \in \Omega_i \quad \Omega = \Omega_1 \times ... \times \Omega_n
$$

Vuol dire che un risultato della distribuzione congiunta è un vettore di valori, uno per ogni variabile aleatoria $(x_1, ..., x_n)$.

e quindi che:
$$
P_{X_1, ..., X_n}(x_1, ..., x_n) = P(\{X_1 = x_1\} \cap ... \cap \{X_n = x_n\})
$$

Tale che valgano le seguenti proprietà:
a) $0 < P_{\underline{X}}(\underline{x}) < 1 \quad \forall \underline{x} \in \Omega$
b) $\sum_{\underline{x} \in \Omega} P_{\underline{X}}(\underline{x}) = 1$

Allora le variabili aleatorie $(X_1, ..., X_n)$ di distribuzione congiunte $P_{X_1, ..., X_n}(x_1, ..., x_n)$ sono dette **indipendenti** se e solo se:

$$
P_{X_1, ..., X_n}(x_1, ..., x_n) = \prod_{i=1}^n P_{X_i}(x_i)
$$

Questo ci dice che se le variabili sono indipendenti, sapere il valore di una variabile non ci dà nessuna informazione sul valore dell'altra variabile, e quindi la probabilità congiunta è semplicemente il prodotto delle probabilità marginali $P_{X_i}(x_i)$.

## Distribuzioni Marginali

Data la distribuzione congiunta di $n$ v.a., definiamo $n$ **marginali**:

$$
\begin{cases}
P_{X_1}(\cdot) := \sum_{x_2, \ldots, x_n} P_{\underline{X}}(\cdot, x_2, \ldots, x_n) = \sum_{i \neq 1} P_{\underline{X}}(\cdot, x_2, \ldots, x_n) \\
\vdots \\
P_{X_n}(\cdot) := \sum_{x_1, \ldots, x_{n-1}} P_{\underline{X}}(x_1, \ldots, x_{n-1}, \cdot)
\end{cases}
$$

Data la distribuzione congiunta si ottengono le marginali, ma non viceversa: se ho $n$ distribuzioni marginali senza altre informazioni, non posso ricostruire la distribuzione congiunta (mi serve sapere come dipendono tra loro).

**le marginali sono normalizzate.** Poiché $P_{\underline{X}}$ è una distribuzione di probabilità (quindi normalizzata a 1), anche ogni marginale lo è. Infatti, sommando la marginale $P_{X_1}$ su tutti i valori di $x_1$:
$$
\begin{aligned}
\sum_{x_1 \in \Omega_1} P_{X_1}(x_1) &= \sum_{x_1 \in \Omega_1} \sum_{\substack{x_2, \ldots, x_n \\ \in \Omega_2 \times \cdots \times \Omega_n}} P_{\underline{X}}(x_1, \ldots, x_n) \\
&= 1
\end{aligned}
$$
La doppia somma scorre su **tutti** gli elementi di $\Omega = \Omega_1 \times \cdots \times \Omega_n$, quindi il risultato è la somma di tutta la distribuzione congiunta, che vale 1. Lo stesso argomento vale per ogni marginale $P_{X_i}$.

## Esempio - Dado singolo vs. due dadi

Definiamo due variabili aleatorie:
- $X = 1$ se esce un numero **dispari**, $X = 0$ altrimenti (numeri pari: $\{2,4,6\}$, numeri dispari: $\{1,3,5\}$)
- $Y = 1$ se esce uno dei **primi 3 numeri** $\{1,2,3\}$, $Y = 0$ altrimenti ($\{4,5,6\}$)

Analizziamo due scenari distinti:

### Caso 1: stesso dado (variabili dipendenti)

$X$ e $Y$ sono definite sullo stesso lancio, quindi sono in generale **dipendenti**. Lo spazio campionario è $\Omega = \{1,2,3,4,5,6\}$, equiprobabile con $P(\omega) = \frac{1}{6}$.

Tabella della distribuzione congiunta $P_{X,Y}(x,y) = P(X=x, Y=y)$:

|  | $Y=0$ | $Y=1$ |
|--|-------|-------|
| $X=0$ | $P(\{4,6\}) = \frac{2}{6}$ | $P(\{2\}) = \frac{1}{6}$ |
| $X=1$ | $P(\{5\}) = \frac{1}{6}$ | $P(\{1,3\}) = \frac{2}{6}$ |

Le marginali si ricavano sommando per righe/colonne:
- $P_X(0) = \frac{2}{6} + \frac{1}{6} = \frac{3}{6} = \frac{1}{2}$, $\quad P_X(1) = \frac{1}{6} + \frac{2}{6} = \frac{1}{2}$
- $P_Y(0) = \frac{2}{6} + \frac{1}{6} = \frac{1}{2}$, $\quad P_Y(1) = \frac{1}{6} + \frac{2}{6} = \frac{1}{2}$

Verifichiamo se sono indipendenti: dovrebbe valere $P_{X,Y}(x,y) = P_X(x) \cdot P_Y(y)$ per ogni coppia. Controlliamo su $(X=0, Y=0)$:
$$
P_X(0) \cdot P_Y(0) = \frac{1}{2} \cdot \frac{1}{2} = \frac{1}{4} \neq \frac{2}{6} = \frac{1}{3}
$$
Quindi $X$ e $Y$ sono **dipendenti** quando definite sullo stesso dado.

### Caso 2: due dadi diversi (variabili indipendenti)

$X$ è definita sul primo dado, $Y$ sul secondo. I due lanci sono indipendenti, quindi lo spazio campionario è $\Omega = \{1,...,6\}^2$ con $36$ esiti equiprobabili.

Poiché i lanci sono fisicamente indipendenti, la distribuzione congiunta fattorizza:
$$
P_{X,Y}(x,y) = P_X(x) \cdot P_Y(y) = \frac{1}{2} \cdot \frac{1}{2} = \frac{1}{4} \quad \forall (x,y) \in \{0,1\}^2
$$
In questo caso $X$ e $Y$ sono **indipendenti**: il risultato di un dado non ci dà informazioni sull'altro.

# Proprietà del valore atteso

## Linearità
$\mathbb{E}[aX] = a \cdot \mathbb{E}[X]$ per ogni $a \in \mathbb{R}$

Se $\mathbb{E}[|X|] < \infty$ e $\mathbb{E}[|Y|] < \infty$, cioè se $X$ e $Y$ sono variabili aleatorie con valore atteso finito, allora $\mathbb{E}[X + Y] = \mathbb{E}[X] + \mathbb{E}[Y]$ che esso stesso è finito.

## 2.1
Se:
- $\mathbb{E}[|X|] < \infty$
- $\mathbb{E}[|Y|] < \infty$
- $P_{XY}(X \ge Y) = 1$
Allora $\mathbb{E}[X] \ge \mathbb{E}[Y]$.

## 2.2
$\mathbb{E}[X] = \mathbb{E}[Y]$ se e solo se $P_{XY}(X = Y) = 1$.

## 2.3
$|\mathbb{E}[X]| \le \mathbb{E}[|X|]$.

## 2.4
$P(X > Y) = 1$ allora $P(X - Y > 0) = 1$

