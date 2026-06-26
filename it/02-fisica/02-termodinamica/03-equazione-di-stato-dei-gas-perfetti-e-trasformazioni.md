---
title: "Equazione di stato dei gas perfetti e trasformazioni"
description: "La legge di Avogadro e la mole, l'equazione di stato dei gas perfetti PV = nRT, la costante di Boltzmann e le trasformazioni reversibili e irreversibili."
type: lecture
lezione: 17
titolo: Equazione di stato dei gas perfetti e trasformazioni
argomenti:
  - legge di Avogadro
  - mole e numero di Avogadro
  - equazione di stato dei gas perfetti
  - costante di Boltzmann
  - trasformazioni reversibili e irreversibili
  - lavoro e percorso
---

# Lezione 17: Equazione di stato dei gas perfetti

📎 Lezione precedente: [[cambiamenti-di-fase-dilatazione-e-leggi-dei-gas]]

> [!abstract] In questa lezione
> - La **legge di Avogadro** e il concetto di **mole**
> - L'**equazione di stato dei gas perfetti**: $PV = nRT$
> - La forma microscopica con la **costante di Boltzmann**: $PV = N k_B T$
> - Trasformazioni **reversibili** e **irreversibili**, quasi-statiche
> - Il **lavoro dipende dal percorso** nel piano $P$–$V$

---

## 1. La legge di Avogadro e la mole

Alle leggi di Boyle e Gay-Lussac di [[cambiamenti-di-fase-dilatazione-e-leggi-dei-gas]] si aggiunge la **legge di Avogadro**: a parità di pressione e temperatura, volumi uguali di gas diversi contengono lo stesso numero di molecole. In particolare, **una mole** di qualunque gas perfetto, alle condizioni standard ($P_0 = P_{atm}$, $T_0 = 273{,}15\ \text{K}$), occupa lo stesso **volume molare**:

$$V_m = 0{,}02241\ \text{m}^3 = 22{,}41\ \text{litri (per 1 mole)}$$

### 1.1 Mole, numero di Avogadro, massa atomica

Una **mole** è una quantità di sostanza che contiene un numero fissato di particelle, il **numero di Avogadro**:

$$N_A = 6{,}0221\times 10^{23}\ \text{mol}^{-1}$$

Per contare le molecole in una certa massa servono due relazioni equivalenti:

$$n = \frac{M_{tot}}{M_{molare}} = \frac{N_{molecole}}{N_A}$$

dove $M_{molare}$ è la massa di una mole. La massa di una singola molecola è $m_{mol} = m_u\cdot A$, con $A$ il numero di massa atomica e

$$m_u = 1{,}6604\times 10^{-27}\ \text{kg}$$

l'**unità di massa atomica**.

---

## 2. L'equazione di stato dei gas perfetti

Mettiamo insieme le leggi dei gas. Partendo dallo stato di riferimento ($P_0, V_0, T_0$) e usando la legge isobara $V = V_0\,\alpha\,T[\text{K}]$ (con $\alpha = 1/273{,}15$), un passaggio di combinazione delle trasformazioni porta a

$$P\,V = P_0\,V_0\,\alpha\,T$$

Per $n$ moli si ha $V_0 = n\,V_m$, quindi $P V = n\,(P_0 V_m\,\alpha)\,T$. La quantità tra parentesi è una costante universale, la **costante dei gas** $R$:

$$\boxed{\;P\,V = n\,R\,T\;}\qquad R = P_0\,V_m\,\alpha = 8{,}314\ \frac{\text{J}}{\text{mol}\cdot\text{K}}$$

È l'**equazione di stato dei gas perfetti**, una sola relazione che racchiude Boyle, Gay-Lussac e Avogadro: lega le tre variabili di stato $P$, $V$, $T$ in ogni condizione.

> [!tip] Sempre in kelvin
> Nella legge $PV = nRT$ la temperatura va **sempre** espressa in kelvin (è la scala assoluta in cui le leggi dei gas sono proporzionalità). Usare i gradi celsius qui è un errore frequente: $T$ deve essere $T[\text{K}] = T[°\text{C}] + 273{,}15$.

### 2.1 La forma microscopica (Boltzmann)

Scrivendo $n = \dfrac{N_{molecole}}{N_A}$, l'equazione diventa

$$PV = N_{molecole}\,\frac{R}{N_A}\,T = N_{molecole}\,k_B\,T$$

dove $k_B$ è la **costante di Boltzmann**:

$$\boxed{\;PV = N\,k_B\,T\;}\qquad k_B = \frac{R}{N_A} = 1{,}3807\times 10^{-23}\ \frac{\text{J}}{\text{K}}$$

La quantità $k_B T$ ha le dimensioni di un'energia: è (a meno di fattori) l'energia cinetica media di una molecola. Questa forma collega il mondo **macroscopico** ($P$, $V$, $T$) a quello **microscopico** (numero di molecole, loro energia): è il ponte verso la teoria cinetica dei gas.

---

## 3. Esercizi con $PV = nRT$

### 3.1 Quante moli, e che volume a pressione atmosferica (Es. 7 cap. 17, Walker)

> Un gas occupa $V = 0{,}500\ \text{m}^3$ a $P = 880\ \text{kPa}$ e $T = 285\ \text{K}$. Trovare il numero di moli, e il volume che occuperebbe a $P_{atm} = 101\ \text{kPa}$ e $T_{amb} = 303\ \text{K}$.

Numero di moli dall'equazione di stato:

$$n = \frac{PV}{RT} = \frac{880\,000\cdot 0{,}500}{8{,}314\cdot 285} \approx 185\ \text{mol}$$

Volume nelle nuove condizioni (stesse $n$ moli):

$$V_{fin} = \frac{nR\,T_{amb}}{P_{atm}} = \frac{185\cdot 8{,}314\cdot 303}{101\,000} \approx 4{,}62\ \text{m}^3$$

Il gas, portato a pressione atmosferica, si espande di quasi dieci volte: coerente con l'aver ridotto la pressione di un fattore ~9.

### 3.2 Trovare la massa molare (Es. 11 cap. 17)

> Una massa $M = 0{,}460\ \text{g}$ di gas occupa $V_0 = 515\ \text{cm}^3 = 515\times 10^{-6}\ \text{m}^3$ a $P_0 = 153\ \text{kPa}$ e $T_0 = 322\ \text{K}$. Trovare la massa molare $A$.

Numero di moli:

$$n = \frac{P_0 V_0}{R T_0} = \frac{153\,000\cdot 515\times 10^{-6}}{8{,}314\cdot 322} \approx 0{,}03\ \text{mol}$$

Massa molare da $n = M/A$:

$$A = \frac{M}{n} = \frac{0{,}460}{0{,}03} \approx 15{,}3\ \frac{\text{g}}{\text{mol}}$$

(compatibile con l'ossigeno atomico, $A \approx 16$).

---

## 4. Trasformazioni reversibili e irreversibili

Una **trasformazione termodinamica** porta il sistema da uno stato $A$ a uno stato $B$. Il modo in cui ci arriva conta.

- **Quasi-statica**: avviene così lentamente che il sistema è (praticamente) all'equilibrio in ogni istante. Ogni stato intermedio è ben definito, e si può rappresentare come una **curva continua** nel piano $P$–$V$.
- **Reversibile**: una trasformazione quasi-statica e senza dissipazioni (attrito, turbolenze), che può essere percorsa all'indietro ripassando per gli stessi stati.
- **Irreversibile**: avviene velocemente o con dissipazioni; gli stati intermedi non sono di equilibrio (la pressione non è nemmeno uniforme), e si rappresenta solo con una linea tratteggiata "ideale" tra $A$ e $B$.

<svg viewBox="0 0 260 160" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Nel piano P-V una trasformazione reversibile è una curva continua, una irreversibile è tratteggiata">
  <line x1="35" y1="135" x2="245" y2="135" stroke="currentColor" stroke-width="1.3"/>
  <polygon points="245,135 236,131 236,139" fill="currentColor"/>
  <line x1="35" y1="135" x2="35" y2="20" stroke="currentColor" stroke-width="1.3"/>
  <polygon points="35,20 31,29 39,29" fill="currentColor"/>
  <circle cx="60" cy="115" r="3" fill="currentColor"/>
  <circle cx="200" cy="45" r="3" fill="currentColor"/>
  <!-- reversibile -->
  <path d="M 60 115 Q 110 110 200 45" fill="none" stroke="currentColor" stroke-width="2"/>
  <!-- irreversibile -->
  <path d="M 60 115 L 90 80 L 110 100 L 140 60 L 170 85 L 200 45" fill="none" stroke="currentColor" stroke-width="1.3" stroke-dasharray="4 3"/>
  <g fill="currentColor" font-size="11" font-family="serif">
    <text x="48" y="120">A</text><text x="205" y="44">B</text>
    <text x="120" y="118" font-size="9">reversibile</text>
    <text x="95" y="55" font-size="9">irreversibile</text>
    <text x="24" y="24">P</text><text x="240" y="148">V</text>
  </g>
</svg>

> [!note] Perché la distinzione conta
> Solo le trasformazioni **reversibili** hanno una curva $P(V)$ ben definita, e quindi un lavoro $L = \int P\,dV$ calcolabile come area. Le irreversibili, no: per esse il lavoro si calcola con la pressione **esterna**. La reversibilità è un'idealizzazione (come il punto materiale o il gas perfetto), ma è la base per definire le grandezze in modo pulito.

---

## 5. Il lavoro dipende dal percorso

Per una trasformazione reversibile il lavoro è $L_{AB} = \displaystyle\int_A^B P(V)\,dV$, cioè l'area sotto la curva (vedi [[cambiamenti-di-fase-dilatazione-e-leggi-dei-gas]]). Per una trasformazione **irreversibile** a pressione esterna costante (per esempio un'espansione contro l'atmosfera):

$$L_{AB}^{irr} = P_{amb}\,(V_B - V_A)$$

Il punto cruciale: il lavoro **dipende dal cammino** seguito da $A$ a $B$, non solo dagli stati estremi. Lo si vede confrontando tre percorsi diversi tra gli stessi $A$ e $B$ (esercizio):

<svg viewBox="0 0 220 170" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Tre percorsi diversi tra A e B nel piano P-V danno lavori diversi">
  <line x1="40" y1="140" x2="210" y2="140" stroke="currentColor" stroke-width="1.3"/>
  <polygon points="210,140 201,136 201,144" fill="currentColor"/>
  <line x1="40" y1="140" x2="40" y2="20" stroke="currentColor" stroke-width="1.3"/>
  <polygon points="40,20 36,29 44,29" fill="currentColor"/>
  <!-- A in basso a sx, B in alto a dx -->
  <circle cx="70" cy="115" r="3" fill="currentColor"/>
  <circle cx="170" cy="45" r="3" fill="currentColor"/>
  <!-- percorso 1: su poi destra (P_B alto) -->
  <polyline points="70,115 70,45 170,45" fill="none" stroke="currentColor" stroke-width="1.5"/>
  <!-- percorso 3: destra poi su (P_A basso) -->
  <polyline points="70,115 170,115 170,45" fill="none" stroke="currentColor" stroke-width="1.5" stroke-dasharray="3 2"/>
  <!-- percorso 2: diagonale -->
  <line x1="70" y1="115" x2="170" y2="45" stroke="currentColor" stroke-width="1.5"/>
  <g fill="currentColor" font-size="11" font-family="serif">
    <text x="58" y="120">A</text><text x="174" y="44">B</text>
    <text x="24" y="24">P</text><text x="205" y="153">V</text>
  </g>
</svg>

Con $A = (P_A, V_A)$ e $B = (P_B, V_B)$ e $P_B > P_A$, $V_B > V_A$:

$$L_1 = P_B\,(V_B - V_A) \quad(\text{prima espande ad alta }P)$$
$$L_3 = P_A\,(V_B - V_A) \quad(\text{prima espande a bassa }P)$$
$$L_2 = L_3 + \frac{1}{2}(V_B - V_A)(P_B - P_A) \quad(\text{percorso diagonale})$$

Tre cammini, tre lavori diversi tra gli stessi stati. Il lavoro **non è una variabile di stato**: dipende da come si va, non solo da dove si parte e si arriva. Lo stesso vale per il calore. Questa è la premessa del **primo principio della termodinamica**, prossimo argomento.

---

## Riepilogo

- **Legge di Avogadro:** una mole di gas perfetto occupa $V_m = 22{,}41\ \text{L}$ a condizioni standard; $N_A = 6{,}022\times 10^{23}\ \text{mol}^{-1}$.
- **Mole:** $n = \dfrac{M_{tot}}{M_{molare}} = \dfrac{N_{molecole}}{N_A}$.
- **Equazione di stato:** $PV = nRT$, con $R = 8{,}314\ \text{J}/(\text{mol·K})$. La $T$ va sempre in **kelvin**.
- **Forma microscopica:** $PV = N k_B T$, con $k_B = R/N_A = 1{,}38\times 10^{-23}\ \text{J/K}$.
- **Trasformazioni:** quasi-statiche / reversibili (curva continua in $P$–$V$) vs irreversibili (solo stati estremi definiti).
- **Lavoro:** $L = \int P\,dV$ (reversibile, area) o $L = P_{est}\,\Delta V$ (irreversibile). **Dipende dal percorso**, non è variabile di stato.

> [!question] Per fissare le idee
> 1. Perché nell'equazione $PV = nRT$ la temperatura deve essere in kelvin e non in celsius?
> 2. Cosa rappresenta fisicamente la quantità $k_B T$?
> 3. Perché il lavoro di un gas non è una variabile di stato, mentre $P$, $V$, $T$ lo sono?

---

📎 Lezione precedente: [[cambiamenti-di-fase-dilatazione-e-leggi-dei-gas]] · Prossima lezione: [[il-primo-principio-della-termodinamica]]
