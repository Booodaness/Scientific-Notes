# Tensor field theory

#tensor-field-theory #action-principle #Noether-theorem #energy-momentum-tensor #generators

## Tuple index notation

To make the tensor notation a little less messy, let us use the tuple index notation, where tuples of indices are replaced by their capital letter. For example, $\mu_1 \dots \mu_p$ becomes $M$ and $\nu_1 \dots \nu_q$ becomes $N$ .

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

## Noether's theorem

Suppose we infinitesimally transform spacetime and consider its variation to first-order,

$x^\sigma = x^\sigma + \epsilon X^\sigma$

where $\epsilon$ is an arbitrarily small parameter and $X^\sigma$ is some vector field, also called the generator of the above transformation. The variation in the field is,

$\delta \phi^M_{\phantom{M} N} = \left( \nabla_\rho \phi^M_{\phantom{M} N} \right) \delta x^\rho$

$= \epsilon \left( \nabla_\rho \phi^M_{\phantom{M} N} \right) X^\rho$

$= \epsilon \: \nabla_{\pmb{X}} \phi^M_{\phantom{M} N}$

The generator of the field is therefore,

$\Phi^M_{\phantom{M} N} = \frac{\delta \phi^M_{\phantom{M} N}}{\epsilon} = \nabla_{\pmb{X}} \phi^M_{\phantom{M} N}$

Now, the variation in the Lagrangian is,

$\delta \mathcal{L} = \frac{\partial \mathcal{L}}{\partial \phi^M_{\phantom{M} N}} \delta \phi^M_{\phantom{M} N} + \frac{\partial \mathcal{L}}{\partial \left( \nabla_\rho \phi^M_{\phantom{M} N} \right)} \nabla_\rho \left( \delta \phi^M_{\phantom{M} N} \right)$

Using the Euler-Lagrange equations and the generator of the field,

$\delta \mathcal{L} = \epsilon \left\{ \left( \nabla_\rho \pi^{\rho \phantom{M} N}_{\phantom{\rho} M} \right) \Phi^M_{\phantom{M} N} + \pi^{\rho \phantom{M} N}_{\phantom{\rho} M} \nabla_\rho \Phi^M_{\phantom{M} N} \right\}$

$= \epsilon \: \nabla_\rho \left( \pi^{\rho \phantom{M} N}_{\phantom{\rho} M} \Phi^M_{\phantom{M} N} \right)$

But,

$\delta \mathcal{L} = \delta x^\rho \nabla_\rho \mathcal{L}$

$\epsilon \: X^\rho \nabla_\rho \mathcal{L}$

$= \epsilon \left[ \nabla_\rho \left( X^\rho \mathcal{L} \right) - \mathcal{L} \: \nabla_\rho X^\rho \right]$

Therefore,

$\nabla_\rho \left( \pi^{\rho \phantom{M} N}_{\phantom{\rho} M} \Phi^M_{\phantom{M} N} \right) - \nabla_\rho \left( X^\rho \mathcal{L} \right) + \mathcal{L} \: \nabla_\rho X^\rho = 0$

$\nabla_\rho \left( \pi^{\rho \phantom{M} N}_{\phantom{\rho} M} \Phi^M_{\phantom{M} N} - X^\rho \mathcal{L} \right) + \mathcal{L} \: \nabla_\rho X^\rho = 0$

Let us now integrate the above over a region of spacetime,

$\displaystyle{ \int_V d^4 x \: \left[ \nabla_\rho \left( \pi^{\rho \phantom{M} N}_{\phantom{\rho} M} \Phi^M_{\phantom{M} N} - X^\rho \mathcal{L} \right) \right] + \int_V d^4 x \: \left( \mathcal{L} \: \nabla_\rho X^\rho \right) = 0 }$

By the 4-dimensional divergence theorem, the second term is a constant surface term, and we can set,

$\displaystyle{ \int_V d^4 x \: \left[ \nabla_\rho \left( \pi^{\rho \phantom{M} N}_{\phantom{\rho} M} \Phi^M_{\phantom{M} N} - X^\rho \mathcal{L} \right) \right] = 0 }$

Which means,

$\nabla_\rho \left( \pi^{\rho \phantom{M} N}_{\phantom{\rho} M} \Phi^M_{\phantom{M} N} - X^\rho \mathcal{L} \right) = 0$

We have thus found a conserved current for the transformation concerned:
$$
\begin{align} 
j^\rho & = \pi^{\rho \phantom{M} N}_{\phantom{\rho} M} \Phi^M_{\phantom{M} N} - X^\rho \mathcal{L} \\ 
\nabla_\rho j^\rho & = 0 
\end{align}
$$

## Energy-momentum tensor

The energy-momentum tensor is the conserved current generated by symmetry of physical laws under infinitesimal translations in space. An infinitesimal translation of space in the direction of a basis vector $\pmb{e}_\sigma$ can be written as:

$x^\rho \pmb{e}_\rho \to x^\rho \pmb{e}_\rho + \epsilon \: \pmb{e}_\rho$

Or in the component form,

$x^\rho \to x^\rho + \epsilon \: \delta^\rho_{\phantom{\rho} \sigma}$

Therefore, the generator of translations is $X^\rho = \delta^\rho_{\phantom{\rho} \sigma}$ . The generator of the field is given by,

$\Phi^M_{\phantom{M} N} = \nabla_{\pmb{e}_\sigma} \phi^M_{\phantom{M} N}$

$= \nabla_\sigma \phi^M_{\phantom{M} N}$

Plugging these into the conserved current in Noether's theorem, we get,
$$
j^\rho_{\phantom{\rho} \sigma} = \pi^{\rho \phantom{M} N}_{\phantom{\rho} M} \nabla_\sigma \phi^M_{\phantom{M} N} - \delta^\rho_{\phantom{\rho} \sigma} \mathcal{L}
$$
with the set of equations,
$$
\nabla_\rho j^\rho_{\phantom{\rho} \sigma} = 0
$$
We can raise/lower indices in $j^\rho_{\phantom{\rho} \sigma}$ to express it as the standard energy-momentum tensor:
$$
T^{\rho \sigma} = \pi^{\rho \phantom{M} N}_{\phantom{\rho} M} \nabla^\sigma \phi^M_{\phantom{M} N} - \eta^{\rho \sigma} \mathcal{L}
$$

where $\nabla^\sigma = g^{\sigma \lambda} \nabla_\lambda$ .

We will derive the general form of a 'realistic' Lagrangian in [[tensor-field-lagrangian-symmetry|Tensor field Lagrangian from symmetry considerations]].

## Generators and algebras

Suppose a transformation of spacetime is represented by a Jacobian $J^{\rho}_{\phantom{\rho} \sigma}$ , parameterized by a vector $\psi^\lambda$ . An infinitesimal transformation can then be constructed as,

$x^\rho \to x^\rho + J^{\rho}_{\phantom{\rho} \sigma} \left( \epsilon \: \psi^\lambda \right)$

Assuming $\psi^\lambda$ is constrained to contain the components of $J^{\rho}_{\phantom{\rho} \sigma}$ , we can use the fact that scaling the components $\psi^\lambda$ also scales $J^{\rho}_{\phantom{\rho} \sigma}$ to assert,

$x^\rho \to x^\rho + \epsilon \: J^{\rho}_{\phantom{\rho} \sigma} \left( \psi^\lambda \right)$

Therefore, the generator of such a transformation can be written as:
$$
X^\rho = J^{\rho}_{\phantom{\rho} \sigma} \left( \psi^\lambda \right)
$$
But, a Jacobian linearly parameterized by a vector must be a contraction of the form,

$J^{\rho}_{\phantom{\rho} \sigma} \left( \psi^\lambda \right) = \psi^\lambda B^\rho_{\phantom{\rho} \lambda \sigma}$
$$
\therefore X^\rho = \psi^\lambda B^\rho_{\phantom{\rho} \lambda \sigma}
$$
By the definition of tensors as multilinear maps, $B^\rho_{\phantom{\rho} \lambda \sigma}​$ are the components of a [[bilinear-products|bilinear product]], i.e.,

$\pmb{\mathcal{B}} \left( \pmb{e}_\lambda , \pmb{e}_\sigma \right) = B^\rho_{\phantom{\rho} \lambda \sigma} \pmb{e}_\rho$

The ordered pair $\left( \pmb{\mathcal{B}}, \pmb{\psi} \right)$ where $\pmb{\psi}$ is a variable parameterizing a vector space, generates an [[algebras|algebra]] on the vector space.

We also have the reverse scenario where an algebra over a vector space corresponds to a generator, yielding the Noether current:
$$
j^\rho_{\phantom{\rho} \sigma} = \psi^\lambda \left( B^\xi_{\phantom{\xi} \lambda \sigma} \pi^{\rho \phantom{M} N}_{\phantom{\rho} M} \nabla_\xi \phi^M_{\phantom{M} N} - B^\rho_{\phantom{\rho} \lambda \sigma} \mathcal{L} \right)
$$


