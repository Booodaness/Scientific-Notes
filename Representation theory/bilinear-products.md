# Bilinear Products

## Definition

Given a vector space $V$ , its dual space $V^\text{*}$ and rank $\left( p, q \right)$ [[tensors]] $\pmb{\Phi}$ and $\pmb{T}$ , a _bilinear product_ $\mathcal{B}$ is a bilinear map,

$\mathcal{B} \left( \pmb{\Phi}, \pmb{T} \right) \in \underset{i=1}{\overset{p}{\bigotimes}} V \underset{j=1}{\overset{q}{\bigotimes}} V^\text{*}$

Thus, $\mathcal{B}$ linearly maps a pair of tensors belonging to the same tensor space, to another tensor in the same tensor space.

As the name suggests, bilinear products are bilinear, i.e. linear in both their arguments,

$$
\begin{align}
\mathcal{B} \left( \sum_i \pmb{\Phi_i}, \pmb{T} \right) & = \sum_i \mathcal{B} \left( \pmb{\Phi}_i, \pmb{T} \right) \\
\mathcal{B} \left( \pmb{\Phi_i}, \sum_j \pmb{T_j} \right) & = \sum_j \mathcal{B} \left( \pmb{\Phi}, \pmb{T}_j \right) \\
\implies \mathcal{B} \left( \sum_i \pmb{\Phi_i}, \sum_j \pmb{T_j} \right) & = \sum_i \sum_j \mathcal{B} \left( \pmb{\Phi}_i, \pmb{T}_j \right)
\end{align}
$$


## Components

Given the components of two tensors, by bilinearity, their bilinear product can be expressed as,

$$
\begin{align}
\pmb{\mathcal{B}} \left( \pmb{\Phi}, \pmb{T} \right) & = \pmb{\mathcal{B}} \left( \Phi^I_{\phantom{I} J} \: \pmb{E}_I \pmb{\Theta}^J, T^K_{\phantom{K} L} \: \pmb{E}_K \pmb{\Theta}^L \right) \\
 & = \Phi^I_{\phantom{I} J} \: \pmb{\mathcal{B}} \left( \pmb{E}_I \pmb{\Theta}^J, \pmb{E}_K \pmb{\Theta}^L \right) \: T^K_{\phantom{K} L}
\end{align}
$$

In the context of the above, the components $B^{J \phantom{I} L \phantom{K} M}_{\phantom{J} I \phantom{L} K \phantom{M} N}$ of $\mathcal{B}$ may be defined as,

$$
\begin{align}
\pmb{\mathcal{B}} \left( \pmb{E}_I \pmb{\Theta}^J, \pmb{E}_K \pmb{\Theta}^L \right) & = B^{J \phantom{I} L \phantom{K} M}_{\phantom{J} I \phantom{L} K \phantom{M} N} \: \pmb{E}_M \pmb{\Theta}^N \\
\implies B^{J \phantom{I} L \phantom{K} M}_{\phantom{J} I \phantom{L} K \phantom{M} N} & = \pmb{\Theta}^M \pmb{E}_N \left[ \pmb{\mathcal{B}} \left( \pmb{E}_I \pmb{\Theta}^J, \pmb{E}_K \pmb{\Theta}^L \right) \right]
\end{align}
$$

It is noteworthy that in the above, odd tuples i.e. $I, K, M$ are indices running from $1$ to $p$ , coupled with $V$ ; while even tuples $J, L, N$ run from $1$ to $q$ coupled with $V^\text{*}$ .

We know that $\pmb{\mathcal{B}} \left( \pmb{\Phi}, \pmb{T} \right)$ is a tensor in the same space as its arguments, but that does not immediately justify that the components of $\pmb{\mathcal{B}}$ as we defined them transform like tensor components. Instead, we will have to verify that manually,

$$
\begin{align}
B^{J^\prime \phantom{I^\prime} L^\prime \phantom{K^\prime} M^\prime}_{\phantom{J^\prime} I^\prime \phantom{L^\prime} K^\prime \phantom{M^\prime} N^\prime} & = \pmb{\Theta}^{M^\prime} \pmb{E}_{N^\prime} \left[ \pmb{\mathcal{B}} \left( \pmb{E}_{I^\prime} \pmb{\Theta}^{J^\prime}, \pmb{E}_{K^\prime} \pmb{\Theta}^{L^\prime} \right) \right] \\
 & = \pmb{\Theta}^{M^\prime} \pmb{E}_{N^\prime} \left[ \pmb{\mathcal{B}} \left( \Lambda^I_{\phantom{I} I^\prime} \Lambda^{J^\prime}_{\phantom{J^\prime} J} \: \pmb{E}_{I} \pmb{\Theta}^{J}, \Lambda^K_{\phantom{K} K^\prime} \Lambda^{L^\prime}_{\phantom{L^\prime} L} \: \pmb{E}_{K} \pmb{\Theta}^{L} \right) \right] \\
 & = \pmb{\Theta}^{M^\prime} \pmb{E}_{N^\prime} \left[ \Lambda^I_{\phantom{I} I^\prime} \Lambda^{J^\prime}_{\phantom{J^\prime} J} \: \pmb{\mathcal{B}} \left( \pmb{E}_{I} \pmb{\Theta}^{J}, \pmb{E}_{K} \pmb{\Theta}^{L} \right) \: \Lambda^K_{\phantom{K} K^\prime} \Lambda^{L^\prime}_{\phantom{L^\prime} L} \right] \\
 & = \Lambda^I_{\phantom{I} I^\prime} \Lambda^{J^\prime}_{\phantom{J^\prime} J} \Lambda^K_{\phantom{K} K^\prime} \Lambda^{L^\prime}_{\phantom{L^\prime} L} \pmb{\Theta}^{M^\prime} \pmb{E}_{N^\prime} \left[ \pmb{\mathcal{B}} \left( \pmb{E}_{I} \pmb{\Theta}^{J}, \pmb{E}_{K} \pmb{\Theta}^{L} \right) \right] \\
 & = \Lambda^I_{\phantom{I} I^\prime} \Lambda^{J^\prime}_{\phantom{J^\prime} J} \Lambda^K_{\phantom{K} K^\prime} \Lambda^{L^\prime}_{\phantom{L^\prime} L} \left( \Lambda^{M^\prime}_{\phantom{M^\prime} M} \Lambda^{N}_{\phantom{N} N^\prime} \pmb{\Theta}^M \pmb{E}_N \right) \left[ \pmb{\mathcal{B}} \left( \pmb{E}_{I} \pmb{\Theta}^{J}, \pmb{E}_{K} \pmb{\Theta}^{L} \right) \right] \\
 & = \Lambda^I_{\phantom{I} I^\prime} \Lambda^{J^\prime}_{\phantom{J^\prime} J} \Lambda^K_{\phantom{K} K^\prime} \Lambda^{L^\prime}_{\phantom{L^\prime} L} \Lambda^{M^\prime}_{\phantom{M^\prime} M} \Lambda^{N}_{\phantom{N} N^\prime} \pmb{\Theta}^M \pmb{E}_N \left[ \pmb{\mathcal{B}} \left( \pmb{E}_{I} \pmb{\Theta}^{J}, \pmb{E}_{K} \pmb{\Theta}^{L} \right) \right] \\
 & = \Lambda^I_{\phantom{I} I^\prime} \Lambda^{J^\prime}_{\phantom{J^\prime} J} \Lambda^K_{\phantom{K} K^\prime} \Lambda^{L^\prime}_{\phantom{L^\prime} L} \Lambda^M_{\phantom{M} M^\prime} \Lambda^{N^\prime}_{\phantom{N^\prime} N} \: B^{J \phantom{I} L \phantom{K} M}_{\phantom{J} I \phantom{L} K \phantom{M} N}
\end{align}
$$

Thus, the components of $\mathcal{B}$ indeed transform like that of a tensor! In fact, given a rank $\left( p, q \right)$ tensor, the said components represent a rank $\left( 2q+p, 2p+q \right)$ tensor.

## Components: a closer look

We have seen above how $B^{J \phantom{I} L \phantom{K} M}_{\phantom{J} I \phantom{L} K \phantom{M} N}$ transforms like a tensor. It must be noted though, that the bilinear product formed from these components alone is not a tensor. I.e., the following quantity does not transform like a tensor,

$\pmb{\mathcal{B}} \left( \pmb{E}_I \pmb{\Theta}^J, \pmb{E}_K \pmb{\Theta}^L \right) = B^{J \phantom{I} L \phantom{K} M}_{\phantom{J} I \phantom{L} K \phantom{M} N} \: \pmb{E}_M \pmb{\Theta}^N$

Looking at the indices, the above map itself (with its components and basis) transforms like the components (not the entire map) of a rank $\left( 2q, 2p \right)$ tensor. We can use this fact to construct a tensor,

$$
\begin{align}
\pmb{B} & = \pmb{\mathcal{B}} \left( \pmb{E}_I \pmb{\Theta}^J, \pmb{E}_K \pmb{\Theta}^L \right) \pmb{E}_{J L} \pmb{\Theta}^{IK} \\
 & = B^{J \phantom{I} L \phantom{K} M}_{\phantom{J} I \phantom{L} K \phantom{M} N} \: \pmb{E}_M \pmb{\Theta}^N \pmb{E}_{J L} \pmb{\Theta}^{IK}
\end{align}
$$

where $\pmb{E}_{JL} = \pmb{E}_J \otimes \pmb{E}_L$ and $\pmb{\Theta}^{IK} = \pmb{\Theta}^I \otimes \pmb{\Theta}^K$ . Note that the above tensor is labelled as $\pmb{B}$ , which is different from the calligraphic label $\pmb{\mathcal{B}}$ for the tensor generated from two other tensors by a bilinear product.

## Bilinear products as linear maps

When only one argument is passed to a bilinear product, it acts as a linear map on the vector space parameterized by the other argument,

$$
\begin{align}
\mathcal{B} \left( \pmb{\Phi}, \cdot \right) \left( \sum_j \pmb{T_j} \right) & = \sum_j \pmb{\mathcal{B}} \left( \pmb{\Phi}, \cdot \right) \left( \pmb{T_j} \right) \\
\pmb{\mathcal{B}} \left( \cdot, \pmb{T} \right) \left( \sum_i \pmb{\Phi_i} \right) & = \sum_i \pmb{\mathcal{B}} \left( \cdot, \pmb{T} \right) \left( \pmb{\Phi_i} \right)
\end{align}
$$

In the component form,

$$
\begin{align}
\pmb{\mathcal{B}} \left( \pmb{\Phi}, \cdot \right) & = \pmb{\mathcal{B}} \left( \Phi^{I}_{\phantom{I} J} \: \pmb{E}_I \pmb{\Theta}^J, \cdot \right) \\
 & = \Phi^I_{\phantom{I} J} \: B^{J \phantom{I} L \phantom{K} M}_{\phantom{J} I \phantom{L} K \phantom{M} N} \: \pmb{E}_M \pmb{\Theta}^N \\
 & = \Lambda^M_{\phantom{M} K} \Lambda^{L}_{\phantom{L} N} \: \pmb{E}_M \pmb{\Theta}^N
\end{align}
$$

By linear independence of the components of the tensors involved,

$$\Phi^I_{\phantom{I} J} \: B^{J \phantom{I} L \phantom{K} M}_{\phantom{J} I \phantom{L} K \phantom{M} N} = \Lambda^M_{\phantom{M} K} \Lambda^{L}_{\phantom{L} N}$$

In other words, given a basis, a tensor (or more generally, tensor field) and a bilinear product, one can covariantly transform the components of an arbitrary tensor in the same space as the one given. This will be the starting point in [[algebras]].
