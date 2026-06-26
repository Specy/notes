---
titolo: Formulario di Fisica — Meccanica e Termodinamica
corso: "Elementi di Fisica: Meccanica e Termodinamica"
docente: Gabriele Curci
libro: "Mazzoldi, Nigro, Voci, Elementi di Fisica: Meccanica e Termodinamica"
tipo: formulario
---

# Formulario di Fisica

## Costanti e conversioni

| Simbolo | Valore | Significato |
|---|---|---|
| $g$ | $9{,}81 \approx 10\ \text{m/s}^2$ | accelerazione di gravità terrestre |
| $G$ | $6{,}67\times 10^{-11}\ \text{N·m}^2/\text{kg}^2$ | costante di gravitazione universale |
| $R$ | $8{,}314\ \text{J/(mol·K)}$ | costante dei gas perfetti |
| $N_A$ | $6{,}022\times 10^{23}\ \text{mol}^{-1}$ | numero di Avogadro (particelle in 1 mole) |
| $k_B$ | $1{,}38\times 10^{-23}\ \text{J/K}$ | costante di Boltzmann ($k_B = R/N_A$) |
| $m_u$ | $1{,}66\times 10^{-27}\ \text{kg}$ | unità di massa atomica |
| $V_m$ | $22{,}41\ \text{L} = 0{,}02241\ \text{m}^3$ | volume di 1 mole di gas a condizioni standard |
| — | $1\ \text{cal} = 4{,}184\ \text{J}$ | $1\ \text{kcal} = 4184\ \text{J}$ (Caloria alimentare) |
| — | $1\ \text{N} = 1\ \text{kg·m/s}^2$ | newton (unità di forza) |
| — | $1\ \text{J} = 1\ \text{N·m}$ | joule (unità di lavoro/energia) |
| — | $1\ \text{W} = 1\ \text{J/s}$ | watt (unità di potenza) |
| — | $1\ \text{Pa} = 1\ \text{N/m}^2$ | pascal (unità di pressione) |

**Conversioni utili:**
- **km/h → m/s**: dividere per $3{,}6$. **m/s → km/h**: moltiplicare per $3{,}6$.
- **°C → K**: $T[\text{K}] = T[°\text{C}] + 273{,}15$. Per le **differenze** $\Delta T[°\text{C}] = \Delta T[\text{K}]$.
- Controllo dimensionale: verifica sempre che i due membri abbiano le stesse dimensioni.

---

# MECCANICA

## Cinematica — definizioni di base [[L01]] [[L02]]

- **Velocità media** — spostamento diviso tempo impiegato (pendenza della secante di $x(t)$):
$$v_m = \frac{\Delta x}{\Delta t} = \frac{x_2 - x_1}{t_2 - t_1}$$
- **Velocità istantanea** — derivata della posizione (pendenza della tangente):
$$v = \frac{dx}{dt}$$
- **Accelerazione media** — variazione di velocità diviso tempo:
$$a_m = \frac{\Delta v}{\Delta t}$$
- **Accelerazione istantanea** — derivata della velocità (derivata seconda della posizione):
$$a = \frac{dv}{dt} = \frac{d^2x}{dt^2}$$

## Moto uniforme ($v$ costante) [[L02]]

- **Legge oraria** — la posizione cresce linearmente nel tempo:
$$x(t) = x_0 + v\,t$$

## Moto uniformemente accelerato ($a$ costante) [[L03]]

- **Velocità** — cresce linearmente nel tempo:
$$v(t) = v_0 + a\,t$$
- **Posizione** — andamento parabolico nel tempo:
$$x(t) = x_0 + v_0\,t + \tfrac{1}{2}a\,t^2$$
- **Relazione senza il tempo** — da usare quando si conosce lo spazio ma non il tempo:
$$v^2 = v_0^2 + 2a\,\Delta x \qquad\Longleftrightarrow\qquad a = \frac{v_2^2 - v_1^2}{2\,\Delta x}$$
- **Velocità media nel MUA** — media aritmetica (vale solo se $a$ è costante):
$$v_m = \frac{v_1 + v_2}{2}$$

## Caduta libera [[L04]]

- **Tempo di caduta** da fermo, da altezza $d$:
$$t_d = \sqrt{\frac{2d}{g}}$$
- **Velocità di caduta** da fermo, dopo un dislivello $h$:
$$v = \sqrt{2gh}$$

---

## Dinamica — i tre principi [[L03]] [[L04]]

- **2° principio (Newton)** — la forza è causa, l'accelerazione effetto, la massa la costante:
$$\vec F = m\,\vec a$$
- **3° principio (azione e reazione)** — forze uguali e opposte su corpi diversi:
$$\vec F_{BA} = -\vec F_{AB}$$
- Più forze sul corpo: si sommano vettorialmente, $\sum_i \vec F_i = m\vec a$ (di solito scomposte asse per asse).

## Gravitazione [[L04]] [[L05]]

- **Gravitazione universale** — attrazione tra due masse a distanza $r$:
$$F = G\,\frac{m_A\,m_B}{r^2}$$
- **Accelerazione di gravità** — $g$ ricavato dalla massa e raggio del pianeta (non dipende dal corpo che cade):
$$g = G\,\frac{M_{terra}}{r^2}$$
- **Forza peso** — sempre verso il basso:
$$P = m\,g$$

## Reazione vincolare e attrito [[L05]] [[L06]]

- **Reazione normale** $N$ — perpendicolare al vincolo; su piano orizzontale fermo 
$$N = mg$$
- **Peso apparente in ascensore** — $a$ con segno (positiva verso l'alto):
$$N = m(g + a)$$
- **Attrito statico massimo** — soglia oltre cui il corpo parte (l'attrito statico si adatta fino a questo valore):
$$F_{as,\,max} = \mu_s\,N$$
- **Attrito dinamico** — costante mentre il corpo scivola, opposto al moto ($\mu_d < \mu_s$):
$$F_{ad} = \mu_d\,N$$
- I coefficienti $\mu_s, \mu_d$ sono adimensionali e dipendono dai materiali a contatto.

---

## Vettori [[L06]]

- **Modulo** (da componenti cartesiane, teorema di Pitagora):
$$A = \sqrt{A_x^2 + A_y^2}$$
- **Da polari a cartesiane** — componenti dal modulo e angolo:
$$A_x = A\cos\theta, \qquad A_y = A\sin\theta$$
- **Angolo** (da cartesiane a polari):
$$\theta = \tan^{-1}\!\left(\frac{A_y}{A_x}\right)$$
- **Somma per componenti** — si sommano asse per asse:
$$\vec C = \vec A + \vec B \equiv (A_x + B_x,\; A_y + B_y)$$

---

## Lavoro ed energia [[L07]] [[L08]] [[L10]] [[L11]]

- **Lavoro di una forza** — prodotto scalare forza·spostamento ($\alpha$ = angolo tra loro):
$$W = \vec F\cdot \vec s = F\,s\,\cos\alpha$$
  - $W > 0$ forza **motrice** ($\alpha < 90°$); $W = 0$ se perpendicolare al moto; $W < 0$ forza **frenante** ($\alpha > 90°$).
- **Energia cinetica** — energia di movimento:
$$K = \tfrac{1}{2}m\,v^2$$
- **Teorema dell'energia cinetica** — il lavoro totale eguaglia la variazione di energia cinetica:
$$W_{AB} = K_B - K_A = \tfrac{1}{2}m\,v_B^2 - \tfrac{1}{2}m\,v_A^2$$
- **Lavoro della forza peso** — dipende solo dal dislivello $\Delta z = z_B - z_A$ (forza conservativa):
$$W_P = -mg\,\Delta z$$
- **Potenza** — lavoro nell'unità di tempo (prodotto scalare forza·velocità):
$$P = \frac{dW}{dt} = \vec F\cdot \vec v$$
- **Energia spesa** (problemi metabolici) — potenza per tempo, più il lavoro contro la gravità se si sale:
$$W = P\,t \;(+\,mgh)$$

## Forza elastica (molla) [[L10]]

- **Legge di Hooke** — forza di richiamo proporzionale e opposta alla deformazione $x = l - l_0$:
$$F_e = -k\,x$$
- **Lavoro della forza elastica** — dipende solo dagli stati (conservativa):
$$W_{AB} = \tfrac{1}{2}k\,x_A^2 - \tfrac{1}{2}k\,x_B^2$$
- **Compressione/estensione massima** — uguagliando energia cinetica ed elastica ($\tfrac12 mv^2 = \tfrac12 kx^2$):
$$x_{max} = \sqrt{\frac{m\,v^2}{k}}$$

## Energia potenziale e conservazione [[L11]]

- **Lavoro forza conservativa** — pari alla diminuzione di energia potenziale:
$$W = -\Delta U = U_{iniziale} - U_{finale}$$
- **Energia potenziale gravitazionale** ($h$ = quota rispetto a un riferimento):
$$U_{grav} = mgh$$
- **Energia potenziale elastica** — energia immagazzinata in una molla deformata:
$$U_{el} = \tfrac{1}{2}k\,x^2$$
- **Conservazione dell'energia meccanica** — se agiscono solo forze conservative:
$$K + U = \text{costante} \qquad (\Delta K = -\Delta U)$$

---

## Piano inclinato [[L08]] [[L14]]

- **Reazione normale** (piano inclinato di angolo $\alpha$) — sostiene solo la componente perpendicolare:
$$N = mg\cos\alpha$$
- **Accelerazione** (piano liscio) — non dipende dalla massa:
$$a = g\sin\alpha$$
- **Velocità con attrito su tratto orizzontale** $d$ (da $v_B$):
$$v_C = \sqrt{v_B^2 - 2\mu_d\,g\,d}$$
- **Condizione di equilibrio** (il corpo resta fermo) — indipendente dalla massa:
$$\mu_s \ge \tan\theta$$

> [!tip] Strategia problemi concatenati (piano + attrito + dislivelli)
> Si risolvono **tratto per tratto** con $W = \Delta K$: in ogni tratto ci si chiede *quali forze fanno lavoro* (peso se c'è dislivello, attrito se c'è scorrimento, forze applicate), si calcola il lavoro e si concatena la velocità di fine tratto con quella di inizio del successivo.

---

## Moto parabolico [[L09]]

Combinazione di **moto uniforme** lungo $x$ ($a_x = 0$) e **uniformemente accelerato** lungo $y$ ($a_y = -g$). I due moti sono indipendenti.

- **Velocità** — orizzontale costante, verticale come caduta libera:
$$v_x(t) = v_{0x} \qquad v_y(t) = v_{0y} - g\,t$$
- **Posizione:**
$$x(t) = x_0 + v_{0x}\,t \qquad y(t) = y_0 + v_{0y}\,t - \tfrac{1}{2}g\,t^2$$
- **Tempo di volo** (lancio orizzontale da altezza $y_0$):
$$t_v = \sqrt{\frac{2y_0}{g}}$$
- **Gittata** — distanza orizzontale percorsa:
$$d = v_{0x}\,t_v$$
- **Velocità di impatto** (modulo) — composizione vettoriale delle due componenti:
$$v = \sqrt{v_x^2 + v_y^2}$$

---

## Moto armonico semplice [[L13]]

- **Equazione del moto** — accelerazione proporzionale e opposta alla posizione, con $\omega^2 = k/m$:
$$\ddot x + \omega^2 x = 0$$
- **Soluzione** — $A$ ampiezza, $\omega$ pulsazione, $\varphi$ fase iniziale (da condizioni iniziali):
$$x(t) = A\cos(\omega t + \varphi)$$
- **Velocità** durante l'oscillazione:
$$v(t) = -A\,\omega\sin(\omega t + \varphi)$$
- **Pulsazione** (massa-molla):
$$\omega = \sqrt{\frac{k}{m}}$$
- **Periodo e frequenza** — il periodo non dipende dall'ampiezza:
$$T = \frac{2\pi}{\omega} = 2\pi\sqrt{\frac{m}{k}} \qquad \nu = \frac{1}{T}$$
- **Energia meccanica totale** — costante durante l'oscillazione:
$$E_m = K + U_{el} = \tfrac{1}{2}k\,A^2$$
- **Velocità in funzione della posizione** — massima all'equilibrio ($v_{max} = \omega A$), nulla agli estremi:
$$v = \pm\,\omega\sqrt{A^2 - x^2}$$

---

## Moto circolare e pendolo [[L14]]

- **Accelerazione nel moto circolare** — componente tangenziale (cambia il modulo di $v$) + centripeta (cambia la direzione):
$$\vec a = \underbrace{\frac{d^2 s}{dt^2}}_{a_T}\,\hat u_T + \underbrace{\frac{v^2}{R}}_{a_c}\,\hat u_n$$
- **Accelerazione centripeta** — verso il centro, presente anche nel moto uniforme:
$$a_c = \frac{v^2}{R}$$
- **Pendolo semplice (piccole oscillazioni)** — moto armonico con:
$$\omega = \sqrt{\frac{g}{L}} \qquad T = 2\pi\sqrt{\frac{L}{g}}$$
  Il periodo dipende solo dalla lunghezza $L$ e da $g$ (non da massa né ampiezza).

---

## Sistemi di corpi collegati (funi e carrucole) [[L12]]

- **Tensione** $T$ — uguale in ogni punto di una fune ideale; tutti i corpi collegati hanno la **stessa accelerazione** in modulo.
- **Metodo:** si scrive $\vec F = m\vec a$ per **ogni corpo**, scegliendo come positivo il verso del moto, poi si mettono a sistema.
- **Scorciatoia (sommare le equazioni)** — le tensioni interne si elidono; restano solo le forze esterne. Esempio (A su piano inclinato, B in piano, C appeso):
$$a = \frac{(M_C - M_A\sin\alpha)\,g}{M_A + M_B + M_C}$$
- Nota le tensioni dalla singola equazione: es. $T_1 = M_A(g\sin\alpha + a)$, $T_2 = M_C(g - a)$.

---

# TERMODINAMICA

## Temperatura, pressione, densità [[L15]]

- **Densità** — massa per unità di volume:
$$\rho = \frac{m}{V}$$
- **Pressione** — forza perpendicolare per unità di area:
$$P = \frac{F}{S}$$
- **Legge di Stevino** — la pressione in un fluido cresce con la profondità $h$:
$$P = P_0 + \rho\,g\,h$$
- **Scale di temperatura:**
$$T[°\text{C}] = T[\text{K}] - 273{,}15 \qquad T[°\text{F}] = \tfrac{9}{5}\,T[°\text{C}] + 32$$

## Calore e calorimetria [[L15]]

- **Calore per variazione di temperatura** — $c_s$ calore specifico, $C = m c_s$ capacità termica:
$$Q = m\,c_s\,\Delta T = C\,\Delta T$$
- **Temperatura di equilibrio** (due corpi a contatto, isolati) — media pesata sulle capacità termiche:
$$T_e = \frac{m_A c_s^A\,T_C + m_B c_s^B\,T_F}{m_A c_s^A + m_B c_s^B}$$
- **Bilancio calorimetrico** — calore ceduto dal caldo = calore assorbito dal freddo: $Q_{ced} = -Q_{ass}$.
- Calori specifici utili: acqua $4186$, ghiaccio $2090\ \text{J/(kg·K)}$.

## Cambiamenti di fase e dilatazione [[L16]]

- **Calore latente** — calore per il passaggio di stato, a temperatura costante ($\lambda$ in J/kg, fusione/vaporizzazione):
$$Q = m\,\lambda$$
  (calore latente di fusione dell'acqua $\lambda \approx 3{,}3\times 10^5\ \text{J/kg}$)
- **Conduzione (legge di Fourier)** — flusso di calore proporzionale al gradiente di temperatura:
$$dQ = -k\,\frac{dT}{dx}\,S\,dt$$
- **Dilatazione lineare** — $\lambda$ coefficiente di dilatazione lineare:
$$l = l_0(1 + \lambda\,\Delta T)$$
- **Dilatazione cubica (volume)** — con $\alpha = 3\lambda$:
$$V = V_0(1 + \alpha\,\Delta T)$$

---

## Gas perfetti [[L17]]

- **Numero di moli** — da massa totale e massa molare, o dal numero di molecole:
$$n = \frac{M_{tot}}{M_{molare}} = \frac{N_{molecole}}{N_A}$$
- **Equazione di stato dei gas perfetti** — la $T$ va **sempre** in kelvin:
$$P\,V = n\,R\,T$$
- **Forma microscopica (Boltzmann)** — collega macro e microscopico:
$$P\,V = N\,k_B\,T$$
- **Lavoro di un gas** — area sotto la curva nel piano $P$–$V$ (dipende dal percorso):
$$L = \int_A^B P\,dV$$
- **Lavoro irreversibile** (espansione contro pressione esterna costante):
$$L^{irr} = P_{est}\,(V_B - V_A)$$

### Leggi dei gas (casi particolari) [[L16]]

- **Boyle (isoterma, $T$ cost.)** — $P$ e $V$ inversamente proporzionali:
$$P\,V = \text{cost} \qquad P_1 V_1 = P_2 V_2$$
- **Gay-Lussac isobara ($P$ cost.)** — $V \propto T$ (in kelvin).
- **Gay-Lussac isocora ($V$ cost.)** — $P \propto T$ (in kelvin).

---

## Primo principio della termodinamica [[L18]]

- **Primo principio** — $U$ energia interna (variabile di stato); $Q > 0$ assorbito, $L > 0$ compiuto dal sistema:
$$\Delta U = Q - L$$
- **Energia interna di un gas perfetto** — dipende solo da $T$; si calcola **sempre** con $C_V$ (qualunque trasformazione):
$$\Delta U = n\,C_V\,\Delta T$$
- **Calori molari** — a volume costante e a pressione costante:
$$dQ = n\,C_V\,dT \;(V\text{ cost.}) \qquad dQ = n\,C_P\,dT \;(P\text{ cost.})$$
- **Relazione di Mayer:**
$$C_P = C_V + R$$
- **Indice adiabatico:**
$$\gamma = \frac{C_P}{C_V} > 1$$

| Gas | $C_V$ | $C_P$ | $\gamma$ |
|---|:---:|:---:|:---:|
| **monoatomico** | $\tfrac{3}{2}R$ | $\tfrac{5}{2}R$ | $\tfrac{5}{3}\approx 1{,}67$ |
| **biatomico** | $\tfrac{5}{2}R$ | $\tfrac{7}{2}R$ | $\tfrac{7}{5}=1{,}4$ |

---

## Le trasformazioni termodinamiche [[L19]] [[L20]]

> [!note] Regola d'oro
> $\Delta U = nC_V\Delta T$ vale in **ogni** trasformazione. Il calore si calcola con $C_V$ solo a volume costante, con $C_P$ solo a pressione costante; negli altri casi $Q = \Delta U + L$.

| Trasformazione | Costante | Lavoro $L$ | Calore $Q$ | $\Delta U$ |
|---|---|---|---|---|
| **Isocora** | $V$ | $0$ | $nC_V\Delta T$ | $nC_V\Delta T$ |
| **Isobara** | $P$ | $P\Delta V = nR\Delta T$ | $nC_P\Delta T$ | $nC_V\Delta T$ |
| **Isoterma** | $T$ | $nRT\ln\frac{V_B}{V_A}$ | $= L$ | $0$ |
| **Adiabatica** | $Q=0$ | $nC_V(T_A - T_B)$ | $0$ | $nC_V\Delta T$ |

- **Adiabatica** ($Q = 0$) — leggi della trasformazione (espandendo, il gas si raffredda):
$$T\,V^{\gamma-1} = \text{cost} \qquad P\,V^{\gamma} = \text{cost}$$
- **Lavoro adiabatica** (forma alternativa):
$$L_{AB} = \frac{P_A V_A - P_B V_B}{\gamma - 1}$$
- **Isoterma** ($\Delta U = 0$, quindi $Q = L$):
$$Q = L = nRT\ln\frac{V_B}{V_A}$$
- **Politropica** — forma generale che unifica tutte le trasformazioni:
$$P\,V^k = \text{cost} \qquad C_k = C_V + \frac{R}{1-k}$$
  ($k=0$ isobara, $k=1$ isoterma, $k=\infty$ isocora, $k=\gamma$ adiabatica)

---

## Cicli e macchine termiche [[L19]] [[L20]] [[L21]]

- **Ciclo** — $\Delta U = 0$, quindi il lavoro netto eguaglia il calore netto:
$$\Delta U = 0 \;\Longrightarrow\; W = Q_{tot} = Q_{ass} + Q_{ced}$$
- **Lavoro netto del ciclo** = **area racchiusa** nel piano $P$–$V$ (orario = motore, $W>0$; antiorario = frigorifero, $W<0$).
- **Rendimento di una macchina termica** — sempre $< 1$:
$$\eta = \frac{W}{Q_{ass}} = 1 - \frac{|Q_{ced}|}{Q_{ass}}$$
- **Rendimento di Carnot** — massimo possibile tra due temperature (in kelvin), dipende solo da esse:
$$\eta_{Carnot} = 1 - \frac{T_1}{T_2}$$
- **Coefficiente di prestazione (frigorifero)** — può essere $> 1$:
$$\xi = \frac{Q_{ass}}{|W|} \qquad \xi_{Carnot} = \frac{T_1}{T_2 - T_1}$$
- **Rendimento reale con attrito** ($W_{att}$ lavoro dissipato):
$$\eta_{reale} = \frac{W - W_{att}}{Q_{ass}}$$

> [!tip] Strategia per i cicli
> 1. Trova le temperature mancanti con $PV = nRT$ (o $TV^{\gamma-1}=$ cost per le adiabatiche).
> 2. Per ogni tratto applica la formula giusta della tabella ($\Delta U = nC_V\Delta T$ sempre; $L$ e $Q$ secondo il tipo).
> 3. Verifica con $\sum Q = \sum L = W_{ciclo}$.

---

## Secondo principio ed entropia [[L21]] [[L22]]

- **Enunciato di Kelvin-Planck** — non esiste una macchina termica monoterma (non si converte tutto il calore in lavoro).
- **Enunciato di Clausius** — il calore non passa spontaneamente dal freddo al caldo senza spesa di lavoro.
- **Teorema di Carnot** — nessuna macchina supera il rendimento di Carnot:
$$\eta \le \eta_{Carnot} = 1 - \frac{T_1}{T_2}$$
- **Disuguaglianza di Clausius** — su un ciclo ($=0$ reversibile, $<0$ irreversibile):
$$\oint \frac{\delta Q}{T} \le 0$$
- **Entropia** — funzione di stato (J/K), calcolata su un percorso reversibile qualunque:
$$dS = \frac{\delta Q_{rev}}{T} \qquad \Delta S_{AB} = \int_A^B \frac{\delta Q_{rev}}{T}$$
- **Secondo principio (forma entropica)** — l'entropia dell'universo non diminuisce mai:
$$\Delta S_{universo} = \Delta S_{sistema} + \Delta S_{ambiente} \ge 0$$
- **Variazione di entropia di un gas perfetto** — forma base e forme equivalenti:
$$\Delta S = nC_V\ln\frac{T_B}{T_A} + nR\ln\frac{V_B}{V_A}$$
$$\Delta S = nC_V\ln\frac{P_B}{P_A} + nC_P\ln\frac{V_B}{V_A} = nC_P\ln\frac{T_B}{T_A} - nR\ln\frac{P_B}{P_A}$$
- **Scambio di calore tra due corpi** ($T_1 < T_2$, calore $Q$) — sempre $> 0$:
$$\Delta S_{universo} = \frac{Q}{T_1} - \frac{Q}{T_2} > 0$$
- **Calore nel piano $T$–$S$** — il calore è l'area sotto la curva: $\delta Q = T\,dS$.

---

## Mappa finale della termodinamica [[L23]]

| Concetto           | Relazione chiave                                           |         |                                     |
| ------------------ | ---------------------------------------------------------- | ------- | ----------------------------------- |
| Equazione di stato | $PV = nRT$                                                 |         |                                     |
| Primo principio    | $\Delta U = Q - L$, con $\Delta U = nC_V\Delta T$          |         |                                     |
| Mayer / adiabatico | $C_P = C_V + R$, $\gamma = C_P/C_V$                        |         |                                     |
| Lavoro del gas     | $L = \int P\,dV$ (area in $P$–$V$)                         |         |                                     |
| Adiabatica         | $PV^\gamma = \text{cost}$                                  |         |                                     |
| Rendimento         | $\eta = 1 - \frac{                                         | Q_{ced} | }{Q_{ass}} \le 1 - \frac{T_1}{T_2}$ |
| Secondo principio  | $\Delta S_{universo} \ge 0$                                |         |                                     |
| Entropia (gas)     | $\Delta S = nC_V\ln\frac{T_B}{T_A} + nR\ln\frac{V_B}{V_A}$ |         |                                     |

---

🏠 Torna all'[[index|indice]]
