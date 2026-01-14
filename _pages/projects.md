---
title: "Projects"
permalink: /projects/
layout: collection
collection: projects
author_profile: true
sort_by: order
toc: true
---

{% for project in site.projects %}
<div class="project-card">
  <h2><a href="{{ project.url }}">{{ project.title }}</a></h2>
  {% if project.image %}
    <img src="{{ project.image }}" alt="{{ project.title }}">
  {% endif %}
  {% if project.teaser %}
  <div class="teaser-box">
    {{ project.teaser }}
  </div>
  {% endif %}
</div>
{% endfor %}
