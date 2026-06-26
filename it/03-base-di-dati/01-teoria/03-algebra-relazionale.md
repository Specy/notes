---
title: "Algebra Relazionale"
description: "Operatori dell'algebra relazionale (unione, intersezione, differenza, selezione, proiezione, join naturale, join esterno, theta join, equi join) con esempi e regole di equivalenza."
type: lecture
---

L'algebra relazionale è un insieme di operatori su relazioni che producono altre relazioni, ed essi possono essere composti insieme.

Gli operatori sono:
- [[#unione]]
- [[#intersezione]]
- [[#differenza]]
- [[#ridenominazione]]
- [[#selezione]]
- [[#proiezione]]
- [[#join naturale]]
- [[#join esterno]]
- [[#theta join]]
- [[#equi join]]

> Unione, intersezione e differenza sono applicabili solo a relazioni definite sugli stessi attributi

# Unione

Definito con il simbolo $r_{1}\cup r_{2}$ , unisce due insiemi con stessi attributi, rimuovendo eventuali duplicati

# Intersezione

Definito con il simbolo $r_{1}\cap r_2$ , include solo le tuple presenti in entrambe le relazioni 

# Differenza

Definito con il simbolo $r_{1}-r_{2}$ , include solo le tuple che appartengono a $r_1$ e non a $r_2$ 

# Ridenominazione

Definito come, $X_n$ nomi nuovi, $X_c$ nomi correnti

$$\Large{\rho_{X_{n}\leftarrow X_c} (Operando)}$$

è un operatore monadico (su un solo argomento) che modifica lo schema di una relazione, lasciando l'originale intatta

> Esempio:

Paternità(Padre, Figlio)

$\Large{\rho_{\ Genitore \leftarrow Padre}(Paternità)}$    



# Selezione
è un operatore monadico che seleziona tutte le tuple che hanno valore **VERO** Nella condizione data, la condizione può usare i nomi dell'operando per poi usare gli operatori `<, >, =, !=, etc...` 
$$\Large{\sigma_{Condizione}(Operando)}$$
Si possono usare anche operatori logici tipo: AND, OR, $\neg$   

> Esempio:

Impiegati(Matricola, Cognome, Filiale, Stipendio, LuogoNascita)

$\Large{\sigma_{Stipendio \ > \ 50}(Impiegati)}$ 
$\Large{\sigma_{Stipendio \ > \ 50 \ AND \ Filiale \ = \ 'Milano'}(Impiegati)}$ 
$\Large{\sigma_{Filiale \ = \ LuogoNascita}(Impiegati)}$  


# Proiezione
è un operatore monadico che seleziona gli attributi definiti nell'operatore, 
$$
\Large{\pi_{ListaAttributi}(Operando)}
$$
> Esempio:

Impiegati(Matricola, Cognome, Filiale, Stipendio)

$\Large{\pi_{Matricola, Cognome}(Impiegati)}$

![[Pasted image 20230707160102.png]]
La cardinalità di una proiezione è al più quella dell'operando, può diminuire dato che si escludono tuple diplicate


# Join naturale
Dati $R_{1}(X_{1}) \ , \ R_{2}(X_{2})$ , il join naturale $R_{1} \ JOIN \ R_{2}$  è una relazione su $X_{1} \times X_{2}$ dove:
$R_{1} \ JOIN \ R_{2} = \{ t \in X_{1} \times X_{2} \mid \exists t_{1}\in R_{1}, \ t_{2}\in R_{2} \ t[X_{1}] = t_{1} \ and \ t[X_{2}] = t_2\}$    

Cioè prende tutte quelle tuple parte del prodotto cartesiano tra $X_{1}$ e $X_{2}$ tale che gli attributi comuni tra i due sono uguali. In pratica è il prodotto cartesiano dei due insiemi 
![[Pasted image 20230707165930.png]]
Se ci sono tuple senza valori in comune, esse non faranno parte dell'insieme finale della join. 
In generale, dato una generica join di $R_{1}(A,B), R_{2}(B,C)$ la cardinalità delle join è: 
 - In generale: $0 \le \lvert R_{1} \ JOIN \ R_{2} \rvert \le \lvert R_{1} \rvert \times \lvert R_{2}\rvert$  
 - Se $B$ è chiave in $R_2$ $0 \le \lvert R_{1} \ JOIN \ R_{2} \rvert \le \lvert R_{1} \rvert$ 
 - Se B è chiave in $R_2$ ed esiste un vincolo di integrità referenziale fra $B$ in $R_1$ e $R_2$ $\lvert R_{1} \ JOIN \ R_{2} \rvert = \lvert R_{1} \rvert$ 
 

# Join esterno
A differenza del join naturale, il join esterno include anche i valori che non hanno un match valido, e rimpiazza i valori che dovrebbero esser parte della tupla, con NULL.
Esistono 3 tipologie di join esterno 
- $JOIN_{left}$: mantiene tutte le tuple del primo operando, aggiungendo valori NULL se necessario
- $JOIN_{right}$: mantiene tutte le tuple del secondo operando, aggiungendo valori NULL se necessario
- $JOIN_{FULL}$: sia LEFT e RIGHT join insieme

![[Pasted image 20230707173030.png]]![[Pasted image 20230707173047.png]]![[Pasted image 20230707173058.png]]![[Pasted image 20230707173108.png]]

# THETA Join
La theta join effettua un join naturale con condizione, è equivalente ad una selezione di una join naturale 
$$
\Large{R_{1} \ JOIN_{Condizione} \ R_{2} = \sigma_{Condizione}(R_{1} \ JOIN \ R_{2})}
$$

# EQUI Join
Se l'operatore di condizione è sempre un = allora si tratta di una EQUI Join 
![[Pasted image 20230707173911.png]]

# Equivalenza di espressioni

Due espressioni sono dette equivalenti se producono lo stesso risultato dato qualsiasi istanza di input. Usiamo l'equivalenza per ridurre la complessità delle query.
Un equivalenza importante è: dati $R_1$ e $R_{2}$ con $A$, attributo di $R_2$, allora
$$
\Large{\sigma_{A = 10}(R_{1} \ JOIN \ R_{2}) = R_{1} \ JOIN \ \sigma_{A = 10}(R_{2})} 
$$
La seconda query è più efficiente dato che effettua una join già filtrata, mentre la prima esegue la join di tutte le combinazioni per poi filtrarlo

# Selezione con valori nulli
Le condizioni atomiche che usiamo per confrontare un valore funziona solo se il valore è diverso da null, se lo è, la condizione non sarà mai verificata, o meglio, è "sconosciuto"

Per questo definiamo due condizioni, $IS \ NULL$ e $IS \ NOT \ NULL$ 

Le condizioni possono essere poste in AND ed OR, quindi dato
Persone(Nome, Cognome, Età), dove età può essere null

$$
\begin{split}
\Large{\sigma_{eta > 30}(Persone) \cup \sigma_{eta \le 30}(Persone) \cup \sigma_{eta \ IS \ NULL}(Persone)} = \\
	= \Large{\sigma_{eta > 30 \vee eta \le 30 \vee eta \ IS \ NULL}(Persone)}
\end{split}
$$

# Viste 

Una vista è uno schema esterno che rappresenta una rappresentazione diversa di uno stesso dato.
A questo punto differenziamo in due tipi di relazioni
- Relazioni di base: hanno contenuto autonomo
- Relazioni derivate: è una relazione il cui contenuto è funzione di altre relazioni 
Allo stesso modo le visite derivate hanno due tipologie
- Viste materializzate: Sono viste derivate da altre e sono memorizzate nella base di dati. Ha il vantaggio di essere immediatamente disponibili per interrogazioni, ma ha lo svantaggio di esser ridondanti e rendono più complicate le operazioni di aggiornamento dei dati
- Relazioni virtuali (o viste): Le viste sono ricalcolate ogni volta, hanno il vantaggio di essere più flessibili.
Esempio:
$$
\Large{Supervisione = \pi_{Impiegato, \ Capo}(Afferenza \ JOIN \ Direzione)}
$$
Quando andiamo ad eseguire una Query su $Supervisione$ esso viene "Rimpiazzato" dalla sua definizione di vista. 
Per esempio quando eseguiamo la query:
$$
\Large{\sigma_{Capo='leoni'}(Supervisione)}
$$
Viene in realtà eseguita la query 
$$
\Large{\sigma_{Capo='leoni'}(\pi_{Impiegato, \ Capo}(Afferenza \ JOIN \ Direzione))}
$$
Il lato positivo delle viste è che possono essere definite dall'utente del database, in modo da prendere i dati di cui ha bisogno in quel momento, e questa tecnica non influisce sull'efficienza delle query dato che verranno ottimizzate. 
