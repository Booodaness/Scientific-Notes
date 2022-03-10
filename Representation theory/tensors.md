# Tensors in brief
#tensors

## Definition

Given a vector space $V$ and its dual space $V^\text{*}$ , a rank $\left( p, q \right)$ _tensor_ is a multilinear map $\pmb{T} \in \underset{i=1}{\overset{p}{\bigotimes}} V \underset{j=1}{\overset{q}{\bigotimes}} V^\text{*}$ .

This means that given a covector basis $\left\{ \pmb{\theta}^i \right\}$ and vector basis $\left\{ \pmb{e}_j \right\}$ , if $\chi_{i_1} \pmb{\theta}^{i_1}, \psi_{i_2} \pmb{\theta}^{i_2}, \dots, \omega_{i_p} \pmb{\theta}^{i_p}  \in V^\text{*}$ and $u^{j_1} \pmb{e}_{j_1}, v^{j_2} \pmb{e}_{j_2} , \dots, w^{j_q} \pmb{e}_{j_q} \in V$ ,

$\pmb{T} \left( \chi_{i_1} \pmb{\theta}^{i_1}, \psi_{i_2} \pmb{\theta}^{i_2}, \dots, \omega_{i_p} \pmb{\theta}^{i_p}, u^{j_1} \pmb{e}_{j_1}, v^{j_2} \pmb{e}_{j_2}, \dots, w^{j_q} \pmb{e}_{j_q} \right) = \chi_{i_1} \psi_{i_2} \dots \omega_{i_p} \: \pmb{T} \left( \pmb{\theta}^{i_1}, \pmb{\theta}^{i_2}, \dots, \pmb{\theta}^{i_p}, \pmb{e}_{j_1}, \pmb{e}_{j_2}, \dots, \pmb{e}_{j_q} \right) u^{j_1} v^{j_2} \dots w^{j_q}$

## Components

With respect to the previous section, for a tensor $\pmb{T}$ , its _components_ $T^{i_1 \dots i_p}_{\phantom{i_1 \dots i_p} j_1 \dots j_q}$ are defined in the manner,

$$\pmb{T} \left( \pmb{\theta}^{i_1}, \cdots, \pmb{\theta}^{i_p}, \pmb{e}_{j_1}, \dots, \pmb{e}_{j_q} \right) = T^{i_1 \dots i_p}_{\phantom{i_1 \dots i_p} j_1 \dots j_q} \: \underset{a=1}{\overset{p}{\bigotimes}} \pmb{e}_{i_a} \underset{b=1}{\overset{q}{\bigotimes}} \pmb{\theta}^{j_b}$$

The covector basis is defined to act on the vector basis and vice-versa as:

$$\pmb{\theta}^i \left( \pmb{e}_j \right) = \pmb{e}_j \left( \pmb{\theta}^i \right) = \delta^i_{\phantom{i}_j}$$

Assuming that covectors act on vectors only and vice-versa under the tensor product, we can extend the action to multiple copies of basis vectors and covectors so that,

$$\underset{a=1}{\overset{p}{\bigotimes}} \pmb{\theta}^{i_a} \underset{b=1}{\overset{q}{\bigotimes}} \pmb{e}_{j_b} : \underset{a=1}{\overset{p}{\bigotimes}} V \underset{b=1}{\overset{q}{\bigotimes}} V^* \mapsto \mathcal{I} \left[ V^{p+q} \right] = \mathcal{I} \left[ \left( V^* \right)^{p+q} \right]$$

where $\mathcal{I}$ is the identity map. Now writing the above explicitly, we get,

$$\underset{a=1}{\overset{p}{\bigotimes}} \pmb{\theta}^{i_a} \underset{b=1}{\overset{q}{\bigotimes}} \pmb{e}_{j_b} \left[ \underset{a=1}{\overset{p}{\bigotimes}} \pmb{e}_{k_a} \underset{b=1}{\overset{q}{\bigotimes}} \pmb{\theta}^{l_b} \right] = \prod_{a=1}^p \delta^{i_a}_{\phantom{i_a} k_a} \prod_{b=1}^q \delta^{l_b}_{\phantom{l_b} j_b}$$

The components of a tensor can now be written as,

$$T^{i_1 \dots i_p}_{\phantom{i_1 \dots i_p} j_1 \dots j_q} = \underset{a=1}{\overset{p}{\bigotimes}} \pmb{\theta}^{i_a} \underset{b=1}{\overset{q}{\bigotimes}} \pmb{e}_{j_b} \left[ \pmb{T} \left( \pmb{\theta}^{i_1}, \cdots, \pmb{\theta}^{i_p}, \pmb{e}_{j_1}, \dots, \pmb{e}_{j_q} \right) \right]$$

To simplify our lives, let us represent tuples of indices with their capital letter, e.g. $I \equiv i_1 \dots i_p$ . Also, let us write any multiplication of tensor components, or tensors, with a capital letter, along with tuples for the indices. Lastly, let the tensor product symbol be omitted altogether. Then, the previous set of equations becomes more readable,

$$
\begin{align}
\pmb{T} \left( \pmb{\Theta}^I, \pmb{E}_J \right) & = T^K_{\phantom{K} L} \: \pmb{E}_K \pmb{\Theta}^L \\
T^K_{\phantom{K} L} & = \pmb{\Theta}^K \pmb{E}_L \left[ \pmb{T} \left( \pmb{\Theta}^I, \pmb{E}_J \right) \right]
\end{align}
$$

Under a change of coordinates represented by a Jacobian $\Lambda^{j^\prime}_{\phantom{j^\prime} j}$ , the coordinates of a tensor transform as,

$$\begin{align}
T^{i_1^\prime \dots i_p^\prime}_{\phantom{i_1^\prime \dots i_p^\prime} j_1^\prime \dots j_q^\prime} & = T \left( \pmb{\theta}^{i_1^\prime}, \dots, \pmb{\theta}^{i_p^\prime}, \pmb{e}_{j_1^\prime}, \dots, \pmb{e}_{j_q^\prime} \right) \\
 & = T \left( \Lambda^{i_1^\prime}_{\phantom{i_1^\prime} i_1} \pmb{\theta}^{i_1}, \dots, \Lambda^{i_p^\prime}_{\phantom{i_p^\prime} i_p} \pmb{\theta}^{i_p}, \Lambda^{j_1}_{\phantom{j_1} j_1^\prime} \pmb{e}_{j_1}, \dots, \Lambda^{j_q}_{\phantom{j_q} j_q^\prime} \pmb{e}_{j_q} \right)
\end{align}$$

By multilinearity,

$$
\begin{align}
T^{i_1^\prime \dots i_p^\prime}_{\phantom{i_1^\prime \dots i_p^\prime} j_1^\prime \dots j_q^\prime} & = \Lambda^{i_1^\prime}_{\phantom{i_1^\prime} i_1} \dots \Lambda^{i_p^\prime}_{\phantom{i_p^\prime} i_p} \: T \left( \pmb{\theta}^{i_1}, \dots, \pmb{\theta}^{i_p}, \pmb{e}_{j_1}, \dots, \pmb{e}_{j_q} \right) \Lambda^{j_1}_{\phantom{j_1} j_1^\prime} \dots \Lambda^{j_q}_{\phantom{j_q} j_q^\prime} \\
T^{i_1^\prime \dots i_p^\prime}_{\phantom{i_1^\prime \dots i_p^\prime} j_1^\prime \dots j_q^\prime} & = \Lambda^{i_1^\prime}_{\phantom{i_1^\prime} i_1} \dots \Lambda^{i_p^\prime}_{\phantom{i_p^\prime} i_p} \: T^{i_1 \dots i_p}_{\phantom{i_1 \dots i_p} j_1 \dots j_q} \Lambda^{j_1}_{\phantom{j_1} j_1^\prime} \dots \Lambda^{j_q}_{\phantom{j_q} j_q^\prime} \\
T^{i_1^\prime \dots i_p^\prime}_{\phantom{i_1^\prime \dots i_p^\prime} j_1^\prime \dots j_q^\prime} & = \left( \prod_{a=1}^p \Lambda^{i_a^\prime}_{\phantom{i_a^\prime} i_a} \prod_{b=1}^q \Lambda^{j_b}_{\phantom{j_b} j_b^\prime} \right) T^{i_1 \dots i_p}_{\phantom{i_1 \dots i_p} j_1 \dots j_q}
\end{align}
$$

Or using the tuple notation for indices,

$$T^{I^\prime}_{\phantom{I^\prime} J^\prime} = \Lambda^{I^\prime}_{\phantom{I^\prime} I} \: T^I_{\phantom{I} J} \: \Lambda^J_{\phantom{J} J^\prime}$$

This is known as the tensor transformation law. Note that the notation for the Jacobian is a slight deviation from the regular tuple notation, in that $\Lambda^{I^\prime}_{\phantom{I^\prime} I}$ is _not_ some tensor $\Lambda^{i_1 \dots i_p}_{\phantom{i_1 \dots i_p} j_1 \dots j_q}$ , but a product of tensor components, $\Lambda^{i_1^\prime}_{\phantom{i_1^\prime} i_1} \dots \Lambda^{i_p^\prime}_{\phantom{i_p^\prime} i_p}$ . This will be the only exception in the tuple notation.

## Invariance

Under a change of coordinates $\Lambda^{j^\prime}_{\phantom{j^\prime} j}$ , the components of $\pmb{T}$ transform but $\pmb{T}$ itself remains invariant:

$$
\begin{align}
\pmb{T}^\prime & = T^{I^\prime}_{\phantom{I^\prime} J^\prime} \: \pmb{E}_{I^\prime} \pmb{\Theta}^\prime \\
 & = \Lambda^{I^\prime}_{\phantom{I^\prime} I} \: T^I_{\phantom{I} J} \: \Lambda^J_{\phantom{J} J^\prime} \: \Lambda^K_{\phantom{K} I^\prime} \Lambda^{J^\prime}_{\phantom{J^\prime} L} \: \pmb{E}_K \pmb{\Theta}^L \\
 & = \Lambda^{I^\prime}_{\phantom{I^\prime} I} \Lambda^K_{\phantom{K} I^\prime} \Lambda^J_{\phantom{J} J^\prime} \Lambda^{J^\prime}_{\phantom{J^\prime} L} \: T^I_{\phantom{I} J} \: \pmb{E}_K \pmb{\Theta}^L \\
 & = \Delta^K_{\phantom{K} I} \Delta^J_{\phantom{J} L} T^I_{\phantom{I} J} \: \pmb{E}_K \pmb{\Theta}^L \\
 & = T^I_{\phantom{I} J} \: \pmb{E}_I \pmb{\Theta}^J \\
 & = \pmb{T}
\end{align}
$$

where $\Delta^K_{\phantom{K} I} = \delta^{k_1}_{\phantom{k_1} i_1} \dots \delta^{k_p}_{\phantom{k_p} i_p}$ . Once again, we see a deviation from the regular tuple notation, of similar kind as in the case of the Jacobian $\pmb{\Lambda}$ . This is not another exception to the notation; the Kronecker delta $\pmb{\delta}$ is a special kind of Jacobian, which maps a vector space to itself.