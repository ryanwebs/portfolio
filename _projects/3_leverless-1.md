---
title: "The Leverless Mk.1"
header:
  teaser: /assets/images/leverless-1/leverless_1_top.jpg
excerpt: "Custom controller I designed specifically for fighting games. No sticks, just buttons."
order: 2
share: false
toc: true
toc_sticky: true
---

I made this controller as something of a cross between fun design challenge, and an art project.

Leverless arcade controllers that opt for directional buttons over a joystick allow for greater precision when performing a quick series of directional inputs. This can significantly reduce user error in fighting games, where slight variability in a joystick’s angle sometimes leads to unintentional X-input readouts that are inconsistent with user intent. Basically, this means you're gonna drop your combos if you're trash.

## Design

I wanted to design and build my arcade controller mostly out of wood, so it could have a homemade feeling to it. My goal was to make the main structure of the box out of 2x4's that I would stain and seal later. I started by mocking up a quick CAD model to get the dimensions right, and dial in the look that I was going for.

![cad]({{ site.baseurl }}/assets/images/leverless-1/leverless_1_cad.png){:width="75%"}{: .align-center}
<figcaption>Figure 1. Initial rough CAD model</figcaption>{: .text-center}

## Electronics

I wanted this entire project to be solderless, so for the microcontroller I picked a Raspberry Pi with preflashed firmware and screw terminals for the GPIO ports. I used genuine Sanwa arcade cabinet buttons, that fastened straight into the holes of the top plate with their included nuts. I was able to easily wire the buttons to the Pi, then remap them later to correspond to the X-Input readouts I wanted. I also bored a hole in the side of the box for a USB-C panel mount.

![cad]({{ site.baseurl }}/assets/images/leverless-1/leverless_1_bottom.jpg){:width="75%"}{: .align-center}
<figcaption>Figure 2. Electronics and wiring</figcaption>{: .text-center}

![cad]({{ site.baseurl }}/assets/images/leverless-1/wiring.png){:width="75%"}{: .align-center}
<figcaption>Figure 2.1. REALLY SOPHISTICATED wiring diagram</figcaption>{: .text-center}

## Manufacturing

I used an Epilog laser cutter to cutout the button layout on the top plates. I ended up using two layers, one from plywood with a laser-etched .svg vector art design that I drew, and another outer layer of clear acrylic to protect the plywood layer with the design. The acrylic also just felt nicer to rest my hands on.

![cad]({{ site.baseurl }}/assets/images/leverless-1/cutting.jpg){:width="75%"}{: .align-center}
<figcaption>Figure 3. Using the Epilog</figcaption>{: .text-center}

![cad]({{ site.baseurl }}/assets/images/leverless-1/top_plate.jpg){:width="75%"}{: .align-center}
<figcaption>Figure 3.1. Laser etched plywood, with buttons installed</figcaption>{: .text-center}

After cutting the 2x4s to length and glueing them together, I sanded down the outside to prepare it for finishing. I used dark walnut wood stain, and sealed with polyeurethane.

![cad]({{ site.baseurl }}/assets/images/leverless-1/varnish.jpg){:width="75%"}{: .align-center}
<figcaption>Figure 4. Applying the finish</figcaption>{: .text-center}

In order to close off the bottom on the box, I wanted to continue using clear acrylic so I could admire my cable management. I added some 3D printed mounting brackets to attach the bottom plate. I epoxied them in place to the inner walls of the box, while using the bottom plate to set the height of the shelves. This allowed me to mount the acrylic plate to the box while keeping it flush with the bottom.

![cad]({{ site.baseurl }}/assets/images/leverless-1/printed_things.jpg){:width="75%"}{: .align-center}
<figcaption>Figure 5. Glueing in the brackets</figcaption>{: .text-center}

Here's the finished product. I'm very happy with the way it turned out.

![cad]({{ site.baseurl }}/assets/images/leverless-1/leverless_1_top.jpg){:width="75%"}{: .align-center}
<figcaption>Figure 6. All done!</figcaption>{: .text-center}




