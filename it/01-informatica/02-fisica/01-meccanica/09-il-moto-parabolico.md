---
title: "Il moto parabolico"
description: "Il moto parabolico come composizione di un moto orizzontale uniforme e di uno verticale accelerato, con equazione della traiettoria, gittata e velocità di impatto."
type: lecture
topics:
  - moto parabolico
  - composizione dei moti
  - equazione della traiettoria
  - gittata
  - velocità di impatto con cinematica ed energia
---



> [!abstract] In questa lezione
> - Completiamo il problema del salto (velocità di impatto con l'energia)
> - Il **moto parabolico** come somma di due moti indipendenti: orizzontale uniforme e verticale uniformemente accelerato
> - Le **leggi orarie** lungo $x$ e $y$
> - L'**equazione della traiettoria** $y(x)$ (una parabola) e la **gittata**
> - La velocità di impatto $\vec v_D$ ricavata in due modi: cinematica vettoriale ed energia

---

## 1. Ripasso: velocità di impatto con l'energia

Riprendiamo il problema del [[08-lavoro-della-forza-peso-piano-inclinato-ed-energia]] (15/7/2025). Il corpo ($m = 1{,}8\ \text{kg}$) arriva nel punto $C$ con velocità orizzontale $v_C = 1{,}7\ \text{m/s}$ e cade da un gradino di altezza $\overline{CC'} = 0{,}5\ \text{m}$, atterrando in $D$. Vogliamo $v_D$.

Nella caduta solo il peso compie lavoro, con $dW = mg\,dz$. Dal teorema dell'energia cinetica sul tratto $CD$:

$$W_{CD} = K_D - K_C \;\Longrightarrow\; mg\,\overline{CC'} = \frac{1}{2}m\,v_D^2 - \frac{1}{2}m\,v_C^2$$

$$v_D = \sqrt{2g\,\overline{CC'} + v_C^2} = \sqrt{2\cdot 10\cdot 0{,}5 + 1{,}7^2} = \sqrt{10 + 2{,}89} \approx 3{,}6\ \frac{\text{m}}{\text{s}}$$

Questo ci dà il **modulo** della velocità di impatto, ma non la sua direzione. Per avere il quadro completo (direzione di arrivo, gittata, forma della traiettoria) serve studiare il moto come **parabolico**.

---

## 2. Il moto parabolico

Quando un corpo viene lanciato con una velocità che ha una componente orizzontale e poi è soggetto alla sola gravità, descrive una **traiettoria parabolica**. È il caso di un proiettile, di un pallone calciato, o del nostro corpo che cade dal gradino.

<svg viewBox="0 0 320 200" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Moto parabolico: lancio orizzontale da un'altezza con traiettoria a parabola">
  <line x1="40" y1="170" x2="300" y2="170" stroke="currentColor" stroke-width="1.5"/>
  <line x1="40" y1="170" x2="40" y2="20" stroke="currentColor" stroke-width="1.5"/>
  <polygon points="300,170 290,165 290,175" fill="currentColor"/>
  <polygon points="40,20 35,30 45,30" fill="currentColor"/>
  <!-- quota di partenza -->
  <circle cx="40" cy="50" r="3" fill="currentColor"/>
  <!-- v0 orizzontale -->
  <line x1="40" y1="50" x2="110" y2="50" stroke="currentColor" stroke-width="2.5"/><polygon points="110,50 100,45 100,55" fill="currentColor"/>
  <!-- P -->
  <line x1="75" y1="70" x2="75" y2="100" stroke="currentColor" stroke-width="1.8"/><polygon points="75,100 71,91 79,91" fill="currentColor"/>
  <!-- traiettoria parabolica -->
  <path d="M 40 50 Q 175 50 230 170" fill="none" stroke="currentColor" stroke-width="2" stroke-dasharray="5 3"/>
  <!-- vettore vD al suolo -->
  <line x1="230" y1="170" x2="265" y2="195" stroke="currentColor" stroke-width="2"/><polygon points="265,195 254,191 259,184" fill="currentColor"/>
  <g fill="currentColor" font-size="12" font-family="serif">
    <text x="22" y="54">y₀</text>
    <text x="90" y="44" font-style="italic">v₀</text>
    <text x="80" y="92" font-style="italic">P</text>
    <text x="225" y="184">D</text>
    <text x="270" y="195" font-style="italic">v_D</text>
    <text x="135" y="185">d</text>
    <text x="293" y="186">x</text>
    <text x="28" y="28">y</text>
  </g>
</svg>

### 2.1 L'idea chiave: due moti indipendenti

L'unica forza in volo è il peso, diretto lungo $-y$. Applichiamo $\vec F = m\vec a$ separatamente sui due assi:

$$x:\quad 0 = m\,a_x \;\Longrightarrow\; a_x = 0 \;\Longrightarrow\; v_x = \text{costante}$$
$$y:\quad -mg = m\,a_y \;\Longrightarrow\; a_y = -g$$

Questa è la chiave di tutto il moto parabolico: lungo $x$ non c'è forza, quindi il moto è **uniforme** (velocità costante); lungo $y$ agisce la gravità, quindi il moto è **uniformemente accelerato**. I due moti sono **indipendenti** e si studiano separatamente, ciascuno con le formule che già conosciamo.

> [!note] Orizzontale e verticale non si "parlano"
> La componente orizzontale della velocità resta invariata per tutto il volo, mentre quella verticale cresce come in una caduta libera. È un fatto sorprendente ma verificabile: un proiettile sparato in orizzontale e un sasso lasciato cadere nello stesso istante dalla stessa altezza **toccano terra insieme**. Il moto orizzontale non influenza il tempo di caduta.

### 2.2 Le leggi orarie

Mettendo insieme i due moti, con posizione iniziale $(x_0, y_0)$ e velocità iniziale $(v_{0x}, v_{0y})$:

**Velocità:**
$$v_x(t) = v_{0x} \qquad v_y(t) = v_{0y} - g\,t$$

**Posizione:**
$$x(t) = x_0 + v_{0x}\,t \qquad y(t) = y_0 + v_{0y}\,t - \frac{1}{2}g\,t^2$$

Lungo $x$ riconosciamo il moto uniforme, lungo $y$ il moto uniformemente accelerato di [[03-formule-del-moto-uniformemente-accelerato-e-introduzione-alla-dinamica]].

---

## 3. L'equazione della traiettoria

Le leggi orarie danno posizione e velocità in funzione del **tempo**. Per ottenere la forma della traiettoria nello spazio, cioè $y$ in funzione di $x$, si elimina il tempo. Dalla legge lungo $x$:

$$t = \frac{x - x_0}{v_{0x}}$$

Sostituendo nella legge lungo $y$:

$$\boxed{\;y(x) = y_0 + v_{0y}\,\frac{x - x_0}{v_{0x}} - \frac{1}{2}g\left(\frac{x - x_0}{v_{0x}}\right)^2\;}$$

È un'equazione di secondo grado in $x$: la traiettoria è una **parabola**, da cui il nome del moto.

---

## 4. Applicazione: il salto dal gradino

Applichiamo tutto al salto del problema. Il corpo lascia il bordo $C$ in orizzontale, quindi:

$$x_0 = 0, \quad y_0 = \overline{CC'} = 0{,}5\ \text{m}, \quad v_{0x} = v_C = 1{,}7\ \frac{\text{m}}{\text{s}}, \quad v_{0y} = 0$$

### 4.1 Tempo di volo e gittata

Il corpo arriva a terra quando $y(t_v) = 0$. Con $v_{0y} = 0$:

$$0 = y_0 - \frac{1}{2}g\,t_v^2 \;\Longrightarrow\; t_v = \sqrt{\frac{2y_0}{g}} = \sqrt{\frac{2\cdot 0{,}5}{10}} = \sqrt{0{,}1} \approx 0{,}3\ \text{s}$$

La **gittata** $d$ (la distanza orizzontale percorsa) è la posizione $x$ a quell'istante:

$$d = x(t_v) = x_0 + v_{0x}\,t_v = 0 + 1{,}7\cdot 0{,}3 \approx 0{,}5\ \text{m}$$

### 4.2 Velocità di impatto (cinematica vettoriale)

All'arrivo, le due componenti della velocità sono:

$$v_x(t_v) = v_{0x} = 1{,}7\ \frac{\text{m}}{\text{s}}$$
$$v_y(t_v) = v_{0y} - g\,t_v = 0 - 10\cdot 0{,}3 \approx -3\ \frac{\text{m}}{\text{s}}$$

Il modulo della velocità di impatto è la composizione delle due (teorema di Pitagora, come per ogni vettore in [[06-problemi-con-lattrito-e-introduzione-ai-vettori]]):

$$v_D = \sqrt{v_x(t_v)^2 + v_y(t_v)^2} = \sqrt{1{,}7^2 + 3^2} = \sqrt{2{,}89 + 9} \approx 3{,}6\ \frac{\text{m}}{\text{s}}$$

Lo stesso modulo ottenuto con l'energia nel § 1: i due metodi sono coerenti. La cinematica vettoriale dà in più la **direzione** di arrivo (verso il basso e in avanti).

### 4.3 Velocità di impatto (energia, componente per componente)

L'energia conferma le componenti separatamente, sfruttando l'indipendenza dei due moti:

- **Lungo $x$:** non c'è forza orizzontale, quindi nessun lavoro: $W_x = \Delta K_x = 0$, e la velocità orizzontale resta invariata, $v_{Dx} = v_{0x} = 1{,}7\ \text{m/s}$.
- **Lungo $y$:** lavora il peso sulla discesa $y_0$:
$$mg\,y_0 = \frac{1}{2}m\,v_{Dy}^2 \;\Longrightarrow\; v_{Dy} = \sqrt{2g\,y_0} = \sqrt{2\cdot 10\cdot 0{,}5} = \sqrt{10} \approx 3\ \frac{\text{m}}{\text{s}}$$

Ritroviamo le stesse componenti della cinematica. È una conferma del fatto che i due moti, orizzontale e verticale, si possono trattare in modo del tutto separato.

> [!tip] Quando usare quale metodo
> - L'**energia** è la via più rapida se serve solo il **modulo** della velocità (la "velocità con cui arriva").
> - La **cinematica del moto parabolico** è necessaria se servono anche la **direzione** della velocità, il **tempo di volo**, la **gittata** o la **forma della traiettoria**.

---

## Riepilogo

- Il **moto parabolico** è la combinazione di due moti indipendenti: **uniforme** lungo $x$ ($a_x = 0$, $v_x$ costante) e **uniformemente accelerato** lungo $y$ ($a_y = -g$).
- **Leggi orarie:** $x(t) = x_0 + v_{0x}t$; $\;y(t) = y_0 + v_{0y}t - \tfrac{1}{2}gt^2$; $\;v_x = v_{0x}$; $\;v_y = v_{0y} - gt$.
- **Traiettoria:** eliminando il tempo si ottiene la parabola $y(x)$.
- **Tempo di volo** (lancio orizzontale da altezza $y_0$): $t_v = \sqrt{2y_0/g}$; **gittata** $d = v_{0x}\,t_v$.
- **Velocità di impatto:** stesso modulo dall'energia ($v_D = \sqrt{v_C^2 + 2g\,\overline{CC'}}$) e dalla cinematica vettoriale ($v_D = \sqrt{v_x^2 + v_y^2}$); la cinematica fornisce anche la direzione.

> [!question] Per fissare le idee
> 1. Perché un proiettile sparato in orizzontale e un sasso lasciato cadere nello stesso istante dalla stessa quota toccano terra contemporaneamente?
> 2. Se raddoppi la velocità orizzontale $v_{0x}$ di lancio (stessa altezza), come cambiano il tempo di volo e la gittata?
> 3. Perché il modulo della velocità di impatto è lo stesso calcolato con l'energia e con la cinematica? Quale principio lo garantisce?

