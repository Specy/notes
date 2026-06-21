# Distribuzioni tipiche

Le **distribuzioni tipiche** sono distribuzioni di probabilità standard che ricorrono frequentemente in statistica e probabilità, ognuna con una notazione compatta.

Nella realtà, molti fenomeni aleatori seguono gli stessi schemi probabilistici. Invece di ricavare ogni volta da zero la distribuzione di una variabile aleatoria, è conveniente riconoscere a quale **famiglia standard** appartiene e sfruttare le proprietà già note (valore atteso, varianza, PMF/PDF, ecc.). Questo ci porta diversi vantaggi:

- **Risparmio di lavoro**: le formule di $\mathbb{E}[X]$, $\text{var}(X)$ e della funzione di massa/densità sono già note
- **Modellazione**: permettono di descrivere fenomeni reali con pochi parametri (es. solo $p$ per la Bernoulli)
- **Inferenza statistica**: molti metodi statistici (test, stime) sono costruiti attorno a queste distribuzioni

## Notazione generale

Si usa $X \sim \text{Distribuzione}(\text{parametri})$, dove $\sim$ si legge "è distribuita come".

Le distribuzioni si dividono in **discrete** (es. Bernoulli, Binomiale, Poisson) e **continue** (es. Normale, Esponenziale).

# Variabile aleatoria di Bernoulli

$$
\large{
X \sim \mathcal{B}(p)
}
$$

**Idea concettuale:** modella un singolo esperimento con solo due esiti possibili: *successo* (1) con probabilità $p$, e *fallimento* (0) con probabilità $1-p$.

**Quando si usa:** ogni volta che un evento può accadere o non accadere. Tipo lancio di una moneta, un utente che clicca su un annuncio, un componente che funziona o è difettoso.

Con $X \in \{0, 1\}$, abbiamo che:
- $P(X = 1) = p$
- $P(X = 0) = 1 - p$

In forma compatta (PMF): $P(X = x) = p^x(1-p)^{1-x}$ per $x \in \{0,1\}$

- $\mathbb{E}[X] = 0 \cdot P_X(X = 0) + 1 \cdot P_X(X = 1) = 0 \cdot (1-p) + 1 \cdot p = p$
- $\text{var}(X) = \mathbb{E}[X^2] - (\mathbb{E}[X])^2$. Poiché $X^2 = X = 0^2*(1-p) + 1^2\cdotp - p^2 = p - p^2 = p(1-p)$

## Esempio

Definisco la variabile aleatoria **funzione indicatrice** di un evento $A$ in $\Omega$:

$$
X(\omega) := \mathbb{1}_{\{\omega \in A\}}
$$

$$
X(\omega) = \begin{cases} 1 & \text{se } \omega \in A \\ 0 & \text{se } \omega \notin A \end{cases} \quad \longrightarrow \quad X \in \{0, 1\}
$$

$$
P_X(X = 1) = P_\Omega(\omega \in A) = P(A) =: p
$$

$$
P_X(X = 0) = P_\Omega(\omega \notin A) = P_\Omega(\omega \in A^c) = P(A^c) = 1 - P(A) = 1 - p
$$

## Esempio

Lancio 2 volte un dado e definisco $X_i$ come la variabile aleatoria che vale 1 se al lancio $i$ esce un 6, e 0 altrimenti. 

$$
X_i = \begin{cases} 1 & \text{se al lancio } i \text{ esce un 6} \\ 0 & \text{altrimenti} \end{cases}
$$

Calcoliamo la probabilità dell'evento: 
$$
X_1 = X_2 = 1
$$

Dato che gli eventi sono indipendenti, anche le variabili $X_i$ lo sono. Questo ci permette di fattorizzare la probabilità congiunta: $P(X_1, X_2) = P(X_1)P(X_2)$.

Inoltre, poiché ognuna è la funzione indicatrice dell'evento "esce 6", le variabili seguono una distribuzione di Bernoulli $X_i \sim \mathcal{B}(1/6)$, quindi la probabilità di successo per ciascuna è $P(X_i = 1) = \frac{1}{6}$.

Unendo queste due proprietà, otteniamo:

$$
P(X_1 = 1, X_2 = 1) = P(X_1 = 1) P(X_2 = 1) = \frac{1}{6} \cdot \frac{1}{6} = \frac{1}{36}
$$ 

# Distribuzione Binomiale

$$
\large{
S \sim \mathcal{B}(n, p)
}
$$

**Idea concettuale:** modella il **numero di successi** in $n$ prove indipendenti, ognuna con la stessa probabilità di successo $p$. È la somma di $n$ variabili di Bernoulli i.i.d.

**Quando si usa:** quando si ripete lo stesso esperimento binario $n$ volte in modo indipendente e si vuole contare quante volte si verifica il successo. Es. numero di teste in $n$ lanci di moneta, numero di prodotti difettosi in un lotto, numero di utenti che cliccano su un annuncio su $n$ visualizzazioni.

Date $n$ variabili aleatorie di Bernoulli $X_1, \dots, X_n$ indipendenti e identicamente distribuite con $P(X_i = 1) = p$, la variabile aleatoria che conta il numero di successi è:

$$
S(\underline{X}) := \sum_{i=1}^n X_i \sim \mathcal{B}(n, p)
$$

La PMF è data dal **coefficiente binomiale** (numero di modi di scegliere $k$ successi tra $n$ prove) moltiplicato per la probabilità di ciascuna sequenza:

$$
P(S = k) = \binom{n}{k} p^k (1-p)^{n-k} \quad \text{per } k = 0, 1, \dots, n
$$

- $\mathbb{E}[S] = np$
- $\text{var}(S) = np(1-p)$

Il valore atteso si ottiene per linearità: $\mathbb{E}[S] = \sum_{i=1}^n \mathbb{E}[X_i] = n \cdot p$. 

La varianza per indipendenza: $\text{var}(S) = \sum_{i=1}^n \text{var}(X_i) = n \cdot p(1-p)$.

# Esempio

Ho un urna con $N$ palline di cui $b$ bianche e $r$ rosse. Allora consideriamo $n < N$ estrazioni con reimpiazzo, calcoliamo $E(R)$ dove $R$ è il numero di palline rosse estratte.

Definiamo l'evento di estrazione di una pallina rossa:
$$
V = \{\omega: \text{viene estratta una pallina rossa}\}
$$

Definiamo la variabile aleatoria indicatrice per l'$i$-esima estrazione:
$$
X_i(\omega) := \mathbb{1}_{\omega \in V} \quad \forall i \in \{1, \dots, n\}
$$

Questo implica che:
$$
\implies X_i(\omega) = 
\begin{cases} 
1 & \text{se viene estratta pallina rossa } & p \\ 
0 & \text{se non viene estratta pallina rossa } & 1-p 
\end{cases}
$$

Possiamo quindi esprimere il numero totale di palline rosse estratte $R$ come la sommatoria di queste variabili di Bernoulli:

$$
R = S_n(\underline{X}) = \sum_{i=1}^n X_i
$$

Calcoliamo ora il valore atteso di $R$:

$$
\mathbb{E}[S_n(\underline{X})] = n \cdot \mathbb{E}(X) = n \frac{r}{N}
$$

Nel calcolo di questo valore atteso abbiamo sfruttato le seguenti proprietà:
- **Identicamente distribuite**: Essendo identicamente distribuite, il valore atteso $\mathbb{E}(X)$ non dipende da $i$.
- **Indipendenza**: Le variabili sono indipendenti in quanto l'estrazione avviene con rimpiazzo.

# Distribuzione di Poisson

$$
\large{
X \sim \text{Poisson}(\lambda)
}
$$

**Idea concettuale:** modella il **numero di eventi rari** che si verificano in un intervallo fisso di tempo (o spazio), quando gli eventi avvengono in modo indipendente tra loro e ad un tasso medio costante $\lambda$.

**Quando si usa:** quando si contano occorrenze di eventi in un intervallo e:
- gli eventi avvengono in modo indipendente
- il tasso medio di occorrenza $\lambda$ è costante
- due eventi non possono avvenire esattamente nello stesso istante

**Esempi tipici:**
- Numero di chiamate in arrivo a un call center in un'ora
- Numero di errori in una pagina di testo
- Numero di particelle radioattive che decadono in un secondo
- Numero di guasti di un macchinario in un mese


Data una variabile aleatoria $X$, essa si dice seguire una distribuzione di Poisson con parametro $\lambda > 0$ se assume valori in $\{0, 1, 2, ...\}$ e la sua funzione di massa è:

$$P(X = k) = e^{-\lambda} \frac{\lambda^k}{k!} \quad \text{per } k = 0, 1, 2, ...$$

Il parametro $\lambda$ rappresenta il **numero medio atteso di eventi** nell'intervallo considerato.

Una proprietà notevole della Poisson è che **valore atteso e varianza coincidono**:

$$\mathbb{E}[X] = \lambda \qquad \text{var}(X) = \lambda$$

Questo è un modo comodo per riconoscerla: se in un dataset il valore medio è approssimativamente uguale alla varianza, la Poisson è spesso un buon modello.

# Esempio

- $\lambda$ è il numero medio di autobus che arrivano in 1 ora
- $P_\lambda()$ è la distribuzione di autobus che arrivano nell'unità di tempo (1 ora in questo caso) di parametro $\lambda$.

Vogliamo calcolare:
 
1. La probabilità che in un ora non arrivi alcun bus
2. La probabilità che in un ora arrivino almeno 2 bus


1. $P_\lambda(X = 0) = e^{-\lambda} \frac{\lambda^0}{0!} = e^{-\lambda}$
2. $P_\lambda(X \ge 2) = 1 - P_\lambda(X < 2) = 1 - [P_\lambda(X = 0) + P_\lambda(X = 1)] = 1 - \left[e^{-\lambda} + e^{-\lambda} \frac{\lambda}{1!}\right] = 1 - e^{-\lambda}[1 + \lambda]$

# Derivazione della distribuzione di Poisson dalla Binomiale

Supponiamo che un centralino riceva $N_i$ chiamate nel giorno $i$-esimo, osservato su 100 giorni. 
La media empirica (numero medio atteso di chiamate al giorno) è definita come:
$$ N = \sum_{i} \frac{N_i}{100} := \lambda $$

Dividiamo la giornata (lunga un tempo $T$) in $n$ intervalli di tempo, tali che in ogni intervallo si possa ricevere al massimo 1 telefonata.
Dove $n$ è il numero di intervalli di tempo uguali in cui si distribuiscono le chiamate di un giorno.

Se definiamo $X_i$ come la variabile aleatoria (funzione indicatrice) che vale 1 se arriva una telefonata nell'intervallo di tempo $i$-esimo (che dura $T/n$) e 0 altrimenti, allora il numero totale di chiamate in un giorno è:
$$ S = \sum_{i=1}^n X_i $$

Poiché le $X_i$ sono esiti binari indipendenti, $S$ segue una distribuzione Binomiale di parametri $n$ e $p$:
$$ S \sim \mathcal{B}(n, p) $$
dove $p$ è la probabilità di ricevere una chiamata nel singolo intervallo di tempo $T/n$.
Poiché il valore atteso della binomiale è $\mathbb{E}[S] = n \cdot p$, e noi sappiamo che in media riceviamo $\lambda$ chiamate al giorno, possiamo porre:
$$ \mathbb{E}[S] = n \cdot p = \lambda \implies p = \frac{\lambda}{n} $$

--- 

Vogliamo dimostrare che la probabilità di ricevere esattamente $k$ chiamate in un giorno ($S = k$), all'aumentare degli intervalli $n$ (cioè per intervalli di tempo sempre più piccoli, limite per $n \to \infty$), tende alla distribuzione di Poisson di parametro $\lambda$:
$$ P(S = k) \sim P_\lambda(k) \quad \text{per } n \to \infty $$

--- 

La probabilità di ricevere $k$ chiamate in un giorno, seguendo la distribuzione Binomiale, è:
$$ P(S = k) = \binom{n}{k} p^k (1-p)^{n-k} $$
Sostituendo $p = \frac{\lambda}{n}$:
$$ P(S = k) = \binom{n}{k} \left(\frac{\lambda}{n}\right)^k \left(1 - \frac{\lambda}{n}\right)^{n-k} $$

Esplicitando il coefficiente binomiale $\binom{n}{k} = \frac{n!}{k!(n-k)!}$ e calcolando il limite per $n \to \infty$:
$$ \lim_{n \to \infty} \frac{n!}{k!(n-k)!} \left(\frac{\lambda}{n}\right)^k \left(1 - \frac{\lambda}{n}\right)^{n-k} $$

Possiamo riarrangiare i termini dell'espressione, isolando fuori dal limite i fattori che non dipendono da $n$ (ovvero $\frac{\lambda^k}{k!}$):
$$ = \frac{\lambda^k}{k!} \lim_{n \to \infty} \left[ \underbrace{ \frac{n!}{(n-k)!} \frac{1}{n^k} }_{(1)} \cdot \underbrace{ \left(1 - \frac{\lambda}{n}\right)^n }_{(2)} \cdot \underbrace{ \left(1 - \frac{\lambda}{n}\right)^{-k} }_{(3)} \right] $$

Analizziamo ora i tre blocchi del limite separatamente:

1) **Terzo termine**:
$$ \lim_{n \to \infty} \left(1 - \frac{\lambda}{n}\right)^{-k} = (1 - 0)^{-k} = 1 $$

2) **Secondo termine** (limite notevole dell'esponenziale):
$$ \lim_{n \to \infty} \left(1 - \frac{\lambda}{n}\right)^n $$
Possiamo ricondurci al limite notevole $\lim_{x \to \infty} \left(1 + \frac{1}{x}\right)^x = e$, se dividiamo tutto per $(-\lambda)$ ponendo l'esponente nella forma di algebra dei limiti. Più in chiaro, riscrivendo con $\tilde{n} = \frac{n}{-\lambda}$:
$$ \lim_{\tilde{n} \to \infty} \left[ \left(1 + \frac{1}{\tilde{n}}\right)^{\tilde{n}} \right]^{-\lambda} = e^{-\lambda} $$

3) **Primo termine**:
Osserviamo che $\frac{n!}{(n-k)!} = n(n-1)(n-2)\dots(n-k+1)$. Dato che stiamo dividendo per $n^k$, che possiamo vedere come $n \cdot n \dots \cdot n$ moltiplicato per $k$ volte, accoppiamo ciascun fattore:
$$ \lim_{n \to \infty} \frac{n(n-1)\dots(n-k+1)}{n^k} = \lim_{n \to \infty} \left( \frac{n}{n} \cdot \frac{n-1}{n} \dots \frac{n-k+1}{n} \right) $$
Per $n \to \infty$, ogni singola frazione all'interno della parentesi tende a 1. Quindi il limite del loro prodotto è banalmente 1:
$$ = \lim_{n \to \infty} (1 \cdot 1 \dots \cdot 1) = 1 $$

---

Tornando all'espressione complessiva del limite e inserendo i calcoli parziali ricavati in (1), (2) e (3), abbiamo:
$$ \lim_{n \to \infty} \binom{n}{k} \left(\frac{\lambda}{n}\right)^k \left(1 - \frac{\lambda}{n}\right)^{n-k} = \frac{\lambda^k}{k!} \cdot (1) \cdot (e^{-\lambda}) \cdot (1)  $$

Otteniamo quindi esattamente l'espressione analitica della distribuzione di Poisson:
$$ = \frac{\lambda^k}{k!} e^{-\lambda} = P_\lambda(k) \quad \text{C.V.D.} $$

Questo dimostra perché continuiamo a usare la distribuzione di Poisson per eventi molto rari distribuiti su un grande orizzonte di osservazione: è l'equivalente intrinseco e asintotico a descrivere un fenomeno binario il cui numero di tentativi tende a infinito con una probabilità di successo che infimamente scompare, ma in modo tale che il tasso totale medio ($np$) rimanga costante e pari a $\lambda$.

# Distribuzione Uniforme

$$
\large{X \sim \text{Unif}(\{x_1, \dots, x_n\})}
$$

**Idea concettuale:** assegna la stessa probabilità a ciascuno degli $n$ valori possibili: ogni esito è equiprobabile.

**Quando si usa:** quando non c'è ragione di preferire un esito rispetto agli altri, cioè tutti gli esiti sono ugualmente plausibili. Es. lancio di un dado equo, scelta casuale di un numero intero in un intervallo finito, estrazione a caso da un'urna in cui tutte le palline hanno la stessa probabilità di essere estratte.

Una variabile aleatoria $X(\omega): \Omega \to \mathbb{R}$ dove $\{\omega_1, \dots, \omega_k\} = \Omega$ e $\{x_1, \dots, x_n\} = \mathbb{R}$ è detta **Uniforme** se $P(X = x_i) = \frac{1}{n}$ per ogni $i \in \{1, \dots, n\}$.

Abbiamo che:

$$
\mathbb{E}[X] = \frac{1}{n} \sum_{i=1}^n x_i
$$

$$
\begin{aligned}
\text{var}(X) &= \frac{1}{n} \sum_{i=1}^n (x_i - \mathbb{E}[X])^2 \\&= \frac{1}{n} \sum_{i=1}^n \left(x_i^2 - \left(\frac{1}{n} \sum_{i=1}^n x_i\right)^2 \right)
\end{aligned}
$$

# Distribuzione Ipergeometrica

$$
\large{X \sim \text{Hyper}(N, K, n)}
$$

**Idea concettuale:** modella il **numero di elementi di un certo tipo** in un campione estratto **senza rimpiazzo** da una popolazione finita. A differenza della Binomiale, le estrazioni non sono indipendenti: la probabilità di successo cambia ad ogni passo perché la popolazione si riduce.

**Quando si usa:** quando si estrae un campione senza rimpiazzo da una popolazione finita di dimensione nota e si vuole contare quanti elementi appartengono a una categoria specifica. Es. numero di palline rosse estratte senza rimpiazzo da un'urna, numero di componenti difettosi in un campione prelevato da un lotto finito, numero di carte di cuori estratte da un mazzo.

I parametri sono:
- $N$: dimensione totale della popolazione
- $K$: numero di elementi della categoria di interesse nella popolazione
- $n$: numero di estrazioni effettuate (senza rimpiazzo)


$$
P(X = k) = \frac{\dbinom{K}{k}\dbinom{N-K}{n-k}}{\dbinom{N}{n}}
$$

Il numeratore conta il numero di modi di scegliere $k$ successi tra i $K$ disponibili e $n-k$ fallimenti tra gli $N-K$ rimanenti; il denominatore è il numero totale di campioni di taglia $n$ estraibili da $N$.

Il valore di $k$ non può essere qualsiasi intero tra $0$ e $n$: entrambi i fattori del numeratore devono avere senso come coefficienti binomiali, cioè i valori "in basso" devono essere $\geq 0$ e $\leq$ i valori "in alto". Questo impone:

- $k \leq K$ — non posso estrarre più successi di quanti ne esistano nella popolazione
- $n - k \leq N - K$ — i fallimenti estratti non possono superare i fallimenti disponibili, equivalente a $k \geq n - (N-K)$

Unendo i due vincoli:

$$
k \in \{\max(0,\; n-(N-K)),\; \dots,\; \min(n,\, K)\}
$$

In pratica, per la maggior parte degli esempi concreti (quando $n$ non è troppo grande rispetto a $N-K$ e $K$), il range si riduce semplicemente a $k \in \{0, 1, \dots, n\}$.

- $\mathbb{E}[X] = n \dfrac{K}{N}$
- $\text{var}(X) = n \dfrac{K}{N} \cdot \dfrac{N-K}{N} \cdot \dfrac{N-n}{N-1}$

Il fattore $\frac{N-n}{N-1}$ è detto **fattore di correzione per popolazioni finite**: vale 1 quando $n \ll N$ (campionamento quasi indipendente) e si annulla quando $n = N$ (varianza nulla, si estraggono tutti gli elementi). Quando $N \to \infty$ con $K/N \to p$, la distribuzione Ipergeometrica converge alla Binomiale $\mathcal{B}(n, p)$.

# Esempio

Abbiamo $x_r$ palline rosse e $x_b$ palline bianche in un'urna, con $N = x_r + x_b$. 

Considerando $n$ estrazioni senza rimpiazzo ($n \leq N$), voglio sapere quante palline rosse ho estratto tramite la variabile aleatoria $S_n(Y)$ che assume i valori $0,... n$ dove $Y$ è la somma di variabili di bernoulli non indipendenti. $Y=\{y_1, \dots, y_n\}$ dove non indipendenti.

$$
P_n(S_n = k) = \frac{\dbinom{x_r}{k}\dbinom{x_b}{n-k}}{\dbinom{N}{n}}
$$

$$
\mathbb{E}[S_n] = \sum_{k=0}^n k \cdot \frac{\dbinom{x_r}{k}\dbinom{x_b}{n-k}}{\dbinom{N}{n}}
$$

Questa è la definizione formale, però, sfruttando la linearità del valore atteso, possiamo calcolare il valore atteso della somma in modo molto più agevole. Abbiamo definito la somma come $S_n = \sum_{i=1}^n y_i$, per cui:

$$
\mathbb{E}[S_n] = \mathbb{E}\left[\sum_{i=1}^n y_i\right] = \sum_{i=1}^n \mathbb{E}[y_i]
$$

Anche se le variabili $y_i$ **non sono indipendenti** (essendo l'estrazione non reintrodotta), la prima proprietà da ricordare è che la linearità del valore atteso continua a valere. Calcoliamo $\mathbb{E}[y_1]$ usando la somma sulle probabilità marginali:

$$
\mathbb{E}[y_1] = \sum_{y_1} \dots \sum_{y_n} y_1 P(y_1, \dots, y_n) = \sum_{y_1=0}^1 y_1 P_{y_1}(y_1)
$$

Sostituiamo i due casi (0 o 1):
$$
= 1 \cdot \frac{x_r}{x_r+x_b} + 0 \cdot \frac{x_b}{x_r+x_b} = \frac{x_r}{x_r + (N - x_r)} = \frac{x_r}{N} = p
$$

Allo stesso modo, il valore atteso per l'estrazione successiva (es. $y_2$) si ricava marginalizzando le restanti variabili:

$$
\mathbb{E}[y_2] = \sum_{y_1, y_3, \dots, y_n} \dots \sum_{y_2=0}^1 y_2 P(y_1, \dots, y_n) = \sum_{y_2=0}^1 y_2 P_{y_2}(y_2)
$$
$$
= 0 \cdot P_{y_2}(0) + 1 \cdot P_{y_2}(1) = P_{y_2}(y_2=1)
$$

Dato che $P_{y_2}(1)$ rappresenta semplicemente la probabilità marginale di avere successo alla seconda estrazione senza condizionare gli eventi passati (che quindi, per simmetria, rimane invariata ed è pari a $x_r/N$), otteniamo ancora $\mathbb{E}[y_i] = \frac{x_r}{N}$.

Di conseguenza, rimettendo tutto nella sommatoria:
$$
\mathbb{E}[S_n] = \sum_{i=1}^n \frac{x_r}{N} = n \frac{x_r}{N}
$$
Confermando il risultato della media dell'Ipergeometrica.

# Esempio 

Consideriamo 5 estrazioni da un urna con 19 palline, di cui 10 rosse e 9 bianche. Qual è la probabilità di estrarre esattamente 3 palline rosse e 2 bianche?

$$
Y_r = \mathbb{1}_{\{\text{estrazione } i \text{ è rossa}\}} \quad \forall i \in \{1, 2, 3, 4, 5\}
$$
Allora 
$$
P(S_5 = 3) = \frac{\dbinom{10}{3}\dbinom{9}{2}}{\dbinom{19}{5}}
$$

# Distribuzione Geometrica

**Idea concettuale:** modella il **numero di prove necessarie** per ottenere il primo successo in una sequenza di esperimenti Bernoulli i.i.d., ciascuno con probabilità di successo $p$.

**Quando si usa:** quando si vuole sapere quante volte bisogna ripetere un esperimento binario prima di osservare il primo successo. Es. numero di lanci di una moneta fino alla prima testa, numero di tentativi prima di indovinare una password, numero di componenti testati prima di trovare il primo difettoso.

Una variabile aleatoria $X$ è distribuita geometricamente se assume valori in $\mathbb{N}^+ \cup \{\infty\}$:

$$
P_p(X = k) = (1-p)^{k-1} p \quad \text{per } k = 1, 2, 3, \dots
$$

L'interpretazione è diretta: per avere il primo successo esattamente al $k$-esimo tentativo, i primi $k-1$ devono essere fallimenti (ciascuno con probabilità $1-p$) e il $k$-esimo deve essere un successo (con probabilità $p$). La probabilità di non avere mai successo ($k = \infty$) vale $0$ se $p > 0$.

- $\mathbb{E}[X] = \dfrac{1}{p}$
- $\text{var}(X) = \dfrac{1-p}{p^2}$

Il valore atteso $\frac{1}{p}$ ha un'interpretazione intuitiva: se ogni tentativo ha probabilità $p$ di successo, in media servono $\frac{1}{p}$ tentativi. Per esempio, con un dado equo la probabilità di ottenere un 6 è $p = \frac{1}{6}$, quindi in media occorrono 6 lanci.

$$
P_p(X \ge k) = (1-p)^{k-1}
$$

Basta che togliamo l'ultimo evento positivo $p$