---
title: Distribuzioni congiunte, varianza e covarianza
description: "Distribuzioni congiunte di variabili aleatorie discrete, distribuzioni marginali, indipendenza, varianza e covarianza con proprietà e applicazioni a estrazioni con e senza rimpiazzo."
type: lecture
---

# Esempio: distribuzione congiunta di due variabili di Bernoulli

Consideriamo due variabili aleatorie $X$ e $Y$, entrambe funzioni indicatrici definite sugli esiti del lancio di un dado:

$$X = \mathbb{1}_A = \begin{cases} 1 & \text{se esce un numero dispari, ovvero se } \omega \in A = \{1,3,5\} \\ 0 & \text{se esce un numero pari, ovvero se } \omega \in A^C = \{2,4,6\} \end{cases}$$

$$Y = \mathbb{1}_B = \begin{cases} 1 & \text{se esce uno dei primi tre numeri, ovvero se } \omega \in B = \{1,2,3\} \\ 0 & \text{altrimenti, ovvero se } \omega \in B^C = \{4,5,6\} \end{cases}$$

Le **distribuzioni marginali** di $X$ e $Y$ hanno entrambe la stessa distribuzione $\text{Bernoulli}(1/2)$:

$$P_X(X=1) = P(\omega \in A) = \frac{3}{6} = \frac{1}{2} \qquad P_X(X=0) = P(\omega \notin A) = \frac{3}{6} = \frac{1}{2}$$
$$P_Y(Y=1) = P(\omega \in B) = \frac{3}{6} = \frac{1}{2} \qquad P_Y(Y=0) = P(\omega \notin B) = \frac{3}{6} = \frac{1}{2}$$

Nonostante le marginali siano identiche nei due casi seguenti, la **distribuzione congiunta** $P(X,Y)$ cambia radicalmente a seconda di come vengono associati $X$ e $Y$ agli esiti.

---

### 1° caso: Lancio un solo dado e associo $X$ e $Y$ allo stesso esito

Lo spazio campionario è $\Omega = \{1,2,3,4,5,6\}$, con ogni elemento equiprobabile con probabilità $\frac{1}{6}$.

Ricordiamo la definizione di probabilità congiunta:
$$P(X=x, Y=y) := P(\{\omega \in \Omega: X(\omega)=x \text{ e } Y(\omega)=y\})$$

Essendo $I_X = I_Y = \{0, 1\}$, la distribuzione congiunta si rappresenta come una matrice $2 \times 2$. Calcoliamo le quattro probabilità esplicitando, per ogni coppia $(x,y)$, quali elementi di $\Omega$ soddisfano entrambe le condizioni:

- **$P(0,0)$**: $\omega \notin A$ e $\omega \notin B$, ovvero $\omega \in A^C \cap B^C = \{4,6\}$
  $$P(0,0) = \frac{|\{4,6\}|}{6} = \frac{2}{6}$$

- **$P(1,0)$**: $\omega \in A$ e $\omega \notin B$, ovvero $\omega \in A \cap B^C = \{5\}$
  $$P(1,0) = \frac{|\{5\}|}{6} = \frac{1}{6}$$

- **$P(0,1)$**: $\omega \notin A$ e $\omega \in B$, ovvero $\omega \in A^C \cap B = \{2\}$
  $$P(0,1) = \frac{|\{2\}|}{6} = \frac{1}{6}$$

- **$P(1,1)$**: $\omega \in A$ e $\omega \in B$, ovvero $\omega \in A \cap B = \{1,3\}$
  $$P(1,1) = \frac{|\{1,3\}|}{6} = \frac{2}{6}$$

La matrice della distribuzione congiunta è:

| $Y \backslash X$ | $0$ | $1$ | $P_Y$ |
| :---: | :---: | :---: | :---: |
| **$0$** | $2/6$ | $1/6$ | $3/6$ |
| **$1$** | $1/6$ | $2/6$ | $3/6$ |
| **$P_X$** | $3/6$ | $3/6$ | $1$ |

Le **probabilità marginali** si recuperano sommando per riga (per $P_Y$) o per colonna (per $P_X$), confermando i valori $1/2$ calcolati prima.

**$X$ e $Y$ sono indipendenti in questo caso?** No. Affinché siano indipendenti occorrerebbe $P(x,y) = P_X(x) \cdot P_Y(y)$ per ogni coppia. Ma:
$$P(0,0) = \frac{2}{6} \neq \frac{1}{2} \cdot \frac{1}{2} = \frac{1}{4}$$
Quindi $X$ e $Y$ **non sono indipendenti**: conoscere l'esito di $X$ fornisce informazioni su $Y$ (entrambe dipendono dallo stesso lancio).

---

### 2° caso: Lancio 2 dadi distinti e associo $X$ al $1°$ dado e $Y$ al $2°$ dado

Lo spazio campionario è il prodotto cartesiano:
$$\Omega = \Omega_1 \times \Omega_1 = \{(\omega_1, \omega_2) : \omega_1, \omega_2 \in \{1,2,3,4,5,6\}\}, \quad |\Omega| = 36$$

Ogni coppia $(\omega_1, \omega_2)$ ha probabilità $\frac{1}{36}$. Poiché i due lanci sono **fisicamente indipendenti**, vale:
$$P(\omega_1, \omega_2) = P(\omega_1) \cdot P(\omega_2)$$

Questo ci permette di fattorizzare le probabilità congiunte. Infatti $X$ dipende solo da $\omega_1$ e $Y$ solo da $\omega_2$, quindi per ogni coppia $(x, y)$:
$$P(X=x, Y=y) = P(X=x) \cdot P(Y=y) = P_X(x) \cdot P_Y(y)$$

Calcoliamo esplicitamente:

- $P(0,0) = P_X(0) \cdot P_Y(0) = \frac{1}{2} \cdot \frac{1}{2} = \frac{1}{4}$
- $P(1,0) = P_X(1) \cdot P_Y(0) = \frac{1}{2} \cdot \frac{1}{2} = \frac{1}{4}$
- $P(0,1) = P_X(0) \cdot P_Y(1) = \frac{1}{2} \cdot \frac{1}{2} = \frac{1}{4}$
- $P(1,1) = P_X(1) \cdot P_Y(1) = \frac{1}{2} \cdot \frac{1}{2} = \frac{1}{4}$

La matrice della distribuzione congiunta è **uniforme**:

| $Y \backslash X$ | $0$ | $1$ | $P_Y$ |
| :---: | :---: | :---: | :---: |
| **$0$** | $1/4$ | $1/4$ | $1/2$ |
| **$1$** | $1/4$ | $1/4$ | $1/2$ |
| **$P_X$** | $1/2$ | $1/2$ | $1$ |

**$X$ e $Y$ sono indipendenti in questo caso?** Sì. Si verifica che $P(x,y) = P_X(x) \cdot P_Y(y)$ per ogni coppia, per costruzione stessa del problema.

Possiamo verificare il recupero delle marginali sfruttando l'indipendenza:
$$P_Y(0) = \sum_{x \in I_X} P(x,0) = \sum_{x \in I_X} P_X(x) \cdot P_Y(0) = P_Y(0) \underbrace{\sum_{x \in I_X} P_X(x)}_{=1} = \frac{1}{2} \checkmark$$


Le due situazioni producono le stesse marginali $P_X$ e $P_Y$, ma distribuzioni congiunte completamente diverse. Le marginali **non determinano** la congiunta: è necessario conoscere la struttura di dipendenza tra le variabili.

---

# Esempio: estrazione con e senza rimpiazzo

Date 6 palline numerate ($\longrightarrow$ distinguibili):
$$1, 2, 3, 4, 5, 6$$
Ne estraggo 2 **con rimpiazzo** ($\longrightarrow$ indipendenti)

**Calcolare la distribuzione congiunta $P(X, Y)$ (indicando il rispettivo spazio di probabilità) di $X$ e $Y$ dove $X$ è il risultato della prima estrazione e $Y$ quello della seconda (nell'ordine).**

### Soluzione (con rimpiazzo)

Dato che le estrazioni sono con rimpiazzo, lo spazio campionario è $\Omega = \tilde{\Omega} \times \tilde{\Omega}$ dove:
$$\tilde{\Omega} = \{1, 2, 3, 4, 5, 6\}$$
$$\omega = (\omega_1, \omega_2) \quad \text{con } \omega_i \in \tilde{\Omega}$$

Le variabili aleatorie restituiscono i valori estratti:
$$X(\omega) = \omega_1 \qquad Y(\omega) = \omega_2$$

La distribuzione congiunta è:
$$p(X, Y) = P(i, j) = P(\{\omega: X(\omega) = i, Y(\omega) = j\}) = P(\{(\omega_1, \omega_2): \omega_1 = i, \omega_2 = j\})$$

Essendo le estrazioni indipendenti:
$$P(\omega_1 = i \cap \omega_2 = j) = P(\omega_1 = i)P(\omega_2 = j)$$

$$\longrightarrow P(X=i, Y=j) = P_X(X=i)P_Y(Y=j) = \frac{1}{6} \cdot \frac{1}{6} = \frac{1}{36}$$

Lo spazio campionario $\tilde{\Omega} \times \tilde{\Omega}$ conta $6 \times 6 = 36$ combinazioni possibili (rappresentabili su un piano cartesiano discreto $6 \times 6$). Poiché tutti gli eventi sono equiprobabili:
$$P(i, j) = P(\{\omega = (i, j)\}) = \frac{1}{36}$$

---

### Soluzione (senza rimpiazzo)

Evidentemente in questo caso la probabilità congiunta non è pari al prodotto delle probabilità marginali:
$$p(X=i, Y=j) \neq p_X(X=i)p_Y(Y=j)$$

Basta considerare per esempio il caso in cui uscirà due volte lo stesso numero: potendo pescare una pallina solo una volta per ciascun numero senza reinserirla, è un evento impossibile:
$$P(X=i, Y=i) = 0 \neq P_X(X=i)P_Y(Y=i)$$

Lo spazio campionario è ora formato dalle coppie ordinate $\Omega = \{(\omega_1, \omega_2)\}$ dove:
- $\omega_1 \in \tilde{\Omega}$ (6 possibilità)
- $\omega_2 \in \tilde{\Omega} \setminus \{\omega_1\}$ (5 possibilità)

Il numero totale di eventi è $6 \times 5 = 30$. In effetti, l'insieme di tutti quanti gli eventi dell'estrazione originaria, meno quelli con 2 numeri uguali (che sono 6, sulla diagonale), risulta essere $36 - 6 = 30$.

Poiché tutte le coppie ordinate così costruite sono ancora equiprobabili, si ottiene:
$$P(i, j) = \frac{1}{30} \quad \text{(per } i \neq j \text{)}$$

La distribuzione congiunta si può rappresentare in forma tabellare, dove solo gli elementi sulle righe con valori diversi assumono esito di probabilità, e con zeri presenti lungo la diagonale:

| $X \backslash Y$ | $1$ | $2$ | $3$ | $4$ | $5$ | $6$ |
| :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| **$1$** | $0$ | $1/30$ | $1/30$ | $1/30$ | $1/30$ | $1/30$ |
| **$2$** | $1/30$ | $0$ | $1/30$ | $1/30$ | $1/30$ | $1/30$ |
| **$3$** | $1/30$ | $1/30$ | $0$ | $1/30$ | $1/30$ | $1/30$ |
| **$4$** | $1/30$ | $1/30$ | $1/30$ | $0$ | $1/30$ | $1/30$ |
| **$5$** | $1/30$ | $1/30$ | $1/30$ | $1/30$ | $0$ | $1/30$ |
| **$6$** | $1/30$ | $1/30$ | $1/30$ | $1/30$ | $1/30$ | $0$ |

---

# Esempio: probabilità di una differenza limitata

**Calcolare la probabilità che estraendo 2 palline numerate da 6, senza rimpiazzo, queste differiscano 2 o meno di 2.**

### Soluzione

Essendo l'estrazione senza rimpiazzo, abbiamo garantito che $\longrightarrow P(X \neq Y) = 1$.

L'evento da calcolare è $P(X, Y: |X-Y| < 3)$.

Ci sono 2 casi simmetrici (che rappresentano eventi disgiunti):
1. **$X > Y$**: $X - Y \leq 2 \longrightarrow X - 2 \leq Y < X$
2. **$X < Y$**: $Y - X \leq 2 \longrightarrow X < Y \leq X + 2$

Pertanto, la probabilità totale è la somma delle probabilità dei due casi:
$$P(X, Y: |X-Y| < 3) = P(X, Y: X-2 \leq Y < X) + P(X, Y: X < Y \leq X+2)$$

Esplicitiamo le sommatorie sommando le probabilità congiunte per le coppie valide (ricordando che $P(i, j) = \frac{1}{30}$ ovunque):
$$= \left[ \sum_{i=2}^6 P(i, i-1) + \sum_{i=3}^6 P(i, i-2) \right] + \left[ \sum_{i=1}^5 P(i, i+1) + \sum_{i=1}^4 P(i, i+2) \right]$$

Sostituiamo i valori:
$$= \left[ \sum_{i=2}^6 \frac{1}{30} + \sum_{i=3}^6 \frac{1}{30} \right] + \left[ \sum_{i=1}^5 \frac{1}{30} + \sum_{i=1}^4 \frac{1}{30} \right]$$

Le prime due sommatorie hanno rispettivamente 5 e 4 termini. Le seconde due hanno pure 5 e 4 termini, per la simmetria:
$$= 2 \cdot \frac{5 + 4}{30} = \frac{18}{30} = \frac{3}{5}$$

---

# Esempio: probabilità di una sequenza di n variabili aleatorie

**Calcolare la probabilità di una sequenza lunga $n$ di $n$ variabili aleatorie, ottenuta lanciando $n$ volte un dado con:**
$$\underline{X} = (X_1, X_2, \dots, X_n) \quad X_i \in \{0, 1\}$$

Dove le variabili sono così definite per il $j$-esimo lancio:
$$X_j = \begin{cases} 1 & \text{se al } j \text{-esimo lancio esce } 1 \\ 0 & \text{se al } j \text{-esimo lancio esce } \omega \neq 1 \end{cases}$$

### Soluzione

La distribuzione di probabilità per la singola variabile $X_j$ è:
$$P_X(X_j) = \begin{cases} \frac{1}{6} & \text{se } X_j = 1 \\ \frac{5}{6} & \text{se } X_j = 0 \end{cases}$$

Poiché i lanci sono **indipendenti**, la probabilità congiunta dell'intera sequenza è pari al prodotto delle probabilità marginali:
$$P_{\underline{X}}(\underline{x} = (x_1, x_2, \dots, x_n)) = P_{\underline{X}}((X_1 = x_1) \cap (X_2 = x_2) \cap \dots \cap (X_n = x_n)) = \prod_{i=1}^n P_{X_i}(X_i = x_i)$$

Dove ciascuna probabilità è determinata dall'uscita del dado:
$$P_{X_i}(X_i = x_i) = \begin{cases} 1/6 & \text{se all'} i \text{-esimo lancio esce } \omega = 1 \\ 5/6 & \text{se all'} i \text{-esimo lancio esce } \omega \in \{2, 3, 4, 5, 6\} \end{cases}$$

Indicando con $k = \sum_{i=1}^n x_i$ il numero di lanci in cui è uscito 1, la probabilità congiunta si semplifica in:
$$P_{\underline{X}}(\underline{x}) = \left(\frac{1}{6}\right)^k \cdot \left(\frac{5}{6}\right)^{n-k}$$

# Varianza di una variabile aleatoria

La media $\mathbb{E}[X]$ indica il "centro" della distribuzione di $X$, ma non dice nulla su quanto i valori di $X$ siano dispersi attorno a quel centro. Due variabili aleatorie con la stessa media possono essere molto diverse: una che assume sempre valori vicini alla media, e una che oscilla fortemente.

Se $X$ è una variabile aleatoria simmetrica (cioè assume valori simmetrici rispetto allo zero, cioè che $x \in I(\Omega)$ implica $-x \in I(\Omega)$) e ha distribuzione simmetrica, cioè che per ogni $x_i \in I(\Omega)$ vale $P(X = x_i) = P(X = -x_i)$, allora la media di $X$ è zero:
$$
\mathbb{E}[X] = \sum_{x_i \in I(\Omega)} x_i P(X = x_i) = 0
$$

Però questo non ci dice nulla su quanto $X$ si discosta da zero, cioè quanto è "variabile" $X$.

**Perché non usare $\mathbb{E}[X - \mathbb{E}[X]]$?** Questo valore è sempre zero per costruzione (gli scostamenti positivi e negativi si cancellano). Bisogna quindi usare una misura che non permetta la cancellazione, elevando al quadrato:

$$
\sigma^2_X = \text{var}(X) = \mathbb{E}\left[(X - \mathbb{E}[X])^2\right]
$$

Intuitivamente, la varianza misura **quanto in media i valori di $X$ si allontanano dalla media**. Una varianza piccola indica che i valori sono concentrati attorno alla media; una varianza grande indica che sono molto dispersi.

### Esempio

Sia $X \in \{-1, 1\}$ con probabilità $P_X(1) = P_X(-1) = 1/2$.
Calcoliamo il valore atteso:
$$ \mathbb{E}(X) = \sum_{x \in \{-1,1\}} x \cdot \frac{1}{2} = \frac{1}{2} - \frac{1}{2} = 0 $$
Calcoliamo la varianza:
$$ \text{var}(X) = \sum_{x \in \{-1,1\}} (x - 0)^2 P(x) = \sum_{x \in \{-1,1\}} 1 \cdot \frac{1}{2} = \frac{1}{2} + \frac{1}{2} = 1 $$
Uguagliabile anche come:
$$ \mathbb{E}(X^2) = \text{var}(X) = 1 \quad \longrightarrow \quad \mathbb{E}(X^2) - \mathbb{E}^2(X) = 1 $$

> **Nota:** Il valore atteso è $0$ anche se $X \neq 0$ sempre. La varianza è $1$, che indica che il valore atteso che la variabile si discosti dal suo valore medio è $1$.

### Esempi: Confronto tra 2 v.a. $X_1$ e $X_2$

Consideriamo due variabili aleatorie con lo stesso valore atteso ma diversa dispersione.

Se $X_1 \in \{-100, 100\}$ con probabilità $(1/2, 1/2)$:
$$ \mathbb{E}(X_1) = \frac{1}{2}(-100) + \frac{1}{2}(100) = 0 $$
$$ \text{var}(X_1) = \mathbb{E}((X_1 - 0)^2) = \mathbb{E}(X^2) = (100)^2 = 10000 $$

Se consideriamo invece $X_2 \in \{-1, 0, 1\}$ con probabilità $P(-1) = P(1) = 1/8$ e $P(0) = 3/4$:
$$ \mathbb{E}(X_2) = -1 \cdot \frac{1}{8} + 0 \cdot \frac{3}{4} + 1 \cdot \frac{1}{8} = 0 $$
$$ \text{var}(X_2) = \mathbb{E}((X_2 - 0)^2) = \mathbb{E}(X_2^2) = (-1)^2 \cdot \frac{1}{8} + 0^2 \cdot \frac{3}{4} + 1^2 \cdot \frac{1}{8} = \frac{2}{8} = \frac{1}{4} $$

Notiamo che entrambe hanno media nulla, ma:
$$ \text{var}(X_2) \ll \text{var}(X_1) $$
(Questo ovviamente accade perché $X_2$ è più concentrata al centro).


## Proprietà della varianza

- La varianza è sempre non negativa: $\sigma^2_X \geq 0$ (è una media di quadrati).
- **Formula alternativa** (spesso più comoda nei calcoli):
$$\text{var}(X) = \mathbb{E}[X^2] - (\mathbb{E}[X])^2$$
  Questa si ricava espandendo il quadrato: $\mathbb{E}[(X-\mu)^2] = \mathbb{E}[X^2 - 2\mu X + \mu^2] = \mathbb{E}[X^2] - 2\mu^2 + \mu^2 = \mathbb{E}[X^2] - \mu^2$.

- Come conseguenza: $\mathbb{E}[X^2] \geq (\mathbb{E}[X])^2$
- **Scalamento**: $\text{var}(aX) = a^2 \text{var}(X)$ per ogni $a \in \mathbb{R}$ — NON è lineare, è quadratica nel fattore di scala.
- **Traslazione**: $\text{var}(X + a) = \text{var}(X)$ per ogni $a \in \mathbb{R}$ — traslare non cambia la dispersione.


# Covarianza di due variabili aleatorie

La **covarianza** misura il grado e il verso della dipendenza lineare tra due variabili aleatorie $X$ e $Y$: indica se tendono a variare **insieme** o in **direzioni opposte**.

$$
\text{cov}(X, Y) = \mathbb{E}\left[(X - \mathbb{E}[X])(Y - \mathbb{E}[Y])\right]
$$

L'idea intuitiva è la seguente: si considera il prodotto degli scostamenti di $X$ e $Y$ dalle rispettive medie.
- Se $X$ è sopra la sua media e $Y$ è sopra la sua ($\uparrow\uparrow$), il prodotto è **positivo**.
- Se $X$ è sopra la sua media e $Y$ è sotto la sua ($\uparrow\downarrow$), il prodotto è **negativo**.

La media di questi prodotti (la covarianza) sarà quindi:
- **$\text{cov}(X,Y) > 0$**: $X$ e $Y$ tendono a muoversi nella stessa direzione (al crescere di $X$ cresce anche $Y$).
- **$\text{cov}(X,Y) < 0$**: $X$ e $Y$ tendono a muoversi in direzioni opposte (al crescere di $X$ decresce $Y$).
- **$\text{cov}(X,Y) = 0$**: $X$ e $Y$ sono **incorrelate** (non c'è dipendenza lineare tra loro).

### Proprietà della covarianza

- **Simmetria**: $\text{cov}(X, Y) = \text{cov}(Y, X)$
- **Bilinearità**: $\text{cov}(aX + b, cY + d) = ac \cdot \text{cov}(X, Y)$
- **Indipendenza implica covarianza nulla**: se $X \perp Y$ allora $\mathbb{E}[XY] = \mathbb{E}[X]\mathbb{E}[Y]$, quindi $\text{cov}(X,Y) = 0$. Il viceversa **non vale in generale**: covarianza nulla non implica indipendenza (rileva solo dipendenza lineare).

### Varianza della somma

Dalla definizione di covarianza si ricava:
$$
\text{var}(X + Y) = \text{var}(X) + \text{var}(Y) + 2 \cdot \text{cov}(X, Y)
$$

Se $X$ e $Y$ sono **indipendenti** (o anche solo incorrelate), $\text{cov}(X, Y) = 0$ e quindi:
$$
\text{var}(X + Y) = \text{var}(X) + \text{var}(Y)
$$

# Momento p-esimo

**DEF:** Il **momento p-esimo** $\mathbb{E}[X^p]$ di una variabile aleatoria $X$ è il valore atteso della variabile $X^p$, ovvero:

$$
\mathbb{E}[X^p] = \sum_{x \in \mathcal{X}} x^p \, P_X(x)
$$

dove $p \in \mathbb{N}$ con $p \geq 1$.

**Intuizione:** I momenti descrivono la "forma" della distribuzione di $X$. Ogni ordine $p$ cattura un aspetto diverso:

| Ordine $p$ | Momento | Significato |
| :---: | :---: | :--- |
| $p=1$ | $\mathbb{E}[X]$ | **Media** — valore centrale atteso |
| $p=2$ | $\mathbb{E}[X^2]$ | Usato per calcolare la **varianza**: $\text{var}(X) = \mathbb{E}[X^2] - (\mathbb{E}[X])^2$ |
| $p=3$ | $\mathbb{E}[X^3]$ | Legato alla **asimmetria** (skewness) della distribuzione |
| $p=4$ | $\mathbb{E}[X^4]$ | Legato alla **curtosi**, ovvero quanto è "appuntita" la distribuzione |

**Momento p-esimo centrato:** Si definisce anche il momento centrato rispetto alla media:
$$
\mathbb{E}[(X - \mathbb{E}[X])^p]
$$
Il caso $p=2$ dà la **varianza**, che è il momento secondo centrato.


# Funzione di una variabile aleatoria discreta

Data una variabile aleatoria discreta $X$ con dominio $D(X) \subset \mathbb{R}$, e una funzione $g: D(X) \to \mathbb{R}$, anche $g(X)$ è una variabile aleatoria discreta. La sua distribuzione di probabilità è:
$$
P_g(g = e) = \sum_{x:\, g(x) = e} P_X(x)
$$
Ovvero, per trovare la probabilità che $g(X)$ assuma il valore $e$, si sommano le probabilità di tutti i valori $x$ della variabile originale che vengono mappati in $e$ dalla funzione $g$.

### Valore atteso di $g(X)$ — Teorema del trasferimento

Invece di dover calcolare prima la nuova distribuzione $P_g$ per poi computare il valore atteso, è possibile calcolare $\mathbb{E}[g(X)]$ direttamente usando la distribuzione di $X$:

$$
\mathbb{E}[g(X)] = \sum_i g_i \, P_g(g_i) = \sum_j g(x_j) \, P_X(x_j)
$$

Si può quindi calcolare il valore atteso applicando $g$ ai valori originali $x_j$ e pesandoli con la probabilità originale $P_X(x_j)$, senza passare esplicitamente per la distribuzione di $g(X)$.
