# Postulates
#relational-spacetime #graphs #self-information #3-distance #born-rule

## Statements
1. We assume spacetime is in a quantum state $\left\lvert \Psi \left( t \right) \right\rangle$ as a superposition of energy eigenstates $\left\{ \left\lvert E \right\rangle \right\}$ where $t$ is a scalar parameterizing a timelike foliation of classical spacetime:

$$\left\lvert \Psi \left( t \right) \right\rangle = \sum_{E} \left\langle E \vert \Psi \left( t \right) \right\rangle \left\lvert E \right\rangle$$

The above variable will be called a *quantum spacetime* or simply *spacetime*. On the other hand, classical spacetime will be explicitly labelled as being 'classical'.

2. Each energy eigenstate is characterized by a set of $n$ labelled spacelike [[discrete-structures#Nodes|nodes]], $V = \left\{ x_i \vert i = 1, \dots, n \right\}$ and a certain *combination* of [[discrete-structures#Undirected edges|undirected edges]] $E = \left\{ \left\{ x_i, x_j \right\} \vert i \neq j; x_i, x_j \in V \right\}$. Henceforth, we will use the term '[[eigennetworks|eigennetwork]]' to refer to these energy eigenstates. 

In other words, each eigennetwork has the [[discrete-structures#Topological structure|topological structure]] of an [[discrete-structures#Graphical structure|undirected graph]] (i.e. with undirected edges). Moreover, the edges are *unordered* as we are only considering their combinations.
   
3. The number of nodes i.e. $n = \left\lvert V \right\rvert$ is conserved for a given spacetime i.e. $n$ is a quantum number.

4. Energy eigenstates identical under some relabelling of their nodes have the same energy eigenvalues i.e. such energy eigenstates are [[eigennetworks#Degeneracy|degenerate]].

5. The classical 3-distance between two nodes is the positive-definite symmetric relation $s : V \times V \to \mathbb{R}^+$ given by the combined self-information of all eigennetworks where the nodes are related under $E$,

$$s \left( \left\{ x_i, x_j \right\} \right) = - \log \left( \sum_{E \vert \left\{ x_i, x_j \right\} \in E} P \left( \left\lvert E \right\rangle \right) \right)$$

where $P \left( \left\lvert E \right\rangle \right)$ is the probability of the spacetime to be measured in the state $\left\lvert E \right\rangle$. Also, the base of the logarithm is arbitrary. Now, plugging in the Born rule, we have,

$$s \left( \left\{ x_i, x_j \right\}, t \right) = - \log \left( \sum_{E \vert \left\{ x_i, x_j \right\} \in E} \left\langle \Psi \left( t \right) \left\lvert E \right\rangle \left\langle E \right\rvert \Psi \left( t \right) \right\rangle \right)$$

## Motivation
1. Briefly put, quantum mechanics is an extremely universal framework, making it reasonable to assume spacetime emerges from some framework respecting quantum mechanics.

2. We implicitly assume that space, fundamentally a set of points updating over time, is discrete, thereby containing a countable set of points or nodes at any given time.

3. Suppose the number of nodes $n$ is *not* conserved for a spacetime. Then there is a set of nodes which are created/destroyed. Physical entities corresponding to these nodes' locations in spacetime also get created/destroyed, which conflicts with the law of conservation of mass and energy combined.  

4. Consider the Leibnizian or relational interpretation of spacetime, which roughly asserts that spacetime is not an independent structure, but emerges from the relationships between events. Moreover, events are physically compared in terms of rigid bodies, as elaborated by Albert Einstein viz. '*Definition of Simulteinity*', *On the Electrodynamics of Moving Bodies* (1905).

Now, as rigid bodies can be distinguished in our universe, it follows that we can distinguish between events and consequently *label* them. However, the precise manner of doing so, is arbitrary i.e. tautological. Therefore, if some eigennetworks (distinct as *states*) are topologically identical under this tautology, we have little or no reason to consider them to have different eigenvalues.

5. Loosely speaking, we imagine edges connecting nodes as an 'attraction' of sorts. The higher the likelihood of two nodes being connected, the closer they are in physical space. As this likelihood tends to $1$ for a given pair of nodes i.e. their linkage under $E$ tends to become certain, they nodes are interpreted to approach each other and in the limiting case, have the same position.

Likewise, if there is no i.e. $0$ probability of two nodes being related, they must be as far away from each other as possible i.e. $s = \infty$.

This notion is the same as that of the surprisal or self-information $I \left( P \right)$ of an event with probability $P$. From the relationships given, we find that a suitable definition for self-information is,

$$I \left( P \right) =  - \log \left( P \right)$$

where the (arbitrary) base of the logarithm decides the unit of information.

Note that since we assume the eigennetworks to have graphical structure (where no node is linked to itself as in hypergraphs) and distinguishable nodes to correspond to distinct locations only, we find that two nodes corresponding to the same position are essentially one and the same and hence not related under $E$. In other words, the limiting case $s=0$ is not physically realized. This is why we defined $s$ as a positive-definite quantity in the 5th postulate.
