---
title: "Trasformazione politropica, macchina frigorifera e Carnot con attrito"
description: "La trasformazione politropica che unifica le quattro trasformazioni, il rendimento di Carnot, la macchina frigorifera con il suo COP e un ciclo di Carnot reale con attrito."
type: lecture
lezione: 20
titolo: Trasformazione politropica, macchina frigorifera e Carnot con attrito
corso: "Elementi di Fisica: Meccanica e Termodinamica"
docente: Gabriele Curci
libro: "Mazzoldi, Nigro, Voci, Elementi di Fisica: Meccanica e Termodinamica"
argomenti:
  - trasformazione politropica
  - calore molare generico
  - rendimento di Carnot
  - macchina frigorifera
  - coefficiente di prestazione
  - ciclo con attrito
---

# Lezione 20: Politropiche, macchine frigorifere e attrito

📎 Lezione precedente: [[trasformazioni-termodinamiche-cicli-e-macchine-termiche]]

> [!abstract] In questa lezione
> - La **trasformazione politropica** $PV^k = \text{cost}$ che **unifica** le quattro trasformazioni
> - Il calore molare generico $C_k = C_V + \dfrac{R}{1-k}$
> - Ripasso del **rendimento di Carnot** $\eta = 1 - \dfrac{T_1}{T_2}$
> - La **macchina frigorifera** e il suo coefficiente di prestazione
> - Un ciclo di Carnot reale **con attrito**

---

## 1. La trasformazione politropica

Tutte le trasformazioni viste finora si possono scrivere in un'unica forma, la **politropica**:

$$\boxed{\;PV^k = \text{costante}\;}$$

dove l'esponente $k$ cambia da una trasformazione all'altra. Ricaviamo il calore molare $C_k$ associato. Dal primo principio $nC_V\,dT = nC_k\,dT - P\,dV$, cioè $P\,dV = n(C_k - C_V)\,dT$; sostituendo $P = nRT/V$ e integrando, si arriva alla forma $PV^k = \text{cost}$ con

$$\boxed{\;C_k = C_V + \frac{R}{1 - k}\;}$$

### 1.1 Le quattro trasformazioni come casi particolari

| Trasformazione | $k$ | $C_k$ |
|---|:---:|:---:|
| **Isobara** ($P$ costante) | $0$ | $C_V + R = C_P$ |
| **Isoterma** ($T$ costante) | $1$ | $\infty$ |
| **Isocora** ($V$ costante) | $\infty$ | $C_V$ |
| **Adiabatica** ($Q = 0$) | $\gamma$ | $0$ |

> [!note] Una sola formula per tutte
> La politropica è un modo elegante di vedere le quattro trasformazioni come membri di un'unica famiglia, parametrizzata da $k$. I valori limite di $C_k$ hanno senso fisico: nell'**isoterma** $C_k = \infty$ perché si fornisce calore senza variazione di temperatura (servirebbe calore infinito per ogni grado); nell'**adiabatica** $C_k = 0$ perché non c'è scambio di calore ($Q = 0$, e $C_V + R/(1-\gamma) = 0$ con $\gamma = C_P/C_V$).

---

## 2. Ripasso: il rendimento di Carnot

Per una macchina termica, il rendimento è (vedi [[trasformazioni-termodinamiche-cicli-e-macchine-termiche]])

$$\eta = \frac{W}{Q_{ass}} = \frac{Q_{ass} + Q_{ced}}{Q_{ass}} = 1 - \frac{|Q_{ced}|}{Q_{ass}}$$

Per il **ciclo di Carnot** (due isoterme a $T_2$ e $T_1$, due adiabatiche), il calore è scambiato solo nelle isoterme:

$$Q_{ass} = Q_{AB} = nRT_2\ln\frac{V_B}{V_A}, \qquad Q_{ced} = Q_{CD} = nRT_1\ln\frac{V_D}{V_C}$$

Le due adiabatiche impongono $\dfrac{V_B}{V_A} = \dfrac{V_C}{V_D}$, quindi i logaritmi si semplificano e resta la celebre formula:

$$\boxed{\;\eta_{Carnot} = 1 - \frac{T_1}{T_2}\;}$$

che dipende solo dalle due temperature (in kelvin) ed è il rendimento massimo possibile tra quelle sorgenti.

---

## 3. La macchina frigorifera

Percorrendo il ciclo di Carnot **al contrario** (verso antiorario) si ottiene una **macchina frigorifera**: si fornisce lavoro dall'esterno ($W < 0$) per estrarre calore $Q_{ass}$ dalla sorgente fredda $T_1$ e cederlo $Q_{ced}$ alla sorgente calda $T_2$. È ciò che fa un frigorifero (sposta calore da dentro, freddo, a fuori, caldo).

<svg viewBox="0 0 200 170" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Schema di una macchina frigorifera tra sorgente fredda T1 e calda T2">
  <rect x="40" y="15" width="120" height="22" fill="none" stroke="currentColor" stroke-width="1.4"/>
  <rect x="40" y="133" width="120" height="22" fill="none" stroke="currentColor" stroke-width="1.4"/>
  <circle cx="100" cy="85" r="26" fill="none" stroke="currentColor" stroke-width="1.4"/>
  <!-- Q_ass dal basso (freddo) verso macchina -->
  <line x1="100" y1="133" x2="100" y2="113" stroke="currentColor" stroke-width="2"/><polygon points="100,113 96,122 104,122" fill="currentColor"/>
  <!-- Q_ced verso alto (caldo) -->
  <line x1="100" y1="59" x2="100" y2="37" stroke="currentColor" stroke-width="2"/><polygon points="100,37 96,46 104,46" fill="currentColor"/>
  <!-- W entrante -->
  <line x1="155" y1="85" x2="128" y2="85" stroke="currentColor" stroke-width="2"/><polygon points="128,85 138,80 138,90" fill="currentColor"/>
  <g fill="currentColor" font-size="11" font-family="serif">
    <text x="92" y="30">T₂ (caldo)</text>
    <text x="92" y="149">T₁ (freddo)</text>
    <text x="108" y="50">Q_ced</text>
    <text x="108" y="128">Q_ass</text>
    <text x="160" y="82">W</text>
  </g>
</svg>

L'efficienza di un frigorifero si misura con il **coefficiente di prestazione** (COP): quanto calore estrae per unità di lavoro speso:

$$\xi = \frac{Q_{ass}}{|W|} = \frac{Q_{ass}}{|Q_{ass} + Q_{ced}|}$$

Per un frigorifero di Carnot, ripetendo i conti con le isoterme e le adiabatiche, si ottiene

$$\boxed{\;\xi_{Carnot} = \frac{T_1}{T_2 - T_1}\;}$$

> [!note] Il COP può superare 1
> A differenza del rendimento di una macchina termica ($\eta < 1$), il COP di un frigorifero può essere **maggiore di 1**: con poco lavoro si sposta molto calore, soprattutto se $T_1$ e $T_2$ sono vicine. È il principio delle pompe di calore, molto efficienti per riscaldare quando la differenza di temperatura è piccola.

---

## 4. Un ciclo di Carnot con attrito (Es. 12.27)

> Un ciclo di Carnot (gas monoatomico, $C_V = \tfrac{3}{2}R$, $\gamma = \tfrac{5}{3}$) ha $V_A = 10^{-1}\ \text{m}^3$, $P_A = 1{,}013\ \text{bar}$, $T_1 = 290\ \text{K}$. Assorbe $Q_{ass} = 8933\ \text{J}$ e produce lavoro $W = 1930\ \text{J}$. C'è attrito sul pistone ($F = 500\ \text{N}$, area $S = 10^3\ \text{cm}^2$). Trovare $T_2$, il numero di moli, i volumi, e il rendimento reale.

**Temperatura calda $T_2$.** Idealmente $\eta = \dfrac{W}{Q_{ass}} = 1 - \dfrac{T_1}{T_2}$. Risolvendo per $T_2$:

$$T_2 = \frac{T_1}{1 - \dfrac{W}{Q_{ass}}} = \frac{290}{1 - \dfrac{1930}{8933}} = \frac{290}{0{,}784} \approx 370\ \text{K}$$

con rendimento ideale $\eta = W/Q_{ass} \approx 0{,}22$.

**Numero di moli** dall'equazione di stato in $A$:

$$n = \frac{P_A V_A}{R T_1} = \frac{1{,}013\times 10^5\cdot 0{,}1}{8{,}314\cdot 290} \approx 4{,}2\ \text{mol}$$

**Volumi.** Lungo l'isoterma, $Q = W = nRT\ln(V_B/V_A)$, da cui si ricava $V_B$ invertendo il logaritmo ($V_B \approx 0{,}05\ \text{m}^3$). Lungo l'adiabatica, $T V^{\gamma-1} = \text{cost}$ dà $V_C = V_B\left(\dfrac{T_1}{T_2}\right)^{1/(\gamma-1)} \approx 0{,}035\ \text{m}^3$.

**Rendimento reale (con attrito).** L'attrito sul pistone dissipa lavoro $W_{att} = 2F\,\Delta h$, dove $\Delta h = \dfrac{V_A - V_C}{S} \approx 0{,}65\ \text{m}$ è la corsa del pistone, e il fattore 2 tiene conto dell'andata e ritorno:

$$W_{att} = 2F\,\Delta h \approx 653\ \text{J}$$

Il lavoro **utile** è quello ideale meno quello perso per attrito, quindi il rendimento reale è

$$\eta_{reale} = \frac{W - W_{att}}{Q_{ass}} = \frac{1930 - 653}{8933} \approx 0{,}14$$

cioè circa il **66% del rendimento ideale** ($\eta_{reale} \approx 0{,}66\,\eta_{ideale}$). L'attrito non sparisce: riduce concretamente la frazione di calore convertita in lavoro utile.

> [!warning] Numeri della lavagna
> Questa lavagna è in parte cancellata e alcuni valori intermedi sono arrotondati o poco leggibili (per il rendimento reale compaiono valori tra $0{,}11$ e $0{,}14$). Il risultato robusto è qualitativo: l'attrito porta il rendimento a circa due terzi di quello ideale di Carnot.

---

## Riepilogo

- **Politropica:** $PV^k = \text{cost}$ unifica le trasformazioni, con calore molare $C_k = C_V + \dfrac{R}{1-k}$.
  - $k = 0$ isobara ($C_k = C_P$), $k = 1$ isoterma ($C_k = \infty$), $k = \infty$ isocora ($C_k = C_V$), $k = \gamma$ adiabatica ($C_k = 0$).
- **Rendimento di Carnot:** $\eta = 1 - \dfrac{T_1}{T_2}$ (massimo possibile tra due temperature).
- **Macchina frigorifera:** ciclo di Carnot inverso; coefficiente di prestazione $\xi = \dfrac{Q_{ass}}{|W|} = \dfrac{T_1}{T_2 - T_1}$ (può superare 1).
- **Attrito:** riduce il rendimento, $\eta_{reale} = \dfrac{W - W_{att}}{Q_{ass}}$, a una frazione di quello ideale.

> [!question] Per fissare le idee
> 1. Perché nell'isoterma il calore molare $C_k$ è infinito e nell'adiabatica è nullo?
> 2. Perché il coefficiente di prestazione di un frigorifero può essere maggiore di 1, mentre il rendimento di un motore è sempre minore di 1?
> 3. In che senso l'attrito "costa" rendimento in una macchina reale?

---

📎 Lezione precedente: [[trasformazioni-termodinamiche-cicli-e-macchine-termiche]] · Prossima lezione: [[cicli-termodinamici-e-il-secondo-principio]]
