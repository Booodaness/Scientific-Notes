# Tensor field Lagrangian from symmetry considerations
#tensor-field-theory #energy-momentum-tensor #tensors 

## Energy-momentum tensor
Consider the following [[tensor-field-theory#Energy-momentum tensor|energy-momentum tensor]] for a scalar field,

$$
T^{\rho \sigma} = \pi^{\rho \phantom{M} N}_{\phantom{\rho} M} \nabla^\sigma \phi^M_{\phantom{M} N} - \eta^{\rho \sigma} \mathcal{L}
$$

The above tensor is a [[tensor-field-theory#Noether's theorem|conserved current]],

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

Recalling the [[tensor-field-theory#Canonical momentum tensor|definition of the canonical momentum tensor]],

$\frac{\partial \mathcal{L}}{\partial \left( \nabla_\rho \phi^M_{\phantom{M} N} \right)} = \nabla^\rho \phi^{\phantom{M} N}_{M}$

A little bit of trial and error, and motivation from the scalar field Lagrangian, shows that the above is possible only if the Lagrangian is of the form,

$$\mathcal{L} = \frac{1}{2} \nabla^\rho \phi^{\phantom{M} N}_{M} \nabla_\rho \phi^M_{\phantom{M} N} - V \left( \phi^M_{\phantom{M} N} \right)$$
## Equations of motion
The tensor field Lagrangian yields the following equations of motion, by substituting for the canonical momentum tensor in the [[tensor-field-theory#Euler-Lagrange equations|Euler-Lagrange equations]] $\nabla_\rho \pi^{\rho \phantom{M} N}_{\phantom{\rho} M} - \frac{\partial \mathcal{L}}{\partial \phi^M_{\phantom{M} N}} = 0$ ,

$$\nabla_\rho \nabla^\rho \phi^{\phantom{M} N}_{M} + \frac{\partial V}{\partial \phi^M_{\phantom{M} N}} = 0$$

This is analogous to the Klein-Gordon equation for a scalar field in a potential.