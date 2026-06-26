---
title: Serie, Successioni e Limiti
description: "Successioni reali e serie numeriche: successioni monotone, geometriche e armoniche, criteri di convergenza (confronto, radice, rapporto, Leibniz), forme indeterminate e tecniche di studio della convergenza."
type: lecture
---

# Serie, Successioni e limiti

## Tipi di successioni
Data una successione $a_n$, allora si dice che la successione è:
- **Convergente** se per il limite con $n \to \infty$, la successione tende a $l$
- **Infinitesima** uguale alla convergente, ma con $l = 0$ 
- **Divergente** se per $n \to \infty$, la successione tende a $\pm \infty$ 
- **Limitate** se esiste $M > 0$ tale che $|a_n| < M$ per ogni $n$, per esempio la funzione seno è limitata in $[-1, 1]$  
- **Monotona** crescente se $a_{n + 1} \ge a_n$, o monotona decrescente se $a_{n + 1} \le a_n$
- **Oscillante** se non hanno un verso (per esempio verso l'infinito positivo o negativo) e possono essere limitate, se sono racchiuse in un intervallo, o non limitate se non sono racchiuse in un intervallo
## 🟢 Successione monotona

Una successione $(a_n)$ è detta:
- monotona crescente se $a_{n+1} \ge a_n$ per ogni $n$
- monotona decrescente se $a_{n+1} \le a_n$ per ogni $n$
- Strettamente crescente/decrescente se le disegualianze sono strette, $>, <$ 
##  🟢 Successione geometrica

![[Pasted image 20250622182144.png]]
![[Pasted image 20250622182807.png]]
##  🟢 Successione armonica

![[Pasted image 20250622182159.png]]
![[Pasted image 20250622182819.png]]

In generale:

![[Pasted image 20250623092940.png]]
##  🟢 Principio di sostituzione

Se per due successioni $a_n$ e $b_n$ si ha che $\lim_{n \to \infty}\frac{a_n}{b_n} = 1$ allora si dice che $a_n$ e $b_n$ sono asintotiche e si scrive $a_n \sim b_n$ per $n \to \infty$.

Se $a_n \sim b_n$ per $n \to \infty$, allora $(a_n)_{n \in \mathbb{N}}$ e $(b_n)_{n \in \mathbb{N}}$  hanno lo stesso comportamento asintotico, cioè che:

![[Pasted image 20250622182525.png]]

Allora definiamo il principio di sostituzione, in ==**prodotti e rapporti**== si possono sostituire successioni con altre successioni asintotiche, senza cambiare il comportamento asintotico, e sopratutto, non cambierà il valore del limite, se esiste.

![[Pasted image 20250622182716.png]]

## 🟢 Teorema sul limite delle successioni monotone

Il teorema ci dice che ogni successione monotona di numeri reali ha un limite.
Questo limite può essere:
- **Finito**: se la successione è anche limitata. A questo punto:
  - Se è monotona crescente e limitata superiormente, il suo limite è l'estremo superiore della successione
  - Se è monotona decrescente e limitata inferiormente, il suo limite è l'estremo inferiore della successione
- **Infinito**: se la successione è illimitata. A questo punto:
  - Se la successione è monotona crescente e illimitata superiormente, il suo limite è $+\infty$ 
  -  Se la successione è monotona decrescente e illimitata inferiormente, il suo limite è $-\infty$ 

## 🟢 Serie di mengoli

![[Pasted image 20250622182847.png]]

## 🟢 Somma telescopica 

Quando ci troviamo con serie i cui termini sono somme parziali della forma:

$$
s_n = \sum_{k=1}^{n}(A_{k+1}-A_k) = (\cancel{A_2} - A_1) + (\cancel{A_3} + \cancel A_2) + \dots + (\cancel A_n + \cancel A_{n-1}) + (A_{n+1} + \cancel A_n)
$$
Allora semplificando i termini intermedi, il calcolo della serie si riduce al trovare il limite di:
$$
\lim_{n \to \infty} A_{n+1} - A_1 = \ ?
$$
## 🟢 Condizione di convergenza

Una condizione necessaria (ma non sufficiente) per la convergenza di una serie è che:
Se 
$$
\sum_{k = 0}^{\infty}{a_k}
$$
 converge, allora
$$
\lim_{k \to \infty}{a_k} = 0
$$

Mentre quando studiamo:
$$
\lim_{n \to \infty} \sum_{k = 0}^{n}a_k = s_n
$$

- Se $\lim_{n \to +\infty}s_n = s$, si dice che la serie numerica converge alla somma $s$, e allora $\sum_{k = 0}^{\infty}{a_k} = s$
- Se $\lim_{n \to \pm\infty}s_n = \pm \infty$, si dice che la serie numerica diverge a $\pm \infty$ e allora $\sum_{k = 0}^{\infty}{a_k} = \pm \infty$
- Si dice irregolare o oscillante se $(s_n)_{n \in \mathbb N}$ è irregolare
## 🟢 Convergenza di una successione 

![[Screenshot_2025-07-04-07-16-33-31_40deb401b9ffe8e1df2f1cc5ba480b12.jpg]]
## 🟢Continuità di una funzione

Una funzione $f(x)$ è detta continua sull'intervallo $[a,b]$ sul punto $x_0$ se:
- Esiste il limite $l$ per $x \to x_0$ di $f(x)$, cioè il limite destro e sinistro sono finiti e uguali.
- Questo limite $l$ è uguale al valore della funzione su $x_0$, cioè che $l = f(x_0)$  

## 🟢 Serie a termini positivi 

Diciamo che una successione è limitata, se $\forall n \in \mathbb{N}$, $\exists M > 0$ tale che $|S_n| \le M$. Quindi che tutte le successioni sono limitate superiormente da un certo $M$ 

Se $a_k \ge 0$ per ogni $k \in \mathbb{N}$, allora la serie:

![[Pasted image 20250622183826.png]]

## 🟢 Convergenza assoluta
Notiamo che: 

![[Pasted image 20250623094523.png]]

![[Pasted image 20250623094607.png]]

## 🟢 Criterio del confronto

![[Pasted image 20250623092317.png]]
![[Pasted image 20250623092346.png]]
## 🟢 Criterio della radice

Sia $a_k \ge 0$ definitivamente, se esiste:
$$
\huge{q :=\lim_{k \to \infty}{\sqrt[k]{a_k}}}
$$
Allora la serie $\sum_{k=0}^\infty a_k$:

- Converge se $q < 1$
- Diverge se $q > 1$
- Non possiamo concludere altro se $q = 1$

Molto utile quando stiamo studiando il limite di serie elevate alla $n$, per esempio 
$$
 \frac{n^n}{(2n+1)^n}
$$
A questo punto ci basta mettere tutto sotto radice $n$-esima e semplificare le potenze. Infine calcolando il limite otteniamo $\frac{1}{2}$, quindi converge.
## 🟢 Criterio del rapporto

Sia $a_k > 0$ definitivamente, se esiste:
$$
\huge{q :=\lim_{k \to \infty}{\frac{a_{k+1}}{a_k}}}
$$
Allora la serie $\sum_{k=0}^\infty a_k$:
- Converge se $q < 1$
- Diverge se $q > 1$
- Non si può concludere nulla se $q = 1$

Utile quando troviamo un esponenziale o c'è una potenza con indice all'esponente ($\alpha^n$) con $\alpha$ un numero reale. 
Per esempio:
$$
a_n = \frac{n^2 + 1}{3^n}
$$
Che è a termini positivi, allora calcoliamo $a_{n + 1}$ sostituendo ad $n$:
$$
a_{n + 1} = \frac{(n + 1)^2 + 1}{3^{(n + 1)}} = \frac{n^2 + 2n + 2}{3 \cdot 3^n}
$$
A questo punto applichiamo il criterio del rapporto:
$$
\begin{aligned}
\lim_{n \to \infty}{\left(\frac{a_{n+1}}{a_n} \right)} 
&= \lim_{n \to \infty} \left( \frac{\frac{n^2 + 2n + 2}{3 \cdot 3^n}}{\frac{n^2 + 1}{3^n}}\right) \\ \\
&= \lim_{n \to \infty} \left [(\frac{n^2 + 2n + 2}{3 \cdot 3^n})\cdot(\frac{3^n}{n^2 + 1}) \right] \\ \\
&= \lim_{n \to \infty} \left(\frac{n^2 + 2n + 2}{3n^2 + 3} \right) \\ \\
&= \frac{1}{3}
\end{aligned}
$$
Dove  $\frac{1}{3}\lt 1$, quindi la serie converge. 


## 🟢  Criterio di leibniz

Prendiamo la serie di leibniz:
$$
\sum_{k=1}^{\infty}(-1)^k \cdot \frac{1}{k}
$$
Osserviamo la sua convergenza:

![[Pasted image 20250623093152.png]]

Allora il criterio di Leibniz ci dice che se la successione $(a_k)_{k \in \mathbb{N}}$ é **decrescente** e **infinitesima**, allora la serie:
$$
s :=\sum_{k=1}^{\infty}(-1)^k \cdot a_k
$$
Converge, e vale che $|s - s_n| \lt a_{n+1}$ per ogni $n \in \mathbb{N}$ 

## 🟠 Forme indeterminate dei limiti

Per poter dire che un limite converge/diverge ad un valore, dobbiamo evitare le forme indeterminate, cioè forme che non ci permettono di usare le regole dei limiti:

![[Pasted image 20250705150630.png]]


## 🟢 Tecniche di studio di convergenza

Applichiamo eventuali modifiche algebriche e poi applichiamo i vari criteri per poter raggiungere una conclusione sulla serie che stiamo considerando.

Per esempio, proviamo a risolvere: 
$$
\sum_{k = 1}^{\infty}\frac{\sqrt{k + 1} - \sqrt{k}}{k}
$$
Possiamo modificare l'espressione cercando di portare le radici al denominatore:
$$
\begin{aligned}
\sum_{k = 1}^{\infty}\frac{\sqrt{k + 1} - \sqrt{k}}{k} &= 
\sum_{k = 1}^{\infty}\frac{\sqrt{k + 1} - \sqrt{k}}{k} \cdot \frac{\sqrt{k + 1} - \sqrt{k}}{\sqrt{k + 1} - \sqrt{k}} \\
&= \frac{(k + 1) - k}{k(\sqrt{k+1} + \sqrt{k})} \\
&= \frac{1}{k(\sqrt{k + 1} + \sqrt{k})}
\end{aligned}
$$
A questo punto possiamo utilizzare il criterio di confronto asintotico per $k \to \infty$ dove $\sqrt{k + 1} \approx \sqrt{x}$
Allora:
$$
\sqrt{k+1} + \sqrt{k} \approx \sqrt k + \sqrt k = 2\sqrt k
$$
Ottenendo quindi:
$$
a_k = \frac{1}{k(\sqrt{k + 1} + \sqrt{k})} = \frac{1}{k(2\sqrt k)} = \frac{1}{2k^{\frac{3}{2}}}
$$
Ora confrontiamole con le serie che già conosciamo, questa è una serie armonica generalizzata con $\alpha = 3/2 > 1$, e quindi questa serie converge. Per il criterio di confronto asintotico, anche la serie originale converge.
