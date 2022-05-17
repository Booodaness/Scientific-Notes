# Principle of stationary action

## Euler-Lagrange equations
Let us work in flat spacetime characterized by the Minkowski metric $\eta_{\alpha \beta}$ . Assume the Lagrangian density $\mathcal{L}$ of a field depends explicitly on only the [[tensors|tensor]] field $\phi^M_{\phantom{M} N}$ and its first covariant derivatives $\nabla_\rho \phi^M_{\phantom{M} N}$ .

Now, the action for the field can be written as,

$$
S = \int_V d^4 x \: \mathcal{L}
$$
By the principle of stationary action, any small variation of the action from an on-shell evolution leaves the action stationary,

$$
\delta S = \delta \int_V d^4 x \: \mathcal{L} =  \int_V d^4 x \: \delta \mathcal{L} = 0
$$
By the chain rule, let us expand $\delta \mathcal{L}$ as,

$\delta \mathcal{L} = \frac{\partial \mathcal{L}}{\partial \phi^M_{\phantom{M} N}} \delta \phi^M_{\phantom{M} N} + \frac{\partial \mathcal{L}}{\partial \left( \nabla_\rho \phi^M_{\phantom{M} N} \right)} \delta \left( \nabla_\rho \phi^M_{\phantom{M} N} \right)$

$= \frac{\partial \mathcal{L}}{\partial \phi^M_{\phantom{M} N}} \delta \phi^M_{\phantom{M} N} + \frac{\partial \mathcal{L}}{\partial \left( \nabla_\rho \phi^M_{\phantom{M} N} \right)} \nabla_\rho \left( \delta \phi^M_{\phantom{M} N} \right)$

According to the principle of stationary action,

$\displaystyle{ \int_V d^4 x \: \delta \mathcal{L} = 0 }$

$\displaystyle{ \int_V d^4 x \: \left( \frac{\partial \mathcal{L}}{\partial \phi^M_{\phantom{M} N}} \delta \phi^M_{\phantom{M} N} + \frac{\partial \mathcal{L}}{\partial \left( \nabla_\rho \phi^M_{\phantom{M} N} \right)} \nabla_\rho \left( \delta \phi^M_{\phantom{M} N} \right) \right) = 0 }$

$\displaystyle{ \int_V d^4 x \: \frac{\partial \mathcal{L}}{\partial \phi^M_{\phantom{M} N}} \delta \phi^M_{\phantom{M} N} + \int_V d^4 x \: \frac{\partial \mathcal{L}}{\partial \left( \nabla_\rho \phi^M_{\phantom{M} N} \right)} \nabla_\rho \left( \delta \phi^M_{\phantom{M} N} \right) = 0 }$

$\displaystyle{ \int_V d^4 x \: \frac{\partial \mathcal{L}}{\partial \phi^M_{\phantom{M} N}} \delta \phi^M_{\phantom{M} N} \\ + \frac{\partial \mathcal{L}}{\partial \left( \nabla_\rho \phi^M_{\phantom{M} N} \right)} \int_V d^4 x \: \nabla_\rho \left( \delta \phi^M_{\phantom{M} N} \right) \\ - \int_V d^4 x \: \left[ \nabla_\rho \frac{\partial \mathcal{L}}{\partial \left( \nabla_\rho \phi^M_{\phantom{M} N} \right)} \right] \left( \int d^4 x \: \nabla_\rho \left( \delta \phi^M_{\phantom{M} N} \right) \right) = 0 }$

By Stokes' theorem, the intermediate term in the above equation is a constant surface term. By setting it to zero,

$\displaystyle{ \int_V d^4 x \: \frac{\partial \mathcal{L}}{\partial \phi^M_{\phantom{M} N}} \delta \phi^M_{\phantom{M} N} - \int_V d^4 x \: \left[ \nabla_\rho \frac{\partial \mathcal{L}}{\partial \left( \nabla_\rho \phi^M_{\phantom{M} N} \right)} \right] \delta \phi^M_{\phantom{M} N} = 0 }$

$\displaystyle{ \int_V d^4 x \: \left\{ \frac{\partial \mathcal{L}}{\partial \phi^M_{\phantom{M} N}} - \left[ \nabla_\rho \frac{\partial \mathcal{L}}{\partial \left( \nabla_\rho \phi^M_{\phantom{M} N} \right)} \right] \delta \phi^M_{\phantom{M} N} \right\} = 0 }$

By the fundamental lemma of the calculus of variations, we are left with the Euler-Lagrange equations,
$$
\frac{\partial \mathcal{L}}{\partial \phi^M_{\phantom{M} N}} - \nabla_\rho \frac{\partial \mathcal{L}}{\partial \left( \nabla_\rho \phi^M_{\phantom{M} N} \right)} = 0
$$

## Canonical momentum tensor
The canonical momentum tensor for a field $\phi^M_{\phantom{M} N}$ may be defined as,

$$
\pi^{\rho \phantom{M} N}_{\phantom{\rho} M} = \frac{\partial \mathcal{L}}{\partial \left( \nabla_\rho \phi^M_{\phantom{M} N} \right)}
$$

The Euler-Lagrange equations thus read:

$$
\frac{\partial \mathcal{L}}{\partial \phi^M_{\phantom{M} N}} = \nabla_\rho \pi^{\rho \phantom{M} N}_{\phantom{\rho} M}
$$
