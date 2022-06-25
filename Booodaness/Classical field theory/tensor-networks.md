# Tensor networks
#tensor-networks #tensors #contractions #graphs #gauge-invariance 

## Motivation
When we use the traditional index notation for manipulating [[tensors|tensors]], we are essentially keeping track of the following information:

1. The invariant objects concerned, or tensors, which are labelled using letters. e.g. $T$.
2. The [[tensors#Components|indices]] of the tensors, which are labelled using letters or numbered letters. e.g. $T^{ijk \dots}_{\phantom{ijk \dots} abc \dots}$, $T^{i_1 \dots i_p}_{\phantom{i_1 \dots i_p} j_1 \dots j_q}$.

The philosophy of tensor networks is to represent the above information, in terms of [[discrete-structures#Graphs|graphical]] objects. Namely,

1. Invariant objects are represented as [[discrete-structures#Nodes|nodes]], labelled by the same letter as the object.
2. Dummy indices are represented by edges joining pairs of nodes. 
3. Free indices are denoted by labelled edges which are attached to nodes only on one end. They may be upstairs or downstairs, represented positionally with respect to the nodes.

Additionally, we may encode properties of tensors and their indices in the shape and colour of their corresponding nodes and edges, respectively.

## Diagrams
### Gauge fields
A [[gauge-invariance#Gauge fields|gauge field]] $\phi^M_{\phantom{M} N a}$ is a tensor field $\phi^{\mu_1 \dots \mu_p}_{\phantom{\mu_1 \dots \mu_p} \nu_1 \dots \nu_q a}$, graphically represented as:

![[Drawing 2022-06-25 17.39.08.excalidraw.svg]]
%%[[Drawing 2022-06-25 17.39.08.excalidraw.md|🖋 Edit in Excalidraw]]%%

### Gauge transformations
Gauge transformations are represented by Jacobians,

![[Drawing 2022-06-25 18.01.02.excalidraw.svg]]
%%[[Drawing 2022-06-25 18.01.02.excalidraw.md|🖋 Edit in Excalidraw]]%%








