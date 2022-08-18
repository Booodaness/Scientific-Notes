# Tensor field Lagrangian from symmetry considerations
#symmetry #energy-momentum-tensor

## Energy-momentum tensor
Consider the following [[noether-theorem#Energy-momentum tensor|energy-momentum tensor]] for a tensor field,

$$
T^{\rho \sigma} = \pi^{\rho \phantom{M} N}_{\phantom{\rho} M} \nabla^\sigma \phi^M_{\phantom{M} N} - \eta^{\rho \sigma} \mathcal{L}
$$

The above tensor is a [[noether-theorem#Derivation|conserved current]],

$$\nabla_\rho T^{\rho \sigma} = 0$$

We can expand the left hand side of the above to express the equation as a continuity equation:

$$\nabla_0 T^{0 \sigma} + \nabla_i T^{i \sigma} = 0$$

The equations so far are telling us that $T^{\rho \sigma}$ is the flux of $\pi^{\rho \phantom{M} N}_{\phantom{\rho} M}$ through a surface of constant $x^\sigma$ . Furthermore, the timelike part of this flux, $T^{0 \sigma}$ is locally conserved, and if it is not, it is associated with a spacelike flux term $T^{i \sigma}$ . This helps us intuitively connect $T^{\rho \sigma}$ to the energy-momentum tensor for discrete particles.

The energy-momentum tensor for particles leads to an important general feature of any energy-momentum tensor, including one from field theory: it must be symmetric in both its indices, i.e.,

$$T^{\rho \sigma} = T^{\sigma \rho}$$

## Lagrangian
From the symmetry of the energy-momentum tensor, we have,

$\pi^{\rho \phantom{M} N}_{\phantom{\rho} M} \nabla^\sigma \phi^M_{\phantom{M} N} - \eta^{\rho \sigma} \mathcal{L} = \pi^{\sigma \phantom{M} N}_{\phantom{\sigma} M} \nabla^\rho \phi^M_{\phantom{M} N} - \eta^{\sigma \rho} \mathcal{L}$

But $\eta^{\rho \sigma} = \eta^{\sigma \rho}$ , therefore we have,

$\pi^{\rho \phantom{M} N}_{\phantom{\rho} M} \nabla^\sigma \phi^M_{\phantom{M} N} = \pi^{\sigma \phantom{M} N}_{\phantom{\sigma} M} \nabla^\rho \phi^M_{\phantom{M} N}$

For this to be true in general, we must have,

$$\pi^{\rho \phantom{M} N}_{\phantom{\rho} M} = \nabla^\rho \phi^{\phantom{M} N}_{M}$$

Recalling the [[principle-of-stationary-action#Conjugate momentum tensor|definition of the conjugate momentum tensor]],

$\frac{\partial \mathcal{L}}{\partial \left( \nabla_\rho \phi^M_{\phantom{M} N} \right)} = \nabla^\rho \phi^{\phantom{M} N}_{M}$

A little bit of trial and error, and motivation from the scalar field Lagrangian, shows that the above is possible only if the Lagrangian is of the form,

$$\mathcal{L} = \frac{1}{2} \nabla_\rho \phi^{\phantom{M} N}_{M} \nabla^\rho \phi^M_{\phantom{M} N} - V \left( \phi^M_{\phantom{M} N} \right)$$
## Equations of motion
The tensor field Lagrangian yields the following equations of motion, by substituting for the conjugate momentum tensor in the [[principle-of-stationary-action#Euler-Lagrange equations|Euler-Lagrange equations]] $\nabla_\rho \pi^{\rho \phantom{M} N}_{\phantom{\rho} M} - \frac{\partial \mathcal{L}}{\partial \phi^M_{\phantom{M} N}} = 0$ ,

$$\nabla_\rho \nabla^\rho \phi^{\phantom{M} N}_{M} + \frac{\partial V}{\partial \phi^M_{\phantom{M} N}} = 0$$

This is analogous to the Klein-Gordon equation for a scalar field in a potential.

## Gauge invariant treatment
Let us incorporate [[gauge-invariance|gauge invariance]] into the Klein-Gordon theory and see how it provides deep insights about the field theory (such as the structure of its perturbation theory) for free!

### Form of Lagrangian
Consider an indexed family of independent gauge fields, $\left\{ \phi^M_{\phantom{M} N a} \right\}$. 

Now, recall the original Klein-Gordon Lagrangian,

$$\mathcal{L} = \frac{1}{2} \nabla_\rho \phi^{\phantom{M} N}_{M} \nabla^\rho \phi^M_{\phantom{M} N} - V \left( \phi^M_{\phantom{M} N} \right)$$

The prescription for gauge invariance is to replace $\phi^M_{\phantom{M} N}$ with $\phi^M_{\phantom{M} N a}$ and $\nabla_\rho \phi^M_{\phantom{M} N a}$ with $D_\rho \phi^M_{\phantom{M} N a}$. Since the Lagrangian has no free indices, all indices in its explicit expression must be dummy indices. This severe restriction, with the fact that our new Lagrangian must reduce to the original one in [[linearity#From gauge invariance|suitable gauges]], motivates us to propose the new Lagrangian,

$$\mathcal{L} = \frac{1}{2} D_\rho \phi^{\phantom{M} N a}_{M} D^\rho \phi^M_{\phantom{M} N a} - V \left( \phi^M_{\phantom{M} N a} \right)$$

However, the above is still not quite right; we have a gauge scalar potential $V$ which depends on $\phi^M_{\phantom{M} N a}$ (which, as far as gauge transformations are concerned, does not look like a scalar i.e. it does not resemble a gauge scalar). The simplest gauge scalar we can construct from $\phi^M_{\phantom{M} N a}$, which depends on no other field, is $\phi^{\phantom{M} N a}_{M} \phi^M_{\phantom{M} N a}$. Therefore, we write,

$$\mathcal{L} = \frac{1}{2} D_\rho \phi^{\phantom{M} N a}_{M} D^\rho \phi^M_{\phantom{M} N a} - V \left( \phi^{\phantom{M} N a}_{M} \phi^M_{\phantom{M} N a} \right)$$

### Series expansion
We may expand the gauge scalar potential in the above Lagrangian as the following (including a mass term):

$$V \left( \phi^{\phantom{M} N a}_{M} \phi^M_{\phantom{M} N a} \right) = \frac{1}{2} m^2 \phi^{\phantom{M} N a}_{M} \phi^M_{\phantom{M} N a} + \sum_{n=2}^\infty \frac{1}{n!} g_{n} \left( \phi^{\phantom{M} N a}_{M} \phi^M_{\phantom{M} N a} \right)^n$$

where $\left\{ g_n \vert n = 1, 2, \dots \right\}$ is a set of coupling constants with the canonical condition $g_1 = \frac{1}{2} m^2$. Thus, the full Lagrangian is of the form,

$$\mathcal{L} = \frac{1}{2} D_\rho \phi^{\phantom{M} N a}_{M} D^\rho \phi^M_{\phantom{M} N a} - \frac{1}{2} m^2 \phi^{\phantom{M} N a}_{M} \phi^M_{\phantom{M} N a} - \sum_{n=2}^\infty \frac{1}{n!} g_{n} \left( \phi^{\phantom{M} N a}_{M} \phi^M_{\phantom{M} N a} \right)^n$$


