---
title: "Ripasso generale ed energia potenziale"
description: "Ripasso di cinematica, dinamica ed energia e introduzione dell'energia potenziale per le forze conservative, gravitazionale ed elastica."
type: lecture
lezione: 11
titolo: Ripasso generale ed energia potenziale
corso: "Elementi di Fisica: Meccanica e Termodinamica"
docente: Gabriele Curci
libro: "Mazzoldi, Nigro, Voci, Elementi di Fisica: Meccanica e Termodinamica"
argomenti:
  - ripasso cinematica
  - ripasso dinamica
  - ripasso energia
  - energia potenziale
  - forze conservative
  - problema d'esame
---

# Lezione 11: Ripasso generale ed energia potenziale

📎 Lezione precedente: [[potenza-energia-spesa-e-forza-elastica]]

> [!abstract] In questa lezione
> - **Ripasso** organizzato di cinematica, dinamica ed energia in vista del 1° parziale
> - La novità concettuale: l'**energia potenziale** $U$ e la relazione $W = -\Delta U$ per le **forze conservative**
> - Energia potenziale **gravitazionale** ($U = mgh$) ed **elastica** ($U = \tfrac{1}{2}kx^2$)
> - Inizio di un problema d'esame completo (punti N e $a$)

---

## 1. Ripasso: cinematica

Le due definizioni di base e lo schema "integro per risalire":

$$v = \frac{ds}{dt}, \qquad a = \frac{dv}{dt}$$

Integrando $a$ si ricava $v$, integrando $v$ si ricava $s$. I due casi notevoli (dettagli in [[legge-oraria-moto-uniforme-accelerazione-e-moto-uniformemente-accelerato]] e [[formule-del-moto-uniformemente-accelerato-e-introduzione-alla-dinamica]]):

| | Moto uniforme ($a = 0$) | Moto uniformemente accelerato ($a$ costante) |
|---|---|---|
| Velocità | $v(t) = v_0$ | $v(t) = v_0 + at$ |
| Posizione | $s(t) = s_0 + v_0 t$ | $s(t) = s_0 + v_0 t + \tfrac{1}{2}at^2$ |

**Relazione senza il tempo.** Combinando $dt = \dfrac{ds}{v}$ con $a = \dfrac{dv}{ds}\,v$ si ottiene $a\,ds = v\,dv$, e integrando:

$$\int_{s_0}^{s} a\,ds = \int_{v_0}^{v} v\,dv \;\Longrightarrow\; \int_{s_0}^{s} m\,a\,ds = W = \Delta K$$

Riconosciamo qui il **teorema dell'energia cinetica**: la cinematica e l'energia sono due facce della stessa medaglia.

---

## 2. Ripasso: dinamica ed energia

**I tre principi di Newton** (dettagli in [[formule-del-moto-uniformemente-accelerato-e-introduzione-alla-dinamica]] e [[terzo-principio-della-dinamica-e-gravitazione-universale]]):

1. **Inerzia:** un corpo isolato mantiene la sua velocità.
2. $F = ma \;\Rightarrow\; a = \dfrac{F}{m}$.
3. **Azione e reazione:** $\vec F_{21} = -\vec F_{12}$.

**Energia** (dettagli in [[forze-inclinate-lavoro-ed-energia-cinetica]]):

$$dW = \vec F\cdot d\vec s = F\,ds\cos\theta, \qquad W = \int dW = \frac{1}{2}mv^2 - \frac{1}{2}mv_0^2 = \Delta K$$

**Gravità** (dettagli in [[terzo-principio-della-dinamica-e-gravitazione-universale]] e [[forza-peso-reazione-vincolare-e-attrito]]):

$$F = G\frac{Mm}{r^2}, \qquad g = G\frac{M}{r^2} \approx 9{,}8 \approx 10\ \frac{\text{m}}{\text{s}^2}, \qquad P = mg$$

**Reazioni vincolari e attrito** (dettagli in [[forza-peso-reazione-vincolare-e-attrito]]): la normale $N$ è perpendicolare al vincolo; l'attrito è opposto al movimento,

$$F_a = \mp\mu N, \qquad F_{as,max} = \mu_s N, \qquad F_{ad} = \mu_d N$$

---

## 3. La novità: l'energia potenziale

Finora abbiamo calcolato il lavoro delle forze conservative (peso ed elastica) caso per caso. Ora gli diamo una struttura unica con l'**energia potenziale**.

### 3.1 Forze conservative e $W = -\Delta U$

Una forza è **conservativa** quando il suo lavoro dipende solo dai punti iniziale e finale, non dal percorso (come visto in [[lavoro-della-forza-peso-piano-inclinato-ed-energia]] per il peso). Per una forza conservativa si può definire una funzione $U$, l'**energia potenziale**, tale che il lavoro sia pari alla **diminuzione** di $U$:

$$\boxed{\;W = -\Delta U = U_{iniziale} - U_{finale}\;}$$

Il segno meno ha un significato fisico preciso: quando la forza compie lavoro **positivo** (per esempio il peso che fa cadere un corpo), l'energia potenziale **diminuisce**, trasformandosi in energia cinetica. $U$ è dunque energia "immagazzinata", pronta a diventare movimento.

<svg viewBox="0 0 300 180" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Livelli di energia potenziale a quote diverse: più in alto, più energia potenziale">
  <!-- suolo -->
  <line x1="30" y1="160" x2="280" y2="160" stroke="currentColor" stroke-width="1.5"/>
  <g stroke="currentColor" stroke-width="1"><line x1="40" y1="160" x2="32" y2="168"/><line x1="70" y1="160" x2="62" y2="168"/><line x1="100" y1="160" x2="92" y2="168"/><line x1="130" y1="160" x2="122" y2="168"/><line x1="160" y1="160" x2="152" y2="168"/><line x1="190" y1="160" x2="182" y2="168"/><line x1="220" y1="160" x2="212" y2="168"/><line x1="250" y1="160" x2="242" y2="168"/></g>
  <!-- livelli -->
  <line x1="30" y1="120" x2="200" y2="120" stroke="currentColor" stroke-width="0.8" stroke-dasharray="4 3" opacity="0.6"/>
  <line x1="30" y1="80" x2="200" y2="80" stroke="currentColor" stroke-width="0.8" stroke-dasharray="4 3" opacity="0.6"/>
  <line x1="30" y1="40" x2="200" y2="40" stroke="currentColor" stroke-width="0.8" stroke-dasharray="4 3" opacity="0.6"/>
  <circle cx="120" cy="40" r="4" fill="currentColor"/>
  <!-- freccia caduta -->
  <line x1="150" y1="40" x2="150" y2="155" stroke="currentColor" stroke-width="1.5"/><polygon points="150,155 146,146 154,146" fill="currentColor"/>
  <g fill="currentColor" font-size="12" font-family="serif">
    <text x="8" y="44">U₃</text>
    <text x="8" y="84">U₂</text>
    <text x="8" y="124">U₁</text>
    <text x="158" y="100" font-style="italic">cade</text>
  </g>
</svg>

### 3.2 I due casi concreti

**Energia potenziale gravitazionale.** Il lavoro del peso è $W_P = mgh$ quando il corpo scende di un dislivello $h$ (vedi [[lavoro-della-forza-peso-piano-inclinato-ed-energia]]). Scrivendolo come $-\Delta U$ si ottiene:

$$\boxed{\;U_{grav} = mgh\;}$$

(con $h$ la quota rispetto a un livello di riferimento scelto). Più in alto è il corpo, più energia potenziale ha.

**Energia potenziale elastica.** Il lavoro della forza elastica è $W = \tfrac{1}{2}kx_0^2 - \tfrac{1}{2}kx^2$ (vedi [[potenza-energia-spesa-e-forza-elastica]]). Confrontando con $-\Delta U$:

$$\boxed{\;U_{el} = \frac{1}{2}kx^2\;}$$

è l'energia immagazzinata in una molla deformata di $x$.

> [!note] Verso dove va a parare
> Mettendo insieme $W = \Delta K$ (teorema dell'energia cinetica) e $W = -\Delta U$ (forze conservative) si ottiene $\Delta K = -\Delta U$, cioè $\Delta(K + U) = 0$: la somma $K + U$ **si conserva**. È la **conservazione dell'energia meccanica**, il cuore delle prossime lezioni.

---

## 4. Problema d'esame (9/2/26)

> Un corpo di massa $m = 2\ \text{kg}$ è spinto su un piano orizzontale da una forza $F = 80\ \text{N}$ inclinata di $\alpha = 30°$ **verso il basso**. Sul tratto $\overline{AB} = 1{,}5\ \text{m}$ c'è attrito $\mu_d = 0{,}6$; in $B$ inizia un piano inclinato di $\theta = 60°$ che scende fino a $C$, con dislivello $h = 2\ \text{m}$. Domande: **(a)** $N$ in $AB$; **(b)** $a$ in $AB$; **(c)** lavoro di $F$ in $AB$; **(d)** $v$ in $B$; **(e)** $v$ in $C$.

<svg viewBox="0 0 360 180" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Geometria del problema: tratto orizzontale AB con attrito, poi piano inclinato da B a C">
  <!-- tratto orizzontale -->
  <line x1="30" y1="60" x2="180" y2="60" stroke="currentColor" stroke-width="2.5"/>
  <g stroke="currentColor" stroke-width="1"><line x1="45" y1="60" x2="39" y2="67"/><line x1="65" y1="60" x2="59" y2="67"/><line x1="85" y1="60" x2="79" y2="67"/><line x1="105" y1="60" x2="99" y2="67"/><line x1="125" y1="60" x2="119" y2="67"/><line x1="145" y1="60" x2="139" y2="67"/><line x1="165" y1="60" x2="159" y2="67"/></g>
  <!-- inclinato da B a C -->
  <line x1="180" y1="60" x2="230" y2="140" stroke="currentColor" stroke-width="2.5"/>
  <line x1="180" y1="140" x2="230" y2="140" stroke="currentColor" stroke-width="0.8" stroke-dasharray="4 3" opacity="0.6"/>
  <!-- blocco in A -->
  <rect x="40" y="46" width="26" height="14" fill="none" stroke="currentColor" stroke-width="1.4"/>
  <!-- F inclinata verso il basso -->
  <line x1="30" y1="30" x2="55" y2="48" stroke="currentColor" stroke-width="2"/><polygon points="55,48 45,46 49,39" fill="currentColor"/>
  <g fill="currentColor" font-size="12" font-family="serif">
    <text x="28" y="28" font-style="italic">F</text>
    <text x="42" y="75">A</text>
    <text x="178" y="54">B</text>
    <text x="232" y="144">C</text>
    <text x="200" y="135">θ</text>
    <text x="240" y="105">h</text>
  </g>
</svg>

### 4.1 (a) Reazione normale in AB

La forza $F$ è inclinata **verso il basso**, quindi la sua componente verticale $F\sin\alpha$ si somma al peso, premendo di più il corpo sul piano. Equilibrio verticale:

$$N - P - F\sin\alpha = 0 \;\Longrightarrow\; N = mg + F\sin\alpha = 2\cdot 10 + 80\cdot 0{,}5 = 60\ \text{N}$$

> [!note] Inclinata in giù: aumenta l'attrito
> A differenza del caso di [[forze-inclinate-lavoro-ed-energia-cinetica]] (forza inclinata verso l'alto, che alleggeriva il corpo), qui la spinta verso il basso **aumenta** $N$ e quindi anche l'attrito. Premere mentre si spinge è controproducente se si vuole far scivolare un corpo.

### 4.2 (b) Accelerazione in AB

Equilibrio orizzontale, con l'attrito dinamico $F_a = \mu_d N$ opposto al moto:

$$F\cos\alpha - F_a = ma \;\Longrightarrow\; a = \frac{F\cos\alpha - \mu_d N}{m} = \frac{80\cdot 0{,}866 - 0{,}6\cdot 60}{2} = \frac{69{,}3 - 36}{2} \approx 17\ \frac{\text{m}}{\text{s}^2}$$

> [!note] I punti (c), (d), (e)
> Il lavoro di $F$ in $AB$, la velocità in $B$ e la velocità in $C$ (dopo la discesa lungo il piano inclinato) si risolvono con il teorema dell'energia cinetica e il lavoro della forza peso, esattamente come nei problemi concatenati di [[lavoro-della-forza-peso-piano-inclinato-ed-energia]]. Vengono completati nella lezione successiva [[esercizi-desame-e-sistemi-di-corpi-collegati]].

---

## Riepilogo

- **Ripasso:** cinematica ($v = ds/dt$, $a = dv/dt$, moto uniforme e uniformemente accelerato), dinamica (3 principi), energia ($W = \Delta K$), gravità ($P = mg$), attrito ($F_a = \mu N$).
- **Forza conservativa:** lavoro indipendente dal percorso; si può definire l'energia potenziale con $W = -\Delta U$.
- **Energia potenziale gravitazionale:** $U_{grav} = mgh$.
- **Energia potenziale elastica:** $U_{el} = \tfrac{1}{2}kx^2$.
- Da $\Delta K = -\Delta U$ segue $\Delta(K+U) = 0$: anticipazione della **conservazione dell'energia meccanica**.
- Forza inclinata **verso il basso**: $N = mg + F\sin\alpha$ (aumenta l'attrito).

> [!question] Per fissare le idee
> 1. Perché nella relazione $W = -\Delta U$ c'è il segno meno? Cosa succede a $U$ quando la forza fa lavoro positivo?
> 2. Scegliendo un livello di riferimento diverso per la quota, $U_{grav}$ cambia. Perché questo non altera la fisica del problema?
> 3. In quali punti del moto di una molla l'energia è tutta cinetica, e in quali tutta potenziale?

---

📎 Lezione precedente: [[potenza-energia-spesa-e-forza-elastica]] · Prossima lezione: [[esercizi-desame-e-sistemi-di-corpi-collegati]]
