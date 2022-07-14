# Discrete structures
#graphs #foliations #posets #translations

## Graphs
### Nodes
The most fundamental building block of any space is some object associated with position in the space, a node. 'Interesting' structures are sets of multiple nodes $V = \left\{ x, y \dots \right\}$. We visually represent a set of nodes as a cluster of objects with pointlike structure.

Any subset of $V$ is called its region. A subset of a region is called a subregion, etc.

![[Drawing 2022-04-29 15.42.35.excalidraw.svg]]
%%[[Drawing 2022-04-29 15.42.35.excalidraw.md|🖋 Edit in Excalidraw]]%%

### Edges
#### Directed edges
Suppose we want to model a pairwise relationship $E$ between the nodes in a set $V$. If $x \: E \: y$, we say $\left( x, y \right)$ is an edge. The binary relationship $E$ is then simply a set of directed edges, $E = \left\{ \left( x, y \right) \vert x, y \in V \right\}$, represented as arrows linking the $x$'s to the $y$'s. 

![[Drawing 2022-04-29 15.51.21.excalidraw.svg]]
%%[[Drawing 2022-04-29 15.51.21.excalidraw.md|🖋 Edit in Excalidraw]]%%

#### Undirected edges
If $E$ is symmetric i.e. $x \: E \: y \implies y \: E \: x \: \forall \: x, y \in V$, we consider their linkage to be undirected, i.e. their edge is the unordered pair $\left\{ x, y \right\}$. Then, the relationship is of the form, $E = \left\{ \left\{ x, y \right\} \vert x, y \in V \right\}$. These are represented as lines connecting the $x$'s and the $y$'s.

From the above definition, it is clear that self-relationships $x \: E \: x$ would be problematic as the corresponding edge $\left\{ x \right\}$ has a different cardinality from other edges (generally $\text{dim} \left( V \times V \right) = 2$). Therefore, we exclude self-relationships from the study of graphs (they are nevertheless considered in the study of richer structures called hypergraphs). In other words, $E \cap I_V = \phi$ where $I : V \to V$ is the identity map on $V$ and $\phi = \left\{ \right\}$.

![[Drawing 2022-04-29 16.00.25.excalidraw.svg]]
%%[[Drawing 2022-04-29 16.00.25.excalidraw.md|🖋 Edit in Excalidraw]]%%

### Graphical structure
Given a set of nodes $V$ and a set of edges $E$ such that $E \cap I_V = \phi$, a graph $G$ is the ordered pair $G = \left( V, E \right)$. A graph is said to be directed if its edges are directed, and vice-versa if they are undirected.

## Topological spaces
### Neighbourhoods
#### Graphical motivation
The neighbourhood of a node $x$ is the set (of neighbours):

$$N \left( x \right) = \left\{ n \vert x \: E \: n \: \lor \: n \: E \: x \right\} \subseteq E$$

A neighbourhood *map* on the set of nodes $V$ is the map $N = \left\{ \left( x, N \left( x \right) \right) \right\}$. 

The neighbourhood of a region $X \subseteq V$ is defined as the union of neighbourhoods of all elements $x \in X$,

$$N \left( X \right) = \bigcup_{x \in X} N \left( x \right)$$

![[Drawing 2022-04-29 16.11.00.excalidraw.svg]]
%%[[Drawing 2022-04-29 16.11.00.excalidraw.md|🖋 Edit in Excalidraw]]%%

#### Axiomatic definition
Despite the previous definition of neighbourhood maps in terms of edges, the formal definition of neighbourhood maps is axiomatic. The reason for this is that topological spaces are extremely general and it still makes sense to apply the axioms in situations where graph theory cannot be. 

In this light, neighbourhood maps are defined to obey the so-called neighbourhood axioms, motivated to a fair degree by neighbourhoods in graph theory but more fundamental in nature:

1. Every region in $V$ is a subregion of its neighbourhood, 
$$X \subseteq N \left( X \right) \: \forall \: X \subseteq V$$
It follows that every node $x$ is its own neighbour, i.e. $x \in N \left( x \right) \: \forall \: x \in V$.

![[Drawing 2022-04-29 16.16.03.excalidraw.svg]]
%%[[Drawing 2022-04-29 16.16.03.excalidraw.md|🖋 Edit in Excalidraw]]%%

2. The neighbourhood of the union of regions is the union of the regions' neighbourhoods,

$$N \left( \bigcup_{i} X_i \right) = \bigcup_i N \left( X_i \right) \: \forall \: \left\{ X_i \vert X_i \subseteq V \right\}$$

![[Drawing 2022-04-29 16.27.47.excalidraw.svg]]
%%[[Drawing 2022-04-29 16.27.47.excalidraw.md|🖋 Edit in Excalidraw]]%%

3. The neighbourhood of the intersection of regions is a subregion of the intersection of the regions' neighbourhoods,

$$N \left( \bigcap_{i} X_i \right) \subseteq \bigcap_i N \left( X_i \right) \: \forall \: \left\{ X_i \vert X_i \subseteq V \right\}$$

![[Drawing 2022-04-29 16.27.58.excalidraw.svg]]
%%[[Drawing 2022-04-29 16.27.58.excalidraw.md|🖋 Edit in Excalidraw]]%%

4. Every region contains a subset whose neighbourhood is a subregion,

$$\exists \: X \subseteq Y \subseteq V \vert N \left( X \right) \subseteq Y$$

![[Drawing 2022-04-29 16.43.12.excalidraw.svg]]
%%[[Drawing 2022-04-29 16.43.12.excalidraw.md|🖋 Edit in Excalidraw]]%%

### Topological structure
$V$ is said to have topological structure if it is equipped with a neighbourhood map $N$ obeying the neighbourhood axioms. A topological space constructed from $V$ is in turn, the ordered pair, $\Gamma = \left( V, N \right)$. 

Note that the modern treatment of topological spaces constructs them from a different viewpoint, viz. open or closed sets. However, we will cover such details in notes dedicated to topology.

## Isomorphism
Two structures $X$ and $Y$ are said to be isomorphic ($X \equiv Y$) if there exists at least one bijection $X \to Y$ or alternatively, $Y \to X$. This means that each $x \in X$ corresponds to one and only one $y \in Y$ and vice-versa.

By definition, the cardinality of two isomorphic structures is the same, i.e. $X \equiv Y \implies \lvert X \rvert = \lvert Y \rvert$. However, the opposite statement need not be true.

## Partially ordered sets
### Foliations
Some structures can be decomposed into indexed families of mutually exclusive, isomorphic regions (i.e. equivalence classes). If the mapping from one subset to another is known, the entire structure can be generated from essentially a single subset.

Let us describe this idea mathematically. We want a set of subsets of the nodes, $F = \left\{ V_i \vert V_i \subseteq V \right\}$ (called the slicing) such that this set covers $V$ i.e. $\displaystyle{ V = \bigcup_i V_i }$ and $V_i \equiv V_j \: \forall \: i,j$. Each element of $F$ is called a foliation of $V$ under the isomorphism $\equiv$ .

![[Drawing 2022-04-29 19.53.10.excalidraw.svg]]
%%[[Drawing 2022-04-29 19.53.10.excalidraw.md|🖋 Edit in Excalidraw]]%%

### Partial ordering
Let us define an antisymmetric binary relation $\preceq$ called inclusive precedence such that,

$$x^- \preceq x \: \forall \: x^- \in V_{i-j}, x \in V_i, j \geq 0$$

Likewise, we define inclusive succession,

$$x^+ \succeq x \: \forall \: x^+ \in V_{i+j}, x \in V_i, j > 0$$

Now, we define a symmetric relation called simulteinity (but not necessarily in the sense of time, as we have not defined it yet) and its inverse,

$$x \models y \iff x \preceq y \: \land \: x \succeq y \implies x, y \in V_i$$
$$x \not{\models} y \iff x \: \lnot \models y$$

![[Drawing 2022-04-29 20.00.14.excalidraw.svg]]
%%[[Drawing 2022-04-29 20.00.14.excalidraw.md|🖋 Edit in Excalidraw]]%%


Lastly, we define the exclusive precedence and succession operators,

$$x \prec y \iff x \preceq y \: \land \: x \: \lnot \models y$$
$$x \succ y \iff x \succeq y \: \land \: x \: \lnot \models y$$

Antisymmetric relations of the kind we saw have the structure $R \: = \left\{ \left( x, y \right) \vert x \: R \: y \right\}$. A partially ordered set or poset $P$ is a set of nodes $V$ equipped with an antisymmetric (partially ordering) relation $R$, $P = \left( V, R \right)$. The term 'partial' is used to describe the ordering as there still exist subsets of $V$, namely its foliations, whose elements are unordered under $R$.

![[Drawing 2022-04-29 20.07.37.excalidraw.svg]]
%%[[Drawing 2022-04-29 20.07.37.excalidraw.md|🖋 Edit in Excalidraw]]%%

### Past, present and future
Again, not necessarily in the sense of time, we define the past, present and future of a node $x$ as the regions,

$$\text{past} \left( x \right) = \left\{ x^- \vert x^- \prec x \right\}$$
$$\text{pres} \left( x \right) = \left\{ x^0 \vert x^0 \models x \right\}$$
$$\text{fut} \left( x \right) = \left\{ x^+ \vert x^+ \succ x \right\}$$

It is clear that,

$$\text{past} \left( x \right) \cup \text{pres} \left( x \right) \cup \text{fut} \left( x \right) = V$$

From now, whenever we say $x^-$, we will mean some $x^- \in \text{past} \left( x \right)$ for the given $x$ and likewise for $x^0$ and $x^+$ (with respect to the above definitions). We now have,

$$\text{past} \left( x \right) = \text{past} \left( x^0 \right), \dots$$
$$\text{pres} \left( x \right) = \text{past} \left( x^+ \right) \textbackslash \text{past} \left( x \right) , \dots$$

![[Drawing 2022-04-29 20.39.10.excalidraw.svg]]
%%[[Drawing 2022-04-29 20.39.10.excalidraw.md|🖋 Edit in Excalidraw]]%%

We can also define the *immediate* past and future of a node, $\text{past}^-$ and $\text{fut}^+$ as the foliations immediately next to the present of the node, in its past and future respectively.

### Translations
#### Definition
A translation $T$ is an isomorphism on a poset such that,

$$T : \begin{cases} P \to P \\ x \mapsto x^\pm \: \forall \: x \in V \end{cases}$$

Every translation can be expressed as the composition of a number of *immediate* translations which map every node to some immediate past or future node. Furthermore, immediate translations are themselves the exclusive precedence $\prec$ and exclusive succession $\succ$ relations!

#### Dimensions
Suppose there are multiple distinct ways to foliate $V$ i.e. multiple slicings $F$. Each slicing $F$ has a unique immediate translation $T$ into the past or future defined by the foliation. The cardinality of the smallest set of such immediate translations (translation basis $\left\{ T_i \right\}$), spanning all possible immediate translations, is known as the dimension of the poset $P$ or $\text{dim} \left( P \right)$.

#### Operations
The composition of two or more translations is known as their addition. The inverse of an immediate translation into the past is the corresponding immediate translation into the future and vice-versa. The inverse of a composition of translations is the composition of the inverses of the translations. Lastly, the addition of the inverse of a translation is also known as its subtraction.

![[Drawing 2022-04-29 20.57.14.excalidraw.svg]]
%%[[Drawing 2022-04-29 20.57.14.excalidraw.md|🖋 Edit in Excalidraw]]%%
