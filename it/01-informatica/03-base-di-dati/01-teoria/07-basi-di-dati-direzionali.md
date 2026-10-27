---
title: "Basi di Dati Direzionali e Data Warehouse"
description: "Sistemi direzionali e operativi a confronto (OLTP vs OLAP), architettura del Data Warehouse con ETL, staging e data mart, analisi multidimensionale MOLAP/ROLAP, KDD e schemi a stella."
type: lecture
---

<svg viewBox="0 0 440 330" width="100%" style="max-width:440px;display:block;margin:1.5rem auto" role="img" aria-label="Il livello direzionale (triangolo) passa obiettivi e strategie al livello operativo (rettangolo), che restituisce i risultati">
<defs><marker id="i20230710123803-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="10" markerHeight="8" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 z" style="fill:currentColor;fill:context-stroke"/></marker></defs>
<polygon points="250,15 395,140 105,140" fill="none" stroke="currentColor" stroke-width="1.5"/>
<text x="250" y="92" text-anchor="middle" fill="currentColor" font-size="16" font-weight="bold">Livello</text>
<text x="250" y="114" text-anchor="middle" fill="currentColor" font-size="16" font-weight="bold">direzionale</text>
<rect x="105" y="210" width="290" height="108" fill="none" stroke="currentColor" stroke-width="1.5"/>
<text x="250" y="258" text-anchor="middle" fill="currentColor" font-size="16" font-weight="bold">Livello</text>
<text x="250" y="280" text-anchor="middle" fill="currentColor" font-size="16" font-weight="bold">operativo</text>
<line x1="185" y1="140" x2="185" y2="208" stroke="currentColor" stroke-width="1.5" marker-end="url(#i20230710123803-arrow)"/>
<line x1="315" y1="210" x2="315" y2="142" stroke="currentColor" stroke-width="1.5" marker-end="url(#i20230710123803-arrow)"/>
<text x="90" y="170" text-anchor="end" fill="currentColor" font-size="15" font-weight="bold">obiettivi</text>
<text x="90" y="190" text-anchor="end" fill="currentColor" font-size="15" font-weight="bold">strategie</text>
<text x="330" y="182" fill="currentColor" font-size="15" font-weight="bold">risultati</text>
</svg>

- **Livello direzionale**: si occupa delle attività necessarie alla definizione di obiettivi da raggiungere e alle strategie da intraprendere per perseguirli 
- **Livello operativo**: si occupa delle attività che l'azienda produce in maniera propria, fornendo al livello direzionale le informazioni sui risultati raggiunti

# Tipi di sistemi direzionali

<svg viewBox="0 0 440 248" width="100%" style="max-width:440px;display:block;margin:1.5rem auto" role="img" aria-label="Piramide delle attività: pianificazione strategica in cima, controllo direzionale al centro, controllo operativo alla base">
<polygon points="220,8 425,240 15,240" fill="none" stroke="currentColor" stroke-width="1.5"/>
<line x1="122.8" y1="118" x2="317.2" y2="118" stroke="currentColor" stroke-width="1.5"/>
<line x1="66.2" y1="182" x2="373.8" y2="182" stroke="currentColor" stroke-width="1.5"/>
<text x="220" y="90" text-anchor="middle" fill="currentColor" font-size="14" font-weight="bold">Pianificazione</text>
<text x="220" y="108" text-anchor="middle" fill="currentColor" font-size="14" font-weight="bold">strategica</text>
<text x="220" y="146" text-anchor="middle" fill="currentColor" font-size="14" font-weight="bold">Controllo</text>
<text x="220" y="164" text-anchor="middle" fill="currentColor" font-size="14" font-weight="bold">direzionale</text>
<text x="220" y="208" text-anchor="middle" fill="currentColor" font-size="14" font-weight="bold">Controllo</text>
<text x="220" y="226" text-anchor="middle" fill="currentColor" font-size="14" font-weight="bold">operativo</text>
</svg>

- **Pianificazione strategica**: determina gli obiettivi generali dell'azienda
- **Controllo direzionale di gestione**: definisce traguardi economici, cioè risultati da conseguire a medio termine, e la loro verifica
- **Controllo operativo**: assicura che le attività dei processi aziendali procedano nel modo stabilito

I sistemi direzionali aggregano i dati per poterli fornire ai dirigenti aziendali in maniera sintetica, chiamate *Indicatori prestazionali*, come vendite, ricavi, etc

Le informazioni direzionali hanno diverse dimensioni:
- Dimensione **Tempo**
- Dimensione **Prodotto**: analisi di costi e ricavi 
- Dimensione **Processi**: analisi di indici di efficienza ed efficacia (es tempestività)
- Dimensione **Responsabilità**: Ad ogni centro sono associati alcuni indici che forniscono rendiconti sulle prestazioni dei singolo dirigenti
- Dimensione **Cliente**: analizza la redditività, volume di affari e bacino di utenza

# Data warehouse (DWH)

è una base di dati relazionale utile ai processi direzionali, centralizzata ad essere:
- Orientata ai soggetti dell'elaborazione
- Integrata
- Tempo - variante
- non volatile

## Orientata al soggetto

è una collezione di dati orientata ai soggetti dell'elaboraione, al contrario di un approccio processivo/funzionale dei database normali

## Integrata

Le informazioni dei processi operativi che alimentano il DWH possono provenire da diversi database, con caratteristiche e formati inconsistenti. I dati di un DWH devono essere integrati, convertendo in un formato comune al dwh

## Tempo - variante

Tutti i dati in un WDH si riferiscono ad un preciso arco temporale, ogni struttura in un DWH contiene un riferimento ad un valore temporale

## Non volatile

I dati in un DWH possono solo essere caricati e letti, non modificati o eliminati

# Sistemi  OLTAP (operativi) vs OLAP (direzionali)

| sistemi operativi                                  | sistemi direzionali                         |
| -------------------------------------------------- | ------------------------------------------- |
| Memorizzano dati correnti                          | Memorizano dati storici                     |
| Memorizzano dati dettagliati                       | Dati sono debolmente o fortemente aggregati |
| I dati sono dinamici                               | I dati sono statici                         |
| Le elaborazioni sono ripetitive                    | Elaborazioni ad hoc                         |
| Massimizza il throughput rispetto alle transazioni | Hanno un throughput di transazioni basso    |
| Sono transaction driven                            | Sono analysis driven                        |
| Orientati alle applicazioni                        | Orientati al soggetto                       |
| Supportano decisioni day to day (?)                | Supportano decisioni strategiche            |
| Grosso numero di utenti operativi                  | Basso numero di utenti manageriali          |

# Architettura di un DWH

<svg viewBox="0 0 708 312" width="100%" style="max-width:708px;display:block;margin:1.5rem auto" role="img" aria-label="Architettura di un data warehouse: sorgenti dati (sistemi operazionali, flat file), ETL, staging con i dati riconciliati, warehousing integration, data mart, e infine reporting, analysis e mining">
<g transform="scale(0.88)" font-size="15">
<!-- data sources -->
<path d="M21,32 V82 A32,10 0 0 0 85,82 V32" fill="none" stroke="currentColor"/>
<ellipse cx="53" cy="32" rx="32" ry="10" fill="none" stroke="currentColor"/>
<path d="M21,120 V175 A32,10 0 0 0 85,175 V120" fill="none" stroke="currentColor"/>
<ellipse cx="53" cy="120" rx="32" ry="10" fill="none" stroke="currentColor"/>
<path d="M21,270 V285 A32,6 0 0 0 85,285 V270" fill="none" stroke="currentColor"/>
<ellipse cx="53" cy="270" rx="32" ry="6" fill="none" stroke="currentColor"/>
<text x="8" y="207" fill="currentColor" font-size="15" font-weight="bold">Operational</text>
<text x="8" y="226" fill="currentColor" font-size="15" font-weight="bold">systems</text>
<text x="53" y="318" text-anchor="middle" fill="currentColor" font-size="15" font-weight="bold">Flat files</text>
<path d="M95,45 Q113,45 113,65 V172 Q113,190 130,190 Q113,190 113,208 V320 Q113,340 95,340" fill="none" stroke="currentColor"/>
<text x="122" y="292" fill="currentColor" font-size="15" font-weight="bold">Data</text>
<text x="122" y="311" fill="currentColor" font-size="15" font-weight="bold">sources</text>
<polygon points="133,182 149,182 149,176 160,190 149,204 149,198 133,198" fill="var(--palette-muted)" fill-opacity="0.3" stroke="currentColor"/>
<!-- ETL, staging -->
<rect x="160" y="157" width="88" height="68" fill="none" stroke="currentColor"/>
<text x="204" y="196" text-anchor="middle" fill="currentColor" font-size="15" font-weight="bold">ETL</text>
<polygon points="250,182 263,182 263,176 274,190 263,204 263,198 250,198" fill="var(--palette-muted)" fill-opacity="0.3" stroke="currentColor"/>
<path d="M274,166 V222 A32,9 0 0 0 338,222 V166" fill="none" stroke="currentColor"/>
<ellipse cx="306" cy="166" rx="32" ry="9" fill="none" stroke="currentColor"/>
<text x="306" y="202" text-anchor="middle" fill="currentColor" font-size="15" font-weight="bold">staging</text>
<text x="270" y="258" fill="currentColor" font-size="15" font-weight="bold">Dati</text>
<text x="270" y="277" fill="currentColor" font-size="15" font-weight="bold">riconciliati</text>
<polygon points="339,182 351,182 351,176 362,190 351,204 351,198 339,198" fill="var(--palette-muted)" fill-opacity="0.3" stroke="currentColor"/>
<!-- warehouse -->
<path d="M362,100 V270 A85,16 0 0 0 532,270 V100" fill="none" stroke="currentColor"/>
<ellipse cx="447" cy="100" rx="85" ry="16" fill="none" stroke="currentColor"/>
<text x="447" y="140" text-anchor="middle" fill="currentColor" font-size="15" font-weight="bold">Warehousing</text>
<text x="447" y="159" text-anchor="middle" fill="currentColor" font-size="15" font-weight="bold">Integration</text>
<g>
<rect x="400" y="178" width="26" height="26" fill="none" stroke="currentColor"/>
<rect x="464" y="178" width="26" height="26" fill="none" stroke="currentColor"/>
<rect x="400" y="228" width="26" height="26" fill="none" stroke="currentColor"/>
<rect x="464" y="228" width="26" height="26" fill="none" stroke="currentColor"/>
<line x1="426" y1="191" x2="464" y2="191" stroke="currentColor"/>
<line x1="426" y1="241" x2="464" y2="241" stroke="currentColor"/>
<line x1="413" y1="204" x2="413" y2="228" stroke="currentColor"/>
<line x1="477" y1="204" x2="477" y2="228" stroke="currentColor"/>
</g>
<!-- data marts -->
<polygon points="534,104 552,104 552,98 563,112 552,126 552,120 534,120" fill="var(--palette-muted)" fill-opacity="0.3" stroke="currentColor"/>
<path d="M570,82 V140 A33,9 0 0 0 636,140 V82" fill="none" stroke="currentColor"/>
<ellipse cx="603" cy="82" rx="33" ry="9" fill="none" stroke="currentColor"/>
<polygon points="534,184 552,184 552,178 563,192 552,206 552,200 534,200" fill="var(--palette-muted)" fill-opacity="0.3" stroke="currentColor"/>
<path d="M570,162 V220 A33,9 0 0 0 636,220 V162" fill="none" stroke="currentColor"/>
<ellipse cx="603" cy="162" rx="33" ry="9" fill="none" stroke="currentColor"/>
<polygon points="534,260 552,260 552,254 563,268 552,282 552,276 534,276" fill="var(--palette-muted)" fill-opacity="0.3" stroke="currentColor"/>
<path d="M570,238 V296 A33,9 0 0 0 636,296 V238" fill="none" stroke="currentColor"/>
<ellipse cx="603" cy="238" rx="33" ry="9" fill="none" stroke="currentColor"/>
<text x="580" y="330" fill="currentColor" font-size="15" font-weight="bold">Data</text>
<text x="580" y="349" fill="currentColor" font-size="15" font-weight="bold">Marts</text>
<!-- strumenti -->
<polygon points="656,167 677,167 677,161 688,175 677,189 677,183 656,183" fill="var(--palette-muted)" fill-opacity="0.3" stroke="currentColor"/>
<path d="M705,2 Q690,10 690,32 V318 Q690,340 705,348" fill="none" stroke="currentColor"/>
<rect x="705" y="30" width="92" height="57" fill="none" stroke="currentColor"/>
<text x="751" y="63" text-anchor="middle" fill="currentColor" font-size="15" font-weight="bold">reporting</text>
<rect x="705" y="147" width="92" height="57" fill="none" stroke="currentColor"/>
<text x="751" y="180" text-anchor="middle" fill="currentColor" font-size="15" font-weight="bold">analysis</text>
<rect x="705" y="275" width="92" height="57" fill="none" stroke="currentColor"/>
<text x="751" y="308" text-anchor="middle" fill="currentColor" font-size="15" font-weight="bold">mining</text>
</g>
</svg>

## Data sources

Il DWH usa sorgenti di dati eterogenee provenienti da:
- **sistemi operazionali**: tipo relazionali.
- **Applicazioni legacy**: applicazioni aziendali ce non rispettano requisiti architetturali moderni
- **Sistemi informativi esterni**
- **Flat files**: dati non strutturate in tabelle relazionali

## ETL

I dati dalle varie sorgenti devono essere **ripuliti** eliminando possibili incongruente e inconsistente, **completati** da parti mancanti e **integrati** rispetto uno schema comune del DWH, tramite strumenti di **Extraction, Transformation and Loading** (ETL)

## Staging

Una volta essere stati integrati, corretti, filtrati e validati dall'ETL, i dati sono posti in un area di staging che contiene i dati **riconciliati**, che sono pronti ad alimentare il DWH

## Warehousing Integration

Le informazioni sono raccolte in un singolo contenitore logicamente centralizzato, ed è praticamente il DWH. Contiene anche i metadati che danno informazioni sui dati del DWH come sorgente di dati e le trasformazioni che hanno dovuto conseguire, informazioni sui profili delle query per migliorare le prestazioni e le informazioni sulla gestione dei dati come le tabelle, viste e indici

## Data marts

Memorizzano un insieme di dati nel DWH in forma molto aggregata, analizzano una particolare area di business o dipartimento, possono essere autonomi o collegati al DWH. Esso si preoccupa solo di uno specifico dipartimento e non contiene dati operativi. Un datamart può essere una vista di un DWH, esso permette un accesso alle informazioni più usate, migliorando i tempi di risposta.

# Acquisizione e gestione dati

## INFLOW
 
Con il termine inflow si indicano i processi associati all'estrazione, filtraggio e caricamenti dei dati da sorgenti OLTP al DWH

## Upflow

Con il termine Upflow si indicano i processi di aggiunta di dati al DWH tramite l'aggregazione. Queste operazioni pongono i risultati operazionali in varie forme, per esempio: dettagliati, parzialmente aggregati, fortemente aggregati etc. Tutto questo per agevolare la costruzione di diagrammi e grafici da parte degli utenti finali

## Downflow

Con il termine Downflow si intendono i processi di archiviazione sicura dei dati in un DWH, essi assicurano la ricorstruzione del DWH in caso di guasi o perdita di dati

## Outflow

Con il termine Outflow si intendono i processi che hanno il compito di rendere disponibili i dati all'utente finale, e quindi sono quelli che soddisfano le richieste degli utenti

## Metaflow

Con il termine Metaflow si intendono i processi associati alla gestione dei metadati

# Tecnologie di Data Warehousing

I dati integrati nella warehouse devono essere consultabili al fine di:
- **Query e reporting**: stendere report
- **OLAP**: (on line analytical processing), effettua analisi e simulazioni avanzate
- **KDD**: (Knowledge Discoveri in Database), individua regole nascoste nei dati

## Query e reporting

è il processo di
1) Porre un interrogazione
2) Trovare i dati fondamentali dal DWH
3) Trasformare i dati in un contesto appropriato
4) Prepare i dati in un formato leggibile
5) Spedire i dati in formato leggibile

## OLAP

L'analisi dei dati avviene in maniera multidimensionale analizzando 3 concetti fondamentali:
- **Fatto**: Un concetto dove viene concentrata l'analisi (es: vendita)
- **Misura**: Una proprietà atomica del fatto (es: incasso)
- **Dimensione**: Il punto di interesse dell'analizi (es: singolo articolo, luogo, tempo)
Ogni dimensione ha una gerarchia che rappresenta i possibili libelli di aggregazione dei dati, in base a:
- **Tempo**, es: giorno, mese, anno etc...
- **Luogo**, es: negozio, città, provincia, regione, etc...
- **Articolo**, es: descrizione, categoria, etc...

![[Pasted image 20230710131601.png]]

Ci sono due approcci all'implementazione di questa analisi multidimensionale:

- **Multidimensional OLAP (MOLAP)**: Se l'insieme dei dati è archiviato come matrice sparsa, dove sono registrati tutte le sintesi sui vari incroci multidimensionali possibili, il visualizzatore dei dati chiede direttamente i dati al database multidimensionale. Ha il vantaggio di essere precalcolato quindi l'accesso ai dati è molto veloce, ma deve essere aggiornato quando vengono fatte modifiche al database dal quale viene generato
- **Relational OLAP (ROLAP)**: Se l'insieme dei dati è registrato su una o più tabelle relazionali, i dati in questo caso sono acceduti tramite query e poi vengono sintetizzati per la visualizzazione dei risultati. Ha il beneficio di essere sempre aggiornato con gli ultimi dati disponibili, ma ogni volta che si accede ad una sintesi, si deve rieseguire l'estrazione e sommarizzazione

## MOLAP
Ha come perno il concetto di array multidimensionale, o ipercubo, cosi che i dati possano essere analizzati in tutte le dimensioni in maniera più facile. Ogni cella di dati contiene il valore assunto in ciascuna misura.

![[Pasted image 20230710132312.png]]

un MOLAP offre operazioni di:
- **Slide and dice**: Seleziona e proietta
- **Roll up**: Aggrega i dati (es: totale di vendite di un prodotto e regione)
- **Drill down**: Disaggrega i dati (es: per una categoria di prodotto e regione mostra le vendite giornaliere di ogni negozio)
- **Pivot**: Riorienta il cubo

## Esempio

![[Pasted image 20230710132536.png]]
**SLICE AND DICE** sulle vendite dei lettori dvd nei vari trimestri

| LETTORI DVD | 1 trim. 03 | 2 trim. 03 | 3 trim. 03 | 4 trim. 03 |
|---|---|---|---|---|
| Roma-1 | 38 | 91 | 66 | 198 |
| Roma-2 | 155 | 219 | 248 | 265 |
| Milano-1 | 121 | 273 | 266 | 326 |
| Milano-2 | 222 | 122 | 155 | 200 |

**ROLLUP** sulle città delle sedi per trovare i lettori dvd venduti in una sede

| LETTORI DVD | 1 trim. 03 | 2 trim. 03 | 3 trim. 03 | 4 trim. 03 |
|---|---|---|---|---|
| Roma | 193 | 310 | 314 | 463 |
| Milano | 343 | 395 | 421 | 526 |

**ROLLUP** vendite trimestrali sui prodotti

| VENDITE TRIM. | 1 trim. 03 | 2 trim. 03 | 3 trim. 03 | 4 trim. 03 |
|---|---|---|---|---|
| Lettori DVD | 536 | 705 | 735 | 989 |
| Televisori | 567 | 716 | 606 | 717 |
| Lettori CD | 187 | 155 | 186 | 226 |
| Videoregistratori | 175 | 191 | 202 | 319 |

**Drill down** per scoprire i mesi delle vendite mensili 

| VENDITE MENSILI | Gen 03 | Feb 03 | Mar 03 | Apr 03 | Mag 03 | Giu 03 | … |
|---|---|---|---|---|---|---|---|
| Lettori DVD | 165 | 178 | 193 | 205 | 244 | 256 | … |
| Televisori | 154 | 201 | 212 | 245 | 255 | 216 | … |
| Lettori CD | 54 | 88 | 45 | 24 | 65 | 66 | … |
| Videoregistratori | 56 | 64 | 55 | 52 | 64 | 75 | … |

## Knowledge Discover in database

Il processo di **KDD** è un processo interattivo e iterativo suddiviso in varie fasi:

1) **Identificazione del problema**: Si tiene conto della conoscenza già acquisita e gli obiettivi che si vogliono perseguire
2) **Selezione dell'insieme dei dati**: La fase di discovery dei dati, dove si estraggono i dati dalla conoscenza
3) **Pulizia e normalizzazione dei dati**: Per esempio si eliminano dati rumorosi e si gestiscono campi vuoti etc
4) **Identificazione caratteristiche salienti per rappresentare un fenomeno**: Si tende a ridurre il numero di variabili prese in considerazione in base all'analisi che stiamo facendo
5) **Data mining**: Si compie la ricerca sui pattern d'interesse
6) **Interpretazione dei pattern**: Si interpretano i dati trovati e potenzialmente si torna agli step precedenti per multiple iterazioni
7) **Consolidazione e formalizzazione**: Si crea documentazioni, presentazioni, etc... su ciò che si è scoperto

Durante il KDD si cerca di trovare pattern sconosciuti ma validi, cioè regole che si adattano bene ai dati che si stanno analizzando

# Modelli DWH, Schemi relazionali  stella

Uno schema a stella è composto da una tabella principale chiamata di *Tabella fatti* che memorizza i fatti e misure, e da due o più tabelle autisiali chiamate *Tabelle dimensione* che rappresenta una dimensione interessante dove analizzare i dati.

<svg viewBox="0 0 700 500" width="100%" style="max-width:700px;display:block;margin:1.5rem auto" role="img" aria-label="Schema a stella: la tabella dei fatti VENDITE al centro, con le chiavi verso le dimensioni TEMPO, LUOGO, ARTICOLO e CLIENTE e le misure Quantità e Incasso">
<defs><marker id="i20230710133939-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="10" markerHeight="8" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 z" style="fill:currentColor;fill:context-stroke"/></marker></defs>
<!-- dimensioni -->
<text x="18" y="30" fill="currentColor" font-size="18" font-weight="bold">TEMPO</text>
<rect x="10" y="44" width="222" height="157" fill="none" stroke="currentColor"/>
<text x="18" y="66" fill="currentColor" font-size="17" font-weight="bold">CodiceTempo</text>
<text x="18" y="96" fill="currentColor" font-size="17">Giorno</text>
<text x="18" y="126" fill="currentColor" font-size="17">Mese</text>
<text x="18" y="156" fill="currentColor" font-size="17">Trimestre</text>
<text x="18" y="186" fill="currentColor" font-size="17">Anno</text>
<text x="10" y="266" fill="currentColor" font-size="18" font-weight="bold">LUOGO</text>
<rect x="3" y="280" width="193" height="202" fill="none" stroke="currentColor"/>
<text x="11" y="303" fill="currentColor" font-size="17" font-weight="bold">CodiceLuogo</text>
<text x="11" y="335" fill="currentColor" font-size="17">Negozio</text>
<text x="11" y="366" fill="currentColor" font-size="17">Indirizzo</text>
<text x="11" y="398" fill="currentColor" font-size="17" font-weight="bold">Città</text>
<text x="11" y="430" fill="currentColor" font-size="17">Provincia</text>
<text x="11" y="462" fill="currentColor" font-size="17">Regione</text>
<text x="515" y="64" fill="currentColor" font-size="18" font-weight="bold">ARTICOLO</text>
<rect x="507" y="70" width="186" height="124" fill="none" stroke="currentColor"/>
<text x="515" y="92" fill="currentColor" font-size="17" font-weight="bold">CodiceArticolo</text>
<text x="515" y="116" fill="currentColor" font-size="17">Descrizione</text>
<text x="515" y="140" fill="currentColor" font-size="17">Marca</text>
<text x="515" y="164" fill="currentColor" font-size="17">Categoria</text>
<text x="494" y="302" fill="currentColor" font-size="18" font-weight="bold">CLIENTE</text>
<rect x="485" y="315" width="195" height="180" fill="none" stroke="currentColor"/>
<text x="494" y="338" fill="currentColor" font-size="17" font-weight="bold">CodiceCliente</text>
<text x="494" y="367" fill="currentColor" font-size="17">Nome</text>
<text x="494" y="396" fill="currentColor" font-size="17">Cognome</text>
<text x="494" y="425" fill="currentColor" font-size="17">Sesso</text>
<text x="494" y="454" fill="currentColor" font-size="17">Età</text>
<text x="494" y="483" fill="currentColor" font-size="17">Professione</text>
<!-- fatti -->
<text x="252" y="124" fill="var(--palette-orange)" font-size="18" font-weight="bold">VENDITE</text>
<rect x="243" y="136" width="195" height="216" fill="var(--palette-orange)" fill-opacity="0.18" stroke="var(--palette-red)" stroke-width="1.5"/>
<text x="258" y="176" fill="currentColor" font-size="17" font-weight="bold">CodiceTempo</text>
<text x="258" y="208" fill="currentColor" font-size="17" font-weight="bold">CodiceLuogo</text>
<text x="258" y="240" fill="currentColor" font-size="17" font-weight="bold">CodiceArticolo</text>
<text x="258" y="272" fill="currentColor" font-size="17" font-weight="bold">CodiceCliente</text>
<text x="258" y="304" fill="var(--palette-red)" font-size="17" font-weight="bold">Quantità</text>
<text x="258" y="336" fill="var(--palette-red)" font-size="17" font-weight="bold">Incasso</text>
<!-- chiavi esterne -->
<path d="M243,171 H222 V60 H202" fill="none" stroke="var(--palette-orange)" stroke-width="1.5" marker-end="url(#i20230710133939-arrow)"/>
<path d="M243,203 H228 V297 H198" fill="none" stroke="var(--palette-orange)" stroke-width="1.5" marker-end="url(#i20230710133939-arrow)"/>
<path d="M412,235 H465 V82 H505" fill="none" stroke="var(--palette-orange)" stroke-width="1.5" marker-end="url(#i20230710133939-arrow)"/>
<path d="M404,267 H445 V330 H483" fill="none" stroke="var(--palette-orange)" stroke-width="1.5" marker-end="url(#i20230710133939-arrow)"/>
</svg>

Nella tabella fatti la chiave primaria è formata da formata dai riferimenti delle altre tabelle dimensione, i dati sono considerati in sola lettura e gli altri campi non chiavi sono misure. è in 3NF

Nella tabella dimensioni la chiave primaria è semplice, gli altri campi memorizzano i livelli della dimensione ed è denormalizzata (pre joinata insieme), cioè contiene ridondanza, se è normalizzata allora si parla di schema a fiocco di neve, es:

<svg viewBox="0 0 714 372" width="100%" style="max-width:714px;display:block;margin:1.5rem auto" role="img" aria-label="Schema a fiocco di neve: la tabella dei fatti VENDITE collegata a TEMPO, LUOGO, ARTICOLO e CLIENTE; TEMPO, LUOGO e ARTICOLO sono normalizzate nelle tabelle MESE, REGIONE e CATEGORIA">
<g transform="scale(0.82)">
<!-- dimensioni -->
<rect x="160" y="48" width="127" height="170" fill="none" stroke="currentColor"/>
<line x1="160" y1="88" x2="287" y2="88" stroke="currentColor"/>
<text x="223.5" y="79" text-anchor="middle" fill="currentColor" font-size="16" font-weight="bold">TEMPO</text>
<text x="168" y="106" fill="currentColor" font-size="15" font-weight="bold">CodiceTempo</text>
<text x="168" y="140" fill="currentColor" font-size="15">Giorno</text>
<text x="168" y="176" fill="currentColor" font-size="15">CodiceMese</text>
<rect x="540" y="38" width="145" height="140" fill="none" stroke="currentColor"/>
<line x1="540" y1="74" x2="685" y2="74" stroke="currentColor"/>
<text x="612.5" y="65" text-anchor="middle" fill="currentColor" font-size="16" font-weight="bold">ARTICOLO</text>
<text x="548" y="95" fill="currentColor" font-size="15" font-weight="bold">CodiceArticolo</text>
<text x="548" y="113" fill="currentColor" font-size="15">Descrizione</text>
<text x="548" y="131" fill="currentColor" font-size="15">Marca</text>
<text x="548" y="167" fill="currentColor" font-size="15">CodiceCategoria</text>
<rect x="175" y="266" width="133" height="174" fill="none" stroke="currentColor"/>
<line x1="175" y1="300" x2="308" y2="300" stroke="currentColor"/>
<text x="241.5" y="291" text-anchor="middle" fill="currentColor" font-size="16" font-weight="bold">LUOGO</text>
<text x="183" y="326" fill="currentColor" font-size="15" font-weight="bold">CodiceLuogo</text>
<text x="183" y="344" fill="currentColor" font-size="15">Negozio</text>
<text x="183" y="362" fill="currentColor" font-size="15">Indirizzo</text>
<text x="183" y="380" fill="currentColor" font-size="15">Codice Città</text>
<text x="183" y="398" fill="currentColor" font-size="15">Città</text>
<text x="183" y="416" fill="currentColor" font-size="15">CodiceRegione</text>
<rect x="535" y="282" width="168" height="168" fill="none" stroke="currentColor"/>
<line x1="535" y1="322" x2="703" y2="322" stroke="currentColor"/>
<text x="619" y="313" text-anchor="middle" fill="currentColor" font-size="16" font-weight="bold">CLIENTE</text>
<text x="543" y="342" fill="currentColor" font-size="15" font-weight="bold">CodiceCliente</text>
<text x="543" y="360" fill="currentColor" font-size="15">Nome</text>
<text x="543" y="378" fill="currentColor" font-size="15">Cognome</text>
<text x="543" y="396" fill="currentColor" font-size="15">Sesso</text>
<text x="543" y="414" fill="currentColor" font-size="15">Età</text>
<text x="543" y="446" fill="currentColor" font-size="15">Professione</text>
<!-- dimensioni normalizzate -->
<rect x="3" y="118" width="140" height="100" fill="var(--palette-purple)" fill-opacity="0.18" stroke="var(--palette-purple)" stroke-width="1.5"/>
<line x1="3" y1="143" x2="143" y2="143" stroke="var(--palette-purple)"/>
<text x="73" y="134" text-anchor="middle" fill="var(--palette-purple)" font-size="16" font-weight="bold">MESE</text>
<text x="11" y="160" fill="currentColor" font-size="15" font-weight="bold">CodiceMese</text>
<text x="11" y="186" fill="currentColor" font-size="15">Trimestre</text>
<text x="11" y="210" fill="currentColor" font-size="15">Anno</text>
<rect x="708" y="75" width="160" height="76" fill="var(--palette-purple)" fill-opacity="0.18" stroke="var(--palette-purple)" stroke-width="1.5"/>
<line x1="708" y1="105" x2="868" y2="105" stroke="var(--palette-purple)"/>
<text x="788" y="96" text-anchor="middle" fill="var(--palette-purple)" font-size="16" font-weight="bold">CATEGORIA</text>
<text x="716" y="124" fill="currentColor" font-size="15" font-weight="bold">CodiceCategoria</text>
<text x="716" y="145" fill="currentColor" font-size="15">Categoria</text>
<rect x="5" y="302" width="163" height="88" fill="var(--palette-purple)" fill-opacity="0.18" stroke="var(--palette-purple)" stroke-width="1.5"/>
<line x1="5" y1="332" x2="168" y2="332" stroke="var(--palette-purple)"/>
<text x="86.5" y="323" text-anchor="middle" fill="var(--palette-purple)" font-size="16" font-weight="bold">REGIONE</text>
<text x="13" y="354" fill="currentColor" font-size="15" font-weight="bold">CodiceRegione</text>
<text x="13" y="380" fill="currentColor" font-size="15">Regione</text>
<!-- fatti -->
<rect x="348" y="163" width="146" height="160" fill="var(--palette-orange)" fill-opacity="0.18" stroke="var(--palette-red)" stroke-width="1.5"/>
<line x1="348" y1="201" x2="494" y2="201" stroke="var(--palette-red)"/>
<text x="357" y="192" fill="currentColor" font-size="16" font-weight="bold">VENDITE</text>
<text x="356" y="222" fill="currentColor" font-size="15" font-weight="bold">CodiceTempo</text>
<text x="356" y="240" fill="currentColor" font-size="15" font-weight="bold">CodiceLuogo</text>
<text x="356" y="258" fill="currentColor" font-size="15" font-weight="bold">CodiceArticolo</text>
<text x="356" y="276" fill="currentColor" font-size="15" font-weight="bold">CodiceCliente</text>
<text x="356" y="294" fill="var(--palette-red)" font-size="15" font-weight="bold">Quantità</text>
<text x="356" y="312" fill="var(--palette-red)" font-size="15" font-weight="bold">Incasso</text>
<!-- collegamenti -->
<line x1="287" y1="63" x2="356" y2="208" stroke="var(--palette-orange)" stroke-width="4"/>
<line x1="541" y1="58" x2="486" y2="248" stroke="var(--palette-orange)" stroke-width="4"/>
<line x1="308" y1="282" x2="352" y2="236" stroke="var(--palette-orange)" stroke-width="4"/>
<line x1="478" y1="272" x2="536" y2="298" stroke="var(--palette-orange)" stroke-width="4"/>
<line x1="104" y1="156" x2="163" y2="171" stroke="var(--palette-red)" stroke-width="1.5"/>
<line x1="674" y1="166" x2="708" y2="135" stroke="var(--palette-red)" stroke-width="1.5"/>
<line x1="150" y1="348" x2="178" y2="410" stroke="var(--palette-red)" stroke-width="1.5"/>
</g>
</svg>

Un fatto è di solito additivo, cioè ha senso sommarlo rispetto alla combinazione di altre dimensioni da cui dipende, per esempio l'incasso è additivo perchè ha senso calcolare la somma degli incassi di un certo intervallo

# Progettazione del DWH

- Si identificano i fatti, misure e dimensioni
- Si ristruttura lo schema concettuale per rappresentare i fatti mediante entità, si trovano eventuali nuove dimensioni e si raffinano i livelli di ogni dimensione
- Si deriva un grafo dimensionale
- Si deriva uno schema multidimensionale in uno logico 
- Si determina uno schema relazionale a stella
- 
