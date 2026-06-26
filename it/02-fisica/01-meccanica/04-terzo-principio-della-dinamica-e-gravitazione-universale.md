---
title: "Terzo principio della dinamica e gravitazione universale"
description: "Il principio di azione e reazione e la legge di gravitazione universale, da cui si ricava l'accelerazione di gravità terrestre g."
type: lecture
lezione: 4
topics:
  - principio di azione e reazione
  - legge di gravitazione universale
  - costante G
  - gravità terrestre e g
  - debolezza della gravità tra corpi ordinari
---

# Lezione 4: Azione e reazione e gravitazione universale

📎 Lezione precedente: [[formule-del-moto-uniformemente-accelerato-e-introduzione-alla-dinamica]]

> [!abstract] In questa lezione
> - Il **terzo principio** della dinamica: azione e reazione
> - La **legge di gravitazione universale** $F = G\dfrac{m_A m_B}{r^2}$ e la costante $G$
> - Perché la forza va come $1/r^2$: l'intuizione della superficie della sfera
> - La **gravità terrestre**: da dove viene $g \approx 10\ \text{m/s}^2$ e perché la Terra non accelera in modo apprezzabile verso di noi
> - Quanto è **debole** la gravità tra due corpi ordinari

---

## 1. I tre principi della dinamica

Raccogliamo i tre principi che reggono tutta la meccanica:

1. **Principio di inerzia.** Un corpo isolato mantiene la sua velocità (resta fermo o si muove di moto rettilineo uniforme).
2. **Secondo principio.** $F = m\,a$: la forza è la causa, l'accelerazione l'effetto, la massa la costante di proporzionalità.
3. **Principio di azione e reazione** (la novità di oggi).

### 1.1 Terzo principio: azione e reazione

> **Terzo principio.** Se un corpo esercita una forza su un altro corpo, quest'ultimo esercita sul primo una forza **uguale in modulo e opposta in verso**.

Indicando con $\vec F_{AB}$ la forza che il corpo $A$ esercita su $B$ e con $\vec F_{BA}$ quella che $B$ esercita su $A$:

$$\boxed{\;\vec F_{BA} = -\,\vec F_{AB}\;}$$

<svg viewBox="0 0 360 110" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Azione e reazione: due forze uguali e opposte tra i corpi A e B">
  <circle cx="80" cy="55" r="6" fill="currentColor"/>
  <circle cx="280" cy="55" r="6" fill="currentColor"/>
  <!-- forza su A (verso B) -->
  <line x1="86" y1="55" x2="160" y2="55" stroke="currentColor" stroke-width="2"/>
  <polygon points="160,55 150,50 150,60" fill="currentColor"/>
  <!-- forza su B (verso A) -->
  <line x1="274" y1="55" x2="200" y2="55" stroke="currentColor" stroke-width="2"/>
  <polygon points="200,55 210,50 210,60" fill="currentColor"/>
  <g fill="currentColor" font-size="14" font-family="serif" text-anchor="middle">
    <text x="80" y="85">A</text>
    <text x="280" y="85">B</text>
  </g>
  <g fill="currentColor" font-size="13" font-style="italic" text-anchor="middle">
    <text x="125" y="42">F_BA</text>
    <text x="235" y="42">F_AB</text>
  </g>
</svg>

Due osservazioni che evitano gli errori più comuni:

- Le due forze agiscono su **corpi diversi** (una su $A$, una su $B$). Per questo non si annullano a vicenda: ciascun corpo "sente" solo la forza applicata a sé.
- Le forze sono sempre **in coppia**: non esiste una forza isolata, ma sempre un'interazione reciproca tra due corpi.

---

## 2. La legge di gravitazione universale

La prima forza fondamentale che studiamo è la **gravitazione**. Due corpi di massa $m_A$ e $m_B$, posti a distanza $r$, si attraggono con una forza diretta lungo la loro congiungente, di modulo

$$\boxed{\;F = G\,\frac{m_A\,m_B}{r^2}\;}$$

dove $G$ è la **costante di gravitazione universale**:

$$G = 6{,}67 \times 10^{-11}\ \frac{\text{N}\cdot\text{m}^2}{\text{kg}^2}$$

<svg viewBox="0 0 380 110" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Forza gravitazionale attrattiva tra due masse a distanza r">
  <circle cx="60" cy="55" r="7" fill="currentColor"/>
  <circle cx="320" cy="55" r="10" fill="currentColor"/>
  <!-- distanza r tratteggiata -->
  <line x1="60" y1="55" x2="320" y2="55" stroke="currentColor" stroke-width="0.8" stroke-dasharray="4 3" opacity="0.7"/>
  <!-- forze attrattive -->
  <line x1="80" y1="38" x2="150" y2="38" stroke="currentColor" stroke-width="2"/>
  <polygon points="150,38 140,33 140,43" fill="currentColor"/>
  <line x1="300" y1="38" x2="230" y2="38" stroke="currentColor" stroke-width="2"/>
  <polygon points="230,38 240,33 240,43" fill="currentColor"/>
  <g fill="currentColor" font-size="13" font-family="serif" text-anchor="middle">
    <text x="60" y="85">m_A</text>
    <text x="320" y="85">m_B</text>
    <text x="190" y="72">r</text>
  </g>
</svg>

La forza rispetta il terzo principio: $A$ attira $B$ e $B$ attira $A$ con forze uguali e opposte. È coerente con quanto detto in [[formule-del-moto-uniformemente-accelerato-e-introduzione-alla-dinamica]]: la gravitazione agisce sulle **masse** ed è **solo attrattiva** (per questo a volte si scrive con un segno meno, $\vec F = -G\frac{m_A m_B}{r^2}\hat r$, a indicare che punta sempre verso l'altro corpo).

> [!note] Perché proprio $1/r^2$? L'intuizione della sfera
> Immaginiamo l'influenza gravitazionale di una massa che si propaga in tutte le direzioni, distribuendosi sulla superficie di una sfera centrata sulla massa stessa. La superficie di una sfera di raggio $r$ vale
> $$S = 4\pi r^2$$
> e cresce con il **quadrato** della distanza. La stessa "quantità di influenza" si spalma quindi su una superficie sempre più grande, e la sua intensità per unità di area diminuisce come $1/r^2$. È la stessa ragione per cui la luce di una lampadina si affievolisce con il quadrato della distanza.

---

## 3. La gravità della Terra

Applichiamo la legge a un caso concreto: un corpo vicino alla superficie terrestre. Chiamiamo $A$ la Terra e $B$ il corpo.

<svg viewBox="0 0 320 180" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Terra e corpo vicino alla superficie con forze gravitazionali reciproche">
  <circle cx="110" cy="110" r="60" fill="none" stroke="currentColor" stroke-width="1.8"/>
  <circle cx="110" cy="110" r="3" fill="currentColor"/>
  <!-- corpo B sulla superficie, in alto a destra -->
  <circle cx="160" cy="60" r="5" fill="currentColor"/>
  <!-- forza su Terra (verso B) -->
  <line x1="118" y1="102" x2="140" y2="80" stroke="currentColor" stroke-width="2"/>
  <polygon points="140,80 131,82 138,89" fill="currentColor"/>
  <!-- forza su B (verso centro) -->
  <line x1="155" y1="65" x2="138" y2="82" stroke="currentColor" stroke-width="2"/>
  <polygon points="138,82 147,80 140,73" fill="currentColor"/>
  <g fill="currentColor" font-size="13" font-family="serif">
    <text x="95" y="130">m_A</text>
    <text x="168" y="55">m_B</text>
    <text x="150" y="108">F_BA</text>
    <text x="120" y="70">F_AB</text>
  </g>
</svg>

Con i dati della Terra e di un corpo di $80\ \text{kg}$:

$$m_A = 6\times 10^{24}\ \text{kg}, \qquad r = 6{,}4\times 10^{6}\ \text{m}, \qquad m_B = 80\ \text{kg}$$

la forza vale

$$F = G\,\frac{m_A m_B}{r^2} = 6{,}67\times 10^{-11}\cdot\frac{6\times 10^{24}\cdot 80}{(6{,}4\times 10^{6})^2} \approx \frac{10^{13}}{10^{12}}\cdot 80 = 10\cdot 80 = 800\ \text{N}$$

### 3.1 Da dove viene $g$

Applichiamo ora il secondo principio per trovare l'accelerazione di ciascun corpo. La stessa forza ($800\ \text{N}$) agisce su entrambi, ma le masse sono enormemente diverse.

**Sul corpo $B$:**

$$F = m_B\,a_B \;\Longrightarrow\; a_B = \frac{F}{m_B} = \frac{800}{80} = 10\ \frac{\text{m}}{\text{s}^2}$$

Questa è proprio l'**accelerazione di gravità** $g$ (più precisamente $g \approx 9{,}8\ \text{m/s}^2$): l'accelerazione con cui ogni corpo cade vicino alla superficie terrestre.

> [!tip] Perché tutti i corpi cadono con la stessa accelerazione
> La massa $m_B$ compare due volte: nella forza ($F = G\frac{m_A m_B}{r^2}$, dove fa da "carica gravitazionale") e nel secondo principio ($a = F/m_B$, dove fa da inerzia). Quando dividiamo, $m_B$ **si semplifica**:
> $$a_B = \frac{F}{m_B} = G\,\frac{m_A}{r^2} = g$$
> Il risultato non dipende da $m_B$. Ecco perché una piuma e una palla di piombo, in assenza d'aria, cadono con la stessa accelerazione.

**Sulla Terra $A$:**

$$a_A = \frac{F}{m_A} = \frac{800}{6\times 10^{24}} \approx 1{,}3\times 10^{-22}\ \frac{\text{m}}{\text{s}^2}$$

> [!note] Perché diciamo che "le cose cadono sulla Terra" e non il contrario
> Per il terzo principio il corpo attira la Terra con la stessa forza con cui la Terra attira il corpo. Ma la Terra ha una massa $\sim 10^{23}$ volte maggiore, quindi la sua accelerazione è $\sim 10^{23}$ volte più piccola: praticamente nulla. Entrambi "cadono" l'uno verso l'altro, ma il moto della Terra è del tutto impercettibile. È il secondo principio, non la gravità, a rompere la simmetria.

### 3.2 Caduta libera

Lasciamo cadere il corpo da un'altezza $d = 1\ \text{m}$, da fermo ($v_0 = 0$). Con la legge oraria del moto uniformemente accelerato (e $a_B = g \approx 10\ \text{m/s}^2$), la posizione misurata verso il basso è

$$x_B(t) = -d + \frac{1}{2}a_B\,t^2$$

Il corpo tocca terra all'istante $t_d$ in cui $x_B(t_d) = 0$:

$$0 = -d + \frac{1}{2}a_B\,t_d^2 \;\Longrightarrow\; t_d = \sqrt{\frac{2d}{a_B}} = \sqrt{\frac{2\cdot 1}{10}} = \sqrt{0{,}2} \approx 0{,}4\ \text{s}$$

Un oggetto lasciato cadere da un metro impiega circa mezzo secondo a toccare terra. Nello stesso intervallo la Terra si sposta verso il corpo di una distanza inimmaginabilmente piccola ($\tfrac12 a_A t_d^2 \sim 10^{-23}\ \text{m}$), molto minore delle dimensioni di un atomo.

---

## 4. Quanto è debole la gravità tra corpi ordinari

Ultimo esperimento concettuale: due corpi uguali, lontani dalla Terra (nello spazio, così che agisca solo la loro mutua attrazione).

$$m_A = m_B = 80\ \text{kg}, \qquad d = 100\ \text{m}$$

La forza con cui si attraggono è

$$F = G\,\frac{m_A m_B}{d^2} = 6{,}67\times 10^{-11}\cdot\frac{80\cdot 80}{100^2} = 6{,}67\times 10^{-11}\cdot\frac{6400}{10^4} \approx 4{,}3\times 10^{-11}\ \text{N}$$

e l'accelerazione di ciascuno è

$$a = \frac{F}{m} = \frac{4{,}3\times 10^{-11}}{80} \approx 5\times 10^{-13}\ \frac{\text{m}}{\text{s}^2}$$

un valore ridicolmente piccolo.

### 4.1 Velocità di avvicinamento (metodo senza il tempo)

Per trovare la velocità raggiunta dopo essersi avvicinati, conviene il metodo già usato in [[legge-oraria-moto-uniforme-accelerazione-e-moto-uniformemente-accelerato]] e [[formule-del-moto-uniformemente-accelerato-e-introduzione-alla-dinamica]]: poiché la forza (e quindi l'accelerazione) dipende dalla distanza $x$, non dal tempo, scriviamo $a = v\dfrac{dv}{dx}$ e integriamo. Con $a(x) = G\dfrac{m_B}{x^2}$:

$$\int a(x)\,dx = \int v\,dv = \frac{1}{2}v(x)^2 - \frac{1}{2}\cdot 0^2$$

$$\int \frac{G\,m_B}{x^2}\,dx = -\frac{G\,m_B}{x} = \frac{1}{2}v(x)^2$$

da cui

$$\boxed{\;v(x) = \sqrt{\frac{2\,G\,m_B}{x}}\;}$$

> [!warning] Attenzione ai numeri scritti in aula
> Inserendo i valori, in aula il fattore $10^{-11}$ di $G$ è stato lasciato cadere, ottenendo $v \approx \sqrt{20} \approx 4{,}5\ \text{m/s} \approx 18\ \text{km/h}$. Questo risultato **non è corretto**. Tenendo l'esponente, per esempio a $x = 50\ \text{m}$:
> $$v = \sqrt{\frac{2\cdot 6{,}67\times 10^{-11}\cdot 80}{50}} \approx \sqrt{2{,}1\times 10^{-10}} \approx 1{,}5\times 10^{-5}\ \frac{\text{m}}{\text{s}}$$
> cioè qualche **centesimo di millimetro al secondo**. Due persone a cento metri l'una dall'altra nello spazio impiegherebbero ore solo per avvicinarsi di un metro.

### 4.2 La morale

La gravità è una forza **estremamente debole**. La sentiamo solo perché la Terra ha una massa colossale ($\sim 10^{24}\ \text{kg}$); tra oggetti di tutti i giorni è del tutto trascurabile. Questo spiega perché nella vita quotidiana non vediamo gli oggetti attrarsi spontaneamente, e perché negli esperimenti di laboratorio la gravità tra corpi ordinari è quasi impossibile da misurare.

---

## Riepilogo

- **Terzo principio (azione e reazione):** $\vec F_{BA} = -\vec F_{AB}$. Le due forze sono uguali e opposte, ma agiscono su **corpi diversi**, quindi non si annullano.
- **Gravitazione universale:** $F = G\dfrac{m_A m_B}{r^2}$, con $G = 6{,}67\times 10^{-11}\ \text{N·m}^2/\text{kg}^2$. La dipendenza $1/r^2$ si capisce con la superficie della sfera $4\pi r^2$.
- **Gravità terrestre:** $g = G\dfrac{m_{Terra}}{r^2} \approx 9{,}8\ \text{m/s}^2$. Non dipende dalla massa del corpo che cade, perché questa si semplifica.
- La Terra accelera verso i corpi che cadono, ma in modo **impercettibile** ($\sim 10^{-22}\ \text{m/s}^2$), a causa della sua enorme massa.
- **Caduta libera** da $d = 1\ \text{m}$: $t_d = \sqrt{2d/g} \approx 0{,}4\ \text{s}$.
- La gravità tra corpi ordinari è **debolissima**: due masse da 80 kg a 100 m si attraggono con $\sim 10^{-11}\ \text{N}$.

> [!question] Per fissare le idee
> 1. Se la forza di azione e reazione è uguale e opposta, perché quando spingi un muro non vieni respinto indietro alla stessa velocità con cui spingi?
> 2. Dimostra in generale che l'accelerazione di gravità $g$ non dipende dalla massa del corpo che cade.
> 3. La forza gravitazionale tra Terra e Luna è enorme, eppure la Luna non "cade" sulla Terra. Come si concilia con quanto visto? (Ci torneremo studiando il moto circolare.)

---

📎 Lezione precedente: [[formule-del-moto-uniformemente-accelerato-e-introduzione-alla-dinamica]] · Prossima lezione: [[forza-peso-reazione-vincolare-e-attrito]]
