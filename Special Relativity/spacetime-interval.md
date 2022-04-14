# Spacetime interval
#spacetime-interval #Minkowski-metric #Lorentz-transformations

## Null trajectories
Let us work in local coordinates $x^\mu = \left( ct, x^i \right)$ where $c$ is the speed of light in vacuum. Suppose we were to track the motion of a pulse of light, in some inertial frame. By the second [[postulates|postulate]] of SR, this speed would be the same in all inertial frames.

Let the 3-position of a pointlike pulse of light be $x^i$. Then, its speed squared is,

$c^2 = \frac{d x_i}{dt} \frac{d x^i}{dt}$

Or,

$$c^2 dt^2 - dx_i dx^i = 0$$

Trajectories $x^i \left( t \right)$ obeying the above condition are called null (as the quantity above equals $0$) or lightlike trajectories. From their definition, it follows that a lightlike trajectory is lightlike in all inertial frames. The above quantity is also written as $ds^2 = c dt^2 = dx_i dx^i$. The element $ds$ is called the infinitesimal spacetime interval.

As $c$ is invariant,

$$c^2 dt^2 - dx_i dx^i = c^2 d{t^\prime}^2 - dx_{i^\prime} dx^{i^\prime} = 0$$

Integrating the infinitesimal spacetime interval between two events gives the spacetime interval between them,

$$\left( \Delta s \right)^2 = c^2 \left( \Delta t \right)^2 - \Delta x_i \: \Delta x^i$$

Unless specified explicitly with the concerned events, 'spacetime interval' will simply refer to the infinitesimal spacetime interval.
 
## Minkowski metric
### Local coordinates
As it turns out, we can write the line element as an inner product, of the form,

$ds^2 = dx_\mu dx^\mu$

if we define,

$$dx_\mu = \left( cdt, - dx_i \right)$$

Equivalently, the dual $dx_\mu$ of $dx^\mu$ can be obtained via a metric tensor which will be called the Minkowski metric $\eta_{\mu \nu}$,

$x_\mu = \eta_{\mu \nu} x^\nu$, and,

$ds^2 = dx^\mu dx_\mu = dx^\mu \eta_{\mu \nu} dx^\nu$

It follows(in local coordinates),

$$\begin{align} \eta_{00} & = 1 \\ \eta_{ij} & = - g_{ij} \\ \eta_{i 0} & = \eta_{0 i} = 0 \end{align}$$

where $g_{ij}$ is the spatial metric tensor for the given coordinate system. The last statement demonstrates that in local coordinates, space and time are mutually orthogonal. Since the components of the Minkowski metric were derived from the invariance of the spacetime interval, they are the same in all local coordinates, i.e.,

$$\eta_{\mu^\prime \nu^\prime} = \eta_{\mu \nu}$$


### Lorentz transformations
Suppose we switch from an unprimed inertial frame to a primed inertial frame. By the chain rule from multivariable calculus, the infinitesimal displacements $dx^\mu$ transform as,

$dx^{\mu^\prime} = \frac{\partial x^{\mu^\prime}}{\partial x^\mu} dx^\mu$

Thus, the spacetime interval transforms as,

$dx^{\mu^\prime} \eta_{\mu^\prime \nu^\prime} dx^{\nu^\prime} = dx^\mu \frac{\partial x^{\mu^\prime}}{\partial x^\mu} \eta_{\mu^\prime \nu^\prime} \frac{\partial x^{\nu^\prime}}{\partial x^\nu} dx^\nu$

But the spacetime interval is invariant, i.e.,

$dx^\mu \frac{\partial x^{\mu^\prime}}{\partial x^\mu} \eta_{\mu^\prime \nu^\prime} \frac{\partial x^{\nu^\prime}}{\partial x^\nu} dx^\nu = dx^\mu \eta_{\mu \nu} dx^\nu$  

For the above to hold for arbitrary $dx^\mu$, we must have,

$\frac{\partial x^{\mu^\prime}}{\partial x^\mu} \eta_{\mu^\prime \nu^\prime} \frac{\partial x^{\nu^\prime}}{\partial x^\nu} = \eta_{\mu \nu}$

Thus, the Minkowski metric transforms like a rank-2 [[tensors|tensor]] when we switch between arbitrary (as opposed to local) coordinates. The partial derivatives form the Jacobian tensor $\Lambda^{\mu^\prime}_{\phantom{\lambda} \mu}$,

$\Lambda^{\mu^\prime}_{\phantom{\lambda} \mu} = \frac{\partial x^{\mu^\prime}}{\partial x^\mu}$

From the previous equation, we have, in the matrix form,

$\pmb{\Lambda}^T \pmb{\eta} \pmb{\Lambda} = \pmb{\eta}$

$\implies \det \left( \pmb{\Lambda}^T \pmb{\eta} \pmb{\Lambda} \right) = \det \left( \pmb{\eta} \right)$

$\det \left( \pmb{\Lambda}^T \pmb{\Lambda} \right) \det \left( \pmb{\eta} \right) = \det \left( \pmb{\eta} \right)$

In local coordinates, we observe that $\det \left( \pmb{\eta} \right) = - 1$. Since $\pmb{\eta}$ transforms like a rank-2 tensor and the determinant is a scalar (an invariant), it is reasonable to assume that in arbitrary coordinates, $\det \left( \pmb{\eta} \right) \neq 0$. Thus,

$$\det \left( \pmb{\Lambda}^T \pmb{\Lambda} \right) = 1$$

Transformations obeying the above condition are called Lorentz transformations.

## Timelike trajectories
### Spacetime interval
As $\pmb{\eta}$ is tensor (an invariant), it follows that $ds^2 = dx^\mu \eta_{\mu \nu} dx^\nu$ is a scalar invariant even if $ds^2 \neq 0$. Thus,

$$c^2 dt^2 - dx_i dx^i = c^2 d{t^\prime}^2 - dx_{i^\prime} dx^{i^\prime}$$

Suppose a body is travelling with a speed lesser than that of light. Then,

$v^2 = \frac{dx_i}{dt} \frac{dx^i}{dt} < c^2$

And so the infinitesimal spacetime interval is,

$ds^2 = c^2 dt^2 - v^2 dt^2 = \left( c^2 - v^2 \right) dt^2 > 0$

Since $ds^2$ is invariant, we must have $ds^2 > 0$ in every frame. As it is positive, the timelike part of $ds^2$ is greater than the spacelike part. Therefore, trajectories obeying this condition are called timelike.

### Time dilation
Recall that throughout, we are using the coordinates $x^\mu$ to track an object (such as a pulse of light in the case of null trajectories). In the object's own frame, $v=0$ and we have,

$ds^2 = c^2 d \tau^2 > 0$

where $d \tau$ is the time element (called 'proper time') in the object's frame (which may be non-inertial). Note that the proper time corresponding to the motion of an object is invariant, as it is, by definition, the time element in the particular frame of the object (every observer would have to travel 'alongside' the object to measure $d \tau$, giving identical results - this also promotes such an observer from a 'body' to a 'clock').

The above equation tells us that the spacetime interval along a body's trajectory is simply $c^2$ times the proper time associated with a clock travelling alongside the body.

Now, it follows,

$\left( c^2 - v^2 \right) dt^2 = c^2 d \tau^2$

Manipulating the above equation yields,

$dt = \frac{1}{\sqrt{1 - \frac{v^2}{c^2}}} d \tau$

The factor $\frac{1}{\sqrt{1 - \frac{v^2}{c^2}}}$ is the famous Lorentz factor, written as $\gamma$ for brevity, giving,

$$dt = \gamma d \tau$$

This is the phenomenon of time dilation. The word 'dilation' comes from the fact that for $v<c$, $\gamma \geq 1$, meaning $d \tau \geq dt$. As this strictly holds for all time elements, integrating over them does not change the inequality. Thus, in general, an event with a certain duration in some object's frame is measured to have a longer time duration when switching to a different frame.

### Length contraction
Suppose we are tracking a rigid body with length $l$ along its direction of motion. As the direction of motion and speed can change through its trajectory, it is more useful to consider the length element $dl$ along the instantaneous direction of motion. It is obvious that in the object's frame,

$dl = v d \tau$

From the relation for time dilation,

$dl = \gamma v dt$

But in the reference frame we switch to, $v dt$ *is* the (new) length element, therefore,

$dl = \gamma dl^\prime$

$$dl^\prime = \gamma^{-1} dl$$

Along the same lines as time '[[spacetime-interval#Time dilation|dilation]]', the above phenomenon is called length contraction.

Note that the spacetime interval, using the length element, is given as $ds^2 = c^2 dt^2 - dl^2$. Given two simultaneous events in a reference frame, we have $dt = 0$, hence, $ds^2 = - dl^2$. Simplifying this yields $ds = - dl$. This tells us that the spacetime interval associated with a moving body's trajectory is the negative length between two simultaneous events in the body's frame.














