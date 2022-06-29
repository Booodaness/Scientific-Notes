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
Under a gauge transformation, conjugate momentum transforms in the manner,

$\displaystyle{ \widetilde{\pi}^{\rho \phantom{M} N a}_{\phantom{\rho} M} = \frac{\partial \mathcal{L}}{\partial \left( \nabla_\rho \widetilde{\phi}^M_{\phantom{M} N a} \right)} }$

$\displaystyle{ = \frac{\partial \left( \nabla_\sigma \phi^Z_{\phantom{Z} H b} \right)}{\partial \left( \nabla_\rho \widetilde{\phi}^M_{\phantom{M} N a} \right)} \frac{\partial \mathcal{L}}{\partial \left( \nabla_\sigma \phi^Z_{\phantom{Z} H b} \right)} }$

$\displaystyle{ = \frac{\partial}{\partial \left( \nabla_\rho \widetilde{\phi}^M_{\phantom{M} N a} \right)} \left( J_{\Theta H b}^{\phantom{\Theta H b} I Z c} \delta^\lambda_{\phantom{\lambda} \sigma} \nabla_\lambda \widetilde{\phi}^\Theta_{\phantom{\Theta} I c} \right) \frac{\partial \mathcal{L}}{\partial \left( \nabla_\sigma \phi^Z_{\phantom{Z} H b} \right)} }$

$\displaystyle{ = J_{\Theta H b}^{\phantom{\Theta H b} I Z c} \delta^\lambda_{\phantom{\lambda} \sigma} \delta^\rho_{\phantom{\rho} \lambda} \Delta^{\Theta N a}_{\phantom{\Theta N a} M I c} \frac{\partial \mathcal{L}}{\partial \left( \nabla_\sigma \phi^Z_{\phantom{Z} H b} \right)} }$

$\displaystyle{ = J_{\Theta H b}^{\phantom{\Theta H b} I Z c} \Delta^{\Theta N a}_{\phantom{\Theta N a} M I c} \frac{\partial \mathcal{L}}{\partial \left( \nabla_\rho \phi^Z_{\phantom{Z} H b} \right)} }$

$\displaystyle{ = J_{M H b}^{\phantom{M H b} N Z a} \pi^{\rho \phantom{Z} H b}_{\phantom{\rho} Z} }$

## Gauge invariance
### Failure of Euler-Lagrange equations
Gauge invariance is the proposition that the equations of motion for a gauge field $\phi^M_{\phantom{M} N a}$ must remain invariant under a gauge transformation. However, the Euler-Lagrange equations are not, which will require us to modify the form of the equations of motion and effectively, the Lagrangian.

We have,

$\nabla_\rho \widetilde{\pi}^{\rho \phantom{M} N a}_{\phantom{\rho} M} = \nabla_\rho \left( J_{M H b}^{\phantom{M H b} N Z a} \pi^{\rho \phantom{Z} H b}_{\phantom{\rho} Z} \right)$

$= J_{M H b}^{\phantom{M H b} N Z a} \nabla_\rho \pi^{\rho \phantom{Z} H b}_{\phantom{\rho} Z} + \pi^{\rho \phantom{Z} H b}_{\phantom{\rho} Z} \nabla_\rho J_{M H b}^{\phantom{M H b} N Z a}$

$\displaystyle{ = J^{\phantom{M H b} N Z a}_{M H b} \frac{\partial \mathcal{L}}{\partial \phi^Z_{\phantom{Z} H b}} + \pi^{\rho \phantom{Z} H b}_{\phantom{\rho} Z} \nabla_\rho J^{\phantom{M H b} N Z a}_{M H b} }$

$\displaystyle{ = \frac{\partial \mathcal{L}}{\partial \widetilde{\phi}^M_{\phantom{M} N a}} + \pi^{\rho \phantom{Z} H b}_{\phantom{\rho} Z} \nabla_\rho J^{\phantom{M H b} N Z a}_{M H b} }$

which do *not* resemble Euler-Lagrange equations. 

### Gauge covariant derivatives
Let us now write the above equations in a new way, while preserving as much of the structure of the Euler-Lagrange equations as possible:

$$D_\rho \widetilde{\pi}^{\rho \phantom{M} N a}_{\phantom{\rho} M} = \frac{\partial \mathcal{L}}{\partial \widetilde{\phi}^M_{\phantom{M} N a}}$$

where,

$D_\rho \widetilde{\pi}^{\rho \phantom{M} N a}_{\phantom{\rho} M} = \nabla_\rho \widetilde{\pi}^{\rho \phantom{M} N a}_{\phantom{\rho} M} - \pi^{\rho \phantom{Z} H b}_{\phantom{\rho} Z} \nabla_\rho J^{\phantom{M H b} N Z a}_{M H b}$

$= \nabla_\rho \widetilde{\pi}^{\rho \phantom{M} N a}_{\phantom{\rho} M} - \widetilde{\pi}^{\rho \phantom{\Theta} I c}_{\phantom{\rho} \Theta} J^{H \Theta b}_{\phantom{H \Theta b} Z I c} \nabla_\rho J^{\phantom{M H b} N Z a}_{M H b}$

Let us contract the coefficients of the conjugate momenta in the second term as,

$$G^{\Theta N a}_{\phantom{\Theta N a} \rho I M c} = J^{H \Theta b}_{\phantom{H \Theta b} Z I c} \nabla_\rho J^{\phantom{M H b} N Z a}_{M H b}$$

The derivative operator represented by $D_\rho$ is the gauge covariant derivative operator. Just like covariant derivatives are invariant under arbitrary coordinate transformations in differential geometry, gauge covariant derivatives are invariant under arbitrary gauge transformations (as well as coordinate transformations), evident from the gauge-invariant equation of motion $\displaystyle{ D_\rho \widetilde{\pi}^{\rho \phantom{M} N}_{\phantom{\rho} M \phantom{N} a} = \frac{\partial \mathcal{L}}{\partial \widetilde{\phi}^M_{\phantom{M} N a}} }$. Similarly, the coefficients $G^{\Theta N a}_{\phantom{\Theta N a} \rho I M c}$ are the gauge connection coefficients, which act as correction terms on covariant derivatives, much as connection coefficients (Christoffel symbols) are corrections terms on partial derivatives.

### Lagrangian
We have seen how gauge invariance necessitates the modification of a field's equations of motion, namely by replacing geometric covariant derivatives with (field-theoretic) covariant derivatives. This is effectively the same as modifying the original Lagrangian by making it gauge-invariant in a similar manner. We thus have the new Lagrangian,

$$\widehat{\mathcal{L}} = \mathcal{L} \left( \phi^M_{\phantom{M} N}, D_\rho \phi^M_{\phantom{M} N} \right)$$

Since the Lagrangian is gauge-invariant, it is no longer necessary to distinguish gauges in the manner $\phi^M_{\phantom{M} N}, \widetilde{\phi}^M_{\phantom{M} N}, \dots$ and so on. Now, how can we express $D_\rho \phi^M_{\phantom{M} N}$ for a general field $\phi$ in terms of the solution set, for which we defined covariant derivatives before? We simply borrow the chain rule from multivariable calculus, so that the covariant derivatives reduce sensibly to geometric covariant derivatives (which _do_ obey the chain rule) in suitable gauges:

$\displaystyle{ D_\rho \phi^M_{\phantom{M} N} = \left( D_\rho \phi^Z_{\phantom{Z} H a} \right) \frac{\partial \phi^M_{\phantom{M} N}}{\partial \phi^Z_{\phantom{Z} H a}} }$

$\displaystyle{ = \left( \nabla_\rho \phi^Z_{\phantom{Z} H a} - \phi^\Theta_{\phantom{\Theta} I c} G_{\Theta H a \rho}^{\phantom{\Theta H a \rho} I Z c} \right) \frac{\partial \phi^M_{\phantom{M} N}}{\partial \phi^Z_{\phantom{Z} H a}} }$

$\displaystyle{ = \nabla_\rho \phi^Z_{\phantom{Z} H a} \frac{\partial \phi^M_{\phantom{M} N}}{\partial \phi^Z_{\phantom{Z} H a}} - \phi^\Theta_{\phantom{\Theta} I c} G_{\Theta H a \rho}^{\phantom{\Theta H a \rho} I Z c} \frac{\partial \phi^M_{\phantom{M} N}}{\partial \phi^Z_{\phantom{Z} H a}} }$

$$D_\rho \phi^M_{\phantom{M} N} = \nabla_\rho \phi^M_{\phantom{M} N} - \phi^\Theta_{\phantom{\Theta} I c} G_{\Theta H a \rho}^{\phantom{\Theta H a \rho} I Z c} \frac{\partial \phi^M_{\phantom{M} N}}{\partial \phi^Z_{\phantom{Z} H a}}$$

