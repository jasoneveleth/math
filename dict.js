const articles = [
{
link: "articles/example.md.html",
title: "Example",
text: "example author  jason date  2021 07 11        this is a problem  dsjlka fjkdl jfdsjf dslak i have some text here tha tis just supposed to be cannon fodder   400 is teh price i'm willing to pay   this is another paragraph but this has  4x = 10x 2   that should be a formula  if it isn't that's a problem  now  i want an even trickier thing   3 = 54x   5x 2  that was split over two lines  now for the kicker    a final conclusioin paragraph "
},
{
link: "articles/gradient.md.html",
title: "Gradient",
text: "gradient author  jason date  2021 07 12        theory  the gradient is like a derivative of a  single valued  function that takes a vector as input  it is a row vector  given a vector  x   and function  f   the gradient is written   nabla f x       examples  given  then we take partial derivatives with respect to each variable to get the gradient "
},
{
link: "articles/linear_regression.md.html",
title: "Linear",
text: "linear author  jason date  2021 07 11        theory  we are trying to find the line of best fit given a collections of coordinates   for example      x_1  y_1    x_2 y_2    x_3  y_3    dots     we would like to find  m b  such that  y = mx + b  minimizes the sum of the residuals squared  by that i mean we want to minimize a function  l  alpha  =  sum_i  y_i    mx_i + b   2   by finding the best  m  and  b    we need to set up some definitions  let x =  begin bmatrix x_1 & 1  x_2 & 1  x_3 & 1  x_4 & 1   dots &  dots end bmatrix    alpha =  begin bmatrix m  b end bmatrix      so our goal is  recall from  vectors  vectors md html  that   sum_i x_i 2 =  lvert x  rvert 2  recall that   lvert x  rvert 2 = x tx   recall that   a + b  t = a t + b t  and   ab =b ta t    to minimize this  we find the critical points of the function  we do this by finding where the  gradient  gradient md html  of  l  alpha   is  0    recall from  vector derivatives  vector_derivatives md html     frac d  dx    u tx  = u t     frac d  dx   x tu  = u t   and   frac d  dx  x tx  =  frac d  dx   bar x  tx  +  frac d  dx  x t bar x      1   and now for the glorious part  who am i kidding  this whole thing has been glorious       examples  say we are given this set of coordinates       1 3  0 8    3 2  3 5    5 6  6 4    8 5  7 7      then we need to open  `julia` and give give it the vectors  some output omitted   ```julia julia> y =  0 8  3 5  6 4  7 7  julia> x =  1 3 1  3 2 1  5 6 1  8 5 1  julia> yt = transpose y  julia> xt = transpose x  julia> yt * x * inv xt * x  1×2 transpose   vector float64   with eltype float64   0 962823  0 122874  ```  which gives us our desired line of best fit   y = 0 962823x + 0 122874        1   the bar in   bar  alpha   or   bar x   means treat it as a constant  in   the same way that you would if you were doing the product rule with single   valued functions    frac d  dx  f x g x   =  frac d  dx  f x  bar g  x   +    frac d  dx   bar f  x  g x     "
},
]