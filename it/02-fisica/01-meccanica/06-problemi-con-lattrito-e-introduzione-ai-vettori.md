---
title: "Problemi con l'attrito e introduzione ai vettori"
description: "Problemi con l'attrito dinamico e introduzione ai vettori: modulo, direzione e verso, coordinate cartesiane e polari e somma di vettori."
type: lecture
lezione: 6
topics:
  - attrito dinamico e coefficiente
  - corpo su parete verticale
  - vettori
  - coordinate cartesiane e polari
  - somma di vettori
---

# Lezione 6: Problemi con l'attrito e introduzione ai vettori

📎 Lezione precedente: [[forza-peso-reazione-vincolare-e-attrito]]

> [!abstract] In questa lezione
> - Ricavare il **coefficiente d'attrito dinamico** da una decelerazione (Problema 3.1)
> - Un corpo tenuto fermo contro una **parete verticale** dall'attrito (problema d'esame)
> - Introduzione ai **vettori**: modulo, direzione, verso, punto di applicazione
> - **Coordinate cartesiane e polari** di un vettore
> - La **somma di vettori**

---

## 1. Problema 3.1 (Mazzoldi): ricavare l'attrito dinamico

> Un corpo di massa $m = 0{,}5\ \text{kg}$ scivola su un piano e la sua velocità è $v(t) = 25 - 1{,}47\,t$ (in m/s). Trovare: **(a)** la forza d'attrito $F_a$; **(b)** il coefficiente di attrito dinamico $\mu_d$.

**(a)** La velocità decresce nel tempo: l'unica forza orizzontale è l'attrito, che frena il corpo. L'accelerazione è la derivata della velocità:

$$a = \frac{dv}{dt} = \frac{d}{dt}(25 - 1{,}47\,t) = -1{,}47\ \frac{\text{m}}{\text{s}^2}$$

(il termine costante $25 = v_0$ sparisce derivando, e resta il coefficiente di $t$). Dal secondo principio, in modulo:

$$F_a = m\,|a| = 0{,}5\cdot 1{,}47 \approx 0{,}73\ \text{N}$$

**(b)** Sul piano orizzontale la reazione normale bilancia il peso: dal secondo principio lungo la verticale $N - P = 0$, quindi $N = mg$. L'attrito dinamico è $F_{ad} = \mu_d N$, da cui

$$\mu_d = \frac{F_{ad}}{N} = \frac{F_{ad}}{mg} = \frac{0{,}73}{0{,}5\cdot 10} = \frac{0{,}73}{5} \approx 0{,}15$$

Un coefficiente piccolo, tipico di una superficie piuttosto liscia.

---

## 2. Problema d'esame: corpo contro una parete verticale

> Un corpo di massa $m = 1{,}2\ \text{kg}$ è premuto contro una parete verticale da una forza orizzontale $F$. Il coefficiente di attrito statico tra corpo e parete è $\mu_s = 0{,}4$. **(a)** Qual è il valore minimo di $F$ per tenere fermo il corpo nel punto $A$? **(b)** A un certo istante $F$ viene dimezzata, il corpo inizia a scivolare: quanto vale l'accelerazione ($\mu_d = 0{,}3$)? **(c)** Con quale velocità arriva nel punto $B$, sapendo che $\overline{AB} = 2{,}6\ \text{m}$?

Questa è la situazione interessante: qui è l'**attrito** (verticale) a sostenere il peso, mentre la spinta orizzontale serve solo a "schiacciare" il corpo contro la parete per generare la reazione normale.

<svg viewBox="0 0 280 200" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Corpo premuto contro una parete verticale: F orizzontale, N normale, attrito verticale, peso">
  <!-- parete verticale -->
  <line x1="70" y1="20" x2="70" y2="180" stroke="currentColor" stroke-width="2"/>
  <g stroke="currentColor" stroke-width="1">
    <line x1="70" y1="30" x2="60" y2="38"/><line x1="70" y1="50" x2="60" y2="58"/><line x1="70" y1="70" x2="60" y2="78"/><line x1="70" y1="90" x2="60" y2="98"/><line x1="70" y1="110" x2="60" y2="118"/><line x1="70" y1="130" x2="60" y2="138"/><line x1="70" y1="150" x2="60" y2="158"/>
  </g>
  <rect x="70" y="80" width="40" height="40" fill="none" stroke="currentColor" stroke-width="1.5"/>
  <circle cx="90" cy="100" r="3" fill="currentColor"/>
  <!-- F verso la parete (verso sinistra) -->
  <line x1="160" y1="100" x2="112" y2="100" stroke="currentColor" stroke-width="2"/><polygon points="112,100 122,95 122,105" fill="currentColor"/>
  <!-- N dalla parete (verso destra) -->
  <line x1="110" y1="88" x2="150" y2="88" stroke="currentColor" stroke-width="2"/><polygon points="150,88 140,83 140,93" fill="currentColor"/>
  <!-- attrito verso l'alto -->
  <line x1="90" y1="80" x2="90" y2="40" stroke="currentColor" stroke-width="2"/><polygon points="90,40 86,49 94,49" fill="currentColor"/>
  <!-- peso verso il basso -->
  <line x1="90" y1="120" x2="90" y2="165" stroke="currentColor" stroke-width="2"/><polygon points="90,165 86,156 94,156" fill="currentColor"/>
  <g fill="currentColor" font-size="13" font-family="serif">
    <text x="163" y="104">F</text>
    <text x="152" y="85">N</text>
    <text x="96" y="48">Fₐ</text>
    <text x="96" y="160">P</text>
    <text x="55" y="100">A</text>
  </g>
</svg>

### 2.1 (a) Forza minima per tenere fermo il corpo

Scriviamo il secondo principio lungo i due assi (corpo fermo, accelerazione nulla):

$$\text{orizzontale }(x):\quad N - F = 0 \;\Longrightarrow\; N = F$$
$$\text{verticale }(y):\quad F_a - P = m\,a$$

La forza è minima nel **caso limite** tra statico e dinamico: il corpo è sul punto di scivolare, quindi $a = 0$ e l'attrito ha raggiunto il suo massimo, $F_a = F_{as,max} = \mu_s N$. La condizione verticale diventa:

$$F_{as,max} - mg = 0 \;\Longrightarrow\; \mu_s N - mg = \mu_s F - mg = 0$$

da cui

$$\boxed{\;F_{min} = \frac{mg}{\mu_s}\;} = \frac{1{,}2\cdot 10}{0{,}4} = 30\ \text{N}$$

Sotto i $30\ \text{N}$ l'attrito non basta a reggere il peso e il corpo scivola; sopra, resta fermo.

### 2.2 (b) Accelerazione dopo aver dimezzato $F$

Ora $F$ viene dimezzata: $F = 30/2 = 15\ \text{N}$. Sotto la soglia minima, il corpo scivola verso il basso; subentra l'attrito **dinamico** $F_{ad} = \mu_d N$ (diretto verso l'alto, oppostamente al moto). Le equazioni:

$$x:\quad N = F = 15\ \text{N}$$
$$y:\quad F_{ad} - mg = m\,a \;\Longrightarrow\; \mu_d F - mg = m\,a$$

$$a = \frac{\mu_d F}{m} - g = \frac{0{,}3\cdot 15}{1{,}2} - 10 = 3{,}75 - 10 \approx -6{,}2\ \frac{\text{m}}{\text{s}^2}$$

Il segno negativo indica accelerazione verso il basso: il corpo scende sempre più veloce.

### 2.3 (c) Velocità nel punto $B$

Il corpo parte da fermo in $A$ e scivola di moto uniformemente accelerato fino a $B$, con $\overline{AB} = 2{,}6\ \text{m}$. Misurando la posizione verticale $y$ (con $B$ all'origine), la legge oraria è

$$y(t) = \overline{AB} + \frac{1}{2}a\,t^2$$

Il corpo arriva in $B$ quando $y(t_B) = 0$:

$$0 = \overline{AB} + \frac{1}{2}a\,t_B^2 \;\Longrightarrow\; t_B = \sqrt{-\frac{2\,\overline{AB}}{a}} = \sqrt{-\frac{2\cdot 2{,}6}{-6{,}2}} \approx 0{,}9\ \text{s}$$

e la velocità in $B$ è

$$v_B = a\,t_B = -6{,}2\cdot 0{,}9 \approx -6\ \frac{\text{m}}{\text{s}}$$

cioè circa $6\ \text{m/s}$ verso il basso.

> [!tip] Scorciatoia senza il tempo
> Si poteva arrivare direttamente a $v_B$ con la relazione senza tempo di [[formule-del-moto-uniformemente-accelerato-e-introduzione-alla-dinamica]]: $v_B^2 = 2|a|\,\overline{AB} = 2\cdot 6{,}2\cdot 2{,}6 \approx 32 \Rightarrow v_B \approx 5{,}7\ \text{m/s}$. Stesso risultato, un passaggio in meno.

---

## 3. I vettori

Molte grandezze fisiche (forza, velocità, accelerazione) non sono numeri puri: hanno anche una **direzione**. Per descriverle servono i **vettori**.

### 3.1 Che cos'è un vettore

Un vettore $\vec A$ è caratterizzato da quattro elementi:

- **modulo** (o intensità): la sua "lunghezza", un numero non negativo;
- **direzione**: la retta su cui giace;
- **verso**: l'orientamento lungo quella retta (indicato dalla punta della freccia);
- **punto di applicazione**: il punto da cui parte.

<svg viewBox="0 0 300 130" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Vettore con modulo, direzione, verso e punto di applicazione">
  <line x1="60" y1="90" x2="230" y2="45" stroke="currentColor" stroke-width="2.5"/>
  <polygon points="230,45 217,45 224,55" fill="currentColor"/>
  <circle cx="60" cy="90" r="4" fill="currentColor"/>
  <g fill="currentColor" font-size="12" font-style="italic">
    <text x="140" y="55">modulo o intensità</text>
    <text x="150" y="40">verso</text>
    <text x="20" y="70">direzione</text>
    <text x="20" y="110">punto di</text>
    <text x="20" y="123">applicazione</text>
  </g>
  <text x="150" y="85" fill="currentColor" font-size="14" font-style="italic">A</text>
</svg>

### 3.2 Coordinate cartesiane

Nel piano, un vettore si descrive con le sue due **componenti** lungo gli assi:

$$\vec A \equiv (A_x,\, A_y)$$

<svg viewBox="0 0 240 200" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Componenti cartesiane e angolo polare di un vettore">
  <line x1="30" y1="170" x2="220" y2="170" stroke="currentColor" stroke-width="1.5"/>
  <line x1="30" y1="170" x2="30" y2="20" stroke="currentColor" stroke-width="1.5"/>
  <polygon points="220,170 210,165 210,175" fill="currentColor"/>
  <polygon points="30,20 25,30 35,30" fill="currentColor"/>
  <!-- vettore -->
  <line x1="30" y1="170" x2="170" y2="60" stroke="currentColor" stroke-width="2.5"/>
  <polygon points="170,60 158,62 165,72" fill="currentColor"/>
  <!-- componenti tratteggiate -->
  <line x1="170" y1="60" x2="170" y2="170" stroke="currentColor" stroke-width="0.9" stroke-dasharray="4 3" opacity="0.7"/>
  <line x1="170" y1="60" x2="30" y2="60" stroke="currentColor" stroke-width="0.9" stroke-dasharray="4 3" opacity="0.7"/>
  <!-- angolo -->
  <path d="M 60 170 A 30 30 0 0 0 52 152" fill="none" stroke="currentColor" stroke-width="1"/>
  <g fill="currentColor" font-size="13" font-family="serif">
    <text x="100" y="100" font-style="italic">A</text>
    <text x="95" y="185">Aₓ</text>
    <text x="8" y="118">A_y</text>
    <text x="62" y="160">θ</text>
    <text x="223" y="174">x</text>
    <text x="22" y="28">y</text>
  </g>
</svg>

Il **modulo** si ottiene con il teorema di Pitagora applicato alle componenti:

$$A = \|\vec A\| = \sqrt{A_x^2 + A_y^2}$$

### 3.3 Coordinate polari

In alternativa, un vettore si descrive con il suo **modulo** $A$ e l'**angolo** $\theta$ che forma con l'asse $x$:

$$\vec A \equiv (A,\, \theta)$$

Le due descrizioni sono collegate dalla trigonometria. Da polari a cartesiane:

$$A_x = A\cos\theta, \qquad A_y = A\sin\theta$$

Da cartesiane a polari (modulo come sopra, e per l'angolo):

$$\frac{A_y}{A_x} = \frac{A\sin\theta}{A\cos\theta} = \tan\theta \;\Longrightarrow\; \theta = \tan^{-1}\!\left(\frac{A_y}{A_x}\right)$$

---

## 4. Somma di vettori

I vettori non si sommano come i numeri: bisogna tener conto della direzione.

### 4.1 Metodo grafico (regola del triangolo)

Per sommare $\vec A$ e $\vec B$ si dispone la coda di $\vec B$ sulla punta di $\vec A$; il vettore somma $\vec C$ va dalla coda di $\vec A$ alla punta di $\vec B$:

<svg viewBox="0 0 280 140" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Somma di due vettori con la regola del triangolo">
  <!-- A -->
  <line x1="30" y1="110" x2="120" y2="50" stroke="currentColor" stroke-width="2.5"/>
  <polygon points="120,50 108,52 114,62" fill="currentColor"/>
  <!-- B (dalla punta di A) -->
  <line x1="120" y1="50" x2="230" y2="100" stroke="currentColor" stroke-width="2.5"/>
  <polygon points="230,100 218,95 219,107" fill="currentColor"/>
  <!-- C = A + B -->
  <line x1="30" y1="110" x2="230" y2="100" stroke="currentColor" stroke-width="2" stroke-dasharray="6 3"/>
  <polygon points="230,100 219,95 219,107" fill="currentColor"/>
  <g fill="currentColor" font-size="14" font-style="italic">
    <text x="70" y="73">A</text>
    <text x="180" y="68">B</text>
    <text x="125" y="120">C = A + B</text>
  </g>
</svg>

### 4.2 Metodo per componenti

Molto più pratico nei calcoli: si sommano le componenti **una per una**. Se $\vec A \equiv (A_x, A_y)$ e $\vec B \equiv (B_x, B_y)$, allora

$$\boxed{\;\vec C = \vec A + \vec B \equiv (A_x + B_x,\; A_y + B_y)\;}$$

Questo è il grande vantaggio delle componenti: un'operazione tra vettori si riduce a operazioni separate tra numeri, asse per asse. Lo useremo costantemente per scomporre le forze e applicare il secondo principio lungo ciascuna direzione.

---

## Riepilogo

- **Attrito dinamico:** da una decelerazione misurata si ricava $\mu_d = \dfrac{F_{ad}}{mg}$ (Problema 3.1: $\mu_d \approx 0{,}15$).
- **Corpo su parete verticale:** è l'attrito a reggere il peso. Forza minima $F_{min} = \dfrac{mg}{\mu_s}$; sotto di essa il corpo scivola con accelerazione $a = \dfrac{\mu_d F}{m} - g$.
- **Vettore:** modulo, direzione, verso, punto di applicazione.
- **Cartesiane:** $\vec A \equiv (A_x, A_y)$, con modulo $A = \sqrt{A_x^2 + A_y^2}$.
- **Polari:** $\vec A \equiv (A, \theta)$, con $A_x = A\cos\theta$, $A_y = A\sin\theta$, $\theta = \tan^{-1}(A_y/A_x)$.
- **Somma:** graficamente con la regola del triangolo; nei calcoli sommando le componenti: $\vec C = (A_x + B_x,\; A_y + B_y)$.

> [!question] Per fissare le idee
> 1. Nel problema della parete, perché la spinta $F$ non compare nella condizione verticale che regge il peso, ma solo attraverso $N$?
> 2. Se raddoppi $F$ rispetto al minimo, di quanto cambia l'attrito statico effettivamente esercitato? (Attenzione: l'attrito statico si adatta.)
> 3. Due vettori hanno lo stesso modulo. In quale caso la loro somma ha modulo massimo? E quando è nulla?

---

📎 Lezione precedente: [[forza-peso-reazione-vincolare-e-attrito]] · Prossima lezione: [[forze-inclinate-lavoro-ed-energia-cinetica]]
