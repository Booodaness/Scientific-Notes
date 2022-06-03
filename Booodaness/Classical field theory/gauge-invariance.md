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
### Failure of Euler-Lagrange equations
Gauge invariance is the proposition that the equations of motion for a gauge field $\phi^{M \phantom{N} a}_{\phantom{M} N}$ must remain invariant under a gauge transformation. However, the Euler-Lagrange equations are not, which will require us to modify the form of the equations of motion and effectively, the Lagrangian.

We have,

$\nabla_\rho \widetilde{\pi}^{\rho \phantom{M} N}_{\phantom{\rho} M \phantom{N} a} = \nabla_\rho \left( J^{\phantom{M H b} N Z a}_{M H b} \pi^{\rho \phantom{M} N}_{\phantom{\rho} M \phantom{N} a}  \right)$

$= J^{\phantom{M H b} N Z a}_{M H b} \nabla_\rho \pi^{\rho \phantom{M} N}_{\phantom{\rho} M \phantom{N} a} + \pi^{\rho \phantom{M} N}_{\phantom{\rho} M \phantom{N} a} \nabla_\rho J^{\phantom{M H b} N Z a}_{M H b}$

$\displaystyle{ = J^{\phantom{M H b} N Z a}_{M H b} \frac{\partial \mathcal{L}}{\partial \phi^M_{\phantom{M} N a}} + \pi^{\rho \phantom{M} N}_{\phantom{\rho} M \phantom{N} a} \nabla_\rho J^{\phantom{M H b} N Z a}_{M H b} }$

$\displaystyle{ = \frac{\partial \mathcal{L}}{\partial \widetilde{\phi}^M_{\phantom{M} N a}} + \pi^{\rho \phantom{M} N}_{\phantom{\rho} M \phantom{N} a} \nabla_\rho J^{\phantom{M H b} N Z a}_{M H b} }$

which do *not* resemble Euler-Lagrange equations. 

### Covariant derivatives
Let us now write the above equations in a new way, while preserving as much of the structure of the Euler-Lagrange equations as possible:

$$D_\rho \widetilde{\pi}^{\rho \phantom{M} N}_{\phantom{\rho} M \phantom{N} a} = \frac{\partial \mathcal{L}}{\partial \widetilde{\phi}^M_{\phantom{M} N a}}$$

where,

$\displaystyle{ D_\rho \widetilde{\pi}^{\rho \phantom{M} N}_{\phantom{\rho} M \phantom{N} a} = \nabla_\rho \widetilde{\pi}^{\rho \phantom{M} N}_{\phantom{\rho} M \phantom{N} a} - \pi^{\rho \phantom{M} N}_{\phantom{\rho} M \phantom{N} a} \nabla_\rho J^{\phantom{M H b} N Z a}_{M H b} }$

$\displaystyle{ = \nabla_\rho \widetilde{\pi}^{\rho \phantom{M} N}_{\phantom{\rho} M \phantom{N} a} - \widetilde{\pi}^{\rho \phantom{M} N}_{\phantom{\rho} M \phantom{N} c} J^{M H c}_{\phantom{M H} N Z a} \nabla_\rho J^{\phantom{M H b} N Z a}_{M H b} }$

Let us contract the coefficients of the conjugate momenta in the second term as,

$$G^{c}_{\phantom{c} \rho b} = J^{M H c}_{\phantom{M H} N Z a} \nabla_\rho J^{\phantom{M H b} N Z a}_{M H b}$$

The derivative operator represented by $D_\rho$ is the field-theoretic covariant derivative operator. Just like geometric covariant derivatives are invariant under arbitrary coordinate transformations in differential geometry, covariant derivatives are invariant under arbitrary gauge transformations, evident from the gauge-invariant equation of motion $D_\rho \widetilde{\pi}^{\rho \phantom{M} N}_{\phantom{\rho} M \phantom{N} a} = \frac{\partial \mathcal{L}}{\partial \widetilde{\phi}^M_{\phantom{M} N a}}$. Similarly, the coefficients $G^{c}_{\phantom{c} \rho b}$ are the field-theoretic connection coefficients, which act as correction terms to regular geometric covariant derivatives, much as geometric connection coefficients (Christoffel symbols) are corrections terms to partial derivatives.

### Lagrangian
We have seen how gauge invariance necessitates the modification of a field's equations of motion, namely by replacing geometric covariant derivatives with (field-theoretic) covariant derivatives. This is effectively the same as modifying the original Lagrangian by making it gauge-invariant in a similar manner. We thus have the new Lagrangian,

$$\widehat{\mathcal{L}} = \mathcal{L} \left( \phi^M_{\phantom{M} N}, D_\rho \phi^M_{\phantom{M} N} \right)$$

Since the Lagrangian is gauge-invariant, it is no longer necessary to distinguish gauges in the manner $\phi^M_{\phantom{M} N}, \widetilde{\phi}^M_{\phantom{M} N}, \dots$ and so on. Now, how can we express $D_\rho \phi^M_{\phantom{M} N}$ for a general field $\phi$ in terms of the solution set, for which we defined covariant derivatives before? We simply borrow the chain rule from multivariable calculus, so that the covariant derivatives reduce sensibly to geometric covariant derivatives (which _do_ obey the chain rule) in suitable gauges:

$\displaystyle{ D_\rho \phi^M_{\phantom{M} N} = \left( D_\rho \phi^M_{\phantom{M} N a} \right) \frac{\partial \phi^M_{\phantom{M} N}}{\partial \phi^M_{\phantom{M} N a}} }$

$\displaystyle{ = \left( \nabla_\rho \phi^M_{\phantom{M} N a} - \phi^M_{\phantom{M} N b} G^b_{\phantom{b} \rho a} \right) \frac{\partial \phi^M_{\phantom{M} N}}{\partial \phi^M_{\phantom{M} N a}} }$

$\displaystyle{ = \nabla_\rho \phi^M_{\phantom{M} N}  - \phi^M_{\phantom{M} N b} G^b_{\phantom{b} \rho a} \frac{\partial \phi^M_{\phantom{M} N}}{\partial \phi^M_{\phantom{M} N a}} }$

$$D_\rho \phi^M_{\phantom{M} N} = \nabla_\rho \phi^M_{\phantom{M} N}  - \phi^M_{\phantom{M} N b} G^b_{\phantom{b} \rho a} \frac{\partial \phi^M_{\phantom{M} N}}{\partial \phi^M_{\phantom{M} N a}}$$

