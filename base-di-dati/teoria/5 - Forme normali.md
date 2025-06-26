Una forma normale è una proprietà che deve essere soddisfatta dagli attributi di ogni schema di relazione in un database, esse garantiscono la "qualità" di un database, perchè quando non nomralizzato, un database può contenere ridondanza e crea problemi in fase di aggiornamento dei dati

Le principali problematiche sono date dalla Ridondanza, che da anomalie di aggiornamento, cancellazione e inserimento.

# Dipendenza funzionale

Per scoprire e rimuovere le anomalie in uno schema del modello logico si devono scoprire le relazioni dette **Dipendenze Funzionali (DF)** che fissano ulteriori vincoli di integrità di uno schema di relazione $R(X)$ 

Lo si nota tramite la sintassi $Y \rightarrow Z$ che indica una dipendenza funzionale da Y a Z, dove Y e Z sono attributi di una relazione. Si legge come _Y determina Z_ oppure _Z dipende funzionalmente da Y_ 

Consideriamo una relazione $r \ su \ R(X)$ e due sottoinsiemi non vuoti $Y,Z \subseteq X$, esiste una Dipendenza Funzionale da Y a Z ($Y \rightarrow Z$) se per ogni coppia di tuple $t_{1}, t_2$ di r, che hanno gli stessi valori su Y, risulta che $t_{1}, t_{2}$ hanno gli stessi valori anche in Z, cioè che:

$$
\huge{\forall t_{1},t_{2} \in r : t_{1}[Y]=t_{2}[Y] \rightarrow t_{1}[Z] = t_{2}[Z]}
$$
Esempio:

![[Pasted image 20230708175705.png]]
 - Lo stipendio dipende dall'impiegato 
 - Il bilancio dipende dal progetto 

# Chiavi e attributi

Tutti gli attributi che sono parte di almeno una chiave $R(X)$ si dice _Attributo primo_, mentre uno che non fa parte di alcuna chiave è detto _Attributo non primo_.

Se $K$ è una chiave dello schema $R(X)$ allora ogni attributo non primo $Z$ dipende funzionalmente da $K$, quindi il vincolo di **DF** $K \rightarrow Z$, dove $X \supseteq K \cup Z$, generalizza il vincolo di chiave $K \rightarrow X$ 

Se $Y \rightarrow Z$ e risulta che anche $Z \rightarrow Y$, e Y è una chiave per uno schema R, allora anche Z è una chiave.
Una dipendenza funzionale $Y \rightarrow Z$  è detta *completa* se Z non dipende da nessun altro sottoinsieme di Y, cioè che se Y è una chiave, se la dipendenza funzionale è completa, Z deve dopendere da tutta la chiave e non anche da parte di essa

# Prima forma normale (1NF)

Uno Schema di relazione $R(X)$ è detto essere in prima forma normale se ogni attibuto di $X$ è un attributo semplice. Nel modello relazionale, $R(X)$ è per definizione in 1NF. Quindi ne segue che ogni attributo di $R(X)$ non primo dipende funzionalmente da una chiave di $R(X)$ 

Un esempio di relazione non in 1NF è quando contiene un attributo multivalore, come una lista, per esempio, *Corsi* e *Indirizzo* sono dati multivalore e strutturati, quindi non in 1NF

![[Pasted image 20230708182258.png]]

E può essere trasformato in 1NF normalizzando la colonna _Corsi_ e _Indirizzo_ 

![[Pasted image 20230708182406.png]]

# Seconda forma normale (2NF)

Uno schema di relazione $R(X)$ è detto in 2NF, se è in 1NF e ogni attributo non primo dipende completamente da ogni chiave di $R(X)$, cioè ogni dipendenza funzionale dipende solo da un attributo primo, ed in generale, se ogni chiave di $R(X)$ ha un solo attributo, allora $R(X)$ è in 2NF

![[Pasted image 20230708182815.png]]

DF1: $\{Articolo, Magazzino\} \rightarrow Città$ 
DF2: $Magazzino \rightarrow Città$ 

In DF1, città dipende funzionalmente da Articolo e Magazzino

Uno schema che non soddisfa la 2NF può essere normalizzato decomponendo le relazioni che non soddisfano la 2NF, cioè viene decomposta in base agli attributi non comuni in modo tale che le relazioni ottenute soddisfino la 2NF e che il contenuto informativo del database sia uguale.

![[Pasted image 20230708183110.png]]

# Decomposizione senza perdita

Si dice decomposizione senza perdita se uno schema $R(X)$ si decompone in $R_{1}(X_{1})$ e $R_{2}(X_{2})$ se per ogni istanza legale r di $R(X)$, il JOIN naturale delle proiezioni di r su $X_1$ e $X_2$ è uguale a r, cioè che:

$$
\huge{\pi_{x_{1}}(r) \triangleright \triangleleft \pi_{x_{2}(r)}= r}
$$
oppure che valga che $X_{1} \cap X_{2} \rightarrow X_1$, oppure,  $X_{1} \cap X_{2} \rightarrow X_2$, cioè che una decomposizione è garantita essere senza perdita se gli attributi comuni contengono una chiave per almeno una delle relazioni decomposte

![[Pasted image 20230708190739.png]]

# Terza forma normale (3NF)

Dato uno schema di relazione $R(X)$, un attributo $A$ dipende transitivamente dall'insieme di attributi $Y$ se esiste un altro insieme di attributi $Z$ tale che:
- $Y \rightarrow Z$ e $Z$ -/-> $Y$
- $Z \to A$ e $A$ -/-> $Z$
- $A \notin Y \cup Z$ 

Uno schema di relazione $R(X)$ è in 3NF se è in 2NF e ogni attributo non primo di $R(X)$ dipende in modo non transitivo da ogni chiave di $R$, cioè che dipende solo dalle chiavi.

Un altro modo per definirlo è che $R(X)$ è in 3NF se per ogni DF $Y \to Z$  definita su $R(X)$ 
- Y è una superchiave di $R(X)$. Ogni dipendenza funzionale è completa
- Z è un attributo primo. Se $Y$ è un attributo non primo, Z deve essere un attributo primo


## Riassumendo

- 1NF: ogni attributo non primo dipende dalla chiave 
- 2NF: ogni attributo non primo dipende da tutta la chiave
- 3NF: ogni attributo non primo dipende solo dalla chiave

# Forme normale di Boyce e Codd

Uno schema di relazione $R(X)$ è in forma normale di Boyce e Codd se ogni dipendenza funzionale $Y \to Z$ definita su $R(X)$, $Y$ è una superchiave.

Se uno schema di relazione è in forma normale di Boyce e Codd, allora è anche in 3NF, ma non viceversa 