---
title: Integrali
description: "Integrale di Riemann, indefinito e definito, teorema della media e teorema fondamentale del calcolo, tecniche di integrazione (per parti, per sostituzione, fratti semplici, ricorrenza), integrali impropri e criterio integrale per le serie."
type: lecture
---

# Integrali

## 🟢 Integrabilità di riemann

![[Pasted image 20250623095057.png]]

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

![[Pasted image 20250623095517.png]]
![[Pasted image 20250623095551.png]]
![[Pasted image 20250623095618.png]]

## 🟢 Teorema della media
Se $f \in C[a,b]$, allora esiste un $c \in [a,b]$ tale che:

$$
\Large\int^b_a f(x) = f(c) \cdot (b-a)
$$
![[Pasted image 20250623095830.png]]

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

![[Pasted image 20250616104303.png]]

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
![[Pasted image 20250628112227.png]]

### 2) linearità
Sfruttando la linearità dell'integrale si ottiene:
$$
\int \frac{p(x)}{q(x)}dx = \int s(x)dx + \int \frac{r(x)}{q(x)}dx
$$
Dove il $\int s(x)dx$ è facile da calcolare, dato che è somma di polinomi

![[Pasted image 20250628112442.png]]

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

![[Pasted image 20250628115247.png]]

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
![[Pasted image 20250628115715.png]]

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
![[Pasted image 20250628122301.png]]
![[Pasted image 20250628122412.png]]

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
![[Pasted image 20250616112118.png]]

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
