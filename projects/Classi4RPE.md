---
layout: single
title:  "Segmentation and classification of FLIM data for retinal granules"
date:   2026-05-29
author: Maryam Ali
author_profile: true
---



Retinal Pigment Epithelium (RPE) granules can be categorized based on their autofluorescence and morphology. Fluorescence lifetime measurements reveal another discriminative feature. However, identifying individual granules remains challenging by human eye. We are developing  a computational analysis pipeline for segmenting and classifying RPE granules from fluorescence lifetime imaging microscopy (FLIM) data. 
The analysis was implemented in a custom Python script [“Classi4RPE”](https://github.com/Maryam3Ali/Classi4RPE) employing seeded watershed segmentation to isolate individual granules and discriminate hyperfluorescent lipofuscins, characterized by longer lifetimes. Granules with shorter lifetimes were further analyzed by examining their lifetime distribution across their surfaces, allowing melanolipofuscins to be distinguished from other melanin-rich granules. 
The proposed approach achieves high performance, with mean sensitivities of 0.99 for L granules and 0.90 for ML granules, and corresponding specificities of 0.93 and 0.98, respectively, compared to manually annotated ground truth.


