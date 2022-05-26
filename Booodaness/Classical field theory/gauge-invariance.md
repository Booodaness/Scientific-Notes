# Gauge invariance
#gauge-invariance #gauge-fields #covariant-derivatives

## Gauge fields
A [[tensor-fields|tensor field]] is a system with infinite degrees of freedom along a countable number of orientations. The orientation is encoded in the indices of a tensor field, whereas a component's configuration is, in its precise value (which is in $\mathbb{R}$). Now, it is mathematically possible for to equip a tensor field with more degrees of freedom than are physical, thereby making some descriptions redundant.

For a given Lagrangian, let the [[principle-of-stationary-action#Euler-Lagrange equations|Euler-Lagrange equations]] obtained have a set of solution fields with components $\left\{ \phi^M_{\phantom{M} N a} \right\}$. Here, $a$ is an index which strictly labels the solution fields, and is *not* a spacelike index. Let us also have, for each solution $\phi^M_{\phantom{M} N a}$, an alternate description $\widetilde{\phi}^M_{\phantom{M} N a}$ which is physically equivalent.

Tensor fields with such structure are called gauge fields.

## Gauge transformations
A gauge transformation $\mathcal{J}$ maps a solution field for some given Euler-Lagrange equations, to another set of physically equivalent solutions:

$\mathcal{J} : \phi^M_{\phantom{M} N a} \mapsto \widetilde{\phi}^M_{\phantom{M} N a}$

The representation of such a transformation is the [[algebras-over-fields#J tensor|J tensor]]:

$$J^{M H b}_{\phantom{M H b} N Z a} = \frac{\partial \widetilde{\phi}^M_{\phantom{M} N a}}{\partial \phi^Z_{\phantom{M} H b}}$$

By the chain rule, derivatives of the fields transform as,

$$d \widetilde{\phi}^M_{\phantom{M} N a} = J^{M H b}_{\phantom{M H b} N Z a} d \phi^Z_{\phantom{Z} H b}$$

## Gauge invariance
Gauge invariance is the proposition that the equations of motion for a gauge field $\phi^{M \phantom{N} a}_{\phantom{M} N}$ must remain invariant under a gauge transformation. However, the Euler-Lagrange equations are not, which will require us to modify the form of the equations of motion and effectively, the Lagrangian.

$\displaystyle{ \nabla_\rho \widetilde{\pi}^{\rho \phantom{M} N}_{\phantom{\rho} M \phantom{N} a} = \nabla_\rho \left( \pi^{\rho \phantom{M} N}_{\phantom{\rho} M \phantom{N} a}  \right) }$


