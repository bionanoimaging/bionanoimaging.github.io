---
layout: single
title: "Pandemic Modelling Using Automated Model Discovery"
date: 2026-06-10
author: Morteza Babazadeh Shareh
categories:
  - research
tags:
  - COVID-19
  - pandemic modelling
  - SINDy
  - automated model discovery
  - time-series analysis
  - vaccination
excerpt: "A data-driven framework for discovering compact differential-equation models from COVID-19 epidemiological data in Thuringia."
---

**Project:** SARS-CoV-2Dx  
**Contributors:** Morteza Babazadeh Shareh and Rainer Heintzmann  
**Institution:** Department of Microscopy, Leibniz Institute of Photonic Technology (Leibniz IPHT)

## Overview

The COVID-19 pandemic showed that classical epidemic models, such as the SIR family of models, can be difficult to adapt when disease dynamics change rapidly over time. In WP 8.1, we developed a data-driven modelling framework that automatically discovers governing differential equations directly from epidemiological data, without assuming a fixed model structure in advance.

The aim of the project was to model and predict COVID-19 dynamics using infection, vaccination, hospitalisation, and intensive-care data from Thuringia, Germany. The framework incorporates vaccination as a control signal, enabling prediction, validation, and counterfactual scenario analysis.

## Data and modelling approach

The study uses more than 400,000 patient records together with vaccination data from Thuringia covering the period 2020–2022. From these data, two convolution-based features were derived:

- **Infectiveness**, representing delayed effects of disease progression and transmission potential.
- **Antibody level**, representing delayed effects of vaccination and immune response.

Sparse Identification of Nonlinear Dynamics (**SINDy**) was then used to identify compact differential equations governing the infection dynamics. Since hospitalisations and ICU cases are strongly correlated with infections, they were modelled using Bayesian regression.

## Optimisation strategies

A global SINDy model provides a compact mathematical structure, but fixed global coefficients are not always sufficient to describe local and time-varying pandemic dynamics. Therefore, three optimisation strategies were applied while preserving the discovered equation structure:

1. **Local coefficient adjustment** using recent data.
2. **Time-dependent coefficient adjustment** to capture gradual changes over time.
3. **Neural-augmented ODE adjustment** to account for unobserved external effects.

Walk-forward validation showed that all three optimisation strategies consistently improved short-term predictions compared with the original global coefficients.

## Scenario analysis and sensitivity

Because the model includes antibody levels as a control signal, it can be used to simulate counterfactual vaccination and intervention scenarios. This allows the investigation of alternative vaccination rates and other hypothetical public-health strategies.

The sensitivity analysis indicated that infection-related coefficients have a strong influence on outbreak progression. This suggests that reducing infectious contacts can be one of the most impactful strategies for early epidemic control.

## Outcome

WP 8.1 demonstrates that automated model discovery can provide compact, interpretable, and data-driven models for pandemic dynamics. The approach combines differential-equation discovery, adaptive coefficient optimisation, Bayesian regression, and scenario analysis in a single framework.

The methodology has potential beyond COVID-19 and may be transferred to other infectious diseases and regions where sufficiently detailed time-series data are available.

## Related publication

Babazadeh Shareh M, Kleiner F, Böhme M, Hägele C, Dickmann P, Heintzmann R. **Automated Model Discovery Based on COVID-19 Epidemiologic Data.** _medRxiv_, 2026.

DOI: [10.64898/2026.02.22.26346850](https://doi.org/10.64898/2026.02.22.26346850)  
medRxiv: [https://www.medrxiv.org/content/10.64898/2026.02.22.26346850v1](https://www.medrxiv.org/content/10.64898/2026.02.22.26346850v1)
