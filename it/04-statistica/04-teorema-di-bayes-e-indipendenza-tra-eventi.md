---
title: Teorema di Bayes e indipendenza tra eventi
description: "Teorema di Bayes con esempi applicativi (test medico, scelta di corsi), definizione di indipendenza tra eventi multipli e regola del prodotto delle probabilità."
type: lecture
---

Ho 3 carte: 

- b/b che ha entrambi i lati bianchi
- r/r che ha entrambi i lati rossi
- b/r che ha un lato bianco e uno rosso

Allora pesco una carta a caso e guardo uno dei lati che è bianco. Qual è la probabilità che anche l'altro lato sia bianco?

Cioè:

- $\{b/b\}$ evento in cui estraggo una carta con due lati bianchi
- $\{b\}$ evento in cui estraggo una carta con almeno un lato bianco.

Allora voglio calcolare $P(b/b|b)$.

Notiamo che è ovvio sapere che $P(b | b/b) = 1$, perché se estraggo la carta b/b allora sicuramente vedo un lato bianco. Allora:

$$
\begin{aligned}
P(b/b|b) &= \frac{P(b/b \cap b)}{P(b)} \\
&= \frac{P(b/b)\cap b}{P(b)} \cdot \frac{P(b/b)}{P(b/b)} \\ 
&= \frac{P(b/b\cap b)}{P(b/b)} \cdot \frac{P(b/b)}{P(b)} \\
&= P(b|b/b) \cdot \frac{1/3}{1/2} \\
&= 1 \cdot \frac{2}{3} = \frac{2}{3}
\end{aligned}
$$

Ora modifichiamo il problema:
Se invece di prendere la carta da un mazzo di 3 carate, le mettessi tutte su un tavolo con un lato visibile e ne avessi scelta una di queste con il lato bianco visibile, qual è la probabilità che anche l'altro lato sia bianco?

In questo caso, avendo tutte le carte sul tavolo, ho due casi possibili per le facciate correntemente visibili:

1. R R B
2. R B B

Mi possono accadere entrambe con probabilità: $P(1) = P(2) = 1/2$.

La domanda che voglio rispondere è la stessa: $P(b/b|b)$. Applichiamo la probabilità totale:

$$
\begin{aligned}
P(b/b|b) &= P(b/b|b\cap1)P(1|b) + P(b/b|b\cap2)P(2|b) \\
&= 1 \cdot \frac{1}{2} + \frac{1}{2} \cdot \frac{1}{2} = \frac{3}{4}
\end{aligned}
$$

Nel primo caso c'è solo una carta bianca visibile e le altre due rosse quindi per forza deve essere bianca da entrambi i lati
Nel secondo caso, ci sono due carte bianche quindi l'altra faccia potrebbe essere in un caso rossa e l'altro bianca, quindi la probabilità è 1/2.

# Teorema di Bayes

Se A e B sono eventi, con $P(A) > 0$ e $P(B) > 0$, allora:

$$
P(A|B) = \frac{P(B|A)P(A)}{P(B)}
$$

### Esempio

Immagina di sottoporti a un test medico per una malattia rara che colpisce solo 1 persona su 1000 ($P(Malattia) = 0.001$). 

Sappiamo che il test è molto sensibile: se hai la malattia, risulta positivo il 99% delle volte ($P(Positivo|Malattia) = 0.99$).
Tuttavia, il test produce anche dei falsi positivi: se sei completamente sano, risulta positivo in circa il 5% dei casi ($P(Positivo|Sano) = 0.05$).

Fai il test e **risulta positivo**. Qual è la probabilità che tu sia *effettivamente* malato? 
In altre parole, vogliamo calcolare $P(Malattia|Positivo)$.

L'intuito potrebbe ingannarci e farci credere che, dato il 99% di efficacia del test sui malati, siamo quasi certamente infetti. Il teorema di Bayes ci impone però di considerare la **probabilità a priori** (il fatto che la malattia sia rarissima).

Applicando la formula:
$$
P(Malattia|Positivo) = \frac{P(Positivo|Malattia) \cdot P(Malattia)}{P(Positivo)}
$$

Calcoliamo il denominatore $P(Positivo)$, ovvero la probabilità totale che un test risulti positivo (sia per i malati che per i sani):
$$
P(Positivo) = (0.99 \cdot 0.001) + (0.05 \cdot 0.999) \approx 0.00099 + 0.04995 = 0.05094
$$

Quindi:
$$
P(Malattia|Positivo) = \frac{0.00099}{0.05094} \approx 0.0194
$$

Sorprendentemente, pur avendo un test positivo in mano, hai **meno del 2%** di probabilità di essere realmente malato. Questo perché la malattia è talmente rara che la stragrande maggioranza dei test positivi sono, in realtà, falsi positivi provenienti da persone sane. Bayes ci insegna ad aggiornare le nostre convinzioni tenendo conto di quanto un evento è comune o raro di partenza.

# Esercizio

Una moneta viene lanciata 2 volte, quale è la probabilità che esca testa in entrambi i lanci, sapendo che:

1) il primo lancio è testa $P(TT|Tx)$
2) almeno un lancio è testa $P(TT|Tx \cup xT)$

Dove il nostro $\Omega$ è formato da 4 eventi equiprobabili:
- $A_1 = \{TT\}$
- $A_2 = \{TC\}$    
- $A_3 = \{CT\}$
- $A_4 = \{CC\}$

la x intende che non sappiamo se è testa o croce, quindi:

- $Tx = A_1 \cup A_2$: il primo lancio è testa, secondo testa o croce
- $xT = A_3 \cup A_1$: il secondo lancio è testa, primo testa o croce 

sostituendo al problema iniziale:

1) $P(TT|Tx) = P(A_1|A_1 \cup A_2)$
2) $P(TT|Tx \cup xT) = P(A_1|A_1 \cup A_2 \cup A_3) = P(A_1 | A_4^c)$

Nel primo caso applichiamo bayes:

$$
P(A_1|A_1 \cup A_2) = P(A_1 \cup A_2 | A_1) \cdot \frac{P(A_1)}{P(A_1 \cup A_2)} = 1 \cdot \frac{1/4}{1/2} = 1/2
$$

Nel secondo caso:

$$
P(A_1 | A_4^c) = \frac{P(A_1 \cap A_4^c)}{P(A_4^c)} = \frac{P(A_1)}{P(A_1) + P(A_2) + P(A_3)} = \frac{1/4}{3/4} = 1/3
$$

# Osservazioni

- Dati $A$ e $B$ eventi indipendenti, allora $P(A\cap B) = P(A) \cdot P(B)$
- Dati $A$ e $B$ eventi indipendenti, allora $P(A|B) = P(A)$. Dato che sono indipendenti, sapere che $B$ è accaduto non ci fornisce alcuna informazione su $A$, quindi la probabilità di $A$ rimane invariata.
- Se $A$ e $B$ sono due possibili esiti nello stesso spazio di probabilità, ed entrambi hanno probabilità non nulla, allora se $P(A\cap B) = 0$, allora $A$ e $B$ **NON** sono indipendenti. Infatti se $P(A\cap B) = 0$, e fossero indipendenti, allora $P(A\cap B) = P(A) \cdot P(B)$, ma questo è impossibile se entrambi hanno probabilità non nulla. Quindi, se due eventi non possono verificarsi contemporaneamente (cioè sono mutuamente esclusivi), allora non possono essere indipendenti. Se uno dei due ha probabilità nulla, allora sono indipendenti.

# Esercizio

Data una moneta, calcolare:

1) Se si eseguono 5 lanci, quale è lo spazio degli eventi? Quale è la probabilità di ottenere 5 volte testa?
2) Quale è la probabilità che al quinto lancio esca testa, sapendo che nei primi 4 lanci è uscita solo testa?
3) Quale è la probabilità che al quinto lancio esca testa, sapendo che nei primi 4 lanci è uscita solo croce?


**1:**
Lo spazio di un lancio è $\Omega = \{T, C\}$, quindi per 5 lanci lo spazio è $\Omega \times \Omega \times \Omega \times \Omega \times \Omega$, ovvero l'insieme di tutte le possibili combinazioni di 5 lanci, che sono $2^5 = 32$. La probabilità di ottenere 5 volte testa è $P(T_1 \times T_2 \times T_3 \times T_4 \times T_5) = P(T_1 \cap T_2 \cap T_3 \cap T_4 \cap T_5)$. Dato che i lanci sono indipendenti, questa probabilità è $P(T_1) \cdot P(T_2) \cdot P(T_3) \cdot P(T_4) \cdot P(T_5) = (1/2)^5 = 1/32$.

**2:**
La probabilità dell'evento è data da 
$$
\begin{aligned}
P(T_5|T_1 \cap T_2 \cap T_3 \cap T_4) &= \frac{P(T_5 \cap T_1 \cap T_2 \cap T_3 \cap T_4)}{P(X \cap T_1 \cap T_2 \cap T_3 \cap T_4)} = \\
&= \frac{P(T_5 \cap T_1 \cap T_2 \cap T_3 \cap T_4)}{P(T_5 \cap T_1 \cap T_2 \cap T_3 \cap T_4) + P(C \cap T_1 \cap T_2 \cap T_3 \cap T_4)} = \\
&= \frac{(1/2)^5}{(1/2)^5 + (1/2)^5} = \frac{1/32}{1/16} = 1/2
\end{aligned}
$$ 

**3:**
Poiché gli eventi (i lanci) sono indipendenti, sapere che nei primi 4 lanci è uscita croce non altera la probabilità del quinto lancio. Analogo al caso precedente.
$$
\begin{aligned}
P(T_5|C_1 \cap C_2 \cap C_3 \cap C_4) &= \frac{P(T_5 \cap C_1 \cap C_2 \cap C_3 \cap C_4)}{P(X \cap C_1 \cap C_2 \cap C_3 \cap C_4)} = \\
&= \frac{P(T_5 \cap C_1 \cap C_2 \cap C_3 \cap C_4)}{P(T_5 \cap C_1 \cap C_2 \cap C_3 \cap C_4) + P(C \cap C_1 \cap C_2 \cap C_3 \cap C_4)} = \\
&= \frac{(1/2)^5}{(1/2)^5 + (1/2)^5} = \frac{1/32}{1/16} = 1/2
\end{aligned}
$$


# Osservazione 1

3 Eventi $A$, $B$ e $C$ sono indipendenti se e solo se:

$$
P(A\cap B \cap C) = P(A) \cdot P(B) \cdot P(C)
$$

# Osservazione 2

Date delle coppie, se ogni coppia di evento $A$ e $B$ è indipendente, non è detto che anche la tripla $A$, $B$ e $C$ (o qualsiasi n-upla) sia indipendente.

Per esempio:

- $\Omega = \{1, 2, 3, 4\}$ equiprobabili 
- $P(1) = P(2) = P(3) = P(4) = 1/4$
- Gli eventi:
    - $A = \{1 \cup 2\}$
    - $B = \{1 \cup 3\}$
    - $C = \{1 \cup 4\}$

**Sono indipendenti a coppie?**
Per dirlo dobbiamo verificare che per ogni coppia $A_i, A_j$ (con $i \neq j$) valga $P(A_i \cap A_j) = P(A_i) \cdot P(A_j)$.

Calcoliamo le probabilità dei singoli eventi:
- $P(A) = 2/4 = 1/2$
- $P(B) = 2/4 = 1/2$
- $P(C) = 2/4 = 1/2$

Calcoliamo le probabilità delle intersezioni a due a due:
- $A \cap B = \{1\} \implies P(A \cap B) = 1/4$ e $P(A)P(B) = (1/2)(1/2) = 1/4$. Quindi $A$ e $B$ sono indipendenti.
- $A \cap C = \{1\} \implies P(A \cap C) = 1/4$ e $P(A)P(C) = (1/2)(1/2) = 1/4$. Quindi $A$ e $C$ sono indipendenti.
- $B \cap C = \{1\} \implies P(B \cap C) = 1/4$ e $P(B)P(C) = (1/2)(1/2) = 1/4$. Quindi $B$ e $C$ sono indipendenti.

Quindi sì, **sono indipendenti a coppie**.

**Sono indipendenti a triple?**
Per essere indipendenti a triple (o globalmente), deve valere anche la condizione:
$$P(A \cap B \cap C) = P(A) \cdot P(B) \cdot P(C)$$

Calcoliamo l'intersezione a tre:
$A \cap B \cap C = \{1\} \implies P(A \cap B \cap C) = 1/4$

Calcoliamo il prodotto delle tre probabilità:
$P(A) \cdot P(B) \cdot P(C) = (1/2) \cdot (1/2) \cdot (1/2) = 1/8$

Poiché $1/4 \neq 1/8$, concludiamo che **NON sono indipendenti a triple**. Questo esempio dimostra che l'indipendenza a coppie non implica l'indipendenza globale.

# Esercizio

Uno studente sta svolgendo un esame da consegnare entro un ora. 

La probabilità che lo studente consegni e termini l'esame entro $x$ ore è di $x/2$ per $0 \leq x \leq 1$.

Sapendo che lo studente sta ancora lavorando dopo $3/4$ di ora, qual è la probabilità che userà l'inter ora?

- $E_x$ è l'evento "lo studente consegna entro $x$ ore"
- $F$ è l'evento "lo studente impiega tutta l'ora"
- $P(F|E_{3/4}^c)$ è la domanda del problema.

Allora:

$$
\begin{aligned}
P(F|E_{3/4}^c) &= \frac{P(F \cap E_{3/4}^c)}{P(E_{3/4}^c)} \\
&= \frac{P(F)}{P(E_{3/4}^c)}    
\end{aligned}
$$

Abbiamo sostituito $P(F \cap E_{3/4}^c)$ con $P(F)$ perché se lo studente impiega tutta l'ora, allora sicuramente non consegna entro $3/4$ di ora. Allora possiamo applicare il complemento:

$$
\begin{aligned}
\frac{P(F)}{P(E_{3/4}^c)} &= \frac{P(F)}{1 - P(E_{3/4})} 
\end{aligned}
$$

Allora calcoliamo le probabilità dei nostri eventi:

- $P(F) = \frac{x}{2}$ che per $x = 1$ è $P(F) = 1/2$
- $P(E_{3/4}) = \frac{\frac{3}{4}}{2} = \frac{3}{8}$

Mettendo tutto insieme otteniamo:
$$
\begin{aligned} 
P(F|E_{3/4}^c) &= \frac{1/2}{1 - 3/8} = \frac{1/2}{5/8} = \frac{4}{5}
\end{aligned}
$$

# Esercizio

Susanna è indecisa se frequentare il corso di francese o quello di chimica. Se susanna basa la sua decisione sull'esito di una moneta non truccata, e se ha la probabilità di $\frac{1}{2}$ di prendere più di 27 se frequenta francese e probabilità di $\frac{2}{3}$ di prendere più di 27 se frequenta chimica, con quale probabilità prenderà più di 27 all'esame di chimica? Con quale probabilità prenderà più di 27?

- $E_f$ è l'evento "Susanna frequenta francese"
- $E_c$ è l'evento "Susanna frequenta chimica"
- $A$ è l'evento "Susanna prende più di 27"

Il problema chiede 2 cose:
- $P(E_c \cap A)$: la probabilità che Susanna prenda più di 27 all'esame di chimica, ovvero la probabilità che frequenti chimica e prenda più di 27
- $P(A)$: la probabilità che Susanna prenda più di 27, indipendentemente dal corso che frequenta

Allora:
- $P(E_f) = P(E_c) = 1/2$ perché Susanna decide con una moneta non truccata
- $P(A|E_c) = 2/3$ perché se frequenta chimica ha questa probabilità di prendere più di 27
- $P(A|E_f) = 1/2$ perché se frequenta francese ha questa probabilità di prendere più di 27
$P(E_c \cap A) = P(A|E_c) \cdot P(E_c) = (2/3) \cdot (1/2) = 1/3$
- $E_c \cup E_f = \Omega$ perché Susanna deve scegliere uno dei due corsi, quindi possiamo applicare la probabilità totale: $P(A) = P(A|E_c) \cdot P(E_c) + P(A|E_f) \cdot P(E_f) = (2/3) \cdot (1/2) + (1/2) \cdot (1/2) = 7/12$.

# Regola del prodotto
Se $A$ e $B$ sono eventi, allora:
$$
P(A \cap B) = P(A|B) \cdot P(B)
$$

Ma possiamo generalizzarlo a n eventi:
$$
P(A_1 \cap A_2 \cap ... \cap A_n) = P(A_1) \cdot P(A_2|A_1) \cdot P(A_3|A_1 \cap A_2) \cdot ... \cdot P(A_n|A_1 \cap A_2 \cap ... \cap A_{n-1})
$$

# Esercizio

In un esame a risposta multipla uno studente può conoscere la risposta o tentare a caso. Se $p$ è la probabilità che lo studente conosca la risposta, e $m$ il numero di possibili risposte, sapendo che lo studente ha risposto correttamente a una domanda, qual è la probabilità che conoscesse la risposta?

- $p$ probabilità che lo studente conosca la risposta
- $1-p$ probabilità che lo studente non conosca la risposta e quindi tenti a caso
- $m$ numero di possibili risposte
- $c$ è l'evento "lo studente risponde correttamente"
- $k$ è l'evento "lo studente conosce la risposta"

Allora dobbiamo calcolare $P(k|c)$, ovvero la probabilità che lo studente conoscesse la risposta dato che ha risposto correttamente.

Applichiamo Bayes:
$$
\begin{aligned}
P(k|c) &= \frac{P(c|k) \cdot P(k)}{P(c)} \\
&= \frac{1 \cdot p}{P(c)}\\
\end{aligned}
$$

Dobbiamo calcolare $P(c)$, ovvero la probabilità che lo studente risponda correttamente. Questa può accadere in due modi:
1. Lo studente conosce la risposta e risponde correttamente (con probabilità $p$)
2. Lo studente non conosce la risposta e tenta a caso

Allora usiamo la probabilità totale per calcolare $P(c)$:
$$
\begin{aligned}
P(c) &= P(c|k) \cdot P(k) + P(c|k^c) \cdot P(k^c) \\
&= 1 \cdot p + \frac{1}{m} \cdot (1-p) \\
&= p + \frac{1-p}{m} \\
&= \frac{pm + 1 - p}{m} \\
&= \frac{1 + p(m-1)}{m}
\end{aligned}
$$

