---
title: Screenshot Utili
description: Raccolta di screenshot delle formule e definizioni principali del corso, organizzati per argomento (successioni, funzioni, derivate, integrali).
type: resource
---
# Successioni

**Esempi.**

- Per la successione $(a_n)_{n\ge 1} = \left(\frac{1}{n}\right)_{n\ge 1} = \left(1, \frac12, \frac13, \frac14, \frac15, \dots\right)$ gli elementi tendono a $l = 0$ se $n$ diventa sempre più grande.
- Per la successione $(a_n)_{n\in\mathbb{N}} = (n)_{n\in\mathbb{N}} = (0, 1, 2, 3, 4, 5, \dots)$ gli elementi superano qualsiasi valore fissato se $n$ diventa sempre più grande.
- Per la successione $(a_n)_{n\in\mathbb{N}} = \left((-1)^n\right)_{n\in\mathbb{N}} = (+1, -1, +1, -1, +1, -1, \dots)$ gli elementi oscillano tra i valori $-1$ e $1$.

Nelle seguenti definizioni formalizziamo questi tre tipi di comportamenti per le successioni.

**Definizione 1.2** (*Successione convergente*).

- (i) Si dice che la successione $(a_n)_{n\in\mathbb{N}}$ è *convergente al limite* $l\in\mathbb{R}$ se per ogni $\varepsilon>0$ esiste $n_0\in\mathbb{N}$ tale che

  $$
  \lvert l - a_n \rvert < \varepsilon \quad \text{per ogni } n \ge n_0.
  $$

  In questo caso si scrive

  $$
  \boxed{\lim_{n\to+\infty} a_n = l} \qquad \text{oppure} \qquad \boxed{a_n \to l \ \text{per } n\to+\infty}
  $$

- (ii) Se $\displaystyle\lim_{n\to+\infty} a_n = 0$, allora $(a_n)_{n\in\mathbb{N}}$ si chiama successione *infinitesima*.

**Osservazione.** Per una successione convergente $(a_n)_{n\in\mathbb{N}}$ vale che $a_n \to l$ per $n\to+\infty \iff l - a_n \to 0$ per $n\to+\infty$.

**Definizione 1.4** (*Successione divergente*). Si dice che la successione $(a_n)_{n\in\mathbb{N}}$

- *diverge a $+\infty$*, se per ogni $M>0$ esiste $n_0\in\mathbb{N}$ tale che $a_n > M$ per ogni $n\ge n_0$ e in questo caso si scrive

  $$
  \lim_{n\to+\infty} a_n = +\infty \qquad \text{oppure} \qquad a_n \to +\infty \ \text{per } n\to+\infty;
  $$

- *diverge a $-\infty$*, se per ogni $M<0$ esiste $n_0\in\mathbb{N}$ tale che $a_n < M$ per ogni $n\ge n_0$ e in questo caso si scrive

  $$
  \lim_{n\to+\infty} a_n = -\infty \qquad \text{oppure} \qquad a_n \to -\infty \ \text{per } n\to+\infty.
  $$

- *diverge* se diverge a $+\infty$ oppure $-\infty$.

Per esempio $\displaystyle\lim_{n\to+\infty} n = +\infty$.

Se $(a_n)_{n\in\mathbb{N}}$ ammette limite finito (cioè se converge) oppure infinito (cioè se diverge), allora si dice *regolare*. Rimane quindi la classe delle successioni che non ammettono limite.

**Definizione 1.5** (*Successione irregolare*). Se la successione $(a_n)_{n\in\mathbb{N}}$ non è convergente né divergente allora si dice *irregolare* (oppure *oscillante*).

Per esempio la successione $\left((-1)^n\right)_{n\in\mathbb{N}}$ è irregolare. Più in generale consideriamo il seguente

**Esempio** (*Successione geometrica*). Per $q\in\mathbb{R}$ fisso definiamo $a_n := q^n$. Allora la *successione geometrica* $(a_n)_{n\in\mathbb{N}}$

- (i) diverge a $+\infty$ se $q>1$,
- (ii) è costante (cioè $a_n = a_0$ per ogni $n\in\mathbb{N}$) se $q=1$ e quindi $\displaystyle\lim_{n\to+\infty} a_n = a_0 = 1$,
- (iii) è infinitesima se $\lvert q\rvert<1$,
- (iv) è irregolare se $q\le-1$.

**Esempio** (*Successione armonica*). Per $\alpha\in\mathbb{R}$ fisso definiamo $a_n := n^\alpha$. Allora la *successione armonica* $(a_n)_{n\ge 1}$

- (i) diverge a $+\infty$ se $\alpha>0$,
- (ii) è costante (cioè $a_n = a_0$ per ogni $n\in\mathbb{N}$) se $\alpha=0$ e quindi $\displaystyle\lim_{n\to+\infty} a_n = a_1 = 1$,
- (iii) è infinitesima se $\alpha<0$,

Il prossimo risultato dà una condizione necessaria per la convergenza di una successione.

**Proposizione 1.6.** Una successione convergente $(a_n)_{n\in\mathbb{N}}$ è *limitata*, cioè esistono $m, M\in\mathbb{R}$ tale che

$$
m \le a_n \le M \quad \text{per ogni } n\in\mathbb{N}.
$$

**Proposizione 1.7** (*Regole per il calcolo dei limiti*). Siano $(a_n)_{n\in\mathbb{N}}$, $(b_n)_{n\in\mathbb{N}}$ due successioni convergenti con $a_n\to l_1$ e $b_n\to l_2$ per $n\to+\infty$. Allora per $n\to+\infty$

- (i) $a_n \pm b_n \to l_1 \pm l_2$;
- (ii) $a_n \cdot b_n \to l_1 \cdot l_2$;
- (iii) $\dfrac{a_n}{b_n} \to \dfrac{l_1}{l_2}$ se $l_2\ne 0$;
- (iv) $(a_n)^{b_n} \to {l_1}^{l_2}$ se $l_1>0$;
- (v) $\lvert a_n\rvert \to \lvert l_1\rvert$.

**Esempi.**

- Calcolare, se esiste, il seguente limite

  $$
  \lim_{n\to+\infty} \frac{7n^2 - 2n + 3}{-3n^2 + n - 1}.
  $$

  L'espressione rappresenta il rapporto di due successioni ma scritto così non si può ancora utilizzare la regola per $\frac{a_n}{b_n}$ poiché sia il numeratore sia il denominatore divergono. Comunque basta mettere in evidenza nel numeratore e nel denominatore la quantità che cresce più rapidamente, in questo caso $n^2$. Utilizzando le regole per somma, differenza, prodotto e rapporto otteniamo

  $$
  \frac{7n^2 - 2n + 3}{-3n^2 + n - 1} = \frac{n^2 \cdot \overbrace{\left(7 - \dfrac{2}{n} + \dfrac{3}{n^2}\right)}^{\to\, 7 - 2\cdot 0 + 3\cdot 0^2 \,=\, \mathbf{7}}}{n^2 \cdot \underbrace{\left(-3 + \dfrac{1}{n} - \dfrac{1}{n^2}\right)}_{\to\, -3 + 0 - 0^2 \,=\, \mathbf{-3}}} \to -\frac{7}{3}
  $$

- Calcolare, se esiste, il limite

  $$
  \lim_{n\to+\infty} \sqrt{n+3} - \sqrt{n}.
  $$

  Non si può applicare direttamente la regola per le differenze poiché i due termini *divergono* entrambi. Per procedere si sfrutta la formula $(a-b)\cdot(a+b) = a^2 - b^2$:

  $$
  \begin{aligned}
  \sqrt{n+3} - \sqrt{n} &= \left(\sqrt{n+3} - \sqrt{n}\right) \cdot \frac{\sqrt{n+3} + \sqrt{n}}{\sqrt{n+3} + \sqrt{n}} \\
  &= \frac{n + 3 - n}{\sqrt{n+3} + \sqrt{n}} = \frac{3}{\sqrt{n+3} + \sqrt{n}} \to \frac{3}{+\infty} = 0
  \end{aligned}
  $$

**Osservazione.** Le regole per il calcolo dei limiti si possono estendere alle successioni regolari se al limite si ottiene una delle seguenti *forme determinate*: Per ogni $a\in\mathbb{R}$ definiamo

$$
\begin{array}{lll}
\pm\infty + a := \pm\infty & \qquad \pm\infty \cdot a := \begin{cases} \pm\infty & \text{se } a>0 \\ \mp\infty & \text{se } a<0 \end{cases} & \qquad \dfrac{a}{\pm\infty} := 0
\end{array}
$$

$$
(\pm\infty) + (\pm\infty) := \pm\infty \qquad (\pm\infty)\cdot(\pm\infty) := +\infty \qquad (\pm\infty)\cdot(\mp\infty) := -\infty
$$

$$
\begin{array}{lll}
q^{+\infty} := \begin{cases} +\infty & \text{se } q>1 \\ 0 & \text{se } 0<q<1 \end{cases} & \quad q^{-\infty} := \begin{cases} 0 & \text{se } q>1 \\ +\infty & \text{se } 0<q<1 \end{cases} & \quad q^0 := 1 \text{ se } q>0
\end{array}
$$

Per esempio, se $a_n\to-3$ e $b_n\to+\infty$ allora $a_n\cdot b_n \to -3\cdot(+\infty) = -\infty$ oppure $\frac{a_n}{b_n}\to\frac{-3}{+\infty} = 0$.

**Osservazione.** La forma determinata $\frac{a}{\pm\infty} = 0$ si può generalizzare: Sia $(a_n)_{n\in\mathbb{N}}$ limitata, cioè esistono $m, M\in\mathbb{R}$ tale che $m\le a_n\le M$ per ogni $n\in\mathbb{N}$. Allora $\frac{a_n}{b_n}\to 0$ per ogni successione divergente $(b_n)_{n\in\mathbb{N}}$ e $a_n\cdot c_n\to 0$ per ogni successione infinitesima $(c_n)_{n\in\mathbb{N}}$. Quindi possiamo definire altre 2 forme determinate

$$
\frac{\text{“limitata”}}{\pm\infty} = 0 \qquad\text{e}\qquad \text{“limitata”}\cdot 0 = 0.
$$

Esempi concreti sono dati da

$$
\frac{\sin(n)}{\sqrt{n}} \to 0 \qquad\text{e}\qquad \cos(n^2)\cdot\left(\frac13\right)^n \to 0.
$$

in quanto $-1\le\sin(x),\cos(x)\le 1$ per ogni $x\in\mathbb{R}$, $\sqrt{n}\to+\infty$ e $\left(\frac13\right)^n\to 0$ per $n\to+\infty$.

**Osservazione.** Con le forme determinate abbiamo esteso le operazioni algebriche in alcuni casi per gli elementi dei *numeri reali estesi*

$$
\overline{\mathbb{R}} := \mathbb{R}\cup\{-\infty,+\infty\}.
$$

Non si possono però definire tutte le operazioni tra elementi in $\overline{\mathbb{R}}$, per esempio le seguenti operazioni rappresentano *forme indeterminate*:

$$
\begin{array}{lll}
(\pm\infty) - (\pm\infty) & \qquad\qquad 0\cdot(\pm\infty) & \qquad\qquad \dfrac{0}{0} \\[1.4em]
\dfrac{\pm\infty}{\pm\infty} & \qquad\qquad \dfrac{a}{0} \text{ per ogni } a\in\mathbb{R} & \qquad\qquad 1^{\pm\infty} \\[1.4em]
(\pm\infty)^0 & \qquad\qquad 0^0 &
\end{array}
$$

**Esempi.**

- Vogliamo studiare la convergenza della successione $(c_n)_{n\in\mathbb{N}}$ con

  $$
  c_n := \left(\frac{1}{3 + \cos(n^2)}\right)^n.
  $$

  Allora,

  $$
  \begin{aligned}
  -1 \le \cos(n^2) \le 1 \quad&\Rightarrow\quad 2 = 3 - 1 \le 3 + \cos(n^2) \le 3 + 1 = 4 \\
  &\Rightarrow\quad 2^n \le \left(3 + \cos(n^2)\right)^n \le 4^n
  \end{aligned}
  $$

  per ogni $n\in\mathbb{N}$. Quindi segue per gli inversi

  $$
  \Rightarrow\quad \underbrace{\left(\frac{1}{4}\right)^n}_{=:\,a_n\,\to\,0} \le \left(\frac{1}{3 + \cos(n^2)}\right)^n \le \underbrace{\left(\frac{1}{2}\right)^n}_{=:\,b_n\,\to\,0} \qquad \text{per } n\to+\infty
  $$

  e di conseguenza $\displaystyle\lim_{n\to+\infty} c_n = 0$.

- Verifichiamo che

  $$
  \lim_{n\to+\infty} \sqrt[n]{a} = 1 \qquad \text{per ogni } a>0.
  $$

  Consideriamo prima il caso $a>1$ e poniamo $d_n := \sqrt[n]{a} - 1 > 0$ cioè $\sqrt[n]{a} = 1 + d_n$ per ogni $n\in\mathbb{N}$. Per la disuguaglianza di Bernoulli segue

  $$
  \underbrace{(1 + d_n)^n}_{=\,a} \ge 1 + n\cdot d_n \quad\Rightarrow\quad \underbrace{\frac{a-1}{n}}_{\to\,0} \ge d_n \ge \underbrace{0}_{\to\,0} \qquad \text{per } n\to+\infty.
  $$

  Di conseguenza $d_n\to 0$ e quindi $\sqrt[n]{a} = 1 + d_n \to 1 + 0 = 1$ per $n\to+\infty$. Se $0<a<1$ poniamo $\tilde a := \frac{1}{a} > 1$. Da sopra segue quindi

  $$
  \sqrt[n]{\tilde a} \to 1 \quad\Rightarrow\quad \sqrt[n]{a} = \frac{1}{\sqrt[n]{\tilde a}} \to \frac{1}{1} = 1 \qquad \text{per } n\to+\infty.
  $$

**Osservazione.** Il concetto di limite per una successione $(a_n)_{n\in\mathbb{N}}$ è collegato al comportamento degli elementi $a_n$ per $n$ sempre più grande. Quindi i primi elementi non influiscono sulla esistenza oppure sul valore del limite. Nel seguito diremo che una proprietà per una successione vale *definitivamente*, se esiste un $n_0$ tale che tale proprietà vale per $n>n_0$.

Per esempio la successione $(a_n)_{n\in\mathbb{N}} = (n-1000)_{n\in\mathbb{N}}$ è positiva definitivamente poiché $a_n>0$ per ogni $n>1000=:n_0$. Invece $\left((-1)^n\right)_{n\in\mathbb{N}}$ *non* è positiva definitivamente.

**Osservazioni.**

- Dal teorema del confronto segue che per una successione $(a_n)_{n\in\mathbb{N}}$ convergente al limite $l$ e con $a_n\in[\alpha,\beta]$ definitivamente vale $l\in[\alpha,\beta]$. In particolare segue il *Teorema della permanenza del segno:* Se $(a_n)_{n\in\mathbb{N}}$ è positiva definitivamente e $\displaystyle\lim_{n\to+\infty} a_n = l$ allora $l\ge 0$.

- Non vale l'osservazione precedente per intervalli aperti oppure disuguaglianze strette. Per esempio, se $a_n>0$ per ogni $n\in\mathbb{N}$ e $\displaystyle\lim_{n\to+\infty} a_n = l$ allora $\textcolor{red}{\underline{\text{NON}}}$ segue $l>0$!! Come controesempio basta considerare

**Definizione 1.8.** Sia $(a_n)_{n\in\mathbb{N}}$ una successione infinitesima, cioè $a_n\to 0$ per $n\to+\infty$. Se

- $a_n\ge 0$ definitivamente, allora scriviamo $a_n\to 0^+$ (oppure $\displaystyle\lim_{n\to+\infty} a_n = 0^+$),
- $a_n\le 0$ definitivamente, allora scriviamo $a_n\to 0^-$ (oppure $\displaystyle\lim_{n\to+\infty} a_n = 0^-$).

Così otteniamo altre due forme determinate

$$
\frac{a}{0^\pm} := \pm\infty \quad \text{se } a>0, \qquad\qquad \frac{a}{0^\pm} := \mp\infty \quad \text{se } a<0.
$$

Inoltre abbiamo

$$
\frac{a}{\pm\infty} := 0^\pm \quad \text{se } a>0, \qquad\qquad \frac{a}{\pm\infty} := 0^\mp \quad \text{se } a<0.
$$

Con queste definizioni le regole per il calcolo dei limiti restano valide. Per esempio

- $a_n\to 2$, $b_n\to 0^- \Rightarrow \dfrac{a_n}{b_n}\to\dfrac{2}{0^-} = -\infty$,
- $a_n\to -1$, $b_n\to+\infty \Rightarrow \dfrac{a_n}{b_n}\to\dfrac{-1}{+\infty} = 0^-$.

**Problema.** Per studiare la convergenza di una successione abbiamo finora avuto bisogno di avere almeno un *candidato* per il suo limite.

Per esempio, come vedremo tra poco la successione $(a_n)_{n\in\mathbb{N}} = \left(\left(1+\frac{1}{n}\right)^n\right)_{n\in\mathbb{N}}$ converge ma ciò non si può dimostrare usando la definizione oppure le regole per il calcolo dei limiti.

Per risolvere questo problema cerchiamo quindi criteri che implicano la convergenza senza fare riferimento al limite. Prima ci serve una

**Definizione 1.9.** Una successione $(a_n)_{n\in\mathbb{N}}$ si dice

- *crescente*, se $a_{n+1}\ge a_n$ per ogni $n\in\mathbb{N}$,
- *decrescente*, se $a_{n+1}\le a_n$ per ogni $n\in\mathbb{N}$,
- *monotona*, se è crescente oppure decrescente.

Il seguente risultato è molto importante.

**Teorema 1.10** (*Regolarità delle successioni monotone*). Se $(a_n)_{n\in\mathbb{N}}$ è monotona, allora è regolare, cioè ammette limite. Questo limite è finito, cioè $(a_n)_{n\in\mathbb{N}}$ converge, se e solo se $(a_n)_{n\in\mathbb{N}}$ è limitata. Inoltre vale

$$
\lim_{n\to+\infty} a_n = \begin{cases} \sup\{a_n : n\in\mathbb{N}\} & \text{se } (a_n)_{n\in\mathbb{N}} \text{ è crescente,} \\ \inf\{a_n : n\in\mathbb{N}\} & \text{se } (a_n)_{n\in\mathbb{N}} \text{ è decrescente.} \end{cases}
$$

In particolare, ogni successione limitata e monotona è convergente.

Visto che per $n$ crescente si accumulano sempre più interessi composti, la successione $(a_n)_{n\in\mathbb{N}} = \left(\left(1+\frac{1}{n}\right)^n\right)_{n\in\mathbb{N}}$ è crescente. Quindi $(a_n)_{n\in\mathbb{N}}$ è

- crescente, e
- limitata in quanto $a_n\in[2,3]$ per ogni $n\in\mathbb{N}$ (usare la formula del binomio di Newton).

Quindi per il teorema precedente sulla convergenza delle successioni monotone $(a_n)_{n\in\mathbb{N}}$ converge e si pone

$$
\boxed{e := \lim_{n\to+\infty}\left(1+\frac{1}{n}\right)^n} = \textit{numero di Nepero.}
$$

**Definizione 1.11.** Se per due successioni si ha $\displaystyle\lim_{n\to+\infty}\frac{a_n}{b_n} = 1$, allora si dice che $(a_n)_{n\in\mathbb{N}}$ e $(b_n)_{n\in\mathbb{N}}$ sono *asintotiche* e si scrive $a_n\sim b_n$ per $n\to+\infty$.

**Osservazioni.**

- Se $a_n\sim b_n$ per $n\to+\infty$, allora $(a_n)_{n\in\mathbb{N}}$ e $(b_n)_{n\in\mathbb{N}}$ hanno lo stesso comportamento asintotico, cioè
  - $(a_n)_{n\in\mathbb{N}}$ converge $\iff$ $(b_n)_{n\in\mathbb{N}}$ converge e in tal caso $\displaystyle\lim_{n\to+\infty} a_n = \lim_{n\to+\infty} b_n$;
  - $(a_n)_{n\in\mathbb{N}}$ diverge $\iff$ $(b_n)_{n\in\mathbb{N}}$ diverge e in tal caso $\displaystyle\lim_{n\to+\infty} a_n = \lim_{n\to+\infty} b_n$;
  - $(a_n)_{n\in\mathbb{N}}$ è irregolare $\iff$ $(b_n)_{n\in\mathbb{N}}$ è irregolare.
- "$\sim$" è una *relazione di equivalenza* sull'insieme delle successioni, cioè
  - $a_n\sim a_n$ per $n\to+\infty$ (riflessività),
  - $a_n\sim b_n \Rightarrow b_n\sim a_n$ per $n\to+\infty$ (simmetria),
  - $a_n\sim b_n$ e $b_n\sim c_n \Rightarrow a_n\sim c_n$ per $n\to+\infty$ (transitività).

Il seguente principio è spesso utile per semplificare il calcolo dei limiti.

**Teorema 1.12** (*Principio di Sostituzione*). Se $a_n\sim a_n'$, $b_n\sim b_n'$ e $c_n\sim c_n'$ per $n\to+\infty$, allora

$$
\frac{a_n\cdot b_n}{c_n} \sim \frac{a_n'\cdot b_n'}{c_n'} \qquad \text{per } n\to+\infty.
$$

In particolare $a_n\cdot b_n\sim a_n'\cdot b_n'$ e $\dfrac{a_n}{b_n}\sim\dfrac{a_n'}{b_n'}$ per $n\to+\infty$.

Quindi in *prodotti* e *rapporti* si possono sostituire successioni con altre successioni asintotiche senza cambiare il comportamento asintotico, in particolare senza cambiare il limite se esiste.

**Esempi.**

- $2n^3 - 5n^2 - 3n + 11 \sim 2n^3$ per $n\to+\infty$ poiché

  $$
  \frac{2n^3 - 5n^2 - 3n + 11}{2n^3} = 1 - \frac{5}{2n} - \frac{3}{2n^2} + \frac{11}{2n^3} \to 1 - 0 - 0 + 0 = 1
  $$

  per $n\to+\infty$.

- $n+5\sim n$ poiché $\dfrac{n+5}{n} = 1 + \dfrac{5}{n} \to 1$ per $n\to+\infty$. Quindi per il principio di sostituzione segue che $(n+5)^3\sim n^3$ e

  $$
  \frac{2n^3 - 5n^2 - 3n + 11}{(n+5)^3} \sim \frac{2n^3}{n^3} = 2 \to 2 = \lim_{n\to+\infty} \frac{2n^3 - 5n^2 - 3n + 11}{(n+5)^3}.
  $$

è doveroso fare la seguente

**Osservazione.** Il principio di sostituzione $\boxed{\textcolor{red}{\textbf{\textit{!!! NON !!!}}}}$ vale per somme, differenze o potenze, cioè se $a_n\sim a_n'$ e $b_n\sim b_n'$ allora

- $\textcolor{red}{\not\Rightarrow}\ a_n + b_n \sim a_n' + b_n'$ per $n\to+\infty$,
- $\textcolor{red}{\not\Rightarrow}\ a_n - b_n \sim a_n' - b_n'$ per $n\to+\infty$,
- $\textcolor{red}{\not\Rightarrow}\ (a_n)^{b_n} \sim (a_n')^{b_n'}$ per $n\to+\infty$,

**Controesempi.**

- (per la somma) $a_n := n+1 \sim n =: a_n'$ e $b_n := -n \sim -n =: b_n'$ ma $a_n + b_n = (n+1) - n = 1$ e $a_n' + b_n' = n - n = 0$ non sono asintotiche in quanto ammettono limiti diversi.
- (per la potenza) $a_n := 1 + \frac{1}{n} \sim 1 =: a_n'$ e $b_n := n \sim n =: b_n'$ ma $(a_n)^{b_n} = \left(1 + \frac{1}{n}\right)^n$ e $(a_n')^{b_n'} = 1^n = 1$ non sono asintotiche sempre poiché ammettono limiti diversi.

Concludiamo questo capitolo con un criterio che è utile per studiare limiti che coinvolgono radici $n$-esime.

**Proposizione 1.13.** Se $(a_n)_{n\in\mathbb{N}}$ è una successione tale che $a_n>0$ definitivamente e $\displaystyle\lim_{n\to+\infty}\frac{a_{n+1}}{a_n} =: q$ esiste, allora segue che anche

$$
\lim_{n\to+\infty} \sqrt[n]{a_n} = q.
$$

**Esempio.** Sia $a_n = n$. Allora $\dfrac{a_{n+1}}{a_n} = \dfrac{n+1}{n} = 1 + \dfrac{1}{n} \to 1$ e quindi

$$
\lim_{n\to+\infty} \sqrt[n]{n} = 1.
$$

**Definizione 2.1.** Diremo che la *serie numerica* $\displaystyle\sum_{k=0}^{+\infty} a_k$

- *converge* alla *somma* $s\in\mathbb{R}$, se $\displaystyle\lim_{n\to+\infty} s_n = s$ e in questo caso scriveremo $\displaystyle\sum_{k=0}^{+\infty} a_k = s$;
- *diverge* a $\pm\infty$, se $\displaystyle\lim_{n\to+\infty} s_n = \pm\infty$ e in questo caso scriveremo $\displaystyle\sum_{k=0}^{+\infty} a_k = \pm\infty$;
- è *irregolare* (oppure *oscillante*), se $(s_n)_{n\in\mathbb{N}}$ è irregolare.

Quindi studiare una serie $\displaystyle\sum_{k=0}^{+\infty} a_k$ significa studiare la successione delle somme parziali $(s_n)_{n\in\mathbb{N}}$.

**Esempi.**

- *Serie geometrica.* Se $q\in\mathbb{R}$ allora

  $$
  \boxed{\sum_{k=0}^{+\infty} q^k = 1 + q + q^2 + q^3 + q^4 + \dots = \begin{cases} \dfrac{1}{1-q} & \text{se } \lvert q\rvert<1, \\ +\infty & \text{se } q\ge 1, \\ \text{è irregolare} & \text{se } q\le -1. \end{cases}}
  $$

  **Dimostrazione.** 1° caso $q=1$: Se $q=1$ allora $q^k=1$ per ogni $k\in\mathbb{N}$ e quindi

  $$
  s_n = 1^0 + 1^1 + 1^2 + \dots + 1^n = n+1 \to \infty.
  $$

  2° caso $q\ne 1$: In questo caso le somme parziali valgono

  $$
  s_n = q^0 + q^1 + q^2 + \dots + q^n = \frac{1-q^{n+1}}{1-q} = \frac{1}{1-q} - \frac{q}{1-q}\cdot q^n.
  $$

  La tesi ora segue dal comportamento della successione geometrica.

- *Serie armonica.*

  $$
  \boxed{\sum_{k=1}^{+\infty} \frac{1}{k} = 1 + \frac12 + \frac13 + \frac14 + \frac15 + \dots = +\infty.}
  $$

  **Idea della dimostrazione.**

  $$
  \begin{aligned}
  \sum_{k=1}^{+\infty} \frac{1}{k} &= 1 + \frac12 + \underbrace{\left(\frac13 + \frac14\right)}_{\ge\, 2\cdot\frac14 = \frac12} + \underbrace{\left(\frac15 + \frac16 + \frac17 + \frac18\right)}_{\ge\, 4\cdot\frac18 = \frac12} + \\
  &\quad + \underbrace{\left(\frac19 + \frac1{10} + \dots + \frac1{16}\right)}_{\ge\, 8\cdot\frac1{16} = \frac12} + \dots \\
  &\ge 1 + \frac12 + \frac12 + \frac12 + \frac12 + \dots = +\infty.
  \end{aligned}
  $$

- *Serie di Mengoli.*

  $$
  \sum_{k=1}^{+\infty} \frac{1}{k\cdot(k+1)} = \frac{1}{1\cdot 2} + \frac{1}{2\cdot 3} + \frac{1}{3\cdot 4} + \frac{1}{4\cdot 5} + \dots = 1.
  $$

**Proposizione 2.2** (*Condizione necessaria*). Se $\displaystyle\sum_{k=0}^{+\infty} a_k$ converge, allora $\displaystyle\lim_{k\to+\infty} a_k = 0$.

**Dimostrazione.** Sia $s := \displaystyle\sum_{k=0}^{+\infty} a_k$, cioè $s = \displaystyle\lim_{n\to+\infty} s_n$. Allora anche $\displaystyle\lim_{n\to+\infty} s_{n-1} = s$ e quindi $\displaystyle\lim_{n\to+\infty} (s_n - s_{n-1}) = s - s = 0$. Così risulta

$$
\begin{aligned}
s_n - s_{n-1} &= (a_0 + a_1 + a_2 + \dots + a_{n-1} + a_n) - (a_0 + a_1 + a_2 + \dots + a_{n-1}) \\
&= a_n \to 0 \quad \text{per } n\to+\infty. \qquad \square
\end{aligned}
$$

Evidentemente questa condizione è soltanto necessaria ma $\textcolor{red}{\text{non}}$ sufficiente per la convergenza come si vede dalla serie armonica. Come vedremo nel seguente paragrafo l'ordine in $\mathbb{R}$ ci aiuta a risolvere (parzialmente) il problema posto sopra.

**Serie a Termini Positivi**

Se $a_k\ge 0$ per ogni $k\in\mathbb{N}$, allora $s_{n+1} = s_n + a_{n+1} \ge s_n$ cioè $(s_n)_{n\in\mathbb{N}}$ è crescente. Quindi possiamo usare il teorema sulla regolarità delle successioni monotone per studiare il comportamento della serie $\displaystyle\sum_{k=0}^{+\infty} a_k$. In questa maniera otteniamo

**Teorema 2.3.** Se $a_k\ge 0$ per ogni $k\in\mathbb{N}$ (basta anche $a_k\ge 0$ definitivamente), allora

$$
\text{la serie } \sum_{k=0}^{+\infty} a_k \begin{cases} \text{converge} & \text{se e solo se } (s_n)_{n\in\mathbb{N}} \text{ è limitata,} \\ \text{diverge a } +\infty & \text{se e solo se } (s_n)_{n\in\mathbb{N}} \text{ non è limitata.} \end{cases}
$$

Quindi per una serie a termini positivi basta verificare la limitatezza della successione delle somme parziali per ottenere convergenza. Inoltre risulta che una serie a termini positivi non può essere irregolare.

$$
\sum_{k=0}^{+\infty} \frac{1}{k!} \quad = \quad \textit{serie esponenziale} \quad \textcolor{red}{= e}
$$

**Proposizione 2.4** (*Criterio del confronto*). Sia $0\le a_k\le b_k$ definitivamente. Allora

$$
\boxed{\underbrace{\sum_{k=0}^{+\infty} b_k}_{\text{maggiorante}} \text{ converge} \quad\Rightarrow\quad \underbrace{\sum_{k=0}^{+\infty} a_k}_{\text{minorante}} \text{ converge}}
$$

oppure

$$
\boxed{\underbrace{\sum_{k=0}^{+\infty} a_k}_{\text{minorante}} \text{ diverge} \quad\Rightarrow\quad \underbrace{\sum_{k=0}^{+\infty} b_k}_{\text{maggiorante}} \text{ diverge}}
$$

**Esempio.** Consideriamo la serie $\displaystyle\sum_{k=1}^{+\infty} \tfrac{1}{\sqrt{k}}$. Visto che $\dfrac{1}{\sqrt{k}} \ge \dfrac{1}{k}$ per ogni $k\ge 1$ segue dalla divergenza della serie armonica $\displaystyle\sum_{k=1}^{+\infty} \tfrac{1}{k}$ la divergenza di $\displaystyle\sum_{k=1}^{+\infty} \tfrac{1}{\sqrt{k}}$.

**Proposizione 2.5** (*Criterio del confronto, versione asintotica*). Sia $a_k\ge 0$ e $b_k>0$ definitivamente tali che converge

$$
\lim_{k\to+\infty} \frac{a_k}{b_k} =: l\in\mathbb{R}.
$$

Allora

$$
\sum_{k=0}^{+\infty} b_k \text{ converge} \quad\Rightarrow\quad \sum_{k=0}^{+\infty} a_k \text{ converge}
$$

oppure

$$
\sum_{k=0}^{+\infty} a_k \text{ diverge} \quad\Rightarrow\quad \sum_{k=0}^{+\infty} b_k \text{ diverge}
$$

Se inoltre $l\ne 0$ (in particolare se $a_k\sim b_k$ per $k\to+\infty$), allora valgono anche le implicazioni opposte, cioè

$$
\sum_{k=0}^{+\infty} a_k \text{ converge} \quad\Longleftrightarrow\quad \sum_{k=0}^{+\infty} b_k \text{ converge}
$$

oppure

$$
\sum_{k=0}^{+\infty} a_k \text{ diverge} \quad\Longleftrightarrow\quad \sum_{k=0}^{+\infty} b_k \text{ diverge}
$$

**Esempio.** Consideriamo la serie $\displaystyle\sum_{k=1}^{+\infty} \tfrac{1}{k^2}$. Per studiare la convergenza confrontiamola con la serie di Mengoli $\displaystyle\sum_{k=1}^{+\infty} \tfrac{1}{k\cdot(k+1)}$. Allora

$$
\frac{\dfrac{1}{k^2}}{\dfrac{1}{k\cdot(k+1)}} = \frac{k\cdot(k+1)}{k^2} = 1 + \frac{1}{k} \to 1 = l \ne 0 \qquad \text{per } k\to+\infty.
$$

Quindi, visto che la serie di Mengoli converge, converge anche la serie $\displaystyle\sum_{k=1}^{+\infty} \tfrac{1}{k^2}$.

**Proposizione 2.6** (*Criterio della Radice*). Sia $a_k\ge 0$ definitivamente. Se esiste

$$
q := \lim_{k\to+\infty} \sqrt[k]{a_k},
$$

allora la serie $\displaystyle\sum_{k=0}^{+\infty} a_k$

- converge se $q<1$,
- diverge se $q>1$,
- non si può concludere nulla sul comportamento della serie se $q=1$.

**Esempio.** Sia $a_k := \frac{a^k}{k^k}$ per $a>0$ fisso. Allora

$$
\sqrt[k]{a_k} = \frac{a}{k} \to 0 = q < 1 \qquad \text{per } k\to+\infty
$$

e quindi la serie $\displaystyle\sum_{k=0}^{+\infty} a_k$ converge.

**Proposizione 2.7** (*Criterio del Rapporto*). Sia $a_k>0$ definitivamente. Se esiste

$$
q := \lim_{k\to+\infty} \frac{a_{k+1}}{a_k},
$$

allora la serie $\displaystyle\sum_{k=0}^{+\infty} a_k$

- converge se $q<1$,
- diverge se $q>1$,
- non si può concludere nulla sul comportamento della serie se $q=1$.

**Esempio** (*Serie Esponenziale*). Sia $a_k := \frac{a^k}{k!}$ per $a>0$ fisso. Allora

$$
\frac{a_{k+1}}{a_k} = \frac{\dfrac{a^{k+1}}{(k+1)!}}{\dfrac{a^k}{k!}} = \frac{a^{k+1}\cdot k!}{\underbrace{(k+1)!}_{=\,k!\cdot(k+1)}\cdot a^k} = \frac{a}{k+1} \to 0 = q < 1 \qquad \text{per } k\to+\infty
$$

e quindi la serie $\displaystyle\sum_{k=0}^{+\infty} \frac{a^k}{k!}$ converge.

**Esempio** (*Serie Armonica Generalizzata*). Sia $a_k := \frac{1}{k^\alpha}$ per $\alpha\in\mathbb{R}$ fisso. Allora sappiamo per il criterio del confronto che la serie $\displaystyle\sum_{k=0}^{+\infty} a_k$

- diverge per $\alpha=1 \Rightarrow$ diverge per ogni $\alpha\le 1$,
- converge per $\alpha=2 \Rightarrow$ converge per ogni $\alpha\ge 2$

dove le implicazioni seguono dal criterio del confronto: Se

$$
\begin{array}{llllll}
\alpha\le 1 & \Rightarrow & k\ge k^\alpha & \Rightarrow & \frac1k \le \frac{1}{k^\alpha} & \text{cioè } \displaystyle\sum_{k=1}^{+\infty}\frac1k \text{ è un minorante divergente,} \\[1.6em]
\alpha\ge 2 & \Rightarrow & k^2\le k^\alpha & \Rightarrow & \frac{1}{k^2} \ge \frac{1}{k^\alpha} & \text{cioè } \displaystyle\sum_{k=1}^{+\infty}\frac{1}{k^2} \text{ è un maggiorante convergente}
\end{array}
$$

della serie armonica generalizzata $\displaystyle\sum_{k=1}^{+\infty} \frac{1}{k^\alpha}$.

Mancano però i parametri $\alpha\in(1,2)$. Quindi si pone la domanda come si comporta la serie armonica generalizzata per questi parametri. Come vedremo in seguito vale la seguente

**Proposizione 2.8.**

$$
\boxed{\sum_{k=1}^{+\infty} \frac{1}{k^\alpha} \text{ converge} \quad\Longleftrightarrow\quad \alpha>1}
$$

Per ottenere una idea tracciamo un grafico simile a quello precedente:

```plot
x: [-1.15, 0.15]
y: [-0.6, 0.37]
width: 430
height: 320
axes: false
alt: "Convergenza della serie di Leibniz: le somme parziali percorrono semicirconferenze alternate sotto e sopra l'asse, di raggio sempre più piccolo (-1, +1/2, -1/3, +1/4, ...), e si avvicinano a un limite compreso tra -1 e 0."
caption: "Convergenza della serie di Leibniz."
items:
  - line: [[-1.15, 0], [0.15, 0]]
    arrow: true
  - line: [[0.000, 0.000], [-0.013, -0.111], [-0.050, -0.217], [-0.109, -0.312], [-0.188, -0.391], [-0.283, -0.450], [-0.389, -0.487], [-0.500, -0.500], [-0.611, -0.487], [-0.717, -0.450], [-0.812, -0.391], [-0.891, -0.312], [-0.950, -0.217], [-0.987, -0.111], [-1.000, 0]]
    arrow: true
  - line: [[-1.000, 0.000], [-0.994, 0.056], [-0.975, 0.108], [-0.945, 0.156], [-0.906, 0.195], [-0.858, 0.225], [-0.806, 0.244], [-0.750, 0.250], [-0.694, 0.244], [-0.642, 0.225], [-0.594, 0.195], [-0.555, 0.156], [-0.525, 0.108], [-0.506, 0.056], [-0.500, 0.000]]
    arrow: true
  - line: [[-0.500, 0.000], [-0.504, -0.037], [-0.517, -0.072], [-0.536, -0.104], [-0.563, -0.130], [-0.594, -0.150], [-0.630, -0.162], [-0.667, -0.167], [-0.704, -0.162], [-0.739, -0.150], [-0.771, -0.130], [-0.797, -0.104], [-0.817, -0.072], [-0.829, -0.037], [-0.833, 0]]
    arrow: true
  - line: [[-0.833, 0.000], [-0.830, 0.028], [-0.821, 0.054], [-0.806, 0.078], [-0.786, 0.098], [-0.763, 0.113], [-0.736, 0.122], [-0.708, 0.125], [-0.681, 0.122], [-0.654, 0.113], [-0.630, 0.098], [-0.611, 0.078], [-0.596, 0.054], [-0.586, 0.028], [-0.583, 0.000]]
    arrow: true
  - line: [[-0.583, 0.000], [-0.586, -0.022], [-0.593, -0.043], [-0.605, -0.062], [-0.621, -0.078], [-0.640, -0.090], [-0.661, -0.097], [-0.683, -0.100], [-0.706, -0.097], [-0.727, -0.090], [-0.746, -0.078], [-0.762, -0.062], [-0.773, -0.043], [-0.781, -0.022], [-0.783, 0]]
    arrow: true
  - line: [[-0.783, 0.000], [-0.781, 0.019], [-0.775, 0.036], [-0.765, 0.052], [-0.752, 0.065], [-0.736, 0.075], [-0.719, 0.081], [-0.700, 0.083], [-0.681, 0.081], [-0.664, 0.075], [-0.648, 0.065], [-0.635, 0.052], [-0.625, 0.036], [-0.619, 0.019], [-0.617, 0.000]]
    arrow: true
  - text: "$0$"
    at: [0, 0.015]
    anchor: n
  - text: "$-1$"
    at: [-1, -0.015]
    anchor: sw
  - text: "$-1+\\frac12$"
    at: [-0.47, 0.015]
    anchor: ne
  - text: "$+\\frac12$"
    at: [-0.75, 0.26]
    anchor: n
  - text: "$+\\frac14$"
    at: [-0.708, 0.135]
    anchor: n
  - text: "$-\\frac13$"
    at: [-0.667, -0.175]
    anchor: s
  - text: "$-1$"
    at: [-0.5, -0.51]
    anchor: s
  - text: "$\\cdots$"
    at: [-0.69, -0.045]
    anchor: c
```

Dalla Figura si può avere l'impressione che la serie converge. Ciò è infatti vero per la

**Proposizione 2.9** (*Criterio di Leibniz*). Se la successione $(a_k)_{k\in\mathbb{N}}$ è

- decrescente, e
- infinitesima

allora la serie $\displaystyle\sum_{k=0}^{+\infty} (-1)^k\cdot a_k =: s\in\mathbb{R}$ converge. Inoltre vale $\lvert s - s_n\rvert \le a_{n+1}$ per ogni $n\in\mathbb{N}$.

```plot
x: [0, 9.8]
y: [-0.55, 2.1]
width: 490
height: 133
axes: false
alt: "Retta reale con i punti s_n, s e s_{n+1} = s_n + a_{n+1} (con n+1 pari): s_n e s_{n+1} sono gli estremi di una graffa di lunghezza a_{n+1}, e s sta in mezzo; la distanza |s - s_n| è minore di a_{n+1}."
items:
  - line: [[0, 0], [9.8, 0]]
    arrow: true
  - text: "$n+1$ pari"
    at: [0.05, 0.7]
    anchor: e
  - line: [[3.56, -0.08], [3.56, 0.08]]
  - line: [[4.8, -0.08], [4.8, 0.08]]
  - line: [[6.7, -0.08], [6.7, 0.08]]
  - line: [[3.56, 0.08], [3.56, 1.3]]
    dash: dotted
    color: muted
  - line: [[6.7, 0.08], [6.7, 1.3]]
    dash: dotted
    color: muted
  - brace: [[6.7, 1.3], [3.56, 1.3]]
    label: $a_{n+1}$
  - brace: [[4.8, 0.45], [3.56, 0.45]]
    color: red
    label: $\lvert s - s_n\rvert$
  - text: "$s_n$"
    at: [3.56, -0.1]
    anchor: s
  - text: "$s$"
    at: [4.8, -0.1]
    anchor: s
  - text: "$s_{n+1}=s_n+a_{n+1}$"
    at: [6.7, -0.1]
    anchor: s
```

```plot
x: [0, 9.8]
y: [-0.55, 2.1]
width: 490
height: 133
axes: false
alt: "Retta reale con i punti s_{n+1} = s_n - a_{n+1}, s e s_n (con n+1 dispari): s_{n+1} e s_n sono gli estremi di una graffa di lunghezza a_{n+1}, e s sta in mezzo; la distanza |s - s_n| è minore di a_{n+1}."
items:
  - line: [[0, 0], [9.8, 0]]
    arrow: true
  - text: "$n+1$ dispari"
    at: [0.05, 0.7]
    anchor: e
  - line: [[4.1, -0.08], [4.1, 0.08]]
  - line: [[5.3, -0.08], [5.3, 0.08]]
  - line: [[7.26, -0.08], [7.26, 0.08]]
  - line: [[4.1, 0.08], [4.1, 1.3]]
    dash: dotted
    color: muted
  - line: [[7.26, 0.08], [7.26, 1.3]]
    dash: dotted
    color: muted
  - brace: [[7.26, 1.3], [4.1, 1.3]]
    label: $a_{n+1}$
  - brace: [[7.26, 0.45], [5.3, 0.45]]
    color: red
    label: $\lvert s - s_n\rvert$
  - text: "$s_n-a_{n+1}=s_{n+1}$"
    at: [4.2, -0.1]
    anchor: sw
  - text: "$s$"
    at: [5.3, -0.1]
    anchor: s
  - text: "$s_n$"
    at: [7.26, -0.1]
    anchor: s
```

Confrontando la serie di Leibniz $\displaystyle\sum_{k=1}^{+\infty} (-1)^k\cdot\tfrac{1}{k}$ con la serie armonica $\displaystyle\sum_{k=1}^{+\infty} \tfrac{1}{k}$ ricaviamo un'importante

**Osservazione.** Se

$$
\underbrace{\sum_{k=0}^{+\infty} a_k \text{ converge}}_{\textit{convergenza (semplice)}} \quad\not\Rightarrow\quad \underbrace{\sum_{k=0}^{+\infty} \lvert a_k\rvert \text{ converge}}_{\textit{convergenza assoluta}}
$$

Infatti per $a_k = (-1)^k\cdot\frac{1}{k}$ la serie $\displaystyle\sum_{k=1}^{+\infty} a_k$ converge mentre

$$
\sum_{k=1}^{+\infty} \lvert a_k\rvert = \sum_{k=1}^{+\infty} \left\lvert (-1)^k\cdot\frac{1}{k} \right\rvert = \sum_{k=1}^{+\infty} \frac{1}{k} \qquad \text{diverge.}
$$

**Proposizione 2.10.** Se $\displaystyle\sum_{k=0}^{+\infty} \lvert a_k\rvert$ converge, allora converge anche $\displaystyle\sum_{k=0}^{+\infty} a_k$, cioè la convergenza assoluta implica la convergenza semplice.

Questa proposizione è molto utile in quanto la serie $\displaystyle\sum_{k=0}^{+\infty} \lvert a_k\rvert$ è sempre a termini positivi e quindi può essere studiata con i criteri per tale serie. Per esempio, applicando il criterio del rapporto e della radice a $\displaystyle\sum_{k=0}^{+\infty} \lvert a_k\rvert$ otteniamo la seguente

**Proposizione 2.11.** Se

$$
q := \lim_{k\to+\infty} \left\lvert\frac{a_{k+1}}{a_k}\right\rvert < 1 \qquad \text{oppure} \qquad q := \lim_{k\to+\infty} \sqrt[k]{\lvert a_k\rvert} < 1
$$

allora $\displaystyle\sum_{k=0}^{+\infty} a_k$ converge assolutamente e quindi anche semplicemente.

**Esempio** (*Serie Esponenziale*). Sia $a_k := \frac{a^k}{k!}$ per $a\in\mathbb{R}$ fisso. Allora

$$
\left\lvert\frac{a_{k+1}}{a_k}\right\rvert = \frac{\dfrac{\lvert a\rvert^{k+1}}{(k+1)!}}{\dfrac{\lvert a\rvert^k}{k!}} = \frac{\lvert a\rvert}{k+1} \to 0 = q < 1
$$

e quindi la serie $\displaystyle\sum_{k=0}^{+\infty} a_k$ converge.

# Funzioni

**Funzioni Limitate.** Una funzione $f: X \subseteq \mathbb{R} \to \mathbb{R}$ si dice

- *limitata superiormente* se esiste $M \in \mathbb{R}$ tale che $f(x) \le M$ per ogni $x \in X$;
- *limitata inferiormente* se esiste $m \in \mathbb{R}$ tale che $m \le f(x)$ per ogni $x \in X$;
- *limitata* se è superiormente e inferiormente limitata, cioè se esistono $m, M \in \mathbb{R}$ tale che $m \le f(x) \le M$ per ogni $x \in X$.

**Esempi.**

- $f(x) = x^2$, $x \in \mathbb{R}$ è inferiormente ma non superiormente limitata;
- $f(x) = x^3$, $x \in \mathbb{R}$ non è inferiormente né superiormente limitata;
- $f(x) = \sin(x)$, $x \in \mathbb{R}$ è limitata.

**Funzioni Simmetriche.** Sia $X \subseteq \mathbb{R}$ un dominio simmetrico rispetto a $x = 0$ (cioè $x \in X \Rightarrow -x \in X$). Allora $f: X \to \mathbb{R}$ si dice

- *pari*, se $f(-x) = f(x)$ per ogni $x \in X$;
- *dispari*, se $f(-x) = -f(x)$ per ogni $x \in X$.

**Osservazioni.**

- $f$ è pari $\Longleftrightarrow$ il grafico di $f$ è simmetrico rispetto all'asse $y$;
- $f$ è dispari $\Longleftrightarrow$ il grafico di $f$ è simmetrico rispetto all'origine.

```plot
x: [-1.9, 1.9]
y: [-1.15, 1.45]
height: 240
width: 400
xlabel: $x$
alt: Grafico di una funzione pari, simmetrico rispetto all'asse y
caption: Funzione pari
items:
  - fn: f
    through: [[-1.5, 1.25], [-1, -0.92], [0, 0.22], [1, -0.92], [1.5, 1.25]]
  - text: $f$ pari
    at: [0.1, 1.25]
    anchor: e
```

```plot
x: [-1.9, 1.9]
y: [-1.15, 1.45]
height: 240
width: 400
xlabel: $x$
alt: Grafico di una funzione dispari, simmetrico rispetto all'origine
caption: Funzione dispari
items:
  - fn: f
    through: [[-1.7, 1.05], [-0.86, -0.66], [0, 0], [0.76, 0.63], [1.7, -1.03]]
  - text: $f$ dispari
    at: [0.1, 1.25]
    anchor: e
```

- Se $f$ è dispari e $0 \in X$ ($=$ dominio di $f$) allora $f(0) = 0$.
- Valgono le seguenti regole per prodotto e rapporto tra funzioni pari ($=$p) e dispari ($=$d):

| $f_1 \cdot f_2$ opp. $\dfrac{f_1}{f_2}$ | $f_1=$p | $=$d |
| :---: | :---: | :---: |
| $f_2=$p | p | d |
| $=$d | d | p |

Inoltre vale "pari $\pm$ pari $=$ pari" e "dispari $\pm$ dispari $=$ dispari".

**Funzioni Monotone.** Sia $X \subseteq \mathbb{R}$, $x_1, x_2 \in X$ con $x_1 < x_2$. Allora $f: X \to \mathbb{R}$ si dice

- *crescente*, se $f(x_1) \le f(x_2)$;
- *strettamente crescente*, se $f(x_1) < f(x_2)$;
- *decrescente*, se $f(x_1) \ge f(x_2)$;
- *strettamente decrescente*, se $f(x_1) > f(x_2)$.
- *(strettamente) monotona*, se è (strettamente) crescente oppure (strettamente) decrescente.

**Definizione 3.5.** $c \in \overline{\mathbb{R}}$ si dice *punto di accumulazione* dell'insieme $X \subseteq \mathbb{R}$ se esiste una successione $(x_n)_{n\in\mathbb{N}}$ con

- $x_n \in X$ per ogni $n \in \mathbb{N}$,
- $x_n \neq c$ per ogni $n \in \mathbb{N}$,
- $\displaystyle\lim_{n\to+\infty} x_n = c$.

I primi 2 punti si possono brevemente scrivere come $(x_n)_{n\in\mathbb{N}} \subset X \setminus \{c\}$. Quindi $c$ è un punto di accumulazione di $X$ se in $X \setminus \{c\}$ si può avvicinare a piacere al punto $c$.

**Esempi.**

- $c = 3$ $\textcolor{red}{\textit{non}}$ è un punto di accumulazione di $\mathbb{N}$ in quanto non esiste una successione $(x_n)_{n\in\mathbb{N}} \subset \mathbb{N} \setminus \{3\}$ con $\displaystyle\lim_{n\to+\infty} x_n = 3$.
- $c = +\infty$ è infatti l'unico punto di accumulazione di $\mathbb{N}$.
- $c = -1$ $\textcolor{red}{\textit{non}}$ è un punto di accumulazione di $[0, +\infty)$.
- Se $I \subset \mathbb{R}$ è un qualsiasi intervallo con gli estremi $a$ e $b$, allora $c$ è un punto di accumulazione di $I$ $\Longleftrightarrow$ $c \in I \cup \{a, b\} = [a, b]$.

Ora siamo in grado di generalizzare il concetto di limite dalle successioni alle funzioni reali arbitrarie.

**Definizione 3.6** (*Limiti per le Funzioni*). Sia $f: X \subseteq \mathbb{R} \to \mathbb{R}$ una funzione reale e sia $c \in \overline{\mathbb{R}}$ un punto di accumulazione di $X$. Allora diremo che

*$f(x)$ tende a $l \in \overline{\mathbb{R}}$ per $x$ tendente a $c$*

se per ogni successione $(x_n)_{n\in\mathbb{N}} \subset X \setminus \{c\}$ con $\displaystyle\lim_{n\to+\infty} x_n = c$ segue che $\displaystyle\lim_{n\to+\infty} f(x_n) = l$. In questo caso scriviamo

$$
\boxed{\lim_{x\to c} f(x) = l} \qquad \text{oppure} \qquad \boxed{f(x) \to l \text{ per } x \to c}.
$$

**Osservazioni.**

- Il limite, se esiste, è unico.
- Se nel seguito scriviamo "$\displaystyle\lim_{x\to c} f(x)$" supponiamo sempre che $c$ sia un punto di accumulazione del dominio $X$ di $f$. Per esempio $\displaystyle\lim_{x\to-1} \sqrt{x}$ $\textcolor{red}{\textit{non}}$ è ammesso poiché $c = -1$ non è un punto di accumulazione del dominio $X = [0, +\infty)$ della radice.
- Il fatto che nella definizione di limite consideriamo soltanto successioni $(x_n)_{n\in\mathbb{N}}$ con limite $c$ ma $x_n \neq c$ per ogni $n \in \mathbb{N}$ riflette il fatto che studiamo $f(x)$ per $x$ vicino ma differente a $c$.
- Il concetto di limite per le funzioni come definito sopra si basa su quello del limite per le successioni. Esiste anche un'altra possibilità di introdurre limiti per le funzioni che non fa riferimento alle successioni. Questa alternativa dipende però dal fatto se $c$ ed $l$ sono finiti oppure infiniti e quindi servono molti casi per coprire tutte le possibilità.

**Definizione 3.7** (*Limite Destro e Sinistro*). Sia $f: X \subseteq \mathbb{R} \to \mathbb{R}$ e $c \in \mathbb{R}$. Diremo che

- $x_n \to c$ *da destra* per $n \to +\infty$, se $x_n \to c$ e $x_n \ge c$ definitivamente. In questo caso usiamo la notazione: $x_n \to c^+$ per $n \to +\infty$ oppure $\displaystyle\lim_{n\to+\infty} x_n = c^+$.
- $x_n \to c$ *da sinistra* per $n \to +\infty$, se $x_n \to c$ e $x_n \le c$ definitivamente. In questo caso usiamo la notazione: $x_n \to c^-$ per $n \to +\infty$ oppure $\displaystyle\lim_{n\to+\infty} x_n = c^-$.
- $f(x) \to l \in \overline{\mathbb{R}}$ per $x$ tendente a $c$ *da destra*, se per ogni successione $(x_n)_{n\in\mathbb{N}} \subset X \setminus \{c\}$ con $x_n \to c^+$ segue $f(x_n) \to l$ per $n \to +\infty$. In questo caso usiamo la notazione: $f(x) \to l$ per $x \to c^+$ oppure $\displaystyle\lim_{x\to c^+} f(x) = l$.
- $f(x) \to l \in \overline{\mathbb{R}}$ per $x$ tendente a $c$ *da sinistra*, se per ogni successione $(x_n)_{n\in\mathbb{N}} \subset X \setminus \{c\}$ con $x_n \to c^-$ segue $f(x_n) \to l$ per $n \to +\infty$. In questo caso usiamo la notazione: $f(x) \to l$ per $x \to c^-$ oppure $\displaystyle\lim_{x\to c^-} f(x) = l$.

$\displaystyle\lim_{x\to c^+} f(x) = l$ e $\displaystyle\lim_{x\to c^-} f(x) = l$ si dicono *limite destro* e *limite sinistro* rispettivamente.

**Esempi.**

- $\displaystyle\lim_{x\to 0^+} \frac{\lvert x \rvert}{x} = +1$, $\displaystyle\lim_{x\to 0^-} \frac{\lvert x \rvert}{x} = -1$.
- $\displaystyle\lim_{x\to 0^+} \frac{1}{x} = \frac{1}{0^+} = +\infty$, $\displaystyle\lim_{x\to 0^-} \frac{1}{x} = \frac{1}{0^-} = -\infty$.

**Limiti e Asintoti.**

- Se $\displaystyle\lim_{x\to c^{(\pm)}} f(x) = \pm\infty$ con $c \in \mathbb{R}$, allora si dice che $f$ ha un *asintoto verticale* $x = c$.
- Se $\displaystyle\lim_{x\to\pm\infty} f(x) = l$ con $l \in \mathbb{R}$, allora si dice $f$ ha un *asintoto orizzontale* $y = l$.

**Esempi.**

- La funzione $\tan(x)$ ha asintoti verticali nei punti $x_k = \frac{2k+1}{2} \cdot \pi$ per $k \in \mathbb{Z}$.
- La funzione $\tanh(x)$ ha asintoti orizzontali nei punti $y = -1, +1$.

Come nel caso delle successioni valgono anche per i limiti delle funzioni le

**Regole per il Calcolo dei Limiti.** Se $\displaystyle\lim_{x\to c} f(x) = l_1$ e $\displaystyle\lim_{x\to c} g(x) = l_2$ con $c \in \overline{\mathbb{R}}$ e $l_1, l_2 \in \mathbb{R}$, allora

- $\displaystyle\lim_{x\to c} \bigl(f(x) \pm g(x)\bigr) = l_1 \pm l_2$;
- $\displaystyle\lim_{x\to c} \bigl(f(x) \cdot g(x)\bigr) = l_1 \cdot l_2$;
- $\displaystyle\lim_{x\to c} \frac{f(x)}{g(x)} = \frac{l_1}{l_2}$ se $l_2 \neq 0$;
- $\displaystyle\lim_{x\to c} \bigl(f(x)\bigr)^{g(x)} = (l_1)^{l_2}$ se $l_1 > 0$;
- $\displaystyle\lim_{x\to c} \lvert f(x) \rvert = \lvert l_1 \rvert$.

Queste regole seguono direttamente dalle regole corrispondenti per le successioni. Inoltre valgono anche per il limite destro e sinistro e anche per $l_1, l_2 \in \overline{\mathbb{R}}$ se al limite si ottiene una forma determinata.

**Limiti e Ordinamento.** Se $f, g: X \subseteq \mathbb{R} \to \mathbb{R}$ tale che $f(x) \le g(x)$ per ogni $x \in X$ e $f(x) \to l_1 \in \overline{\mathbb{R}}$, $g(x) \to l_2 \in \overline{\mathbb{R}}$ per $x \to c \in \overline{\mathbb{R}}$, allora

- $l_1 \le l_2$ (*Teorema del Confronto*);
- se inoltre per $h: X \to \mathbb{R}$ vale $f(x) \le h(x) \le g(x)$ per $x \in X$ e $l_1 = l_2$, allora anche $h(x) \to l_1$ per $x \to c$ (*Teorema dei Carabinieri*).

Come già per le successioni anche per calcolare limiti di funzioni il Teorema dei Carabinieri è spesso molto utile. L'idea per la sua applicazione è di incastrare l'espressione che si vuole studiare ($= h(x)$) tra due carabinieri ($= f(x)$ e $g(x)$) che sono più semplici da studiare e ammettono lo stesso limite.

```plot
x: [-0.4, 5.85]
y: [-0.4, 3.1]
width: 560
height: 320
xticks: { 2.84: "$c$" }
yticks: { 1.11: "$l_1=l_2$" }
xlabel: $x$
alt: Teorema dei carabinieri. La funzione h(x) in blu oscilla tra f(x) in rosso, una parabola rivolta verso il basso, e g(x) in verde, una parabola rivolta verso l'alto, che si toccano nel punto di ascissa c, dove tutte e tre tendono a l_1 = l_2.
items:
  - fn: h
    through: [[0.30, 1.15], [0.80, 2.23], [1.38, 0.62], [1.57, 0.75], [1.80, 1.37], [2.10, 1.05], [2.35, 1.14], [2.55, 1.09], [2.84, 1.11], [3.25, 1.10], [3.45, 1.12], [3.62, 0.92], [4.20, 1.45], [4.80, 0.22], [5.33, 2.30], [5.77, 1.40]]
    color: blue
    label: $h(x)$
    labelAt: 5.77
    anchor: e
  - fn: g
    through: [[0.30, 2.87], [1.15, 1.88], [1.95, 1.35], [2.84, 1.11], [3.65, 1.25], [4.15, 1.45], [4.95, 2.00], [5.75, 2.75]]
    color: green
    label: $g(x)$
    labelAt: 5.75
    anchor: e
  - fn: f
    through: [[0.30, -0.25], [0.60, 0.00], [1.45, 0.60], [2.15, 0.98], [2.84, 1.11], [3.55, 1.04], [4.35, 0.65], [4.95, 0.00], [5.75, -0.68]]
    color: red
    label: $f(x)$
    labelAt: 5.75
    anchor: e
  - guide: [2.84, 1.11]
    dash: true
```

$$
(1) \quad \boxed{\lim_{x\to 0} \frac{\sin(x)}{x} = 1}
$$

$$
(2) \quad \boxed{\lim_{x\to 0} \frac{1 - \cos(x)}{x^2} = \frac{1}{2}}
$$

$$
(3) \quad \boxed{\lim_{x\to 0} \frac{e^x - 1}{x} = 1}
$$

Anche il teorema sulla convergenza delle successioni monotone si generalizza facilmente alle funzioni.

**Teorema 3.8.** *Se $f: X \subseteq \mathbb{R} \to \mathbb{R}$ è monotona allora*

$$
\lim_{x\to c^-} f(x) =: l^- \in \overline{\mathbb{R}} \qquad \text{e} \qquad \lim_{x\to c^+} f(x) =: l^+ \in \overline{\mathbb{R}}
$$

*esistono. Inoltre vale*

$$
\begin{array}{lll}
l^- = \sup\{f(x) : x \in X,\ x < c\}, & l^+ = \inf\{f(x) : x \in X,\ x > c\} & \textit{se } f \textit{ è crescente,} \\[0.4em]
l^- = \inf\{f(x) : x \in X,\ x < c\}, & l^+ = \sup\{f(x) : x \in X,\ x > c\} & \textit{se } f \textit{ è decrescente.}
\end{array}
$$

Passiamo ora ai

**Limiti per le Funzioni Composte.** Se per $f: X \subseteq \mathbb{R} \to Y \subseteq \mathbb{R}$ e $g: Y \to \mathbb{R}$ e $c, l, y_0 \in \overline{\mathbb{R}}$ vale

- $\displaystyle\lim_{x\to c} f(x) = y_0$,
- $\displaystyle\lim_{y\to y_0} g(y) = l$,
- $f(x) \neq y_0$ per $c \neq x \in X$ vicino a $c$

allora

$$
\lim_{x\to c} g\bigl(f(x)\bigr) = l.
$$

- Se per $l \in \mathbb{R}$ definiamo $f: \mathbb{R} \to \mathbb{R}$ come

$$
f(x) := \begin{cases} \dfrac{\sin(x)}{x} & \text{se } x \neq 0 \\[0.6em] l & \text{se } x = 0 \end{cases}
$$

  allora $f$ è sempre continua in ogni $x_0 \neq 0$. Inoltre $f$ è continua in $x_0 = 0$ $\Longleftrightarrow$

$$
\lim_{x\to 0} f(x) = \lim_{x\to 0} \frac{\sin(x)}{x} = 1 = f(0) = l
$$

  cioè $\Longleftrightarrow$ $l = 1$. Si dice anche che $f(x) = \frac{\sin(x)}{x}$ ha una *discontinuità rimovibile* in $x = 0$.
- Se per $l \in \mathbb{R}$ definiamo $f: \mathbb{R} \to \mathbb{R}$ come

$$
f(x) := \begin{cases} \dfrac{\lvert x \rvert}{x} & \text{se } x \neq 0 \\[0.6em] l & \text{se } x = 0 \end{cases}
$$

  allora $f$ per qualsiasi scelta di $l \in \mathbb{R}$ è discontinua (cioè non continua) in $x = 0$.
- *Funzione di Dirichlet*: Se definiamo $f: \mathbb{R} \to \mathbb{R}$ come

$$
f(x) := \begin{cases} 1 & \text{se } x \in \mathbb{Q} \\ 0 & \text{se } x \in \mathbb{R} \setminus \mathbb{Q} \end{cases}
$$

  allora $f$ è discontinua in ogni $x \in \mathbb{R}$.

**Teorema 4.4** (*Teorema degli Zeri*). Sia $f: [a,b] \to \mathbb{R}$ continua tale che $f(a)$ e $f(b)$ abbiano segno opposto (cioè $f(a) \cdot f(b) < 0$), allora esiste $c \in (a,b)$ tale che $f(c) = 0$.

**Dimostrazione.** Usiamo il *metodo di bisezione*: Esiste una successione $(I_n)_{n\in\mathbb{N}}$ di intervalli $I_n = [a_n, b_n]$ tale che

- (i) $[a,b] = I_0 \supset I_1 \supset I_2 \supset \ldots \supset I_n \supset I_{n+1} \supset \ldots,$
- (ii) la lunghezza di $I_n$ è data da $b_n - a_n = \dfrac{b-a}{2^n}$,
- (iii) $f(a_n) \cdot f(b_n) \le 0$.

```plot
x: [-0.25, 6.3]
y: [-1.6, 1.6]
width: 640
height: 320
axes: x
xlabel: $x$
alt: Il metodo di bisezione. La funzione f(x) continua parte positiva in a, scende sotto l'asse x e termina negativa in b. Gli intervalli successivi, con estremi a_0, a_1 = a_2 = a_3 e b_0 = b_1, b_2, b_3, si restringono attorno allo zero della funzione; in ogni estremo sinistro f è positiva (+), in ogni estremo destro f è negativa (−), e le parti scartate sono barrate.
caption: Il metodo di bisezione.
items:
  - fn: f
    through: [[0, 0.42], [1.33, 1.30], [3.33, 0], [4.63, -0.96], [5.51, -0.50]]
    color: blue
  - line: [[0, -1.15], [0, 1.48]]
    arrow: true
  - line: [[2.73, 1.32], [2.73, -1.15]]
    width: 1
  - line: [[3.1, 0.75], [3.1, -0.95]]
    width: 1
  - line: [[3.46, 0.85], [3.46, -0.95]]
    width: 1
  - line: [[4.14, 0.85], [4.14, -0.95]]
    width: 1
  - line: [[5.51, 1.25], [5.51, -1.15]]
    width: 1
  - line: [[-0.10, f(0)], [0.10, f(0)]]
    color: green
    width: 2
  - line: [[0, f(0)-0.1], [0, f(0)+0.1]]
    color: green
    width: 2
  - line: [[2.63, f(2.73)], [2.83, f(2.73)]]
    color: green
    width: 2
  - line: [[2.73, f(2.73)-0.1], [2.73, f(2.73)+0.1]]
    color: green
    width: 2
  - line: [[3.00, f(3.1)], [3.20, f(3.1)]]
    color: green
    width: 2
  - line: [[3.1, f(3.1)-0.1], [3.1, f(3.1)+0.1]]
    color: green
    width: 2
  - line: [[3.36, f(3.46)], [3.56, f(3.46)]]
    color: red
    width: 2
  - line: [[4.04, f(4.14)], [4.24, f(4.14)]]
    color: red
    width: 2
  - line: [[5.41, f(5.51)], [5.61, f(5.51)]]
    color: red
    width: 2
  - line: [[0.97, -0.39], [1.75, 0.39]]
    color: purple
  - line: [[0.97, 0.39], [1.75, -0.39]]
    color: purple
  - line: [[2.82, -0.09], [3.00, 0.09]]
    color: purple
  - line: [[2.82, 0.09], [3.00, -0.09]]
    color: purple
  - line: [[3.64, -0.20], [4.04, 0.20]]
    color: purple
  - line: [[3.64, 0.20], [4.04, -0.20]]
    color: purple
  - line: [[4.50, -0.27], [5.04, 0.27]]
    color: purple
  - line: [[4.50, 0.27], [5.04, -0.27]]
    color: purple
  - text: $f(x)$
    at: [0.12, 1.42]
    anchor: e
  - text: $\frac{a_1+b_1}{2}=b_2$
    at: [4.25, 1.2]
  - text: $b_3$
    at: [3.46, 1.0]
  - text: $a=a_0$
    at: [0.1, -1.4]
  - text: $\frac{a_0+b_0}{2}=a_1=a_2=a_3$
    at: [3.2, -1.4]
  - text: $b=b_0=b_1$
    at: [5.7, -1.4]
```

Allora, per la proprietà (i) abbiamo che

$$
a = a_0 \le a_1 \le a_2 \le \ldots a_n \le \ldots \le b_n \ldots b_2 \le b_1 \le b_0 = b.
$$

Da cui $(a_n)_{n\in\mathbb{N}}$ e $(b_n)_{n\in\mathbb{N}}$ sono monotone e limitate e quindi convergenti. Sia

$$
\lim_{n\to+\infty} a_n =: c_1 \qquad \text{e} \qquad \lim_{n\to+\infty} b_n =: c_2.
$$

Da (ii) segue

$$
\underbrace{b_n}_{\to c_2} = \underbrace{a_n}_{\to c_1} + \underbrace{\frac{b-a}{2^n}}_{\to \frac{b-a}{+\infty} = 0} \qquad \text{per } n \to +\infty
$$

e quindi $c_1 = c_2 =: c$. Infine per (iii), il teorema del confronto e per la continuità di $f$ risulta che

$$
0 \ge \underbrace{f(a_n)}_{\to f(c)} \cdot \underbrace{f(b_n)}_{\to f(c)} \to f^2(c) \qquad \text{per } n \to +\infty.
$$

Quindi $f^2(c) \le 0$ che è possibile solo se $f(c) = 0$. $\square$

**Osservazione.** Il teorema degli zeri non soltanto stabilisce l'esistenza di uno zero $c$ per $f$ ma la dimostrazione dà anche un modo per trovare un valore approssimativo di $c$. In casi come questo si dice anche che la dimostrazione è *costruttiva*.

Dal Teorema degli zeri segue facilmente la seguente generalizzazione.

**Teorema 4.5** (*Teorema dei Valori intermedi*). Sia $I \subseteq \mathbb{R}$ un intervallo qualsiasi (non necessariamente chiuso), $f: I \to \mathbb{R}$ continua e siano

$$
m := \inf f := \inf\bigl\{f(x) : x \in I\bigr\}, \qquad M := \sup f := \sup\bigl\{f(x) : x \in I\bigr\}.
$$

Allora per ogni $y \in (m, M)$ esiste $x \in I$ tale che $f(x) = y$. In altre parole, $f$ assume tutti i valori tra $m = \inf f$ e $M = \sup f$.

La dimostrazione si fa applicando il Teorema degli Zeri alla funzione $\tilde{f}(x) := f(x) - y$.

**Teorema 4.6.** Sia $I \subseteq \mathbb{R}$ un intervallo e sia $f \in C(I)$. Allora anche $J := f(I) = \{f(x) : x \in I\}$ è un intervallo e

- $f: I \to J$ è invertibile $\Longleftrightarrow$ $f$ è strettamente crescente oppure strettamente decrescente;
- se $f$ è invertibile, $f^{-1}: J \to I$ è continua.

**Osservazione.** Possiamo utilizzare lo stesso schema che abbiamo usato per invertire l'esponenziale $a^x$ per invertire altre funzioni $f$. Più precisamente, usiamo

- il teorema dei valori intermedi per verificare la suriettività di $f$,
- la stretta monotonia per ottenere l'iniettività di $f$,
- il teorema sulla continuità della funzione inversa per stabilire la continuità di $f^{-1}$.

**Problema.** Data una funzione $f: X \subseteq \mathbb{R} \to \mathbb{R}$, determinare, se esistono, il valore minimo e quello massimo di $f$, cioè

$$
m := \min f := \min\bigl\{f(x) : x \in X\bigr\}, \qquad M := \max f := \max\bigl\{f(x) : x \in X\bigr\}.
$$

La soluzione di questo problema si svolge in 2 passi:

- (1) Verificare che minimo e massimo di $f$ esistono,
- (2) trovare $x_0, x_1$ tale che $\min f = f(x_0)$, $\max f = f(x_1)$.

**Teorema 4.7** (*Teorema di Weierstraß*). Se $f \in \mathrm{C}[a,b]$, allora esistono $m := \min f$ e $M := \max f$. Inoltre, l'immagine è data da

$$
f\bigl([a,b]\bigr) = \bigl\{f(x) : x \in [a,b]\bigr\} = [m, M],
$$

in particolare

- $f$ è limitata;
- esistono $x_0, x_1 \in [a,b]$ tale che $f(x_0) \le f(x) \le f(x_1)$ per ogni $x \in [a,b]$;
- per ogni $y \in [m, M]$ esiste $x \in [a,b]$ tale che $f(x) = y$.

**Osservazioni.**

- Il Teorema di Weierstraß vale soltanto su intervalli *chiusi* e *limitati* cioè del tipo $[a,b]$.
- La funzione $f: [0,1] \to \mathbb{R}$,

$$
f(x) := \sqrt[3]{\ln\left(\frac{1 + e^{-\sin\sqrt{x+2}}}{2 + \cos\left\lvert 9x - \tfrac{1}{2} \right\rvert + \arctan\bigl((e + x^2)^{\pi}\bigr)}\right)}
$$

  è una composizione di funzioni continue e quindi continua. Per Weierstraß ammette minimo e massimo che, però, saranno quasi impossibili da determinare. Quindi Weierstraß è un risultato di esistenza ma non aiuta per trovare $x_0, x_1$ e $\min f = f(x_0)$ e $\max f = f(x_1)$.

# Derivate

**Problemi.** Data una funzione $f : (a,b) \to \mathbb{R}$ e un punto $x_0 \in (a,b)$,

- (i) trovare la *retta tangente* $t$ al grafico di $f$ nel punto $P_0 = (x_0, f(x_0))$ (problema geometrico), e
- (ii) trovare un'*approssimazione lineare* $g(x)$ (cioè della forma $g(x) = \alpha \cdot x + \beta$, $\alpha, \beta \in \mathbb{R}$) per $f(x)$ per $x$ vicino a $x_0$ (problema analitico).

Iniziamo a studiare il problema (i). Come vedremo nel seguito la sua soluzione risolve anche il problema (ii). Per risolvere (i) consideriamo prima la *retta secante* $s_h$ attraverso i punti

$$
P_0 = (x_0, f(x_0)) \qquad \text{e} \qquad P_h := (x_0 + h, f(x_0 + h)) \qquad \text{per } h \neq 0.
$$

L'equazione della retta $s_h$ è data da

$$
\begin{aligned}
s_h(x) &= f(x_0) + \underbrace{\frac{f(x_0+h) - f(x_0)}{h}}_{\substack{= \text{ pendenza di } s_h \\ =: \text{ } \textit{rapporto incrementale}}} \cdot (x - x_0).
\end{aligned}
$$

Considerando il limite del rapporto incrementale per $h \to 0$ arriviamo alla seguente

**Definizione 5.1.** Se per $f : (a,b) \to \mathbb{R}$ e $x_0 \in (a,b)$ converge

$$
\lim_{h \to 0} \frac{f(x_0+h) - f(x_0)}{h} \underbrace{=}_{x = x_0 + h} \lim_{x \to x_0} \frac{f(x) - f(x_0)}{x - x_0} =: f'(x_0) \in \mathbb{R}
$$

allora $f$ si dice *derivabile* in $x_0$ con *derivata* $f'(x_0)$. Se $f$ è derivabile in ogni $x_0 \in (a,b)$ allora si dice *derivabile* e la funzione $f' : (a,b) \to \mathbb{R}$ è la *derivata* di $f$. Altre notazioni: $f' = \frac{df}{dx} = Df$.

Se $f$ è derivabile in $x_0$ allora otteniamo l'equazione $t(x)$ della retta tangente $t$ sostituendo il rapporto incrementale nell'equazione della retta secante $s_h$ con la derivata $f'(x_0)$, cioè

$$
\boxed{t(x) = f(x_0) + f'(x_0) \cdot (x - x_0)}
$$

Quindi

$$
\begin{aligned}
f'(x_0) &= \tan(\varphi) = \text{ pendenza della retta tangente } t, \\[0.6em]
\frac{f(x_0+h) - f(x_0)}{h} &= \tan(\psi) = \text{ pendenza della retta secante } s_h
\end{aligned}
$$

$$
\boxed{(x^n)' = n \cdot x^{n-1}}
$$

$$
\boxed{(e^x)' = e^x}
$$

$$
\boxed{\sin'(x) = \cos(x)}
$$

$$
\boxed{\cos'(x) = -\sin(x)}
$$

$$
\boxed{\sinh'(x) = \cosh(x)} \qquad \boxed{\cosh'(x) = \sinh(x)} \qquad \boxed{\tanh'(x) = \begin{cases} \dfrac{1}{\cosh^2(x)} \\[0.6em] 1 - \tanh^2(x) \end{cases}}
$$

$$
\boxed{(a^x)' = \ln(a) \cdot a^x}
$$

**Osservazione.** Ricordiamo che $\sin$ è una funzione dispari (come anche $-\sin$) mentre $\cos$ è pari. Nell'esempio precedente abbiamo visto che $\sin' = \cos$ e $\cos' = -\sin$ e quindi la derivata ha trasformato una funzione dispari in una pari e viceversa. Ciò infatti vale sempre, cioè se $f$ è derivabile e

- $f$ dispari $\Rightarrow$ $f'$ pari,
- $f$ pari $\Rightarrow$ $f'$ dispari.

**Definizione 5.2.** Se per $f : (a,b) \to \mathbb{R}$ e $x_0 \in (a,b)$ converge

$$
\lim_{h \to 0^+} \frac{f(x_0+h) - f(x_0)}{h} = \lim_{x \to x_0^+} \frac{f(x) - f(x_0)}{x - x_0} =: f'_+(x_0) = \textit{derivata destra}
$$

oppure

$$
\lim_{h \to 0^-} \frac{f(x_0+h) - f(x_0)}{h} = \lim_{x \to x_0^-} \frac{f(x) - f(x_0)}{x - x_0} =: f'_-(x_0) = \textit{derivata sinistra}
$$

allora diremo che $f$ è *derivabile da destra* oppure *derivabile da sinistra* in $x_0$.

**Esempio.** $f(x) := \lvert x \rvert$ è derivabile da destra e anche da sinistra in $x_0 = 0$ con $f'_+(0) = +1$, $f'_-(0) = -1$.

**Proposizione 5.3.** Se $f : (a,b) \to \mathbb{R}$ è derivabile in $x_0 \in (a,b)$ allora è anche continua in $x_0$.

**Osservazione.** Non vale il contrario cioè $f$ continua $\not\Rightarrow$ $f$ derivabile, per esempio $f(x) = \lvert x \rvert$ è continua ma non derivabile in $x_0 = 0$.

**Derivazione di Somme, Prodotti e Rapporti di Funzioni.** Siano $f, g : (a,b) \to \mathbb{R}$ derivabili in $x_0$, allora

- (i) per ogni $\alpha, \beta \in \mathbb{R}$ anche $\alpha \cdot f + \beta \cdot g$ è derivabile in $x_0$ con

  $$
  \boxed{(\alpha \cdot f + \beta \cdot g)'(x_0) = \alpha \cdot f'(x_0) + \beta \cdot g'(x_0)}
  $$

- (ii) $f \cdot g$ è derivabile in $x_0$ con

  $$
  \boxed{(f \cdot g)'(x_0) = f'(x_0) \cdot g(x_0) + f(x_0) \cdot g'(x_0)}
  $$

- (iii) se $g(x_0) \neq 0$ anche $\frac{f}{g}$ è derivabile in $x_0$ con

  $$
  \boxed{\left(\frac{f}{g}\right)'(x_0) = \frac{g(x_0) \cdot f'(x_0) - g'(x_0) \cdot f(x_0)}{g^2(x_0)}}
  $$

  In particolare

  $$
  \boxed{\left(\frac{1}{g}\right)'(x_0) = -\frac{g'(x_0)}{g^2(x_0)}}
  $$

**Osservazione.** La regola (i) stabilisce che la derivazione è un'*operazione lineare*, cioè la derivata di una combinazione lineare e la combinazione lineare delle derivate. Inoltre implica che l'insieme

$$
\mathrm{C}^1(a,b) := \left\{ f : (a,b) \to \mathbb{R} \;\middle|\; \begin{array}{l} f \text{ è derivabile e} \\ f' \text{ è continua} \end{array} \right\}
$$

**Derivazione delle Funzioni Composte.** Sia $f : (a,b) \to (c,d)$ derivabile in $x_0 \in (a,b)$ e sia $g : (c,d) \to \mathbb{R}$ derivabile in $y_0 := f(x_0)$. Allora la funzione composta $g \circ f : (a,b) \to \mathbb{R}$ è derivabile in $x_0$ con

$$
\boxed{(g \circ f)'(x_0) = g'\big(f(x_0)\big) \cdot f'(x_0)}
$$

Questa formula si chiama *Regola della Catena*.

**Esempi.**

- Se $g : \mathbb{R} \to \mathbb{R}$ è derivabile, allora anche $h(x) := g(-x)$ è derivabile poiché $h(x) = (g \circ f)(x)$ per $f(x) = -x$. Inoltre $h'(x) = \big(g(-x)\big)' = g'(-x) \cdot (-x)' = -g'(-x)$.

**Derivazione delle Funzioni Inverse.** Sia $f : (a,b) \to (c,d)$ continua, biettiva e derivabile in $x_0 \in (a,b)$. Se $f'(x_0) \neq 0$ allora $f^{-1} : (c,d) \to (a,b)$ è derivabile in $y_0 := f(x_0)$ con

$$
\boxed{(f^{-1})'(y_0) = \frac{1}{f'(x_0)}}
$$

$$
\boxed{\log_a{}'(x) = \frac{1}{\ln(a) \cdot x}} \qquad \text{in particolare per } a = e \qquad \boxed{\ln'(x) = \frac{1}{x}}
$$

- Se $f$ e $g$ sono due funzioni con lo stesso dominio e $f(x) > 0$ per ogni $x$ allora possiamo definire

  $$
  h(x) := f(x)^{g(x)} = \left(e^{\ln(f(x))}\right)^{g(x)} = e^{g(x) \cdot \ln(f(x))}.
  $$

  Quindi, se $f$ e $g$ sono derivabili anche $h$ è derivabile con

  $$
  \begin{aligned}
  h'(x) = \left(f(x)^{g(x)}\right)' &= e^{g(x) \cdot \ln(f(x))} \cdot \left(g'(x) \cdot \ln(f(x)) + g(x) \cdot \frac{f'(x)}{f(x)}\right) \\[0.6em]
  &= f(x)^{g(x)} \cdot \left(g'(x) \cdot \ln(f(x)) + g(x) \cdot \frac{f'(x)}{f(x)}\right)
  \end{aligned}
  $$

$$
\boxed{\arcsin'(x) = \frac{1}{\sqrt{1-x^2}} \qquad \forall\, x \in (-1,1)}
$$

$$
\boxed{\arccos'(x) = \frac{-1}{\sqrt{1-x^2}} \qquad \forall\, x \in (-1,1)}
$$

$$
\boxed{\arctan'(x) = \frac{1}{1+x^2} \qquad \forall\, x \in \mathbb{R}}
$$

$$
\boxed{\operatorname{arsinh}'(x) = \frac{1}{\sqrt{1+x^2}} \qquad \forall\, x \in \mathbb{R}}
$$

$$
\boxed{\operatorname{arcosh}'(x) = \frac{1}{\sqrt{x^2-1}} \qquad \forall\, x > 1}
$$

$$
\boxed{\operatorname{artanh}'(x) = \frac{1}{1-x^2} \qquad \forall\, x \in (-1,1)}
$$

**Definizione 5.4.** Sia $f : X \subseteq \mathbb{R} \to \mathbb{R}$ una funzione reale, allora

- $x_0 \in X$ si dice *punto di minimo locale*, se esiste $\delta > 0$ tale che $f(x_0) \le f(x)$ per ogni $x \in X$ con $\lvert x - x_0 \rvert < \delta$; se $x_0$ è un punto di minimo locale, $f(x_0)$ si dice *minimo locale*;
- $x_0 \in X$ si dice *punto di massimo locale*, se esiste $\delta > 0$ tale che $f(x_0) \ge f(x)$ per ogni $x \in X$ con $\lvert x - x_0 \rvert < \delta$; se $x_0$ è un punto di massimo locale, $f(x_0)$ si dice *massimo locale*;
- se $x_0$ è un punto di minimo o di massimo locale, allora si dice *punto di estremo locale* mentre $f(x_0)$ si chiama *estremo locale*.

**Teorema 5.5** (*Teorema di Fermat*). *Sia $x_0 \in (a,b)$ un punto di estremo locale di $f : [a,b] \to \mathbb{R}$. Se $f$ è derivabile in $x_0$ allora $f'(x_0) = 0$.*

**Osservazioni.**

- Come si vede nel grafico sopra il teorema di Fermat $\textcolor{red}{\text{non}}$ vale negli estremi dell'intervallo $[a,b]$. Cioè se $x_0 = a$ oppure $x_0 = b$ è un punto di estremo locale ciò $\textcolor{red}{\text{non}}$ implica (come si vede nel grafico) che $f'(x_0) = 0$.
- Se $f'(x_0) = 0$ allora $x_0$ si dice *punto critico* oppure *punto stazionario* di $f$.
- Il Teorema di Fermat fornisce soltanto una condizione necessaria ma $\textcolor{red}{\text{non}}$ sufficiente per estremi locali, cioè $\textcolor{red}{\text{non}}$ ogni punto critico è un punto di estremo locale. Basta considerare $f(x) = x^3$ per $x \in \mathbb{R}$. Allora $f'(x) = 3x^2$ e quindi $x_0 = 0$ è un punto critico ma non è un punto di estremo locale.

Tornando al problema di trovare gli estremi locali di una funzione $f : X \subseteq \mathbb{R} \to \mathbb{R}$ possiamo affermare che i *candidati* per punti di estremo locale sono

- i punti in cui $f$ non è derivabile,
- i punti sul "bordo" del dominio $X$ di $f$,
- i punti critici all'"interno" del dominio.

I punti delle prime due classi sono quelli per i quali $\textcolor{red}{\text{non}}$ si può applicare Fermat, la terza classe invece sono quelli che vengono da Fermat.

**Teorema 5.6** (*Teorema di Rolle*). *Sia $f \in \mathrm{C}[a,b]$ derivabile in $(a,b)$. Se $f(a) = f(b)$ allora esiste $c \in (a,b)$ tale che $f'(c) = 0$*

```plot
x: [-0.2, 6]
y: [-0.3, 3.7]
width: 520
height: 300
let:
  a: 0.5
  c1: 1.5
  c2: 2.7
  c3: 4.3
  b: 5.5
xticks: { a: "$a$", c1: "$c_1$", c2: "$c_2$", c3: "$c_3$", b: "$b$" }
yticks: { 1: "$f(a)=f(b)$" }
ylabel: $f(x)$
xlabel: $x$
alt: "Grafico di una funzione continua su [a,b] con f(a)=f(b), con due massimi in c1 e c3 e un minimo in c2, dove la tangente è orizzontale."
items:
  - fn: f
    through: [[a, 1], [c1, 1.875], [c2, 0.625], [c3, 2.85], [b, 1]]
  - line: [[0, 1], [b, 1]]
    dash: dotted
    color: muted
    width: 1.2
  - guide: [a, 1]
    to: x
  - guide: [c1, f(c1)]
    to: x
  - guide: [c2, f(c2)]
    to: x
  - guide: [c3, f(c3)]
    to: x
  - guide: [b, 1]
    to: x
  - line: [[c1 - 0.45, f(c1)], [c1 + 0.45, f(c1)]]
  - line: [[c2 - 0.45, f(c2)], [c2 + 0.45, f(c2)]]
  - line: [[c3 - 0.45, f(c3)], [c3 + 0.45, f(c3)]]
```

**Teorema 5.7** (*Teorema di Lagrange* (o del valor medio)). *Sia $f \in \mathrm{C}[a,b]$ derivabile in $(a,b)$. Allora esiste $c \in (a,b)$ (detto punto di Lagrange) tale che*

$$
\underbrace{f'(c)}_{\substack{\text{\textit{= pendenza della retta}} \\ \text{\textit{tangente t in (c, f(c))}}}} = \underbrace{\frac{f(b) - f(a)}{b - a}}_{\substack{\text{\textit{= pendenza della retta}} \\ \text{\textit{secante s attraverso}} \\ \text{\textit{(a, f(a)) e (b, f(b))}}}}
$$

```plot
x: [-0.2, 4.4]
y: [-0.2, 2.5]
width: 520
height: 300
let:
  a: 0.37
  fa: 0.46
  b: 3.69
  fb: 1.65
  c1: 1.1
  c2: 2.73
  m: (fb - fa)/(b - a)
xticks: { a: "$a$", c1: "$c_1$", c2: "$c_2$", b: "$b$" }
ylabel: $f(x)$
xlabel: $x$
caption: "Teorema di Lagrange: Due punti di Lagrange $c_1$ e $c_2$."
alt: "Grafico di f su [a,b] con la retta secante s per (a,f(a)) e (b,f(b)) in blu e due rette tangenti parallele t1 e t2 in rosso, nei punti di ascissa c1 e c2."
items:
  - fn: g
    through: [[a, 0], [c1, 0.347], [c2, -0.54], [b, 0]]
    hidden: true
  - fn: f(x) = fa + m(x - a) + g(x)
    domain: [a, b]
  - fn: t1(x) = f(c1) + m(x - c1)
    domain: [a - 0.1, b + 0.05]
    color: red
    label: $t_1$
    labelAt: 3.74
    anchor: e
  - fn: s(x) = fa + m(x - a)
    domain: [a, b]
    color: blue
    label: $s$
    labelAt: 3.69
    anchor: e
  - fn: t2(x) = f(c2) + m(x - c2)
    domain: [0.55, b + 0.05]
    color: red
    label: $t_2$
    labelAt: 3.74
    anchor: e
  - guide: [a, fa]
    to: x
  - guide: [c1, f(c1)]
    to: x
  - guide: [c2, f(c2)]
    to: x
  - guide: [b, fb]
    to: x
  - text: $/\!/$
    at: [2.0, t1(2.0)]
  - text: $/\!/$
    at: [2.0, s(2.0)]
  - text: $/\!/$
    at: [2.0, t2(2.0)]
```

Quindi il teorema stabilisce che esiste un punto $c$ tale che la retta tangente $t$ al grafico di $f$ in $(c, f(c))$ e la retta secante attraverso $(a, f(a))$ e $(b, f(b))$ sono parallele.

**Conseguenze del Teorema di Lagrange**

Il Teorema di Lagrange ha molte applicazioni per le quali, però, viene usato nel seguente modo: Se $f \in \mathrm{C}[a,b]$ è derivabile in $(a,b)$ allora per ogni $x_1, x_2 \in [a,b]$ esiste $c$ tra $x_1$ e $x_2$ tale che

$$
\boxed{f(x_2) = f(x_1) + f'(c) \cdot (x_2 - x_1)}
$$

Per ottenere questa versione del teorema basta sostituire $a, b$ con $x_1, x_2$ e poi risolvere l'equazione per $f(x_2)$.

**Test di Monotonia.** *Se $f \in \mathrm{C}[a,b]$ è derivabile in $(a,b)$ allora*

- *$f$ è crescente $\iff$ $f'(x) \ge 0$ per ogni $x \in (a,b)$;*
- *$f$ è decrescente $\iff$ $f'(x) \le 0$ per ogni $x \in (a,b)$;*
- *$f'(x) > 0$ per ogni $x \in (a,b)$ $\Rightarrow$ $f$ è strettamente crescente;*
- *$f'(x) < 0$ per ogni $x \in (a,b)$ $\Rightarrow$ $f$ è strettamente decrescente.*

Prima di dimostrare il test osserviamo che nel punto 3 e 4 $\textcolor{red}{\text{non}}$ vale l'equivalenza, basta considerare $f(x) = x^3$ per $x \in \mathbb{R}$ che è strettamente crescente nonostante che $f'(x) = 3x^2$ si annulla per $x = 0$.

**Criterio per Estremi Locali.** *Sia $f : (a,b) \to \mathbb{R}$ derivabile e sia $x_0 \in (a,b)$ un punto critico di $f$ (cioè $f'(x_0) = 0$). Allora $x_0$ è un punto di*

- *massimo locale, se $f'(x)$ cambia in $x_0$ segno da "+" a "−";*
- *minimo locale, se $f'(x)$ cambia in $x_0$ segno da "−" a "+";*

```plot
x: [-4, 4.4]
y: [-0.6, 3.3]
width: 520
height: 230
axes: x
xticks: { 0: "$x_0$" }
alt: "Massimo locale: a sinistra di x0 f'(x)>0 e f è crescente (segno più), a destra f'(x)<0 e f è decrescente (segno meno)."
items:
  - text: max locale
    at: [0, 3.1]
  - line: [[0, 0], [0, 2.75]]
    dash: dotted
    color: muted
    width: 1.2
  - fn: m(x) = 1.84 - 0.95 x^2
    domain: [-1.05, 1.05]
  - line: [[-1.36, 0.9], [-0.86, 1.9]]
    arrow: true
  - line: [[0.88, 1.76], [1.7, 1.26]]
    arrow: true
  - text: "$f'(x)>0 \\Rightarrow$"
    at: [-2.76, 2.06]
  - text: $f$ crescente
    at: [-2.76, 1.46]
  - text: $+$
    at: [-2.76, 0.66]
  - text: "$f'(x)<0 \\Rightarrow$"
    at: [2.98, 2.06]
  - text: $f$ decrescente
    at: [2.98, 1.46]
  - text: $-$
    at: [2.98, 0.66]
```

```plot
x: [-4, 4.4]
y: [-0.6, 3.3]
width: 520
height: 230
axes: x
xticks: { 0: "$x_0$" }
alt: "Minimo locale: a sinistra di x0 f'(x)<0 e f è decrescente (segno meno), a destra f'(x)>0 e f è crescente (segno più)."
items:
  - text: min locale
    at: [0, 3.1]
  - line: [[0, 0], [0, 2.75]]
    dash: dotted
    color: muted
    width: 1.2
  - fn: m(x) = 1.5 + 1.2 x^2
    domain: [-1.0, 1.05]
  - line: [[-1.5, 2.4], [-0.9, 1.7]]
    arrow: true
  - line: [[0.9, 1.7], [1.7, 2.5]]
    arrow: true
  - text: "$f'(x)<0 \\Rightarrow$"
    at: [-2.76, 2.06]
  - text: $f$ decrescente
    at: [-2.76, 1.46]
  - text: $-$
    at: [-2.76, 0.66]
  - text: "$f'(x)>0 \\Rightarrow$"
    at: [2.98, 2.06]
  - text: $f$ crescente
    at: [2.98, 1.46]
  - text: $+$
    at: [2.98, 0.66]
```

**Caratterizzazione di Funzioni Costanti.** *Se $f : (a,b) \to \mathbb{R}$ è derivabile, allora*

$$
f \text{ è costante} \iff f'(x) = 0 \text{ per ogni } x \in (a,b)
$$

**Esempio.** Definiamo $f : \mathbb{R} \setminus \{0\} \to \mathbb{R}$,

$$
f(x) := \arctan(x) + \arctan\left(\frac{1}{x}\right), \qquad x \neq 0.
$$

Allora $f$ è derivabile con

$$
f'(x) = \frac{1}{1+x^2} + \frac{1}{1 + \left(\frac{1}{x}\right)^2} \cdot \frac{-1}{x^2} = \frac{1}{1+x^2} - \frac{1}{x^2+1} = 0 \qquad \text{per ogni } x \neq 0.
$$

A questo punto, però, $\textcolor{red}{\text{non}}$ possiamo concludere che $f$ è costante visto che il dominio $X := \mathbb{R} \setminus \{0\}$ $\textcolor{red}{\text{non}}$ è un intervallo. Invece $X = (-\infty, 0) \cup (0, +\infty)$ è l'unione di due intervalli e quindi $f$ è costante sia sull'intervallo $(-\infty, 0)$ che su $(0, +\infty)$. Quindi esistono $c_1, c_2 \in \mathbb{R}$ tale che

$$
f(x) = c_1 \text{ per ogni } x > 0 \qquad \text{e} \qquad f(x) = c_2 \text{ per ogni } x < 0.
$$

Per calcolare le costanti $c_1, c_2$ (che, come vedremo sono diversi) basta scegliere un valore opportuno $x_1 > 0$ e $x_2 < 0$ poiché in ogni caso $f(x_1) = c_1$ e $f(x_2) = c_2$. Per la funzione $f$ possiamo per esempio scegliere $x_1 = 1$ e $x_2 = -1$ e così risulta

$$
\arctan(x) + \arctan\left(\frac{1}{x}\right) = f(x) = \begin{cases} f(1) = \arctan(1) + \arctan(1) = 2 \cdot \dfrac{\pi}{4} = \dfrac{\pi}{2} & \text{per ogni } x > 0, \\[0.8em] f(-1) = \arctan(-1) + \arctan(-1) = 2 \cdot \dfrac{-\pi}{4} = -\dfrac{\pi}{2} & \text{per ogni } x < 0. \end{cases}
$$

**Problema.** Calcolare il limite

$$
\lim_{x \to c} \frac{f(x)}{g(x)}
$$

che al limite rappresenta una forma indeterminata del tipo $\frac{0}{0}$ oppure $\frac{\pm\infty}{\pm\infty}$.

Per esempio

$$
\lim_{x \to 0} \frac{\sin(x)}{x} = \frac{0}{0} \qquad \text{oppure} \qquad \lim_{x \to +\infty} \frac{\ln(x)}{x} = \frac{+\infty}{+\infty}.
$$

Nonostante i due limiti precedenti si possano calcolare anche direttamente, le seguenti regole ne semplificano molto lo svolgimento. Non presentiamo la dimostrazione che comunque si basa sempre sul Teorema di Lagrange.

**Teorema 5.9** (*Regole di de l'Hospital*). Siano $-\infty \le a < b \le +\infty$ e $f, g : (a,b) \to \mathbb{R}$ tale che

- $\displaystyle\lim_{x \to a^+} f(x) = \lim_{x \to a^+} g(x) = 0$ oppure $= \pm\infty$,
- $f, g$ sono derivabili con $g'(x) \neq 0$ per ogni $x$ vicino ad $a$,
- $\displaystyle\lim_{x \to a^+} \frac{f'(x)}{g'(x)} =: l \in \overline{\mathbb{R}}$ esiste.

Allora anche

$$
\lim_{x \to a^+} \frac{f(x)}{g(x)} = l.
$$

La stessa conclusione vale anche per limiti del tipo $\displaystyle\lim_{x \to b^-}$ e $\displaystyle\lim_{x \to x_0}$ per $x_0 \in (a,b)$.

**Osservazione.**

- Se $\displaystyle\lim_{x \to a^+} \frac{f'(x)}{g'(x)}$ non esiste $\textcolor{red}{\text{non}}$ si può dedurre che anche $\displaystyle\lim_{x \to a^+} \frac{f(x)}{g(x)}$ non esiste. Cioè l'Hospital offre soltanto una condizione sufficiente ma non necessaria per l'esistenza di un limite. Per verificare ciò consideriamo

  $$
  \lim_{x \to +\infty} \frac{x + \sin(x)}{x} \left(= \frac{\pm\infty}{\pm\infty}\right) = \lim_{x \to +\infty} 1 + \frac{\overbrace{\sin(x)}^{\text{limitato}}}{\underbrace{x}_{\to +\infty}} = 1
  $$

  che quindi converge mentre il limite

  $$
  \lim_{x \to +\infty} \frac{(x + \sin(x))'}{(x)'} = \lim_{x \to +\infty} \frac{1 + \cos(x)}{1}
  $$

  non esiste.

- L'Hospital $\textcolor{red}{\text{non}}$ si deve applicare a forme determinate. Per esempio

  $$
  \lim_{x \to 0} \frac{1 + x}{2 + x} = \frac{1}{2} \neq \lim_{x \to 0} \frac{(1 + x)'}{(2 + x)'} = \lim_{x \to 0} \frac{1}{1} = 1.
  $$

Usando piccoli trucchi si possono anche studiare limiti che all'inizio non sono della forma indeterminata $\frac{0}{0}$ oppure $\frac{\pm\infty}{\pm\infty}$. Per esempio, per $\alpha > 0$ vale

$$
\lim_{x \to 0^+} x^\alpha \cdot \ln(x) = \big(0 \cdot (-\infty)\big) = \lim_{x \to 0^+} \frac{\ln(x)}{x^{-\alpha}} \left(= \frac{-\infty}{+\infty}\right) \overset{\mathrm{H}}{=} \lim_{x \to 0^+} \frac{\frac{1}{x}}{-\alpha x^{-\alpha - 1}} = \lim_{x \to 0^+} \frac{x^\alpha}{-\alpha} = 0.
$$

- Può succedere anche che dopo un'applicazione di l'Hospital si ottiene nuovamente una forma indeterminata ammessa. In questi casi si può provare ad applicare l'Hospital più volte. Per esempio

  $$
  \begin{aligned}
  \lim_{x \to 0} \frac{x - \sin(x)}{x^3} \left(= \tfrac{0}{0}\right) &\overset{\mathrm{H}}{=} \lim_{x \to 0} \frac{1 - \cos(x)}{3x^2} \left(= \tfrac{0}{0}\right) \\[0.6em]
  &\overset{\mathrm{H}}{=} \lim_{x \to 0} \frac{\sin(x)}{6x} \left(= \tfrac{0}{0}\right) \overset{\mathrm{H}}{=} \lim_{x \to 0} \frac{\cos(x)}{6} = \frac{1}{6}.
  \end{aligned}
  $$

  Qui la seconda e terza applicazione di l'Hospital si potrebbe evitare ricordando i limiti notevoli (1) e (2). Però confrontando i procedimenti si vede che le regole di l'Hospital hanno semplificato notevolmente il calcolo di questi limiti.

- Per calcolare limiti del tipo $\displaystyle\lim_{x \to x_0} f(x)^{g(x)}$ si procede come segue:

  $$
  \lim_{x \to x_0} \big(f(x)\big)^{g(x)} = \lim_{x \to x_0} e^{g(x) \cdot \ln(f(x))} = e^{\lim_{x \to x_0} g(x) \cdot \ln(f(x))}
  $$

  dove l'ultima uguaglianza segue dalla continuità della funzione esponenziale.

  Per dare un esempio concreto consideriamo

  $$
  \lim_{x \to 0} (x + e^x)^{\frac{1}{\sin(x)}} = e^{\lim_{x \to 0} \frac{\ln(x + e^x)}{\sin(x)}}.
  $$

  Per l'esponente otteniamo

  $$
  \lim_{x \to 0} \frac{\ln(x + e^x)}{\sin(x)} \left(= \frac{\ln(0 + e^0)}{\sin(0)} = \frac{\ln(1)}{0} = \frac{0}{0}\right) \overset{\mathrm{H}}{=} \lim_{x \to 0} \frac{\frac{1}{x + e^x} \cdot (1 + e^x)}{\cos(x)} = 2
  $$

  e quindi

  $$
  \lim_{x \to 0} (x + e^x)^{\frac{1}{\sin(x)}} = e^2
  $$

Torniamo ora al problema iniziale posto a pagina 101: Data $f : (a,b) \to \mathbb{R}$ e un punto $x_0 \in (a,b)$, trovare

- (i) la retta tangente $t$ al grafico di $f$ nel punto $P_0 = (x_0, f(x_0))$, e
- (ii) un'approssimazione lineare $g(x) = \alpha \cdot x + \beta$ (cioè $g$ è un polinomio di grado $\le 1$) per $f(x)$ per $x$ vicino a $x_0$.

Abbiamo risolto (i): Se $f$ è derivabile in $x_0$, allora la retta tangente $t$ è data dall'equazione

$$
t(x) = f(x_0) + f'(x_0) \cdot (x - x_0).
$$

Quindi la retta tangente è il grafico di un polinomio di grado $\le 1$ e di conseguenza si può avere l'idea di usare proprio $g(x) := t(x)$ come approssimazione lineare. Come vedremo in seguito, questa scelta è infatti in un certo senso la migliore possibile. Per verificare ciò scriviamo

$$
f(x) = t(x) + r(x) = \underbrace{f(x_0) + f'(x_0) \cdot (x - x_0)}_{\textcolor{blue}{\text{\small approssimazione lineare}}} \;+\; \underbrace{r(x)}_{\textcolor{blue}{\text{\small resto (o errore)}}}
$$

cioè $r(x) = f(x) - t(x)$.

```plot
x: [-0.3, 3.5]
y: [-0.3, 3.2]
width: 460
height: 300
let:
  a: 0.6
  b: 2.2
xticks: { a: "$x_0$", b: "$x$" }
yticks: { "f(a)": "$f(x_0)$", "f(b)": "$f(x)$", "t(b)": "$t(x)$" }
alt: "Grafico di f con la retta tangente t in x_0; il resto r(x) è il segmento verticale tra t(x) e f(x)"
caption: "Il resto $r(x)$."
items:
  - fn: f(x) = 1.4 sqrt(x)
    domain: [0.3, 3.1]
    label: $f$
    labelAt: 2.7
  - fn: t(x) = f(a) + f'(a)(x - a)
    domain: [0.15, 2.65]
    color: blue
    label: $t$
    labelAt: 2.62
    anchor: e
  - guide: [a, f(a)]
  - guide: [b, f(b)]
  - guide: [b, t(b)]
  - line: [[b, f(b)], [b, t(b)]]
    color: red
  - brace: [[3.2, f(b)], [3.2, t(b)]]
    color: red
    label: $=r(x)$
  - point: [a, f(a)]
```

Studiamo le proprietà di $r(x)$:

- $r(x_0) = 0$ cioè nel punto $x_0$ l'approssimazione dà il valore esatto,
- vale

$$
\frac{r(x)}{x - x_0} = \underbrace{\frac{f(x) - f(x_0)}{x - x_0}}_{\to f'(x_0)} - f'(x_0) \to 0 \qquad \text{per } x \to x_0.
$$

Cioè per $x \to x_0$ il resto $r(x)$ tende a 0 più rapidamente di $x - x_0$.

Per confrontare meglio il comportamento di due funzioni facciamo la seguente

**Definizione 5.10.** Se

$$
\lim_{x \to x_0} \frac{f(x)}{g(x)} = 0
$$

allora si dice che *$f$ è o-piccolo di $g$ per $x \to x_0$* e in questo caso si scrive $f(x) = o(g(x))$ per $x \to x_0$ o più brevemente $f = o(g)$ per $x \to x_0$.

**Osservazioni.**

- $o(\cdot)$ si chiama *simbolo di Landau*.
- $f = o(g)$ per $x \to x_0$ significa per
  - *infinitesimi* che $f(x) \to 0$ più rapidamente che $g(x) \to 0$ per $x \to x_0$;
  - *infiniti* che $f(x) \to \pm\infty$ più lentamente che $g(x) \to \pm\infty$ per $x \to x_0$.

**Esempi.**

- $\ln(x) = o(x)$ per $x \to +\infty$ poiché $\frac{\ln(x)}{x} \to 0$ per $x \to +\infty$.
- $1 - \cos(x) = o(x)$ per $x \to 0$ poiché

$$
\frac{1 - \cos(x)}{x} = \underbrace{\frac{1 - \cos(x)}{x^2}}_{\to \frac{1}{2}} \cdot \underbrace{x}_{\to 0} \to \frac{1}{2} \cdot 0 = 0 \qquad \text{per } x \to 0.
$$

- $x = o(x^2)$ per $x \to \pm\infty$ mentre $x^2 = o(x)$ per $x \to 0$.
- $f(x) \to 0$ per $x \to x_0 \iff f(x) = o(1)$ per $x \to x_0$.
- Tornando al problema di approssimazione lineare possiamo ora dire che $r(x) = o(x - x_0)$ per $x \to x_0$.

Con gli $o$-piccoli si possono caratterizzare le funzioni derivabili.

**Proposizione 5.11.** *Per una funzione $f : (a,b) \to \mathbb{R}$ e $x_0 \in (a,b)$ le seguenti affermazioni sono equivalenti.*

*(a) $f$ è derivabile in $x_0$.*

*(b) Esiste $A \in \mathbb{R}$ tale che $f(x) = f(x_0) + A \cdot (x - x_0) + o(x - x_0)$ per $x \to x_0$.*

*In questo caso $A = f'(x_0)$.*

Quindi questa proposizione stabilisce che l'approssimazione lineare $t(x)$ data dalla retta tangente $t$ è l'unica che lascia un resto $r(x)$ che per $x \to x_0$ tende a 0 più rapidamente che la distanza $x - x_0$ tra $x$ e $x_0$. Cioè per ogni altra scelta di approssimazione con un polinomio di grado $\le 1$ il resto tende a zero più lentamente. In questo senso $t(x)$ è la migliore approssimazione lineare possibile di $f(x)$ per $x$ vicino a $x_0$.

Consideriamo alcuni

**Esempi.**

- Se $f(x) = e^x$ e $x_0 = 0$, allora la derivabilità di $f$ implica $e^x = f(0) + f'(0) \cdot x + o(x) = e^0 + e^0 \cdot x + o(x)$, cioè

$$
\boxed{e^x = 1 + x + o(x) \text{ per } x \to 0}
$$

- Se $f(x) = \sin(x)$ e $x_0 = 0$, allora la derivabilità di $f$ implica $\sin(x) = f(0) + f'(0) \cdot x + o(x) = \sin(0) + \cos(0) \cdot x + o(x)$, cioè

$$
\boxed{\sin(x) = x + o(x) \text{ per } x \to 0}
$$

- Se $f(x) = \ln(1+x)$ e $x_0 = 0$, allora la derivabilità di $f$ implica $\ln(1+x) = f(0) + f'(0) \cdot x + o(x) = \ln(1) + \frac{1}{1+0} \cdot x + o(x)$, cioè

$$
\boxed{\ln(1+x) = x + o(x) \text{ per } x \to 0}
$$

**La Formula di Taylor**

Abbiamo quindi risolto anche il problema dell'approssimazione lineare, cioè di approssimare il valore $f(x)$ di una funzione (possibilmente molto complicata) vicino al punto $x_0$ con un polinomio $t(x)$ (cioè con una funzione molto semplice) di grado $\le 1$.

A questo punto si può avere l'idea di limitare il grado dell'approssimazione non a 1 ma a un numero $n \in \mathbb{N}$ qualsiasi. Cioè si può generalizzare il problema dell'approssimazione lineare nel seguente modo:

**Problema.** Data $f : (a,b) \to \mathbb{R}$, $x_0 \in (a,b)$ e $n \in \mathbb{N}$, approssimare $f(x)$ per $x$ vicino a $x_0$ con un polinomio $T_n(x)$ di grado $\le n$

Per $n = 1$ abbiamo visto che $T_1(x) = t(x)$ è la migliore scelta possibile. Per risolvere il problema per $n \in \mathbb{N}$ dobbiamo prima introdurre le

**Derivate Successive.**

**Definizione 5.12.** Se $f$ è derivabile e tale che $f'$ è nuovamente derivabile, allora possiamo definire

$$
(f')' =: f'' = \text{ derivata seconda } =: D^2 f =: \frac{d^2 f}{dx^2}.
$$

Se si può continuare in questa maniera $n$ volte otteniamo

$$
f^{(n)} = \text{ derivata } n\text{-esima } =: D^n f =: \frac{d^n f}{dx^n}.
$$

Inoltre, se $I$ è un'intervallo e $n \in \mathbb{N}$ definiamo $\mathrm{C}^0(I) := \mathrm{C}(I)$ (e $f^{(0)} := f$) e per $n \ge 1$

$$
\mathrm{C}^n(I) := \left\{ f : I \to \mathbb{R} \;\middle|\; \begin{array}{l} f \text{ è derivabile } n\text{-volte} \\ \text{e } f^{(n)} \text{ è continua} \end{array} \right\}
$$

Se $f \in \mathrm{C}^n(I)$ si dice anche che $f$ è *derivabile $n$-volte con continuità* (qui la continuità si riferisce alla derivata $n$-esima $f^{(n)}$ e $\textcolor{red}{\text{non}}$ a $f$).

Dopo questo intermezzo sulle derivate successive possiamo tornare al problema dell'approssimazione di $f(x)$ per $x$ vicino a $x_0$ attraverso un polinomio di grado $\le n$. Per ottenere un'idea come si può risolvere questo problema consideriamo i casi $n = 0$ e $n = 1$.

- Per $n = 0$ la migliore approssimazione con un polinomio di grado $\le 0$ (cioè con una costante) è ovviamente $T_0(x) := f(x_0) = T_0(x_0)$, cioè $T_0$ e $f$ hanno in $x_0$ il valore in comune:

$$
T_0(x_0) = f(x_0).
$$

- Per $n = 1$ il problema diventa quello dell'approssimazione lineare che abbiamo risolto precedentemente: Se $f$ è derivabile in $x_0$ allora la migliore approssimazione ci dà $t(x) =: T_1(x) = f(x_0) + f'(x_0) \cdot (x - x_0)$. Quindi $T_1(x_0) = f(x_0)$ e $T_1'(x) = f'(x_0)$ cioè $T_1$ e $f$ hanno in $x_0$ il valore e derivata prima in comune:

$$
\begin{aligned}
T_1(x_0) &= f(x_0), \\
T_1'(x_0) &= f'(x_0).
\end{aligned}
$$

Quindi per $n \ge 2$ supponiamo che $f$ sia $n$-volte derivabile e poi cerchiamo un polinomio $T_n$ che con $f$ ha in $x_0$ valore e tutte le derivate fino alla $n$-esima in comune:

$$
\left.
\begin{aligned}
T_n(x_0) &= f(x_0), \\
T_n'(x_0) &= f'(x_0), \\
&\;\;\vdots \\
T_n^{(n)}(x_0) &= f^{(n)}(x_0).
\end{aligned}
\right\}
\iff\; : \quad f \text{ e } T_n \text{ hanno } \textit{contatto di ordine } n \textit{ in } x_0
$$

Visto che questo sistema consiste da $n + 1$ equazione e il polinomio $T_n$ da determinare ha $n + 1$ coefficienti $a_0, \dots a_n \in \mathbb{R}$ come incognite, il seguente risultato è plausibile.

**Proposizione 5.13.** Se $f \in \mathrm{C}^n(a,b)$ e $x_0 \in (a,b)$ allora esiste un unico polinomio $T_n$ di grado $\le n$ che ha un contatto di ordine $n$ in $x_0$ con $f$. Questo polinomio si chiama *polinomio di Taylor* di ordine $n$ con centro $x_0$ generato da $f$ ed è dato da

$$
\begin{aligned}
T_n(x) &= f(x_0) + f'(x_0) \cdot (x - x_0) + \frac{f''(x_0)}{2!} \cdot (x - x_0)^2 + \dots + \frac{f^{(n)}(x_0)}{n!} \cdot (x - x_0)^n \\
&= \sum_{k=0}^{n} \frac{f^{(k)}(x_0)}{k!} \cdot (x - x_0)^k.
\end{aligned}
$$

Infine, se $x_0 = 0$, allora $T_n$ viene anche chiamato *polinomio di Maclaurin*.

**Problema.** Quanto vale il *resto* (o *errore*) dovuto all'approssimazione con il polinomio di Taylor, cioè quanto vale

$$
R_n(x) := f(x) - T_n(x) \; = ?
$$

Consideriamo prima i casi che abbiamo già studiati.

$n = 0$: Per il Teorema di Lagrange esiste $c$ tra $x$ e $x_0$ tale che

$$
\begin{aligned}
R_0(x) &= f(x) - T_0(x) = f(x) - f(x_0) = f'(c) \cdot (x - x_0) \\
&= o(1) = o\big((x - x_0)^0\big) \text{ per } x \to x_0.
\end{aligned}
$$

$n = 1$: Visto che $T_1(x) = t(x) =$ approssimazione lineare segue

$$
R_1(x) = r(x) = o\big((x - x_0)^1\big) \text{ per } x \to x_0.
$$

Nel caso generale $n \in \mathbb{N}$ vale la seguente generalizzazione di queste rappresentazioni di $R_n(x)$.

**Teorema 5.14** (*Formula di Taylor*). *Sia $f \in \mathrm{C}^{n+1}(a,b)$ e sia $x_0 \in (a,b)$. Allora per $R_n(x) := f(x) - T_n(x)$*

- *vale*

$$
R_n(x) = o\big((x - x_0)^n\big) \quad \text{per } x \to x_0 \qquad \text{(Resto di Peano)}
$$

- *esiste $c$ tra $x$ e $x_0$ tale che*

$$
R_n(x) = \frac{f^{(n+1)}(c)}{(n+1)!} \cdot (x - x_0)^{n+1} \qquad \text{(Resto di Lagrange)}
$$

**Osservazioni.**

- Per la formula di Taylor con il resto di Peano basta che $f \in \mathrm{C}^n(a,b)$.
- La Formula di Taylor con il
  - Resto di Peano è un'affermazione *qualitativa*, cioè afferma soltanto con che velocità il resto $R_n(x)$ tende a 0 per $x \to x_0$;
  - Resto di Lagrange è un'affermazione *quantitativa*, che permette anche valutare la grandezza del resto (si noti tuttavia che $c$ non è noto).

- Se per un polinomio $p(x)$ di grado $\le n$ vale

$$
f(x) - p(x) = o\big((x - x_0)^n\big) \quad \text{per } x \to x_0,
$$

allora $p(x) = T_n(x)$. In altre parole $T_n(x)$ è l'unico polinomio di grado $\le n$ che lascia un resto che per $x \to x_0$ tende più rapidamente a 0 che $(x - x_0)^n$. In questo senso la scelta di $T_n(x)$ come approssimazione di $f(x)$ per $x$ vicino a $x_0$ è ottima. Questa osservazione ci permetterà in seguito di calcolare $T_n(x)$ senza calcolare alcuna derivata.

- Una rappresentazione esplicita del tipo $f(x) = T_n(x) + o((x - x_0)^n)$ si chiama *sviluppo di Taylor di $f$ di ordine $n$ e centro $x_0$*.

Calcoliamo appunto alcuni sviluppi di Taylor.

**Esempi.**

- Dall'esempio precedente segue per $f(x) = e^x$ e $x_0 = 0$ che

$$
\boxed{e^x = 1 + x + \tfrac{x^2}{2} + \tfrac{x^3}{3!} + \dots + \tfrac{x^n}{n!} + o(x^n) = \sum_{k=0}^{n} \tfrac{x^k}{k!} + o(x^n) \quad \text{per } x \to 0.}
$$

Per esempio $e^x = 1 + x + \frac{x^2}{2} + \frac{x^3}{6} + o(x^3)$ per $x \to 0$.

**Osservazione.** Siccome per ogni $n \in \mathbb{N}$ vale $f^{(2n+2)}(0) = 0$ segue $T_{2n+2}(x) = T_{2n+1}(x)$ e di conseguenza

$$
f(x) = \underbrace{T_{2n+2}(x)}_{= T_{2n+1}(x)} + o(x^{2n+2}) = T_{2n+1}(x) + o(x^{2n+2}).
$$

Così risulta lo sviluppo

$$
\boxed{\sin(x) = \sum_{k=0}^{n} (-1)^k \cdot \frac{x^{2k+1}}{(2k+1)!} + o(x^{2n+\mathbf{2}}) \quad \text{per } x \to 0.}
$$

Per esempio per $n = 1$ vale

$$
\begin{aligned}
T_4(x) &= x - \frac{x^3}{3!} + \overbrace{\frac{f^{(4)}(0)}{4!}}^{=0} \cdot x^4 = T_3(x) \qquad \text{e quindi} \\[0.6em]
\sin(x) &= x - \frac{x^3}{6} + o(x^4) \quad \text{per } x \to 0.
\end{aligned}
$$

Questo sviluppo è migliore dello sviluppo $\sin(x) = x - \frac{x^3}{6} + o(x^3)$ in quanto per $x \to 0$ l'espressione $x^4$ tende a zero più rapidamente che $x^3$.

Questo guadagno di un grado nel $o(\cdot)$ si ottiene anche per altri sviluppi di Maclaurin (cioè per $x_0 = 0$) di funzioni pari oppure dispari in quanto

- tutte le derivate di ordine pari di una funzione dispari in $x_0 = 0$ si annullano (come sopra per il sin),
- tutte le derivate di ordine dispari di una funzione pari in $x_0 = 0$ si annullano (per esempio per il cos).

Di conseguenza in uno sviluppo di Maclaurin di una

- funzione pari compariranno soltanto termini $x^k$ con $k$ pari, mentre per
- funzione dispari compariranno soltanto termini $x^k$ con $k$ dispari.

Nella stessa maniera seguono i seguenti sviluppi.

- Come già sopra indicato vale per $f(x) = \cos(x)$ (= funzione pari) e $x_0 = 0$ che $T_{2n}(x) = T_{2n+1}(x)$. Quindi

$$
\boxed{\cos(x) = \sum_{k=0}^{n} (-1)^k \cdot \frac{x^{2k}}{(2k)!} + o(x^{2n+\mathbf{1}}) \quad \text{per } x \to 0.}
$$

Per esempio per $n = 2$ otteniamo $\cos(x) = 1 - \frac{x^2}{2} + \frac{x^4}{24} + o(x^{\mathbf{5}})$ per $x \to 0$.

$$
\boxed{\sinh(x) = \sum_{k=0}^{n} \frac{x^{2k+1}}{(2k+1)!} + o(x^{2n+\mathbf{2}}) \quad \text{per } x \to 0,}
$$

$$
\boxed{\cosh(x) = \sum_{k=0}^{n} \frac{x^{2k}}{(2k)!} + o(x^{2n+\mathbf{1}}) \quad \text{per } x \to 0.}
$$

$$
\boxed{\arctan(x) = \sum_{k=0}^{n} (-1)^k \cdot \frac{x^{2k+1}}{2k+1} + o(x^{2n+\mathbf{2}}) \quad \text{per } x \to 0.}
$$

$$
\boxed{\operatorname{artanh}(x) = \sum_{k=0}^{n} \frac{x^{2k+1}}{2k+1} + o(x^{2n+\mathbf{2}}) \quad \text{per } x \to 0.}
$$

$$
\boxed{\ln(1+x) = \sum_{k=1}^{n} (-1)^{k+1} \cdot \frac{x^k}{k} + o(x^n) \quad \text{per } x \to 0.}
$$

$$
\boxed{(1+x)^\alpha = \sum_{k=0}^{n} \binom{\alpha}{k} \cdot x^k + o(x^n) \quad \text{per } x \to 0}
$$

**Applicazioni della Formula di Taylor**

**Criterio per Estremi Locali.** *Sia $f \in \mathrm{C}^n(a,b)$ per $n \ge 2$ e sia $x_0 \in (a,b)$ tale che*

$$
f'(x_0) = 0 = f''(x_0) = \dots = f^{(n-1)}(x_0) \qquad \textit{e} \qquad f^{(n)}(x_0) \neq 0.
$$

*Se $n$ è pari, allora $f$ ammette in $x_0$ un*

- *minimo locale, se $f^{(n)}(x_0) > 0$,*
- *massimo locale, se $f^{(n)}(x_0) < 0$.*

*Se $n$ è dispari, allora $x_0$ $\textcolor{red}{\text{non}}$ è un punto di estremo locale di $f$.*

Il caso più importante è $n = 2$: Se $f'(x_0) = 0$ e

- $f''(x_0) > 0 \Rightarrow x_0$ è un punto di minimo locale,
- $f''(x_0) < 0 \Rightarrow x_0$ è un punto di massimo locale.

**Calcolo dei Limiti.** Generalizziamo prima il concetto di asintoticità dalle successioni alle funzioni.

**Definizione 5.15.** Se $\displaystyle\lim_{x \to x_0} \frac{f(x)}{g(x)} = 1$, allora si dice che $f(x)$ e $g(x)$ sono *asintotiche* e si scrive $f(x) \sim g(x)$ (o anche solo $f \sim g$) per $x \to x_0$.

**Osservazione.** Se $f \sim g$ per $x \to x_0$, allora $f(x)$ e $g(x)$ hanno lo stesso comportamento asintotico, cioè $f(x) \to l$ per $x \to x_0 \iff g(x) \to l$ per $x \to x_0$.

Come per le successioni anche per le funzioni vale il

**Teorema 5.16** (*Principio di Sostituzione*). *Se $f_1 \sim f_2$ e $g_1 \sim g_2$ per $x \to x_0$, allora*

$$
\begin{array}{l}
f_1 \cdot g_1 \sim f_2 \cdot g_2 \quad \textit{per } x \to x_0, \\[0.8em]
\textit{in particolare} \quad \displaystyle\lim_{x \to x_0} f_1(x) \cdot g_1(x) = l \iff \lim_{x \to x_0} f_2(x) \cdot g_2(x) = l \\[1.4em]
\dfrac{f_1}{g_1} \sim \dfrac{f_2}{g_2} \quad \textit{per } x \to x_0, \\[0.8em]
\textit{in particolare} \quad \displaystyle\lim_{x \to x_0} \frac{f_1(x)}{g_1(x)} = l \iff \lim_{x \to x_0} \frac{f_2(x)}{g_2(x)} = l
\end{array}
$$

Quindi in *prodotti* e *rapporti* si possono sostituire fattori o numeratore o denominatore con altre espressioni asintotiche senza cambiare il comportamento asintotico, in particolare senza cambiare il limite se esiste.

**Esempi.**

- $\sin(x) \sim x$ per $x \to 0$ poiché

$$
\lim_{x \to 0} \frac{\sin(x)}{x} = 1.
$$

- $1 - \cos(x) \sim \frac{x^2}{2}$ per $x \to 0$ poiché

$$
\lim_{x \to 0} \frac{1 - \cos(x)}{\frac{x^2}{2}} = \frac{1}{\frac{1}{2}} \cdot \lim_{x \to 0} \frac{1 - \cos(x)}{x^2} = 2 \cdot \frac{1}{2} = 1.
$$

Quindi per il principio di sostituzione vale

$$
\frac{\sin(x) \cdot \sin(x)}{1 - \cos(x)} = \frac{\sin^2(x)}{1 - \cos(x)} \sim \frac{x^2}{\frac{x^2}{2}} = 2.
$$

Come già per le successioni, il principio di sostituzione $\textcolor{red}{\boxed{\textbf{\textit{!!! NON !!!}}}}$ vale per somme, differenze o potenze, cioè se $f_1 \sim f_2$ e $g_1 \sim g_2$ per $x \to x_0$ allora

- $\textcolor{red}{\neq}\; f_1(x) \pm g_1(x) \sim f_2(x) \pm g_2(x)$ per $x \to x_0$,
- $\textcolor{red}{\neq}\; (f_1(x))^{g_1(x)} \sim (f_2(x))^{g_2(x)}$ per $x \to x_0$.

Quindi come già detto, in prodotti e in rapporti si possono sostituire espressioni (complicate) con altre espressioni asintotiche (più semplici) senza cambiare l'esistenza e il valore del limite. Come vedremo ciò permette di facilitare il calcolo dei limiti. A questo punto, però, si pone il seguente

**Problema.** Come si può trovare per una funzione $f_1$ (possibilmente complicata) una funzione $f_2$ (semplice) tale che $f_1(x) \sim f_2(x)$ per $x \to x_0$?

Per risolvere questo problema usiamo la seguente

**Proposizione 5.17.** *$f_1(x) \sim f_2(x)$ per $x \to x_0$* $\iff$ $f_1(x) = f_2(x) + o\big(f_2(x)\big)$ *per $x \to x_0$.*

**Esempi.**

- $\ln(1+x) = x + o(x)$ per $x \to 0 \iff \ln(1+x) \sim x$ per $x \to 0$.
- $f(x) = a_n(x - x_0)^n + o\big((x - x_0)^n\big)$ per $x \to x_0$ (con $a_n \neq 0$) $\iff f(x) \sim a_n(x - x_0)^n$ per $x \to x_0$.

L'idea è ora di rappresentare una funzione con la Formula di Taylor con resto di Peano e usare l'equivalenza del secondo esempio.

Più precisamente, dal principio di sostituzione e dalla proposizione precedente segue per $x \to x_0$

$$
\left.
\begin{aligned}
f_1(x) &= a_n \cdot (x - x_0)^n + o\big((x - x_0)^n\big) \\
g_1(x) &= b_m \cdot (x - x_0)^m + o\big((x - x_0)^m\big)
\end{aligned}
\right\}
\quad \Rightarrow \quad
\begin{cases}
f_1(x) \cdot g_1(x) \sim a_n b_m \cdot (x - x_0)^{n+m} \\[0.6em]
\dfrac{f_1(x)}{g_1(x)} \sim \dfrac{a_n}{b_m} \cdot (x - x_0)^{n-m}
\end{cases}
$$

se $a_n, b_m \neq 0$. Quindi nel caso del rapporto segue

$$
\begin{aligned}
\lim_{x \to x_0} \frac{f_1(x)}{g_1(x)} &= \lim_{x \to x_0} \frac{a_n}{b_m} \cdot (x - x_0)^{n-m} \\[0.6em]
&= \begin{cases}
0 & \text{se } n > m, \\[0.4em]
\tfrac{a_n}{b_m} & \text{se } n = m, \\[0.4em]
\text{non converge} & \text{se } n < m.
\end{cases}
\end{aligned}
$$

Riassumendo, per studiare il limite $\lim_{x \to x_0} \frac{f(x)}{g(x)}$ con Taylor si procede così:

- (1) Si cerca lo sviluppo del *denominatore* del tipo $g(x) = b_m \cdot (x - x_0)^m + o\big((x - x_0)^m\big)$ con $b_m \neq 0$, cioè $b_m \cdot (x - x_0)^m$ è il primo polinomio di Taylor di $g$ che non è identicamente $= 0$.
- (2) Si sviluppa il *numeratore* $f$ fino allo stesso ordine $m$. Non è necessario superare oltre all'ordine $m$ per ottenere un polinomio di Taylor del numeratore $\neq 0$ poiché se $f(x) = 0 + o\big((x - x_0)^m\big)$ il limite del rapporto è in ogni caso $= 0$.

**Esempi.**

- Studiamo

$$
\lim_{x \to 0} \frac{\sin(x) - x}{x^2 \cdot \sin(x)}.
$$

Come dalla regola generale iniziamo sempre con lo studio del denominatore. Qui non è necessario svilupparlo con Taylor, è invece più semplice semplificarlo usando il principio di sostituzione: $\sin(x) \sim x$ per $x \to 0$ e quindi

$$
\frac{\sin(x) - x}{x^2 \cdot \sin(x)} \sim \frac{\sin(x) - x}{x^3} \quad \text{per } x \to 0.
$$

Ora visto che il denominatore è di 3° ordine dobbiamo quindi sviluppare anche il numeratore fino al 3° ordine:

$$
\sin(x) = x - \tfrac{x^3}{6} + o(x^3) \quad \Rightarrow \quad \sin(x) - x = -\tfrac{x^3}{6} + o(x^3) \sim -\tfrac{x^3}{6} \quad \text{per } x \to 0.
$$

Così risulta per il principio di sostituzione

$$
\frac{\sin(x) - x}{x^3} \sim \frac{-\frac{x^3}{6}}{x^3} = -\frac{1}{6} \quad \text{per } x \to 0
$$

e quindi

$$
\lim_{x \to 0} \frac{\sin(x) - x}{x^2 \cdot \sin(x)} = -\frac{1}{6}.
$$

- Studiamo

$$
\lim_{x \to 0} \frac{\sin(2x) - \ln\big((1+x)^2\big)}{\cos\left(\frac{x}{2}\right) - 1}.
$$

Iniziamo sempre con il denominatore: Sappiamo che per $t \to 0$

$$
\begin{aligned}
\cos(t) = 1 - \tfrac{t^2}{2} + o(t^2) \;\overset{(t = \frac{x}{2})}{\Longrightarrow}\; \cos\left(\tfrac{x}{2}\right) - 1 &= -\frac{\left(\frac{x}{2}\right)^2}{2} + o\left(\left(\tfrac{x}{2}\right)^2\right) \\
&= -\tfrac{x^2}{8} + o(x^2) \sim -\tfrac{x^2}{8} \quad (x = 2t \to 0)
\end{aligned}
$$

Visto che il denominatore è di 2° ordine dobbiamo ora sviluppare anche il numeratore al 2° ordine.

Perciò notiamo prima che $\ln\big((1+x)^2\big) = 2 \cdot \ln(1+x)$, quindi

$$
\left.
\begin{aligned}
\sin(t) &= t + o(t^2) \quad (t \to 0) \;\overset{(t = 2x)}{\Longrightarrow}\; \sin(2x) = 2x + o\big((2x)^2\big) = 2x + o(x^2) \\
2 \cdot \ln(1+x) &= 2 \cdot \left(x - \tfrac{x^2}{2} + o(x^2)\right) = 2x - x^2 + o(x^2)
\end{aligned}
\right\} \Rightarrow
$$

$$
\sin(2x) - \ln\big((1+x)^2\big) = 2x + o(x^2) - \left(2x - x^2 + o(x^2)\right) = x^2 + o(x^2) \sim x^2 \quad (x \to 0)
$$

Così risulta

$$
\frac{\sin(2x) - \ln\big((1+x)^2\big)}{\cos\left(\frac{x}{2}\right) - 1} \sim \frac{x^2}{-\frac{x^2}{8}} = -8 \quad \text{per } x \to 0
$$

e quindi

$$
\lim_{x \to 0} \frac{\sin(2x) - \ln\big((1+x)^2\big)}{\cos\left(\frac{x}{2}\right) - 1} = -8.
$$

**Regole per il Calcolo con gli $o(\cdot)$.** Per $x \to x_0$ con $x_0 \in \mathbb{R}$ vale

- $\alpha \cdot o(f) = o(f)$ per ogni $\alpha \in \mathbb{R}$, per esempio $2\,o(x^n) = o(x^n)$;
- $o(\alpha \cdot f) = o(f)$ per ogni $0 \neq \alpha \in \mathbb{R}$, per esempio $o(4\,x^n) = o(x^n)$;
- $o(f) \pm o(f) = o(f)$, per esempio $o(x^n) + o(x^n) = o(x^n)$;
- $f \cdot o(g) = o(f \cdot g)$, per esempio $x^m \cdot o(x^n) = o(x^{m+n})$;
- $o(f) \cdot o(g) = o(f \cdot g)$, per esempio $o(x^m) \cdot o(x^n) = o(x^{m+n})$;
- $o(o(f)) = o(f)$, per esempio $o(o(x^n)) = o(x^n)$;
- $o\big((x - x_0)^m\big) = o\big((x - x_0)^n\big)$ se $m \ge n$, per esempio $o(x^4) = o(x^2)$ per $x \to 0$.
- $(x - x_0)^m = o\big((x - x_0)^n\big)$ se $m > n$, per esempio $x^5 = o(x^4)$ per $x \to 0$.
- se $f \sim g$ allora $o(f) = o(g)$, p.e. $\sin(x) \sim x$ e quindi $o(\sin(x)) = o(x)$ per $x \to 0$;
- se $f(x) \sim g(x)$ per $x \to x_0$ e $\varphi(t) \to x_0$ per $t \to t_0$ allora $f(\varphi(t)) \sim g(\varphi(t))$ per $t \to t_0$, p.e. $\ln(1+x) \sim x$ $(x \to 0)$ e $\sin(t) \to 0$ $(t \to 0)$ allora $\ln(1 + \sin(t)) \sim \sin(t) \sim t$ $(t \to 0)$.

Qui, come sempre, con $o(f)$ si deve immaginare la *qualità* di un resto di tendere più velocemente a 0 di $f$ e $\textcolor{red}{\textit{non}}$ una quantità.

In particolare in generale si ha

- $o(f) = o(g) \;\textcolor{red}{\neq}\; o(g) = o(f)$,
- $f + o(h) = g + o(h) \;\textcolor{red}{\neq}\; f = g$,
- $o(f) - o(f) \,\textcolor{red}{\neq}\, 0$.

**Esempi.**

- Calcolare, se esiste,

$$
\lim_{x \to 0} \frac{e^{\frac{x}{2}} - \sqrt{1 + \sin(x)}}{\ln\big(\cos(x)\big)}.
$$

**Soluzione.** Tutti gli sviluppi si intendono per $x \to 0$. Iniziamo con il denominatore. Visto che si tratta di un'unica espressione è più semplice usare l'ultima regola e il principio di sostituzione anziché svilupparlo con Taylor (che comunque faremo nel prossimo esercizio).

Prima serve un piccolo trucco

$$
\ln\big(\cos(x)\big) = \ln\Big(1 + \overbrace{\big(\cos(x) - 1\big)}^{=:t \to 0}\Big) \sim t = \cos(x) - 1 \sim -\frac{x^2}{2}.
$$

Abbiamo verificato l'ultima equazione (con segno opposto). Si potrebbe, però, anche ragionare usando lo sviluppo

$$
\cos(x) = 1 - \tfrac{x^2}{2} + o(x^2) \quad \Rightarrow \quad \cos(x) - 1 = -\tfrac{x^2}{2} + o(x^2) \sim -\tfrac{x^2}{2}.
$$

Poiché il denominatore è di 2° ordine, dobbiamo sviluppare anche il numeratore fino al 2° ordine: Ponendo $t = \frac{x}{2}$ otteniamo

$$
e^t = 1 + t + \tfrac{t^2}{2} + o(t^2) = 1 + \frac{x}{2} + \frac{\left(\frac{x}{2}\right)^2}{2} + o\left(\left(\tfrac{x}{2}\right)^2\right) = 1 + \tfrac{x}{2} + \tfrac{x^2}{8} + o(x^2) = e^{\frac{x}{2}}.
$$

Inoltre ponendo ora $t := \sin(x)$ segue (per lo sviluppo della radice $\sqrt{1+t}$)

$$
\begin{aligned}
\sqrt{1+t} &= 1 + \tfrac{t}{2} - \tfrac{t^2}{8} + o(t^2) \\[0.6em]
&= 1 + \tfrac{\sin(x)}{2} - \tfrac{\sin^2(x)}{8} + o\big(\overbrace{\sin^2(x)}^{\sim x^2}\big) = \sqrt{1 + \sin(x)}.
\end{aligned}
$$

Per la penultima regola segue $o(\sin^2(x)) = o(x^2)$ e usando lo sviluppo $\sin(x) = x + o(x^2)$ segue

$$
\begin{aligned}
\sqrt{1 + \sin(x)} &= 1 + \tfrac{x + o(x^2)}{2} - \tfrac{\left(x + o(x^2)\right)^2}{8} + o(x^2) \\[0.6em]
&= 1 + \tfrac{x + o(x^2)}{2} - \frac{x^2 + \overbrace{2x \cdot o(x^2)}^{=o(x^3)=o(x^2)} + \overbrace{o(x^2)^2}^{=o(x^4)=o(x^2)}}{8} + o(x^2) = 1 + \tfrac{x}{2} - \tfrac{x^2}{8} + o(x^2).
\end{aligned}
$$

Quindi

$$
\begin{aligned}
e^{\frac{x}{2}} - \sqrt{1 + \sin(x)} &= 1 + \tfrac{x}{2} + \tfrac{x^2}{8} + o(x^2) - \left(1 + \tfrac{x}{2} - \tfrac{x^2}{8} + o(x^2)\right) \\[0.6em]
&= 2 \cdot \tfrac{x^2}{8} + o(x^2) = \tfrac{x^2}{4} + o(x^2) \sim \tfrac{x^2}{4}.
\end{aligned}
$$

Qui è importante osservare che soltanto dopo aver sviluppato *tutto* il numeratore si usa l'asintoticità, farlo prima significherebbe usare il principio di sostituzione per una differenza (che è gravemente sbagliato!!).

Quindi per il principio di sostituzione per rapporti risulta

$$
\frac{e^{\frac{x}{2}} - \sqrt{1 + \sin(x)}}{\ln\big(\cos(x)\big)} \sim \frac{\frac{x^2}{4}}{-\frac{x^2}{2}} = -\frac{1}{2}
$$

da cui

$$
\lim_{x \to 0} \frac{e^{\frac{x}{2}} - \sqrt{1 + \sin(x)}}{\ln\big(\cos(x)\big)} = -\frac{1}{2}. \qquad \square
$$

- Calcolare, se esiste,

$$
\lim_{x \to 0} \frac{1 - \cos(x) + \ln\big(\cos(x)\big)}{x^4 + x^5}.
$$

**Soluzione.** Tutti gli sviluppi si intendono per $x \to 0$. Iniziamo come sempre con il denominatore: Visto che $x^5 = o(x^4)$ risulta

$$
x^4 + x^5 = x^4 + o(x^4) \sim x^4.
$$

Quindi il numeratore è da sviluppare fino al 4° ordine.

$$
\cos(x) = 1 - \frac{x^2}{2} + \frac{x^4}{24} + o(x^4) \quad \Rightarrow \quad 1 - \cos(x) = \frac{x^2}{2} - \frac{x^4}{24} + o(x^4).
$$

Mentre nell'esempio precedente era sufficiente osservare che $\ln(\cos(x)) \sim -\frac{x^2}{2}$ qui $\textcolor{red}{\textit{non}}$ possiamo ragionare così altrimenti si applicherebbe il principio di sostituzione a una differenza. Dobbiamo invece sviluppare $\ln(\cos(x))$ fino al 4° ordine: Allora

$$
\ln\big(\cos(x)\big) = \ln\Big(1 + \overbrace{\big(\cos(x) - 1\big)}^{=:t \to 0}\Big)
$$

con

$$
\ln(1+t) = t - \frac{t^2}{2} + o(t^2)
$$

e

$$
t = \cos(x) - 1 = -\frac{x^2}{2} + \frac{x^4}{24} + o(x^4) = -\frac{x^2}{2} + o(x^2).
$$

Non è necessario sviluppare $\ln(1+t)$ fino a $t^4$ poiché $t = \cos(x) - 1$ è di ordine 2 e di conseguenza $t^2$ espresso in $x$ diventa di 4° ordine.

Inoltre, nello sviluppo di $\ln(1+t)$ dobbiamo sostituire $t$ con $\cos(x) - 1$ sviluppato fino al 4° ordine mentre nell'espressione $\frac{t^2}{2}$ basta come vedremo lo sviluppo fino al 2° ordine. Non è sbagliato usare anche lì lo sviluppo fino al 4° ordine, soltanto i conti si complicheranno leggermente. La cosa importante è che alla fine $\textcolor{red}{\textit{non}}$ ci saranno resti $o(x^k)$ con $k < 4$. Quindi

$$
\begin{aligned}
\ln\big(\cos(x)\big) &= \big(\cos(x) - 1\big) - \frac{\big(\cos(x) - 1\big)^2}{2} + o\Big(\overbrace{\underbrace{\big(\cos(x) - 1\big)^2}_{=o(x^4)}}^{\sim \left(-\frac{x^2}{2}\right)^2 = \frac{x^4}{4}}\Big) \\[0.8em]
&= \left(-\frac{x^2}{2} + \frac{x^4}{24} + o(x^4)\right) - \frac{\left(-\frac{x^2}{2} + o(x^2)\right)^2}{2} + o(x^4) \\[0.8em]
&= -\frac{x^2}{2} + \frac{x^4}{24} - \frac{\left(\frac{x^2}{2}\right)^2 \overbrace{- x^2 \cdot o(x^2) + o(x^2)^2}^{=o(x^4)}}{2} + o(x^4) \\[0.8em]
&= -\frac{x^2}{2} + \frac{x^4}{24} - \frac{x^4}{8} + o(x^4) = -\frac{x^2}{2} - \frac{x^4}{12} + o(x^4).
\end{aligned}
$$

Così per il numeratore segue

$$
\begin{aligned}
1 - \cos(x) + \ln\big(\cos(x)\big) &= \left(\frac{x^2}{2} - \frac{x^4}{24} + o(x^4)\right) + \left(-\frac{x^2}{2} - \frac{x^4}{12} + o(x^4)\right) \\[0.8em]
&= -\frac{x^4}{24} - \frac{x^4}{12} + o(x^4) = -\frac{1}{8} x^4 + o(x^4) \sim -\frac{1}{8} \cdot x^4.
\end{aligned}
$$

Per il rapporto segue con il principio di sostituzione

$$
\frac{1 - \cos(x) + \ln\big(\cos(x)\big)}{x^4 + x^5} \sim \frac{-\frac{1}{8} \cdot x^4}{x^4} = -\frac{1}{8}
$$

e quindi

$$
\lim_{x \to 0} \frac{1 - \cos(x) + \ln\big(\cos(x)\big)}{x^4 + x^5} = -\frac{1}{8}. \qquad \square
$$

- Calcolare, se esiste,

$$
\lim_{x \to 0} \frac{e^{\sin(x)} - \frac{\sin(x)}{x} - x}{\tan^2(3x)}.
$$

**Soluzione.** Per $x \to 0$ anche $t := 3x \to 0$ e quindi vale

$$
\tan(t) = \frac{\sin(t)}{\cos(t)} \sim \frac{t}{1} = t \;\overset{(t=3x)}{\Longrightarrow}\; \tan^2(3x) \sim (3x)^2 = 9x^2.
$$

Allora dobbiamo sviluppare il numeratore fino al 2° ordine: Da

$$
e^t = 1 + t + \frac{t^2}{2} + o(t^2) \qquad \text{e} \qquad \sin(x) = x + o(x^2)
$$

segue con $t := \sin(x) \to 0$ per $x \to 0$

$$
\begin{aligned}
e^{\sin(x)} &= 1 + \sin(x) + \frac{\sin^2(x)}{2} + o\big(\sin^2(x)\big) \\[0.6em]
&= 1 + x + o(x^2) + \frac{\left(x + o(x^2)\right)^2}{2} + o(x^2) \\[0.6em]
&= 1 + x + \frac{x^2 + 2x \cdot o(x^2) + o(x^2)^2}{2} + o(x^2) \\[0.6em]
&= 1 + x + \frac{x^2}{2} + o(x^2).
\end{aligned}
$$

Inoltre

$$
\sin(x) = x - \frac{x^3}{6} + o(x^3) \qquad \text{quindi} \qquad
\begin{aligned}
\frac{\sin(x)}{x} &= 1 - \frac{x^3}{6x} + \overbrace{\frac{1}{x} \cdot o(x^3)}^{=o\left(\frac{1}{x} \cdot x^3\right) = o(x^2)} \\[0.6em]
&= 1 - \frac{x^2}{6} + o(x^2).
\end{aligned}
$$

Notiamo che qui era necessario sviluppare $\sin(x)$ fino al 3° ordine poiché la divisione per $x$ abbassa l'ordine per 1. Così risulta

$$
\begin{aligned}
e^{\sin(x)} - \frac{\sin(x)}{x} - x &= 1 + x + \frac{x^2}{2} - \left(1 - \frac{x^2}{6}\right) - x + o(x^2) \\[0.6em]
&= \frac{2}{3} \cdot x^2 + o(x^2) \sim \frac{2}{3} \cdot x^2
\end{aligned}
$$

e quindi

$$
\frac{e^{\sin(x)} - \frac{\sin(x)}{x} - x}{\tan^2(3x)} \sim \frac{\frac{2}{3} \cdot x^2}{9 \cdot x^2} = \frac{2}{27}
$$

che implica

$$
\lim_{x \to 0} \frac{e^{\sin(x)} - \frac{\sin(x)}{x} - x}{\tan^2(3x)} = \frac{2}{27}. \qquad \square
$$

Concludiamo questi esempi con una

**Osservazione.** In questo esempi abbiamo calcolato sviluppi di diverse funzioni usando sviluppi noti e le regole per il calcolo con gli $o(\cdot)$ *senza* fare alcuna derivata. Usando la terza osservazione in questa maniera abbiamo anche calcolato i polinomi di Taylor.

Per esempio

$$
\begin{array}{lcl}
f(x) := \sqrt{1 + \sin(x)} = 1 + \frac{x}{2} - \frac{x^2}{8} + o(x^2) & \quad \Rightarrow \quad & T_2(x) = 1 + \frac{x}{2} - \frac{x^2}{8}, \\[0.8em]
f(x) := \ln\big(\cos(x)\big) = -\frac{x^2}{2} - \frac{x^4}{12} + o(x^4) & \quad \Rightarrow \quad & T_4(x) = -\frac{x^2}{2} - \frac{x^4}{12}, \\[0.8em]
f(x) := e^{\sin(x)} = 1 + x + \frac{x^2}{2} + o(x^2) & \quad \Rightarrow \quad & T_2(x) = 1 + x + \frac{x^2}{2},
\end{array}
$$

dove il polinomio di Taylor si riferisce alla corrispondente funzione $f$ e il centro $x_0 = 0$.

Mentre le prime due applicazioni della Formula di Taylor usavano il resto di Peano, la terza fa uso del resto di Lagrange.

**Calcolo Numerico.**

**Problema.** Data una funzione (possibilmente complicata) $f : (a,b) \to \mathbb{R}$ e $x \in (a,b)$, trovare un valore approssimato per $f(x)$.

Per esempio calcolare $\cos\left(\frac{1}{2}\right)$ con un errore $< 10^{-3}$.

L'idea per risolvere questo problema è di usare la Formula di Taylor con resto di Lagrange: Esiste $c$ tra $x$ e $x_0$ tale che

$$
f(x) = \underbrace{\sum_{k=0}^{n} \frac{f^{(k)}(x_0)}{k!} \cdot (x - x_0)^k}_{=T_n(x)} + \underbrace{\frac{f^{(n+1)}(c)}{(n+1)!} \cdot (x - x_0)^{n+1}}_{=R_n(x)}
$$

dove il centro $x_0 \in (a,b)$ e l'ordine $n$ sono ancora da determinare. Se sappiamo che $\lvert f^{(n+1)}(s) \rvert \le M$ per ogni $s \in (a,b)$ allora possiamo stimare l'errore $R_n(x) = f(x) - T_n(x)$

$$
\lvert R_n(x) \rvert = \left\lvert \frac{f^{(n+1)}(c)}{(n+1)!} \right\rvert \cdot \lvert x - x_0 \rvert^{n+1} \le \frac{M}{(n+1)!} \cdot \lvert x - x_0 \rvert^{n+1}
$$

e così si può valutare la precisione dell'approssimazione.

Rimane la scelta del centro $x_0 \in (a,b)$ che deve rispettare i seguenti principi:

- (i) in $x_0$ si devono conoscere valore e tutte le derivate di $f$ fino al $n$-esimo ordine, cioè $f^{(k)}(x_0)$ per $k = 0, 1, \dots, n$, altrimenti non si può calcolare $T_n$ esplicitamente;
- (ii) tra tutti i punti in (i) si sceglie quello che sta più vicino a $x$ in maniera che il fattore $\lvert x - x_0 \rvert^{n+1} =$ (distanza tra $x$ e $x_0$)$^{n+1}$ sia più piccolo possibile.

Se, fortunatamente, $\lvert x - x_0 \rvert < 1$, allora le potenze $\lvert x - x_0 \rvert^{n+1} \to 0$ per $n \to +\infty$ e quindi contribuiscono, insieme al fattoriale $(n+1)!$ nel denominatore, a diminuire l'errore $\lvert R_n(x) \rvert$ fatto.

Consideriamo alcuni esempi concreti:

**Esempi.**

- Calcolare $\cos\left(\frac{1}{2}\right)$ con un errore $< 10^{-3}$.

**Soluzione.** Qui $f = \cos$ e $x = \frac{1}{2}$. Visto che qualsiasi derivata di $f$ è data da $\pm\sin(x)$ oppure $\pm\cos(x)$ vale

$$
\lvert f^{(k)}(s) \rvert \le 1 =: M \qquad \text{per ogni } k \in \mathbb{N} \text{ ed ogni } s \in \mathbb{R}.
$$

Passiamo alla scelta del centro $x_0$. Il punto più vicino a $x = \frac{1}{2}$ nel quale si conoscono tutte le derivate di $f = \cos$ è $x_0 = 0$. Così otteniamo la stima

$$
\lvert R_n(x) \rvert \le \frac{1}{(n+1)!} \cdot \left\lvert \frac{1}{2} - 0 \right\rvert^{n+1} = \frac{1}{(n+1)! \cdot 2^{n+1}} \overset{!}{<} 10^{-3}
$$

Questo è una disuguaglianza in $n$ che è equivalente a

$$
(n+1)! \cdot 2^{n+1} > 1000.
$$

Per trovare il valore $n \in \mathbb{N}$ più piccolo che verifica questa relazione si deve procedere per tentativi:

| $n$ | $(n+1)! \cdot 2^{n+1}$ |
| --- | --- |
| 1 | $2 \cdot 4 = 8$ |
| 2 | $6 \cdot 8 = 48$ |
| 3 | $24 \cdot 16 = 384$ |
| 4 | $120 \cdot 32 = 3840 > 1000$ $\checkmark$ |

Quindi possiamo scegliere $n = 4$ e così risulta

$$
\left\lvert \cos\left(\tfrac{1}{2}\right) - T_4\left(\tfrac{1}{2}\right) \right\rvert \le \frac{1}{3840} < 10^{-3}.
$$

Infine $T_4$ è dato da

$$
T_4(x) = 1 - \frac{x^2}{2} + \frac{x^4}{24} \qquad \Rightarrow \qquad T_4\left(\tfrac{1}{2}\right) = 1 - \frac{\left(\frac{1}{2}\right)^2}{2} + \frac{\left(\frac{1}{2}\right)^4}{24} = \frac{337}{384}.
$$

Riassumendo abbiamo verificato che

$$
\left\lvert \cos\left(\tfrac{1}{2}\right) - \frac{337}{384} \right\rvert \le \frac{1}{3840} < 10^{-3},
$$

cioè la soluzione è $\frac{337}{384} = 0{,}87760416\overline{6}$.

**Serie di Taylor**

Se per $f \in \mathrm{C}^\infty(a,b)$ esiste $M \ge 0$ tale che

$$
\left\lvert f^{(k)}(x) \right\rvert \le M^k \qquad \text{per ogni } x \in (a,b) \text{ ed ogni } k \in \mathbb{N}
$$

allora possiamo stimare il resto $R_n(x) = f(x) - T_n(x)$ come

$$
\lvert R_n(x) \rvert = \left\lvert \frac{f^{(n+1)}(c)}{(n+1)!} \right\rvert \cdot \lvert x - x_0 \rvert^{n+1} \le \underbrace{\frac{M^{n+1}}{(n+1)!} \cdot \lvert x - x_0 \rvert^{n+1}}_{=:r_n} \to 0 \qquad \text{per } n \to +\infty.
$$

Per verificare che $\displaystyle\lim_{n \to +\infty} r_n = 0$ si usa un trucco: Calcoliamo

$$
\frac{r_{n+1}}{r_n} = \frac{M^{n+2}}{(n+2)!} \cdot \frac{\lvert x - x_0 \rvert^{n+2}}{\lvert x - x_0 \rvert^{n+1}} \cdot \frac{(n+1)!}{M^{n+1}} = \frac{M \cdot \lvert x - x_0 \rvert}{n+2} \to 0 =: q < 1.
$$

**Proposizione 5.18.** *Sia $f \in \mathrm{C}^\infty(a,b)$ e $x_0 \in (a,b)$. Se esiste $M \ge 0$ tale che $\lvert f^{(k)}(x) \rvert \le M^k$ per ogni $x \in (a,b)$ e ogni $k \in \mathbb{N}$, allora*

$$
f(x) = \lim_{n \to +\infty} \underbrace{\sum_{k=0}^{n} \frac{f^{(k)}(x_0)}{k!} \cdot (x - x_0)^k}_{= T_n(x) \;\textit{Polinomio di Taylor}} = \underbrace{\sum_{k=0}^{+\infty} \frac{f^{(k)}(x_0)}{k!} \cdot (x - x_0)^k}_{=: \;\textit{Serie di Taylor}}
$$

Quindi, se $f$ è $\mathrm{C}^\infty$ e le derivate $f^{(k)}$ non crescono troppo rapidamente con l'ordine $k$, $f(x)$ si può rappresentare come *Serie di Taylor*

$$
\boxed{f(x) = \sum_{k=0}^{+\infty} \frac{f^{(k)}(x_0)}{k!} \cdot (x - x_0)^k \quad \text{per ogni } x \in (a,b)}
$$

**Esempi.**

- $\sin \in \mathrm{C}^\infty(\mathbb{R})$ con $\lvert \sin^{(k)}(x) \rvert \le 1 =: M = M^k$ per ogni $x \in \mathbb{R}$ e ogni $k \in \mathbb{N}$ e quindi dallo sviluppo segue (con $x_0 = 0$)

$$
\boxed{\sin(x) = \sum_{k=0}^{+\infty} (-1)^k \cdot \frac{x^{2k+1}}{(2k+1)!} \quad \text{per ogni } x \in \mathbb{R}}
$$

Similmente seguono i seguenti sviluppi di altre funzioni elementari

- $\displaystyle\boxed{\cos(x) = \sum_{k=0}^{+\infty} (-1)^k \cdot \frac{x^{2k}}{(2k)!} \quad \text{per ogni } x \in \mathbb{R}}$
- $\displaystyle\boxed{e^x = \sum_{k=0}^{+\infty} \tfrac{x^k}{k!} \quad \text{per ogni } x \in \mathbb{R}}$
- $\displaystyle\boxed{\sinh(x) = \sum_{k=0}^{+\infty} \frac{x^{2k+1}}{(2k+1)!} \quad \text{per ogni } x \in \mathbb{R}}$
- $\displaystyle\boxed{\cosh(x) = \sum_{k=0}^{+\infty} \frac{x^{2k}}{(2k)!} \quad \text{per ogni } x \in \mathbb{R}}$

- $\displaystyle\boxed{\ln(1+x) = \sum_{k=1}^{+\infty} (-1)^{k+1} \cdot \frac{x^k}{k} \quad \text{per ogni } x \in (-1,1)}$
- $\displaystyle\boxed{(1+x)^\alpha = \sum_{k=0}^{+\infty} \binom{\alpha}{k} \cdot x^k \quad \text{per ogni } \alpha \in \mathbb{R} \text{ e } x \in (-1,1)}$
- $\displaystyle\boxed{\arctan(x) = \sum_{k=0}^{+\infty} (-1)^k \cdot \frac{x^{2k+1}}{2k+1} \quad \text{per ogni } x \in (-1,1)}$
- $\displaystyle\boxed{\operatorname{artanh}(x) = \sum_{k=0}^{+\infty} \frac{x^{2k+1}}{2k+1} \quad \text{per ogni } x \in (-1,1)}$

# Studio di funzione

**Studio di Funzione**

**Problema.** Data una funzione $f : X \subseteq \mathbb{R} \to \mathbb{R}$, tracciare un grafico approssimativo di $f$.

Per risolvere questo problema conviene procedere cercando di seguire lo schema seguente più possibile. Si tenga presente che spesso non è possibile eseguire tutti i punti sottoelencati. In questi casi le informazioni mancanti (p.e. esistenza di zeri, estremi locali ecc.) si possono eventualmente dedurre alla fine dello studio come conseguenza delle altre informazioni.

- (i) *Determinazione del dominio $X$:* Sono da individuare tutti i punti $x \in \mathbb{R}$ per i quali l'espressione $f(x)$ sia ben definita. Per esempio
  - argomenti sotto radici di ordine pari devono essere $\geq 0$,
  - argomenti di logaritmi devono essere $> 0$,
  - la base di un'esponenziale deve essere $> 0$,
  - denominatori devono essere $\neq 0$, ecc.

  In generale, per calcolare il dominio $X$ di una funzione si deve risolvere un sistema di disequazioni.

  **Esempio.** Sia $f(x) := \dfrac{\sin(x^2)}{\sqrt{2 - \ln(x^2 - 2)}}$. Allora il numeratore è definito per ogni $x \in \mathbb{R}$ mentre per il denominatore si deve verificare

  $$
  \begin{aligned}
  & x^2 - 2 > 0 \quad \text{e} \quad 2 - \ln(x^2 - 2) > 0 \\
  \iff \quad & x^2 > 2 \quad \text{e} \quad 2 > \ln(x^2 - 2) \\
  \iff \quad & \lvert x \rvert > \sqrt{2} \quad \text{e} \quad e^2 > x^2 - 2 \\
  \iff \quad & \lvert x \rvert > \sqrt{2} \quad \text{e} \quad \lvert x \rvert < \sqrt{e^2 + 2} \\
  \iff \quad & x \in \bigl(-\sqrt{e^2 + 2}, -\sqrt{2}\bigr) \cup \bigl(\sqrt{2}, \sqrt{e^2 + 2}\bigr).
  \end{aligned}
  $$
- (ii) *Simmetrie (pari, dispari) e periodicità.*
- (iii) *Intersezioni con gli assi:* Con l'asse-$x$: risolvere l'equazione $f(x) = 0$. Con l'asse $y$: se $0 \in X$ calcolare $f(0)$.
- (iv) *Segno della funzione:* Risolvere l'equazione $f(x) > 0$ (o $f(x) < 0$).

- (v) *Calcolo dei limiti (da destra/sinistra) alla frontiera di $X$:* Si calcolano i limiti (da destra/sinistra) di $f(x)$ negli estremi finiti, se esistono, del dominio $X$ e si deducono gli eventuali *asintoti verticali*. Se $X$ è illimitato, si calcolano inoltre i limiti $\displaystyle\lim_{x \to \pm\infty} f(x) =: l$, determinando se vi sono *asintoti orizzontali* $y = l$ (se $l \in \mathbb{R}$). Se invece $l = \pm\infty$ si procede con la
- (vi) *Individuazione degli asintoti obliqui:* Se esistono $m \neq 0$ e $q \in \mathbb{R}$ tale che

  $$
  \lim_{x \to +\infty} \bigl(f(x) - [m \cdot x + q]\bigr) = 0 \qquad \text{e/o} \qquad \lim_{x \to -\infty} \bigl(f(x) - [m \cdot x + q]\bigr) = 0
  $$

  allora si dice che la retta $y = mx + q$ è *asintoto obliquo* per $f$ a $+\infty$ e/o $-\infty$. Graficamente ciò significa che la distanza tra il grafico di $f$ e la retta $y = mx + q$ tende a $0$ per $x \to \pm\infty$. Per verificare l'esistenza di un asintoto obliquo si procede come segue:

  Si verifica prima se esiste finito il limite

  $$
  \lim_{x \to \pm\infty} \frac{f(x)}{x} =: m \neq 0 \qquad = \text{pendenza dell'asintoto.}
  $$

  Nel caso affermativo si verifica se esiste finito il limite

  $$
  \lim_{x \to \pm\infty} \bigl(f(x) - mx\bigr) =: q \qquad = \text{ordinata all'origine dell'asintoto.}
  $$

  Se entrambi i limiti convergono (in $\mathbb{R}$) con $m \neq 0$, allora $y = mx + q$ è asintoto obliquo di $f$ per $x \to \pm\infty$.

- (vii) *Studio della derivata prima (crescenza/decrescenza, punti critici ed estremi locali):* Si calcola la derivata prima $f'(x)$ e il corrispondente dominio. Risolvendo l'equazione $f'(x) = 0$ si calcolano i punti critici $x_0$ di $f$. Eventualmente, studiando il cambiamento del segno di $f'(x)$ in $x = x_0$ (o studiando le derivate successive in $x_0$, cfr. punto successivo) si può classificare la natura del punto critico (minimo o massimo locale). Infine si studia il segno di $f'(x)$ per ottenere informazioni sulla monotonia di $f$.
- (viii) *Studio della derivata seconda (estremi locali, concavità/convessità, punti di flesso):* Si calcola (se non si ottiene un espressione troppo complessa) la derivata seconda. Se i punti critici non sono già stati classificati nel punto (vii) si calcolano i valori di $f''$ nei punti critici per poi applicare il criterio per estremi locali.

**Definizione.** Sia $f : X \subseteq \mathbb{R} \to \mathbb{R}$ derivabile in $(a, b) \subset X$. Se $f'(x)$ in $(a, b)$ è

- crescente, allora si dice che $f$ è *convessa* (oppure *concava verso l'alto*) in $(a, b)$,
- decrescente, allora si dice che $f$ è *concava* (oppure *concava verso il basso*) in $(a, b)$.

```plot
x: [0, 3]
y: [0, 2.4]
width: 300
height: 220
axes: true
items:
  - fn: f(x) = 0.6 + 1.2*(x - 1.4)^2 / 1.4^2
    domain: [0.3, 2.9]
  - text: $f$ convessa
    at: [1.5, 2.2]
    anchor: e
```

```plot
x: [0, 3]
y: [0, 2.4]
width: 300
height: 220
axes: true
caption: Funzioni convesse e concave.
items:
  - fn: f(x) = 1.9 - 1.2*(x - 1.3)^2 / 1.3^2
    domain: [0.3, 2.7]
  - text: $f$ concava
    at: [1.5, 2.2]
    anchor: e
```

Dal test di monotonia segue che se $f \in C^2(a, b)$, allora

$$
\begin{aligned}
f \text{ è convessa in } (a, b) &\iff f' \text{ è crescente in } (a, b) \iff f''(x) \geq 0 \text{ per ogni } x \in (a, b), \\
f \text{ è concava in } (a, b) &\iff f' \text{ è decrescente in } (a, b) \iff f''(x) \leq 0 \text{ per ogni } x \in (a, b).
\end{aligned}
$$

Diremo che $f : (a, b) \to \mathbb{R}$ ammette retta tangente in $x_0 \in (a, b)$ se il rapporto incrementale di $f$ in $x_0$ ammette limite (finito o infinito), cioè se esiste

$$
\lim_{x \to x_0} \frac{f(x) - f(x_0)}{x - x_0} \in \overline{\mathbb{R}}.
$$

**Definizione.** Un punto $x_0 \in (a, b)$ si chiama *(punto di) flesso* di $f : (a, b) \to \mathbb{R}$, se $f$ è continua in $(a, b)$, derivabile in $(a, b) \setminus \{x_0\}$ e se

- $f$ ammette retta tangente in $x_0$, e
- la concavità di $f$ è opposta dalle due parti di $x_0$.

Si nota che per $f \in \mathrm{C}^2(a, b)$ in un punto di flesso $x_0 \in (a, b)$ vale necessariamente $f''(x_0) = 0$ per il teorema degli zeri.

**Esempi.**

- Sia $f(x) = x^3$. Allora $f'(x) = 3x^2$ e $f''(x) = 6x$. Visto che $f''(x) < 0$ per $x < 0$ e $f''(x) > 0$ per $x > 0$, l'origine è un punto di flesso di $f$.
- Sia $f(x) = \sqrt[3]{x}$. Allora $f$ ammette una retta tangente verticale in $x_0 = 0$. Inoltre $f'(x) = (x^{\frac{1}{3}})' = \dfrac{x^{-\frac{2}{3}}}{3}$ e $f''(x) = -\dfrac{2}{3} \cdot \dfrac{x^{-\frac{2}{3}-1}}{3} = -\dfrac{2 \cdot x^{-\frac{5}{3}}}{9}$ per $x \neq 0$. Quindi $f''(x) > 0$ per $x < 0$ e $f''(x) < 0$ per $x > 0$ e allora l'origine è un punto di flesso di $f$.
- Sia $f(x) = \lvert x \rvert + x^3$. Allora il rapporto incrementale di $f$ in $x_0 = 0$ è dato da

  $$
  \lim_{h \to 0^{\pm}} \frac{f(h) - f(0)}{h} = \lim_{h \to 0^{\pm}} \frac{\lvert h \rvert + h^3}{h} = \lim_{h \to 0^{\pm}} \left( \frac{\lvert h \rvert}{h} + h^2 \right) = \pm 1.
  $$

  Quindi $f$ non ammette tangente in $x_0 = 0$ e quindi $(0, 0)$ $\textcolor{red}{\textit{non}}$ è un punto di flesso di $f$, nonostante che $f$ cambia concavità in quel punto.

```plot
x: [-1.6, 1.6]
y: [-1.5, 1.5]
width: 300
height: 220
axes: true
xlabel: $x$
items:
  - fn: f(x) = x^3
    domain: [-1.1, 1.1]
  - text: $x^3$
    at: [0.08, 1.35]
    anchor: e
  - text: flesso
    at: [0.08, -0.25]
    anchor: e
```

```plot
x: [-1.6, 1.6]
y: [-1.5, 1.5]
width: 300
height: 220
axes: true
xlabel: $x$
items:
  - fn: f(x) = sign(x) * abs(x)^(1/3)
    domain: [-1.5, 1.5]
  - text: $\sqrt[3]{x}$
    at: [0.08, 1.35]
    anchor: e
  - text: flesso
    at: [0.08, -0.25]
    anchor: e
```

```plot
x: [-1.6, 1.6]
y: [-1.2, 1.8]
width: 300
height: 220
axes: true
xlabel: $x$
caption: Punti di flesso e no.
items:
  - fn: f(x) = abs(x) + x^3
    domain: [-1.2, 0.9]
  - text: $\lvert x \rvert + x^3$
    at: [0.08, 1.65]
    anchor: e
  - text: non flesso
    at: [0.08, -0.5]
    anchor: e
```

Seguendo questo schema è utile tracciare il grafico gradualmente, inserendo le informazioni via via raccolte anziché raccogliere tutto e poi fare il grafico: i processi graduali aiutano a controllare la coerenza del procedimento e a capire quali informazioni è ancora utile raccogliere.

Consideriamo ora un esempio completo.

**Esempio.** Studiare la funzione $f(x) = e^{\frac{1}{x-3}} \cdot \lvert x+3 \rvert$ e tracciarne un grafico approssimativo.

**Soluzione:**

- (i) *Dominio:* $f(x)$ è definito per ogni $x \neq 3$ e quindi $X = (-\infty, 3) \cup (3, +\infty)$.
- (ii) *Simmetrie:* il grafico di $f$ non rappresenta simmetrie.
- (iii) *Intersezione con gli assi:* Visto che la funzione esponenziale è sempre $> 0$, $f(x) = 0 \iff \lvert x+3 \rvert = 0 \iff x+3 = 0 \iff x = -3$. Inoltre vale $0 \in X$ e $f(0) = e^{\frac{1}{-3}} \cdot \lvert 3 \rvert = \dfrac{3}{\sqrt[3]{e}}$.
- (iv) *Segno di $f(x)$:* Visto che il modulo è sempre $\geq 0$, $f(x) \geq 0$ per ogni $x \in X$.
- (v) *Limiti alla frontiera del dominio:* I punti di frontiera di $X$ sono: $-\infty$, $3$, $+\infty$. Studiamo perciò i limiti (da destra/sinistra dove indicato) in quei punti:

  $$
  \begin{aligned}
  \lim_{x \to \pm\infty} f(x) &= \lim_{x \to \pm\infty} e^{\overbrace{\scriptstyle\frac{1}{x-3}}^{\to 0}} \cdot \overbrace{\lvert x+3 \rvert}^{\to +\infty} = e^0 \cdot (+\infty) = +\infty, \\[1.2em]
  \lim_{x \to 3^-} f(x) &= \lim_{x \to 3^-} e^{\overbrace{\scriptstyle\frac{1}{x-3}}^{\to \frac{1}{0^-} = -\infty}} \cdot \overbrace{\lvert x+3 \rvert}^{\to 6} = e^{-\infty} \cdot 6 = 0, \\[1.2em]
  \lim_{x \to 3^+} f(x) &= \lim_{x \to 3^+} e^{\overbrace{\scriptstyle\frac{1}{x-3}}^{\to \frac{1}{0^+} = +\infty}} \cdot \overbrace{\lvert x+3 \rvert}^{\to 6} = e^{+\infty} \cdot 6 = +\infty.
  \end{aligned}
  $$

  Quindi la retta $x = 3$ rappresenta un asintoto verticale per $x \to 3^+$. Visto che $\displaystyle\lim_{x \to \pm\infty} f(x) = +\infty$, possono esistere

- (vi) *Asintoti obliqui per $x \to \pm\infty$:* Visto che $\displaystyle\lim_{x \to \pm\infty} f(x) = +\infty$ calcoliamo

  $$
  m_{\pm} := \lim_{x \to \pm\infty} \frac{f(x)}{x} = \lim_{x \to \pm\infty} \frac{\overbrace{e^{\frac{1}{x-3}}}^{\to 1} \cdot \lvert x+3 \rvert}{x} = \lim_{x \to \pm\infty} \frac{\lvert x+3 \rvert}{x} = \pm 1,
  $$

  e

  $$
  \begin{aligned}
  q_{\pm} &:= \lim_{x \to \pm\infty} \bigl(f(x) - m_{\pm} x\bigr) = \lim_{x \to \pm\infty} \bigl(e^{\frac{1}{x-3}} \cdot \lvert x+3 \rvert \mp x\bigr) \\[0.6em]
  &= \begin{cases}
  \displaystyle\lim_{x \to +\infty} \bigl(e^{\frac{1}{x-3}} \cdot (x+3) - x\bigr) & \text{nel caso ``+'',} \\[1em]
  \displaystyle\lim_{x \to -\infty} \bigl(e^{\frac{1}{x-3}} \cdot (-x-3) + x\bigr) & \text{nel caso ``$-$''.}
  \end{cases}
  \end{aligned}
  $$

  $$
  \begin{aligned}
  \lim_{x \to +\infty} \bigl(e^{\frac{1}{x-3}} \cdot (x+3) - x\bigr) &= \lim_{x \to +\infty} \Bigl(\bigl(e^{\frac{1}{x-3}} - 1\bigr) \cdot x + \underbrace{e^{\frac{1}{x-3}} \cdot 3}_{\to e^0 \cdot 3 = 3}\Bigr), \\[1em]
  \lim_{x \to -\infty} \bigl(e^{\frac{1}{x-3}} \cdot (-x-3) + x\bigr) &= \lim_{x \to -\infty} \Bigl(\bigl(1 - e^{\frac{1}{x-3}}\bigr) \cdot x - \underbrace{e^{\frac{1}{x-3}} \cdot 3}_{\to e^0 \cdot 3 = 3}\Bigr).
  \end{aligned}
  $$

  Inoltre

  $$
  \begin{aligned}
  \lim_{x \to \pm\infty} \Bigl(\bigl(e^{\frac{1}{x-3}} - 1\bigr) \cdot x\Bigr) &= \lim_{x \to \pm\infty} \frac{e^{\frac{1}{x-3}} - 1}{\frac{1}{x-3}} \cdot \frac{x}{x-3} \\
  &= \lim_{t \to 0} \frac{e^t - 1}{t} \cdot \lim_{x \to \pm\infty} \frac{x}{x-3} = 1 \cdot 1 = 1,
  \end{aligned}
  $$

  ove abbiamo usato che $t := \frac{1}{x-3} \to 0$ per $x \to \pm\infty$. Così risulta

  $$
  q_{\pm} = \pm 1 \pm 3 = \pm 4
  $$

  e quindi $y = x + 4$ e $y = -x - 4$ sono asintoti obliqui per $x \to +\infty$ e $x \to -\infty$, rispettivamente.

- (vii) *Studio di $f'(x)$:* Visto che $\lvert x+3 \rvert$ è derivabile per ogni $x \neq -3$, la funzione è derivabile per ogni $x \in X$ con $x \neq -3$. Inoltre per il rapporto incrementale nel punto $x_0 = -3$ vale

  $$
  \begin{aligned}
  f'_{\pm}(-3) &= \lim_{x \to -3^{\pm}} \frac{f(x) - f(-3)}{x - (-3)} = \lim_{x \to -3^{\pm}} \frac{e^{\frac{1}{x-3}} \cdot \lvert x+3 \rvert - 0}{x+3} \\
  &= \lim_{x \to -3^{\pm}} e^{\frac{1}{x-3}} \cdot \frac{\lvert x+3 \rvert}{x+3} \\
  &= e^{-\frac{1}{6}} \cdot (\pm 1) = \pm e^{-\frac{1}{6}}.
  \end{aligned}
  $$

  Quindi $f'_{-}(-3) \neq f'_{+}(-3)$ e di conseguenza $f$ non è derivabile in $x_0 = -3$.

  Calcoliamo ora $f'(x)$ per $x \neq \pm 3$: per $x > -3$, $x \neq 3$ vale

  $$
  \begin{aligned}
  f'(x) &= \bigl(e^{\frac{1}{x-3}} \cdot \lvert x+3 \rvert\bigr)' = \bigl(e^{\frac{1}{x-3}} \cdot (x+3)\bigr)' \\[0.6em]
  &= e^{\frac{1}{x-3}} \cdot \frac{-1}{(x-3)^2} \cdot (x+3) + e^{\frac{1}{x-3}} \cdot 1 \\[0.6em]
  &= e^{\frac{1}{x-3}} \cdot \frac{(x-3)^2 - (x+3)}{(x-3)^2} = e^{\frac{1}{x-3}} \cdot \frac{x^2 - 7x + 6}{(x-3)^2}.
  \end{aligned}
  $$

  Similmente segue per $x < -3$

  $$
  f'(x) = \bigl(e^{\frac{1}{x-3}} \cdot \lvert x+3 \rvert\bigr)' = \bigl(e^{\frac{1}{x-3}} \cdot (-x-3)\bigr)' = -e^{\frac{1}{x-3}} \cdot \frac{x^2 - 7x + 6}{(x-3)^2}
  $$

  e quindi

  $$
  f'(x) = \begin{cases}
  e^{\frac{1}{x-3}} \cdot \dfrac{x^2 - 7x + 6}{(x-3)^2} & \text{se } x > -3,\ x \neq 3, \\[1em]
  -e^{\frac{1}{x-3}} \cdot \dfrac{x^2 - 7x + 6}{(x-3)^2} & \text{se } x < -3.
  \end{cases}
  $$

  Calcoliamo ora i punti critici di $f$: Visto che la funzione esponenziale non ammette zeri, segue che

  $$
  \begin{aligned}
  f'(x) = 0 &\iff x^2 - 7x + 6 = 0 \iff x = x_{1,2} = \frac{7 \pm \sqrt{7^2 - 4 \cdot 6}}{2} = \frac{7 \pm 5}{2} \\
  &\iff x = x_1 = 6 \text{ opp. } x = x_2 = 1.
  \end{aligned}
  $$

Studiamo ora la monotonia di $f$ attraverso il segno di $f'(x)$: Visto che

$$
\begin{aligned}
\frac{e^{\frac{1}{x-3}}}{(x-3)^2} > 0 \quad \forall x \neq 3 \qquad &\text{e} \\
x^2 - 7x + 6 = (x-6) \cdot (x-1) &
\end{aligned}
$$

segue che

$$
f'(x) = \begin{cases}
-\dfrac{e^{\frac{1}{x-3}}}{(x-3)^2} \cdot (x-6) \cdot (x-1) < 0 & \text{per } x < -3, \\[1em]
\dfrac{e^{\frac{1}{x-3}}}{(x-3)^2} \cdot (x-6) \cdot (x-1) > 0 & \text{per } -3 < x < 1, \\[1em]
\dfrac{e^{\frac{1}{x-3}}}{(x-3)^2} \cdot (x-6) \cdot (x-1) < 0 & \text{per } 1 < x < 6,\ x \neq 3, \\[1em]
\dfrac{e^{\frac{1}{x-3}}}{(x-3)^2} \cdot (x-6) \cdot (x-1) > 0 & \text{per } 6 < x.
\end{cases}
$$

Di conseguenza

$$
\begin{aligned}
&f \text{ è strettamente crescente in } (-3, 1) \cup (6, +\infty), \\
&f \text{ è strettamente decrescente in } (-\infty, -3) \cup (1, 6) \setminus \{3\}.
\end{aligned}
$$
- (viii) *Studio di $f''(x)$:* $f'$ è derivabile per $x \neq \pm 3$. Inoltre per $x > -3$, $x \neq 3$ vale

  $$
  \begin{aligned}
  f''(x) &= \left( e^{\frac{1}{x-3}} \cdot \frac{x^2 - 7x + 6}{(x-3)^2} \right)' \\[0.6em]
  &= e^{\frac{1}{x-3}} \cdot \frac{-1}{(x-3)^2} \cdot \frac{x^2 - 7x + 6}{(x-3)^2} \\
  &\quad + e^{\frac{1}{x-3}} \cdot \frac{(x-3)^2 \cdot (2x-7) - 2(x-3) \cdot (x^2 - 7x + 6)}{\bigl((x-3)^2\bigr)^2} \\[0.6em]
  &= \frac{e^{\frac{1}{x-3}}}{(x-3)^4} \cdot \Bigl( (x-3)^2 \cdot (2x-7) - 2(x-3) \cdot (x^2 - 7x + 6) \\
  &\qquad\qquad\qquad\quad - (x^2 - 7x + 6) \Bigr) \\[0.6em]
  &= \frac{e^{\frac{1}{x-3}}}{(x-3)^4} \cdot (13x - 33).
  \end{aligned}
  $$

Similmente per $x < -3$ si ottiene

$$
f''(x) = \left( -e^{\frac{1}{x-3}} \cdot \frac{x^2 - 7x + 6}{(x-3)^2} \right)' = -\frac{e^{\frac{1}{x-3}}}{(x-3)^4} \cdot (13x - 33).
$$

Quindi risulta

$$
f''(x) = \begin{cases}
\dfrac{e^{\frac{1}{x-3}}}{(x-3)^4} \cdot (13x - 33) & \text{se } x > -3,\ x \neq 3, \\[1em]
-\dfrac{e^{\frac{1}{x-3}}}{(x-3)^4} \cdot (13x - 33) & \text{se } x < -3.
\end{cases}
$$

Classifichiamo i due punti critici $x_1 = 6$ e $x_2 = 1$ trovati nel punto precedente: Visto che $\dfrac{e^{\frac{1}{x-3}}}{(x-3)^4} > 0$ per ogni $x \in X$ segue che

$$
\begin{aligned}
\operatorname{segno}\bigl(f''(6)\bigr) &= \operatorname{segno}(13 \cdot 6 - 33) > 0 \quad \Rightarrow \quad x_1 = 6 \text{ è un punto di minimo locale,} \\
\operatorname{segno}\bigl(f''(1)\bigr) &= \operatorname{segno}(13 \cdot 1 - 33) < 0 \quad \Rightarrow \quad x_2 = 1 \text{ è un punto di massimo locale}
\end{aligned}
$$

con $f(6) = 9 \cdot e^{\frac{1}{3}} = 9 \cdot \sqrt[3]{e}$ e $f(1) = 4 \cdot e^{-\frac{1}{2}} = \dfrac{4}{\sqrt{e}}$. Per trovare eventuali flessi risolviamo l'equazione

$$
f''(x) = 0 \quad \iff \quad 13x - 33 = 0 \quad \iff \quad x_0 := x = \frac{33}{13}.
$$

Inoltre per $x \neq \pm 3$ vale

$$
\begin{aligned}
f''(x) \geq 0 \quad &\iff \quad x < -3 \text{ oppure } x \geq \tfrac{33}{13}, \\
&\qquad \text{cioè } f \text{ è convessa in } (-\infty, -3),\ \left(\tfrac{33}{13}, 3\right) \text{ e } (3, +\infty) \\[0.6em]
f''(x) \leq 0 \quad &\iff \quad -3 < x \leq \tfrac{33}{13}, \\
&\qquad \text{cioè } f \text{ è concava in } \left(-3, \tfrac{33}{13}\right)
\end{aligned}
$$

e quindi risulta che $x_0 = \frac{33}{13}$ è un punto di flesso.

Da tutte le informazioni ottenute risulta che $f$ ha il seguente grafico.

```plot
x: [-11, 15.8]
y: [-5.5, 25.5]
width: 700
height: 500
axes: true
xticks: { -3: "$-3$", 1: "$1$", 2.538: "$\\frac{33}{13}$", 6: "$6$" }
yticks: { -4: "$-4$", 4: "$4$" }
caption: "Grafico di $f(x)=e^{\\frac{1}{x-3}} \\cdot \\lvert x+3 \\rvert$."
alt: "Grafico di f(x) = e^(1/(x-3)) |x+3| con gli asintoti obliqui y = x + 4 e y = -x - 4, l'asintoto verticale x = 3, il massimo locale in x = 1, il minimo locale in x = 6 e il flesso in x = 33/13."
items:
  - fn: f(x) = exp(1/(x-3)) * abs(x+3)
    domain: [-10.8, -3]
    color: blue
    width: 2.2
  - fn: exp(1/(x-3)) * abs(x+3)
    domain: [-3, 2.97]
    color: blue
    width: 2.2
  - fn: exp(1/(x-3)) * abs(x+3)
    domain: [3.78, 15.4]
    color: blue
    width: 2.2
  - text: $f(x)=e^{\frac{1}{x-3}}\cdot\lvert x+3 \rvert$
    at: [-7.2, 23.8]
    anchor: e
    color: blue
  - fn: x + 4
    domain: [-9, 15.4]
    color: purple
    dash: true
  - fn: -x - 4
    domain: [-10.8, 0.3]
    color: green
    dash: true
  - line: [[3, -3.2], [3, 25.5]]
    dash: true
  - text: $x=3$
    at: [3, -4.3]
    anchor: c
    color: red
  - text: $y=x+4$
    at: [13.1, 13.6]
    anchor: c
    color: purple
  - text: $y=-x-4$
    at: [-9.3, 1.4]
    anchor: c
    color: green
  - line: [[12.50, 12.40], [12.37, 12.11], [12.23, 11.83], [12.08, 11.58], [11.92, 11.34], [11.75, 11.12], [11.58, 10.93], [11.40, 10.75], [11.22, 10.59], [11.03, 10.46], [10.84, 10.35], [10.65, 10.26], [10.46, 10.20], [10.27, 10.16], [10.08, 10.15], [9.90, 10.17], [9.71, 10.21], [9.54, 10.28], [9.36, 10.38], [9.20, 10.50], [9.04, 10.66], [8.89, 10.85], [8.75, 11.07], [8.62, 11.32], [8.50, 11.60]]
    arrow: true
    color: purple
  - line: [[-10.20, 2.60], [-10.26, 2.72], [-10.31, 2.85], [-10.35, 2.97], [-10.39, 3.10], [-10.41, 3.22], [-10.43, 3.35], [-10.45, 3.47], [-10.45, 3.60], [-10.45, 3.72], [-10.44, 3.84], [-10.43, 3.97], [-10.41, 4.09], [-10.39, 4.21], [-10.36, 4.33], [-10.32, 4.45], [-10.28, 4.57], [-10.24, 4.69], [-10.19, 4.81], [-10.13, 4.93], [-10.07, 5.04], [-10.01, 5.16], [-9.94, 5.27], [-9.87, 5.39], [-9.80, 5.50]]
    arrow: true
    color: green
  - guide: [1, f(1)]
    to: x
    dash: dotted
  - guide: [6, f(6)]
    to: x
    dash: dotted
  - guide: [2.538, f(2.538)]
    to: x
    dash: dotted
  - point: [1, f(1)]
  - point: [6, f(6)]
  - point: [2.538, f(2.538)]
```

# Integrali 

**Problema.** Data una funzione $f:[a,b]\to\mathbb{R}$ limitata, calcolare l'area $A$ tra il grafico di $f$ e l'asse $x$.

```plot
x: [-0.2, 10]
y: [-0.3, 4.6]
height: 260
ylabel: $f(x)$
xlabel: $x$
xticks: { 0.76: "$a$", 8.8: "$b$" }
yticks: []
caption: L'area $A$.
alt: Area A compresa tra il grafico di una funzione limitata f su [a,b] e l'asse x.
items:
  - fn: f
    through: [[0.76, 1.6], [2.4, 2.56], [4.2, 1.2], [7.5, 3.96], [8.8, 3.0]]
    domain: [0.76, 8.8]
    hidden: true
  - area: f(x)
    from: 0.76
    to: 8.8
    color: teal
  - fn: g(x) = f(x)
    domain: [0.76, 8.8]
  - line: [[0.76, 0], [0.76, 1.6]]
    dash: dotted
  - line: [[8.8, 0], [8.8, 3.0]]
    dash: dotted
  - text: $A$
    at: [6.8, 1.8]
```

Se poniamo $m := \inf f$ e $M := \sup f$, allora sicuramente vale

$$
m\cdot(b-a) \le A \le M\cdot(b-a),
$$

che però dà una approssimazione troppo scarsa. Per migliorarla dividiamo l'intervallo $[a,b]$ in tanti sottointervalli e procediamo in ogni sottointervallo come prima. Per precisare questa idea ci serve una

**Definizione 6.1.**

- Un insieme $P=\{x_0,x_1,x_2,\dots,x_n\}$ si chiama *partizione di $[a,b]$* se
  $$
  a=x_0<x_1<x_2<\dots<x_n=b.
  $$
- Se $f:[a,b]\to\mathbb{R}$ è limitata e $P$ è una partizione di $[a,b]$, allora definiamo per $i=1,2,3,\dots,n$
  $$
  \begin{aligned}
  m_i &:= \inf\{f(x) : x\in[x_{i-1},x_i]\},\\
  M_i &:= \sup\{f(x) : x\in[x_{i-1},x_i]\},\\
  \Delta x_i &:= x_i-x_{i-1}\ (=\text{ lunghezza dell'intervallo }[x_{i-1},x_i])
  \end{aligned}
  $$
  $$
  s(f,P) := \sum_{i=1}^{n} m_i\cdot\Delta x_i =: \textit{somma inferiore}
  $$
  $$
  S(f,P) := \sum_{i=1}^{n} M_i\cdot\Delta x_i =: \textit{somma superiore}
  $$

```plot
x: [0, 10.2]
y: [0, 4.8]
height: 230
ylabel: $f(x)$
xlabel: $x$
xticks: { 1: "$a=x_0$", 2.2: "$x_1$", 3.6: "$x_2$", 5.5: "$x_3$", 7.3: "$x_4$", 9.3: "$x_5=b$" }
yticks: { 1.2: "$m$", 4.13: "$M$" }
alt: Somma inferiore s(f,P) con una partizione in cinque intervalli, i rettangoli stanno sotto il grafico di f.
items:
  - guide: [4.5, 1.2]
    to: y
  - guide: [8.0, 4.13]
    to: y
  - area: 1.6
    from: 1
    to: 2.2
    color: red
  - area: 2.03
    from: 2.2
    to: 3.6
    color: red
  - area: 1.2
    from: 3.6
    to: 5.5
    color: red
  - area: 1.77
    from: 5.5
    to: 7.3
    color: red
  - area: 3.1
    from: 7.3
    to: 9.3
    color: red
  - line: [[1, 0], [1, 1.6], [2.2, 1.6], [2.2, 0]]
  - line: [[2.2, 2.03], [3.6, 2.03], [3.6, 0]]
  - line: [[3.6, 1.2], [5.5, 1.2], [5.5, 0]]
  - line: [[5.5, 1.77], [7.3, 1.77], [7.3, 0]]
  - line: [[7.3, 3.1], [9.3, 3.1], [9.3, 0]]
  - fn: f
    through: [[1, 1.6], [2.6, 2.75], [4.5, 1.2], [8.0, 4.13], [9.3, 3.1]]
  - text: $s(f,P)$
    at: [4.3, 3.3]
```

```plot
x: [0, 10.2]
y: [0, 4.8]
height: 230
ylabel: $f(x)$
xlabel: $x$
xticks: { 1: "$a=x_0$", 2.2: "$x_1$", 3.6: "$x_2$", 5.5: "$x_3$", 7.3: "$x_4$", 9.3: "$x_5=b$" }
yticks: { 1.2: "$m$", 4.13: "$M$" }
alt: Somma superiore S(f,P) con la stessa partizione, i rettangoli stanno sopra il grafico di f.
items:
  - guide: [4.5, 1.2]
    to: y
  - guide: [8.0, 4.13]
    to: y
  - area: 2.5
    from: 1
    to: 2.2
    color: green
  - area: 2.75
    from: 2.2
    to: 3.6
    color: green
  - area: 2.05
    from: 3.6
    to: 5.5
    color: green
  - area: 3.8
    from: 5.5
    to: 7.3
    color: green
  - area: 4.13
    from: 7.3
    to: 9.3
    color: green
  - line: [[1, 0], [1, 2.5], [2.2, 2.5], [2.2, 0]]
  - line: [[2.2, 2.75], [3.6, 2.75], [3.6, 0]]
  - line: [[3.6, 2.05], [5.5, 2.05], [5.5, 0]]
  - line: [[5.5, 3.8], [7.3, 3.8], [7.3, 0]]
  - line: [[7.3, 4.13], [9.3, 4.13], [9.3, 0]]
  - fn: f
    through: [[1, 1.6], [2.6, 2.75], [4.5, 1.2], [8.0, 4.13], [9.3, 3.1]]
  - text: $S(f,P)$
    at: [4.3, 3.3]
```

Quindi per ogni partizione $P$ di $[a,b]$ vale

$$
s(f,P) \le A \le S(f,P),
$$

cioè le somme inferiori sono sempre approssimazioni di $A$ per difetto mentre le somme superiori danno sempre approssimazioni per eccesso. Perciò

- più *grande* è $s(f,P)$ meglio è l'approssimazione (per difetto),
- più *piccolo* è $S(f,P)$ meglio è l'approssimazione (per eccesso).

Se non c'è differenza tra "la migliore" approssimazione da sotto (cioè quella più grande per difetto) e quella "migliore" da sopra (cioè quella più piccola per eccesso), allora il problema è (teoricamente) risolto e $f$ si dice *integrabile*.

Per precisare questo procedimento facciamo la seguente

**Definizione 6.2.** Sia $f:[a,b]\to\mathbb{R}$ limitata. Se

$$
\sup\{s(f,P) : P \text{ partizione di } [a,b]\} = \inf\{S(f,P) : P \text{ partizione di } [a,b]\} =: I,
$$

allora $f$ si dice *integrabile* (secondo Riemann). In questo caso $A=I$ e

$$
I =: \int_a^b f(x)\,dx
$$

si dice *integrale* di $f$ (= funzione integranda) in $[a,b]$ (= dominio dell'integrazione).

**Osservazioni.**

- Come variabile di integrazione non è necessario scegliere $x$ si può anche scrivere
  $$
  \int_a^b f(x)\,dx = \int_a^b f(s)\,ds = \int_a^b f(t)\,dt = \dots
  $$
- L'area sotto l'asse $x$ è *negativa*, per esempio se $f:[0,1]\to\mathbb{R}$, $f(x):=-1$ per ogni $x\in[0,1]$ allora $\int_0^1 f(x)\,dx=-1$.

- $f$ è integrabile $\iff$ per ogni $\varepsilon>0$ esiste una partizione $P=P_\varepsilon$ tale che
  $$
  S(f,P_\varepsilon)-s(f,P_\varepsilon)<\varepsilon.
  $$

```plot
x: [0, 12]
y: [-0.4, 5.3]
height: 250
ylabel: $f(x)$
xlabel: $x$
xticks: { 0.9: "$a=x_0$", 2.23: "$x_1$", 3.8: "$x_2$", 5.93: "$x_3$", 7.97: "$x_4$", 10.23: "$x_5=b$" }
yticks: []
caption: Criterio per l'integrabilità.
alt: Somma superiore e somma inferiore con la stessa partizione, la differenza tra le due è l'area gialla, più piccola di epsilon.
items:
  - area: 2.8
    base: 1.77
    from: 0.9
    to: 2.23
    color: orange
  - area: 3.0
    base: 2.3
    from: 2.23
    to: 3.8
    color: orange
  - area: 2.3
    base: 1.37
    from: 3.8
    to: 5.93
    color: orange
  - area: 4.3
    base: 2.0
    from: 5.93
    to: 7.97
    color: orange
  - area: 4.63
    base: 3.47
    from: 7.97
    to: 10.23
    color: orange
  - line: [[0.9, 0], [0.9, 2.8], [2.23, 2.8], [2.23, 0]]
  - line: [[2.23, 3.0], [3.8, 3.0], [3.8, 0]]
  - line: [[3.8, 2.3], [5.93, 2.3], [5.93, 0]]
  - line: [[5.93, 4.3], [7.97, 4.3], [7.97, 0]]
  - line: [[7.97, 4.63], [10.23, 4.63], [10.23, 0]]
  - line: [[0.9, 1.77], [2.23, 1.77]]
  - line: [[2.23, 2.3], [3.8, 2.3]]
  - line: [[3.8, 1.37], [5.93, 1.37]]
  - line: [[5.93, 2.0], [7.97, 2.0]]
  - line: [[7.97, 3.47], [10.23, 3.47]]
  - fn: f
    through: [[0.9, 1.77], [2.9, 3.0], [5.07, 1.37], [9.07, 4.63], [10.23, 3.47]]
  - area: 4.4 + 0.25 sqrt(1 - ((x - 3.0) / 0.55)^2)
    base: 4.4 - 0.25 sqrt(1 - ((x - 3.0) / 0.55)^2)
    from: 2.46
    to: 3.54
    color: orange
  - text: $<\varepsilon$
    at: [4.6, 4.4]
```

- L'integrale $\int_a^b f(x)\,dx$ rappresenta una somma continua di aree infinitesime. Questa interpretazione spiega l'uso della notazione

```plot
x: [0, 8.8]
y: [-0.3, 4.4]
height: 260
xticks: { 0.7: "$a$", 3.15: "$x$", 8.1: "$b$" }
yticks: { 1.6: "$f(x)$" }
caption: Integrale come somma continua.
alt: Area sotto il grafico di f tra a e b; una striscia verticale rossa di larghezza dx in x ha area dA(x)=f(x)dx.
items:
  - fn: f
    through: [[0.7, 1.58], [2.125, 2.37], [3.8, 1.2], [6.875, 3.63], [8.1, 2.78]]
    hidden: true
  - area: f(x)
    from: 0.7
    to: 8.1
    color: teal
  - fn: g(x) = f(x)
    domain: [0.7, 8.1]
  - line: [[0.7, 0], [0.7, 1.58]]
    dash: dotted
  - line: [[8.1, 0], [8.1, 2.78]]
    dash: dotted
  - guide: [3.15, 1.6]
    to: y
  - line: [[3.15, 0], [3.15, 1.6]]
    color: red
    width: 2
  - line: [[2.5, 0.4], [3.1, 0.4]]
    arrow: true
  - line: [[3.85, 0.4], [3.2, 0.4]]
    arrow: true
  - text: $dx$
    at: [3.5, 0.75]
  - text: $dA(x)=f(x)\cdot dx$
    at: [3.6, 3.4]
  - line: [[3.3, 3.2], [3.9, 2.8], [4.1, 2.1], [3.5, 1.5], [3.25, 1.2]]
    arrow: true
  - text: $A$
    at: [6.0, 1.5]
```

$$
A=\int_{x=a}^{b} dA(x)=\int_a^b f(x)\,dx
$$

**Proprietà dell'Integrale.** Siano $f,g:[a,b]\to\mathbb{R}$ integrabili. Allora

- $\alpha\cdot f+\beta\cdot g$ è integrabile per ogni $\alpha,\beta\in\mathbb{R}$ (cioè l'insieme delle funzioni integrabili con dominio $[a,b]$ è uno *spazio vettoriale*) e

  $$
  \boxed{\int_a^b \bigl(\alpha\cdot f(x)+\beta\cdot g(x)\bigr)\,dx=\alpha\cdot\int_a^b f(x)\,dx+\beta\cdot\int_a^b g(x)\,dx}
  $$

  (cioè l'integrale è un'operazione *lineare*);
- se $f(x)\le g(x)$ per ogni $x\in[a,b]$ allora

  $$
  \boxed{\int_a^b f(x)\,dx\le\int_a^b g(x)\,dx}
  $$

  (cioè l'integrale è *monotona*);

- anche $\lvert f\rvert$ è integrabile e

  $$
  \boxed{\left\lvert\int_a^b f(x)\,dx\right\rvert\le\int_a^b \lvert f(x)\rvert\,dx}
  $$

  (*disuguaglianza triangolare*);
- per ogni $\alpha,\beta,\gamma\in[a,b]$ si ha

  $$
  \boxed{\int_\alpha^\beta f(x)\,dx+\int_\beta^\gamma f(x)\,dx=\int_\alpha^\gamma f(x)\,dx}
  $$

  (*additività* dell'integrale rispetto agli estremi di integrazione) ove definiamo

```plot
x: [0, 9.2]
y: [-0.3, 4.2]
height: 260
ylabel: $f(x)$
xlabel: $x$
xticks: { 0.7: "$a$", 1.5: "$\\alpha$", 3.65: "$\\beta$", 7.4: "$\\gamma$", 8.3: "$b$" }
yticks: []
caption: Additività rispetto agli estremi di integrazione.
alt: Grafico di f con l'area tra alfa e beta in rosso e l'area tra beta e gamma in verde.
items:
  - fn: f
    through: [[0.7, 1.75], [2.3, 2.5], [4.0, 1.28], [6.55, 3.48], [8.3, 2.4]]
    hidden: true
  - area: f(x)
    from: 1.5
    to: 3.65
    color: red
  - area: f(x)
    from: 3.65
    to: 7.4
    color: green
  - fn: g(x) = f(x)
    domain: [0.7, 8.3]
  - line: [[0.7, 0], [0.7, 1.75]]
    dash: dotted
  - line: [[8.3, 0], [8.3, 2.4]]
    dash: dotted
```

$$
\int_\alpha^\alpha f(x)\,dx:=0\qquad\text{e}\qquad\int_\alpha^\beta f(x)\,dx:=-\int_\beta^\alpha f(x)\,dx\quad\text{se }\alpha>\beta;
$$

per esempio $\displaystyle\int_1^0 f(x)\,dx:=-\int_0^1 f(x)\,dx$.

Se la funzione integranda e il dominio di integrazione hanno qualche simmetria, allora l'integrale si semplifica nella seguente maniera.

**Proposizione 6.3.** Sia $f:[-a,a]\to\mathbb{R}$ integrabile. Allora

- $\displaystyle\int_{-a}^{a} f(x)\,dx=0$ se $f$ è dispari,
- $\displaystyle\int_{-a}^{a} f(x)\,dx=2\cdot\int_{0}^{a} f(x)\,dx$ se $f$ è pari,

```plot
x: [-3.8, 4.4]
y: [-2.8, 3.1]
height: 280
ylabel: $f(x)$ dispari
xlabel: $x$
xticks: { -3.4: "$-a$", 3.4: "$a$" }
yticks: []
alt: Funzione dispari su [-a,a]; l'area rossa sotto l'asse x e l'area verde sopra si compensano, per cui la somma è 0.
items:
  - fn: f
    through: [[-3.4, -2.46], [-2.2, -0.3], [-0.9, -0.56], [0, 0], [0.9, 0.56], [2.2, 0.3], [3.4, 2.46]]
    hidden: true
  - area: f(x)
    from: -3.4
    to: 3.4
    signed: true
  - fn: g(x) = f(x)
    domain: [-3.4, 3.4]
  - text: $\textcolor{red}{\blacksquare}+\textcolor{green}{\blacksquare}=0$
    at: [-2.4, 2.4]
```

```plot
x: [-3.8, 4.4]
y: [-0.4, 4.4]
height: 280
ylabel: $f(x)$ pari
xlabel: $x$
xticks: { -3.2: "$-a$", 3.2: "$a$" }
yticks: []
alt: Funzione pari su [-a,a]; l'area rossa a sinistra dell'asse y è uguale all'area verde a destra, per cui la somma è il doppio dell'area verde.
items:
  - fn: f
    through: [[-3.2, 3.9], [-2.3, 1.34], [-1.2, 2.44], [0, 0.9], [1.2, 2.44], [2.3, 1.34], [3.2, 3.9]]
    hidden: true
  - area: f(x)
    from: -3.2
    to: 0
    color: red
  - area: f(x)
    from: 0
    to: 3.2
    color: green
  - fn: g(x) = f(x)
    domain: [-3.2, 3.2]
  - text: $\textcolor{red}{\blacksquare}+\textcolor{green}{\blacksquare}=2\times\textcolor{green}{\blacksquare}$
    at: [-1.6, 3.6]
```

**Teorema 6.4.** Se $f:[a,b]\to\mathbb{R}$

- è limitata e ha un numero finito di discontinuità, oppure
- è monotona

allora $f$ è integrabile. In particolare ogni $f\in \mathrm{C}[a,b]$ è integrabile.

Qui l'ultima affermazione segue dal primo punto visto che una funzione continua su $[a,b]$ ha zero punti di discontinuità ed è limitata per Weierstraß.

**Esempi.** Le funzioni $f:[0,1]\to\mathbb{R}$ e $g:[0,3]\to\mathbb{R}$ definite come

$$
f(x):=\begin{cases} 1-\left(\tfrac12\right)^{n+1} & \text{se } x\in\left[1-\left(\tfrac12\right)^{n},\,1-\left(\tfrac12\right)^{n+1}\right), \\[0.4em] 1 & \text{se } x=1 \end{cases}
$$

$$
g(x):=\begin{cases} e^{-x} & \text{se } x\in[0,1), \\ x^2-2 & \text{se } x\in[1,2), \\ \sin(2x) & \text{se } x\in[2,3], \end{cases}
$$

sono integrabili in quanto $f$ (nonostante abbia un numero infinito di punti di discontinuità) è crescente e $g$ ha soltanto 2 punti di discontinuità

```plot
x: [0, 1.1]
y: [0, 1.1]
height: 260
ylabel: $f(x)$
xlabel: $x$
xticks: [0.2, 0.4, 0.6, 0.8, 1]
yticks: [0.5, 1]
alt: Grafico a gradini crescente di f, con infiniti salti che si accumulano verso x=1, dove f vale 1.
items:
  - line: [[0, 0.5], [0.5, 0.5]]
  - line: [[0.5, 0.75], [0.75, 0.75]]
  - line: [[0.75, 0.875], [0.875, 0.875]]
  - line: [[0.875, 0.9375], [0.9375, 0.9375]]
  - line: [[0.9375, 0.96875], [0.96875, 0.96875]]
  - line: [[0.96875, 0.984375], [0.984375, 0.984375]]
  - line: [[0.984375, 0.9921875], [1, 0.9921875]]
  - point: [1, 1]
```

```plot
x: [0, 3.3]
y: [-1.1, 2.4]
height: 280
ylabel: $g(x)$
xlabel: $x$
xticks: [0.5, 1, 1.5, 2, 2.5, 3]
yticks: [-1, -0.5, 0.5, 1, 1.5, 2]
alt: Grafico di g, con due punti di discontinuità in x=1 e x=2.
items:
  - fn: exp(-x)
    domain: [0, 1]
  - fn: x^2 - 2
    domain: [1, 2]
  - fn: sin(2x)
    domain: [2, 3]
```

Esempi di funzioni integrabili non continue.

**Il Teorema Fondamentale del Calcolo Integrale**

Passiamo ora al secondo problema, cioè cerchiamo modi per calcolare $A=\int_a^b f(x)\,dx$ visto che soltanto in casi particolarmente semplici è possibile di determinare $A$ usando la definizione.

Perciò ci serve prima il seguente

**Teorema 6.5** (*Teorema della Media*). Se $f\in\mathrm{C}[a,b]$, allora esiste $c\in[a,b]$ tale che $\displaystyle\int_a^b f(x)\,dx=f(c)\cdot(b-a)$

```plot
x: [0, 11.8]
y: [-0.6, 5.2]
height: 300
ylabel: $f(x)$
xlabel: $x$
xticks: { 0.92: "$a$", 6.56: "$c$", 10.5: "$b$" }
yticks: { 2.98: "$f(c)$" }
alt: Grafico di f su [a,b] e retta orizzontale all'altezza f(c); l'area rossa sotto la retta è uguale all'area verde sopra la retta.
items:
  - fn: f
    through: [[0.92, 2.12], [2.84, 3.06], [5.08, 1.56], [6.56, 2.98], [8.24, 4.34], [10.5, 2.7]]
    hidden: true
  - area: f(x)
    base: 2.98
    from: 0.92
    to: 10.5
    signed: true
  - line: [[0.92, 2.98], [10.5, 2.98]]
  - fn: g(x) = f(x)
    domain: [0.92, 10.5]
    width: 2
  - guide: [0.92, 2.12]
    to: x
  - guide: [6.56, 2.98]
  - guide: [10.5, 2.7]
    to: x
  - text: $\textcolor{red}{\blacksquare}=\textcolor{green}{\blacksquare}$
    at: [4.4, 4.5]
```

**Dimostrazione.** Per Weierstraß esistono

$$
m:=\min f,\qquad M:=\max f.
$$

Inoltre vale

$$
\begin{aligned}
m\cdot(b-a) &\le \int_a^b f(x)\,dx \le M\cdot(b-a) \qquad\Rightarrow \\[0.6em]
\min f=m &\le \underbrace{\frac{1}{b-a}\int_a^b f(x)\,dx}_{=\ \textit{valor medio}\ \text{di } f \text{ in } [a,b]} \le M=\max f.
\end{aligned}
$$

Quindi per il teorema dei valori intermedi esiste $c\in[a,b]$ tale che

$$
\int_a^b f(x)\,dx=f(c)\cdot(b-a).
$$

Dal teorema della media segue un risultato molto importante:

**Teorema 6.6** (*Teorema Fondamentale del Calcolo Integrale*). Sia $f\in\mathrm{C}[a,b]$ allora la funzione

$$
F:[a,b]\to\mathbb{R},\qquad F(x):=\int_a^x f(s)\,ds\qquad =\ \textit{funzione integrale di } f
$$

è derivabile con

$$
F'(x)=f(x)\qquad\text{per ogni }x\in[a,b].
$$

**Osservazioni.**

- Se $G$ è una funzione derivabile tale che $G'=f$, allora $G$ si dice *primitiva di $f$*. L'insieme

  $$
  \int f(x)\,dx:=\{G : G \text{ è una primitiva di } f\}
  $$

  si chiama *integrale indefinito di $f$*.
- Per distinguere un integrale indefinito $\int f(x)\,dx$ (che rappresenta un'insieme di funzioni) da un integrale $\int_a^b f(x)\,dx$ (che è un numero reale), quest'ultimo viene anche chiamato *integrale definito*.
- Se $F$ e $G$ sono due primitive di $f\in\mathrm{C}[a,b]$ allora

  $$
  (F-G)'=F'-G'=f-f=0
  $$

  e per la caratterizzazione delle funzioni costanti esiste $c\in\mathbb{R}$ tale che

  $$
  F(x)=G(x)+c\qquad\text{per ogni }x\in[a,b].
  $$

  Per questo motivo se $F$ è una primitiva qualsiasi di $f$ si scrive spesso

  $$
  \int f(x)\,dx=F(x)+c
  $$

  dove $c\in\mathbb{R}$ indica una costante arbitraria di integrazione.

Siamo ora in grado di dare una soluzione al secondo problema.

**Corollario 6.7.** Se $f\in\mathrm{C}[a,b]$ e $G$ è una primitiva di $f$ (cioè $G'=f$), allora

$$
\boxed{\int_a^b f(x)\,dx=G(b)-G(a)=:[G(x)]_a^b=:G(x)\Big|_a^b}
$$

$$
\int \frac{1}{x}\,dx=\ln\lvert x\rvert+c
$$

$$
\boxed{\int x^r\,dx=\begin{cases}\ln\lvert x\rvert+c & \text{se } r=-1\\[0.4em] \dfrac{x^{r+1}}{r+1}+c & \text{se } r\neq-1\end{cases}}
$$

$$
\boxed{\int \frac{1}{1+x^2}\,dx=\arctan(x)+c}
$$

- $\boxed{\int e^x\,dx=e^x+c}$
- $\boxed{\int \sin(x)\,dx=-\cos(x)+c}\qquad\boxed{\int \cos(x)\,dx=\sin(x)+c}$
- $\boxed{\int \sinh(x)\,dx=\cosh(x)+c}\qquad\boxed{\int \cosh(x)\,dx=\sinh(x)+c}$

**Metodi di Integrazione**

L'idea per trovare una primitiva di una funzione è che, grazie al Teorema Fondamentale del Calcolo Integrale, *la derivazione e l'integrazione sono operazioni inverse*, cioè:

Se $h$ è derivabile con continuità (brevemente si dice $h\in\mathrm{C}^1$), allora

$$
\int h'(x)\,dx=h(x)+c. \tag{$*$}
$$

Così una regola di derivazione implica una regola associata di integrazione.

**Integrazione per Parti.** Sappiamo che se $f,g$ sono $\mathrm{C}^1$ allora anche $h:=f\cdot g$ è $\mathrm{C}^1$ con

$$
h'(x)=f'(x)\cdot g(x)+f(x)\cdot g'(x).
$$

Quindi da $(*)$ segue

$$
\begin{aligned}
\int f'(x)\cdot g(x)\,dx+\int f(x)\cdot g'(x)\,dx &= \int\underbrace{\bigl(f'(x)\cdot g(x)+f(x)\cdot g'(x)\bigr)}_{=h'(x)}\,dx \\[0.8em]
&= \underbrace{f(x)\cdot g(x)}_{=h(x)}+c
\end{aligned}
$$

Così risultano le formule

- *Integrazione per Parti* (versione indefinita)

  $$
  \boxed{\int f'(x)\cdot g(x)\,dx=f(x)\cdot g(x)-\int f(x)\cdot g'(x)\,dx}
  $$
- *Integrazione per Parti* (versione definita)

  $$
  \boxed{\int_a^b f'(x)\cdot g(x)\,dx=f(x)\cdot g(x)\Big|_a^b-\int_a^b f(x)\cdot g'(x)\,dx}
  $$

**Esempi.**

- Utilizziamo integrazione per parti per calcolare

  $$
  \int x^r\cdot\ln(x)\,dx
  $$

  per $r\neq-1$. A questo punto dobbiamo decidere quale dei fattori è $f'(x)$ e quale $g(x)$. Ma visto che con la scelta $f'(x)=\ln(x)$ non si può continuare non conoscendo la primitiva del logaritmo, l'unica possibilità è $x^r=f'(x)$ e $\ln(x)=g(x)$ e quindi (siccome $r\neq-1$) $f(x)=\frac{x^{r+1}}{r+1}$ e $g'(x)=\frac{1}{x}$. Così risulta

  $$
  \begin{aligned}
  \int \underbrace{x^r}_{f'(x)}\cdot\underbrace{\ln(x)}_{g(x)}\,dx &= \underbrace{\frac{x^{r+1}}{r+1}}_{f(x)}\cdot\underbrace{\ln(x)}_{g(x)}-\int\underbrace{\frac{x^{r+1}}{r+1}}_{f(x)}\cdot\underbrace{\frac{1}{x}}_{g'(x)}\,dx \\[0.8em]
  &= \frac{x^{r+1}}{r+1}\cdot\ln(x)-\frac{1}{r+1}\cdot\int x^r\,dx \\[0.8em]
  &= \frac{x^{r+1}}{r+1}\cdot\ln(x)-\frac{1}{r+1}\cdot\frac{x^{r+1}}{r+1}+c \\[0.8em]
  &= \frac{x^{r+1}}{r+1}\cdot\left(\ln(x)-\frac{1}{r+1}\right)+c.
  \end{aligned}
  $$

  In questo esempio il metodo integrazione per parti funziona poiché il logaritmo $g(x)=\ln(x)$ è una funzione "complicata" con derivata $g'(x)=\frac{1}{x}$ "semplice". Quindi passando la derivata da $f(x)$ a $g(x)$ l'integrale si semplifica. Inoltre possiamo dire che per $r=0$ otteniamo $f'(x)=x^0=1$ per ogni $x$ e quindi abbiamo anche calcolato

  $$
  \int\ln(x)\,dx=x\cdot\bigl(\ln(x)-1\bigr)+c.
  $$

  Se si vuole calcolare questo integrale direttamente (cioè senza il fattore $x^r$) si deve procedere con un piccolo trucco:

  $$
  \begin{aligned}
  \int\ln(x)\,dx &= \int\underbrace{1}_{f'(x)}\cdot\underbrace{\ln(x)}_{g(x)}\,dx=\underbrace{x}_{f(x)}\cdot\underbrace{\ln(x)}_{g(x)}-\int\overbrace{\underbrace{x}_{f(x)}\cdot\underbrace{\frac{1}{x}}_{g'(x)}}^{=1}dx \\[0.8em]
  &= x\cdot\ln(x)-x+c.
  \end{aligned}
  $$

**Integrazione per Sostituzione.** Abbiamo visto come il metodo integrazione per parti segue dalla regola per la derivazione di un prodotto. Ora invece partiamo con la regola della catena (per derivare le funzioni composte) e cerchiamo la regola corrispondente per l'integrazione. Sia $f\in\mathrm{C}[a,b]$ con una primitiva $F$. Sia, inoltre $\varphi:[\alpha,\beta]\to[a,b]$ derivabile con continuità e $\varphi'\neq0$. Allora la funzione composta

$$
h:[\alpha,\beta]\to\mathbb{R},\qquad h(t):=F\bigl(\varphi(t)\bigr)
$$

è derivabile con

$$
h'(t)=F'\bigl(\varphi(t)\bigr)\cdot\varphi'(t)=f\bigl(\varphi(t)\bigr)\cdot\varphi'(t).
$$

Sostituendo queste espressioni nell'equazione $(*)$ risulta la formula chiamata

- *Integrazione per Sostituzione* (versione indefinita)

  $$
  \boxed{\int f\bigl(\varphi(t)\bigr)\cdot\varphi'(t)\,dt=F\bigl(\varphi(t)\bigr)+c.}
  $$

  dove $F$ è una primitiva di $f$, cioè $F'=f$.

Sostituendo nella versione indefinita gli estremi $t=\beta$ e $t=\alpha$ segue dal corollario sul Teorema Fondamentale

$$
\begin{aligned}
\int_\alpha^\beta f\bigl(\varphi(t)\bigr)\cdot\varphi'(t)\,dt &= F\bigl(\varphi(t)\bigr)\Big|_{t=\alpha}^{t=\beta} \\[0.6em]
&= F\bigl(\varphi(\beta)\bigr)-F\bigl(\varphi(\alpha)\bigr) \\[0.6em]
&= F(x)\Big|_{x=\varphi(\alpha)}^{x=\varphi(\beta)} \\[0.6em]
&= \int_{\varphi(\alpha)}^{\varphi(\beta)} f(x)\,dx.
\end{aligned}
$$

Quindi abbiamo dimostrato la formula

- *Integrazione per Sostituzione* (versione definita)

  $$
  \boxed{\int_\alpha^\beta f\bigl(\varphi(t)\bigr)\cdot\varphi'(t)\,dt=\int_{\varphi(\alpha)}^{\varphi(\beta)} f(x)\,dx}
  $$

**Esempi.**

- Se nella versione indefinita della formula integrazione per sostituzione scegliamo $f(x)=\frac{1}{x}$ con la primitiva $F(x)=\ln\lvert x\rvert$ e per $\varphi$ una funzione $\mathrm{C}^1$ con $\varphi(t)\neq0$ per ogni $t$ allora segue

  $$
  \boxed{\int\frac{\varphi'(t)}{\varphi(t)}\,dt=\ln\lvert\varphi(t)\rvert+c}
  $$

  Un esempio concreto di questo tipo è

  $$
  \begin{aligned}
  \int\tan(t)\,dt &= \int\frac{\sin(t)}{\cos(t)}\,dt \\[0.8em]
  &= -\int\frac{\overbrace{-\sin(t)}^{\varphi'(t)}}{\underbrace{\cos(t)}_{\varphi(t)}}\,dt \\[0.8em]
  &= -\ln\lvert\cos(t)\rvert+c.
  \end{aligned}
  $$
- Se nella versione indefinita della formula integrazione per sostituzione scegliamo $f(x)=x$ con la primitiva $F(x)=\frac{x^2}{2}$ e per $\varphi$ una funzione $\mathrm{C}^1$ allora segue

  $$
  \boxed{\int\varphi(t)\cdot\varphi'(t)\,dt=\frac{\varphi(t)^2}{2}+c}
  $$

  Un esempio concreto di questo tipo è

  $$
  \int\underbrace{\sin(t)}_{\varphi(t)}\cdot\underbrace{\cos(t)}_{\varphi'(t)}\,dt=\frac{\sin^2(t)}{2}+c.
  $$

**Integrazione di Funzioni Razionali**

**Problema.** Come si integra una funzione razionale $\frac{p(x)}{q(x)}$ per due polinomi $p,q$, per esempio

$$
\int\frac{x^4-2x^2+10}{x^2-3x+2}\,dx\quad ?
$$

A questo problema c'è sempre una soluzione che inoltre coinvolge soltanto i tre integrali notevoli per $x^r$ con $r\neq-1$, $x^{-1}$ e $\frac{1}{1+x^2}$.

Il problema, però, è scomporre la funzione integranda in una somma tra un polinomio e fratti semplici in maniera che si possono utilizzare tali integrali.

Perciò si procede in 3 passi:

1° Passo (divisione con resto): Se $\text{grado}(p)\ge\text{grado}(q)$, allora dividiamo $p$ per $q$ con resto ottenendo polinomi $s$ e $r$ con

- $p=s\cdot q+r$,
- $\text{grado}(r)<\text{grado}(q)$,

cioè

$$
\frac{p(x)}{q(x)}=s(x)+\frac{r(x)}{q(x)}\,.
$$

Per esempio per $p(x)=x^4-2x^2+10$ e $q(x)=x^2-3x+2$ otteniamo

$$
(x^4-2x^2+10):(x^2-3x+2)=x^2+3x+5+\frac{9x}{x^2-3x+2}
$$

$$
\begin{array}{rrrrr}
(\,x^4 & & {}-2x^2 & & {}+10) \\
\underline{\kern5pt{}-x^4\kern5pt} & \underline{\kern5pt{}+3x^3\kern5pt} & \underline{\kern5pt{}-2x^2\kern5pt} & & \\
 & 3x^3 & {}-4x^2 & & \\
 & \underline{\kern5pt{}-3x^3\kern5pt} & \underline{\kern5pt{}+9x^2\kern5pt} & \underline{\kern5pt{}-6x\kern5pt} & \\
 & & 5x^2 & {}-6x & {}+10 \\
 & & \underline{\kern5pt{}-5x^2\kern5pt} & \underline{\kern5pt{}+15x\kern5pt} & \underline{\kern5pt{}-10\kern5pt} \\
 & & & 9x &
\end{array}
$$

2° Passo: Usando la linearità dell'integrale si ottiene

$$
\int\frac{p(x)}{q(x)}\,dx=\underbrace{\int s(x)\,dx}_{\text{semplice da calcolare}}+\int\frac{r(x)}{q(x)}\,dx
$$

Per esempio

$$
\begin{aligned}
\int\frac{x^4-2x^2+10}{x^2-3x+2}\,dx &= \int x^2+3x+5\,dx+\int\frac{9x}{x^2-3x+2}\,dx \\[0.8em]
&= \frac{x^3}{3}+\frac{3x^2}{2}+5x+\int\frac{9x}{x^2-3x+2}\,dx.
\end{aligned}
$$

3° Passo (decomposizione in fratti semplici): Si calcola

$$
\int\frac{r(x)}{q(x)}\,dx.
$$

Consideriamo soltanto il caso $\text{grado}(q)=2$ cioè $q(x)=ax^2+bx+c$, $r(x)=dx+e$. Ci sono 3 casi secondo il segno del discriminante di $q(x)$:

- (i) $b^2-4ac>0$, cioè $q(x)$ ha due zeri reali distinti $x_1,x_2$.
- (ii) $b^2-4ac=0$, cioè $q(x)$ ha soltanto uno zero (doppio) reale $x_0$.
- (iii) $b^2-4ac<0$, cioè $q(x)$ non ha zeri reali.

*Caso (i)*: I due zeri distinti di $q(x)$ sono date da

$$
x_{1,2}=\frac{-b\pm\sqrt{b^2-4ac}}{2a}.
$$

Allora si possono trovare due costanti $A,B\in\mathbb{R}$ (uniche) tali che

$$
\frac{r(x)}{q(x)}=\frac{A}{x-x_1}+\frac{B}{x-x_2}\qquad\Rightarrow\qquad\int\frac{r(x)}{q(x)}\,dx=A\cdot\ln\lvert x-x_1\rvert+B\cdot\ln\lvert x-x_2\rvert+c.
$$

L'esempio precedente con $q(x)=x^2-3x+2$ entra proprio in questo caso: Qui abbiamo

$$
x_{1,2}=\frac{3\pm\sqrt{(-3)^2-4\cdot1\cdot2}}{2\cdot1}=\frac{3\pm1}{2}=1\text{ opp. }2.
$$

Inoltre $r(x)=9x$ e quindi cerchiamo costanti $A,B\in\mathbb{R}$ tale che

$$
\frac{9\cdot x-0}{x^2-3x+2}\overset{!}{=}\frac{A}{x-1}+\frac{B}{x-2}=\frac{(A+B)\cdot x-(2A+B)}{(x-1)\cdot(x-2)}.
$$

Confrontando i coefficienti ciò vale se e solo se

$$
\left\{\begin{array}{r}A+B=9\\2A+B=0\end{array}\right\}\quad\iff\quad\left\{\begin{array}{r}A=-9\\B=18\end{array}\right\}
$$

e quindi otteniamo

$$
\begin{gathered}
\frac{9x}{x^2-3x+2}=\frac{-9}{x-1}+\frac{18}{x-2} \\[0.8em]
\Rightarrow\quad\int\frac{9x}{x^2-3x+2}\,dx=-9\cdot\ln\lvert x-1\rvert+18\cdot\ln\lvert x-2\rvert+c.
\end{gathered}
$$

Così risulta

$$
\int\frac{x^4-2x^2+10}{x^2-3x+2}\,dx=\frac{x^3}{3}+\frac{3x^2}{2}+5x-9\cdot\ln\lvert x-1\rvert+18\cdot\ln\lvert x-2\rvert+c.
$$

*Caso (ii)*: L'unico zero di $q(x)$ è dato da

$$
x_0=-\frac{b}{2a}
$$

Allora si possono trovare due costanti $A,B\in\mathbb{R}$ (uniche) tali che

$$
\frac{r(x)}{q(x)}=\frac{A}{x-x_0}+\frac{B}{(x-x_0)^2}\quad\Rightarrow\quad\int\frac{r(x)}{q(x)}\,dx=A\cdot\ln\lvert x-x_0\rvert-\frac{B}{x-x_0}+c.
$$

Come esempio concreto consideriamo l'integrale

$$
\int\frac{3x}{x^2-2x+1}\,dx.
$$

Allora il denominatore si annulla se e solo se

$$
x=\frac{2\pm\sqrt{2^2-4}}{2}=1=x_0.
$$

Quindi cerchiamo $A,B\in\mathbb{R}$ tale che

$$
\frac{3\cdot x+0}{x^2-2x+1}\overset{!}{=}\frac{A}{x-1}+\frac{B}{(x-1)^2}=\frac{A\cdot x+(B-A)}{(x-1)^2}
$$

Confrontando i coefficienti ciò vale se e solo se

$$
\left\{\begin{array}{r}A=3\\B-A=0\end{array}\right\}\quad\iff\quad\left\{\begin{array}{r}A=3\\B=3\end{array}\right\}
$$

e quindi otteniamo

$$
\frac{3x}{x^2-2x+1}=\frac{3}{x-1}+\frac{3}{(x-1)^2}\quad\Rightarrow\quad\int\frac{3x}{x^2-2x+1}\,dx=3\cdot\ln\lvert x-1\rvert-\frac{3}{x-1}+c.
$$

*Caso (iii)*: In questo caso $q(x)$ non ha zeri reali. Allora si possono trovare due costanti $A,B\in\mathbb{R}$ (uniche) tali che

$$
\frac{r(x)}{q(x)}=\frac{A\cdot q'(x)}{q(x)}+\frac{B}{q(x)}\quad\Rightarrow\quad\int\frac{r(x)}{q(x)}\,dx=A\cdot\ln\lvert q(x)\rvert+B\int\frac{1}{q(x)}\,dx,
$$

dove abbiamo usato la formula $\int\frac{q'(x)}{q(x)}\,dx=\ln\lvert q(x)\rvert$. Rimane da calcolare l'integrale

$$
\int\frac{dx}{q(x)}=\int\frac{1}{ax^2+bx+c}\,dx.
$$

Per fare ciò si cercano costanti $\alpha,\beta,\gamma\in\mathbb{R}$ tale che

$$
q(x)=ax^2+bx+c=\gamma\cdot\left(1+\left(\tfrac{x+\alpha}{\beta}\right)^2\right)
$$

Usando la sostituzione

$$
t:=\frac{x+\alpha}{\beta}\quad\Rightarrow\quad\frac{dt}{dx}=\frac{1}{\beta}\quad\Rightarrow\quad dx=\beta\cdot dt
$$

risulta

$$
\begin{aligned}
\int\frac{dx}{q(x)} &= \int\frac{dx}{\gamma\cdot\left(1+\left(\tfrac{x+\alpha}{\beta}\right)^2\right)} \\[0.8em]
&= \frac{\beta}{\gamma}\cdot\int\frac{dt}{1+t^2}=\frac{\beta}{\gamma}\cdot\arctan(t)+c \\[0.8em]
&= \frac{\beta}{\gamma}\cdot\arctan\left(\frac{x+\alpha}{\beta}\right)+c.
\end{aligned}
$$

Riassumendo, in questo caso otteniamo

$$
\int\frac{r(x)}{q(x)}\,dx=A\cdot\ln\lvert q(x)\rvert+\frac{\beta\cdot B}{\gamma}\cdot\arctan\left(\frac{x+\alpha}{\beta}\right)+c.
$$

dove

$$
\frac{r(x)}{q(x)}=\frac{A\cdot q'(x)+B}{q(x)}\qquad\text{e}\qquad q(x)=\gamma\cdot\left(1+\left(\tfrac{x+\alpha}{\beta}\right)^2\right).
$$

Come esempio concreto consideriamo l'integrale

$$
\int\frac{4x}{x^2-4x+13}\,dx.
$$

Visto che il discriminante del denominatore $b^2-4ac=4^2-4\cdot13<0$ siamo nel terzo caso. Allora, cerchiamo prima $A,B\in\mathbb{R}$ tale che

$$
\frac{4\cdot x+0}{x^2-4x+13}\overset{!}{=}\frac{A\cdot\overbrace{(x^2-4x+13)'}^{=2x-4}+B}{x^2-4x+13}=\frac{2A\cdot x+(-4A+B)}{x^2-4x+13}.
$$

Confrontando i coefficienti ciò vale se e solo se

$$
\left\{\begin{array}{r}2A=4\\-4A+B=0\end{array}\right\}\quad\iff\quad\left\{\begin{array}{r}A=2\\B=8\end{array}\right\}
$$

e quindi

$$
\int\frac{4x}{x^2-4x+13}\,dx=2\cdot\ln\bigl(x^2-4x+13\bigr)+8\int\frac{1}{x^2-4x+13}\,dx.
$$

Inoltre vale

$$
x^2-4x+13=(x-2)^2+9=9\cdot\left(1+\left(\tfrac{x-2}{3}\right)^2\right)
$$

cioè $\alpha=-2$, $\beta=3$ e $\gamma=9$ e così con la sostituzione $t:=\frac{x-2}{3}\Rightarrow dx=3\,dt$ risulta

$$
\begin{aligned}
\int\frac{1}{x^2-4x+13}\,dx &= \frac{1}{9}\cdot\int\frac{dx}{1+\left(\tfrac{x-2}{3}\right)^2} \\[0.8em]
&= \frac{3}{9}\cdot\int\frac{dt}{1+t^2}=\frac{1}{3}\cdot\arctan(t)+c \\[0.8em]
&= \tfrac{1}{3}\cdot\arctan\left(\tfrac{x-2}{3}\right)+c.
\end{aligned}
$$

Riassumendo otteniamo il risultato finale

$$
\int\frac{4x}{x^2-4x+13}\,dx=2\cdot\ln\bigl(x^2-4x+13\bigr)+\tfrac{8}{3}\cdot\arctan\left(\tfrac{x-2}{3}\right)+c.
$$

**Integrali Impropri**

Ricordiamo che finora un'integrale definito rappresenta un'area $A$ tra l'asse $x$ e il grafico

- di una *funzione integranda $f$ limitata*,
- su un *dominio di integrazione $[a,b]$ limitato*.

Questo significa che al momento non abbiamo definito integrali del tipo

$$
\int_0^1\frac{1}{\sqrt{x}}\,dx\qquad\text{(funzione integranda }\textit{non}\text{ limitata)}
$$

oppure

$$
\int_1^{+\infty}\frac{1}{x^2}\,dx\qquad\text{(dominio di integrazione }[1,+\infty)\ \textit{non}\text{ limitato)}
$$

```plot
x: [-0.1, 4.2]
y: [-0.3, 3.4]
height: 280
xlabel: $x$
xticks: [1]
yticks: [1, 2, 3]
alt: Grafico di 1/radice di x con l'area verde tra 0 e 1, che rappresenta l'integrale di 1/radice di x da 0 a 1.
items:
  - area: 1/sqrt(x)
    from: 0.0005
    to: 1
    color: green
  - fn: 1/sqrt(x)
    domain: [0.0005, 2.2]
    samples: 1500
    color: green
  - line: [[1, 0], [1, 1]]
  - text: $\dfrac{1}{\sqrt{x}}$
    at: [0.65, 2.65]
  - text: $\displaystyle\int_0^1\frac{1}{\sqrt{x}}\,dx$
    at: [3.3, 2.05]
  - line: [[2.30, 2.04], [2.08, 1.97], [1.88, 1.90], [1.68, 1.82], [1.50, 1.74], [1.34, 1.65], [1.19, 1.56], [1.05, 1.46], [0.92, 1.36], [0.81, 1.26], [0.71, 1.15], [0.63, 1.04], [0.55, 0.92], [0.50, 0.80], [0.45, 0.67]]
    arrow: true
```

```plot
x: [-0.1, 5.8]
y: [-0.3, 2.5]
height: 260
xlabel: $x$
xticks: [1, 2, 3, 4, 5]
yticks: [1, 2]
caption: Integrali impropri.
alt: Grafico di 1/x^2 con l'area verde da 1 a +infinito, che rappresenta l'integrale di 1/x^2 da 1 a +infinito.
items:
  - area: 1/x^2
    from: 1
    to: 5
    color: green
  - fn: 1/x^2
    domain: [0.76, 5]
    color: green
  - line: [[1, 0], [1, 1]]
  - text: $\dfrac{1}{x^2}$
    at: [0.5, 2.1]
  - text: $\displaystyle\int_1^{+\infty}\frac{1}{x^2}\,dx$
    at: [4.4, 1.3]
  - line: [[3.32, 1.12], [3.11, 1.10], [2.91, 1.07], [2.72, 1.03], [2.55, 0.99], [2.38, 0.95], [2.22, 0.90], [2.08, 0.84], [1.94, 0.78], [1.82, 0.71], [1.70, 0.64], [1.60, 0.56], [1.51, 0.48], [1.42, 0.39], [1.35, 0.30]]
    arrow: true
```

**Definizione 6.8** (*Integrale Improprio*). Sia $f:[a,b)\to\mathbb{R}$ con $a\in\mathbb{R}$ e $b\in\mathbb{R}\cup\{+\infty\}$ tale che $f$ è integrabile in $[a,c]$ per ogni $a<c<b$. Allora, se converge

$$
\lim_{c\to b^-}\int_a^c f(x)\,dx=:A
$$

si dice che l'integrale

$$
\int_a^b f(x)\,dx:=A\qquad(=\textit{integrale improprio}\text{ oppure }\textit{generalizzato})
$$

esiste nel senso *improprio* oppure che *converge*. Una definizione analoga si ha per $f:(a,b]\to\mathbb{R}$ con $a\in\mathbb{R}\cup\{-\infty\}$, $b\in\mathbb{R}$:

$$
\int_a^b f(x)\,dx:=\lim_{c\to a^+}\int_c^b f(x)\,dx.
$$

**Esempi.**

- Per $r\in\mathbb{R}$ studiamo la convergenza dell'integrale improprio

  $$
  \int_1^{+\infty}x^r\,dx:=\lim_{c\to+\infty}\int_1^c x^r\,dx.
  $$

  Conviene considerare 2 casi

  - $r=-1$: Allora

    $$
    \int_1^c x^{-1}\,dx=\ln(x)\Big|_1^c=\ln(c)-\ln(1)\to+\infty\qquad\text{per }c\to+\infty,
    $$

    cioè l'integrale

    $$
    \int_1^{+\infty}\frac{1}{x}\,dx=+\infty
    $$

    diverge.

**Teorema 6.9** (*del Confronto per gli Integrali Impropri*). Siano $f,g:[a,b)\to\mathbb{R}$ con $a\in\mathbb{R}$, $b\in\mathbb{R}\cup\{+\infty\}$ e tale che per ogni $a<c<b$, $f,g$ siano integrabili su $[a,c]$. Se

- $\lvert f(x)\rvert\le g(x)$ per ogni $x\in[a,b)$ (cioè $g$ è un *maggiorante di $\lvert f\rvert$*) e
- $\int_a^b g(x)\,dx$ converge,

allora converge anche $\int_a^b f(x)\,dx$. Un risultato simile vale anche per $f,g:(a,b]\to\mathbb{R}$ con $a\in\mathbb{R}\cup\{-\infty\}$, $b\in\mathbb{R}$.

**Esempi.**

- Consideriamo l'integrale improprio $\displaystyle\int_{-\infty}^{+\infty}e^{-x^2}\,dx.$

```plot
x: [-3.3, 3.3]
y: [-0.12, 1.2]
height: 280
xlabel: $x$
xticks: [-3, -2, -1, 1, 2, 3]
yticks: []
caption: Integrale improprio della "Campana di Gauss".
alt: Grafico della campana di Gauss e^(-x^2), con l'area sotto la curva evidenziata, che vale radice di pi greco.
items:
  - area: exp(-x^2)
    from: -3.3
    to: 3.3
    color: orange
  - fn: exp(-x^2)
    domain: [-3.3, 3.3]
  - text: $e^{-x^2}$
    at: [0.75, 0.96]
  - text: $\sqrt{\pi}$
    at: [2.7, 0.47]
  - line: [[2.22, 0.47], [2.03, 0.46], [1.84, 0.45], [1.67, 0.44], [1.51, 0.43], [1.37, 0.42], [1.23, 0.41], [1.11, 0.40], [0.99, 0.39], [0.89, 0.37], [0.80, 0.36], [0.72, 0.35], [0.66, 0.34], [0.60, 0.33], [0.56, 0.31], [0.53, 0.30], [0.51, 0.29]]
    arrow: true
```

In questo caso non soltanto uno degli estremi è "critico" (nel senso che è infinito oppure un'asintoto verticale della funzione integranda) ma entrambi. In questi casi si spezza l'integrale nella somma di due integrali scegliendo un punto $c$ tra gli estremi. Nel caso in questione per simmetria conviene scegliere il punto $c=0$ e quindi definiamo

$$
\int_{-\infty}^{+\infty}e^{-x^2}\,dx:=\int_{-\infty}^{0}e^{-x^2}\,dx+\int_{0}^{+\infty}e^{-x^2}\,dx.
$$

Visto che $f(x)=e^{-x^2}$ è una funzione pari, dalla proposizione segue

$$
\int_{-\infty}^{+\infty}e^{-x^2}\,dx=2\cdot\int_{0}^{+\infty}e^{-x^2}\,dx
$$

e quindi l'integrale converge su $(-\infty,+\infty)$ se e solo se converge su $[0,+\infty)$. A questo punto ci serve una funzione maggiorante per la quale l'integrale improprio converge. Poiché

$$
\int_{0}^{+\infty}e^{-x^2}\,dx=\int_{0}^{1}e^{-x^2}\,dx+\int_{1}^{+\infty}e^{-x^2}\,dx,
$$

dove il primo integrale è un'integrale definito e quindi esiste finito, basta che tale funzione sia maggiorante soltanto per $x\ge1$. Allora, per $x\ge1$ vale

$$
\lvert f(x)\rvert=e^{-x^2}\le2x\cdot e^{-x^2}=:g(x)
$$

e

$$
\begin{aligned}
\int_1^c 2x\cdot e^{-x^2}\,dx &= -\int_1^c -2x\cdot e^{-x^2}\,dx \\[0.6em]
&= -e^{-x^2}\Big|_1^c \\[0.6em]
&= e^{-1}-e^{-c^2}\to e^{-1}\qquad\text{per }c\to+\infty.
\end{aligned}
$$

Quindi $\int_1^{+\infty}g(x)\,dx$ converge e per il criterio del confronto converge anche $\int_1^{+\infty}f(x)\,dx$ e di conseguenza anche $\int_{-\infty}^{+\infty}f(x)\,dx$.

- Verifichiamo che $\displaystyle\int_0^{+\infty}\frac{\sin(x)}{x}\,dx$ converge.

```plot
x: [-0.5, 33]
y: [-0.3, 1.15]
height: 280
xlabel: $x$
xticks: [10, 20, 30]
yticks: [0.5, 1]
caption: Integrale improprio convergente.
alt: Grafico di sin(x)/x per x da 0 a 30, con le aree sopra l'asse x in verde e quelle sotto in rosso, sempre più piccole.
items:
  - area: sin(x)/x
    from: 0.0001
    to: 30
    signed: true
  - fn: sin(x)/x
    domain: [0.0001, 30]
    samples: 1200
  - text: $\dfrac{\sin(x)}{x}$
    at: [6.5, 0.9]
```

Visto che $\displaystyle\lim_{x\to0^+}\frac{\sin(x)}{x}=1$ solo l'estremo $b=+\infty$ è "critico". Quindi l'integrale converge su $[0,+\infty)$ se e solo se converge su $[1,+\infty)$. Integrando per parti risulta

$$
\begin{aligned}
\int_1^c\underbrace{\frac{1}{x}}_{f}\cdot\underbrace{\sin(x)}_{g'}\,dx &= \underbrace{\frac{1}{x}}_{f(x)}\cdot\underbrace{\bigl(-\cos(x)\bigr)}_{g(x)}\Big|_1^c-\int_1^c\underbrace{\frac{-1}{x^2}}_{f'}\cdot\underbrace{\bigl(-\cos(x)\bigr)}_{g}\,dx \\[0.8em]
&= \underbrace{\cos(1)-\frac{\cos(c)}{c}}_{\to\,\cos(1)\ \text{per }c\to+\infty}-\int_1^c\frac{\cos(x)}{x^2}\,dx.
\end{aligned}
$$

Quindi l'integrale converge se e solo se

$$
\int_1^{+\infty}\frac{\cos(x)}{x^2}\,dx
$$

converge. Ora è semplice trovare un maggiorante per il quale converge l'integrale improprio. Infatti

$$
\left\lvert\frac{\cos(x)}{x^2}\right\rvert\le\frac{1}{x^2}\qquad\text{e}\qquad\int_1^{+\infty}\frac{1}{x^2}\,dx\quad\text{converge}
$$

Quindi anche l'integrale

$$
\int_0^{+\infty}\frac{\sin(x)}{x}\,dx
$$

converge. Notiamo che qui era necessario

- integrare una volta per parti (aumentando così il grado del denominatore da $x$ a $x^2$) visto che

  $$
  \int_1^{+\infty}\frac{1}{x}\,dx=+\infty\qquad\text{diverge}
  $$
- considerare l'integrale su $[1,+\infty)$ e non su $[0,+\infty)$ visto che

  $$
  \int_0^{+\infty}\frac{1}{x^2}\,dx=+\infty\qquad\text{diverge.}
  $$

**Teorema 6.10** (*Criterio Integrale per le Serie*). Se $f:[1,+\infty)\to[0,+\infty)$ è decrescente e $a_k:=f(k)$, allora

$$
\sum_{k=1}^{+\infty}a_k\ \text{ converge}\qquad\iff\qquad\int_1^{+\infty}f(x)\,dx\ \text{ converge.}
$$

$$
\zeta:(1,+\infty)\to\mathbb{R},\qquad\zeta(s):=\sum_{k=1}^{+\infty}\frac{1}{k^s}
$$

che si chiama la *funzione zeta di Riemann* ed è legato all'ipotesi di Riemann, uno dei problemi aperti più importanti della matematica.

# Funzioni a due parametri 

**Definizione 7.3** (*Limiti per vettori*). Diremo che la successione di vettori $(x_n,y_n)_{n\in\mathbb{N}} \subset \mathbb{R}^2$ converge a $(x_0,y_0)\in\mathbb{R}^2$ se $\lVert (x_n,y_n)-(x_0,y_0)\rVert \to 0$ per $n\to+\infty$. In questo caso scriviamo

$$
\boxed{\lim_{n\to+\infty}(x_n,y_n)=(x_0,y_0)} \qquad \text{oppure} \qquad \boxed{(x_n,y_n)\to(x_0,y_0) \text{ per } n\to+\infty}
$$

**Osservazione.** Vale che

$$
\lim_{n\to+\infty}(x_n,y_n)=(x_0,y_0) \text{ in } \mathbb{R}^2 \iff \begin{cases} \displaystyle\lim_{n\to+\infty}x_n=x_0 & \text{e} \\ \displaystyle\lim_{n\to+\infty}y_n=y_0 & \text{in } \mathbb{R} \end{cases}
$$

Cioè una successione di vettori converge se e solo se converge in ogni componente.

Con la definizione precedente possiamo estendere facilmente la definizione di limite per le funzioni da una a due variabili.

**Definizione 7.4** (*Limiti per Funzioni*). Sia $f: X\subseteq\mathbb{R}^2\to\mathbb{R}$ una funzione reale di due variabili reali. Allora diremo che

*$f(x,y)$ tende a $l\in\mathbb{R}$ per $(x,y)$ tendente a $(x_0,y_0)$*

se per ogni successione $(x_n,y_n)_{n\in\mathbb{N}}\subset X\setminus\{(x_0,y_0)\}$ con $\displaystyle\lim_{n\to+\infty}(x_n,y_n)=(x_0,y_0)$ segue $\displaystyle\lim_{n\to+\infty}f(x_n,y_n)=l$. In questo caso scriveremo

$$
\boxed{\lim_{(x,y)\to(x_0,y_0)}f(x,y)=l} \qquad \text{oppure} \qquad \boxed{f(x,y)\to l \text{ per } (x,y)\to(x_0,y_0)}
$$

**Osservazioni.**

- La definizione di limite per funzioni di due variabili può essere data solo per $(x_0,y_0)\in\mathbb{R}^2$, cioè al finito, poiché, a differenza di $\mathbb{R}$, non essendoci un ordinamento naturale in $\mathbb{R}^2$ non si può definire una direzione privilegiata secondo cui raggiungere $\infty$ in $\mathbb{R}^2$

- Il concetto di limite per le funzioni come definito sopra si basa su quello del limite per le successioni. Come nel caso di una variabile esiste anche un'altra possibilità di introdurre limiti per le funzioni di due variabili che non fa riferimento alle successioni:

  Se $l\in\mathbb{R}$, allora

  $$
  \begin{aligned}
  \lim_{(x,y)\to(x_0,y_0)}f(x,y)=l \iff{}& \forall\varepsilon>0\ \exists\delta>0 \text{ tale che } \lvert f(x,y)-l\rvert<\varepsilon \\
  & \forall(x,y)\in X \text{ con } 0<\lVert(x,y)-(x_0,y_0)\rVert<\delta
  \end{aligned}
  $$

- La definizione di limite in $\mathbb{R}^2$ conserva molte delle proprietà di quelle in $\mathbb{R}$. In particolare
  - (i) il limite, se esiste, è unico;
  - (ii) valgono le regole per il calcolo dei limiti di somme, differenze, prodotti e quozienti.

**Calcolo dei Limiti di Funzioni di due Variabili**

Mentre, come abbiamo visto, la definizione di limite si generalizza facilmente da $\mathbb{R}$ a $\mathbb{R}^2$, il calcolo dei limiti in due variabili presenta delle difficoltà aggiuntive. Ciò è dovuto al fatto che, rispetto al caso di $\mathbb{R}$, possiamo avvicinarci al punto $(x_0,y_0)\in\mathbb{R}^2$ in cui vogliamo calcolare il limite da varie direzioni e modi molto diversi. Per semplicità ci restringeremo nel seguente al caso del punto $(x_0,y_0)=(0,0)$, cioè l'origine.

**Una Condizione per la $\textcolor{red}{\textit{non}}$ Esistenza del Limite.** Il fatto che

$$
\lim_{(x,y)\to(0,0)}f(x,y)=l
$$

vuol dire che *ogni* tipo di avvicinamento di $(x,y)$ al punto $(0,0)$ (p.e. su rette, parabole oppure spirali passando per l'origine) risulta nella convergenza di $f(x,y)$ allo *stesso* valore $l$.

**Proposizione 7.5.** Se $\displaystyle\lim_{x\to0}f(x,mx)$ esiste ma dipende da $m\in\mathbb{R}$ allora il limite

$$
\lim_{(x,y)\to(0,0)}f(x,y) \quad \textit{non esiste.}
$$

**Esempio.** Consideriamo il limite

$$
\lim_{(x,y)\to(0,0)}\frac{xy}{x^2+y^2}
$$

Ponendo $y=mx$ per $m\in\mathbb{R}$ otteniamo che

$$
\lim_{x\to0}f(x,mx)=\lim_{x\to0}\frac{mx^2}{x^2+m^2x^2}=\frac{m}{1+m^2} \quad \text{dipende da } m.
$$

Risulta quindi che il limite $\displaystyle\lim_{(x,y)\to(0,0)}f(x,y)$ $\textcolor{red}{\textit{non}}$ esiste.

**Osservazione.** Non vale il contrario della proposizione precedente, cioè se $\displaystyle\lim_{x\to0}f(x,mx)$ esiste ed è indipendente da $m\in\mathbb{R}$ ciò *non* implica che $\displaystyle\lim_{(x,y)\to(0,0)}f(x,y)$ esiste. Comunque se

$$
\lim_{x\to0}f(x,mx)=l
$$

indipendentemente da $m\in\mathbb{R}$, allora $l$ è l'unico candidato per il limite $\displaystyle\lim_{(x,y)\to(0,0)}f(x,y)$.

**Esempio.** Consideriamo

$$
\lim_{(x,y)\to(0,0)}\frac{x^2y}{x^4+y^2}.
$$

Si ha che

$$
\lim_{x\to0}f(x,mx)=\lim_{x\to0}\frac{mx^3}{x^4+m^2x^2}=\lim_{x\to0}\frac{mx}{x^2+m^2}=0 \qquad \text{per ogni } m\in\mathbb{R}.
$$

Quindi tutti i limiti al variare di $m\in\mathbb{R}$ esistono e sono uguali. Pertanto se il limite $l$ di $f$ esiste, deve essere uguale a $l=0$.

Consideriamo ora la parabola $y=x^2$. Tale curva passa per il punto $(0,0)$, quindi fornisce un altro modo per avvicinarsi ad esso. Ponendo $y=x^2$ e calcolando il limite per $x\to0$, cioè muovendosi verso il punto $(0,0)$ sulla parabola, allora risulta

$$
\lim_{x\to0}f(x,x^2)=\lim_{x\to0}\frac{x^2\cdot x^2}{x^4+x^4}=\frac12\neq0=\lim_{x\to0}f(x,x) \ !!
$$

Quindi abbiamo trovato due curve passanti per il punto $(0,0)$, muovendoci lungo le quali troviamo diversi valori del limite. Possiamo pertanto concludere che il

$$
\lim_{(x,y)\to(0,0)}\frac{x^2y}{x^4+y^2}
$$

$\textcolor{red}{\textit{non}}$ esiste.

**Osservazione.** La scelta della curva $y=x^2$ è stata fatta per ristabilire il rapporto omogeneo fra le variabili $x$ e $y$. Infatti sia al numeratore che al denominatore il rapporto fra il grado della $x$ e della $y$ è 2 a 1

**Una Tecnica per dimostrare l'Esistenza del Limite.** Fin qui abbiamo visto come si può dimostrare la *non* esistenza di un limite. Adesso vediamo come si può dimostrare l'esistenza di un limite in $\mathbb{R}^2$. Perciò servono dapprima le

*Coordinate polari:* Ricordiamo (cfr. corso di Geometria) che un punto $P$ del piano, oltre che con le sue coordinate cartesiane $(x,y)$, può essere rappresentato con le *coordinate polari* $(\rho,\vartheta)\in[0,\infty)\times[0,2\pi)$.

```plot
x: [-0.4, 8.2]
y: [-0.5, 2.7]
width: 640
height: 250
xticks: { 3.4: "$\\textcolor{red}{x}$" }
yticks: { 1.95: "$\\textcolor{red}{y}$" }
alt: "Coordinate polari: il punto P = (x, y) ha distanza rho dall'origine e angolo theta rispetto all'asse x"
items:
  - guide: [3.4, 1.95]
    color: red
  - line: [[0, 0], [3.4, 1.95]]
    color: blue
  - line: [[1.100, 0.000], [1.100, 0.023], [1.099, 0.045], [1.098, 0.068], [1.096, 0.091], [1.094, 0.113], [1.091, 0.136], [1.087, 0.158], [1.083, 0.180], [1.079, 0.203], [1.074, 0.225], [1.069, 0.247], [1.063, 0.269], [1.057, 0.291], [1.050, 0.313], [1.042, 0.334], [1.034, 0.356], [1.026, 0.377], [1.017, 0.398], [1.008, 0.419], [0.998, 0.439], [0.988, 0.460], [0.977, 0.480], [0.966, 0.500], [0.954, 0.520]]
    color: blue
    arrow: true
  - text: $\vartheta$
    at: [0.75, 0.2]
    color: blue
    anchor: c
  - text: $\rho$
    at: [1.5, 1.2]
    color: blue
  - point: [3.4, 1.95]
  - text: "$P=\\textcolor{red}{(x,y)}$ in coordinate cartesiane"
    at: [3.65, 2.25]
    anchor: e
  - text: "$=\\textcolor{blue}{(\\rho,\\vartheta)}$ in coordinate polari"
    at: [3.65, 1.8]
    anchor: e
```

Le formule di passaggio da coordinate cartesiane a coordinate polari sono date da

$$
\begin{cases} x=\rho\cos(\vartheta) \\ y=\rho\sin(\vartheta) \end{cases} \qquad\qquad \begin{cases} \rho=\sqrt{x^2+y^2} \\ \tan\vartheta=\frac{y}{x} \end{cases}
$$

Si noti che la relazione $\tan\vartheta=\frac{y}{x}$ non può essere risolto per $\vartheta$ in quanto la funzione $\tan$ non è invertibile in $[0,2\pi)\ni\vartheta$. Si noti che

$$
\boxed{(x,y)\to(0,0) \quad\iff\quad \rho\to0^+}
$$

Quindi passando dalle coordinate cartesiane alle coordinate polari il limite da *due* variabili si trasforma in un limite di *una* variabile! Sfruttando questa idea si ottiene la seguente

**Proposizione 7.6.** Se esiste $l\in\mathbb{R}$ e una funzione $g(\rho)$ (indipendente da $\vartheta$!) tale che

$$
\lvert f(\overbrace{\rho\cos(\vartheta)}^{=x},\overbrace{\rho\sin(\vartheta)}^{=y})-l\rvert \le g(\rho)
$$

con $g(\rho)\to0$ per $\rho\to0^+$, allora

$$
\lim_{(x,y)\to(0,0)}f(x,y)=l.
$$

Consideriamo alcuni esempi.

**Esempio.** Calcola, se esiste, il limite

$$
\lim_{(x,y)\to(0,0)}\frac{2x^2y}{x^2+y^2}=:l.
$$

Allora $\lim_{x\to0}f(x,mx)=0$ per ogni $m\in\mathbb{R}$, quindi se il limite esiste deve essere $l=0$. Per studiare la convergenza passiamo alle coordinate polari, cioè scriviamo

$$
f(x,y)=f(\rho\cos(\vartheta),\rho\sin(\vartheta))=\frac{2\rho^2\cos^2(\vartheta)\cdot\rho\sin(\vartheta)}{\rho^2}=2\rho\cos^2(\vartheta)\sin(\vartheta).
$$

Visto che $\lvert\sin(\vartheta)\rvert,\lvert\cos(\vartheta)\rvert\le1$, segue

$$
\begin{aligned}
\lvert f(\rho\cos(\vartheta),\rho\sin(\vartheta))-l\rvert &= \lvert 2\rho\cos^2(\vartheta)\sin(\vartheta)-0\rvert = 2\rho\cdot\lvert\cos^2(\vartheta)\sin(\vartheta)\rvert \\
&\le 2\rho =: g(\rho)\to0 \qquad \text{per } \rho\to0^+.
\end{aligned}
$$

Quindi, per il risultato precedente, segue che $\displaystyle\lim_{(x,y)\to(0,0)}f(x,y)=0$.

**Definizione 7.7** (Continuità). Una funzione $f: X\subseteq\mathbb{R}^2\to\mathbb{R}$ si dice

- *continua in* $(x_0,y_0)\in X$ se per ogni successione $(x_n,y_n)_{n\in\mathbb{N}}\subset X$ con $(x_n,y_n)\to(x_0,y_0)$ segue $f(x_n,y_n)\to f(x_0,y_0)$ per $n\to+\infty$;
- *continua*, se è continua in ogni $x\in X$.
- Denotiamo con

  $$
  C(X):=\{f:X\to\mathbb{R}\mid f \text{ è continua}\}
  $$

  l'insieme delle funzioni continue su $X\subseteq\mathbb{R}^2$.

Valgono molte delle osservazioni fatte nel caso di una variabile.

**Osservazioni.**

- Come in una variabile, la continuità si può anche definire senza fare riferimento alle successioni:

  $f$ è continua in $(x_0,y_0)$ $\iff$ per ogni $\varepsilon>0$ esiste $\delta>0$ tale che $\lvert f(x,y)-f(x_0,y_0)\rvert<\varepsilon$ per ogni $(x,y)\in X$ con $\lVert(x,y)-(x_0,y_0)\rVert<\delta$.
- $f$ è continua in $(x_0,y_0)$ $\iff$ $\displaystyle\lim_{(x,y)\to(x_0,y_0)}f(x,y)=f(x_0,y_0)$.
- Somme, differenze, prodotti, rapporti e composizione di funzioni continue sono continue.

**Esempio.** La funzione $f:\mathbb{R}^2\to\mathbb{R}$ definita da $f(x,y)=\sin(xe^y+x^2y)$ risulta continua in quanto composizione di funzioni continue.

# Derivate a due parametri

**Calcolo Differenziale per Funzioni Reali di due Variabili**

In questo capitolo estenderemo il concetto di derivazione alle funzioni reali di due variabili. Come vedremo in seguito ciò *non* è così semplice come generalizzare il concetto di limite oppure di continuità da una a due variabili.

**Concetti di Derivabilità di Funzioni di due Variabili**

Mentre per le funzioni reali di una variabile esiste soltanto un concetto di derivabilità scopriremo in seguito che per funzioni di due variabili la situazione è più complicata.

**Derivate Parziali e Derivabilità.** La prima generalizzazione del concetto di derivata si basa (come in una variabile) sul limite di un rapporto incrementale.

**Definizione 8.1.** Siano $f: X\subset\mathbb{R}^2\to\mathbb{R}$ e $(x_0,y_0)\in X$ un "punto interno" di $X$. Se converge

$$
\lim_{h\to0}\frac{f(x_0+h,y_0)-f(x_0,y_0)}{h}=:\frac{\partial f}{\partial x}(x_0,y_0)\in\mathbb{R}
$$

allora $f$ si dice *derivabile parzialmente rispetto $x$* in $(x_0,y_0)$ con *derivata parziale* $\frac{\partial f}{\partial x}(x_0,y_0)=:f_x(x_0,y_0)=:D_xf(x_0,y_0)$. Similmente, se converge

$$
\lim_{h\to0}\frac{f(x_0,y_0+h)-f(x_0,y_0)}{h}=:\frac{\partial f}{\partial y}(x_0,y_0)\in\mathbb{R}
$$

allora $f$ si dice *derivabile parzialmente rispetto $y$* in $(x_0,y_0)$ con *derivata parziale* $\frac{\partial f}{\partial y}(x_0,y_0)=:f_y(x_0,y_0)=:D_yf(x_0,y_0)$.

**Osservazione.** La derivata parziale rispetto $x$ corrisponde a fare la derivata ordinaria (cioè rispetto a una variabile) della funzione $g(x):=f(x,y_0)$ che è la restrizione di $f$ alla retta $y=y_0$. Similmente, la derivata parziale rispetto $y$ corrisponde a fare la derivata ordinaria della funzione $h(y):=f(x_0,y)$ che è la restrizione di $f$ alla retta $x=x_0$.

![[Pasted image 20250619124155 figura.png]]

Quindi le derivate parziali $f_x(x_0,y_0)$ e $f_y(x_0,y_0)$ forniscono informazioni sulla monotonia di $f$ lungo le rette $y=y_0$ e $x=x_0$, rispettivamente, nell'intorno del punto $(x_0,y_0)$.

**Osservazione.** Per calcolare le derivate parziali di una funzione rispetto ad $x$ (oppure $y$) è sufficiente, se le funzioni che la compongono sono derivabili, derivare in maniera ordinaria rispetto ad $x$ (rispettivamente $y$), considerando $y$ (rispettivamente $x$) come costante.

**Esempi.**

- Se $f(x,y)=2x^3y-y^2+3xy$, allora $\dfrac{\partial f}{\partial x}(x,y)=6x^2y+3y$, $\dfrac{\partial f}{\partial y}(x,y)=2x^3-2y+3x$.
- Se $f(x,y)=e^{xy}+y^2$, allora $\dfrac{\partial f}{\partial x}(x,y)=y\,e^{xy}$, $\dfrac{\partial f}{\partial y}(x,y)=x\,e^{xy}+2y$.

Se però le funzioni che intervengono non sono derivabili, bisogna passare attraverso la definizione delle derivate parziale.

**Esempio.** Sia $f(x,y)=\lvert x\rvert\cdot y$, allora in un punto del tipo $(0,y)$ non possiamo derivare direttamente rispetto ad $x$, ma dobbiamo usare la definizione

$$
f_x(0,y)=\lim_{h\to0}\frac{f(0+h,y)-f(0,y)}{h}=\lim_{h\to0}\frac{\lvert h\rvert\cdot y}{h}=\begin{cases} \nexists & \text{se } y\neq0, \\ 0 & \text{se } y=0. \end{cases}
$$

**Problema.** Che cos'è la derivata di una funzione reale di due variabili?

Questo problema si risolve raggruppando le derivate parziali in un vettore.

**Definizione 8.2.** Siano $f: X\subset\mathbb{R}^2\to\mathbb{R}$ e $(x_0,y_0)\in X$. Se $f$ è derivabile parzialmente rispetto ad $x$ e $y$ in $(x_0,y_0)$, allora $f$ si dice *derivabile* (parzialmente) in $(x_0,y_0)$. In tal caso si può definire il vettore delle derivate parziali

$$
\boxed{Df(x_0,y_0)=\left(\frac{\partial f}{\partial x}(x_0,y_0),\frac{\partial f}{\partial y}(x_0,y_0)\right)\in\mathbb{R}^2}
$$

Tale vettore si chiama *gradiente* di $f$ in $(x_0,y_0)$ e può essere considerato come derivata (prima) di una funzione reale di due variabili. Per il gradiente si usano anche le notazioni $Df(x,y)=:\operatorname{grad}f(x,y)=:\nabla f(x,y)$ (si legge "*nabla* di $f$").

**Esempio.** Se $f(x,y)=2x^3y-y^2+3xy$, allora $Df(x,y)=(6x^2y+3y,2x^3-2y+3x)\in\mathbb{R}^2$. In particolare, $Df(1,1)=(6+3,2-2+3)=(9,3)$.

**Definizione 8.3.** Sia $f: X\subset\mathbb{R}^2\to\mathbb{R}$ e $(x_0,y_0)\in X$. Se esiste un vettore $A=(a,b)\in\mathbb{R}^2$ tale che

$$
\begin{aligned}
f(x,y) &= f(x_0,y_0)+A\cdot(x-x_0,y-y_0)+o\big(\lVert(x-x_0,y-y_0)\rVert\big) \\
&= f(x_0,y_0)+a\cdot(x-x_0)+b\cdot(y-y_0) \\
&\quad +o\Big(\sqrt{(x-x_0)^2+(y-y_0)^2}\Big) \qquad \text{per } (x,y)\to(x_0,y_0)
\end{aligned}
$$

allora $f$ si dice *differenziabile* in $(x_0,y_0)$ (il simbolo "$\cdot$" denota in questo caso il prodotto scalare tra vettori in $\mathbb{R}^2$).

**Proposizione 8.4.** *Sia $f: X\subseteq\mathbb{R}^2\to\mathbb{R}$ differenziabile nel punto $(x_0,y_0)\in X$. Allora*

- *$f$ è continua in $(x_0,y_0)$;*
- *$f$ è derivabile in $(x_0,y_0)$ e $A=Df(x_0,y_0)=(f_x(x_0,y_0),f_y(x_0,y_0))$. Quindi risulta*

$$
\begin{aligned}
f(x,y) &= f(x_0,y_0)+Df(x_0,y_0)\cdot(x-x_0,y-y_0)+o\big(\lVert(x-x_0,y-y_0)\rVert\big) \\
&= f(x_0,y_0)+f_x(x_0,y_0)\cdot(x-x_0)+f_y(x_0,y_0)\cdot(y-y_0) \\
&\quad +o\Big(\sqrt{(x-x_0)^2+(y-y_0)^2}\Big) \qquad \text{per } (x,y)\to(x_0,y_0)
\end{aligned}
$$

**Osservazioni.**

- Ricordando la definizione di $o(\cdot)$ la condizione definendo la differenziabilità in $(x_0,y_0)$ si può riscrivere come

$$
\lim_{(x,y)\to(x_0,y_0)}\frac{f(x,y)-\big(f(x_0,y_0)+f_x(x_0,y_0)\cdot(x-x_0)+f_y(x_0,y_0)\cdot(y-y_0)\big)}{\sqrt{(x-x_0)^2+(y-y_0)^2}}=0
$$

- Il termine lineare nella definizione di differenziabilità fornisce l'equazione

  $$
  \boxed{\begin{aligned}z=p(x,y):={}&f(x_0,y_0)+f_x(x_0,y_0)\cdot(x-x_0) \\ &+f_y(x_0,y_0)\cdot(y-y_0), \quad (x,y)\in\mathbb{R}^2\end{aligned}}
  $$

  del *piano tangente* $p$ al grafico di $f$ nel punto $(x_0,y_0)$, cioè del piano che localmente ha un unico punto di intersezione con il grafico di $f$.

  ![[Pasted image 20250619125559 figura.png]]

  Piano tangente.

**Proposizione 8.5.** *Se $f: X\subset\mathbb{R}^2\to\mathbb{R}$ è derivabile con continuità (cioè le derivate parziali $f_x$ e $f_y$ di $f$ esistono e sono continue, brevemente si dice che $f\in\mathrm{C}^1$) allora $f$ è differenziabile.*

**Esempio.** Sia $f:\mathbb{R}^2\to\mathbb{R}$, $f(x,y):=\sin(x^2\cdot e^y)$. Allora, visto che

$$
f_x(x,y)=\cos(x^2\cdot e^y)\cdot2x\cdot e^y, \qquad f_y(x,y)=\cos(x^2\cdot e^y)\cdot x^2\cdot e^y
$$

sono (come prodotti e composizioni di funzioni continue) continue, $f$ è differenziabile.

Riassumendo abbiamo per una funzione $f$ di *due* variabili

$$
\begin{array}{ccccc}
\boxed{f\in\mathrm{C}^1} & \begin{matrix}\Rightarrow \\ \not\Leftarrow\end{matrix} & \boxed{f \text{ differenziabile}} & \begin{matrix}\Rightarrow \\ \not\Leftarrow\end{matrix} & \boxed{f \text{ derivabile (parzialmente)}} \\[0.8em]
 & & \Downarrow\ \not\Uparrow & \bcancel{\nearrow}\ \bcancel{\swarrow} & \\[0.8em]
 & & \boxed{f \text{ continua}} & &
\end{array}
$$

mentre per una funzione di *una* variabile la derivabilità e la differenziabilità sono equivalenti.

**Derivate Direzionali.** Concludiamo le varie definizioni di derivabilità con quella di derivata direzionale.

**Definizione 8.6.** Sia $f: X\subset\mathbb{R}^2\to\mathbb{R}$, $P_0=(x_0,y_0)\in X$ e $v=(v_0,v_1)\in\mathbb{R}^2$ un versore, cioè $\lVert v\rVert=\sqrt{v_0^2+v_1^2}=1$. Se converge

$$
\lim_{h\to0}\frac{f(P_0+h\cdot v)-f(P_0)}{h}=\lim_{h\to0}\frac{f(x_0+hv_0,y_0+hv_1)-f(x_0,y_0)}{h}=:\frac{\partial f}{\partial v}(x_0,y_0)\in\mathbb{R}
$$

allora $f$ si dice *derivabile rispetto la direzione $v$* in $(x_0,y_0)$ con *derivata direzionale* $\frac{\partial f}{\partial v}(x_0,y_0)$. Altre notazioni: $f_v(x_0,y_0)=D_vf(x_0,y_0)$.

**Osservazioni.**

- Usando le coordinate polari si vede che tutti i versori $v\in\mathbb{R}^2$ si possono rappresentare come $v=(\cos(\vartheta),\sin(\vartheta))$ per $\vartheta\in[0,2\pi)$.
- La derivata direzionale in $(x_0,y_0)$ rispetto $v\in\mathbb{R}^2$ corrisponde a fare la derivata ordinaria (cioè rispetto a una variabile) della funzione $F(t)=f(x_0+tv_0,y_0+tv_1)$, $t\in\mathbb{R}$, che è la restrizione di $f$ alla retta $v_0\cdot(y-y_0)=v_1(x-x_0)$. Quindi essa fornisce informazioni sulla crescenza/decrescenza di $f$ lungo tale retta nell'intorno del punto $(x_0,y_0)$, cioè nella direzione di $v$ partendo da $(x_0,y_0)$.

**Teorema 8.7** (*Teorema del Gradiente*). Sia $f: X\subset\mathbb{R}^2\to\mathbb{R}$, $(x_0,y_0)\in X$ e $v=(v_0,v_1)\in\mathbb{R}^2$ un versore. Se $f$ è differenziabile in $(x_0,y_0)$ allora

$$
\boxed{\frac{\partial f}{\partial v}(x_0,y_0)=v\cdot Df(x_0,y_0)=v_0\cdot\frac{\partial f}{\partial x}(x_0,y_0)+v_1\cdot\frac{\partial f}{\partial y}(x_0,y_0)}
$$

dove "$\cdot$" indica il prodotto scalare tra vettori in $\mathbb{R}^2$.

**Osservazione.** Dal teorema precedente segue che se $f$ è differenziabile in $(x_0,y_0)$, allora in $(x_0,y_0)$ esistono le derivate direzionali secondo ogni direzione $v$.

Dal teorema del gradiente segue

$$
\max_{\lVert v\rVert=1}\frac{\partial f}{\partial v}(x_0,y_0)=\frac{Df(x_0,y_0)}{\lVert Df(x_0,y_0)\rVert}\cdot Df(x_0,y_0)=\lVert Df(x_0,y_0)\rVert.
$$

Sapendo che la derivata direzionale misura il tasso di crescita di $f$ nella direzione data, possiamo concludere che il gradiente

$$
\boxed{Df(x_0,y_0)\ \textit{punta nella direzione di massima crescita di } f \textit{ in } (x_0,y_0)}
$$

Similmente si conclude che

$$
\boxed{-Df(x_0,y_0)\ \textit{punta nella direzione di massima decrescita di } f \textit{ in } (x_0,y_0)}
$$

Ricordando che il prodotto scalare tra due vettori è nullo se e solo se i due vettori sono perpendicolari, concludiamo che il gradiente

$$
\boxed{Df(x_0,y_0)\ \textit{è ortogonale alla curva di livello di } f \textit{ passante per } (x_0,y_0)}
$$

# Integrali a due parametri

**Calcolo Integrale per Funzioni di due Variabili**

**Integrali Doppi: Definizione e prime Proprietà**

Ci poniamo il seguente

**Problema.** Data una funzione $f: X\subset\mathbb{R}^2\to\mathbb{R}$ limitata, calcolare il volume $V$ compreso tra il grafico di $f$ (che in generale rappresenta una superficie nello spazio tridimensionale) e il piano $xy$.

Come nel caso degli integrali in una variabile, l'idea è di approssimare il volume $V$ da sotto e da sopra, cioè per difetto (con somme inferiori) e per eccesso (con somme superiori). Però, in questo caso il dominio $X$ non è più un semplice intervallo ma può avere una geometria molto più complicata.

Pertanto scegliamo prima un rettangolo $R=[a,b]\times[c,d]$ tale che $X\subseteq R$ e definiamo

$$
(*) \qquad \bar f(x,y)=\begin{cases} f(x,y), & \text{se } (x,y)\in X; \\ 0, & \text{se } (x,y)\in R\setminus X. \end{cases}
$$

cioè estendiamo $f$ ponendola 0 fuori da $X$. Allora, i volumi compresi tra i grafici di $f$ e $\bar f$ da un lato e il piano $xy$ dall'altro sono uguali. Poi creiamo una partizione di $R$ in sotto-rettangoli a partire da partizioni di $[a,b]$ e $[c,d]$ e approssimiamo il volume compreso tra il grafico di $\bar f$ e ogni sotto-rettangolo. Più precisamente:

- Date due partizioni

  $$
  \begin{aligned}
  P_x &= \{a=x_0<x_1<x_2<\dots<x_n=b\} \quad \text{di } [a,b] \text{ e} \\
  P_y &= \{c=y_0<y_1<y_2<\dots<y_m=d\} \quad \text{di } [c,d],
  \end{aligned}
  $$

  definiamo la partizione

  $$
  \begin{aligned}
  P_{xy} &:= P_x\times P_y \quad \text{di } R=[a,b]\times[c,d] \text{ nei rettangoli} \\
  R_{ij} &:= [x_{i-1},x_i]\times[y_{j-1},y_j] \quad \text{per } i=1,\dots,n,\ j=1,\dots,m.
  \end{aligned}
  $$

  ![[Pasted image 20250619130329 figura.png]]

  Partizione del rettangolo $R$ contenente $X$ ($n=5$, $m=4$).

- Per $P_{xy}$ poniamo per $i=1,\dots,n$, $j=1,\dots,m$

  $$
  \begin{aligned}
  m_{ij} &:= \inf\{\bar f(x,y):(x,y)\in R_{ij}\}, \\
  M_{ij} &:= \sup\{\bar f(x,y):(x,y)\in R_{ij}\}, \\
  \lvert R_{ij}\rvert &:= (x_i-x_{i-1})\cdot(y_j-y_{j-1}) = \text{ area del rettangolo } R_{ij},
  \end{aligned}
  $$

  e definiamo

  $$
  \begin{aligned}
  s(\bar f,P_{xy}) &:= \sum_{i=1}^n\sum_{j=1}^m m_{ij}\cdot\lvert R_{ij}\rvert =: \textit{somma inferiore}, \\
  S(\bar f,P_{xy}) &:= \sum_{i=1}^n\sum_{j=1}^m M_{ij}\cdot\lvert R_{ij}\rvert =: \textit{somma superiore}.
  \end{aligned}
  $$

Quindi per ogni partizione $P_{xy}$ di $R$ vale

$$
s(\bar f,P_{xy})\le V\le S(\bar f,P_{xy}),
$$

cioè le somme inferiori sono sempre approssimazioni di $V$ per difetto mentre le somme superiori danno sempre approssimazioni per eccesso. Perciò

- più *grande* è $s(\bar f,P_{xy})$ migliore è l'approssimazione (per difetto),
- più *piccolo* è $S(\bar f,P_{xy})$ migliore è l'approssimazione (per eccesso).

Se non c'è differenza tra la migliore approssimazione da sotto (cioè quella più grande) e quella migliore da sopra (cioè quella più piccola), allora il problema di determinare il volume $V$ è (teoricamente) risolto e $f$ si dice *integrabile*. Tutto ciò motiva la seguente

**Definizione 9.1.** Sia $f: X\subset\mathbb{R}^2\to\mathbb{R}$ limitata. Se per $\bar f$ definita in $(*)$ vale

$$
\sup\{s(\bar f,P_{xy}):P_{xy}\text{ partizione di }R\}=\inf\{S(\bar f,P_{xy}):P_{xy}\text{ partizione di }R\}=:I,
$$

allora $f$ si dice *integrabile* (secondo Riemann). In questo caso $V=I$ e si definisce *l'integrale doppio*

$$
\iint_X f(x,y)\,dx\,dy:=I
$$

della funzione integranda $f$ nel dominio dell'integrazione $X$.

**Osservazioni.**

- Si può dimostrare che la definizione precedente è indipendente dalla particolare scelta del rettangolo $R$ contenente $X$.
- Il volume sotto il piano $xy$ conta in maniera negativo.

**Definizione 9.2.** Se $X\subset\mathbb{R}^2$ è un insieme limitato tale che la funzione $\mathbb{1}:X\to\mathbb{R}$, $\mathbb{1}(x,y)=1$ è integrabile, allora si dice che $X$ è *misurabile* e si pone

$$
\boxed{\lvert X\rvert:=\iint_X 1\,dx\,dy \quad = \textit{misura} \text{ (= area) di X}}
$$

*Proprietà dell'Integrale.* Siano $f,g:X\to\mathbb{R}$ integrabili con $X\subset\mathbb{R}^2$ misurabile. Allora

- $\alpha\cdot f+\beta\cdot g$ è integrabile per ogni $\alpha,\beta\in\mathbb{R}$ (cioè l'insieme delle funzioni integrabili con dominio $X$ è uno spazio vettoriale) e

  $$
  \begin{aligned}
  \iint_X\big(\alpha\cdot f(x,y)+\beta\cdot g(x,y)\big)\,dx\,dy &=\alpha\cdot\iint_X f(x,y)\,dx\,dy \\
  &\quad+\beta\cdot\iint_X g(x,y)\,dx\,dy
  \end{aligned}
  $$

  (cioè l'integrale è un'operazione *lineare*);
- se $f(x,y)\le g(x,y)$ per ogni $(x,y)\in X$ allora

  $$
  \iint_X f(x,y)\,dx\,dy\le\iint_X g(x,y)\,dx\,dy
  $$

  (cioè l'integrale è *monotono*);
- anche $\lvert f\rvert$ è integrabile e

  $$
  \left\lvert\iint_X f(x,y)\,dx\,dy\right\rvert\le\iint_X\lvert f(x,y)\rvert\,dx\,dy
  $$

  (*disuguaglianza triangolare*);
- se $\lvert X\rvert=0$, allora

  $$
  \iint_X f(x,y)\,dx\,dy=0
  $$

- se $X=X_1\cup X_2$ e $\lvert X_1\cap X_2\rvert=0$, allora

  $$
  \iint_X f(x,y)\,dx\,dy=\iint_{X_1}f(x,y)\,dx\,dy+\iint_{X_2}f(x,y)\,dx\,dy
  $$

  (*additività* dell'integrale rispetto alla decomposizione di insiemi).

**Teorema di Fubini–Tonelli**

Nel caso $f$ è continua su una regione limitata da intervalli e grafici di funzioni il Teorema di Fubini–Tonelli dà una risposta a entrambi i problemi.

**Definizione 9.3.** Un insieme $X\subset\mathbb{R}^2$ limitato si dice

- (i) *$y$-semplice* se esistono due funzioni continue $g_1,g_2:[a,b]\to\mathbb{R}$ tali che

  $$
  \boxed{X=\{(x,y)\in\mathbb{R}^2: x\in[a,b],\ g_1(x)\le y\le g_2(x)\}}
  $$

- (ii) *$x$-semplice* se esistono due funzioni continue $h_1,h_2:[c,d]\to\mathbb{R}$ tali che

  $$
  \boxed{X=\{(x,y)\in\mathbb{R}^2: y\in[c,d],\ h_1(y)\le x\le h_2(y)\}}
  $$

- (iii) *semplice* se è $y$-semplice o $x$-semplice;
- (iv) *regolare* se è l'unione di un numero finito di domini semplici.

![[Pasted image 20250619130546 figura.png]]

Domini $y$- e $x$-semplici.

L'idea del seguente risultato è quella di ridurre il calcolo dell'integrale doppio al calcolo in successione di due integrali in una variabile.

**Teorema 9.4** (*Teorema di Fubini–Tonelli*). Sia $f: X\subset\mathbb{R}^2\to\mathbb{R}$ una funzione continua e $X$ un dominio semplice. Allora $f$ è integrabile su $X$. Inoltre,

- (i) se $X$ è $y$-semplice

  $$
  \boxed{\iint_X f(x,y)\,dx\,dy=\int_{x=a}^{b}\left(\int_{y=g_1(x)}^{g_2(x)}f(x,y)\,dy\right)dx}
  $$

- (ii) se $X$ è $x$-semplice

  $$
  \boxed{\iint_X f(x,y)\,dx\,dy=\int_{y=c}^{d}\left(\int_{x=h_1(y)}^{h_2(y)}f(x,y)\,dx\right)dy}
  $$

**Interpretazione geometrica di Fubini–Tonelli.** L'idea di fondo per calcolare $V$ è di decomporlo in una unione di fette di spessore infinitesimale e poi sommare il volume di tali fette. Per spiegarlo meglio supponiamo che $X$ sia $y$-semplice. Allora per ogni $x\in[a,b]$ consideriamo l'integrale interno

$$
A(x)=\int_{y=g_1(x)}^{g_2(x)}f(x,y)\,dy
$$

che rappresenta la superficie del taglio di $V$ al punto $x$. Moltiplicando per lo spessore $dx$ otteniamo $dV(x):=A(x)\cdot dx$ che rappresenta

![[Pasted image 20250619130654 figura.png]]

Il teorema di Fubini–Tonelli per $X$ $y$-semplice.

il volume della $x$-esima fetta infinitesimale. L'integrale esterno

$$
\int_{x=a}^{b}dV(x)=\int_{x=a}^{b}A(x)\,dx=\int_{x=a}^{b}\left(\int_{y=g_1(x)}^{g_2(x)}f(x,y)\,dy\right)dx
$$

poi somma i volumi di tutte le fette infinitesimali e quindi rappresenta il volume complessivo $V$.

**Esempio.** Calcolare

$$
\iint_X 2x^2y\,dx\,dy \qquad \text{ove} \qquad X=\{(x,y)\in\mathbb{R}^2: x\in[0,1],\ x+1\le y\le2\}.
$$

Il dominio si presenta già nella forma di un dominio $y$-semplice.

```plot
x: [-0.15, 3.3]
y: [-0.15, 2.5]
width: 520
height: 300
xticks: { 0: "$a=0$", 1: "$b=1$" }
yticks: [1, 2]
alt: "Il triangolo X di vertici (0,1), (0,2), (1,2), compreso tra la retta y = x + 1 e la retta y = 2, per x in [0,1]"
items:
  - area: 2
    base: x + 1
    from: 0
    to: 1
    color: "#888888"
  - fn: x + 1
    domain: [0, 1]
    color: red
  - fn: 2
    domain: [0, 1]
    color: green
  - guide: [1, 2]
    to: x
  - text: "$\\textcolor{red}{y=x+1=g_1(x)}$"
    at: [1.08, 2.3]
    anchor: e
  - text: "$\\textcolor{green}{y=2=g_2(x)}$"
    at: [1.08, 2.08]
    anchor: e
  - line: [[1.4, 1.72], [1.0, 1.72], [0.75, 1.7], [0.5, 1.78], [0.38, 1.78]]
    arrow: true
  - text: "$X=\\{(x,y)\\in\\mathbb{R}^2: x\\in[0,1],\\ x+1\\le y\\le2\\}$"
    at: [1.4, 1.7]
    anchor: e
```

Quindi

$$
\begin{aligned}
\iint_X 2x^2y\,dx\,dy &= \int_{x=0}^{1}\left(\int_{y=x+1}^{2}2x^2y\,dy\right)dx=\int_{x=0}^{1}2x^2\left[\frac{y^2}{2}\right]_{y=x+1}^{2}dx \\
&= \int_{x=0}^{1}\left(4x^2-x^4-2x^3-x^2\right)dx=\left[4\frac{x^3}{3}-\frac{x^5}{5}-2\frac{x^4}{4}-\frac{x^3}{3}\right]_{x=0}^{1} \\[0.6em]
&=\frac43-\frac15-\frac24-\frac13-0=\frac{3}{10}
\end{aligned}
$$

**Osservazione.** Dal teorema di Fubini–Tonelli segue che se il dominio è un *rettangolo*, cioè $X=[a,b]\times[c,d]$, e $f(x,y)=f_1(x)\cdot f_2(y)$, allora

$$
\iint_X f(x,y)\,dx\,dy=\int_a^b f_1(x)dx\cdot\int_c^d f_2(y)dy.
$$

**Integrazione in Coordinate Polari**

Per domini $X$ "circolari" di integrazione conviene spesso di passare dalle coordinate cartesiane $(x,y)$ alle coordinate polari $(\rho,\vartheta)$ per semplificare la rappresentazione di $X$. Per fare ciò serve il seguente risultato.

**Proposizione 9.5.** *Sia $f: X\subset\mathbb{R}^2\to\mathbb{R}$ integrabile. Se il dominio $X$ in coordinate cartesiane $(x,y)$ corrisponde al dominio $X'$ in coordinate polari $(\rho,\vartheta)$, allora*

$$
\boxed{\iint_X f(x,y)\,dx\,dy=\iint_{X'}f(\rho\cdot\cos(\vartheta),\rho\cdot\sin(\vartheta))\cdot\textcolor{red}{\rho\cdot}\,d\rho\,d\vartheta}
$$

**Osservazione.** Si noti che passano alle coordinate polari l'elemento infinitesimale di area $dx\,dy$ si trasforma in $\textcolor{red}{\rho\cdot}\,d\rho\,d\vartheta$.

# Tabelle

**Successioni.**

$$
\begin{array}{ll}
\displaystyle\lim_{n \to +\infty} q^n = \begin{cases} +\infty & \text{se } q > 1, \\ 1 & \text{se } q = 1, \\ 0 & \text{se } \lvert q \rvert < 1, \\ \nexists & \text{se } q \le -1 \end{cases} & \\[2.6em]
\displaystyle\lim_{n \to +\infty} n^\alpha = \begin{cases} +\infty & \text{se } \alpha > 0, \\ 1 & \text{se } \alpha = 0, \\ 0 & \text{se } \alpha < 0 \end{cases} & \\[2.2em]
\displaystyle\lim_{n \to +\infty} \sqrt[n]{a} = 1 & \qquad \text{per ogni } a > 0 \\[0.8em]
\displaystyle\lim_{n \to +\infty} \sqrt[n]{n^\alpha} = 1 & \qquad \text{per ogni } \alpha \in \mathbb{R} \\[0.8em]
\displaystyle\lim_{n \to +\infty} \frac{\ln(n)}{n^\alpha} = 0 & \qquad \text{per ogni } \alpha > 0 \\[0.8em]
\displaystyle\lim_{n \to +\infty} \frac{n^\alpha}{q^n} = 0 & \qquad \text{per ogni } \alpha \in \mathbb{R},\ q > 1 \\[0.8em]
\displaystyle\lim_{n \to +\infty} \frac{q^n}{n!} = 0 & \qquad \text{per ogni } q \in \mathbb{R} \\[0.8em]
\displaystyle\lim_{n \to +\infty} \frac{n!}{n^n} = 0 & \\[0.8em]
\displaystyle\lim_{n \to +\infty} \left(1 + \frac{1}{n}\right)^n = e & \qquad \text{più in generale} \\[0.8em]
\displaystyle\lim_{n \to +\infty} \left(1 + \frac{a}{x_n}\right)^{x_n} = e^a & \qquad \text{se } \lvert x_n \rvert \to +\infty \text{ per } n \to +\infty \\[0.8em]
\displaystyle\lim_{n \to +\infty} (a_n)^{b_n} = a^b & \qquad \text{se } a_n \to a > 0 \text{ e } b_n \to b \text{ per } n \to +\infty
\end{array}
$$

**Funzioni.**

$$
\begin{array}{ll}
\displaystyle\lim_{x \to 0} \frac{\sin x}{x} = 1 & \\[0.8em]
\displaystyle\lim_{x \to 0} \frac{1 - \cos(x)}{x^2} = \frac{1}{2} & \\[0.8em]
\displaystyle\lim_{x \to 0} \frac{e^x - 1}{x} = 1 & \qquad \text{più in generale} \\[0.8em]
\displaystyle\lim_{x \to 0} \frac{a^x - 1}{x} = \ln(a) & \qquad \text{per ogni } a > 0 \\[0.8em]
\displaystyle\lim_{x \to 0} \frac{\ln(1 + x)}{x} = 1 & \qquad \text{più in generale} \\[0.8em]
\displaystyle\lim_{x \to \pm\infty} \left(1 + \frac{t}{x}\right)^x = e^t & \qquad \text{per ogni } t \in \mathbb{R} \\[0.8em]
\displaystyle\lim_{x \to 0} \frac{(1 + x)^r - 1}{x} = r & \qquad \text{per ogni } r \in \mathbb{R} \\[0.8em]
\displaystyle\lim_{x \to +\infty} \frac{\ln(x)}{x^\alpha} = 0 & \qquad \text{per ogni } \alpha > 0 \\[0.8em]
\displaystyle\lim_{x \to 0^+} x^\alpha \cdot \ln(x) = 0 & \qquad \text{per ogni } \alpha > 0 \\[0.8em]
\displaystyle\lim_{x \to 0^+} x^x = 1 &
\end{array}
$$

**Definizione alternativa dei Limiti per Funzioni**

Sia $f: X\subseteq\mathbb{R}\to\mathbb{R}$ e sia $x_0$ un punto di accumulazione del dominio $X$ di $f$. Allora

$$
\lim_{x\to x_0} f(x) = l \iff
$$

- se $x_0, l\in\mathbb{R}$: Per ogni $\varepsilon>0$ esiste $\delta>0$ tale che
  $$\lvert f(x)-l\rvert<\varepsilon \quad\text{per ogni } x\in X \text{ con } 0<\lvert x-x_0\rvert<\delta.$$
- se $x_0\in\mathbb{R}$, $l=+\infty$: Per ogni $M>0$ esiste $\delta>0$ tale che
  $$f(x)>M \quad\text{per ogni } x\in X \text{ con } 0<\lvert x-x_0\rvert<\delta.$$
- se $x_0\in\mathbb{R}$, $l=-\infty$: Per ogni $M<0$ esiste $\delta>0$ tale che
  $$f(x)<M \quad\text{per ogni } x\in X \text{ con } 0<\lvert x-x_0\rvert<\delta.$$
- se $x_0=+\infty$, $l\in\mathbb{R}$: Per ogni $\varepsilon>0$ esiste $L>0$ tale che
  $$\lvert f(x)-l\rvert<\varepsilon \quad\text{per ogni } x\in X \text{ con } x>L.$$
- se $x_0=-\infty$, $l\in\mathbb{R}$: Per ogni $\varepsilon>0$ esiste $L<0$ tale che
  $$\lvert f(x)-l\rvert<\varepsilon \quad\text{per ogni } x\in X \text{ con } x<L.$$
- se $x_0, l=+\infty$: Per ogni $M>0$ esiste $L>0$ tale che
  $$f(x)>M \quad\text{per ogni } x\in X \text{ con } x>L.$$
- se $x_0=+\infty$, $l=-\infty$: Per ogni $M<0$ esiste $L>0$ tale che
  $$f(x)<M \quad\text{per ogni } x\in X \text{ con } x>L.$$
- se $x_0=-\infty$, $l=+\infty$: Per ogni $M>0$ esiste $L<0$ tale che
  $$f(x)>M \quad\text{per ogni } x\in X \text{ con } x<L.$$
- se $x_0=-\infty$, $l=-\infty$: Per ogni $M<0$ esiste $L<0$ tale che
  $$f(x)<M \quad\text{per ogni } x\in X \text{ con } x<L.$$

Sia $x_0\in\mathbb{R}$ un punto di accumulazione di $X\cap(x_0,+\infty)$. Allora

$$
\lim_{x\to x_0^+} f(x) = l \iff
$$

- se $l\in\mathbb{R}$: Per ogni $\varepsilon>0$ esiste $\delta>0$ tale che
  $$\lvert f(x)-l\rvert<\varepsilon \quad\text{per ogni } x\in X \text{ con } 0<x-x_0<\delta.$$
- se $l=+\infty$: Per ogni $M>0$ esiste $\delta>0$ tale che
  $$f(x)>M \quad\text{per ogni } x\in X \text{ con } 0<x-x_0<\delta.$$
- se $l=-\infty$: Per ogni $M<0$ esiste $\delta>0$ tale che
  $$f(x)<M \quad\text{per ogni } x\in X \text{ con } 0<x-x_0<\delta.$$

Sia $x_0\in\mathbb{R}$ un punto di accumulazione di $X\cap(-\infty,x_0)$. Allora

$$
\lim_{x\to x_0^-} f(x) = l \iff
$$

- se $l\in\mathbb{R}$: Per ogni $\varepsilon>0$ esiste $\delta>0$ tale che
  $$\lvert f(x)-l\rvert<\varepsilon \quad\text{per ogni } x\in X \text{ con } 0<x_0-x<\delta.$$
- se $l=+\infty$: Per ogni $M>0$ esiste $\delta>0$ tale che
  $$f(x)>M \quad\text{per ogni } x\in X \text{ con } 0<x_0-x<\delta.$$
- se $l=-\infty$: Per ogni $M<0$ esiste $\delta>0$ tale che
  $$f(x)<M \quad\text{per ogni } x\in X \text{ con } 0<x_0-x<\delta.$$

**Elenco di alcuni Sviluppi di Maclaurin**

Per $x\to0$ valgono i seguenti sviluppi:

$$
\begin{aligned}
e^x &= 1+x+\frac{x^2}{2}+\frac{x^3}{6}+o(x^3) = 1+x+\frac{x^2}{2}+o(x^2) = 1+x+o(x) \\[0.6em]
\sin(x) &= x-\frac{x^3}{6}+o(x^4) = x+o(x^2) \\[0.6em]
\cos(x) &= 1-\frac{x^2}{2}+o(x^3) = 1+o(x) \\[0.6em]
\sinh(x) &= x+\frac{x^3}{6}+o(x^4) = x+o(x^2) \\[0.6em]
\cosh(x) &= 1+\frac{x^2}{2}+o(x^3) = 1+o(x) \\[0.6em]
\ln(1+x) &= x-\frac{x^2}{2}+\frac{x^3}{3}+o(x^3) = x-\frac{x^2}{2}+o(x^2) = x+o(x) \\[0.6em]
\sqrt{1+x} &= 1+\frac{x}{2}-\frac{x^2}{8}+o(x^2) = 1+\frac{x}{2}+o(x)
\end{aligned}
$$

$$
\int x^r\,dx = \begin{cases} \ln\lvert x\rvert + c & \text{se } r=-1 \\[0.4em] \dfrac{x^{r+1}}{r+1} + c & \text{se } r\ne-1 \end{cases}
$$

$$
\int \frac{1}{1+x^2}\,dx = \arctan(x) + c
$$

$$
\int e^x\,dx = e^x + c
$$

$$
\int \sin(x)\,dx = -\cos(x) + c
$$

$$
\int \cos(x)\,dx = \sin(x) + c
$$

$$
\int \sinh(x)\,dx = \cosh(x) + c
$$

$$
\int \cosh(x)\,dx = \sinh(x) + c
$$

$$
\int \frac{\varphi'(x)}{2\sqrt{\varphi(x)}} = \sqrt{\varphi(x)} + c
$$

$$
\int e^{\alpha x}\,dx = \frac{e^{\alpha x}}{\alpha} + c
$$

$$
\begin{aligned}
&\textcolor{red}{m=1} & \int \frac{1}{x^1} &= \ln(\lvert x\rvert) \\[0.8em]
&\textcolor{red}{m\ne1} & \int \frac{1}{x^m} &= \frac{1}{(1-m)\,x^{m-1}}
\end{aligned}
$$

