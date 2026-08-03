---
title: "Rappresentazione della Conoscenza e Ragionamento"
description: "Knowledge representation and reasoning (KRR): agenti basati sulla conoscenza, logica proposizionale, inferenza tramite model checking e resolution, clausole di Horn, e logica del primo ordine con predicati e quantificatori."
type: lecture
---
La KRR (Knowledge representation and reasoning) è un sottocampo dell'AI dedicata a rappresentare informazioni sul mondo, che possono essere usati da sistemi AI per risolvere dei compiti.

Agenti che possono effettuare KRR sono chiamati "knowledge-base agents", e se usano logica per compiere il KRR, sono chiamati "logical agents"

Agenti basati sulla knowledge usano un processo di inferenza per derivare nuove rappresentazioni del mondo, usandole per dedurre l'azione da prendere

Gli agenti basati sulla knowledge vanno oltre le semplici implementazioni di KRR tramite problem solving e CSP, avendo una forma più generica e potente di KRR che gli permette di:
- Accettare nuovi task 
- Riuscire ad acquistare competenze nuove tramite apprendimento oppure essere detto come risolvere un task
- Si adatta a cambiamenti nell'ambiente, aggiornando la knowledge rilevante

# Knowledge base

Il componente centrale di un agente basati sulla knowledge è la propria *knowledge base* (KB)

Un KB è un insieme di "proposizioni", rappresentata in un linguaggio formale (knowledge representation language) che specifica delle asserzioni sul mondo. Un esempio usando linguaggio naturale è "Quando c'è il tuono, c'è anche il fulmine", "Non ci sono stati fulmini oggi", "Non ci sono stati tuoni oggi"

Quando una proposizione non è derivata da altre proposizioni, essa è chiamata assioma.

Una proprietà utile delle KB è quella di poter permettere l'inferenza, cioè che possiamo derivare nuove proposizioni da quelle che abbiamo. Un esempio tramite le proposizioni dei fulmini è che se noi sappiamo che oggi non ci sono stati tuoni, allora possiamo derivare che "Quando c'è il tuono, c'è anche il fulmine" e "Non ci sono stati fulmini oggi"

Una KB deve fornire:
- Un modo di poter aggiungere nuove proposizioni (operazione **TELL**)
- Un modo di interrogare cosa sa la KB (operazione **ASK**)
Entrambe TELL e ASK tipicamente usano inferenza. per esempio dopo aver ricevuto due operazioni di TELL per dire che "Quando c'è il tuono, c'è anche il fulmine" e "Non ci sono stati tuoni oggi", per una futura operazione ASK di "Ci sono stati fulmini oggi?" la risposta sarà dedotta a "no"

Possiamo rappresentare queste proposizioni con proposizioni logiche del tipo:

1. **Logica proposizionale con clausole di Horn**  
   - Sistema logico che utilizza proposizioni atomiche e clausole di Horn, che sono formule della forma $A_1 \land A_2 \land \dots \land A_n \rightarrow B$, dove $A_i$ e $B$ sono proposizioni atomiche. È particolarmente utilizzata in ambiti come la programmazione logica, grazie alla sua semplicità e alla possibilità di derivazione efficiente.

2. **Logica proposizionale**  
   - Sistema formale basato su proposizioni atomiche e connettivi logici (ad esempio $\land$, $\lor$, $\neg$, $\rightarrow$, ecc.). Serve a rappresentare enunciati che possono essere veri o falsi senza considerare la struttura interna delle proposizioni.

3. **Teoria del primo ordine con clausole di Horn**  
   - Estensione della logica proposizionale con clausole di Horn, dove le proposizioni sono sostituite da predicati che possono includere variabili. Le clausole di Horn rimangono della forma $P_1 \land P_2 \land \dots \land P_n \rightarrow Q$, ma $P_i$ e $Q$ sono ora predicati e possono coinvolgere termini con variabili.

4. **Teoria del primo ordine**  
   - Sistema logico che consente l'uso di predicati, funzioni, costanti e variabili quantificate (es. $\forall x$, $\exists \ x$). Permette di rappresentare conoscenza più espressiva rispetto alla logica proposizionale, includendo relazioni tra oggetti e proprietà di questi ultimi.

5. **Teoria del secondo ordine**  
   - Estensione della teoria del primo ordine in cui si permette la quantificazione non solo su variabili individuali, ma anche su predicati e relazioni. Ciò consente di esprimere concetti più complessi, come la definizione di insiemi o proprietà generali, ma rende il sistema logico meno gestibile computazionalmente.

L'efficienza computazionale migliora andando da 5 (il più complesso) ad 1, mentre l'espressività migliora andando da 1 a 5

Le proposizioni logiche non sono abbastanza "potenti" per definire la maggior parte delle KB, ma da le fondamenta per le altre, come la Teoria del primo ordine, la preferita per le KB

# Agenti basati sulla knowledge

Un agente basato sulla conoscenza ha una KB che inizialmente include delle informazioni di base, e come tutti gli altri agenti, usa i percept come input, e ritorna un azione come output.

Ogni volta che l'agente è chiamato tramite un certo input nei percept, l'agente fa:

1. esegue un operazione TELL sulla KB in base all'input dei percept
2. esegue un operazione ASK sulla KB per sapere che azione eseguire
3. esegue un operazione TELL in base all'azione che è stata scelta, per poi eseguire l'azione

## Semantica e Sintassi della logica

Ogni forma di logica, che siaa proposizionale, primo o secondo ordine etc... tutte usano lo stesso linguaggio di rappresentazione della knowledge. Una proposizione in logica è anche detta formula.

La **sintassi** ci dice che una proposizione è ben formata, cioè che una proposizione segua la sintassi del linguaggio, per esempio $x+y=4$ è ben formata, ma $x \ y \ 4 + =$ non lo è

La **semantica** specifica il significato di una proposizione, cioè la condizione in cui una proposizione ben formata è vera o falsa.

## Modello e soddisfacibilità 

Un modello di un environment rappresentato da una KB è detto modello. La semantica definisce la verità di ogni proposizione rispetto ad un modello.

Per esempio,  $x+y=4$ è vero nel modello dove $x = 2$, $y = 2$ ma falso in $x = 2$, $y = 1$ 

Una proposizione $\alpha$ è detta _soddisfatta_ se è vera nel modello $m$, o che $m$ è un modello di $\alpha$. 
$M(\alpha)$ è l'insieme di tutti i modelli di $\alpha$, cioè dove $\alpha$ è vero

## Implicazione

Il ragionamento in logica involve la relazioni tra diverse proposizioni, cioè che una proposizione è consequenza logica di un altra proposizione. Formalmente che:

Se una proposizione $\alpha$ implica $\beta$, cioè che $\alpha \vDash \beta$ se e solo se in ogni modello dove $\alpha$ è vero, allora anche $\beta$ è vera. Cioè anche che $M(\alpha) \subseteq M(\beta)$ 

I modelli di una KB $M(KB)$ sono tutti i modelli dove tutte le proposizioni di $KB$ sono vere.

## Inferenza logica

Il ragionamento in logica viene eseguita tramite un processo chiamato inferenza logica, cioè che nuovi proposizioni (ben formate e semanticamente corrette) sono derivate da proposizioni esistenti.

Per effettuare ciò usiamo l'implicazione, infatti una proposizione $\alpha$ può essere derivata se e solo se $KB$ implica $\alpha$, cioè che $M(KB) \subseteq M(\alpha)$ 

Se una proposizione $\alpha$ è derivata da un algoritmo di inferenza $i$ da una KB, diciamo $KB \vdash_i \alpha$ cioè che "\alpha è derivata da KB tramite $i$" 

Un algoritmo di inferenza che deriva solo proposizioni implicate è detta **valida** (sound), dato che non modifica la verità originaria della KB, dato che non aggiunge più vincoli di quelli già presenti.

Un algoritmo di inferenza è detto **Completo** (completeness) se può derivare qualsiasi proposizione implicata

# Logica proposizionale 
Sintassi:
![[Pasted image 20241217161419.png]]
Semantica:
![[Pasted image 20241217161434.png]]

## Esempio KB in logica proposizionale:

- Sintomo di "febbre alta" rappresentato dal simbolo proposizionale $T$.  
- Sintomo di "tosse" rappresentato dal simbolo proposizionale $C$.  
- Sintomo di "catarro colorato" rappresentato dal simbolo proposizionale $P$.  
- "Infezione generica" rappresentata dal simbolo proposizionale $F$.  
- "Infezione batterica" rappresentata dal simbolo proposizionale $B$.  
- Trattamento di "somministrare antibiotico" rappresentato dal simbolo proposizionale $A$.

- $C \land T \Rightarrow F$ ("se tosse e febbre alta, allora infezione").  
- $P \land F \Rightarrow B$ ("se catarro colorato e infezione, allora infezione batterica").  
- $B \Rightarrow A$ ("se infezione batterica, allora somministrare antibiotico").

Ora facciamo finta di eseguire un agente con questa KB. Il percept dice che $TELL(C \land T)$, cioè che il paziente ha tosse e temperatura alta. 
Allora possiamo fare la domanda $ASK(A)$, cioè se dovrebbe essere somministrato un antibiotico

$$ 
KB = \{C \land T; \, C \land T \implies F; \, P \land F \implies B; \, B \implies A\}. 
$$

$$
\begin{aligned}
M(KB) = \{ \{C = 1; \, T = 1; \, F = 1; \, P = 1; \, B = 1; \, A = 1\}; \\\ \{C = 1; \, T = 1; \, F = 1; \, P = 0; \, B = 0; \, A = 0\}; \\\ \{C = 1; \, T = 1; \, F = 1; \, P = 0; \, B = 0; \, A = 1\}; \\\ \{C = 1; \, T = 1; \, F = 1; \, P = 0; \, B = 1; \, A = 1\} \}. 
\end{aligned}
$$

Quando chiediamo $ASK(A)$, cerchiamo tutti gli assegnamenti $M(A)$ delle varie variabili in maniera tale che $A = 1$. Se $M(KB)$ non è un sottoinsieme di $M(A)$, allora KB non implica $A$, e quindi non possiamo fare inferenza su $A = 1$.
Questo è il nostro caso (guarda la seconda riga). Stessa cosa vale per $\neg A$. 

Aggiungiamo knowledege tramite $TELL(C \land T \land P)$ che dice che il pazienta ha tosse, temperatura alta e muco colorato. 

$$
KB = \{C \land T \land P; \, C \land T \implies F; \, P \land F \implies B; \, B \implies A\}.
$$

$$
M(KB) = \{
\{C = 1; \, T = 1; \, F = 1; \, P = 1; \, B = 1; \, A = 1\} \}.
$$
A questo punto con $ASK(A$)$ chiediamo tutti gli assegnamenti di $M(A)$ delle varie variabili tale che $A=1$, ed esso deve essere un sottoinsieme di $M(KB)$. 
Abbiamo un solo assegnamento, e questo assegnamento ha $A=1$, ed è naturalmente un sottoinsieme di $M(KB)$, allora possiamo fare inferenza che $A = 1$.

## Algoritmo Model Checking

Nell'esempio precedente abbiamo usato implicitamente un algoritmo chiamato "model checking", dove dati una base di conoscenza $KB$ e una proposizione $\alpha$, l'algoritmo capisce se $KB$ implica $\alpha$ enumerando ogni possibile mdello e controlla che $a$ sia vera in tutti i modelli dove $KB$ è vera.

La complessità di questo algoritmo è esponenziale dato che dobbiamo trovare ogni combinazione di valori delle variabili. Il problema è che il problema di inferenza proposizionale è un problema co-NP complete, e quindi ogni possibile algoritmo di inferenza ha come caso peggiore $O(2^n)$ 

# Dimostrazione di teoremi

Sono algoritmi sulla logica proposizionale che usano il principio di dimostrazione di teoremi, che applica inferenza direttamente sulle regole della KB costruendo una dimostrazione senza consultare i modelli.

Se il numero di modelli è grane ma la lunghezza della dimostrazione è corta, la tecnica della dimostrazione di teoremi può essere più efficiente rispetto al model checking

## Equivalenza logica

Due proposizioni $\alpha$, $\beta$ sono logicamente equivalenti, $\alpha \equiv \beta$ se tutti i modelli veri di $\alpha$ sono veri anche per $\beta$ e viceversa.

![[Pasted image 20241217175255.png]]

Una proposizione è detta una *tautologia* (o valida) se è sempre vera per ogni modello. Per esempio $\alpha \land \beta \vDash \alpha$ è sempre vera. 

Da questo possiamo dire che per ogni proposizione $\alpha$ e $\beta$, allora $\alpha \vDash \beta$ se e solo se $\alpha \implies \beta$ è una tautologia. Possiamo farlo controllando che $\alpha \implies \beta$ è vera per tutti i modelli (ma cosi torneremo al problema precedente)

Una proposizione è detta *soddisfacibile* se è vera per almeno un modello. Può essere controllata se esiste almeno un modello che soddisfa questa proposizione.

## Regola di inferenza

Una regola di inferenza è una procedura logica che ci permette di dedurre una nuova propsizione (o conclusione) partendo da un insieme di proposizioni (o premesse). Ci permette di definire in modo sistematico di derivare conclusioni partendo da premesse.

Una regola di inferenza è scritta come:
$$
\frac{\text{Premesse (top half)}}{\text{Conclusione (bottom half)}}
$$
## Riduzione ad assurdo 
$$
\frac{\alpha \implies \beta, \alpha}{\beta}
$$
La tautologia e soddisfacibilità sono correlate, infatti:
- $\alpha$ è una tautologia se e solo se $\neg \alpha$ non è soddisfacibile
- $\alpha$ è soddisfacibile se e solo se $\neg \alpha$ non è una tautologia 

Dimostrare $\beta$ da $\alpha$ tramite $\alpha \wedge \neg \beta$  corrisponde esattamente al metodo di dimostrazione di riduzione ad assurdo. cioè che assumendo che $\beta$ sia falso, andiamo a dimostrare che un assioma $\alpha$ sia falso, il che naturalmente non può essere valido, ed allora $\beta$ deve necessariamente essere vero 

## Modus Ponens
$$
\frac{\alpha \implies \beta, \alpha}{\beta}
$$
Data due proposizioni del tipo $\alpha \implies \beta$ dove e $\alpha$, possiamo fare inferenza su $\beta$ 

![[Pasted image 20241217180731.png]]

## Eliminazione della congiunzione
$$
\frac{\alpha \wedge \beta}{\alpha}
$$
Date due proposizioni $\alpha \wedge \beta$ e $\alpha$, si può fare inferenza su uno qualsiasi dei termini della congiunzione. Cioè che se abbiamo una proposizione del tipo $\alpha \wedge \beta$, possiamo fare inferenza su $\alpha$ o $\beta$ singolarmente, cioè che $(\alpha \wedge \beta) \vDash \alpha$  

![[Pasted image 20241217182522.png]]


## Dimostrazione tramite ricerca 

Creiamo un problema dimostrazione come un problema di ricerca:
- Lo stato iniziale è la KB
- Le azioni sono tutte le regole di inferenza (come modus ponens, eliminazione della congiunzione e assurdo) sulle proposizioni del problema che possiamo applicare su tutte le proposizioni che hanno premesse vere
- Il risultato di un azione è l'aggiunta di una nuova proposizione in base alla conseguenza della regola scelta nella azione
- Il goal è lo stato che contiene la proposizione che stiamo cercando di dimostrare

Questo può essere risolto tramite qualsiasi algoritmo di ricerca

![[Pasted image 20241217183956.png]]
![[Pasted image 20241217184008.png]]

# Theorem proving by resolution

Le regole di inferenza che abbiamo visto fino ad ora sono valide (sound) ma non abbamo parlato della completezza, cioè che un algoritmo di ricerca ha la proprietà di completezza, allora riesce ad arrivare ad un goal, se esiste.

Ma nel nostro caso, se le regole di inferenza non sono adeguate, allora il goal non può essere raggiunto, anche se esiste. In questo caso diciamo che non esiste una dimostrazione che usa solo queste regole di inferenza.

Nell'esempio precedente, se rimuovessimo la regola Modeus Ponens e eliminazione della congiunzione, non potremmo arrivare alla dimostrazione finale.

## Resolution rule

La completezza delle regole di inferenza ci fa pensare che idealmente, l'inferenza onn dovrebbe basarsi su specifiche regole di inferenza, ma dovrebbe basarsi su principi più generali.

Questo è quello che facciamo tramite algoritmi di inferenza che usano una singola regola generale, chiamata "resolution", e unendo un algoritmo di ricerca completo insieme ad una regola di inferenza completa ci porta ad un algoritmo di inferenza completo.

![[Pasted image 20241217191221.png]]
- ogni $l$ e $m$ sono letterali e $l_i$ e $m_j$ sono letterali complemento, cioè che $l_i = \neg m_j$ , cioè che uno è la negazione dell'altro.
- ogni $l_1 \vee ... \vee l_k$ e $m_1 \vee ... \vee m_n$ sono chiamate clausole, cioè una disgiunzione di letterali  

1. Se $l_i$ è vera, allora $m_j$ è falsa, e quindi vuol dire che $m_1 \vee ... \vee m_{i - 1} \vee m_{j + 1} \vee ... \vee m_n$  deve necessariamente essere vera, dato che $m_1 \vee ... \vee m_n$ è data come premessa, e quindi vera
2. Se $l_i$ è falsa, allora $l_1 \vee ... \vee l_{i - 1} \vee l_{j + 1} \vee ... \vee l_n$ deve essere vera dato che $l_1 \vee ... \vee l_k$ è data come presemma, e quindi vera

Dato che $l_i$ può essere vera o falsa, una di queste conclusioni deve essere vera, il che è esattamente la conclusione della regola

# Conjunctive normal form (CNF)
La Resolution Rule si applica solo a clausole (quindi disgiunzione di letterali), ma possiamo convertire ogni proposizione logica in una equivalente che è congiunzione di clausole.

![[Pasted image 20241217192316.png]]

# Un algoritmo che usa resolution (PL-RESOLUTION)

Procedure di inferenza che usano la resolution funzionano tramite il principio di dimostrazione per contraddizione, cioè che per dimostrare che $KB \vDash \alpha$, mostriamo che $KB \wedge \neg \alpha$ non è soddisfacibile.

1. Converti $KB \wedge \neg \alpha$ in CNF  
2. Applica iterativamente la resolution rule alle clausole risultanti
   - Ogni paio di clausole che contiene letterali complementari viene usato per applicare la resolution che crea creare una nuova clausola basata sulla resolution rule
   - Aggiungi la nuova clausola al set delle clausole correnti, se non è già presente
   - Ripeti questo procedimento finchè o non ci sono più clausole da aggiungere, e quindi $KB$ non implica $\alpha$, oppure due clausole risultano la clausola vuota, e in quel caso $KB$ implica $\alpha$  

![[Pasted image 20241217193533.png]]

La completezza di questo algoritmo può essere dimostrata tramite il *ground resolution theorem* che prova formalmente che, se un set di clausole non è soddisfacibile, allora la resolution closure (tutte le clausole derivabili da applicazione ripetuta del resolution rule) di queste clausole contengono la clausola vuota 

## Clausole definita e clausole Horn

Una clausola definita è una disgiunzione di letterali dove esattamentte una tra queste è vera.

In forma più generica, la clausola di horn è una disgiunzione di letterali, dove *al più* un letterale è positivo.

Decidere l'implicazione con clausole di horn può essere effettuato in tempo lineare alla dimensione della KB tramite algoritmi specifici chiamati forward-chaining e backward-chaining. 

Il solo Modus ponens su KB che contengono clausole horn è completo

# First order logic

Anche se possiamo usarla per molti scopi, ci sono limitazioni nella logica proposizionale. Per esempio per rappresentare "tutti gli stuenti conoscono l'aritmetica", in logica proposizionale, dovremmo avere una proposizione per ogni studente $AliceIsStudent \implies AliceKnowsArithmetic$, ma anche cose che non possono essere rappresentate, come "ogni numero pari più grande di 2 è somma di numeri primi", il che richiederebbe infinite proposizioni.

La logica proposizionale vede il mondo come una serie di fatti "atomici", ma molti problemi vanno invece formulati come oggetti e relazioni (predicati) tra di loro.
Per esempio la preposizione "AliceConosceAritmetica" che prima era definita come un fatto atomico, ora può essere espresso tramite una struttura, cioè che "alice" (oggetto) "conosce" (relazione) "aritmetica" (oggetto)

Una volta aver scomposto i fatti in oggetti e relazioni, possiamo usare variabili e quantificatori per definire in maniera implicita un numero molto grande (o possibilmente infinito) di fatti tramite una singola formula compatta.

Un esempio:

$$
\begin{aligned}
	& Student(Alice) \\
	& Student(Bob) \\
	& Concept(Arithmetic) \\
	& \forall x Student(x) \implies Knows(x, Arithmetic)
\end{aligned}
$$

Le relazioni tra oggetti possono essere $n-arie$, cioè involvere $n$ oggetti.
Alcune relazioni sono funzioni, cioè relazioni dove mappiamo ad un valore in input, un valore in output

La sintassi della logica di primo ordine estende quella della logica proposizionale.

I **Simboli**, come in logica proposizionale, sono gli elementi base, e possono essere del tipo:

- *Costante*, sono gli oggetti
- *Predicato*, solo le relazioni fra oggetti
- *Funzione*, solo le funzioni

![[Pasted image 20241218125755.png]]

I **Termini** sono un espressione logica che fa riferimento ad un oggetto, possono essere del tipo:
- *Costante*, Identifica un oggetto specifico
- *Variabile*, fa riferimento ad un oggetti non specificato, da determinare tramite i quantificatori
- *Funzioni*, è una funzione che viene applicata ad un insieme di parametri, che sono essi stessi termini

![[Pasted image 20241218130647.png]]

Normalmente diremo "La gamba sinistra di John" e questo potrebbe essere espresso come una variabile "GambaSinistraJohn", ma tramite funzioni possiamo definirla come "GambaSinistra(John)"

Un **Atomo** nella logica proposizionale è definito come un singolo simbolo, mentre in logica di primo ordine, può essere un qualsiasi predicato, opzionalmente seguito da una parentesi e una lista di termini. 
Possiamo anche usare il simbolo di uguaglianza per specificare che due termini fanno riferimento allo stesso valore

![[Pasted image 20241218131341.png]]

Una proposizione complessa è composta tramite l'utilizzo di connettivi logici o quantificatori 

![[Pasted image 20241218131442.png]]
Dove i quantificatori:
- $\forall$ indica il "per ogni", per esempio:
  $\forall x  \ King(x) \implies Person(x)$ "Per ogni x, se x è un re, allora x è una persona", e questo naturalmente è vero se per tutti i valori di $x$, il predicato è vero
- $\exists$ indica il "esiste", per esempio:
  $\exists x \ Crown(x) \wedge OnHead(x, John)$ "Esiste un x tale che x ha una corona e x è sulla testa di john", e questo naturalmente è vero per almeno un valore di $x$, il predicato è vero
Possiamo naturalmente innestare questi quantificatori, come esempio $\forall x \ \forall y$, $\forall x \ \exists y$ 

Sia il per ogni che l'esiste seguono le leggi di demorgan, come il "and" e "or"

![[Pasted image 20241218172641.png]]

Esempi:

![[Pasted image 20241218172703.png]]

# Semantica in logica di primo ordine

In logica proposizionale, un modello assegna un valore di verità (vero o falso) ad ogni simbolo proposizionale.

Nella logica di primo ordine, un modello $m$ è più complesso, è formato a una tupla $m = \langle \mathcal{D}, \mathcal{I}  \rangle$ dove:
-  $\mathcal{D}$ è il dominio, cioè un insieme di oggetti contenuti nel modello
- $\mathcal{I}$ è un interpretazione, cioè specifica esattamente a quale oggetto, relazione e funzione sono riferiti dai simboli costanti, predicati e funzione. 

Per esempio, una costante $c$ può riferirsi a un oggetto specifico $a \in \mathcal{D}$.  
Una funzione $f(x)$ può mappare oggetti del dominio su altri oggetti del dominio.  
Un predicato $P(x)$ definisce quali oggetti o insiemi di oggetti soddisfano una certa proprietà nel dominio.

Dato il dominio $\mathcal{D} = \{ o_1, o_2, o_3, o_4, o_5, o_6 \}$ e i simboli di costante $Alice$, $Bob$,  
$ArtificialIntelligence$, $MachineLearning$, una possibile assegnazione di tali simboli di costante  
agli elementi del dominio $\mathcal{D}$ secondo un'interpretazione $\mathcal{I}$ può essere la seguente:  

- $\mathcal{I}(Alice) = o_1$  
- $\mathcal{I}(Bob) = o_2$  
- $\mathcal{I}(ArtificialIntelligence) = o_3$  
- $\mathcal{I}(MachineLearning) = o_4$  

Un interpretazione di un modello in logica di primo ordine ha bisogno i assegnare ad ogni simbolo predicato, le relazioni dei domini degli elementi. 
Cioè che per un predicato $p$ con arietà $n$, dobbiamo listare tutte le combinazioni dei domini dei suoi elementi, dove ogni elemento del predicato, consideriamo il proprio dominio.

In altre parole: 
$$g_p : \mathcal{D}^n \rightarrow \{true, false\}$$
Ad esempio, per un simbolo di predicato binario (di arità 2) $R(x, y)$, dobbiamo indicare quali coppie $(a, b) \in \mathcal{D} \times \mathcal{D}$ sono incluse nella relazione rappresentata da $R$.

Prendendo l'esempio precedente: 

- $\mathcal{I}(\text{Student}) = \mathcal{I}(\text{Person}) = \{ (o_1), (o_2) \}$
- $\mathcal{I}(\text{Course}) = \{ (o_3), (o_4) \}$
- $\mathcal{I}(\text{Takes}) = \{ (o_1, o_3), (o_1, o_4), (o_2, o_3), (o_2, o_4) \}$
- $\mathcal{I}(\text{Syllabus}, (o_3)) = o_5$ 
- $\mathcal{I}(\text{Syllabus}, (o_4)) = o_6$


## Semantica in logica del primo ordine

Ci sono molte interpretazioni possibili, solo nell'esempio precedente ci sono 36 possibili interpretazioni per le costanti alice e bob.

Ci sono anche problemi nel significato di una interpretazione, per esempio potremmo assegnare $o_3$ ad Alice, e $o_1$, ad $AritificalIntelligence$, che significherebbe che uno studente è preso da un corso, e non il contrario. Oppure potremmo assegnare sia Alice che Bob all'oggettto $o_1$, facendo sembrare che siano la stessa persona.

Per questo motivo bisogna aggiungere "vincoli" nelle nostre dichiarazioni logiche, rimuovendo interpretazioni che hanno una semantica errata.

Esempi di semantiche utili sono:
- **Assunzione dei nomi unici**, che ogni simbolo fa riferimento ad un oggetto distinto
- **Domain closure**, ogni modello contiene esattamente gli oggetti necessari, usati dai simboli costanti
- **Assunzione Closed world**, predicati atomici che non si sanno essere veri, sono considerati falsi 

Come la logica proposizionale, l'implicazione e valaidità sono definite sui possibili modelli.
Il problema è che il numero di possibili modelli nella logica di primo ordine è molto grande, spesso infinito, e quindi non è possibile enumerare tutti i possibili modelli per fare inferenza, quindi l'unico metodo è tramite il theorem proving

## Inferenza in logica di primo ordine

Un modo per risolvere la logica di primo ordine è quello di convertirla in logica proposizionale per poi eseguire l'inferenza proposizionale. 

- Rimpiazza ogni occorrenza di un predicato applicato ad un termine chiuso (termini che non contengono variabili) con un simbolo apposito
- Per i $\forall \ x$, rimpiazza tutte le $x$ nel predicato con con i possibili valori di $x$, per poi unire i risultanti predicati insieme con $\wedge$ 
- Per i $\exists \ x$, stessa cosa del $\forall$ ma unendo i predicati con $\vee$ 

![[Pasted image 20241218183809.png]]

Un problema con questo approccio è il rimpiazzo di simboli di funzione, che potrebbe causare la costruzione di infiniti termini, per esempio $Father(Father(Father(...)))$, ma fortunatamente esiste il teorema di Herbrand che ci dice che se una proposizione è deducibile dalla KB, allora esiste una prova che usa un sottoinsieme finito della proposizionalizzazione.

---

Questa tecnica è completa, cioè ogni proposizione deducibile può essere provata, ma per le proposizioni non deducibili, la proposizionalizzazione potrebbe non fermarsi mai. Il che ci porta al problema della decidibilità (turing) dove esistono proposizioni indecidibili.

L'inferenza in logica di primo ordine è meno efficiente tramite la proposizionalizzazione, perchè la KB risultante potrebbe essere molto grande. Si potrebbe effettuare l'inferenza direttamente sulla logica di primo ordine.

Le stesse regole di inferenza usate per la logica proposizionale possono essere applicate alla logica di primo ordine.
