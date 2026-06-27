---
title: "Esonero, moto circolare e pendolo semplice"
description: "Un problema d'esonero completo, il moto circolare con accelerazione tangenziale e centripeta e il pendolo semplice con T = 2π√(L/g)."
type: lecture
topics:
  - problema d'esonero completo
  - condizione di equilibrio su piano inclinato
  - moto circolare
  - accelerazione tangenziale e centripeta
  - pendolo semplice
---



> [!abstract] In questa lezione
> - Un **problema d'esonero** completo: molla, forza frenante, collina e salita con attrito
> - La condizione perché un corpo resti fermo su un piano inclinato: $\mu_s \ge \tan\theta$
> - Il **moto circolare**: accelerazione **tangenziale** e **centripeta**
> - Il **pendolo semplice**: per piccole oscillazioni è un moto armonico, $T = 2\pi\sqrt{L/g}$

---

## 1. Problema d'esonero (23/04/26)

> Una molla compressa di $x_0 = 0{,}08\ \text{m}$ (costante $k$) lancia un corpo $m = 1{,}2\ \text{kg}$, che parte da $A$ con $v_A = 7\ \text{m/s}$. Sul tratto $\overline{AB} = 1\ \text{m}$ agisce una forza frenante $F = 50\ \text{N}$ inclinata di $\alpha = 60°$; in $B$ (quota $h_B = 0{,}75\ \text{m}$) inizia una collina liscia che scende fino a $C$; da $C$ sale un piano inclinato $\theta = 25°$ con attrito $\mu = 0{,}6$ fino a fermarsi in $D$ (quota $h_D$). Trovare: **(1)** $k$; **(2)** $a_{AB}$; **(3)** $v_B$; **(4)** $v_C$; **(5)** $h_D$.

<svg viewBox="0 0 380 170" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Geometria dell'esonero: molla, tratto AB con forza frenante, collina fino a C, salita su piano inclinato fino a D">
  <line x1="20" y1="40" x2="20" y2="65" stroke="currentColor" stroke-width="2"/>
  <polyline points="20,52 30,46 40,58 50,46 60,58 70,52" fill="none" stroke="currentColor" stroke-width="1.4"/>
  <rect x="70" y="44" width="18" height="14" fill="none" stroke="currentColor" stroke-width="1.3"/>
  <!-- tratto AB -->
  <line x1="70" y1="58" x2="180" y2="58" stroke="currentColor" stroke-width="2"/>
  <!-- collina giù a C -->
  <path d="M 180 58 Q 210 58 225 110 Q 235 145 260 145" fill="none" stroke="currentColor" stroke-width="2"/>
  <!-- piano inclinato su a D -->
  <line x1="260" y1="145" x2="340" y2="85" stroke="currentColor" stroke-width="2"/>
  <line x1="260" y1="145" x2="340" y2="145" stroke="currentColor" stroke-width="0.7" stroke-dasharray="3 2" opacity="0.6"/>
  <g fill="currentColor" font-size="11" font-family="serif">
    <text x="75" y="70">A</text>
    <text x="178" y="52">B</text>
    <text x="252" y="158">C</text>
    <text x="342" y="84">D</text>
    <text x="195" y="100">h_B</text>
    <text x="330" y="120">h_D</text>
    <text x="278" y="140">θ</text>
  </g>
</svg>

**(1) Costante elastica.** L'energia elastica della molla diventa energia cinetica in $A$:

$$\frac{1}{2}k\,x_0^2 = \frac{1}{2}m\,v_A^2 \;\Longrightarrow\; k = \frac{m\,v_A^2}{x_0^2} = \frac{1{,}2\cdot 49}{0{,}08^2} \approx 9{,}2\ \text{kN/m}$$

**(2) Accelerazione in AB.** La forza frenante ha componente orizzontale $F\cos\alpha$ opposta al moto:

$$-F\cos\alpha = m\,a_{AB} \;\Longrightarrow\; a_{AB} = -\frac{F\cos\alpha}{m} = -\frac{50\cdot 0{,}5}{1{,}2} \approx -21\ \frac{\text{m}}{\text{s}^2}$$

**(3) Velocità in B.** Con il teorema dell'energia cinetica su $AB$ (lavoro frenante $-F\cos\alpha\cdot\overline{AB}$):

$$v_B = \sqrt{v_A^2 - \frac{2F\cos\alpha\,\overline{AB}}{m}} = \sqrt{49 - 41{,}7} \approx 2{,}7\ \frac{\text{m}}{\text{s}}$$

**(4) Velocità in C.** La collina è liscia: dalla quota $h_B$ a $C$ lavora solo il peso (vedi [[lavoro-della-forza-peso-piano-inclinato-ed-energia]]):

$$v_C = \sqrt{v_B^2 + 2g\,h_B} = \sqrt{7{,}3 + 2\cdot 10\cdot 0{,}75} \approx 4{,}7\ \frac{\text{m}}{\text{s}}$$

**(5) Altezza raggiunta D.** Salendo il piano inclinato con attrito, il corpo si ferma in $D$. Tra $C$ e $D$ l'energia meccanica diminuisce per il lavoro (negativo) dell'attrito $F_{ad} = \mu mg\cos\theta$ lungo il tratto $\overline{CD} = h_D/\sin\theta$:

$$mg\,h_D - \frac{1}{2}m\,v_C^2 = -\frac{h_D}{\sin\theta}\,\mu mg\cos\theta = -h_D\,\mu mg\,\frac{1}{\tan\theta}$$

Raccogliendo $h_D$:

$$g\,h_D\left(1 + \frac{\mu}{\tan\theta}\right) = \frac{1}{2}v_C^2 \;\Longrightarrow\; h_D = \frac{v_C^2}{2g\left(1 + \dfrac{\mu}{\tan\theta}\right)} = \frac{22{,}3}{20\,(1 + 1{,}29)} \approx 0{,}49\ \text{m}$$

> [!note] Il filo conduttore di tutti questi problemi
> Ogni tratto si affronta con un'unica domanda: **quali forze fanno lavoro?** La molla (energia elastica → cinetica), la forza frenante e l'attrito (lavoro negativo), il peso (solo se c'è dislivello). Poi si applica $W = \Delta K$ o la conservazione dell'energia. È lo stesso metodo concatenato di [[lavoro-della-forza-peso-piano-inclinato-ed-energia]] e [[esercizi-desame-e-sistemi-di-corpi-collegati]].

> [!tip] Quando un corpo resta fermo su un piano inclinato
> Un corpo non scivola finché l'attrito statico massimo regge la componente del peso lungo il piano: $F_{as,max} \ge P_\parallel$, cioè $\mu_s\,mg\cos\theta \ge mg\sin\theta$. Semplificando:
> $$\mu_s \ge \tan\theta$$
> La condizione non dipende dalla massa: conta solo l'inclinazione e il coefficiente d'attrito.

---

## 2. Il moto circolare

Finora le traiettorie erano rette o parabole. Studiamo ora il moto lungo una **circonferenza** di raggio $R$. Qui l'accelerazione ha due ruoli distinti: cambiare il **modulo** della velocità e cambiarne la **direzione**.

### 2.1 Le due componenti dell'accelerazione

La velocità è sempre **tangente** alla traiettoria, $\vec v = \dfrac{ds}{dt}\,\hat u_T$ (con $\hat u_T$ versore tangente). Derivando per ottenere l'accelerazione, due cose cambiano nel tempo: il modulo della velocità **e** la direzione del versore $\hat u_T$. Si ottiene

$$\boxed{\;\vec a = \underbrace{\frac{d^2 s}{dt^2}}_{a_T}\,\hat u_T + \underbrace{\frac{v^2}{R}}_{a_c}\,\hat u_n\;}$$

<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Moto circolare: accelerazione tangenziale e centripeta">
  <circle cx="100" cy="100" r="70" fill="none" stroke="currentColor" stroke-width="1.3" stroke-dasharray="4 3" opacity="0.7"/>
  <circle cx="100" cy="100" r="3" fill="currentColor"/>
  <!-- punto sulla circonferenza in alto a destra -->
  <circle cx="149" cy="50" r="4" fill="currentColor"/>
  <!-- centripeta verso il centro -->
  <line x1="149" y1="50" x2="115" y2="85" stroke="currentColor" stroke-width="2"/><polygon points="115,85 124,82 119,76" fill="currentColor"/>
  <!-- tangenziale -->
  <line x1="149" y1="50" x2="184" y2="84" stroke="currentColor" stroke-width="2"/><polygon points="184,84 176,80 173,88" fill="currentColor"/>
  <g fill="currentColor" font-size="11" font-family="serif" font-style="italic">
    <text x="100" y="80">a_c</text>
    <text x="178" y="72">a_T</text>
    <text x="70" y="105">R</text>
  </g>
</svg>

- **Accelerazione tangenziale** $a_T = \dfrac{d^2 s}{dt^2}$: diretta lungo la traiettoria, fa variare il **modulo** della velocità (accelera o frena).
- **Accelerazione centripeta** $a_c = \dfrac{v^2}{R}$: diretta verso il **centro** della circonferenza ($\hat u_n$), fa variare la **direzione** della velocità.

> [!note] Anche a velocità costante si accelera
> Nel **moto circolare uniforme** il modulo della velocità è costante, quindi $a_T = 0$, ma resta l'accelerazione centripeta $v^2/R$: la direzione cambia di continuo. Curvare richiede sempre una forza diretta verso il centro (è ciò che premi quando un'auto curva). Questo spiega l'osservazione lasciata in sospeso in [[terzo-principio-della-dinamica-e-gravitazione-universale]]: la Luna "cade" verso la Terra proprio perché la gravità le fornisce l'accelerazione centripeta che la tiene in orbita.

---

## 3. Il pendolo semplice

Un **pendolo semplice** è una massa $m$ appesa a un filo ininestensibile di lunghezza $L$, che oscilla sotto l'azione del peso. È un moto circolare (su un arco) e, per piccole oscillazioni, un moto armonico.

<svg viewBox="0 0 220 180" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Pendolo semplice: tensione del filo e componenti del peso lungo e perpendicolare al filo">
  <line x1="40" y1="20" x2="180" y2="20" stroke="currentColor" stroke-width="2"/>
  <g stroke="currentColor" stroke-width="1"><line x1="60" y1="20" x2="52" y2="28"/><line x1="80" y1="20" x2="72" y2="28"/><line x1="100" y1="20" x2="92" y2="28"/><line x1="120" y1="20" x2="112" y2="28"/></g>
  <circle cx="100" cy="20" r="3" fill="currentColor"/>
  <!-- filo -->
  <line x1="100" y1="20" x2="145" y2="120" stroke="currentColor" stroke-width="1.3"/>
  <!-- verticale tratteggiata -->
  <line x1="100" y1="20" x2="100" y2="140" stroke="currentColor" stroke-width="0.7" stroke-dasharray="3 2" opacity="0.6"/>
  <!-- massa -->
  <circle cx="145" cy="120" r="7" fill="none" stroke="currentColor" stroke-width="1.5"/>
  <!-- peso giù -->
  <line x1="145" y1="127" x2="145" y2="165" stroke="currentColor" stroke-width="2"/><polygon points="145,165 141,156 149,156" fill="currentColor"/>
  <!-- tensione lungo il filo verso il perno -->
  <line x1="145" y1="113" x2="118" y2="53" stroke="currentColor" stroke-width="1.6"/><polygon points="118,53 121,63 127,57" fill="currentColor"/>
  <g fill="currentColor" font-size="11" font-family="serif">
    <text x="108" y="50">θ</text>
    <text x="120" y="55" font-style="italic">T</text>
    <text x="150" y="160" font-style="italic">mg</text>
    <text x="118" y="80">L</text>
  </g>
</svg>

### 3.1 L'equazione del moto

Scomponiamo il peso lungo il filo (radiale) e perpendicolare ad esso (tangenziale):

$$|F_P^\perp| = mg\cos\theta \qquad |F_P^\parallel| = mg\sin\theta$$

Lungo la **tangente** (direzione del moto), l'unica forza è la componente $-mg\sin\theta$ (di richiamo verso il basso). Con $a_T = L\,\dfrac{d^2\theta}{dt^2}$ (l'arco è $s = L\theta$):

$$-mg\sin\theta = m\,L\,\frac{d^2\theta}{dt^2} \;\Longrightarrow\; \frac{d^2\theta}{dt^2} + \frac{g}{L}\sin\theta = 0$$

(Lungo la direzione radiale si avrebbe $|T| - mg\cos\theta = m\dfrac{v^2}{L}$, che dà la tensione del filo, ma non serve per il moto oscillatorio.)

### 3.2 Piccole oscillazioni: di nuovo il moto armonico

L'equazione $\ddot\theta + \dfrac{g}{L}\sin\theta = 0$ non è armonica a causa del $\sin\theta$. Ma per **piccole oscillazioni** (in pratica $\theta \lesssim 5°$) vale l'approssimazione $\sin\theta \approx \theta$ (con $\theta$ in radianti), e l'equazione diventa

$$\boxed{\;\frac{d^2\theta}{dt^2} + \frac{g}{L}\,\theta = 0\;}$$

Questa è esattamente l'equazione del moto armonico di [[il-moto-armonico-semplice]], con

$$\omega = \sqrt{\frac{g}{L}}, \qquad T = \frac{2\pi}{\omega} = 2\pi\sqrt{\frac{L}{g}}$$

e soluzione $\theta(t) = A\cos(\omega t + \varphi)$.

> [!tip] Il pendolo come orologio
> Il periodo $T = 2\pi\sqrt{L/g}$ dipende **solo** dalla lunghezza del filo e da $g$: non dalla massa appesa né (per piccole oscillazioni) dall'ampiezza. È la proprietà che ha reso il pendolo il regolatore degli orologi per secoli, e che permette di **misurare $g$** cronometrando le oscillazioni di un filo di lunghezza nota.

---

## Riepilogo

- I problemi concatenati (molla, forze frenanti, dislivelli, attrito) si risolvono tratto per tratto con $W = \Delta K$ e la conservazione dell'energia: in ogni tratto, individuare **quali forze fanno lavoro**.
- **Equilibrio su piano inclinato:** un corpo resta fermo se $\mu_s \ge \tan\theta$ (indipendente dalla massa).
- **Moto circolare:** $\vec a = a_T\,\hat u_T + \dfrac{v^2}{R}\,\hat u_n$. La componente **tangenziale** cambia il modulo della velocità, la **centripeta** ($v^2/R$, verso il centro) ne cambia la direzione. Nel moto uniforme resta solo la centripeta.
- **Pendolo semplice:** $\ddot\theta + \dfrac{g}{L}\sin\theta = 0$; per piccole oscillazioni diventa armonico con $\omega = \sqrt{g/L}$ e $T = 2\pi\sqrt{L/g}$, indipendente da massa e ampiezza.

> [!question] Per fissare le idee
> 1. Un'auto percorre una curva a velocità costante: sta accelerando? In quale direzione?
> 2. Perché il periodo di un pendolo non dipende dalla massa appesa?
> 3. Due pendoli hanno lunghezze nel rapporto $4:1$. Qual è il rapporto dei loro periodi?

