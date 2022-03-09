# Gamma matrices

#gamma-matrices #algebras #bilinear-products #tensors 

## Definition

From the relation $\phi^k B^{i^\prime}_{\phantom{i^\prime} k i} = \Lambda^{i^\prime}_{\phantom{i^\prime} i}$ , we see that $\left\{ B^{i^\prime}_{\phantom{i^\prime} k i} \right\}_k$ forms a basis for $\Lambda^{i^\prime}_{\phantom{i^\prime} i}$ in the space of $\phi^k$ . This basis may be written as a set of dual vectors, which in the Cartesian basis are represented as the _gamma matrices_:

$\pmb{\gamma}_k = B^{i^\prime}_{\phantom{i^\prime} k i} \: \pmb{\theta}^i \otimes \pmb{e}_{i^\prime}$

Note that even though the gamma matrices above look like Jacobians, they transform like dual vectors. In the above equation, a gamma matrix (or more appropriately, [[tensors|tensor]]) has only one free index, downstairs.

## Examples

### Complex numbers

For [[complex-numbers-quaternions#Complex numbers|complex numbers]], the components of the dual gamma matrices are found to be:

$$
\begin{align}
\pmb{\gamma}_0 & = \begin{pmatrix} 1 & 0 \\ 0 & 1 \end{pmatrix} \\
\pmb{\gamma}_1 & = \begin{pmatrix} 0 & -1 \\ 1 & 0 \end{pmatrix}
\end{align}
$$

### Quaternions

For [[complex-numbers-quaternions#Quaternions|quaternions]], using the [[complex-numbers-quaternions#Algebra|components]] of $B^{i^\prime}_{\phantom{i^\prime} k i}$ and the definition of the gamma matrices, we find,

$$
\begin{align}
\pmb{\gamma}_0 & = \begin{pmatrix} 1 & 0 & 0 & 0 \\ 0 & 1 & 0 & 0 \\ 0 & 0 & 1 & 0 \\ 0 & 0 & 0 & 1 \end{pmatrix} \\
\pmb{\gamma}_1 & = \begin{pmatrix} 0 & -1 & 0 & 0 \\ 1 & 0 & 0 & 0 \\ 0 & 0 & 0 & 1 \\ 0 & 0 & -1 & 0 \end{pmatrix} \\
\pmb{\gamma}_2 & = \begin{pmatrix} 0 & 0 & -1 & 0 \\ 0 & 0 & 0 & -1 \\ 1 & 0 & 0 & 0 \\ 0 & 1 & 0 & 0 \end{pmatrix} \\
\pmb{\gamma}_3 & = \begin{pmatrix} 0 & 0 & 0 & -1 \\ 0 & 0 & 1 & 0 \\ 0 & 1 & 0 & 0 \\ -1 & 0 & 0 & 0 \end{pmatrix} \\
\end{align}
$$

## For any parameterized Jacobian

Given a Jacobian parameterized by a vector space as $\Lambda^{i^\prime}_{\phantom{i^\prime} i} \left( \phi^k \right)$ , we have,

$\Lambda^{i^\prime}_{\phantom{i^\prime} i} \left( \phi^k \right) = \phi^k B^{i^\prime}_{\phantom{i^\prime} ki} = \phi^k \gamma_{k \phantom{i^\prime} i}^{\phantom{k} i^\prime}$

where $\gamma_{k \phantom{i^\prime} i}^{\phantom{k} i^\prime} = \pmb{e}_{i^\prime} \otimes \pmb{\theta}^{i^\prime} \left( \pmb{\gamma}_k \right)$ .

Suppose we want to find the particular $k^\text{th}$ gamma matrix instead of summing over $k$ . To distinguish such dummy indices, let us enclose them in parentheses as $\left( k \right)$ . Now,

$\phi^{\left( k \right)} \gamma_{\left( k \right) \phantom{i^\prime} i}^{\phantom{\left( k \right)} i^\prime} = \Lambda^{i^\prime}_{\phantom{i^\prime} i} \left( \phi^j \right)$

such that,

$\phi^j = \begin{cases} \phi^{\left( k \right)} & j=k \\ 0 & j \neq k \end{cases}$

i.e., $\phi^j = \delta^j_{\phantom{j} \left( k \right)} \phi^{\left( k \right)}$ . Now, we have,

$\phi^{\left( k \right)} \gamma_{\left( k \right) \phantom{i^\prime} i}^{\phantom{\left( k \right)} i^\prime} = \Lambda^{i^\prime}_{\phantom{i^\prime} i} \left( \delta^j_{\phantom{j} \left( k \right)} \phi^{\left( k \right)} \right)$

Note that here, $\phi^{\left( k \right)}$ acts as a scalar. Since scaling a tensor scales its components and $\phi^k$ are constrained to be the components of $\pmb{\Lambda}$ ,

$$
\begin{align}
\phi^{\left( k \right)} \gamma_{\left( k \right) \phantom{i^\prime} i}^{\phantom{\left( k \right)} i^\prime} & = \phi^{\left( k \right)} \Lambda^{i^\prime}_{\phantom{i^\prime} i} \left( \delta^j_{\phantom{j} \left( k \right)} \right) \\
\gamma_{k \phantom{i^\prime} i}^{\phantom{k} i^\prime} & = \Lambda^{i^\prime}_{\phantom{i^\prime} i} \left( \delta^j_{\phantom{j} k} \right)
\end{align}
$$