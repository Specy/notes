---
title: "Forza peso, reazione vincolare e attrito"
description: "La forza peso e il newton, la reazione vincolare normale, il peso apparente in ascensore e le forze di attrito statico e dinamico."
type: lecture
lezione: 5
topics:
  - forza peso
  - newton come unità di forza
  - reazione vincolare normale
  - peso apparente in ascensore
  - attrito statico e dinamico
---

# Lezione 5: Forza peso, reazione vincolare e attrito



> [!abstract] In questa lezione
> - La **forza peso** $P = mg$ e l'unità di forza, il **newton**
> - La **reazione vincolare normale** $N$
> - Il **peso apparente** in ascensore: $N = m(g \pm a)$
> - La **forza d'attrito**: statico ($F_{as} \le \mu_s N$) e dinamico ($F_{ad} = \mu_d N$)

---

## 1. La forza peso

Come visto in [[terzo-principio-della-dinamica-e-gravitazione-universale]], tutti i corpi che si muovono vicino alla superficie terrestre si possono trattare come soggetti a una **accelerazione costante**, l'accelerazione di gravità:

$$g = 9{,}81\ \frac{\text{m}}{\text{s}^2} \approx 10\ \frac{\text{m}}{\text{s}^2}$$

Questo valore viene dalla legge di gravitazione $F = G\dfrac{m_1 m_2}{r^2}$ applicata alla Terra: raccogliendo i fattori costanti (massa e raggio terrestri, più $G$) si ottiene proprio $g$.

> [!note] Le unità di $G$
> Dalla formula $F = G\dfrac{m_1 m_2}{r^2}$ si ricava che $G$ ha unità
> $$[G] = \frac{\text{N}\cdot\text{m}^2}{\text{kg}^2} = \frac{\text{m}^3}{\text{kg}\cdot\text{s}^2}$$
> (la seconda forma si ottiene sostituendo $\text{N} = \text{kg}\cdot\text{m}/\text{s}^2$, che vedremo tra poco).

La forza con cui la Terra attrae un corpo di massa $m$ si chiama **forza peso**:

$$\boxed{\;P = m\,g\;}$$

È sempre diretta verso il basso. Poiché $g$ è la stessa per tutti, una piuma e una cassa da $10\ \text{kg}$ subiscono la stessa accelerazione $g$ (cadono insieme, in assenza d'aria), ma hanno **peso** diverso, perché il peso dipende dalla massa.

> [!tip] Massa e peso non sono la stessa cosa
> La **massa** $m$ (in kg) misura la quantità di materia e l'inerzia del corpo: è la stessa ovunque. Il **peso** $P$ (in newton) è una forza, e dipende da dove ci si trova: sulla Luna, dove $g$ è circa un sesto, la stessa massa pesa sei volte di meno. Confondere kg e newton è uno degli errori più frequenti.

### 1.1 Il newton

L'unità di misura della forza nel SI è il **newton** (N). Dalla relazione $F = ma$ (o $P = mg$):

$$[F] = [M]\,\frac{[L]}{[T]^2} \qquad\Longrightarrow\qquad \boxed{\;1\ \text{N} = 1\ \text{kg}\cdot\frac{\text{m}}{\text{s}^2}\;}$$

Un newton è la forza che imprime a una massa di $1\ \text{kg}$ un'accelerazione di $1\ \text{m/s}^2$.

---

## 2. La reazione vincolare normale

Un corpo appoggiato a un tavolo non cade: la forza peso lo tira verso il basso, ma qualcosa la bilancia. Quel qualcosa è la **reazione vincolare**.

> Un **vincolo** è un qualsiasi corpo che limita il movimento nello spazio (un tavolo, un pavimento, una parete). La **reazione vincolare** è la forza che il vincolo esercita sul corpo, come contrapposizione all'azione che il corpo esercita su di esso.

La componente perpendicolare alla superficie del vincolo si chiama **reazione vincolare normale** $N$ ("normale" significa proprio perpendicolare):

<svg viewBox="0 0 260 180" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Corpo appoggiato su un vincolo: reazione normale N verso l'alto e peso P verso il basso">
  <!-- superficie del vincolo -->
  <line x1="40" y1="100" x2="220" y2="100" stroke="currentColor" stroke-width="2"/>
  <g stroke="currentColor" stroke-width="1">
    <line x1="50" y1="100" x2="42" y2="110"/>
    <line x1="70" y1="100" x2="62" y2="110"/>
    <line x1="90" y1="100" x2="82" y2="110"/>
    <line x1="110" y1="100" x2="102" y2="110"/>
    <line x1="130" y1="100" x2="122" y2="110"/>
    <line x1="150" y1="100" x2="142" y2="110"/>
    <line x1="170" y1="100" x2="162" y2="110"/>
    <line x1="190" y1="100" x2="182" y2="110"/>
  </g>
  <circle cx="130" cy="100" r="4" fill="currentColor"/>
  <!-- N verso l'alto -->
  <line x1="130" y1="100" x2="130" y2="40" stroke="currentColor" stroke-width="2"/>
  <polygon points="130,40 125,52 135,52" fill="currentColor"/>
  <!-- P verso il basso -->
  <line x1="130" y1="100" x2="130" y2="160" stroke="currentColor" stroke-width="2"/>
  <polygon points="130,160 125,148 135,148" fill="currentColor"/>
  <g fill="currentColor" font-size="14" font-family="serif">
    <text x="138" y="45">N</text>
    <text x="138" y="158">P = mg</text>
    <text x="195" y="115" font-size="11">vincolo</text>
  </g>
</svg>

Per un corpo fermo su un piano orizzontale, le due forze si bilanciano: dal secondo principio lungo la verticale, con accelerazione nulla, si ha $N - mg = 0$, cioè $N = mg$. Ma attenzione: questo è vero solo in questa situazione. La reazione normale **non è sempre uguale al peso**, come mostra subito l'esempio dell'ascensore.

---

## 3. L'ascensore: il peso apparente

Consideriamo una persona di massa $m$ dentro un ascensore. Sulla persona agiscono due forze: il peso $P = mg$ verso il basso e la reazione normale $N$ del pavimento verso l'alto. Il valore di $N$ è ciò che una bilancia sotto i piedi misurerebbe, cioè il **peso apparente**.

Scegliamo un asse $z$ verticale verso l'alto e applichiamo il secondo principio alla persona. La somma delle forze è uguale a $ma$:

$$\sum_i F_i = m\,a \quad\Longrightarrow\quad N - P = m\,a \quad\Longrightarrow\quad N - mg = m\,a$$

da cui

$$\boxed{\;N = mg + ma = m(g + a)\;}$$

dove $a$ è l'accelerazione dell'ascensore (con segno: positiva verso l'alto). Analizziamo i tre casi:

<svg viewBox="0 0 420 200" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Tre casi dell'ascensore: fermo, in salita accelerata, in discesa accelerata">
  <g stroke="currentColor" fill="none" stroke-width="1.5">
    <rect x="40" y="50" width="70" height="100"/>
    <rect x="175" y="50" width="70" height="100"/>
    <rect x="310" y="50" width="70" height="100"/>
  </g>
  <g fill="currentColor"><circle cx="75" cy="100" r="4"/><circle cx="210" cy="100" r="4"/><circle cx="345" cy="100" r="4"/></g>
  <!-- caso fermo -->
  <line x1="75" y1="100" x2="75" y2="65" stroke="currentColor" stroke-width="2"/><polygon points="75,65 71,74 79,74" fill="currentColor"/>
  <line x1="75" y1="100" x2="75" y2="135" stroke="currentColor" stroke-width="2"/><polygon points="75,135 71,126 79,126" fill="currentColor"/>
  <!-- salita -->
  <line x1="210" y1="100" x2="210" y2="60" stroke="currentColor" stroke-width="2"/><polygon points="210,60 206,69 214,69" fill="currentColor"/>
  <line x1="210" y1="100" x2="210" y2="135" stroke="currentColor" stroke-width="2"/><polygon points="210,135 206,126 214,126" fill="currentColor"/>
  <line x1="255" y1="110" x2="255" y2="70" stroke="currentColor" stroke-width="1.5"/><polygon points="255,70 251,79 259,79" fill="currentColor"/>
  <!-- discesa -->
  <line x1="345" y1="100" x2="345" y2="70" stroke="currentColor" stroke-width="2"/><polygon points="345,70 341,79 349,79" fill="currentColor"/>
  <line x1="345" y1="100" x2="345" y2="135" stroke="currentColor" stroke-width="2"/><polygon points="345,135 341,126 349,126" fill="currentColor"/>
  <line x1="390" y1="70" x2="390" y2="110" stroke="currentColor" stroke-width="1.5"/><polygon points="390,110 386,101 394,101" fill="currentColor"/>
  <g fill="currentColor" font-size="11" font-family="serif" text-anchor="middle">
    <text x="75" y="175">fermo (a=0)</text>
    <text x="210" y="175">salita (a&gt;0)</text>
    <text x="345" y="175">discesa (a&lt;0)</text>
    <text x="88" y="65">N</text><text x="88" y="138">P</text>
    <text x="223" y="62">N'</text><text x="265" y="78">a</text>
    <text x="358" y="68">N''</text><text x="400" y="95">a</text>
  </g>
</svg>

| Situazione | Accelerazione | Reazione normale | Peso apparente |
|---|:---:|:---:|---|
| Ascensore **fermo** o a velocità costante | $a = 0$ | $N = mg$ | uguale al peso reale |
| In **salita** accelerata | $a > 0$ | $N' = m(g+a) > mg$ | ci si sente più pesanti |
| In **discesa** accelerata | $a < 0$ | $N'' = m(g-a) < mg$ | ci si sente più leggeri |

> [!example] La sensazione nello stomaco
> Quando un ascensore parte verso l'alto, il pavimento spinge più forte sui piedi ($N > mg$): è la sensazione di "schiacciamento". Quando parte verso il basso, la spinta diminuisce ($N < mg$) e si sente quel vuoto allo stomaco. In caduta libera ($a = -g$) si avrebbe $N = 0$: assenza di peso apparente, la stessa condizione degli astronauti in orbita.

---

## 4. La forza d'attrito

Finora le superfici erano lisce. In realtà, quando un corpo si muove (o tende a muoversi) in contatto con la superficie di un vincolo, in direzione **parallela** a questa, risente di una reazione vincolare diretta in verso **opposto al moto**: la chiamiamo **forza d'attrito**.

<svg viewBox="0 0 300 150" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Blocco su un piano con forza applicata, attrito, peso e reazione normale">
  <line x1="20" y1="100" x2="280" y2="100" stroke="currentColor" stroke-width="2"/>
  <g stroke="currentColor" stroke-width="1">
    <line x1="30" y1="100" x2="22" y2="110"/><line x1="55" y1="100" x2="47" y2="110"/><line x1="80" y1="100" x2="72" y2="110"/><line x1="105" y1="100" x2="97" y2="110"/><line x1="130" y1="100" x2="122" y2="110"/><line x1="155" y1="100" x2="147" y2="110"/><line x1="180" y1="100" x2="172" y2="110"/><line x1="205" y1="100" x2="197" y2="110"/><line x1="230" y1="100" x2="222" y2="110"/>
  </g>
  <rect x="120" y="78" width="40" height="22" fill="none" stroke="currentColor" stroke-width="1.5"/>
  <circle cx="140" cy="100" r="3" fill="currentColor"/>
  <!-- F applicata verso destra -->
  <line x1="160" y1="89" x2="225" y2="89" stroke="currentColor" stroke-width="2"/><polygon points="225,89 215,84 215,94" fill="currentColor"/>
  <!-- attrito verso sinistra -->
  <line x1="120" y1="100" x2="70" y2="100" stroke="currentColor" stroke-width="2"/><polygon points="70,100 80,95 80,105" fill="currentColor"/>
  <!-- N su -->
  <line x1="140" y1="78" x2="140" y2="40" stroke="currentColor" stroke-width="2"/><polygon points="140,40 136,49 144,49" fill="currentColor"/>
  <!-- P giù -->
  <line x1="140" y1="100" x2="140" y2="138" stroke="currentColor" stroke-width="2"/><polygon points="140,138 136,129 144,129" fill="currentColor"/>
  <g fill="currentColor" font-size="13" font-family="serif">
    <text x="228" y="86">F</text>
    <text x="55" y="104">Fₐ</text>
    <text x="146" y="44">N</text>
    <text x="146" y="135">P</text>
    <text x="282" y="104">x</text>
  </g>
</svg>

### 4.1 Attrito statico

Supponiamo di spingere il corpo con una forza $F$ orizzontale **non ancora sufficiente** a metterlo in moto. Il corpo resta fermo: siamo nel **caso statico**. Applichiamo il secondo principio lungo i due assi (accelerazione nulla in entrambi):

$$\text{lungo } z:\quad N - mg = m\,a_z = 0 \;\Longrightarrow\; N = mg$$
$$\text{lungo } x:\quad F - F_a = m\,a = 0 \;\Longrightarrow\; F_a = F$$

L'attrito statico è **una forza che si adatta**: vale esattamente quanto serve per bilanciare la spinta $F$, mantenendo il corpo fermo. Ma non può crescere all'infinito.

### 4.2 Attrito statico massimo

L'attrito statico ha un valore massimo, oltre il quale il corpo si mette in moto:

$$\boxed{\;F_{as,\,max} = \mu_s\,N\;}$$

dove:

- $\mu_s$ è il **coefficiente di attrito statico**;
- $N$ è la reazione vincolare normale.

Due proprietà:

- c'è **proporzionalità lineare** tra la reazione normale $N$ e l'attrito massimo: premere di più il corpo contro la superficie aumenta l'attrito disponibile;
- $\mu_s$ è un numero **adimensionale**, dipendente dai materiali a contatto, di solito compreso tra 0 e 1.

$F_{as,max}$ rappresenta il valore massimo che la forza di attrito statico può assumere reagendo alle altre forze, prima di lasciare che il corpo si metta in moto. Finché la spinta resta sotto questa soglia, il corpo non parte.

> [!example] Quanto spingere per far partire un corpo
> Sia $m = 1\ \text{kg}$ e $\mu_s = 0{,}5$. Il corpo parte quando la spinta supera l'attrito statico massimo:
> $$F > F_{as,\,max} = \mu_s N = \mu_s\,mg = 0{,}5\cdot 1\cdot 10 = 5\ \text{N}$$
> Serve quindi una forza maggiore di $5\ \text{N}$ per metterlo in movimento.

### 4.3 Attrito dinamico

Una volta vinto l'attrito statico massimo, il corpo si muove, ma continua a risentire di un attrito, che chiamiamo **dinamico**:

$$\boxed{\;F_{ad} = \mu_d\,N\;}$$

con $\mu_d$ **coefficiente di attrito dinamico**. A differenza di quello statico, l'attrito dinamico è **costante** (non si adatta): finché il corpo scivola, vale sempre $\mu_d N$. In genere $\mu_d < \mu_s$: serve più forza per far partire un corpo che per tenerlo in movimento.

<svg viewBox="0 0 320 200" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Andamento della forza d'attrito al crescere della forza applicata">
  <line x1="45" y1="160" x2="300" y2="160" stroke="currentColor" stroke-width="1.5"/>
  <line x1="45" y1="160" x2="45" y2="25" stroke="currentColor" stroke-width="1.5"/>
  <polygon points="300,160 290,155 290,165" fill="currentColor"/>
  <polygon points="45,25 40,35 50,35" fill="currentColor"/>
  <!-- tratto statico: Fa = F (retta a 45 gradi) fino al max -->
  <line x1="45" y1="160" x2="160" y2="55" stroke="currentColor" stroke-width="2.5"/>
  <!-- caduta al valore dinamico -->
  <line x1="160" y1="55" x2="160" y2="80" stroke="currentColor" stroke-width="1" stroke-dasharray="3 2"/>
  <!-- tratto dinamico costante -->
  <line x1="160" y1="80" x2="285" y2="80" stroke="currentColor" stroke-width="2.5"/>
  <!-- linee guida -->
  <line x1="45" y1="55" x2="160" y2="55" stroke="currentColor" stroke-width="0.8" stroke-dasharray="3 2" opacity="0.6"/>
  <line x1="45" y1="80" x2="160" y2="80" stroke="currentColor" stroke-width="0.8" stroke-dasharray="3 2" opacity="0.6"/>
  <g fill="currentColor" font-size="12" font-family="serif">
    <text x="250" y="178">F applicata</text>
    <text x="18" y="30">Fₐ</text>
    <text x="0" y="58">μₛN</text>
    <text x="0" y="84">μ_dN</text>
  </g>
  <text x="95" y="100" fill="currentColor" font-size="10" font-style="italic" transform="rotate(-42 95 100)">statico: Fₐ=F</text>
  <text x="220" y="74" fill="currentColor" font-size="10" font-style="italic">dinamico: costante</text>
</svg>

Il grafico riassume tutto: finché si spinge poco, l'attrito statico cresce insieme alla spinta (tratto a 45°), fino al massimo $\mu_s N$. Superata quella soglia il corpo parte e l'attrito scende al valore dinamico costante $\mu_d N$.

> [!example] Accelerazione di un corpo che scivola
> Sia $m = 1\ \text{kg}$, $\mu_s = 0{,}5$, $\mu_d = 0{,}4$, e applichiamo $F = 10\ \text{N}$ (più dei $5\ \text{N}$ necessari, quindi il corpo si muove). Il secondo principio lungo $x$:
> $$F - F_{ad} = m\,a \;\Longrightarrow\; F - \mu_d\,mg = m\,a$$
> $$a = \frac{F}{m} - \mu_d\,g = \frac{10}{1} - 0{,}4\cdot 10 = 10 - 4 = 6\ \frac{\text{m}}{\text{s}^2}$$

---

## Riepilogo

- **Forza peso:** $P = mg$, diretta verso il basso, con $g \approx 9{,}81\ \text{m/s}^2$. Massa (kg) e peso (newton) sono grandezze diverse.
- **Newton:** $1\ \text{N} = 1\ \text{kg}\cdot\text{m}/\text{s}^2$.
- **Reazione vincolare normale** $N$: perpendicolare alla superficie del vincolo. Vale $N = mg$ solo per un corpo fermo su un piano orizzontale.
- **Peso apparente in ascensore:** $N = m(g + a)$. Maggiore del peso in salita accelerata, minore in discesa.
- **Attrito statico:** si adatta alla spinta, fino al massimo $F_{as,max} = \mu_s N$.
- **Attrito dinamico:** costante mentre il corpo scivola, $F_{ad} = \mu_d N$, con $\mu_d < \mu_s$.
- I coefficienti $\mu_s, \mu_d$ sono adimensionali e dipendono dai materiali a contatto.

> [!question] Per fissare le idee
> 1. Perché in caduta libera la bilancia segnerebbe zero pur essendo il peso reale invariato?
> 2. Spingi una cassa con forza crescente e a un certo punto parte di scatto, poi sembra più facile tenerla in moto. Quale proprietà dei coefficienti d'attrito spiega questo "scatto"?
> 3. L'attrito massimo dipende da $N$, non dall'area di contatto. Una gomma larga e una stretta, a parità di peso, danno lo stesso attrito massimo: ti convince? Dove sta l'eventuale trucco nei pneumatici reali?

