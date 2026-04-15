# Esercizio

Un ubriaco ha $N$ chiavi, di cui una sola apre la porta di casa, ma lui non riesce a riconoscere quale sia, allora le prova tutte, una dopo l'altra, scartando quelle appena provate. 

- qual è la probabilità che l'ubriaco apra la porta al $k$-esimo tentativo? $P(X = k)$
- qual è il valore atteso di $X$? $\mathbb{E}[X]$

Le variabili non sono indipendenti (campionamento senza reinserimento), e può fare al più $N$ tentativi, quindi $X \in \{1, 2, \ldots, N\}$.

Il problema chiede il primo tentativo con la chiave giusta. **Non possiamo usare la distribuzione geometrica** perché questa richiede variabili indipendenti (con reinserimento), mentre qui ogni tentativo esclude le chiavi già provate.

Usiamo invece un approccio diretto tramite probabilità condizionate. L'evento $X = k$ significa che i primi $k-1$ tentativi sono sbagliati e il $k$-esimo è quello giusto:

$$P(X = k) = \underbrace{\frac{N-1}{N}}_{\text{1° sbagliata}} \cdot \underbrace{\frac{N-2}{N-1}}_{\text{2° sbagliata}} \cdots \underbrace{\frac{N-k+1}{N-k+2}}_{\text{(k-1)° sbagliata}} \cdot \underbrace{\frac{1}{N-k+1}}_{\text{k° giusta}}$$

Questo è un prodotto telescopico: ogni numeratore cancella il denominatore del fattore successivo, lasciando solo:

$$\boxed{P(X = k) = \frac{1}{N}}, \quad k \in \{1, \ldots, N\}$$

In alternativa, per simmetria: poiché tutte le $N!$ permutazioni delle chiavi sono equiprobabili, la chiave giusta ha la stessa probabilità $\frac{1}{N}$ di trovarsi in qualsiasi posizione $k$.

$X$ segue quindi una **distribuzione uniforme discreta** su $\{1, \ldots, N\}$.

Poiché $X \sim \text{Uniform}\{1, \ldots, N\}$:

$$\mathbb{E}[X] = \frac{1}{N} \sum_{k=1}^{N} k = \frac{1}{N} \cdot \frac{N(N+1)}{2} = \boxed{\frac{N+1}{2}}$$

L'ubriaco si aspetta in media di aprire la porta a metà delle chiavi disponibili.

# Distribuzione Multinomiale

$$
\large{
\underline{X} \sim \mathcal{P}_N(\underline{p})
}
$$

**Idea concettuale:** modella il risultato di $N$ esperimenti indipendenti in cui ogni prova può avere $q$ esiti possibili, generalizzando il concetto della distribuzione Binomiale (che prevede solo due esiti). Il vettore $\underline{X}$ di variabili aleatorie conta quante volte si è verificato ogni specifico evento.

**Quando si usa:** quando un esperimento con più di due risultati mutuamente esclusivi viene ripetuto $N$ volte in modo indipendente, con probabilità costanti ad ogni tentativo. Ad esempio, estrarre con rimpiazzo palline di svariati colori da un'urna.

Sia $\underline{X}$ un vettore di variabili aleatorie a $q$ componenti, che rappresentano i conteggi degli esiti in $N$ prove indipendenti. Posto che ogni esito $i$ ha probabilità $p_i$ di verificarsi ($\sum_{i=1}^q p_i = 1$), la probabilità che in $N$ tentativi l'esito $i$ si verifichi esattamente $n_i$ volte (con $\sum_{i=1}^q n_i = N$ e $0 \le n_i \le N$) è definita dalla probabilità multinomiale:

$$
P(n_1, \dots, n_q) = \frac{N!}{n_1! \dots n_q!} p_1^{n_1} \dots p_q^{n_q}
$$

## Esempio

Supponiamo di avere un'urna con palline di $q$ colori diversi, ognuno dei quali appare con una proporzione tale che la probabilità di pescare il colore $i$ sia uguale a $p_i$.
Se eseguiamo $N$ estrazioni con rimpiazzo (ovvero prove indipendenti), avremo estratto una certa configurazione di colori:

$$
\sum_{i=1}^q n_i = N \quad \text{con } \begin{cases} 
n_1 \text{ volte il colore 1} \\ 
n_2 \text{ volte il colore 2} \\ 
\dots \\ 
n_q \text{ volte il colore } q 
\end{cases}
$$

Definiamo quindi le variabili aleatorie $X_K^{(i)}$ come funzioni indicatrici per ogni colore $i$ estratto alla $K$-esima estrazione:

$$
X_K^{(i)} = \begin{cases} 
1 & \text{se alla } K\text{-esima estrazione esce il colore } i \\ 
0 & \text{altrimenti} 
\end{cases}
$$

La distribuzione ci restituisce la probabilità congiunta che l'evento categorico si verifichi esattamente secondo le occorrenze $n_i$ per ciascun colore $i$.

# Esercizio 

Ho 3 palline numerate ed eseguo 3 estrazioni senza rimpiazzo. Denoto con:

- $X$ la variabile aleatoria che indica il numero della prima pallina estratta
- $Y$ la variabile aleatoria che indica il numero più grande tra le prime 2 palline estratte, cioè $Y = \max(X_1, X_2)$

Allora chiedo:

1. Trovare la distribuzione congiunta e verificare che sia normalizzata.
2. Calcolare le marginali e verificare la normalizzazione.
3. Calcolare la distribuzione di $Z = Y - X$ 
4. Calcolare la covarianza 

## 1. Distribuzione congiunta

Poiché le estrazioni avvengono senza rimpiazzo, la probabilità che escano $X_1 = X_2 = 1$ è 0. Quindi i valori che assumono le variabili $X$ e $Y$ sono $X \in \{1, 2, 3\}$ e $Y \in \{2, 3\}$, ovvero $Y$ non può valere 1.

A partire dall'evento $\omega : \underline{X} = (x_1, x_2)$ (dove $x_1$ è la prima pallina e $x_2$ la seconda) costruisco $P(X, Y)$:

- $P(X=1, Y=2) = P(X_1=1, X_2=2) = P(X_2=2|X_1=1)P(X_1=1) = \frac{1}{2} \cdot \frac{1}{3} = \frac{1}{6}$
- $P(X=1, Y=3) = \frac{1}{3} \cdot \frac{1}{2} = \frac{1}{6}$
- $P(X=2, Y=2) = P(X_1=2, X_2=1) = \frac{1}{3} \cdot \frac{1}{2} = \frac{1}{6}$
- $P(X=2, Y=3) = P(X_1=2, X_2=3) = \frac{1}{6}$
- $P(X=3, Y=3) = P(X_1=3, X_2=2) + P(X_1=3, X_2=1) = \frac{2}{6}$

I possibili valori che possono assumere $X$ e $Y$ sono riassunti nella seguente tabella:

| Y \ X | X =  1 | X =  2 | X =  3 |
|---|---|---|---|
| **Y = 2** | $\frac{1}{6}$ | $\frac{1}{6}$ | 0 |
| **Y = 3** | $\frac{1}{6}$ | $\frac{1}{6}$ | $\frac{2}{6}$ |

Che è evidentemente normalizzata:

$$ \sum_{i,j} P(x_i, y_j) = 1 = \frac{1}{6} \cdot 4 + \frac{2}{6} $$

## 2. Distribuzione marginale

La marginale della $X$ è evidentemente una distribuzione omogenea (dato che le palline sono identiche):

$$ P_X(X=x) = \frac{1}{3} \quad \forall x \in \{1, 2, 3\} $$

La marginale della $Y$ è data da:

- $P_Y(Y=2) = \sum_{x_i} P(x_i, 2) = \frac{1}{3}$
- $P_Y(Y=3) = \sum_{x_i} P(x_i, 3) = \frac{2}{3}$

## 3. Distribuzione di Z

Bisogna dire che valori assume $Z = Y - X$ e con quali probabilità.
$Z = Y - X \ge 0$ perché $P(Y \ge X) = 1$.
I valori che possiamo ottenere per scarto sono:
- $z_1 = 2-1 = 1$
- $z_2 = 3-2 = 1$
- $z_3 = 3-1 = 2$
- $z_4 = 2-2 = 0$
- $z_5 = 3-3 = 0$

Quindi $Z \in \{0, 1, 2\}$.

Calcoliamo le probabilità:

- $P(Z=1) = P(X=1, Y=2) + P(X=2, Y=3) = \frac{2}{6} = \frac{1}{3}$
- $P(Z=2) = P(X=1, Y=3) = \frac{1}{6}$
- $P(Z=0) = P(X=2, Y=2) + P(X=3, Y=3) = \frac{3}{6} = \frac{1}{2}$

Verifichiamo la normalizzazione:

$$ \sum_{k=0}^{2} P(Z=k) = \frac{3}{6} + \frac{1}{6} + \frac{2}{6} = \frac{6}{6} = 1 $$

## 4. Covarianza

Osserviamo innanzitutto che non ci aspettiamo una covarianza nulla in quanto evidentemente le 2 variabili non sono indipendenti.

Basta vedere, ad esempio, la probabilità che $X = 3$ e $Y = 2$. La probabilità congiunta è nulla $P(3,2)=0$, mentre entrambe le probabilità marginali di $P_X(X=3)$ e $P_Y(Y=2)$ sono strettamente positive.

Calcoliamo la covarianza analiticamente usando la formula:
$$ \text{Cov}(X,Y) \equiv \mathbb{E}[(X - \mathbb{E}[X])(Y - \mathbb{E}[Y])] = \mathbb{E}[XY] - \mathbb{E}[X]\mathbb{E}[Y] $$

Troviamo prima i valori attesi di $X$ e $Y$:
$$ \mathbb{E}[X] = \sum_{k=1}^{3} k P_X(X=k) = \frac{1}{3} (1+2+3) = \frac{1}{3} \cdot 6 = 2 $$
$$ \mathbb{E}[Y] = \sum_{k=2}^{3} k P_Y(Y=k) = 2 \cdot \frac{1}{3} + 3 \cdot \frac{2}{3} = \frac{1}{3}(2+6) = \frac{8}{3} $$

Calcoliamo ora il valore atteso del prodotto $\mathbb{E}[XY]$:
$$ \mathbb{E}[XY] = \sum_{k,j} k j P_{XY}(X=k, Y=j) = $$
$$ = (1 \cdot 2 + 2 \cdot 2 + 1 \cdot 3 + 2 \cdot 3)\frac{1}{6} + (3 \cdot 3)\frac{2}{6} = (2+4+3+6)\frac{1}{6} + \frac{18}{6} = \frac{15+18}{6} = \frac{33}{6} = \frac{11}{2} $$

Infine, calcoliamo la covarianza:
$$ \text{Cov}(X,Y) = \frac{11}{2} - \frac{8}{3} \cdot 2 = \frac{33 - 32}{6} = \frac{1}{6} $$