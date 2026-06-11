---
layout: single
title: "Resolution enhancement and background light suppression by speckle illumination digital holographic microscopy for biological imaging"
date: 2026-06-10
author: Mylene Amstutz
author_profile: true
---

In 3D label-free imaging technologies, like optical coherence Tomography (OCT) and digital holographic microscopy (DHM), there exists either a fundamental trade-off between imaging depth and lateral resolution or a decreased contrast, due to lack of confocal gating. Additionally, medical diagnostics face significant power constraints due to phototoxicity. This project seeks to advance the frontiers of resolution and imaging depth by employing scattered light illumination in holography.

Technology:
The core technology consists of averaging multiple holograms of an object; each illuminated with a different speckle pattern. By calibrating the holographically reconstructed object fields with their respective illumination speckle fields, the lateral resolution is doubled. Further a statistical suppression of background light occurs when the calibrated fields are averaged, because coherent field vector addition occurs only within the correlation range of the speckles, resulting in an enhanced contrast. Coupled with the digital refocusing capabilities of digital holographic microscopy (DHM), the technology is capable to generate a label-free 3D volumetric image with suppressed multi-scattered and out of focus light in each depth plane.
![sidhm_recon](/assets/images/projects/SIDHM_reconstruction_sheme.png)

Method:
To test and demonstrate the imaging capabilities of speckle illumination digital holographique Microscopy (SI-DHM), first a simulation was done. A  demonstrator was built including a diffusion plate in the illumination path and an off-axis reference beam with variable path length, to validate the simulation.

Results:
A simulation of two in depth separated disc objects showed that depth slicing enhancement can be achieved by speckled illumination. Further an increase lateral resolution was shown on a simulated single scatterer. The simulation results were partially confirmed by measurement data of a resolution target (Carl Zeiss AG, Art. Nr.: 435298-9901-000), where the suppression of out of focus light is shown. The resolution enhancement was only minor, compared to the simulative results. It is suspected that the100 shifted holograms were not back translated with the necessary accuracy in the reconstruction scheme, which would decrease the resolution.
![sidhm_res_sim](/assets/images/projects/SIDHM_simulation_result.png)
![sidhm_res_meas_usaf](/assets/images/projects/SIDHM_measurement_result_usaf.png)

Outlook
Currently the demonstrator can capture SI-DHM images, however, suffers from phase offsets in-between the captured images. For smooth objects, this offset can be corrected, for strongly scattering samples like tissue, principal component analysis is currently investigated to find and correct for the phase offsets.

