---
title: "Cambiamenti di fase, dilatazione e leggi dei gas"
description: "I cambiamenti di fase con il calore latente, i modi di scambio del calore, la dilatazione termica, l'esperimento di Joule e le leggi dei gas di Boyle e Gay-Lussac."
type: lecture
lezione: 16
topics:
  - cambiamenti di fase
  - calore latente
  - scambio di calore
  - dilatazione termica
  - esperimento di Joule
  - gas perfetto
  - lavoro di un gas
  - leggi dei gas
---

# Lezione 16: Cambiamenti di fase, dilatazione e leggi dei gas

📎 Lezione precedente: [[introduzione-alla-termodinamica-temperatura-e-calore]]

> [!abstract] In questa lezione
> - I **cambiamenti di fase** avvengono a temperatura costante: il **calore latente** $Q = m\lambda$
> - I tre modi di **scambio del calore**: conduzione (legge di Fourier), convezione, irraggiamento
> - La **dilatazione termica** lineare e cubica ($\alpha \approx 3\lambda$)
> - L'**esperimento di Joule**: lavoro e calore sono equivalenti
> - Il **gas perfetto** e il **lavoro di un gas** ($L = \int P\,dV$)
> - Le **leggi dei gas**: Boyle e Gay-Lussac

---

## 1. I cambiamenti di fase

Quando si scalda un solido, all'inizio la temperatura sale secondo $dQ = m c_s\,dT$ (vedi [[introduzione-alla-termodinamica-temperatura-e-calore]]). Ma al momento del **passaggio di stato** (fusione, ebollizione) accade qualcosa di diverso: la temperatura **rimane costante** mentre si continua a fornire calore. Le transizioni di fase sono **isoterme**.

Per esempio, scaldando del ghiaccio su una piastra a $T_A > 0\,°\text{C}$, prima la sua temperatura sale fino al punto di fusione $T_{fus} = 273{,}15\ \text{K} = 0\,°\text{C}$ (calore $Q = m c_s\,\Delta T$), poi resta a $0\,°\text{C}$ finché tutto il ghiaccio è diventato acqua.

<svg viewBox="0 0 320 170" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Curva temperatura-calore con plateau ai cambiamenti di fase">
  <line x1="35" y1="150" x2="305" y2="150" stroke="currentColor" stroke-width="1.3"/>
  <polygon points="305,150 296,146 296,154" fill="currentColor"/>
  <line x1="35" y1="150" x2="35" y2="20" stroke="currentColor" stroke-width="1.3"/>
  <polygon points="35,20 31,29 39,29" fill="currentColor"/>
  <!-- curva: salita, plateau, salita, plateau, salita -->
  <polyline points="35,130 80,105 140,105 185,60 250,60 290,35" fill="none" stroke="currentColor" stroke-width="2"/>
  <line x1="35" y1="105" x2="80" y2="105" stroke="currentColor" stroke-width="0.7" stroke-dasharray="3 2" opacity="0.6"/>
  <line x1="35" y1="60" x2="185" y2="60" stroke="currentColor" stroke-width="0.7" stroke-dasharray="3 2" opacity="0.6"/>
  <g fill="currentColor" font-size="11" font-family="serif">
    <text x="300" y="165">Q</text>
    <text x="20" y="24">T</text>
    <text x="95" y="100" font-size="9">fusione</text>
    <text x="205" y="55" font-size="9">ebollizione</text>
  </g>
</svg>

Il calore assorbito durante la transizione (i tratti orizzontali) è il **calore latente**:

$$\boxed{\;Q = m\,\lambda\;}$$

dove $\lambda$ è il calore latente specifico del passaggio (di **fusione**, di **vaporizzazione**, in J/kg). Non cambia la temperatura: l'energia serve a rompere i legami tra le molecole e riorganizzare la struttura.

> [!tip] Perché il ghiaccio raffredda così bene
> Sciogliersi costa molta energia (il calore latente di fusione dell'acqua è grande): per questo un cubetto di ghiaccio raffredda una bibita molto più di acqua fredda alla stessa temperatura. Assorbe calore "a temperatura costante" mentre fonde, prima ancora di scaldarsi.

---

## 2. I modi di scambio del calore

Il calore si trasmette in tre modi:

- **Conduzione**: attraverso un materiale, per contatto tra molecole vicine (un cucchiaio nel tè caldo).
- **Convezione**: per movimento di un fluido (l'aria calda che sale, l'acqua che bolle).
- **Irraggiamento**: tramite onde elettromagnetiche, anche nel vuoto (il calore del Sole).

### 2.1 La legge di Fourier (conduzione)

Il flusso di calore per conduzione attraverso una lastra è proporzionale al **gradiente di temperatura** $\dfrac{dT}{dx}$ e all'area $S$:

$$dQ = -k\,\frac{dT}{dx}\,S\,dt$$

dove $k$ è la **conducibilità termica** del materiale, in $\text{J}/(\text{m}\cdot\text{s}\cdot\text{K}) = \text{W}/(\text{m}\cdot\text{K})$. Il segno meno indica che il calore fluisce dal caldo al freddo (verso le $T$ decrescenti). I metalli hanno $k$ alto (conducono bene), gli isolanti $k$ basso.

---

## 3. La dilatazione termica

Quasi tutti i materiali si dilatano scaldandosi. Per una sbarra di lunghezza iniziale $l_0$, la dilatazione lineare è proporzionale a $\Delta T$:

$$\Delta l = l_0\,\lambda\,\Delta T \;\Longrightarrow\; l(T) = l_0(1 + \lambda\,\Delta T)$$

con $\lambda$ **coefficiente di dilatazione lineare** (in $1/\text{K}$).

Per il **volume**, dilatando le tre dimensioni si ha $V = V_0(1 + \lambda\Delta T)^3$. Sviluppando il cubo e trascurando i termini in $\lambda^2$ e $\lambda^3$ (piccolissimi):

$$V(T) = V_0(1 + \lambda\Delta T)^3 \approx V_0(1 + 3\lambda\,\Delta T) = V_0(1 + \alpha\,\Delta T)$$

dove $\alpha = 3\lambda$ è il **coefficiente di dilatazione cubica**.

> [!note] Materiali isotropi e anisotropi, e l'anomalia dell'acqua
> In un materiale **isotropo** la dilatazione è uguale in tutte le direzioni; in uno **anisotropo** dipende dalla direzione. L'**acqua** fa eccezione: tra $0$ e $4\,°\text{C}$ si **contrae** scaldandosi (la densità è massima a $4\,°\text{C}$). È il motivo per cui il ghiaccio galleggia e i laghi gelano dalla superficie, lasciando vivi i pesci sotto.

---

## 4. L'esperimento di Joule: lavoro = calore

Un mulinello immerso nell'acqua è messo in rotazione da pesi che cadono. L'energia potenziale gravitazionale dei pesi diventa lavoro sul mulinello, che agita l'acqua e ne **alza la temperatura**. Joule misurò che il lavoro meccanico fornito è proporzionale all'aumento di temperatura, esattamente come se si fosse fornito calore:

$$W_{ad} = -\Delta U = -(U_{fin} - U_{in}) \propto \Delta T$$

Questo stabilisce l'**equivalenza tra lavoro e calore**: sono due modi di trasferire la stessa cosa, l'**energia**. Il calore non è un fluido speciale, ma energia in transito (lo confermò la conversione $1\ \text{cal} = 4{,}184\ \text{J}$ vista in [[potenza-energia-spesa-e-forza-elastica]]). È la base del primo principio della termodinamica.

---

## 5. Il gas perfetto

Per studiare i gas introduciamo un modello ideale, il **gas perfetto**, valido per un gas **rarefatto** (bassa densità) e a temperatura molto più alta di quella di liquefazione ($T \gg T_L$). Le sue ipotesi:

- le molecole fanno **urti elastici** (tra loro e con le pareti);
- **non ci sono legami** (forze di attrazione) tra le molecole;
- le **dimensioni** delle molecole sono trascurabili rispetto alle **distanze** tra di esse.

In queste condizioni le molecole sono "palline" indipendenti che rimbalzano: un modello semplice ma sorprendentemente accurato per i gas reali in condizioni ordinarie.

---

## 6. Il lavoro di un gas

Un gas in un cilindro con pistone può compiere lavoro spingendo il pistone. Se il pistone (area $S$) si sposta di $dh$, il volume cambia di $dV = S\,dh$, e il lavoro è

$$dL = F\,ds = P\,S\,dh = P\,dV \;\Longrightarrow\; \boxed{\;L = \int_A^B P\,dV\;}$$

<svg viewBox="0 0 300 150" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Lavoro di un gas come area sotto la curva nel piano P-V">
  <!-- cilindro -->
  <rect x="30" y="40" width="50" height="80" fill="none" stroke="currentColor" stroke-width="1.5"/>
  <line x1="30" y1="55" x2="80" y2="55" stroke="currentColor" stroke-width="2"/>
  <line x1="55" y1="40" x2="55" y2="22" stroke="currentColor" stroke-width="1.5"/>
  <text x="40" y="100" fill="currentColor" font-size="11" font-style="italic">gas</text>
  <!-- piano P-V -->
  <line x1="140" y1="125" x2="290" y2="125" stroke="currentColor" stroke-width="1.3"/>
  <polygon points="290,125 282,121 282,129" fill="currentColor"/>
  <line x1="140" y1="125" x2="140" y2="25" stroke="currentColor" stroke-width="1.3"/>
  <polygon points="140,25 136,33 144,33" fill="currentColor"/>
  <path d="M 165 55 Q 220 45 270 80" fill="none" stroke="currentColor" stroke-width="2"/>
  <line x1="165" y1="55" x2="165" y2="125" stroke="currentColor" stroke-width="0.8" stroke-dasharray="3 2"/>
  <line x1="270" y1="80" x2="270" y2="125" stroke="currentColor" stroke-width="0.8" stroke-dasharray="3 2"/>
  <path d="M 165 125 L 165 55 Q 220 45 270 80 L 270 125 Z" fill="currentColor" opacity="0.15"/>
  <g fill="currentColor" font-size="11" font-family="serif">
    <text x="158" y="50">A</text><text x="272" y="76">B</text>
    <text x="285" y="138">V</text><text x="128" y="32">P</text>
    <text x="205" y="110" font-size="10" font-style="italic">L=∫P dV</text>
  </g>
</svg>

Graficamente, nel piano $P$–$V$ il lavoro è l'**area sotto la curva** della trasformazione da $A$ a $B$. Questo è centrale: il lavoro di un gas dipende dal **percorso** seguito nel piano $P$–$V$, non solo dagli stati iniziale e finale.

---

## 7. Le leggi dei gas

Sperimentalmente, tenendo fissa una delle tre variabili di stato, si trovano relazioni semplici tra le altre due.

### 7.1 Legge di Boyle (trasformazione isoterma)

A **temperatura costante**, pressione e volume sono inversamente proporzionali:

$$\boxed{\;P\,V = \text{costante}\;}\qquad P_1 V_1 = P_2 V_2$$

Nel piano $P$–$V$ le **isoterme** sono iperboli ($P = K/V$); a temperatura più alta corrisponde un'iperbola più "esterna".


### 7.2 Legge di Gay-Lussac isobara (pressione costante)

A **pressione costante**, il volume cresce linearmente con la temperatura:

$$V = V_0\,(1 + \alpha\,T[°\text{C}]), \qquad \alpha = \frac{1}{273{,}15}\ °\text{C}^{-1}$$

### 7.3 Legge di Gay-Lussac isocora (volume costante)

A **volume costante**, la pressione cresce linearmente con la temperatura:

$$P = P_0\,(1 + \beta\,T[°\text{C}]), \qquad \beta = \alpha = \frac{1}{273{,}15}\ °\text{C}^{-1}$$

> [!note] Verso la legge dei gas perfetti
> La legge isobara si può riscrivere $V = V_0\,\alpha\left(\dfrac{1}{\alpha} + T[°\text{C}]\right) = V_0\,\alpha\,T[\text{K}]$, cioè $V \propto T$ in **kelvin**. È proprio qui che emerge l'utilità della scala assoluta: usando i kelvin, le leggi dei gas diventano proporzionalità dirette. Mettendo insieme Boyle e Gay-Lussac si ottiene l'**equazione di stato dei gas perfetti** $PV = nRT$, argomento della prossima lezione.

| Trasformazione | Costante | Legge | Nel piano P-V |
|---|---|---|---|
| **Isoterma** (Boyle) | $T$ | $PV = \text{cost}$ | iperbole |
| **Isobara** (Gay-Lussac) | $P$ | $V = V_0(1+\alpha T)$ | segmento orizzontale |
| **Isocora** (Gay-Lussac) | $V$ | $P = P_0(1+\beta T)$ | segmento verticale |

---

## Riepilogo

- **Cambiamenti di fase:** avvengono a temperatura costante; calore latente $Q = m\lambda$ (fusione, vaporizzazione).
- **Scambio di calore:** conduzione (Fourier, $dQ = -k\,\tfrac{dT}{dx}\,S\,dt$), convezione, irraggiamento.
- **Dilatazione:** lineare $l = l_0(1+\lambda\Delta T)$, cubica $V = V_0(1+\alpha\Delta T)$ con $\alpha \approx 3\lambda$. L'acqua è anomala (densità massima a $4\,°\text{C}$).
- **Joule:** lavoro e calore sono equivalenti (entrambi trasferiscono energia).
- **Gas perfetto:** rarefatto, urti elastici, niente legami, dimensioni molecolari trascurabili.
- **Lavoro di un gas:** $L = \int P\,dV$ = area sotto la curva nel piano $P$–$V$; dipende dal percorso.
- **Leggi dei gas:** Boyle ($PV = \text{cost}$), Gay-Lussac isobara ($V \propto T$) e isocora ($P \propto T$) in kelvin.

> [!question] Per fissare le idee
> 1. Perché, mentre un cubetto di ghiaccio fonde, la sua temperatura resta a $0\,°\text{C}$ anche se gli si fornisce calore?
> 2. Perché il lavoro di un gas dipende dal percorso seguito nel piano $P$–$V$ e non solo dagli stati iniziale e finale?
> 3. Perché le leggi dei gas si scrivono in modo più semplice usando i kelvin invece dei gradi celsius?

---

📎 Lezione precedente: [[introduzione-alla-termodinamica-temperatura-e-calore]] · Prossima lezione: [[equazione-di-stato-dei-gas-perfetti-e-trasformazioni]]
