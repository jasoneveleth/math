---
title: Gradient
author: jason
date: 2021-07-12
---

# Theory

The gradient is like a derivative of a (single-valued) function that takes a vector as input. It
is a row vector. Given a vector $x$, and function $f$,
$$f(x) = \text{some function of }x_i.$$
The gradient is written $\nabla f(x)$,
$$\nabla f(x) = \begin{bmatrix}\frac{\partial f(x)}{\partial x_1} & \frac{\partial f(x)}{\partial x_2} & \dots\end{bmatrix}.$$

# Examples

Given 
$$f(x) = x_1 + x_1x_2^2 - \sin{x_3}$$
Then we take partial derivatives with respect to each variable to get the
gradient,
$$\nabla f(x) = \begin{bmatrix}\frac{\partial f(x)}{\partial x_1} & \frac{\partial f(x)}{\partial x_2} & \frac{\partial f(x)}{\partial x_2}\end{bmatrix}$$
$$= \begin{bmatrix}1 + x_2^2 & 2x_1x_2 & - \cos{x_3}\end{bmatrix}.$$
