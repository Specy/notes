---
title: Derivate
description: "Regole di derivazione (potenza, catena, prodotto, quoziente), teoremi di Fermat, Rolle e Lagrange, test di monotonia, regola di Hôpital, simboli di Landau e formula di Taylor e Maclaurin."
type: lecture
---

# Derivate

La derivata è la pendenza della retta tangente di una funzione ad un certo punto 

```plot
x: [-0.2, 6.2]
y: [-0.2, 4.4]
width: 560
height: 320
alt: "Curva y = f(x) convessa con il punto (x, f(x)), il punto (x+h, f(x+h)), la corda (Chord) che li unisce e la retta tangente in (x, f(x)); sono indicati gli incrementi h e f(x+h) - f(x)"
let:
  x0: 1.05
  x1: 3.4
  k: 1.6
xlabel: $x$
ylabel: $y$
xticks: { x0: "$x$", x1: "$x+h$" }
items:
  - fn: f(x) = 0.83 + 0.1065x^2 + 0.00518(exp(k x) - 1)
    domain: [0, 3.52]
    color: blue
  - fn: t(x) = f(x0) + f'(x0)(x - x0)
    domain: [0.1, 4.5]
    color: red
  - line: [[x0, f(x0)], [x1, f(x1)]]
    color: red
  - line: [[x0, f(x0)], [x1 - 0.1, f(x0)]]
    arrow: true
    color: muted
  - line: [[x1, f(x0)], [x1, f(x1) - 0.1]]
    arrow: true
    color: muted
  - guide: [x0, f(x0)]
  - guide: [x1, f(x1)]
  - point: [x0, f(x0)]
  - point: [x1, f(x1)]
  - text: $y = f(x)$
    at: [3.65, 3.95]
    anchor: e
    color: purple
  - text: $(x+h,\, f(x+h))$
    at: [3.25, 3.4]
    anchor: w
    color: purple
  - text: $f(x+h) - f(x)$
    at: [3.55, 2.4]
    anchor: e
    color: purple
  - text: Chord
    at: [1.0, 2.05]
    color: purple
  - text: Tangent at $(x,\, f(x))$
    at: [3.7, 1.35]
    anchor: e
    color: purple
  - text: $(x,\, f(x))$
    at: [0.65, 1.4]
    color: purple
  - text: $h$
    at: [2.2, 0.55]
    color: purple
  - text: $O$
    at: [-0.1, -0.16]
    anchor: w
```

$$
\boxed{\frac{dy}{dx} = \lim_{h \to 0} \frac{f(x+h) - f(x)}{h}}
$$

Quello che vogliamo fare è trovare la pendenza della retta di due punti a, b dove a è il punto in cui vogliamo studiare la pendenza, e b è un punto molto vicino (la cui distanza con a tende a 0).

L'equazione per la pendenza è:

$$
\dfrac{\Delta y}{\Delta x} = \dfrac{f(b) - f(a)}{b - a} 
$$

I nostri due punti sono $(x_0, f(x_0))$ e $(x_0+h, f(x_0+h))$ dove $h$ è un numero tendente a 0

Questo è esattamente uguale a trovare il limite tendente a 0 di 
$$
\dfrac{\Delta y}{\Delta x} = \dfrac{f(x_0 + h) - f(x_0)}{(x_0 + h) - x_0} = \dfrac{f(x_0 + h) - f(x_0)}{h}
$$

Quindi chiamiamo derivata la funzione:
$$
f'(x) = \lim_{h \to 0}{\dfrac{f(x + h) - f(x)}{h}} 
$$

Possiamo trovare il valore della derivata ad un certo punto, oppure semplificare la funzione della derivata per poterla usare per qualsiasi punto della funzione originaria.

Nel primo caso sostituiamo $x$ con il valore che vogliamo trovare, e poi risolviamo il limite per trovare il valore

Nel secondo caso, facciamo un esempio:

Troviamo la derivata di $f(x) = x^2$, la funzione per la derivata sarà:

$$
\begin{aligned}
f'(x) &= 
\lim_{h \to 0}{\dfrac{f(x + h) - f(x)}{h}} \\ &=
\lim_{h \to 0}{\dfrac{(x + h)^2 - x^2}{h}} \\ &=
\lim_{h \to 0}{\dfrac{\cancel{x^2} + 2xh + h^2 - \cancel{x^2}}{h}} \\ &=
\lim_{h \to 0}{\dfrac{2x\cancel{h} + h^{\cancel{2}}}{\cancel{h}}} \\ &=
\lim_{h \to 0}{2x+ h} \\ &=
2x
\end{aligned}
$$

## 🟢Regola della Potenza

$$
\dfrac{d}{dx}x^n = n x^{n-1}
$$
O in maniera più generale tramite $f(x)$:
$$
\frac{d}{dx}f(x)^n = n f(x)^{n -1} \cdot f'(x)
$$
Esempio:
$$
\dfrac{d}{dx}x^4 = 4 x^{3}
$$
## 🟢Moltiplicazione per costanti 

$A$ costante
$$
\dfrac{d}{dx} A f(x) = A \dfrac{d}{dx}  f(x)
$$
Esempio:
$$
\dfrac{d}{dx} 5x^2 = 5\dfrac{d}{dx} x^2 = 5 \cdot 2x = 10x
$$

## 🟢Regola dell'addizione
$$
\dfrac{d}{dx}\bigg( f(x) + g(x) \bigg) = \dfrac{d}{dx}f(x) + \dfrac{d}{dx}g(x)
$$
Esempio:
$$
\dfrac{d}{dx}3x^2 + 5x + 3 = \dfrac{d}{dx} 3x^2 + \dfrac{d}{dx} 5x + \dfrac{d}{dx} 3
= 6x + 5 + 0
$$

## 🟢Regola della catena

Se la nostra funzione è nella forma:
$$
f(x) = h(g(x))
$$
Allora la sua derivata sarà:
$$
f'(x) = g'(x) \cdot h'(g(x))
$$
Per esempio:
$$
\begin{aligned}
f(x) &= (x^2 + 5x + 3)^5 \\
\\
h(a) &= a^5 \\
h'(a) &= 5a^4 \\
\\
g(b) &= b^2 + 5b + 3 \\
g'(b) &= 2b + 5 \\
\\
f'(x) &= g'(x) \cdot h'(g(x)) \\
&= (2x + 5) \cdot 5(x^2 + 5x + 3)^4
\end{aligned}
$$
Un altro esempio:
$$
\begin{align}
f(x) &= 5(-x^8+x^{-8})^5 \\ \\
f'(x) &= (-8x^7 -8x^{-9}) \cdot 25(-x^8 + x^{-8})^4 
\end{align}
$$
## 🟢Regola della moltiplicazione

Se la nostra funzione è della forma:
$$
f(x) = h(x) \cdot g(x)
$$
Allora la sua derivata sarà
$$
f'(x) = h'(x) \cdot g(x) + h(x) \cdot g'(x)
$$
Per esempio:
$$
\begin{align}
f(x) &= (5x^5 - x^7)(20x^2 + 3x^{-7}) \\ \\
f'(x) &= (25x^4 - 7x^6)(20x^2 + 3x^{-7}) + (5x^5 - x^7) (40x - 21x^{-8})
\end{align} 
$$

## 🟢Regola della divisione

$$
\frac{d}{dx} \left( \frac{f(x)}{g(x)} \right) = \frac{g(x)f'(x) - f(x)g'(x)}{(g(x))^2}
$$
Oppure possiamo convertire la divisione in una moltiplicazione:

$$
\frac{d}{dx} \left( \frac{f(x)}{g(x)} \right) = f(x) \cdot g(x)^{-1}
$$
Esempio:
$$
\begin{align}
\frac{d}{dx} \left( \frac{f(x)}{g(x)} \right) &= 
\frac{d}{dx} \left( \dfrac{(x^3-5x^5)^3}{(2x+5)^5} \right) \\ &= 
\frac{d}{dx} \left( (x^3-5x^5)^3 \cdot (2x+5)^{-5} \right) \\ &= 
((3x^2-25x^4) \cdot 3(x^3-5x^5)^2 \cdot (2x+5)^{-5}) \cdot ((x^3-5x^5)^3 \cdot 2 \cdot -5(2x+5)^{-5})
\end{align}
$$

## 🟢Teorema di fermat

Sia $x_0 \in (a,b)$ un punto di estremo locale di $f: [a,b] \to \mathbb{R}$.

Se $f$ è derivabile in $x_0$, allora $f'(x) = 0$.

L'implicazione al contrario non è valida, è necessaria ma non sufficiente, se la derivata di un punto è 0, allora il punto è un candidato per essere un estremo locale. Se calcoliamo la derivata e la poniamo a 0, troviamo anche l'equazione per i possibili punti di estremo locale. Essi vengono chiamati punti critici o stazionari. 

## 🟢Teorema di rolle

Sia $f \in C[a, b]$ una funzione continua tra $a$ e $b$, derivabile in $(a,b)$. 
Se $f(a) = f(b)$, allora esiste $c \in (a,b)$ tale che $f'(c) = 0$ 

```plot
x: [-0.15, 7.6]
y: [-0.15, 3.4]
width: 560
height: 260
alt: Grafico di una funzione continua con f(a)=f(b), con punti di massimo in c_1 e c_3 e di minimo in c_2, dove la tangente è orizzontale
let:
  a: 0.633
  c1: 1.833
  c2: 3.217
  c3: 5.217
  b: 6.717
  ya: 1.25
  f1: 1.933
  f2: 0.95
  f3: 2.733
  xm: 0.133
  ym: 1.081
  xe: 7.217
  ye: 0.996
xlabel: $x$
ylabel: $f(x)$
xticks: { a: "$a$", c1: "$c_1$", c2: "$c_2$", c3: "$c_3$", b: "$b$" }
yticks: { ya: "$f(a)=f(b)$" }
items:
  - fn: ym + (f1 - ym)(1 - cos(pi(x - xm)/(c1 - xm)))/2
    domain: [a, c1]
  - fn: f1 + (f2 - f1)(1 - cos(pi(x - c1)/(c2 - c1)))/2
    domain: [c1, c2]
  - fn: f2 + (f3 - f2)(1 - cos(pi(x - c2)/(c3 - c2)))/2
    domain: [c2, c3]
  - fn: f3 + (ye - f3)(1 - cos(pi(x - c3)/(xe - c3)))/2
    domain: [c3, b]
  - line: [[0, ya], [b, ya]]
    dash: dotted
    color: muted
  - line: [[a, 0], [a, ya]]
    dash: dotted
    color: muted
  - line: [[c1, 0], [c1, f1]]
    dash: dotted
    color: muted
  - line: [[c2, 0], [c2, f2]]
    dash: dotted
    color: muted
  - line: [[c3, 0], [c3, f3]]
    dash: dotted
    color: muted
  - line: [[b, 0], [b, ya]]
    dash: dotted
    color: muted
  - line: [[c1 - 0.6, f1], [c1 + 0.6, f1]]
  - line: [[c2 - 0.6, f2], [c2 + 0.6, f2]]
  - line: [[c3 - 0.6, f3], [c3 + 0.6, f3]]
```

In pratica, se $f(a) = f(b)$ vuol dire che la funzione sarà andata verso l'alto/basso e poi tornata al punto iniziale, oppure che è una retta. In entrambi i casi, c'è almeno un punto in cui c'è stato un cambio di direzione della funzione (oppure essendo una retta costante, la derivata è 0)
## 🟢Teorema di lagrange

Sia $f \in C[a, b]$ una funzione continua tra $a$ e $b$, derivabile in $(a,b)$. 
Allora esiste un punto $c \in (a,b)$ tale che:

$$
\underbrace{f'(c)}_{\substack{=\textit{pendenza della retta} \\ \textit{tangente } t \textit{ in } (c,f(c))}}
\quad = \quad
\underbrace{\frac{f(b)-f(a)}{b-a}}_{\substack{=\textit{pendenza della retta} \\ \textit{secante } s \textit{ attraverso} \\ (a,f(a)) \textit{ e } (b,f(b))}}
$$

```plot
x: [-0.3, 7.2]
y: [-0.15, 3.7]
width: 560
height: 300
alt: Grafico di una funzione con la retta secante s per (a, f(a)) e (b, f(b)) e due rette tangenti t_1 e t_2, parallele a s, nei punti di ascissa c_1 e c_2
let:
  a: 0.617
  c1: 1.817
  c2: 4.533
  b: 6.167
  fa: 0.783
  f1: 1.817
  f2: 1.317
  fb: 2.75
  xm: 0.117
  ym: 0.527
  xe: 6.767
  ye: 3.039
  m: 0.3544
xlabel: $x$
ylabel: $f(x)$
xticks: { a: "$a$", c1: "$c_1$", c2: "$c_2$", b: "$b$" }
items:
  - fn: ym + (f1 - ym)(1 - cos(pi(x - xm)/(c1 - xm)))/2
    domain: [a, c1]
  - fn: f1 + (f2 - f1)(1 - cos(pi(x - c1)/(c2 - c1)))/2
    domain: [c1, c2]
  - fn: f2 + (ye - f2)(1 - cos(pi(x - c2)/(xe - c2)))/2
    domain: [c2, b]
  - fn: fa + m(x - a)
    domain: [a, b]
    color: blue
    label: $s$
    labelAt: 6.167
    anchor: e
  - fn: f1 + m(x - c1)
    domain: [a, 6.4]
    color: red
    label: $t_1$
    labelAt: 6.4
    anchor: e
  - fn: f2 + m(x - c2)
    domain: [a, 6.4]
    color: red
    label: $t_2$
    labelAt: 6.4
    anchor: e
  - line: [[a, 0], [a, fa]]
    dash: dotted
    color: muted
  - line: [[c1, 0], [c1, f1]]
    dash: dotted
    color: muted
  - line: [[c2, 0], [c2, f2]]
    dash: dotted
    color: muted
  - line: [[b, 0], [b, fb]]
    dash: dotted
    color: muted
  - line: [[3.1599999999999997, f1 + m(3.3 - c1) - 0.15], [3.32, f1 + m(3.3 - c1) + 0.15]]
  - line: [[3.28, f1 + m(3.3 - c1) - 0.15], [3.44, f1 + m(3.3 - c1) + 0.15]]
  - line: [[3.1599999999999997, fa + m(3.3 - a) - 0.15], [3.32, fa + m(3.3 - a) + 0.15]]
  - line: [[3.28, fa + m(3.3 - a) - 0.15], [3.44, fa + m(3.3 - a) + 0.15]]
  - line: [[3.1599999999999997, f2 + m(3.3 - c2) - 0.15], [3.32, f2 + m(3.3 - c2) + 0.15]]
  - line: [[3.28, f2 + m(3.3 - c2) - 0.15], [3.44, f2 + m(3.3 - c2) + 0.15]]
```

Simile all'intuizione precedente.

Se $f \in C[a,b]$ è derivabile in $(a,b)$ allora per ogni $x_1, x_2 \in [a,b]$ esiste $c$ tra $x_1$ e $x_2$ tale che:

$$
\boxed{f(x_2) = f(x_1) + f'(c) \cdot (x_2 - x_1)}
$$

Esempio: Trova un punto di Lagrange per $f:[0,2] \to \mathbb R, f(x) = x^3 - x$ 
Allora: 
- f è derivabile in $[a,b]$ 
- $f(a) = f(0) = 0$
- $f(b) = f(2) = 6$
- $f'(x) = 3x^2 - 1$

Quindi cerchiamo $x = c \in (0,2)$ tale che:

$$
f'(c) = \frac{f(b) - f(a)}{b - a}
$$
$$
\begin{aligned}
3c^2 - 1 &= \frac{6 - 0}{2 - 0} \\
3c^2 &= 4 \\
c^2 &= \frac{4}{3} \\
C &= + \sqrt{\frac{4}{3}}
\end{aligned}
$$
Nota, mettiamo solo la radice positiva dato che quella negativa è fuori dal dominio $(0,2)$ 

## 🟢Test di monotonia

Sia $f \in C[a, b]$ e derivabile in $(a, b)$. Allora:

- $f$ è **crescente** $\Leftrightarrow f'(x) \geq 0$ per ogni $x \in (a, b)$;
- $f$ è **decrescente** $\Leftrightarrow f'(x) \leq 0$ per ogni $x \in (a, b)$;
- $f'(x) > 0$ per ogni $x \in (a, b)$ $\Rightarrow f$ è **strettamente crescente**;
- $f'(x) < 0$ per ogni $x \in (a, b)$ $\Rightarrow f$ è **strettamente decrescente**.

## 🟢Criterio per estremi locali

Sia $f: (a,b) \in \mathbb{R}$ derivabile, e sia $x_0 \in (a,b)$ un punto critico in $f$ (possiamo trovarli tramite il teorema di fermat, cioè quando la derivata è 0), allora $x_0$ è:

- Un punto di *massimo locale* se $f'(x)$ in $x_0$ cambia di segno da + a -
- Un punto di *minimo locale* se  $f'(x)$ in $x_0$ cambia di segno da - a +

```plot
x: [-5.3, 5.3]
y: [-0.5, 4.5]
width: 440
height: 210
alt: "Massimo locale in x_0: a sinistra la funzione è crescente (derivata positiva, segno +), a destra è decrescente (derivata negativa, segno -)"
axes: false
items:
  - text: max locale
    at: [0, 4.2]
  - fn: 2.16 - 1.13x^2
    domain: [-1, 0]
  - fn: 2.16 - 0.65x^2
    domain: [0, 1.6]
  - line: [[-5.3, 0], [5.3, 0]]
  - text: $x_0$
    at: [0, -0.3]
  - line: [[0, 0], [0, 3.4]]
    dash: dotted
    color: muted
  - line: [[-1.63, 1.44], [-1.0, 2.28]]
    arrow: true
  - line: [[1.08, 2.28], [1.92, 1.44]]
    arrow: true
  - text: $f'(x)>0 \Rightarrow$
    at: [-3.15, 2.4]
  - text: $f$ crescente
    at: [-3.15, 1.75]
  - text: $\pmb{+}$
    at: [-3.3, 0.9]
  - text: $f'(x)<0 \Rightarrow$
    at: [3.6, 2.4]
  - text: $f$ decrescente
    at: [3.6, 1.75]
  - text: $\pmb{-}$
    at: [3.5, 0.9]
```

```plot
x: [-5.3, 5.3]
y: [-0.5, 4.5]
width: 440
height: 210
alt: "Minimo locale in x_0: a sinistra la funzione è decrescente (derivata negativa, segno -), a destra è crescente (derivata positiva, segno +)"
axes: false
items:
  - text: min locale
    at: [0, 4.2]
  - fn: 1.85 + 1.1x^2
    domain: [-1, 0]
  - fn: 1.85 + 0.45x^2
    domain: [0, 1.6]
  - line: [[-5.3, 0], [5.3, 0]]
  - text: $x_0$
    at: [0, -0.3]
  - line: [[0, 0], [0, 3.4]]
    dash: dotted
    color: muted
  - line: [[-1.35, 2.4], [-0.82, 1.44]]
    arrow: true
  - line: [[1.08, 1.63], [2.04, 2.4]]
    arrow: true
  - text: $f'(x)<0 \Rightarrow$
    at: [-3.36, 2.4]
  - text: $f$ decrescente
    at: [-3.36, 1.75]
  - text: $\pmb{-}$
    at: [-3.3, 0.9]
  - text: $f'(x)>0 \Rightarrow$
    at: [3.37, 2.4]
  - text: $f$ crescente
    at: [3.37, 1.75]
  - text: $\pmb{+}$
    at: [3.5, 0.9]
```

##  🟢Teorema di Hôpital

Questa regola ci aiuta a trovare i limiti di certe forme indeterminate, cioè quando accade che durante la sostituzione abbiamo $\dfrac{0}{0}$ oppure $\dfrac{\pm \infty}{\pm \infty}$. Da fare attenzione però che le forme indeterminate $\frac{0}{0}$ sono considerate tali solo se gli 0 sono causati dalla variabile del limite che porta il termine a 0. Per esempio, non è indeterminato $\lim_{y \to 0}\frac{(1 - 1)y}{y} = 0$ dato che $(1-1)y = 0$ indifferentemente dal valore di $y$

Quindi il teorema ci dice che se:
$$
\begin{aligned}
\lim_{x \to c}{f(x)} &= 0 \quad and \\
\lim_{x \to c}{g(x)} &= 0 \quad and \\
\lim_{x \to c}{\dfrac{f'(x)}{g'(x)}} &= L \quad then \\ \\
\lim_{x \to c}{\dfrac{f(x)}{g(x)}} &= L
\end{aligned}
$$
oppure:
$$
\begin{aligned}
\lim_{x \to c}{f(x)} &= \pm \infty \quad and \\
\lim_{x \to c}{g(x)} &= \pm \infty \quad and \\
\lim_{x \to c}{\dfrac{f'(x)}{g'(x)}} &= L \quad then \\ \\
\lim_{x \to c}{\dfrac{f(x)}{g(x)}} &= L
\end{aligned}
$$
Per esempio:
$$
\lim_{x \to 0} \frac{sin x}{x} = \frac{0}{0}
$$
Allora:
$$
\begin{aligned}
f'(x) &= cos(x) \\
g'(x) &= 1 \\ 
\\
\lim_{x \to 0}{\dfrac{f'(x)}{g'(x)}} &= \lim_{x \to 0}\frac{cos(x)}{1}  \\
&= 1\\
&= \lim_{x \to 0}{\dfrac{sin(x)}{x}}
\end{aligned}
$$
E naturalmente possiamo applicare il teorema a catena fino ad arrivare al caso base.

$$
\begin{aligned}
&\lim_{x \to 0} \frac{2\sin x - \sin 2x}{x - \sin x} = \frac{0}{0} \\[1em]
&= \lim_{x \to 0} \frac{2\cos x - 2\cos 2x}{1 - \cos x} = \frac{2-2}{1-1} = \frac{0}{0} \\[1em]
&= \lim_{x \to 0} \frac{-2\sin x + 4\sin 2x}{\sin x} = \frac{0}{0} \\[1em]
&= \lim_{x \to 0} \frac{-2\cos x + 8\cos 2x}{\cos x} = \frac{-2+8}{1} = 6
\end{aligned}
$$

$$
\begin{aligned}
&\lim_{x \to \infty} \frac{4x^2 - 5x}{1 - 3x^2} = \frac{\infty}{-\infty} = -\frac{4}{3} \\[1em]
&= \lim_{x \to \infty} \frac{8x - 5}{-6x} = \frac{\infty}{-\infty} \\[1em]
&= \lim_{x \to \infty} \frac{8}{-6} = \boxed{-\frac{4}{3}}
\end{aligned}
$$

$$
\begin{aligned}
&\lim_{x \to \infty} \frac{4x^2 - 5x}{1 - 3x^2} \\[1em]
&= \lim_{x \to \infty} \frac{\cancel{x^2}\left(4 - \frac{5}{x}\right)}{\cancel{x^2}\left(\frac{1}{x^2} - 3\right)} \\[1em]
&= \lim_{x \to \infty} \frac{4 - \overbrace{\tfrac{5}{x}}^{\to 0}}{\underbrace{\tfrac{1}{x^2}}_{\to 0} - 3} = \boxed{-\frac{4}{3}}
\end{aligned}
$$

Alcune volte non è possibile applicare la regola di Hopital direttamente, ma si può manipolare l'espressione per poterla far applicare:

$$
\begin{aligned}
&\lim_{x \to 1} \left( \frac{x}{x-1} - \frac{1}{\ln x} \right) = \frac{1}{0} - \frac{1}{0} \quad \textcolor{red}{\times} \\[1em]
&= \lim_{x \to 1} \left( \frac{x \ln x - (x-1)}{(x-1)\ln x} \right) = \frac{0}{0} \quad \textcolor{green}{\checkmark} \\[1em]
&= \lim_{x \to 1} \frac{\ln x + \cancel{\frac{1}{x} \cdot x - 1}}{\ln x + \frac{1}{x}(x-1)} \\[1em]
&= \lim_{x \to 1} \frac{\ln x}{\ln x + \frac{x-1}{x}} = \frac{0}{0} \\[1em]
&= \lim_{x \to 1} \frac{\frac{1}{x}}{\frac{1}{x} + \cancel{-x^{-2}(x-1)} + \frac{1}{x}} = \frac{1}{1+1} = \boxed{\frac{1}{2}}
\end{aligned}
$$

## 🟢 Equivalenze asintotiche dei limiti

Se abbiamo che: 
$$
\lim_{x \to x_0} \frac{f(x)}{g(x)} = 1
$$
Allora diciamo che $f(x) \sim g(x)$  per $x \to x_0$ cioè che $f$ è asintoticamente equivalente a $g$ per $x \to x_0$ 

Inoltre abbiamo che se $f(x) \sim g(x)$ per $x \to x_0$, allora
$$
\lim_{x \to x_0}f(x) = \lim_{x \to x_0} g(x)
$$

Per esempio:
$$
\lim_{x \to 0}\frac{sin(x)}{x} = 1
$$
E quindi, $x \sim sin(x)$ per $x \to 0$:
$$
\lim_{x \to 0} x = \lim_{x \to 0} sin(x) = 0
$$

## 🟢Simbolo di landau e $o(\cdot)$ piccolo

Se
$$
\Large\lim_{x \to x_0}{\frac{f(x)}{g(x)} = 0}
$$
Allora diciamo che $f$ è un $o$ piccolo di $g$ per $x$ che tende a $x_0$. 
Allora scriviamo: $f(x) = o(g(x))$ per $x \to x_0$.

$f = o(g(x))$ per $f(x) \to x_0$ significa che:
-  (Infinitesimi) $f(x)$ tende a 0 più velocemente rispetto a quanto $g(x)$ tende a 0  
- (infiniti) $f(x)$ tende a $\pm \infty$ più lentamente che $g(x) \to \pm\infty$

Esempi:
- $ln(x) = o(x)$ per $x \to \infty$ perchè $\frac{ln(x)}{x} \to 0$ per $x \to \infty$ 
- $x = o(x^2)$ per $x \to \pm \infty$, mentre $x^2 = o(x)$ per $x \to 0$  

## 🟢 Formula di taylor e maclaurin

Data $f: (a,b) \to \mathbb{R}$ e $x_0 \in (a,b)$ e $n \in \mathbb{N}$, vogliamo approssimare $f(x)$ con x vicino a $x_0$ con un polinomio $T_n(x)$ di grado $\le n$ 

### Caso n = 1
Per $f$ derivabile in $x_0$, la retta tangente è data dell'equazione:
$$
t(x) = f(x) + f'(x) \cdot(x - x_0)
$$
Questa funzione avrà naturalmente un errore rispetto alla funzione originaria, allora: 
$$
f(x) = t(x) + r(x)
$$
Dove $r(x)$ è l'errore dell'approssimazione: 

```plot
x: [0, 5.8]
y: [-0.3, 3.5]
width: 420
height: 260
alt: "Grafico di una funzione f concava, della sua retta tangente t nel punto x_0 e del resto r(x) = t(x) - f(x), la distanza verticale tra tangente e funzione in x"
let:
  a: 1.55
  b: 2.75
xticks: { a: "$x_0$", b: "$x$" }
yticks: { "f(a)": "$f(x_0)$", "f(b)": "$f(x)$", "t(b)": "$t(x)$" }
items:
  - fn: f(x) = 1 + 1.25(1 - exp(-1.4(x - a)))
    domain: [1.4, 4]
    label: $f$
    labelAt: 3.4
  - fn: t(x) = f(a) + f'(a)(x - a)
    domain: [1.05, 2.95]
    color: blue
    label: $t$
    labelAt: 2.95
    anchor: e
  - guide: [a, f(a)]
  - guide: [b, f(b)]
  - guide: [b, t(b)]
  - line: [[b, f(b)], [b, t(b)]]
    color: red
  - brace: [[4.25, f(b)], [4.25, t(b)]]
    color: red
    label: $=r(x)$
  - point: [a, f(a)]
```

E naturalmente, con $x \to x_0$ il resto $r(x)$ tende a 0, e nel punto $r(x_0) = 0$. Questa funzione è la migliore approssimante per $n = 1$

### Caso n > 1

Se possiamo fare la derivata di una funzione $n$ volte (derivata della derivata etc...), ed è anche continua, cioè che $f \in C^{n}(a,b)$  , allora dichiamo che la funzione è derivabile $n$ volte con continuità.

Allora supponendo che $f$ sia $n$ volte derivabile con continuità, cerchiamo un polinomio $T_n$ che fino all'n-esimo termine ha il valore in $x_0$ in comune con tutte le derivate, cioè che:

$$
\left.
\begin{aligned}
T_n(x_0) &= f(x_0), \\
T_n'(x_0) &= f'(x_0), \\
&\ \,\vdots \\
T_n^{(n)}(x_0) &= f^{(n)}(x_0).
\end{aligned}
\right\}
\iff : \quad f \text{ e } T_n \text{ hanno } \textit{contatto di ordine } n \textit{ in } x_0
$$

Se $f \in C^n(a,b)$ e $x_0 \in (a,b)$, allora esiste un unico polinomio $T_n$ di grado $\le n$ che ha contatto di ordine $n$ in $x_0$ con $f$. Questo polinomio si chiama **Polinomio di Taylor** di ordine $n$ centrato su $x_0$, ed è dato da:

$$
\begin{aligned}
T_n(x) &= f(x_0) + f'(x_0) \cdot (x - x_0) + \frac{f''(x_0)}{2!} \cdot (x - x_0)^2 + \ldots + \frac{f^{(n)}(x_0)}{n!} \cdot (x - x_0)^n \\
&= \sum_{k=0}^{n} \frac{f^{(k)}(x_0)}{k!} \cdot (x - x_0)^k
\end{aligned}
$$

Se $x_0 = 0$ allora $T_n$ viene chiamato **Polinomio di Maclaurin** 

$$
T_n(x) = 1 + x + \frac{x^2}{2} + \frac{x^3}{3!} + \ldots + \frac{x^n}{n!} = \sum_{k=0}^{n} \frac{x^k}{k!}
$$

```plot
x: [-3.2, 4.4]
y: [-3.8, 22.5]
width: 540
height: 295
alt: "Grafico di e^x e dei polinomi di Maclaurin T_0, T_1, T_2, T_3, T_4 tra -3 e 3: all'aumentare del grado le approssimazioni seguono e^x su un intervallo sempre più ampio attorno a 0"
xticks: [-3, -2, -1, 1, 2, 3]
yticks: [5, 10, 15, 20]
items:
  - fn: exp(x)
    domain: [-3, 3]
    color: blue
    width: 2.6
    label: $e^x$
    labelAt: 3
    anchor: ne
  - fn: 1 + x + x^2/2 + x^3/6 + x^4/24
    domain: [-3, 3]
    color: red
    label: $T_4(x)$
    labelAt: 3
    anchor: e
  - fn: 1 + x + x^2/2 + x^3/6
    domain: [-3, 3]
    color: green
    label: $T_3(x)$
    labelAt: 3
    anchor: e
  - fn: 1 + x + x^2/2
    domain: [-3, 3]
    color: purple
    label: $T_2(x)$
    labelAt: 3
    anchor: e
  - fn: x + 1
    domain: [-3, 3]
    color: orange
    label: $T_1(x)$
    labelAt: 3
    anchor: e
  - fn: 1
    domain: [-3, 3]
    color: teal
    label: $T_0(x)$
    labelAt: 3
    anchor: e
```

```plot
x: [-0.6, 10.6]
y: [-4.7, 4.7]
width: 560
height: 300
alt: "Grafico di sin(x) e dei polinomi di Maclaurin T_1, T_3, T_5, ..., T_19: all'aumentare del grado il polinomio approssima sin(x) su un intervallo sempre più ampio attorno a 0"
xticks: [2, 4, 6, 8]
yticks: [-4, -2, 2, 4]
items:
  - fn: sin(x)
    domain: [0, 9.6]
    color: blue
    width: 2.6
    label: $\sin(x)$
    labelAt: 9.6
    anchor: ne
  - fn: x
    domain: [0, 4]
    color: purple
  - fn: x - x^3/6
    domain: [0, 3.56]
    color: orange
  - fn: x - x^3/6 + x^5/120
    domain: [0, 4.4]
    color: blue
  - fn: x - x^3/6 + x^5/120 - x^7/5040
    domain: [0, 4.78]
    color: orange
  - fn: x - x^3/6 + x^5/120 - x^7/5040 + x^9/362880
    domain: [0, 5.73]
    color: teal
  - fn: x - x^3/6 + x^5/120 - x^7/5040 + x^9/362880 - x^11/39916800
    domain: [0, 6.4]
    color: red
  - fn: x - x^3/6 + x^5/120 - x^7/5040 + x^9/362880 - x^11/39916800 + x^13/6227020800
    domain: [0, 7.03]
    color: green
  - fn: x - x^3/6 + x^5/120 - x^7/5040 + x^9/362880 - x^11/39916800 + x^13/6227020800 - x^15/1307674368000
    domain: [0, 7.97]
    color: red
  - fn: x - x^3/6 + x^5/120 - x^7/5040 + x^9/362880 - x^11/39916800 + x^13/6227020800 - x^15/1307674368000 + x^17/355687428096000
    domain: [0, 8.49]
    color: teal
  - fn: x - x^3/6 + x^5/120 - x^7/5040 + x^9/362880 - x^11/39916800 + x^13/6227020800 - x^15/1307674368000 + x^17/355687428096000 - x^19/121645100408832000
    domain: [0, 9.35]
    color: purple
  - text: $T_{1}(x)$
    at: [2.6, 3.7]
  - text: $T_{5}(x)$
    at: [4.7, 4.4]
  - text: $T_{9}(x)$
    at: [5.9, 4.4]
  - text: $T_{13}(x)$
    at: [7.05, 4.4]
  - text: $T_{17}(x)$
    at: [8.5, 4.4]
  - text: $T_{3}(x)$
    at: [3.56, -4.4]
  - text: $T_{7}(x)$
    at: [4.7, -4.4]
  - text: $T_{11}(x)$
    at: [6.43, -4.4]
  - text: $T_{15}(x)$
    at: [7.9, -4.4]
  - text: $T_{19}(x)$
    at: [9.3, -4.4]
```

## 🟢Formula di taylor
Ora ci chiediamo, nella approssimazione del polinomio di taylor, quanto vale l'errore? Cioè:
$$
\Large{R_n(x) = f(x) - T_n(x) = \ ?}
$$

- Nel caso $n = 0$, con il teorema di lagrange sappiamo che esiste $c$ tra $x$ e $x_0$ tale che 

  $$
  \begin{aligned}
  R_0(x) = f(x) - T_0(x) = f(x) - f(x_0) &= f'(c) \cdot (x - x_0) \\
  &= o(1) = o\left((x - x_0)^0\right) \ \text{per } x \to x_0.
  \end{aligned}
  $$

- Nel caso $n = 1$, abbiamo visto che $T_1(x) = t(x)$

  $$
  R_1(x) = r(x) = o\left((x - x_0)^1\right) \ \text{per } x \to x_0.
  $$

- Nel caso $n \gt 1$, abbiamo la **Formula di taylor**:
  Sia $f \in C^{(n+1)}(a,b)$ e sia $x_0 \in (a,b)$, allora per $R_n(x) = f(x) - T_n(x)$ vale che: 

  $$
  R_n(x) = o\left((x - x_0)^n\right) \quad \text{per } x \to x_0 \qquad \textit{(Resto di Peano)}
  $$

  esiste $c \in (x, x_0)$:

  $$
  R_n(x) = \frac{f^{(n+1)}(c)}{(n+1)!} \cdot (x - x_0)^{n+1} \qquad \textit{(Resto di Lagrange)}
  $$

Il resto di Peano ci dice che la velocità del resto tende a 0 per $x \to x_0$, mentre il resto di lagrange ci dice quanto è grande il resto 
## 🔴 Applicazioni di taylor
