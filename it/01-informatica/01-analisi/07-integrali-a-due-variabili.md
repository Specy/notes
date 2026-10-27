---
title: Integrali a Due Variabili
description: "Integrali doppi: rappresentazione del dominio di integrazione, coordinate polari, proprietà, teorema di Fubini-Tonelli e tecniche di risoluzione, anche per separazione."
type: lecture
---

#  🟢 Integrali a due parametri

Data una funzione $f: X \subset \mathbb R^2 \to \mathbb R$, vogliamo trovare il volume $V$ fra il piano xy e il grafico di $f$.

Come abbiamo fatto nel caso degli integrali ad una variabile, vogliamo approssimare il volume tramite la differenza delle somme superiori e inferiori. Ma in questo caso, non abbiamo una singola retta, ma un rettangolo.

Allora scegliamo un rettangolo $R = [a,b] \times [c,d]$ tale che $X \subseteq \mathbb R$ e definiamo:
$$
\overline f(x,y) = \left\{
\begin{aligned}
f(x,y) &\quad \text{se} \ (x,y) \in R \\
0 &\quad \text{se} \ (x,y) \in R \setminus X
\end{aligned}
\right.
$$
cioè estendiamo f, ponendo 0 per i punti fuori da $X$. I volumi delle due funzioni saranno uguali.
A questo punto partizioniamo il rettangolo $R$ nei suoi due assi $x$ e $y$:

Date due partizioni

$$
\begin{aligned}
P_x &= \{a = x_0 < x_1 < x_2 < \ldots < x_n = b\} \quad \text{di } [a,b] \text{ e} \\
P_y &= \{c = y_0 < y_1 < y_2 < \ldots < y_m = d\} \quad \text{di } [c,d],
\end{aligned}
$$

definiamo la partizione

$$
\begin{aligned}
P_{xy} &:= P_x \times P_y \quad \text{di } R = [a,b] \times [c,d] \text{ nei rettangoli} \\
R_{ij} &:= [x_{i-1}, x_i] \times [y_{j-1}, y_j] \quad \text{per } i = 1, \ldots, n,\ j = 1, \ldots, m.
\end{aligned}
$$

![[Pasted image 20250628131002 figura.png]]

Partizione del rettangolo $R$ contenente $X$ ($n = 5$, $m = 4$).

- Per $P_{xy}$ poniamo per $i = 1, \ldots, n$, $j = 1, \ldots, m$

$$
\begin{aligned}
m_{ij} &:= \inf\{\bar{f}(x,y) : (x,y) \in R_{ij}\}, \\
M_{ij} &:= \sup\{\bar{f}(x,y) : (x,y) \in R_{ij}\}, \\
\lvert R_{ij} \rvert &:= (x_i - x_{i-1}) \cdot (y_j - y_{j-1}) = \text{ area del rettangolo } R_{ij},
\end{aligned}
$$

e definiamo

$$
\begin{aligned}
s(\bar{f}, P_{xy}) &:= \sum_{i=1}^{n} \sum_{j=1}^{m} m_{ij} \cdot \lvert R_{ij} \rvert =: \ \textit{somma inferiore}, \\
S(\bar{f}, P_{xy}) &:= \sum_{i=1}^{n} \sum_{j=1}^{m} M_{ij} \cdot \lvert R_{ij} \rvert =: \ \textit{somma superiore}.
\end{aligned}
$$

Quindi per ogni partizione $P_{xy}$ di $R$ vale

$$
s(\bar{f}, P_{xy}) \le V \le S(\bar{f}, P_{xy}),
$$

Cioè le somme inferiori sono sempre approssimazioni in difetto di V, mentre le somme superiori sono approssimazioni in eccesso di V. 

Se non c'è differenza tra la migliore approssimazione da sotto e sopra, allora abbiamo risolto il problema, dato che abbiamo trovato $V$, e quindi $f$ si dice integrabile.

Più formalmente:

Sia $f : X \subset \mathbb{R}^2 \to \mathbb{R}$ limitata. Se per $\bar{f}$ definita in $(*)$ vale

$$
\sup\{ s(\bar{f}, P_{xy}) : P_{xy} \text{ partizione di } R \} = \inf\{ S(\bar{f}, P_{xy}) : P_{xy} \text{ partizione di } R \} =: I
$$

allora $f$ si dice *integrabile* (secondo Riemann). In questo caso $V = I$ e si definisce *l'integrale doppio*

$$
\iint_X f(x, y)\, dx\, dy := I
$$

della funzione integranda $f$ nel dominio dell’integrazione $X$.

## 🟢 Disegnare un insieme

$$
X := \left\{(x,y) \in \mathbb{R}^2 : x \in [-1,3],\ x - 1 \le y \le \sqrt{x+1}\right\}
$$

Troviamo tutti i vincoli:
- $x \in [-1, 3]$ ci dice che i valori sull'asse X sono compresi fra $-1$ e $3$, allora dovremmo contare solo i valori in questo intervallo

- $x - 1 \le y$ vuol dire che i valori dell'asse y sono più grandi di $x - 1$, quindi disegneremo la retta $y = x - 1$ che rappresenta il "bordo" di questo vincolo

- $y \le \sqrt{x +1}$ vuol dire che i valori di $y$ sono più piccoli di $\sqrt{x + 1}$, quindi disegneremo  $y = \sqrt{x + 1}$ che rappresenta il "bordo" di questo vincolo, questo bordo è rappresentato da una "parabola" schiacciata verso destra

L'insieme X sarà tutti i valori dentro questi vincoli:

```plot
x: [-1.9, 4]
y: [-2.6, 3.9]
width: 520
height: 330
xticks: { -1: "", 1: "$1$", 3: "$3$" }
yticks: []
alt: L'insieme X compreso tra la curva y = radice di x+1 (sopra) e la retta y = x-1 (sotto), per x tra -1 e 3.
items:
  - area: sqrt(x + 1)
    base: x - 1
    from: -1
    to: 3
    color: muted
  - line: [[-1, 0], [-1, -2]]
    color: muted
    width: 1.2
  - fn: x - 1
    domain: [-1.45, 3.7]
    color: green
    label: $y = x - 1$
    labelAt: 3.7
    anchor: e
  - fn: s(x) = sqrt(x + 1)
    domain: [-1, 3]
    color: teal
  - guide: [3, 2]
    to: x
    dash: dotted
  - text: $y = \sqrt{x+1}$
    color: teal
    at: [-1.15, 1.35]
  - text: $-1$
    at: [-1.05, 0.05]
    anchor: nw
  # etichetta X con linea di richiamo verso l'insieme
  - line: [[1.55, 3.3], [1.37, 3.3], [1.24, 3.28], [1.12, 3.22], [1.02, 3.12], [0.94, 3.0], [0.89, 2.86], [0.87, 2.7], [0.86, 0.85]]
    color: muted
    width: 1.2
  - point: [0.86, 0.85]
    color: muted
    size: 2.5
  - text: $X$
    at: [1.6, 3.3]
    color: muted
    anchor: e
```

## 🟢 Integrale doppio con coordinate polari

Per domini $X$ "circolari" di integrazione conviene spesso di passare dalle coordinate cartesiane $(x, y)$ alle coordinate polari $(\rho, \vartheta)$ per semplificare la rappresentazione di $X$. Per fare ciò serve il seguente risultato.

Sia $f : X \subset \mathbb{R}^2 \to \mathbb{R}$ integrabile. Se il dominio $X$ in coordinate cartesiane $(x, y)$ corrisponde al dominio $X'$ in coordinate polari $(\rho, \vartheta)$, allora

$$
\begin{aligned}
x &= \rho \cdot \cos(\theta) \\
y &= \rho \cdot \sin(\theta)
\end{aligned}
\quad \longrightarrow \quad
\iint_X f(x, y) \, dx \, dy = \iint_{X'} f(\rho \cdot \cos(\vartheta), \rho \cdot \sin(\vartheta)) \cdot \rho \, d\rho \, d\vartheta
$$

Passando alle coordinate polari l'elemento infinitesimale di area $dx \, dy$ si trasforma in $\rho \cdot d\rho \, d\vartheta$

Dobbiamo anche ricordarci di trasformare il dominio X in coordinate polari, cioè applicare le stesse equazioni che abbiamo usato per $x$ e $y$ 

Per esempio, risolviamo l'integrale doppio:

$$
{\int \int}_X  \frac{x^2\cdot y}{\sqrt{x^2 + y^2}}
$$
Nell'insieme: 
$$
X = \left \{(x,y)\in \mathbb R : 1 \leq x^2 + y^2 \leq 9, 0 \le y \le x \right\}
$$

```plot
x: [-5.3, 6.6]
y: [-4.9, 4.9]
width: 520
aspect: equal
axes: false
alt: L'insieme X, la parte della corona circolare tra le circonferenze di raggio 1 e 3 compresa tra l'asse x e la retta y = x, evidenziata in rosso.
items:
  # assi
  - line: [[-5.3, 0], [4.6, 0]]
    width: 1.2
  - line: [[0, -4.9], [0, 3.9]]
    width: 1.2
    arrow: true
  # X: settore della corona tra y = 0 e y = x, contorno e campitura rossi
  - area: x
    base: sqrt(1 - x^2)
    from: 0.7071
    to: 1
    color: red
  - area: x
    from: 1
    to: 2.1213
    color: red
  - area: sqrt(9 - x^2)
    from: 2.1213
    to: 3
    color: red
  - circle: [0, 0]
    r: 1
  - circle: [0, 0]
    r: 3
  - line: [[-4.05, -4.05], [4.7, 4.7]]
  - line: [[1, 0], [3, 0], [2.989, 0.261], [2.954, 0.521], [2.898, 0.776], [2.819, 1.026], [2.719, 1.268], [2.598, 1.5], [2.457, 1.721], [2.298, 1.928], [2.121, 2.121], [0.707, 0.707], [0.766, 0.643], [0.819, 0.574], [0.866, 0.5], [0.906, 0.423], [0.94, 0.342], [0.966, 0.259], [0.985, 0.174], [0.996, 0.087], [1, 0]]
    color: red
  - text: $y = x$
    at: [4.8, 4.65]
    anchor: e
  - text: $1$
    at: [1.1, -0.15]
    anchor: se
  - text: $3$
    at: [3.1, -0.15]
    anchor: se
  - line: [[4.35, 1.6], [3.9, 1.57], [3.5, 1.45], [3.15, 1.22], [2.85, 0.97], [2.6, 0.75]]
    color: red
    width: 1.2
  - text: $X$
    at: [4.5, 1.6]
    color: red
    anchor: e
```

Allora poniamo 
$$
\begin{aligned}
x &= \rho \cdot \cos(\theta) \\
y &= \rho \cdot \sin(\theta)
\end{aligned}
$$
Prima di tutto riscriviamo l'insieme, abbiamo $x^2 + y^2$ che diventa $\rho^2 \cdot cos^2(\theta) + \rho^2 \cdot sin^2(\theta)$ , isolando il $\rho$ otteniamo $\rho^2 \cdot (cos^2(\theta) + sin^2(\theta))$ la somma del seno e coseno al quadrato è 1, facendo rimanere solo $\rho^2$, quindi il vincolo diventa $1 \le \rho^2 \le 9$, sapendo che $\rho$ è una quantità positiva, allora possiamo semplificare e dire che $1 \le \rho \le 3$.

A questo punto andiamo al secondo vincolo $0 \le y \le x$.  Da dominio $x$ e $y$ sono valori positivi, allora si trovano nel primo quadrante del piano cartesiano. Abbiamo inoltre che $y \le x$ quindi i valori si trovano al disotto della retta $y = x$ che taglia il quadrante a metà orizzontalmente (a 45 gradi, cioè $\frac{\pi}{4}$). 
Oppure in maniera analitica, applichiamo la sostituzione di nuovo:
$$
0 \le \rho \cdot sin(\theta) \le \rho \cdot cos(\theta)
$$
Allora analizziamo i due pezzi, possiamo semplificare il $\rho$, che sapendo essere positiva non cambia il segno della disequazione: 
$$
0 \le sin(\theta) \le cos(\theta)
$$
E ora ci interessa isolare $\theta$, quindi dividiamo per $cos(\theta)$, che anche essa nel quadrante positivo è positivo quindi non cambia il segno della disequazione:
$$
\tan(\theta) = \frac{\sin(\theta)}{cos(\theta)} \le 1
$$
 
E sappiamo che la tangente è uguale a 1 quando $\theta = \frac{\pi}{4}$

E quindi il nostro nuovo dominio è:
$$
X'=\left \{ (\rho, \theta) \ | \ 1 \le \rho \le 3 \ , \ 0 \le \theta \le \frac{\pi}{4}  \right\} = [1,3] \times \left[0, \frac{\pi}{4} \right]
$$
 
A questo punto possiamo sviluppare l'integrale. Prima di tutto convertiamo in coordinate polari e semplifichiamo:
 
Allora applicando:
Otteniamo 
$$
\iint_{X'} (\rho^2 \cos(\theta) \cdot \sin^2(\theta)) \cdot \rho \ \partial \theta \ \partial \rho = \iint_{X'} \rho^3 \cos(\theta) \cdot \sin^2(\theta) \ \partial \theta \ \partial \rho
$$
Che nell'insieme $X'$ diventa:
$$
\int_1^3 \int_0^{\frac{\pi}{4}} \rho^3 \cos(\theta) \cdot \sin^2(\theta) \ \partial \theta \ \partial \rho
$$

Essendo gli estremi di integrazione costanti e la funzione a variabili separabili, possiamo spezzare l'integrale:
$$
\int_1^3 \rho^3 \ \partial \rho \cdot \int_0^{\frac{\pi}{4}} \cos(\theta) \sin^2(\theta) \ \partial \theta
$$

Risolviamo la parte angolare applicando la sostituzione:
$$
\begin{aligned}
t &= \sin(\theta) \\ &\implies dt = \cos(\theta) \ \partial \theta
\end{aligned}
$$
Aggiorniamo gli estremi di integrazione:

* Se $\theta = 0 \implies t = 0$
* Se $\theta = \frac{\pi}{4} \implies t = \frac{\sqrt{2}}{2}$

L'integrale diventa quindi:
$$
\begin{aligned}
&= \left[ \frac{1}{4}\rho^4 \right]_1^3 \cdot \int_0^{\frac{\sqrt{2}}{2}} t^2 \ dt \\
 &= \left( \frac{1}{4} \cdot 3^4 - \frac{1}{4} \cdot 1^4 \right) \cdot \left[ \frac{1}{3}t^3 \right]_0^{\frac{\sqrt{2}}{2}}
 \\ &= \left( \frac{81}{4} - \frac{1}{4} \right) \cdot \left( \frac{1}{3} \cdot \left(\frac{\sqrt{2}}{2}\right)^3 - 0 \right)  \\
&= \frac{80}{4} \cdot \frac{1}{3} \cdot \frac{2\sqrt{2}}{8} \\
&= 20 \cdot \frac{1}{3} \cdot \frac{\sqrt{2}}{4} \\
& = \frac{5\sqrt{2}}{3}
\end{aligned}
$$

## 🟠 Area di una funzione a due parametri

Se vogliamo trovare l'area di una funzione, e non il volume, possiamo trovare il volume di altezza $1$ 

Se $X \subset \mathbb R^2$ è un insieme limitato tale che la funzione $\mathbb 1: X \to \mathbb R, \mathbb 1(x,y) = 1$ è integrabile, allora si dice che $X$ è misurabile e si pone:
$$
|X| := \int\int_X 1 \ dx \ dy = \text{misura (= area) di $X$}
$$

## 🟢 Proprietà integrali doppi

**Proprietà dell'integrale.** Siano $f, g : X \to \mathbb{R}$ integrabili con $X \subset \mathbb{R}^2$ misurabile. Allora

- $\alpha \cdot f + \beta \cdot g$ è integrabile per ogni $\alpha, \beta \in \mathbb{R}$ (cioè l'insieme delle funzioni integrabili con dominio $X$ è uno spazio vettoriale) e

$$
\iint_X \big(\alpha \cdot f(x,y) + \beta \cdot g(x,y)\big)\, dx\, dy = \alpha \cdot \iint_X f(x,y)\, dx\, dy + \beta \cdot \iint_X g(x,y)\, dx\, dy
$$

(cioè l'integrale è un'operazione *lineare*);

- se $f(x,y) \le g(x,y)$ per ogni $(x,y) \in X$ allora

$$
\iint_X f(x,y)\, dx\, dy \le \iint_X g(x,y)\, dx\, dy
$$

(cioè l'integrale è *monotono*);

- anche $\lvert f \rvert$ è integrabile e

$$
\left\lvert \iint_X f(x,y)\, dx\, dy \right\rvert \le \iint_X \lvert f(x,y) \rvert\, dx\, dy
$$

(*disuguaglianza triangolare*);

- se $\lvert X \rvert = 0$, allora

$$
\iint_X f(x,y)\, dx\, dy = 0
$$

- se $X = X_1 \cup X_2$ e $\lvert X_1 \cap X_2 \rvert = 0$, allora

$$
\iint_X f(x,y)\, dx\, dy = \iint_{X_1} f(x,y)\, dx\, dy + \iint_{X_2} f(x,y)\, dx\, dy
$$

(*additività* dell'integrale rispetto alla decomposizione di insiemi).

## 🟢 Teorema di fubini tonelli

Un insieme $X \subseteq \mathbb R^2$ limitato si dice:

1. **y-semplice** se esistono due funzioni continue $g_1, g_2: [a,b] \to \mathbb R$ tali che
$$
X = \left\{(x,y) \in \mathbb R^2 : x\in [a,b], \ \ g_1(x) \le y \le g_2(x)   \right\}
$$
2. **x-semplice** se esistono due funzioni continue $h_1, h_2: [c,d] \to \mathbb R$ tali che:
$$
X = \left\{(x,y) \in \mathbb R^2 : y\in [c,d], \ \ h_1(y) \le x \le h_2(y)   \right\}
$$
3. **semplice** se è x-semplice o y-semplice
4. **regolare** se è l'unione di un numero finito di domini semplici

![[Pasted image 20250628142609.png]]
Lo scopo è quello di mostrare che il calcolo dell'integrale doppio è equivalente al calcolo in successione di due integrali in una variabile

Allora, sia $f: X \subset \mathbb R^2 \to \mathbb R$ una funzione continua e $X$ un dominio semplice, allora $f$ è integraile su $X$, e inoltre:

- (i) se $X$ è $y$-semplice

$$
\boxed{\iint_X f(x,y)\, dx\, dy = \int_{x=a}^{b} \left( \int_{y=g_1(x)}^{g_2(x)} f(x,y)\, dy \right) dx}
$$

- (ii) se $X$ è $x$-semplice

$$
\boxed{\iint_X f(x,y)\, dx\, dy = \int_{y=c}^{d} \left( \int_{x=h_1(y)}^{h_2(y)} f(x,y)\, dx \right) dy}
$$

L'idea del teorema per calcolare $V$ è quelloo di decomporlo in una unione di fette di spessore infinitesimale e poi sommare il volume di ogniuna di queste fette. 
Per esempio:

$$
A(x) = \int_{y=g_1(x)}^{g_2(x)} f(x,y)\, dy
$$

che rappresenta la superficie del taglio di $V$ al punto $x$. Moltiplicando per lo spessore $dx$ otteniamo $dV(x) := A(x) \cdot dx$ che rappresenta

![[Pasted image 20250628143133 figura.png]]

Il teorema di Fubini–Tonelli per $X$ $y$-semplice.

il volume della $x$-esima fetta infinitesimale. L'integrale esterno

$$
\int_{x=a}^{b} dV(x) = \int_{x=a}^{b} A(x)\, dx = \int_{x=a}^{b} \left( \int_{y=g_1(x)}^{g_2(x)} f(x,y)\, dy \right) dx
$$

poi somma i volumi di tutte le fette infinitesimali e quindi rappresenta il volume complessivo $V$.

Per esempio, $X = \left\{(x,y)\in \mathbb R^2 : x \in [-1, 3], x-1 \le y \le \sqrt{x+1}  \right \}$ 
L'insieme è $y$ semplice dato che $y$ è vincolata da due funzioni $x -1$ e $\sqrt{x + 1}$. Allora 

$$
\int\int_X{2xy} \ dx \ dy = \int_{x = -1}^3\left(\int_{y = x -1}^{\sqrt{x + 1}}2xy \ dy\right)dx
$$
l'integrale interno è $xy^2$, valutandolo su $x-1$ e $\sqrt{x + 1}$ otteniamo:
$$
x(\sqrt{x +1})^2 - x(x - 1)^2 = -x^3 + 3x^2
$$
A questo punto dobbiamo risolvere l'integrale esterno:
$$
\int_{x = -1}^3 -x^3 + 3x^2 = \left [ -\frac{x}{4}^4 + x^3 \right]_{-1}^{3} = - \frac{3}{4}^4+ 3^3 - \left(-\frac{(-1)^4}{4} + (-1)^4 \right)  = \frac{32}{4} = 8
$$

## 🟢Risoluzione integrali a due variabili

Prendiamo l'integrale 
$$
\iint 3x^2 + 4y \ dx \ dy
$$
Per prima cosa integriamo per $x$, naturalmente $3x^2$ diventa $x^3$, ma dobbiamo fare attenzione quando troviamo un altra variabile.

Quando troviamo una variabile diversa da quella su cui stiamo integrando, allora la consideriamo come una costante, possiamo quindi portarla fuori dall'integrale sfruttando la linearità, consideriamo solo quella per ora, allora:
$$
\int 4y \ dx = 4y\int1 \ dx = 4y \cdot x
$$
A questo punto mettiamo tutto insieme e otteniamo
$$
\int x^3 + 4xy \ dy
$$
Sempre usando la linearità, otteniamo:
$$
\begin{aligned}
\int x^3 + 4xy \ dy &= \int x^3 \ dy \ + \int 4xy \ dy \\ &= x^3 \int 1 \ dy \ + 4x\int y \ dy \\ &= x^3y + 4x \frac{1}{2}y^2 \\ &= x^3 + 2xy^2
\end{aligned}
$$
Possiamo naturalmente saltare tutti questi step intermedi e invece fare direttamente a mente.

## 🟢Risoluzione integrali a due variabili con separazione

Alternativamente, se la funzione che dobbiamo integrare può essere (sempre grazie alla linearità) separata in funzioni, una che dipende solo da x e l'altra che dipende solo da y, allora possiamo dividerli in due integrali, uno dipendente solo da x e l'altra dipendente solo da y.
Possiamo applicare questa divisione insieme a quello che abbiamo mostrato prima per risolvere gli integrali doppi (eccetto se uno degli estremi dell'integrale dipende dall'integrale esterno).
$$
\iint f(x)\cdot g(y) \ dx \ dy = \int f(x) \ dx \ \cdot \int g(y) \ dy   
$$
Per esempio:
$$
\iint cos(x)\cdot sin^2(y) \ dx \ dy = \int cos(x) \ dx \cdot \int sin^2(y) \ dy  
$$
