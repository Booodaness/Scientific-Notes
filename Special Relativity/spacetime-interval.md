# Spacetime interval
#spacetime-interval #Minkowski-metric

## Infinitesimal spacetime interval
Let us work in local coordinates $x^\mu = \left( ct, x^i \right)$ where $c$ is the speed of light in vacuum. Suppose we were to track the motion of a pulse of light, in some inertial frame. By the second [[postulates|postulate]] of SR, this speed would be the same in all inertial frames.

Let the 3-position of a pointlike pulse of light be $x^i$. Then, its speed squared is,

$c^2 = \frac{d x_i}{dt} \frac{d x^i}{dt}$

Or,

$$c^2 dt^2 - dx_i dx^i = 0$$

Trajectories $x^i \left( t \right)$ obeying the above condition are called null or lightlike trajectories. From their definition, it follows that a lightlike trajectory is lightlike in all inertial frames. The above quantity is also written as $ds^2 = c dt^2 = dx_i dx^i$. $ds$ is called the infinitesimal spacetime interval.

As $c$ is invariant,

$$c^2 dt^2 - dx_i dx^i = c^2 d{t^\prime}^2 - dx_{i^\prime} dx^{i^\prime} = 0$$


## Minkowski metric
As it turns out, we can write the line element as an inner product, of the form,

$ds^2 = dx_\mu dx^\mu$

if we define,

$$dx_\mu = \left( cdt, - dx_i \right)$$

Equivalently, the dual $dx_\mu$ of $dx^\mu$ can be obtained via a metric tensor which will be called the Minkowski metric $\eta_{\mu \nu}$,

$x_\mu = \eta_{\mu \nu} x^\nu$, and,

$ds^2 = dx^\mu dx_\mu = dx^\mu \eta_{\mu \nu} dx^\nu$

It follows(in local coordinates),

$$\begin{align} \eta_{00} & = 1 \\ \eta_{ij} & = - g_{ij} \\ \eta_{i 0} & = \eta_{0 i} = 0 \end{align}$$

where $g_{ij}$ is the spatial metric tensor for the given coordinate system. The last statement demonstrates that in local coordinates, space and time are mutually orthogonal. Since the components of the Minkowski metric were derived from the invariance of the infinitesimal spacetime interval, they are the same in all local coordinates, i.e.,

$$\eta_{\mu^\prime \nu^\prime} = \eta_{\mu \nu}$$

## Jacobian
Suppose we switch from an unprimed inertial frame to a primed inertial frame. By the chain rule from multivariable calculus, the infinitesimal displacements $dx^\mu$ transform as,

$dx^{\mu^\prime} = \frac{\partial x^{\mu^\prime}}{\partial x^\mu} dx^\mu$

Thus, the spacetime interval transforms as,

$dx^{\mu^\prime} \eta_{\mu^\prime \nu^\prime} dx^{\nu^\prime} = dx^\mu \frac{\partial x^{\mu^\prime}}{\partial x^\mu} \eta_{\mu^\prime \nu^\prime} \frac{\partial x^{\nu^\prime}}{\partial x^\nu} dx^\nu$

But the spacetime interval is invariant, i.e.,

$dx^\mu \frac{\partial x^{\mu^\prime}}{\partial x^\mu} \eta_{\mu^\prime \nu^\prime} \frac{\partial x^{\nu^\prime}}{\partial x^\nu} dx^\nu = dx^\mu \eta_{\mu \nu} dx^\nu$  

For the above to hold for arbitrary $dx^\mu$, we must have,

$\frac{\partial x^{\mu^\prime}}{\partial x^\mu} \eta_{\mu^\prime \nu^\prime} \frac{\partial x^{\nu^\prime}}{\partial x^\nu} = \eta_{\mu \nu}$

Thus, the Minkowski metric transforms like a rank-2 tensor when we switch between arbitrary (as opposed to local) coordinates. The partial derivatives form the Jacobian tensor $\Lambda^{\mu^\prime}_{\phantom{\lambda} \mu}$,

$\Lambda^{\mu^\prime}_{\phantom{\lambda} \mu} = \frac{\partial x^{\mu^\prime}}{\partial x^\mu}$

From the previous equation, we have, in the matrix form,

$\pmb{\Lambda}^T \pmb{\eta} \pmb{\Lambda} = \pmb{\eta}$

$\implies \det \left( \pmb{\Lambda}^T \pmb{\eta} \pmb{\Lambda} \right) = \det \left( \pmb{\eta} \right)$

$\det \left( \pmb{\Lambda}^T \pmb{\Lambda} \right) \det \left( \pmb{\eta} \right) = \det \left( \pmb{\eta} \right)$

In local coordinates, we observe that $\det \left( \pmb{\eta} \right) = - 1$. Since $\pmb{\eta}$ transforms like a rank-2 tensor and the determinant is a scalar (an invariant), it is reasonable to assume that in arbitrary coordinates, $\det \left( \pmb{\eta} \right) \neq 0$. Thus,

$$\det \left( \pmb{\Lambda}^T \pmb{\Lambda} \right) = 1$$

Transformations obeying the above condition are called Lorentz transformations.







