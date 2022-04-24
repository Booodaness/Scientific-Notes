# Linearity of classical field theory
#linearity

## Solutions as coordinates

Suppose we have a Lagrangian density $\mathcal{L}$ and a set of rank $\left( p, q \right)$ tensor fields $\left\{ \phi^M_{\phantom{M} N \left( i \right)} \right\}$ which independently obey the Euler-Lagrange equations for the given Lagrangian:

$$\frac{\partial \mathcal{L}}{\partial \phi^M_{\phantom{M} N \left( i \right)}} = \nabla_\mu \frac{\partial \mathcal{L}}{\partial \left( \nabla_\mu \phi^M_{\phantom{M} N \left( i \right)} \right)}$$

The parentheses around the index $i$ remind us that it is not a tensorial index, but a label for each field.

In the above equations, we may interpret the role of $\left\{ \phi^M_{\phantom{M} N \left( i \right)} \right\}$ as a set of independent coordinates respecting the said equations of motion. Therefore, we have,

$$\frac{\partial \phi^M_{\phantom{M} N \left( i \right)}}{\partial \phi^M_{\phantom{M} N \left( j \right)}} = \delta_{\left( i \right) \left( j \right)}$$

Now, we consider a new field $\phi^M_{\phantom{M} N}$ that is a function of the solution set $\left\{ \phi^M_{\phantom{M} N \left( i \right)} \right\}$,

$$\phi^M_{\phantom{M} N} = \phi^M_{\phantom{M} N} \left( \left\{ \phi^M_{\phantom{M} N \left( i \right)} \right\} \right)$$

Therefore, we can frame our problem as a twofold question:

1) When is the following true?

$$\frac{\partial \mathcal{L}}{\partial \phi^M_{\phantom{M} N}} = \nabla_\mu \frac{\partial \mathcal{L}}{\partial \left( \nabla_\mu \phi^M_{\phantom{M} N} \right)}$$

2) If the above is true, when is $\phi^M_{\phantom{M} N}$ permitted to be of the following form?

$$\phi^M_{\phantom{M} N} = \sum_i C_{\left( i \right)} \phi^M_{\phantom{M} N \left( i \right)}$$

Where $\left\{ C_{\left( i \right)} \right\}$ are constant scalars i.e. $\partial_\mu C_{\left( i \right)} = 0$.

## The 'solution'

To answer the two questions above, we will, respectively,

1. Expand the Euler-Lagrange equations for the new coordinate $\phi^M_{\phantom{M} N}$ and investigate when it is true.

2. Find the situation in which $\phi^M_{\phantom{M} N}$ reduces to a linear combination of the solutions $\left\{ \phi^M_{\phantom{M} N \left( i \right)} \right\}$.

The multivariable chain rule from calculus will be used throughout.

### Expanding the Euler-Lagrange equations

Let us begin by expanding the left hand side of the equations of motion $\frac{\partial \mathcal{L}}{\partial \phi^M_{\phantom{M} N}} = \nabla_\mu \frac{\partial \mathcal{L}}{\partial \left( \nabla_\mu \phi^M_{\phantom{M} N} \right)}$, in terms of the solutions $\left\{ \phi^M_{\phantom{M} N \left( i \right)} \right\}$,

$$\frac{\partial \mathcal{L}}{\partial \phi^M_{\phantom{M} N}} = \sum_i \frac{\partial \mathcal{L}}{\partial \phi^M_{\phantom{M} N \left( i \right)}} \frac{\partial \phi^M_{\phantom{M} N \left( i \right)}}{\partial \phi^M_{\phantom{M} N}}$$

$$= \sum_i \nabla_\mu \left( \frac{\partial \mathcal{L}}{\partial \left( \nabla_\mu \phi^M_{\phantom{M} N \left( i \right)} \right)} \right) \frac{\partial \phi^M_{\phantom{M} N \left( i \right)}}{\partial \phi^M_{\phantom{M} N}}$$

Now, expand $\frac{\partial \mathcal{L}}{\partial \left( \nabla_\mu \right) \phi^M_{\phantom{M} N}}$ and later apply the covariant derivative operator $\nabla_\mu$ for the right hand side of the equations of motion,

$$\frac{\partial \mathcal{L}}{\partial \left( \nabla_\mu \phi^M_{\phantom{M} N} \right)} = \sum_i \frac{\partial \mathcal{L}}{\partial \left( \nabla_\nu \phi^M_{\phantom{M} N \left( i \right)} \right)} \frac{\partial \left( \nabla_\nu \phi^M_{\phantom{M} N \left( i \right)} \right)}{\partial \left( \nabla_\mu \phi^M_{\phantom{M} N} \right)}$$

$$= \sum_i \frac{\partial \mathcal{L}}{\partial \left( \nabla_\nu \phi^M_{\phantom{M} N \left( i \right)} \right)} \left[ \frac{\partial \left( \nabla_\mu \phi^M_{\phantom{M} N} \right)}{\partial \left( \nabla_\nu \phi^M_{\phantom{M} N \left( i \right)} \right)} \right]^{-1}$$

$$= \sum_i \frac{\partial \mathcal{L}}{\partial \left( \nabla_\nu \phi^M_{\phantom{M} N \left( i \right)} \right)} \left[ \frac{\partial}{\partial \left( \nabla_\nu \phi^M_{\phantom{M} N \left( i \right)} \right)} \sum_j \frac{\partial \phi^M_{\phantom{M} N}}{\partial \phi^M_{\phantom{M} N \left( j \right)}} \nabla_\mu \phi^M_{\phantom{M} N \left( j \right)} \right]^{-1}$$

$$= \sum_i \frac{\partial \mathcal{L}}{\partial \left( \nabla_\nu \phi^M_{\phantom{M} N \left( i \right)} \right)} \left[ \sum_j \frac{\partial}{\partial \left( \nabla_\nu \phi^M_{\phantom{M} N \left( i \right)} \right)} \left( \frac{\partial \phi^M_{\phantom{M} N}}{\partial \phi^M_{\phantom{M} N \left( j \right)}} \nabla_\mu \phi^M_{\phantom{M} N \left( j \right)} \right) \right]^{-1}$$

$$= \sum_i \frac{\partial \mathcal{L}}{\partial \left( \nabla_\nu \phi^M_{\phantom{M} N \left( i \right)} \right)} \left[ \sum_j \delta_{\left( i \right) \left( j \right)} \frac{\partial}{\partial \left( \nabla_\nu \phi^M_{\phantom{M} N \left( i \right)} \right)} \left( \frac{\partial \phi^M_{\phantom{M} N}}{\partial \phi^M_{\phantom{M} N \left( j \right)}} \nabla_\mu \phi^M_{\phantom{M} N \left( j \right)} \right) \right]^{-1}$$

$$= \sum_i \frac{\partial \mathcal{L}}{\partial \left( \nabla_\nu \phi^M_{\phantom{M} N \left( i \right)} \right)} \left[ \frac{\partial}{\partial \left( \nabla_\nu \phi^M_{\phantom{M} N \left( i \right)} \right)} \left( \frac{\partial \phi^M_{\phantom{M} N}}{\partial \phi^M_{\phantom{M} N \left( i \right)}} \nabla_\mu \phi^M_{\phantom{M} N \left( i \right)} \right) \right]^{-1}$$

$$= \sum_i \frac{\partial \mathcal{L}}{\partial \left( \nabla_\nu \phi^M_{\phantom{M} N \left( i \right)} \right)} \left[ \frac{\partial \phi^M_{\phantom{M} N}}{\partial \phi^M_{\phantom{M} N \left( i \right)}} \frac{\partial \left( \nabla_\mu \phi^M_{\phantom{M} N \left( i \right)} \right)}{\partial \left( \nabla_\nu \phi^M_{\phantom{M} N \left( i \right)} \right)} \right]^{-1}$$

$$= \sum_i \frac{\partial \mathcal{L}}{\partial \left( \nabla_\nu \phi^M_{\phantom{M} N \left( i \right)} \right)} \left[ \frac{\partial \phi^M_{\phantom{M} N}}{\partial \phi^M_{\phantom{M} N \left( i \right)}} \delta^\nu_{\phantom{\nu} \mu} \right]^{-1}$$

$$= \sum_i \frac{\partial \mathcal{L}}{\partial \left( \nabla_\nu \phi^M_{\phantom{M} N \left( i \right)} \right)} \left( \frac{\partial \phi^M_{\phantom{M} N}}{\partial \phi^M_{\phantom{M} N \left( i \right)}} \right)^{-1} \delta^\mu_{\phantom{\mu} \nu}$$

$$= \sum_i \frac{\partial \mathcal{L}}{\partial \left( \nabla_\mu \phi^M_{\phantom{M} N \left( i \right)} \right)} \frac{\partial \phi^M_{\phantom{M} N \left( i \right)}}{\partial \phi^M_{\phantom{M} N}}$$

In the last step, we took the inverse of the covariant derivative $\frac{\partial \phi^M_{\phantom{M} N}}{\partial \phi^M_{\phantom{M} N \left( i \right)}}$ as simply its reciprocal. This is because for the independent set of functions $\left\{ \phi^M_{\phantom{M} N \left( i \right)} \right\}$, we have $\frac{\partial \phi^M_{\phantom{M} N}}{\partial \phi^M_{\phantom{M} N \left( i \right)}} = \frac{d \phi^M_{\phantom{M} N}}{d \phi^M_{\phantom{M} N \left( i \right)}}$, which is a difference quotient.

Finally, we differentiate the expression obtained in accordance with the right hand side of the Euler-Lagrange equations,

$$\nabla_\mu \frac{\partial \mathcal{L}}{\partial \left( \nabla_\mu \phi^M_{\phantom{M} N} \right)} = \nabla_\mu \sum_i \frac{\partial \mathcal{L}}{\partial \left( \nabla_\mu \phi^M_{\phantom{M} N \left( i \right)} \right)} \frac{\partial \phi^M_{\phantom{M} N \left( i \right)}}{\partial \phi^M_{\phantom{M} N}}$$

$$= \sum_i \nabla_\mu \left( \frac{\partial \mathcal{L}}{\partial \left( \nabla_\mu \phi^M_{\phantom{M} N \left( i \right)} \right)} \right) \frac{\partial \phi^M_{\phantom{M} N \left( i \right)}}{\partial \phi^M_{\phantom{M} N}} + \sum_i \frac{\partial \mathcal{L}}{\partial \left( \nabla_\mu \phi^M_{\phantom{M} N \left( i \right)} \right)} \nabla_\mu \frac{\partial \phi^M_{\phantom{M} N \left( i \right)}}{\partial \phi^M_{\phantom{M} N}}$$

Plugging in the expression for the first term in the previous expansion $\frac{\partial \mathcal{L}}{\partial \phi^M_{\phantom{M} N}}$,

$$\nabla_\mu \frac{\partial \mathcal{L}}{\partial \left( \nabla_\mu \phi^M_{\phantom{M} N} \right)} = \frac{\partial \mathcal{L}}{\partial \phi^M_{\phantom{M} N}} + \sum_i \frac{\partial \mathcal{L}}{\partial \left( \nabla_\mu \phi^M_{\phantom{M} N \left( i \right)} \right)} \nabla_\mu \frac{\partial \phi^M_{\phantom{M} N \left( i \right)}}{\partial \phi^M_{\phantom{M} N}}$$

Thus, we have obtained the equations of motion of a general coordinate $\phi^M_{\phantom{M} N} \left( \left\{ \phi^M_{\phantom{M} N \left( i \right)}\right\} \right)$ constructed from a set of solution fields. However, for $\phi^M_{\phantom{M} N}$ to be a valid solution, it must obey the Euler-Lagrange equations for the given Lagrangian, which requires us to set:

$$\sum_i \frac{\partial \mathcal{L}}{\partial \left( \nabla_\mu \phi^M_{\phantom{M} N \left( i \right)} \right)} \nabla_\mu \frac{\partial \phi^M_{\phantom{M} N \left( i \right)}}{\partial \phi^M_{\phantom{M} N}} = 0$$

Only if the above is true, can we say that $\phi^M_{\phantom{M} N}$ is a valid solution.

## Linearity

In the above constraint, note the appearance of canonical 4-momentum coordinates $\frac{\partial \mathcal{L}}{\partial \left( \nabla_\mu \phi^M_{\phantom{M} N \left( i \right)} \right)}$. In general, these are not zero. One possibility which ensures the constraint always holds good is:

$$\nabla_\mu \frac{\partial \phi^M_{\phantom{M} N \left( i \right)}}{\partial \phi^M_{\phantom{M} N}} = 0$$

From the reciprocal law for differentiation, we have,

$$\left( \frac{\partial \phi^M_{\phantom{M} N}}{\partial \phi^M_{\phantom{M} N \left( i \right)}} \right)^{-2} \nabla_\mu \frac{\partial \phi^M_{\phantom{M} N}}{\partial \phi^M_{\phantom{M} N \left( i \right)}} = 0$$

Again, generaly, $\frac{\partial \phi^M_{\phantom{M} N}}{\partial \phi^M_{\phantom{M} N \left( i \right)}} \neq 0$ so we have,

$$\nabla_\mu \frac{\partial \phi^M_{\phantom{M} N}}{\partial \phi^M_{\phantom{M} N \left( i \right)}} = 0$$

$$\frac{\partial \phi^M_{\phantom{M} N}}{\partial \phi^M_{\phantom{M} N \left( i \right)}} = C_{\left( i \right)} \: \vert \: \nabla_\mu C_{\left( i \right)} = 0$$

It is easily seen the most general situation where the above is true is,

$$\phi^M_{\phantom{M} N} = \sum_i C_{\left( i \right)} \phi^M_{\phantom{M} N \left( i \right)}$$

Therefore, if we want our constraint to be true for all solutions, they must be combined only in the above form i.e. as linear combinations.

## Conclusion

### Summary

Let us summarize the results by answering the original questions:

1) When does $\phi^M_{\phantom{M} N} \left( \left\{ \phi^M_{\phantom{M} N \left( i \right)} \right\} \right)$ obey the Euler-Lagrange equations? When the following constraint is obeyed:

$$\sum_i \frac{\partial \mathcal{L}}{\partial \left( \nabla_\mu \phi^M_{\phantom{M} N \left( i \right)} \right)} \nabla_\mu \frac{\partial \phi^M_{\phantom{M} N \left( i \right)}}{\partial \phi^M_{\phantom{M} N}} = 0$$

2) When is $\phi^M_{\phantom{M} N}$ a linear combination of the solutions $\left\{ \phi^M_{\phantom{M} N \left( i \right)} \right\}$? Well, for some unspecified $\left\{ \phi^M_{\phantom{M} N \left( i \right)} \right\}$, we could be in a stroke of luck and automatically have the above constraint to be true. However, if we want it to be true for arbitrary solutions, we must only look at linear combinations of these solutions to generate new solutions.

In other words, there are _always_ $\phi^M_{\phantom{M} N}$'s which are linear combinations of $\left\{ \phi^M_{\phantom{M} N \left( i \right)} \right\}$ (and an infinite number of them), although there could be other $\phi^M_{\phantom{M} N}$'s which are non-trivial, non-linear combinations of the solutions.

### New notation for solutions

In the notation for the solutions $\left\{ \phi^M_{\phantom{M} N \left( i \right)} \right\}$, we used parentheses around the index as doing otherwise would make them look dubiously like rank $\left( p, q + \text{dim} \left( i \right) \right)$ tensors. Then, we learnt that the most general way to mix these solutions into new ones is to combine them linearly,

$$\phi^M_{\phantom{M} N} = \sum_i C_{\left( i \right)} \phi^M_{\phantom{M} N \left( i \right)} \: \vert \: \nabla_\mu C_{\left( i \right)} = 0$$

Therefore, in the abstract sense, each solution $\phi^M_{\phantom{M} N \left( i \right)}$ is, in fact, behaving like a basis vector, with the coefficients $C_{\left( i \right)}$ forming the components! However, the index $i$ here is abstract and not related to the coordinates $x^\mu$ as in objects like $\nabla_\mu = \frac{\partial}{\partial x^\mu}$, so it is still better to retain the parentheses. However, we can apply the Einstein summation convention here as it need not be restricted to 'honest' indices:

$$\phi^M_{\phantom{M} N} = C^{\left( i \right)} \phi^M_{\phantom{M} N \left( i \right)}$$

where $C^{\left( i \right)} = \delta^{\left( i \right)}_{\phantom{\left( i \right)} \left( j \right)} C_{\left( i \right)}$.
