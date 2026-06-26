---
title: "Il moto armonico semplice"
description: "L'equazione del moto armonico semplice e la sua soluzione, con pulsazione, periodo, frequenza, condizioni iniziali ed energia dell'oscillazione."
type: lecture
lezione: 13
topics:
  - moto armonico semplice
  - equazione del moto
  - pulsazione periodo frequenza
  - condizioni iniziali
  - energia nell'oscillazione
---

# Lezione 13: Il moto armonico semplice



> [!abstract] In questa lezione
> - L'**equazione del moto armonico**: $\ddot x + \omega^2 x = 0$, con $\omega^2 = k/m$
> - La soluzione $x(t) = A\cos(\omega t + \varphi)$ e il significato di $A$, $\omega$, $\varphi$
> - **Pulsazione**, **periodo** e **frequenza**
> - Come fissare $A$ e $\varphi$ dalle **condizioni iniziali**
> - L'**energia** nell'oscillazione: $E_m = \tfrac{1}{2}kA^2$ è costante

---

## 1. L'equazione del moto armonico

Consideriamo una massa $m$ attaccata a una molla orizzontale, libera di oscillare. Scegliamo l'origine $O$ nella **posizione di equilibrio** (molla a riposo): così la forza elastica è semplicemente $F = -kx$ (vedi [[potenza-energia-spesa-e-forza-elastica]]).

<svg viewBox="0 0 340 90" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Massa su molla orizzontale, oscilla attorno alla posizione di equilibrio O">
  <line x1="20" y1="30" x2="20" y2="70" stroke="currentColor" stroke-width="2"/>
  <g stroke="currentColor" stroke-width="1"><line x1="20" y1="34" x2="14" y2="40"/><line x1="20" y1="46" x2="14" y2="52"/><line x1="20" y1="58" x2="14" y2="64"/></g>
  <polyline points="20,50 35,42 50,58 65,42 80,58 95,42 110,58 125,50" fill="none" stroke="currentColor" stroke-width="1.6"/>
  <rect x="125" y="38" width="26" height="24" fill="none" stroke="currentColor" stroke-width="1.5"/>
  <circle cx="138" cy="50" r="3" fill="currentColor"/>
  <line x1="20" y1="80" x2="320" y2="80" stroke="currentColor" stroke-width="1"/>
  <polygon points="320,80 312,76 312,84" fill="currentColor"/>
  <line x1="138" y1="62" x2="138" y2="84" stroke="currentColor" stroke-width="0.8" stroke-dasharray="3 2"/>
  <g fill="currentColor" font-size="12" font-family="serif">
    <text x="134" y="96">O</text>
    <text x="315" y="76">x</text>
  </g>
</svg>

Applichiamo il secondo principio. Con $F = ma = m\ddot x$ (dove $\ddot x = d^2x/dt^2$ è l'accelerazione):

$$m\,\ddot x = -kx \;\Longrightarrow\; \ddot x + \frac{k}{m}\,x = 0$$

Ponendo $\omega^2 = \dfrac{k}{m}$ otteniamo l'**equazione del moto armonico semplice**:

$$\boxed{\;\ddot x + \omega^2 x = 0\;}\qquad\text{cioè}\qquad \ddot x = -\omega^2 x$$

> [!note] Che tipo di equazione è
> Non è più un'equazione algebrica: l'incognita è una **funzione** $x(t)$, e l'equazione lega la funzione alla sua derivata seconda. La condizione "l'accelerazione è proporzionale alla posizione, ma di segno opposto" è la firma di **ogni** oscillazione: più ci si allontana dall'equilibrio, più forte è la spinta di richiamo verso il centro.

---

## 2. La soluzione: $x(t) = A\cos(\omega t + \varphi)$

La funzione che soddisfa l'equazione è una **sinusoide**:

$$\boxed{\;x(t) = A\cos(\omega t + \varphi)\;}$$

Verifichiamolo derivando due volte:

$$v(t) = \dot x = -A\,\omega\sin(\omega t + \varphi)$$
$$a(t) = \ddot x = -A\,\omega^2\cos(\omega t + \varphi) = -\omega^2 x$$

L'ultima uguaglianza è proprio l'equazione del moto: la soluzione funziona. I tre parametri hanno un significato preciso:

- $A$ è l'**ampiezza**: lo spostamento massimo dall'equilibrio;
- $\omega$ è la **pulsazione** (in rad/s), fissata dal sistema ($\omega = \sqrt{k/m}$);
- $\varphi$ è la **fase iniziale**: dice "a che punto" dell'oscillazione siamo a $t = 0$.

### 2.1 Pulsazione, periodo, frequenza

Controlliamo le dimensioni di $\omega$. Da $\omega^2 = k/m$:

$$[\omega^2] = \frac{\text{N/m}}{\text{kg}} = \frac{\text{kg}\cdot\text{m/s}^2}{\text{m}\cdot\text{kg}} = \frac{1}{\text{s}^2} \;\Longrightarrow\; [\omega] = \frac{\text{rad}}{\text{s}}$$

Il moto si ripete dopo un **periodo** $T$, legato alla pulsazione, e la **frequenza** $\nu$ è il numero di oscillazioni al secondo:

$$\boxed{\;T = \frac{2\pi}{\omega} = 2\pi\sqrt{\frac{m}{k}}\;}\qquad \nu = \frac{1}{T} = \frac{\omega}{2\pi}$$

> [!tip] Il periodo non dipende dall'ampiezza
> $T = 2\pi\sqrt{m/k}$ dipende solo da massa e costante elastica, **non** da quanto si tira la molla. Un'oscillazione ampia e una piccola durano lo stesso tempo: è la proprietà (l'isocronismo) che rende le molle e i pendoli utili come orologi.

---

## 3. Fissare $A$ e $\varphi$ dalle condizioni iniziali

La forma $x(t) = A\cos(\omega t + \varphi)$ vale per ogni oscillazione; ciò che cambia da un caso all'altro sono $A$ e $\varphi$, determinati da **posizione e velocità iniziali**.

### 3.1 Partenza da fermo all'estremo

> A $t = 0$ la massa è ferma a distanza $A_0$ dall'equilibrio: $x(0) = A_0$, $v(0) = 0$.

Imponiamo le condizioni nella soluzione generale:

$$x(0) = A\cos\varphi = A_0 \qquad v(0) = -A\omega\sin\varphi = 0$$

Dalla seconda $\sin\varphi = 0 \Rightarrow \varphi = 0$ (oppure $\varphi = \pi$); scegliendo $\varphi = 0$ la prima dà $A = A_0$. Quindi:

$$x(t) = A_0\cos(\omega t)$$

L'oscillazione parte dal massimo e descrive un coseno puro.

<svg viewBox="0 0 320 120" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Grafici di posizione e velocità per partenza da fermo all'estremo">
  <line x1="20" y1="40" x2="300" y2="40" stroke="currentColor" stroke-width="1"/>
  <polygon points="300,40 292,36 292,44" fill="currentColor"/>
  <path d="M 30 12 Q 65 12 80 40 Q 95 68 130 68 Q 165 68 180 40 Q 195 12 230 12 Q 265 12 280 40" fill="none" stroke="currentColor" stroke-width="2"/>
  <text x="20" y="16" fill="currentColor" font-size="11" font-style="italic">x(t)</text>
  <text x="296" y="54" fill="currentColor" font-size="11">t</text>
  <line x1="20" y1="95" x2="300" y2="95" stroke="currentColor" stroke-width="1"/>
  <polygon points="300,95 292,91 292,99" fill="currentColor"/>
  <path d="M 30 95 Q 65 118 80 95 Q 95 72 130 72 Q 165 72 180 95 Q 195 118 230 118 Q 265 118 280 95" fill="none" stroke="currentColor" stroke-width="2"/>
  <text x="20" y="76" fill="currentColor" font-size="11" font-style="italic">v(t)</text>
  <text x="296" y="109" fill="currentColor" font-size="11">t</text>
</svg>

Quando la posizione è massima la velocità è nulla (inversione del moto), e quando passa per l'equilibrio la velocità è massima: i due grafici sono "sfasati" di un quarto di periodo.

### 3.2 Partenza dall'equilibrio con velocità

> A $t = 0$ la massa passa per l'equilibrio con velocità $v_i$: $x(0) = 0$, $v(0) = -v_i$.

$$x(0) = A\cos\varphi = 0 \;\Rightarrow\; \varphi = \pm\frac{\pi}{2} \qquad v(0) = -A\omega\sin\varphi = -v_i \;\Rightarrow\; A = \frac{v_i}{\omega}$$

L'ampiezza è $A = v_i/\omega$: più veloce è il lancio, più ampia l'oscillazione. La soluzione (con $\varphi = \pi/2$) è

$$x(t) = \frac{v_i}{\omega}\cos\!\left(\omega t + \frac{\pi}{2}\right)$$

---

## 4. L'energia nell'oscillazione

Calcoliamo come si distribuiscono energia cinetica ed elastica durante il moto. Con $x(t) = A\cos(\omega t + \varphi)$, $v(t) = -A\omega\sin(\omega t + \varphi)$ e $\omega^2 = k/m$:

$$K(t) = \frac{1}{2}m\,v^2 = \frac{1}{2}m\,A^2\omega^2\sin^2(\omega t + \varphi) = \frac{1}{2}k\,A^2\sin^2(\omega t + \varphi)$$
$$U_{el}(t) = \frac{1}{2}k\,x^2 = \frac{1}{2}k\,A^2\cos^2(\omega t + \varphi)$$

L'energia meccanica totale è la somma:

$$E_m = K + U_{el} = \frac{1}{2}k\,A^2\big[\underbrace{\sin^2(\omega t + \varphi) + \cos^2(\omega t + \varphi)}_{= 1}\big]$$

$$\boxed{\;E_m = \frac{1}{2}k\,A^2 = \text{costante}\;}$$

> [!note] Il travaso continuo tra cinetica ed elastica
> Durante l'oscillazione $K$ e $U_{el}$ si scambiano continuamente energia, ma la loro somma resta costante (grazie all'identità $\sin^2 + \cos^2 = 1$). All'estremo l'energia è **tutta elastica** ($v = 0$); al passaggio per l'equilibrio è **tutta cinetica** ($x = 0$, velocità massima). È la conservazione dell'energia meccanica anticipata in [[ripasso-generale-ed-energia-potenziale]].

<svg viewBox="0 0 320 110" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Energia cinetica ed elastica oscillano, la loro somma resta costante">
  <line x1="30" y1="95" x2="300" y2="95" stroke="currentColor" stroke-width="1"/>
  <polygon points="300,95 292,91 292,99" fill="currentColor"/>
  <line x1="30" y1="95" x2="30" y2="15" stroke="currentColor" stroke-width="1"/>
  <!-- somma costante -->
  <line x1="30" y1="25" x2="290" y2="25" stroke="currentColor" stroke-width="2"/>
  <!-- K (sin^2) -->
  <path d="M 30 95 Q 47 25 65 95 Q 82 25 100 95 Q 117 25 135 95 Q 152 25 170 95 Q 187 25 205 95 Q 222 25 240 95 Q 257 25 275 95" fill="none" stroke="currentColor" stroke-width="1.3" stroke-dasharray="4 2"/>
  <!-- U (cos^2) -->
  <path d="M 30 25 Q 47 95 65 25 Q 82 95 100 25 Q 117 95 135 25 Q 152 95 170 25 Q 187 95 205 25 Q 222 95 240 25 Q 257 95 275 25" fill="none" stroke="currentColor" stroke-width="1.3"/>
  <g fill="currentColor" font-size="11" font-family="serif">
    <text x="0" y="28">½kA²</text>
    <text x="296" y="108">t</text>
    <text x="245" y="20">E_m</text>
  </g>
</svg>

### 4.1 Velocità in funzione della posizione

Dalla conservazione $\tfrac{1}{2}mv^2 + \tfrac{1}{2}kx^2 = \tfrac{1}{2}kA^2$ si ricava la velocità a ogni posizione $x$:

$$mv^2 = k(A^2 - x^2) \;\Longrightarrow\; v = \pm\sqrt{\frac{k}{m}(A^2 - x^2)} = \pm\,\omega\sqrt{A^2 - x^2}$$

Massima all'equilibrio ($x = 0$: $v_{max} = \omega A$), nulla agli estremi ($x = \pm A$).

---

## 5. Esercizio (27/01/2009): trovare la costante elastica

> Una massa $m = 3\ \text{kg}$ oscilla su una molla con ampiezza $X = 15\ \text{cm}$. Partendo dall'estremo, impiega $t_1 = 0{,}5\ \text{s}$ per arrivare alla posizione di equilibrio. Trovare la costante elastica $k$.

Partenza da fermo all'estremo: come nel § 3.1, $x(t) = X\cos(\omega t)$, con $A = X$ e $\varphi = 0$.

Il passaggio dall'estremo all'equilibrio è **un quarto di oscillazione**. Imponendo $x(t_1) = 0$:

$$X\cos(\omega t_1) = 0 \;\Longrightarrow\; \omega t_1 = \frac{\pi}{2} \;\Longrightarrow\; \omega = \frac{\pi}{2 t_1} = \frac{\pi}{2\cdot 0{,}5} = \pi\ \frac{\text{rad}}{\text{s}}$$

Da $\omega^2 = k/m$ si ricava la costante elastica:

$$k = \omega^2 m = \pi^2\cdot 3 \approx 30\ \frac{\text{N}}{\text{m}}$$

(in aula, con $\pi^2 \approx 9$, si ottiene $k \approx 27\ \text{N/m}$). La velocità di passaggio per l'equilibrio è quella massima:

$$v_{max} = \omega X = \pi\cdot 0{,}15 \approx 0{,}47\ \frac{\text{m}}{\text{s}}$$

> [!tip] Misurare una molla cronometrando
> Questo è il principio per misurare $k$ (o una massa) senza dinamometro: si fa oscillare il sistema, si cronometra il periodo e si inverte $T = 2\pi\sqrt{m/k}$. Tempo e massa sono facili da misurare; la costante elastica ne segue.

---

## Riepilogo

- **Equazione del moto armonico:** $\ddot x + \omega^2 x = 0$, con $\omega^2 = k/m$. La firma: $a = -\omega^2 x$ (richiamo proporzionale e opposto allo spostamento).
- **Soluzione:** $x(t) = A\cos(\omega t + \varphi)$; $v = -A\omega\sin(\omega t + \varphi)$. $A$ ampiezza, $\omega$ pulsazione, $\varphi$ fase iniziale.
- **Periodo e frequenza:** $T = \dfrac{2\pi}{\omega} = 2\pi\sqrt{m/k}$ (indipendente dall'ampiezza), $\nu = 1/T$.
- $A$ e $\varphi$ si fissano dalle **condizioni iniziali** $x(0)$ e $v(0)$.
- **Energia:** $K$ e $U_{el}$ oscillano, ma $E_m = K + U_{el} = \tfrac{1}{2}kA^2$ è **costante**. Velocità: $v = \pm\omega\sqrt{A^2 - x^2}$.

> [!question] Per fissare le idee
> 1. Perché il periodo di un'oscillazione non dipende da quanto si tira inizialmente la molla?
> 2. In quali punti dell'oscillazione l'energia è tutta cinetica, e in quali tutta elastica?
> 3. Se si raddoppia la massa attaccata alla stessa molla, come cambia il periodo?

