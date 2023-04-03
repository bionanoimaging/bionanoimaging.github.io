---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults

layout: splash
title: Bio-Nanoimaging Group
header:
  overlay_image: assets/images/banner.jpg
  overlay_filter: 0.4 # same as adding an opacity
---


View5D as applet within Matlab
==============================

View5D can be easily integrated into MATLAB using the applet version of View5D. Since recently, MATLAB versions support Java, marker data can be conveniently im- and exported from and to MATLAB.  
  
To install, copy the java archieve View5D.jar into the "java/jar/toolbox/" subfolder of your MARLAB installation. To make this file visible to MATLAB add the following line to the file "$matlabroot/toolbox/local/classpath.txt" :  
$matlabroot/java/jar/toolbox/View5D.jar  
  
In the class View5D the function  

*   Start5DViewer(byte \[\] data, int SizeX, int SizeY, int SizeZ, int Elements, int Times)

and similar functions for float\[\], double\[\], complex\[\], short\[\], and int\[\] as datatypes generate a new viewer. These functions return an object of type "View5D", which should be stored as a MATLAB variable (e.g. myviewer1=View5D.Start5DViewer(mybytes, mysizeX,mysizeY,mysizeZ,myelems,mytimes) ). This can then be used to import and export markers to/from this viewer:  

*   "myviewer1.ExportMarkers()"  will export a string containing the marker list as text.
*   "myviewer1.ExportMarkers(int ListNum)" exports a matrix with the marker data of this marker-list number (type: double \[\]\[\])
*   "myviewer1.ExportMarkerLists()" exports a matrix with the information about all the markers. The first two columns are the listnumber and marker number within the list (type: double \[\]\[\])
*   "myviewer1.ImportMarkers(float\[\]\[\])" imports the markers from a MATLAB matrix into the viewer. A new marker list will be generated with this command.
*   "myviewer1.ImportMarkerLists(float\[\]\[\])" imports a whole set of marker lists with their intedependencies from a MATLAB matrix into the viewer. If the lists exist, they will simply be updated, if they do not exist they will be generated.
*   "myviewer1.DeleteAllMarkerLists()" deletes all existing marker lists. This avoids having to restart the viewer when the tracking data needs to be updated
*   "myviewer1.AddElement(byte \[\] data, int SizeX, int SizeY, int SizeZ, int Elements, int Times)" adds another element (color channel) to into the viewer.
*   "myviewer1.AddElementC(double \[\] data, int SizeX, int SizeY, int SizeZ, int Elements, int Times)" adds another element of datatype complex to into the viewer. The data should be alternating values of real and imaginary part.
*   "myviewer1.ProcessKeyMainWindow('g')"  will send the key even "g" to the main window and execute its action (changing the colormap to green).
*   "myviewer1.ProcessKeyElementWindow('N')"  will send the key even "N" to the element window and execute its action (promting the user to enter scaling data).  
    

One problem of the java-support of Matlab seems to be that matlab does not release the memory after a java application has finished. This memory is also not reused when the viewer is started a second time. As a consequence there will be a java out-of-memory error after having started the viewer a few times. One way to deal with it is to increase the total amount of memory allocated to java within matlab by putting a file named "java.opts" containing the line "-Xmx900000000" into your local matlab operation directory (e.g. /home/matlab). Another possibility is to use the appletviewer (under linux) and the script given below (for DIPimage only).  
  

View5D, [DIPimage](http://www.ph.tn.tudelft.nl/DIPlib/) and Matlab
------------------------------------------------------------------

  
View5D can be nicely called also in the "extern" mode if the [DIPimage](http://www.ph.tn.tudelft.nl/DIPlib/) toolbox is installed by using the [view5d.m](view5d.m) script. Place this script into the matlab .... toolboxes/dipimage/ directory and copy the View5D.jar file into your "/tmp/" directory. The program "appletviewer" which is part of the java development (not runtime) package by Sun can be useful. Alternatively any Web-browser capable of java can be used to look at the file "/tmp/dipimage\_view5d.html" that will be generated when "view5d( imagename, 0, 'extern') is called. To learn more try "help view5d" from within matlab after installing view5d.  
With the distribution of View5D comes another useful file "view5dAddElem(  
  
  
Below follows a detailed description of how to get it running under a Microsoft Windows system (curtesy of Stefan Schaefer):  
The matlab script is based on assuming "explorer" in windows to be able to handle web-pages with java. This is not necessarily guaranteed and some Windows systems need the java-plugin as given below to be installed.  
  
Requirements: The following programs must be installed:  

*   MATLAB

*   DIPimage: download from [http://www.diplib.org/](http://www.diplib.org/) and follow the instructions);  
    add  the path /DIPimage/dipimage to MATLAB:   Menu File -> Set Path… -> Add with Subfolders  
    

*   JAVA-Plugin  
    download “j2re-1\_4\_2\_05-windows-i586-p.exe” e.g. from [http://www.gwdg.de/samba/windows/j2re-1\_4\_2\_05-windows-i586-p.exe](http://www.gwdg.de/samba/windows/j2re-1_4_2_05-windows-i586-p.exe)  
    

*   view5D.m  
    download view5D.m from [http://www.nanoimaging.de/View5D/view5d.m](http://www.nanoimaging.de/View5D/view5d.m)  
    follow the instructions as given [above](View5DasMatlab.html).  
    view5D.m must be accessible to MATLAB (in the folder /DIPimage/dipimage with the path added to the MATLAB paths)
*   view5dAddElem(aviewer, dataToDisplay)  
    Allows to add another channel into a viewer which is already running.  
    

*   View5D  
    download from [http://www.nanoimaging.de/View5D/](http://www.nanoimaging.de/View5D/)  
    create folder /View5D, e.g., and unpack it there  
    copy View5D.jar into MATLAB path (/MATLAB\_6.0/java/jar/toolbox, e.g.)  
    

Typing view5d(readim,0,’extern’) into the MATLAB command line should now launch the standard web browser with the viewer  
  

* * *

[Back to the View5D homepage](View5D.html)  
For hints and suggestions, contact the author under heintzmann at gmail dot com