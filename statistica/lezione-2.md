# Proprietà dei fattoriali e binomiali

1) $n! = n(n - 1)!$ 
2) $0! = 1$
3) $\binom{n}{k} = \binom{n}{n - k}$ (simmetria)
4) $\binom{n}{k} = \binom{n - 1}{k} + \binom{n - 1}{k - 1}$

# Probabilità di eventi equiprobabili

Se gli eventi di $\Omega$ sono tutti equiprobabili, e $|\Omega| \lt \infty$, e quindi che $\forall i \ P(e_i) = \frac{1}{|\Omega|}$.

Allora per ogni $A \subseteq \Omega$ si ha che $P(A) = \frac{|A|}{|\Omega|}$.

## Esempio 
da un urna con 6 palline numerate voglio calcolare la probabilità di estrarre le palline 1 e 2, senza reinserirle, e senza considerare l'ordine di estrazione.

Poichè tutte le coppie sono equiprobabili, c'è un solo modo per ottenere le palline 1 e 2, e ci sono $\binom{6}{2}$ coppie, allora $P(\{1, 2\}) = \frac{1}{\binom{6}{2}} = \frac{1}{15}$.

## Esempio 
Quante sono le targhe con 7 simboli dove ci sono 2 lettere (26 totali) e 5 numeri (10 totali) nel caso in cui io possa ripetere i simboli?

Nel primo caso ho disposizioni con ripetizione, allora $26*26*10*10*10*10*10 = 26^2 * 10^5$.

Nel secondo caso, senza ripetizione: $\frac{26!}{(26 -2)!} \cdot \frac{10!}{(10 - 5)!} = 26 \cdot 25 \cdot 10 \cdot 9 \cdot 8 \cdot 7 \cdot 6$.

## Esempio 
Quale è la probabilità di estrarre la coppia 2 di fiori e 3 di quadri in un mazzo da poker senza reinserire le carte nel mazzo?

Dato che non stiamo reinserendo le carte, consideriamo le disposizioni senza ripetizione, cioè che $P = \frac{(52-2)!}{52!}$, lo possiamo vedere anche come "quante coppie di combinazioni di coppie ci sono?" che sono $\binom{52}{2}$. e dato che la coppia che cerchiamo è una, abbiamo che laa probabilità è $P = \frac{1}{\binom{52}{2}}$.

## Esempio
Quale è la probabilità di pescare da un urna contenente 7 palline di cui 4 nere e 3 bianche, 1 pallina nera e una bianca, indifferentemente dall'ordine e senza reinserire le palline?

Il numero totale di eventi è $|\Omega| = \binom{7}{2}$, mentre il numero di eventi favorevoli è $|A| = \binom{4}{1} \cdot \binom{3}{1}$, allora $P(A) = \frac{\binom{4}{1} \cdot \binom{3}{1}}{\binom{7}{2}}= \frac{4}{7}$. 

## Esempio

Quale è la probabilità di pescare da un urna contenente 7 palline di cui 4 nere e 3 bianche, senza reinserimento, 3 palline in totale, di cui una sola è bianca?

Allora abbiamo che ci sono $\binom{3}{1}$ per scegliere le palline bianche (solo una) e $\binom{4}{2}$ per scegliere le palline nere (ne dobbiamo scegliere 2), mentre il numero totale di eventi è $|\Omega| = \binom{7}{3}$, allora $P(A) = \frac{\binom{3}{1} \cdot \binom{4}{2}}{\binom{7}{3}}= \frac{18}{35}$.

E se invece volessimo calcolare la probabilità di pescare 3 palline, di cui almeno una è bianca?

Abbiamo 3 casi: 
- A = BBB 
- B = BBN 
- C = BNN

Allora la nostra probabilità è:
$$
P(A \cup B \cup C) = P(A) + P(B) + P(C)
$$
oppure possiamo vedere il complemento, cioè l'unico caso che non è presente fra di questi, cioè ch tutte le palline siano nere (NNN)

## Esempio

Consideriamo n antenne, m delle quali sono difettose, in quanti modi posso allinearle in modo che non ci siano 2 antenne difettose consecutive?

Provo a risolverlo posizionando prima le antenne buone che sono $n - m$, e poi inserisco fra le antenne buone, quelle difettose, cosi garantisco che non ce ne siano due difettose consecutive, questi spazi intermedi sono $n - m + 1$ 

Quindi gli allineamenti possibili sono $\binom{n-m+1}{m}$, cioè numero di posti totali e numero di posti da occupare.

Prendendo come esempio $n = 5$ e $m <= 3$ (m <=3) perchè non posso metterne più di 3 

Allora abbiamo che $\binom{5-2+1}{2} = \binom{4}{2} = \frac{4!}{2! \cdot 2!} = 3 \cdot 2 \cdot 1 = 6$.

## Esempio

Una gelateria offre 9 gusti di gelato e ogni cono può avere **massimo** 3 palline di gelato. Quante sono le combinazioni di gusti tutti diversi?

$$
\text{Numero combinazioni} = \binom{9}{1} + \binom{9}{2} + \binom{9}{3} = 
$$

# Combinazioni con ripetizioni
Non dispongo gli elementi in un ordine specifico, cioè le sequnze di tipo $AB = BA$. Posso scegliere un elemento anche più di una volta, esempio $AA$. Se ho $n$ elementi e voglio formare sequenze di $k$ elementi, allora il numero di sequenze è dato da $\binom{n + k - 1}{k}$.

Per esempio:
In una gelateria che offre 9 gusti, quanti coni con 3 palline posso formare incluso il caso di gusti ripetuti?
$\binom{9 + 3 - 1}{3} = \binom{11}{3} = \frac{11!}{3! \cdot 8!} = \frac{11 \cdot 10 \cdot 9}{6} = 165$.

Però bisogna fare attenzione dato che se usiamo questo metodo, gli eventi non sono più equiprobabili, dato che c'è un solo modo per ottenere $AAA$, ma ci sono 6 modi per ottenere $ABC$ (dato che $ABC = ACB = BAC = BCA = CAB = CBA$).