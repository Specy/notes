---
title: "Il primo principio della termodinamica"
description: "Il primo principio ΔU = Q − L con l'energia interna, le convenzioni dei segni, l'espansione libera di Joule, i calori molari Cv e Cp e la relazione di Mayer."
type: lecture
topics:
  - primo principio
  - energia interna
  - convenzioni dei segni
  - espansione libera di Joule
  - calori molari Cv e Cp
  - relazione di Mayer
---



> [!abstract] In questa lezione
> - Il **primo principio**: $\Delta U = Q - L$, con l'**energia interna** $U$ variabile di stato
> - Le **convenzioni dei segni** per calore e lavoro
> - L'**espansione libera di Joule**: per un gas perfetto $U$ dipende solo da $T$
> - I **calori molari** $C_V$ e $C_P$, e $\Delta U = n C_V \Delta T$
> - La **relazione di Mayer**: $C_P = C_V + R$

---

## 1. Il primo principio

In [[03-equazione-di-stato-dei-gas-perfetti-e-trasformazioni]] abbiamo visto che, andando da uno stato $A$ a uno stato $B$ per percorsi diversi, sia il calore $Q$ sia il lavoro $L$ **cambiano** da percorso a percorso. Sperimentalmente, però, la loro **differenza** $Q - L$ è sempre la stessa, qualunque sia il cammino.

Questo significa che esiste una grandezza che dipende **solo dallo stato** del sistema (non dal percorso): l'**energia interna** $U$. La sua variazione è

$$\boxed{\;\Delta U = U_B - U_A = Q - L\;}\qquad\text{in forma differenziale}\qquad dU = \delta Q - \delta L$$

È il **primo principio della termodinamica**, cioè la **conservazione dell'energia** estesa al calore: l'energia interna di un sistema aumenta per il calore che riceve e diminuisce per il lavoro che compie.

> [!note] Variabili di stato e grandezze di percorso
> $U$, come $P$, $V$, $T$, è una **variabile di stato**: ha un valore ben definito in ogni stato. $Q$ e $L$ invece **non** lo sono: dipendono dal percorso. Per questo si scrivono $\delta Q$ e $\delta L$ (variazioni infinitesime "non esatte") e non $dQ$, $dL$. La combinazione $\delta Q - \delta L = dU$ è invece una variazione di stato.

### 1.1 Convenzioni dei segni

I segni si riferiscono al **sistema**:

<svg viewBox="0 0 280 150" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Convenzioni dei segni del primo principio: calore e lavoro entranti e uscenti dal sistema">
  <rect x="90" y="50" width="100" height="60" fill="none" stroke="currentColor" stroke-width="1.5"/>
  <text x="140" y="85" fill="currentColor" font-size="11" font-family="serif" text-anchor="middle">SISTEMA</text>
  <!-- Q>0 entra -->
  <line x1="40" y1="80" x2="88" y2="80" stroke="currentColor" stroke-width="2"/><polygon points="88,80 78,75 78,85" fill="currentColor"/>
  <text x="55" y="72" fill="currentColor" font-size="10">Q&gt;0</text>
  <!-- Q<0 esce -->
  <line x1="192" y1="80" x2="240" y2="80" stroke="currentColor" stroke-width="2"/><polygon points="240,80 230,75 230,85" fill="currentColor"/>
  <text x="205" y="72" fill="currentColor" font-size="10">Q&lt;0</text>
  <!-- L>0 esce (su) -->
  <line x1="140" y1="48" x2="140" y2="20" stroke="currentColor" stroke-width="2"/><polygon points="140,20 135,30 145,30" fill="currentColor"/>
  <text x="148" y="30" fill="currentColor" font-size="10">L&gt;0</text>
  <!-- L<0 entra (dal basso) -->
  <line x1="140" y1="140" x2="140" y2="112" stroke="currentColor" stroke-width="2"/><polygon points="140,112 135,122 145,122" fill="currentColor"/>
  <text x="148" y="135" fill="currentColor" font-size="10">L&lt;0</text>
</svg>

| Grandezza | Positiva | Negativa |
|---|---|---|
| **Calore** $Q$ | il sistema **assorbe** calore | il sistema **cede** calore |
| **Lavoro** $L$ | il sistema **compie** lavoro (si espande) | si compie lavoro **sul** sistema (si comprime) |

Dal punto di vista dell'**ambiente** i segni sono opposti: ciò che il sistema assorbe, l'ambiente lo cede.

---

## 2. L'espansione libera di Joule

Un esperimento chiave: un recipiente isolato (**adiabatico**, $Q = 0$) è diviso in due, con gas nel volume $V_1$ e vuoto in $V_2$. Si apre un rubinetto e il gas si espande liberamente nel vuoto.

<svg viewBox="0 0 220 120" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Espansione libera di Joule: gas in V1 si espande nel vuoto V2 attraverso un rubinetto">
  <rect x="20" y="30" width="180" height="70" fill="none" stroke="currentColor" stroke-width="1.5"/>
  <line x1="110" y1="30" x2="110" y2="100" stroke="currentColor" stroke-width="1.3"/>
  <circle cx="110" cy="65" r="4" fill="none" stroke="currentColor" stroke-width="1.2"/>
  <g fill="currentColor"><circle cx="45" cy="50" r="1.5"/><circle cx="65" cy="70" r="1.5"/><circle cx="55" cy="85" r="1.5"/><circle cx="80" cy="55" r="1.5"/><circle cx="40" cy="75" r="1.5"/><circle cx="90" cy="80" r="1.5"/></g>
  <g fill="currentColor" font-size="11" font-family="serif">
    <text x="55" y="95">V₁</text>
    <text x="150" y="68">V₂ (vuoto)</text>
    <text x="115" y="25" font-size="9">rubinetto</text>
  </g>
</svg>

Si osserva che la **temperatura non cambia** ($T_A = T_B$). Applichiamo il primo principio:

- $Q = 0$ (recipiente adiabatico);
- $L = 0$ (il gas si espande nel **vuoto**: non spinge contro nulla, quindi non compie lavoro).

$$\Delta U = Q - L = 0 - 0 = 0$$

L'energia interna non cambia. Ma sono cambiati pressione e volume, mentre la temperatura no: l'unica conclusione possibile è che

$$\boxed{\;U = U(T)\;}$$

**per un gas perfetto l'energia interna dipende solo dalla temperatura**, non da $P$ né da $V$. È un risultato fondamentale: l'energia interna di un gas perfetto è semplicemente l'energia cinetica delle sue molecole, che dipende solo da $T$.

---

## 3. I calori molari $C_V$ e $C_P$

Quanto calore serve per scaldare un gas dipende da **come** lo scaldi (a volume o a pressione costante). Si definiscono due calori molari:

$$C_V = \frac{1}{n}\left(\frac{dQ}{dT}\right)_V \;\Rightarrow\; dQ = n\,C_V\,dT \qquad C_P = \frac{1}{n}\left(\frac{dQ}{dT}\right)_P \;\Rightarrow\; dQ = n\,C_P\,dT$$

### 3.1 L'energia interna si calcola sempre con $C_V$

Poiché $U$ dipende solo da $T$, possiamo calcolarne la variazione lungo il percorso che ci fa più comodo: una trasformazione a **volume costante**, dove $L = 0$ e quindi $\Delta U = Q = n C_V \Delta T$. Il risultato vale però **per qualunque** trasformazione tra le stesse temperature:

$$\boxed{\;\Delta U = n\,C_V\,\Delta T\;}$$

anche se il volume cambia. Questa è una delle formule più usate: l'energia interna di un gas perfetto si calcola **sempre** con $C_V$, indipendentemente dalla trasformazione.

---

## 4. La relazione di Mayer

Perché $C_P > C_V$? Scaldando a pressione costante, il gas si **espande** e quindi compie lavoro: parte del calore se ne va in lavoro invece che in energia interna, quindi ne serve di più. Quantifichiamolo.

Dal primo principio $\delta Q = dU + \delta L$. Per una trasformazione a pressione costante, $\delta Q = nC_P\,dT$, $dU = nC_V\,dT$ e $\delta L = P\,dV$:

$$n\,C_P\,dT = n\,C_V\,dT + P\,dV$$

Dall'equazione di stato $PV = nRT$, a pressione costante, $P\,dV = nR\,dT$. Sostituendo:

$$n\,C_P\,dT = n\,C_V\,dT + nR\,dT \;\Longrightarrow\; \boxed{\;C_P = C_V + R\;}$$

è la **relazione di Mayer**. La differenza tra i due calori molari è esattamente la costante dei gas $R$, cioè il "costo" del lavoro di espansione.

### 4.1 Valori per gas monoatomici e biatomici

La teoria cinetica fornisce i valori (in funzione di $R$):

| | Monoatomico | Biatomico |
|---|:---:|:---:|
| $C_V$ | $\tfrac{3}{2}R$ | $\tfrac{5}{2}R$ |
| $C_P$ | $\tfrac{5}{2}R$ | $\tfrac{7}{2}R$ |

(Coerenti con Mayer: $C_P - C_V = R$ in entrambi i casi.) I gas biatomici hanno calori molari maggiori perché le molecole possono immagazzinare energia anche nella rotazione, non solo nella traslazione.

---

## 5. Esercizi

### 5.1 Variazione di energia interna (Es. 1 cap. 18, Walker)

> Un sistema compie un lavoro $L = 6{,}7\ \text{kJ}$ ($L > 0$) e cede calore $Q = -4{,}1\times 10^2\ \text{kJ} = -410\ \text{kJ}$ ($Q < 0$). Trovare $\Delta U$.

$$\Delta U = Q - L = -410 - 6{,}7 \approx -417\ \text{kJ}$$

L'energia interna diminuisce molto: il sistema sia cede calore sia compie lavoro, e per entrambi "paga" con la propria energia interna.

### 5.2 Lavoro da calore ed energia interna (Es. 2 cap. 18, Walker)

> Un gas monoatomico ($n = 1$, $C_V = \tfrac{3}{2}R$) assorbe $Q = 1210\ \text{J}$ scaldandosi da $T_i = 272\ \text{K}$ a $T_f = 276\ \text{K}$. Quanto lavoro compie?

Prima la variazione di energia interna (sempre con $C_V$):

$$\Delta U = n\,C_V\,\Delta T = 1\cdot\frac{3}{2}\cdot 8{,}314\cdot 4 \approx 50\ \text{J}$$

Poi il lavoro dal primo principio:

$$L = Q - \Delta U = 1210 - 50 = 1160\ \text{J}$$

Quasi tutto il calore assorbito è diventato lavoro; solo una piccola parte (50 J) è andata ad aumentare l'energia interna.

### 5.3 Compressione adiabatica (Es. 12.1, Mazzoldi)

> Un gas ($n = 1{,}5\ \text{mol}$, $C_V = \tfrac{3}{2}R$) a $T_1 = 300\ \text{K}$ subisce una compressione **adiabatica** ($Q = 0$) con lavoro $W = -5\ \text{kJ}$ (fatto sul gas). Trovare la temperatura finale $T_2$.

Con $Q = 0$, il primo principio dà $\Delta U = -L$, cioè $n C_V(T_2 - T_1) = -L$:

$$T_2 = -\frac{L}{n\,C_V} + T_1 = -\frac{-5000}{1{,}5\cdot\frac{3}{2}\cdot 8{,}314} + 300 \approx 267 + 300 \approx 567\ \text{K}$$

Comprimere un gas isolato termicamente lo **scalda** (qui da 300 a 567 K): tutto il lavoro fatto sul gas, non potendo uscire come calore, ne aumenta l'energia interna. È il principio del motore diesel, dove la compressione accende il combustibile.

---

## Riepilogo

- **Primo principio:** $\Delta U = Q - L$ (conservazione dell'energia con il calore). $U$ è una **variabile di stato**; $Q$ e $L$ dipendono dal percorso.
- **Segni:** $Q > 0$ calore assorbito, $L > 0$ lavoro compiuto dal sistema.
- **Espansione di Joule:** per un gas perfetto $U = U(T)$ (l'energia interna dipende solo dalla temperatura).
- **Energia interna:** $\Delta U = n\,C_V\,\Delta T$ **sempre** (qualunque trasformazione).
- **Relazione di Mayer:** $C_P = C_V + R$ (a pressione costante parte del calore diventa lavoro).
- Valori: monoatomico $C_V = \tfrac{3}{2}R$, $C_P = \tfrac{5}{2}R$; biatomico $C_V = \tfrac{5}{2}R$, $C_P = \tfrac{7}{2}R$.

> [!question] Per fissare le idee
> 1. Perché $Q$ e $L$ non sono variabili di stato mentre $U$ lo è?
> 2. Perché nell'espansione libera di Joule il lavoro è nullo anche se il gas si espande?
> 3. Perché comprimere rapidamente (adiabaticamente) un gas lo scalda?

