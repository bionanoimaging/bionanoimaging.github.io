---
layout: single
title: NCPCA
permalink: /NCPCA/
---

{% assign dir = page.url %}
<ul>
{% for f in site.static_files %}
  {% assign fdir = f.path | remove: f.name %}
  {% if fdir == dir %}
  <li><a href="{{ f.path | relative_url }}">{{ f.name }}</a></li>
  {% endif %}
{% endfor %}
</ul>
