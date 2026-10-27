---
title: Studio di Funzione
description: "Metodo sistematico per l'analisi completa di una funzione reale, comprendente dominio, limiti, derivate, monotonia, concavità e asintoti."
type: lecture
---

# Studio di funzione

## 🟢 Invertibilità, suriettività, continuità
Una funzione $f: X \to Y$ si dice:

- **Iniettiva**: se per ogni $x_1, x_2 \in X$, con $x_1 \ne x_2$, si ha $f(x_1) \ne f(x_2)$, cioè se per ogni $y \in Y$ esiste al più un $x \in X$ con $f(x) = y$.
- **Suriettiva**: se per ogni $y \in Y$ esiste almeno un $x \in X$ con $f(x) = y$.
- **Biettiva**: se $f$ è iniettiva e suriettiva, cioè se per ogni $y \in Y$ esiste un unico $x \in X$ con $f(x) = y$.

Sia $I \subseteq \mathbb R$ un intervallo, e sia $f \in C(I)$, allora anche $J := f(I) = \{f(x): x \in I\}$ è un intervallo, ed in oltre:
- $f: I \to J$ è **invertibile** $\Leftrightarrow$  $f$ è strettamente crescente/decrescente 
- se $f$ è **invertibile**, $f^{-1}: J \to I$ è continua

- $f$ è **iniettiva** $\Leftrightarrow$ ogni retta orizzontale attraverso un punto $y \in Y$ interseca $C(f)$ al più una volta.

- $f$ è **suriettiva** $\Leftrightarrow$ ogni retta orizzontale attraverso un punto $y \in Y$ interseca $C(f)$ almeno una volta.
- $f$ è **biettiva** $\Leftrightarrow$ ogni retta orizzontale attraverso un punto $y \in Y$ interseca $C(f)$ un’unica volta.
  
 

```plot
x: [-1.5, 2.3]
y: [-0.85, 2.0]
width: 260
height: 270
axes: true
xlabel: $x$
xticks: { -1: "$x_1$", 1: "$x_2$" }
caption: "(a)"
alt: Grafico di f_1(x), una parabola con vertice nell'origine; la retta orizzontale y>0 la interseca in due punti x_1 e x_2, la retta y<0 non la interseca
items:
  - fn: x^2
    domain: [-1.35, 1.35]
  - text: $f_1(x)$
    at: [0.1, 1.75]
    anchor: e
  - line: [[-1.27, 1], [1.1, 1]]
  - text: $y>0$
    at: [1.2, 1]
    anchor: e
  - line: [[-1, 1], [-1, 0]]
  - line: [[1, 1], [1, 0]]
  - line: [[-1.22, -0.46], [1.4, -0.46]]
  - text: $y<0$
    at: [1.5, -0.46]
    anchor: e
```

```plot
x: [-1.5, 2.3]
y: [-0.2, 2.0]
width: 260
height: 200
axes: x
xlabel: $x$
xticks: { -1: "$x_1$", 1: "$x_2$" }
caption: "(b)"
alt: Grafico di f_2(x), una parabola con vertice nell'origine definita su tutto R ma con valori solo y>=0; la retta orizzontale y>0 la interseca in due punti x_1 e x_2
items:
  - fn: x^2
    domain: [-1.35, 1.35]
  - line: [[0, 0], [0, 1.95]]
    arrow: true
  - text: $f_2(x)$
    at: [0.1, 1.75]
    anchor: e
  - line: [[-1.27, 1], [1.1, 1]]
  - text: $y>0$
    at: [1.2, 1]
    anchor: e
  - line: [[-1, 1], [-1, 0]]
  - line: [[1, 1], [1, 0]]
```

```plot
x: [-0.2, 2.3]
y: [-0.85, 2.0]
width: 260
height: 270
axes: true
xlabel: $x$
xticks: { 1: "$x_2$" }
caption: "(c)"
alt: Grafico di f_3(x), il ramo destro di una parabola con vertice nell'origine; la retta y>0 lo interseca in un solo punto x_2, la retta y<0 non lo interseca
items:
  - fn: x^2
    domain: [0, 1.35]
  - text: $f_3(x)$
    at: [0.1, 1.75]
    anchor: e
  - line: [[-0.1, 1], [1.1, 1]]
  - text: $y>0$
    at: [1.2, 1]
    anchor: e
  - line: [[1, 1], [1, 0]]
  - line: [[-0.1, -0.46], [1.4, -0.46]]
  - text: $y<0$
    at: [1.5, -0.46]
    anchor: e
```

```plot
x: [-0.2, 2.3]
y: [-0.2, 2.0]
width: 260
height: 200
axes: x
xlabel: $x$
xticks: { 1: "$x$" }
caption: "(d)"
alt: Grafico di f_4(x), il ramo destro di una parabola con vertice nell'origine; la retta y>0 lo interseca in un solo punto x
items:
  - fn: x^2
    domain: [0, 1.35]
  - line: [[0, 0], [0, 1.95]]
    arrow: true
  - text: $f_4(x)$
    at: [0.1, 1.75]
    anchor: e
  - line: [[-0.1, 1], [1.1, 1]]
  - text: $y>0$
    at: [1.2, 1]
    anchor: e
  - line: [[1, 1], [1, 0]]
```

Funzione (a) non iniettiva, non suriettiva; (b) non iniettiva ma suriettiva; (c) iniettiva ma non suriettiva; (d) iniettiva e suriettiva cioè biettiva.

## 🟢 Trovare il dominio

Data una funzione $f$, vogliamo studiarne il dominio. 
Vogliamo escludere tutti i valori non validi dalla funzione come per esempio:

- I denominatori non possono essere 0
- Le radici pari non possono avere un espressione negativa
- Le espressioni nei logaritmi devono essere maggiore di 0, ed in generale tutte le funzioni trigonometriche con dominio limitato

Per esempio, studiamo la funzione $f(x) = \frac{1}{log(2x - x^2)}$ 
Allora:
- $2x - x^2 \gt 0$
- $log(2x-x^2) \ne 0 \implies 2x-x^2 \ne 1$ 

Risolviamo i due:
$$
x(2 - x) > 0 \implies 0 \lt x \lt 2
$$
Per il secondo prendiamo i valori in cui è uguale a 1
$$
\begin{aligned}
2x - x^2 &= 1 \\ 
&\implies 2x - x^2 - 1 = 0 \\
&\implies (x-1)^2 = 0 \\
&\implies \text{per} \ x = 1 \ \text{,} \ (x-1)^2 = 0
\end{aligned}
$$
Allora i vincoli del nostro dominio sono: $0 \lt x \lt 2$ e $x \ne 1$ 
E quindi:
$$
\Large D = (0,1) \cup (1,2)
$$

## 🟢 Punti critici

Vogliamo studiare una funzione per trovare i punti estremi, cioè punti in cui il valore della funzione è al minimo/massimo locale. Si può anche vedere come il punto in cui viene cambiata "direzione" della funzione (da crescente a decrescente, etc...)

```plot
x: [-0.5, 2.5]
y: [-10, 50]
width: 330
height: 330
xticks: [1, 2]
yticks: [10, 20, 30, 40]
alt: Grafico di y = s(t), una parabola rivolta verso il basso che parte da s(0)=32, ha il vertice V in alto a circa t=0,75 e s=41 e scende fino a incrociare l'asse delle t poco oltre t=2.
items:
  - fn: s(t) = 32 + 24t - 16t^2
    domain: [0, 2.5]
    color: blue
    width: 2.4
  - point: [0.75, 41]
    color: red
    label: $V$
    anchor: nw
  - text: $y=s(t)$
    at: [1.35, 43]
    anchor: e
```

```plot
x: [-1.63, 1.67]
y: [-1.6, 1.65]
width: 330
height: 330
alt: Grafico di y = g(x) con due massimi locali nei punti (a, g(a)) e (c, g(c)) e un minimo locale nel punto (b, g(b)) tra i due; g(c) è il massimo più alto.
items:
  - fn: g
    through: [[-1.44, -1.6], [-0.82, 0.31], [-0.32, 0.15], [0.65, 1.07], [1.24, -1.6]]
    color: blue
    width: 2.4
  - point: [-0.82, 0.31]
    color: red
    label: $(a,g(a))$
    anchor: n
  - point: [-0.32, 0.15]
    color: red
    label: $(b,g(b))$
    anchor: s
  - point: [0.65, 1.07]
    color: red
    label: $(c,g(c))$
    anchor: ne
  - text: $y=g(x)$
    at: [-0.86, -1.05]
```

Per trovare i punti critici della funzione $f(x)$ ci basta: 
- trovare i punti dove l'equazione della derivata prima $f'(x) = 0$ dove i punti x sono definiti su $f(x)$ 
- I punti in cui la funzione $f'(x)$ non esiste. 
- Gli estremi del domino.

## 🟢 Trovare simmetrie

Data una funzione $f$:

- Per vedere se una funzione è simmetrica rispetto l'asse Y (funzione pari), allora deve essere vero che:
$$
\Large{f(x) = f(-x)}
$$
- Per vedere se una funzione è simmetrica rispetto l'origine (funzione dispari), allora deve essere vero che:
$$
f(-x) = -f(x)
$$
Esempi:
- Funzione pari: $f(x) = x^2$ allora $f(x) = f(-x)$, $x^2 = (- x)^2$, e dato che un numero elevato ad un numero pari è sempre positivo, l'eguaglianza regge, e la funzione è pari rispetto l'asse X.
- Funzione dispari: $f(x) = x^3$ allora $f(-x) = f(x)$, $-x^3 = - x^3$, allora è dispari rispetto l'origine
## 🟠 Trovare intersezioni con gli assi

Data una funzione $f$:

- Per vedere l'intersezione con l'asse X, risolvere l'equazione $f(x) = 0$ 
- Per vedere l'intersezione con l'asse Y, se $0 \in X$, calcolare $f(0)$ 

## 🟠 Segno della funzione

Data una funzione $f$, per scoprire il segno della funzione basta risolvere l'equazione $f(x) > 0$ oppure $f(x) < 0$.
Oppure possiamo studiare i punti critici e poi vedere i valori della funzione dentro gli intervalli fra i punti critici.

## 🟠 Trovare asintoti verticali/orizzontali

Si calcolano i limiti (da destra e sinistra) di $f(x)$ nei punti estremi del dominio $X$. A questo punto:

- Se $\lim_{x \to c^{(\pm)}} f(x) = \pm \infty$, con $c \in \mathbb R$, allora si dice che $f$ ha un asintoto verticale $x = c$. 
  I punti $c$ che dobbiamo analizzare sono i punti in cui la funzione non è definita (i punti estremi di $X$). Si calcola il limite, se il limite tende da una parte a $-\infty$ e l'altra a $+\infty$, allora c'è un asintoto verticale a $x = c$.
- Se $\lim_{x \to \pm \infty} f(x) = l \in \mathbb R$, allora si dice che $f$ ha un asintoto orizzontale $y = l$. 
  Calcoliamo il limite a $+\infty$ e $-\infty$, se entrambi sono uguali (chiamiamolo $l$) allora $y = l$ è l'asintoto orizzontale.

## 🟠 Trovare asintoti obliqui

Se esistono $m \ne 0$ e $q \in \mathbb R$ tale che:
$$ 
\lim_{x \to +\infty / -\infty} (f(x) - (m \cdot x + q)) = 0
$$
($+\infty / - \infty$ vuol dire uno o l'altro, o entrambi).

Allora si dice che la retta $y  = m \cdot x + q$ è asintoto obliquo per $f$ a $+\infty$ e/o $-\infty$.
Graficamente vuol dire che la distanza tra il grafico di $f$ e la retta $y = m \cdot x + q$ tende a $0$ per $x \to \pm \infty$.

Per poterlo svolgere eseguiamo i passaggi:

1) Si verifica se esiste (ed è finito) il limite: 
   $\Large{\lim_{x \to \pm \infty} \frac{f(x)}{x}=: m}$ 
   E verifichiamo che non sia uguale a 0. Questa sarà la **Pendenza** dell'asintoto
2) Se esiste $m \ne 0$, allora si verifica se esiste il limite (ed è finito):
   $\Large{\lim_{x \to \pm \infty} (f(x) - mx})=: q$
   Che sarà l'ordinata all'origine dell'asintoto

Se entrambi esistono e sono finiti, allora $y = mx + q$ è un asintoto obliquo di $f$ per $x \to \pm \infty$ 

```plot
x: [-5.3, 5.3]
y: [-35, 35]
width: 640
height: 420
xticks: [-4, -2, 2, 4]
yticks: [-30, -20, -10, 10, 20, 30]
xlabel: $x$
ylabel: $y$
alt: Grafico di f(x) = (2x^2+3)/x, con i due rami nel primo e nel terzo quadrante separati dall'asse y, e della retta y = 2x, asintoto obliquo di f per x che tende a più e meno infinito.
items:
  - fn: f(x) = (2x^2 + 3)/x
    domain: [-5.2, 5.2]
    color: blue
    width: 2.4
    label: $f(x)=\dfrac{2x^2+3}{x}$
    labelAt: -3.0
    anchor: s
  - fn: 2x
    domain: [-5.2, 5.2]
    color: red
    width: 2.4
    label: $y=2x$
    labelAt: 3.6
    anchor: s
```

## 🟠 Punti angolosi 

Un punto angoloso è un punto nella funzione che è continuo ma non derivabile, perchè i limiti destro e sinistro esistono ma sono diversi.

Per verificare se un punto è angoloso, basta verificare se:
$$
\lim_{x \to ^-c} f'(x) \ne \lim_{x \to ^+c} f'(x)
$$
Se sono diversi, allora vuol dire che il punto $c$ è un punto angoloso

## 🟠 Punti di flesso

Un punto $x_0 \in (a, b)$ si chiama punto di flesso in $f: (a,b) \to \mathbb R$ se $f$ è continua in $(a,b)$, derivabile in $(a,b) \setminus \{ x_0 \}$ e se:
- $f$ ammette retta tangente in $x_0$ (esiste derivata prima)
- la concavità è opposta a destra/sinistra di $x_0$ 
## 🟠 Studio derivata prima (crescenza/decrescenza, punti critici ed estremi locali)

Data una funzione $f$, calcoliamo la derivata prima $f'(x)$ e il corrispettivo dominio. 

- Risolvendo l'equazione $f'(x) = 0$ troviamo l'equazione dei punti in cui la funzione cambia di segno. 
  - Studiando il cambiamento di segno nell'intervallo precedente/successivo di questo punto, possiamo trovare se è un minimo/massimo locale
  - Infine possiamo studiare il segno di $f'(x)$ per ottenere informazioni sulla monotonia di $f$

## 🟠 Studio derivata seconda (concavità/convessità)

```plot
x: [-0.2, 1.65]
y: [-0.2, 1.4]
width: 260
height: 200
alt: Funzione convessa, il cui grafico ha la forma di una U con un minimo
items:
  - fn: f
    through: [[0.18, 0.92], [0.73, 0.38], [1.43, 1.10]]
  - text: $f$ convessa
    at: [0.68, 1.2]
```

```plot
x: [-0.2, 1.65]
y: [-0.2, 1.4]
width: 260
height: 200
alt: Funzione concava, il cui grafico ha la forma di una U rovesciata con un massimo
items:
  - fn: f
    through: [[0.2, 0.45], [0.73, 0.98], [1.38, 0.2]]
  - text: $f$ concava
    at: [0.73, 1.2]
```

Per capire la concavità del punto (cioè se il punto fa parte di un minimo o massimo locale) allora dobbiamo studiare la derivata seconda nel punto di flesso.
- Se la derivata seconda è positiva, allora siamo in un minimo locale (concavità verso l'alto). 
- Se è negativa, allora siamo in un massimo locale (concavità verso il basso). 
- Se è 0, allora il test è inconcludente, il punto non è un estremo.

## 🟠 Studio monotonia 

Con $f(x)$ una funzione definita su intervallo $I$ (aperto, chiuso o nessuno dei due), allora:
- $f$ è detto monotono crescente se per ogni coppia $x_1, x_2$ dell'intervallo dove $x_1 < x_2$, allora $f(x_1) < f(x_2)$ 
- $f$  è detto monotono decrescente se per ogni coppia $x_1, x_2$ dell'intervallo dell'intervallo dove $x_1 < x_2$, allora $f(x_1) > f(x_2)$ 
- $f$  è detto strettamente monotono se non è ne crescente ne decrescente

Per il teorema della monotonia, se $f$ è una funzione continua sull'intervallo $I$ e differenziabile ovunque in $I$, allora:
- Se $f'(x) > 0$ per ogni $x$ nell'intervallo, allora $f$ è crescente in quell'intervallo
- Se $f'(x) < 0$ per ogni x nell'intervallo, allora $f$ è decrescente in quell'intervallo
### Esempio

Studiamo la funzione $f(x) = 3x^4-4 x^3+2$ 

La prima cosa che vogliamo trovare sono i punti critici, cioè tutti i punti in cui $f'(x)= 0$ oppure non è definita. Prima troviamo la sua derivata: 

$$
f'(x) = 12x^3 - 12x^2
$$
Questa funzione è definita su tutti i punti, allora troviamo quando $f'(x)= 0$:
$$
\begin{aligned}
f'(x) &= 12x^3 - 12x^2 \\
& = 12x^2(x - 1) \\
\end{aligned}
$$
Questa funzione è uguale a 0 quando $x = 0$ oppure $x = 1$. 

Questi punti critici possono essere punti di flesso, punti minimi/massimi, ma per poterlo capire dobbiamo continuare a studiarli. 

Prima di tutto proviamo la concavità su questi punti. Lo facciamo vedendo il segno della seconda derivata su questi punti.

$$
f''(x) = 36x^2 - 24x
$$
Allora valutiamoli sui due punti estremi, $x=0$ e $x=1$:
$$
\begin{aligned}
f''(0) &= 0 \\
f''(1) &= 12
\end{aligned}
$$
- Nel punto $0$, la derivata seconda è 0, allora non ci troviamo ne in concavità verso l'alto ne basso. Questo potrebbe essere un punto di flesso, lo studieremo dopo
- Nel punto 1, la derivata seconda è positiva, allora ci troviamo in concavità verso l'alto, e quindi questo punto è un punto di minimo locale

Ora abbiamo visto che $f''(0) = 0$, il che è uno dei requisiti di un punto di flesso, vediamo se esistono altri punti in cui la derivata seconda è 0, cioè dove $36x^2 - 24x = 0$:
$$
\begin{aligned}
f''(x) &= 36x^2 - 24x \\
&= 12x(3x - 2)
\end{aligned}
$$
Questa funzione è uguale a 0 sui punti $x = 0$ e $x = \frac{2}{3}$ 

Ora, i punti di flesso sono tutti quei punti dove $f''(x) = 0$ e c'è un cambio di direzione della funzione a quel punto (da positivo a negativo, o viceversa). Allora controlliamo, per entrambi i punti, i valori maggiori e minori di esso.

Nel caso in cui $x = \frac{2}{3}$ vediamo il segno per $x > \frac{2}{3}$ e $x < \frac{2}{3}$ 

$$
\begin{aligned}
& x > \tfrac{2}{3} \;\Rightarrow\; f''(x) > 0 \\[0.6em]
& f''(x) = \underbrace{12x}_{+}\,\underbrace{(3x-2)}_{+} \\[0.8em]
& x < \tfrac{2}{3} \;\Rightarrow\; f''(x) < 0 \\[0.6em]
& f''(x) = \underbrace{12x}_{+}\,\underbrace{(3x-2)}_{-}
\end{aligned}
$$

Nel primo caso, per qualsiasi valore $x > \frac{2}{3}$, $f''(x)$ è positiva.
Nel secondo caso, per qualsiasi valore $0 <x < \frac{2}{3}$, $f''(x)$ è negativa

Allora effettivamente questo punto è un punto di flesso

Nel caso in cui $x = 0$ vediamo il segno per $x > 0$ e $x < 0$ 

$$
\begin{aligned}
& x > 0 \qquad f''(x) < 0 \\[0.6em]
& f''(x) = \underbrace{12x}_{+}\,\underbrace{(3x-2)}_{-} \\[0.8em]
& x < 0 \;\Rightarrow\; f''(x) > 0 \\[0.6em]
& f''(x) = \underbrace{12x}_{-}\,\underbrace{(3x-2)}_{-}
\end{aligned}
$$

Nel primo caso, per qualsiasi valore $\frac{2}{3} > x > 0$, $f''(x)$ è negativa.
Nel secondo caso, per qualsiasi valore $x < 0$, $f''(x)$ è positiva. 

Per riassumere:
- $x = 1$ la derivata prima è 0, ed è concava verso l'alto, $f(1) = 1$ 
- $x = 0$ la derivata prima è 0, ed è un punto di flesso, a sinistra verso l'alto, e a destra verso il basso, $f(2)  = 2$
- $x = \frac{2}{3}$, non ha derivata prima a 0, ma è un punto di flesso, a sinistra verso il basso e a destra verso l'alto, $f(\frac{2}{3})$ è un numero reale, quindi non lo scrivo qui.

A questo punto possiamo disegnare la funzione:

```plot
x: [-0.7, 1.45]
y: [-0.4, 4]
width: 440
height: 380
xticks: { 0.667: "$\\frac{2}{3}$", 1: "$1$" }
yticks: [1, 2]
alt: Grafico di f(x) = 3x^4 - 4x^3 + 2. La funzione decresce, ha un flesso a tangente orizzontale nel punto (0,2), prosegue a decrescere con un flesso in x = 2/3 dove cambia concavità, raggiunge il minimo locale nel punto (1,1) e poi cresce.
items:
  - fn: f(x) = 3x^4 - 4x^3 + 2
    domain: [-0.7, 1.45]
    color: blue
    width: 2.4
  - line: [[-0.35, 2], [0.35, 2]]
    dash: true
  - guide: [2/3, f(2/3)]
    to: x
    dash: dotted
  - point: [0, 2]
    label: $(0,2)$
    anchor: ne
  - point: [2/3, f(2/3)]
    label: $(\tfrac{2}{3}, f(\tfrac{2}{3}))$
    anchor: ne
  - point: [1, 1]
    label: $(1,1)$
    anchor: se
  - text: $x=\tfrac{2}{3}$
    at: [0.4, 3.3]
```

