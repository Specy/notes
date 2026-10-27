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

**Esempio** (*Successione geometrica*). Per $q\in\mathbb{R}$ fisso definiamo $a_n := q^n$. Allora la *successione geometrica* $(a_n)_{n\in\mathbb{N}}$

- (i) diverge a $+\infty$ se $q>1$,
- (ii) è costante (cioè $a_n=a_0$ per ogni $n\in\mathbb{N}$) se $q=1$ e quindi $\displaystyle\lim_{n\to+\infty} a_n = a_0 = 1$,
- (iii) è infinitesima se $\lvert q\rvert<1$,
- (iv) è irregolare se $q\le-1$.

$$
\boxed{\;\sum_{k=0}^{+\infty} q^k = 1+q+q^2+q^3+q^4+\dots = \begin{cases} \dfrac{1}{1-q} & \text{se } \lvert q\rvert<1, \\[0.5em] +\infty & \text{se } q\ge1, \\[0.3em] \text{è irregolare} & \text{se } q\le-1. \end{cases}\;}
$$

##  🟢 Successione armonica

**Esempio** (*Successione armonica*). Per $\alpha\in\mathbb{R}$ fisso definiamo $a_n := n^\alpha$. Allora la *successione armonica* $(a_n)_{n\ge1}$

- (i) diverge a $+\infty$ se $\alpha>0$,
- (ii) è costante (cioè $a_n=a_0$ per ogni $n\in\mathbb{N}$) se $\alpha=0$ e quindi $\displaystyle\lim_{n\to+\infty} a_n = a_1 = 1$,
- (iii) è infinitesima se $\alpha<0$,

$$
\boxed{\;\sum_{k=1}^{+\infty} \frac{1}{k} = 1+\frac{1}{2}+\frac{1}{3}+\frac{1}{4}+\frac{1}{5}+\dots = +\infty.\;}
$$

In generale:

$$
\boxed{\;\sum_{k=1}^{+\infty} \frac{1}{k^\alpha} \;\; \textit{converge} \qquad\Longleftrightarrow\qquad \alpha>1\;}
$$

##  🟢 Principio di sostituzione

Se per due successioni $a_n$ e $b_n$ si ha che $\lim_{n \to \infty}\frac{a_n}{b_n} = 1$ allora si dice che $a_n$ e $b_n$ sono asintotiche e si scrive $a_n \sim b_n$ per $n \to \infty$.

Se $a_n \sim b_n$ per $n \to \infty$, allora $(a_n)_{n \in \mathbb{N}}$ e $(b_n)_{n \in \mathbb{N}}$  hanno lo stesso comportamento asintotico, cioè che:

- $(a_n)_{n\in\mathbb{N}}$ converge $\iff$ $(b_n)_{n\in\mathbb{N}}$ converge e in tal caso $\displaystyle\lim_{n\to+\infty} a_n = \lim_{n\to+\infty} b_n$;
- $(a_n)_{n\in\mathbb{N}}$ diverge $\iff$ $(b_n)_{n\in\mathbb{N}}$ diverge e in tal caso $\displaystyle\lim_{n\to+\infty} a_n = \lim_{n\to+\infty} b_n$;
- $(a_n)_{n\in\mathbb{N}}$ è irregolare $\iff$ $(b_n)_{n\in\mathbb{N}}$ è irregolare.

Allora definiamo il principio di sostituzione, in ==**prodotti e rapporti**== si possono sostituire successioni con altre successioni asintotiche, senza cambiare il comportamento asintotico, e sopratutto, non cambierà il valore del limite, se esiste.

$$
\frac{a_n\cdot b_n}{c_n} \sim \frac{a_n'\cdot b_n'}{c_n'} \qquad \textit{per } n\to+\infty.
$$

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

$$
\sum_{k=1}^{+\infty} \frac{1}{k\cdot(k+1)} = \frac{1}{1\cdot2}+\frac{1}{2\cdot3}+\frac{1}{3\cdot4}+\frac{1}{4\cdot5}+\dots = 1.
$$

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

**Definizione 1.2** (*Successione convergente*). (i) Si dice che la successione $(a_n)_{n\in\mathbb{N}}$ è *convergente al limite* $l\in\mathbb{R}$ se per ogni $\varepsilon>0$ esiste $n_0\in\mathbb{N}$ tale che

$$
\lvert l-a_n\rvert<\varepsilon \quad\text{per ogni } n\ge n_0.
$$

In questo caso si scrive

$$
\boxed{\lim_{n\to+\infty} a_n = l} \qquad\text{oppure}\qquad \boxed{a_n\to l \text{ per } n\to+\infty}
$$

(ii) Se $\displaystyle\lim_{n\to+\infty} a_n = 0$, allora $(a_n)_{n\in\mathbb{N}}$ si chiama successione *infinitesima*.

**Osservazione.** Per una successione convergente $(a_n)_{n\in\mathbb{N}}$ vale che $a_n\to l$ per $n\to+\infty$ $\iff$ $l-a_n\to0$ per $n\to+\infty$.

## 🟢Continuità di una funzione

Una funzione $f(x)$ è detta continua sull'intervallo $[a,b]$ sul punto $x_0$ se:
- Esiste il limite $l$ per $x \to x_0$ di $f(x)$, cioè il limite destro e sinistro sono finiti e uguali.
- Questo limite $l$ è uguale al valore della funzione su $x_0$, cioè che $l = f(x_0)$  

## 🟢 Serie a termini positivi 

Diciamo che una successione è limitata, se $\forall n \in \mathbb{N}$, $\exists M > 0$ tale che $|S_n| \le M$. Quindi che tutte le successioni sono limitate superiormente da un certo $M$ 

Se $a_k \ge 0$ per ogni $k \in \mathbb{N}$, allora la serie:

$$
\sum_{k=0}^{+\infty} a_k \;\begin{cases} \textit{converge} & \textit{se e solo se } (s_n)_{n\in\mathbb{N}} \textit{ è limitata,} \\ \textit{diverge a } +\infty & \textit{se e solo se } (s_n)_{n\in\mathbb{N}} \textit{ non è limitata.} \end{cases}
$$

## 🟢 Convergenza assoluta
Notiamo che: 

$$
\underbrace{\sum_{k=0}^{+\infty} a_k \text{ converge}}_{\textit{convergenza (semplice)}} \quad\not\Leftarrow\quad \underbrace{\sum_{k=0}^{+\infty} \lvert a_k\rvert \text{ converge}}_{\textit{convergenza assoluta}}
$$

**Proposizione 2.10.** *Se $\displaystyle\sum_{k=0}^{+\infty}\lvert a_k\rvert$ converge, allora converge anche $\displaystyle\sum_{k=0}^{+\infty} a_k$, cioè la convergenza assoluta implica la convergenza semplice.*

Questa proposizione è molto utile in quanto la serie $\displaystyle\sum_{k=0}^{+\infty}\lvert a_k\rvert$ è sempre a termini positivi e quindi può essere studiata con i criteri per tale serie. Per esempio, applicando il criterio del rapporto e della radice a $\displaystyle\sum_{k=0}^{+\infty}\lvert a_k\rvert$ otteniamo la seguente

## 🟢 Criterio del confronto

**Proposizione 2.4** (*Criterio del confronto*). *Sia $\textcolor{red}{0\le a_k\le b_k}$ definitivamente. Allora*

$$
\boxed{\;\underbrace{\sum_{k=0}^{+\infty} b_k}_{\text{maggiorante}} \textit{ converge} \;\Rightarrow\; \underbrace{\sum_{k=0}^{+\infty} a_k}_{\text{minorante}} \textit{ converge}\;}
$$

*oppure*

$$
\boxed{\;\underbrace{\sum_{k=0}^{+\infty} a_k}_{\text{minorante}} \textit{ diverge} \;\Rightarrow\; \underbrace{\sum_{k=0}^{+\infty} b_k}_{\text{maggiorante}} \textit{ diverge}\;}
$$

**Esempio.** Consideriamo la serie $\displaystyle\sum_{k=1}^{+\infty}\frac{1}{\sqrt{k}}$. Visto che $\dfrac{1}{\sqrt{k}}\ge\dfrac{1}{k}$ per ogni $k\ge1$ segue dalla divergenza della serie armonica $\displaystyle\sum_{k=1}^{+\infty}\frac{1}{k}$ la divergenza di $\displaystyle\sum_{k=1}^{+\infty}\frac{1}{\sqrt{k}}$.

**Proposizione 2.5** (*Criterio del confronto, versione asintotica*). *Sia $a_k\ge0$ e $b_k>0$ definitivamente tali che converge*

$$
\lim_{k\to+\infty}\frac{a_k}{b_k} =: l\in\mathbb{R}.
$$

*Allora*

$$
\sum_{k=0}^{+\infty} b_k \textit{ converge} \;\Rightarrow\; \sum_{k=0}^{+\infty} a_k \textit{ converge}
$$

*oppure*

$$
\sum_{k=0}^{+\infty} a_k \textit{ diverge} \;\Rightarrow\; \sum_{k=0}^{+\infty} b_k \textit{ diverge}
$$

*Se inoltre $l\ne0$ (in particolare se $a_k\sim b_k$ per $k\to+\infty$), allora valgono anche le implicazioni opposte, cioè*

$$
\sum_{k=0}^{+\infty} a_k \textit{ converge} \;\Longleftrightarrow\; \sum_{k=0}^{+\infty} b_k \textit{ converge}
$$

*oppure*

$$
\sum_{k=0}^{+\infty} a_k \textit{ diverge} \;\Longleftrightarrow\; \sum_{k=0}^{+\infty} b_k \textit{ diverge}
$$

## 🟢 Criterio della radice

Sia $a_k \ge 0$ definitivamente, se esiste:
$$
\Large{q :=\lim_{k \to \infty}{\sqrt[k]{a_k}}}
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
\Large{q :=\lim_{k \to \infty}{\frac{a_{k+1}}{a_k}}}
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

```plot
x: [-1.14, 0.12]
y: [-0.6, 0.34]
width: 480
aspect: equal
axes: x
xticks: []
items:
  - line: [[0.0000, -0.0000], [-0.0015, -0.0392], [-0.0062, -0.0782], [-0.0138, -0.1167], [-0.0245, -0.1545], [-0.0381, -0.1913], [-0.0545, -0.2270], [-0.0737, -0.2612], [-0.0955, -0.2939], [-0.1198, -0.3247], [-0.1464, -0.3536], [-0.1753, -0.3802], [-0.2061, -0.4045], [-0.2388, -0.4263], [-0.2730, -0.4455], [-0.3087, -0.4619], [-0.3455, -0.4755], [-0.3833, -0.4862], [-0.4218, -0.4938], [-0.4608, -0.4985], [-0.5000, -0.5000], [-0.5392, -0.4985], [-0.5782, -0.4938], [-0.6167, -0.4862], [-0.6545, -0.4755], [-0.6913, -0.4619], [-0.7270, -0.4455], [-0.7612, -0.4263], [-0.7939, -0.4045], [-0.8247, -0.3802], [-0.8536, -0.3536], [-0.8802, -0.3247], [-0.9045, -0.2939], [-0.9263, -0.2612], [-0.9455, -0.2270], [-0.9619, -0.1913], [-0.9755, -0.1545], [-0.9862, -0.1167], [-0.9938, -0.0782], [-0.9985, -0.0392], [-1.0000, -0.0000]]
    arrow: true
  - line: [[-1.0000, 0.0000], [-0.9992, 0.0196], [-0.9969, 0.0391], [-0.9931, 0.0584], [-0.9878, 0.0773], [-0.9810, 0.0957], [-0.9728, 0.1135], [-0.9632, 0.1306], [-0.9523, 0.1469], [-0.9401, 0.1624], [-0.9268, 0.1768], [-0.9124, 0.1901], [-0.8969, 0.2023], [-0.8806, 0.2132], [-0.8635, 0.2228], [-0.8457, 0.2310], [-0.8273, 0.2378], [-0.8084, 0.2431], [-0.7891, 0.2469], [-0.7696, 0.2492], [-0.7500, 0.2500], [-0.7304, 0.2492], [-0.7109, 0.2469], [-0.6916, 0.2431], [-0.6727, 0.2378], [-0.6543, 0.2310], [-0.6365, 0.2228], [-0.6194, 0.2132], [-0.6031, 0.2023], [-0.5876, 0.1901], [-0.5732, 0.1768], [-0.5599, 0.1624], [-0.5477, 0.1469], [-0.5368, 0.1306], [-0.5272, 0.1135], [-0.5190, 0.0957], [-0.5122, 0.0773], [-0.5069, 0.0584], [-0.5031, 0.0391], [-0.5008, 0.0196], [-0.5000, 0.0000]]
    arrow: true
  - line: [[-0.5000, -0.0000], [-0.5005, -0.0131], [-0.5021, -0.0261], [-0.5046, -0.0389], [-0.5082, -0.0515], [-0.5127, -0.0638], [-0.5182, -0.0757], [-0.5246, -0.0871], [-0.5318, -0.0980], [-0.5399, -0.1082], [-0.5488, -0.1179], [-0.5584, -0.1267], [-0.5687, -0.1348], [-0.5796, -0.1421], [-0.5910, -0.1485], [-0.6029, -0.1540], [-0.6152, -0.1585], [-0.6278, -0.1621], [-0.6406, -0.1646], [-0.6536, -0.1662], [-0.6667, -0.1667], [-0.6797, -0.1662], [-0.6927, -0.1646], [-0.7056, -0.1621], [-0.7182, -0.1585], [-0.7304, -0.1540], [-0.7423, -0.1485], [-0.7537, -0.1421], [-0.7646, -0.1348], [-0.7749, -0.1267], [-0.7845, -0.1179], [-0.7934, -0.1082], [-0.8015, -0.0980], [-0.8088, -0.0871], [-0.8152, -0.0757], [-0.8206, -0.0638], [-0.8252, -0.0515], [-0.8287, -0.0389], [-0.8313, -0.0261], [-0.8328, -0.0131], [-0.8333, -0.0000]]
    arrow: true
  - line: [[-0.8333, 0.0000], [-0.8329, 0.0098], [-0.8318, 0.0196], [-0.8299, 0.0292], [-0.8272, 0.0386], [-0.8238, 0.0478], [-0.8197, 0.0567], [-0.8149, 0.0653], [-0.8095, 0.0735], [-0.8034, 0.0812], [-0.7967, 0.0884], [-0.7895, 0.0951], [-0.7818, 0.1011], [-0.7736, 0.1066], [-0.7651, 0.1114], [-0.7562, 0.1155], [-0.7470, 0.1189], [-0.7375, 0.1215], [-0.7279, 0.1235], [-0.7181, 0.1246], [-0.7083, 0.1250], [-0.6985, 0.1246], [-0.6888, 0.1235], [-0.6792, 0.1215], [-0.6697, 0.1189], [-0.6605, 0.1155], [-0.6516, 0.1114], [-0.6430, 0.1066], [-0.6349, 0.1011], [-0.6272, 0.0951], [-0.6199, 0.0884], [-0.6133, 0.0812], [-0.6072, 0.0735], [-0.6018, 0.0653], [-0.5970, 0.0567], [-0.5928, 0.0478], [-0.5895, 0.0386], [-0.5868, 0.0292], [-0.5849, 0.0196], [-0.5837, 0.0098], [-0.5833, 0.0000]]
    arrow: true
  - line: [[-0.5833, -0.0000], [-0.5836, -0.0078], [-0.5846, -0.0156], [-0.5861, -0.0233], [-0.5882, -0.0309], [-0.5909, -0.0383], [-0.5942, -0.0454], [-0.5981, -0.0522], [-0.6024, -0.0588], [-0.6073, -0.0649], [-0.6126, -0.0707], [-0.6184, -0.0760], [-0.6246, -0.0809], [-0.6311, -0.0853], [-0.6379, -0.0891], [-0.6451, -0.0924], [-0.6524, -0.0951], [-0.6600, -0.0972], [-0.6677, -0.0988], [-0.6755, -0.0997], [-0.6833, -0.1000], [-0.6912, -0.0997], [-0.6990, -0.0988], [-0.7067, -0.0972], [-0.7142, -0.0951], [-0.7216, -0.0924], [-0.7287, -0.0891], [-0.7356, -0.0853], [-0.7421, -0.0809], [-0.7483, -0.0760], [-0.7540, -0.0707], [-0.7594, -0.0649], [-0.7642, -0.0588], [-0.7686, -0.0522], [-0.7724, -0.0454], [-0.7757, -0.0383], [-0.7784, -0.0309], [-0.7806, -0.0233], [-0.7821, -0.0156], [-0.7830, -0.0078], [-0.7833, -0.0000]]
    arrow: true
  - text: $0$
    at: [0, 0.02]
    anchor: n
  - text: $-1$
    at: [-0.99, -0.01]
    anchor: se
  - text: $-1+\tfrac{1}{2}$
    at: [-0.5, 0.01]
    anchor: ne
  - text: $+\tfrac{1}{2}$
    at: [-0.75, 0.26]
    anchor: n
  - text: $+\tfrac{1}{4}$
    at: [-0.708, 0.135]
    anchor: n
  - text: $-\tfrac{1}{3}$
    at: [-0.667, -0.17]
    anchor: s
  - text: $-1$
    at: [-0.5, -0.51]
    anchor: s
  - text: $\cdots$
    at: [-0.69, -0.01]
    anchor: c
alt: "Spirale della serie di Leibniz sull'asse reale, con archi alternati sopra e sotto di lunghezza 1, 1/2, 1/3, 1/4"
```

Allora il criterio di Leibniz ci dice che se la successione $(a_k)_{k \in \mathbb{N}}$ é **decrescente** e **infinitesima**, allora la serie:
$$
s :=\sum_{k=1}^{\infty}(-1)^k \cdot a_k
$$
Converge, e vale che $|s - s_n| \lt a_{n+1}$ per ogni $n \in \mathbb{N}$ 

## 🟠 Forme indeterminate dei limiti

Per poter dire che un limite converge/diverge ad un valore, dobbiamo evitare le forme indeterminate, cioè forme che non ci permettono di usare le regole dei limiti:

| | | |
|---|---|---|
| $(\pm\infty)-(\pm\infty)$ | $0\cdot(\pm\infty)$ | $\dfrac{0}{0}$ |
| $\dfrac{\pm\infty}{\pm\infty}$ | $\dfrac{a}{0}$ per ogni $a\in\mathbb{R}$ | $1^{\pm\infty}$ |
| $(\pm\infty)^0$ | $0^0$ | |

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
