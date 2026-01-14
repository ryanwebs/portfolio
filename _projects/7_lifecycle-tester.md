---
title: "Lifecycle Test Fixture"
header:
  teaser: /assets/images/lifecycle-tester/lifecycle_tester.jpg
excerpt: "Designed a pneumatic test fixture to evaluate the lifecycle of a molded component with a high defect rate. Tested
for mechanical failure criteria of the brackets to validate FEA results for the new material selection."
order: 7
share: false
toc: true
toc_sticky: true
---

I designed this pneumatic test fixture during my Spring 2023 Mechanical Engineering co-op at Teradyne.

![]({{ site.baseurl }}/assets/images/lifecycle-tester/annotated.png){:width="75%"}{: .align-center}

- Identified a plastic pin connector bracket with a high defect rate.

- Designed and built a pneumatic lifecycle tester that mimics the loading conditions on the bracket in the higher-level assembly. I used a dual-acting piston to compress the pins, and designed a mount for the whole jig that I machined myself. I attached a swiveling table foot at the end of the rod, allowing the piston to have some rotational degrees of freedom. By doing this, the surface that interfaces with the pins could plane itself out during the upstroke, and ensure each pin is evenly compressed each cycle.

- Selected a new material for the brackets, then tested for fatigue and mechanical failure through cyclic loading by compressing/decompressing the pins for 10,000 cycles.

- Validated FEA results for the new material selection before moving forward with high volume production.

![]({{ site.baseurl }}/assets/images/lifecycle-tester/pressing_pins_gif.gif){:width="75%"}{: .align-center}
