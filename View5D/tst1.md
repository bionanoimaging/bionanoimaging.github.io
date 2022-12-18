---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults

layout: splash
title: Bio-Nanoimaging Group
header:
  overlay_image: assets/images/banner.jpg
  overlay_filter: 0.4 # same as adding an opacity
---



View5D - an interactive image viewer
=====================

ImageJ, Matlab and Julia plugin and Java applet ([current Version](https://github.com/bionanoimaging/View5D) )  

--------------------------------------------------------------------------------------------------------------

### Rainer Heintzmann,   
[Leibniz Institute of Photonic Technology](https://www.leibniz-ipht.de/en/departments/microscopy/) , Jena, Germany,  
[Institute of Physical Chemistry, Friedrich-Schiller Universty, Jena](https://www.ipc.uni-jena.de/en/research-groups/heintzmann-group) , Jena, Germany and  
[Abbe Center of Photonics, Friedrich-Schiller Universty, Jena](https://www.acp.uni-jena.de/) , Jena, Germany  
  
(heintzmann at gmail dot com)

The program View5D interactively displays of up to 5 dimensional volumetric datasets.

Multi-dimensional data frequently arises in confocal microscopy and medical imaging applications. The applet can be tested by clicking the links below, however a Java runtime environment (preferably from Sun Microsystems) must have been installed and Java activated in the preferences of your browser!

Here are some [example screen shots](examples/index.html) and the applet version can be [tested](examples/index.html#Testing) or the [interactive online tutorials](View5DOnlineTutorials.html) can be used.  
There is also a [reference of all commands](View5DCommandReference.html) and mode of operation  

### Main features of View5D are:[![Example displaying an MRI dataset] <img src="examples/MRIOvUn.jpg" title="" alt="Example displaying an MRI dataset" style="border: 0px solid ; width: 260px; height: 274px;" align ="right" />
*   Simultaneous display of 3 orthogonal slices: axial (XY), sigittal (YZ) and frontal (XZ). Continuous update of the slicing positions by mouse clicks /drags.
*   Semiautomatic tracking of maxima or minima in up to 5 dimensions. Interactive adjustment and correction of tracks. Alignment of data to tracks (!). Support of lineage naming.
*   Scattergrams from multiple colors in up to 3 dimensions and interactive switching between ROIs in images and ROIs in the multidimensional histogram.
*   Toggles between single color and multicolor mode. An arbitrary number of color channels can be overlaid. A "multiplicative" mode allows the overlay of intensity and color-coding (e.g. fluorescence lifetime) images.  
    
*   Support of time series of data of equal size
*   Selection of regions of interest (ROIs) in 3D for further processing. The shape can either be rectangular or the inner region of connected line segments (poly-line ROI).
*   Toggle between sliced views and projections (maximum intensity projection or average intensity projection) of the full field or of ROIs.
*   The user has access to the information about the real-world positions as well as the data content (such as absolute intensities or Houndsfield units for MRI data).
*   Setting marker positions in 3D and measuring distances between them.
*   Toggles between slice / projection and orthogonal line-scan plots.
*   Support for  spectral information in every voxel (any number of color channels).
*   Simultaneous display of multiple spectra from different positions (by using the position markers).
*   Up to 3 dimensional histograms generated from a number of previously selected datasets. Overlay of multiple histograms.
*   Selecting ROIs in the histogram and generation of a binary image labeling the voxels corresponding to the ROIs selected in the multi-dimensional histogram.

Tutorials
---------

[Online-Tutorials](View5DOnlineTutorials.html) are also available. However, they do not run any longer in modern browsers, since the Applet tag is not any longer supported.

How to obtain
-------------

Download [the current development and release version](https://github.com/bionanoimaging/View5D) as a zip-file with all the necessary classes and an example html-file in it. Just place it into your folder visible on the net together with a raw-data file (stacked X, Y, Z, Elements), edit the html file to refer to the correct raw data filename and to the correct dimensional sizes. The included jar file works both for the applet version and the ImageJ version.  

The ImageJ plugin can be used as a plugin with the documentation and examples included or you can download only the plugin. To install it in ImageJ, create a folder "View5D" in the plugin directory of ImageJ and unpack the zip file into this "View5D" folder or place the jar file directly into the ImageJ plugin folder.

If you want to modify the source to adapt it to your special needs you can do so under the terms of the GPL2 license. The [source](https://github.com/bionanoimaging/View5D) code is also available, currently as a single java file and supporting files (mostly for developing in Linux). Please feel free to send useful improvements back to me.

ImageJ plugin, Java applet and MATLAB plugin  

-----------------------------------------------

The View5D Java program can be compiled as Java Applet or as a plugin to ImageJ or MATLAB. Its functionality remains identical; only the way its loads and saves data differs between applet and plugin. To optain information on the specific details, click [Applet](View5DasApplet.html), [ImageJ plugin](View5DasImageJ.html), or as applet within [MATLAB](View5DasMatlab.html). You can also start View5D from Julia offering many ways to interact with the Viewer directly from Julia. For more details see [View5D in Jullia](https://github.com/RainerHeintzmann/View5D.jl). 
  

Almost all commands in View5D can be addressed via the keyboard (be careful when you type, as every letter has an action!) or the menu (right click in one of the data-display windows) and selection from the popup menu.  

The most recent version of View5D and documentation can been found on the web page [http://www.nanoimaging.de/View5D/](http://www.nanoimaging.de/View5D/)  
(this is probably exactly the document you are just reading).  

