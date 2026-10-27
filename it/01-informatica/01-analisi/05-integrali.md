---
title: Integrali
description: "Integrale di Riemann, indefinito e definito, teorema della media e teorema fondamentale del calcolo, tecniche di integrazione (per parti, per sostituzione, fratti semplici, ricorrenza), integrali impropri e criterio integrale per le serie."
type: lecture
---

# Integrali

## 🟢 Integrabilità di riemann

$$
\begin{aligned}
m_i &:= \inf\bigl\{ f(x) : x \in [x_{i-1}, x_i] \bigr\}, \\
M_i &:= \sup\bigl\{ f(x) : x \in [x_{i-1}, x_i] \bigr\}, \\
\Delta x_i &:= x_i - x_{i-1} (= \text{ lunghezza dell'intervallo } [x_{i-1}, x_i]) \\
s(f, P) &:= \sum_{i=1}^{n} m_i \cdot \Delta x_i =: \; \textit{somma inferiore} \\
S(f, P) &:= \sum_{i=1}^{n} M_i \cdot \Delta x_i =: \; \textit{somma superiore}
\end{aligned}
$$

```plot
x: [0, 6.2]
y: [0, 3.7]
width: 340
height: 230
ylabel: $f(x)$
xlabel: $x$
xticks: { 0.44: "$a=x_0$", 1.18: "$x_1$", 2.04: "$x_2$", 3.24: "$x_3$", 4.38: "$x_4$", 5.64: "$x_5=b$" }
yticks: { 1.0: "$m$", 3.2: "$M$" }
alt: "Somma inferiore: rettangoli rossi sotto il grafico di f su una partizione di [a,b] in cinque intervalli"
items:
  - hline: 3.2
    dash: dotted
  - hline: 1.0
    dash: dotted
  - area: 1.25
    from: 0.44
    to: 1.18
    color: red
    opacity: 0.5
  - area: 1.5
    from: 1.18
    to: 2.04
    color: red
    opacity: 0.5
  - area: 0.95
    from: 2.04
    to: 3.24
    color: red
    opacity: 0.5
  - area: 1.15
    from: 3.24
    to: 4.38
    color: red
    opacity: 0.5
  - area: 2.4
    from: 4.38
    to: 5.64
    color: red
    opacity: 0.5
  - line: [[0.44, 0], [0.44, 1.25], [1.18, 1.25], [1.18, 1.5], [2.04, 1.5], [2.04, 0.95], [3.24, 0.95], [3.24, 1.15], [4.38, 1.15], [4.38, 2.4], [5.64, 2.4], [5.64, 0]]
  - line: [[1.18, 0], [1.18, 1.25]]
  - line: [[2.04, 0], [2.04, 0.95]]
  - line: [[3.24, 0], [3.24, 0.95]]
  - line: [[4.38, 0], [4.38, 1.15]]
  - fn: f
    through: [[0.44, 1.25], [1.54, 2.1], [2.74, 0.95], [4.78, 3.2], [5.64, 2.45]]
  - text: $s(f,P)$
    at: [2.3, 2.5]
    anchor: c
```

```plot
x: [0, 6.2]
y: [0, 3.7]
width: 340
height: 230
ylabel: $f(x)$
xlabel: $x$
xticks: { 0.44: "$a=x_0$", 1.18: "$x_1$", 2.04: "$x_2$", 3.24: "$x_3$", 4.38: "$x_4$", 5.64: "$x_5=b$" }
yticks: { 1.0: "$m$", 3.2: "$M$" }
alt: "Somma superiore: rettangoli verdi sopra il grafico di f su una partizione di [a,b] in cinque intervalli"
items:
  - hline: 3.2
    dash: dotted
  - hline: 1.0
    dash: dotted
  - area: 1.85
    from: 0.44
    to: 1.18
    color: green
    opacity: 0.5
  - area: 2.1
    from: 1.18
    to: 2.04
    color: green
    opacity: 0.5
  - area: 1.5
    from: 2.04
    to: 3.24
    color: green
    opacity: 0.5
  - area: 2.95
    from: 3.24
    to: 4.38
    color: green
    opacity: 0.5
  - area: 3.2
    from: 4.38
    to: 5.64
    color: green
    opacity: 0.5
  - line: [[0.44, 0], [0.44, 1.85], [1.18, 1.85], [1.18, 2.1], [2.04, 2.1], [2.04, 1.5], [3.24, 1.5], [3.24, 2.95], [4.38, 2.95], [4.38, 3.2], [5.64, 3.2], [5.64, 0]]
  - line: [[1.18, 0], [1.18, 1.85]]
  - line: [[2.04, 0], [2.04, 1.5]]
  - line: [[3.24, 0], [3.24, 1.5]]
  - line: [[4.38, 0], [4.38, 2.95]]
  - fn: f
    through: [[0.44, 1.25], [1.54, 2.1], [2.74, 0.95], [4.78, 3.2], [5.64, 2.45]]
  - text: $S(f,P)$
    at: [2.3, 2.5]
    anchor: c
```

Per ogni partizione P di $[a,b]$ vale che $s(f, P) \lt A \lt S(f,P)$ 

Sia $f : [a,b] \to \mathbb{R}$ limitata, Se:
$$
\sup{\{ s(f, P): P \ \text{partizione di} \ [a,b]} \} = \inf{\{ s(f, P): P \ \text{partizione di} \ [a,b]} \} =: I
$$
Allora $f$ si dice integrabile secondo Riemann, e l'area $A$ della partizione $P$ sarà proprio $I$:
$$
I =: \int_a^b f(x)dx
$$
E si chiama *integrale di $f$* in $[a,b]$ 

## 🟢 Proprietà degli integrali

- $\alpha \cdot f + \beta \cdot g$ è integrabile per ogni $\alpha, \beta \in \mathbb{R}$

  $$
  \boxed{\int_a^b \bigl(\alpha \cdot f(x) + \beta \cdot g(x)\bigr) \, dx = \alpha \cdot \int_a^b f(x) \, dx + \beta \cdot \int_a^b g(x) \, dx}
  $$

  (cioè l'integrale è un'operazione *lineare*);
- se $f(x) \leq g(x)$ per ogni $x \in [a, b]$ allora

  $$
  \boxed{\int_a^b f(x) \, dx \leq \int_a^b g(x) \, dx}
  $$

  (cioè l'integrale è *monotona*);

- anche $\lvert f \rvert$ è integrabile e

  $$
  \boxed{\left\lvert \int_a^b f(x) \, dx \right\rvert \leq \int_a^b \lvert f(x) \rvert \, dx}
  $$

  (*disuguaglianza triangolare*);
- per ogni $\alpha, \beta, \gamma \in [a, b]$ si ha

  $$
  \boxed{\int_\alpha^\beta f(x) \, dx + \int_\beta^\gamma f(x) \, dx = \int_\alpha^\gamma f(x) \, dx}
  $$

  (*additività* dell'integrale rispetto agli estremi di integrazione) ove definiamo

  ```plot
  x: [-0.3, 7.6]
  y: [-0.2, 3.6]
  width: 460
  height: 260
  ylabel: $f(x)$
  xlabel: $x$
  xticks: { 0.63: "$a$", 1.27: "$\\alpha$", 3.02: "$\\beta$", 6.02: "$\\gamma$", 6.8: "$b$" }
  alt: "Grafico di f(x) tra a e b: l'area sotto il grafico tra alfa e beta è colorata di rosso, quella tra beta e gamma di verde."
  items:
    - area: f(x)
      from: 1.27
      to: 3.02
      color: red
      opacity: 0.5
    - area: f(x)
      from: 3.02
      to: 6.02
      color: green
      opacity: 0.5
    - fn: f
      through: [[0.63, 1.33], [1.88, 1.95], [3.25, 0.97], [5.3, 2.75], [6.8, 1.83]]
    - guide: [0.63, 1.33]
      to: x
      dash: dotted
    - guide: [6.8, 1.83]
      to: x
      dash: dotted
    - line: [[1.27, 0], [1.27, f(1.27)]]
    - line: [[3.02, 0], [3.02, f(3.02)]]
    - line: [[6.02, 0], [6.02, f(6.02)]]
  ```

**Proposizione 6.3.** *Sia* $f : [-a, a] \to \mathbb{R}$ *integrabile. Allora*

- $\displaystyle\int_{-a}^{a} f(x) \, dx = 0$ *se* $f$ *è dispari,*
- $\displaystyle\int_{-a}^{a} f(x) \, dx = 2 \cdot \int_{0}^{a} f(x) \, dx$ *se* $f$ *è pari,*

```plot
x: [-1.15, 1.2]
y: [-0.9, 1]
width: 340
height: 250
xlabel: $x$
xticks: { -1: '$-a$', 1: '$a$' }
alt: "Funzione dispari f(x) su [-a, a]: l'area rossa a sinistra e l'area verde a destra si compensano, la somma è 0."
items:
  - area: f(x)
    from: -1
    to: 0
    color: red
    opacity: 0.5
  - area: f(x)
    from: 0
    to: 1
    color: green
    opacity: 0.5
  - fn: f
    through: [[-1, -0.74], [-0.67, -0.1], [-0.29, -0.16], [0, 0], [0.29, 0.16], [0.67, 0.1], [1, 0.74]]
  - line: [[1, 0], [1, 0.74]]
  - text: '$f(x)$ dispari'
    at: [0.1, 0.9]
    anchor: e
  - text: '$\textcolor{red}{\rule{1em}{0.7em}}+\textcolor{green}{\rule{1em}{0.7em}}=0$'
    at: [-0.6, 0.7]
    anchor: c
```

```plot
x: [-1.15, 1.2]
y: [-0.1, 1.55]
width: 340
height: 250
xlabel: $x$
xticks: { -1: '$-a$', 1: '$a$' }
alt: "Funzione pari f(x) su [-a, a]: l'area rossa a sinistra e l'area verde a destra sono uguali, l'integrale su [-a, a] è il doppio di quello su [0, a]."
items:
  - area: f(x)
    from: -1
    to: 0
    color: red
    opacity: 0.5
  - area: f(x)
    from: 0
    to: 1
    color: green
    opacity: 0.5
  - fn: f
    through: [[-1, 1.21], [-0.74, 0.47], [-0.37, 0.82], [0, 0.32], [0.37, 0.82], [0.74, 0.47], [1, 1.21]]
  - line: [[1, 0], [1, 1.21]]
  - line: [[-1, 0], [-1, 1.21]]
  - text: '$f(x)$ pari'
    at: [0.1, 1.4]
    anchor: e
  - text: '$\textcolor{red}{\rule{1em}{0.7em}}+\textcolor{green}{\rule{1em}{0.7em}}=2\times \textcolor{green}{\rule{1em}{0.7em}}$'
    at: [-0.6, 1.2]
    anchor: c
```

## 🟢 Teorema della media
Se $f \in C[a,b]$, allora esiste un $c \in [a,b]$ tale che:

$$
\Large\int^b_a f(x) = f(c) \cdot (b-a)
$$

```plot
x: [-0.3, 9.4]
y: [-0.4, 5.2]
width: 560
height: 300
ylabel: $f(x)$
xlabel: $x$
let: { a: 0.725, c: 4.96, b: 7.9 }
xticks: { a: '$a$', c: '$c$', b: '$b$' }
yticks: { "f(c)": '$f(c)$' }
alt: "Teorema della media: l'area rossa sotto la retta y = f(c) e sopra il grafico di f è uguale all'area verde sopra la retta e sotto il grafico."
items:
  - area: f(x)
    base: f(c)
    from: a
    to: b
    signed: true
    opacity: 0.5
  - line: [[a, f(c)], [b, f(c)]]
    width: 1
  - guide: [c, f(c)]
    to: y
    dash: dotted
  - fn: f
    through: [[0.725, 2.12], [2.125, 3.08], [3.81, 1.55], [4.96, 2.97], [6.19, 4.33], [7.9, 2.9]]
  - guide: [a, f(a)]
    to: x
    dash: dotted
  - guide: [c, f(c)]
    to: x
    dash: dotted
  - guide: [b, f(b)]
    to: x
    dash: dotted
  - text: '$\textcolor{red}{\rule{1em}{0.7em}}=\textcolor{green}{\rule{1em}{0.7em}}$'
    at: [3.2, 4.5]
    anchor: c
```

Per esempio, troviamo il punto $c$ per la funzione $f(x) = \frac{1}{x}$ nell'intervallo $[1, e^2]$ 

Per prima cosa calcoliamo l'integrale:
$$
\int_a^b \frac{1}{x} = ln(x) |^{e^2}_1 = ln(e^2) - ln(1) = 2
$$
A questo punto risolviamo l'equazione:
$$
\begin{aligned}
\Large\int^b_a f(x) &= f(c) \cdot (b-a) \\
2 &= \frac{1}{c} \cdot (e^2 - 1) \\
2 &= \frac{e^2 - 1}{c} \\
c &= \frac{(e^2 - 1)}{2}
\end{aligned}
$$

## 🟢 Teorema fondamentale del calcolo integrale

Sia $f \in C[a,b]$ allora la funzione 
$$
F: [A,B] \to \mathbb{R}, \ \ \ 
F(x) = \int_a^x{f(s)ds}
$$
è derivabile, con $F'(x) = f(x)$ per ogni $x \in [a,b]$ 

Questo ci dice che l'integrazione è l'operazione inversa della derivazione
## 🟢 Integrali indefiniti

L'integrale indefinito di una funzione $f(x)$ è l'insieme di funzioni $F(x)$, dette primitive di $f(x)$, la cui derivata è uguale a $f(x)$

## 🟢 Integrali definiti

L'integrale definito di una funzione $f(x)$ su intervallo $[a,b]$ è un numero reale, che rappresenta l'area della regione di piano compresa sull'intervallo $[a,b]$.

Per poter trovare quest'area, bisogna trovare una primitiva $F(x)$ di $f(x)$, a questo punto:
$$
\int^b_a{f(x)dx} = F(b) - F(a)
$$

Se dobbiamo integrare un integrale su un intervallo (a,b) e la funzione da integrare non è definita su $a$, possiamo trovare il limite per $c \to a$ dell'integrale nell'intervallo $(c, b)$.
Per esempio l'integrale di $\frac{1}{x}$ nell'intervallo $(0,5)$, possiamo calcolarlo come il limite per $c \to 0$:
$$
\lim_{c \to 0}\int_c^5 \frac{1}{x}
$$
##  🟢 Integrazione per parti (definita/indefinita)

L'integrazione per parti è utile quando stiamo integrando un prodotto:
Iniziamo dalla regola del prodotto

$$
\Large\frac{d}{dx} \left[ f(x)g(x) \right] = f'(x)g(x) + f(x)g'(x)
$$

Integriamo da entrambe le parti

$$
\Large f(x)g(x) = \int f'(x)g(x)\,dx + \int f(x)g'(x)\,dx
$$

Spostiamo le parti, ottenendo la formula dell' **integrazione per parti**:

$$
\Large\int f(x)g'(x)\,dx = f(x)g(x) - \int f'(x)g(x)\,dx
$$
Per esempio:

$$
\begin{aligned}
\Large\int x^2 e^x
\end{aligned}
$$
Applichiamo l'integrazione per parti
$$
\Large{x^2e^x - \int { 2x e^x}}
$$
Nell'integrale possiamo ancora applicare l'integrazione per parti
$$
\Large{x^2e^x - 2x e^x - \int 2e^x}
$$
A questo punto possiamo togliere la costante da dentro l'integrale
$$
\Large{x^2e^x - 2x e^x - 2\int e^x}
$$
E l'integrale di $e^x$ è semplicemente $e^x$, quindi:
$$
\Large{x^2e^x - 2x e^x - 2e^x}
$$

##  🟢 Integrazione per u sostituzione (definita/indefinita)

Utile quando stiamo cercando di ricondurci ad una forma conosciuta che è facile da integrare, o per modificare l'espressione per poter essere più facilmente integrabile.

###  Indefinito 
$$
\Large\int \frac{sin (x)}{(cos(x))^2} dx
$$
Possiamo sostituire $u = cos(x)$, e se applichiamo la derivata da entrambe le parti: 
$$
\begin{aligned}
\frac{d}{dx}(u) &= \frac{d}{dx}(cos(x))\\
\frac{du}{dx} &= -sin(x)
\end{aligned}
$$

Allora moltiplichiamo da entrambe le parti per $dx$,  e spostando il segno $-$, otteniamo:
$$
-du = sin(x) dx
$$

A questo punto riscriviamo l'integrale originale sostituendo $u = cos(x)$, per poi sostituire $sin(x) dx$ per $-du$
$$
\begin{aligned}
\int \frac{sin (x)}{(cos(x))^2} dx &= 
\int \frac{sin (x)}{u^2} dx \\
&= \int \frac{sin(x) dx }{u^2} \\
&= \int \frac{-du}{u^2} \\
&= \int - \frac{1}{u^2} du \\
&= \int -u^{-2}du \\
&= u^{-1} \\
& = \frac{1}{u} \\
& = \frac{1}{cos(x)}
\end{aligned}
$$
###  Definito 

$$
\Large\int_{\frac{\pi}{2}}^{\pi} -\cos^2(x)\sin(x)\, dx
$$
Allora:
$$
u = \cos(x)
\quad \Rightarrow \quad
\frac{du}{dx} = -\sin(x)
\quad \Rightarrow \quad
du = -\sin(x)\, dx
$$
 Così possiamo riscrivere l'integrale sostituendo:

- $cos^2(x) = u^2$
- $-\sin(x)\, dx = du$

Ottenendo:
$$
\Large\int u^2\, du
$$
L'integrale originale ha limiti di integrazione da $\frac{\pi}{2}$ a $\pi$:
$$
\Large\int_{x=\frac{\pi}{2}}^{x=\pi}
$$
Però ora il nostro integrale è verso $u$ non $x$, e dato che $u = cos(x)$, i nostri nuovi limiti di integrazione saranno:
$$
\Large\int_{u=cos(\frac{\pi}{2})}^{u=cos(\pi)} = \int_{0}^{-1}
$$

Allora riscriviamo l'integrale finale:
$$
\int_0^{-1} u^2\, du
$$
La cui primitiva è:
$$
\int u^2\, du = \frac{u^3}{3}
$$
A questo punto valutiamola sull'intervallo $0$ e $-1$ 

$$
\begin{aligned}
\left[\frac{u^3}{3}\right]_{0}^{-1} 
&= \frac{(-1)^3}{3} - \frac{0^3}{3} \\
&= -\frac{1}{3} - 0 \\
&= -\frac{1}{3}
\end{aligned}
$$
Più formalmente:

$$
\int_a^b f(g(x)) \cdot g'(x) \, dx = \int_{g(a)}^{g(b)} f(u) \, du.
$$

## 🟠 Integrazione per scomposizione in fratti semplici

è utile quando abbiamo un integrale di una funzione razionale di due polinomi $p$ e $q$, cioè $$\int \frac{p(x)}{q(x)}$$
Per esempio:
$$
\int \frac{x^4-2x^2+10}{x^2-3x+2}dx
$$
Quello che vogliamo fare è scomporre la funzione in una somma tra un polinomio e fratti semplici, cosi che sia facile applicare gli integrali notevoli. di $x^r$.

### 1) divisione

Se $grado(p) \ge grado(q)$, allora dividiamo $p$ per $q$ con resto, ottenendo i polinomi $s$ (risultato della divisione), e $r$ (resto). A questo punto:
- $p = s \cdot q + r$ 
- $grado(r) \lt grado(q)$ 
cioè che:
$$
\frac{p(x)}{q(x)} = s(x) + \frac{r(x)}{q(x)}
$$

Per esempio per $p(x) = x^4 - 2x^2 + 10$ e $q(x) = x^2 - 3x + 2$ otteniamo

$$
\begin{array}{rrrrrrl}
( & x^4 & & -2x^2 & & +10 & ) : (x^2 - 3x + 2) = x^2 + 3x + 5 + \dfrac{9x}{x^2 - 3x + 2} \\
 & \underline{-x^4} & \underline{+3x^3} & \underline{-2x^2} & & & \\
 & & 3x^3 & -4x^2 & & & \\
 & & \underline{-3x^3} & \underline{+9x^2} & \underline{-6x} & & \\
 & & & 5x^2 & -6x & +10 & \\
 & & & \underline{-5x^2} & \underline{+15x} & \underline{-10} & \\
 & & & & 9x & &
\end{array}
$$

### 2) linearità
Sfruttando la linearità dell'integrale si ottiene:
$$
\int \frac{p(x)}{q(x)}dx = \int s(x)dx + \int \frac{r(x)}{q(x)}dx
$$
Dove il $\int s(x)dx$ è facile da calcolare, dato che è somma di polinomi

Per esempio

$$
\begin{aligned}
\int \frac{x^4 - 2x^2 + 10}{x^2 - 3x + 2} \, dx &= \int x^2 + 3x + 5 \, dx + \int \frac{9x}{x^2 - 3x + 2} \, dx \\[0.6em]
&= \frac{x^3}{3} + \frac{3x^2}{2} + 5x + \int \frac{9x}{x^2 - 3x + 2} \, dx.
\end{aligned}
$$

### 3) decomposizione in fratti semplici

Ora finiamo calcolando $\int \frac{r(x)}{q(x)}dx$, considereremo solo i casi in cui $grado(q) = 2$, e cioè della forma: $q(x) = ax^2 + bx + c$, e quindi $r(x) = dx + e$ (qui la $e$ è solo una lettera, non il numero di eulero)

Abbiamo 3 casi da considerare:
- $b^2 - 4ac > 0$, cioè $q(x)$ ha due zeri reali distinti $x_1, x_2$ 
- $b^2 - 4ac = 0$, cioè $q(x)$ ha soltato uno zero reale $x_0$ 
- $b^2 - 4ac < 0$, cioè $q(x)$ non ha zeri reali.

### 3.1)
I due zeri distinti di $q(x)$ sono dati da:
$$
x_1,2 = \frac{-b\pm\sqrt{b^2-4ac}}{2a}
$$
Allora possiamo trovare due costanti $A, B \in \mathbb R$ uniche, tali che:
$$
\begin{aligned}
\frac{r(x)}{q(x)} &= \frac{A}{x-x_1} + \frac{B}{x - x_2}  \\
&\implies \int\frac{r(x)}{q(x)} dx \\
&=A \cdot ln |x-x_1| + B \cdot ln |x - x_2 | + c
\end{aligned}
$$

L'esempio precedente con $q(x) = x^2 - 3x + 2$ entra proprio in questo caso: Qui abbiamo

$$
x_{1,2} = \frac{3 \pm \sqrt{(-3)^2 - 4 \cdot 1 \cdot 2}}{2 \cdot 1} = \frac{3 \pm 1}{2} = 1 \text{ opp. } 2.
$$

Inoltre $r(x) = 9x$ e quindi cerchiamo costanti $A, B \in \mathbb{R}$ tale che

$$
\frac{9 \cdot x - 0}{x^2 - 3x + 2} \overset{!}{=} \frac{A}{x-1} + \frac{B}{x-2} = \frac{(A+B) \cdot x - (2A+B)}{(x-1) \cdot (x-2)}.
$$

Confrontando i coefficienti ciò vale se e solo se

$$
\left\{ \begin{aligned} A + B &= 9 \\ 2A + B &= 0 \end{aligned} \right\} \iff \left\{ \begin{aligned} A &= -9 \\ B &= 18 \end{aligned} \right\}
$$

e quindi otteniamo

$$
\begin{aligned}
\frac{9x}{x^2 - 3x + 2} &= \frac{-9}{x-1} + \frac{18}{x-2} \\[0.6em]
&\Rightarrow \int \frac{9x}{x^2 - 3x + 2} \, dx = -9 \cdot \ln\lvert x-1 \rvert + 18 \cdot \ln\lvert x-2 \rvert + c.
\end{aligned}
$$

Così risulta

$$
\int \frac{x^4 - 2x^2 + 10}{x^2 - 3x + 2} \, dx = \frac{x^3}{3} + \frac{3x^2}{2} + 5x - 9 \cdot \ln\lvert x-1 \rvert + 18 \cdot \ln\lvert x-2 \rvert + c.
$$

### 3.2)
L'unico zero di $q(x)$ è dato da:
$$
x_0 = - \frac{b}{2a}
$$
Allora si possono trovare due costanti $A,B \in \mathbb R$ tali che:
$$
\begin{aligned}
\frac{r(x)}{q(x)} &= \frac{A}{x-x_0} + \frac{B}{(x - x_0)^2} \\
&\implies \int \frac{r(x)}{q(x)}dx \\
&= A \cdot ln|x - x_0| - \frac{B}{x - x_0} + c
\end{aligned}
$$

Come esempio concreto consideriamo l'integrale

$$
\int \frac{3x}{x^2 - 2x + 1} \, dx.
$$

Allora il denominatore si annulla se e solo se

$$
x = \frac{2 \pm \sqrt{2^2 - 4}}{2} = 1 = x_0.
$$

Quindi cerchiamo $A, B \in \mathbb{R}$ tale che

$$
\frac{3 \cdot x + 0}{x^2 - 2x + 1} \overset{!}{=} \frac{A}{x-1} + \frac{B}{(x-1)^2} = \frac{A \cdot x + (B - A)}{(x-1)^2}
$$

Confrontando i coefficienti ciò vale se e solo se

$$
\left\{ \begin{aligned} A &= 3 \\ B - A &= 0 \end{aligned} \right\} \iff \left\{ \begin{aligned} A &= 3 \\ B &= 3 \end{aligned} \right\}
$$

e quindi otteniamo

$$
\frac{3x}{x^2 - 2x + 1} = \frac{3}{x-1} + \frac{3}{(x-1)^2} \quad \Rightarrow \quad \int \frac{3x}{x^2 - 2x + 1} \, dx = 3 \cdot \ln\lvert x-1 \rvert - \frac{3}{x-1} + c.
$$

### 3.3)

In questo caso, $q(x)$ non ha zeri reali. Allora si possono trovare due costanti $A, B \in \mathbb R$ tai che:
$$
\begin{aligned}
\frac{r(x)}{q(x)} &= \frac{A \cdot q'(x)}{q(x)} + \frac{B}{q(x)} \\
&\implies \int \frac{r(x)}{q(x)}dx \\
&=A \cdot ln|q(x)| + B\int\frac{1}{q(x)}dx
\end{aligned}
$$
Sappiamo che
$$
\int \frac{1}{q(x)}dx = \int\frac{1}{ax^2 + bx + c}dx
$$
Allora cerchiamo 3 costanti $\alpha, \beta, \gamma \in \mathbb R$ tale che
$$
q(x) = ax^2 + bx + c = \gamma \cdot\left(1 + \left(\frac{x+\alpha}{\beta}\right)^2\right)
$$
Sostituendo otteniamo:
$$
t := \frac{x+\alpha}{\beta} \implies \frac{dt}{dx} = \frac{1}{\beta} \implies dx = \beta \cdot dt
$$
E risulta che:
$$
\begin{aligned}
\int \frac{1}{q(x)}dx &= \int \frac{dx}{\gamma \cdot \left(1 + \left(\frac{x+\alpha}{\beta} \right)^2\right)} \\
&=\frac{\beta}{\gamma} \int\frac{dt}{1+t^2} = \frac{\beta}{\gamma} \cdot arctan(t) + c \\
&= \frac{\beta}{\gamma} \cdot arctan \left(\frac{x + \alpha}{\beta} \right) + c 
\end{aligned}
$$
**==Riassumendo==**, otteniamo:
$$
\int \frac{r(x)}{q(x)} = A \cdot ln | q(x) | + \frac{\beta \cdot B}{\gamma} \cdot arctan\left( \frac{x + \alpha}{\beta} \right) + c
$$
Dove:
$$
\frac{r(x)}{q(x)} = \frac{A \cdot q'(x) + B}{q(x)}
$$
e
$$
q(x) =  \gamma \cdot\left(1 + \left(\frac{x+\alpha}{\beta}\right)^2\right)
$$

Come esempio concreto consideriamo l'integrale

$$
\int \frac{4x}{x^2 - 4x + 13} \, dx.
$$

Visto che il discriminante del denominatore $b^2 - 4ac = 4^2 - 4 \cdot 13 < 0$ siamo nel terzo caso. Allora, cerchiamo prima $A, B \in \mathbb{R}$ tale che

$$
\frac{4 \cdot x + 0}{x^2 - 4x + 13} \overset{!}{=} \frac{A \cdot \overbrace{(x^2 - 4x + 13)'}^{=2x-4} + B}{x^2 - 4x + 13} = \frac{2A \cdot x + (-4A + B)}{x^2 - 4x + 13}.
$$

Confrontando i coefficienti ciò vale se e solo se

$$
\left\{ \begin{aligned} 2A &= 4 \\ -4A + B &= 0 \end{aligned} \right\} \iff \left\{ \begin{aligned} A &= 2 \\ B &= 8 \end{aligned} \right\}
$$

e quindi

$$
\int \frac{4x}{x^2 - 4x + 13} \, dx = 2 \cdot \ln(x^2 - 4x + 13) + 8 \int \frac{1}{x^2 - 4x + 13} \, dx.
$$

Inoltre vale

$$
x^2 - 4x + 13 = (x-2)^2 + 9 = 9 \cdot \left( 1 + \left( \tfrac{x-2}{3} \right)^2 \right)
$$

cioè $\alpha = 2$, $\beta = 3$ e $\gamma = 9$ e così con la sostituzione $t := \frac{x-2}{3} \Rightarrow dx = 3\,dt$ risulta

$$
\begin{aligned}
\int \frac{1}{x^2 - 4x + 13} \, dx &= \frac{1}{9} \cdot \int \frac{dx}{1 + \left( \frac{x-2}{3} \right)^2} \\[0.6em]
&= \frac{3}{9} \cdot \int \frac{dt}{1 + t^2} = \frac{1}{3} \cdot \arctan(t) + c \\[0.6em]
&= \tfrac{1}{3} \cdot \arctan\left( \tfrac{x-2}{3} \right) + c.
\end{aligned}
$$

Riassumendo otteniamo il risultato finale

$$
\int \frac{4x}{x^2 - 4x + 13} \, dx = 2 \cdot \ln(x^2 - 4x + 13) + \tfrac{8}{3} \cdot \arctan\left( \tfrac{x-2}{3} \right) + c.
$$

##  🟢 Integrazione per equazione di ricorrenza

è utile quando dobbiamo integrare una funzione che cicla in un certo periodo, cioè che ritorna alla forma originale.

$$
\Large{\int e^x cos(x)}
$$
Applichiamo l'integrazione per parti
$$
\Large\int e^x cos(x) = e^x cos(x) - \int{e^x \cdot (- sin(x))}
$$
Semplifichiamo il -
$$
\Large\int e^x cos(x) = e^x cos(x) + \int{e^x sin(x)}
$$
A questo punto riapplichiamo l'integrazioni per parti
$$
\Large\int e^x cos(x) = e^x cos(x) + e^x sin(x) - \int{e^x cos(x)}
$$
A questo punto potremmo continuare a fare integrazione per parti, ma come abbiamo appena visto, l'integrale cicla, quindi non riusciremo mai a finire il ciclo di integrazione. Ma possiamo spostare il secondo integrale a sinistra dell'equazione:
$$
\Large\int e^x cos(x) +  \int{e^x cos(x)} = e^x cos(x) + e^x sin(x)
$$
Semplifichiamo unendo i due integrali, ottenendo $2\int{e^x cos(x)}$, per poi dividere tutto per 2:
$$
\Large\int e^x cos(x) = \frac{e^x cos(x) + e^x sin(x)}{2}
$$

## 🟢Identità trigonometriche

$$
\Large\int\frac{1}{\sqrt{3-2x^2}}dx
$$
Non è immediata la sostituzione, ma possiamo lavorare sul denominatore per cercare di semplificare l'espressione cosi che sia più facilmente trattabile.

Sappiamo che $sin^2\theta+cos^2\theta = 1$, e quindi che $cos^2\theta = 1 - \sin^2\theta$ 

Proviamo a modificare l'integrale cosi da poter applicare qualcosa:
$$
\Large\int\frac{1}{\sqrt{3(1-\frac{2}{3}x^2)}}dx
$$
Il che ha la stessa forma di $cos^2\theta = 1 - \sin^2\theta$ allora proviamo a sostituire $\frac{2}{3}x^2=sin^2\theta$ cosi che siano identiche:

$$
\begin{aligned}
\frac{2}{3}x^2&=sin^2\theta \\
\frac{\sqrt2}{\sqrt3}x&=sin\theta \\
x &=\frac{\sqrt3}{\sqrt2}sin\theta
\end{aligned}
$$
Facciamo anche la derivata di questa:
$$
\frac{dx}{d\theta} = \frac{\sqrt3}{\sqrt2}cos\theta
$$
Il ciò implica che:
$$
dx = \frac{\sqrt3}{\sqrt2}cos\theta \ d\theta
$$
A questo punto possiamo rimpiazzare i termini nell'integrale originale 
$$
\Large\int\frac{dx}{\sqrt{3(1-\frac{2}{3}x^2)}} = 
\Large\int\frac{\frac{\sqrt3}{\sqrt2}cos\theta \ d\theta}{\sqrt{3(1-sin^2\theta)}}
$$

E abbiamo visto che $cos^2 = 1-sin^2\theta$, rimpiazziamolo:
$$
\begin{aligned}
\Large\int\frac{\frac{\sqrt3}{\sqrt2}cos\theta \ d\theta}{\sqrt{3cos^2\theta}} &= 
\Large\int\frac{\frac{\sqrt3}{\sqrt2}cos\theta \ d\theta}{\sqrt{3}\sqrt{cos^2\theta}} \\
&= \Large\int\frac{\frac{\cancel{\sqrt3}}{\sqrt2}\cancel{cos\theta} \ d\theta}{\cancel{\sqrt{3}} \ \cancel{cos\theta}} \\
&= \int \frac{1}{\sqrt2 \ }d\theta \\
&=  \frac{1}{\sqrt2} \int d\theta \\
	&= \frac{1}{\sqrt2}\theta
\end{aligned}
$$
Ma dobbiamo risolvere per $x$. Tornando alla sostituzione che abbiamo fatto prima:
$x =\frac{\sqrt3}{\sqrt2}sin\theta$, possiamo ricavare che:
$$
\Large\theta = arcsin\left(\frac{\sqrt2}{\sqrt3}x\right)
$$ 
Allora facciamo la sostituzione inversa:
$$
\Large\frac{1}{\sqrt2}\theta =\frac{1}{\sqrt2} arcsin\left(\frac{\sqrt2}{\sqrt3}x\right)
$$
Che è la nostra soluzione finale.

**Trigonometric Identities**

| **Reciprocal Identities** | **Quotient Identities** |
|---|---|
| $\begin{aligned} \cot\theta &= \dfrac{1}{\tan\theta} \\[0.6em] \csc\theta &= \dfrac{1}{\sin\theta} \\[0.6em] \sec\theta &= \dfrac{1}{\cos\theta} \end{aligned}$ | $\begin{aligned} \tan\theta &= \dfrac{\sin\theta}{\cos\theta} \\[0.6em] \cot\theta &= \dfrac{\cos\theta}{\sin\theta} \end{aligned}$ |

| **Pythagorean Identities** |
|---|
| $\begin{gathered} \sin^2\theta + \cos^2\theta = 1 \\ \tan^2\theta + 1 = \sec^2\theta \\ 1 + \cot^2\theta = \csc^2\theta \end{gathered}$ |

## 🟢 Integrali impropri

Sia $f: [a,b) \to \mathbb R$ con $a \in \mathbb R$ e $b \in \mathbb R \cup \{+\infty\}$ tale che $f$ è integrabile in $[a,c]$ per ogni $a \lt c \lt b$, allora se converge:
$$
\lim_{c \to b^-} \int^c_a f(x) dx =: A
$$
Si dice che l'integrale:
$$
\int^c_a f(x) dx =: A
$$
è chiamato "integrale improprio" o "generalizzato".

Un integrale "converge" se esiste il limite $A$ scritto prima. 

Per esempio:
$$
\int_1^{+\infty} \frac{1}{x(ln(x) + 2)^3}dx
$$
Risolviamo per sostituzione $u = ln(x)$, allora $du = \frac{1}{x}dx$ 
$$
\begin{aligned}
\int \frac{1}{x(ln(x) + 2)^3}dx &= \int \frac{1}{(ln(x) + 2)^3} \cdot \frac{1}{x}dx  \\ 
& = \int \frac{1}{(u + 2)^3}du  \\
& = \int(u+2)^{-3}du \\
& = \frac{(u+2)^{-2}}{-2} \\
& = \frac{-1}{2(ln(x) + 2)^2}
\end{aligned}
$$

A questo punto per trovare il valore dell'integrale improprio, risolviamo il limite valutando  l'integrale:
$$
\begin{aligned}
\lim_{b \to \infty} \left[ \frac{-1}{2(ln(x) + 2)^2} \right]^b_1 &= \lim_{b \to \infty} \frac{-1}{2(ln(b) + 2)^2} - \frac{-1}{2(ln(1) + 2)^2} \\
&= 0  + \frac{1}{2(0 + 2)^2} = \frac{1}{8}
\end{aligned}
$$
## 🟠 Teorema del confronto per gli integrali impropri

Siano $f, g : [a, b) \to \mathbb{R}$ con $a \in \mathbb{R}$, $b \in \mathbb{R} \cup \{+\infty\}$ e tali che per ogni $a < c < b$, $f$ e $g$ siano integrabili su $[a, c]$.

Se:
- $|f(x)| \leq g(x)$ per ogni $x \in [a, b)$ (cioè $g$ è un maggiorante di $|f|$)
- $\int_a^b g(x) \, dx$ converge
allora converge anche $\int_a^b f(x) \, dx$.

Un risultato simile vale anche per $f, g : (a, b] \to \mathbb{R}$ con $a \in \mathbb{R} \cup \{-\infty\}$, $b \in \mathbb{R}$.

L'intuizione è che $g(x)$ è una funzione "più grande" rispetto $|f(x)|$, ed ha area finita. Allora di sicuro anche l'area sotto $f(x)$, che è più piccola, deve essere finita. 
## 🟢 Criterio integrale per le serie

Se $f : [1, +\infty] \to [0, +\infty]$ è decrescente e $a_k := f(k)$, allora:
$$
\sum_{k = 1}^{+\infty} a_k \quad \text{converge} \qquad \Leftrightarrow \qquad \int_1^{+\infty} f(x)dx \quad \text{converge}
$$
