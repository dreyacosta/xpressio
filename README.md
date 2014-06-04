# xpressio
---------------
Just a small and fast tool to design your website.


## Getting started
---------------

### Grid system
```html
<div class="row">
  <div class="col3">col3</div>
  <div class="col3">col3</div>
  <div class="col3">col3</div>
  <div class="col3">col3</div>
</div>

<div class="row">
  <div class="col3">col3</div>
  <div class="col9">col3</div>
</div>

<div class="row">
  <div class="col6">col3</div>
  <div class="col6">col3</div>
</div>
```

### Flexbox
```html
<div class="flex auto">
  <div>box1</div>
  <div>box2</div>
  <div>box3</div>
</div>
```

```html
<div class="flex">
  <div class="x2">box1</div>
  <div class="x1">box2</div>
  <div class="x1">box3</div>
</div>
```

```html
<div class="flex column">
  <div>box1</div>
  <div>box2</div>
  <div>box3</div>
</div>
```

```html
<div class="flex">
  <div class="order3">box1</div>
  <div class="order1">box2</div>
  <div class="order2">box3</div>
</div>
```

```html
<div class="flex">
  <div>row align</div>
  <div class="flex column">
    <div>column align</div>
    <div>column align</div>
    <div>column align</div>
  </div>
  <div>row align</div>
</div>
```

### Typography
```html
<span class="color red">red</span>
<span class="color green">green</span>
```

```html
<span class="text center">center</span>
<span class="text left">left</span>
<span class="text right">right</span>
<span class="text justify">justify</span>
```

```html
<span class="text thin">thin</span>
<span class="text book">book</span>
<span class="text normal">normal</span>
<span class="text bold">bold</span>

<span class="text large">large</span>
<span class="text big">big</span>
```

### Backgrounds
```html
<div class="bck green">
  <span class="color white">Lorem ipsum</span>
</div>

<div class="bck black">
  <span class="color white">Lorem ipsum</span>
</div>

<div class="bck pink">
  <span class="color white">Lorem ipsum</span>
</div>
```

### Borders
```html
<div class="border solid all">
  <span>Lorem ipsum</span>
</div>

<div class="border dotted top">
  <span>Lorem ipsum</span>
</div>

<div class="border dashed bottom">
  <span>Lorem ipsum</span>
</div>

<div class="border solid left">
  <span>Lorem ipsum</span>
</div>

<div class="border radius solid all">
  <span>Lorem ipsum</span>
</div>
```

## Build your theme
1. Create your folder theme into `source/themes/themename`
2. Add your `__variables.styl` file with the following lines
```
// IMPORTANT: import core variables on the top of this file
@import '../../stylesheets/__variables.styl'
// Rewrite the core variables to customize your theme
// IMPORTANT: import xpressio core on the bottom of this file
@import '../../stylesheets/xpressio.styl'
```
3. Add your `xpressio.theme.default.styl` file
```
// All your stuff here
// You can also add more files with the following names
// xpressio.theme.*.styl
```
4. Add Grunt task
```coffeescript
stylus:
  theme_name:
    options: compress: true, import: ['__variables']
    files: 'build/xpressio.theme.themename.css' : 'source/themes/themename/xpressio.theme.*.styl'
grunt.loadNpmTasks 'grunt-contrib-stylus'
```

## Credits
Created by [David Rey](http://twitter.com/dreyacosta).

## License
This software is free to use under the MIT license.