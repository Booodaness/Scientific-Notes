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

$\phi^M_{\phantom{M} N a} = \phi^{\mu_1 \dots \mu_p}_{\phantom{\mu_1 \dots \mu_p} \nu_1 \dots \nu_q a}$

### Gauge transformations
[[gauge-invariance#Gauge transformations|Gauge transformations]] are represented by Jacobians as,

![[Drawing 2022-06-25 18.01.02.excalidraw.svg]]
%%[[Drawing 2022-06-25 18.01.02.excalidraw.md|🖋 Edit in Excalidraw]]%%

$\displaystyle{J^{M H b}_{\phantom{M H b} N Z a} = \frac{\partial \widetilde{\phi}^M_{\phantom{M} N a}}{\partial \phi^Z_{\phantom{M} H b}}}$

The chain rule may now be shown as:

![[Drawing 2022-06-25 21.16.56.excalidraw.svg]]
%%[[Drawing 2022-06-25 21.16.56.excalidraw.md|🖋 Edit in Excalidraw]]%%

$\displaystyle{d \widetilde{\phi}^M_{\phantom{M} N a} = J^{M H b}_{\phantom{M H b} N Z a} d \phi^Z_{\phantom{Z} H b}}$

### Conjugate momentum
The tensor network diagram for [[principle-of-stationary-action#Conjugate momentum tensor|conjugate momentum]] assumes the form:

![[Drawing 2022-06-25 21.29.14.excalidraw.svg]]
%%[[Drawing 2022-06-25 21.29.14.excalidraw.md|🖋 Edit in Excalidraw]]%%

$\displaystyle{\pi^{\rho \phantom{M} N a}_{\phantom{\rho} M} = \frac{\partial \mathcal{L}}{\partial \left( \nabla_\rho \phi^M_{\phantom{M} N a} \right)}}$

Conjugate momentum transforms under gauge transformations in the manner,

![[Drawing 2022-06-25 23.06.01.excalidraw.svg]]
%%[[Drawing 2022-06-25 23.06.01.excalidraw.md|🖋 Edit in Excalidraw]]%%

$\widetilde{\pi}^{\rho \phantom{M} N a}_{\phantom{\rho} M} = J^{\phantom{M H b} N Z a}_{M H b} \pi^{\rho \phantom{Z} H b}_{\phantom{\rho} Z}$

### Euler-Lagrange equations
In an 'inertial' gauge, we have,

![[Drawing 2022-06-26 11.44.07.excalidraw.svg]]
%%[[Drawing 2022-06-26 11.44.07.excalidraw.md|🖋 Edit in Excalidraw]]%%

$\displaystyle{ \nabla_\rho \pi^{\rho \phantom{M} N a}_{\phantom{\rho} M} = \frac{\partial \mathcal{L}}{\partial \phi^M_{\phantom{M} N a}} }$

Switching to an arbitrary gauge, we find,

![[Drawing 2022-06-26 11.51.07.excalidraw.svg]]
%%[[Drawing 2022-06-26 11.51.07.excalidraw.md|🖋 Edit in Excalidraw]]%%

$\nabla_\rho \widetilde{\pi}^{\rho \phantom{M} N a}_{\phantom{\rho} M} = \nabla_\rho \left( J_{M H b}^{\phantom{M H b} N Z a} \pi^{\rho \phantom{Z} H b}_{\phantom{\rho} Z} \right)$

$= J_{M H b}^{\phantom{M H b} N Z a} \nabla_\rho \pi^{\rho \phantom{Z} H b}_{\phantom{\rho} Z} + \pi^{\rho \phantom{Z} H b}_{\phantom{\rho} Z} \nabla_\rho J_{M H b}^{\phantom{M H b} N Z a}$

Now,

![[Drawing 2022-06-28 17.41.56.excalidraw.svg]]
%%[[Drawing 2022-06-28 17.41.56.excalidraw.md|🖋 Edit in Excalidraw]]%%

$\displaystyle{ = J^{\phantom{M H b} N Z a}_{M H b} \frac{\partial \mathcal{L}}{\partial \phi^Z_{\phantom{Z} H b}} + \pi^{\rho \phantom{Z} H b}_{\phantom{\rho} Z} \nabla_\rho J^{\phantom{M H b} N Z a}_{M H b} }$

$\displaystyle{ = \frac{\partial \mathcal{L}}{\partial \widetilde{\phi}^M_{\phantom{M} N a}} + \pi^{\rho \phantom{Z} H b}_{\phantom{\rho} Z} \nabla_\rho J^{\phantom{M H b} N Z a}_{M H b} }$

### Gauge covariant derivatives
We represent gauge covariant derivatives as dotted covariant derivatives:

![[Drawing 2022-06-28 19.27.40.excalidraw.svg]]
%%[[Drawing 2022-06-28 19.27.40.excalidraw.md|🖋 Edit in Excalidraw]]%%

$\displaystyle{ D_\rho \widetilde{\pi}^{\rho \phantom{M} N a}_{\phantom{\rho} M} = \frac{\partial \mathcal{L}}{\partial \widetilde{\phi}^M_{\phantom{M} N a}} }$

Therefore, from the previous tensor network diagram,

![[Drawing 2022-06-28 19.30.31.excalidraw.svg]]
%%[[Drawing 2022-06-28 19.30.31.excalidraw.md|🖋 Edit in Excalidraw]]%%

$D_\rho \widetilde{\pi}^{\rho \phantom{M} N a}_{\phantom{\rho} M} = \nabla_\rho \widetilde{\pi}^{\rho \phantom{M} N a}_{\phantom{\rho} M} - \pi^{\rho \phantom{Z} H b}_{\phantom{\rho} Z} \nabla_\rho J^{\phantom{M H b} N Z a}_{M H b}$

$= \nabla_\rho \widetilde{\pi}^{\rho \phantom{M} N a}_{\phantom{\rho} M} - \widetilde{\pi}^{\rho \phantom{\Theta} I c}_{\phantom{\rho} \Theta} J^{H \Theta b}_{\phantom{H \Theta b} Z I c} \nabla_\rho J^{\phantom{M H b} N Z a}_{M H b}$

### Gauge connection coefficients
From the above tensor network diagram, let,

![[Drawing 2022-06-29 11.50.42.excalidraw.svg]]
%%[[Drawing 2022-06-29 11.50.42.excalidraw.md|🖋 Edit in Excalidraw]]%%

$G^{\Theta N a}_{\phantom{\Theta N a} \rho I M c} = J^{H \Theta b}_{\phantom{H \Theta b} Z I c} \nabla_\rho J^{\phantom{M H b} N Z a}_{M H b}$

Now, we can represent gauge covariant derivatives as,










