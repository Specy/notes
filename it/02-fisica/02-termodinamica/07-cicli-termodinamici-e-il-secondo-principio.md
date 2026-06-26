---
title: "Cicli termodinamici e il secondo principio"
description: "Cicli termodinamici con il lavoro come area, un frigorifero che congela acqua e il secondo principio negli enunciati di Kelvin-Planck e Clausius."
type: lecture
lezione: 21
topics:
  - ciclo termodinamico
  - lavoro come area
  - frigorifero e calore latente
  - secondo principio
  - enunciato di Kelvin-Planck
  - enunciato di Clausius
---

# Lezione 21: Cicli termodinamici e il secondo principio

📎 Lezione precedente: [[trasformazione-politropica-macchina-frigorifera-e-carnot-con-attrito]]

> [!abstract] In questa lezione
> - Un ciclo **triangolare**: lavoro come area, rendimento
> - Un ciclo a **quattro trasformazioni** (adiabatica, isobara, isoterma)
> - Un **frigorifero** che congela acqua: COP e calore latente
> - Il **secondo principio**: macchine monoterme, enunciati di **Kelvin-Planck** e **Clausius**

---

## 1. Ciclo triangolare (Es. 12.30)

> Un gas monoatomico ($C_V = \tfrac{3}{2}R$) percorre un ciclo triangolare nel piano $P$–$V$: $V_A = 10^{-2}$, $V_B = 3\times 10^{-2}$, $V_C = 4\times 10^{-2}\ \text{m}^3$; $P_A = P_B = 10^5\ \text{Pa}$, $P_C = 0{,}2\times 10^5\ \text{Pa}$. Trovare il lavoro $W$ e il rendimento.

<svg viewBox="0 0 200 150" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Ciclo triangolare nel piano P-V">
  <line x1="30" y1="125" x2="190" y2="125" stroke="currentColor" stroke-width="1.3"/>
  <polygon points="190,125 181,121 181,129" fill="currentColor"/>
  <line x1="30" y1="125" x2="30" y2="15" stroke="currentColor" stroke-width="1.3"/>
  <polygon points="30,15 26,24 34,24" fill="currentColor"/>
  <polygon points="50,35 110,35 150,105 50,35" fill="currentColor" opacity="0.12"/>
  <polyline points="50,35 110,35 150,105 50,35" fill="none" stroke="currentColor" stroke-width="1.6"/>
  <g fill="currentColor" font-size="10" font-family="serif">
    <text x="44" y="32">A</text><text x="112" y="32">B</text><text x="153" y="108">C</text>
    <text x="20" y="20">P</text><text x="185" y="138">V</text>
  </g>
</svg>

Il **lavoro netto** del ciclo è l'**area** racchiusa, qui un triangolo:

$$W = \frac{1}{2}(V_B - V_A)(P_A - P_C) = \frac{1}{2}(2\times 10^{-2})(0{,}8\times 10^5) = 800\ \text{J} > 0$$

Per il rendimento serve il calore assorbito. Il tratto $A \to B$ è isobaro e l'unico in cui si assorbe calore:

$$Q_{ass} = Q_{AB} = nC_P(T_B - T_A) = \frac{C_P}{R}P_A(V_B - V_A) = \frac{5}{2}P_A(V_B - V_A) = 5\ \text{kJ}$$

(usando $nC_P\Delta T = \tfrac{C_P}{R}\,\Delta(PV)$ e $C_P = \tfrac{5}{2}R$). Quindi:

$$\eta = \frac{W}{Q_{ass}} = \frac{800}{5000} \approx 0{,}16$$

(Gli altri tratti cedono calore: $Q_{BC} \approx -2{,}7\ \text{kJ}$ e $Q_{CA} \approx -1{,}5\ \text{kJ}$, coerenti con $\sum Q = W$.)

---

## 2. Ciclo a quattro trasformazioni (Es. 12.37)

> $n = 1\ \text{mol}$, $C_V = \tfrac{3}{2}R$, $\gamma = \tfrac{5}{3}$. Ciclo $A \to B \to C \to D \to A$: $A \to B$ **adiabatica**, $B \to C$ **isobara**, $C \to D$ **isoterma**, $D \to A$. Dati: $V_A = 2\times 10^{-2}$, $V_B = 10^{-2}$, $V_D = 0{,}6\times 10^{-2}\ \text{m}^3$, $T_A = 300\ \text{K}$, $T_C = 200\ \text{K}$.

Si procede trasformazione per trasformazione, usando le formule riassunte in [[trasformazioni-termodinamiche-cicli-e-macchine-termiche]].

**$A \to B$ (adiabatica, $Q = 0$).** Da $TV^{\gamma-1} = \text{cost}$:

$$T_B = T_A\left(\frac{V_A}{V_B}\right)^{\gamma-1} = 300\cdot 2^{2/3} \approx 476{,}2\ \text{K} \qquad L_{AB} = nC_V(T_A - T_B) \approx -2{,}2\ \text{kJ}$$

**$B \to C$ (isobara).** Con $V_C = V_B\dfrac{T_C}{T_B} \approx 4{,}2\times 10^{-3}\ \text{m}^3$:

$$L_{BC} = nR(T_C - T_B) \approx -2{,}3\ \text{kJ} \qquad Q_{BC} = nC_P(T_C - T_B) \approx -5{,}7\ \text{kJ}$$

**$C \to D$ (isoterma, $\Delta U = 0$).**

$$Q_{CD} = L_{CD} = nRT_C\ln\frac{V_D}{V_C} \approx 0{,}6\ \text{kJ}$$

**$D \to A$.** Lavoro come area del trapezio, $\Delta U_{DA} = nC_V(T_A - T_C) \approx 1{,}2\ \text{kJ}$:

$$W_{DA} \approx 2{,}8\ \text{kJ} \qquad Q_{DA} = \Delta U_{DA} + W_{DA} \approx 4{,}0\ \text{kJ}$$

> [!tip] Strategia per i cicli
> 1. Trova le temperature mancanti (con $PV = nRT$, o $TV^{\gamma-1}$ per le adiabatiche).
> 2. Per ogni tratto applica la formula giusta della tabella ($\Delta U = nC_V\Delta T$ sempre; $L$ e $Q$ secondo il tipo).
> 3. Verifica con $\sum Q = \sum L = W_{ciclo}$ (perché $\Delta U_{ciclo} = 0$).

---

## 3. Frigorifero che congela acqua (Es. 12.39)

> Un frigorifero opera tra $T_1 = -4\,°\text{C}$ e $T_2 = 25\,°\text{C}$, con lavoro $W = -400\ \text{J}$ per ciclo. Quanti cicli servono per trasformare $m = 1\ \text{kg}$ di acqua da $20\,°\text{C}$ in ghiaccio a $-4\,°\text{C}$?

**Calore estratto per ciclo.** Il coefficiente di prestazione di Carnot (vedi [[trasformazione-politropica-macchina-frigorifera-e-carnot-con-attrito]]), con le temperature in kelvin:

$$\xi = \frac{T_1}{T_2 - T_1} = \frac{269{,}15}{29} \approx 9{,}3 \;\Longrightarrow\; Q_{ass} = \xi\,|W| \approx 3{,}71\ \text{kJ per ciclo}$$

**Calore totale da estrarre dall'acqua.** Il processo ha tre fasi (raffreddare, solidificare, raffreddare il ghiaccio), e usa il calore latente di [[cambiamenti-di-fase-dilatazione-e-leggi-dei-gas]]:

$$|Q_{acqua}| = \underbrace{m\,c_{acqua}(20 - 0)}_{\text{raffredda}} + \underbrace{m\,\lambda}_{\text{solidifica}} + \underbrace{m\,c_{ghiaccio}(0 - (-4))}_{\text{raffredda ghiaccio}}$$

con $c_{acqua} = 4186$, $c_{ghiaccio} = 2090\ \text{J}/(\text{kg·K})$, $\lambda = 3{,}3\times 10^5\ \text{J/kg}$:

$$|Q_{acqua}| = 83\,720 + 330\,000 + 8\,360 \approx 422\ \text{kJ}$$

**Numero di cicli:**

$$\# = \frac{|Q_{acqua}|}{Q_{ass}} = \frac{422}{3{,}71} \approx 114\ \text{cicli}$$

> [!note] Quanto pesa il calore latente
> Dei $422\ \text{kJ}$ totali, ben $330\ \text{kJ}$ (il 78%) servono solo per la **solidificazione** a temperatura costante. Congelare costa molta più energia che raffreddare: il salto di fase è la parte dominante.

---

## 4. Il secondo principio della termodinamica

Il primo principio dice che l'energia si conserva, ma **non** dice in quale verso avvengono i processi. Una tazza di tè si raffredda spontaneamente, mai il contrario; il calore va dal caldo al freddo, mai da solo all'inverso. Questo verso preferenziale è il contenuto del **secondo principio**.

### 4.1 Macchine monoterme

Una **macchina monoterma** userebbe una **sola** sorgente di calore. Una trasformazione isoterma ($\Delta U = 0 \Rightarrow Q_{ass} = L$) sembrerebbe convertire tutto il calore in lavoro con una sola sorgente. Ma per funzionare ciclicamente, una macchina termica deve sempre **cedere** parte del calore a una sorgente più fredda: ecco perché $\eta = 1 - |Q_{ced}|/Q_{ass} < 1$.

### 4.2 Enunciato di Kelvin-Planck

> **Kelvin-Planck.** Non esiste una macchina termica (che produca lavoro, $W > 0$) **monoterma**.

<svg viewBox="0 0 340 130" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Macchina termica a due sorgenti (lecita) e macchina monoterma (vietata)">
  <!-- macchina a due sorgenti -->
  <rect x="20" y="10" width="90" height="16" fill="none" stroke="currentColor" stroke-width="1.2"/>
  <rect x="20" y="104" width="90" height="16" fill="none" stroke="currentColor" stroke-width="1.2"/>
  <circle cx="65" cy="65" r="18" fill="none" stroke="currentColor" stroke-width="1.2"/>
  <line x1="65" y1="104" x2="65" y2="83" stroke="currentColor" stroke-width="1.5"/><polygon points="65,83 61,92 69,92" fill="currentColor"/>
  <line x1="65" y1="47" x2="65" y2="26" stroke="currentColor" stroke-width="1.5"/><polygon points="65,26 61,35 69,35" fill="currentColor"/>
  <line x1="83" y1="65" x2="110" y2="65" stroke="currentColor" stroke-width="1.5"/><polygon points="110,65 100,60 100,70" fill="currentColor"/>
  <g fill="currentColor" font-size="9" font-family="serif"><text x="55" y="22">T₂</text><text x="55" y="116">T₁</text><text x="112" y="63">W</text></g>
  <text x="30" y="68" fill="currentColor" font-size="9">OK</text>
  <!-- monoterma vietata -->
  <rect x="220" y="104" width="90" height="16" fill="none" stroke="currentColor" stroke-width="1.2"/>
  <circle cx="265" cy="65" r="18" fill="none" stroke="currentColor" stroke-width="1.2"/>
  <line x1="265" y1="104" x2="265" y2="83" stroke="currentColor" stroke-width="1.5"/><polygon points="265,83 261,92 269,92" fill="currentColor"/>
  <line x1="283" y1="65" x2="310" y2="65" stroke="currentColor" stroke-width="1.5"/><polygon points="310,65 300,60 300,70" fill="currentColor"/>
  <line x1="248" y1="48" x2="282" y2="82" stroke="currentColor" stroke-width="1.5"/>
  <line x1="282" y1="48" x2="248" y2="82" stroke="currentColor" stroke-width="1.5"/>
  <g fill="currentColor" font-size="9" font-family="serif"><text x="255" y="116">T₁</text><text x="312" y="63">W</text><text x="225" y="40">vietata</text></g>
</svg>

In altre parole, è impossibile convertire **completamente** calore in lavoro in modo ciclico usando un solo serbatoio. Serve sempre una sorgente fredda dove scaricare una parte.

### 4.3 Enunciato di Clausius

> **Clausius.** Non esiste un processo il cui **unico** effetto sia trasferire calore da un corpo freddo a uno caldo (senza spesa di lavoro).

Il calore non risale spontaneamente la china della temperatura: per portarlo dal freddo al caldo (come fa un frigorifero) bisogna **spendere lavoro** dall'esterno.

### 4.4 Equivalenza dei due enunciati

I due enunciati sembrano diversi (uno parla di motori, l'altro di frigoriferi) ma sono **equivalenti**: si dimostra che, se uno fosse violato, lo sarebbe anche l'altro. L'idea: una ipotetica macchina monoterma (che viola Kelvin-Planck) potrebbe alimentare un frigorifero, ottenendo come unico effetto il trasferimento di calore dal freddo al caldo (violando Clausius), e viceversa. Negare uno è negare l'altro.

> [!note] Il senso profondo del secondo principio
> Il primo principio (energia conservata) ammetterebbe processi che in natura non avvengono mai: un sasso che si raffredda e salta in aria, un mare che congela cedendo calore a una nave. Il secondo principio vieta questi processi, fissando un **verso** per i fenomeni naturali. È ciò che porterà al concetto di **entropia**, la grandezza che misura questa freccia del tempo.

---

## Riepilogo

- In un **ciclo** il lavoro netto è l'**area** racchiusa nel piano $P$–$V$; il rendimento è $\eta = W/Q_{ass}$, con $Q_{ass}$ somma dei calori assorbiti.
- I cicli si risolvono trasformazione per trasformazione; verifica finale $\sum Q = \sum L = W_{ciclo}$.
- **Frigorifero**: $Q_{ass} = \xi\,|W|$ per ciclo; congelare richiede anche il **calore latente**, spesso dominante.
- **Secondo principio:**
  - **Kelvin-Planck:** nessuna macchina termica monoterma (non si converte tutto il calore in lavoro).
  - **Clausius:** il calore non passa spontaneamente dal freddo al caldo.
  - I due enunciati sono **equivalenti**.

> [!question] Per fissare le idee
> 1. Perché il lavoro netto di un ciclo è l'area racchiusa, e non l'area sotto una singola curva?
> 2. Nel problema del frigorifero, perché la fase di solidificazione domina il bilancio energetico?
> 3. Perché un frigorifero non viola il secondo principio, pur spostando calore dal freddo al caldo?

---

📎 Lezione precedente: [[trasformazione-politropica-macchina-frigorifera-e-carnot-con-attrito]] · Prossima lezione: [[teorema-di-carnot-disuguaglianza-di-clausius-ed-entropia]]
