---
title: "Teorema di Carnot, disuguaglianza di Clausius ed entropia"
description: "Il teorema di Carnot, la disuguaglianza di Clausius, la definizione di entropia come funzione di stato, il diagramma T-S e il secondo principio in forma di entropia."
type: lecture
topics:
  - teorema di Carnot
  - disuguaglianza di Clausius
  - entropia
  - diagramma temperatura-entropia
  - secondo principio ed entropia
  - entropia del gas perfetto
---



> [!abstract] In questa lezione
> - Il **teorema di Carnot**: nessuna macchina supera il rendimento di Carnot
> - La **disuguaglianza di Clausius**: $\oint \dfrac{\delta Q}{T} \le 0$
> - La definizione di **entropia** $S$ come funzione di stato: $dS = \dfrac{\delta Q}{T}$
> - Il **diagramma $T$–$S$** e il ciclo di Carnot come rettangolo
> - Il **secondo principio** in forma di entropia: $\Delta S_{universo} \ge 0$
> - La **variazione di entropia** di un gas perfetto

---

## 1. Il teorema di Carnot

Confrontiamo una macchina qualunque $M_X$ con una macchina **reversibile** (di Carnot) $M_R$, operanti tra le stesse due temperature $T_2 > T_1$ e assorbendo lo stesso calore $Q_2$. Facciamo funzionare $M_R$ al contrario (da frigorifero) alimentata da $M_X$: per il secondo principio (Kelvin-Planck) il lavoro netto della combinazione non può essere positivo, $W_{tot} = W_X - W_R \le 0$, cioè $W_R \ge W_X$. Poiché $\eta = W/Q_{ass}$ con lo stesso $Q_{ass}$:

$$\boxed{\;\eta_X \le \eta_R = 1 - \frac{T_1}{T_2}\;}$$

> [!note] Le due conseguenze del teorema di Carnot
> 1. **Nessuna** macchina può superare il rendimento di Carnot $1 - T_1/T_2$ tra due date temperature.
> 2. **Tutte** le macchine reversibili tra le stesse temperature hanno lo **stesso** rendimento (ripetendo il ragionamento con due reversibili si ottiene $\eta_{R1} = \eta_{R2}$), indipendentemente dalla sostanza usata.

---

## 2. La disuguaglianza di Clausius

Applichiamo il teorema di Carnot a una macchina generica. Da $\eta_X \le 1 - T_1/T_2$ e $\eta_X = 1 + \dfrac{Q_1}{Q_2}$ (con $Q_1$ ceduto, negativo):

$$1 + \frac{Q_1}{Q_2} \le 1 - \frac{T_1}{T_2} \;\Longrightarrow\; \frac{Q_1}{T_1} + \frac{Q_2}{T_2} \le 0$$

Generalizzando a una macchina che scambia calore con $N$ sorgenti, e passando al limite continuo, si ottiene la **disuguaglianza di Clausius**:

$$\sum_i \frac{Q_i}{T_i} \le 0 \qquad\Longrightarrow\qquad \boxed{\;\oint \frac{\delta Q}{T} \le 0\;}$$

L'integrale è esteso a un ciclo completo. Vale l'**uguaglianza** ($= 0$) per cicli **reversibili**, la disuguaglianza stretta ($< 0$) per cicli **irreversibili**.

---

## 3. L'entropia

### 3.1 Una nuova funzione di stato

Per un **ciclo reversibile** $\oint \dfrac{\delta Q}{T} = 0$. Consideriamo due cammini reversibili 1 e 2 tra gli stessi stati $A$ e $B$: percorrendo $A \xrightarrow{1} B \xrightarrow{2} A$ si ha $\oint = 0$, da cui

$$\int_A^B \left(\frac{\delta Q}{T}\right)_1 = \int_A^B \left(\frac{\delta Q}{T}\right)_2$$

L'integrale $\displaystyle\int_A^B \dfrac{\delta Q}{T}$ **non dipende dal percorso**, ma solo dagli stati $A$ e $B$. Definisce quindi una nuova **funzione di stato**, l'**entropia** $S$:

$$\boxed{\;dS = \frac{\delta Q_{rev}}{T}\;}\qquad \Delta S_{AB} = \int_A^B \frac{\delta Q_{rev}}{T} = S_B - S_A$$

L'entropia si misura in **J/K**. È una variabile di stato come $U$: la sua variazione dipende solo dagli stati estremi, e si calcola lungo un **qualunque** percorso reversibile che li colleghi (anche se la trasformazione reale è irreversibile).

> [!tip] Il "trucco" del cammino reversibile
> Per calcolare $\Delta S$ tra due stati, anche se il processo reale è irreversibile (per esempio un'espansione libera), si **inventa** un percorso reversibile qualsiasi tra gli stessi due stati e si integra $\delta Q_{rev}/T$ lungo di esso. Poiché $S$ è funzione di stato, il risultato è corretto.

### 3.2 Il diagramma temperatura-entropia

Da $\delta Q = T\,dS$, il calore scambiato in una trasformazione reversibile è l'**area** sotto la curva nel piano $T$–$S$, esattamente come il lavoro è l'area nel piano $P$–$V$.

In questo piano il **ciclo di Carnot** è un semplice **rettangolo**: le isoterme sono segmenti orizzontali ($T$ costante) e le adiabatiche reversibili sono verticali ($S$ costante, perché $\delta Q = 0 \Rightarrow dS = 0$).

<svg viewBox="0 0 220 160" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Ciclo di Carnot come rettangolo nel piano temperatura-entropia">
  <line x1="35" y1="135" x2="205" y2="135" stroke="currentColor" stroke-width="1.3"/>
  <polygon points="205,135 196,131 196,139" fill="currentColor"/>
  <line x1="35" y1="135" x2="35" y2="15" stroke="currentColor" stroke-width="1.3"/>
  <polygon points="35,15 31,24 39,24" fill="currentColor"/>
  <rect x="70" y="40" width="90" height="55" fill="currentColor" opacity="0.12"/>
  <rect x="70" y="40" width="90" height="55" fill="none" stroke="currentColor" stroke-width="1.6"/>
  <line x1="70" y1="40" x2="35" y2="40" stroke="currentColor" stroke-width="0.7" stroke-dasharray="3 2"/>
  <line x1="70" y1="95" x2="35" y2="95" stroke="currentColor" stroke-width="0.7" stroke-dasharray="3 2"/>
  <line x1="70" y1="95" x2="70" y2="135" stroke="currentColor" stroke-width="0.7" stroke-dasharray="3 2"/>
  <line x1="160" y1="95" x2="160" y2="135" stroke="currentColor" stroke-width="0.7" stroke-dasharray="3 2"/>
  <g fill="currentColor" font-size="11" font-family="serif">
    <text x="22" y="44">T₂</text><text x="22" y="99">T₁</text>
    <text x="66" y="148">S₁</text><text x="156" y="148">S₂</text>
    <text x="24" y="20">T</text><text x="200" y="148">S</text>
  </g>
</svg>

Da qui il rendimento di Carnot è immediato. Il calore assorbito (isoterma alta) e ceduto (isoterma bassa) sono le aree dei rettangoli:

$$Q_{ass} = T_2(S_2 - S_1), \qquad |Q_{ced}| = T_1(S_2 - S_1) \;\Longrightarrow\; \eta = 1 - \frac{|Q_{ced}|}{Q_{ass}} = 1 - \frac{T_1}{T_2}$$

---

## 4. Il secondo principio in forma di entropia

Per un ciclo **irreversibile** $\oint \dfrac{\delta Q}{T} < 0$. Spezzandolo in un tratto irreversibile $A \to B$ e un ritorno reversibile $B \to A$, si ricava

$$\int_A^B \left(\frac{\delta Q}{T}\right)_{rev} > \int_A^B \left(\frac{\delta Q}{T}\right)_{irr} \;\Longrightarrow\; \Delta S_{AB} > \int_A^B \frac{\delta Q_{irr}}{T}$$

Per un **sistema isolato termicamente** ($\delta Q = 0$), l'integrale a destra è nullo, quindi

$$\boxed{\;\Delta S \ge 0\;}\qquad\text{(}= 0\text{ se reversibile, } > 0 \text{ se irreversibile)}$$

Questo è il **secondo principio della termodinamica** in forma di entropia: **l'entropia di un sistema isolato non può diminuire**.

### 4.1 L'entropia dell'universo

Per un sistema generico si considera l'**universo** (sistema + ambiente), che è isolato per definizione:

$$\Delta S_{universo} = \Delta S_{sistema} + \Delta S_{ambiente} \ge 0$$

<svg viewBox="0 0 220 130" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="L'universo termodinamico (sistema + ambiente) ha entropia non decrescente">
  <ellipse cx="110" cy="65" rx="95" ry="50" fill="none" stroke="currentColor" stroke-width="1.4"/>
  <ellipse cx="110" cy="65" rx="42" ry="26" fill="none" stroke="currentColor" stroke-width="1.4"/>
  <g fill="currentColor" font-size="11" font-family="serif">
    <text x="92" y="68">SISTEMA</text>
    <text x="78" y="30">AMBIENTE</text>
    <text x="78" y="128" font-style="italic">universo: ΔS ≥ 0</text>
  </g>
</svg>

Vale $\Delta S_{universo} = 0$ per processi **reversibili** (ideali) e $\Delta S_{universo} > 0$ per quelli **irreversibili** (tutti i processi reali). L'entropia dell'universo cresce di continuo: è la "freccia del tempo" della fisica.

### 4.2 Esempio: scambio di calore tra due corpi

Due corpi a $T_2$ e $T_1$ (con $T_1 < T_2$) si scambiano una quantità di calore $Q$. Il caldo perde entropia, il freddo ne acquista:

$$\Delta S_2 = -\frac{Q}{T_2}, \qquad \Delta S_1 = +\frac{Q}{T_1}$$
$$\Delta S_{universo} = \frac{Q}{T_1} - \frac{Q}{T_2} = Q\left(\frac{1}{T_1} - \frac{1}{T_2}\right) > 0$$

Poiché $T_1 < T_2$ si ha $\frac{1}{T_1} > \frac{1}{T_2}$, quindi $\Delta S > 0$: il flusso spontaneo di calore dal caldo al freddo **aumenta** l'entropia. Il verso inverso la diminuirebbe, ed è per questo che non avviene mai spontaneamente.

---

## 5. La variazione di entropia di un gas perfetto

Per un gas perfetto si calcola $\Delta S$ lungo un percorso reversibile. Da $\delta Q = dU + \delta L = nC_V\,dT + P\,dV$, dividendo per $T$ e usando $P/T = nR/V$:

$$\Delta S_{AB} = \int_A^B \frac{nC_V\,dT}{T} + \int_A^B \frac{nR\,dV}{V}$$

$$\boxed{\;\Delta S_{AB} = nC_V\ln\frac{T_B}{T_A} + nR\ln\frac{V_B}{V_A}\;}$$

Usando l'equazione di stato si ottengono due forme equivalenti, comode a seconda dei dati:

$$\Delta S_{AB} = nC_V\ln\frac{P_B}{P_A} + nC_P\ln\frac{V_B}{V_A} = nC_P\ln\frac{T_B}{T_A} - nR\ln\frac{P_B}{P_A}$$

> [!note] Coerenza con i casi noti
> - **Adiabatica reversibile:** $\delta Q = 0 \Rightarrow \Delta S = 0$ (isentropica): infatti è verticale nel piano $T$–$S$.
> - **Isoterma:** $\Delta S = nR\ln(V_B/V_A)$, coerente con $Q = nRT\ln(V_B/V_A)$ diviso $T$.

---

## 6. Esercizi

### 6.1 Trovare $C_V$ e il calore (Es. 13.2)

> $n = 3\ \text{mol}$ vanno da $A(V_A = 30\times 10^{-3}\ \text{m}^3, P_A = 2\ \text{bar})$ a $B(V_B = 100\times 10^{-3}\ \text{m}^3, P_B = 4\ \text{bar})$ lungo una **retta** nel piano $P$–$V$. È noto $\Delta S_{AB} = 148{,}2\ \text{J/K}$. Trovare il calore $Q$.

Dalla forma $\Delta S_{AB} = nC_V\ln\dfrac{P_B}{P_A} + nC_P\ln\dfrac{V_B}{V_A}$, e con $C_P = C_V + R$, si ricava $C_V$ invertendo. Il valore risulta $C_V \approx 20{,}7\ \text{J}/(\text{mol·K}) \approx \tfrac{5}{2}R$ (gas biatomico).

Il calore si trova dal primo principio, $Q = \Delta U + L$, con $L$ = area del trapezio sotto la retta $A \to B$:

$$\Delta U = nC_V(T_B - T_A) = \frac{C_V}{R}(P_B V_B - P_A V_A) = \frac{5}{2}(40\,000 - 6\,000) = 85\ \text{kJ}$$
$$L = \frac{1}{2}(P_A + P_B)(V_B - V_A) = \frac{1}{2}(6\times 10^5)(70\times 10^{-3}) = 21\ \text{kJ}$$
$$Q = \Delta U + L = 85 + 21 = 106\ \text{kJ}$$

### 6.2 Espansione libera e aumento di entropia (Es. 13.5)

> Due gas in scomparti separati da una parete (rimovibile) di un recipiente fisso e isolato; rimossa la parete, i gas si espandono liberamente nell'intero volume.

In un'espansione libera (vedi [[04-il-primo-principio-della-termodinamica]]) non c'è scambio di calore né lavoro, quindi $\Delta U = 0$ e la temperatura resta costante. Ma il volume a disposizione di ciascun gas **aumenta**, quindi dalla formula $\Delta S = nR\ln(V_B/V_A) > 0$: l'entropia **cresce**. È un processo **irreversibile** tipico: i gas non si "ri-separano" mai spontaneamente. Il risultato chiave è $dS > 0$.

> [!note] L'irreversibilità a livello microscopico
> L'espansione libera mostra il senso statistico dell'entropia: ci sono enormemente più modi di disporre le molecole sparse nell'intero volume che confinate in metà. Lo stato "sparso" è incomparabilmente più probabile, e il sistema vi evolve spontaneamente. L'entropia misura proprio questo numero di configurazioni microscopiche.

---

## Riepilogo

- **Teorema di Carnot:** $\eta \le \eta_{Carnot} = 1 - \dfrac{T_1}{T_2}$; tutte le macchine reversibili tra le stesse temperature hanno lo stesso rendimento.
- **Disuguaglianza di Clausius:** $\oint \dfrac{\delta Q}{T} \le 0$ ($= 0$ reversibile, $< 0$ irreversibile).
- **Entropia:** funzione di stato, $dS = \dfrac{\delta Q_{rev}}{T}$, in J/K. Si calcola lungo un percorso reversibile qualunque.
- **Diagramma $T$–$S$:** il calore è l'area sotto la curva; Carnot è un rettangolo, da cui $\eta = 1 - T_1/T_2$.
- **Secondo principio:** $\Delta S_{universo} \ge 0$ (l'entropia di un sistema isolato non diminuisce mai).
- **Gas perfetto:** $\Delta S = nC_V\ln\dfrac{T_B}{T_A} + nR\ln\dfrac{V_B}{V_A}$ (e forme equivalenti).

> [!question] Per fissare le idee
> 1. Perché l'entropia si può calcolare lungo un percorso reversibile anche quando il processo reale è irreversibile?
> 2. Perché nel diagramma $T$–$S$ il ciclo di Carnot è un rettangolo, e perché questo rende immediato il suo rendimento?
> 3. In un'espansione libera la temperatura non cambia: perché allora l'entropia aumenta?

