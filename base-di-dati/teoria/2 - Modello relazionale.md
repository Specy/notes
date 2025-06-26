# Definizioni

## Dominio
Un dominio è un insieme di valori 

## Relazione

Dati n domini $D_{1}, D_{2}, ..., D_{n}$ , una relazione $r$ sui domini $D_i$  è un sottoinsieme, anche vuoto del prodotto cartesiano dei $D_n$ insiemi, $r \subseteq D_{1} \times D_{2} \times ... \times D_{n}$  ed è vista come una tupla di n valori 
$t=\{(v_{1}, V_{2}, ..., V_{n})  |  v_{1} \in D_{1}, v_{2} \in d_{2}, ..., v_{n}\in d_{n}\}$    

Le relazioni hanno delle proprietà:
- Non esiste ordinamento tra le tuple
- Ogni tupla è distinta tra le altre (non ci sono duplicati)
- Ogni posizione di un valore corrisponde al dominio in cui fa parte, e modificando la definizione di tupla, rendendo gli elementi della tupla come una coppia $\langle valore, dominio \rangle$, possiamo dire che non esiste ordinamento negli elementi della tupla

## Schema di relazione

Dato un insieme di nome di attributi $X = \{ A_{1}, ..., A_{n}\}$, viene definito uno schema di relazione, un nome R seguito da un insieme di nomi di attibuti $R(X)=R(A_{1}, ..., A_{n})$ 
Per esempio: `Autori(Codice, Nome, Cognome)` 

## Valore di una tupla

Sia ${i}$ una tupla definita su attibuti $X$, definiamo con la notazione $t_{i}[A]$ il valore della tupla $i$ dell'attributo $A \subseteq X$, o anche, una lista di attributi, questa volta indicato con la lettera $Y$ 
Esempio: 

$t_2 = (Pippo, TSI, 30, SI)$ definito con gli attributi $X=\{Nome, Esame, Voto, Lode \}$
allora $t_{2}[Nome, Esame] = (Pippo, 30)$ 

## Assenza di un valore

Per definire "**L'assenza di valore**", si usa un valore speciale chiamato **NULL** e sta a rappresentare:
- Valore attualmente sconosciuto (valore sconosciuto)
- Assenza di un valore (valore inesistente)
-  Il valore non c'è ma non si sa se esiste o meno (valore senza informazione)

## Vincoli di integrità

Un vincolo di integrità è una regola che ogni schema di relazione deve rispettare affinchè i suoi dati corrispondano al modello definito nel Database

## Schema di un database

Uno schema di un database è definito dagli schemi di relazione e le sue regole di integrità. Un database relaziona è uno schema di database che soddisfa le regole di integrità.

## Tipi di vincoli in un database

- **Vincoli intra-relazionali**: Si vincolano i valori di uno specifico attributo (Vincolo di dominio), di chiave (per identificare univocamente la tupla), e su più attributi della tupla (vincoli di tupla)
- **Vincoli inter-relazionali**: Verificano la validità di attributi in una relazione per correrarla ad un altra

In un vincolo intra relazionale:
- **Vincolo di dominio**:  Una regola che deve essere soddisfatta dai valori di un tale attributo di una relazione, (es: un voto può essere compreso tra 18 e 30, un voto può essere lode o no)
- **Vincolo di tupla**: Una condizione logica che coinvolge più attributi in una tupla (es: la lode può esserci solo se il voto è 30)
In un vincolo inter relazionale: 
- Che il vincolo sia valido, cioè che esista integrità referenziale


## Superchiave

Dato uno schema di relazione $R(X)$ e sia $SK$ un sottoinsieme di attributi di $X$, esso so chiama Super chiave, se non esistono tuple con la stessa super chiave, cioè che:

$\forall t_{i}, t_{j} \in r, i \ne j \implies t_{i[SK]} \ne t_j[SK]$    

In una relazione esiste sempre almeno una super chiave, per esempio la tupla in se, dato che non esistono tuple duplicate

## Chiave (superchiave minimale)

Una chiave, o anche detta superchiave minimale, è una superchiave dove tolto un qualsiasi attributo, essa non è più chiave, non è detto che tutte le chiavi abbiano lo stesso numero di attributi

## Chiave primaria 

Una chiave primaria è una chiave che viene scelta per rappresentare la relazione, di solito è la chiave con cardinalità più bassa. In oltre, nessun valore della chiave primaria può essere null

## Chiave esterna e integrità referenziale

Date due relazioni $r_1$ e $r_2$, con $r_1$ dotata di chiave esterna (FK) e $r_2$ dotata di chiave primaria (PK), si dice che tra $r_1$ e $r_2$ sussiste un vincolo di integrità referenziale se per ogni occorrenza di FK, in $t_{1} \in r_1$ 
- FK è NULL
- $\exists t_{2} \in r_{2} \mid t_{1}[FK] = t_{2}[PK]$  

Cioè che se esiste una FK, allora esiste un altra tupla con una valida PK uguale alla FK, esempio:

Rappresentiamo con:
- una chiave primaria: "<u>Nome PK</u>"
- una chiave esterna con referenza ad un altra tabella: "<u>Nome FK</u>: NOME TABELLA"

STUDENTI (<u>Matricola</u>, Nome, Cognome, Indirizzo) 
CORSI(<u>Codice</u>, Corso) 
CARRIERE(<u>MatStudente</u>: STUDENTI, <u>CodiceCorso</u>: CORSI, Data, Voto)
