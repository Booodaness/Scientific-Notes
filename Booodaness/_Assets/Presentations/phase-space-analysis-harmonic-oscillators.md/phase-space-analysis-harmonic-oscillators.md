### PHYS 10 Seminar
## Phase Space Analysis of Harmonic Oscillators

By Siddhartha Bhattacharjee (`s3bhatta@uwaterloo.ca`)

10/31/22

note: 

- One of the most influential mathematicians of all time, Henri Poincaré, once said,

> Mathematics is the art of giving the same name to different things.

- A very good morning to one and all present here today. My name is Sid and I am currently in my 1A term, studying mathematical physics. I thank you for being here today and welcome you to join me in this PHYS 10 seminar. 

- So in this seminar, we will study harmonic oscillators using a really cool method called phase space analysis. Sit back and tie your spring-loaded seat belts!

---

# Contents

1. What is a harmonic oscillator?
2. How does a harmonic oscillator evolve?
3. What is phase space?
4. How does a harmonic oscillator evolve, again?
5. Conclusion

note:

- Here's what we'll cover in the following slides `<slide content>`.

---

# What is a harmonic oscillator?

note: Our main creature of interest today is a harmonic oscillator. So, what _is_ it?

--

## Defining harmonic oscillators

--

+ The answer depends on the framework of physics under consideration.

+ In classical mechanics, a harmonic oscillator is a system which when displaced by a position vector $\vec{x}$, experiences a restoring force $\vec{F} = -k \vec{x}$ (**Hooke's law**) where $k$ is a constant depending on the nature of the system (called its '**spring constant**').

+ In general, a harmonic oscillator is a system whose tendency to return to some state of stable equilibrium is **linearly** related to its displacement about the equilibrium point.

note: `<point 2>` The reason $k$ is called the spring constant is that in the case of springs, which are a special kind of harmonic oscillators as we shall see, $k$ turns out to be a useful measure of the spring's stiffness. This applies to other materials too.

--

## Examples of harmonic oscillators

note: Now that we know how a harmonic oscillator is defined, it begs the question, 'well, what real-life physical systems motivate the said definition'? The answer is that there are simply too many examples. But let's look at some of the most common and simple ones.

--

- A **spring** gently displaced from equilibrium within its elastic limit.

![[spring.png]]

--

- A **simple pendulum** displaced from its mean position by a small angle.

![[simple-pendulum.png]]

--

- The **batter head** of a **drum**.

![[batter-head-drum.gif]]

--

+ The electromagnetic field (as a system of infinite coupled harmonic oscillators in space and in time). Excitations of the electromagnetic field are called photons.

+ Lattices of atoms are chains of harmonic oscillators. Excitations of these lattices are called phonons.

note:

- `<point 1>` A field is a quantity such as a scalar or vector, associated with every point in space at every point of time. In other words, it is some such quantity dependent on the position and time coordinates $x, y, z, t$. Note that the batter head of a drum is somewhat like a field, in that the height $h$ of the stretched batter head over a point with coordinates $x, y$ depends on time $t$, so we have a quantity of the form $h \left( x, y, t \right)$.

- `<slide content>` Now, just as sound is the mechanical analogue of light, phonons are the mechanical analogue of photons. The study of lattices and phonons forms much of condensed matter physics. In general, the study of fields, their excitations and their quantum behaviour is called quantum field theory and as of 2022, it is the most accurate picture of reality that humans have managed to wrest from nature. For instance, everything we know about particle physics is entirely based on quantum field theory.

- To summarize, harmonic oscillators capture a surprisingly diverse range of fundamental phenomena in nature. Hence, it is extremely worthwhile to study them.

---

# How does a harmonic oscillator evolve?

--

## Equation of motion

note: The fundamental goal of physics is to predict the evolution of a physical system given some known state at a certain time. The position of a system with respect to time is tracked using equations of motion, which interrelate the position of the system, time and the system's physical parameters. Thus, to understand how a harmonic oscillator evolves, we will look at its equation of motion. For brevity, we will deal with only linear motion.

--

- From Hooke's law, we have that the position $x \left( t \right)$ of a harmonic oscillator about its mean position obeys,
$$F = -k x$$
- But from Newton's second law of motion, $F = ma$ and $a$ is defined to be $\frac{d^2}{dt^2} x \left( t  \right)$. Hence,
$$\boxed{m \frac{d^2}{dt^2} x \left( t \right) = - k x \left( t \right)}$$

note: It is important to note what some of the symbols mean in the above equation and what kind of structure the equation has. 

--

+ When we write $\frac{d^2}{dt^2} x \left( t \right)$, we mean the second derivative of $x \left( t \right)$ with respect to $t$. This means that we can also write it as $\frac{d}{dt} \left[ \frac{d}{dt} x \left( t \right) \right]$.

+ Newton's second law of motion is mathematically a second-order ordinary differential equation ('ODE'). It is said to be second-order as the highest derivative involved is the second derivative. Furthermore, these derivatives are said to be ordinary as they pertain to single-variable functions.

--

+ Recall the equation of motion for a harmonic oscillator of mass 'm' and spring constant 'k':
$$m \frac{d^2}{dt^2} x \left( t \right) = - k x \left( t \right)$$
+ Analytically solving the above second-order ODE gives the following solution:
$$x \left( t \right) = A \cos \left( \omega t + \phi \right) + B \sin \left( \omega t + \psi \right)$$
where $\displaystyle{\omega = \sqrt{\frac{k}{m}}}$.

--

+ In other words, the solution $x \left( t \right)$ is a superposition (i.e. algebraic sum) of two sine and cosine waves with amplitudes $A$, $B$ and phase shifts $\phi$, $\psi$, respectively. Both the waves have a common angular frequency of $\omega$ (or frequency of $\displaystyle{\frac{\omega}{2 \pi}}$).

+ *Verifying* that the solution for $x \left( t \right)$ indeed obeys the equation of motion for a harmonic oscillator, is fairly straightforward — we differentiate it twice with respect to $t$ and check the result. However, *deriving* the solution from the equation of motion requires complicated mathematical machinery.

--

![[desmos-graph-2e65392c55fdb698cb402a6f6aefcb367927e4e7f66f594ba53a3a96a7d5798b.svg]]
Graph for $x \left( t \right) = A \cos \left( \omega t + \phi \right) + B \sin \left( \omega t + \psi \right)$

<!-- Desmos code for above graph
```desmos-graph
	(1,3)|label:x(t)|blue
	y=2 \cos \left( 1.5 x + 0.3 \right) + 0.7 \sin \left( 1.5 x + 1 \right)|blue
``` 
-->

note: This is how the motion of a harmonic oscillator looks when graphed. Such motion is called simple harmonic motion. We're assuming that the harmonic oscillator is not affected by any external forces such as damping forces (such harmonic oscillators are also known as simple harmonic oscillators).

--

+ To simplify our analysis of solutions for $x \left( t \right)$, we will not derive them explicitly in the first place! 

+ Instead, we will study the structure and symmetries of the equation of motion for a harmonic oscillator.

note: In the beginning of this presentation, we discussed how an equation of motion encodes the time evolution of a physical system. We will thus try to extract the nature of the evolution of a harmonic oscillator, from the equation of motion, without directly solving it. `<slide content>`

---

# What is phase space?

--

## Predicting the future

--

Suppose we know the equation of motion for any given system. How can we use it to predict the state of the underlying system at an arbitrary moment in time? The answer lies in the below procedure.

--

![[predict-states-procedure.png]]

--

What's really going on in the above recipe is that we're simply integrating acceleration (known from the equation of motion) twice over time to get position, using a known position and velocity at some time:

![[position-integrate-acceleration-twice.png]]

--

+ The key takeaway from the above observations is that a physical system is characterized at some time by its 'state', and knowing this at a certain instant can allow us to predict the state at any other instant, using the equation of motion for the system — which tells how the state updates with time.

+ Furthermore, the state of a system at some time comprises not just its instantaneous position, but also velocity.

--

## What space does a system move through?

note: Thus, we've seen how physical systems have time-dependent states which are tracked using equations of motion and initial values. As the system undergoes motion, its state changes correspondingly. The system moves through the physical space surrounding us — but what about the abstract notion of its state? 

--

## Configuration space

--

+ Notice that the state of a system not only encodes its position but also its velocity. 

+ Hence, the state of a system lives in the space of all positions and velocities. Such a space is termed as the configuration space of the underlying system. One-dimensional motion occurs in two-dimensional phase space (since one dimension corresponds to one position coordinate $x$ and one velocity coordinate $v$). 

note: In general, the configuration space for a particle moving in three-dimensional space as usual, is $3+3$ dimensional i.e. six-dimensional (since we have $3$ position coordinates `x`, `y`, `z` and $3$ velocity coordinates `v_x`, `v_y` and `v_z`).

--

![[Drawing 2022-10-31 00.35.21.excalidraw.svg]]
%%[[Drawing 2022-10-31 00.35.21.excalidraw.md|🖋 Edit in Excalidraw]], and the [[Drawing 2022-10-31 00.35.21.excalidraw.dark.svg|dark exported image]]%%

note: 

- As they say, a picture speaks a thousand equations.

- Note that we have a velocity vector associated with each point in the trajectory of a system in configuration space. Thus, the velocity vector is characterized by the coordinates `x` and `v`. In other words, it is a velocity vector _field_.

--

Phase space

--

+ In configuration space, we treat position and velocity coordinates on an equal footing as they are both mutually independent quantities characterizing configuration space, through which a system moves in terms of its state.

+ Phase space is motivated by configuration space. It is a space where the coordinate orthogonal to position is not velocity, but momentum (built on the idea of velocity). Thus, phase space is the space of all positions and momenta. 

--

- The reason this space is considered is that its symmetric treatment of position and momentum manifest themselves in the equation of motion too, as we shall see!

--

![[Drawing 2022-10-31 01.31.29.excalidraw.svg]]
%%[[Drawing 2022-10-31 01.31.29.excalidraw.md|🖋 Edit in Excalidraw]], and the [[Drawing 2022-10-31 01.31.29.excalidraw.dark.svg|dark exported image]]%%

note: 

- This is what phase space looks like, geometrically speaking. 

- Note that the trajectory of a system in configuration needn't have the same shape as that in phase space unless momentum and velocity are linearly related. (which isn't always the case!)

- Let us now explore how harmonic oscillators move in phase space.

--

## Method of deceomposition

--

- Once again, recall the equation of motion of a one-dimensional harmonic oscillator:
$$m \frac{d^2}{dt^2} x \left( t \right) = - k x \left( t \right)$$
- Dividing both sides of the above by $m$,
$$\frac{d^2}{dt^2} x \left( t \right) = - \frac{k}{m} x \left( t \right)$$

--

- Using the parameter $\displaystyle{\omega = \sqrt{\frac{k}{m}}}$, we condense $k$ and $m$ into a single parameter,
$$\frac{d^2}{dt^2} x \left( t \right) = - \omega \cdot \omega \cdot x \left( t \right)$$
- Dividing both sides by $\omega$,
$$
\begin{align}
\omega^{-1} \frac{d^2}{dt^2} x \left( t \right) = - \omega x \left( t \right) && \left( 1 \right)
\end{align}
$$

--

- We now invent a new *abstract* coordinate $y \left( t \right)$ which we propose to be orthogonal to $x \left( t \right)$ in phase space. We will justify this later by finding how this choice for momentum makes the equation of motion symmetric for position and momentum in a certain manner.
$$y \left( t \right) = \omega^{-1} \frac{d}{dt} x \left( t \right)$$

note: `<slide content>` We call $y \left( t \right)$ an abstract coordinate as it is not a physical length unlike in geometric spaces that represent physical lengths.

--

- Rearranging the above equation, we get,
$$
\begin{align}
\frac{d}{dx} x \left( t \right) = \omega y \left( t \right) && \left( 2 \right)
\end{align}
$$
- Since this is a (first-order) differential equation involving the coordinate $\frac{d}{dt} x \left( t \right)$, we can think of it as an equation of motion for $x \left( t \right)$.

--

- We notice in equation $\left( 1 \right)$ the following:
$$\frac{d}{dt} \left( \omega^{-1} \frac{d}{dt} x \left( t \right) \right) = - w x \left( t \right)$$

--

- Plugging in equation $\left( 2 \right)$ i.e. $y \left( t \right) = \omega^{-1} \frac{d}{dt} x \left( t \right)$, we find,
$$
\begin{align}
\frac{d}{dt} y \left( t \right) & = - \omega x \left( t \right) && \left( 3 \right)
\end{align}
$$
- Since this is a (first-order) differential equation involving $\frac{d}{dt} y \left( t \right)$, we can think of it as an equation of motion for $y \left( t \right)$.

--

- Let us look at the first-order equations of motion we obtained for $x \left( t \right)$ and $y \left( t \right)$, together:
$$
\begin{align}
\frac{d}{dt} x \left( t \right) & = \omega y \left( t \right) && \left( 2 \right) \\
\frac{d}{dt} y \left( t \right) & = - \omega x \left( t \right) && \left( 3 \right)
\end{align}
$$
- These are two coupled first-order ordinary differential equations (ODEs). They are said to be coupled as each variable $x$ and $y$ appears in multiple differential equations. Notice their symmetry up to signature.

note: `<slide content>` Symmetry here means that if we interchange position and momentum in either of the above equations of motion, we get the other equation of motion, albeit with a minor sign correction (hence the term 'symmetry up to signature').

--

- Thus, we have decomposed the original equation of motion (with the structure of Newton's second law) which was a second-order ODE, to two first-order coupled ODEs. This is known as the method of decomposition.

--

- We did this by 'splitting' the second derivative in the original ODE as the first derivative of a first derivative. First, we defined a momentum coordinate $y \left( t \right)$ involving $\displaystyle{\frac{d}{dt} x \left( t \right)}$. Then, we plugged in momentum into Hooke's law to get an equation involving $\displaystyle{\frac{d}{dt} y \left( t \right)}$ which implicitly involves $\displaystyle{\frac{d}{dt} \frac{d}{dt} x \left( t \right)}$

note: Let us now understand the geometric significance of the new first-order ODEs (2) and (3), by analysing their meaning in the geometric construct of phase space.

---

## How do harmonic oscillators evolve, again?


--

## Velocity vector field in phase space

note: Now, let's look at what's called the velocity vector field of a system in phase space. After that, we will apply this idea to the evolution of a harmonic oscillator.

--

+ Recall that the state of a system at a time $t$ in phase space is characterized by the instantaneous position and momentum coordinates $\left( x \left(t \right), y \left( t \right) \right)$. 

+ We can also think of the state as a vector in phase space with components $\left( x \left(t \right), y \left( t \right) \right)$. As the system evolves in time, the tip of this vector moves and traces out a trajectory in phase space. This is nothing but the position vector $\vec{u} \left( t \right)$ of the system, in phase space.

--

![[Drawing 2022-10-31 01.55.06.excalidraw.svg]]
%%[[Drawing 2022-10-31 01.55.06.excalidraw.md|🖋 Edit in Excalidraw]], and the [[Drawing 2022-10-31 01.55.06.excalidraw.dark.svg|dark exported image]]%%

--

- The position vector $\vec{u} \left( t \right)$ can be differentiated with respect to time to get the velocity vector associated with the position vector, $\displaystyle{\frac{d}{dt} \vec{u} \left( t \right)}$.

- Every point (position vector) in phase space has a velocity vector which tells us how fast the position vector is changing at that point and in what direction. Thus, there is a velocity vector for every pair of coordinates $\left( x, y \right)$ which means that $\displaystyle{\frac{d}{dt} \vec{u} \left( t \right)}$ is actually a velocity vector _field_, $\displaystyle{\vec{v} \left( \vec{u}, t \right) = \vec{v} \left( x, y, t \right) = \frac{d}{dt} \vec{u} \left( t \right)}$.

--

![[Drawing 2022-10-31 02.11.11.excalidraw.svg]]
%%[[Drawing 2022-10-31 02.11.11.excalidraw.md|🖋 Edit in Excalidraw]], and the [[Drawing 2022-10-31 02.11.11.excalidraw.dark.svg|dark exported image]]%%

--

## Velocity vector field of harmonic oscillator

--

- Armed with the notions of phase space and velocity vector fields, recall the two coupled first-order ODEs for the coordinates of a harmonic oscillator in phase space:
$$
\begin{align}
\frac{d}{dt} x \left( t \right) & = \omega y \left( t \right) && \left( 2 \right) \\
\frac{d}{dt} y \left( t \right) & = - \omega x \left( t \right) && \left( 3 \right)
\end{align}
$$

--

- We can unify the above derivatives of the components of the position vector in phase space into those of the velocity vector,
$$\frac{d}{dt} \vec{u} \left( t \right) = \frac{d}{dt} \begin{pmatrix} x \left( t \right) \\ y \left( t \right) \end{pmatrix} = \omega \begin{pmatrix} y \left( t \right) \\ - x \left( t \right) \end{pmatrix}$$

--

- Now, this may seem arbitrary at first, but we compute the dot product of the velocity vector and position vector at each point (we thus get a scalar at each point in phase space, i.e. a scalar field):
$$
\begin{align}
\frac{d}{dt} \vec{u} \left( t \right) \cdot \vec{u} \left( t \right) & = \omega \begin{pmatrix} y \left( t \right) \\ - x \left( t \right) \end{pmatrix} \cdot \begin{pmatrix} x \left( t \right) \\ y \left( t \right) \end{pmatrix} \\
 & = \omega \left[ y \left( t \right) x \left( t \right) - x \left( t \right) y \left( t \right) \right] \\
 & = 0
\end{align}
$$

--

- Hence, the dot product of the velocity vector and position vector is $0$ at every point in the phase space.

- Recall that the dot product of two vectors $\vec{a}$ and $\vec{b}$ encodes the following geometric information about the two vectors,
$$\vec{a} \cdot \vec{b} = \| a \| \: \| b \| \: \cos \left( \theta \left( \vec{a}, \vec{b} \right) \right)$$
where $\displaystyle{\| \vec{a} \|} = \sqrt{a_x^2 + a_y^2}$ and $\theta \left( \vec{a}, \vec{b} \right)$ is the angle between $\vec{a}$ and $\vec{b}$.

--

- Since in general we have $\displaystyle{\| \vec{u} \left( t \right) \| \neq \vec{0}, \| \frac{d}{dt} \vec{u} \left( t \right) \| \neq \vec{0}}$ , we conclude,
$$
\begin{align}
\frac{d}{dt} \vec{u} \left( t \right) \cdot \vec{u} \left( t \right) & = 0 \\
\implies \cos \left( \theta \left( \vec{u} \left( t \right), \frac{d}{dt} \vec{u} \left( t \right) \right) \right) & = 0 \\
\implies \theta \left( \vec{u} \left( t \right), \frac{d}{dt} \vec{u} \left( t \right) \right)  & = \frac{\pi}{2} && \left[ = 90^\circ \right]
\end{align}
$$

--

- Therefore, the velocity vector is perpendicular to the associated position vector at all points in phase space!

![[velocity-vector-field.png]]

note: Note in the above plot how the velocity vector field resembles concentric circles. Since velocity dictates change of the position vector, this means that the position vector keeps going round and round in phase space while having fixed magnitude!

--

+ It turns out that the only way the tip of $\vec{u}$ can move so that its velocity vector is always perpendicular to it, is if it moves in uniform circular motion about the origin!

+ It can be shown that the frequency associated with this motion is $\displaystyle{\frac{\omega}{2 \pi}}$, as expected.

+ Since $x \left( t \right)$ is the horizontal projection of $\vec{u} \left( t \right)$; the tip of $\vec{u}$ moves in uniform circular motion; and the projection of circular motion is sinusoidal, we conclude that so is $x \left( t \right)$.

--

![[circular-motion-phase-space.gif]]
Time evolution of states in phase space

- We see in the above that distinct trajectories are concentric. This means that a particle cannot jump from a state in one trajectory to another.

--

- Further analysis reveals that each trajectory is uniquely labelled by a parameter called 'total energy'. Then, from the above, we can say that the energy of a particle is conserved in its motion, as it cannot jump to trajectories of different total energy! This geometric picture of dynamics extends to physical systems which are not harmonic oscillators too.

---

# Conclusion

We showed that the solutions $x \left( t \right)$ for the equation of motion of a harmonic oscillator are periodic, by performing the method of decomposition on its equation of motion (Hooke's law) and interpreting the new equations of motion in the geometric setting of phase space.

Thank you for patiently listening to this seminar! Hope you all enjoyed! :)















