# Linearity of classical field theory
#linearity

## Solutions as coordinates
Suppose we have a Lagrangian density $\mathcal{L}$ and a set of rank $\left( p, q \right)$ [[principle-of-stationary-action|tensor fields]] $\left\{ \phi^M_{\phantom{M} N \left( i \right)} \right\}$ which independently obey the [[principle-of-stationary-action#Euler-Lagrange equations|Euler-Lagrange equations]] for the given Lagrangian:

$$\frac{\partial \mathcal{L}}{\partial \phi^M_{\phantom{M} N \left( i \right)}} = \nabla_\mu \frac{\partial \mathcal{L}}{\partial \left( \nabla_\mu \phi^M_{\phantom{M} N \left( i \right)} \right)}$$

The parentheses around the index $i$ remind us that it is not a tensorial index, but a label for each field.

In the above equations, we may interpret the role of $\left\{ \phi^M_{\phantom{M} N \left( i \right)} \right\}$ as a set of independent coordinates respecting the said equations of motion. Therefore, we have,

$$\frac{\partial \phi^M_{\phantom{M} N \left( i \right)}}{\partial \phi^M_{\phantom{M} N \left( j \right)}} = \delta_{\left( i \right) \left( j \right)}$$

Now, we consider a new field $\phi^M_{\phantom{M} N}$ that is a function of the solution set $\left\{ \phi^M_{\phantom{M} N \left( i \right)} \right\}$,

$$\phi^M_{\phantom{M} N} = \phi^M_{\phantom{M} N} \left( \left\{ \phi^M_{\phantom{M} N \left( i \right)} \right\} \right)$$

Now, let us check when the Euler-Lagrange equations are satisfied for the new coordinate $\phi^M_{\phantom{M} N}$,

$$\frac{\partial \mathcal{L}}{\partial \phi^M_{\phantom{M} N}} = \nabla_\mu \frac{\partial \mathcal{L}}{\partial \left( \nabla_\mu \phi^M_{\phantom{M} N} \right)}$$

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

In the above constraint, note the appearance of [[principle-of-stationary-action#Canonical momentum tensor|canonical 4-momentum]] coordinates $\frac{\partial \mathcal{L}}{\partial \left( \nabla_\mu \phi^M_{\phantom{M} N \left( i \right)} \right)}$. In general, these are not zero. One possibility which ensures the constraint always holds good is:

$$\nabla_\mu \frac{\partial \phi^M_{\phantom{M} N \left( i \right)}}{\partial \phi^M_{\phantom{M} N}} = 0$$

From the reciprocal law for differentiation, we have,

$$\left( \frac{\partial \phi^M_{\phantom{M} N}}{\partial \phi^M_{\phantom{M} N \left( i \right)}} \right)^{-2} \nabla_\mu \frac{\partial \phi^M_{\phantom{M} N}}{\partial \phi^M_{\phantom{M} N \left( i \right)}} = 0$$

Again, generaly, $\frac{\partial \phi^M_{\phantom{M} N}}{\partial \phi^M_{\phantom{M} N \left( i \right)}} \neq 0$ so we have,

$$\nabla_\mu \frac{\partial \phi^M_{\phantom{M} N}}{\partial \phi^M_{\phantom{M} N \left( i \right)}} = 0$$

$$\frac{\partial \phi^M_{\phantom{M} N}}{\partial \phi^M_{\phantom{M} N \left( i \right)}} = C_{\left( i \right)} \: \vert \: \nabla_\mu C_{\left( i \right)} = 0$$

It is easily seen the most general situation where the above is true is,

$$\phi^M_{\phantom{M} N} = \sum_i C_{\left( i \right)} \phi^M_{\phantom{M} N \left( i \right)}$$

Therefore, if we want our constraint to be true for all solutions, they must be combined only in the above form i.e. as linear combinations.

# Einstein notation for solutions
In the notation for the solutions $\left\{ \phi^M_{\phantom{M} N \left( i \right)} \right\}$, we used parentheses around the index as doing otherwise would make them look dubiously like rank $\left( p, q + \text{dim} \left( i \right) \right)$ tensors. Then, we learnt that the most general way to mix these solutions into new ones is to combine them linearly,

$$\phi^M_{\phantom{M} N} = \sum_i C_{\left( i \right)} \phi^M_{\phantom{M} N \left( i \right)} \: \vert \: \nabla_\mu C_{\left( i \right)} = 0$$

Therefore, in the abstract sense, each solution $\phi^M_{\phantom{M} N \left( i \right)}$ is, in fact, behaving like a basis vector, with the coefficients $C_{\left( i \right)}$ forming the components. However, the index $i$ here is abstract and not related to the coordinates $x^\mu$ as in objects like $\nabla_\mu = \frac{\partial}{\partial x^\mu}$, so it is still better to retain the parentheses. However, we can apply the Einstein summation convention here as it need not be restricted to 'honest' indices:

$$\phi^M_{\phantom{M} N} = C^{\left( i \right)} \phi^M_{\phantom{M} N \left( i \right)}$$

where $C^{\left( i \right)} = \delta^{\left( i \right) \left( j \right)} C_{\left( i \right)}$.

The application of the Einstein summation convention here is further justified by the fact that in the context of our derivations, upper and lower $\left( i \right)$ indices have repeatedly appeared along with the summation operation $\sum \limits_{i}$. For example,

$$\nabla_\mu \frac{\partial \mathcal{L}}{\partial \left( \nabla_\mu \phi^M_{\phantom{M} N} \right)} = \frac{\partial \mathcal{L}}{\partial \phi^M_{\phantom{M} N}} + \sum_i \frac{\partial \mathcal{L}}{\partial \left( \nabla_\mu \phi^M_{\phantom{M} N \left( i \right)} \right)} \nabla_\mu \frac{\partial \phi^M_{\phantom{M} N \left( i \right)}}{\partial \phi^M_{\phantom{M} N}}$$

Hence, the summation symbol becomes redundant and we can write:

$$\nabla_\mu \frac{\partial \mathcal{L}}{\partial \left( \nabla_\mu \phi^M_{\phantom{M} N} \right)} = \frac{\partial \mathcal{L}}{\partial \phi^M_{\phantom{M} N}} + \frac{\partial \mathcal{L}}{\partial \left( \nabla_\mu \phi^M_{\phantom{M} N \left( i \right)} \right)} \nabla_\mu \frac{\partial \phi^M_{\phantom{M} N \left( i \right)}}{\partial \phi^M_{\phantom{M} N}}$$

## From gauge invariance
The linearity of solution fields can be derived succinctly using the idea of [[gauge-invariance|gauge invariance]]. Consider a solution set which is transformed differentiably into a new solution set i.e. the original solution set undergoes a [[gauge-invariance#Gauge transformations|gauge transformation]]. If the new solution set obeys the original equations of motion, the gauge has not really changed, thereby requiring [[gauge-invariance#Covariant derivatives|covariant derivatives]] to reduce to geometric covariant derivatives. In other words, the field-theoretic connection coefficients must vanish:

$$G^b_{\phantom{b} \rho a} = 0$$

Thus,

$J^{M H b}_{\phantom{M H} N Z c} \nabla_\rho J^{\phantom{M H a} N Z c}_{M H a} = 0$

which is true for non-trivial [[gauge-invariance#Gauge transformations|J tensors]] only if,

$$\nabla_\rho J^{\phantom{M H b} N Z a}_{M H b} = 0$$

Raising lower indices and vice-versa, and using the definition of the J tensor, we find,

$$\nabla_\rho \frac{\partial \widetilde{\phi}^M_{\phantom{M} N a}}{\partial \phi^Z_{\phantom{M} H b}} = 0$$

This is true in general when the fields $\widetilde{\phi}^M_{\phantom{M} N a}$ are linear combinations of $\phi^Z_{\phantom{M} H b}$,

$$
\begin{align} \widetilde{\phi}^M_{\phantom{M} N a} & = C^{M H b}_{\phantom{M h b} N Z a} \phi^Z_{\phantom{M} H b} \\ \nabla_\rho C^{M H b}_{\phantom{M h b} N Z a} & = 0 \end{align}
$$

The above precisely demonstrates the linearity of classical tensor fields.
