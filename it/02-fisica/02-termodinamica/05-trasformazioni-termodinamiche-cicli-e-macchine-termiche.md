---
title: "Trasformazioni termodinamiche, cicli e macchine termiche"
description: "Il primo principio applicato alle quattro trasformazioni, l'adiabatica e l'isoterma, le trasformazioni cicliche, le macchine termiche e frigorifere e il ciclo di Carnot."
type: lecture
lezione: 19
topics:
  - trasformazione adiabatica
  - trasformazione isoterma
  - le quattro trasformazioni
  - trasformazioni cicliche
  - macchine termiche e frigorifere
  - rendimento
  - ciclo di Carnot
---

# Lezione 19: Trasformazioni, cicli e macchine termiche

📎 Lezione precedente: [[il-primo-principio-della-termodinamica]]

> [!abstract] In questa lezione
> - Il primo principio applicato alle **quattro trasformazioni**: isocora, isobara, isoterma, adiabatica
> - La **trasformazione adiabatica**: $PV^\gamma = \text{cost}$, con $\gamma = C_P/C_V$
> - La **trasformazione isoterma**: $Q = L = nRT\ln(V_B/V_A)$
> - Le **trasformazioni cicliche**: $\Delta U = 0$, quindi $Q = L$
> - **Macchine termiche e frigorifere**, il **rendimento** e il **ciclo di Carnot**

---

## 1. L'indice adiabatico

Dalla relazione di Mayer ([[il-primo-principio-della-termodinamica]]) sappiamo $C_P = C_V + R$. Definiamo il rapporto tra i due calori molari, l'**indice adiabatico**:

$$\boxed{\;\gamma = \frac{C_P}{C_V}\;}$$

che è sempre $> 1$ (vale $\tfrac{5}{3} \approx 1{,}67$ per i gas monoatomici, $\tfrac{7}{5} = 1{,}4$ per i biatomici). Comparirà in tutte le formule delle adiabatiche.

---

## 2. La trasformazione adiabatica

Una trasformazione **adiabatica** avviene senza scambio di calore: $Q = 0$ (sistema isolato termicamente, o trasformazione molto rapida).

### 2.1 La legge $PV^\gamma = \text{cost}$

Dal primo principio $\delta Q = dU + \delta L = nC_V\,dT + P\,dV = 0$. Sostituendo $P = \dfrac{nRT}{V}$:

$$nC_V\,dT + \frac{nRT}{V}\,dV = 0 \;\Longrightarrow\; \frac{dV}{V}\cdot\frac{R}{C_V} = -\frac{dT}{T}$$

Poiché $\dfrac{R}{C_V} = \dfrac{C_P - C_V}{C_V} = \gamma - 1$, integrando da $A$ a $B$:

$$(\gamma - 1)\ln\frac{V_B}{V_A} = -\ln\frac{T_B}{T_A} \;\Longrightarrow\; T_B\,V_B^{\gamma-1} = T_A\,V_A^{\gamma-1}$$

cioè, lungo un'adiabatica:

$$\boxed{\;T\,V^{\gamma-1} = \text{cost}\;}\qquad\text{equivalente a}\qquad\boxed{\;P\,V^\gamma = \text{cost}\;}$$

(la seconda forma si ottiene sostituendo $T = PV/nR$). Nel piano $P$–$V$ l'adiabatica è **più ripida** dell'isoterma.

<svg viewBox="0 0 220 160" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Nel piano P-V l'adiabatica è più ripida dell'isoterma">
  <line x1="35" y1="135" x2="210" y2="135" stroke="currentColor" stroke-width="1.3"/>
  <polygon points="210,135 201,131 201,139" fill="currentColor"/>
  <line x1="35" y1="135" x2="35" y2="15" stroke="currentColor" stroke-width="1.3"/>
  <polygon points="35,15 31,24 39,24" fill="currentColor"/>
  <path d="M 50 120 Q 90 55 190 35" fill="none" stroke="currentColor" stroke-width="1.6"/>
  <path d="M 50 120 Q 75 50 130 38" fill="none" stroke="currentColor" stroke-width="1.6" stroke-dasharray="4 3"/>
  <g fill="currentColor" font-size="10" font-family="serif">
    <text x="24" y="20">P</text><text x="205" y="148">V</text>
    <text x="150" y="40">isoterma</text>
    <text x="80" y="42" font-style="italic">adiab.</text>
  </g>
</svg>

### 2.2 Il lavoro in un'adiabatica

Con $Q = 0$, il primo principio dà $L = -\Delta U = -nC_V(T_B - T_A) = nC_V(T_A - T_B)$. Riscritto con $PV = nRT$:

$$L_{AB} = nC_V(T_A - T_B) = \frac{P_A V_A - P_B V_B}{\gamma - 1}$$

> [!example] Espansione adiabatica (Esempio 12.4)
> Un gas monoatomico ($n = 2$, $C_V = \tfrac{3}{2}R$, $\gamma = \tfrac{5}{3}$) a $T_A = 400\ \text{K}$ si espande adiabaticamente fino a $V_B = 3V_A$. Trovare il lavoro.
>
> Temperatura finale da $TV^{\gamma-1} = \text{cost}$:
> $$T_B = T_A\left(\frac{V_A}{V_B}\right)^{\gamma-1} = 400\left(\frac{1}{3}\right)^{2/3} \approx 192{,}3\ \text{K}$$
> Il gas si **raffredda** espandendosi (l'energia per il lavoro viene dall'energia interna). Lavoro:
> $$L_{AB} = nC_V(T_A - T_B) = 2\cdot\tfrac{3}{2}\cdot 8{,}314\cdot(400 - 192{,}3) \approx 5{,}2\ \text{kJ}$$

---

## 3. La trasformazione isoterma

In una trasformazione **isoterma** la temperatura è costante. Poiché per un gas perfetto $U = U(T)$ (vedi [[il-primo-principio-della-termodinamica]]), si ha $\Delta U = 0$, quindi dal primo principio:

$$\Delta U = 0 \;\Longrightarrow\; Q = L$$

Tutto il calore assorbito diventa lavoro (in espansione), o tutto il lavoro fatto sul gas viene ceduto come calore (in compressione). Il lavoro si calcola integrando $\delta L = P\,dV = \dfrac{nRT}{V}\,dV$ a $T$ costante:

$$\boxed{\;Q = L_{AB} = nRT\ln\frac{V_B}{V_A}\;}$$

> [!example] Espansione isoterma irreversibile (Esempio 12.4)
> $n = 5\ \text{mol}$ a $T = 300\ \text{K}$, da $P_A = 2\times 10^6\ \text{Pa}$, si espande **contro la pressione atmosferica costante** $P_0 \approx 10^5\ \text{Pa}$ (trasformazione irreversibile). Qui il lavoro si calcola con la pressione esterna (vedi [[equazione-di-stato-dei-gas-perfetti-e-trasformazioni]]):
> $$L = P_0(V_B - V_A) = P_0\left(\frac{nRT}{P_0} - \frac{nRT}{P_A}\right) = nRT\left(1 - \frac{P_0}{P_A}\right) \approx 1{,}2\times 10^4\ \text{J}$$
> È **minore** del lavoro reversibile $nRT\ln(V_B/V_A)$: un'espansione irreversibile produce meno lavoro.

---

## 4. Le quattro trasformazioni a confronto

Riassumiamo il primo principio per le quattro trasformazioni fondamentali di un gas perfetto:

| Trasformazione | Costante | Lavoro $L$ | Calore $Q$ | $\Delta U$ |
|---|---|---|---|---|
| **Isocora** | $V$ | $0$ | $nC_V\Delta T$ | $nC_V\Delta T$ |
| **Isobara** | $P$ | $P\Delta V = nR\Delta T$ | $nC_P\Delta T$ | $nC_V\Delta T$ |
| **Isoterma** | $T$ | $nRT\ln\frac{V_B}{V_A}$ | $= L$ | $0$ |
| **Adiabatica** | ($Q=0$) | $nC_V(T_A - T_B)$ | $0$ | $nC_V\Delta T$ |

> [!note] Due regole che valgono sempre (gas perfetto)
> 1. $\Delta U = nC_V\,\Delta T$ in **ogni** trasformazione (anche se non è isocora).
> 2. Il calore con $C_V$ vale solo a volume costante; con $C_P$ solo a pressione costante. Per le altre trasformazioni $Q$ si ricava dal primo principio $Q = \Delta U + L$.

---

## 5. Trasformazioni cicliche e macchine termiche

Una **trasformazione ciclica** riporta il sistema allo stato di partenza. Poiché $U$ è una variabile di stato e lo stato finale coincide con l'iniziale:

$$\Delta U = 0 \;\Longrightarrow\; Q = L$$

In un ciclo, il calore netto scambiato è uguale al lavoro netto compiuto. Questo è il principio di funzionamento delle macchine.

<svg viewBox="0 0 200 150" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Ciclo termodinamico nel piano P-V">
  <line x1="30" y1="125" x2="190" y2="125" stroke="currentColor" stroke-width="1.3"/>
  <polygon points="190,125 181,121 181,129" fill="currentColor"/>
  <line x1="30" y1="125" x2="30" y2="15" stroke="currentColor" stroke-width="1.3"/>
  <polygon points="30,15 26,24 34,24" fill="currentColor"/>
  <path d="M 55 35 Q 110 40 130 70 Q 140 100 90 105 Q 55 100 55 35 Z" fill="none" stroke="currentColor" stroke-width="1.6"/>
  <!-- freccia oraria -->
  <polygon points="130,70 124,62 134,64" fill="currentColor"/>
  <g fill="currentColor" font-size="10" font-family="serif">
    <text x="50" y="32">A</text><text x="132" y="68">B</text>
    <text x="20" y="20">P</text><text x="185" y="138">V</text>
  </g>
</svg>

A seconda del verso di percorrenza del ciclo nel piano $P$–$V$:

- **Macchina termica** (ciclo orario): $Q > 0$ e $L > 0$. Assorbe calore netto e compie lavoro netto (motore).
- **Macchina frigorifera** (ciclo antiorario): $Q < 0$ e $L < 0$. Si compie lavoro **su** di essa per spostare calore (frigorifero, pompa di calore).

Il calore totale è la somma di quello assorbito e di quello ceduto: $Q = Q_{ass} + Q_{ced}$ (con $Q_{ced} < 0$).

---

## 6. Il rendimento

Una macchina termica assorbe calore $Q_{ass}$ da una sorgente calda, ne converte una parte in lavoro $L$ e cede il resto $|Q_{ced}|$ a una sorgente fredda. Il **rendimento** misura quanta parte del calore assorbito diventa lavoro utile:

$$\eta = \frac{L}{Q_{ass}} = \frac{Q_{ass} + Q_{ced}}{Q_{ass}} = 1 + \frac{Q_{ced}}{Q_{ass}} = 1 - \frac{|Q_{ced}|}{Q_{ass}}$$

Poiché una parte di calore viene **sempre** ceduta ($|Q_{ced}| > 0$), il rendimento è **sempre minore di 1**:

$$\boxed{\;\eta = 1 - \frac{|Q_{ced}|}{Q_{ass}} < 1\;}$$

> [!note] Non si può convertire tutto il calore in lavoro
> Il fatto che $\eta < 1$ non è un limite tecnologico ma una legge di natura: una macchina termica deve sempre "buttare via" parte del calore a una sorgente fredda. È l'essenza del **secondo principio della termodinamica**, che pone un tetto invalicabile al rendimento.

---

## 7. Il ciclo di Carnot

Il **ciclo di Carnot** è il ciclo ideale di riferimento: due trasformazioni **isoterme** (a temperatura $T_2$ calda e $T_1$ fredda) alternate a due **adiabatiche**. Opera tra due sole sorgenti di calore.

<svg viewBox="0 0 230 160" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Ciclo di Carnot nel piano P-V: due isoterme e due adiabatiche">
  <line x1="35" y1="135" x2="220" y2="135" stroke="currentColor" stroke-width="1.3"/>
  <polygon points="220,135 211,131 211,139" fill="currentColor"/>
  <line x1="35" y1="135" x2="35" y2="12" stroke="currentColor" stroke-width="1.3"/>
  <polygon points="35,12 31,21 39,21" fill="currentColor"/>
  <path d="M 55 35 Q 80 45 100 55" fill="none" stroke="currentColor" stroke-width="1.6"/>
  <path d="M 100 55 Q 140 75 175 100" fill="none" stroke="currentColor" stroke-width="1.6"/>
  <path d="M 175 100 Q 150 95 130 88" fill="none" stroke="currentColor" stroke-width="1.6"/>
  <path d="M 130 88 Q 85 60 55 35" fill="none" stroke="currentColor" stroke-width="1.6"/>
  <g fill="currentColor" font-size="10" font-family="serif">
    <text x="48" y="33">A</text><text x="103" y="52">B</text>
    <text x="178" y="100">C</text><text x="118" y="92">D</text>
    <text x="24" y="18">P</text><text x="215" y="148">V</text>
    <text x="70" y="30" font-size="8">T₂</text><text x="150" y="82" font-size="8">T₁</text>
  </g>
</svg>

Le quattro trasformazioni:

1. **Isoterma a $T_2$** ($A \to B$): $\Delta U = 0$, assorbe $Q_{AB} = nRT_2\ln\dfrac{V_B}{V_A} = L_{AB} > 0$.
2. **Adiabatica** ($B \to C$): $Q = 0$, il gas si espande e si raffredda da $T_2$ a $T_1$ ($TV^{\gamma-1} = \text{cost}$).
3. **Isoterma a $T_1$** ($C \to D$): cede $Q_{CD} = nRT_1\ln\dfrac{V_D}{V_C} = L_{CD} < 0$.
4. **Adiabatica** ($D \to A$): $Q = 0$, il gas si comprime e si riscalda da $T_1$ a $T_2$.

Il calore è scambiato solo nelle due isoterme, quindi $Q_{ass} = Q_{AB}$ e $Q_{ced} = Q_{CD}$. Il rendimento è

$$\eta = 1 + \frac{Q_{CD}}{Q_{AB}} = 1 + \frac{nRT_1\ln(V_D/V_C)}{nRT_2\ln(V_B/V_A)}$$

> [!tip] Il rendimento di Carnot
> Usando le relazioni delle due adiabatiche si dimostra che $\dfrac{V_B}{V_A} = \dfrac{V_C}{V_D}$, quindi i logaritmi si semplificano e il rendimento si riduce alla forma celebre:
> $$\eta_{Carnot} = 1 - \frac{T_1}{T_2}$$
> Dipende **solo** dalle due temperature (in kelvin), non dal gas usato. È il **massimo** rendimento possibile per una macchina che opera tra $T_1$ e $T_2$: nessuna macchina reale può fare meglio. Più ampio è il salto di temperatura, maggiore il rendimento.

---

## Riepilogo

- **Indice adiabatico:** $\gamma = C_P/C_V > 1$.
- **Adiabatica** ($Q = 0$): $TV^{\gamma-1} = \text{cost}$, $PV^\gamma = \text{cost}$; lavoro $L = nC_V(T_A - T_B)$. Espandendo, il gas si raffredda.
- **Isoterma** ($\Delta U = 0$): $Q = L = nRT\ln(V_B/V_A)$.
- **Quattro trasformazioni:** $\Delta U = nC_V\Delta T$ sempre; $Q$ dal primo principio se non isocora/isobara.
- **Cicli:** $\Delta U = 0 \Rightarrow Q = L$. Macchina termica (orario, $L > 0$) o frigorifera (antiorario, $L < 0$).
- **Rendimento:** $\eta = 1 - \dfrac{|Q_{ced}|}{Q_{ass}} < 1$ (parte del calore va sempre ceduta).
- **Ciclo di Carnot:** due isoterme + due adiabatiche; rendimento massimo $\eta = 1 - \dfrac{T_1}{T_2}$, dipendente solo dalle temperature.

> [!question] Per fissare le idee
> 1. Perché un gas che si espande adiabaticamente si raffredda?
> 2. Perché in una trasformazione isoterma tutto il calore assorbito si trasforma in lavoro?
> 3. Perché nessuna macchina termica può avere rendimento $\eta = 1$? Cosa lo impedisce?

---

📎 Lezione precedente: [[il-primo-principio-della-termodinamica]]
