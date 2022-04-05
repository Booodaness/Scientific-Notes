# Complex numbers and quaternions
#algebras #bilinear-products 

## Complex numbers
### 2-dimensional orthogonal group
Complex numbers are one of the most well-known [[algebras-over-fields]], in use ever since people tried to solve 'unsolvable' polynomial equations, such as $i^2 = -1$ . But they are now understood from a more fundamental perspective: group theory. It turns out that the complex numbers are much more than the set $\mathbb{C}$ . Coupled with the notions of addition and multiplication, this set forms the additive and multiplicative group of complex numbers, respectively, $\left( \mathbb{C}, + \right)$ and $\left( \mathbb{C}, \times \right)$ . These two groups are isomorphic to the two-dimensional translation group $\text{T} \left( 2 \right)$ and the orthogonal group $\text{O} \left( 2 \right)$ , respectively. The latter itself comprises the group of all scalars and rotations on $\mathbb{R}^2$ , i.e. $\left( \mathbb{R}, \times \right)$ and $\text{SO} \left( 2 \right)$ .

The algebra of complex numbers deals with their multiplicative group. Under multiplication, the action of complex numbers is that of scaling and rotating $\mathbb{C}$ . As the name 'orthogonal group' suggests, this transformation leaves initially orthogonal elements of $\mathbb{C}$ orthogonal. Two complex numbers $u, v \in \mathbb{C}$ are said to be orthogonal when $\left\langle u, v \right\rangle = \Re \left( u^* v \right) = \Re \left( u v^* \right) = 0$ . Equivalently, for a vector space isomorphic to $\mathbb{C}$ , such as $\mathbb{R}^2$ , orthogonality is defined analogously using the appropriate inner product.

However, the elements of $\text{O} \left( 2 \right)$ can be defined in a manner which will be useful for later generalization. Namely, when some $\pmb{\Lambda} \in \text{O} \left( 2 \right)$ is characterized by a $\pmb{\phi} \in \mathbb{R}^2$ , the following quantity is invariant: $\frac{\left\langle \pmb{\phi}, \pmb{\phi} \right\rangle}{\det \left( \pmb{\Lambda} \right)}$ .

Now, we will investigate the action of complex numbers on vectors belonging to $\mathbb{R}^2$ .

### Algebra
In the convenient Cartesian coordinate system, an orthogonal Jacobian $\Lambda^{i^\prime}_{\phantom{i^\prime} i}$ is always of the form,


$\Lambda^{i^\prime}_{\phantom{i^\prime} i} = \begin{pmatrix} a & -b \\ b & a \end{pmatrix}$

Indeed,

$$
\begin{align}
\frac{\left\langle \left( a, b \right), \left( a, b \right) \right\rangle}{\det \left( \Lambda^{i^\prime}_{\phantom{i^\prime} i} \right)} & = \frac{a^2+b^2}{a^2+b^2} \\
 & = 1 \\
 & = \text{constant}
\end{align}
$$

As required, the above Jacobian has only $2$ [[algebras-over-fields#Degrees of freedom|degrees of freedom]], the same as the dimension of the vector space it acts on. Now, the idea is to pack the degrees of freedom $\left( a, b \right)$ into a vector with those coordinates. In other words, every vector in the vector space represented by the variable ordered pair $\left( a, b \right)$ represents the corresponding Jacobian of the form seen above. Here, 'representation' implies a one-to-one map.

$\phi^k = \begin{pmatrix} a \\ b \end{pmatrix}$

Therefore, our problem becomes that of determining the coefficients $B^{i^\prime}_{\phantom{i^\prime} ki}$ . Recall that $\phi^k B^{i^\prime}_{\phantom{i^\prime} ki}$ produces a rotation and scaling described by $\Lambda^{i^\prime}_{\phantom{i^\prime} i}$ that acts on a vector on the right. For this reason, it is necessary to place $\phi^k$ on the left of $B^{i^\prime}_{\phantom{i^\prime} ki}$ as a _row_ matrix, even though it is a vector (typically represented as column matrices in some basis). This notational inconsistency will not emerge when we repeat this exercise in arbitrary coordinates (using tensors, as expected), but for now, we'll have to keep this little caveat in mind.

In the relation $\phi^k B^{i^\prime}_{\phantom{i^\prime} ki} = \Lambda^{i^\prime}_{\phantom{i^\prime} i}$ , we get two matrix equations, one for each $i^\prime$ (corresponding to rows, as $i^\prime$ is upstairs),

$$
\begin{align}
\begin{pmatrix} a & b \end{pmatrix} \begin{pmatrix} B^{0^\prime}_{\phantom{0^\prime}00} & B^{0^\prime}_{\phantom{0^\prime}01} \\ B^{0^\prime}_{\phantom{0^\prime}10} & B^{0^\prime}_{\phantom{0^\prime}11} \end{pmatrix} & = \begin{pmatrix} a & -b \end{pmatrix} \\
\begin{pmatrix} a & b \end{pmatrix} \begin{pmatrix} B^{1^\prime}_{\phantom{1^\prime}00} & B^{1^\prime}_{\phantom{1^\prime}01} \\ B^{1^\prime}_{\phantom{1^\prime}10} & B^{1^\prime}_{\phantom{1^\prime}11} \end{pmatrix} & = \begin{pmatrix} b & a \end{pmatrix}
\end{align}
$$

The only solution for $B^{i^\prime}_{\phantom{i^\prime} ki}$ which holds for arbitrary $\left( a, b \right)$ are immediately found to be,

$$
\begin{align}
\begin{pmatrix} B^{0^\prime}_{\phantom{0^\prime}00} & B^{0^\prime}_{\phantom{0^\prime}01} \\ B^{0^\prime}_{\phantom{0^\prime}10} & B^{0^\prime}_{\phantom{0^\prime}11} \end{pmatrix} & = \begin{pmatrix} 1 & 0 \\ 0 & -1 \end{pmatrix} \\
\begin{pmatrix} B^{1^\prime}_{\phantom{1^\prime}00} & B^{1^\prime}_{\phantom{1^\prime}01} \\ B^{1^\prime}_{\phantom{1^\prime}10} & B^{1^\prime}_{\phantom{1^\prime}11} \end{pmatrix} & = \begin{pmatrix} 0 & 1 \\ 1 & 0 \end{pmatrix}
\end{align}
$$

Recall what the [[bilinear-products#Components|components of a bilinear product]] mean:

$\pmb{\mathcal{B}} \left( \pmb{e}_k, \pmb{e}_i \right) = B^{i^\prime}_{\phantom{i^\prime} ki} \pmb{e}_{i^\prime}$

Let's find the products $\pmb{\mathcal{B}} \left( \pmb{e}_k, \pmb{e}_i \right)$ for all $\left( k, i \right)$ from the components $B^{i^\prime}_{\phantom{i^\prime} ki}$ we just found:

$$
\begin{align}
\pmb{\mathcal{B}} \left( \pmb{e}_0, \pmb{e}_0 \right) & = B^{0^\prime}_{\phantom{0^\prime}00} \pmb{e}_0 + B^{1^\prime}_{\phantom{1^\prime}00} \pmb{e}_1 = \pmb{e}_0 \\
\pmb{\mathcal{B}} \left( \pmb{e}_0, \pmb{e}_1 \right) & = B^{0^\prime}_{\phantom{0^\prime}01} \pmb{e}_0 + B^{1^\prime}_{\phantom{1^\prime}01} \pmb{e}_1 = \pmb{e}_1 \\
\pmb{\mathcal{B}} \left( \pmb{e}_1, \pmb{e}_0 \right) & = B^{0^\prime}_{\phantom{0^\prime}10} \pmb{e}_0 + B^{1^\prime}_{\phantom{1^\prime}10} \pmb{e}_1 = \pmb{e}_1 \\
\pmb{\mathcal{B}} \left( \pmb{e}_1, \pmb{e}_1 \right) & = B^{0^\prime}_{\phantom{0^\prime}11} \pmb{e}_0 + B^{1^\prime}_{\phantom{1^\prime}11} \pmb{e}_1 = - \pmb{e}_0 \\
\end{align}
$$

Now let us tabulate the above products like so,

$$
\begin{matrix}
\pmb{\mathcal{B}} & \pmb{e}_0 & \pmb{e}_1 \\
\pmb{e}_0 & \pmb{e}_0 & \pmb{e}_1 \\
\pmb{e}_1 & \pmb{e}_1 & - \pmb{e}_0
\end{matrix}
$$

This is isomorphic to the multiplication table for complex numbers!

$$
\begin{matrix}
\times & 1 & i \\
1 & 1 & i \\
i & i & - 1
\end{matrix}
$$

We have therefore derived the algebra of complex numbers purely from their underlying geometry, which has to do with the orthogonal group.

Let us now look at the 4-dimensional extension of complex numbers: quaternions.

## Quaternions
### 4-dimensional orthogonal group
Let $\mathbb{H}$ be the set of quaternions. The multiplicative group of quaternions, $\left( \mathbb{H}, \times \right)$ is isomorphic to the 4-dimensional orthogonal group, $\text{O} \left( 4 \right)$ .

Let us generalize [[complex-numbers-quaternions#Algebra|invariant quantity]] with regard to $\text{O} \left( 2 \right)$ . For a member of $\pmb{\Lambda} \in \text{O} \left( 4 \right)$ characterized by some $\pmb{\phi} \in \mathbb{R}^4$ , we have the invariant,

$$
\begin{align}
\frac{\left\langle \pmb{\phi}, \pmb{\phi} \right\rangle}{\det \left( \Lambda^{i^\prime}_{\phantom{i^\prime} i} \right)} & = 1 \\
\implies \det \left( \Lambda^{i^\prime}_{\phantom{i^\prime} i} \right) & = \left\langle \pmb{\phi}, \pmb{\phi} \right\rangle = \sum_{k=0}^3 \left( \phi^k \right)^2
\end{align}
$$

Which $4 \times 4$ matrix characterized by 4 numbers, say $a, b, c, d$ , necessarily has the determinant $a^2+b^2+c^2+d^2$? Instead of doing trial and error over the rather large space of $4 \times 4$ matrices, let us cheat and contract the 4 real numbers to 2 complex numbers $a+ib, \: c+id$ . These numbers implicitly contain their $2 \times 2$ matrices of the form,

$a + ib \equiv \begin{pmatrix} a & -b \\ b & a \end{pmatrix}$

Now, we can ask, which $2 \times 2$ matrix characterized by the two complex numbers has a determinant of:

$a^2 + b^2 + c^2 + d^2 = \left( a + ib \right) \left( a - ib \right) + \left( c + id \right) \left( c - id \right)$

The simplest solution is to form a $2 \times 2$ matrix with the above factors so that the usual expression for the determinant is the same as the above,

$\Lambda^{i^\prime}_{\phantom{i^\prime} i} \equiv \begin{pmatrix} \left( a + ib \right) & - \left( c+id \right) \\ \left( c - id \right) & \left( a - ib \right) \end{pmatrix}$

Expanding each complex entry in the above matrix as $2 \times 2$ matrices, we get,

$\Lambda^{i^\prime}_{\phantom{i^\prime} i} = \begin{pmatrix} a & -b & -c & -d \\ b & a & d & -c \\ c & d & a & b \\ -d & c & -b & a \end{pmatrix}$

### Algebra
Just as before, we want to characterize the above Jacobian using its [[algebras-over-fields#Degrees of freedom|degrees of freedom]], as,

$\phi^k = \begin{pmatrix} a \\ b \\ c \\ d \end{pmatrix}$

Now, we have to find the set of four $4 \times 4$ matrices, $B^{i^\prime}_{\phantom{i^\prime} k i}$ so that $\phi^k B^{i^\prime}_{\phantom{i^\prime} k i} = \Lambda^{i^\prime}_{\phantom{i^\prime} i}$ ,

$$
\begin{align}
\begin{pmatrix} a & b & c & d \end{pmatrix} \: \pmb{B}^{0^\prime}_{\phantom{0^\prime} ki} & = \begin{pmatrix} a & -b & -c & -d \end{pmatrix} \\
\begin{pmatrix} a & b & c & d \end{pmatrix} \: \pmb{B}^{1^\prime}_{\phantom{1^\prime} ki} & = \begin{pmatrix} b & a & d & -c \end{pmatrix} \\
\begin{pmatrix} a & b & c & d \end{pmatrix} \: \pmb{B}^{2^\prime}_{\phantom{2^\prime} ki} & = \begin{pmatrix} c & d & a & b \end{pmatrix} \\
\begin{pmatrix} a & b & c & d \end{pmatrix} \: \pmb{B}^{3^\prime}_{\phantom{3^\prime} ki} & = \begin{pmatrix} -d & c & -b & a \end{pmatrix}
\end{align}
$$

The appropriate $B^{i^\prime}_{\phantom{i^\prime} k i}$ can be found to be,

$$
\begin{align}
B^{0^\prime}_{\phantom{0^\prime} k i} & = \begin{pmatrix} 1 & 0 & 0 & 0 \\ 0 & -1 & 0 & 0 \\ 0 & 0 & -1 & 0 \\ 0 & 0 & 0 & -1 \end{pmatrix} \\
B^{1^\prime}_{\phantom{1^\prime} k i} & = \begin{pmatrix} 0 & 1 & 0 & 0 \\ 1 & 0 & 0 & 0 \\ 0 & 0 & 0 & -1 \\ 0 & 0 & 1 & 0 \end{pmatrix} \\
B^{2^\prime}_{\phantom{2^\prime} k i} & = \begin{pmatrix} 0 & 0 & 1 & 0 \\ 0 & 0 & 0 & 1 \\ 1 & 0 & 0 & 0 \\ 0 & 1 & 0 & 0 \end{pmatrix} \\
B^{3^\prime}_{\phantom{3^\prime} k i} & = \begin{pmatrix} 0 & 0 & 0 & 1 \\ 0 & 0 & -1 & 0 \\ 0 & 1 & 0 & 0 \\ -1 & 0 & 0 & 0 \end{pmatrix}
\end{align}
$$

Lastly, let us compute the bilinear products of every pair of basis vectors as $\pmb{\mathcal{B}} \left( \pmb{e}_k, \pmb{e}_i \right) = B^{i^\prime}_{\phantom{i^\prime} k i} \pmb{e}_{i^\prime}$ and tabulate the results,

$$
\begin{matrix}
\pmb{\mathcal{B}} & \pmb{e}_0 & \pmb{e}_1 & \pmb{e}_2 & \pmb{e}_3 \\
\pmb{e}_0 & \pmb{e}_0 & \pmb{e}_1 & \pmb{e}_2 & \pmb{e}_3 \\
\pmb{e}_1 & \pmb{e}_1 & - \pmb{e}_0 & \pmb{e}_3 & - \pmb{e}_2 \\
\pmb{e}_2 & \pmb{e}_2 & - \pmb{e}_3 & - \pmb{e}_0 & \pmb{e}_1 \\
\pmb{e}_3 & \pmb{e}_3 & \pmb{e}_2 & - \pmb{e}_1 & - \pmb{e}_0
\end{matrix}
$$

This corresponds to the Hamilton product table:

$$
\begin{matrix}
\times & 1 & i & j & k \\
1 & 1 & i & j & k \\
i & i & - 1 & k & - j \\
j & j & - k & - 1 & i \\
k & k & j & - i & - 1
\end{matrix}
$$

## Gamma matrices
### Complex numbers
For complex numbers, the components of the dual gamma matrices are found to be:

$$
\begin{align}
\pmb{\gamma}_0 & = \begin{pmatrix} 1 & 0 \\ 0 & 1 \end{pmatrix} \\
\pmb{\gamma}_1 & = \begin{pmatrix} 0 & -1 \\ 1 & 0 \end{pmatrix}
\end{align}
$$

### Quaternions
For quaternions, using the components of $B^{i^\prime}_{\phantom{i^\prime} k i}$ and the definition of the gamma matrices, we find,

$$
\begin{align}
\pmb{\gamma}_0 & = \begin{pmatrix} 1 & 0 & 0 & 0 \\ 0 & 1 & 0 & 0 \\ 0 & 0 & 1 & 0 \\ 0 & 0 & 0 & 1 \end{pmatrix} \\
\pmb{\gamma}_1 & = \begin{pmatrix} 0 & -1 & 0 & 0 \\ 1 & 0 & 0 & 0 \\ 0 & 0 & 0 & 1 \\ 0 & 0 & -1 & 0 \end{pmatrix} \\
\pmb{\gamma}_2 & = \begin{pmatrix} 0 & 0 & -1 & 0 \\ 0 & 0 & 0 & -1 \\ 1 & 0 & 0 & 0 \\ 0 & 1 & 0 & 0 \end{pmatrix} \\
\pmb{\gamma}_3 & = \begin{pmatrix} 0 & 0 & 0 & -1 \\ 0 & 0 & 1 & 0 \\ 0 & 1 & 0 & 0 \\ -1 & 0 & 0 & 0 \end{pmatrix} \\
\end{align}
$$