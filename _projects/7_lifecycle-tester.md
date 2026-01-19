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

*Mechanical Engineering Co-op, Teradyne*</br>
*Spring, 2023*

![]({{ site.baseurl }}/assets/images/lifecycle-tester/annotated.png){:width="100%"}{: .align-center}

# Overview
- A plastic pin connector bracket was identified to have a high defect rate in Teradyne's Ultraflex machines. Working with a senior engineer, a new material was selected with a similar yield strength, but higher elastic modulus to reduce cyclic strain.
- To test the new material, I designed and built a pneumatic lifecycle tester that mimics the loading conditions on the bracket in the higher-level assembly. A piston would compress/decompress the pins for 10,000 cycles to test for fatigue and mechanical failure through cyclic loading.

# Pneumatic System Design

## Piston Selection
- I chose a dual-acting piston with a bore diameter capable of generating enough force to compress the pins from line pressure. It was important to pick a dual-acting piston, so I could have control over both of the piston's stroke directions. The piston was mounted to an aluminum jig that I machined myself.

*Piston Force as a relationship between the pressure within the cylinder, and the bore diameter can be defined as:*

\\[ F=P\left(\frac{\pi}{4}d^{2}\right) \\]

## Flow Control
- A compressed air regulator was used in series with the building's air line to fine tune the piston's output force.
- A dual-state solenoid (5/2 flow pattern) was used to control the actuation of the piston.
- Added flow regulator valves to the solenoid's exhaust ports to control stroke speed, allowing gentler pin compression.

## Electronics
- A 12V DC Power Supply powered all of the electronics.
- I used a simple timer relay (I called it a clock) to control the actuation timing of the solenoid valve. The dials let me adjust how long between the solenoid swapping states.
- An electric tally counter kept track of the number of cycles. I interposed the tally into the circuit such that it was only delivered a voltage during the piston's upstroke.

## Even Pin Compression
- I attached a swiveling table foot at the end of the rod, allowing the face that would compress the pins to have some rotational degrees of freedom. By doing this, the table foot planed itself out during the upstroke, and ensured each pin was evenly compressed each cycle.
- If the table foot's rotation had been constrained, then I risked having the surface be slightly skewed when making contact with the pins if there were any alignment or tolerance issues. This would result in uneven pin compression and potentially affect the expected fatigue behavior of the bracket.

![]({{ site.baseurl }}/assets/images/lifecycle-tester/pressing_pins_gif.gif){:width="75%"}{: .align-center}

# Results
- After 10,000 compressions, the bracket did not show any sign of fatigue-induced crack propogation.
- Validated FEA results for the new material selection, and moved forward with high volume production.
- Submitted an ECO to scrap all existing inventory, and replace these components in all future units.

# Improvements
- If I were to redesign this fixture again, I would change the swiveling table foot to some machined block on a pivot, with a pin slot to constrain its range of rotation. I would also mount the entire assembly to a linear rail, with the end of the piston rod affixed to the carriage. Even with the swiveling table foot, I found it was not 100% reliable in evenly compressing the pins each cycle. Adding these DOF constraints would increase the accuracy of the entire assembly.
- Even though the new material passed the test of 10,000 cycles, I believe I should have tested both bracket materials until failure to compare their results.
