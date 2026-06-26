---
title: "Esercizi d'esame e sistemi di corpi collegati"
description: "Esercizi d'esame su moto parabolico, lavoro ed energia e massa su molla, con la tensione delle funi e i sistemi di corpi collegati tramite carrucole."
type: lecture
lezione: 12
titolo: Esercizi d'esame e sistemi di corpi collegati
argomenti:
  - proiettile e bersaglio mobile
  - lavoro ed energia su un profilo
  - massa su molla verticale
  - tensione delle funi
  - carrucole e corpi collegati
---

# Lezione 12: Esercizi d'esame e corpi collegati

📎 Lezione precedente: [[ripasso-generale-ed-energia-potenziale]]

> [!abstract] In questa lezione
> - **Proiettile e bersaglio mobile**: moto parabolico più moto uniforme
> - **Collina**: lavoro di una forza applicata e del peso, velocità con l'energia
> - **Massa su molla verticale** (tipo bungee): equilibrio, massima estensione, massima velocità
> - **Novità**: la **tensione** delle funi e i **sistemi di corpi collegati** con carrucole

---

## 1. Proiettile e bersaglio mobile (02/02/2024)

> Da un punto $A$ a quota $h = 2\ \text{km}$ parte in orizzontale un proiettile con $v_p = 300\ \text{km/h}$. Sul terreno un bersaglio si muove con $v_m = 15\ \text{km/h}$. A quale distanza $d$ avviene l'impatto?

Come in [[il-moto-parabolico]], i due moti del proiettile sono indipendenti:

$$\text{proiettile:}\quad x_P = v_p\,t, \quad y_P = h - \frac{1}{2}g\,t^2 \qquad\qquad \text{bersaglio:}\quad x_m = d \pm v_m\,t, \quad y_m = 0$$

Il proiettile tocca terra quando $y_P = 0$:

$$t_1 = \sqrt{\frac{2h}{g}} = \sqrt{\frac{2\cdot 2000}{10}} \approx 20\ \text{s}$$

L'impatto avviene dove le due posizioni orizzontali coincidono, $x_P(t_1) = x_m(t_1)$:

$$v_p\,t_1 = d \pm v_m\,t_1 \;\Longrightarrow\; d = (v_p \mp v_m)\,t_1$$

Con $v_p = 300/3{,}6 \approx 83\ \text{m/s}$ e $v_m = 15/3{,}6 \approx 4{,}2\ \text{m/s}$ si ottengono i due casi (bersaglio che si avvicina o si allontana):

$$d_1 = (v_p - v_m)\,t_1 \approx 1{,}6\ \text{km} \qquad d_2 = (v_p + v_m)\,t_1 \approx 1{,}75\ \text{km}$$

> [!tip] Velocità relativa
> I due risultati corrispondono al bersaglio che va incontro al proiettile (distanza minore) o che fugge (distanza maggiore). È un primo assaggio di **moto relativo**: ciò che conta per l'incontro è la velocità del bersaglio rispetto al punto di caduta.

---

## 2. Collina: lavoro ed energia (02/02/2024)

> Un corpo ($m = 800\ \text{g} = 0{,}8\ \text{kg}$) sale lungo il fianco di una collina, tratto $L = 5\ \text{m}$ inclinato di $\theta = 20°$, spinto da una forza $F = 4\ \text{N}$ diretta lungo il pendio. Trovare la velocità in cima ($v_B$) e quella ai piedi del versante opposto ($v_h$).

**Lavoro delle due forze sul tratto di salita $AB$.** La forza $F$ è lungo il moto:

$$W_{AB}^F = F\,L\cos\theta = 4\cdot 5\cdot\cos 20° \approx 19\ \text{J}$$

Il peso compie lavoro negativo (si sale di $h = L\sin\theta$):

$$W_{AB}^P = -mg\,h = -mg\,L\sin\theta = -0{,}8\cdot 10\cdot 5\cdot\sin 20° \approx -13\ \text{J}$$

**Velocità in cima.** Dal teorema dell'energia cinetica ($v_A = 0$):

$$W_{AB}^F + W_{AB}^P = \frac{1}{2}m\,v_B^2 \;\Longrightarrow\; v_B = \sqrt{\frac{2}{m}\left(W_{AB}^F + W_{AB}^P\right)} = \sqrt{\frac{2}{0{,}8}(19 - 13)} \approx 3{,}7\ \frac{\text{m}}{\text{s}}$$

**Velocità in fondo all'altro versante.** Dalla cima (quota $h$) al suolo agisce solo il peso (conservazione dell'energia, come in [[lavoro-della-forza-peso-piano-inclinato-ed-energia]]):

$$\frac{1}{2}m\,v_h^2 = \frac{1}{2}m\,v_B^2 + mgh \;\Longrightarrow\; v_h = \sqrt{v_B^2 + 2gh} \approx 6{,}9\ \frac{\text{m}}{\text{s}}$$

---

## 3. Massa su molla verticale (09/07/2024)

> Una massa $m = 75\ \text{kg}$ è appesa a una molla (lunghezza a riposo $l_0$, costante $k = 400\ \text{N/m}$) e lasciata cadere. Trovare: l'accelerazione iniziale $a_i$, l'allungamento di equilibrio $l_{eq}$, l'accelerazione alla massima estensione, e la velocità massima.

Questo problema combina caduta, forza elastica ed energia. Conviene ragionare per "stati notevoli".

**Accelerazione iniziale.** All'inizio la molla non è ancora tesa, quindi agisce solo il peso:

$$a_i = g \approx 10\ \frac{\text{m}}{\text{s}^2}$$

**Allungamento di equilibrio.** È la posizione in cui peso e forza elastica si bilanciano ($P - F_e = 0$):

$$mg - k\,l_{eq} = 0 \;\Longrightarrow\; l_{eq} = \frac{mg}{k} = \frac{750}{400} \approx 1{,}9\ \text{m}$$

**Massima estensione.** Nel punto più basso la velocità è nulla: tutta l'energia gravitazionale persa nella discesa $(l_0 + x_{max})$ è diventata energia elastica:

$$mg\,(l_0 + x_{max}) = \frac{1}{2}k\,x_{max}^2$$

che, riordinata, è un'**equazione di secondo grado** in $x_{max}$:

$$\frac{k}{2mg}\,x_{max}^2 - x_{max} - l_0 = 0 \;\Longrightarrow\; x_{max} = \frac{mg}{k}\left(1 + \sqrt{1 + \frac{2k\,l_0}{mg}}\right)$$

**Accelerazione alla massima estensione.** Lì la molla è tesa al massimo, quindi $P - F_e = ma$:

$$a = g - \frac{k}{m}\,x_{max}$$

risulta negativa (diretta verso l'alto): nel punto più basso il corpo sta decelerando con la massima intensità, pronto a risalire.

**Velocità massima.** Si raggiunge nel punto di **equilibrio** (dove la forza netta, e quindi l'accelerazione, si annulla). Da lì in poi la forza elastica supera il peso e il corpo rallenta. La si ricava per conservazione dell'energia tra la partenza e il punto di equilibrio.

> [!warning] Numeri della lavagna incoerenti
> Questa parte è stata scritta su una lavagna molto cancellata e i valori numerici riportati (per esempio $x_{max} \approx 6{,}5\ \text{m}$, $a \approx -25\ \text{m/s}^2$, $v_{max} \approx 15\ \text{m/s}$) non sono del tutto coerenti tra loro né con i dati ($l_0 = 10\ \text{m}$, $k = 400\ \text{N/m}$): inserendo i dati nella formula di $x_{max}$ si ottiene un valore diverso da $6{,}5\ \text{m}$. Conviene fidarsi del **metodo** (stati notevoli + energia + equazione di secondo grado) e rifare i conti con cura.

> [!note] I tre "stati notevoli" di una molla verticale
> - **Inizio:** solo peso, $a = g$.
> - **Equilibrio:** forza netta nulla, **velocità massima**.
> - **Massima estensione:** velocità nulla, **accelerazione massima** (verso l'alto).
> Riconoscere questi stati permette di scegliere l'equazione giusta (Newton o energia) senza risolvere il moto istante per istante.

---

## 4. Sistemi di corpi collegati (novità)

> Tre corpi sono collegati da funi che passano su carrucole: $M_A = 2{,}5\ \text{kg}$ su un piano inclinato di $\alpha = 25°$ (fune 1), $M_B = 2{,}0\ \text{kg}$ su un piano orizzontale in cima, e $M_C = 1{,}8\ \text{kg}$ appeso nel vuoto (fune 2). Trovare l'accelerazione $a$ e le tensioni $T_1, T_2$.

<svg viewBox="0 0 360 180" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Sistema di tre masse collegate da funi su carrucole: A su piano inclinato, B in piano, C appeso">
  <!-- piano inclinato -->
  <line x1="20" y1="150" x2="120" y2="80" stroke="currentColor" stroke-width="2"/>
  <line x1="20" y1="150" x2="120" y2="150" stroke="currentColor" stroke-width="1"/>
  <!-- piano orizzontale in cima -->
  <line x1="120" y1="80" x2="270" y2="80" stroke="currentColor" stroke-width="2"/>
  <!-- carrucole -->
  <circle cx="120" cy="80" r="5" fill="none" stroke="currentColor" stroke-width="1.5"/>
  <circle cx="270" cy="80" r="5" fill="none" stroke="currentColor" stroke-width="1.5"/>
  <!-- blocco A su incline -->
  <g transform="rotate(-35 70 110)"><rect x="58" y="100" width="22" height="16" fill="none" stroke="currentColor" stroke-width="1.4"/></g>
  <line x1="78" y1="100" x2="116" y2="82" stroke="currentColor" stroke-width="1"/>
  <!-- blocco B -->
  <rect x="180" y="64" width="24" height="16" fill="none" stroke="currentColor" stroke-width="1.4"/>
  <line x1="125" y1="80" x2="180" y2="72" stroke="currentColor" stroke-width="1"/>
  <line x1="204" y1="72" x2="265" y2="80" stroke="currentColor" stroke-width="1"/>
  <!-- blocco C appeso -->
  <line x1="270" y1="85" x2="270" y2="130" stroke="currentColor" stroke-width="1"/>
  <rect x="258" y="130" width="24" height="20" fill="none" stroke="currentColor" stroke-width="1.4"/>
  <g fill="currentColor" font-size="12" font-family="serif">
    <text x="55" y="135">M_A</text>
    <text x="184" y="60">M_B</text>
    <text x="285" y="145">M_C</text>
    <text x="145" y="68">T₁</text>
    <text x="232" y="68">T₂</text>
    <text x="95" y="150">α</text>
  </g>
</svg>

### 4.1 Le idee nuove

- **Tensione** $T$: è la forza che una fune trasmette. In una fune ideale (inestensibile e di massa trascurabile) la tensione è la **stessa in ogni punto**, e una carrucola ideale ne cambia solo la **direzione**, non il modulo.
- Tutti i corpi collegati dalla stessa fune hanno la **stessa accelerazione** in modulo (la fune non si allunga).
- Si scrive il secondo principio per **ogni corpo separatamente**, scegliendo come positivo il verso del moto, e poi si mettono a sistema.

### 4.2 Le equazioni di ciascun corpo

Scegliamo il verso del moto: $A$ sale lungo il piano, $B$ va verso $C$, $C$ scende (trainato dal suo peso).

$$\text{A (lungo il piano):}\quad T_1 - M_A\,g\sin\alpha = M_A\,a$$
$$\text{B (orizzontale):}\quad T_2 - T_1 = M_B\,a$$
$$\text{C (verticale):}\quad M_C\,g - T_2 = M_C\,a$$

### 4.3 La scorciatoia: sommare le equazioni

Sommando membro a membro, le tensioni (che sono forze **interne** al sistema) si elidono a vicenda:

$$M_C\,g - M_A\,g\sin\alpha = (M_A + M_B + M_C)\,a$$

$$\boxed{\;a = \frac{(M_C - M_A\sin\alpha)\,g}{M_A + M_B + M_C}\;} = \frac{(1{,}8 - 2{,}5\cdot\sin 25°)\cdot 10}{2{,}5 + 2{,}0 + 1{,}8} \approx 1{,}16\ \frac{\text{m}}{\text{s}^2}$$

> [!note] Forze interne ed esterne: $\vec F_{tot} = M_{tot}\,\vec a_{cm}$
> Sommare le equazioni equivale a trattare i tre corpi come **un unico sistema**: le tensioni sono interne e non contano per il moto d'insieme, mentre le forze esterne (peso di $C$ che traina, componente del peso di $A$ che frena) determinano l'accelerazione del centro di massa. È l'idea $\vec F_{tot} = M_{tot}\,\vec a_{cm}$, che riprenderemo.

Una volta noto $a$, le **tensioni** si ricavano sostituendo nelle equazioni dei singoli corpi: $T_1 = M_A(g\sin\alpha + a)$ dalla prima, e $T_2 = M_C(g - a)$ dalla terza.

---

## 5. Blocco con due forze, attrito e salita (24/04/2024)

> Su un piano orizzontale con attrito ($\mu = \mu_s = \mu_d = 0{,}35$) un corpo ($m = 1{,}2\ \text{kg}$) è spinto da $F_1 = 13\ \text{N}$ (orizzontale) e $F_2 = 8\ \text{N}$ (verticale **verso l'alto**); $\overline{AB} = 2{,}3\ \text{m}$, poi sale un piano inclinato $\theta = 35°$ fino a fermarsi in $D$. Trovare $v_B$, l'altezza $h_D$ e l'accelerazione in $D$.

**Reazione normale e verifica del moto.** La forza $F_2$ verso l'alto alleggerisce il corpo:

$$N = mg - F_2 = 12 - 8 = 4\ \text{N} \;\Longrightarrow\; F_{a,max} = \mu_s N = 0{,}35\cdot 4 \approx 1{,}4\ \text{N}$$

Poiché $F_1 = 13\ \text{N} > F_{a,max}$, il corpo si muove ($a > 0$).

**Velocità in $B$** (teorema dell'energia cinetica su $AB$, con attrito dinamico $F_{ad} = \mu_d N$):

$$|F_1|\,\overline{AB} - |F_{ad}|\,\overline{AB} = \frac{1}{2}m\,v_B^2 \;\Longrightarrow\; v_B = \sqrt{\frac{2\,\overline{AB}}{m}\left(|F_1| - |F_{ad}|\right)} \approx 6{,}7\ \frac{\text{m}}{\text{s}}$$

**Altezza raggiunta $h_D$.** Sul piano inclinato (liscio) il corpo sale finché la velocità si annulla; tutta l'energia cinetica diventa potenziale:

$$mg\,h_D = \frac{1}{2}m\,v_B^2 \;\Longrightarrow\; h_D = \frac{v_B^2}{2g} = \frac{6{,}7^2}{20} \approx 2{,}3\ \text{m}$$

**Accelerazione in $D$.** Sul piano inclinato vale $a = g\sin\theta$ (vedi [[lavoro-della-forza-peso-piano-inclinato-ed-energia]]), diretta verso il basso: arrivato in cima con velocità nulla, il corpo riparte indietro con questa accelerazione.

---

## Riepilogo

- **Proiettile + bersaglio mobile:** moti indipendenti; tempo di volo dal moto verticale; impatto dove $x_P = x_m$; il segno $\pm v_m$ distingue bersaglio che si avvicina o si allontana.
- **Profilo (collina):** velocità in cima dal lavoro totale ($W^F + W^P = \Delta K$); velocità in fondo per sola gravità ($v = \sqrt{v_B^2 + 2gh}$).
- **Massa su molla verticale:** ragionare per stati notevoli (inizio $a = g$; equilibrio $l_{eq} = mg/k$ e velocità massima; massima estensione, velocità nulla e accelerazione massima). La massima estensione esce da un'equazione di 2° grado.
- **Corpi collegati:** la **tensione** è uguale lungo una fune ideale; tutti i corpi hanno la stessa $|a|$; si scrive Newton per ciascuno e si **sommano** le equazioni per eliminare le tensioni, ottenendo $a$ dalle sole forze esterne.

> [!question] Per fissare le idee
> 1. Nel problema del bersaglio, perché il tempo di impatto non dipende dalla velocità orizzontale del proiettile?
> 2. Nel sistema di corpi collegati, perché le tensioni "spariscono" quando si sommano le tre equazioni?
> 3. Per la massa sulla molla, perché la velocità è massima all'equilibrio e non nel punto più basso?

---

📎 Lezione precedente: [[ripasso-generale-ed-energia-potenziale]] · Prossima lezione: [[il-moto-armonico-semplice]]
