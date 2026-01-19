---
title: "The Leverless Mk.2"
header:
  teaser: /assets/images/leverless-2/leverless_2.jpg
excerpt: "Refresh of my original leverless arcade-style controller. Thinner, smaller, lighter, and better."
order: 4
share: false
toc: true
toc_sticky: true
---

*December 2025, Personal Project*

Ever since I finished my original leverless arcade-style controller, I dreamed of making a better version. While working at Formlabs, I knew it was the perfect time to design my second controller and utilize their library of high quality 3D printing materials.

![]({{ site.baseurl }}/assets/images/leverless-2/leverless_2_exploded.png){:width="80%"}{: .align-center}

# Design Goals 

While my original Leverless Mk.1 worked great and looked great, it was far too clunky to bring anywhere with me. I wanted to make a new one that was small enough to throw in my backpack, easier to print/assemble, and added some extra quality of life features. 

I had 3 main goals for this project:
1. Reduce the physical dimensions of the controller as much as possible.
2. Make the shell and button caps fully 3D printable.
3. Add some extra remappable buttons to the layout (e.g. buttons for binding to dash, parry, and training mode reset)

# Iterations

## Revision A

<div style="display:flex; gap:10px;">
  <img src="{{ site.baseurl }}/assets/images/leverless-2/leverless_2_revA.png" style="width:50%;">
  <img src="{{ site.baseurl }}/assets/images/leverless-2/leverless_2_fitcheck.jpg" style="width:50%;">
</div>
<figcaption>First iteration CAD model, and FDM printed fit check</figcaption>{: .text-center}

## Revision B

<div style="display:flex; gap:10px;">
  <img src="{{ site.baseurl }}/assets/images/leverless-2/leverless_2_cad.png" style="width:50%;">
  <img src="{{ site.baseurl }}/assets/images/leverless-2/leverless_2_exploded.png" style="width:50%;">
</div>
<figcaption>Second iteration CAD assembly, and exploded view</figcaption>{: .text-center}

<div style="display:flex; gap:10px;">
  <img src="{{ site.baseurl }}/assets/images/leverless-2/revAside.png" style="width:50%;">
  <img src="{{ site.baseurl }}/assets/images/leverless-2/rails.png" style="width:50%;">
</div>
<figcaption>Added guard rails to prevent accidental button presses</figcaption>{: .text-center}

## Revision C

Add some pictures of the RevC CAD here!
Show off the new shell design, the new button design, and the solution for adjusting button height!

# Electronics

## Components

- Gateron Brown KS-33 Low-Profile Keyboard Switches
- Adafruit Feather RP2040
- USB C Panel Mount

The Raspberry Pi Pico was the microcontroller of choice for this project. I ran an open-source firmware called GP2040CE, which is a multiplatform gamepad firmware in C++ developed for the RP2040 chip. Sadly I did not write this, but it allows the Raspberry Pi to be treated as an X-Input controller. I did however modify the source code to match the pinout of the Adafruit Feather RP2040 board, and rebuilt the firmware using CMake in VisualStudio.

## PCB Design

In the Leverless Mk.1, the electronics take up a lot of room inside the box. I knew if I wanted to get it anywhere close to as thin as I was hoping, I needed a PCB to forgo having to wire the buttons entirely. I designed this custom PCB in KiCAD with traces to connect the keyboard switches to the GPIO pins of the microcontroller. This heavily reduced the electronic footprint in Z, and allowed me to make the whole controller only 25mm thick.

![]({{ site.baseurl }}/assets/images/leverless-2/leverless_2_schematic.png){:width="80%"}{: .align-center}
<figcaption>PCB Schematic</figcaption>{: .text-center}

![]({{ site.baseurl }}/assets/images/leverless-2/leverless_2_gerbers.png){:width="80%"}{: .align-center}
<figcaption>PCB Gerbers</figcaption>{: .text-center}

![]({{ site.baseurl }}/assets/images/leverless-2/pcb.jpg){:width="80%"}{: .align-center}
<figcaption>PCB for keyboard switches</figcaption>{: .text-center}

# Manufacturing

- SLS printed shell in PA12, and FDM printed
ABS keycaps.

![]({{ site.baseurl }}/assets/images/leverless-2/leverless_2_soldering.jpg){:width="100%"}{: .align-center}

![]({{ site.baseurl }}/assets/images/leverless-2/leverless_2_done.jpg){: .align-center}

# Future Improvements
