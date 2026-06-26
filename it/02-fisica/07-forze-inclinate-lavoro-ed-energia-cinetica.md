---
title: "Forze inclinate, lavoro ed energia cinetica"
description: "Scomposizione delle forze inclinate, definizione di lavoro tramite il prodotto scalare e il teorema dell'energia cinetica."
type: lecture
lezione: 7
titolo: Forze inclinate, lavoro ed energia cinetica
corso: "Elementi di Fisica: Meccanica e Termodinamica"
docente: Gabriele Curci
libro: "Mazzoldi, Nigro, Voci, Elementi di Fisica: Meccanica e Termodinamica"
argomenti:
  - scomposizione di forze inclinate
  - condizione di moto con attrito
  - lavoro di una forza
  - prodotto scalare
  - teorema dell'energia cinetica
---

# Lezione 7: Forze inclinate, lavoro ed energia cinetica

📎 Lezione precedente: [[problemi-con-lattrito-e-introduzione-ai-vettori]]

> [!abstract] In questa lezione
> - Scomporre una **forza inclinata** e stabilire se un corpo si mette in moto
> - Risolvere il moto con due forze (calcolo di $a$ e $v$)
> - Il **lavoro** di una forza: $W = \vec F\cdot d\vec s = F\,ds\cos\alpha$ (prodotto scalare)
> - Forze **motrici**, **frenanti** e a **lavoro nullo**
> - Il **teorema dell'energia cinetica**: $W_{AB} = \tfrac{1}{2}mv_B^2 - \tfrac{1}{2}mv_A^2$

---

## 1. Un corpo si mette in moto? (forza inclinata)

> Un corpo di massa $m = 2{,}1\ \text{kg}$ è spinto da una forza $F = 23\ \text{N}$ inclinata di $\alpha = 25°$ sopra l'orizzontale; il coefficiente d'attrito è $\mu = 0{,}45$. Dimostrare che il corpo inizia a muoversi.

Quando una forza è inclinata, il primo passo è sempre **scomporla** nelle componenti lungo gli assi: $F_x = F\cos\alpha$ (orizzontale, che spinge) e $F_y = F\sin\alpha$ (verticale, che solleva un po' il corpo).

<svg viewBox="0 0 280 170" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Forza inclinata su un blocco: componenti, normale, attrito, peso">
  <line x1="20" y1="120" x2="270" y2="120" stroke="currentColor" stroke-width="2"/>
  <g stroke="currentColor" stroke-width="1"><line x1="30" y1="120" x2="22" y2="128"/><line x1="55" y1="120" x2="47" y2="128"/><line x1="80" y1="120" x2="72" y2="128"/><line x1="105" y1="120" x2="97" y2="128"/><line x1="130" y1="120" x2="122" y2="128"/><line x1="155" y1="120" x2="147" y2="128"/><line x1="180" y1="120" x2="172" y2="128"/></g>
  <rect x="80" y="98" width="44" height="22" fill="none" stroke="currentColor" stroke-width="1.5"/>
  <circle cx="102" cy="120" r="3" fill="currentColor"/>
  <!-- F inclinata -->
  <line x1="102" y1="120" x2="175" y2="68" stroke="currentColor" stroke-width="2.5"/><polygon points="175,68 164,71 170,79" fill="currentColor"/>
  <!-- componenti -->
  <line x1="102" y1="120" x2="160" y2="120" stroke="currentColor" stroke-width="1.2" stroke-dasharray="3 2"/>
  <line x1="160" y1="120" x2="160" y2="78" stroke="currentColor" stroke-width="1.2" stroke-dasharray="3 2"/>
  <!-- N -->
  <line x1="102" y1="98" x2="102" y2="55" stroke="currentColor" stroke-width="2"/><polygon points="102,55 98,64 106,64" fill="currentColor"/>
  <!-- attrito -->
  <line x1="80" y1="120" x2="35" y2="120" stroke="currentColor" stroke-width="2"/><polygon points="35,120 45,115 45,125" fill="currentColor"/>
  <!-- P -->
  <line x1="102" y1="120" x2="102" y2="158" stroke="currentColor" stroke-width="2"/><polygon points="102,158 98,149 106,149" fill="currentColor"/>
  <g fill="currentColor" font-size="12" font-family="serif">
    <text x="178" y="66">F</text><text x="108" y="60">N</text><text x="20" y="124">Fₐ</text><text x="108" y="155">P</text>
    <text x="130" y="116" font-size="10">α</text><text x="165" y="100" font-size="10">F_y</text><text x="125" y="133" font-size="10">Fₓ</text>
  </g>
</svg>

Scriviamo il secondo principio lungo i due assi. Il corpo non si solleva, quindi lungo $y$ l'accelerazione è nulla; lungo $x$ vediamo se la spinta vince l'attrito.

$$y:\quad N - P + F_y = 0 \;\Longrightarrow\; N = P - F\sin\alpha = mg - F\sin\alpha$$

$$N = 2{,}1\cdot 10 - 23\cdot\sin 25° = 21 - 23\cdot 0{,}42 \approx 11\ \text{N}$$

> [!note] La componente verticale alleggerisce il corpo
> Poiché $F$ punta verso l'alto, $F_y$ riduce la reazione normale ($N = mg - F\sin\alpha < mg$). Una spinta inclinata verso l'alto "scarica" un po' il peso sul vincolo, e quindi diminuisce anche l'attrito disponibile (che dipende da $N$). È il motivo per cui conviene tirare un trolley con il manico inclinato invece che spingerlo verso il basso.

Ora confrontiamo, lungo $x$, la componente motrice con l'attrito statico massimo:

$$F\cos\alpha - F_{as,max} = F\cos\alpha - \mu N = 23\cdot 0{,}91 - 0{,}45\cdot 11 \approx 21 - 5 = 16 > 0$$

La spinta orizzontale ($\approx 21\ \text{N}$) supera nettamente l'attrito statico massimo ($\approx 5\ \text{N}$): **il corpo si mette in moto**.

---

## 2. Moto con due forze (parte cinematica)

> Un corpo di massa $m = 2{,}7\ \text{kg}$ è soggetto a $F_1 = 15\ \text{N}$ (orizzontale) e $F_2 = 20\ \text{N}$ (inclinata di $\alpha = 25°$). Nel tratto $AB$ il piano è liscio; il corpo parte da fermo in $A$ e impiega $t_{AB} = 0{,}4\ \text{s}$ per arrivare in $B$. Trovare **(a)** l'accelerazione $a_{AB}$ e **(b)** la velocità $v_B$.

**(a)** Secondo principio nel tratto $AB$ (senza attrito):

$$x:\quad F_1 + F_{2x} = m\,a_{AB} \qquad y:\quad N - P + F_{2y} = 0$$

$$a_{AB} = \frac{F_1 + F_2\cos\alpha}{m} = \frac{15 + 20\cdot 0{,}9}{2{,}7} = \frac{33}{2{,}7} \approx 12\ \frac{\text{m}}{\text{s}^2}$$

**(b)** Il corpo parte da fermo ($v_A = 0$), quindi con $v(t) = v_A + a_{AB}\,t$:

$$v_B = a_{AB}\,t_{AB} = 12\cdot 0{,}4 = 4{,}8\ \frac{\text{m}}{\text{s}}$$

Riprenderemo questo problema nel § 5, dopo aver introdotto l'energia, per trovare la velocità nel punto $C$.

---

## 3. Il lavoro di una forza

Introduciamo ora una delle grandezze più potenti della fisica: l'**energia**, a partire dal concetto di **lavoro**.

### 3.1 Definizione

Consideriamo una forza $\vec F$ che agisce mentre il corpo compie uno spostamento infinitesimo $d\vec s$. Solo la **componente della forza lungo lo spostamento** compie lavoro: se $\alpha$ è l'angolo tra $\vec F$ e $d\vec s$, questa componente è $F\cos\alpha$. Il lavoro infinitesimo è

$$\boxed{\;dW = \vec F\cdot d\vec s = F\,ds\,\cos\alpha\;}$$

L'operazione $\vec F\cdot d\vec s$ è il **prodotto scalare** tra i due vettori: moltiplica i moduli per il coseno dell'angolo compreso, e restituisce un numero (uno scalare, non un vettore).

<svg viewBox="0 0 260 120" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Componente della forza lungo lo spostamento">
  <line x1="30" y1="90" x2="230" y2="90" stroke="currentColor" stroke-width="2"/>
  <polygon points="230,90 220,85 220,95" fill="currentColor"/>
  <line x1="30" y1="90" x2="150" y2="35" stroke="currentColor" stroke-width="2.5"/>
  <polygon points="150,35 139,39 145,47" fill="currentColor"/>
  <line x1="150" y1="35" x2="150" y2="90" stroke="currentColor" stroke-width="0.9" stroke-dasharray="3 2" opacity="0.7"/>
  <path d="M 70 90 A 40 40 0 0 0 62 73" fill="none" stroke="currentColor" stroke-width="1"/>
  <g fill="currentColor" font-size="13" font-family="serif" font-style="italic">
    <text x="95" y="55">F</text>
    <text x="232" y="94">ds</text>
    <text x="74" y="82" font-size="11">α</text>
    <text x="95" y="103" font-size="11">F cos α</text>
  </g>
</svg>

> [!note] Le dimensioni del lavoro: il joule
> $$[W] = [F]\,[L] = [M]\frac{[L]}{[T]^2}\,[L] = [M]\frac{[L]^2}{[T]^2} = [M]\left(\frac{[L]}{[T]}\right)^2$$
> L'unità è il **joule**: $1\ \text{J} = 1\ \text{N}\cdot\text{m} = 1\ \text{kg}\,\text{m}^2/\text{s}^2$. Nota che ha le dimensioni di una massa per una velocità al quadrato: lo ritroveremo subito nell'energia cinetica.

### 3.2 Segno del lavoro: motrice, frenante, nulla

Il segno del lavoro dipende dall'angolo $\alpha$ tra forza e spostamento:

<svg viewBox="0 0 420 130" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Tre casi del lavoro: forza motrice, nulla, frenante">
  <!-- motrice -->
  <line x1="20" y1="95" x2="130" y2="95" stroke="currentColor" stroke-width="1.5"/><polygon points="130,95 122,91 122,99" fill="currentColor"/>
  <line x1="40" y1="95" x2="95" y2="55" stroke="currentColor" stroke-width="2.5"/><polygon points="95,55 85,57 90,65" fill="currentColor"/>
  <!-- nulla -->
  <line x1="160" y1="95" x2="270" y2="95" stroke="currentColor" stroke-width="1.5"/><polygon points="270,95 262,91 262,99" fill="currentColor"/>
  <line x1="195" y1="95" x2="195" y2="50" stroke="currentColor" stroke-width="2.5"/><polygon points="195,50 191,59 199,59" fill="currentColor"/>
  <!-- frenante -->
  <line x1="300" y1="95" x2="410" y2="95" stroke="currentColor" stroke-width="1.5"/><polygon points="410,95 402,91 402,99" fill="currentColor"/>
  <line x1="345" y1="95" x2="305" y2="55" stroke="currentColor" stroke-width="2.5"/><polygon points="305,55 309,64 316,57" fill="currentColor"/>
  <g fill="currentColor" font-size="11" font-family="serif" text-anchor="middle">
    <text x="75" y="120">motrice (W&gt;0)</text>
    <text x="215" y="120">nulla (W=0)</text>
    <text x="355" y="120">frenante (W&lt;0)</text>
    <text x="98" y="50" font-style="italic">F</text>
    <text x="203" y="46" font-style="italic">F</text>
    <text x="300" y="50" font-style="italic">F</text>
  </g>
</svg>

| Angolo | $\cos\alpha$ | Lavoro | Tipo di forza |
|---|:---:|:---:|---|
| $0 \le \alpha < 90°$ | positivo | $W > 0$ | **motrice** (favorisce il moto) |
| $\alpha = 90°$ | $0$ | $W = 0$ | **lavoro nullo** (al più cambia la direzione) |
| $90° < \alpha \le 180°$ | negativo | $W < 0$ | **frenante** (si oppone al moto) |

L'attrito dinamico, sempre opposto al moto, è l'esempio tipico di forza frenante ($W < 0$). Una forza perpendicolare allo spostamento (come la reazione normale su un piano orizzontale) non compie lavoro.

---

## 4. Il teorema dell'energia cinetica

Per uno spostamento finito da $A$ a $B$ lungo una traiettoria qualsiasi, il lavoro totale è l'integrale dei contributi infinitesimi:

$$W_{AB} = \int_A^B dW = \int_A^B \vec F\cdot d\vec s = \int_A^B F\cos\alpha\,ds = \int_A^B F_T\,ds$$

dove $F_T = F\cos\alpha$ è la **componente tangenziale** della forza (lungo la traiettoria). Usiamo ora il secondo principio, $F_T = m\,a$, e il passaggio chiave $a\,ds = \dfrac{dv}{dt}\,ds = \dfrac{ds}{dt}\,dv = v\,dv$:

$$W_{AB} = \int_A^B m\,a\,ds = \int_A^B m\,\frac{dv}{dt}\,ds = \int_A^B m\,v\,dv = m\left[\frac{1}{2}v^2\right]_A^B$$

da cui

$$\boxed{\;W_{AB} = \frac{1}{2}m\,v_B^2 - \frac{1}{2}m\,v_A^2\;}$$

### 4.1 Energia cinetica

La quantità $\tfrac{1}{2}mv^2$ (una massa per una velocità al quadrato, le dimensioni di un lavoro) si chiama **energia cinetica**:

$$\boxed{\;K = \frac{1}{2}m\,v^2\;}$$

Il risultato si enuncia così:

> **Teorema dell'energia cinetica.** Il lavoro delle forze agenti su un corpo di massa $m$ che si muove lungo una traiettoria da $A$ a $B$ è pari alla differenza di energia cinetica tra $A$ e $B$:
> $$W_{AB} = K_B - K_A$$

È uno strumento potentissimo: collega **forze e spostamenti** (il lavoro) con lo **stato di moto** (la velocità), senza dover risolvere passo passo la legge oraria. Se conosciamo il lavoro fatto, conosciamo subito la variazione di velocità, e viceversa.

---

## 5. Applicazione: velocità nel punto $C$ (con attrito)

Riprendiamo il problema del § 2. Dopo il tratto liscio $AB$, il corpo percorre il tratto $BC$ con attrito dinamico $\mu_d = 0{,}3$ e $\overline{BC} = 6\ \text{m}$. Vogliamo $v_C$.

Prima la reazione normale e l'attrito sul tratto $BC$:

$$N = mg - F_2\sin\alpha = 2{,}7\cdot 10 - 20\cdot\sin 25° \approx 18\ \text{N}$$
$$F_{ad} = \mu_d N = 0{,}3\cdot 18 \approx 5{,}4\ \text{N}$$

La forza risultante lungo il moto, nel tratto $BC$, è $F_1 + F_2\cos\alpha - F_{ad}$. Il lavoro su $BC$ (forza costante per spostamento) è quindi

$$W_{BC} = (F_1 + F_2\cos\alpha - F_{ad})\cdot\overline{BC} = (15 + 18 - 5{,}4)\cdot 6 \approx 166\ \text{J}$$

> [!warning] Sul numero scritto in aula
> L'aritmetica dà $(15 + 18 - 5{,}4) = 27{,}6$, e $27{,}6\cdot 6 \approx 166\ \text{J}$. Il valore intermedio annotato in aula non coincide con questo prodotto (sembra un errore di calcolo). Usiamo $W_{BC} \approx 166\ \text{J}$.

Ora applichiamo il teorema dell'energia cinetica al tratto $BC$, con $v_B = 4{,}8\ \text{m/s}$ (dal § 2):

$$W_{BC} = \frac{1}{2}m\,v_C^2 - \frac{1}{2}m\,v_B^2 \;\Longrightarrow\; \frac{1}{2}m\,v_C^2 = W_{BC} + \frac{1}{2}m\,v_B^2$$

$$v_C = \sqrt{\frac{2\,W_{BC}}{m} + v_B^2} = \sqrt{\frac{2\cdot 166}{2{,}7} + 4{,}8^2} \approx \sqrt{123 + 23} \approx 12\ \frac{\text{m}}{\text{s}}$$

> [!tip] Perché qui l'energia conviene
> Avremmo potuto trovare $a$ su $BC$, poi $t$, poi $v_C$: tre passaggi. Con il teorema dell'energia cinetica basta calcolare un lavoro e applicare una formula. Quando il problema chiede una velocità a partire da forze e distanze (senza interesse per i tempi), l'energia è quasi sempre la via più rapida.

---

## Riepilogo

- Una **forza inclinata** va scomposta: $F_x = F\cos\alpha$ spinge, $F_y = F\sin\alpha$ modifica la reazione normale ($N = mg - F\sin\alpha$ se inclinata verso l'alto).
- Il corpo **si muove** se la componente motrice supera l'attrito statico massimo: $F\cos\alpha > \mu N$.
- **Lavoro:** $W = \vec F\cdot d\vec s = F\,ds\cos\alpha$ (prodotto scalare). Unità: **joule**, $1\ \text{J} = 1\ \text{N·m}$.
- Forza **motrice** ($W>0$), **frenante** ($W<0$), a **lavoro nullo** ($W=0$, forza perpendicolare al moto).
- **Energia cinetica:** $K = \tfrac{1}{2}mv^2$.
- **Teorema dell'energia cinetica:** $W_{AB} = K_B - K_A = \tfrac{1}{2}mv_B^2 - \tfrac{1}{2}mv_A^2$.

> [!question] Per fissare le idee
> 1. Perché la reazione normale di un piano orizzontale non compie mai lavoro su un corpo che vi scivola sopra?
> 2. Un corpo si muove a velocità costante: quanto vale il lavoro totale delle forze su di esso? (Usa il teorema dell'energia cinetica.)
> 3. Spingi una cassa per $10\ \text{m}$ e l'attrito compie $-50\ \text{J}$ di lavoro. Cosa è successo a quell'energia? (Anticipazione delle prossime lezioni.)

---

📎 Lezione precedente: [[problemi-con-lattrito-e-introduzione-ai-vettori]] · Prossima lezione: [[lavoro-della-forza-peso-piano-inclinato-ed-energia]]
