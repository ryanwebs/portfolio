---
title: "Autoshrink Vision System"
header:
  teaser: /assets/images/autoshrink/autoshrink_iso.png
excerpt: "Implemented a Keyence camera and PLC into a manufacturing line to aid with part alignment down to the millimeter."
order: 6
share: false
toc: true
toc_sticky: true
---

*R&D Engineering Internship, Spryte Medical<br>*
*Summer 2024*

![]({{ site.baseurl }}/assets/images/autoshrink/clean_room.jpg){:width="100%"}{: .align-center}

I implemented a Keyence MD-X Programmable Logic Controller into a piece of assembly line equipment, utilizing camera vision tools to measure the positions of cathether probe components, and aid with highly precise part alignment.

# Overview
- Explain the purpose of the Autoshrink in the 002896 subassembly manufacturing process

- Programmed physical feature detection tools to measure the positions of cathether probe components, and show an OK readout when components are properly aligned.

## Probe Assembly Process
- Put the solidworks gif here!
- Put the video of you overlapping the nitinol and window tube here!

## The Old Setup
- Why was the old manual alignment process flawed? How was yield affected?

## Camera Vision Implementation
- What was the proposed solution? How would this solve the current problem? What would be the process of implementing it?

# Mounting Hardware

## Camera Mount Iterations

## Position Control

## The New Setup

# Keyence Programming

Keyence's edge detection algorithms locate part position by analyzing contrast changes in images to identify the boundaries of features like edges, corners, and holes. The system scans pixel intensity values across defined region detecting rapid shifts in brightness, which usually corresponds to physical edges on the part. These detected edges are then converted into accurate coordinate data, allowing the PLC to calculate position, orientation, and offsets in real time so operators can inspect alignment.

## Feature Detection Tools

I programmed the following three edge detection tools to identify the locations of the components' features that define critical dimensions.

1. Left edge of the *Marker Band*
2. Right edge of the *Wire Nose Tip*
3. Left edge of the *Window Tube*


<div style="display:flex; gap:10px;">
  <img src="{{ site.baseurl }}/assets/images/autoshrink/edgetool1.jpg" style="width:50%;">
  <img src="{{ site.baseurl }}/assets/images/autoshrink/edgetool2.jpg" style="width:50%;">
  <img src="{{ site.baseurl }}/assets/images/autoshrink/edgetool3.jpg" style="width:50%;">
</div>
<figcaption>From left to right: 1. Marker Band, 2. Wire Nose, 3. Window Tube</figcaption>{: .text-center}

## "OK" Conditions

Using the edge detection tools, I programmed three more tools to measure the relative distances between those features, and ensure the subassembly's critical dimensions were met before activating the autoshrink.

1. Distance between wire nose and marker band must be 2mm +/- 1mm
2. Window tube must cover the wire nose 0.5mm +/- 0.25 mm
3. Wire nose must extend 12 mm +/- 0.25 mm out of a fiber clamp

<div style="display:flex; gap:10px;">
  <img src="{{ site.baseurl }}/assets/images/autoshrink/ok1.jpg" style="width:33%;">
  <img src="{{ site.baseurl }}/assets/images/autoshrink/ok2.jpg" style="width:33%;">
  <img src="{{ site.baseurl }}/assets/images/autoshrink/ok3.jpg" style="width:33%;">
</div>
<figcaption>From left to right: Band Distance, Window Tube Overlap, Nose Position</figcaption>{: .text-center}
 
## Switch Modification
- A Keyence PLC allows you to use its GPIO ports to actuate other electronic components when user-defined conditions are met. I interposed a relay directly into the circuit of the autoshrink's START button, and programmed the Keyence such that the relay would remain normally open until all of the "OK" conditions were met. This prevented the autoshrink from accidentally (or purposefully) being operated until proper part alignment is assured.

# Results
- Quick summary of how this improved the probe's mmanufacturability, and increased yield per batch. Give the cost savings you calculated. Explain how this makes it easier for assembly line operators to be trained on building this subassembly.

