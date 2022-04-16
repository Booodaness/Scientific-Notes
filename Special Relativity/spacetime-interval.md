# Spacetime interval
#spacetime-interval #Minkowski-metric #Lorentz-transformations

## Null trajectories
Let us work in local coordinates $x^\mu = \left( ct, x^i \right)$ where $c$ is the speed of light in vacuum. Suppose we were to track the motion of a pulse of light, in some inertial frame. By the second [[postulates|postulate]] of SR, this speed would be the same in all inertial frames.

Let the 3-position of a pointlike pulse of light be $x^i$. Then, its speed squared is,

$c^2 = \frac{d x_i}{dt} \frac{d x^i}{dt}$

Or,

$$c^2 dt^2 - dx_i dx^i = 0$$

As $c$ is invariant,

$$c^2 dt^2 - dx_i dx^i = c^2 d{t^\prime}^2 - dx_{i^\prime} dx^{i^\prime} = 0$$

Trajectories $x^i \left( t \right)$ obeying the above condition are called null (as the quantity above equals $0$) or lightlike trajectories. From their definition, it follows that a lightlike trajectory is lightlike in all inertial frames. The above quantity is also written as $ds^2 = c dt^2 = dx_i dx^i$. 

The element $ds$ is called the infinitesimal spacetime interval. Here, we are following the particle physicist's sign convention for $ds$ i.e. $\left( +, -, -, - \right)$. The opposite choice is called the relativist's sign convention.

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

where $g_{ij}$ is the spatial metric tensor for the given coordinate system. The last statement demonstrates that in local coordinates, space and time are mutually orthogonal. Since this fact is the same in all inertial frames, in local coordinates, the timelike and spacetimelike components of the metric are invariant.

### Lorentz transformations
Suppose we switch from an unprimed inertial frame to a primed inertial frame. By the chain rule from multivariable calculus, the infinitesimal displacements $dx^\mu$ transform as,

$dx^{\mu^\prime} = \frac{\partial x^{\mu^\prime}}{\partial x^\mu} dx^\mu$

Thus, the squared spacetime interval transforms as,

$dx^{\mu^\prime} \eta_{\mu^\prime \nu^\prime} dx^{\nu^\prime} = dx^\mu \frac{\partial x^{\mu^\prime}}{\partial x^\mu} \eta_{\mu^\prime \nu^\prime} \frac{\partial x^{\nu^\prime}}{\partial x^\nu} dx^\nu$

But the squared spacetime interval is invariant, i.e.,

$dx^\mu \frac{\partial x^{\mu^\prime}}{\partial x^\mu} \eta_{\mu^\prime \nu^\prime} \frac{\partial x^{\nu^\prime}}{\partial x^\nu} dx^\nu = dx^\mu \eta_{\mu \nu} dx^\nu$  

For the above to hold for arbitrary $dx^\mu$, we must have,

$\frac{\partial x^{\mu^\prime}}{\partial x^\mu} \eta_{\mu^\prime \nu^\prime} \frac{\partial x^{\nu^\prime}}{\partial x^\nu} = \eta_{\mu \nu}$

Thus, the Minkowski metric transforms like a rank-2 [[tensors|tensor]] when we switch between arbitrary (as opposed to local) coordinates. The partial derivatives form the Jacobian tensor $\Lambda^{\mu^\prime}_{\phantom{\lambda} \mu}$,

$\Lambda^{\mu^\prime}_{\phantom{\lambda} \mu} = \frac{\partial x^{\mu^\prime}}{\partial x^\mu}$

From the previous equation, we have, in the matrix form,

$\pmb{\Lambda}^T \pmb{\eta} \pmb{\Lambda} = \pmb{\eta}$

$\implies \det \left( \pmb{\Lambda}^T \pmb{\eta} \pmb{\Lambda} \right) = \det \left( \pmb{\eta} \right)$

$\det \left( \pmb{\Lambda}^T \pmb{\Lambda} \right) \det \left( \pmb{\eta} \right) = \det \left( \pmb{\eta} \right)$

In local coordinates, we observe that $\det \left( \pmb{\eta} \right) = - 1$. Since the components of $\pmb{\eta}$ transform like those of a rank-2 tensor and the determinant is a scalar (an invariant), it is reasonable to assume that in arbitrary coordinates, $\det \left( \pmb{\eta} \right) \neq 0$. Thus,

$$\det \left( \pmb{\Lambda}^T \pmb{\Lambda} \right) = 1$$

Transformations obeying the above condition are called Lorentz transformations.

## Timelike trajectories
### Spacetime interval
As $\pmb{\eta}$ is tensor (an invariant), it follows that $ds^2 = dx^\mu \eta_{\mu \nu} dx^\nu$ is a scalar invariant even if $ds^2 \neq 0$. Thus,

$$dx_i dx^i - c^2 dt^2 = dx_{i^\prime} dx^{i^\prime} - c^2 d{t^\prime}^2$$

Suppose a body is travelling with a speed lesser than that of light. Then,

$v^2 = \frac{dx_i}{dt} \frac{dx^i}{dt} < c^2$

And so,

$ds^2 = c^2 dt^2 - v^2 dt^2 = \left( c^2 - v^2 \right) dt^2 > 0$

Since $ds^2$ is invariant, we must have $ds^2 > 0$ in every frame. As it is positive, the timelike part of $ds^2$ is greater than the spacelike part. Therefore, trajectories obeying this condition are called timelike.

### Proper time
Recall that throughout, we are using the coordinates $x^\mu$ to track an object (such as a pulse of light in the case of null trajectories). In the object's frame, if two events occur at the same position, then $dx_i dx^i = 0$, giving,

$ds^2 = c^2 d \tau^2 > 0$

where $d \tau$ is the time element (called 'proper time') in the object's frame (which may be non-inertial). Note that the proper time corresponding to the motion of an object is invariant, as it is, by definition, the time element in the particular frame of the object (every observer would have to travel 'alongside' the object to measure $d \tau$, giving identical results - this also promotes such an observer from a 'body' to a 'clock').

The above equation tells us that the spacetime interval between two events is simply $c^2$ times the time interval between them in a frame where they occur at the same position.

### Time dilation
From the previous equation, it follows,

$\left( c^2 - v^2 \right) dt^2 = c^2 d \tau^2$

Manipulating the above equation yields,

$dt = \frac{1}{\sqrt{1 - \frac{v^2}{c^2}}} d \tau$

The factor $\frac{1}{\sqrt{1 - \frac{v^2}{c^2}}}$ is the celebrated Lorentz factor, written as $\gamma$ for brevity, giving,

$$dt = \gamma d \tau$$

This is the phenomenon of time dilation. The word 'dilation' comes from the fact that for $v<c$, $\gamma \geq 1$, meaning $d \tau \geq dt$. As this strictly holds for all time elements, integrating over them does not change the inequality. Thus, in general, an event with a certain duration in some object's frame is measured to have a longer time duration when switching to a different frame.

### Length contraction
Suppose we are tracking a rigid body with length $l$ along its direction of motion. As the direction of motion and speed can change through its trajectory, it is more useful to consider the length element $dl$ along the instantaneous direction of motion. It is obvious that in the object's frame,

$dL = v d \tau$

From the relation for time dilation,

$dL = \gamma v dt$

But in the reference frame we switch to, $v dt$ *is* the (new) length element, therefore,

$dL = \gamma dl$

$$dl = \gamma^{-1} dL$$

Along the same lines as time '[[spacetime-interval#Time dilation|dilation]]', the above phenomenon is called length contraction.

### Proper length
Note that the spacetime interval in the body's frame is given as $ds^2 = c^2 d \tau^2 - dL^2$. Given two simultaneous events in the same frame, we have $d \tau = 0$, hence, $ds^2 = - dL^2$. Simplifying this yields $ds = - dL$. This tells us that the spacetime interval between two events is the negative of the length between them in a frame where they are simultaneous. The latter quantity, i.e. the length between two simultaneous events in a moving body's trajectory, is called the proper length associated with that trajectory.

Like proper time, proper length is an invariant (it must be one as both $ds^2$ and $d \tau^2$ are invariant).

### Relativity of simulteinity
Since it is possible to define spacetime interval in the two equivalent ways:

> ... the spacetime interval between two events is simply $c^2$ times the time interval between them in a frame where they occur at the same position.

and,

>... the spacetime interval between two events is the negative of the length between them in a frame where they are simultaneous.

it follows that given two events which have a finite duration of time $\Delta t$ between them, it is possible to choose a frame where the events are simultaneous, and vice-versa. This is the famous phenomenon of relativity of simulteinity.

## Spacelike trajectories
### Spacetime interval
Suppose a body is travelling with $v>c$ in some reference frame. For such trajectories, $ds^2 < 0$,

$ds^2 = \left( c^2 - v^2 \right) dt^2 <0$

Since the spacelike part of the spacetime interval is greater than the timelike part above, such trajectories are said to be spacelike.

Note that $ds^2$ is negative and $ds^2 = - dL^2$. Therefore, the spacetime interval is numerically equal to $dL$, even though the scenario $ds^2 < 0$ is physically nonsensical (and so is measuring $+dL$, which requires an observer to travel along a spacelike trajectory). 

Nevertheless, since we are free to use mathematical quantities in themselves, the spacetime interval between two events is often defined as precisely the proper length between two simultaneous events in a frame travelling along a spacelike trajectory.

### No body can travel faster than light
Since $ds^2$ is invariant, $ds^2 < 0$ must be true along in the spacelike body's frame. However, in that frame, $v=0$ which gives $ds^2 = c^2 dt^2 >0$. The second condition is strong, as it follows from the [[postulates|principle of relativity]] that no matter the speed of a body in different inertial frames (be it lesser than $c$ or greater), in its own frame, there must be no way of telling if the body is moving. Therefore, in the body's frame, if $ds^2 > 0$ for the first case ($v<c$), the same must apply in the latter case ($v>c$). Moreover, this is true for non-uniform motion as it can be broken down into a series of instantaneously uniform motions.

This leaves us with only one possible resolution for the paradox: the initial assumption that there exists a body with $v>c$ in some frame, is simply false!

















