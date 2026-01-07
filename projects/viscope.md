---
layout: single
title:  "Viscope - software for instruments' control"
date:   2026-01-03
author: Ondrej Stranik
author_profile: true
---

We developed a framework (python based) to control and synchronise a data acquisition from different devices (focus on optical microscopy) in the lab and provide Graphical user interface for the user. The main feature is that the software development and debugging can be done without need of the real instruments. This leads to more rapid writing of 
software.

The following objects are defined within framework:
- groups of base instruments such as camera, lasers, stage, spatial light modulator, switch
- virtual instruments for each group of base instruments (+ virtual sample)
- a virtual microscope calculating light propagation through the system

The software development is done in the following steps:
1. Determine all your instruments and sample, which you want to use in your experiment
2. Select and eventually adapt the virtual instruments so that they behave in the same manner as your real instruments
3. Select your virtual probe and create a forward model of signal (light) propagation from the probe to the instruments.
4. Now you can write the software controlling the data acquisition and evaluation, and graphical user interface for the user. This is the main part of the work and you can easily debug the software.
5. After the software is working with the virtual system, you just replace the virtual instruments for real ones and test the software in the lab with your real system.

We use the framework in several projects dealing with spectral cameras, plasmon imaging sensors, holographic minflux localisation microscopy, microscopy with an apotome modality, fluorescence lifetime image scanning microscopy.


![viscope](/assets/images/projects/viscope.png)


*Schematics of fast development method for the instrument control. First, a virtual model of the complete instruments and a probe is made. This allows for rapid development of software for the instrument control.  After it is successfully tested on virtual system, the software can be directly applied to the real instrument.*


Link to `Viscope` github repository [here](https://github.com/ondrejstranik/viscope)
