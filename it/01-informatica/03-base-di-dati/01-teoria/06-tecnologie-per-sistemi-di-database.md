---
title: "Tecnologie per Sistemi di Database"
description: "Strutture di file (heap, ordinati, hash, indici B+ Tree, bitmap), gestione della memoria e dei buffer, ottimizzazione delle query, controllo della concorrenza (lock, 2PL, timestamp), gestione dell'affidabilità, log e ripristino."
type: lecture
---

<svg viewBox="0 0 660 570" width="100%" style="max-width:660px;display:block;margin:1.5rem auto" role="img" aria-label="Architettura di un DBMS: il gestore delle query, dei metodi di accesso, del buffer e dello spazio su disco impilati, affiancati dal gestore della concorrenza e da quello dell'affidabilità, sopra i file dati, log, indici e catalogo">
<defs><marker id="i20230709110711-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="8" markerHeight="7" orient="auto-start-reverse"><path d="M1,1 L9,5 L1,9" fill="none" style="stroke:currentColor;stroke:context-stroke" stroke-width="1.5"/></marker></defs>
<text x="330" y="24" text-anchor="middle" fill="currentColor" font-size="18" font-weight="bold">SQL</text>
<polygon points="324,32 336,32 336,52 342,52 330,62 318,52 324,52" fill="var(--palette-muted)" fill-opacity="0.3" stroke="currentColor"/>
<!-- DBMS -->
<rect x="15" y="66" width="630" height="320" fill="none" stroke="currentColor"/>
<text x="32" y="92" fill="currentColor" font-size="14" font-weight="bold">DBMS</text>
<g>
<rect x="190" y="95" width="290" height="45" fill="none" stroke="currentColor"/>
<text x="335" y="123" text-anchor="middle" fill="currentColor" font-size="14">Gestore delle Query</text>
<rect x="190" y="172" width="290" height="45" fill="none" stroke="currentColor"/>
<text x="335" y="191" text-anchor="middle" fill="currentColor" font-size="14">Gestore di Metodi di Accesso</text>
<text x="335" y="209" text-anchor="middle" fill="currentColor" font-size="14">e dei File</text>
<rect x="190" y="247" width="290" height="45" fill="none" stroke="currentColor"/>
<text x="335" y="275" text-anchor="middle" fill="currentColor" font-size="14">Gestore del Buffer di Memoria</text>
<rect x="190" y="322" width="290" height="45" fill="none" stroke="currentColor"/>
<text x="335" y="350" text-anchor="middle" fill="currentColor" font-size="14">Gestore Spazio su Disco</text>
<polygon points="329,140 341,140 341,162 347,162 335,172 323,162 329,162" fill="var(--palette-muted)" fill-opacity="0.3" stroke="currentColor"/>
<polygon points="329,217 341,217 341,237 347,237 335,247 323,237 329,237" fill="var(--palette-muted)" fill-opacity="0.3" stroke="currentColor"/>
<polygon points="329,292 341,292 341,312 347,312 335,322 323,312 329,312" fill="var(--palette-muted)" fill-opacity="0.3" stroke="currentColor"/>
</g>
<rect x="45" y="172" width="122" height="195" fill="none" stroke="currentColor"/>
<text x="106" y="264" text-anchor="middle" fill="currentColor" font-size="14">Gestore della</text>
<text x="106" y="283" text-anchor="middle" fill="currentColor" font-size="14">Concorrenza</text>
<rect x="513" y="172" width="122" height="195" fill="none" stroke="currentColor"/>
<text x="574" y="264" text-anchor="middle" fill="currentColor" font-size="14">Gestore</text>
<text x="574" y="283" text-anchor="middle" fill="currentColor" font-size="14">dell’Affidabilità</text>
<line x1="169" y1="194" x2="188" y2="194" stroke="currentColor" marker-start="url(#i20230709110711-arrow)" marker-end="url(#i20230709110711-arrow)"/>
<line x1="482" y1="194" x2="511" y2="194" stroke="currentColor" marker-start="url(#i20230709110711-arrow)" marker-end="url(#i20230709110711-arrow)"/>
<line x1="169" y1="269" x2="188" y2="269" stroke="currentColor" marker-start="url(#i20230709110711-arrow)" marker-end="url(#i20230709110711-arrow)"/>
<line x1="482" y1="269" x2="511" y2="269" stroke="currentColor" marker-start="url(#i20230709110711-arrow)" marker-end="url(#i20230709110711-arrow)"/>
<line x1="169" y1="344" x2="188" y2="344" stroke="currentColor" marker-start="url(#i20230709110711-arrow)" marker-end="url(#i20230709110711-arrow)"/>
<line x1="482" y1="344" x2="511" y2="344" stroke="currentColor" marker-start="url(#i20230709110711-arrow)" marker-end="url(#i20230709110711-arrow)"/>
<!-- DBMS <-> file -->
<polygon points="330,392 358,418 343,418 343,462 358,462 330,488 302,462 317,462 317,418 302,418" fill="var(--palette-purple)" fill-opacity="0.45" stroke="var(--palette-purple)"/>
<path d="M135,500 V555 A195,12 0 0 0 525,555 V500" fill="none" stroke="currentColor"/>
<ellipse cx="330" cy="500" rx="195" ry="12" fill="none" stroke="currentColor"/>
<text x="330" y="538" text-anchor="middle" fill="currentColor" font-size="13">File Dati, Log, Indici, Catalogo Relazionale</text>
</svg>

# Gestore di metodi di accesso e file

Ogni query viene analizzata attraverso un modulo chiamato *Gestore delle query* che effettua ottimizzazioni.
Il gestore dei metodi di accesso e file ha bisogno di informazioni sui buffer di dati gestiti in memoria, il Gestore di buffer di memoria ha il compito di determinare come e quando trasferire dati da memoria centrare a memoria di massa e viceversa.
Il gestore dello spaio su disco implementa la lettura, scrittura, allocazione e rilascio delle pagine su disco.
Il gestore della concorrenza assicura l'esecuzione corretta delle transazioni, garantendone le proprietà ACID, filtrando opportunamente le query
Il gestore di affidabilità interviene in caso ci siano guasti del sistema, registrando tutto quello che accade all'interno di LOG, e poi eventualmente effettua operazioni di ripristino se il sistema ha un guasto
Il gestore di integrità assicura che i vincoli di integrità siano sempre soddisfatti.

# Struttura dei file

La struttura tipica per memorizzare delle informazioni di un database è quella di usare file di record.
L'unità di informazione letta o scritta da un dispositivo di memorizzazione è detta *Pagina*, solitamente grande 4-8kb.
Leggere o scrivere una pagina impiega un certo costo di I/O che è molto più grande rispetto a tutte le altre operazioni sul database.

Ci sono varie tecniche per strutturare i file che immagazzinano i dati del database:

## File heap

I record del database sono memorizzati in modo casuale su file, quando aggiungiamo un nuovo record, esso viene aggiunto alla fine delle pagine del file, questo porta a operazioni di inserimento molto efficienti ma l'unico modo di trovare un record è quello di leggere tutti i record, come anche l'operazione di ricerca e modifica. Nella cancellazione non si cancella effettivamente il record, ma viene marcato come eliminato, richiedendo anche un sistema di pulizia dei dati in futuro.

## File ordinati

I record sono ordinati in base ad uno o più campi, la ricerca è veloce dato che può utilizzare la ricerca binaria, mentre inserimento e cancellazione richiedono più passi dato che bisogna prima trovare la posizione corretta dove inserire l'elemento, creare lo spazio necessario e inserire gli elementi. La cancellazione richiede di riorganizzare i file per rimuovere lo spazio libero.

## File HASH

 La posizione del record nel file viene calcolato usando una funzione *Hash* che converte il record in una chiave di hash usata poi come posizione di salvataggio, ma a questo punto potrebbe capitare di avere due record con la stessa chiave, quindi bisogna implementare un sistema di bucket dove record con stessa chiave hash possono essere salvati

## Indici di accesso

Un indice è una struttura dati che permette di organizzare i record al fine di rendere efficiente il recupero dell'informazione, usando una chiave di ricerca sull'indice.

Possiamo memorizzare le informazioni in un file non ordinato, mentre le posizioni si possono memorizzare in un file ordinato con un capo ID.

| ID | Nome | Cognome | Stipendio |
|---|---|---|---|
| 003 | Antonio | De Aurelis | 5000 |
| 001 | Marco | Marchi | 2000 |
| 005 | Antonio | Di Padova | 3000 |
| 004 | Francesco | Di Sales | 1000 |

| ID | rid |
|---|---|
| 001 | 2 |
| 003 | 1 |
| 004 | 4 |
| 005 | 3 |

| rid | ID, Nome, Cognome, Stipendio |
|---|---|
| 1 | 003, Antonio, De Aurelis, 5000 |
| 2 | 001, Marco, Marchi, 2000 |
| 3 | 005, Antonio, Di Padova, 3000 |
| 4 | 004, Francesco, Di Sales, 1000 |

All'interno di un file indice vengono memorizzati i *Data entry*, una coppia <chiave, valore> dove la chiave viene usata per la ricerca, e il valore è l'ID della risorsa. In questo modo le risorse possono essere salvate in maniera indipendente dal file di indice.

## Indice multilivello

Anzichè avere un singolo file contentente tutti gli indici, possiamo suddividere il file di indici in più file di indici.
Usando una struttura ad albero possiamo rappresentare nelle foglie i record del database, e nei nodi interni gli indici di vario livello. 

<svg viewBox="0 0 705 420" width="100%" style="max-width:705px;display:block;margin:1.5rem auto" role="img" aria-label="Indice multilivello: un indice di livello 2 (mario, vincenzo) punta a due nodi dell'indice di livello 1 (giovanni, mario; susanna, vincenzo), che puntano alle quattro pagine del file di dati">
<defs><marker id="i20230709113600-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="10" markerHeight="8" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 z" style="fill:currentColor;fill:context-stroke"/></marker></defs>
<g transform="translate(-45,-25)">
<!-- livello 2 -->
<text x="136" y="192" text-anchor="middle" fill="currentColor" font-size="14">Indice di</text>
<text x="136" y="211" text-anchor="middle" fill="currentColor" font-size="14">livello 2</text>
<rect x="60" y="233" width="152" height="86" fill="none" stroke="currentColor"/>
<line x1="60" y1="276" x2="212" y2="276" stroke="currentColor"/>
<text x="122" y="260" text-anchor="middle" fill="currentColor" font-size="14">mario</text>
<text x="176" y="260" text-anchor="middle" fill="currentColor" font-size="14">*</text>
<text x="122" y="303" text-anchor="middle" fill="currentColor" font-size="14">vincenzo</text>
<text x="176" y="303" text-anchor="middle" fill="currentColor" font-size="14">*</text>
<!-- livello 1 -->
<text x="348" y="105" text-anchor="middle" fill="currentColor" font-size="14">Indice di</text>
<text x="348" y="124" text-anchor="middle" fill="currentColor" font-size="14">livello 1</text>
<rect x="272" y="147" width="152" height="86" fill="none" stroke="currentColor"/>
<line x1="272" y1="190" x2="424" y2="190" stroke="currentColor"/>
<text x="334" y="174" text-anchor="middle" fill="currentColor" font-size="14">giovanni</text>
<text x="388" y="174" text-anchor="middle" fill="currentColor" font-size="14">*</text>
<text x="334" y="217" text-anchor="middle" fill="currentColor" font-size="14">mario</text>
<text x="388" y="217" text-anchor="middle" fill="currentColor" font-size="14">*</text>
<rect x="272" y="258" width="152" height="86" fill="none" stroke="currentColor"/>
<line x1="272" y1="301" x2="424" y2="301" stroke="currentColor"/>
<text x="334" y="285" text-anchor="middle" fill="currentColor" font-size="14">susanna</text>
<text x="388" y="285" text-anchor="middle" fill="currentColor" font-size="14">*</text>
<text x="334" y="328" text-anchor="middle" fill="currentColor" font-size="14">vincenzo</text>
<text x="388" y="328" text-anchor="middle" fill="currentColor" font-size="14">*</text>
<!-- file di dati -->
<text x="563" y="45" text-anchor="middle" fill="currentColor" font-size="14">File di</text>
<text x="563" y="64" text-anchor="middle" fill="currentColor" font-size="14">Dati</text>
<text x="697" y="54" text-anchor="middle" fill="currentColor" font-size="14">Pagina</text>
<rect x="487" y="70" width="152" height="78" fill="none" stroke="currentColor"/>
<text x="563" y="88" text-anchor="middle" fill="currentColor" font-size="13">record di carlo</text>
<line x1="487" y1="96" x2="639" y2="96" stroke="currentColor"/>
<text x="563" y="114" text-anchor="middle" fill="currentColor" font-size="13">record di federica</text>
<line x1="487" y1="122" x2="639" y2="122" stroke="currentColor"/>
<text x="563" y="140" text-anchor="middle" fill="currentColor" font-size="13">record di giovanni</text>
<text x="697" y="114" text-anchor="middle" fill="currentColor" font-size="14">1</text>
<rect x="487" y="166" width="152" height="78" fill="none" stroke="currentColor"/>
<text x="563" y="184" text-anchor="middle" fill="currentColor" font-size="13">record di ilaria</text>
<line x1="487" y1="192" x2="639" y2="192" stroke="currentColor"/>
<text x="563" y="210" text-anchor="middle" fill="currentColor" font-size="13">record di laura</text>
<line x1="487" y1="218" x2="639" y2="218" stroke="currentColor"/>
<text x="563" y="236" text-anchor="middle" fill="currentColor" font-size="13">record di mario</text>
<text x="697" y="210" text-anchor="middle" fill="currentColor" font-size="14">2</text>
<rect x="487" y="262" width="152" height="78" fill="none" stroke="currentColor"/>
<text x="563" y="280" text-anchor="middle" fill="currentColor" font-size="13">record di nino</text>
<line x1="487" y1="288" x2="639" y2="288" stroke="currentColor"/>
<text x="563" y="306" text-anchor="middle" fill="currentColor" font-size="13">record di orazio</text>
<line x1="487" y1="314" x2="639" y2="314" stroke="currentColor"/>
<text x="563" y="332" text-anchor="middle" fill="currentColor" font-size="13">record di susanna</text>
<text x="697" y="306" text-anchor="middle" fill="currentColor" font-size="14">3</text>
<rect x="487" y="352" width="152" height="78" fill="none" stroke="currentColor"/>
<text x="563" y="370" text-anchor="middle" fill="currentColor" font-size="13">record di tina</text>
<line x1="487" y1="378" x2="639" y2="378" stroke="currentColor"/>
<text x="563" y="396" text-anchor="middle" fill="currentColor" font-size="13">record di umberto</text>
<line x1="487" y1="404" x2="639" y2="404" stroke="currentColor"/>
<text x="563" y="422" text-anchor="middle" fill="currentColor" font-size="13">record di vincenzo</text>
<text x="697" y="396" text-anchor="middle" fill="currentColor" font-size="14">4</text>
<!-- puntatori -->
<line x1="214" y1="240" x2="270" y2="228" stroke="currentColor" marker-end="url(#i20230709113600-arrow)"/>
<line x1="214" y1="308" x2="270" y2="314" stroke="currentColor" marker-end="url(#i20230709113600-arrow)"/>
<line x1="426" y1="166" x2="485" y2="110" stroke="currentColor" marker-end="url(#i20230709113600-arrow)"/>
<line x1="426" y1="212" x2="485" y2="210" stroke="currentColor" marker-end="url(#i20230709113600-arrow)"/>
<line x1="426" y1="285" x2="485" y2="300" stroke="currentColor" marker-end="url(#i20230709113600-arrow)"/>
<line x1="426" y1="330" x2="485" y2="400" stroke="currentColor" marker-end="url(#i20230709113600-arrow)"/>
</g>
</svg>

## Indici B+ Tree

Possiamo implementare la struttura di indici multilivello usando i B+ Tree.
è un implementazione più efficiente del B-Tree. Il B-Tree è strutturato con ogni nodo contenente una lista alternata di valore - chiave $\langle P_{1}, K_{1},..., K_{q}, P_{q} \rangle$ dove $K_{1} \lt ,..., \lt K_{q-1}$ e $P_{K_{i}}$ punta ai dati relativi alla chiave $K_i$. 
Tutti i nodi foglia sono allo stesso livello 

<svg viewBox="0 0 610 480" width="100%" style="max-width:610px;display:block;margin:1.5rem auto" role="img" aria-label="B-tree: ogni nodo alterna puntatori ai figli p, chiavi k e puntatori ai record; le linee tratteggiate portano dai nodi ai record REC(k) nel file di dati">
<defs><marker id="i20230709114439-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="10" markerHeight="8" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 z" style="fill:currentColor;fill:context-stroke"/></marker></defs>
<g transform="translate(-150,0)">
<!-- nodi -->
<rect x="318" y="8" width="40" height="30" fill="none" stroke="currentColor"/>
<text x="338" y="28" text-anchor="middle" fill="currentColor" font-size="13">p0</text>
<rect x="358" y="8" width="40" height="30" fill="none" stroke="currentColor"/>
<text x="378" y="28" text-anchor="middle" fill="currentColor" font-size="13">k0</text>
<rect x="398" y="8" width="8" height="30" fill="none" stroke="currentColor"/>
<rect x="406" y="8" width="40" height="30" fill="none" stroke="currentColor"/>
<text x="426" y="28" text-anchor="middle" fill="currentColor" font-size="13">p1</text>
<rect x="446" y="8" width="40" height="30" fill="none" stroke="currentColor"/>
<text x="466" y="28" text-anchor="middle" fill="currentColor" font-size="13">k1</text>
<rect x="486" y="8" width="8" height="30" fill="none" stroke="currentColor"/>
<rect x="494" y="8" width="40" height="30" fill="none" stroke="currentColor"/>
<text x="514" y="28" text-anchor="middle" fill="currentColor" font-size="13">p2</text>
<rect x="168" y="96" width="40" height="30" fill="none" stroke="currentColor"/>
<text x="188" y="116" text-anchor="middle" fill="currentColor" font-size="13">p’0</text>
<rect x="208" y="96" width="40" height="30" fill="none" stroke="currentColor"/>
<text x="228" y="116" text-anchor="middle" fill="currentColor" font-size="13">k’0</text>
<rect x="248" y="96" width="8" height="30" fill="none" stroke="currentColor"/>
<rect x="256" y="96" width="40" height="30" fill="none" stroke="currentColor"/>
<text x="276" y="116" text-anchor="middle" fill="currentColor" font-size="13">p’1</text>
<rect x="296" y="96" width="40" height="30" fill="none" stroke="currentColor"/>
<text x="316" y="116" text-anchor="middle" fill="currentColor" font-size="13">k’1</text>
<rect x="336" y="96" width="8" height="30" fill="none" stroke="currentColor"/>
<rect x="344" y="96" width="40" height="30" fill="none" stroke="currentColor"/>
<text x="364" y="116" text-anchor="middle" fill="currentColor" font-size="13">p’2</text>
<rect x="488" y="96" width="40" height="30" fill="none" stroke="currentColor"/>
<text x="508" y="116" text-anchor="middle" fill="currentColor" font-size="13">p”0</text>
<rect x="528" y="96" width="40" height="30" fill="none" stroke="currentColor"/>
<text x="548" y="116" text-anchor="middle" fill="currentColor" font-size="13">k”0</text>
<rect x="568" y="96" width="8" height="30" fill="none" stroke="currentColor"/>
<rect x="576" y="96" width="40" height="30" fill="none" stroke="currentColor"/>
<text x="596" y="116" text-anchor="middle" fill="currentColor" font-size="13">p”1</text>
<rect x="616" y="96" width="40" height="30" fill="none" stroke="currentColor"/>
<text x="636" y="116" text-anchor="middle" fill="currentColor" font-size="13">k”1</text>
<rect x="656" y="96" width="8" height="30" fill="none" stroke="currentColor"/>
<rect x="664" y="96" width="40" height="30" fill="none" stroke="currentColor"/>
<text x="684" y="116" text-anchor="middle" fill="currentColor" font-size="13">p”2</text>
<!-- puntatori ai figli -->
<line x1="338" y1="38" x2="292" y2="95" stroke="currentColor" marker-end="url(#i20230709114439-arrow)"/>
<line x1="426" y1="38" x2="540" y2="95" stroke="currentColor" marker-end="url(#i20230709114439-arrow)"/>
<line x1="538" y1="26" x2="742" y2="80" stroke="currentColor" marker-end="url(#i20230709114439-arrow)"/>
<!-- puntatori ai record -->
<line x1="180" y1="414" x2="728" y2="414" stroke="currentColor"/>
<line x1="252" y1="126" x2="252" y2="446" stroke="currentColor" stroke-dasharray="5 4" marker-end="url(#i20230709114439-arrow)"/>
<text x="252" y="468" text-anchor="middle" fill="currentColor" font-size="12">REC(k’0)</text>
<line x1="340" y1="126" x2="340" y2="446" stroke="currentColor" stroke-dasharray="5 4" marker-end="url(#i20230709114439-arrow)"/>
<text x="340" y="468" text-anchor="middle" fill="currentColor" font-size="12">REC(k’1)</text>
<line x1="402" y1="38" x2="402" y2="446" stroke="currentColor" stroke-dasharray="5 4" marker-end="url(#i20230709114439-arrow)"/>
<text x="402" y="468" text-anchor="middle" fill="currentColor" font-size="12">REC(k0)</text>
<line x1="490" y1="38" x2="490" y2="446" stroke="currentColor" stroke-dasharray="5 4" marker-end="url(#i20230709114439-arrow)"/>
<text x="490" y="468" text-anchor="middle" fill="currentColor" font-size="12">REC(k1)</text>
<line x1="572" y1="126" x2="572" y2="446" stroke="currentColor" stroke-dasharray="5 4" marker-end="url(#i20230709114439-arrow)"/>
<text x="572" y="468" text-anchor="middle" fill="currentColor" font-size="12">REC(k”0)</text>
<line x1="660" y1="126" x2="660" y2="446" stroke="currentColor" stroke-dasharray="5 4" marker-end="url(#i20230709114439-arrow)"/>
<text x="660" y="468" text-anchor="middle" fill="currentColor" font-size="12">REC(k”1)</text>
</g>
</svg>

Con l'aggiunta di un elemento, l'albero è mantenuto bilanciato tenendo tutte le foglie allo stesso livello, quando un nodo diventa completo, esso si divide in due nodi, il nodo radice avrà solo il valore centrale del nodo, mentre i figli avranno la parte sinistra e destra rispettivamente. Quando uno di questi due nodi si riempie, il nodo viene diviso in due, e aggiunto al padre, posizionandolo correttamente in base alla chiave.
Se il padre si riempie, anche esso è diviso e si propaga a tutto il resto dell ramo verso l'alto.

Dopo un eliminazione di un elemento, si controlla se il nodo è pieno per metà della sua capacità, se lo è, allora viene fuso con uno dei suoi nodi vicini, potenzialmente propagando fino alla radice.

L'albero *B+Tree* ha anche un puntatore tra i vari nodi foglia, e ogni nodo foglia memorizza gli indici dei dati. Essendo bilanciato, la ricerca di un indice è costante all'altezza dell'albero

<svg viewBox="0 0 700 335" width="100%" style="max-width:700px;display:block;margin:1.5rem auto" role="img" aria-label="B+ tree: radice francesco, nodi interni benedetto e giovanni, foglie collegate in lista (anacleto aristide, benedetto ennio, francesco gino, giovanni pio) con i puntatori ai record del file di dati">
<defs><marker id="i20230709115122-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="10" markerHeight="8" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 z" style="fill:currentColor;fill:context-stroke"/></marker></defs>
<g transform="translate(-30,0) scale(0.84)">
<!-- nodi -->
<rect x="333" y="12" width="195" height="38" fill="none" stroke="currentColor"/>
<line x1="344" y1="12" x2="344" y2="50" stroke="currentColor"/>
<text x="384.5" y="36" text-anchor="middle" fill="currentColor" font-size="15">francesco</text>
<line x1="425" y1="12" x2="425" y2="50" stroke="currentColor"/>
<line x1="436" y1="12" x2="436" y2="50" stroke="currentColor"/>
<line x1="517" y1="12" x2="517" y2="50" stroke="currentColor"/>
<line x1="528" y1="12" x2="528" y2="50" stroke="currentColor"/>
<rect x="133" y="115" width="195" height="38" fill="none" stroke="currentColor"/>
<line x1="144" y1="115" x2="144" y2="153" stroke="currentColor"/>
<text x="184.5" y="139" text-anchor="middle" fill="currentColor" font-size="15">benedetto</text>
<line x1="225" y1="115" x2="225" y2="153" stroke="currentColor"/>
<line x1="236" y1="115" x2="236" y2="153" stroke="currentColor"/>
<line x1="317" y1="115" x2="317" y2="153" stroke="currentColor"/>
<line x1="328" y1="115" x2="328" y2="153" stroke="currentColor"/>
<rect x="537" y="115" width="195" height="38" fill="none" stroke="currentColor"/>
<line x1="548" y1="115" x2="548" y2="153" stroke="currentColor"/>
<text x="588.5" y="139" text-anchor="middle" fill="currentColor" font-size="15">giovanni</text>
<line x1="629" y1="115" x2="629" y2="153" stroke="currentColor"/>
<line x1="640" y1="115" x2="640" y2="153" stroke="currentColor"/>
<line x1="721" y1="115" x2="721" y2="153" stroke="currentColor"/>
<line x1="732" y1="115" x2="732" y2="153" stroke="currentColor"/>
<rect x="53" y="245" width="195" height="38" fill="none" stroke="currentColor"/>
<line x1="64" y1="245" x2="64" y2="283" stroke="currentColor"/>
<text x="104.5" y="269" text-anchor="middle" fill="currentColor" font-size="15">anacleto</text>
<line x1="145" y1="245" x2="145" y2="283" stroke="currentColor"/>
<line x1="156" y1="245" x2="156" y2="283" stroke="currentColor"/>
<text x="196.5" y="269" text-anchor="middle" fill="currentColor" font-size="15">aristide</text>
<line x1="237" y1="245" x2="237" y2="283" stroke="currentColor"/>
<line x1="248" y1="245" x2="248" y2="283" stroke="currentColor"/>
<rect x="258" y="245" width="195" height="38" fill="none" stroke="currentColor"/>
<line x1="269" y1="245" x2="269" y2="283" stroke="currentColor"/>
<text x="309.5" y="269" text-anchor="middle" fill="currentColor" font-size="15">benedetto</text>
<line x1="350" y1="245" x2="350" y2="283" stroke="currentColor"/>
<line x1="361" y1="245" x2="361" y2="283" stroke="currentColor"/>
<text x="401.5" y="269" text-anchor="middle" fill="currentColor" font-size="15">ennio</text>
<line x1="442" y1="245" x2="442" y2="283" stroke="currentColor"/>
<line x1="453" y1="245" x2="453" y2="283" stroke="currentColor"/>
<rect x="463" y="245" width="195" height="38" fill="none" stroke="currentColor"/>
<line x1="474" y1="245" x2="474" y2="283" stroke="currentColor"/>
<text x="514.5" y="269" text-anchor="middle" fill="currentColor" font-size="15">francesco</text>
<line x1="555" y1="245" x2="555" y2="283" stroke="currentColor"/>
<line x1="566" y1="245" x2="566" y2="283" stroke="currentColor"/>
<text x="606.5" y="269" text-anchor="middle" fill="currentColor" font-size="15">gino</text>
<line x1="647" y1="245" x2="647" y2="283" stroke="currentColor"/>
<line x1="658" y1="245" x2="658" y2="283" stroke="currentColor"/>
<rect x="668" y="245" width="195" height="38" fill="none" stroke="currentColor"/>
<line x1="679" y1="245" x2="679" y2="283" stroke="currentColor"/>
<text x="719.5" y="269" text-anchor="middle" fill="currentColor" font-size="15">giovanni</text>
<line x1="760" y1="245" x2="760" y2="283" stroke="currentColor"/>
<line x1="771" y1="245" x2="771" y2="283" stroke="currentColor"/>
<text x="811.5" y="269" text-anchor="middle" fill="currentColor" font-size="15">pio</text>
<line x1="852" y1="245" x2="852" y2="283" stroke="currentColor"/>
<line x1="863" y1="245" x2="863" y2="283" stroke="currentColor"/>
<!-- puntatori -->
<line x1="338.5" y1="37" x2="183" y2="112" stroke="currentColor" marker-end="url(#i20230709115122-arrow)"/>
<line x1="430.5" y1="50" x2="548" y2="112" stroke="currentColor" marker-end="url(#i20230709115122-arrow)"/>
<line x1="138.5" y1="153" x2="112" y2="242" stroke="currentColor" marker-end="url(#i20230709115122-arrow)"/>
<line x1="230.5" y1="153" x2="293" y2="242" stroke="currentColor" marker-end="url(#i20230709115122-arrow)"/>
<line x1="542.5" y1="153" x2="520" y2="242" stroke="currentColor" marker-end="url(#i20230709115122-arrow)"/>
<line x1="634.5" y1="153" x2="703" y2="242" stroke="currentColor" marker-end="url(#i20230709115122-arrow)"/>
<line x1="242.5" y1="264" x2="257" y2="264" stroke="currentColor" marker-end="url(#i20230709115122-arrow)"/>
<line x1="447.5" y1="264" x2="462" y2="264" stroke="currentColor" marker-end="url(#i20230709115122-arrow)"/>
<line x1="652.5" y1="264" x2="667" y2="264" stroke="currentColor" marker-end="url(#i20230709115122-arrow)"/>
<!-- puntatori ai record -->
<line x1="40" y1="342" x2="863" y2="340" stroke="currentColor"/>
<circle cx="40" cy="342" r="4" fill="currentColor"/>
<circle cx="863" cy="340" r="4" fill="currentColor"/>
<line x1="58.5" y1="283" x2="58.5" y2="386" stroke="currentColor" marker-end="url(#i20230709115122-arrow)"/>
<line x1="150.5" y1="283" x2="150.5" y2="386" stroke="currentColor" marker-end="url(#i20230709115122-arrow)"/>
<line x1="263.5" y1="283" x2="263.5" y2="386" stroke="currentColor" marker-end="url(#i20230709115122-arrow)"/>
<line x1="355.5" y1="283" x2="355.5" y2="386" stroke="currentColor" marker-end="url(#i20230709115122-arrow)"/>
<line x1="468.5" y1="283" x2="468.5" y2="386" stroke="currentColor" marker-end="url(#i20230709115122-arrow)"/>
<line x1="560.5" y1="283" x2="560.5" y2="386" stroke="currentColor" marker-end="url(#i20230709115122-arrow)"/>
<line x1="673.5" y1="283" x2="673.5" y2="386" stroke="currentColor" marker-end="url(#i20230709115122-arrow)"/>
<line x1="765.5" y1="283" x2="765.5" y2="386" stroke="currentColor" marker-end="url(#i20230709115122-arrow)"/>
</g>
</svg>

In oltre usando questa struttura è possibile implementre facilmente un range di ricerca.

## Indici di bitmap e indici di JOIN

Gli *indici di bitmap* sono usati per immagazzinare quegli attributi che presentano un numero ridotto di valori possibili, avendo un vettore di bit dove un bit uguale a 1 rappresenta che quel specifico valore è presente nella tupla.

Tabella IMPIEGATI

| ID | Nome | Cognome | Ruolo | Sesso |
|---|---|---|---|---|
| 1 | Carlo | Carli | manager | m |
| 2 | Giancarlo | Sperlì | analista | m |
| 3 | Lucio | Sansone | manager | m |
| 4 | Flora | Amato | programmatore | f |
| 5 | Antonio | Picariello | programmatore | m |
| 6 | Vincenzo | Moscato | analista | m |

Indice di Bitmap sull'attributo "Ruolo"

| rid | manager | analista | programmatore |
|---|---|---|---|
| 001 | 1 | 0 | 0 |
| 002 | 0 | 1 | 0 |
| 003 | 1 | 0 | 0 |
| 004 | 0 | 0 | 1 |
| 005 | 0 | 0 | 1 |
| 006 | 0 | 1 | 0 |

Gli *Indici di JOIN* permette di precalcolare l'operazione di join, evitando di ricacolarla ogni volta che viene eseguita una query.

# Gestione della memoria

Ha il compito di gestire le informazioni presenti nel buffer di memoria centrale, rimuovendo e aggiungendo. 
Utilizza strategie di aggiunta/rimozione di dati per decidere se un dato può essere rimosso dalla memoria di massa per liberare spazio ad altre risorse da leggere da disco, esistono varie strategie:
- **FIFO** (First in first out)
- **LRU** (Least recently used)

O ogni dato ha due variabili di stato, count e dirty, count indica quanti programmi stanno usando una certa apgina e dirty indica se la pagina è stata modificata o meno. Quando si richiede una pagina da disco, il gestore del buffer controlla se esiste già in memoria, se esiste allora incrementa il count di 1, e se viene modificata, pone il dirty a 1.

In caso che la pagina non sia presente, viene scelto una pagina da liberare tramite le politiche di FIFO o LRU, se non è presenta alcuna pagina libera, il gestore di buffer può applicare politiche chiamate *steal* o *no steal*. Una volta che la pagina richiesta è trasferita in memoria, si setta il count a 1 e dirty a 0.

- Politica **Steal** scrive su disco prima della commit di una transazione, *Rubando* una pagina dalla transazione
- Politica **No steal** non viene rimossa la pagina ad un altra commit, e la richiesta corrente viene messa in attesa finchè una pagina viene liberata.
- Politica **Force** si assicura che tutte le pagine modificate da una transazione siano immediatamente scritte su memoria di massa appena abbiano fatto la commit, liberando la pagina. Altrimenti si chiama politica *no force* 

# Query processor

Ha il compito di ottimizzare le query scegliendo strateglie migliori a ridurre i tempi di risposta e passaggi intermedi di una query. é diviso in vari passaggi:

- **Analisi lessicale, sintattica e semantica**: Si determina se una query è corretta in base alle informazioni dello schema del database, e viene poi convertita nella sua relativa forma algebrica
- **Ottimizzazione algebrica**: Trasforma la query in ingresso in una forma equivalente ma più efficientemente eseguibile
- **Ottimizzazione basata sui costo**: Viene ottimizzata la query in base alle informazioni sulle relazioni del database, questo poi determina il piano finale di esecuzione in sequenza di operazioni di basso di livello.

Un euristica fondamentale dell'ottimizzazione delle query è di *Push selections down* e *push projections down*  

Per esempio partendo dalla query:

```sql
SELECT * FROM DIPARTIMENTI D JOIN IMPIEGATI I ON D.Cod=I.Dip WHERE I.Cognome='Moscato';
```

Abbiamo l'equivalente forma algebrica come:
$$
\Large{\sigma_{I.Cognome = 'Moscato'}(D \triangleright \triangleleft_{D.Cod = I.Dip} I)}
$$
Tramite il **Pushing selection down** troviamo che se $A$ e $B$ due generiche relazioni e $\tilde{X}$ una condizione di selezione sugli attributi di $B$, abbiamo che:
$$
\Large{\sigma_{\tilde{\chi}}(A \triangleright \triangleleft_{\chi}B) = (A \triangleright \triangleleft_{\chi}\sigma_{\tilde{\chi}}(B))}
$$

Perchè anticipa la selezione alla join, permettendo di ridurre il numero di tuple nell'operazione di join, quindi la query finale sarà del tipo:
$$
\Large{D\triangleright\triangleleft_{D.Cod = I.Dip} \ \sigma_{I.Cognome = 'Moscato'}(I)}
$$

In oltre abbiamo ulteriori ottimizzazioni che possiamo effettuare:
- Decomporre le selezioni in AND in successive selezioni atomiche
- Anticipare il più possibile le selezioni 
- Tra le sequenze di selezioni, anticipare quelle più selettive
- Anticipare il più possibile le proiezioni

In seguito il DBMS effettua le ottimizzazioni in base allo schema del database effettuando ottimizzazioni creando un piano di esecuzione in base a:
- Cardinalità delle relazioni
- Dimensioni delle tuple
- Dimensioni degli attributi
- Numero di valori distinti degli attributi 
- Valore minimo e massimo di ogni attributo
- ecc...
Queste ottimizzazioni servono per ridurre al più possibile le dimensioni degli step intermedi, e decide la migliore sequenza di operazioni a basso livello come scansione, accesso, ordinamento e join

Il piano di esecuzione può poi essere memorizzato in un catalogo ed essere richiamato più volte se la stessa query viene eseguita nuovamente (Compile & Store), oppure essere riottimizzata ogni volta (Compile & Go)

# Gestore della Concorrenza

I programmi utenti esistono simultaneamente e viene richiesto l'accesso contemporaneo di operazioni al database, e il DBMS deve garantire la consistenza, integrità e affidabilità dei dati.

Una transazione è un operazione, o sequenza di operazioni che legge e aggiorna il contenuto di un database. Una transazione è quindi un unità logica che corrisponde a una serie di operazioni di lettura/scrittura sul database.

Una transazione può terminare con successo tramite una *Commit* garantendo quindi che i dati modificati dalla transazione siano salvati, o fallire con un *Abort*, eliminando tutte le modifiche intermedie effettuate al database

Una transazione va attraverso vari stati
- **Partially committed**: Quando viene eseguita l'ultima istruzione della transazione, a questo punto la transazione  può essere abortita se ha violato qualche vincolo di integrità o il sistema non ha potuto portare a termine la transazione per qualche errore, mandando la transazione nello stato *Failed* e in futuro abortita. Se tutto va bene, allora passa allo stato *Committed*
- **Failed**: si verifica quando una transazione non può essere committata o se viene abortita durante l'esecuzione.

Il compito del DBMS a questo punto è far terminare le transazioni massimizzano il throughput, aumentando il numero di transazioni effettuate al secondo, e riducendone i tempi medi di risposta mantenendo comunque le proprietà ACID del database.

Le operazioni di una transazione possono essere modellati come sequenza di read e write, specificate come
- $read(x,y)$  dove X è l'oggetto da leggere e Y è il dato letto
- $write(x,y)$ dove X è l'oggetto da scrivere e Y è il dato scritto
Tutti questi valori sono etichettate in maniera temporale in cui avvengono

## Perdita di aggiornamento

La perdita di aggiornamento *Lost update* avviene quando un operazione di aggiornamento di una transazione si sovrappone a un altra che sta aggiornando lo stesso oggetto, annullandone gli effetti 

| Time | $T_1$ | $T_2$ | $qtaP_x$ |
|---|---|---|---|
| $t_1$ | **bot** | | 100 |
| $t_2$ | $read(qtaP_x, A)$ | **bot** | 100 |
| $t_3$ | $A = A - 50$ | $read(qtaP_x, A)$ | 100 |
| $t_4$ | $write(qtaP_x, A)$ | $A = A - 30$ | 50 |
| $t_5$ | $write(qtaC_{xz_1}, 50)$ | $write(qtaP_x, A)$ | 70 |
| $t_6$ | **commit** | $write(qtaC_{xz_2}, 30)$ | 70 |
| $t_7$ | | **commit** | 70 |

## Lettura sporca

La lettura sporca *Dirty read* si verifica quando una transazione legge un valore modificato da una transazione che poi verrà abortita 

| Time | $T_1$ | $T_2$ | $qtaP_x$ |
|---|---|---|---|
| $t_1$ | **bot** | | 100 |
| $t_2$ | $read(qtaP_x, A)$ | | 100 |
| $t_3$ | $A = A - 50$ | | 100 |
| $t_4$ | $write(qtaP_x, A)$ | | 50 |
| $t_5$ | $write(qtaC_{xz_1}, 50)$ | **bot** | 50 |
| $t_6$ | ... | $read(qtaP_x, A)$ | 50 |
| $t_7$ | ... | $A = A - 30$ | 50 |
| $t_8$ | ... | $write(qtaP_x, A)$ | 20 |
| $t_9$ | **rollback** | $write(qtaC_{xz_2}, 30)$ | 70 |
| $t_{10}$ | | **commit** | 70 |

## Lettura inconsistente

La lettura inconsistente *Inconsistent read* si verifica quando una transazione legge in due istanti diversi uno stesso oggetto, con valori differenti nelle due letture, anche se la transazione stessa non lo ha modificato, questo perchè è stato modificato da un altra transazione.

| Time | $T_1$ | $T_2$ | $qtaP_x$ |
|---|---|---|---|
| $t_1$ | **bot** | | 20 |
| $t_2$ | $read(qtaP_x, A)$ | | 20 |
| $t_3$ | ... | | 20 |
| $t_5$ | ... | **bot** | 20 |
| $t_6$ | ... | $read(qtaP_x, A)$ | 20 |
| $t_7$ | ... | $A = A - 20$ | 20 |
| $t_8$ | ... | $write(qtaP_x, A)$ | 0 |
| $t_9$ | ... | $write(qtaC_{xz}, 30)$ | 0 |
| $t_{10}$ | ... | **commit** | 0 |
| $t_{11}$ | $read(qtaP_x, A)$ | | 0 |
| $t_{12}$ | ... | | 0 |
| $t_{13}$ | **commit** | | 0 |

## Aggiornamento fantasma

Un aggiornamento fantasma *Ghost update* si verifica quando una o più operazioni di aggiornamento riguardano due o più oggetti del database il cui valore è correlato (esempio per vincoli di integrità), non vengono viste da altre transazioni sovrapposte temporalmente. Per loro questo aggiornamento è come se non fosse stato effettuato

| Time | $T_1$ | $T_2$ | $qtaP_{x_1}$ | $qtaP_{x_2}$ |
|---|---|---|---|---|
| $t_1$ | **bot** | | 100 | 100 |
| $t_2$ | $read(qtaP_{x_1}, A)$ | | 100 | 100 |
| $t_2$ | ... | **bot** | 100 | 100 |
| $t_3$ | ... | $read(qtaP_{x_1}, A)$ | 100 | 100 |
| $t_4$ | ... | $A = A - 30$ | 100 | 100 |
| $t_5$ | ... | $write(qtaP_{x_1}, A)$ | 70 | 100 |
| $t_6$ | ... | $write(qtaC_{x_1 z}, 30)$ | 70 | 100 |
| $t_7$ | ... | $read(qtaP_{x_2}, B)$ | 70 | 100 |
| $t_8$ | ... | $B = B - 30$ | 70 | 100 |
| $t_9$ | ... | $write(qtaP_{x_2}, B)$ | 70 | 70 |
| $t_{10}$ | ... | $write(qtaC_{x_2 z}, 30)$ | 70 | 70 |
| $t_{11}$ | ... | **commit** | 70 | 70 |
| $t_{12}$ | $read(qtaP_{x_2}, B)$ | | 70 | 70 |
| $t_{13}$ | $qtaP_{x_1} \neq qtaP_{x_2}$ | | 70 | 70 |
| $t_{14}$ | **commit** | | 70 | 70 |

## Controllo della concorrenza

Ogni transazione è formata da una sequenza temporale di lettura/scrittura su oggetti del database, rappresentati come:
$$
T_{1}: r_{1}(X), w_{1}(X), r_{1}(Y), r_{1}(Z), w_{1}(Z)
$$
$$
T_{2}: r_{2(X)}, r_{2}(Y), r_{2}(Z), w_{2}(Y) 
$$
Bisogna poter eseguire le transazioni in contemporanea evitando anomalie.

Uno **Schedule** è una sequenza di operazioni di lettura/scrittura generate da un insieme di transazioni concorrenti che preserva l'ordine temporale delle operazioni
Uno **Scheduler** è un sistema che accetta/rifiuta/riordina le operazioni richieste dalle transazioni
Uno **Schedule seriale** è un particolare schedule le cui operazioni vengono eseguite in maniera consecutiva senza sovrapposizioni di operazioni di altre transazioni
Uno **Schedule serializzabile** é uno schedule non seriale che produce gli stessi risultati di uno schedule seriale (anche non essendolo), ed esso può essere trasformato per diventare seriale

Esempio schedule seriale:
$$
S_{3}: r_{1}(X), w_{1}(X), r_{1}(Y), r_{1}(Z), w_{1}(Z), r_{2}(X), r_{2}(Y), r_{2}(Z), w_{2}(Y)
$$
Esempio di schedule non seriale
$$
S_{4}: r_{1}(X), w_{1}(X), r_{2}(X), r_{2}(Y), r_{2}(Z), w_{2}(Y), r_{1}(Y), r_{1}(Z), w_{1}(Z)
$$

I DBMS implementano metodi basati su lock e timestamp per garantire direttamente la serializzabilità, e vengono chiamati metodi "Pessimistici o conservativi" in quanto ritardano l'esecuzione di transazioni che potrebbero generare conflitti nello schedule corrente.

## Metodi basati su lock

Ogni oggetto del database è protetto da un lock
- Ogni volta che una transazione deve leggere l'oggetto, richiede l'autorizzazione tramite un operazione di "read_lock(x)", e una volta acquisito il lock, può effettuare la lettura, il lock di sola lettura può essere condiviso da più transazioni. 
- Ogni volta che una transazione deve scrivere su un oggetto deve richiederne l'autorizzazione tramite operazione di "write_lock(x)" e una volta acquisito il lock, può eseguire la scrittura, il lock di scrittura è esclusivo e non può essere condiviso da più transazioni.

Una volta che una transazione termina l'operazione che ha richiesto il lock, lo rilascia attravero un "unlock" e ogni oggetto nel database ha 3 stati possibili, "libero" (free), "bloccato in lettura" (r_lock), "bloccato in scrittura" (w_lock)

Il gestore della concorrenza possederà un componente chiamato lock manager che tiene conto di tutti gli stati degli oggetti e accoglie o rifiuta richieste in base alla tavola di conflitti.

## Lock a due fasi (2PL)

Ogni transazione deve proteggere tutte le letture e scritture con un lock, allora entra in fase "crescente" acquisendo tutti i lock di cui ha bisogno, e dopo li rilascia nella fase "decrescente", una volta aver rilasciato un lock, non può più acquisirne altri. Questa tecnica non previene il dirty read, esiste un altra strategia chiamata "strict 2PL" che rilascia le risorse solo dopo aver effettuato commit o abort, garantendo che i dati siano corretti.

Il 2PL può causare problemi tramite il deadlock dove due o più transazioni sono bloccate l'una con l'altra in richieste di lock cicliche, i DBMS prevengono l'avvenirsi di deadlock riconoscendo quando, garantendo una richiesta, si possa generare deadlock

## Metodo a timestamp

Ad ogni transazione viene assegnato un timestamp in base a quando nascono e quando accedono a determinati oggetti per operazioni di lettura e scrittura.

Uno schedule è accettato solo se:
- Una transazione non può leggere un oggetto scritto da una transazione più giovane 
- Una transazione non può scrivere un oggetto letto o scritto da una transazione più giovane

Ad ogni oggetto $X$ viene assegnato due variabili 
- $RTM(X)$: Rappresenta il timestamp dell'ultima transazione che ha letto $X$
- $WTM(X)$: Rappresenta il timestamp dell'ultima transazione che ha scritto X

Lo scheduler riceve richieste di $read(\tau, X)$ e $write(\tau, X)$ dove $\tau$ è il timestamp della transazione. 
- In caso di richiesta di lettura, essa viene respinta e la transazione uccisa se $\tau < WTM(X)$, altrimenti la richiesta viene accolta e si aggiorna $RTM(X) = max(\tau, RTM(X))$
- In caso di richiesta di scrittura, essa viene respinta e la transazione uccisa se $\tau < WTM(X)$ o se $\tau < RTM(X)$, altrimenti la richiesta viene accolta e $WTM(X) = \tau$ 

## Approccio ottimistico

In alcuni database casi di conflitti tra transazioni concorrenti sono rari, e quindi le tecniche basate su lock e timestamp non sono necessarie, in questi casi si usa una tecnica ottimistica dove ogni transazione effettua liberamente le proprie operazioni e solo all'atto del commit viene effettuato un controllo per stabilire se ci sono stati conflitti, e in caso, viene effettuato rollnback delle azioni della transazione e rieseguita *restarting*. 

Questo approccio è diviso in 3 fasi:
- **Fase di lettura**: ogni tansazione legge i valori degli oggetti di cui ha bisogno e le memorizza in variabili locali dove vengono eventualmente effettuati aggiornamenti
- **Fase di validazione**: vengono effettuati controlli sulla serializzabilità degli schedule nel caso che gli aggiornamenti locali dovranno essere propagati sulla base di dati
- **Fase di scrittura**: dopo aver superato la fase di validazione, gli aggiornamenti sono propagati al database

## Isolamento di una transazione

Una transazione può definire il livello di isolamento richiesto in 3 tipolgie:
- **READ UNCOMMITTED**: La transazione accetta di leggere dati modificati da transazioni che non hanno ancora fatto commit. Ignora i lock esclusivi e non acquisice lock in lettura
- **READ COMMITTED**: La transazione accetta di leggere dati modificati da transazioni che hanno fatto commit, ma se legge più volte lo stesso dato, potrebbero esserci dati diversi
- **REPEATABLE READ**: La transazione accetta di leggere dati modificati da transazioni che hanno fatto commit, e se legge più volte lo stesso dato, si avrà sempre lo stesso risultato 
- **SERIALIZABLE**: produce schedule serializzabili senza alcuna anomalia

# Gestore di Affidabilità

La memorizzazione dei dati in un DBMS coinvolge 3 memorie:

- **Memoria centrale**: rappresenta lo storage primario di un sistema di database, ha la caratteristica di essere molto veloce in scrittura e lettura ma ha capacità ridotta ed le informazioni non sono volatili 
- **Memoria di massa e memoria stabile**: permette di persistere i dati e ha elevata capacità, ma è molto più lento. La memoria stabile è anche vista come una memoria che non può essere "danneggiata" (come repliche del database) mentre la memoria di massa potrebbe potenzialmente avere guasti e perdita di dati.

Il compito del gestore di affidabilità è di garantire che tutti gli effetti delle transazioni che hanno effettuato commit siano memorizzate in maniera permanente, in modo che in caso di eventuali guasti hardware o software sia sempre possibile ripristinare il corretto contenuto del database. 

Il gestore di affidabilità gestisce l'esecuzione di tutti i comandi transazionali di begin, commit, rollback e di ripristino dopo guasti. Salva tutte queste informazioni in un file di log che in qualsiasi istante permette di ricostruire il contenuto del database a seguito di malfunzionamenti.

## Checkpoint e Dump

- **CHECKPOINT**: è un operazione che segna che tutte le operazioni precedenti ad essa siano correttamente salvate nel database.
- **DUMP**: è un operazione di backup o copia del contenuto del database sulla memoria stabile che è necessaria alla ricostruzione della memoria di massa in caso di guasto di esso.

Durante l'operazione di checkpoint vengono sospese l'accettazione di nuove transazioni, si trasferiscono in memoria di massa tutte le pagine dirty (modificate) da transazioni andate in commit e registra sul logo in modo sincrono un checkpoint che contiene gli identificatori di transazioni attive, e poi si continua a ricevere operazioni.

Dopo un checkpoint si è sicuri che tutte le transazioni che hanno effettuato commit sono in memoria di massa.

## Struttura dei Log di sistema

Il log di sistema del database contiene record di transazione e record di sistema. 

Il **record di transazione** contiene:
- **Identificativo** della transazione ($T$)
- **Timestamp** delle varie azioni ($t_s$) 
- L'**azione** ($O_p$) svolta dalla transazione:  begin ($B$), update ($U$), delete ($D$), insert ($I$), commit ($C$), abort ($A$)
- L'**identificativo** dell'oggetto del database coinvolto ($O$)
- Il **valore dell'oggetto prima della modifica** ($B_I$) da parte della transazione (before image)
- Il **valore dell'oggetto dopo la modifica** ($A_I$) da parte di una transazione (after image)
Possiamo semplificare schematizzando i record delle transazioni nella forma $O_{p}(T, t_{s},O, B_{I}, A_{I})$, se non abbiamo bisogno dell'istante preciso in cui avvengono le operazioni si può omettere $t_s$, indicando quindi che tutte le operazioni sono eseguite uno dopo l'altro
per esempio: $U(T_{1},-, qtaP, 100, 90)$

Il **Record di sistema** contiene:
- **DUMP** (DP) contenente l'istante $t_s$ in cui è stato effettuato l'ultimo backup 
- **CHECKPOINT** (CK) contiene l'insieme delle transazioni attive ($\Large{\tau}$) in un dato istante ($t_s$) 
Possiamo semplificare schematizzando i record di sistema nella forma: $DP(t_s)$ e $CK(t_{s}, \Large{\tau})$ 

Esempio di un log:

```haskell
DP, B(T1,-,-,-,-), U(T1,-,qtaP,100,90), U(T1,-,qtaC,NULL,10), C(T1,-,-,-,-), B(T2,-,-,-,-), CK(T2), U(T2,-,qtaP,90,70), U(T1,-,qtaC,NULL,20), C(T2,-,-,- ,-), B(T3,-,-,-,-), U(T3,-,qtaP,100,90), U(T3,-,qtaC,NULL,10), C(T3,-,-,-,-)
```

## Ripristino

- (**UNDO**): L'esito di una transazione è determinato quando viene scritto il record di commit nel log, un guasto prima di questo istante potrebbe comportare un disfacimento di tutte le azioni di una transazione registrate nel log in caso che i dati siano già stati memorizzati sul database.
- (**REDO**): Un guasto successivo al commit potrebbe causare un rifacimento di tutte le azioni svolte da una transazione e registrate nel log nel caso in cui non siano ancora state registrate nella memoria di massa.

Per garantire un corretto ripristino si seguono delle regole per la scrittura sul log: 
- **Write ahead**: Ogni transazione scrive su log i record prima di effettuare l'operazione sul database, consentendo di disfare le azioni
- **Commit precedenza**: Ogni transazione scrive su log tutti i record prima di effettuare commit, consentendo di rifare le azioni se i dati non sono ancora stati scritti su memoria di massa

Con 3 modalità differenti:
- **Modalità immediata**: ogni scrittura su log è immediatamente seguita da scrittura su base di dati, evitando operazioni di redo, avendo eventualmente solo operazioni di undo
- **Modalità differita**: ogni scrittura di transazioni sul database è differita alla successiva memorizzazione del record di commit nel log, evitando operazioni di undo, avendo solo operazioni di redo
- **Modalità mista**: la scrittura può avvenire sia in modalità immediata e differita, richiedendo sia undo e redo.

## Tipi di guasti e recovery

- **Warm restart**: A seguito di *guasti soft*, cioè errori di programma, crash di sistema, etc. Si perde solo il contenuto della memoria centrale e rimangono intatti memoria secondaria e stabile. In questo caso si effettua un *warm restart*
- **Cold restart**: A seguito di *guasti hard* dei dispositivi di memoria di massa e centrale ma non quella stabile. In questo caso si effettua un *cold restart* 

In entrambi i casi si effettua un ripristino seguendo:
1) Si forza l'arresto completo delle transazioni attive
2) Viene ripristinato il funzionamento del sistema operativo
3) Si effettua la procedura di ripristino

### Ripresa a caldo 

In caso di warm restart si effettuano:
1) Viene ripercorso il log a ritroso finche non si trova l'ultimo checkpoint
2) Viene costruito l'insieme *undo* delle transazioni da disfare, cioè quelle che hanno effettuato abort prima del guasto o che non hanno ancora effettuato commit ma hanno scritto su database. E viene costruito l'insieme *redo* di tutte quelle transazioni che hanno effettuato commit prima del guasto ma che non fossero ancora salvate nel database
3) Viene ripercorso il log "all'indietro", disfacendo tutte le azioni delle transazioni nell'insieme undo. Nel caso di update si ripristina il valore $B_I$, nel caso di insert si cancella l'oggetto inserito e nel caso di delete si ripristina l'oggetto rimosso
4) Viene percorso il log "in avanti" rifacendo tutte le azioni delle transazioni nell'insieme *redo*. Nel caso di update si ripristina il valore $A_I$, nel caso di insert si inserisce l'oggetto nel database, nel caso di delete si cancella l'oggetto nel database

### Algoritmo ripresa a caldo

1) Trovo **L'ULTIMO** checkpoint, inizializzo l'insieme undo con le transazioni nel checkpoint
2) Si continua da li fino alla fine aggiungendo in UNDO le transazioni che hanno fatto begin (nuove transazioni) e in REDO tutte le transazioni che hanno fatto commit, in caso rimuovendole dall'undo
3) Si parte a ritroso disfacendo tutte le operazioni delle transazioni all'interno di UNDO, invertendone l'operazione
4) Si parte dall'inizio rifacendo tutte le operazioni delle transazioni all'interno di REDO

## Ripresa a freddo

1) Si ripristina i dati partendo dal backup più recente del dump 
2) Si eseguono tutte le operazioni registrare sul log della parte deteriorata portandoci allo stesso istante del guasto 
3) Si esegue una ripresa a caldo

# Database distribuiti

Un database distribuito consiste in un unico database logico suddiviso da un insieme di frammenti, dove ogni frammento è memorizzato in uno o più sever in rete, ognuno con il proprio DBMS. Ogni server è in grado di elaborare in modo indipendente le richieste degli utenti che richiedono accesso ai dati memorizzati localmente ed è in grado di elaborare dati presenti in altri siti della rete

Questa tecnica ha dei lati positivi che comporta la distribuzione su più server con harder meno costoso e performante, aumenta la scalabilità del sistema e aumenta l'affidabilità e disponibilità dei dati.
Ma ha anche lati negativi, complicando il sistema hardware e software.

Se tutti i server usano lo stesso DBMS allora si tratta di database omogenei, altrimenti si parla di database eterogenei. Allo stesso modo se un singolo server ha completa autonomia, si parla di sistema *multi database* 

## Frammentazione 

Esistono due tipologie di frammentazione:
- **Frammentazione orizzontale**: frammenta la tabella, cioè ogni frammento ha una parte della tabella
- **Frammentazione verticale** frammenta gli attributi, cioè ogni frammento ha una parte degli attributi di un database
Un operazione di frammentazione di una relazione $r$ in frammenti $r_{1}, ..., r_{m}$ è corretta solo se valgono:
- **Completezza**: Ogni tupla che compare in $r$ deve essere trovata in almeno un frammento $r_i$ 
- **Ricostruibilità**: è possibile definire una operazione che dai frammenti $r_i$ permetta di ricorstruire la relazionr $r$ in modo da mantenere le dipendenze funzionali di $r$ 
- **Disgiunzione**: se un dato appare in un frammento, non deve essere presente in nessun altro frammento, evitando la ridondanza 

In un frammento orizzontale, un operazione di selezione avviene effettuando la selezione in tutti i frammenti e unendone i risultati.
In un frammento verticale si ottiene la proiezione degli attributi effettuando la proiezione in ogni frammento per poi effettuarne il join.

Bisogna anche garantire le proprietà ACID della transazione globale, questo necessita di un coordinatore globale su ogni server che ha il compito di coordinare l'esecuzione sia delle transazioni globali sia di quelle locali, e le comunicazioni tra i diversi server devono avvenire attraverso comunicazione iter server 

## Verifica delle proprietà ACID nei frammenti
- **Consistenza e atomicità**: I vincoli sono locali quindi se un vincolo è rispettato localmente, lo è anche globalmente, stesso vale per l'atomicità (senza considerare la presenza di fallimenti di sistema). 
- **Isolamento**: Se ogni server usa *2PL ristretto* allora lo scheduling globale è serializzabile, se ogni server usa il metodo dei timestamp e i timestamp sono assegnati in maniera globale, allora lo scheduling è serializzabile. Quindi se uno schedule locale è serializzabile, lo è anche quello globale, visto come l'unione di tutti gli schedule locali
- **Persistenza**: Si deve porre attenzione alla persistenza, soprattutto in caso di fallimenti, infatti bisogna tener conto la possibilità di perdita di messaggi, caduta di connessione o di un server e eventuale partizionamento della rete di comunicazione.

## Two Phase Commit (2PC)

Per garantire l'atomicità di una transazione globale si deve assicurare che una singola sottotransazione vada in abort o commit. 

Si utilizza il *Rito del matrimonio* per garantire ciò, il server che inizia la transazione sarà il coordinatore, e tutti gli altri server locali coinvolti saranno i partecipanti, il coordinatore conosce tutti i partecipanti, e i partecipanti conoscono il coordinatore. 

Il coordinatore chiede ai partecipanti se sono tutti d'accordo a concludere la transazione positivamente (pronti a fare commit, fase di voting), se almeno uno dei partecipanti non vota in tempo, o vota per l'abort, l'intera transazione globale viene abortita, altrimenti si può continuare con il commit globale

## Replicazione dei database

Un modello di replicazione di database consente di copiare le informazioni di un database in più server distribuiti, richiedendo che qualsiasi modifica sul database principale sia replicato negli altri. Questo modello aumenta l'affidabilità del sistema, permettendo recovery a caldo più efficiente, e allo stesso modo aumenta le prestazioni del sistema riducendo il carico di ogni singolo sistema, distribuendolo sull'intera rete, permettendo un numero maggiore di utenti contemporanei. 

Il server principale viene chiamato *Master*, ha il compito di controllare che tutte le modifiche fatte su di esso siano propagati agli *slaves*
I server di replicazione, chiamati anche *Slaves*, hanno il compito di mantenersi in linea con le informazioni presenti sul master

Ci sono due tipologie di sincronizzazione tra master e slave:

- **Sincrona**: Una modifica nel master modifica immediatamente anche tutti gli slave, facendo uso di opportuni protocolli tipo il 2PC.
- **Asincrona**: Periodicamente vengono prelevate le modifiche effettuate al master e replicate negli slave
