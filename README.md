# \<logout-button>

This webcomponent follows the [open-wc](https://github.com/open-wc/open-wc) recommendation.


## Example

![Example GIF](https://media.cleanshot.cloud/media/24716/37F39yTfsATNgM8KrdIayMAiGiU7Wpxz0HZ9HCrt.gif?Expires=1665337505&Signature=EaDhjAnw5tqskot8SPLnn-8nN0dEKaJCItODJHOJ1~t0E6fqZF-pdBEgk1ZKLUniSsq1gJtqMv6R73jkQPSG~Thdp-QLZuifR38feZ01bUxzfkPgLOru8cPMaxdE~95v0IcwlGIKDoX3~u5j8XdktUfn735tyNBoK~8DpA3cSDA~-2C8mv1WfpxH3j17YazdCG0mDs50CCpfN-JxFujwbVwM4M97w-Vwv0toQNJ-p2ADk8qlvfppYyyXNodjHudcJancObSBvqqVczxcUg65PzaRRUoXDA6Jtn~h-thWE-1cVM34rtgvDOwKCRFo5M12WGaFEBYHLyvtyyRVeqOtFg__&Key-Pair-Id=K269JMAT9ZF4GZ)

## Installation

```bash
npm i logout-button
```

## Usage

```html
<script type="module">
  import 'logout-button/logout-button.js';
</script>

<logout-button></logout-button>
```

## Linting and formatting

To scan the project for linting and formatting errors, run

```bash
npm run lint
```

To automatically fix linting and formatting errors, run

```bash
npm run format
```

## Testing with Web Test Runner

To execute a single test run:

```bash
npm run test
```

To run the tests in interactive watch mode run:

```bash
npm run test:watch
```

## Demoing with Storybook

To run a local instance of Storybook for your component, run

```bash
npm run storybook
```

To build a production version of Storybook, run

```bash
npm run storybook:build
```


## Tooling configs

For most of the tools, the configuration is in the `package.json` to reduce the amount of files in your project.

If you customize the configuration a lot, you can consider moving them to individual files.

## Local Demo with `web-dev-server`

```bash
npm start
```

To run a local development server that serves the basic demo located in `demo/index.html`
