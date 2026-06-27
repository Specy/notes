---
title: "Potenza, energia spesa e forza elastica"
description: "La potenza e la sua unità (il watt), problemi sull'energia spesa, la forza elastica con la legge di Hooke e il lavoro della molla."
type: lecture
topics:
  - potenza
  - watt e caloria
  - energia spesa
  - forza elastica
  - legge di Hooke
  - lavoro della forza elastica
---



> [!abstract] In questa lezione
> - La **potenza**: $P = \dfrac{dW}{dt} = \vec F\cdot\vec v$, con la sua unità (il watt)
> - Tabella delle **dimensioni** di forza, lavoro e potenza
> - Un problema sull'**energia spesa** (in joule e in kcal)
> - La **forza elastica** e la **legge di Hooke** $F_e = -kx$
> - Il **lavoro della forza elastica** e la compressione massima di una molla

---

## 1. La potenza

Il lavoro misura l'energia trasferita; la **potenza** misura **quanto velocemente** viene trasferita. È il lavoro compiuto nell'unità di tempo:

$$P = \frac{dW}{dt}$$

Poiché $dW = \vec F\cdot d\vec s$, e $\dfrac{d\vec s}{dt} = \vec v$:

$$P = \frac{dW}{dt} = \frac{\vec F\cdot d\vec s}{dt} = \vec F\cdot\vec v$$

$$\boxed{\;P = \vec F\cdot\vec v\;}$$

La potenza istantanea è il prodotto scalare tra forza e velocità: a parità di forza, più si va veloci più potenza serve.

### 1.1 Dimensioni e unità

| Grandezza | Dimensione | Unità SI |
|---|:---:|---|
| **Forza** | $[M]\dfrac{[L]}{[T]^2}$ | $\text{kg}\,\dfrac{\text{m}}{\text{s}^2} = \text{N}$ (newton) |
| **Lavoro** | $[M]\dfrac{[L]^2}{[T]^2}$ | $\text{kg}\,\dfrac{\text{m}^2}{\text{s}^2} = \text{J}$ (joule) |
| **Potenza** | $[M]\dfrac{[L]^2}{[T]^3}$ | $\text{kg}\,\dfrac{\text{m}^2}{\text{s}^3} = \text{W}$ (watt) |

Un **watt** è un joule al secondo: $1\ \text{W} = 1\ \text{J/s}$.

---

## 2. Problema (15/01/2025): energia spesa

> Una persona di massa $m = 90\ \text{kg}$ compie tre attività. **(1)** Bici: $d_1 = 5\ \text{km}$ a $v_1 = 20\ \text{km/h}$. **(2)** A piedi: $d_2 = 1\ \text{km}$ a $v_2 = 4\ \text{km/h}$ salendo di $h = 300\ \text{m}$. **(3)** Arrampicata: $d_3 = 30\ \text{m}$ in verticale, in $t_3 = 15\ \text{min}$. La potenza "di base" del corpo è $P_0 = 100\ \text{W}$; durante la bici si aggiunge $\tfrac{1}{2}P_0$, a piedi $2P_0$, in arrampicata $6P_0$. Quanta energia spende in ciascuna attività?

L'energia spesa è $W = P\cdot t$ (potenza metabolica per tempo), a cui si aggiunge il lavoro contro la gravità $mgh$ quando si sale.

> [!note] Caloria e Caloria alimentare
> $1\ \text{cal} = 4{,}184\ \text{J}$. La "Caloria" delle etichette alimentari è in realtà una **kilocaloria**: $1\ \text{kcal} = 4184\ \text{J}$. Convertire i joule in kcal rende i risultati confrontabili con il cibo.

**(1) Bici.** Potenza $P_1 = P_0 + \tfrac{1}{2}P_0 = \tfrac{3}{2}P_0 = 150\ \text{W}$. Tempo $t_1 = \dfrac{d_1}{v_1} = \dfrac{5}{20} = 0{,}25\ \text{h} = 900\ \text{s}$. Su strada piana non c'è dislivello:

$$W_1 = P_1\,t_1 = 150\cdot 900 = 135\,000\ \text{J} = 135\ \text{kJ} \approx 30\ \text{kcal}$$

**(2) A piedi (in salita).** $P_2 = P_0 + 2P_0 = 3P_0 = 300\ \text{W}$. Tempo $t_2 = \dfrac{d_2}{v_2} = \dfrac{1}{4} = 0{,}25\ \text{h} = 900\ \text{s}$. Qui si sale di $h = 300\ \text{m}$, quindi va aggiunto $mgh$:

$$W_2 = P_2\,t_2 + mgh = 300\cdot 900 + 90\cdot 10\cdot 300 = 270\,000 + 270\,000 = 540\,000\ \text{J} \approx 130\ \text{kcal}$$

**(3) Arrampicata.** $P_3 = P_0 + 6P_0 = 7P_0 = 700\ \text{W}$. Tempo $t_3 = 15\ \text{min} = 900\ \text{s}$. Dislivello $d_3 = 30\ \text{m}$ in verticale:

$$W_3 = P_3\,t_3 + mg\,d_3 = 700\cdot 900 + 90\cdot 10\cdot 30 = 630\,000 + 27\,000 = 657\,000\ \text{J} \approx 160\ \text{kcal}$$

> [!tip] Un'intuizione utile
> Trenta minuti di attività intensa "valgono" un centinaio di kcal: numeri dell'ordine di un piccolo spuntino. È il motivo per cui smaltire calorie con il solo esercizio è molto più lento che assumerle.

### 2.1 Parte 4: discesa a velocità costante

> Dalla quota $y_0 = d_3 + h = 330\ \text{m}$, la persona scende con velocità orizzontale $v_x = 3\ \text{m/s}$ e velocità verticale **costante** $v_y = -0{,}2\ \text{m/s}$ (discesa controllata, per esempio in parapendio). Quanto spazio orizzontale percorre?

Qui entrambi i moti sono **uniformi** (velocità costanti, non c'è caduta libera). Il tempo per arrivare a terra si trova dalla legge verticale $y = y_0 + v_y\,t$, imponendo $y = 0$:

$$t_v = -\frac{y_0}{v_y} = -\frac{330}{-0{,}2} = 1650\ \text{s}$$

e la distanza orizzontale è

$$d = v_x\,t_v = 3\cdot 1650 = 4950\ \text{m} \approx 5\ \text{km}$$

---

## 3. La forza elastica

Una **molla** compressa o allungata reagisce con una forza che tende a riportarla alla forma di riposo. È un caso di **reazione vincolare** che schematizza la forza con cui un oggetto reagisce a una deformazione rispetto alla sua forma a riposo.

> [!note] Linearità per piccole deformazioni
> Entro deformazioni non troppo grandi, questa forza di reazione è **lineare** rispetto alla deformazione: raddoppiando la deformazione raddoppia la forza. È un'approssimazione eccellente per molle, elastici e materiali entro il loro limite elastico.

### 3.1 La legge di Hooke

Sia $l_0$ la **lunghezza a riposo** della molla e $l$ la sua lunghezza deformata. La **deformazione** è

$$x = l - l_0$$

La reazione alla deformazione, la **forza elastica**, è data dalla **legge di Hooke**:

$$\boxed{\;F_e = -k\,x\;}$$

dove:

- $x$ è la **deformazione** (in metri);
- $k$ è la **costante elastica** della molla (in N/m), che misura quanto è "dura";
- il segno **meno** indica che la forza è di **richiamo**: è sempre opposta alla deformazione, cioè punta verso la posizione di riposo.

<svg viewBox="0 0 340 130" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Molla deformata: legge di Hooke, forza elastica opposta alla deformazione">
  <!-- parete -->
  <line x1="30" y1="30" x2="30" y2="100" stroke="currentColor" stroke-width="2"/>
  <g stroke="currentColor" stroke-width="1"><line x1="30" y1="36" x2="22" y2="44"/><line x1="30" y1="52" x2="22" y2="60"/><line x1="30" y1="68" x2="22" y2="76"/><line x1="30" y1="84" x2="22" y2="92"/></g>
  <!-- molla (zigzag) -->
  <polyline points="30,65 45,55 60,75 75,55 90,75 105,55 120,75 135,65" fill="none" stroke="currentColor" stroke-width="1.8"/>
  <!-- blocco deformato (allungato) -->
  <rect x="135" y="50" width="30" height="30" fill="none" stroke="currentColor" stroke-width="1.5"/>
  <!-- posizione di riposo O -->
  <line x1="105" y1="40" x2="105" y2="95" stroke="currentColor" stroke-width="0.8" stroke-dasharray="3 3" opacity="0.7"/>
  <!-- asse x -->
  <line x1="30" y1="115" x2="320" y2="115" stroke="currentColor" stroke-width="1"/>
  <polygon points="320,115 312,111 312,119" fill="currentColor"/>
  <!-- forza elastica (verso riposo, sinistra) -->
  <line x1="150" y1="35" x2="110" y2="35" stroke="currentColor" stroke-width="2"/><polygon points="110,35 120,30 120,40" fill="currentColor"/>
  <g fill="currentColor" font-size="12" font-family="serif">
    <text x="100" y="105">O</text>
    <text x="123" y="33" font-style="italic">F_e</text>
    <text x="140" y="105">x</text>
    <text x="315" y="128">x</text>
  </g>
</svg>

---

## 4. Il lavoro della forza elastica

Calcoliamo il lavoro fatto dalla forza elastica quando la deformazione passa da $x_A$ a $x_B$. Poiché $F_e$ dipende da $x$, integriamo. Su un tratto infinitesimo $dx$ possiamo considerare $F_e$ costante, quindi $dW = F_e\,dx = -kx\,dx$:

$$W_{AB} = \int_A^B F_e\,dx = \int_A^B (-kx)\,dx = -k\left[\frac{x^2}{2}\right]_A^B$$

$$\boxed{\;W_{AB} = \frac{1}{2}k\,x_A^2 - \frac{1}{2}k\,x_B^2\;}$$

> [!note] Energia potenziale elastica
> Come per il peso, il lavoro dipende solo dagli stati iniziale e finale (i valori di deformazione), non da come si è arrivati: anche la forza elastica è **conservativa**. La quantità $\dfrac{1}{2}kx^2$ è l'**energia potenziale elastica**, l'energia immagazzinata in una molla deformata. Una molla compressa o tesa è una riserva di energia, pronta a restituirla.

---

## 5. Problema (3/11/2025): compressione massima di una molla

> Riprendiamo il blocco del [[lavoro-della-forza-peso-piano-inclinato-ed-energia]] che arriva in fondo allo scivolo con $v_C = 4{,}3\ \text{m/s}$ ($m = 1{,}3\ \text{kg}$) e urta una molla di costante $k = 200\ \text{N/m}$. Qual è la compressione massima della molla?

<svg viewBox="0 0 340 110" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Blocco che urta e comprime una molla fino a fermarsi">
  <line x1="20" y1="80" x2="320" y2="80" stroke="currentColor" stroke-width="1.5"/>
  <!-- parete a destra -->
  <line x1="310" y1="40" x2="310" y2="80" stroke="currentColor" stroke-width="2"/>
  <g stroke="currentColor" stroke-width="1"><line x1="310" y1="46" x2="318" y2="42"/><line x1="310" y1="58" x2="318" y2="54"/><line x1="310" y1="70" x2="318" y2="66"/></g>
  <!-- molla -->
  <polyline points="230,60 245,52 260,68 275,52 290,68 305,60" fill="none" stroke="currentColor" stroke-width="1.6"/>
  <!-- blocco con vC -->
  <rect x="190" y="48" width="30" height="26" fill="none" stroke="currentColor" stroke-width="1.5"/>
  <line x1="150" y1="40" x2="185" y2="40" stroke="currentColor" stroke-width="2"/><polygon points="185,40 175,35 175,45" fill="currentColor"/>
  <g fill="currentColor" font-size="12" font-family="serif">
    <text x="155" y="36" font-style="italic">v_C</text>
  </g>
</svg>

Man mano che la molla si schiaccia, la reazione elastica cresce proporzionalmente alla deformazione, finché ferma il blocco. Nel punto di massima compressione $x_{max}$ la velocità è nulla: tutta l'**energia cinetica** del blocco si è trasformata in **energia potenziale elastica** della molla.

$$\frac{1}{2}m\,v_C^2 = \frac{1}{2}k\,x_{max}^2$$

$$x_{max} = \sqrt{\frac{m\,v_C^2}{k}} = \sqrt{\frac{1{,}3\cdot 4{,}3^2}{200}} = \sqrt{\frac{24{,}0}{200}} \approx 0{,}35\ \text{m}$$

> [!tip] Il bilancio energetico in una riga
> "Energia cinetica iniziale = energia potenziale elastica finale" è il cuore del problema. Non serve seguire la decelerazione istante per istante (che non è uniforme, perché la forza cresce con $x$): basta uguagliare le due energie. È lo stesso spirito del teorema dell'energia cinetica, esteso alle forze conservative.

---

## Riepilogo

- **Potenza:** $P = \dfrac{dW}{dt} = \vec F\cdot\vec v$. Unità: **watt** ($1\ \text{W} = 1\ \text{J/s}$).
- **Energia spesa:** $W = P\,t$, più $mgh$ se si sale. Conversione: $1\ \text{kcal} = 4184\ \text{J}$.
- **Forza elastica (legge di Hooke):** $F_e = -kx$, di richiamo verso la posizione di riposo; $k$ in N/m.
- **Lavoro della forza elastica:** $W = \tfrac{1}{2}k\,x_A^2 - \tfrac{1}{2}k\,x_B^2$. La forza elastica è **conservativa**.
- **Energia potenziale elastica:** $U = \tfrac{1}{2}kx^2$, immagazzinata in una molla deformata.
- **Compressione massima:** uguagliando energia cinetica ed elastica, $x_{max} = \sqrt{m\,v^2/k}$.

> [!question] Per fissare le idee
> 1. Perché per raddoppiare la velocità di un'auto a velocità costante (vincendo un attrito costante) serve il doppio della potenza?
> 2. Due molle hanno $k$ diverso. A parità di energia immagazzinata, quale si deforma di più?
> 3. Nel problema della molla, se la velocità d'urto raddoppia, di quanto aumenta la compressione massima?

