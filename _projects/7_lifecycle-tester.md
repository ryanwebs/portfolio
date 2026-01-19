---
title: "Lifecycle Test Fixture"
header:
  teaser: /assets/images/lifecycle-tester/lifecycle_tester.jpg
excerpt: "Designed a pneumatic test fixture to evaluate the lifecycle of a molded component with a high defect rate, and validate FEA results."
order: 7
share: false
toc: true
toc_sticky: true
---

I designed this pneumatic test fixture during my Spring 2023 Mechanical Engineering co-op at Teradyne.

![]({{ site.baseurl }}/assets/images/lifecycle-tester/annotated.png){:width="75%"}{: .align-center}

# Overview

- Identified a plastic pin connector bracket with a high defect rate.

- Designed and built a pneumatic lifecycle tester that mimics the loading conditions on the bracket in the higher-level assembly.
- - I used a dual-acting piston to compress the pins, and designed an aluminum mounting jig that I machined myself.


# Pneumatic System Design
## Piston Selection
- I chose a dual-acting piston with a bore diameter capable of generating enough force to compress the pins from line pressure. 
## Flow Control
-then fine tuned the output force with a pressure regulator. Used flow regulator valves to control stroke speed, so the pins could be gently compressed while ramping the force. It was important to pick a dual-acting piston, so I could have control over the downstroke as well.
## Even Pin Compression
- I attached a swiveling table foot at the end of the rod, allowing the face that would compress the pins to have some rotational degrees of freedom. By doing this, the table foot planed itself out during the upstroke, and ensured each pin was evenly compressed each cycle.
- If a piston attachment with constrained rotation had been used, then I risked having the surface be slightly skewed when making contact with the pins. This would result in uneven pin compression and potentially affect the expected fatigue behavior of the bracket.

# Electronics

- I used a simple timer relay (I called it a clock) to control the actuation timing of the solenoid valve. The dials let me tune how long the solenoid remained in either
- An electric tally counter kept track of the number of cycles. I interposed the tally into the circuit such that it was only delivered a voltage during the piston's upstroke.

# Results

- Selected a new material for the brackets, then tested for fatigue and mechanical failure through cyclic loading by compressing/decompressing the pins for 10,000 cycles.
- Validated FEA results for the new material selection before moving forward with high volume production.

![]({{ site.baseurl }}/assets/images/lifecycle-tester/pressing_pins_gif.gif){:width="75%"}{: .align-center}
