---
title: "Association Mining"
description: "Covers frequent itemset mining and association rule generation, including support, confidence, and interest metrics, along with efficient algorithms: A-Priori, PCY, Multi-Stage, Multi-Hash, and SON for distributed datasets."
type: lecture
---

Association mining is the problem of finding a mapping between many to many kinds of things

# Frequent itemsets
We want to find a set of items that appear together frequently in baskets. We have a defined *support* threshold which we use to determine when items are to be considered. The sets of items that appear in at least *s* baskets are called *frequent itemsets* 

- **Items** = {milk, coke, pepsi, beer, juice}
- **Support threshold** = 3 baskets

$B_1 = \{m, c, b\}$  
$B_2 = \{m, p, j\}$  
$B_3 = \{m, b\}$  
$B_4 = \{c, j\}$  
$B_5 = \{m, p, b\}$  
$B_6 = \{m, c, b, j\}$  
$B_7 = \{c, b, j\}$  
$B_8 = \{b, c\}$

- **Frequent itemsets**: {m}, {c}, {b}, {j}, {m,b}, {b,c}, {c,j}.

# Association rules
they are if-then rules about the contents of baskets
${i_1, i_2, ..., i_k} \rightarrow j$, this means "if a basket contains all of $i_1, ..., i_k$ then it is likely to contain $j$".
The **Confidence** of this association rule is the probability of $j$ given $I={i_1, ..., i_k}$, defined as:
$$
conf(I \rightarrow J) = \dfrac{support(I \cup j)}{support(I)}
$$
Not all high confidence rules are interesting. let's take an item that is very often bought, let's call this *FreqItem*, then $X \rightarrow FreqItem$ is not very useful because the confidence will be high regardless of what $X$ is

The **Interest** of an association rule $I \rightarrow j$ is the absolute difference between its confidence and the probability $P_r(j)$ that a basket contains $j$
$$
Interest(I \rightarrow j) = |conf(I \rightarrow j) - P_r(j)|
$$
We could call a rule interesting if they have high interest values (usually above 0.5)

$B_1 = \{m, c, b\}$  
$B_2 = \{m, p, j\}$  
$B_3 = \{m, b\}$  
$B_4 = \{c, j\}$  
$B_5 = \{m, p, b\}$  
$B_6 = \{m, c, b, j\}$  
$B_7 = \{c, b, j\}$  
$B_8 = \{b, c\}$

- **Association rule**: $\{m, b\} \to c$
  - *Confidence* = $2/4 = 0.5$
  - *Interest* = $\lvert 0.5 - 5/8 \rvert = 1/8 = 0{,}125$
    - Item $c$ appears in $5/8$ of the baskets
    - Rule is not very interesting!

## Finding association rules
We want to find all association rules with $support \geq s$ and $confidence \geq c$ 
If $\{i_1, i_2, ..., i_k\} \rightarrow j$ has high support and confidence, then both $\{i_1, i_2, ..., i_k\}$ and $\{i_1, i_2, ..., i_k, j\}$ will be "frequent"
$$
conf(I \rightarrow j) = \dfrac{support(I \cup j)}{support(I)}
$$

We find all frequent itemsets $I$, then for  every subset $A$ of $I$, generate the rule $A \rightarrow I \backslash A$.
Since $I$ is frequent, $A$ is also frequent

**(variant 1)**: Single pass to compute the rule confidence:
$$
confidence(A,B \rightarrow C,D) = support(A,B,C,D)
$$
**(variant 2)**: we know that if $A,B,C \rightarrow D$ is below confidence, then $A,B \rightarrow C,D$ is also below confidence. This means we can generate bigger rules from smaller ones

$B_1 = \{m, c, b\}$  
$B_2 = \{m, p, j\}$  
$B_3 = \{m, c, b, n\}$  
$B_4 = \{c, j\}$  
$B_5 = \{m, p, b\}$  
$B_6 = \{m, c, b, j\}$  
$B_7 = \{c, b, j\}$  
$B_8 = \{b, c\}$

- **Support threshold** $s = 3$, **confidence** $c = 0.75$
- **1) Frequent itemsets**:
  - {b,m} {b,c} {c,m} {c,j} {m,c,b}
- **2) Generate rules**:

| | | |
|---|---|---|
| $b \to m$: $c=4/6$ | $b \to c$: $c=5/6$ | $b,c \to m$: $c=3/5$ |
| $m \to b$: $c=4/5$ | … | $b,m \to c$: $c=3/4$ |
| | | $b \to c,m$: $c=3/6$ |

![[Pasted image 20231211113617.png]]Given $d$ items, there are a total of $2^d$ possible itemsets

We can reduce the number of rules by post processing them and output only:
- **Maximal Frequent Itemset**: A frequent item set X is maximal if the $SupportLevel > MinSupport$, and no superset of it is frequent. (we get the set of items which is the largest set that we can get without dropping below the $MinSupport$ threshold, as in, any element that we add to this set will make it drop below the $MinSupport$)
- **Closed item sets**: An itemset $X$ is closed if none of it's supersets have the exact same support as $X$. (adding any item to this item set will reduce it's support)

## Computation issues with finding frequent itemsets
To be able to compute the frequent itemsets we need to be able to read the whole items, this means having a way to read all the different items in the set. In large datasets this information is stored in disk, and the majority of time of the computation will be in disk I/O
We can think of items being part of baskets, where baskets are files in disk

The hardest problem is finding frequent *pairs* of items $\{i_1, i_2\}$, as it's the most likely. the probability of items to be frequent drops exponentially with the size of the set.

# Naive algorithm
A naive approach to find frequent pairs is to read the file once, counting in main memory the occurrences of each pair. From each "basket" of $n$ items, generate it's $n(n-1)/2$ pairs by using two nested loops. This approach fails if the $NumOfItems^2$ exceeds the main memory.
There are two approaches to this:
1) Count all pairs using a matrix, but this combinations between pairs (4 bytes, aka 1 number), this generates a triangular matrix, following the 2 loops
2) Keep a table of triples $[i,j,c]$ which means "the count of the pair items $\{i,j\}$ is c", but this is stored only if the $count > 0$ (12 bytes, 1 number and 2 Ids)

With the first approach, the total number of pairs is $\approx 2n^2$, the second approach is better only if less than 1/3rd of the possible pairs occur

# A-Priori Algorithm
Instead of doing a single pass, we use a two pass approach that uses the idea of *monotonicity*. Monotonicity applies because if a set of itemset $I$ appears at least $s$ times, so does every subset $J$ of $I$. And for pairs, if item $i$ does not appear in $s$ baskets, then no pair including $i$ can appear in $s$ baskets
As mentioned the algorithm works in two passes
1) Read baskets and count in main memory the occurrences of each item. Items that $appear \geq s$ times are *frequent items*
2) Read the baskets again and count in main memory only the pairs where both elements are considered *frequent* from pass 1
This approach uses as much memory as the square of frequent items plus a list of the frequent items

<svg viewBox="0 0 540 370" width="100%" style="max-width:540px;display:block;margin:1.5rem auto" role="img" aria-label="Main memory in the two passes of A-Priori: pass 1 holds the item counts; pass 2 holds the frequent items and the counts of pairs of frequent items (candidate pairs)" font-family="sans-serif">
<!-- memory columns -->
<rect x="40" y="10" width="200" height="312" fill="var(--palette-green)" fill-opacity="0.12" stroke="currentColor" stroke-width="1"/>
<rect x="336" y="10" width="192" height="312" fill="var(--palette-green)" fill-opacity="0.12" stroke="currentColor" stroke-width="1"/>
<!-- blocks -->
<rect x="48" y="18" width="184" height="67" fill="var(--palette-teal)" fill-opacity="0.3" stroke="currentColor" stroke-width="1"/>
<text x="140" y="57.5" text-anchor="middle" font-size="17" fill="currentColor">Item counts</text>
<rect x="344" y="18" width="176" height="44" fill="var(--palette-teal)" fill-opacity="0.3" stroke="currentColor" stroke-width="1"/>
<text x="432" y="46" text-anchor="middle" font-size="17" fill="currentColor">Frequent items</text>
<rect x="344" y="72" width="176" height="222" fill="var(--palette-blue)" fill-opacity="0.3" stroke="currentColor" stroke-width="1"/>
<text x="432" y="139.6" text-anchor="middle" font-size="17" fill="currentColor">Counts of</text>
<text x="432" y="164.3" text-anchor="middle" font-size="17" fill="currentColor">pairs of</text>
<text x="432" y="188.9" text-anchor="middle" font-size="17" fill="currentColor">frequent items</text>
<text x="432" y="213.6" text-anchor="middle" font-size="17" fill="currentColor">(candidate</text>
<text x="432" y="238.2" text-anchor="middle" font-size="17" fill="currentColor">pairs)</text>
<g stroke="var(--palette-green)" stroke-width="1.6">
<line x1="232" y1="18" x2="344" y2="18"/>
<line x1="232" y1="85" x2="344" y2="62"/>
</g>
<text transform="translate(26 166) rotate(-90)" text-anchor="middle" font-size="17" fill="var(--palette-green)">Main memory</text>
<g fill="currentColor" font-size="24" font-weight="bold" text-anchor="middle">
<text x="140" y="358">Pass 1</text>
<text x="432" y="358">Pass 2</text>
</g>
</svg>

When dealing with frequent triples or higher, let's say $k-tuples$ (a set of size $k$), we then define:
- $C_k$ as the candidate $k-tuples$ whose support might be $\geq s$ based off the $k-1$ pass.
- $L_k$ as the set of truly frequent $k-tuples$

<svg viewBox="0 0 720 236" width="100%" style="max-width:720px;display:block;margin:1.5rem auto" role="img" aria-label="A-Priori pipeline: C1 (all items) goes through a filter (count the items) giving L1; construct (all pairs of items from L1) gives C2; filter (count the pairs) gives L2; construct (to be explained) gives C3. The first part is pass 1, the second part pass 2" font-family="sans-serif">
<defs><marker id="i20231211153925-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0 0L10 5L0 10z" fill="currentColor"/></marker></defs>
<!-- filters and construct blocks -->
<polygon points="105.8,105.8 170.9,125.8 170.9,166.6 105.8,186.5" fill="var(--palette-orange)" fill-opacity="0.3" stroke="currentColor" stroke-width="1"/>
<polygon points="400.8,105.8 465.8,125.8 465.8,166.6 400.8,186.5" fill="var(--palette-orange)" fill-opacity="0.3" stroke="currentColor" stroke-width="1"/>
<rect x="234.2" y="121.4" width="95.4" height="47.7" fill="var(--palette-blue)" fill-opacity="0.2" stroke="currentColor" stroke-width="1"/>
<rect x="533.5" y="121.4" width="95.4" height="47.7" fill="var(--palette-blue)" fill-opacity="0.2" stroke="currentColor" stroke-width="1"/>
<g stroke="currentColor" stroke-width="1.2" marker-end="url(#i20231211153925-arrow)">
<!-- data flow -->
<line x1="79.8" y1="145.7" x2="104.1" y2="145.7"/>
<line x1="171.8" y1="145.7" x2="192.6" y2="145.7"/>
<line x1="216.9" y1="145.7" x2="232.5" y2="145.7"/>
<line x1="329.6" y1="145.7" x2="351.3" y2="145.7"/>
<line x1="381.7" y1="145.7" x2="399" y2="145.7"/>
<line x1="466.7" y1="145.7" x2="487.5" y2="145.7"/>
<line x1="513.5" y1="145.7" x2="531.8" y2="145.7"/>
<line x1="628.9" y1="145.7" x2="652.3" y2="145.7"/>
<line x1="682.7" y1="145.7" x2="707" y2="145.7"/>
<line x1="67.7" y1="79.8" x2="60.7" y2="127.5"/>
<line x1="154.4" y1="53.8" x2="138.8" y2="114.5"/>
<line x1="281.9" y1="71.1" x2="277.6" y2="118"/>
<line x1="427.7" y1="53.8" x2="416.4" y2="114.5"/>
<line x1="582.9" y1="67.7" x2="579.5" y2="118"/>
</g>
<g fill="currentColor" font-size="17" text-anchor="middle">
<text x="137.9" y="151.8">Filter</text>
<text x="281.9" y="151.8">Construct</text>
<text x="432.9" y="151.8">Filter</text>
<text x="581.2" y="151.8">Construct</text>
<text x="63.3" y="152.7">C₁</text>
<text x="206.5" y="152.7">L₁</text>
<text x="366.1" y="152.7">C₂</text>
<text x="500.5" y="152.7">L₂</text>
<text x="668" y="152.7">C₃</text>
</g>
<g fill="var(--palette-green)" font-size="17" text-anchor="middle">
<text x="69.4" y="41.6">All</text>
<text x="69.4" y="65.1">items</text>
<text x="166.6" y="24.3">Count</text>
<text x="166.6" y="46.8">the items</text>
<text x="281.9" y="17.3">All pairs</text>
<text x="281.9" y="39.9">of items</text>
<text x="281.9" y="62.5">from L₁</text>
<text x="431.1" y="24.3">Count</text>
<text x="431.1" y="46.8">the pairs</text>
<text x="597.7" y="32.1">To be</text>
<text x="597.7" y="54.7">explained</text>
</g>
<!-- pass braces -->
<g fill="none" stroke="var(--palette-orange)" stroke-width="2.5">
<path d="M45.1 183.9Q45.1 195.2 55.5 195.2H130.1Q140.5 195.2 140.5 204.7Q140.5 195.2 150.9 195.2H225.5Q236 195.2 236 183.9"/>
<path d="M334 183.9Q334 195.2 344.4 195.2H418.1Q428.5 195.2 428.5 204.7Q428.5 195.2 438.9 195.2H512.7Q523.1 195.2 523.1 183.9"/>
</g>
<g fill="currentColor" font-size="15" text-anchor="middle">
<text x="140.5" y="227.3">Pass-1</text><text x="428.5" y="227.3">Pass-2</text>
</g></svg>

# PCY (Park-Chen-Yu) Algorithm
We observe that in the first pass of the $A-Priori$ algorithm, most memory is idle.

The PCY algorithm uses the intuition that:

>instead of getting the counts of each item in the dataset, we counted the number of items that started with each letter of the alphabet.
>If the number of items that started with the letter _‘a’_ was less than our support threshold, we would know that none of the items that start with the letter _‘a’_ are frequent. For example, if _apples_ had been frequent, then the count of items starting with _‘a’_ would have been above our threshold.

The PCY algorithm uses the unused memory to store a hashtable with as many buckets as fit in the unused memory, and in this hashtable, it stores the count of the hash of every combination of items inside of the basket, and increments it by 1 if it already exists. Once finished with this first step, we know that all the hashed pairs in the hashtable which are below the support must not be frequent, else the items would have hashed to those buckets, so we know that any pair that hashes to a bucket with support lower than $s$ is surely not a frequent pair. [link to explaination](https://medium.com/weekly-data-science/the-pcy-algorithm-and-its-friends-ecba67216190) 

```text
FOR (each basket) :
    FOR (each item in the basket) :
        add 1 to item's count;
    FOR (each pair of items) :        // New in PCY
        hash the pair to a bucket;    // New in PCY
        add 1 to the count for that bucket;    // New in PCY
```

this means that we can eliminate all candidates of items that hash to buckets which are below the support.

In the second pass of the algorithm, we count only pairs that hash to frequent buckets. We could simplify this hashmap by changing it from storing buckets of integers, to storing a bucket of bits, with value 1 if the bucket is frequent, and value 0 if the bucket is not frequent

<svg viewBox="0 0 540 350" width="100%" style="max-width:540px;display:block;margin:1.5rem auto" role="img" aria-label="Main memory in the two passes of PCY: pass 1 holds the item counts and the hash table for pairs; pass 2 holds the frequent items, the bitmap and the counts of candidate pairs" font-family="sans-serif">
<!-- memory columns -->
<rect x="47" y="8" width="200" height="300" fill="var(--palette-green)" fill-opacity="0.12" stroke="currentColor" stroke-width="1"/>
<rect x="342" y="8" width="193" height="300" fill="var(--palette-green)" fill-opacity="0.12" stroke="currentColor" stroke-width="1"/>
<!-- blocks -->
<rect x="55" y="14" width="184" height="66" fill="var(--palette-teal)" fill-opacity="0.3" stroke="currentColor" stroke-width="1"/>
<text x="147" y="53" text-anchor="middle" font-size="17" fill="currentColor">Item counts</text>
<rect x="55" y="88" width="184" height="212" fill="var(--palette-orange)" fill-opacity="0.3" stroke="currentColor" stroke-width="1"/>
<text x="147" y="187.6" text-anchor="middle" font-size="17" fill="currentColor">Hash table</text>
<text x="147" y="212.3" text-anchor="middle" font-size="17" fill="currentColor">for pairs</text>
<rect x="349" y="14" width="179" height="51" fill="var(--palette-teal)" fill-opacity="0.3" stroke="currentColor" stroke-width="1"/>
<text x="438.5" y="45.5" text-anchor="middle" font-size="17" fill="currentColor">Frequent items</text>
<rect x="349" y="74" width="179" height="35" fill="var(--palette-orange)" fill-opacity="0.3" stroke="currentColor" stroke-width="1"/>
<text x="438.5" y="97.5" text-anchor="middle" font-size="17" fill="currentColor">Bitmap</text>
<rect x="349" y="117" width="179" height="176" fill="var(--palette-blue)" fill-opacity="0.3" stroke="currentColor" stroke-width="1"/>
<text x="438.5" y="186.3" text-anchor="middle" font-size="17" fill="currentColor">Counts of</text>
<text x="438.5" y="210.9" text-anchor="middle" font-size="17" fill="currentColor">candidate</text>
<text x="438.5" y="235.6" text-anchor="middle" font-size="17" fill="currentColor">pairs</text>
<g stroke="var(--palette-green)" stroke-width="1.6">
<line x1="239" y1="14" x2="349" y2="14"/>
<line x1="239" y1="80" x2="349" y2="65"/>
<line x1="239" y1="88" x2="349" y2="74"/>
<line x1="239" y1="300" x2="349" y2="109"/>
</g>
<text transform="translate(24 158) rotate(-90)" text-anchor="middle" font-size="17" fill="var(--palette-green)">Main memory</text>
<g fill="currentColor" font-size="24" font-weight="bold" text-anchor="middle">
<text x="147" y="342">Pass 1</text>
<text x="438" y="342">Pass 2</text>
</g>
</svg>

In general the condition for an element to be considered frequent, is that in a pair: 
1) both ${i, j}$ are frequent
2) the pair $\{i,j\}$ hashes to a frequent bucket 

# Multi stage algorithm 
This is a refinement of the PCY algorithm, in cases where memory is still a bottleneck, we can do 3 passes over the data. the first step is the same as the PCY algorithm, the second step, we rehash only the values that qualify for pass 2 of PCY (so that $i, j$ are frequent and the bucket $\{i,j\}$ is frequent)

<svg viewBox="0 0 660 500" width="100%" style="max-width:660px;display:block;margin:1.5rem auto" role="img" aria-label="Main memory in the three passes of Multistage: pass 1 holds item counts and the first hash table; pass 2 frequent items, bitmap 1 and the second hash table; pass 3 frequent items, bitmap 1, bitmap 2 and the counts of candidate pairs" font-family="sans-serif">
<!-- memory columns -->
<rect x="44" y="6" width="150" height="280" fill="var(--palette-green)" fill-opacity="0.12" stroke="currentColor" stroke-width="1"/>
<rect x="273" y="6" width="149" height="280" fill="var(--palette-green)" fill-opacity="0.12" stroke="currentColor" stroke-width="1"/>
<rect x="502" y="6" width="149" height="280" fill="var(--palette-green)" fill-opacity="0.12" stroke="currentColor" stroke-width="1"/>
<!-- blocks -->
<rect x="51" y="13" width="135" height="59" fill="var(--palette-teal)" fill-opacity="0.3" stroke="currentColor" stroke-width="1"/>
<text x="118.5" y="48.5" text-anchor="middle" font-size="17" fill="currentColor">Item counts</text>
<rect x="51" y="76" width="135" height="206" fill="var(--palette-orange)" fill-opacity="0.3" stroke="currentColor" stroke-width="1"/>
<text x="118.5" y="172.6" text-anchor="middle" font-size="17" fill="currentColor">First</text>
<text x="118.5" y="197.3" text-anchor="middle" font-size="17" fill="currentColor">hash table</text>
<rect x="280" y="13" width="134" height="45" fill="var(--palette-teal)" fill-opacity="0.3" stroke="currentColor" stroke-width="1"/>
<text x="347" y="41.5" text-anchor="middle" font-size="17" fill="currentColor">Freq. items</text>
<rect x="280" y="72" width="134" height="29" fill="var(--palette-orange)" fill-opacity="0.3" stroke="currentColor" stroke-width="1"/>
<text x="347" y="92.5" text-anchor="middle" font-size="17" fill="currentColor">Bitmap 1</text>
<rect x="280" y="109" width="134" height="170" fill="var(--palette-orange)" fill-opacity="0.3" stroke="currentColor" stroke-width="1"/>
<text x="347" y="187.6" text-anchor="middle" font-size="17" fill="currentColor">Second</text>
<text x="347" y="212.3" text-anchor="middle" font-size="17" fill="currentColor">hash table</text>
<rect x="509" y="13" width="134" height="45" fill="var(--palette-teal)" fill-opacity="0.3" stroke="currentColor" stroke-width="1"/>
<text x="576" y="41.5" text-anchor="middle" font-size="17" fill="currentColor">Freq. items</text>
<rect x="509" y="72" width="134" height="29" fill="var(--palette-orange)" fill-opacity="0.3" stroke="currentColor" stroke-width="1"/>
<text x="576" y="92.5" text-anchor="middle" font-size="17" fill="currentColor">Bitmap 1</text>
<rect x="509" y="124" width="134" height="29" fill="var(--palette-orange)" fill-opacity="0.3" stroke="currentColor" stroke-width="1"/>
<text x="576" y="144.4" text-anchor="middle" font-size="17" fill="currentColor">Bitmap 2</text>
<rect x="509" y="159" width="134" height="120" fill="var(--palette-blue)" fill-opacity="0.3" stroke="currentColor" stroke-width="1"/>
<text x="576" y="200.3" text-anchor="middle" font-size="17" fill="currentColor">Counts of</text>
<text x="576" y="224.9" text-anchor="middle" font-size="17" fill="currentColor">candidate</text>
<text x="576" y="249.6" text-anchor="middle" font-size="17" fill="currentColor">pairs</text>
<g stroke="var(--palette-green)" stroke-width="1.6">
<line x1="186" y1="13" x2="280" y2="13"/>
<line x1="186" y1="72" x2="280" y2="58"/>
<line x1="186" y1="76" x2="280" y2="72"/>
<line x1="186" y1="282" x2="280" y2="101"/>
<line x1="414" y1="109" x2="509" y2="124"/>
<line x1="414" y1="279" x2="509" y2="153"/>
</g>
<text transform="translate(21 142) rotate(-90)" text-anchor="middle" font-size="17" fill="var(--palette-green)">Main memory</text>
<g fill="currentColor" font-size="24" font-weight="bold" text-anchor="middle">
<text x="119" y="322">Pass 1</text>
<text x="348" y="327">Pass 2</text>
<text x="576" y="327">Pass 3</text>
</g>
<g fill="var(--palette-green)" font-size="17" text-anchor="middle">
<text x="119" y="393">Count items</text>
<text x="119" y="418">Hash pairs {i,j}</text>
<text x="348" y="360">Hash pairs {i,j}</text>
<text x="348" y="385">into Hash2 iff:</text>
<text x="348" y="410">i,j are frequent,</text>
<text x="348" y="435">{i,j} hashes to</text>
<text x="348" y="460">freq. bucket in B1</text>
<text x="576" y="360">Count pairs {i,j} iff:</text>
<text x="576" y="385">i,j are frequent,</text>
<text x="576" y="410">{i,j} hashes to</text>
<text x="576" y="435">freq. bucket in B1</text>
<text x="576" y="460">{i,j} hashes to</text>
<text x="576" y="485">freq. bucket in B2</text>
</g>
</svg>

And in this case, a pair is considered frequent if:
1) both $i, j$ are frequent items
2) Using the first hash function, the pair $\{i,j\}$ hashes to a frequent bucket
3) Using the second hash function, the pair $\{i,j\}$ hashes to a frequent bucket

It is important that the two hashing functions are independent from each other

# Multi hash
We can also use multiple hashing functions in multiple hashing tables in the first stage, the problem with this approach is that every time we increase the number of hashing steps, we lower the amount of buckets, increasing the average count of a pair being in a bucket

# SON algorithm
This is especially useful in distributed dataset scenario, and the dataset is impossible to be stored on a single  machine. 
1) Each machine gets a partition of the data that it can fit in memory
2) Each machine applies one of the frequent itemset mining algorithms independently to each partition. The support is the same between each machine
3) Combine all the frequent item sets from all partitions to generate a set of candidate global frequent itemsets 
4) Verify the global frequent itemsets in the entire dataset to determine the truly frequent itemsets
