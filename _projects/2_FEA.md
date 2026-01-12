---
title: "Rear Wing Mounting Brackets"
header:
  teaser: /assets/images/FEA/bracket_stress_converged.png
excerpt: Designed some wing mounts for my applied FEA class to flex the techniques I learned throughout the semester.
order: 2
link: /assets/files/applied_fea_final.pdf
share: false
toc: true
toc_sticky: true
---

## Overview
Final project for a Finite Element Analysis class where students were asked to demonstrate FEA skills learned on an engineering problem of their choice. This project shows
my process behind designing mounting brackets for a rear wing and using various FEA techniques to make weight reductions without jeopardizing strength.

• Created SolidWorks models of a NACA 2412 airfoil and different mounting brackets for testing. Used Ansys Fluent to determine the wing’s experimental lift (downforce)
• Used Topology Optimization in Altair Inspire to reduce the brackets’ mass and iterate their geometry.
• Used Ansys Mechanical to perform structural analysis on the mounts using loading conditions calculated from the wing, ensure maximum stresses did not exceed the yield
point, and select a bracket iteration with the best performance.

## Constraints

### Preliminary Bracket Design

Designed some models in Solidworks!

Add pictures!

### Determining Loading Conditions

Found wing downforce in Ansys fluent!

Add pictures!

## Refining the Geometry

### Topology Optimization

Used Altair Inspire's topology optimization feature to remove material from a solid bracket without creating areas that would exceed the material's yield strength.
This simulation helped me figure out where the best places would be to target for making weight reductions.

### Iterations

Mocked up a couple different bracket designs that remove the same amount of mass, but have different geomoetries.

- Bracket 1 removes material uniformly from the center of the bracket.
- Bracket 2 focuses on removing more material from the front, leaving extra strength in the rear for resisting the bending moment caused by the wing.

I expected bracket 2 to be able to carry the load more efficiently, while making the same 0.78kg weight reduction.

## Analysis

### Static Structural

### Mesh Convergence

### Refined Static Structural

## Results and Selection

## Future Improvements

![ballast-in-container]({{ site.baseurl }}/assets/images/L3-rocket/ballast-in-container.png)
<figcaption>A 3D printed container was used to secure lead shot ballast in the nosecone of the rocket.</figcaption>
<br>

![ballast-on-bulkhead]({{ site.baseurl }}/assets/images/L3-rocket/ballast-on-bulkhead.png)
<figcaption>The ballast was mounted to the removable inner bulkhead.</figcaption>
