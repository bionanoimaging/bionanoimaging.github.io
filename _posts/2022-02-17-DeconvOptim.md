---
layout: single 
title:  "DeconvOptim.jl"
date:   2022-02-17 18:16:06 +0100
categories: 
    - post
    - archive
header:
  teaser: /assets/posts/color-deconv.jpg
author: Felix Wechsler 
author_profile: true
---

Recently, we worked on a deconvolution toolbox written in Julia Lang, called [DeconvOptim.jl](https://github.com/roflmaostc/DeconvOptim.jl).

It can deconvolve multi color data very efficiently with a quality equal to [Huygens Deconvolution](https://svi.nl/Huygens-Deconvolution).
![Deconvolution of multi color dataset](/assets/posts/color_deconv.jpg)


The routine is very generic and based on a loss function approach which is minimized with the automatic differentiation Zygote.jl and the optimizer package Optim.jl.
Also we put a lot of emphasize on the performance of DeconvOptim.jl, as shown here.
![Runtime of different packages](/assets/posts/runtime_deconv.jpg) 


Using Julia's CUDA ability we could outperform any existing deconvolution package but maintain the same quality measure - here under the normalized cross correlation (NCC) value.


See also that video
<iframe width="560" height="315" src="https://www.youtube.com/embed/FodpnOhccis" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
