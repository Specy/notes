---
title: "Introduzione alla termodinamica, temperatura e calore"
description: "Sistema termodinamico e variabili di stato, il principio zero e la temperatura, la pressione con la legge di Stevino e il calore con la calorimetria."
type: lecture
lezione: 15
topics:
  - sistema termodinamico
  - variabili di stato
  - principio zero
  - temperatura e termometri
  - pressione e legge di Stevino
  - calore e calore specifico
  - calorimetria
---



> [!abstract] In questa lezione
> - Perché serve la **termodinamica**: descrivere sistemi di tantissime particelle
> - **Sistema termodinamico**, ambiente, universo; sistemi aperti, chiusi, isolati
> - **Variabili di stato** ($P, V, T$) ed equilibrio termodinamico
> - Il **principio zero** e la definizione operativa di **temperatura**
> - Le scale di temperatura (kelvin, celsius, fahrenheit)
> - La **pressione** e la legge di Stevino
> - Il **calore**, il calore specifico e la **calorimetria**

---

## 1. Perché la termodinamica

Con la meccanica sappiamo descrivere il moto di un corpo con $\vec F = m\vec a$. Ma un gas in un recipiente contiene un numero enorme di molecole (dell'ordine di $N_A \sim 10^{23}$): è impensabile scrivere e risolvere un'equazione del moto per ciascuna.

La **termodinamica** cambia strategia: rinuncia a seguire le singole particelle e descrive il sistema con poche grandezze **macroscopiche** (temperatura, pressione, volume), che riassumono il comportamento collettivo di miliardi di miliardi di molecole. Compare anche una nuova forma di energia, il **calore**, legato proprio all'agitazione microscopica.

---

## 2. Il sistema termodinamico

Per studiare un fenomeno dividiamo l'universo in tre parti:

- il **sistema**: la porzione che studiamo (per esempio il gas nel recipiente);
- l'**ambiente**: tutto ciò che lo circonda e con cui può interagire;
- l'**universo termodinamico**: sistema + ambiente insieme.

<svg viewBox="0 0 280 150" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Sistema termodinamico dentro l'ambiente, insieme formano l'universo termodinamico">
  <ellipse cx="140" cy="75" rx="120" ry="60" fill="none" stroke="currentColor" stroke-width="1.5"/>
  <path d="M 100 60 Q 130 45 165 58 Q 185 70 170 90 Q 140 105 110 92 Q 90 78 100 60 Z" fill="none" stroke="currentColor" stroke-width="1.5"/>
  <g fill="currentColor" font-size="12" font-family="serif">
    <text x="120" y="78">SISTEMA</text>
    <text x="100" y="35">AMBIENTE</text>
  </g>
</svg>

A seconda di cosa il sistema può scambiare con l'ambiente:

| Tipo di sistema | Scambia materia | Scambia energia |
|---|:---:|:---:|
| **Aperto** | sì | sì |
| **Chiuso** | no | sì |
| **Isolato** | no | no |

### 2.1 Le variabili di stato

Lo stato di un sistema all'equilibrio si descrive con poche grandezze macroscopiche. Le principali:

- **temperatura** $T$, **pressione** $P$, **volume** $V$ (le tre **variabili di stato** fondamentali);
- **massa** $m$, **densità** $\rho = \dfrac{m}{V}$ in $\text{kg/m}^3$;
- **calore** $Q$ (scambiato, non una proprietà dello stato).

> [!note] Grandezze estensive e intensive
> Le grandezze **estensive** dipendono dalla quantità di materia (massa $m$, volume $V$, capacità termica $C$): se raddoppi il sistema, raddoppiano. Le grandezze **intensive** non dipendono dalle dimensioni (temperatura $T$, pressione $P$, densità $\rho$, calore specifico $c_s$): restano uguali. Tagliando a metà una pentola d'acqua bollente, ogni metà ha metà massa (estensiva) ma la stessa temperatura (intensiva).

### 2.2 Equilibrio termodinamico

Un sistema è in **equilibrio termodinamico** quando le sue variabili di stato sono **costanti nel tempo** e uniformi. Questo richiede tre equilibri contemporanei:

- **meccanico**: pressione uniforme (niente spinte sbilanciate);
- **termico**: temperatura uniforme (niente flussi di calore interni);
- **chimico**: composizione stabile (niente reazioni in corso).

---

## 3. Il principio zero e la temperatura

Le tre variabili di stato non sono indipendenti: sono legate da un'**equazione di stato** $f(P, V, T) = 0$, che permette di esprimerne una in funzione delle altre due, per esempio $T(P, V)$.

### 3.1 Il principio zero

> **Principio zero della termodinamica.** Se due sistemi $A$ e $B$ sono ciascuno in equilibrio termico con un terzo sistema $C$, allora sono in equilibrio termico anche tra loro.

$$T_A = T_C \;\text{ e }\; T_B = T_C \;\Longrightarrow\; T_A = T_B$$

Sembra ovvio, ma è proprio ciò che dà senso al concetto di **temperatura**: esiste una grandezza (la temperatura) tale che due corpi in equilibrio termico hanno lo stesso valore. È anche il principio che rende possibile il **termometro**: il sistema $C$ è lo strumento, che messo a contatto con $A$ e con $B$ ne confronta le temperature.

### 3.2 I termometri

Un termometro sfrutta una proprietà fisica $X$ che varia con la temperatura, tramite una **funzione termometrica** $T = \theta(X)$. Esempi:

| Termometro | Proprietà che varia |
|---|---|
| a **liquido** | dilatazione (lunghezza $\Delta L$) |
| a **resistenza** | resistenza elettrica $\Delta R$ |
| a **gas** | pressione $\Delta P$ (a volume costante) |
| **termocoppia** | tensione elettrica $\Delta V$ |

Nel caso più semplice la relazione è lineare, $T = \theta(X) = a\,X$. La costante $a$ si fissa con un punto di riferimento universale, il **punto triplo dell'acqua** (dove coesistono ghiaccio, acqua e vapore), a cui si assegna per definizione

$$T_{pt} = 273{,}16\ \text{K} = a\,X_{pt} \;\Longrightarrow\; a = \frac{273{,}16}{X_{pt}}$$

da cui, per un termometro tarato su quel punto:

$$T = 273{,}16\cdot\frac{X}{X_{pt}}$$

### 3.3 Le scale di temperatura

- **Kelvin** (K): la scala assoluta del SI. Fusione del ghiaccio a $273{,}15\ \text{K}$, ebollizione dell'acqua a $373{,}15\ \text{K}$.
- **Celsius** (°C): stessa "ampiezza" di grado ($1\,°\text{C} = 1\,\text{K}$), ma origine spostata alla fusione del ghiaccio:
$$T[°\text{C}] = T[\text{K}] - 273{,}15$$
- **Fahrenheit** (°F): scala anglosassone, con $0\,°\text{F}$ e $100\,°\text{F}$ definiti storicamente (miscela ghiaccio-sale e temperatura corporea):
$$T[°\text{F}] = \frac{9}{5}\,T[°\text{C}] + 32$$

> [!tip] Differenze di temperatura
> Poiché celsius e kelvin hanno lo stesso passo, una **variazione** di temperatura è identica nelle due scale: $\Delta T[°\text{C}] = \Delta T[\text{K}]$. Negli esercizi sul calore ($Q = mc_s\Delta T$) conviene ricordarlo: per i $\Delta T$ non serve convertire tra °C e K.

---

## 4. La pressione

La **pressione** è la forza esercitata perpendicolarmente su una superficie, per unità di area:

$$P = \frac{F}{S} \qquad [P] = \frac{\text{N}}{\text{m}^2} = \text{Pa (pascal)}$$

### 4.1 La legge di Stevino

In un fluido la pressione aumenta con la profondità, per il peso della colonna di fluido sovrastante. Partendo da $P = \dfrac{F}{S} = \dfrac{mg}{S} = \dfrac{\rho V g}{S} = \dfrac{\rho\,S\,h\,g}{S} = \rho g h$, si ottiene la **legge di Stevino**:

$$\boxed{\;P = P_0 + \rho\,g\,h\;}$$

dove $P_0$ è la pressione in superficie e $h$ la profondità. È il principio dei manometri a U, usati anche nei termometri a gas a volume costante (la pressione del gas segnala la temperatura).

<svg viewBox="0 0 200 130" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Manometro a U: dislivello del liquido misura la pressione">
  <path d="M 50 20 L 50 90 Q 50 110 70 110 L 110 110 Q 130 110 130 90 L 130 40" fill="none" stroke="currentColor" stroke-width="2"/>
  <line x1="50" y1="55" x2="78" y2="55" stroke="currentColor" stroke-width="1" stroke-dasharray="3 2"/>
  <line x1="102" y1="40" x2="130" y2="40" stroke="currentColor" stroke-width="1" stroke-dasharray="3 2"/>
  <line x1="140" y1="40" x2="140" y2="55" stroke="currentColor" stroke-width="1"/>
  <g fill="currentColor" font-size="11" font-family="serif"><text x="144" y="50">h</text></g>
</svg>

---

## 5. Il calore

Mettendo a contatto due corpi a temperatura diversa, l'esperienza dice che il più caldo si raffredda e il più freddo si scalda, finché raggiungono la **stessa** temperatura. Ciò che passa dall'uno all'altro è il **calore** $Q$, una forma di **energia** (si misura in joule):

<svg viewBox="0 0 300 90" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Il calore Q passa dal corpo caldo al corpo freddo">
  <path d="M 30 45 Q 25 20 55 25 Q 80 15 85 40 Q 95 65 65 65 Q 35 70 30 45 Z" fill="none" stroke="currentColor" stroke-width="1.5"/>
  <path d="M 215 45 Q 210 20 240 25 Q 265 15 270 40 Q 280 65 250 65 Q 220 70 215 45 Z" fill="none" stroke="currentColor" stroke-width="1.5"/>
  <line x1="100" y1="45" x2="200" y2="45" stroke="currentColor" stroke-width="2"/><polygon points="200,45 190,40 190,50" fill="currentColor"/>
  <g fill="currentColor" font-size="12" font-family="serif">
    <text x="48" y="48">T_C</text>
    <text x="238" y="48">T_F</text>
    <text x="142" y="38" font-style="italic">Q</text>
  </g>
</svg>

> [!note] Calore e temperatura non sono la stessa cosa
> La **temperatura** è una variabile di stato (misura l'agitazione media delle molecole). Il **calore** è energia **in transito** da un corpo all'altro a causa di una differenza di temperatura: non è una proprietà di un corpo ("contenuto di calore"), ma qualcosa che si scambia, come il lavoro in meccanica.

### 5.1 Calore specifico e capacità termica

Per scaldare un corpo di un piccolo $dT$ serve una quantità di calore proporzionale alla massa e alla variazione di temperatura:

$$dQ = m\,c_s\,dT = C\,dT$$

dove:

- $c_s$ è il **calore specifico** (in $\text{J}/(\text{kg}\cdot\text{K})$): proprietà **intensiva** del materiale, dice quanto è "difficile" scaldarlo;
- $C = m\,c_s$ è la **capacità termica** (in $\text{J}/\text{K}$): proprietà **estensiva** dell'oggetto specifico.

Per una variazione finita (con $c_s$ circa costante):

$$Q = m\int c_s\,dT \approx m\,c_s\,\Delta T = C\,\Delta T$$

> [!tip] Perché l'acqua "tiene" il calore
> L'acqua ha un calore specifico molto alto ($c_s \approx 4186\ \text{J}/(\text{kg·K})$): serve molta energia per scaldarla, e ne rilascia molta raffreddandosi. È il motivo per cui il mare mitiga il clima delle coste e per cui l'acqua è un ottimo fluido per i radiatori.

### 5.2 Calorimetria: la temperatura di equilibrio

Mettiamo a contatto due corpi $A$ (caldo, $T_C$) e $B$ (freddo, $T_F$), isolati dall'esterno. Il calore ceduto da $A$ è assorbito da $B$, finché raggiungono la temperatura comune $T_e$:

$$Q_{ass}^B = m_B\,c_s^B\,(T_e - T_F) \qquad Q_{ced}^A = m_A\,c_s^A\,(T_e - T_C)$$

Per la conservazione dell'energia, ciò che uno cede l'altro lo assorbe: $Q_{ced}^A = -Q_{ass}^B$. Sostituendo e risolvendo per $T_e$:

$$\boxed{\;T_e = \frac{m_A\,c_s^A\,T_C + m_B\,c_s^B\,T_F}{m_A\,c_s^A + m_B\,c_s^B} = \frac{C_A\,T_C + C_B\,T_F}{C_A + C_B}\;}$$

La temperatura di equilibrio è una **media pesata** delle temperature iniziali, con pesi le capacità termiche: il corpo con capacità termica maggiore "tira" $T_e$ verso la propria temperatura.

---

## 6. Esercizi

### 6.1 Scaldare una lastra di vetro (Es. 29 cap. 16, Walker)

> $m = 55\ \text{g} = 0{,}055\ \text{kg}$ di vetro ($c_v = 628\ \text{J}/(\text{kg·K})$), riscaldato di $\Delta T = 15\,°\text{C}$. Quanto calore serve?

$$Q = m\,c_v\,\Delta T = 0{,}055\cdot 628\cdot 15 \approx 518\ \text{J}$$

(ricordando che $\Delta T[°\text{C}] = \Delta T[\text{K}]$).

### 6.2 Proiettile che si scalda (Es. 31 cap. 16)

> Un proiettile ($m = 5\ \text{g} = 0{,}005\ \text{kg}$, $c_p = 129{,}8\ \text{J}/(\text{kg·K})$) viaggia a $v_i = 250\ \text{m/s}$. Nell'impatto **metà** della sua energia cinetica si trasforma in calore che lo scalda. Di quanto aumenta la temperatura?

Energia cinetica iniziale e calore assorbito:

$$K_i = \frac{1}{2}m\,v_i^2 = \frac{1}{2}\cdot 0{,}005\cdot 250^2 \approx 156\ \text{J} \;\Longrightarrow\; Q_{ass} = \frac{K_i}{2} \approx 78\ \text{J}$$

$$\Delta T = \frac{Q_{ass}}{m\,c_p} = \frac{78}{0{,}005\cdot 129{,}8} \approx 120\ \text{K} = 120\,°\text{C}$$

> [!note] Energia meccanica in calore
> Qui l'energia meccanica **non si conserva**: l'urto la trasforma in calore (è il ruolo delle forze non conservative anticipato all'inizio). È il ponte tra meccanica e termodinamica che il prossimo capitolo (primo principio) formalizzerà.

### 6.3 Quanti oggetti d'argento? (Es. 29 cap. 16, Walker)

> In $m_{H_2O} = 0{,}22\ \text{kg}$ di acqua a $T_{H_2O} = 14\,°\text{C}$ si immergono pezzetti d'argento da $m_p = 10^{-3}\ \text{kg}$ ciascuno ($c_{Ag} = 234\ \text{J}/(\text{kg·K})$) a $T_p = 85\,°\text{C}$. All'equilibrio $T_e = 25\,°\text{C}$. Quanti pezzetti $\#_p$ sono stati immersi?

Calore ceduto dai pezzetti = calore assorbito dall'acqua ($Q_{ced} = -Q_{ass}$):

$$\#_p\,m_p\,c_{Ag}\,(T_p - T_e) = m_{H_2O}\,c_{H_2O}\,(T_e - T_{H_2O})$$

$$\#_p = \frac{m_{H_2O}\,c_{H_2O}\,(T_e - T_{H_2O})}{m_p\,c_{Ag}\,(T_p - T_e)} = \frac{0{,}22\cdot 4186\cdot(25 - 14)}{10^{-3}\cdot 234\cdot(85 - 25)} \approx 721$$

Servono circa **721 pezzetti**: nonostante l'argento sia molto più caldo, il suo basso calore specifico e la piccola massa fanno sì che ne occorrano tantissimi per scaldare l'acqua di soli 11 gradi.

---

## Riepilogo

- La **termodinamica** descrive sistemi di moltissime particelle con grandezze **macroscopiche**.
- **Sistema** (aperto/chiuso/isolato), **ambiente**, **universo**. Variabili di stato: $P, V, T$ (legate da $f(P,V,T)=0$).
- Grandezze **estensive** ($m, V, C$) e **intensive** ($T, P, \rho, c_s$).
- **Principio zero:** $T_A = T_C$ e $T_B = T_C \Rightarrow T_A = T_B$: dà senso alla temperatura e ai termometri.
- **Scale:** $T[°\text{C}] = T[\text{K}] - 273{,}15$; $T[°\text{F}] = \tfrac{9}{5}T[°\text{C}] + 32$; $\Delta T[°\text{C}] = \Delta T[\text{K}]$.
- **Pressione:** $P = F/S$ [Pa]; **Stevino:** $P = P_0 + \rho g h$.
- **Calore:** $Q$ [J], energia in transito. $dQ = m c_s\,dT = C\,dT$, con $C = m c_s$.
- **Calorimetria:** $T_e = \dfrac{C_A T_C + C_B T_F}{C_A + C_B}$ (media pesata sulle capacità termiche).

> [!question] Per fissare le idee
> 1. Perché la temperatura è intensiva mentre la capacità termica è estensiva?
> 2. Due corpi della stessa massa ma di materiali diversi ricevono lo stesso calore: si scaldano uguale? Da cosa dipende?
> 3. Nel problema dei pezzetti d'argento, perché ne servono così tanti pur essendo molto più caldi dell'acqua?

