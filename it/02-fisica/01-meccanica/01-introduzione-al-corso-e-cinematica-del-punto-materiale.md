---
title: "Introduzione al corso e cinematica del punto materiale"
description: "Cos'è la fisica, il modello del punto materiale, il sistema di riferimento e il moto unidimensionale, con velocità media e istantanea."
type: lecture
lezione: 1
titolo: Introduzione al corso e cinematica del punto materiale
corso: "Elementi di Fisica: Meccanica e Termodinamica"
docente: Gabriele Curci
libro: "Mazzoldi, Nigro, Voci, Elementi di Fisica: Meccanica e Termodinamica"
argomenti:
  - cos'è la fisica
  - punto materiale
  - sistema di riferimento
  - moto unidimensionale
  - velocità media e istantanea
---

# Lezione 1: Introduzione e cinematica del punto materiale

> [!info] Informazioni dal corso
> **Docente:** Gabriele Curci, DSFC (Dipartimento di Scienze Fisiche e Chimiche)
> **Ufficio:** piano terra, corridoio Fisica dell'Atmosfera, stanza **B.0.038**
> **Libro di testo:** Mazzoldi, Nigro, Voci, *Elementi di Fisica: Meccanica e Termodinamica*

> [!abstract] In questa lezione
> - Cos'è la fisica e come è organizzata (principi, cinematica)
> - Il modello del **punto materiale**
> - Le grandezze fondamentali **spazio** e **tempo**, con unità di misura e dimensioni
> - Il **moto unidimensionale** e il sistema di riferimento
> - La **velocità media** e la **velocità istantanea** (derivata)

---

## 1. Che cos'è la fisica

La fisica è la scienza che studia la natura. Il suo obiettivo è descrivere e prevedere i fenomeni del mondo che ci circonda usando un numero ristretto di **principi**, cioè poche leggi generali, e il linguaggio della matematica.

L'idea di fondo, che ci accompagnerà per tutto il corso, è questa: invece di trattare ogni fenomeno come un caso isolato, cerchiamo leggi generali da cui i casi particolari discendano come conseguenze. Questi sono i **principi** (per esempio i principi della dinamica, che vedremo più avanti), e da essi, con la matematica, deduciamo il comportamento dei sistemi.

Partiamo dalla parte più semplice della meccanica, la **cinematica**.

> [!note] Cinematica e dinamica
> La **cinematica** descrive *come* si muovono i corpi, cioè posizione, velocità e accelerazione, senza chiedersi perché. La **dinamica** (lezioni successive) studia invece le *cause* del moto, cioè le forze. In questa lezione restiamo nella cinematica: descriviamo il moto, rimandando alla dinamica la spiegazione delle sue cause.

---

## 2. Il punto materiale

Il primo modello che introduciamo è il **punto materiale**, un oggetto a cui attribuiamo una **massa** ma di cui trascuriamo le dimensioni, immaginandolo concentrato in un punto di volume nullo.

Da questa scelta seguono tre caratteristiche:

- ha **volume zero**;
- non avendo estensione, non ha un'orientazione nello spazio e **non può ruotare** su sé stesso (trascuriamo la rotazione);
- l'unica grandezza che lo descrive è la sua **posizione**.

Si tratta di un'**idealizzazione**, utile perché semplifica enormemente i conti ogni volta che le dimensioni e la rotazione del corpo non contano per il problema in esame. La sua validità dipende dalle scale in gioco: il modello è adeguato quando le dimensioni dell'oggetto sono molto più piccole del tragitto che percorre.

> [!example] Lo stesso corpo, modelli diversi
> La **Terra** che orbita attorno al Sole si può trattare come un punto materiale: il suo raggio (circa 6000 km) è trascurabile rispetto al raggio dell'orbita (circa 150 milioni di km). La stessa Terra richiede invece un modello esteso se vogliamo studiare l'alternarsi del giorno e della notte, perché in quel caso la rotazione su sé stessa è proprio il fenomeno che ci interessa. Che un corpo sia trattabile come punto materiale dipende quindi dal **problema** che stiamo studiando, prima ancora che dall'oggetto.

La **massa** è la proprietà che il punto materiale conserva. Per ora la possiamo pensare come la quantità di materia dell'oggetto; ne daremo una definizione rigorosa con la dinamica, collegandola all'inerzia, cioè alla resistenza che un corpo oppone a cambiare il proprio stato di moto.

---

## 3. Spazio e tempo: grandezze, unità, dimensioni

Per descrivere il moto ci servono due grandezze fondamentali, lo **spazio** e il **tempo**:

| Grandezza | Unità di misura (SI) | Dimensione |
|-----------|----------------------|:----------:|
| **Spazio** | metro (m) | $[L]$ |
| **Tempo** | secondo (s) | $[T]$ |

Misurare una grandezza significa confrontarla con un campione scelto come riferimento, l'**unità di misura**. Nel Sistema Internazionale (SI) l'unità dello spazio è il **metro** e quella del tempo è il **secondo**.

Le parentesi quadre indicano le **dimensioni** fisiche: $[L]$ sta per lunghezza (*length*) e $[T]$ per tempo (*time*). Le dimensioni ci dicono di che tipo è una grandezza, indipendentemente dall'unità con cui la misuriamo.

> [!tip] Analisi dimensionale
> Le dimensioni si combinano come fattori algebrici. La velocità, per esempio, è uno spazio diviso un tempo, quindi
> $$[v] = \frac{[L]}{[T]} = [L\,T^{-1}]$$
> e si misura in metri al secondo (m/s). Verificare che i due membri di un'equazione abbiano le stesse dimensioni è un controllo rapidissimo: se a sinistra compare una lunghezza e a destra un tempo, l'equazione è certamente sbagliata.

---

## 4. Moto unidimensionale e sistema di riferimento

Cominciamo dal caso più semplice possibile, il **moto unidimensionale**, in cui il punto si muove lungo una retta. In questa situazione per descrivere il moto basta una sola coordinata, perché la posizione è individuata da un unico numero, la coordinata $x$.

Per assegnare questo numero dobbiamo prima fissare un **sistema di riferimento** sulla retta:

<svg viewBox="0 0 420 90" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Asse di riferimento con origine, tacche e verso positivo">
  <line x1="20" y1="45" x2="400" y2="45" stroke="currentColor" stroke-width="2"/>
  <polygon points="400,45 388,40 388,50" fill="currentColor"/>
  <g stroke="currentColor" stroke-width="2">
    <line x1="60" y1="38" x2="60" y2="52"/>
    <line x1="120" y1="38" x2="120" y2="52"/>
    <line x1="180" y1="38" x2="180" y2="52"/>
    <line x1="240" y1="38" x2="240" y2="52"/>
    <line x1="300" y1="38" x2="300" y2="52"/>
  </g>
  <g fill="currentColor" font-size="14" text-anchor="middle" font-family="serif">
    <text x="60" y="70">0</text>
    <text x="120" y="70">1</text>
    <text x="180" y="70">2</text>
    <text x="240" y="70">3</text>
    <text x="300" y="70">4</text>
    <text x="405" y="40">x</text>
  </g>
  <g fill="currentColor" font-size="12" text-anchor="middle" font-style="italic">
    <text x="60" y="22">origine</text>
    <text x="370" y="68">verso</text>
  </g>
</svg>

Servono tre ingredienti:

1. un'**origine** $O$, il punto a cui assegniamo coordinata $x = 0$;
2. un **verso** positivo (la freccia), che stabilisce da che parte cresce $x$;
3. un'**unità di misura** (il metro), che fissa la scala delle tacche.

Scelti questi tre elementi, a ogni istante di tempo $t$ corrisponde una posizione $x$. La **legge oraria** del moto è proprio questa corrispondenza:

$$x = x(t)$$

cioè una funzione che a ogni tempo associa la posizione. Tutta la cinematica unidimensionale consiste nello studiare questa funzione.

> [!note] La posizione è un numero con segno
> Avendo fissato un verso positivo, la coordinata $x$ può essere positiva o negativa. Scrivere $x = -3\ \text{m}$ significa "3 metri dall'origine, dalla parte opposta al verso scelto". Il segno porta quindi un'informazione fisica precisa, cioè da che parte dell'origine si trova l'oggetto.

---

## 5. La velocità

Sappiamo dire dov'è il punto a ogni istante. Vogliamo ora descrivere quanto rapidamente cambia la sua posizione, e a questo serve la **velocità**.

### 5.1 Un esempio numerico

Consideriamo un punto che si muove sull'asse e registriamo la sua posizione a quattro istanti successivi. Agli istanti $t = 0, 1, 2, 3$ il punto si trova rispettivamente nelle posizioni $x = 0, 1, 3, 2$: prima avanza fino a $x = 3$ e poi torna indietro a $x = 2$.

| $t$ (s) | $x$ (m) | $v$ (m/s) |
|:-------:|:-------:|:---------:|
| 0 | 0 | $\frac{1}{1} = +1$ |
| 1 | 1 | $\frac{2}{1} = +2$ |
| 2 | 3 | $\frac{-1}{1} = -1$ |
| 3 | 2 | / |

La colonna $v$ si ottiene facendo, per ogni intervallo, lo spostamento diviso il tempo impiegato:

- da $t=0$ a $t=1$: lo spostamento è $\Delta x = 1 - 0 = 1$ in $\Delta t = 1$, quindi $v = \tfrac{1}{1} = +1$ m/s;
- da $t=1$ a $t=2$: $\Delta x = 3 - 1 = 2$ in $\Delta t = 1$, quindi $v = \tfrac{2}{1} = +2$ m/s;
- da $t=2$ a $t=3$: $\Delta x = 2 - 3 = -1$ in $\Delta t = 1$, quindi $v = \tfrac{-1}{1} = -1$ m/s.

Emergono subito due fatti importanti. Primo, la velocità ha un **segno**: è positiva quando il punto si muove nel verso positivo dell'asse e negativa quando torna indietro, come accade nell'ultimo intervallo. Secondo, la velocità **cambia da un intervallo all'altro** (+1, +2, −1), quindi il moto non è uniforme.

### 5.2 Velocità media

Generalizzando il calcolo, la **velocità media** tra due istanti $t_0$ e $t_1$ è

$$\boxed{\;v_m = \frac{x_1 - x_0}{t_1 - t_0} = \frac{\Delta x}{\Delta t}\;}$$

dove $\Delta x = x_1 - x_0$ è lo **spostamento** e $\Delta t = t_1 - t_0$ è l'**intervallo di tempo** impiegato. La lettera greca $\Delta$ ("delta") indica sempre una variazione, cioè valore finale meno valore iniziale.

La velocità media descrive il **comportamento lineare** tra i due istanti in cui osserviamo il moto. Riassume in un unico numero come la posizione è cambiata tra inizio e fine dell'intervallo, come se in quel tratto sostituissimo il moto reale con un moto a velocità costante che parte da $x_0$ e arriva a $x_1$ nello stesso tempo. Quanto accade all'interno dell'intervallo resta invisibile a questa descrizione.

> [!example] Stesso spostamento, storie diverse
> Andare da casa al lavoro (5 km) in 30 minuti dà una velocità media di 10 km/h, e questo vale sia tenendo un passo costante, sia correndo, fermandosi a un semaforo e ripartendo. La velocità media riassume tutte queste possibilità in un unico valore. Per sapere cosa accade istante per istante serve uno strumento più fine.

Geometricamente, la velocità media è la **pendenza della retta secante** che unisce i due punti $(t_0, x_0)$ e $(t_1, x_1)$ sul grafico della legge oraria $x(t)$:

<svg viewBox="0 0 360 300" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Grafico della posizione in funzione del tempo con triangolo Delta t e Delta x">
  <!-- assi -->
  <line x1="40" y1="270" x2="340" y2="270" stroke="currentColor" stroke-width="1.5"/>
  <line x1="40" y1="270" x2="40" y2="20" stroke="currentColor" stroke-width="1.5"/>
  <polygon points="340,270 330,265 330,275" fill="currentColor"/>
  <polygon points="40,20 35,30 45,30" fill="currentColor"/>
  <!-- tacche t -->
  <g stroke="currentColor" stroke-width="1" font-family="serif">
    <line x1="110" y1="267" x2="110" y2="273"/>
    <line x1="180" y1="267" x2="180" y2="273"/>
    <line x1="250" y1="267" x2="250" y2="273"/>
    <line x1="320" y1="267" x2="320" y2="273"/>
  </g>
  <!-- tacche x -->
  <g stroke="currentColor" stroke-width="1">
    <line x1="37" y1="215" x2="43" y2="215"/>
    <line x1="37" y1="160" x2="43" y2="160"/>
    <line x1="37" y1="105" x2="43" y2="105"/>
    <line x1="37" y1="50"  x2="43" y2="50"/>
  </g>
  <!-- guide tratteggiate -->
  <g stroke="currentColor" stroke-width="0.8" stroke-dasharray="4 3" opacity="0.6">
    <line x1="40" y1="105" x2="180" y2="105"/>
    <line x1="180" y1="105" x2="180" y2="270"/>
    <line x1="40" y1="160" x2="250" y2="160"/>
    <line x1="250" y1="160" x2="250" y2="270"/>
  </g>
  <!-- spezzata x(t): (0,0)(1,1)(2,3)(3,2) -->
  <polyline points="40,270 110,215 180,105 250,160" fill="none" stroke="currentColor" stroke-width="2.5"/>
  <!-- punti -->
  <g fill="currentColor">
    <circle cx="40" cy="270" r="3"/>
    <circle cx="110" cy="215" r="3"/>
    <circle cx="180" cy="105" r="3"/>
    <circle cx="250" cy="160" r="3"/>
  </g>
  <!-- triangolo Delta t / Delta x sul primo tratto -->
  <g stroke="currentColor" stroke-width="1.2" stroke-dasharray="3 2">
    <line x1="40" y1="270" x2="110" y2="270"/>
    <line x1="110" y1="270" x2="110" y2="215"/>
  </g>
  <!-- etichette -->
  <g fill="currentColor" font-size="13" font-family="serif">
    <text x="320" y="288" text-anchor="middle">t</text>
    <text x="110" y="288" text-anchor="middle">1</text>
    <text x="180" y="288" text-anchor="middle">2</text>
    <text x="250" y="288" text-anchor="middle">3</text>
    <text x="30" y="274" text-anchor="end">0</text>
    <text x="30" y="219" text-anchor="end">1</text>
    <text x="30" y="164" text-anchor="end">2</text>
    <text x="30" y="109" text-anchor="end">3</text>
    <text x="22" y="30" text-anchor="middle">x(t)</text>
  </g>
  <g fill="currentColor" font-size="12" font-style="italic">
    <text x="75" y="285" text-anchor="middle">Δt</text>
    <text x="118" y="248">Δx</text>
  </g>
</svg>

Dove la curva sale ripida la velocità media è grande; dove è quasi piatta è piccola; dove scende è negativa.

### 5.3 Velocità istantanea

Per sapere quanto è veloce il punto in un singolo istante, e non in media su un intervallo, rendiamo l'intervallo di tempo sempre più piccolo. La **velocità istantanea** è il limite della velocità media quando $\Delta t$ tende a zero:

$$\boxed{\;v = \lim_{\Delta t \to 0} \frac{\Delta x}{\Delta t} = \frac{dx}{dt}\;}$$

che per definizione è la **derivata** della posizione rispetto al tempo. Geometricamente, facendo avvicinare i due punti sul grafico $x(t)$ lo spostamento $\Delta x$ diventa un trattino infinitesimo $dx$, l'intervallo $\Delta t$ diventa $dt$, e la retta secante si trasforma nella **retta tangente** alla curva in quel punto:

<svg viewBox="0 0 360 240" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Curva x(t) con retta tangente e triangolo infinitesimo dx dt">
  <!-- assi -->
  <line x1="40" y1="210" x2="340" y2="210" stroke="currentColor" stroke-width="1.5"/>
  <line x1="40" y1="210" x2="40" y2="20" stroke="currentColor" stroke-width="1.5"/>
  <polygon points="340,210 330,205 330,215" fill="currentColor"/>
  <polygon points="40,20 35,30 45,30" fill="currentColor"/>
  <!-- curva morbida x(t) -->
  <path d="M 40 200 C 120 200, 150 60, 210 55 S 300 120, 330 130" fill="none" stroke="currentColor" stroke-width="2.5"/>
  <!-- punto di tangenza a t intermedio -->
  <circle cx="150" cy="95" r="3.5" fill="currentColor"/>
  <!-- retta tangente nel punto -->
  <line x1="95" y1="160" x2="225" y2="40" stroke="currentColor" stroke-width="1.5" stroke-dasharray="5 3"/>
  <!-- triangolino dx dt -->
  <g stroke="currentColor" stroke-width="1.2">
    <line x1="150" y1="95" x2="185" y2="95"/>
    <line x1="185" y1="95" x2="185" y2="62"/>
  </g>
  <g fill="currentColor" font-size="13" font-family="serif">
    <text x="322" y="228" text-anchor="middle">t</text>
    <text x="24" y="30" text-anchor="middle">x(t)</text>
  </g>
  <g fill="currentColor" font-size="12" font-style="italic">
    <text x="167" y="110" text-anchor="middle">dt</text>
    <text x="192" y="82">dx</text>
    <text x="232" y="40">tangente</text>
  </g>
</svg>

La velocità istantanea è quindi la **pendenza della tangente** alla curva $x(t)$. Dove la curva sale ripida la velocità è grande; in un massimo o in un minimo, dove la tangente è orizzontale, la velocità è nulla; dove la curva scende la velocità è negativa.

Possiamo riassumere i due livelli di descrizione:

| | Velocità media | Velocità istantanea |
|---|---|---|
| Formula | $\dfrac{\Delta x}{\Delta t}$ | $\dfrac{dx}{dt}$ |
| Riferita a | un **intervallo** $[t_0, t_1]$ | un **istante** $t$ |
| Geometria su $x(t)$ | pendenza della **secante** | pendenza della **tangente** |

Nell'esempio numerico del § 5.1 abbiamo calcolato delle velocità medie, un valore per ciascun intervallo. La velocità istantanea ci permette invece di assegnare un valore a ogni istante, ed è lo strumento che useremo da qui in avanti per descrivere il moto in dettaglio.

---

## Riepilogo

- La **fisica** descrive la natura a partire da pochi **principi**; la **cinematica** descrive il moto senza occuparsi delle sue cause.
- Il **punto materiale** è un'idealizzazione: un corpo con massa, ma di dimensioni e rotazione trascurabili, di cui interessa solo la **posizione**. La sua validità dipende dal problema in esame.
- **Spazio** ($[L]$, metri) e **tempo** ($[T]$, secondi) sono le grandezze fondamentali della cinematica; le dimensioni servono a controllare la coerenza delle formule.
- Nel **moto unidimensionale** la posizione è una sola coordinata $x$; il sistema di riferimento richiede **origine, verso e unità**. Il moto è descritto dalla **legge oraria** $x(t)$.
- **Velocità media:** $v_m = \dfrac{\Delta x}{\Delta t}$, pendenza della secante di $x(t)$, riferita a un intervallo.
- **Velocità istantanea:** $v = \displaystyle\lim_{\Delta t \to 0}\dfrac{\Delta x}{\Delta t} = \dfrac{dx}{dt}$, pendenza della tangente di $x(t)$, riferita a un singolo istante.

> [!question] Per fissare le idee
> 1. Perché la velocità del § 5.1 è negativa nell'ultimo intervallo? Cosa sta facendo il punto in quel tratto?
> 2. Sul grafico $x(t)$, come si riconosce a colpo d'occhio l'istante in cui il punto è fermo?
> 3. Prova a costruire due viaggi con la stessa velocità media ma andamenti diversi.

---

➡️ Prossima lezione: [[legge-oraria-moto-uniforme-accelerazione-e-moto-uniformemente-accelerato]]
