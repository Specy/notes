---
title: Funzioni a Due Variabili
description: "Funzioni di due variabili: limiti e loro (non) esistenza, coordinate polari, continuità, derivabilità e differenziabilità, piano tangente, derivate direzionali e teorema del gradiente."
type: lecture
---

# Funzioni a due parametri

Definiamo l'insieme $\mathbb R^2 := \{(x,y): x,y \in \mathbb R\}$, gli elementi $(x,y)$ sono chiamati **vettori** (o punti) in $\mathbb R^2$. Questi vettori hanno operazioni:
- **Somma**: $(x_1,y_1) + (x_2,y_2) = (x_1+x_2, y_1+y_2)$
- **Prodotto per uno scalare**: $\alpha \cdot (x,y) = (\alpha x, \alpha y)$

Per misurare la distanza di un punto $(x,y)$ dall'origine $(0,0)$, usiamo la **norma**:
$$
\| (x,y) \| = \sqrt{x^2 + y^2}
$$
Che ha le seguenti proprietà:
- $\| (x,y) \| \geq 0$ per ogni $(x,y) \in \mathbb R^2$, e $\| (x,y) \| = 0$ se e solo se $(x,y) = (0,0)$
- $\| \alpha \cdot (x,y) \|\ = \|\alpha| \cdot \| (x,y) \|$ per ogni $\alpha \in \mathbb R$
- $\| (x_1,y_1) + (x_2,y_2) \| \leq \| (x_1,y_1) \| + \| (x_2,y_2) \|$ per ogni $(x_1,y_1), (x_2,y_2) \in \mathbb R^2$ (disuguaglianza triangolare)

Possiamo misurare la distanza tra due punti $(x_1,y_1)$ e $(x_2,y_2)$ come:
$$
\| (x_1,y_1) - (x_2,y_2) \| = \sqrt{(x_1 - x_2)^2 + (y_1 - y_2)^2}
$$
Infine definiamo il prodotto scalare tra due vettori $(x_1,y_1)$ e $(x_2,y_2)$ come:
$$
(x_1,y_1) \cdot (x_2,y_2) = x_1x_2 + y_1y_2
$$

## 🟠 Limiti di funzioni a due parametri

Diremo che la successione di vettori $\{(x_n,y_n)_{n\in\mathbb N} \subset R^2\}$ converge al vettore $(x_0,y_0)$ se:
$$
\| (x_n,y_n) - (x_0,y_0) \| \to 0 \quad \text{per} \ n \to +\infty
$$
Allora scriviamo:
$$ 
lim_{n \to +\infty} (x_n,y_n) = (x_0,y_0)
$$

E vale che:
$$
\lim_{n \to +\infty} (x_n,y_n) = (x_0,y_0) \quad \Leftrightarrow \quad \left \{
\begin{aligned}
\lim_{n \to +\infty} x_n = x_0 \\
\lim_{n \to +\infty} y_n = y_0
\end{aligned}  
\right.
$$

Possiamo fare lo stesso per le funzioni $f: \mathbb X \subseteq \mathbb R^2 \to \mathbb R$. 

Alcune osservazioni:
- La definizione di limite a due variabili può essere data solo per $(x_0, y_0) \in \mathbb R^2$, cioè al finito, quindi escludiamo i punti all'infinito. 
- Il limite se esiste, è unico.
- Valgono le regole per il calcolo dei limiti, come la linearità, il prodotto, il quoziente, etc...
## 🟢 NON Esistenza del limite

Una condizione per la **NON** esistenza del limite di una funzione a due variabili è che il limite:
$$
\lim_{(x,y) \to (x_0,y_0)} f(x,y) = l
$$
Cioè che per ogni avvicinamento all'origine, risulta che il limite deve convergere allo stesso valore $l$.

In altre parole, se esistono due o più avvicinamenti all'origine con valori di limite diversi, allora il limite non esiste.

Per generalizzare possiamo dire che se il limite $\lim_{x \to 0} f(x, mx)$ esiste ma dipende da $m \in \mathbb R$ (cioè se x = 0, posso scegliere $m$ come voglio per cambiare il valore del limite), allora il limite:
$$
\lim_{(x,y) \to (0,0)} f(x,y)
$$
non esiste.

Per esempio, consideriamo il limite:
$$
\lim_{(x,y) \to (0,0)} \frac{xy}{x^2 + y^2}
$$
ponendo $y = mx$, otteniamo:
$$
\lim_{x \to 0} f(x, mx) = \lim_{x \to 0} \frac{mx^2}{x^2 + m^2x^2} = \lim_{x \to 0} \frac{m}{1 + m^2} = \frac{m}{1 + m^2}
$$
Che dipende da $m$, quindi il limite non esiste.

Ricordiamo che questo è una condizione sufficiente per la non esistenza del limite, ma non è l'unica. 
Infatti, se il limite di $x \to 0$ di $f(x, mx)$ esiste, non significa che il limite di $f(x,y)$ esiste.

Facciamo un altro esempio, consideriamo il limite:
$$
\lim_{(x,y) \to (0,0)} \frac{x^2y}{x^4 + y^2}
$$
Ponendo $y = mx$, otteniamo:
$$
\lim_{x \to 0} f(x, mx) = \lim_{x \to 0} \frac{x^2(mx)}{x^4 + (mx)^2} = \lim_{x \to 0} \frac{mx^3}{x^4 + m^2x^2} = \lim_{x \to 0} \frac{mx}{x^2 + m^2} = 0
$$
Quindi tutti i limiti di $f(x, mx)$ sono uguali a 0, ma questo non implica che il limite di $f(x,y)$ esista, ma se esiste, deve essere necessariamente 0. Infatti, se proviamo a calcolare il limite con $y = x^2$, otteniamo:
$$
\lim_{x \to 0} f(x, x^2) = \lim_{x \to 0} \frac{x^2(x^2)}{x^4 + (x^2)^2} = \lim_{x \to 0} \frac{x^4}{x^4 + x^4} = \lim_{x \to 0} \frac{1}{2} = \frac{1}{2} \ne 0 = \lim_{x \to 0} f(x, x)!!
$$
Che sono due avvicinamenti diversi all'origine, dove $y = x^2$ ha limite $\frac{1}{2}$, mentre $y = x$ ha limite 0. Allora il limite di $f(x,y)$ non esiste.

## 🟢 Coordinate polari

Un punto $P$ nel piano può essere rappresentato sia in coordinate cartesiane $(x,y)$ che in coordinate polari $(\rho,\theta)$:

```plot
x: [-1.1, 18]
y: [-1, 5.6]
width: 600
aspect: equal
axes: false
alt: Un punto P nel piano con coordinate cartesiane (x, y) e coordinate polari (ρ, θ), dove ρ è la distanza dall'origine e θ l'angolo con l'asse x.
items:
  - line: [[-1, 0], [9.65, 0]]
    width: 1.2
    arrow: true
  - line: [[0, -0.95], [0, 5.5]]
    width: 1.2
    arrow: true
  - line: [[0, 4.2], [8, 4.2], [8, 0]]
    color: red
    dash: dotted
    width: 1.2
  - line: [[0, 0], [8, 4.2]]
    color: blue
  - line: [[2.35, 0], [2.342, 0.189], [2.32, 0.377], [2.282, 0.563], [2.229, 0.744], [2.162, 0.921], [2.081, 1.092]]
    color: blue
    arrow: true
  - point: [8, 4.2]
    size: 2.2
  - text: $\rho$
    at: [3.5, 2.45]
    color: blue
  - text: $\vartheta$
    at: [1.65, 0.33]
    color: blue
  - text: $y$
    at: [-0.75, 4.2]
    color: red
  - text: $x$
    at: [8, -0.6]
    color: red
  - text: "$P = (\\textcolor{red}{x, y})$ in coordinate cartesiane"
    at: [8.3, 4.2]
    anchor: e
  - text: "$= (\\textcolor{blue}{\\rho, \\vartheta})$ in coordinate polari"
    at: [8.9, 3.45]
    anchor: e
```

E possiamo passare da coordinate cartesiane a polari e viceversa tramite:
$$
\left \{
\begin{aligned}
x &= \rho \cos(\theta) \\
y &= \rho \sin(\theta) \\
\end{aligned}
\right. 
\qquad
\left\{
\begin{aligned}
&\rho = \sqrt{x^2 + y^2} \\
&\tan(\theta) = \frac{y}{x} \\
\end{aligned}
\right.
$$
## 🟢 Esistenza del limite di una funzione a due parametri

La relazione $tan \theta = \frac{y}{x}$ non può essere usata per calcolare $\theta$ dato che la funzione $tan$ non è invertibile in $[0, 2\pi)$. Da notare che $(x, y) \to (0,0) \Leftrightarrow \rho \to 0^+$.
Il che vuol dire che passando da coordinate cartesiani a polari, il limite di due variabili si trasforma in un limite di una variabile. A questo punto diciamo:

Se esiste $l \in \mathbb R$ e una funzione $g(\rho)$ **INDIPENDENTE DA $\theta$** (sennò il limite non esiste), tale che:

$$
\lvert f(\overbrace{\rho \cos(\vartheta)}^{=x}, \overbrace{\rho \sin(\vartheta)}^{=y}) - l \rvert \le g(\rho)
$$

Con $g(\rho) \to 0$ per $\rho \to 0^+$, allora il limite:
$$
\lim_{(x,y) \to (0,0)} f(x,y) = l
$$

Facciamo un esempio, consideriamo il limite:
$$
\lim_{(x,y) \to (0,0)} \frac{2x^2y}{x^2 + y^2} := l
$$
Analogamente al limite precedente, $\lim_{x \to 0} f(x, mx) = 0$, passiamo alle coordinate polari:

$$
f(x,y) = f(\rho\cos(\vartheta), \rho\sin(\vartheta)) = \frac{2\rho^2\cos^2(\vartheta) \cdot \rho\sin(\vartheta)}{\rho^2} = 2\rho\cos^2(\vartheta)\sin(\vartheta).
$$

Visto che $\lvert\sin(\vartheta)\rvert, \lvert\cos(\vartheta)\rvert \le 1$, segue

$$
\begin{aligned}
\lvert f(\rho\cos(\vartheta), \rho\sin(\vartheta)) - l \rvert &= \lvert 2\rho\cos^2(\vartheta)\sin(\vartheta) - 0 \rvert = 2\rho \cdot \lvert\cos^2(\vartheta)\sin(\vartheta)\rvert \\
&\le 2\rho =: g(\rho) \to 0 \qquad \text{per } \rho \to 0^+.
\end{aligned}
$$

E quindi segue che il limite è 0

Facciamo un altro esempio:

**Esempio.** Studiare la convergenza di

$$
\lim_{(x,y)\to(0,0)} \frac{\sin(x^2y) + x^2 + y^2}{x^2 + y^2} =: l.
$$

È facile verificare che $\displaystyle\lim_{x\to 0} f(x, mx) = 1$ per ogni $m \in \mathbb{R}$, quindi se il limite $l$ esiste deve essere $l = 1$.

Si ha $f(\rho\cos(\vartheta), \rho\sin(\vartheta)) = \frac{\sin(\rho^3\cos^2(\vartheta)\sin(\vartheta)) + \rho^2}{\rho^2}$ e quindi

$$
\lvert f(\rho\cos(\vartheta), \rho\sin(\vartheta)) - l \rvert = \left\lvert \frac{\sin(\rho^3\cos^2(\vartheta)\sin(\vartheta))}{\rho^2} \right\rvert
$$

Se procediamo utilizzando come prima la relazione $\lvert\sin(t)\rvert \le 1$ per $t \in \mathbb{R}$, si ottiene

$$
\lvert f(\rho\cos(\vartheta), \rho\sin(\vartheta)) - l \rvert = \left\lvert \frac{\overbrace{\sin(\rho^3\cos^2(\vartheta)\sin(\vartheta))}^{\le 1}}{\rho^2} \right\rvert \le \frac{1}{\rho^2} =: g(\rho) \not\to 0 \qquad \text{per } \rho \to 0^+.
$$

Quindi non possiamo concludere l'esistenza del limite. Tuttavia possiamo ricordare che $\lvert\sin(t)\rvert \le \lvert t \rvert$ per $t \in \mathbb{R}$, quindi per $t = \rho^3\cos(\vartheta)\sin(\vartheta)$,

$$
\begin{aligned}
\lvert f(\rho\cos(\vartheta), \rho\sin(\vartheta)) - l \rvert &\le \frac{\lvert\rho^3\cos^2(\vartheta)\sin(\vartheta)\rvert}{\rho^2} \le \frac{\rho^3 \cdot \overbrace{\lvert\cos^2(\vartheta)\sin(\vartheta)\rvert}^{\le 1}}{\rho^2} \\
&\le \rho =: g(\rho) \to 0 \qquad \text{per } \rho \to 0^+
\end{aligned}
$$

che dimostra che $\displaystyle\lim_{(x,y)\to(0,0)} \frac{\sin(x^2y) + x^2 + y^2}{x^2 + y^2} = 1$.

## 🟢 Calcolo del limite di una funzione a due parametri

Calcola (se esiste) il limite 
$$
\lim_{(x,y) \to (0,0)} \frac{sin^2(xy)}{x^2 + y^2}
$$
Per prima cosa, sappiamo che il limite è unico, allora proviamo a risolvere il limite per $y = mx$, questo ci dà anche condizione di esistenza del limite. Infatti, se il limite dipende da $m$, allora il limite originario non esiste.

Poniamo $y = mx$
$$
\begin{aligned}
\frac{sin^2(xy)}{x^2 + y^2}& \quad \text {poniamo}  \quad  y=mx \\
& = \frac{sin^2(x \cdot mx)}{x^2 + m^2x^2} \\\\
& = \frac{sin(mx^2)}{(1 + m^2)x^2} \\ \\
& \text{dato che stiamo approcciando} \quad x \to 0 \quad \text{sappiamo che} \quad sin(x) \sim x \\ \\

&\sim \frac{(mx^2)^2}{1+m^2}x^2 \\ \\
&= \frac{m^2}{1+m^2}x^2
\end{aligned}
$$
e per $x \to 0$, il limite tende a $0$, che non dipende da $m$, allora se il limite esiste, deve necessariamente essere $0$.

Ora che abbiamo trovato il "potenziale" limite, andiamo a verificarlo.

Passiamo prima alle coordinate polari:
$$
\begin{aligned}
f(x,y) &= f(\rho cos(\theta), \rho sin(\theta)) \\ \\
&= \frac{sin^2(\rho cos(\theta)\cdot\rho sin(\theta))}{(\rho cos(\theta))^2 + (\rho sin (\theta))^2} \\ \\
&= \frac{sin^2(\rho^2cos(\theta)sin(\theta))}{\rho^2(cos^2(\theta)sin^2(\theta))} \\ \\
&= \frac{sin^2(\rho^2cos(\theta)sin(\theta))}{\rho^2} \\ 
\end{aligned} 
$$
Ora applichiamo $|f(\rho cos(\theta), \rho sin(\theta)) - l| \le g(\rho)$.
Sappiamo che $l = 0$ e che $|sin x| \le |x|$, allora:
$$
\begin{aligned}
\left|\frac{sin^2(\rho^2cos(\theta)sin(\theta))}{\rho^2} \right| &\le \frac{(\rho^2cos(\theta)sin(\theta))^2}{\rho^2} \\
&= \frac{\rho^{\cancel{4}^2}(cos(\theta)sin(\theta))^2}{\cancel{\rho^2}} \\
& = \rho^2(cos(\theta)sin(\theta))^2 \\ \\
\end{aligned}
$$
Sappiamo che $|\cos(x)\sin(x)| = |cos(x)| \ |sin(x)| \le 1 \cdot 1 = 1$ 
Allora possiamo dire che
$$
\rho^2(cos(\theta)sin(\theta)) \le \rho^2
$$
E dato che per $\rho \to 0$ abbiamo che $\rho^2 \to 0$, allora il limite converge a $0$, quello che avevamo supposto prima. Allora il limite esiste ed è $0$   
## 🟠 Controllo sulla continuità

- La funzione $f$ è continua in $(x_0, y_0) \Leftrightarrow$ $\forall \epsilon > 0$ esiste  $\delta > 0$ tale che:
  - $\| f(x,y) - f(x_0,y_0) \| < \epsilon$ per ogni $(x,y) \in \mathbb R^2$
  - $\| (x,y) - (x_0,y_0) \| < \delta$
- La funzione $f$ è definita sul punto $(x_0, y_0)$
- La funzione $f$ è continua in $(x_0, y_0) \Leftrightarrow$ $\lim_{(x,y) \to (x_0,y_0)} f(x,y) = f(x_0,y_0)$
- Somme, differenze, prodotti e quozienti di funzioni continue sono continue. 

## 🟠 Controllo della Derivabilità

Siano $f: X \subset \mathbb R^2 \to \mathbb R$ e $(x_0,y_0) \in X$, allora:
- $f$ è derivabile in $(x_0,y_0)$ rispetto a $x$ se esiste il limite (derivabilità parziale per x):
$$
\lim_{h \to 0} \frac{f(x_0 + h, y_0) - f(x_0,y_0)}{h}
$$
- $f$ è derivabile in $(x_0,y_0)$ rispetto a $y$ se esiste il limite (derivabilità parziale per y):
$$
\lim_{k \to 0} \frac{f(x_0, y_0 + k) - f(x_0,y_0)}{k}
$$
Queste derivate le chiamiamo derivate parziali rispetto a $x$ o $y$ in $(x_0,y_0)$ e le chiamiamo $f_x(x_0,y_0)$ e $f_y(x_0,y_0)$ rispettivamente.

Per calcolare la derivata parziale rispetto a $x$ o $y$ basta derivare rispetto a $x$ o $y$ come se fosse una funzione di una variabile, considerando l'altra variabile come una costante. Per esempio:

- $f(x,y) = 2x^3y - y^2 + 3xy$ allora $f_x(x,y) = 6x^2y + 3y$ e $f_y(x,y) = 2x^3 - 2y + 3x$
- $f(x,y) = e^{xy} + y^2$ allora $f_x(x,y) = y e^{xy}$ e $f_y(x,y) = x e^{xy} + 2y$

Se però queste funzioni non sono derivabili, dobbiamo passare per la definizione, per esempio, per $f(x,y) = | x | y$ sul punto $(0,y)$
$$
f_x(0,y) = \lim_{h \to 0}\frac{f(0 + h, y) - f(0,y)}{h} = \lim_{h \to 0} \frac{|h| \cdot y}{h} = \left\{ 
\begin{aligned}
&\not\exists \quad \text{se} \quad y \ne 0 \\  
&0 \quad \text{se} \quad y = 0
\end{aligned}
\right.
$$
A differenza delle derivate a una variabile, la derivabilità non implica la continuità

Per esempio, troviamo la derivabilità parziale in $(0,0)$ di $f(x,y) = |x-1| \cdot (|y| + 1)$ 

Prima facciamo $f_x(0,0)$
$$
f_x(0,0) = \lim_{h \to 0} \frac{f(h, 0) - f(0,0)}{h} = \lim_{h \to 0}\frac{|h - 1|\cdot 1 - 1}{h} = -1
$$
Poi $f_y(0,0)$

$$
f_y(0,0) = \lim_{k \to 0} \frac{f(0, k) - f(0,0)}{k} = \lim_{k \to 0}\frac{|-1| \cdot (|k|+1) - 1}{k} = \lim_{k \to 0}\frac{|h|}{h} = \text{non esiste}
$$
Allora $f$ non è derivabile parzialmente (in questo caso perchè almeno una delle due derivate non esiste). 

## 🟠 Controllo sulla differenziabilità

**Definizione 8.3.** Sia $f : X \subset \mathbb{R}^2 \to \mathbb{R}$ e $(x_0, y_0) \in X$. Se esiste un vettore $A = (a, b) \in \mathbb{R}^2$ tale che

$$
\begin{aligned}
f(x,y) &= f(x_0,y_0) + A \cdot (x - x_0, y - y_0) + o\big(\lVert(x - x_0, y - y_0)\rVert\big) \\
&= f(x_0,y_0) + a \cdot (x - x_0) + b \cdot (y - y_0) + o\Big(\sqrt{(x - x_0)^2 + (y - y_0)^2}\Big) \\
&\qquad\qquad\qquad\qquad \text{per } (x,y) \to (x_0,y_0)
\end{aligned}
$$

allora $f$ si dice *differenziabile* in $(x_0, y_0)$ (il simbolo "$\cdot$" denota in questo caso il prodotto scalare tra vettori in $\mathbb{R}^2$).

**Proposizione 8.4.** Sia $f : X \subseteq \mathbb{R}^2 \to \mathbb{R}$ differenziabile nel punto $(x_0, y_0) \in X$. Allora

- $f$ è continua in $(x_0, y_0)$;
- $f$ è derivabile in $(x_0, y_0)$ e $A = Df(x_0,y_0) = (f_x(x_0,y_0), f_y(x_0,y_0))$. Quindi risulta

$$
\begin{aligned}
f(x,y) &= f(x_0,y_0) + Df(x_0,y_0) \cdot (x - x_0, y - y_0) + o\big(\lVert(x - x_0, y - y_0)\rVert\big) \\
&= f(x_0,y_0) + f_x(x_0,y_0) \cdot (x - x_0) + f_y(x_0,y_0) \cdot (y - y_0) \\
&\quad + o\Big(\sqrt{(x - x_0)^2 + (y - y_0)^2}\Big) \qquad \text{per } (x,y) \to (x_0,y_0)
\end{aligned}
$$

**Osservazioni.**

- Ricordando la definizione di $o(\cdot)$ la condizione definendo la differenziabilità in $(x_0, y_0)$ si può riscrivere come

$$
\boxed{\lim_{(x,y)\to(x_0,y_0)} \frac{f(x,y) - \big(f(x_0,y_0) + f_x(x_0,y_0) \cdot (x - x_0) + f_y(x_0,y_0) \cdot (y - y_0)\big)}{\sqrt{(x - x_0)^2 + (y - y_0)^2}} = 0}
$$

Alternativamente, se $f: X \subset \mathbb R^2$ è derivabile con continuità (cioè le derivate $f_x$ e $f_y$ di $f$ esistono e sono continue), allora $f$ è differenziabie 

Esempio: $f(x,y) := sin(x^2 \cdot e^y)$, calcoliamo le derivate parziali:

- $f_x(x,y) = cos(x^2 \cdot e^y) \cdot 2x \cdot e^y$ 
- $f_y(x,y) = cos(x^2, e^y) \cdot x^2 \cdot e^y$ 

Sono entrambe continue, allora $f(x,y)$ è differenziabile 

$$
\begin{array}{ccccc}
\boxed{f \in \mathrm{C}^1} & \begin{matrix}\Rightarrow \\ \not\Leftarrow\end{matrix} & \boxed{f \text{ differenziabile}} & \begin{matrix}\Rightarrow \\ \not\Leftarrow\end{matrix} & \boxed{f \text{ derivabile (parzialmente)}} \\[1em]
 & & \Downarrow\,\not\Uparrow & \begin{matrix}\bcancel{\nearrow} \\ \bcancel{\swarrow}\end{matrix} & \\[1em]
 & & \boxed{f \text{ continua}} & &
\end{array}
$$

## 🟢 Equazione del piano tangente

Prendendo il termine lineare nella definizione di differenziabilità ci dà l'equazione del piano tangente $p$ nel punto $(x_0, y_0)$: 
$$
z = p(x,y) = f(x_0,y_0) + f_x(x_0, y_0) \cdot (x - x_0) + f_y(x_0, y_0) \cdot (y - y_0) 
$$
![[Pasted image 20250705165927.png]]
### Esempio

Sia $f(x,y) = 2x^3y - y^2 + 3xy$.  
Punto base: $(x_0, y_0) = (1,1)$.

**Valutazione della funzione in $(1,1)$:**

$$
f(1,1) = 2(1)^3(1) - (1)^2 + 3(1)(1) = 2 - 1 + 3 = 4
$$

Derivata parziale rispetto a $x$:
$$
f_x(x,y) = \frac{\partial}{\partial x}(2x^3y - y^2 + 3xy) = 6x^2y + 3y
$$
$$
f_x(1,1) = 6(1)^2(1) + 3(1) = 6 + 3 = 9
$$

Derivata parziale rispetto a $y$:

$$
f_y(x,y) = \frac{\partial}{\partial y}(2x^3y - y^2 + 3xy) = 2x^3 - 2y + 3x
$$
$$
f_y(1,1) = 2(1)^3 - 2(1) + 3(1) = 2 - 2 + 3 = 3
$$

**Costruzione del piano**

$$
p(x,y) = f(1,1) + f_x(1,1)(x - 1) + f_y(1,1)(y - 1)
$$
$$
p(x,y) = 4 + 9(x - 1) + 3(y - 1)
$$

### Esempio 2

In quale punto $(x_0, y_0) \in \mathbb R^2$ il piano $z = 2 + x - y$  è tangente al grafico di $f(x,y) = 1 + xy$?

Per prima cosa calcoliamo le derivate parziali:
- $f_x = y$
- $f_y = x$ 
A questo punto scriviamo la formula del piano tangente:
$$
\begin{aligned}
p(x,y) &= f(x_0, y_0) + f_x(x_0, y_0)(x - x_0) + f_y(x_0, y_0)(y - y_0) \\
&= 1 + x_0y_0 + y_0(x-x_0) + x_0(y - y_0) \\
&= 1 + \cancel{x_0y_0} + y_0x \cancel{- y_0x_0} + x_0y - x_0y_0\\
&= 1 - x_0y_0 + y_0 \cdot  x + x_0\cdot y
\end{aligned}
$$
Ora confrontiamo questo risultato con $z = 2 + 1\cdot x + (-1) \cdot y$, dobbiamo confrontare i coefficienti di $p(x,y)$ per i coefficienti di $z$, devono essere uguali, allora scriviamo:
- $1 - x_0y_0 = 2$ 
- $y_0 = 1$
- $x_0 = -1$
Dato che le ultime due equazioni non hanno bisongo di altri calcoli per trovare i valori di $x_0$ e $y_0$, e la prima equazione è valida per questi due valori, abbiamo trovato il punto $(-1, 1)$ tale che $z$  è tangente a $f$
## 🟢 Derivate direzionali

Sia $f: X \subset \mathbb R^2 \to \mathbb R$ e $P = (x_0,y_0) \in X$ punto, e $v = (v_0, v_1)$ un versore, cioè che la sua norma è 1 $\|v\| = \sqrt{v_0^2 + v_1^2} = 1$. Se converge:

$$
\lim_{h \to 0}\frac{f(P_0 + h \cdot v) - f(P_0)}{h} = 
\lim_{h \to 0}\frac{f(x_0 + h \cdot v_0, y_0 + h \cdot v_1) - f(x_0, y_0)}{h} = \frac{\partial f}{\partial v}(x_0,y_0)
$$

allora si dice che $f$ è **derivabile verso la direzione** $v$ in $P$, con **derivata direzionale** $\frac{\partial f}{\partial v}(x_0,y_0)$.

Usando le coordinate polari, tutti i versori $v \in \mathbb R^2$ si possono rappresentare come $v = (\cos(\theta), \sin(\theta))$ per qualche $\theta \in [0, 2\pi)$.

La derivata direzionale in $(x_0, y_0)$ rispetto $v \in \mathbb{R}^2$ corrisponde a fare la derivata ordinaria (cioè rispetto a una variabile) della funzione $F(t) = f(x_0 + tv_0, y_0 + tv_1)$, $t \in \mathbb{R}$, che è la restrizione di $f$ alla retta $v_0 \cdot (y - y_0) = v_1(x - x_0)$. Quindi essa fornisce informazioni sulla crescenza/decrescenza di $f$ lungo tale retta nell'intorno del punto $(x_0, y_0)$, cioè nella direzione di $v$ partendo da $(x_0, y_0)$.

![[Pasted image 20250627133409 figura.png]]

Per calcolare la derivata direzionale $D_vf(x_0, y_0)$ per $v = (v_0, v_1)$ usiamo:
$$
D_vf(x_0, y_0) = f_x(x_0, y_0)\cdot v_0 + f_y(x_0, y_0) \cdot v_1
$$
Dove $f_x$ e $f_y$ sono le derivate parziale rispetto $x$ e $y$. 

### Esempio
Trova la derivata direzionale $D_vf(2,1)$ per $f(x,y) = \frac{9y}{x + y}$ e il versore $v = (\frac{4}{5}, \frac{3}{5})$ 

Calcoliamo per prima cosa le derivate parziali rispetto a $x$ e $y$

$$
\begin{aligned}
f_x(x,y) &= \frac{d}{dx}\left( \frac{9y}{x + y}\right) \\
&= \frac{d}{dx}\left( 9y \cdot (x+y)^{-1}\right) \\
&= 0 \cdot(x+y)^{-1} + (-9y(x+y)^2) \\
&= \frac{-9y}{(x+y)^2}

\end{aligned}
$$

$$
\begin{aligned}
f_y(x,y) &= \frac{d}{dy}\left( \frac{9y}{x + y}\right) \\
&= \frac{d}{dy}\left( 9y \cdot (x+y)^{-1}\right) \\
&= 9(x+y)^{-1} + 9y(-(x + y)^{-2}) \\
&= \frac{9}{x+y} - \frac{9y}{(x+y)^2} \\
&= \frac{9x}{(x+y)^2}
\end{aligned}
$$

A questo punto valutiamo:
$$
\begin{aligned}
D_vf(x_0, y_0) &= f_x(x_0, y_0)\cdot v_0 + f_y(x_0, y_0) \cdot v_1 \\
D_vf(2,1) &= f_x(2,1) \cdot \frac{4}{5} + f_y(2,1)\cdot\frac{3}{5} \\
&= \frac{-9}{9}\cdot\frac{4}{5} + \frac{18}{9}\cdot\frac{3}{5} \\
&= \frac{2}{5}
\end{aligned}
$$

## 🟠 Teorema del gradiente

è un modo per calcolare facilmente la derivata direzionale.

Sia $f: X \subset R^2 \to R$, $(x_0, y_0) \in X$ e $v = (v_0, v_1) \in \mathbb R^2$ un versore. Se $f$ è differenziabile in $(x_0, y_0)$ allora:

$$
\begin{aligned}
\frac{\partial f}{\partial v}(x_0,y_0) &= 
\left( \frac{\partial f}{\partial x}(x_0,y_0), \frac{\partial f}{\partial y}(x_0,y_0) \right) \cdot (v_0, v_1) \\
&= \frac{\partial f}{\partial x}(x_0,y_0) \cdot v_0 + \frac{\partial f}{\partial y}(x_0,y_0) \cdot v_1
\end{aligned}
$$
Dove $\cdot$ è il prodotto scalare.

Da questo teorema deriva che se $f$ è differenziabile in $(x_0, y_0)$ allora in $(x_0, y_0)$ esistono le derivate direzionali secondo ogni direzione $v$.

Esempio, sia $f(x,y) = 2x^3 - y^2 +3xy$ e $v = (\frac{1}{\sqrt 2}, \frac{1}{\sqrt 2})$ e $(x_0, y_0) = (1,1)$, allora:
$$
\begin{aligned}
\frac{\partial f}{\partial v}(1,1) &=
\left( \frac{\partial f}{\partial x}(1,1), \frac{\partial f}{\partial y}(1,1) \right) \cdot (v_0, v_1) \\
&= (\frac{1}{\sqrt 2} \frac{1}{\sqrt 2}) \cdot (9, 3) \\
&= \frac{9}{\sqrt 2} + \frac{3}{\sqrt 2} \\
&= \frac{12}{\sqrt 2} \\
&= 6\sqrt 2
\end{aligned}
$$

Il gradiente può essere scritto come $Df(x, y)$, e:
- Punta nella direzione di massima crescita della funzione
- La sua norma è il tasso di crescita della funzione in quella direzione. 
- Negando il gradiente, otteniamo la direzione di massima decrescita della funzione.

- Consideriamo ora la curva di livello $c := f(x_0, y_0)$ di $f$ passando per il punto $(x_0, y_0)$, cioè

$$
\Gamma_c = \big\{(x,y) \in X : f(x,y) = f(x_0,y_0)\big\}.
$$

Supponiamo che in $(x_0, y_0)$ esiste il versore tangente $\tau$ a $\Gamma_c$.

```plot
x: [-0.1, 3.1]
y: [-0.08, 1.45]
width: 400
aspect: equal
axes: false
let: { a: 1.15 }
caption: Versore tangente $\tau$.
alt: Una curva di livello Γ_c con il punto (x_0, y_0) e il versore tangente τ in quel punto, disegnato in blu.
items:
  - fn: g
    through: [[0, 0], [0.45, 0.56], [0.85, 0.9], [1.15, 1.07], [1.6, 1.17], [2.2, 1.06], [2.83, 0.77]]
  - fn: t(x) = g(a) + g'(a)(x - a)
    domain: [0.4, 1.15]
    color: blue
    dash: dotted
    width: 1.2
  - line: [[a, g(a)], [a + 0.75, g(a) + 0.75 g'(a)]]
    color: blue
    width: 1.2
    arrow: true
  - point: [a, g(a)]
    size: 2.2
  - text: $\tau$
    at: [1.95, 1.37]
    color: blue
    anchor: e
  - text: $(x_0, y_0)$
    at: [1.35, 0.9]
  - text: $\Gamma_c$
    at: [2.95, 0.58]
```

Poiché $f$ è costante su $\Gamma_c$ e, partendo in $(x_0, y_0)$, muoversi lungo la direzione $\tau$ corrisponde, almeno in termini infinitesimali, a muovendosi lungo la curva $\Gamma_c$, si ha euristicamente

$$
\frac{\partial f}{\partial \tau}(x_0, y_0) = 0.
$$

Quindi dal Teorema del Gradiente segue

$$
\frac{\partial f}{\partial \tau}(x_0, y_0) = \tau \cdot Df(x_0, y_0) = 0.
$$

Ricordando che il prodotto scalare tra due vettori è nullo se e solo se i due vettori sono perpendicolari, concludiamo che il gradiente

$$
\boxed{\textcolor{blue}{\textit{Df}(x_0,y_0)\ \text{\textit{è ortogonale alla curva di livello di}}\ f\ \text{\textit{passante per}}\ (x_0,y_0)}}
$$

