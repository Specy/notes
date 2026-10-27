---
title: "Clustering Analysis"
description: "Explores clustering types (partitional vs. hierarchical), cluster definitions (well-separated, center-based, density-based), and key algorithms including agglomerative hierarchical clustering, K-Means, and DBSCAN."
type: lecture
---

 The purpose of clustering analysis is to find groups of objects which are related to each other. The definition of a cluster can be ambiguous, as we need to define what we consider a cluster.

# Types of clustering
There are two kinds of clustering:
1) **Partitional clustering**, it's the division of data into non overlapping clusters, so that a single data object is only in one subset
2) **Hierarchical clustering**, the set of nested clusters which are organized in a hierarchical tree

<svg viewBox="0 0 693 423" width="100%" style="max-width:693px;display:block;margin:1.5rem auto" role="img" aria-label="Clustering procedures: hierarchical (agglomerative — linkage methods: single, complete, average linkage; variance methods: Ward’s method; centroid methods — and divisive) and nonhierarchical (sequential threshold, parallel threshold, optimizing partitioning)" font-family="sans-serif">
<defs><marker id="i20231213153119-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0 0L10 5L0 10z" fill="currentColor"/></marker></defs>
<g fill="none" stroke="currentColor" stroke-width="1.2">
<rect x="307.8" y="2.7" width="191.7" height="30.6"/>
<rect x="189" y="99" width="100.8" height="40.5"/>
<rect x="414.9" y="99" width="132.3" height="40.5"/>
<rect x="55.8" y="166.5" width="146.7" height="25.2"/>
<rect x="289.8" y="166.5" width="103.5" height="25.2"/>
<rect x="33.3" y="248.4" width="81" height="44.1"/>
<rect x="121.5" y="248.4" width="78.3" height="44.1"/>
<rect x="217.8" y="248.4" width="81" height="44.1"/>
<rect x="133.2" y="308.7" width="78.3" height="42.3"/>
<rect x="7.2" y="372.6" width="78.3" height="44.1"/>
<rect x="119.7" y="372.6" width="81" height="44.1"/>
<rect x="216" y="372.6" width="92.7" height="44.1"/>
<rect x="318.6" y="246.6" width="102.6" height="45.9"/>
<rect x="439.2" y="246.6" width="105.3" height="45.9"/>
<rect x="565.2" y="246.6" width="112.5" height="45.9"/>
<!-- connectors -->
<path d="M408.6 33.3V63M236.7 63H477"/>
<path d="M236.7 139.5V151.2M139.5 151.2H335.7"/>
<path d="M127.8 191.7V232.2M60.3 232.2H266.4"/>
<path d="M85.5 292.5V358.2M42.3 358.2H266.4"/>
<path d="M504 139.5V232.2M387 232.2H620.1"/>
</g>
<g stroke="currentColor" stroke-width="1.6" marker-end="url(#i20231213153119-arrow)">
<line x1="236.7" y1="63" x2="236.7" y2="97.2"/>
<line x1="477" y1="63" x2="477" y2="97.2"/>
<line x1="139.5" y1="151.2" x2="139.5" y2="164.7"/>
<line x1="335.7" y1="151.2" x2="335.7" y2="164.7"/>
<line x1="60.3" y1="232.2" x2="60.3" y2="246.6"/>
<line x1="163.8" y1="232.2" x2="163.8" y2="246.6"/>
<line x1="266.4" y1="232.2" x2="266.4" y2="246.6"/>
<line x1="163.8" y1="292.5" x2="163.8" y2="306.9"/>
<line x1="42.3" y1="358.2" x2="42.3" y2="370.8"/>
<line x1="163.8" y1="358.2" x2="163.8" y2="370.8"/>
<line x1="266.4" y1="358.2" x2="266.4" y2="370.8"/>
<line x1="387" y1="232.2" x2="387" y2="244.8"/>
<line x1="481.5" y1="232.2" x2="481.5" y2="244.8"/>
<line x1="620.1" y1="232.2" x2="620.1" y2="244.8"/>
</g>
<g fill="var(--palette-red)" font-size="17" text-anchor="middle">
<text x="403.7" y="24.5">Clustering Procedures</text>
<text x="239.4" y="125.8">Hierarchical</text>
<text x="481.1" y="125.8">Nonhierarchical</text>
<text x="129.2" y="185.6" font-weight="bold">Agglomerative</text>
<text x="341.6" y="185.6">Divisive</text>
<text x="73.8" y="267.5">Linkage</text>
<text x="73.8" y="286.4">Methods</text>
<text x="160.7" y="267.5">Variance</text>
<text x="160.7" y="286.4">Methods</text>
<text x="258.3" y="267.5">Centroid</text>
<text x="258.3" y="286.4">Methods</text>
<text x="172.3" y="326.9">Ward’s</text>
<text x="172.3" y="345.9">Method</text>
<text x="46.4" y="391.7">Single</text>
<text x="46.4" y="410.6">Linkage</text>
<text x="160.2" y="391.7">Complete</text>
<text x="160.2" y="410.6">Linkage</text>
<text x="262.4" y="391.7">Average</text>
<text x="262.4" y="410.6">Linkage</text>
<text x="369.9" y="266.6">Sequential</text>
<text x="369.9" y="285.6">Threshold</text>
<text x="491.9" y="266.6">Parallel</text>
<text x="491.9" y="285.6">Threshold</text>
<text x="621.5" y="266.6" font-weight="bold">Optimizing</text>
<text x="621.5" y="285.6" font-weight="bold">Partitioning</text>
</g></svg>

we can then also specialize the clusters into:
- Well-centered clusters
- Center-based clusters
- Contiguous clusters
- Density-based clusters
- Property or Conceptual
- Described by an objective function

## Well-Separated cluster
In the Well-separated cluster, a cluster is a set of points such that any point in cluster is closer (or more similar) to every other point in the cluster, than to any other point not in the cluster

```plot
x: [100, 700]
y: [0, 310]
width: 480
aspect: equal
axes: false
items:
  - circle: [378, 223]
    r: 75
    color: red
    fill: true
    opacity: 1
  - circle: [198, 83]
    r: 75
    color: teal
    fill: true
    opacity: 1
  - circle: [597, 83]
    r: 75
    color: green
    fill: true
    opacity: 1
```

## Center-based cluster
In the center-based cluster, a cluster is a set of objects such that an object in a cluster is closer (or more similar) to the "center" of it's cluster, than it is to the center of any other cluster. The center of the cluster is called **centroid** and it is the average of all points in the cluster, or alternatively, we use the *medoid* which is the point that is most "representative" of the cluster

```plot
x: [70, 710]
y: [28, 188]
width: 520
aspect: equal
axes: false
items:
  - circle: [158, 108]
    r: 60
    color: red
    fill: true
    opacity: 1
  - circle: [278, 108]
    r: 60
    color: blue
    fill: true
    opacity: 1
  - circle: [514, 107]
    rx: 51
    ry: 48
    color: green
    fill: true
    opacity: 1
  - circle: [634, 107]
    rx: 51
    ry: 48
    color: orange
    fill: true
    opacity: 1
```

## Contiguity-based cluster
In the contiguity-based cluster, a cluster is a set of points such that a point in a cluster is closer (or more similar) to one or more points in the cluster than to any other point not in the cluster
![[Pasted image 20231213154355.png]]

## Density-based clusters
In density-based clusters, a cluster is a dense region of points, which are separated by low density regions, and then again higher density regions. It is mostly used when clusters are irregular and intertwined, and when noise and outliers are present

```plot
x: [0, 743]
y: [0, 142]
width: 520
aspect: equal
axes: false
items:
  - line: [[176.2, 101.2], [167.0, 104.8], [156.8, 107.7], [146.0, 109.9], [134.6, 111.4], [122.9, 112.0], [111.2, 111.8], [99.7, 110.8], [88.5, 108.9], [78.0, 106.4], [68.3, 103.1], [59.6, 99.2], [52.0, 94.7], [45.8, 89.7], [41.1, 84.4], [37.8, 78.7], [36.2, 72.9], [36.2, 67.1], [37.8, 61.3], [41.1, 55.6], [45.8, 50.3], [52.0, 45.3], [59.6, 40.8], [68.3, 36.9], [78.0, 33.6], [88.5, 31.1], [99.7, 29.2], [111.2, 28.2], [122.9, 28.0], [134.6, 28.6], [146.0, 30.1], [156.8, 32.3], [167.0, 35.2], [176.2, 38.8]]
    color: blue
    width: 22
  - point: [116, 69]
    size: 9
    color: purple
  - point: [181, 69]
    size: 9
    color: teal
  - circle: [306, 79]
    r: 44
    color: blue
    fill: true
    opacity: 1
  - circle: [386, 79]
    r: 44
    color: blue
    fill: true
    opacity: 1
  - circle: [543, 70]
    r: 36
    color: green
    fill: true
    opacity: 1
  - circle: [630, 70]
    r: 37
    color: orange
    fill: true
    opacity: 1
```

## Conceptual clusters
In conceptual clusters, a cluster is a set of objects that share a common propriety or particular concept (sub-space)

```plot
x: [0, 742]
y: [0, 225]
width: 480
aspect: equal
axes: false
items:
  - circle: [309, 113]
    rx: 86
    ry: 76
    color: red
    width: 17
  - circle: [403, 113]
    rx: 86
    ry: 76
    color: red
    width: 17
```

# Hierarchical clustering
This is a typical clustering analysis approach which partitions data set sequentially. It constructs nested partitions layer by layer via grouping objects in a tree of clusters.

There are two approaches when building hierarchical clusters:
- **Agglomerative**, a bottom up strategy where initially, each data object is it's own atomic cluster, then we merge those clusters into larger and larger clusters
- **Divisive**, is a top down strategy where initially, all objects are in a single cluster, and we try to subdivide them into smaller and smaller clusters

<svg viewBox="0 0 653 322" width="100%" style="max-width:653px;display:block;margin:1.5rem auto" role="img" aria-label="Hierarchical clustering of a, b, c, d, e: agglomerative from step 0 to step 4 (a b, d e, c d e, a b c d e), divisive in the opposite direction from step 0 to step 4" font-family="serif">
<defs><marker id="i20231213155121-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="8" markerHeight="8" orient="auto-start-reverse"><path d="M0 0L10 5L0 10z" fill="currentColor"/></marker></defs>
<!-- step axes -->
<g stroke="currentColor" stroke-width="1.3">
<line x1="13.8" y1="50.6" x2="496.8" y2="50.6" marker-end="url(#i20231213155121-arrow)"/>
<line x1="496.8" y1="288" x2="13.8" y2="288" marker-end="url(#i20231213155121-arrow)"/>
<path d="M64.4 36.8V50.6M64.4 288V300.8M144.4 36.8V50.6M144.4 288V300.8M223.6 36.8V50.6M223.6 288V300.8M296.2 36.8V50.6M296.2 288V300.8M368 36.8V50.6M368 288V300.8"/>
</g>
<g fill="currentColor" font-size="14" text-anchor="middle">
<text x="64.4" y="23.9">Step 0</text>
<text x="144.4" y="23.9">Step 1</text>
<text x="223.6" y="23.9">Step 2</text>
<text x="296.2" y="23.9">Step 3</text>
<text x="368" y="23.9">Step 4</text>
<text x="64.4" y="315.6">Step 4</text>
<text x="144.4" y="315.6">Step 3</text>
<text x="223.6" y="315.6">Step 2</text>
<text x="296.2" y="315.6">Step 1</text>
<text x="368" y="315.6">Step 0</text>
</g>
<g fill="currentColor" font-size="18" font-weight="bold">
<text x="517" y="34">Agglomerative</text><text x="529" y="280.6">Divisive</text>
</g>
<!-- merges -->
<g stroke="currentColor" stroke-width="1">
<line x1="82.8" y1="88.3" x2="115" y2="97.5"/>
<line x1="81" y1="119.6" x2="117.8" y2="105.8"/>
<line x1="193.2" y1="107.6" x2="303.6" y2="140.8"/>
<line x1="82.8" y1="174.8" x2="253.9" y2="186.8"/>
<line x1="82.8" y1="209.8" x2="194.1" y2="230"/>
<line x1="82.8" y1="249.3" x2="194.1" y2="230"/>
<line x1="239.2" y1="213.4" x2="254.8" y2="194.1"/>
<line x1="294.4" y1="170.2" x2="308.2" y2="152.7"/>
</g>
<g fill="none" stroke="currentColor" stroke-width="1">
<ellipse cx="62.6" cy="85.6" rx="20.2" ry="15.6"/>
<ellipse cx="62.6" cy="127" rx="20.2" ry="15.6"/>
<ellipse cx="62.6" cy="170.2" rx="20.2" ry="15.6"/>
<ellipse cx="62.6" cy="213.4" rx="20.2" ry="15.6"/>
<ellipse cx="62.6" cy="255.8" rx="20.2" ry="15.6"/>
<ellipse cx="153.6" cy="101.2" rx="39.6" ry="16.6"/>
<ellipse cx="379" cy="139.8" rx="75.4" ry="18.4"/>
<ellipse cx="296.2" cy="187.7" rx="43.2" ry="18.4"/>
<ellipse cx="230" cy="230" rx="36.8" ry="16.6"/>
</g>
<g fill="currentColor" font-size="16" text-anchor="middle">
<text x="62.6" y="90.2">a</text>
<text x="62.6" y="131.6">b</text>
<text x="62.6" y="174.8">c</text>
<text x="62.6" y="218">d</text>
<text x="62.6" y="260.4">e</text>
<text x="153.6" y="105.8">a b</text>
<text x="379" y="144.4">a b c d e</text>
<text x="296.2" y="192.3">c d e</text>
<text x="230" y="234.6">d e</text>
</g></svg>

There are also different methods to compare the distance between clusters:
- **Single link**: the smallest distance between an element in one cluster and an element in another cluster. $d(C_i, C_j) = min\{d(x_{ip}, x_{jp})\}$ 
- **Complete link**: the largest distance between an element in one cluster and an element in another cluster. $d(C_i, C_j) = max\{d(x_{ip}, x_{jp})\}$
- **Average**: the average distance between elements in one cluster and elements in another. $d(C_i, C_j) = avg\{d(x_{ip}, x_{jp})\}$ 
![[Pasted image 20231213155533.png]]

**Example**: Given a data set of five objects characterized by a single continuous feature, assume that there are two clusters: C1: {a, b} and C2: {c, d, e}.

| | a | b | c | d | e |
|---|---|---|---|---|---|
| Feature | 1 | 2 | 4 | 5 | 6 |

1. Calculate the distance matrix;
2. Calculate three cluster distances between C1 and C2.

| | a | b | c | d | e |
|---|---|---|---|---|---|
| **a** | 0 | 1 | 3 | 4 | 5 |
| **b** | 1 | 0 | 2 | 3 | 4 |
| **c** | 3 | 2 | 0 | 1 | 2 |
| **d** | 4 | 3 | 1 | 0 | 1 |
| **e** | 5 | 4 | 2 | 1 | 0 |

*Single link*

$$
\begin{aligned}
\mathrm{dist}(C_1,C_2) &= \min\{d(a,c), d(a,d), d(a,e), d(b,c), d(b,d), d(b,e)\} \\
&= \min\{3, 4, 5, 2, 3, 4\} = 2
\end{aligned}
$$

*Complete link*

$$
\begin{aligned}
\mathrm{dist}(C_1,C_2) &= \max\{d(a,c), d(a,d), d(a,e), d(b,c), d(b,d), d(b,e)\} \\
&= \max\{3, 4, 5, 2, 3, 4\} = 5
\end{aligned}
$$

*Average*

$$
\begin{aligned}
\mathrm{dist}(C_1,C_2) &= \frac{d(a,c) + d(a,d) + d(a,e) + d(b,c) + d(b,d) + d(b,e)}{6} \\
&= \frac{3+4+5+2+3+4}{6} = \frac{21}{6} = 3.5
\end{aligned}
$$

# Agglomerative Algorithm

1) Convert all object features into a distance matrix
2) Set each object as a cluster (thus if we have *N* objects, we will have *N* clusters at the beginning)
3) Repeat until number of cluster is one (or known # of clusters)
    - Merge two closest clusters
    - Update "distance matrix"

<svg viewBox="0 0 445 569" width="100%" style="max-width:445px;display:block;margin:1.5rem auto" role="img" aria-label="Flowchart: start, objects and their measured features, compute distance matrix, set object as cluster, then while the number of clusters is not 1 merge the 2 closest clusters and update the distance matrix; when it is 1, end" font-family="sans-serif">
<defs><marker id="i20231213161019-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0 0L10 5L0 10z" fill="currentColor"/></marker></defs>
<g fill="none" stroke="currentColor" stroke-width="1.2">
<rect x="119.6" y="6.5" width="101.4" height="41.6" rx="20.8"/>
<polygon points="49.4,87.1 300.3,87.1 275.6,139.1 24.7,139.1"/>
<rect x="41.6" y="175.5" width="257.4" height="42.9"/>
<rect x="41.6" y="253.5" width="257.4" height="45.5"/>
<rect x="41.6" y="432.9" width="257.4" height="48.1"/>
<rect x="41.6" y="516.1" width="257.4" height="45.5"/>
<polygon points="39,366.6 170.3,340.6 301.6,366.6 170.3,392.6"/>
<rect x="335.4" y="345.8" width="104" height="41.6" rx="20.8"/>
</g>
<g fill="none" stroke="currentColor" stroke-width="1.2" marker-end="url(#i20231213161019-arrow)">
<line x1="170.3" y1="48.1" x2="170.3" y2="85.8"/>
<line x1="170.3" y1="139.1" x2="170.3" y2="174.2"/>
<line x1="170.3" y1="218.4" x2="170.3" y2="252.2"/>
<line x1="170.3" y1="299" x2="170.3" y2="339.3"/>
<line x1="170.3" y1="392.6" x2="170.3" y2="431.6"/>
<line x1="170.3" y1="481" x2="170.3" y2="514.8"/>
<line x1="301.6" y1="366.6" x2="334.1" y2="366.6"/>
<path d="M41.6 538.2H10.4V366.6H37.7"/>
</g>
<g fill="currentColor" font-size="14" text-anchor="middle">
<text x="170.3" y="33.8">Start</text>
<text x="170.3" y="105.3">Objects and their</text>
<text x="170.3" y="128.7">measured features</text>
<text x="170.3" y="202.8">Compute Distance matrix</text>
<text x="170.3" y="282.1">Set Object as Cluster</text>
<text x="170.3" y="371.8">Number of cluster = 1</text>
<text x="170.3" y="462.8">Merge 2 closest clusters</text>
<text x="170.3" y="544.7">Update Distance matrix</text>
<text x="387.4" y="371.8">End</text>
<text x="315.9" y="348.4">Yes</text>
<text x="179.4" y="419.9" text-anchor="start">No</text>
</g></svg>

## Agglomerative algorithm example:

**Problem: clustering analysis with agglomerative algorithm**

```plot
x: [0, 6.5]
y: [0, 6.5]
width: 380
height: 300
xticks: [0, 2, 4, 6]
yticks: [0, 1, 2, 3, 4, 5, 6]
xlabel: $X1$
ylabel: $X2$
items:
  - points: [[1, 1], [1.5, 1.5], [5, 5], [3, 4], [4, 4], [3, 3.5]]
    shape: diamond
    size: 4.5
  - text: A
    at: [1.12, 1]
    anchor: e
  - text: B
    at: [1.62, 1.5]
    anchor: e
  - text: C
    at: [5.12, 5]
    anchor: e
  - text: D
    at: [3.12, 4]
    anchor: e
  - text: E
    at: [4.12, 4]
    anchor: e
  - text: F
    at: [3.12, 3.5]
    anchor: e
```

Data matrix

| | X1 | X2 |
|---|---|---|
| A | 1 | 1 |
| B | 1.5 | 1.5 |
| C | 5 | 5 |
| D | 3 | 4 |
| E | 4 | 4 |
| F | 3 | 3.5 |

Euclidean distance

$$d_{AB} = \left((1-1.5)^2 + (1-1.5)^2\right)^{\frac{1}{2}} = \sqrt{\tfrac{1}{2}} = 0.7071$$

$$d_{DF} = \left((3-3)^2 + (4-3.5)^2\right)^{\frac{1}{2}} = 0.5$$

Distance matrix

| Dist | A | B | C | D | E | F |
|---|---|---|---|---|---|---|
| A | 0.00 | 0.71 | 5.66 | 3.61 | 4.24 | 3.20 |
| B | 0.71 | 0.00 | 4.95 | 2.92 | 3.54 | 2.50 |
| C | 5.66 | 4.95 | 0.00 | 2.24 | 1.41 | 2.50 |
| D | 3.61 | 2.92 | 2.24 | 0.00 | 1.00 | 0.50 |
| E | 4.24 | 3.54 | 1.41 | 1.00 | 0.00 | 1.12 |
| F | 3.20 | 2.50 | 2.50 | **0.50** | 1.12 | 0.00 |

(Iteration 1) Merge two closest clusters

```plot
x: [0, 6.5]
y: [0, 6.5]
width: 380
height: 300
xticks: [0, 2, 4, 6]
yticks: [0, 1, 2, 3, 4, 5, 6]
xlabel: $X1$
ylabel: $X2$
items:
  - circle: [3.24, 3.74]   # DF
    rx: 0.41
    ry: 0.98
    color: red
  - point: [1, 1]
    shape: diamond
    size: 4
  - text: A
    at: [1.12, 1]
    anchor: e
  - point: [1.5, 1.5]
    shape: diamond
    size: 4
  - text: B
    at: [1.62, 1.5]
    anchor: e
  - point: [5, 5]
    shape: diamond
    size: 4
  - text: C
    at: [5.12, 5]
    anchor: e
  - point: [3, 4]
    shape: diamond
    size: 4
  - text: D
    at: [3.12, 4]
    anchor: e
  - point: [4, 4]
    shape: diamond
    size: 4
  - text: E
    at: [4.12, 4]
    anchor: e
  - point: [3, 3.5]
    shape: diamond
    size: 4
  - text: F
    at: [3.12, 3.5]
    anchor: e
```

| Dist | A | B | C | D | E | F |
|---|---|---|---|---|---|---|
| A | 0.00 | 0.71 | 5.66 | 3.61 | 4.24 | 3.20 |
| B | 0.71 | 0.00 | 4.95 | 2.92 | 3.54 | 2.50 |
| C | 5.66 | 4.95 | 0.00 | 2.24 | 1.41 | 2.50 |
| D | 3.61 | 2.92 | 2.24 | 0.00 | 1.00 | 0.50 |
| E | 4.24 | 3.54 | 1.41 | 1.00 | 0.00 | 1.12 |
| F | 3.20 | 2.50 | 2.50 | **0.50** | 1.12 | 0.00 |

| Dist | A | B | C | D, F | E |
|---|---|---|---|---|---|
| A | 0.00 | 0.71 | 5.66 | ? | 4.24 |
| B | 0.71 | 0.00 | 4.95 | ? | 3.54 |
| C | 5.66 | 4.95 | 0.00 | ? | 1.41 |
| **D, F** | ? | ? | ? | 0.00 | ? |
| E | 4.24 | 3.54 | 1.41 | ? | 0.00 |

(Iteration 1) Update the distance matrix with the now merged D,F cluster

| Dist | A | B | C | D | E | F |
|---|---|---|---|---|---|---|
| A | 0.00 | 0.71 | 5.66 | 3.61 | 4.24 | 3.20 |
| B | 0.71 | 0.00 | 4.95 | 2.92 | 3.54 | 2.50 |
| C | 5.66 | 4.95 | 0.00 | 2.24 | 1.41 | 2.50 |
| D | 3.61 | 2.92 | 2.24 | 0.00 | 1.00 | 0.50 |
| E | 4.24 | 3.54 | 1.41 | 1.00 | 0.00 | 1.12 |
| F | 3.20 | 2.50 | 2.50 | **0.50** | 1.12 | 0.00 |

| Dist | A | B | C | D, F | E |
|---|---|---|---|---|---|
| A | 0.00 | 0.71 | 5.66 | ? | 4.24 |
| B | 0.71 | 0.00 | 4.95 | ? | 3.54 |
| C | 5.66 | 4.95 | 0.00 | ? | 1.41 |
| D, F | ? | ? | ? | 0.00 | ? |
| E | 4.24 | 3.54 | 1.41 | ? | 0.00 |

$$d_{(D,F)\to A} = \min(d_{DA}, d_{FA}) = \min(3.61, 3.20) = 3.20$$

$$d_{(D,F)\to B} = \min(d_{DB}, d_{FB}) = \min(2.92, 2.50) = 2.50$$

$$d_{(D,F)\to C} = \min(d_{DC}, d_{FC}) = \min(2.24, 2.50) = 2.24$$

$$d_{E\to(D,F)} = \min(d_{ED}, d_{EF}) = \min(1.00, 1.12) = 1.00$$

**Min Distance (Single Linkage)**

| Dist | A | B | C | D, F | E |
|---|---|---|---|---|---|
| A | 0.00 | 0.71 | 5.66 | **3.20** | 4.24 |
| B | 0.71 | 0.00 | 4.95 | **2.50** | 3.54 |
| C | 5.66 | 4.95 | 0.00 | **2.24** | 1.41 |
| D, F | **3.20** | **2.50** | **2.24** | 0.00 | **1.00** |
| E | 4.24 | 3.54 | 1.41 | **1.00** | 0.00 |

(Iteration 2) Merge the two closest clusters

```plot
x: [0, 6.5]
y: [0, 6.5]
width: 380
height: 300
xticks: [0, 2, 4, 6]
yticks: [0, 1, 2, 3, 4, 5, 6]
xlabel: $X1$
ylabel: $X2$
items:
  - circle: [3.24, 3.74]   # DF
    rx: 0.41
    ry: 0.98
    color: red
  - circle: [1.48, 1.14]   # AB
    rx: 0.84
    ry: 0.98
    color: red
  - point: [1, 1]
    shape: diamond
    size: 4
  - text: A
    at: [1.12, 1]
    anchor: e
  - point: [1.5, 1.5]
    shape: diamond
    size: 4
  - text: B
    at: [1.62, 1.5]
    anchor: e
  - point: [5, 5]
    shape: diamond
    size: 4
  - text: C
    at: [5.12, 5]
    anchor: e
  - point: [3, 4]
    shape: diamond
    size: 4
  - text: D
    at: [3.12, 4]
    anchor: e
  - point: [4, 4]
    shape: diamond
    size: 4
  - text: E
    at: [4.12, 4]
    anchor: e
  - point: [3, 3.5]
    shape: diamond
    size: 4
  - text: F
    at: [3.12, 3.5]
    anchor: e
```

**Min Distance (Single Linkage)**

| Dist | A | B | C | D, F | E |
|---|---|---|---|---|---|
| A | 0.00 | 0.71 | 5.66 | 3.20 | 4.24 |
| **B** | **0.71** | 0.00 | 4.95 | 2.50 | 3.54 |
| C | 5.66 | 4.95 | 0.00 | 2.24 | 1.41 |
| D, F | **3.20** | **2.50** | **2.24** | 0.00 | 1.00 |
| E | 4.24 | 3.54 | 1.41 | **1.00** | 0.00 |

| Dist | A,B | C | (D, F) | E |
|---|---|---|---|---|
| **A,B** | 0 | ? | ? | ? |
| C | ? | 0 | 2.24 | 1.41 |
| (D, F) | ? | 2.24 | 0 | 1.00 |
| E | ? | 1.41 | 1.00 | 0 |

(Iteration 2) Update the distance matrix 

**Min Distance (Single Linkage)**

| Dist | A | B | C | D, F | E |
|---|---|---|---|---|---|
| A | 0.00 | 0.71 | 5.66 | 3.20 | 4.24 |
| B | **0.71** | 0.00 | 4.95 | 2.50 | 3.54 |
| C | 5.66 | 4.95 | 0.00 | 2.24 | 1.41 |
| D, F | **3.20** | **2.50** | **2.24** | 0.00 | 1.00 |
| E | 4.24 | 3.54 | 1.41 | **1.00** | 0.00 |

| Dist | A,B | C | (D, F) | E |
|---|---|---|---|---|
| A,B | 0 | ? | ? | ? |
| C | ? | 0 | 2.24 | 1.41 |
| (D, F) | ? | 2.24 | 0 | 1.00 |
| E | ? | 1.41 | 1.00 | 0 |

$$d_{C\to(A,B)} = \min(d_{CA}, d_{CB}) = \min(5.66, 4.95) = 4.95$$

$$
\begin{aligned}
d_{(D,F)\to(A,B)} &= \min(d_{DA}, d_{DB}, d_{FA}, d_{FB}) \\
&= \min(3.61, 2.92, 3.20, 2.50) = 2.50
\end{aligned}
$$

$$d_{E\to(A,B)} = \min(d_{EA}, d_{EB}) = \min(4.24, 3.54) = 3.54$$

**Min Distance (Single Linkage)**

| Dist | A,B | C | (D, F) | E |
|---|---|---|---|---|
| A,B | 0 | **4.95** | **2.50** | **3.54** |
| C | **4.95** | 0 | 2.24 | 1.41 |
| (D, F) | **2.50** | 2.24 | 0 | 1.00 |
| E | **3.54** | 1.41 | 1.00 | 0 |

(Iteration 3) Merge two closest clusters and update distance matrix

```plot
x: [0, 6.5]
y: [0, 6.5]
width: 380
height: 300
xticks: [0, 2, 4, 6]
yticks: [0, 1, 2, 3, 4, 5, 6]
xlabel: $X1$
ylabel: $X2$
items:
  - circle: [3.24, 3.74]   # DF
    rx: 0.41
    ry: 0.98
    color: red
  - circle: [1.48, 1.14]   # AB
    rx: 0.84
    ry: 0.98
    color: red
  - circle: [3.4, 3.74]   # DFE
    rx: 1.25
    ry: 0.99
    color: red
  - point: [1, 1]
    shape: diamond
    size: 4
  - text: A
    at: [1.12, 1]
    anchor: e
  - point: [1.5, 1.5]
    shape: diamond
    size: 4
  - text: B
    at: [1.62, 1.5]
    anchor: e
  - point: [5, 5]
    shape: diamond
    size: 4
  - text: C
    at: [5.12, 5]
    anchor: e
  - point: [3, 4]
    shape: diamond
    size: 4
  - text: D
    at: [3.12, 4]
    anchor: e
  - point: [4, 4]
    shape: diamond
    size: 4
  - text: E
    at: [4.12, 4]
    anchor: e
  - point: [3, 3.5]
    shape: diamond
    size: 4
  - text: F
    at: [3.12, 3.5]
    anchor: e
```

**Min Distance (Single Linkage)**

| Dist | (A,B) | C | (D, F) | E |
|---|---|---|---|---|
| (A,B) | 0 | 4.95 | 2.50 | 3.54 |
| C | **4.95** | 0 | 2.24 | 1.41 |
| (D, F) | **2.50** | 2.24 | 0 | **1.00** |
| E | **3.54** | 1.41 | **1.00** | 0 |

**Min Distance (Single Linkage)**

| Dist | (A,B) | C | (D, F), E |
|---|---|---|---|
| (A,B) | 0.00 | 4.95 | 2.50 |
| C | 4.95 | 0.00 | 1.41 |
| (D, F), E | **2.50** | 1.41 | 0.00 |

(Iteration 4) Merge two clusters and update distance matrix

```plot
x: [0, 6.5]
y: [0, 6.5]
width: 380
height: 300
xticks: [0, 2, 4, 6]
yticks: [0, 1, 2, 3, 4, 5, 6]
xlabel: $X1$
ylabel: $X2$
items:
  - circle: [3.24, 3.74]   # DF
    rx: 0.41
    ry: 0.98
    color: red
  - circle: [1.48, 1.14]   # AB
    rx: 0.84
    ry: 0.98
    color: red
  - circle: [3.4, 3.74]   # DFE
    rx: 1.25
    ry: 0.99
    color: red
  - circle: [3.82, 4.29]   # all
    rx: 2.34
    ry: 1.53
    color: red
  - point: [1, 1]
    shape: diamond
    size: 4
  - text: A
    at: [1.12, 1]
    anchor: e
  - point: [1.5, 1.5]
    shape: diamond
    size: 4
  - text: B
    at: [1.62, 1.5]
    anchor: e
  - point: [5, 5]
    shape: diamond
    size: 4
  - text: C
    at: [5.12, 5]
    anchor: e
  - point: [3, 4]
    shape: diamond
    size: 4
  - text: D
    at: [3.12, 4]
    anchor: e
  - point: [4, 4]
    shape: diamond
    size: 4
  - text: E
    at: [4.12, 4]
    anchor: e
  - point: [3, 3.5]
    shape: diamond
    size: 4
  - text: F
    at: [3.12, 3.5]
    anchor: e
```

**Min Distance (Single Linkage)**

| Dist | (A,B) | C | (D, F), E |
|---|---|---|---|
| (A,B) | 0.00 | 4.95 | 2.50 |
| C | 4.95 | 0.00 | 1.41 |
| (D, F), E | **2.50** | **1.41** | 0.00 |

**Min Distance (Single Linkage)**

| Dist | (A,B) | ((D, F), E),C |
|---|---|---|
| (A,B) | 0.00 | **2.50** |
| ((D, F), E),C | **2.50** | 0.00 |

(Iteration 5) Final iteration, merge the last two clusters, termination condition
We construct the **Dendrogram tree** of the cluster

```plot
x: [0.6, 6.8]
y: [0, 2.9]
width: 340
height: 360
ylabel: lifetime
yticks: { 0.5: "0.5", 1: "1.0", 1.5: "1.5", 2: "2.0", 2.5: "2.5" }
xticks: { 1: "D", 2: "F", 3: "E", 4: "C", 5: "A", 6: "B" }
items:
  - line: [[1, 0], [1, 0.5], [2, 0.5], [2, 0]]
    color: green
    width: 2
  - line: [[1.5, 0.5], [1.5, 1.0], [3, 1.0], [3, 0]]
    color: green
    width: 2
  - line: [[2.25, 1.0], [2.25, 1.41], [4, 1.41], [4, 0]]
    color: green
    width: 2
  - line: [[5, 0], [5, 0.71], [6, 0.71], [6, 0]]
    color: green
    width: 2
  - line: [[3.125, 1.41], [3.125, 2.5], [5.5, 2.5], [5.5, 0.71]]
    color: green
    width: 2
  - text: '$\mathbf{2}$'
    at: [1.5, 0.5]
    anchor: s
  - text: '$\mathbf{4}$'
    at: [2.25, 1.0]
    anchor: se
  - text: '$\mathbf{5}$'
    at: [3.125, 1.41]
    anchor: se
  - text: '$\mathbf{3}$'
    at: [5.5, 0.71]
    anchor: s
  - text: '$\mathbf{6}$'
    at: [4.31, 2.5]
    anchor: s
```

1. In the beginning we have 6 clusters: A, B, C, D, E and F
2. We merge clusters D and F into cluster (D, F) at distance 0.50
3. We merge cluster A and cluster B into (A, B) at distance 0.71
4. We merge clusters E and (D, F) into ((D, F), E) at distance 1.00
5. We merge clusters ((D, F), E) and C into (((D, F), E), C) at distance 1.41
6. We merge clusters (((D, F), E), C) and (A, B) into ((((D, F), E), C), (A, B)) at distance 2.50
7. The last cluster contain all the objects, thus conclude the computation

- The **Lifetime** of a cluster, as the difference between the proximity level moment the cluster was created, and the proximity level of when it was merged with any of the other clusters.  
  Taking the example of before: the lifetime of A, B, C, D, E, F are: 0.71, 0.71, 1.41, 0.50, 1.00, 0.50, and the lifetime of (A,B) is $2.50 - 0.71 = 1.79$
- The **K-cluster lifetime** is the distance from that K clusters merge to that of K clusters vanish due to the reduction to k-1 clusters

# K-Mean clustering
[link to demo](https://user.ceng.metu.edu.tr/~akifakkus/courses/ceng574/k-means/)
Given a $K$, find a partition of $K$ clusters to optimize the chosen partition criterion, in respect to a cost function. The $K$-means algorithm is a heuristic method where each cluster is represented by the center of the cluster and the algorithm converges to stable centroids of clusters. It is the simplest and most used clustering analysis algorithm. It works by:

0) Set centroids points randomly  
1) Assign each object to the cluster of the nearest seed point measured with a specific distance metric
2) Compute new centroids points of the current partition 
3) GOTO step 1, stop when there is no more new assignment, so each clusters does not change
This algorithm has a computational complexity of $O(tKn)$ where n is the number of objects, K is the number of clusters, and t is the number of iterations

The problem with this algorithm is that it is sensitive to the initial seed points, and could fall into an unwanted local optimum. It also has the drawback of having to specify the number of clusters $K$ in advance, it can't handle (properly) noisy data and it is not suitable for clustering with non convex shapes. It is applicable only when the centroids are "definable"

## Choosing the initial centroids
The chance of selecting one centroid from each cluster is really small, considering clusters of the same size then the probability of this is:
$$
P = \dfrac{\#ways \, to \, select \, one \,centroid \, from \,each \, cluster}{\#ways \, to \, select \, K \, centroids} = \dfrac{K!n^K}{(Kn)^K} = \dfrac{K!}{K^K}
$$
which even for K = 10, the probability is 0.00036. Sometimes the centroids will readjust themselves, other times they wont.

This is an example of a good first centroid choice
![[Pasted image 20231215152241.png]]
While this is a bad example for the first centroid 
![[Pasted image 20231215152329.png]]
There are ways to mitigate this, such as:
- Using multiple runs, but the probability is not that much higher
- Use hierarchical clustering to determine the initial centroids
- Select more than $K$ initial centroids and then select the most widely separated ones, and apply some post processing to merge clusters together 

## K-Means limitations

### Differing sizes
![[Pasted image 20231215153001.png]]
Can be solved by using more k-means clusters and then merging them
![[Pasted image 20231215153146.png]]

### Differing density
![[Pasted image 20231215153024.png]]
Can be solved by using more k-means clusters and merging them
![[Pasted image 20231215153249.png]]

### Non globular shapes
![[Pasted image 20231215153049.png]]
Can be solved by using more k-means clusters and merging them
![[Pasted image 20231215153304.png]]

## K-means example
Suppose we have 4 kinds of medicines, each has two attributes (PH and weight index), our goal is to group those objects into K=2 groups of medicines. We start off with this data set:

| Medicine | Weight | pH-Index |
| --- | --- | --- |
| A | 1 | 1 |
| B | 2 | 1 |
| C | 4 | 3 |
| D | 5 | 4 |

```plot
x: [0, 6]
y: [0, 4.5]
width: 380
height: 320
xticks: [0, 1, 2, 3, 4, 5, 6]
yticks: [0, 0.5, 1, 1.5, 2, 2.5, 3, 3.5, 4, 4.5]
xlabel: "attribute 1 (X): weight index"
ylabel: "attribute 2 (Y): pH"
items:
  - vline: 1
    width: 0.8
  - vline: 2
    width: 0.8
  - vline: 3
    width: 0.8
  - vline: 4
    width: 0.8
  - vline: 5
    width: 0.8
  - vline: 6
    width: 0.8
  - hline: 0.5
    width: 0.8
  - hline: 1
    width: 0.8
  - hline: 1.5
    width: 0.8
  - hline: 2
    width: 0.8
  - hline: 2.5
    width: 0.8
  - hline: 3
    width: 0.8
  - hline: 3.5
    width: 0.8
  - hline: 4
    width: 0.8
  - hline: 4.5
    width: 0.8
  - point: [1, 1]   # A
    shape: diamond
    size: 5.5
    color: blue
  - point: [2, 1]   # B
    shape: diamond
    size: 5.5
    color: blue
  - point: [4, 3]   # C
    shape: diamond
    size: 5.5
    color: blue
  - point: [5, 4]   # D
    shape: diamond
    size: 5.5
    color: blue
  - text: "A"
    at: [1, 1.3]
  - text: "B"
    at: [2, 1.3]
  - text: "C"
    at: [3.75, 3.25]
  - text: "D"
    at: [4.75, 4.25]
```

1) Use initial seed points for partitioning 

**iteration 0**

```plot
x: [0, 6]
y: [0, 4.5]
width: 420
height: 310
xticks: [0, 1, 2, 3, 4, 5, 6]
yticks: [0, 0.5, 1, 1.5, 2, 2.5, 3, 3.5, 4, 4.5]
xlabel: "attribute 1 (X): weight index"
ylabel: "attribute 2 (Y): pH"
items:
  - vline: 1
    width: 0.8
  - vline: 2
    width: 0.8
  - vline: 3
    width: 0.8
  - vline: 4
    width: 0.8
  - vline: 5
    width: 0.8
  - vline: 6
    width: 0.8
  - hline: 0.5
    width: 0.8
  - hline: 1
    width: 0.8
  - hline: 1.5
    width: 0.8
  - hline: 2
    width: 0.8
  - hline: 2.5
    width: 0.8
  - hline: 3
    width: 0.8
  - hline: 3.5
    width: 0.8
  - hline: 4
    width: 0.8
  - hline: 4.5
    width: 0.8
  - point: [1, 1]   # A
    shape: diamond
    size: 5.5
    color: blue
  - point: [2, 1]   # B
    shape: diamond
    size: 5.5
    color: blue
  - point: [4, 3]   # C
    shape: diamond
    size: 5.5
    color: blue
  - point: [5, 4]   # D
    shape: diamond
    size: 5.5
    color: blue
  - point: [1, 1]
    shape: star
    size: 5
    color: red
  - point: [2, 1]
    shape: star
    size: 5
    color: red
  - text: "A"
    at: [1, 1.3]
  - text: "B"
    at: [2, 1.3]
  - text: "C"
    at: [3.75, 3.25]
  - text: "D"
    at: [4.75, 4.25]
```

$c_1 = A, c_2 = B$

$$
D^0 = \begin{bmatrix} 0 & 1 & 3.61 & \textcolor{red}{5} \\ 1 & 0 & 2.83 & \textcolor{red}{4.24} \end{bmatrix}
\quad
\begin{aligned}
c_1 &= (1,1) \quad \textit{group-1} \\
c_2 &= (2,1) \quad \textit{group-2}
\end{aligned}
$$

*Euclidean distance*

$$
\begin{matrix} A & B & C & D \end{matrix}
$$

$$
\begin{bmatrix} 1 & 2 & 4 & 5 \\ 1 & 1 & 3 & 4 \end{bmatrix}
\begin{matrix} X \\ Y \end{matrix}
$$

$$
\begin{aligned}
d(D, c_1) &= \sqrt{(5-1)^2 + (4-1)^2} = 5 \\
d(D, c_2) &= \sqrt{(5-2)^2 + (4-1)^2} = 4.24
\end{aligned}
$$

Assign each object to the cluster with the nearest seed point

2) Compute new centroids based off the current partitions

**iteration 1**

```plot
x: [0, 6]
y: [0, 4.5]
width: 420
height: 310
xticks: [0, 1, 2, 3, 4, 5, 6]
yticks: [0, 0.5, 1, 1.5, 2, 2.5, 3, 3.5, 4, 4.5]
xlabel: "attribute 1 (X): weight index"
ylabel: "attribute 2 (Y): pH"
items:
  - vline: 1
    width: 0.8
  - vline: 2
    width: 0.8
  - vline: 3
    width: 0.8
  - vline: 4
    width: 0.8
  - vline: 5
    width: 0.8
  - vline: 6
    width: 0.8
  - hline: 0.5
    width: 0.8
  - hline: 1
    width: 0.8
  - hline: 1.5
    width: 0.8
  - hline: 2
    width: 0.8
  - hline: 2.5
    width: 0.8
  - hline: 3
    width: 0.8
  - hline: 3.5
    width: 0.8
  - hline: 4
    width: 0.8
  - hline: 4.5
    width: 0.8
  - vline: 1.5
    color: purple
    width: 5
    dash: false
  - point: [1, 1]   # A
    shape: diamond
    size: 5.5
    color: blue
  - point: [2, 1]   # B
    shape: diamond
    size: 5.5
    color: blue
  - point: [4, 3]   # C
    shape: diamond
    size: 5.5
    color: blue
  - point: [5, 4]   # D
    shape: diamond
    size: 5.5
    color: blue
  - point: [1, 1]
    shape: star
    size: 5
    color: red
  - point: [3.67, 2.67]
    shape: star
    size: 5
    color: red
```

Knowing the members of each cluster, now we compute the new centroid of each group based on these new memberships.

$$
c_1 = (1,\ 1)
$$

$$
c_2 = \left(\dfrac{2+4+5}{3},\ \dfrac{1+3+4}{3}\right) = \left(\dfrac{11}{3},\ \dfrac{8}{3}\right)
$$

Now modify the new membership of items based off the new centroids 

**iteration 1**

```plot
x: [0, 6]
y: [0, 4.5]
width: 420
height: 310
xticks: [0, 1, 2, 3, 4, 5, 6]
yticks: [0, 0.5, 1, 1.5, 2, 2.5, 3, 3.5, 4, 4.5]
xlabel: "attribute 1 (X): weight index"
ylabel: "attribute 2 (Y): pH"
items:
  - vline: 1
    width: 0.8
  - vline: 2
    width: 0.8
  - vline: 3
    width: 0.8
  - vline: 4
    width: 0.8
  - vline: 5
    width: 0.8
  - vline: 6
    width: 0.8
  - hline: 0.5
    width: 0.8
  - hline: 1
    width: 0.8
  - hline: 1.5
    width: 0.8
  - hline: 2
    width: 0.8
  - hline: 2.5
    width: 0.8
  - hline: 3
    width: 0.8
  - hline: 3.5
    width: 0.8
  - hline: 4
    width: 0.8
  - hline: 4.5
    width: 0.8
  - vline: 1.5
    color: purple
    width: 5
    dash: false
  - point: [1, 1]   # A
    shape: diamond
    size: 5.5
    color: blue
  - point: [2, 1]   # B
    shape: diamond
    size: 5.5
    color: blue
  - point: [4, 3]   # C
    shape: diamond
    size: 5.5
    color: blue
  - point: [5, 4]   # D
    shape: diamond
    size: 5.5
    color: blue
  - point: [1, 1]
    shape: star
    size: 5
    color: red
  - point: [3.67, 2.67]
    shape: star
    size: 5
    color: red
  - text: "A"
    at: [0.78, 1.18]
  - text: "B"
    at: [2.25, 1.12]
  - text: "C"
    at: [4.28, 2.82]
  - text: "D"
    at: [5, 3.7]
  - text: "1"
    at: [1, 0.68]
    color: red
  - text: "2"
    at: [3.45, 2.38]
    color: red
```

Compute the distance of all objects to the new centroids

$$
D^1 = \begin{bmatrix} 0 & 1 & 3.61 & 5 \\ 3.14 & 2.36 & 0.47 & 1.89 \end{bmatrix}
\quad
\begin{aligned}
c_1 &= (1,1) \quad \textit{group-1} \\
c_2 &= \left(\tfrac{11}{3}, \tfrac{8}{3}\right) \quad \textit{group-2}
\end{aligned}
$$

$$
\begin{matrix} A & B & C & D \end{matrix}
$$

$$
\begin{bmatrix} 1 & 2 & 4 & 5 \\ 1 & 1 & 3 & 4 \end{bmatrix}
\begin{matrix} X \\ Y \end{matrix}
$$

Assign the membership to objects

$C_1 = ?$ $\qquad$ $C_2 = ?$

3) Repeat the first two steps until its convergence 

**iteration 2**

```plot
x: [0, 6]
y: [0, 4.5]
width: 420
height: 310
xticks: [0, 1, 2, 3, 4, 5, 6]
yticks: [0, 0.5, 1, 1.5, 2, 2.5, 3, 3.5, 4, 4.5]
xlabel: "attribute 1 (X): weight index"
ylabel: "attribute 2 (Y): pH"
items:
  - vline: 1
    width: 0.8
  - vline: 2
    width: 0.8
  - vline: 3
    width: 0.8
  - vline: 4
    width: 0.8
  - vline: 5
    width: 0.8
  - vline: 6
    width: 0.8
  - hline: 0.5
    width: 0.8
  - hline: 1
    width: 0.8
  - hline: 1.5
    width: 0.8
  - hline: 2
    width: 0.8
  - hline: 2.5
    width: 0.8
  - hline: 3
    width: 0.8
  - hline: 3.5
    width: 0.8
  - hline: 4
    width: 0.8
  - hline: 4.5
    width: 0.8
  - line: [[0.9, 4.15], [3.85, 0.4]]
    color: purple
    width: 5
  - point: [1, 1]   # A
    shape: diamond
    size: 5.5
    color: blue
  - point: [2, 1]   # B
    shape: diamond
    size: 5.5
    color: blue
  - point: [4, 3]   # C
    shape: diamond
    size: 5.5
    color: blue
  - point: [5, 4]   # D
    shape: diamond
    size: 5.5
    color: blue
  - point: [1.5, 1]
    shape: star
    size: 5
    color: red
  - point: [4.5, 3.5]
    shape: star
    size: 5
    color: red
  - text: "1"
    at: [1.6, 0.68]
    color: red
  - text: "2"
    at: [4.65, 3.2]
    color: red
```

Knowing the members of each cluster, now we compute the new centroid of each group based on these new memberships.

$$
c_1 = \left(\dfrac{1+2}{2},\ \dfrac{1+1}{2}\right) = \left(1\dfrac{1}{2},\ 1\right)
$$

$$
c_2 = \left(\dfrac{4+5}{2},\ \dfrac{3+4}{2}\right) = \left(4\dfrac{1}{2},\ 3\dfrac{1}{2}\right)
$$

**iteration 2**

```plot
x: [0, 6]
y: [0, 4.5]
width: 420
height: 310
xticks: [0, 1, 2, 3, 4, 5, 6]
yticks: [0, 0.5, 1, 1.5, 2, 2.5, 3, 3.5, 4, 4.5]
xlabel: "attribute 1 (X): weight index"
ylabel: "attribute 2 (Y): pH"
items:
  - vline: 1
    width: 0.8
  - vline: 2
    width: 0.8
  - vline: 3
    width: 0.8
  - vline: 4
    width: 0.8
  - vline: 5
    width: 0.8
  - vline: 6
    width: 0.8
  - hline: 0.5
    width: 0.8
  - hline: 1
    width: 0.8
  - hline: 1.5
    width: 0.8
  - hline: 2
    width: 0.8
  - hline: 2.5
    width: 0.8
  - hline: 3
    width: 0.8
  - hline: 3.5
    width: 0.8
  - hline: 4
    width: 0.8
  - hline: 4.5
    width: 0.8
  - line: [[0.9, 4.15], [3.85, 0.4]]
    color: purple
    width: 5
  - point: [1, 1]   # A
    shape: diamond
    size: 5.5
    color: blue
  - point: [2, 1]   # B
    shape: diamond
    size: 5.5
    color: blue
  - point: [4, 3]   # C
    shape: diamond
    size: 5.5
    color: blue
  - point: [5, 4]   # D
    shape: diamond
    size: 5.5
    color: blue
  - point: [1.5, 1]
    shape: star
    size: 5
    color: red
  - point: [4.5, 3.5]
    shape: star
    size: 5
    color: red
```

Compute the distance of all objects to the new centroids

$$
D^2 = \begin{bmatrix} 0.5 & 0.5 & 3.20 & 4.61 \\ 4.30 & 3.54 & 0.71 & 0.71 \end{bmatrix}
\quad
\begin{aligned}
c_1 &= \left(1\tfrac{1}{2}, 1\right) \quad \textit{group-1} \\
c_2 &= \left(4\tfrac{1}{2}, 3\tfrac{1}{2}\right) \quad \textit{group-2}
\end{aligned}
$$

$$
\begin{matrix} A & B & C & D \end{matrix}
$$

$$
\begin{bmatrix} 1 & 2 & 4 & 5 \\ 1 & 1 & 3 & 4 \end{bmatrix}
\begin{matrix} X \\ Y \end{matrix}
$$

Stop due to no new assignment. Membership in each cluster no longer change

## DB-Scan
[link to demo](https://www.naftaliharris.com/blog/visualizing-dbscan-clustering/)
It is a **Density Based** Clustering algorithm. It needs two parameters:
- $\epsilon$ to decide the size of the circle of each point whose nearby nodes are to be considered neighbors
- $MinNum$ which is the minimum number of points to consider a point as a $root$ point 
During the execution, points are labeled in one of three types:
1) **Core points**: those are the points which have at least $MinNum$ of points inside of it's $\epsilon$ radius 
2) **Boarder points**: those are nodes which have a core point as neighbor but doesn't have enough neighbors to surpass the $MinNum$ requirement
3) **Noise points**: are points that don't have any $\epsilon$ neighbors 

It executes by finding the first core points and then propagating the classification

```plot
x: [0, 397]
y: [-6, 255]
width: 397
aspect: equal
axes: false
items:
  - circle: [103, 174]
    r: 59
    color: blue
    width: 1
  - circle: [191, 112]
    r: 59
    color: red
    width: 1
  - circle: [147, 98]
    r: 59
    color: red
    width: 1
  - circle: [110, 84]
    r: 59
    color: red
    width: 1
  - circle: [150, 56]
    r: 59
    color: red
    width: 1
  - circle: [195, 74]
    r: 59
    color: red
    width: 1
  - circle: [237, 96]
    r: 59
    color: red
    width: 1
  - circle: [74, 66]
    r: 59
    color: orange
    width: 1
  - circle: [285, 96]
    r: 59
    color: orange
    width: 1
  - line: [[116, 86], [141, 96]]
    arrow: true
    width: 1.2
  - line: [[141, 96], [116, 86]]
    arrow: true
    width: 1.2
  - line: [[153, 100], [185, 110]]
    arrow: true
    width: 1.2
  - line: [[185, 110], [153, 100]]
    arrow: true
    width: 1.2
  - line: [[197, 110], [231, 98]]
    arrow: true
    width: 1.2
  - line: [[231, 98], [197, 110]]
    arrow: true
    width: 1.2
  - line: [[232, 93], [200, 77]]
    arrow: true
    width: 1.2
  - line: [[200, 77], [232, 93]]
    arrow: true
    width: 1.2
  - line: [[192, 106], [194, 80]]
    arrow: true
    width: 1.2
  - line: [[194, 80], [192, 106]]
    arrow: true
    width: 1.2
  - line: [[147, 92], [150, 62]]
    arrow: true
    width: 1.2
  - line: [[150, 62], [147, 92]]
    arrow: true
    width: 1.2
  - line: [[115, 81], [145, 59]]
    arrow: true
    width: 1.2
  - line: [[145, 59], [115, 81]]
    arrow: true
    width: 1.2
  - line: [[152, 95], [190, 77]]
    arrow: true
    width: 1.2
  - line: [[190, 77], [152, 95]]
    arrow: true
    width: 1.2
  - line: [[156, 58], [189, 72]]
    arrow: true
    width: 1.2
  - line: [[189, 72], [156, 58]]
    arrow: true
    width: 1.2
  - line: [[105, 81], [79, 69]]
    arrow: true
    width: 1.2
  - line: [[243, 96], [279, 96]]
    arrow: true
    width: 1.2
  - point: [103, 174]
    color: blue
  - point: [191, 112]
    color: red
  - point: [147, 98]
    color: red
  - point: [110, 84]
    color: red
  - point: [150, 56]
    color: red
  - point: [195, 74]
    color: red
  - point: [237, 96]
    color: red
  - point: [74, 66]
    color: orange
  - point: [285, 96]
    color: orange
  - text: N
    at: [103, 174]
    anchor: n
  - text: A
    at: [191, 112]
    anchor: ne
  - text: B
    at: [74, 66]
    anchor: s
  - text: C
    at: [285, 96]
    anchor: n
```

It has the advantage of:
- not requiring the number of $K$ clusters
- Can find any arbitrarily shaped clusters, even ones that are englobed by different clusters
- It is robust against outliers
- It is designed to be used in databases using R* trees

And disadvantages of:
- It is not deterministic, a border point which is reachable from more than one cluster could be part of either, depending in which order the data is processed
- The quality of the DBScan is dependent on the distance measure
- It is not very good at clustering data sets with large differences in density 
![[Pasted image 20231215155703.png]]

