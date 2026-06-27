---
title: "Formule del moto uniformemente accelerato e introduzione alla dinamica"
description: "Le leggi orarie del moto uniformemente accelerato applicate a problemi di frenata e semaforo, e l'inizio della dinamica con i principi di Newton e le quattro forze fondamentali."
type: lecture
topics:
  - moto uniformemente accelerato
  - leggi orarie per integrazione
  - problemi di frenata e semaforo
  - conversione di unità
  - dinamica e principi di Newton
  - quattro forze fondamentali
---



> [!abstract] In questa lezione
> - Le due **leggi orarie** del moto uniformemente accelerato, ricavate per integrazione: $v(t) = v_0 + at$ e $x(t) = x_0 + v_0 t + \tfrac{1}{2}at^2$
> - **Problema 1.4**: frenata di un'auto (tempo e spazio di arresto), con controllo dimensionale e conversione km/h → m/s
> - **Problema 1.5**: arrivo a un semaforo (accelerazione, tempo, velocità di transito)
> - Inizio della **dinamica**: la forza come causa del moto, **primo** e **secondo principio** di Newton, le **quattro forze fondamentali**

---

## 1. Punto di partenza

Riprendiamo le due definizioni che useremo di continuo:

$$v = \frac{dx}{dt}, \qquad a = \frac{dv}{dt}$$

Nel moto uniformemente accelerato l'accelerazione è costante. Da questa sola ipotesi ricaviamo, integrando, prima la velocità e poi la posizione in funzione del tempo. Lo schema è sempre lo stesso: si parte dalla definizione di derivata, la si "inverte" integrando, e si impongono le condizioni iniziali.

---

## 2. Le leggi orarie del moto uniformemente accelerato

### 2.1 Velocità: $v(t) = v_0 + at$

Partiamo dalla definizione di accelerazione e separiamo i differenziali:

$$a = \frac{dv}{dt} \quad\Longrightarrow\quad dv = a\,dt$$

Integriamo il tempo da $0$ a $t$ e la velocità dal valore iniziale $v_0$ al valore $v(t)$:

$$\int_{v_0}^{v(t)} dv = \int_{0}^{t} a\,dt$$

Poiché $a$ è costante esce dall'integrale:

$$v\Big|_{v_0}^{v(t)} = a\,t\Big|_{0}^{t} \quad\Longrightarrow\quad v(t) - v_0 = a\,t$$

da cui la **legge della velocità**:

$$\boxed{\;v(t) = v_0 + a\,t\;}$$

### 2.2 Posizione: $x(t) = x_0 + v_0 t + \tfrac{1}{2}at^2$

Ora che conosciamo $v(t)$, ripetiamo il procedimento partendo dalla definizione di velocità:

$$v = \frac{dx}{dt} \quad\Longrightarrow\quad \int_{x_0}^{x(t)} dx = \int_{0}^{t} v\,dt = x(t) - x_0$$

Sostituiamo $v = v_0 + at$ e spezziamo l'integrale nei due termini:

$$\int_{0}^{t} (v_0 + at)\,dt = \int_{0}^{t} v_0\,dt + \int_{0}^{t} at\,dt = v_0\int_{0}^{t} dt + a\int_{0}^{t} t\,dt$$

Il primo integrale dà $v_0\,t$; il secondo dà $a\,\dfrac{t^2}{2}$ (poiché l'integrale di $t$ è $\tfrac{t^2}{2}$):

$$v_0\,t\Big|_{0}^{t} + a\,\frac{t^2}{2}\Big|_{0}^{t} = v_0\,t + \frac{1}{2}a\,t^2 = x(t) - x_0$$

da cui la **legge oraria**:

$$\boxed{\;x(t) = x_0 + v_0\,t + \frac{1}{2}a\,t^2\;}$$

> [!note] Le tre formule da ricordare
> Queste due leggi, insieme alla relazione senza tempo vista in [[02-legge-oraria-moto-uniforme-accelerazione-e-moto-uniformemente-accelerato]], sono il kit completo del moto uniformemente accelerato:
> $$v(t) = v_0 + at \qquad x(t) = x_0 + v_0 t + \tfrac{1}{2}at^2 \qquad v^2 = v_0^2 + 2a\,\Delta x$$
> In un problema si scelgono in base ai dati: se manca il tempo si usa la terza, altrimenti le prime due.

---

## 3. Problema 1.4 (Mazzoldi): frenata

> Un'auto viaggia a $v_0 = 100\ \text{km/h}$ e frena con accelerazione costante $a = -3{,}5\ \text{m/s}^2$ (moto uniformemente accelerato, o meglio decelerato). Trovare: **(a)** il tempo di arresto $t_a$; **(b)** lo spazio di arresto $x_a$.

### 3.1 Conversione delle unità

Prima di tutto portiamo la velocità in unità SI (metri al secondo). Si moltiplica per $1000$ (metri in un km) e si divide per $3600$ (secondi in un'ora):

$$v_0 = 100\,\frac{\text{km}}{\text{h}}\cdot\frac{1000\ \text{m}}{1\ \text{km}}\cdot\frac{1\ \text{h}}{3600\ \text{s}} = \frac{100}{3{,}6} \approx 27\ \frac{\text{m}}{\text{s}}$$

> [!tip] Il fattore 3,6
> Passare da km/h a m/s significa sempre **dividere per 3,6**; passare da m/s a km/h significa **moltiplicare per 3,6**. Vale la pena memorizzarlo: $3{,}6 = 3600/1000$.

### 3.2 Tempo di arresto

L'auto si ferma quando la velocità si annulla. Imponiamo $v(t_a) = 0$ nella legge della velocità:

$$v(t_a) = v_0 + a\,t_a = 0 \quad\Longrightarrow\quad t_a = -\frac{v_0}{a} = -\frac{27}{-3{,}5} \approx 7{,}7\ \text{s} \approx 8\ \text{s}$$

(In aula il valore è stato arrotondato a $\approx 7\ \text{s}$; con i numeri esatti si ottiene $27{,}8/3{,}5 \approx 7{,}9\ \text{s}$.)

> [!tip] Controllo dimensionale
> Conviene verificare che $t_a = -\dfrac{v_0}{a}$ abbia davvero le dimensioni di un tempo:
> $$[t_a] = \frac{[v]}{[a]} = \frac{[L]/[T]}{[L]/[T]^2} = \frac{[L]}{[T]}\cdot\frac{[T]^2}{[L]} = [T]$$
> In unità: $\dfrac{\text{m/s}}{\text{m/s}^2} = \dfrac{\text{m}}{\text{s}}\cdot\dfrac{\text{s}^2}{\text{m}} = \text{s}$. Tutto torna.

### 3.3 Spazio di arresto

Lo spazio percorso fino alla fermata è lo spostamento tra la partenza e l'istante $t_a$:

$$x_a - x_0 = v_0\,t_a + \frac{1}{2}a\,t_a^2 = 27\cdot 7 + \frac{1}{2}(-3{,}5)\cdot 7^2 = 189 - 85{,}75 \approx 103\ \text{m}$$

<svg viewBox="0 0 420 110" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Spazio di arresto: l'auto parte da x0 e si ferma in xa">
  <line x1="30" y1="70" x2="400" y2="70" stroke="currentColor" stroke-width="1.5"/>
  <polygon points="400,70 390,65 390,75" fill="currentColor"/>
  <g stroke="currentColor" stroke-width="2">
    <line x1="60" y1="63" x2="60" y2="77"/>
    <line x1="110" y1="63" x2="110" y2="77"/>
    <line x1="330" y1="63" x2="330" y2="77"/>
  </g>
  <!-- auto -->
  <g stroke="currentColor" stroke-width="1.5" fill="none">
    <rect x="95" y="48" width="30" height="10" rx="3"/>
    <circle cx="103" cy="60" r="3.5"/>
    <circle cx="118" cy="60" r="3.5"/>
  </g>
  <!-- spazio percorso -->
  <line x1="110" y1="28" x2="330" y2="28" stroke="currentColor" stroke-width="1"/>
  <line x1="110" y1="24" x2="110" y2="32" stroke="currentColor" stroke-width="1"/>
  <line x1="330" y1="24" x2="330" y2="32" stroke="currentColor" stroke-width="1"/>
  <g fill="currentColor" font-size="13" font-family="serif" text-anchor="middle">
    <text x="60" y="92">0</text>
    <text x="110" y="92">x₀</text>
    <text x="330" y="92">xₐ</text>
    <text x="405" y="74">x</text>
  </g>
  <text x="220" y="20" fill="currentColor" font-size="12" text-anchor="middle" font-style="italic">spazio percorso  Δx</text>
</svg>

> [!warning] Sui numeri
> In aula il conto è stato arrotondato in modo grossolano (scrivendo $189 \approx 190$ e $\tfrac{1}{2}\cdot 3{,}5 \approx 1{,}8$) ottenendo un valore intorno ai $90\text{–}100\ \text{m}$. Il valore preciso è $x_a - x_0 = \dfrac{v_0^2}{2|a|} = \dfrac{27{,}8^2}{7} \approx 110\ \text{m}$. Per un'auto a 100 km/h, dunque, lo spazio di frenata è di **circa cento metri**: un ordine di grandezza utile da tenere a mente.

---

## 4. Problema 1.5 (Mazzoldi): il semaforo

> Un'auto viaggia a $v_0 = 80\ \text{km/h}$ e vede il semaforo rosso a distanza $d = 100\ \text{m}$. **(a)** Quale accelerazione costante serve per fermarsi esattamente al semaforo? **(b)** Quanto tempo impiega? **(c)** Se invece il semaforo passa da rosso a verde dopo $6\ \text{s}$, quale accelerazione costante serve per transitare proprio quando scatta il verde? **(d)** Con il limite di $50\ \text{km/h}$, in questo caso l'auto prende la multa?

Impostazione comune: il moto è uniformemente accelerato, quindi valgono

$$v(t) = v_0 + a\,t, \qquad x(t) = x_0 + v_0\,t + \frac{1}{2}a\,t^2$$

con $v_0 = 80/3{,}6 \approx 22\ \text{m/s}$.

### 4.1 (a)–(b) Fermarsi al semaforo

Imponiamo le due condizioni: all'istante di arresto $t_d$ la velocità è nulla e lo spazio percorso è esattamente $d$:

$$(1)\quad v(t_d) = v_0 + a\,t_d = 0 \qquad\qquad (2)\quad v_0\,t_d + \frac{1}{2}a\,t_d^2 = d$$

Dalla $(1)$ ricaviamo $a = -\dfrac{v_0}{t_d}$ e lo sostituiamo nella $(2)$:

$$v_0\,t_d + \frac{1}{2}\left(-\frac{v_0}{t_d}\right)t_d^2 = v_0\,t_d - \frac{1}{2}v_0\,t_d = \frac{1}{2}v_0\,t_d = d$$

da cui il **tempo** (risposta b):

$$t_d = \frac{2d}{v_0} = \frac{2\cdot 100}{80/3{,}6} = \frac{200}{22{,}2} \approx 9\ \text{s}$$

Tornando alla $(1)$ otteniamo l'**accelerazione** (risposta a):

$$a = -\frac{v_0}{t_d} = -\frac{v_0^2}{2d} = -\frac{22^2}{2\cdot 100} = -\frac{484}{200} \approx -2{,}4\ \frac{\text{m}}{\text{s}^2}$$

(In aula arrotondato a $\approx -2{,}2\ \text{m/s}^2$.) Il segno negativo conferma che si tratta di una decelerazione.

### 4.2 (c) Transitare quando scatta il verde

Ora l'auto non si ferma: deve percorrere la distanza $d$ in un tempo fissato $t_s = 6\ \text{s}$. Resta valida la legge oraria, con la sola condizione sullo spazio:

$$x(t_s) - x_0 = v_0\,t_s + \frac{1}{2}a\,t_s^2 = d$$

Risolviamo rispetto ad $a$:

$$a = \frac{2\,(d - v_0\,t_s)}{t_s^2} = \frac{2\,(100 - 22\cdot 6)}{36} = \frac{2\,(100 - 132)}{36} = \frac{-64}{36} \approx -1{,}8\ \frac{\text{m}}{\text{s}^2}$$

L'accelerazione è ancora negativa: viaggiando a 80 km/h l'auto arriverebbe troppo presto, quindi deve comunque rallentare per non superare il semaforo prima del verde. (In aula il valore è stato arrotondato a $\approx -1{,}5\ \text{m/s}^2$.)

### 4.3 (d) Multa o no?

La velocità con cui l'auto transita è quella all'istante $t_s$:

$$v(t_s) = v_0 + a\,t_s = 22 + (-1{,}8)\cdot 6 \approx 11\ \frac{\text{m}}{\text{s}}$$

Riconvertendo in km/h (moltiplicando per $3{,}6$):

$$v(t_s) \approx 11\cdot 3{,}6 \approx 40\ \frac{\text{km}}{\text{h}} \;<\; 50\ \frac{\text{km}}{\text{h}}$$

La velocità di transito è sotto il limite, quindi **niente multa**. (Con i valori arrotondati usati in aula, $a \approx -1{,}5\ \text{m/s}^2$, si ottiene $v(t_s) \approx 13\ \text{m/s} \approx 46\ \text{km/h}$: comunque sotto i 50 km/h, stessa conclusione.)

---

## 5. Dinamica: la causa del moto

Con la cinematica sappiamo descrivere il moto. La **dinamica** affronta la domanda successiva: che cosa lo provoca? La risposta introduce un concetto nuovo, la **forza**, intesa come misura dell'**interazione** tra corpi, cioè la **causa** del moto.

### 5.1 Primo principio di Newton (principio di inerzia)

> **Primo principio.** Se un corpo è isolato, cioè non interagisce con nessun altro, allora si muove di moto rettilineo uniforme, oppure al più resta fermo.

È il **principio di inerzia**. In assenza di interazioni la velocità non cambia: restare fermi (velocità nulla) o procedere in linea retta a velocità costante sono, dal punto di vista della dinamica, la stessa situazione. Per modificare la velocità di un corpo, cioè per accelerarlo, serve sempre un'interazione con qualcos'altro.

### 5.2 Secondo principio di Newton

> **Secondo principio.** La forza è proporzionale all'accelerazione che produce, e la costante di proporzionalità è la massa:
> $$\boxed{\;F = m\,a\;}$$

Leggiamo la formula come un legame causa–effetto:

- la **forza** $F$ è la **causa**;
- l'**accelerazione** $a$ è l'**effetto** prodotto;
- la **massa** $m$ è la **costante di proporzionalità** tra causa ed effetto.

La massa misura quindi quanto un corpo "resiste" a farsi accelerare: a parità di forza, un corpo con massa maggiore subisce un'accelerazione minore. È la quantificazione dell'inerzia introdotta dal primo principio.

### 5.3 Le quattro forze fondamentali

Tutte le interazioni che osserviamo in natura si riconducono a **quattro forze fondamentali**:

| Forza | Agisce sulla / sul | Caratteristica |
|---|---|---|
| **Gravitazione** | massa | solo attrattiva |
| **Elettromagnetica** | carica elettrica | attrattiva o repulsiva |
| **Nucleare forte** | tiene insieme i nuclei degli atomi | a cortissimo raggio |
| **Nucleare debole** | responsabile dei decadimenti (interazioni tra elettroni e nucleo) | a cortissimo raggio |

> [!note] Forze quotidiane e forze fondamentali
> Le forze che incontriamo ogni giorno (attrito, tensione di una fune, spinta di una molla, reazione di un tavolo) non sono nuove forze fondamentali: sono manifestazioni macroscopiche dell'interazione **elettromagnetica** tra gli atomi dei corpi a contatto. Nel corso lavoreremo soprattutto con la **gravitazione** e con queste forze di contatto.

---

## Riepilogo

- **Moto uniformemente accelerato** (a costante), ricavato per integrazione:
  $$v(t) = v_0 + at, \qquad x(t) = x_0 + v_0 t + \tfrac{1}{2}at^2, \qquad v^2 = v_0^2 + 2a\,\Delta x$$
- **Conversione:** km/h → m/s si divide per $3{,}6$; m/s → km/h si moltiplica per $3{,}6$.
- Conviene sempre fare il **controllo dimensionale** di una formula prima di fidarsene.
- **Problema 1.4** (frenata): da $v_0 = 100\ \text{km/h} \approx 27\ \text{m/s}$ e $a = -3{,}5\ \text{m/s}^2$ si ottengono $t_a \approx 8\ \text{s}$ e $x_a \approx 100\ \text{m}$.
- **Problema 1.5** (semaforo): le stesse leggi orarie, con condizioni diverse (fermarsi vs transitare in un tempo dato), danno l'accelerazione e la velocità di transito.
- **Dinamica:** la **forza** è la causa del moto.
  - **Primo principio (inerzia):** un corpo isolato mantiene velocità costante.
  - **Secondo principio:** $F = ma$, con la massa come costante di proporzionalità.
  - **Quattro forze fondamentali:** gravitazionale, elettromagnetica, nucleare forte, nucleare debole.

> [!question] Per fissare le idee
> 1. Perché lo spazio di frenata cresce con il **quadrato** della velocità? (Suggerimento: guarda $v^2 = v_0^2 + 2a\,\Delta x$.) Cosa implica per la guida?
> 2. Nel Problema 1.5, perché anche nel caso (c) l'accelerazione risulta negativa pur non dovendosi fermare?
> 3. Il primo principio sembra un caso particolare del secondo. Sapresti spiegare in che senso lo è ponendo $F = 0$?

