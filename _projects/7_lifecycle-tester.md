---
title: "Lifecycle Test Fixture"
header:
  teaser: /assets/images/lifecycle-tester/lifecycle_tester.jpg
excerpt: "Designed a pneumatic test fixture to evaluate the lifecycle of a molded component with a high defect rate, and validate FEA results."
order: 7
share: false
toc: true
toc_sticky: true
mathjax: true
---

I designed this pneumatic test fixture during my Spring 2023 Mechanical Engineering co-op at Teradyne.

![]({{ site.baseurl }}/assets/images/lifecycle-tester/annotated.png){:width="75%"}{: .align-center}

# Overview

- Identified a plastic pin connector bracket with a high defect rate.
- Designed and built a pneumatic lifecycle tester that mimics the loading conditions on the bracket in the higher-level assembly.
- I used a dual-acting piston to compress the pins, and designed an aluminum mounting jig that I machined myself.

# Pneumatic System Design

## Piston Selection
- I chose a dual-acting piston with a bore diameter capable of generating enough force to compress the pins from line pressure. It was important to pick a dual-acting piston, so I could have control over both of the piston's stroke directions.

*Piston Force as a relationship between the pressure within the cylinder, and the bore diameter can be defined as:*

\\[ F=P\left(\frac{\pi}{4}d^{2}\right) \\]

## Flow Control
- A compressed air regulator was used in-line with the building air to then fine tune the piston's output force.
- A dual-state solenoid (5/2 flow pattern) was used to control the actuation of the piston.
- Added flow regulator valves to the solenoid's exhaust ports to control stroke speed, allowing gentler pin compression.

## Even Pin Compression
- I attached a swiveling table foot at the end of the rod, allowing the face that would compress the pins to have some rotational degrees of freedom. By doing this, the table foot planed itself out during the upstroke, and ensured each pin was evenly compressed each cycle.
- If the table foot's rotation had been constrained, then I risked having the surface be slightly skewed when making contact with the pins if there were any alignment or tolerance issues. This would result in uneven pin compression and potentially affect the expected fatigue behavior of the bracket.

# Electronics
- I used a simple timer relay (I called it a clock) to control the actuation timing of the solenoid valve. The dials let me adjust how long between the solenoid swapping states.
- An electric tally counter kept track of the number of cycles. I interposed the tally into the circuit such that it was only delivered a voltage during the piston's upstroke.

# Results
- The new bracket material was Selected a new material for the brackets, then tested for fatigue and mechanical failure through cyclic loading by compressing/decompressing the pins for 10,000 cycles.
- Validated FEA results for the new material selection before moving forward with high volume production.

![]({{ site.baseurl }}/assets/images/lifecycle-tester/pressing_pins_gif.gif){:width="75%"}{: .align-center}

# Improvements
- If I were to redesign this fixture again, I would change the swiveling table foot to a custom pivoting block, constraining it down to 1 degree of rotational freedom. I would also mount the entire assembly to a linear rail, with the end of the piston rod affixed to  the carriage. Even with the swiveling table foot, I found it was not 100% reliable in evenly compressing the pins each cycle. Adding these constraints would hopefully increase the accuracy of the entire assembly.
- Next time, I believe both the bracket materials should have been tested until failure, and compared their results.
