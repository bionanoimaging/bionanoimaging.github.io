---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults

layout: splash
title: Bio-Nanoimaging Group
header:
  overlay_image: assets/images/banner.jpg
  overlay_filter: 0.4 # same as adding an opacity
---



# View5D

## Julia

## Java

# Command Reference  

<span style="font-family: 'arial';"><span style="font-weight: bold;"></span></span>The command reference is structured into different subjects, wich roughly correspond to the menu in the 5DViewer (accessible in ImageJ at the top or the viewer, or by right mouse click in the applet versions).  

## <span style="font-weight: bold; font-size: 14pt; font-family: 'Arial';"><a name="ImportExport"></a>Import / Export of data</span>

<span style="font-weight: bold; font-size: 14pt; font-family: 'Arial';"></span>Usually the data is automatically imported at the start of View5D. It supports a number of data types: byte, 12-bit, 16-bit and floating-point (32 bit).  

*   By pressing "l" (lower case "L") the <span style="font-weight: bold;">data is reloaded</span> (if run as an applet) or the currently active window in ImageJ is imported as a new element. For the import to work the datasizes have to be identical to the previously existing datasizes (X-, Y-, Z-) in the viewer. The data-type, however, can differ between elements. Within ImageJ, it is important to assure that the datasizes of 4 or 5D volumes are set correctly within ImageJ: "Slices (z)" and "Frames (t)". If they are not correct, you can do this by changing the entries in the "Image->Properies" menu of ImageJ.
*   If an image in ImageJ possesses a non-grayscale colormap, this colormap will be imported into the viewer and added to the menu as "user defined".  

*   "s" <span style="font-weight: bold;">spawns a new data-view window</span>. This is useful, if multiple slices need to be investigated simultaneously. The viewers can be resized! Press "i" to let the data adapt to the new size of the viewer.
*   <span style="font-weight: bold;">Marker lists</span> can be <span style="font-weight: bold;">exported and imported</span> (see Matlab support above and for applets below: "m" in the element display and "L" in one of the views).
*   In many systems the java runtime environment is by default not allowed to save any data. In Linux, this security restrictions can be relaxed by placing a file (click [here](file:///tmp/View5D_web/java.policy)) into the user's home directory. This file should be renamed to ".java.policy" with the initial dot at the beginning of the file name.
*   In <span style="font-weight: bold;">ImageJ</span> "X" will <span style="font-weight: bold;">export data</span> and generates an image in ImageJ, which can then be saved to the harddisc.  
    Note that exporting via "X" has different behaviours depending on the mode, the Viewer is in and on where it is pressed.  

    *   "X" in a viewer window and in single-channel display (see toggle "C") will export the 16 bit internal single-color data.  The colormap is not considered here.
    *   "X" pressed in a viewer window when this window is in the line-plot display will export a plot to ImageJ. This plot is immediately displayed and can further be saved and processed. From ImageJ is is then also possible to cut-and-paste the individual data values to other applications such as Microsoft Excel for further processing.
    *   "X" pressed in a viewer window when viewing data of complex data type will export a real-valued image of the current display mode (abs, phase angle, real, imaginary) which can be changed by "^"  

    *   "X" in multi-color-mode will export a 24-bit (8 bit per RGB channel) color image considering only the colors currently active (see "v").
    *   "X" pressed in the element display (lower right corner) will export the raw-data to ImageJ. The viewer has to be in the single color mode(via "C"). This is especially useful for computed data such as multidimensional histograms.

## <span style="font-weight: bold; font-size: 14pt; font-family: 'Arial';">The 3 display windows</span>

The main display windows (top left, top right and bottom left) show mutually orthogonal slices of a 3-dimensional dataset. These windows are linked together.

*   "i" resets the scaling and thresholds of the currently active view (defined by the mouse position and outlined with a red line boarder).
*   "I" does the same for all data elements (if multiple color elements are present).
*   A <span style="font-style: italic;">mouse click</span> sets the cross-hair to the clicked positions. The original data value underlying the clicked pixel is indicated in the text panel (central right side). The positions of the crosshair are given in pixel coordinates and in a more meaningful real-world unit (if supplied in the data). Note that by default the (0,0,0) position starts in the top left corner, similar to ImageJ!
*   The <span style="font-style: italic;">arrow keys</span> adjust the position of the cross-hair by exactly one voxel in the appropriate direction.  
    When the cross-hair changes its position, the orthogonal slicing positions are updated accordingly. If a click somewhere on the axial slice is performed (top left) the sagittal view (top right) will update to refer to the slice indicated with the green line along Y in the axial (XY) view. Similarly the frontal view always corresponds to the green line along X in the axial view. A corresponding behavior hold for the cross-hairs indicated in the other views.
*   "(", ")" or "next page" "prev. page" keys allow for changes in the slicing position.
*   "," and "." adjust the time when multiple time-frames are present, as does the slider seen at the right side in this case.  

*   "a" and "A" enable the user to zoom in and out of the current view.
*   "<" and ">" change the display scaling of the orthogonal axis. This is very useful to alter the aspect ratio of the display, especially since the program optimizes the available space for display sometimes resulting in very odd aspect ratios.
*   "Z" zooms this view to fit the rectangular ROI defined in this view (see ROIs).
*   A mouse drag, adjusts the displayed sub-position in the image. This is useful if displaying a zoomed part of the data.
*   "q" toggles between displaying slices and line-plots along the appropriate line indicated by a line of the cross-hair in another view. If  "q" is pressed in the axial (XY) view the line-scan will be along Z at the current crosshair position in this XY window. Linescans update according to changes in the cross-hair position caused by pressing the arrow keys or by mouse clicks.
*   "^" runs through the different display modes (absolute magnitude, phase angle in degree, real part, imaginary part) of data of complex data type. Applicable for COMPLEX data type only! The currently displayed mode will also be used for projections, all quantifications and export functions to ImageJ.  

Note that context menus are available by right-clicking into one of the 3 display windows or the spectral (element) display window respectively.  

## <span style="font-weight: bold; font-size: 14pt; font-family: 'Arial';">Measuring</span>

A number of parameters are displayed in the text window (lower right panel). These include

*   "N" allows the user to interactively change the scalings and units of the coordinate and value axes.
*   position of the cross-hair in pixel units
*   position of the cross-hair in real-words units
*   value of the active element at the cross-hair position in real world units
*   size of the rectangular 3D ROI in pixels and real-world units
*   lower and upper threshold of the active element
*   Average, Maximum and Minimum value of this element in the currently selected ROI.  

### <a name="Markers"></a>Markers

Markers are an important tool for measuring positions, distances and slopes or velocity inside the multidimensional dataset. They are organized by multiple lists of ordered (connected) markers. The distance of a marker to the position of the previous marker is displayed in the text window. The slope of the line connecting successive markers is also given. This is useful for estimating the speed of movement in 2D+time datasets, where the time-direction was stacked along Z. The speed of movement in 3D datasets can be measured by setting the markers in 3D at different timepoints. The "TimeSlope" in the text-display yields the 3D speed. All markers can be dragged with the mouse after they have been set, to allow for minor corrections of their positions. A summary of all marker positions can be printed (see below: "m" in the spectral display window).  
In the line-plot spectral window the spectrum on each marker is displayed in addition to the spectrum at the cross-hair position. For simultaneous display of multiple spectra, it is best to open a new list with every marker ("k") since then the markers and thus the spectra will have different colors.  

*   "m" sets a markers in 3D at the current cross-hair position. The distance to the preceding marker (if any) is displayed in the text window (lower right panel).  

*   "M" deletes the currently active (as shown in white) marker.
*   "W" tries to track the allready set marker throughout the stack or time series.  

*   "Q" deletes all marker from the active marker position on to the end of this marker list. This is very convenient, if the trace of a particle is lost due to bleaching or leaving the image frame.
*   "#" subtracts a Gaussian of known size and intensity determined from the surrounding at this marker position from the data. If multiple markers are present this is repeated for this current list.  

*   "9" and "0" advances/devances to the next/previous marker
*   "|" aligns the display to the active track (over time or element direction only)
*   "shift - cursor keys" adjust the display positions with respect to other time or element positions
*   "\" pressed at the end of a track will generate two daugther tracks with appropriate names, which can then be continued.
*   "{" resets the alignment to zero
*   "}" opens a menu for the current track, which allows to set names, color and the connectivity with ther tracks (parent, child1 and child2)
*   "n", if pressed in a view panel or "M" in the spectral display window opens a panel that lets you select several properties of the display and behavior of markers. These include what subset to show (only active list or all lists), and how to set the markers. The markers can either be set directly or they automatically drag to the closest maximum pixel in the active element. The region to search can be defined in 3D. Once the maximum is found, another maximum search in the neighborhood is started, such that markers can iteratively "slide" uphill over longer distances. When this maximum is found, a further automatic refinement (if selected in the panel) is performed on the basis of the computation of the center of mass (or better center of intensity COI). For this computation the "COI region" defines the voxels to consider and the minimum pixel within this region is subtracted prior to COI evaluation. If the automatic positioning is active it will also be performed after each mouse-drag of a marker.
*   "&" tags/untags a marker. (This is useful for counting purposes, e.g. to first identify nuclei in the DAPI channel, and then tag, which ones have an associated other feature in the cell.)  

*   "k" opens a new list of markers, whilst setting a new marker. This will have a new color.
*   "w" changes the color of the active marker list.
*   "K" deletes the whole currently active list of markers.  

*   "m" pressed in the spectral display window (lower right corner) prints a list to the text window with all marker positions given in pixel and real-words coordinates. Also included are the maximum and integrated intensity, if the markers were generated using the "Subpixel positions by Center of Mass" option. You should be able to cut-and-paste the textual list from there into any editor of your system. If a marker file name was given (Tag: markerOutFile) during startup, "m" will OVERWRITE or create the marker file.  

*   "L" pressed in one of the views loads the markers from the ASCII marker file (markerInFile as given during startup). According to the list and marker numbers, the current marker positions will be updated. If the list or marker is not present, it is created.

Note that the intensity-related information in each marker list can be plotted in the element window (see "q" in element window).  

## <span style="font-weight: bold; font-size: 14pt; font-family: 'Arial';">Colors</span>

If multiple color datasets are present or data of the same size but in different modes was acquired, the program will sort these into different “elements”. When importing the data as a 24-bit RGB image from ImageJ (either by starting the plugin) or by pressing “l” if the plugin is already running, multiple elements will result in View5D. Multiple elements can also be used working with different modes of data acquisition (MRI, PET, CT) or as results from various data processing steps (e.g. anisotropy imaging, of tau-phase and tau-mod in frequency domain fluorescence lifetime microscopy).

*   "e" and "E" step forward and backwards through the elements to define the currently active element. In single color mode the currently displayed element is the active element. In general the active element defines the value given in the text display. Many operations such as automated thresholding ("t") are carried out on the active element.
*   "C" toggles between multicolor display and display of only the active element. In multicolor mode only the elements marked for combined display are displayed. This can be done either by defining an element as red "r", green "g" or blue "b" (the big letters "R,G,B" clears them from combined display) or by marking an element for combined display with the "v" toggle.
*   "v" toggles an element in and out of the multicolor overlay display.
*   "V" toggles an element in and out of being displayed in a multiplicative mode in the multicolor overlay. A channel displayed in the multiplicative mode will have its color values being multiplied by the so-far computed display (all elements with lower numbers). E.i. for displaying fluorescence lifetime images, select the intensity image in grayscale and choose the multiplicative mode and the RGB-rainbow colormap for the lifetime information. Then the intensity image will be displayed with a color as given by the lifetime image.  

*   "c" steps through the available color-maps for the active element. Some are linear, some are non-linear to enhance dim details.
*   "O" toggles in and out of logarithmic display mode. Usually it is important to define the lower threshold well ("5"-"8"), since this has a major influence on the display quality. The logarithmic mode also affects the linescans.
*   "o" toggles the range indicators for the active element. If the range indicators are active, values >= the upper threshold are indicated in dark blue and values <= the lower threshold in dark green. If multiple elements are present, the range indicator toggle has to be changed for every element individually.  
    If "o" is pressed with the multi-color mode active, the range indicator will toggle on/off for all elements. The state of the current element dictates the state of the others.

*   "1", "2" and "3","4" adjust the lower and upper color thresholds. This is useful for enhancing the brightness and contrast of the display. Also the line scans are affected accordingly. The color threshold just affects the colormap. Changing it is relatively fast. If the data is to be affected, the treshold has to be trasferred to a datathreshold (see "!" below). Note that with the gate active, changing thresholds automatically affect the data thresholds.  

*   "5","6" and "7","8" do the same in a finer stepping.
*   "!" transfers the color thresholds to the data threshold.  

*   "t" adjusts the thresholds to minimum and maximum of the ROI for the currently active element. "T" does the same for all elements. As indicated above "i" resets the values to the initial values.
*   "u" registers this element to act as a gating-mask for all other elements. Everything below lower and above upper data threshold (as displayed green and blue when range indicators are on, see "o") is considered invalid and excluded from the analysis if the mask is activated (see "U" below). This influences the display as well as projections and histograms for at voxels at corresponding positions in <span style="font-weight: bold;">all elements</span>. At the same time an element marked as gate will be used together with the active element for mathematical operations such as "+", "-" and "*". When using gates, the color threshold is automatically transferred to the data threshold.  

*   "U" toggles the mask activity of the mask element on and off. The mask element (as set by "u") may differs from the active element, which allows for a convenient on/off toggle e.g. of an intensity mask on lifetime data (channel 1 = intensity, channel 2 = fluorescence lifetime tau-phase).
*   "D" deletes the currently active element
*   "q" in the element window (lower right corner) toggles between spectral plot display, display of multiple marker traces (the X-axis is determined by the Track direction) and colorbars with the multiple elements.
*   "n" in the element window (lower right corner) toggles between a normalized and non-normalized display of multiple spectra
*   "s" pressed in the spectral display spawns a bigger separate window with the spectral display. This also frees some space for the display of textual information. By closing the seperate window, it will be inserted back into place.  

*   "O" pressed in the spectral display window will toggle the logarithmic display in this window.
*   "1"-"4" and "5"-"8" will contrast enhance the spectral plot, if pressed in the spectral display window.
*   "_" is a useful tool to adjust the backround level of  an image to zero. The offset will be adjusted such, that the mean of the actual ROI in the current element will be zero.  

