---
title: "Autoshrink Vision System"
header:
  teaser: /assets/images/autoshrink/autoshrink_iso.png
excerpt: "Implemented a Keyence camera and PLC into a manufacturing line to aid with part alignment down to the micron."
order: 6
share: false
toc: true
toc_sticky: true
---

*R&D Engineering Internship, Spryte Medical<br>*
*Summer 2024*

![]({{ site.baseurl }}/assets/images/lifecycle-tester/annotated.png){:width="100%"}{: .align-center}

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

## Feature Detection Tools
- Explain edge detection logic here!

<div style="display:flex; gap:10px;">
  <img src="{{ site.baseurl }}/assets/images/autoshrink/edgetool1.jpg" style="width:50%;">
  <img src="{{ site.baseurl }}/assets/images/autoshrink/edgetool2.jpg" style="width:50%;">
  <img src="{{ site.baseurl }}/assets/images/autoshrink/edgetool3.jpg" style="width:50%;">
</div>
<figcaption>From left to right: Band Distance, Window Tube Overlap, Nose Position</figcaption>{: .text-center}

## "OK" Conditions
- Explain assembly dimension constraints here!
- Explain how the PLC allows you to ensure proper alignment with these tools!

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

