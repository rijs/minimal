# [Minimal](https://github.com/rijs/minimal)

Tiny (~4kB), super-fast, refined, reactive, fractal, unidirectional, isomorphic, pro-standards, declarative, Just Works™ framework for frontend development. There's only one API:

```js
import ripple from 'rijs.minimal'

ripple(name)       // getter
ripple(name, body) // setter
ripple.on('change', (name, change) => {})
```

Get and set things in single store. A `change` event is emitted when something is updated, enabling reactive updates.

<br>
## Components

Define a component:

```js
ripple('my-component', () => {})
```

Use it on the page:

```html
<my-component>
```

Ripple is agnostic to _how_ you write your components, they should just be idempotent (a single render function). This is fine:

```js
ripple('my-app', (d, i, el) => el.innerHTML = 'Hello World')
```

Or using some DOM-diff helper:

```js
ripple('my-app', (d, i, el) => diff(el)`<h1>Hello World</h1>`)
```

Or using [once](https://github.com/utilise/once#once)/D3 joins:

```js
ripple('my-app', (d, i, el) => {
  once(el)
    ('h1', 1)
      .text('Hello World')
})
```

For more info about writing idempotent components, see [this spec](https://github.com/pemrouz/vanilla).

<br>
## State/Data

The first parameter of the component contains all the state and data the component needs to render:

```js
export default function component(data){ ... }
```

You can pass down data by adding the name of the resources to the data attribute:

```html
<my-shop data="stock">
```

```js
export default function shop({ stock }){ ... }
```

Declaring the data needed on a component is used to reactively rerender it when the data changes.

The other option is to explicitly pass down data to the component using the (D3) data binding:

```js
once(node)
  ('my-shop', { stock })
```

If you want to just use DOM, you can invoke `.draw()` on a custom element to redraw it:

```js
const shop = document.createElement('my-shop')
document.body.appendChild(shop)
shop.state = { stock }
shop.draw()
```

<br>
## Defaults

You can set defaults using the ES6 syntax:

```js
export default function shop({ stock = [] }){ ... }
```

If you need to persist defaults on the component's state object, you can use a small [helper function](https://github.com/utilise/utilise#--defaults):

```js
export default function shop(state){ 
  const stock = defaults(state, 'stock', [])
}
```

<br>
## Updates

#### Local state

Whenever you need to update local state, just change the `state` and invoke a redraw (like a game loop):

```js
export default function shop(state, i, el){ 
  const o = once(el)
      , { counter = 0 } = state

  o('span', 1).text(counter)
  o('button', 1)
    .text('increment')
    .on('click' d => {
      state.counter++
      o.draw()
    })
}
```

#### Global state

Whenever you need to update global state, you can simply compute the new value and register it again which will trigger an update:

```js
ripple('stock', {
  apples: 10
, oranges: 20
, pomegranates: 30
})
```

Or if you just want to change a part of the resource, use a [functional operator](https://github.com/utilise/utilise#--set) to apply a finer-grained diff and trigger an update:

```js
update('pomegranates', 20)(ripple('stock'))
// same as: set({ type: 'update', key: 'pomegranate', value: 20 })(ripple('stock'))
```

Using logs of atomic diffs combines the benefits of immutability with a saner way to synchronise state across a distributed environment.

You can also use the list of all relevant changes since the last render in your component via `element.changes` to make it more performant.

<br>
## Events

Dispatch an event on the root element to communicate changes to parents (`node.dispatchEvent`).

<br>
## Routing

Just invoke a redraw of your application when the route has changed: 

```js
export function app(d, i, el){
  const o = once(el)

  o('h1', 1)
    .text('You are currently on: ' + location.pathname)

  window.on('change', d => el.draw())
}
```

[Decouter](https://github.com/pemrouz/decouter) emitterifies `window` to give you the `change` event, `go(url)` for navigating, and sets `location.params` with current route parameters.

<br>
## Bundling

Ripple does not care how you load/bundle your resources. You only just need to register them at some point. This means you are free to use whatever tool chain you like:

```js
// index.js
ripple('my-app', require('./resources/my-app'))
ripple('my-app.css', file('./resources/my-app.css'))
ripple('somedata', require('./resources/data/some'))
```

```
$ browserify index.js > app.js
```

```html
<script src="app.js"></script>
<my-app></my-app>
```

An application is just a component that composes other components, so you shouldn't need any other scripts.

<br>
## Folder Convention

I recommend using the folder convention: a `resources` directory, with a folder for each component, and a `data` folder for data resources.

```
resources
├── data
│   ├── stock.js
│   └── order.js
└── my-app
│   ├── my-app.js
│   ├── my-app.css
│   └── test.js
└── another-component
    ├── another-component.js
    ├── another-component.css
    └── test.js
```

You can then use a [helper script](https://github.com/rijs/export#ripple--export) to automatically generate a single `require`able `index.js` from a directory of resources.

<br>
## Debugging

* Check `ripple.resources` for a snapshot of your application. Resources are in the [tuple format](https://github.com/rijs/core#ripple--core) `{ name, body, headers }`.

* Check `$0.state` on an element to see the state object it was last rendered with or manipulate it.

<br>
## Middleware

By default the draw function just invokes the function on an element. You can extend this without any framework hooks using the explicit decorator pattern:

```js
// in component
export default function component(d, i, el){
  middleware(d, i, el)
}

// around component
export default middleware(function component(d, i, el){
  
})

// for all components
ripple.draw = middleware(ripple.draw)
```

A couple of useful middleware included in this build are:

### Needs

[This middleware](https://github.com/rijs/needs#ripple--needs) reads the `needs` header and applies the attributes onto the element. The component does not render until all dependencies are available. This is useful when a component needs to define its own dependencies. 

```js
export default {
  name: 'my-component'
, body: function(){}
, headers: { needs: '[css=..][data=..]' }
}
```

### Helpers

[This middleware](https://github.com/rijs/helpers#ripple--helpers) makes the specified helper functions available from the resource (hidden properties). This is useful to co-locate all logic for each resource in one place.

```js
export default {
  name: 'stock'
, body: {}
, headers: { helpers: { addNewStock, removeStock }}
} 
```

### Styling

Stylesheet(s) can be modularly applied to an element: [This middlware](https://github.com/rijs/precss#ripple--precss) simply reads the `css` attribute and inserts them in the shadow root or scopes them and adds to `head`:

```js
ripple('some.css', `:host { background: red }`)
```
```html
<head>
  <style>my-shop { background: red }</style>
</head>
<my-shop css="some.css"> 
```

<br>
## Fullstack

If you have a backed for your frontend, checkout [rijs/fullstack](https://github.com/rijs/fullstack) which transparently adds a few more modules to synchronise state between client-server or for more docs.

You can also adjust your own framework by [adding/removing modules](https://github.com/rijs/minimal/blob/master/src/index.js#L1-L11).

<br>
## Flavours

`dist/ripple.js` provides `ripple` and also [some small, useful, high power-to-weight ratio functions that enriches the language grammar](https://github.com/utilise/utilise#lean-javascript-utilities-as-micro-libraries). If you don't want the helper functions, use `dist/ripple.pure.js`. Add `.min` for prod. Minified and gzipped the sizes are ~12kB and ~4kB respectively.