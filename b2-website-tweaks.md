---
cssclass: flatBlue
creation date: 2024-02-10 19:43
modification date: Saturday 10th February 2024 19:43:52
tags: tcc, aes
category:
folder: 
priority: null
---

# Overview

# Todo  #todo

# Details

# References

# Appendix


.column1,  .column2,  .column3,  .column4
{
    width: 282px;
}

.column1,  .column2,  .column3
{
    width: 376px;
}

.column1,  .column2
{
    float: left;
    margin-right: 24px;
}

.column3
{
    float: left;
}

.column4
{
    float: right;
}

# Highlighting names

Here are the updated variations of the menu with the correct items, applying the `current_page_item` class to each item in turn:

### Variation 1: `index.html` marked as `current_page_item`
```html
<ul>
    <li class="current_page_item"><a href="index.html" accesskey="1" title="">Homepage</a></li>
    <li><a href="about.html" accesskey="2" title="">About Us</a></li>
    <li><a href="products.html" accesskey="3" title="">Products</a></li>
    <li><a href="investing.html" accesskey="4" title="">Investing</a></li>
    <li><a href="contact.html" accesskey="5" title="">Contact Us</a></li>
    <li><a href="podcast.html" accesskey="6" title="">Our Podcast</a></li>
</ul>
```

### Variation 2: `about.html` marked as `current_page_item`
```html
<ul>
    <li><a href="index.html" accesskey="1" title="">Homepage</a></li>
    <li class="current_page_item"><a href="about.html" accesskey="2" title="">About Us</a></li>
    <li><a href="products.html" accesskey="3" title="">Products</a></li>
    <li><a href="investing.html" accesskey="4" title="">Investing</a></li>
    <li><a href="contact.html" accesskey="5" title="">Contact Us</a></li>
    <li><a href="podcast.html" accesskey="6" title="">Our Podcast</a></li>
</ul>
```

### Variation 3: `products.html` marked as `current_page_item`
```html
<ul>
    <li><a href="index.html" accesskey="1" title="">Homepage</a></li>
    <li><a href="about.html" accesskey="2" title="">About Us</a></li>
    <li class="current_page_item"><a href="products.html" accesskey="3" title="">Products</a></li>
    <li><a href="investing.html" accesskey="4" title="">Investing</a></li>
    <li><a href="contact.html" accesskey="5" title="">Contact Us</a></li>
    <li><a href="podcast.html" accesskey="6" title="">Our Podcast</a></li>
</ul>
```

### Variation 4: `investing.html` marked as `current_page_item`
```html
<ul>
    <li><a href="index.html" accesskey="1" title="">Homepage</a></li>
    <li><a href="about.html" accesskey="2" title="">About Us</a></li>
    <li><a href="products.html" accesskey="3" title="">Products</a></li>
    <li class="current_page_item"><a href="investing.html" accesskey="4" title="">Investing</a></li>
    <li><a href="contact.html" accesskey="5" title="">Contact Us</a></li>
    <li><a href="podcast.html" accesskey="6" title="">Our Podcast</a></li>
</ul>
```

### Variation 5: `contact.html` marked as `current_page_item`
```html
<ul>
    <li><a href="index.html" accesskey="1" title="">Homepage</a></li>
    <li><a href="about.html" accesskey="2" title="">About Us</a></li>
    <li><a href="products.html" accesskey="3" title="">Products</a></li>
    <li><a href="investing.html" accesskey="4" title="">Investing</a></li>
    <li class="current_page_item"><a href="contact.html" accesskey="5" title="">Contact Us</a></li>
    <li><a href="podcast.html" accesskey="6" title="">Our Podcast</a></li>
</ul>
```

### Variation 6: `podcast.html` marked as `current_page_item`
```html
<ul>
    <li><a href="index.html" accesskey="1" title="">Homepage</a></li>
    <li><a href="about.html" accesskey="2" title="">About Us</a></li>
    <li><a href="products.html" accesskey="3" title="">Products</a></li>
    <li><a href="investing.html" accesskey="4" title="">Investing</a></li>
    <li><a href="contact.html" accesskey="5" title="">Contact Us</a></li>
    <li class="current_page_item"><a href="podcast.html" accesskey="6" title="">Our Podcast</a></li>
</ul>
```

In each version, the `class="current_page_item"` is applied to the corresponding `<li>` element that represents the active page in the navigation.
