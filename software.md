---
layout: splash 
title: Software 
permalink: software/
header:
  overlay_image: assets/images/teaching.jpg
  overlay_filter: 0.4 # same as adding an opacity
---


We develop a couple of packages regarding microscopy data processing.
Many of our packages are mentioned on [GitHub](https://github.com/bionanoimaging).

## Python
* [NanoImagingPack](https://gitlab.com/bionanoimaging/nanoimagingpack) A python package for quantitative image analysis and intended to provide similar functionality as DIPimage in Matlab.
* [StaeModeling](https://github.com/RainerHeintzmann/StateModeling) A python package that allows to easily formulate a linear or non-linear model of states and their transitions and fit the model parameters from the data. This was developed also with modeling the Corona epidemics in mind.

## JuliaLang
* [DeconvOptim.jl](https://github.com/roflmaostc/DeconvOptim.jl) for high-performance deconvolution on CPU and CUDA
* [FourierTools.jl](https://github.com/bionanoimaging/FourierTools.jl/) for working efficiently in Fourier space
* [PointSpreadFunctions.jl](https://github.com/RainerHeintzmann/PointSpreadFunctions.jl/) for calculating PSFs
* [PSFDistiller.jl](https://github.com/bionanoimaging/PSFDistiller.jl) destills a PSF from a measurement of beads by selecting local maxima that are separate enough from other ones.
* [View5D.jl](https://github.com/RainerHeintzmann/View5D.jl) for viewing high-dimensional data in Julia
* [FindShift.jl](https://github.com/RainerHeintzmann/FindShift.jl) package for finding peaks, correlations and image shifts between images.
* [TimeTags.jl](https://github.com/RainerHeintzmann/TimeTags.jl) a package for reading the PicoQunat *.ptu dataformat.
* [RegistrationNuFFT.jl](https://github.com/RainerHeintzmann/RegistrationNuFFT.jl) registers images based on the non-uniform FFT which enables user-defined (arbitrary) coordinate transforms.
* [ROIViews.jl](https://github.com/RainerHeintzmann/ROIViews.jl) allows to view multiple regions of interest (ROIs) of the arrays to be accessed as an array. Provided center_pos and ROI_size can have fewer dimensions than array.
* [TiledViews.jl](https://github.com/bionanoimaging/TiledViews.jl) allows to view an N-dimensional array as an 2N-dimensional TiledView being separated in overlapping tiles.
* [SeparableFunctions.jl](https://github.com/bionanoimaging/SeparableFunctions.jl) Calculates multidimensional functions faster by exploiting their separability.
* [NDTools.jl](https://github.com/bionanoimaging/NDTools.jl) A lightweight package delivering utility functions for working with multi-dimensional data.

## Java
* [View5D](https://github.com/bionanoimaging/View5D) An orthogonal slice viewer made for up to 5D data. It has interfaces to Matlab and Julia.

## Matlab
* [CudaMat](https://github.com/RainerHeintzmann/CudaMat)
* [PSFToolbox-Matlab](https://github.com/bionanoimaging/PSFToolbox-Matlab) A Matlab-based toolbox for calculating point spread functions.
* [Deconv](https://github.com/RainerHeintzmann/Deconv) A package for deconvolution based on a self-made autodifferentiation system in Matlab
* [SimFun](https://cloud.uni-jena.de/s/o3HmtKj5w3TibaJ) A script to calculate the structured illuiminatin illusion
+ [AbeeSchillerSIM.pdf](https://cloud.uni-jena.de/s/BDrg63Hwr3L3CQK) The pdf containing the modified patterns
+ [AbeeSchillerREF.pdf](https://cloud.uni-jena.de/s/3GiBcBd7gniJJxG) The corresponding reference (to be overlayed with the pdf above. Print on transparency!)
