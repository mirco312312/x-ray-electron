# x-ray-electron

electron driver for [x-ray](https://github.com/lapwinglabs/x-ray).

inspired by the [x-ray-phantom](https://github.com/lapwinglabs/x-ray-phantom) driver.

## Installation

```
npm install x-ray-electron
```

## Usage

```js
var XrayElectron = require('x-ray-electron').XrayElectron;
var Xray = require('x-ray');

var x = Xray()
  .driver(XrayElectron());

x('http://google.com', 'title')(function(err, str) {
  if (err) return done(err);
  assert.equal('Google', str);
  done();
})
```

## API

### XrayElectron([options|fn], [fn])

Initialize the electron driver with `options` being passed to Nightmare and
an optional custom `fn` with the signature `function(ctx, nightmare)`, that can be used to customize the Nightmare navigation procedure.

By default an empty `options` object will be passed to Nightmare.

Default Nightmare navigation function (`fn`):
```js
function navigate(ctx, nightmare) {
    return nightmare.goto(ctx.url);
}
```

## Build

```
npm install
npm run build
```

## License

MIT