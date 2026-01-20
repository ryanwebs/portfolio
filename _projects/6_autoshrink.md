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

During my summer internship at Spryte Medical, I worked on making improvements to the assembly line of and Intraneural OCT Imaging Probe. These probes are extremely thin, and were required to be assembled highly precisely under a microscope. Many major steps of the manufacturing process involve connecting, and layering a series of sheathes that house a rotating optical fiber. The assembly step I focused on improving involved utilized Autoshrink -- a machine that automatically blew hot air onto a piece of heatshrink around two major probe components. The heatshrink would press-fit a "window-tube" of PET onto the tip a flexible metal sheathe. The heat-shrink is then cut away, leaving the PET-->metal joint held together by friction alone.

## Joint Assembly Process

This visualization demonstrates how the window tube overlaps the metal sheathe, and press fits onto the tapered tip.

![]({{ site.baseurl }}/assets/images/autoshrink/probeoverlap.gif){:width="100%"}{: .align-center}
![]({{ site.baseurl }}/assets/images/autoshrink/002896.png){:width="100%"}{: .align-center}
<figcaption>Probe assembly in real life</figcaption>{: .text-center}

## The Old Setup

Previously the probe components were positioned under a microscrope by hand, before running the autoshrink to press the joing into place. This proved to be cumbersome to manually operate, especially in a step where *accurate part position is critical*. If the parts are even *slightly misaligned* prior to running the autoshrink, the resultant joint is weakened. Previous batches had reject rates of around 25% due to probes failing their tensile spec at the autoshrink's joint.

<div style="display:flex; gap:10px;">
  <img src="{{ site.baseurl }}/assets/images/autoshrink/oldsetup.jpg" style="width:50%;">
  <img src="{{ site.baseurl }}/assets/images/autoshrink/12mm.png" style="width:50%;">
</div>
<figcaption>Old setup, using microscope and ruler </figcaption>{: .text-center}

## Camera Vision Implementation
- What was the proposed solution? How would this solve the current problem? What would be the process of implementing it?
With the following design constraints:
1. 
2. 
3. 

# Mounting Hardware

## Camera Mount Iterations

I designed a 3D printed mount for the camera/lens. The material I chose was PETG-CF for its high rigidity to minimize camera shake, and resistance to IPA (relative to PLA-CF) since the mount would be in a clean room environment. I made sure the height of the mount above the  parts to be imaged was equal to the lens' focal length.

<div style="display:flex; gap:10px;">
  <img src="{{ site.baseurl }}/assets/images/autoshrink/mount1.png" style="width:25%;">
  <img src="{{ site.baseurl }}/assets/images/autoshrink/mount2.png" style="width:25%;">
  <img src="{{ site.baseurl }}/assets/images/autoshrink/mount3.png" style="width:25%;">
  <img src="{{ site.baseurl }}/assets/images/autoshrink/mount4.png" style="width:25%;">
</div>
<figcaption>Iterations of the 3D printed camera mount</figcaption>{: .text-center}

## Position Control

Even though the camera was NOT supposed to move after installation, it was important to allow for microadjustments in Z to initially focus the lens. I attached the entire camera mount to a linear stage, which I modified with a micrometer to make the adjustments. I 3D printed a cover for the micrometer, to discourage operators from accidentally touching it and un-focusing the lens. Finally, I hand tapped a hole in the back of the linear stage, and added a set screw for locking its position.

<div style="display:flex; gap:10px;">
  <img src="{{ site.baseurl }}/assets/images/autoshrink/micrometer.png" style="width:50%;">
  <img src="{{ site.baseurl }}/assets/images/autoshrink/set_screw.png" style="width:50%;">
</div>
<figcaption>Lens Z position control, and linear stage set screw</figcaption>{: .text-center}

## The New Setup

# Keyence Programming

Keyence's edge detection algorithms locate part position by analyzing contrast changes in images to identify the boundaries of features like edges, corners, and holes. The system scans pixel intensity values across defined region detecting rapid shifts in brightness, which usually corresponds to physical edges on the part. Then, the detected edges can be converted into coordinates, allowing the PLC to calculate position, orientation, and offsets so operators can inspect part alignment in real-time.

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

![]({{ site.baseurl }}/assets/images/autoshrink/autoshrink_ok.gif){:width="100%"}{: .align-center}

