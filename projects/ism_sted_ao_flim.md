---
layout: single
title: "Image Scanning Microscopy with STED, Adaptive Optics, and Fluorescence Lifetime Imaging"
date: 2026-06-12
author: Georg Bergner
author_profile: true
categories:
  - research
tags:
  - super-resolution microscopy
  - image scanning microscopy
  - STED
  - adaptive optics
  - FLIM
  - SPAD array
excerpt: "A versatile scanning microscope that unites image scanning microscopy, stimulated emission depletion, adaptive optics, and fluorescence lifetime imaging in a single platform."
---


## Overview

This project combines several modern microscopy techniques into a single, versatile
scanning microscope. The goal is to push spatial resolution in all three dimensions
while preserving the photons emitted by the sample and extending the information
recovered from each measurement to include fluorescence lifetime.

## Image scanning microscopy and lifetime imaging

**Image scanning microscopy (ISM)** provides high lateral resolution with minimal
photon losses. The sample is scanned by a focused laser beam, and the signal is
recorded by an array of detector elements.
Reassigning the signal from each element computationally recovers a high resolution image.

The method can be combined with **fluorescence lifetime imaging (FLIM)**. For each
detector element, the arrival time of the detected photons is recorded. These arrival
times reveal the lifetime of the excited fluorophores and thereby provide a contrast
channel sensitive to the local sample composition and molecular environment. Fast
single-photon avalanche diode (SPAD) array detectors make this combined spatial and
temporal readout possible.

## Resolution enhancement with STED

**Stimulated emission depletion (STED)** allows a further resolution enhancement,
limited only by the maximum light intensity the sample can tolerate. The underlying
principle is an effective narrowing of the scan focus: a second, high-intensity laser
beam depletes the excited fluorophores at the rim of the focal spot, so that only the
central region emits. Specific beam configurations enable depletion in the lateral or
the axial direction. The lateral resolution gain provided by ISM can therefore be
complemented by an axial resolution gain from STED.

## Adaptive optical correction

Imaging deeper layers of a sample introduces optical aberrations in both the
excitation beam and the detection signal, degrading resolution and signal level. These
aberrations can be compensated with **adaptive optical elements**. In this setup, we
integrate such elements and develop efficient algorithms to measure and apply the
required adaptive correction.

## Outlook

By uniting ISM, STED, adaptive optics, and FLIM in one scanning platform, the setup
aims to deliver three-dimensional super-resolution together with quantitative
lifetime contrast, even in optically demanding, thicker samples.
