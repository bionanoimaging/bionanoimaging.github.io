---
layout: single
title:  "chemometrics analysis for hyperspectral data in mid-IR photo-induced force microscopy (PiF-IR)"
date:   2026-06-10
author: Maryam Ali
author_profile: true
---



Infrared spectroscopic photo-induced force microscopy (PiF-IR) is an innovative approach for chemical imaging of surfaces with a spatial resolution of ≈ 5 nm [1, 2]. We are developing a chemometrics approach to extract chemical information form hyperspectral PiF-IR data sets. 

Our home-written python-based software ["hyPIRana"] (https://github.com/BioPOLIM/hyPIRana) currently provides two methods for cluster analysis: (i) principal component analysis (PCA) is employed to identify the dominant sources of spectral variation and to correlate them with the corresponding sample topography by score maps of the PC components and (ii) hierarchical cluster analysis (HCA) is implemented to group spectra into chemically meaningful clusters, whereby, the number of clusters is selected in a supervised manner based on the HCA dendrogram. Cluster maps are subsequently generated using non-negative factorization (NNF), enabling direct comparison with topography images and PCA scores maps. 

The currently established chemometrics analysis enhances the interpretation of PiF-IR data and provides a foundation for future developments, for example by incorporating emerging multivariate analysis methods as the technique continues to evolve.


![BSAAdsorption](/assets/images/projects/hyp_data_pif.png)

*Local molecular orientation of PMIS-C8 on a nanostructured Au substrate visualized using PiF-IR hyperspectral bands. [2] (a) PiF simultaneously acquired topography. (b) Molecular structure of PMIS-C8. (c) HCA dendrogram. (d)  cluster mean spectra. (e) factor maps in matching colors.

## Selected References

```
[1] M. Ali, R. Schneider, A. Strecker, N. Krishnakumar, S. Unger, M. Soltaninezhad, J. Kirchhoff, A. Tannert, K. A. Dragounova, R. Heintzmann, A.-D. Müller, C. Krafft, U. Neugebauer, D. Täuber, Anal. Chem. 2025, 97, 23914–23926.
[2] A. James, M. Ali, Z. Ye, P. T. Y. Nhi, S. Xavi, M. Huq, S. Barua, M. Luo, Y. Tsegazab, A. Elmanova, R. Schneider, O. Ustimenko, S.-E. Stanca, M. Diegel, A. Dellith, U. Hübner, C. Krafft, J. Finkelmeyer, M. Hupfer, K. Peneva, M. Zeisberger, C. David, M. Presselt, D. Täuber, 2025, arXiv.2512.22373.


```



