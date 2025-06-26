Many data minding problems, such as *clustering, outlier detection* and *classification* require the computation of *similarity*
**DEFINITION**
Given two objects $O_1$ and $O_2$, we want to compute the similarity $Sim(O_1, O_2)$ or distance $Dist(O_1, O_2)$, between the two objects. 

In similarity functions, a high value means greater similarity, while in distance functions, smaller values imply greater similarity.
Depending on the domain, it makes more sense to talk about either distance or similarity

Distance functions are fundamental to the effective design of data mining algorithms, as a poor distance function could reduce the quality of the result drastically

# Quantitative Data ($L_p-norm$)
The most common distance function is the $L_p-norm$, between two data points:
$\overline{X} = (x_1,...,x_d)$ and  $\overline{Y} = (y_1,...,y_d)$ is defined as:
$$
Dist(\overline{X}, \overline{Y}) = (\sum_{i = 1}^d |x_i - y_i |^p)^{1/p}
$$
![[Pasted image 20231208164840.png]]
![[Pasted image 20231208164918.png]]
The euclidian distance is the "straight line" between two data points, it has a nice propriety of being rotation invariant, because the distance does not change if we rotate the axis system. This also means that the techniques like PCA, SVD and wavelet transformation for time series can be used without affecting the distance. In high dimensionality data, this function might not work very well because of the varying impact of the data sparsity, distribution, noise and feature relevance

# Minkowski Distance
In some cases we know which features are more important than others, it is the same as the $L_p-distance$ except we introduce a new coefficient $a_i$ that is associated with the $i^{th}$ feature, this coefficient is used to weight the feature
$$
Dist(\overline{X}, \overline{Y}) = (\sum_{i = 1}^d a_i \cdot |x_i - y_i |^p)^{1/p}
$$

# Impact of high dimensionality 
Distance based data mining applications lose their effectiveness as the dimensionality of the data increases, this phenomenon is referred to as the *curse of dimensionality*.

Consider an unit cube of dimensionality $d$ that is fully located in the non negative quadrant, with one of the corners in the origin $\overline{O}$. 
What is the manhattan distance of the corner of this cube to a randomly chosen point $\overline{X}$ inside the cube? in this case, as we are in the non negative quadrant and one point is in the origin, the manhattan distance will simply sum up all the coordinates of the point in the different dimensions.
Each coordinate is uniformly distributed in 
$$
[0, 1]:\mu=\dfrac{A+B}{2}, \sigma=\sqrt{\dfrac{(B-A)^2}{12}}
$$
Therefore, if $Y_i$ represents the uniformly distributed random variable in $[0,1]$, the manhattan distance is as: 
$$
Dist(\overline{O},\overline{Y}) = \sum_{i = 1}^d |y_i - 0 |
$$
For large values of $d$ it can be shown that by the law of large numbers, the vast majority of randomly chosen points inside the cube, will lie in the range:

$$
[Dist_{min}, Dist_{max}] = [\mu - 3\sigma, \mu + 3\sigma]
$$
so the points in the cube will lie within a distance range from the origin of:
$$
Dist_{max} - Dist_{min} = 6\sigma = 6\sqrt{\dfrac{d}{12}}=\sqrt{3d}
$$
The *ratio* of the *variation* in the distance is referred to as $Constrast(D)$ and is given by:
$$
Constrast(D) = \dfrac{Dist_{max} - Dist_{min}}{\mu} = \dfrac{\sqrt{3d}}{d/2} = \dfrac{2 \sqrt{3d}}{d} = \sqrt{\dfrac{4\cdot3d}{d^2}} = \sqrt{\dfrac{12}{d}}
$$
This ratio can be interpreted as the distance contrast between the different data points, in terms of how different the minimum and maximum distances from the origin might be considered. The contrast reduces with $\sqrt{d}$ which means there is virtually no contrast with increasing dimensionality. A low contrast value means that the mining algorithm will score the distances between all pairs of data approximately the same 
![[Pasted image 20231208171620.png]]
Causing the distance to become less meaningful

# Match based similarity computation
High dimensionality data sets are often likely to contain diverse features, many of which are irrelevant. The subset selection during the preprocessing does not solve the problem, as the relevance of features is locally determined by the pair of objects that are considered.

# Proximity thresholding
One way to de ephasize the levels of dissimilarity is by *proximity thresholding* in a *dimensionalty-sensitive* way, it works by:
1) Each dimension $d$ is divided into $k_d$ **equi-depth** buckets (as in, there are the same number of instances in each bucket), containing $\dfrac{1}{k_d}th$ of the records. The number of buckets depends on the data dimensionality $d$
2) let $\overline{X} = (x_1,...,x_d)$ and  $\overline{Y} = (y_1,...,y_d)$ be two $d-dimensional$ points, then for each dimension $i$, if both $x_i$ and $y_i$ belong in the same bucket, they are said to be in proximity on dimension $i$ 
3) The subset of dimensions in which $\overline{X}$ and $\overline{Y}$ map to the same bucket is referred to as the **Proximity** set, containing all dimensions in which they are in proximity of. This set is called $S(\overline{X},\overline{Y}, k_d)$ 
4) For each dimension $i \in S(\overline{X},\overline{Y}, k_d)$ , let $m_i$ and $n_i$ be the upper and lower bounds values of the bucket in dimension $i$ in which the two records are proximate to one another (imagine the dimension as a line, the m and n are the "ranges" in which the values lay)

$$
PSelect(\overline{X},\overline{Y}, k_d) = \left[\sum_{i \in S(\overline{X},\overline{Y}, k_d)}\left(1-\dfrac{|x_i - y_i|^p}{m_i - n_i}\right)\right]^{1/p}
$$
The value of the expression will vary between 0 and $|S(\overline{X},\overline{Y}, k_d)|$ because each individual expression in the summation lies in between 0 and 1.
This is a similarity function because larger values imply greater similarity, and it guarantees nonzero similarity only for dimensions mapping to the same bucket
By using the equi-depth partition, we ensure that the probability of two records being in the same bucket in a particular dimension is $\dfrac{1}{k_d}$ non zero components

# Using Categorical data
If no ordering exists among the discrete values of categorical data, we can compute it by transforming the data to numeric data, using the binarization approach.
For categorical data, it's more common to work with similarity, because discrete values can be matched more naturally

The simplest similarity function between $\overline{X} = (x_1,...,x_d)$ and  $\overline{Y} = (y_1,...,y_d)$ is the sum of the similarities of the individual attribute values. 
If $S_i({x_i, y_i})$ is the similarity between the attributes of the values $x_i$ and $y_i$, then the overall similarity can be defined as:
$$
Sim(\overline{X},\overline{Y}) = \sum_{i=1}^{d}S_i(x_y, y_i)
$$
We now need to define function $S_i({x_i, y_i})$, the simplest is simply returning 1 if $x_i = y_i$, otherwise return 0. This obviously doesn't account for the relative frequencies of the different attributes. 
Two records that have a "normal" value for this attribute do not provide significant information about the similarity, because the majority of pairs likely show that pattern by chance.
The matches of a categorical attribute which have unusual values should be weighted more heavily than the ones that appear frequently. We call this the *Inverse occurrence frequency*, which weights matching attributes by the inverse function of the frequency of the matched value. So, when $x_i = y_i$, the similarity $S(x_i, y_i)$ is equal to the inverse weighted frequency, and $0$ otherwise

Let $P_i(x)$ be the ratio (amount) of records in which the $i^{th}$ attribute has the value of $x$ in the data set, then we define $S$ as:
$$
S_i(x_i, y_i) = 
\begin{cases}
\dfrac{1}{p_i(x_i)^2} & if \quad x_i = y_i \\ \\
0 & otherwise
\end{cases}
$$
## Goodall measure
Related to the previous measure, where the similarity of the $i^{th}$ attribute is defined as $1-p_i(x_i)^2$, so:
$$
S_i(x_i, y_i) = 
\begin{cases}
1-p_i(x_i)^2 & if \quad x_i = y_i \\ \\
0 & otherwise
\end{cases}
$$
![[Pasted image 20231210171858.png]]

# Mixed quantitative and categorical
To generalize the approach to mixed quantitative and categorical, we add weights based of the numeric and categorical components. The problem is deciding *how* to assign the weights. Consider two records: $\overline{X} = (\overline{X_n}, \overline{X_c})$ and  $\overline{Y} = (\overline{Y_n}, \overline{Y_c})$ where $\overline{X}_n, \overline{Y}_n$  are the subsets of *numerical* attributes, and $\overline{X}_c, \overline{Y}_c$ the subsets of categorical attributes, then the similarity between $\overline{X}, \overline{Y}$ can be defined as:
$$
\huge Sum(\overline{X}, \overline{Y}) = \lambda \cdot NumSum(\overline{X}_n, \overline{Y}_n) + (1 - \lambda)\cdot CatSim(\overline{X}_c, \overline{Y}_c)
$$
The parameter $\lambda$ regulates the importance of the categorical an numerical attributes, without any domain knowledge, we could assign the value of $\lambda$ to the number of numerical attributes in the data. The proximity of **Numerical** data is often computed using *distance* function rather than *similarity*. 
In this case we can also convert the distance values to similarity values, for a distance value of $dist$, a common approach is to use a mapping that yields a similarity value of $Sym = \dfrac{1}{1 + dist}$, or viceversa $dist = 1 - Sym$
# Text similarity
When treating text as a bag of words (dictionary), then we can treat it as a *quantitative mutidimensional* data. we can consider:
- The frequency of each word can be treated as a quantitative attribute and the base lexicon can be treated as the full set of attributes
- Text is very sparse, so most attributes take the value of 0
- All the frequencies are non negative
- Measures like the $L_p$-norm do not work well to the varying of the length of different documents in the collection. (for example, the $L_2$-distance between two long documents will always be larger than the one between two short documents, even if the two big documents have many words in common)
We normalize the irregularities by using the **cosine measure** which computes the *angle* between two documents, which is insensitive to the length of the document

Let $\overline{X} = (x_1,...,x_d)$ and $\overline{Y} = (y_1,...,y_d)$ be two documents of lexicon of size $d$, then the cosine measure $cos(\overline{X}, \overline{Y})$ is defined as:

$$
\large cos (\overline{X}, \overline{Y})=\frac{\sum_{i=1}^d x_i \cdot y_i}{\sqrt{\sum_{i=1}^d x_i^2} \cdot \sqrt{\sum_{i=1}^d y_i^2}}
$$
If two documents match on an *uncommon* word, then this is more indicative of similarity than the case in which two documents match on a word which occurs very commonly

The inverse document frequency $id_i$ which is the decreasing function of the number of documents $n_i$ in which the $i^{th}$ word occurs, is commonly use for normalization over $\mathcal{N}$ documents, it calculates how common or rare the word is across documents
$$
\large id_i = log\left(\dfrac{\mathcal{N}}{n_i}\right)
$$
and a **damping function** $f$ , like the square root $\sqrt{n_i}$ or the logarithm $log(n_i)$ can be applied before the similarity computation:
$$
\large h(n_i) = f(n_i) \cdot id_i 
$$
$$
\large cos (\overline{X}, \overline{Y})=\frac{\sum_{i=1}^d h\left(x_i\right) \cdot h\left(y_i\right)}{\sqrt{\sum_{i=1}^d h\left(x_i\right)^2} \cdot \sqrt{\sum_{i=1}^d h\left(y_i\right)^2}}
$$
# Binary multi dimensional data
Binary multidimensional data are a representation of set based data where a value of $1$ indicates the presence of the element in the set.
If $S_x$ and $S_y$ are two sets with binary representations $\overline{X} = (x_1, ..., x_d)$ and $\overline{Y} = (y_1,...,y_d)$, then we can use the *jaccard* coefficient (which sees the number of common and disjoints elements in two sets)
$$
\large J(\overline{X}, \overline{Y})=\frac{\left|S_X \cap S_Y\right|}{\left|S_X \cup S_Y\right|}=\frac{\sum_{i=1}^d x_i \cdot y_i}{\sum_{i=1}^d x_i^2+\sum_{i=1}^d y_i^2-\sum_{i=1}^d x_i \cdot y_i}
$$
or if we have a **damping function**: 
$$
\large J(\overline{X}, \overline{Y})=\frac{\left|S_X \cap S_Y\right|}{\left|S_X \cup S_Y\right|}=\frac{\sum_{i=1}^d h\left(x_i\right) \cdot h\left(y_i\right)}{\sum_{i=1}^d h\left(x_i\right)^2+\sum_{i=1}^d h\left(y_i\right)^2-\sum_{i=1}^d h\left(x_i\right) \cdot h\left(y_i\right)}
$$
# Time series similarity
The design of the time-series similarity are very application specific, we need to consider:
1) **Behavioral attribute scaling and translation**: different time series may not be drawn on the same scales. For example, the time series of stock values might have similar patterns, but with different absolute values, both in mean and standard deviation
   ![[Pasted image 20231210180443.png]]
2) **Temporal (contextual) attribute translation**: in some applications, the **ABSOLUTE** timestamp is not important, in those cases the temporal attribute value need to be shifted in at least one of the time series to allow for a more effective matching 
3) **Temporal (contextual) attribute scaling**: the series may need to be stretched or compressed along the temporal axis to allow for more effective matching. This is also called *time warping*
4) **Non contiguity in matching**: long time series may have noisy segments that don't match with one another. The distance function needs to be able to handle such noise, alternatively, those issues can be addressed by attribute normalization during preprocessing

# DTW Distance
the DTW (dynamic time warping distance) stretches the series along the time axis, in a dynamic way, over the different portions, to enable better matching [link to the algorithm](https://www.youtube.com/watch?v=_K1OsqCicBY&t=14s)
an example usage is for speech recognition, where words might be spoken in a different speed
![[Pasted image 20231210181002.png]]

# Discrete sequence similarity measures
The edit distance (or levenshtein distance) is the distance between two strings, as the least amount of "effort" required to transform one sequence into another, by a series of transformations called "edits", which can be either: *insertion, deletion, replacement*.
Example, consider the two strings:

ababababab
bababababa

on the alphabet {a,b}, we can transform it either by:
- transforming every symbol of the other string (cost 10)
- delete the leftmost element of the string and inserting the "a" as the rightmost element (cost 2)
## Longest common sequences (LCSS)
Consider the two strings:

agbfcgdhei
afbdgchdei

in this case, "ei" is a substring of both sequences, but also a subsequence. "*abcde*" and "*fgi*" are also subsequences, but not substrings.
- Subsequences of longer length are indicative of a greater level of matching between the strings 
- The length of the longest common *subsequence* (LCSS) is a similarity function, because higher values indicate higher similarity
# Graph similarity measures 
We can consider the similarity in graphs related to two graphs or between two nodes in a single graph

let $G = (V, E)$ be an undirected network with nodes set $V$ and edge set $E$, where costs or weights are associated with edges
- the distance functions work with costs, whereas similarity functions work with weights. we consider $c_{(i,j)}$ the cost and $w_{(i,j)}$ the weight of the edge $(i,j)$ 
- the principle of similarity between two nodes are based odd the concept of *homophily* where nodes are typically more similar in a network when they are connected to one another with edges. Nodes that are connected with shorter paths, or many paths, should be considered similar
## Structural Distance-Based Measure
let $SP(s, j)$ the shortest path between node $s$ to any node $j$, the value of $SP(s,j)$ is initialize to 0 for $j=s$ and $\infty$ otherwise. then we use the Dijkstra algorithm to find the shortest path  
## Random walk-based similarity
![[Pasted image 20231210184111.png]]
in this graph, the shortest path between $c$ and $a$ is 3, and the distance between $b$ and $a$ is 4, yet, we should consider the node $b$ as being more similar, because for the $homophily$, node $a$ and $b$ share more paths 
the intuition is: *if you were lost in a road network and drove randomly, taking turns (joints) randomly, which location are you more likely to reach?*
starting from node *a* we are more likely to end up in $b$ rather than $c$

## Similarity between two graphs
Determining the similarity between two graphs is extremely hard (NP-hard), core ideas to compute it are:
1) **Maximum common subgraph distance**: When two graphs contain a large sub-graph in common, then they are considered similar
2) **Substructure-based similarity**: It is difficult to match two large graphs, in alternative we match smaller substructures instead
3) **Graph-edit distance**: The distance measure is analogous to the string edit distance, it counts the number of edits to transform one graph to the other
4) **Graph kernels**: shortest path kernel and random walk kernel