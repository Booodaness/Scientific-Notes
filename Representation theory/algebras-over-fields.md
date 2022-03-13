# Algebras in brief

#algebras #tensors #bilinear-products

## J tensor

### Definition

In the [[bilinear-products#Components|component representation of bilinear products as linear maps]], we have a product of Jacobian components on the right hand side:

$\Lambda^{I^\prime}_{\phantom{I^\prime} I} \Lambda^{J}_{\phantom{L} J^\prime} = \Lambda^{i_1^\prime}_{\phantom{i_1^\prime} i_1} \dots \Lambda^{i_p^\prime}_{\phantom{i_p^\prime} i_p} \Lambda^{j_1}_{\phantom{j_1} j_1^\prime} \dots \Lambda^{j_q}_{\phantom{j_q} j_q^\prime}$

Does the above expression transform like a [[tensors|tensor]]? To answer this question, let us first define a tensor $\pmb{J}$ so that its components are the same as the above product of Jacobian components,

$\pmb{J} = \Lambda^{I^\prime}_{\phantom{I^\prime} I} \Lambda^{J}_{\phantom{L} J^\prime} \: \pmb{E}_{I^\prime J} \pmb{\Theta}^{I J^\prime}$

The components of the above tensor are as expected,

$$J^{I^\prime \phantom{I} J}_{\phantom{I^\prime} I \phantom{J} J^\prime} = \Lambda^{I^\prime}_{\phantom{I^\prime} I} \Lambda^{J}_{\phantom{L} J^\prime}$$

As usual, capital letters for indices represent their tuples, except for the Jacobian. To verify that the above components transform like a tensor, instead of doing so manually, we can transform all primed indices to unprimed ones and verify that $\pmb{J}$ is a tensor. From the [[tensors#Invariance|previous such endeavour]], we know that doing so means replacing Jacobians by Kronecker deltas,

$J^{I \phantom{J} K}_{\phantom{I} J \phantom{K} L} = \Delta^{I}_{\phantom{I} J} \Delta^{K}_{\phantom{K} L}$

Since an identity map is always invariant, $\pmb{J}$ is a tensor.

### Basis

We have seen that the basis for a J tensor is of the form $\pmb{E}_{I^\prime J} \pmb{\Theta}^{I J^\prime}$ . However, we can use bilinear products to construct a different basis for J tensors:

$$
\begin{align}
\pmb{J} & = \Lambda^{I^\prime}_{\phantom{I^\prime} I} \Lambda^{J}_{\phantom{L} J^\prime} \: \pmb{E}_{I^\prime J} \pmb{\Theta}^{I J^\prime} \\
 & = \Phi^K_{\phantom{K} L} \: B^{L \phantom{K} J \phantom{I} I^\prime}_{\phantom{L} K \phantom{J} I \phantom{I^\prime} J^\prime} \: \pmb{E}_{I^\prime J} \pmb{\Theta}^{I J^\prime} \\
 & = \Phi^K_{\phantom{K} L} \pmb{\Theta}^{I^\prime} \pmb{E}_{J^\prime} \left[ \pmb{\mathcal{B}} \left( \pmb{E}_K \pmb{\Theta}^L, \pmb{E}_I \pmb{\Theta}^J \right) \right] \pmb{E}_{I^\prime J} \pmb{\Theta}^{I J^\prime} \\
 & = \Phi^K_{\phantom{K} L} \: \pmb{\mathcal{B}} \left( \pmb{E}_K \pmb{\Theta}^L, \pmb{E}_I \pmb{\Theta}^J \right) \pmb{E}_J \pmb{\Theta}^I
\end{align}
$$

Therefore, in the basis $\pmb{\mathcal{B}} \left( \pmb{E}_K \pmb{\Theta}^L, \pmb{E}_I \pmb{\Theta}^J \right) \pmb{E}_J \pmb{\Theta}^I$  , the coordinates of $\pmb{J}$ are $\Phi^{K}_{\phantom{K} L}$ .

Note that the basis above is not a covariant one.

### As a vector space

Since $\pmb{J}$ has a basis $\pmb{\mathcal{B}} \left( \pmb{E}_K \pmb{\Theta}^L, \pmb{E}_I \pmb{\Theta}^J \right) \pmb{E}_J \pmb{\Theta}^I$  , a corresponding vector space can be constructed from the span of the basis. [^1] Elements belonging to the vector space, by definition, can be added with each other and multiplied by scalars:

[^1]: Technically, what we're constructing here is a [vector bundle](https://en.wikipedia.org/wiki/Vector_bundle) $\pmb{J}$ parameterized by the vector space $\pmb{\Phi}$ .

$$
\begin{align}
\sum_n \pmb{J}_{\left( n \right)} & = \sum_n \Phi^{\phantom{\left( n \right)} K}_{\left( n \right) \phantom{K} L} \: \pmb{\mathcal{B}} \left( \pmb{E}_K \pmb{\Theta}^L, \pmb{E}_I \pmb{\Theta}^J \right) \pmb{E}_J \pmb{\Theta}^I \\
\lambda \cdot \pmb{J} & = \left( \lambda \: \Phi^K_{\phantom{K} L} \right) \pmb{\mathcal{B}} \left( \pmb{E}_K \pmb{\Theta}^L, \pmb{E}_I \pmb{\Theta}^J \right) \pmb{E}_J \pmb{\Theta}^I
\end{align}
$$

The subscript $n$ has been enclosed in brackets to remind us that it labels different J tensors, not any index.

## Algebra

### Definition

An _algebra_ $\left( U, \mathcal{B} \right)$ is a vector space $U$ equipped with a bilinear product $\mathcal{B}:U \mapsto U$ .

For our interests, $U$ is the vector space corresponding to $J$ and $\mathcal{B}$ is a bilinear product on the tensors associated with $J$ .

### Characterization

An algebra is characterized by any two of the following three objects:

1. A vector space parameterized in a basis $\Phi^K_{\phantom{K} L}$ by components $\pmb{E}_K \pmb{\Theta}^L$

2. A bilinear operator $\pmb{\mathcal{B}}$ whose action on basis vectors is defined by its components,

$\pmb{\mathcal{B}} \left( \pmb{E}_K \pmb{\Theta}^L, \pmb{E}_I \pmb{\Theta}^J \right) = B^{L \phantom{K} J \phantom{I} I^\prime}_{\phantom{L} K \phantom{J} I \phantom{I^\prime} J^\prime} \: \pmb{E}_{I^\prime} \pmb{\Theta}^{J^\prime}$

3. The Jacobian $\pmb{\Lambda}$ for the unprimed and primed coordinates, or equivalently, the corresponding J tensor $\pmb{J}$

The reason we need only _two_ of the above objects is that the three objects have a multilinear relationship, allowing any unknown object to be determined from the remaining two when they are known:

$\Phi^K_{\phantom{K} L} B^{L \phantom{K} J \phantom{I} I^\prime}_{\phantom{L} K \phantom{J} I \phantom{I^\prime} J^\prime} = \Lambda^{I^\prime}_{\phantom{I^\prime} I} \Lambda^{J}_{\phantom{L} J^\prime} = J^{I^\prime \phantom{I} J}_{\phantom{I^\prime} I \phantom{J} J^\prime}$

### Implicit relationships

If two of the three objects that can be used to characterize an algebra have a multilinear relationship of their own (an '_implicit relationship_'), then one necessarily needs only _one_ object to characterize the algebra, as the other two can be obtained from the [[bilinear-products#Bilinear products as linear maps|usual multilinear relationship]] and the implicit relationship.

## Degrees of freedom

### Definition

The _degrees of freedom_ of a tensor are its independent components. The number of degrees of freedom of a tensor remains the same no matter the basis.

For example, consider (without loss of generality) a rank-2 tensor whose components in some basis are $T^i_{\phantom{i} j} = T^i_{\phantom{i} f \left( i \right)}$ . Since the second index, $j = f \left( i \right)$ is related to $i$  , there is only one independent index. If we transform the coordinates to a primed frame, this fact isn't changed,

$$
\begin{align}
T^{i^\prime}_{\phantom{i^\prime} j^\prime} & = \Lambda^{i^\prime}_{\phantom{i^\prime} i} T^i_{\phantom{i} j} \Lambda^{j}_{\phantom{j} j^\prime} \\
 & = \Lambda^{i^\prime}_{\phantom{i^\prime} i} T^i_{\phantom{i} f \left( i \right)} \Lambda^{f \left( i \right)}_{\phantom{f \left( i \right)} f \left( i^\prime \right)}
\end{align}
$$

### Representation theory

_Representation theory_ is a discipline in which algebra is studied by representing elements of algebraic structures as multilinear relationships.

We will represent $\pmb{J}$ as a tensor in an implicit basis. Our little 'magic trick' will be to identify the degrees of freedom in $J^{I^\prime \phantom{I} J}_{\phantom{I^\prime} I \phantom{J} J^\prime}$ with a vector space parameterized by $\Phi^K_{\phantom{K} L}$ . All remaining components of $\pmb{J}$ will be some function of some component(s) of $\pmb{\Phi}$ .

Thus, we are establishing an implicit relationship between $\pmb{J}$ and $\pmb{\Phi}$  , thereby reducing the characterization of algebra to only one object of the three we have seen.

### The Jacobian

Geometry is an important aspect of algebra. We will formally define it in the next post, but until then, it is useful to know that the geometry of an algebra is determined by its Jacobian. In representation theory, the degrees of freedom of the Jacobian carry all the information necessary to determine the geometry of an algebra.

It had been said in the previous subsection that we are considering the degrees of freedom of a J tensor. Since it is built using the Jacobian in a reversible manner, the number of degrees of freedom remain the same in both. But the Jacobian, a rank-2 tensor, can have no more than $D^2$ components $\Lambda^{i^\prime}_{\phantom{i^\prime} i}$  , and hence those many degrees of freedom, given a $D$ dimensional vector space.

This means that to represent $\pmb{\Lambda}$ by $\pmb{\Phi}$ in an implicit basis, $\pmb{\Phi}$ need not have a higher rank than that of the Jacobian, 2, as higher-rank terms become redundant! Furthermore, even rank-2 representations are redundant, as we already have the components of the Jacobian in its rank-2 tensor.

This severe restriction implies that it is useful to only study algebras whose underlying Jacobian in $D$ dimensions has $D$ degrees of freedom. In other words, $\Lambda^{i^\prime}_{\phantom{i^\prime} i}$ must be characterized entirely by some vector $\phi^k$ (or its dual).

## Vector algebra

### Structure

As per the restriction of algebra to vectors (or covectors) to reduce redundancy, we will require one of the following elements to characterize a _vector algebra_:

1. A Jacobian $\Lambda^{i^\prime}_{\phantom{i^\prime} i}$ . Since we are dealing with a rank-1 algebra i.e. vector algebra, the Jacobian _is_ the J tensor for the algebra.

2. A vector $\phi^k$ which packs the degrees of freedom of $\Lambda^{i^\prime}_{\phantom{i^\prime} i}$ .

3. A bilinear product $\pmb{\mathcal{B}}$ which operates on basis vectors as, $\pmb{\mathcal{B}} \left( \pmb{e}_k, \pmb{e}_i \right) = B^{i^\prime}_{\phantom{i^\prime} ki} \pmb{e}_{i^\prime}$ .

As usual, the multilinear relationship between the above elements is,

$\phi^k B^{i^\prime}_{\phantom{i^\prime} ki} = \Lambda^{i^\prime}_{\phantom{i^\prime} i}$

And the action of the linear map above on a vector $x^i$ is,

$\phi^k B^{i^\prime}_{\phantom{i^\prime} ki} x^i = \Lambda^{i^\prime}_{\phantom{i^\prime} i} x^i = x^{i^\prime}$

### Characterization

Now that we know one of the three usual objects will be required to characterize a vector algebra, which one do we choose?

An algebra is described by its underlying Jacobian. Therefore, the form of the Jacobian is a sensible parameter for an algebraic structure. Due to the whole [[algebras-over-fields#Degrees of freedom|degrees of freedom]] jargon, the form of the vector space representing the Jacobian comes for free. This means that to complete our description of an algebra, we must find the bilinear product from the Jacobian.

We will explore the above procedure in [[complex-numbers-quaternions]] and [[gamma-matrices]].

## Examples

![[complex-numbers-quaternions]]
