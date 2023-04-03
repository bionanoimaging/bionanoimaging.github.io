---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults

layout: splash
title: Bio-Nanoimaging Group
header:
  overlay_image: assets/images/banner.jpg
  overlay_filter: 0.4 # same as adding an opacity
---


View5D as ImageJ Plugin
=======================

View5D as an [ImageJ](http://rsb.info.nih.gov/ij/) plugin has the advantage of combining this interactive data display with the data-import/export and -analysis capabilities of ImageJ and its other plugins.  
The ImageJ plugin can be obtained [here](View5D.zip). To install it in ImageJ, create a folder "View5D" in the plugin directory of ImageJ and unpack the zip file into this "View5D" folder or place the [jar file](View5d_.jar) directly into the ImageJ plugin folder.

Within ImageJ the View5D application is capable of importing ("l") and exporting ("X") data from and to ImageJ. It is important to assure that the datasizes of s4 and 5D volumes are set correctly within ImageJ: "Slices (z)" and "Frames (t)". If they are not correct, you can do this by changing the entries in the "Image->Properies" menu of ImageJ. For a summary of these functions see [here](View5DCommandReference.html#ImportExport).  
Note that ImageJ does not jave a complex data type. The Fourier-transforms of ImageJ are therefore just displayed as their magnitude.  
  
  

* * *

[Back to the View5D homepage](View5D.html)  
For hints and suggestions, contact the author under heintzmann at gmail dot com