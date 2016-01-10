# [Ripple Minimal](https://github.com/pemrouz/ripple)

This is a minimal build of Ripple, with only a few of the [client modules](https://github.com/rijs/minimal/blob/master/src/index.js). This kind of build is useful if you are only using Ripple on the client without using any of the server modules, or want a lightweight solution to use [Vanilla Web Components](https://github.com/pemrouz/vanilla) alongside your existing application with a different architecture.

**Quick Start:** Put the following in your Chrome address bar to see an example:

```
data:text/html, <head><script src="https://rawgit.com/rijs/minimal/master/dist/ripple.js"></script><script>ripple('x-foo', function(){ this.innerHTML = 'foo' })</script><body><x-foo>
```

```html
<html>
  <head>
    <script src="https://rawgit.com/rijs/minimal/master/dist/ripple.js"></script>
    <script>ripple('x-foo', function(){ this.innerHTML = 'foo' })</script>
  </head>
  <body>
    <x-foo></x-foo>
  </body>
</html>
```

**Bonus:** Register a new version of the component `x-foo` in the console and see all instances on the page change:


```js
ripple('x-foo', function(){ this.innerHTML = 'bar' })
```
