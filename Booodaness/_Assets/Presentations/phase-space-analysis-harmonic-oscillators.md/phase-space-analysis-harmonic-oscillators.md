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
5. Why is this important?

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

- `<After slide content>` Now, just as sound is the mechanical analogue of light, phonons are the mechanical analogue of photons. The study of lattices and phonons forms much of condensed matter physics. In general, the study of fields, their excitations and their quantum behaviour is called quantum field theory and as of 2022, it is the most accurate picture of reality that humans have managed to wrest from nature. For instance, everything we know about particle physics is entirely based on quantum field theory.

- To summarize, harmonic oscillators capture a surprisingly diverse range of fundamental phenomena in nature. Hence, it is extremely worthwhile to study them.

---

# How does a harmonic oscillator evolve?

--

## Equation of motion

note: The fundamental goal of physics is to predict the evolution of a physical system given some known state at a certain time. The position of a system with respect to time is tracked using equations of motion, which interrelate the position of the system, time and the system's physical parameters. Thus, to understand how a harmonic oscillator evolves, we will look at its equation of motion. For brevity, we will deal with only linear motion.

--

From Hooke's law, we have that the position $x \left( t \right)$ of a harmonic oscillator about its mean position obeys,

$$F = -k x$$

--

But from Newton's second law of motion, $F = ma$ and $a$ is defined to be $\frac{d^2}{dt^2} x \left( t \right)$. Hence,

$$\boxed{m \frac{d^2}{dt^2} x \left( t \right) = - k x \left( t \right)}$$

note:

- It is important to note what some of the symbols mean in the above equation and what kind of structure the equation has. 

- Firstly, when we write $\frac{d^2}{dt^2} x \left( t \right)$, we mean the second derivative of $x \left( t \right)$ with respect to $t$. This means that we can also write it as $\frac{d}{dt} \left[ \frac{d}{dt} x \left( t \right) \right]$.

- Secondly, the above equation of motion is structurally a second-order ordinary differential equation (or 'ODE' in short). It is said to be second-order as the highest derivative involved is the second derivative. Furthermore, these derivatives are said to be ordinary as they pertain to single-variable functions, as opposed to multivariable functions.

--

- Recall the equation of motion for a harmonic oscillator of mass 'm' and spring constant 'k':










