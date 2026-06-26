---
title: "Esercizi d'esame di termodinamica"
description: "Una raccolta di esercizi d'esame su tutta la termodinamica: espansione libera ed entropia, trasformazioni lineari, cicli completi e calcolo del rendimento."
type: lecture
lezione: 23
topics:
  - entropia ed espansione libera
  - variazione di entropia
  - cicli termodinamici
  - calore e cambiamento di fase
  - rendimento
---

# Lezione 23: Esercizi d'esame di termodinamica

📎 Lezione precedente: [[teorema-di-carnot-disuguaglianza-di-clausius-ed-entropia]]

> [!abstract] In questa lezione
> Una raccolta di **esercizi d'esame** che mette insieme tutta la termodinamica:
> - Espansione libera ed **entropia dell'universo** (Es. 13.5)
> - Trasformazione lineare: $\Delta S$ e calore (09/09/2024)
> - Ciclo con adiabatica, isobara, isoterma (11/06/2024)
> - Ciclo completo: rendimento, $C_V$, $T_D$ e $\Delta S$ (Es. 13.16)

---

## 1. Espansione libera ed entropia (Es. 13.5)

> Due gas in scomparti $A$ ($n_A = 2\ \text{mol}$, $C_V^A = \tfrac{3}{2}R$) e $B$ ($n_B = 1\ \text{mol}$, $C_V^B = \tfrac{5}{2}R$) di un recipiente isolato; $T_0 = 290\ \text{K}$. Calcolare la variazione di entropia dell'universo dopo che il gas si espande liberamente.

Nell'**espansione libera** (recipiente isolato, vedi [[il-primo-principio-della-termodinamica]]) non c'è scambio di calore con l'esterno, quindi $\Delta S_{ambiente} = 0$ e tutta la variazione è del sistema:

$$\Delta S_{universo} = \Delta S_{sistema}$$

Poiché l'entropia è funzione di stato (vedi [[teorema-di-carnot-disuguaglianza-di-clausius-ed-entropia]]), la si calcola lungo un percorso reversibile tra gli stessi stati. Il volume a disposizione di ciascun gas aumenta, e applicando $\Delta S = nC_V\ln\frac{T_f}{T_0} + nR\ln\frac{V_f}{V_0}$ per i due gas si ottiene

$$\Delta S_{universo} \approx 7{,}67\ \text{J/K} > 0$$

Il risultato è **positivo**, come deve essere per un processo irreversibile in un sistema isolato. I gas non torneranno mai spontaneamente nei loro scomparti.

---

## 2. Trasformazione lineare: entropia e calore (09/09/2024)

> $n = 2\ \text{mol}$ di gas ($C_V = \tfrac{5}{2}R$) vanno dallo stato 1 ($P_1 = 2\ \text{atm} \approx 2\times 10^5\ \text{Pa}$, $T_1 = 300\ \text{K}$) allo stato 2 ($P_2 = P_1/2$, $V_2 = 3V_1$) lungo una **retta** nel piano $P$–$V$. Trovare $T_2$, $\Delta S$ e il calore $Q$.

<svg viewBox="0 0 200 150" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Trasformazione lineare dallo stato 1 allo stato 2 nel piano P-V">
  <line x1="35" y1="125" x2="190" y2="125" stroke="currentColor" stroke-width="1.3"/>
  <polygon points="190,125 181,121 181,129" fill="currentColor"/>
  <line x1="35" y1="125" x2="35" y2="15" stroke="currentColor" stroke-width="1.3"/>
  <polygon points="35,15 31,24 39,24" fill="currentColor"/>
  <line x1="60" y1="35" x2="150" y2="95" stroke="currentColor" stroke-width="2"/>
  <circle cx="60" cy="35" r="3" fill="currentColor"/><circle cx="150" cy="95" r="3" fill="currentColor"/>
  <line x1="60" y1="35" x2="35" y2="35" stroke="currentColor" stroke-width="0.7" stroke-dasharray="3 2"/>
  <line x1="150" y1="95" x2="35" y2="95" stroke="currentColor" stroke-width="0.7" stroke-dasharray="3 2"/>
  <line x1="60" y1="35" x2="60" y2="125" stroke="currentColor" stroke-width="0.7" stroke-dasharray="3 2"/>
  <line x1="150" y1="95" x2="150" y2="125" stroke="currentColor" stroke-width="0.7" stroke-dasharray="3 2"/>
  <g fill="currentColor" font-size="10" font-family="serif">
    <text x="52" y="33">1</text><text x="153" y="93">2</text>
    <text x="22" y="38">P₁</text><text x="22" y="98">P₂</text>
    <text x="56" y="138">V₁</text><text x="146" y="138">V₂</text>
  </g>
</svg>

**Temperatura finale.** Dall'equazione di stato, $T_2 = \dfrac{P_2 V_2}{nR} = \dfrac{(P_1/2)(3V_1)}{nR} = \dfrac{3}{2}\dfrac{P_1 V_1}{nR} = \dfrac{3}{2}T_1 = 450\ \text{K}$.

**Variazione di entropia** (funzione di stato, dipende solo da 1 e 2):

$$\Delta S = nC_V\ln\frac{T_2}{T_1} + nR\ln\frac{V_2}{V_1} = 5R\ln\frac{3}{2} + 2R\ln 3 \approx 16{,}8 + 18{,}3 \approx 35{,}1\ \text{J/K}$$

**Calore** dal primo principio $Q = \Delta U + L$, con $L$ = area del trapezio sotto la retta:

$$L = \frac{1}{2}(P_1 + P_2)(V_2 - V_1) = \frac{3}{2}P_1 V_1 \approx 7{,}46\ \text{kJ}$$
$$\Delta U = nC_V(T_2 - T_1) = nC_V\frac{T_1}{2} = \frac{5\,nRT_1}{4} \approx 6{,}23\ \text{kJ}$$
$$Q = \Delta U + L \approx 13{,}7\ \text{kJ}$$

---

## 3. Ciclo con adiabatica (11/06/2024)

> $n = 1\ \text{mol}$ ($C_V = \tfrac{3}{2}R$, $\gamma = \tfrac{5}{3}$). Trasformazione **adiabatica** $A \to B$ con $T_B = 25\,°\text{C} = 298\ \text{K}$, $P_B = 10^5\ \text{Pa}$, $V_B = 0{,}02\ \text{m}^3$, $P_A = 8{,}5\times 10^5\ \text{Pa}$. Trovare $V_A$ e $T_A$.

Sull'adiabatica vale $PV^\gamma = \text{cost}$ (vedi [[trasformazioni-termodinamiche-cicli-e-macchine-termiche]]), da cui

$$V_A = V_B\left(\frac{P_B}{P_A}\right)^{1/\gamma} = 0{,}02\left(\frac{10^5}{8{,}5\times 10^5}\right)^{3/5} \approx 5{,}5\times 10^{-3}\ \text{m}^3$$

$$T_A = \frac{P_A V_A}{nR} \approx 566\ \text{K}$$

Per il ciclo completo (adiabatica + altre trasformazioni), poiché $\Delta U_{ciclo} = 0$, il lavoro netto è $W_{tot} = Q_{tot} = Q_{AB} + Q_{BC} + Q_{CA}$; con $Q_{AB} = 0$ (adiabatica) si ottiene $W_{tot} \approx 170\ \text{J}$.

---

## 4. Ciclo completo: rendimento ed entropia (Es. 13.16)

> $V_A = 39{,}84\times 10^{-3}\ \text{m}^3$, $P_A = 10^5\ \text{Pa}$, $T_A = 300\ \text{K}$, $V_B = V_A/3$, $W_{AB} = -4482\ \text{J}$, $T_C = 600\ \text{K}$. Trovare $C_V$, il rendimento $\eta$, la temperatura $T_D$ e $\Delta S_{CD}$.

**Numero di moli:** $n = \dfrac{P_A V_A}{R T_A} \approx 1{,}6\ \text{mol}$.

Il ciclo combina un'isoterma ($A \to B$, dove $Q_{AB} = W_{AB} = -4482\ \text{J}$ perché $\Delta U = 0$) e due isocore ($B \to C$ e $D \to A$):

$$Q_{BC} = nC_V(T_C - T_A) > 0 \qquad Q_{DA} = nC_V(T_A - T_D) < 0$$

**Calore specifico.** Dal rendimento noto $\eta = 0{,}15 = \dfrac{W_{tot}}{Q_{ass}}$ si ricava $Q_{BC}$, e da $Q_{BC} = nC_V(T_C - T_A)$ si trova

$$C_V \approx \frac{5}{2}R \quad\text{(gas biatomico)}$$

**Temperatura $T_D$** dal bilancio dei calori del ciclo:

$$T_D = -\frac{Q_{DA}}{nC_V} + T_A \approx 420\ \text{K}$$

**Variazione di entropia** sul tratto $C \to D$:

$$\Delta S_{CD} = nC_V\ln\frac{T_D}{T_C} + nR\ln\frac{V_D}{V_C} \approx 2{,}75\ \text{J/K}$$

> [!tip] Lo schema risolutivo che ritorna sempre
> Tutti questi esercizi si affrontano con la stessa cassetta degli attrezzi: equazione di stato $PV = nRT$ per le temperature mancanti; primo principio $Q = \Delta U + L$ con $\Delta U = nC_V\Delta T$; le formule di $L$ e $Q$ per ogni tipo di trasformazione; $\eta = W/Q_{ass}$ per il rendimento; $\Delta S = nC_V\ln\frac{T_B}{T_A} + nR\ln\frac{V_B}{V_A}$ per l'entropia. Riconoscere il **tipo** di ogni trasformazione è il primo passo.

---

## 5. Mappa finale della termodinamica

A chiusura del corso, le relazioni fondamentali da tenere insieme:

| Concetto           | Relazione chiave                                                                                                    | Lezione          |     |     |
| ------------------ | ------------------------------------------------------------------------------------------------------------------- | ---------------- | --- | --- |
| Equazione di stato | $PV = nRT$                                                                                                          | [[equazione-di-stato-dei-gas-perfetti-e-trasformazioni]]          |     |     |
| Primo principio    | $\Delta U = Q - L$, $\Delta U = nC_V\Delta T$                                                                       | [[il-primo-principio-della-termodinamica]]          |     |     |
| Mayer              | $C_P = C_V + R$, $\gamma = C_P/C_V$                                                                                 | [[il-primo-principio-della-termodinamica]]          |     |     |
| Lavoro             | $L = \int P\,dV$ (area in $P$–$V$)                                                                                  | [[cambiamenti-di-fase-dilatazione-e-leggi-dei-gas]]          |     |     |
| Adiabatica         | $PV^\gamma = \text{cost}$                                                                                           | [[trasformazioni-termodinamiche-cicli-e-macchine-termiche]]          |     |     |
| Rendimento         | $\eta = 1 - \dfrac{                                          \mid Q_{ced} \mid }{Q_{ass}} \le 1 - \dfrac{T_1}{T_2}$ | [[trasformazioni-termodinamiche-cicli-e-macchine-termiche]], [[teorema-di-carnot-disuguaglianza-di-clausius-ed-entropia]] |     |     |
| Secondo principio  | $\Delta S_{universo} \ge 0$                                                                                         | [[teorema-di-carnot-disuguaglianza-di-clausius-ed-entropia]]          |     |     |
| Entropia (gas)     | $\Delta S = nC_V\ln\dfrac{T_B}{T_A} + nR\ln\dfrac{V_B}{V_A}$                                                        | [[teorema-di-carnot-disuguaglianza-di-clausius-ed-entropia]]          |     |     |

---

## Riepilogo

- Nell'**espansione libera** di un sistema isolato l'entropia dell'universo **aumenta** ($\Delta S > 0$): processo irreversibile.
- L'**entropia** è funzione di stato: si calcola lungo un percorso reversibile qualunque tra gli stati estremi.
- I **cicli** si risolvono trasformazione per trasformazione, identificandone il tipo; $\Delta U_{ciclo} = 0$ e $W_{tot} = Q_{tot}$.
- Il **rendimento** dato permette di risalire a grandezze incognite (numero di moli, $C_V$, temperature).
- Tutta la termodinamica del corso si regge su poche relazioni: equazione di stato, primo e secondo principio, definizione di entropia.

> [!question] Per fissare le idee
> 1. Perché nell'espansione libera la variazione di entropia dell'ambiente è nulla?
> 2. Come si riconosce, da un rendimento dato, se un gas è monoatomico o biatomico?
> 3. Perché conviene sempre identificare il **tipo** di ogni trasformazione prima di iniziare i conti di un ciclo?

---

📎 Lezione precedente: [[teorema-di-carnot-disuguaglianza-di-clausius-ed-entropia]] · 🎓 Fine del corso
