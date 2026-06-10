---
layout: single
title:  "Maximum Likelihood Localization Maps"
date:   2026-06-10
author: Hossein Zarei Oshtolagh
author_profile: true
---

We developed a non-iterative approach for emitter localization in single-molecule localization microscopy (SMLM) by directly reconstructing maximum-likelihood localization maps from photon-counting image data and a measured or simulated point spread function (PSF) of the system. Instead of relying on iterative fitting or Gaussian PSF assumptions, the method uses a single convolution operation to compute spatial probability maps of emitter positions. These maps provide more information than a single fitted localization point and can be used directly for reconstruction without a separate rendering step. The approach enables efficient 2D and 3D reconstructions, supports real-time and high-throughput SMLM analysis, and achieves results comparable to fitting-based methods on both simulated and experimental data.

![MLLMresult_tubulin](/assets/images/projects/MLLM_res.png)
*Left: Widefield (sum) image of tubulins. Right: 3D reconstructed localization maps.*

Tubulin dataset adapted from [Sage et al., Nature Methods 16, 387–395 (2019)](https://www.nature.com/articles/s41592-019-0364-4).