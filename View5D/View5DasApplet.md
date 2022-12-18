---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults

layout: splash
title: Bio-Nanoimaging Group
header:
  overlay_image: assets/images/banner.jpg
  overlay_filter: 0.4 # same as adding an opacity
---


View5D as JavaApplet
====================

To convert the ImageJ plugin into an applet, you just have to rename the "View5D\_.jar" file into "View5D.jar".  

The applet can be useful for displaying multidimensional volumetric data on the internet, allowing for the Web-user to browse through the data and perform simple data analysis. A description on the applet tags is given below.  
The applet can be downloaded [here](View5D.zip) as a zip-file with all the necessary classes and an example html-file in it. Remember to rename use (rename into) the "View5D.jar" archive and not the "View5D\_.jar" Just place it into your folder visible on the net together with a raw-data file (stacked X, Y, Z, Elements), edit the html file to refer to the correct raw data filename and to the correct dimensional sizes.  
In many systems the java runtime environment is by default not allowed to save any data. In Linux, this security restrictions can be relaxed by placing a file (click [here](java.policy)) into the user's home directory. This file should be renamed to ".java.policy" with the initial dot at the beginning of the file name.  

Applet Tags
-----------

To use View5D as a Java applet, information has to be transmitted from the web-page where it is used to the applet. To see how it works it is best to open one of the [examples](file:///home/rheintz/Prog/Java/View5D/examples/index.html#Testing) and have a look at the source code by choosing view -> HTMLSource or alike in your web-browser. These information transmitted via tags include  

*   Name of the raw-data file to load (Tag: file)
*   Sizes of the dataset (Tags: sizex, sizey, sizez, times, elements). If a tag is not supplied a value of one is assumed.
*   Datatype, which has to be identical throughout this dataset (dtype). Possible values are: "Byte","Short","Long","Integer","Float","Double" and "Complex"
*   (Tags: bytes, bits) Can also be used to define the datatype. They are especially useful for the datatype "Integer" in which case the tags "bytes" and "bits" define the size of the integer. Also 2 bytes and 12 bits is a possible combination for CCD camera data.  
    
*   Scalings and offsets of the coordinate axes (scalex, scaley, scalez, offsetx, offsety, offsetz). The tags "scalev" and "offsetv" can be used to supply scale and offset of the value.
*   Names of the coordinate axes (Tags: namex, namey, namez, namee, namet).
*   Unit names of the coordinate axes (Tags: unitsx, unitsy, unitsz, unitse, unitst).
*   Names of the individual value channels (Tags: namev1, namev2, namev3 ... ).
*   Unit names of the individual value channels (Tags: unitv1, unitv2, unitv3 ... ).
*   Setup for the histogram (Tags: histox, histoy, histoz). Each tag defines which element will be used for appropriate histogram axis. By default  histox=0,histoy=1
*   Assignment of Red, Green and Blue color (Tags: red, green, blue)
*   Name of the ASCII marker file to load from or save to (Tags: markerInFile, markerOutFile).
*   The colomap of the first element can be defined (Tag: defcol0)

  

* * *

[Back to the View5D homepage](View5D.html)  
For hints and suggestions, contact the author under heintzmann at gmail dot com