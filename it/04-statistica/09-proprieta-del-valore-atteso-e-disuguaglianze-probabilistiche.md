---
title: Proprietà del valore atteso e disuguaglianze probabilistiche
description: "Proprietà di linearità del valore atteso, disuguaglianze di Markov, Chebyshev e limite di Chernoff con dimostrazioni e applicazioni alla stima empirica di media e varianza."
type: lecture
---

# Proprietà valore atteso

Se ho due variabili aleatorie $X$ e $Y$ che assumono valori $I_X$ e $I_Y$ rispettivamente, con distribuzione congiunta $p(x,y)$, allora:

- $\mathbb{E}[aX + bY] = a\mathbb{E}[X] + b\mathbb{E}[Y]$
- $\mathbb{E}[XY] = \mathbb{E}[X]\mathbb{E}[Y]$ se $X$ e $Y$ sono indipendenti
- Se $p(X \geq Y) = 1$, allora $\mathbb{E}[X] \geq \mathbb{E}[Y]$
- $\mathbb{E}[|X|] \le \infty$ e $\mathbb{E}[|Y|] \le \infty$, allora $\mathbb{E}[|XY|] \le \infty$, e naturalmente come detto prima, se sono indipendenti allora $\mathbb{E}[|XY|] = \mathbb{E}[|X|]\mathbb{E}[|Y|]$.

**Esempio**

120 studenti vanno a teatro in 3 autobus con il seguente n° di studenti:
1. 36 studenti
2. 40 studenti
3. 44 studenti

Sia $X \in \{36, 40, 44\}$.

Viene scelto a caso un responsabile tra gli studenti:
- $X = 36$ se lo studente viene scelto dal primo autobus
- $X = 40$ se lo studente viene scelto dal secondo autobus
- $X = 44$ se lo studente viene scelto dal terzo autobus

*Ovvero* $\rightarrow$ quindi la probabilità di scegliere uno specifico studente è $\frac{1}{120}$ (tutti equiprobabili).

**Calcolare $\mathbb{E}[X]$**

$P(1^\circ \text{ autobus}) = \sum_{i=1}^{36} \frac{1}{120} = \frac{36}{120} = \frac{3}{10}$
$P(2^\circ \text{ autobus}) = \frac{40}{120} = \frac{1}{3}$
$P(3^\circ \text{ autobus}) = \frac{44}{120} = \frac{11}{30}$

$\mathbb{E}[X] = 36 \cdot \frac{3}{10} + 40 \cdot \frac{1}{3} + 44 \cdot \frac{11}{30} = \dots$

Se invece considero $Y \in \{1, 2, 3\}$ l'autobus su cui sta lo studente scelto:
$P(Y = 1) = \frac{36}{120}$
$P(Y = 2) = \frac{40}{120}$
$P(Y = 3) = \frac{11}{30}$

$\mathbb{E}[Y] = 1 \cdot \frac{3}{10} + 2 \cdot \frac{1}{3} + 3 \cdot \frac{11}{30} = \frac{3}{10} + \frac{2}{3} + \frac{11}{10} = \frac{9 + 20 + 33}{30} = \frac{62}{30} = \frac{31}{15}$

**Osservazione:**

$$
Y = Y(X) = \begin{cases} 
1 & \text{se } X = a_1 = 36 \\ 
2 & \text{se } X = a_2 = 40 \\ 
3 & \text{se } X = a_3 = 44 
\end{cases}
$$

$$
X = X(\omega) = \begin{cases} 
36 & \text{se } \omega = \{\text{lo studente ha viaggiato nel } 1^\circ \text{ autobus}\} \\ 
40 & \text{se } \omega = \{\text{lo studente ha viaggiato nel } 2^\circ \text{ autobus}\} \\ 
44 & \text{se } \omega = \{\text{lo studente ha viaggiato nel } 3^\circ \text{ autobus}\} 
\end{cases}
$$

Quindi $Y = Y(X)$ è una v.a. che è funzione di una variabile aleatoria.

## Def

Sia $X$ una variabile aleatoria e $g(\cdot)$ una funzione tale per cui:
$$
g(\cdot): D \subseteq \mathbb{R}^d \to C \subseteq \mathbb{R}^d
$$

Essa definisce una nuova variabile aleatoria $Y = g(X)$.

Dove $D$ è l'insieme dei valori che $X$ può assumere (il dominio), e $C$ è l'insieme dei valori che $Y = g(X)$ può assumere (il codominio attraverso la funzione $g$).

In altre parole, è un'applicazione da $D \to C$ in cui la nuova distribuzione di probabilità si ricava raggruppando i risultati della variabile d'origine:

$$
P_Y(Y = e) = P_g(g(X) = e) = \sum_{x: g(x) = e} P_X(X = x)
$$

**Significato:**
Se applichiamo una funzione $g$ a una variabile aleatoria $X$, otteniamo una **nuova** variabile aleatoria $Y$. Dato che più valori originari di $x$ potrebbero restituire lo stesso risultato $e$ quando passati dentro $g()$, allora per calcolare la probabilità totale che $Y$ assuma il valore finale $e$, dobbiamo **sommare** le probabilità di **tutti** quei numeri originali $x$ la cui trasformazione $g(x)$ vale proprio $e$.


**"Data $P_X(\cdot)$ conosco $P_Y(\cdot)$"** 
Questo significa che, grazie a questa formula/sommatoria, se conosciamo in partenza la distribuzione di probabilità della variabile "base" $X$ (cioè $P_X$), siamo automaticamente in grado di calcolare la distribuzione di probabilità di qualsiasi nuova variabile $Y$ costruitale sopra tramite una funzione.

**OSS:**

$$
\begin{align*}
\mathbb{E}[g] &:= \sum_i g_i P_g(g_i) \\
&= \sum_j g(x_j) P_X(x_j)
\end{align*}
$$

# Disugualianza di Markov

Sia $X$ una variabile aleatoria **non negativa** ($X \geq 0$) con valore atteso finito $\mathbb{E}[X] < \infty$. Allora per ogni soglia $\alpha > 0$:
$$
P(X \geq \alpha) \leq \frac{\mathbb{E}[X]}{\alpha}
$$

**Intuizione:** se il valore atteso di $X$ è piccolo, allora $X$ non può essere grande "troppo spesso". Per esempio, se in media uno studente studia 2 ore al giorno, la probabilità che studi più di 10 ore in un giorno è al massimo $\frac{2}{10} = 20\%$ — indipendentemente da com'è fatta la distribuzione.

**Dimostrazione (caso discreto):**

$$
\mathbb{E}[X] = \sum_x x \cdot P(X = x) \geq \sum_{x \geq \alpha} x \cdot P(X = x) \geq \alpha \sum_{x \geq \alpha} P(X = x) = \alpha \cdot P(X \geq \alpha)
$$

Dividendo entrambi i lati per $\alpha > 0$:
$$
P(X \geq \alpha) \leq \frac{\mathbb{E}[X]}{\alpha}
$$

Il primo $\geq$ vale perché escludiamo i termini con $x < \alpha$ (tutti non negativi, per ipotesi $X \geq 0$). Il secondo $\geq$ vale perché nella somma ristetta ai soli $x \geq \alpha$, ogni $x$ vale almeno $\alpha$.

> **Nota:** Markov fornisce solo un **limite superiore** (upper bound) alla probabilità, non il valore esatto. Il bound è tanto più utile quanto più $\alpha$ è grande rispetto a $\mathbb{E}[X]$.

# Disugualianza di Chebyshev

Sia $X$ una variabile aleatoria con valore atteso $\mu = \mathbb{E}[X]$ e varianza $\sigma^2 = \text{var}(X) < \infty$. Allora per ogni $\alpha > 0$:
$$
P(|X - \mathbb{E}[X]| \geq \alpha) \leq \frac{\text{var}(X)}{\alpha^2}
$$

**Intuizione:** Chebyshev limita la probabilità che $X$ si discosti dalla sua media di almeno $\alpha$. Più la varianza è piccola (la distribuzione è "concentrata" attorno alla media), più questa probabilità è bassa.

**Derivazione da Markov:**

Definiamo la variabile aleatoria $Y = (X - \mathbb{E}[X])^2$. Si ha $Y \geq 0$ e $\mathbb{E}[Y] = \text{var}(X)$.

Osserviamo che:
$$
|X - \mathbb{E}[X]| \geq \alpha \iff (X - \mathbb{E}[X])^2 \geq \alpha^2
$$

Quindi applicando Markov a $Y$ con soglia $\alpha^2$:
$$
P(|X - \mathbb{E}[X]| \geq \alpha) = P(Y \geq \alpha^2) \leq \frac{\mathbb{E}[Y]}{\alpha^2} = \frac{\text{var}(X)}{\alpha^2}
$$

**Forma equivalente** (spesso più utile): ponendo $\alpha = k\sigma$ con $k > 0$ e $\sigma = \sqrt{\text{var}(X)}$:
$$
P(|X - \mathbb{E}[X]| \geq k\sigma) \leq \frac{1}{k^2}
$$
Cioè la probabilità di stare a più di $k$ deviazioni standard dalla media è al massimo $\frac{1}{k^2}$, **qualunque** sia la distribuzione di $X$.

> **Confronto con Markov:** Chebyshev è più potente perché sfrutta anche la varianza (non solo la media). In cambio, $X$ non deve essere necessariamente non negativa, ma deve avere varianza finita. Entrambe forniscono bound che valgono per qualsiasi distribuzione.

## Media e varianza empirica

Supponiamo di non conoscere la distribuzione di una variabile aleatoria $X$, ma di avere $n$ osservazioni $\{x_1, x_2, \ldots, x_n\}$ (realizzazioni i.i.d. di $X$). Possiamo stimare media e varianza **empiricamente**:

$$
\tilde{\mathbb{E}}(X) \approx \frac{1}{n}\sum_{i=1}^{n} x_i \qquad \tilde{\text{var}}(X) \approx \frac{1}{n}\sum_{i=1}^{n} \left(x_i - \tilde{\mathbb{E}}(X)\right)^2
$$

e poi applicare Chebyshev per ottenere bound sulla probabilità anche senza conoscere la distribuzione esatta.

**Esempio:** $n$ automobili prodotte da una fabbrica in una settimana, dove $n$ è esso stesso una variabile aleatoria.

Supponiamo di avere i dati storici sulle produzioni $\{x_1, \ldots, x_n\}$, da cui calcoliamo $\tilde{\mathbb{E}}(X) = 500$ auto/settimana e $\tilde{\text{var}}(X) = 900$.

Vogliamo sapere: qual è la probabilità che la produzione settimanale si discosti di almeno 90 auto dalla media?

Applicando Chebyshev con $\alpha = 90$:
$$
P(|X - 500| \geq 90) \leq \frac{900}{90^2} = \frac{900}{8100} = \frac{1}{9} \approx 11\%
$$

Questo bound vale **indipendentemente** da come è distribuita $X$ — che sia normale, poissoniana, uniforme, ecc.


# Disuguaglianza di Chebyshev esponenziale (Limite di Chernoff)

La disuguaglianza di Chebyshev esponenziale (o **limite di Chernoff**) è un bound molto più stretto di Markov e Chebyshev classica: il bound decade **esponenzialmente** in $\eta$, anziché come $1/\eta$ o $1/\eta^2$.

**Enunciato:** Per ogni $t \in \mathbb{R}^+$:
$$
\forall t \in \mathbb{R}^+, \quad P(X > \eta) \leq e^{-t\eta} \, \mathbb{E}\!\left[e^{tX}\right]
$$

Il termine $\mathbb{E}[e^{tX}]$ è chiamato **funzione generatrice dei momenti** (MGF) di $X$ valutata in $t$. Il bound vale per qualsiasi $t > 0$, quindi nella pratica si sceglie il $t$ che minimizza il lato destro.

**Dimostrazione:**

$$
P(X > \eta) = \sum_{x_i:\, x_i > \eta} P(x_i) = \sum_{\substack{\omega \in \Omega:\\ X(\omega) > \eta}} P(\omega)
$$

Poiché $t \geq 0$ e $x_i > \eta$, si ha $e^{t(x_i - \eta)} \geq 1$, quindi:

$$
\leq \sum_{x_i:\, x_i > \eta} e^{t(x_i - \eta)}\, P(x_i)
= e^{-t\eta} \sum_{x_i:\, x_i > \eta} e^{tx_i}\, P(x_i)
$$

Poiché le variabili esponenziali sono positive ($e^{tx_i} \geq 0\ \forall x_i \in \mathbb{R}$), possiamo estendere la somma a tutti gli $x_i$ senza diminuirla:

$$
= e^{-t\eta} \sum_{x_i} e^{tx_i}\, P(x_i)
\leq e^{-t\eta}\, \mathbb{E}\!\left(e^{tX}\right)
$$

