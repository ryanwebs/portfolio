---
title: "Leverless Mk.2"
header:
  teaser: /assets/images/leverless-2/leverless_2.jpg
excerpt: "Refresh of my original leverless arcade-style controller. Thinner, smaller, lighter, and better."
order: 2
share: false
toc: true
toc_sticky: true
---

*Personal Project<br>*
*December, 2025*

Ever since finishing my original leverless arcade-style controller, I dreamed of making a better version. While working at Formlabs, it was the perfect opportunity to design it while utilizing their library of high quality 3D printing materials.

![]({{ site.baseurl }}/assets/images/leverless-2/leverless2.gif){:width="80%"}{: .align-center}

# Design Goals 

While my original Leverless Mk.1 worked great and looked great, it was far too clunky to bring anywhere with me. I wanted to make a new one that was small enough to throw in my backpack, easier to print/assemble, and added some extra quality of life features. 

I had 4 main goals for this project:
1. Reduce the physical dimensions as much as possible<br> (Target Thickness: ~30mm)
2. Fully 3D printable shell and button caps
3. Add extra remappable buttons (bind to parry, dash, etc)
4. Low cost, but premium build quality

# Initial CAD

Here are the first couple iterations I mocked up in Solidworks. I printed a draft model as a quick fit check, and to feel out the form factor. Afterwards, I modified the shape of the corners, and added guard rails around the side buttons to prevent accidental button presses with my leg.

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

# Electronics

## Components

- Gateron Brown KS-33 Low-Profile Keyboard Switches
- Adafruit Feather RP2040
- USB C Panel Mount
- Custom PCB for wiring

I ran an open-source firmware called GP2040CE, which is a C++ multiplatform gamepad firmware for the RP2040 chip. I needed to modify the source code to match the pinout of the Adafruit Feather RP2040 board, and rebuilt the firmware using CMake in VisualStudio. In the future, the Raspberry Pi Pico would be a better choice of microcontroller, as the firmware needs no modification and offers extra functionality with the Pico Pi.

## PCB Design

In the Leverless Mk.1, the electronics take up a ton of room. This time I designed a custom PCB in KiCAD with traces to connect the keyboard switches to the GPIO pins of the microcontroller, so I could forgo wiring the buttons entirely. This heavily reduced the electronic footprint in Z, and allowed the shell to be only 25mm thick.

![]({{ site.baseurl }}/assets/images/leverless-2/leverless_2_schematic.png){:width="80%"}{: .align-center}
<figcaption>PCB Schematic</figcaption>{: .text-center}

![]({{ site.baseurl }}/assets/images/leverless-2/leverless_2_gerbers.png){:width="80%"}{: .align-center}
<figcaption>PCB Gerbers</figcaption>{: .text-center}

![]({{ site.baseurl }}/assets/images/leverless-2/pcb.jpg){:width="80%"}{: .align-center}
<figcaption>PCB for keyboard switches</figcaption>{: .text-center}

# Manufacturing

## Materials
- For the materials, I chose to print the shell out of Nylon 12 on the Formlabs Fuse 1+. Utilizing SLS 3D printing allows for printing more complex geometry without the need for supports. The geometry of the shell and its overhanging features makes it difficult to reliably 3D print using FDM, without sacrificing surface quality or dimensional accuracy. 
- SLA was not considered since long term skin-contact with resin printed parts can be toxic. The keycaps for each button were FDM printed from ABS. 
- FDM was preferred since my textured PEI sheet imparted a grippy texture onto the buttons' surface.
- The shells were fastened together using heat-set inserts, and M3 Countersunk screws for a flush bottom surface.

## Assembly

![]({{ site.baseurl }}/assets/images/leverless-2/leverless_2_soldering.jpg){:width="80%"}{: .align-center}
<figcaption>Soldering and assembling process</figcaption>{: .text-center}

![]({{ site.baseurl }}/assets/images/leverless-2/leverless_2_done.jpg){:width="80%"}{: .align-center}
<figcaption>Completed assembly</figcaption>{: .text-center}

## Cost Breakdown

This controller costed around $45 total in parts to produce, not counting the material costs to 3D print the shell (It did not cost me anything to use Formlabs' company print farm). Overall much more affordable than other fightsticks/gamepads on the market.

| Part | Net Cost | Units | Qty/Assy | Parts Cost |
| :--- | :----: | :----: | :----: | ---: |
| Adafruit RP2040 | $20.70 | 1 | 1 | $20.70 |
| Gateron KS33 | $11.04 | 35 | 17 | $5.36 |
| Panel Mount | $9.69 | 1 | 1 | $9.69 |
| PCBs from JLC | $42.92 | 5 | 1 | $8.58 |
|   |   |   | Total Cost | $44.34 |

# Revision C

## Quirks

The first finished assembly worked well, but had some quirks I wanted to address:

1. Buttons sit too high above the top surface, and it's difficult to swipe between them.
2. Two-piece clamshell design makes it awkward to assemble:
- Difficult to close around the side buttons.
- Panel mount cable is attached to both halves of the shell at either end, and wants to force the shell apart while fastening the screws.

## Design Changes

To fix these, I made the following adjustments:
1. Changed shell design from two-piece clamshell to a single shell with a screw on bottom plate. Added ribs to bottom plate for rigidity.
2. Adjusted tolerance of side-button mounting holes, allowing keyswitches to snap-fit into place.
3. Removed chamfers around top surface button holes.
4. Reduced height of the highlighted PCB mounting standoffs by ~1mm, to give the buttons a slightly lower profile. (Target was ~1.5mm above the surface, or approximately the keyswitch travel distace according to manufacturer's spec)
<div style="display:flex; gap:10px;">
  <img src="{{ site.baseurl }}/assets/images/leverless-2/revc_shell.png" style="width:50%;">
  <img src="{{ site.baseurl }}/assets/images/leverless-2/revc_bottom.png" style="width:50%;">
</div>
<figcaption>New shell design, PCB standoffs highlighted blue</figcaption>{: .text-center}
![]({{ site.baseurl }}/assets/images/leverless-2/crosssection.png){:width="80%"}{: .align-center}
<figcaption>Adjusted button height accounting for switch travel distance.</figcaption>{: .text-center}
<br>
I am still in the process of building this next iteration, and will update this page when it is complete.

## Button Iterations

I've been printing a variety of different button shapes, sizes, and materials. I plan on adding a picture here to show all of my button iterations after I decide on which button feels the best.
