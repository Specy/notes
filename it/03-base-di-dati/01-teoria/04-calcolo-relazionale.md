---
title: "Calcolo Relazionale"
description: "Rappresentazione alternativa all'algebra relazionale tramite calcolo su domini e calcolo su ennuple con dichiarazioni di range; esempi di query e il concetto di chiusura transitiva."
type: lecture
---

Possiamo rappresentare l'algebra relazionale usando il calcolo relazionale, esso ha due varianti 
- [[#Calcolo relazionale su domini]]
- [[#Calcolo su ennuple con dichiarazioni di range]]

Gli esempi in futuro seguiranno la notazione

<div style='font-size: 1.4rem; margin-left: 1rem'>
Impiegati(<u>Matricola</u>,Nome, Età, Stipendio)  
<br>
Supervisione(Capo, <u>Impiegato</u>)
</div>

# Calcolo relazionale su domini
Le espressioni hanno la forma:
$$
\huge{\{A_{1}: x_{1},..., A_{k}: x_{k} \mid f \ \}}
$$
dove
- $f$ è una formula formata da connettivi booleani e quantificatori.
-  $A_{1}: x_{1},..., A_{k}: x_{k}$ sono chiamati "target list" dove gli $A_{1},..., A_{k}$ sono gli attributi distinti, e $x_{1},..., x_{k}$ sono le variabili distinte.
Cioè il risultato è una relazione sulle $A_{1},..., A_{k}$  che contiene valori in variabili $x_{1},..., x_{k}$ che rendono vera la funzione $f$. 
La funzione $f$ predicati del tipo $\forall, \exists, \neg, =,\gt, \lt, etc...$ 

# Esempio 1

seleziona Matricola, Nome, Età  di impiegato con stipendio > 40
$$
\begin{aligned}
\huge{\{Matricola: m, Nome: n, Età:e \mid } \\
\huge{Impiegati(Matricola: m, Nome: n, Età:e, Stipendio:s)} \\
\huge{\wedge s > 40} \ \}
\end{aligned}
$$
Nella funzione, il "$Impiegati(Matricola: m, Nome: n, Età:e, Stipendio:s)$" vuol dire che esiste un Impiegato con matricola, nome, età e stipendio.

# Esempio 2

seleziona le matricole dei capi degli impiegati che guadagnano più di 40, in algebra sarebbe:
   $$
   \large{\pi_{capo}(Supervisione \ JOIN_{Impiegato = Matricola}(\sigma_{stipendio> 40}(Impiegati)))}
$$
che si traduce in calcolo relazionale come:
$$
\begin{aligned}
\large{\{Capo: c \mid } \\
\large{Supervisione(Capo: c, Impiegato: im)} \\
\large{\wedge Impiegato(Matricola:im, Nome: n, Età: e, Stipendio:s )} \\
\large{\wedge s > 40} \}
\end{aligned}
$$

# Esempio 3

trova la matricola e nome dei capi i cui impiegati guadagnano tutti più di 40, in algebra:
   $$
   \begin{aligned}
   \large{\pi_{matricola, nome}( \\
   Impiegati \ JOIN_{matricola = Capo}(\pi_{capo}(Supervisione) - } \\
   \large{
       \pi_{capo}(Supervisione \ JOIN_{impiegato = matricola}(\sigma_{stipendio \le 40}(Impiegati))))
   }
   \end{aligned}
$$


Cioè seleziono tutti i supervisori, e ne tolgo tutti i supervisori che hanno impiegati con $stipendio \le 40$

![[Pasted image 20230708132425.png]]

# Calcolo su ennuple con dichiarazioni di range
Le espressioni hanno la forma 
$$
\huge{ \{ TargetList \mid RangeList \mid Formula\}}
$$
dove:
- TargetList sono i valori da selezionare e sono rappresentati dal tipo $Y:x.Z$ o $x.Z$ o anche $x.*$ 
- RangeList sono le variabili libere dalla formula, ognuna con il relativo campo di variabilità, in pratica dichiara le variabili utilizzabili nel target list e formula
- Formula è formata da atomi di confronto che appunto confrontano variabili tra di loro, o con valori

 [[#Esempio 2]] che seleziona le matricole dei capi degli impiegati che guadagnano più di 40, in algebra sarebbe:
 $$
\begin{aligned}
\huge{
	 \{ s.Capo \mid i(Impiegati), s(Supervisione) \mid } \\
\huge{
     i.Matricola = s.Impiegato \wedge i.Stipendio \gt 40 \}
}
\end{aligned}
$$
[[#Esempio 3]]
$$
\begin{aligned}
	\large{ \{ s.Matricola, s.Nome \mid} \\
	\large{i(Impiegati), s(Supervisione)} \\
	\large{i.Matricola = s.Impiegato \ \wedge} \\
	\large{\neg(\exists i'(Impiegato) \wedge 
	(\exists s'(Supervisione) \wedge} \\
	(s.Capo = s'.Capo \wedge s'.Impiegato = i'.Matricola \wedge i'.Stipendio \le 40)))\}
\end{aligned}
$$

# Chiusura transitiva

Può essere vista come una selezione ricorsiva, per esempio, dato un impiegato, trovare tutti i suoi superiori, dovremmo ricorsivamente iterare tutti i superiori dei superiori finchè arriviamo ad uno che non ne ha altri.
Questo non è possibile in algebra / calcolo relazionale dato che dovremmo esprimere potenzialmente infinite join 
