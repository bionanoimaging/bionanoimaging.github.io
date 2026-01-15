---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults

layout: splash
title: Bio-Nanoimaging Group
permalink: toolsForLab/
header:
  overlay_image: assets/images/banner.jpg
  overlay_filter: 0.4 # same as adding an opacity
---



# Tools for optical laboratory

This page contains list (with a links) of different software and hardware tools, which are useful in everyday life of a researcher in an optical laboratory. These tools were continuously developed in our group and can be freely used by whoever find them useful.

There are different categories of the tools. Some of them are pure software based apps, which helps to estimate parameters of experimental setups or to educate the alignment of optical components. Other tools require either some low-cost commercial hardware or tools, which has to be constructed given the instructions.

### Mobile Apps
These apps are compact webpages, which can be simple installed on a phone and then used offline (that is often case for optical labs in the cellar). These apps should help you to estimate parameters for data acquisition, signal intensity, etc.
Apps are based on [Progressive Web App](https://en.wikipedia.org/wiki/Progressive_web_app) technology. The app itself is web page, which can be viewed in any web browser. For the offline use the app has to be installed through majority of browsers ([How to install PWA](https://developer.mozilla.org/en-US/docs/Web/Progressive_web_apps/Installing")).


#### 1. Nyquist sampling calculator <img src="/assets/images/toolsForLabs/Nyquist.png" title="" alt="screenshot" width = "28" style="vertical-align: middle" />

  link to the [webpage](https://rainerheintzmann.github.io/IPHTNyquist/) 

#### 2. Optical losses by reflection on the interfaces <img src="/assets/images/toolsForLabs/Reflection.png" title="" alt="screenshot" width = "28" style="vertical-align: middle" />


  link to the [webpage](https://ondrejstranik.github.io/pwa-optics/) 

### Widgets

#### 1. Smart Inventory <img src="/assets/images/toolsForLabs/tipToi.png" title="" alt="screenshot" width = "28" style="vertical-align: middle" />


Intelligent tools to easy identify small optical components, which are hard to label. We stick tiny labels (~1mm) on them and we are able to get audio information of the component with a low budget toy TipToi (more info [here](/projects/tiptoi)). Link to the depository for generation of the labels and setting the TipToi is [here](https://github.com/ondrejstranik/smartInventory).

#### 2. CageCam <img src="/assets/images/toolsForLabs/CamCage.jpg" title="" alt="screenshot" width = "28" style="vertical-align: middle" />

We developed small cameras based on ESP microcontrollers that can be mounted on the Thorlabs cage system. Their live-streamed images can be viewed on mobile phones or computers via Wi-Fi connections. They are especially useful for alignment tasks when the adjustment screws are far from the target screen. We also developed small light sources that can be controlled via mobile phones. A link to the app used to control the cameras and light sources is available [here](https://ondrejstranik.github.io/CamCage/), and the repository for building these cameras/light sources can be found [here](https://github.com/ondrejstranik/webCamCom).


### Software tools

#### 1. Viscope - software for instrument control <img src="/assets/images/toolsForLabs/viscope.PNG" title="" alt="screenshot" width = "28" style="vertical-align: middle" />

We developed a framework to control and synchronise a data acquisition from different devices (focus on optical microscopy) in the lab. It should simplify writing own software controlling instruments. The main feature is that the software development and debugging can be done without need of the real instruments (more info [here](/projects/viscope)). Link to the depository of the `viscope` framework is [here](https://github.com/ondrejstranik/viscope).




