---
title: Funzioni
description: "Proprietà delle funzioni reali: punti di accumulazione, asintoti, teorema del confronto e dei carabinieri, monotonia e i teoremi degli zeri, dei valori intermedi e di Weierstrass."
type: lecture
---

# Funzioni 

## 🟢 Punto di accumulazione

Un punto $c \in \overline{\mathbb{R}}$ dell'insieme $X \subseteq \mathbb R$ si dice di accumulazione se esiste una successione $(x_n)_{n \in \mathbb N}$ con:
- $x_n \in X$ per ogni $n \in \mathbb N$ 
- $x_n \ne c$ per ogni $n \in \mathbb{N}$ 
- $\lim_{n \to \infty}x_n = c$ 
In poche parole, ci si avvicina a piacere verso $c$ senza mai toccarlo.
## 🟠 Asintoti

- Se $\lim_{x \to c^{(\pm)}} f(x) = \pm \infty$, con $c \in \mathbb{R}$, allora si dice che $f$ ha un asintoto verticale in $x = c$ 
- Se $\lim_{x \to \pm \infty} f(x) = l$, con $l \in \mathbb{R}$, allora si dice che $f$ ha un asintoto orizzontale in $y = l$ 
- Un asintoto obliquo è una retta $y = mx + b$ tale che: 
$$
\lim_{x \to \pm \infty}\left[f(x) - (mx + b)  \right] = 0
$$
## 🟠 Teorema del confronto e carabinieri

Nota: $\mathbb{\overline R} = \mathbb{R}\cup\{+\infty, -\infty\}$

Se $a_n \to l_1$ e $b_n \to l2$ per $n \to \infty$, con limiti $l_1, l_2 \in \mathbb{\overline R}$ e $a_n \le b_n$, per ogni $n \in \mathbb{N}$, allora:

- **Teorema del confronto**: $l_1 \le l_2$ 
- **Teorema dei carabinieri**: se $a_n \le c_n \le b_n$ per ogni $n \in \mathbb N$ e $l_1 = l_2$, allora anche $c_n \to l_1 = l_2$ per $n \to \infty$  

## 🟢 Studio di Monotonia

Per studiare la monotonia di una funzione, dobbiamo studiarne la derivata prima

É analogo allo studio di funzione dove troviamo i punti critici della funzione, infatti nei punti in cui la derivata è 0, la funzione cambia segno da crescente o decrescente, o viceversa. 

In questi intervalli è dove la funzione sarà monotona, crescente o decrescente in base al segno della derivata.

Se in un intervallo la derivata è 0, allora la funzione non è ne crescente ne decrescente.

Per esempio, studiamo la funzione $f(x) = x^3 + 2x^2 + 3$ la cui derivata prima è $f'(x) = 3x^2 +4x = x(3x + 4)$.

Sappiamo che la derivata prima è uguale a 0 nei casi in cui $x  = 0$ e $x = - \frac{4}{3}$, allora possiamo studiare il segno negli intervalli $-\frac{4}{3} < x < 0$, $x < -\frac{4}{3}$,  $x > 0$  

È importante notare che questo studio è valido solo su intervalli, e che l'unione di intervalli con lo stesso andamento non implica lo stesso andamento per l'unione. Per esempio se c'è un punto in cui la funzione non è definita.


## 🟢 Teorema degli zeri

Sia $f: [a,b] \to \mathbb R$ continua, tale che $f(a)$ e $f(b)$ abbiano segno opposto, cioè che $f(a) \cdot f(b) \lt 0$, allora esiste $c \in (a,b)$ tale che $f(c) = 0$  

## 🟢 Teorema dei valori intermedi

è una generalizzazione del teorema degli zeri:
- Sia $I \subseteq \mathbb R$ un intervallo qualsiasi, non necessariamente chiuso
- $f: I \to \mathbb R$ continua
- $m:= inf \ f := inf \ \{f(x): x \in I \}$   
- $M:= sup \ f := sup \ \{f(x): x \in I \}$   
Allora per ogni $y \in (m, M)$ esiste $x \in I$ tale che $f(x) = y$, cioè che nell'intervallo I, f(x) assume tutti i valori presenti fra $m$ e $M$ 

## 🟢 Teorema di weierstrass

Se $f \in C[a,b]$ allora esistono $m = min \ f$ e $M = max \ f$ e in oltre:
- f è limitata
- $f(m) \le f(x) \le f(M)$ per ogni $x \in [a,b]$ 
- per ogni $y \in [m, M]$ esiste $x \in [a,b]$ tale che $f(x) = y$
