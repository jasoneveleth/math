---
title: Linear Regression
author: jason
date: 2021-07-11
---

# Theory

We are trying to find the line of best fit given a collections of coordinates. 
For example, $\{(x_1, y_1), (x_2,y_2), (x_3, y_3), \dots\}$. We would like to
find $m,b$ such that $y = mx + b$ minimizes the sum of the residuals squared. By
that I mean we want to minimize a function $L(\alpha) = \sum_i (y_i - (mx_i + b))^2$, by
finding the best $m$ and $b$.

We need to set up some definitions. Let
$$y = \begin{bmatrix}y_1\\y_2\\y_3\\y_4\\\dots\end{bmatrix},
X = \begin{bmatrix}x_1 & 1\\x_2 & 1\\x_3 & 1\\x_4 & 1\\\dots & \dots\end{bmatrix},
\alpha = \begin{bmatrix}m\\b\end{bmatrix}.$$

So our goal is:
$$\min_\alpha L(\alpha)$$
$$=\min_\alpha \sum ((y_i) - (m x_i + b))^2$$
Recall from [vectors](vectors.md.html) that $\sum_i x_i^2 =
\lVert x \rVert^2$
$$=\min_\alpha \left\lVert \begin{bmatrix}(y_1 - (m x_1 + b))\\(y_2 - (m x_2 + b))\\(y_3 - (m x_3 + b))\\(y_4 - (m x_4 + b))\\\dots\end{bmatrix}\right\rVert^2$$
$$=\min_\alpha \lVert y - X\alpha\rVert^2$$
Recall that $\lVert x \rVert^2 = x^Tx$.
$$=\min_\alpha (y-X\alpha)^T(y - X\alpha)$$
Recall that $(A + B)^T = A^T + B^T$ and $(AB)=B^TA^T$.
$$=\min_\alpha (y^T - \alpha^TX^T)(y - X\alpha)$$
$$=\min_\alpha y^Ty - \alpha^TX^Ty - y^TX\alpha + \alpha^TX^TX\alpha$$

To minimize this, we find the critical points of the function. We do this by finding where
the [gradient](gradient.md.html) of $L(\alpha)$ is $0$.

$$0 = \frac{d}{d\alpha} L(\alpha)$$
$$= \frac{d}{d\alpha} (y^Ty - \alpha^TX^Ty - y^TX\alpha + \alpha^TX^TX\alpha)$$
$$=\frac{d}{d\alpha} (y^Ty) - \frac{d}{d\alpha} (\alpha^TX^Ty) - \frac{d}{d\alpha} (y^TX\alpha) + \frac{d}{d\alpha} (\alpha^TX^TX\alpha)$$
Recall from [vector derivatives](vector_derivatives.md.html): $\frac{d}{dx} ( u^Tx)
= u^T$, $\frac{d}{dx} (x^Tu) = u^T$, and $\frac{d}{dx}(x^Tx) =
\frac{d}{dx}(\bar{x}^Tx) + \frac{d}{dx}(x^T\bar{x})$.[^1]
$$= 0 - (X^Ty)^T - y^TX + \frac{d}{d\alpha} (\alpha^TX^TX\bar{\alpha}) + \frac{d}{d\alpha} (\bar{\alpha}^TX^TX\alpha)$$
$$= -y^TX - y^TX + (X^TX\alpha)^T + \alpha^TX^TX$$
$$=-2y^TX + \alpha^T(X^TX)^T + \alpha^TX^TX$$
$$=-2y^TX + \alpha^TX^TX + \alpha^TX^TX$$
$$=-2y^TX + 2\alpha^TX^TX$$

And now for the glorious part (who am I kidding, this whole thing has been
glorious),

$$2y^TX=2\alpha^TX^TX$$
$$y^TX=\alpha^T(X^TX)$$
$$y^TX(X^TX)^{-1} = \alpha^T = \begin{bmatrix}m & b\end{bmatrix}$$

# Examples

Say we are given this set of coordinates: 
$\{(1.3, 0.8), (3.2, 3.5), (5.6, 6.4), (8.5, 7.7)\}$. Then we need to open 
`julia` and give give it the vectors (some output omitted):
```julia
julia> y = [0.8; 3.5; 6.4; 7.7]
julia> X = [1.3 1; 3.2 1; 5.6 1; 8.5 1]
julia> yt = transpose(y)
julia> Xt = transpose(X)
julia> yt * X * inv(Xt * X)
1×2 transpose(::Vector{Float64}) with eltype Float64:
 0.962823  0.122874

```

Which gives us our desired line of best fit: $y = 0.962823x + 0.122874$.



[^1]: The bar in $\bar{\alpha}$ or $\bar{x}$ means treat it as a constant, in
  the same way that you would if you were doing the product rule with single
  valued functions: $\frac{d}{dx}(f(x)g(x)) = \frac{d}{dx}(f(x)\bar{g}(x)) +
  \frac{d}{dx}(\bar{f}(x) g(x))$.

