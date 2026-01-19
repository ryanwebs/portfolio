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

![]({{ site.baseurl }}/assets/images/leverless-2/leverless_2_exploded.png){:width="80%"}{: .align-center}

# Overview 

Refreshed version of my original leverless
controller designed to be smaller, lighter, fully
3D printed, and with extra mappable buttons.

- SLS printed shell in PA12, and FDM printed
ABS keycaps.

- Runs GP2040CE on a Raspberry Pi 2040 chip
for X-Input readouts.

- Modified source code in C++ and rebuilt firmware
to match pinout of Adafruit Feather 2040 board.

- Designed custom PCB that connects keyboard
switches to the RP board. Heavily reduces the
electronics’ footprint in Z allowing for much
thinner chassis.

# Design Goals

# Revision A

![]({{ site.baseurl }}/assets/images/leverless-2/leverless_2_exploded.png){:width="80%"}{: .align-center}
<figcaption>Exploded View</figcaption>{: .text-center}

<div style="display:flex; gap:10px;">
  <img src="{{ site.baseurl }}/assets/images/leverless-2/leverless_2_revA.png" style="width:50%;">
  <img src="{{ site.baseurl }}/assets/images/leverless-2/leverless_2_fitcheck.jpg" style="width:50%;">
</div>
<figcaption>First iteration CAD model, and FDM printed fit check</figcaption>{: .text-center}

# Revision B

![]({{ site.baseurl }}/assets/images/leverless-2/leverless_2_cad.png){:width="80%"}{: .align-center}
<figcaption>Leverless 2, Rev B CAD Assembly</figcaption>{: .text-center}

![]({{ site.baseurl }}/assets/images/leverless-2/leverless_2_exploded.png){:width="80%"}{: .align-center}
<figcaption>Exploded View</figcaption>{: .text-center}

<div style="display:flex; gap:10px;">
  <img src="{{ site.baseurl }}/assets/images/leverless-2/revAside.png" style="width:50%;">
  <img src="{{ site.baseurl }}/assets/images/leverless-2/rails.png" style="width:50%;">
</div>
<figcaption>Added guard rails to prevent accidental button presses</figcaption>{: .text-center}

## PCB Design

![]({{ site.baseurl }}/assets/images/leverless-2/leverless_2_schematic.png){:width="80%"}{: .align-center}
<figcaption>PCB Schematic</figcaption>{: .text-center}

![]({{ site.baseurl }}/assets/images/leverless-2/leverless_2_gerbers.png){:width="80%"}{: .align-center}
<figcaption>PCB Gerbers</figcaption>{: .text-center}

![]({{ site.baseurl }}/assets/images/leverless-2/pcb.jpg){:width="80%"}{: .align-center}
<figcaption>PCB for keyboard switches</figcaption>{: .text-center}

## Manufacturing

![]({{ site.baseurl }}/assets/images/leverless-2/leverless_2_soldering.jpg){:width="80%"}{: .align-center}

![]({{ site.baseurl }}/assets/images/leverless-2/leverless_2_done.jpg){:width="80%"}{: .align-center}
