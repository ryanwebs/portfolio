---
title: "Autoshrink Vision System"
header:
  teaser: /assets/images/autoshrink/autoshrink_iso.png
excerpt: "Implemented a Keyence camera and PLC to partially automate a heatshrink machine. Programmed physical feature detection tools to measure the positions of cathether probe components, and show an OK readout when components are properly aligned."
order: 6
share: false
toc: true
toc_sticky: true
---

## Autoshrink Overview

- Explain the purpose of the Autoshrink in the 002896 subassembly manufacturing process
- Why was the old manual alignment process flawed? How was yield affected?
- What was the proposed solution? What would be the process of implementing it?

### Probe Assembly Process

- Put the solidworks gif here!
- Put the video of you overlapping the nitinol and window tube here!


### The Old Setup


### Keyence Implementation


## Mounting Hardware

### Camera Mount Design

### Position Control

### The New Setup

## Keyence Programming

### Feature Detection Tools
- Explain edge detection logic here!
- 
### OK Conditions
- Explain assembly dimension constraints here!
- Explain how the PLC allows you to ensure proper alignment with these tools!
- 
### Switch Modification
- A Keyence PLC allows you to use its GPIO ports as a digital switch for other electronics. I programmed the controller such that when all OK Conditions are met, a voltage is sent through one of the GPIO pins, and into an electrical relay. Then, I interposed the relay directly into the circuit of the autoshrinks

## Results

- Quick summary of how this improved the probe's mmanufacturability, and increased yield per batch. Give the cost savings you calculated. Explain how this makes it easier for assembly line operators to be trained on building this subassembly.

