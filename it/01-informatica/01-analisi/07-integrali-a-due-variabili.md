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

![[Pasted image 20250628131002.png]]
![[Pasted image 20250628131036.png]]

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

![[Pasted image 20250703143853.png]]

Troviamo tutti i vincoli:
- $x \in [-1, 3]$ ci dice che i valori sull'asse X sono compresi fra $-1$ e $3$, allora dovremmo contare solo i valori in questo intervallo

- $x - 1 \le y$ vuol dire che i valori dell'asse y sono più grandi di $x - 1$, quindi disegneremo la retta $y = x - 1$ che rappresenta il "bordo" di questo vincolo

- $y \le \sqrt{x +1}$ vuol dire che i valori di $y$ sono più piccoli di $\sqrt{x + 1}$, quindi disegneremo  $y = \sqrt{x + 1}$ che rappresenta il "bordo" di questo vincolo, questo bordo è rappresentato da una "parabola" schiacciata verso destra

L'insieme X sarà tutti i valori dentro questi vincoli:

![[Pasted image 20250703144237.png]]

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
![[Pasted image 20260119163238.jpg]]
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

![[Pasted image 20250628132158.png]]
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

![[Pasted image 20250628142945.png]]

L'idea del teorema per calcolare $V$ è quelloo di decomporlo in una unione di fette di spessore infinitesimale e poi sommare il volume di ogniuna di queste fette. 
Per esempio:
![[Pasted image 20250628143133.png]]


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
