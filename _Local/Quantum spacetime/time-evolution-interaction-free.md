# Interaction-free time evolution
#heisenberg-picture

## 3-distance
Let us consider the time-evolution of a quantum spacetime when it is undisturbed by [[time-evolution-interactions#Measurement|measurements]]. From the 5th [[_Local/Quantum spacetime/postulates#Statements|postulate]], we have,

$\displaystyle{ s \left( \left\{ x_i, x_j \right\}, t \right) = - \log \left( \sum_{E \vert \left\{ x_i, x_j \right\} \in E} \left\langle \Psi \left( t \right) \left\lvert E \right\rangle \left\langle E \right\rvert \Psi \left( t \right) \right\rangle \right) }$

Firstly, let us write the [[_Local/Quantum spacetime/postulates|3-distance]] between two nodes as the following to avoid confusing the node arguments as scalar parameters:

$$s_{ij} \left( t \right) = s_{ji} \left( t \right) = s \left( \left\{ x_i, x_j \right\}, t \right)$$

Also, let us contract the condition $E \vert \left\{ x_i, x_j \right\} \in E$ as $E_{ij}$. Now, we have,

$\displaystyle{s_{ij} \left(t \right) = - \log \left( \sum_{E_{ij}} \left\langle \Psi \left( t \right) \left\lvert E \right\rangle \left\langle E \right\rvert \Psi \left( t \right) \right\rangle \right) }$

As $\left\lvert E \right\rangle \left\langle E \right\rvert$ is the projection operator $\widehat{\Pi}_E$ onto $\left\lvert E \right\rangle$,

$\displaystyle{ s_{ij} \left(t \right) = - \log \left( \sum_{E_{ij}} \left\langle \Psi \left( t \right) \left\lvert \widehat{\Pi}_E \right\rvert \Psi \left( t \right) \right\rangle \right) }$

$$s_{ij} \left(t \right) = - \log \left( \sum_{E_{ij}} \left\langle \widehat{\Pi}_E \right\rangle \right)$$

## 3-velocity
The 3-velocity corresponding to two nodes, defined as the time derivative of their distance, is found from the above to be,

$\displaystyle{ \dot{s}_{ij} \left( t \right) = - \left( \sum_{E_{ij}} \left\langle \widehat{\Pi}_E \right\rangle \right)^{-1} \frac{d}{dt} \sum_{E_{ij}} \left\langle \widehat{\Pi}_E \right\rangle }$

$\displaystyle{ = - \left( \sum_{E_{ij}} \left\langle \widehat{\Pi}_E \right\rangle \right)^{-1} \sum_{E_{ij}} \frac{d}{dt} \left\langle \widehat{\Pi}_E \right\rangle }$

Recalling that the time derivative of the expectation value of an arbitrary operator is,

$$\frac{d}{dt} \left\langle \widehat{A} \right\rangle = \frac{i}{\hbar} \left\langle \left[ \widehat{H}, \widehat{A} \right] \right\rangle + \left\langle \frac{\partial \widehat{A}}{\partial t} \right\rangle$$

and assuming the energy eigenstates do not explicitly depend on time, we find,

$\displaystyle{ \dot{s}_{ij} \left( t \right) = - \frac{i}{\hbar} \left( \sum_{E_{ij}} \left\langle \widehat{\Pi}_E \right\rangle \right)^{-1} \sum_{E_{ij}} \left\langle \left[ \widehat{H}, \widehat{\Pi}_E \right] \right\rangle }$

The commutator can be simplified to:

$\displaystyle{ \left[ \widehat{H}, \widehat{\Pi}_{E} \right] = \left[ \widehat{H}, \left\lvert E \right\rangle \left\langle E \right\rvert \right] }$

$\displaystyle{ = \left\langle E \left\lvert \widehat{H} \right\rvert E \right\rangle - \left\langle E \left\lvert \widehat{H} \right\rvert E \right\rangle = 0 }$

Thus, the 3-velocity between any two nodes is zero:

$$\dot{s}_{ij} \left( t \right) = 0$$

This means that when free from interactions/measurements, spacetime is classically static.