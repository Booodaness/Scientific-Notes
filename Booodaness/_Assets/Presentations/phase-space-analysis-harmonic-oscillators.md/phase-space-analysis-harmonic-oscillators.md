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

+ In classical mechanics, a harmonic oscillator is a system which when displaced by a position vector $\vec{x}$, experiences a restoring force $\vec{F} = -k \vec{x}$ (Hooke's law) where $k$ is a constant depending on the nature of the system (called its 'spring constant').

+ In general, a harmonic oscillator is a system whose tendency to return to some state of stable equilibrium is linearly related to its displacement about the equilibrium point.

note: `<After 2nd point>` The reason $k$ is called the spring constant is that in the case of springs, which are a special kind of harmonic oscillators as we shall see, $k$ turns out to be a useful measure of the spring's stiffness. This applies to other materials too.

--

## Examples of harmonic oscillators

note: Now that we know how a harmonic oscillator is defined, it begs the question, 'well, what real-life physical systems motivate the said definition'? The answer is that there are simply too many examples. But let's look at some of the most common and simple ones.

--

- A spring gently displaced from equilibrium within its elastic limit.

--

- A simple pendulum displaced from its mean position by a small angle.

--

- The batter head of a drum.

--

+ The electromagnetic field (as a system of infinite coupled harmonic oscillators in space and in time). Excitations of the electromagnetic field are called photons.

+ Lattices of atoms are chains of harmonic oscillators. Excitations of these lattices are called phonons.

note:

- `<Slide content>` Now, just as sound is the mechanical analogue of light, phonons are the mechanical analogue of photons. The study of lattices and phonons forms much of condensed matter physics. In general, the study of fields, their excitations and their quantum behaviour is called quantum field theory and as of 2022, it is the most accurate picture of reality that humans have managed to wrest from nature. For instance, everything we know about particle physics is entirely based on quantum field theory.

- To summarize, harmonic oscillators capture a surprisingly diverse range of fundamental phenomena in nature. Hence, it is extremely worthwhile to study them.

---

# How does a harmonic oscillator evolve?

--

## Equation of motion

note: The fundamental goal of physics is to predict the evolution of a physical system given some known state at a certain time. The position of a system with respect to time is tracked using equations of motion, which interrelate the position of the system, time and the system's physical parameters. Thus, to understand how a harmonic oscillator evolves, we will look at its equation of motion. For brevity, we will deal with only linear motion.

--

From Hooke's law, we have that the position $x \left( t \right)$ of a harmonic oscillator about its mean position obeys,
$$F = -k x$$
But from Newton's second law of motion, $F = ma$ and $a$ is defined to be $\frac{d^2}{dt^2} x \left( t  \right)$. Hence,
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
--

+ In other words, the solution $x \left( t \right)$ is a superposition (i.e. algebraic sum) of two sine and cosine waves with amplitudes $A$, $B$ and phase shifts $\phi$, $\psi$, respectively. Both the waves have a common angular frequency of $\omega$ (or frequency of $\displaystyle{\frac{\omega}{2 \pi}}$).

+ *Verifying* that the solution for $x \left( t \right)$ indeed obeys the equation of motion for a harmonic oscillator, is fairly straightforward — we differentiate it twice with respect to $t$ and check the result. However, *deriving* the solution from the equation of motion requires complicated mathematical machinery.

--

![[desmos-graph-13316f61bc7def5a71853e417971762e15627ee2d9c57250edf46c454be414c9.svg]]
Graph for $x \left( t \right) = A \cos \left( \omega t + \phi \right) + B \sin \left( \omega t + \psi \right)$

<!-- Desmos code for above graph
```desmos-graph
	(1,1)|label:x(t)|blue
	y=2 \cos \left( 1.5 x + 0.3 \right) + 0.7 \sin \left( 1.5 x + 1 \right)|blue
``` 
-->

--

+ To simplify our analysis of solutions for $x \left( t \right)$, we will not derive them explicitly in the first place! Instead, we will study the structure and symmetries of the equation of motion for a harmonic oscillator.

note: In the beginning of this presentation, we discussed how an equation of motion encodes the time evolution of a physical system. We will thus try to extract the nature of the evolution of a harmonic oscillator, from the equation of motion, without directly solving it. `<Slide content>`

---

# What is phase space?

--

## Predicting the future

--

Suppose we know the equation of motion for any given system. How can we use it to predict the state of the underlying system at an arbitrary moment in time? The answer lies in the below procedure.

--

+ Measure the state of the system at some known time $\tau$. This comprises its instantaneous position $x \left( \tau \right)$ and velocity $v \left( \tau \right)$.
+ Find the position at the instant 'immediately' after, $x \left( \tau + dt \right) = x \left( \tau \right) + v \left( \tau \right) dt$. We know $v \left( \tau \right)$ from the above.
+ Find the velocity at the instant 'immediately' after, $v \left( \tau + dt \right) = v \left( \tau \right) + a \left( \tau \right) dt$. We know $a \left( \tau \right)$ from the system's equation of motion, $\displaystyle{a \left( \tau \right) = \frac{F \left( x \left( \tau \right), \tau \right)}{m}}$.
+ Repeat the above until we reach the desired time $t$.

--

What's really going on in the above recipe is that we're simply integrating acceleration (known from the equation of motion) twice over time to get position, using a known position and velocity at some time:
$$x \left( t \right) = x \left( \tau \right) + \underset{x \left( t \right) - x \left( \tau \right)}{\underbracket{\int_\tau^t \int_\tau^t a \left( t \right) dt \: dt}}$$

--

+ The key takeaway from the above observations is that a physical system is characterized at some time by its 'state', and knowing this at a certain instant can allow us to predict the state at any other instant, using the equation of motion for the system — which tells how the state updates with time.

+ Furthermore, the state of a system at some time comprises not just its instantaneous position, but also velocity.

--

## What space does a system move through?

--











