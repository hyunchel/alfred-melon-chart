# alfred-melon-chart

[![Build Status](https://travis-ci.org/hyunchel/alfred-melon-chart.svg?branch=master)](https://travis-ci.org/hyunchel/alfred-melon-chart)

Show top Melon Music Chart via [Alfred][alfred].

![Workflow demo](./demo.gif)

## Install

Alfred Workflow can be installed with `npm` using [Alfy][alfy].

Just don't forget to include global flag(`-g`) when during installation.

```bash
$ npm install -g alfred-melon-chart
```

## Usage

Default keyword is `melon`. This can be changed via Alfred preference menu.

This Alfred Workflow takes two arguments where first argument is required.
The first argument specifies cutline on the music chart. By default top 5 is displayed.
The default value is only used if the first argument does not make sense.

The second argument is used to specify a date.
Any form of date can be used as long as [melon-chart-api][melon-chart-api] can make a date out of it. In case of wrong date, the latest Melon Music Chart will be displayed.

## Contribution

A feedback is always welcome.

[alfred]: https://www.alfredapp.com
[alfy]: https://github.com/sindresorhus/alfy
[melon-chart-api]: https://github.com/hyunchel/melon-chart-api