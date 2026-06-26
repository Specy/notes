---
title: "Lavoro della forza peso, piano inclinato ed energia"
description: "Il lavoro della forza peso e la sua indipendenza dal percorso, il piano inclinato con a = g·sin α e il confronto fra metodo cinematico ed energetico."
type: lecture
lezione: 8
titolo: Lavoro della forza peso, piano inclinato ed energia
argomenti:
  - lavoro della forza peso
  - indipendenza dal percorso
  - piano inclinato
  - accelerazione g sin alpha
  - problemi con il teorema dell'energia cinetica
---

# Lezione 8: Lavoro della forza peso e piano inclinato

📎 Lezione precedente: [[forze-inclinate-lavoro-ed-energia-cinetica]]

> [!abstract] In questa lezione
> - Il **lavoro della forza peso**: $W_P = -mg\,\Delta z$, dipende solo dal dislivello
> - L'**indipendenza dal percorso** e perché la reazione normale non compie lavoro
> - Il **piano inclinato**: accelerazione $a = g\sin\alpha$
> - Confronto tra il metodo cinematico e quello **energetico** sugli stessi problemi
> - Un problema completo: piano inclinato, tratto con attrito e salto finale

---

## 1. Ripasso: teorema dell'energia cinetica

Dalla lezione precedente:

$$W_{AB} = \int_A^B dW = \frac{1}{2}m\,v_B^2 - \frac{1}{2}m\,v_A^2, \qquad K = \frac{1}{2}m\,v^2$$

$$\boxed{\;W = \Delta K\;}$$

Il lavoro totale delle forze è pari alla variazione di energia cinetica. Ora calcoliamo il lavoro della forza più importante, il peso.

---

## 2. Il lavoro della forza peso

Scegliamo un asse $z$ verticale verso l'alto. La forza peso ha componente $F_z = -mg$ (punta verso il basso). Calcoliamo il lavoro per uno spostamento da $A$ a $B$.

Il lavoro infinitesimo è $dW = \vec F\cdot d\vec s$, e di tutto lo spostamento conta solo la parte verticale $dz$. Componente verticale della forza ($-mg$) per spostamento verticale ($dz$):

$$dW = -mg\,dz$$

Integrando da $A$ a $B$:

$$W_{AB} = \int_A^B dW = \int_A^B (-mg)\,dz = -mg\,(z_B - z_A)$$

$$\boxed{\;W_P = -mg\,\Delta z\;}\qquad \Delta z = z_B - z_A$$

Analizziamo il segno, coerente con quanto visto in [[forze-inclinate-lavoro-ed-energia-cinetica]]:

| Moto | $\Delta z$ | Lavoro del peso |
|---|:---:|---|
| Il corpo **scende** | $\Delta z < 0$ | $W_P > 0$ (peso motrice) |
| Il corpo **sale** | $\Delta z > 0$ | $W_P < 0$ (peso frenante) |
| Moto **orizzontale** | $\Delta z = 0$ | $W_P = 0$ |

### 2.1 Indipendenza dal percorso

Il risultato fondamentale è questo: il lavoro del peso dipende **solo dalla quota iniziale e finale**, non dal cammino seguito. Che il corpo scenda in verticale, lungo uno scivolo curvo o per un piano inclinato, se la differenza di quota è la stessa, il lavoro del peso è lo stesso.

<svg viewBox="0 0 320 180" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Due percorsi diversi tra le stesse quote: il lavoro del peso è lo stesso">
  <line x1="30" y1="160" x2="300" y2="160" stroke="currentColor" stroke-width="1"/>
  <line x1="30" y1="160" x2="30" y2="20" stroke="currentColor" stroke-width="1"/>
  <!-- quote -->
  <line x1="30" y1="40" x2="280" y2="40" stroke="currentColor" stroke-width="0.7" stroke-dasharray="4 3" opacity="0.6"/>
  <line x1="30" y1="140" x2="280" y2="140" stroke="currentColor" stroke-width="0.7" stroke-dasharray="4 3" opacity="0.6"/>
  <circle cx="80" cy="40" r="4" fill="currentColor"/>
  <circle cx="240" cy="140" r="4" fill="currentColor"/>
  <!-- percorso 1: retto -->
  <line x1="80" y1="40" x2="240" y2="140" stroke="currentColor" stroke-width="2"/>
  <!-- percorso 2: curvo -->
  <path d="M 80 40 C 80 130, 160 90, 240 140" fill="none" stroke="currentColor" stroke-width="2" stroke-dasharray="5 3"/>
  <g fill="currentColor" font-size="12" font-family="serif">
    <text x="60" y="38">A</text>
    <text x="248" y="144">B</text>
    <text x="8" y="44">z_A</text>
    <text x="8" y="144">z_B</text>
    <text x="150" y="175" text-anchor="middle" font-style="italic">stesso Δz → stesso W_P</text>
  </g>
</svg>

> [!note] Perché questa proprietà è così importante
> Una forza il cui lavoro non dipende dal percorso ma solo dai punti di partenza e arrivo si dice **conservativa**. Il peso è l'esempio principale. Questa proprietà permetterà di definire l'**energia potenziale** e, con essa, la conservazione dell'energia meccanica (prossime lezioni). L'attrito, al contrario, dipende dal percorso (più lungo è il tragitto, più lavoro negativo compie) e non è conservativo.

---

## 3. Applicazione: scivolo curvo (Problema 3/11/2025)

> Un corpo di massa $m = 1{,}3\ \text{kg}$ arriva nel punto $B$ con velocità $v_B = 3{,}3\ \text{m/s}$ e poi scende lungo uno scivolo curvo liscio, abbassandosi di $h = 0{,}4\ \text{m}$ fino a $C$. Trovare $v_C$.

<svg viewBox="0 0 300 170" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Scivolo curvo: il corpo scende da B a C, solo il peso compie lavoro">
  <path d="M 40 40 C 40 130, 90 140, 200 140" fill="none" stroke="currentColor" stroke-width="2.5"/>
  <line x1="200" y1="140" x2="270" y2="140" stroke="currentColor" stroke-width="2.5"/>
  <!-- blocco B -->
  <rect x="32" y="48" width="22" height="14" fill="none" stroke="currentColor" stroke-width="1.4"/>
  <line x1="43" y1="62" x2="43" y2="85" stroke="currentColor" stroke-width="1.5"/><polygon points="43,85 39,76 47,76" fill="currentColor"/>
  <!-- blocco C -->
  <rect x="215" y="126" width="22" height="14" fill="none" stroke="currentColor" stroke-width="1.4"/>
  <line x1="237" y1="133" x2="262" y2="133" stroke="currentColor" stroke-width="1.5"/><polygon points="262,133 253,129 253,137" fill="currentColor"/>
  <!-- h -->
  <line x1="20" y1="55" x2="20" y2="140" stroke="currentColor" stroke-width="0.8"/>
  <line x1="16" y1="55" x2="24" y2="55" stroke="currentColor" stroke-width="0.8"/>
  <line x1="16" y1="140" x2="24" y2="140" stroke="currentColor" stroke-width="0.8"/>
  <g fill="currentColor" font-size="12" font-family="serif">
    <text x="56" y="46">B</text><text x="50" y="80">v_B</text>
    <text x="210" y="124">C</text><text x="250" y="128">v_C</text>
    <text x="6" y="100">h</text>
  </g>
</svg>

Sul tratto curvo agiscono il peso e la reazione normale $N$. Ma $N$ è sempre **perpendicolare** al moto, quindi **non compie lavoro**: l'unica forza che lavora è il peso. Per il teorema dell'energia cinetica, con la caduta di quota $h$ (il peso fa lavoro positivo $mgh$):

$$mgh = \frac{1}{2}m\,v_C^2 - \frac{1}{2}m\,v_B^2$$

$$\boxed{\;v_C = \sqrt{v_B^2 + 2gh}\;} = \sqrt{3{,}3^2 + 2\cdot 10\cdot 0{,}4} = \sqrt{10{,}89 + 8} \approx 4{,}3\ \frac{\text{m}}{\text{s}}$$

> [!tip] La forma dello scivolo non conta
> Non abbiamo avuto bisogno di conoscere la forma esatta della curva: grazie all'indipendenza dal percorso, solo il dislivello $h$ entra nel conto. Questo è il grande vantaggio dell'approccio energetico rispetto a inseguire forze e accelerazioni lungo una traiettoria complicata.

---

## 4. Il piano inclinato

Il piano inclinato è il banco di prova classico. Un corpo di massa $m$ è appoggiato su un piano inclinato di un angolo $\alpha$, liscio. Scegliamo gli assi **lungo il piano** ($x$, verso il basso) e **perpendicolare** ad esso ($y$).

<svg viewBox="0 0 280 180" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Piano inclinato: scomposizione della forza peso lungo e perpendicolare al piano">
  <!-- piano -->
  <line x1="30" y1="40" x2="250" y2="160" stroke="currentColor" stroke-width="2"/>
  <line x1="30" y1="160" x2="250" y2="160" stroke="currentColor" stroke-width="1.5"/>
  <line x1="30" y1="40" x2="30" y2="160" stroke="currentColor" stroke-width="1.5"/>
  <path d="M 215 160 A 45 45 0 0 0 200 136" fill="none" stroke="currentColor" stroke-width="1"/>
  <text x="200" y="153" fill="currentColor" font-size="11">α</text>
  <!-- blocco -->
  <g transform="rotate(28.6 120 96)">
    <rect x="103" y="82" width="34" height="22" fill="none" stroke="currentColor" stroke-width="1.5"/>
  </g>
  <circle cx="120" cy="96" r="3" fill="currentColor"/>
  <!-- N perpendicolare -->
  <line x1="120" y1="96" x2="155" y2="36" stroke="currentColor" stroke-width="2"/><polygon points="155,36 147,43 154,46" fill="currentColor"/>
  <!-- P giù -->
  <line x1="120" y1="96" x2="120" y2="150" stroke="currentColor" stroke-width="2"/><polygon points="120,150 116,141 124,141" fill="currentColor"/>
  <!-- componenti di P -->
  <line x1="120" y1="96" x2="158" y2="118" stroke="currentColor" stroke-width="1.3" stroke-dasharray="3 2"/>
  <line x1="120" y1="96" x2="93" y2="142" stroke="currentColor" stroke-width="1.3" stroke-dasharray="3 2"/>
  <g fill="currentColor" font-size="12" font-family="serif">
    <text x="158" y="34">N</text>
    <text x="124" y="150">P</text>
    <text x="160" y="122" font-size="10">Pₓ</text>
    <text x="74" y="140" font-size="10">P_y</text>
  </g>
</svg>

Scomponiamo il peso lungo i due assi. Con l'angolo $\alpha$, la componente lungo il piano (che fa scivolare) e quella perpendicolare (premuta sul piano) sono:

$$P_x = P\sin\alpha = mg\sin\alpha, \qquad P_y = -P\cos\alpha = -mg\cos\alpha$$

Secondo principio:

$$y:\quad N - mg\cos\alpha = 0 \;\Longrightarrow\; N = mg\cos\alpha$$
$$x:\quad mg\sin\alpha = m\,a \;\Longrightarrow\; \boxed{\;a = g\sin\alpha\;}$$

L'accelerazione lungo un piano inclinato liscio è $g\sin\alpha$: non dipende dalla massa, e varia da $0$ (piano orizzontale, $\alpha = 0$) a $g$ (caduta libera, $\alpha = 90°$).

> [!note] La reazione normale regge solo una parte del peso
> Su un piano inclinato $N = mg\cos\alpha < mg$: il vincolo sostiene solo la componente del peso perpendicolare al piano. La componente parallela, $mg\sin\alpha$, resta sbilanciata e provoca lo scivolamento.

---

## 5. Due metodi a confronto sul piano inclinato

Un corpo parte da fermo in $A$ e scivola lungo un piano inclinato liscio fino a $B$, con $\overline{AB} = 1\ \text{m}$ e $\alpha = 30°$. Troviamo $v_B$ in due modi.

### 5.1 Metodo cinematico

L'accelerazione è $a = g\sin\alpha = 10\cdot 0{,}5 = 5\ \text{m/s}^2$. Con $v_A = 0$, le leggi del moto uniformemente accelerato lungo il piano ($v(t) = at$, $x(t) = \tfrac{1}{2}at^2$):

$$\overline{AB} = \frac{1}{2}a\,t_B^2 \;\Longrightarrow\; t_B = \sqrt{\frac{2\,\overline{AB}}{a}} = \sqrt{\frac{2\cdot 1}{5}} \approx 0{,}6\ \text{s}$$

$$v_B = a\,t_B = 5\cdot 0{,}6 \approx 3\ \frac{\text{m}}{\text{s}}$$

### 5.2 Metodo energetico

Il dislivello tra $A$ e $B$ è $h = \overline{AB}\sin\alpha = 1\cdot 0{,}5 = 0{,}5\ \text{m}$. Solo il peso compie lavoro (la normale è perpendicolare al moto). Dal teorema dell'energia cinetica:

$$mgh = \frac{1}{2}m\,v_B^2 - \frac{1}{2}m\,v_A^2 \;\Longrightarrow\; v_B = \sqrt{2gh} = \sqrt{2\cdot 10\cdot 0{,}5} = \sqrt{10} \approx 3\ \frac{\text{m}}{\text{s}}$$

Stesso risultato. Il metodo energetico è più diretto, e soprattutto **non richiede di passare per il tempo** né per i dettagli del piano: conta solo il dislivello.

---

## 6. Problema completo (15/7/2025): piano, attrito e salto

> Un corpo di massa $m = 1{,}8\ \text{kg}$ parte da fermo in $A$, scende lungo un piano inclinato liscio $\overline{AB} = 1{,}5\ \text{m}$ con $\theta = 35°$, poi percorre un tratto orizzontale $\overline{BC} = 2{,}5\ \text{m}$ con attrito $\mu_d = 0{,}3$, e infine cade da un gradino di altezza $\overline{CC'} = 0{,}5\ \text{m}$. Trovare **(1)** $v_B$, **(2)** $v_C$, **(3)** $v_D$.

<svg viewBox="0 0 360 180" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Percorso del problema: piano inclinato AB, tratto orizzontale con attrito BC, salto da C a D">
  <!-- inclinato -->
  <line x1="30" y1="50" x2="120" y2="120" stroke="currentColor" stroke-width="2.5"/>
  <!-- orizzontale con attrito -->
  <line x1="120" y1="120" x2="250" y2="120" stroke="currentColor" stroke-width="2.5"/>
  <g stroke="currentColor" stroke-width="1"><line x1="135" y1="120" x2="129" y2="127"/><line x1="155" y1="120" x2="149" y2="127"/><line x1="175" y1="120" x2="169" y2="127"/><line x1="195" y1="120" x2="189" y2="127"/><line x1="215" y1="120" x2="209" y2="127"/><line x1="235" y1="120" x2="229" y2="127"/></g>
  <!-- gradino -->
  <line x1="250" y1="120" x2="250" y2="155" stroke="currentColor" stroke-width="2.5"/>
  <line x1="250" y1="155" x2="330" y2="155" stroke="currentColor" stroke-width="2.5"/>
  <!-- blocco A -->
  <rect x="32" y="38" width="18" height="12" fill="none" stroke="currentColor" stroke-width="1.3"/>
  <!-- traiettoria salto -->
  <path d="M 250 120 Q 290 125 320 155" fill="none" stroke="currentColor" stroke-width="1" stroke-dasharray="4 3"/>
  <g fill="currentColor" font-size="12" font-family="serif">
    <text x="40" y="34">A</text>
    <text x="116" y="135">B</text>
    <text x="244" y="116">C</text>
    <text x="318" y="170">D</text>
    <text x="70" y="70">θ</text>
  </g>
</svg>

Si risolve "a pezzi", applicando il teorema dell'energia cinetica a ogni tratto e concatenando le velocità.

**(1) Tratto $AB$ (piano liscio).** Dislivello $h = \overline{AB}\sin\theta = 1{,}5\cdot\sin 35° \approx 0{,}9\ \text{m}$. Solo il peso lavora:

$$mgh = \frac{1}{2}m\,v_B^2 \;\Longrightarrow\; v_B = \sqrt{2gh} = \sqrt{2\cdot 10\cdot 0{,}9} = \sqrt{18} \approx 4{,}2\ \frac{\text{m}}{\text{s}}$$

**(2) Tratto $BC$ (orizzontale con attrito).** Qui il peso non lavora (moto orizzontale), ma l'attrito sì, con lavoro negativo $-F_a\,\overline{BC} = -\mu_d\,mg\,\overline{BC}$:

$$-\mu_d\,mg\,\overline{BC} = \frac{1}{2}m\,v_C^2 - \frac{1}{2}m\,v_B^2$$

$$v_C = \sqrt{v_B^2 - 2\mu_d\,g\,\overline{BC}} = \sqrt{18 - 2\cdot 0{,}3\cdot 10\cdot 2{,}5} = \sqrt{18 - 15} = \sqrt{3} \approx 1{,}7\ \frac{\text{m}}{\text{s}}$$

**(3) Salto da $C$ a $D$.** Nella caduta (senza attrito) solo il peso lavora, con dislivello $\overline{CC'} = 0{,}5\ \text{m}$. Con lo stesso teorema, la velocità (in modulo) di arrivo a terra è

$$v_D = \sqrt{v_C^2 + 2g\,\overline{CC'}} = \sqrt{3 + 2\cdot 10\cdot 0{,}5} = \sqrt{3 + 10} = \sqrt{13} \approx 3{,}6\ \frac{\text{m}}{\text{s}}$$

> [!note] La potenza del concatenamento
> La velocità di fine tratto diventa quella di inizio del tratto successivo. In ogni tratto basta capire **quali forze fanno lavoro** (il peso quando c'è dislivello, l'attrito quando c'è scorrimento) e applicare $W = \Delta K$. Per la velocità $v_D$ conta solo il modulo: l'energia non distingue la direzione, quindi non serve studiare la traiettoria del salto per trovare con che velocità il corpo arriva a terra. In [[il-moto-parabolico]] rifaremo questo salto come **moto parabolico**, ottenendo anche la direzione di $\vec v_D$ e la gittata.

---

## Riepilogo

- **Lavoro della forza peso:** $W_P = -mg\,\Delta z$ (con $\Delta z = z_B - z_A$). Positivo in discesa, negativo in salita, nullo in orizzontale.
- Il lavoro del peso **dipende solo dal dislivello**, non dal percorso: il peso è una forza **conservativa**.
- La **reazione normale** non compie mai lavoro (è perpendicolare al moto).
- **Piano inclinato liscio:** $N = mg\cos\alpha$ e accelerazione $a = g\sin\alpha$ (indipendente dalla massa).
- I problemi di velocità con dislivelli e attrito si risolvono col **teorema dell'energia cinetica** tratto per tratto, concatenando le velocità: $v = \sqrt{2gh}$ in caduta libera, $v_C = \sqrt{v_B^2 - 2\mu_d g\,d}$ con attrito.

> [!question] Per fissare le idee
> 1. Due scivoli lisci portano dalla stessa altezza allo stesso punto a terra, uno ripido e uno dolce. Con quale velocità arriva in fondo il corpo nei due casi? (Pensa all'indipendenza dal percorso.)
> 2. Perché sul piano inclinato l'accelerazione non dipende dalla massa del corpo?
> 3. Nel problema del § 6, se il tratto $BC$ fosse liscio, $v_C$ sarebbe maggiore o minore? E $v_D$?

---

📎 Lezione precedente: [[forze-inclinate-lavoro-ed-energia-cinetica]] · Prossima lezione: [[il-moto-parabolico]]
