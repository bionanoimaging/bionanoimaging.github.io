---
layout: single
title:  "Nematostella Imager"
date:   2026-06-10
author: Alexander Knauss
author_profile: true
---

<table>
  <tr>
    <td width="75%" valign="top">
      <p>The sea anemone <em>Nematostella vectensis</em> possesses conserved clock genes, displays light-entrained circadian locomotor rhythms, and exhibits sleep-like states linked to DNA repair, making it a key model for circadian regulation and sleep evolution. However, no existing platform integrates the timing precision, illumination control for scheduled experimental design, and automated behavioral analysis required for long-term studies.</p>
      <p>We developed an open-source hardware&ndash;software system built around an ESP32 microcontroller-based imaging unit, providing near-infrared and white-light illumination for entrainment, sub-second timing accuracy, and environmental logging at a total cost of ~600&nbsp;&euro;. Two companion napari plugins then automate the full workflow &mdash; from region-of-interest detection and movement quantification through circadian rhythm analysis to sleep-like state classification.</p>
      <h2>Software</h2>
      <ul>
        <li><b>Recording plugin</b> &mdash; <a href="https://github.com/s1alknau/Nematostella-time-series">Nematostella-time-series</a>: synchronized timelapse capture, LED control, ESP32 communication.</li>
        <li><b>Analysis plugin</b> &mdash; <a href="https://github.com/s1alknau/napari-hdf5-activity">napari-hdf5-activity</a>: ROI-based activity extraction and circadian analysis (Chi&sup2; periodogram, FFT, Cosinor, phase clustering).</li>
        <li><b>Web firmware installer</b> &mdash; <a href="https://s1alknau.github.io/Nematostella-time-series/">flash ESP32 firmware from the browser</a> (Chrome/Edge, no toolchain required).</li>
      </ul>
    </td>
    <td width="25%" valign="top" align="center">
      <img src="https://raw.githubusercontent.com/s1alknau/Nematostella-time-series/Nematostella-time-series-IR/docs/images/Nematostella.png" alt="Nematostella vectensis" width="180" />
      <br/>
      <em>An adult</em> Nematostella vectensis <em>recorded with the imager.</em>
    </td>
  </tr>
</table>

## Hardware

<p align="center"><img src="https://raw.githubusercontent.com/s1alknau/Nematostella-time-series/Nematostella-time-series-IR/docs/images/Setup.jpg" alt="Imager setup" width="380" /></p>

<p align="center"><em>The assembled imaging chamber: HIK robotics monochrome camera, exchangeable LED lid (IR or white), ESP32 controller and DHT22 temperature sensor.</em></p>

## Recording

<p align="center"><img src="https://raw.githubusercontent.com/s1alknau/Nematostella-time-series/Nematostella-time-series-IR/docs/images/Nematostella_Activity_LD_cycle.png" alt="Activity traces of four Nematostella vectensis under a 12 : 12 LD cycle" width="480" /></p>

<p align="center"><em>Top: snapshot of the 6-well imaging plate with auto-detected ROIs (1&ndash;6). Bottom: corresponding activity signals of the four</em> Nematostella vectensis <em>animals across the 12 : 12 light / dark phases. Activity is the mean absolute per-pixel frame-to-frame difference (MinMax-normalized) within each animal's ROI.</em></p>

