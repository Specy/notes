---
title: Derivate
description: "Regole di derivazione (potenza, catena, prodotto, quoziente), teoremi di Fermat, Rolle e Lagrange, test di monotonia, regola di Hôpital, simboli di Landau e formula di Taylor e Maclaurin."
type: lecture
---

# Derivate

La derivata è la pendenza della retta tangente di una funzione ad un certo punto 

![[Pasted image 20250613095559.png]]

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
\lim_{h \to 0}{\dfrac{2x\cancel{h} + h^\cancel{2}}{\cancel{h}}} \\ &=
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

![[Pasted image 20250622161546.png]]

In pratica, se $f(a) = f(b)$ vuol dire che la funzione sarà andata verso l'alto/basso e poi tornata al punto iniziale, oppure che è una retta. In entrambi i casi, c'è almeno un punto in cui c'è stato un cambio di direzione della funzione (oppure essendo una retta costante, la derivata è 0)
## 🟢Teorema di lagrange

Sia $f \in C[a, b]$ una funzione continua tra $a$ e $b$, derivabile in $(a,b)$. 
Allora esiste un punto $c \in (a,b)$ tale che:

![[Pasted image 20250622164213.png]]
Simile all'intuizione precedente.

Se $f \in C[a,b]$ è derivabile in $(a,b)$ allora per ogni $x_1, x_2 \in [a,b]$ esiste $c$ tra $x_1$ e $x_2$ tale che:

![[Screenshot_2025-07-01-17-04-58-91_40deb401b9ffe8e1df2f1cc5ba480b12.jpg]]

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

![[Pasted image 20250622165225.png]]
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

![[Pasted image 20250613163905.png]]

![[Pasted image 20250613164251.png]]

Alcune volte non è possibile applicare la regola di Hopital direttamente, ma si può manipolare l'espressione per poterla far applicare:

![[Pasted image 20250613164619.png]]

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
\huge\lim_{x \to x_0}{\frac{f(x)}{g(x)} = 0}
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

![[Pasted image 20250622175303.png]]

E naturalmente, con $x \to x_0$ il resto $r(x)$ tende a 0, e nel punto $r(x_0) = 0$. Questa funzione è la migliore approssimante per $n = 1$

### Caso n > 1

Se possiamo fare la derivata di una funzione $n$ volte (derivata della derivata etc...), ed è anche continua, cioè che $f \in C^{n}(a,b)$  , allora dichiamo che la funzione è derivabile $n$ volte con continuità.

Allora supponendo che $f$ sia $n$ volte derivabile con continuità, cerchiamo un polinomio $T_n$ che fino all'n-esimo termine ha il valore in $x_0$ in comune con tutte le derivate, cioè che:

![[Pasted image 20250622180617.png]]

Se $f \in C^n(a,b)$ e $x_0 \in (a,b)$, allora esiste un unico polinomio $T_n$ di grado $\le n$ che ha contatto di ordine $n$ in $x_0$ con $f$. Questo polinomio si chiama **Polinomio di Taylor** di ordine $n$ centrato su $x_0$, ed è dato da:

![[Pasted image 20250622180848.png]]
Se $x_0 = 0$ allora $T_n$ viene chiamato **Polinomio di Maclaurin** 

![[Pasted image 20250622180951.png]]

## 🟢Formula di taylor
Ora ci chiediamo, nella approssimazione del polinomio di taylor, quanto vale l'errore? Cioè:
$$
\huge{R_n(x) = f(x) - T_n(x) = \ ?}
$$

- Nel caso $n = 0$, con il teorema di lagrange sappiamo che esiste $c$ tra $x$ e $x_0$ tale che 
  ![[Pasted image 20250622181352.png]]
- Nel caso $n = 1$, abbiamo visto che $T_1(x) = t(x)$
  ![[Pasted image 20250622181529.png]]
- Nel caso $n \gt 1$, abbiamo la **Formula di taylor**:
  Sia $f \in C^{(n+1)}(a,b)$ e sia $x_0 \in (a,b)$, allora per $R_n(x) = f(x) - T_n(x)$ vale che: 
  ![[Pasted image 20250622181847.png]]
Il resto di Peano ci dice che la velocità del resto tende a 0 per $x \to x_0$, mentre il resto di lagrange ci dice quanto è grande il resto 
## 🔴 Applicazioni di taylor
