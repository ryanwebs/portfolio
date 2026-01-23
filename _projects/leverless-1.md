---
title: "The Leverless Mk.1"
header:
  teaser: /assets/images/leverless-1/leverless_1_top.jpg
excerpt: "Custom arcade-style controller I designed specifically for fighting games. No sticks, just buttons."
order: 1
share: false
toc: true
toc_sticky: true
---

*Personal Project<br>*
*Fall, 2024*

I made this controller as something of a cross between fun design challenge, and an art project.

Most modern video games allow 360 degree movement in any direction you want; yet in fighting games there are still only 8 directions, so a joystick is too overcomplicated of input mechanism for the output that's required.

Analog directional control can significantly reduce user error in fighting games, whereas the extra variability in a joystick’s position can sometimes leads to unintentional X-input readouts. Let's say your stick angle is 2 degrees askew from the direction you wanted -- you'll probably end up dropping your combo. 

## Design

My vision was to build make the arcade controller mostly out of wood, so it could have a homemade feeling to it. I built the box out of 2x4's that I planned to stain and seal later. I started by mocking up a quick CAD model to get the dimensions right, and dial in the look that I was going for.

![cad]({{ site.baseurl }}/assets/images/leverless-1/leverless_1_cad.png){:width="75%"}{: .align-center}
<figcaption>Figure 1. Initial rough CAD model</figcaption>{: .text-center}

## Electronics

I wanted this entire project to be solderless, so for the microcontroller I picked a Raspberry Pi with preflashed firmware and screw terminals for the GPIO ports. I used Sanwa arcade cabinet buttons, that fastened straight into the holes of the top plate with their included nuts. After wiring the buttons to the Pi, I could remap them later to correspond to the X-Input readouts I wanted. I also bored a hole in the side of the box for a USB-C panel mount.

![cad]({{ site.baseurl }}/assets/images/leverless-1/leverless_1_bottom.jpg){:width="75%"}{: .align-center}
<figcaption>Figure 2. Electronics and wiring</figcaption>{: .text-center}

![cad]({{ site.baseurl }}/assets/images/leverless-1/wiring.png){:width="75%"}{: .align-center}
<figcaption>Figure 2.1. REALLY SOPHISTICATED wiring diagram</figcaption>{: .text-center}

## Manufacturing

I used an Epilog laser cutter to cutout the button layout on the top plates. I ended up using two layers, one from plywood with a laser-etched vector art design that I drew, and another outer layer of clear acrylic to protect the plywood layer with the design. The acrylic also just felt nicer to rest my hands on.

![cad]({{ site.baseurl }}/assets/images/leverless-1/cutting.jpg){:width="75%"}{: .align-center}
<figcaption>Figure 3. Using the Epilog</figcaption>{: .text-center}

![cad]({{ site.baseurl }}/assets/images/leverless-1/top_plate.jpg){:width="75%"}{: .align-center}
<figcaption>Figure 3.1. Laser etched plywood, with buttons installed</figcaption>{: .text-center}

After cutting the 2x4s to length and glueing them together, I sanded down the outside to prepare it for finishing. I used dark walnut wood stain, and sealed with polyeurethane.

![cad]({{ site.baseurl }}/assets/images/leverless-1/varnish.jpg){:width="75%"}{: .align-center}
<figcaption>Figure 4. Applying the finish</figcaption>{: .text-center}

In closed off the bottom on the box using another sheet of clear acrylic so I could see inside, and added some 3D printed mounting brackets to attach the bottom plate. I epoxied them in place to the inner walls, while setting the bracket height with the bottom plate to keep everything flush underneath the box.

![cad]({{ site.baseurl }}/assets/images/leverless-1/printed_things.jpg){:width="75%"}{: .align-center}
<figcaption>Figure 5. Glueing in the brackets</figcaption>{: .text-center}

Here's the finished product. I was very happy with the final look, and it works great.

![cad]({{ site.baseurl }}/assets/images/leverless-1/leverless_1_top.jpg){:width="75%"}{: .align-center}
<figcaption>Figure 6. All done!</figcaption>{: .text-center}




