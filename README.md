# alfred-melon-chart

[![Build Status](https://travis-ci.org/hyunchel/alfred-melon-chart.svg?branch=master)](https://travis-ci.org/hyunchel/alfred-melon-chart)

Show top Melon Music Chart via [Alfred Workflow][alfred-workflow].

![Workflow demo][demo-gif]

## Install

Alfred Workflow can be installed with `npm` using [Alfy][alfy].

Just don't forget to include global flag(`-g`) when during installation.

```bash
$ npm install -g alfred-melon-chart
```

## Usage

Default keyword is `melon`. This can be changed via Alfred preference menu.

This Alfred Workflow takes two arguments where only first argument is required.

The first argument specifies cutline on the music chart. By default top 5 is displayed.
The default value is only used if the first argument does not make sense.

The second argument is used to specify a date.
Any form of date can be used as long as [melon-chart-api][melon-chart-api] can make a date out of it. In case of wrong date, the latest Melon Music Chart will be displayed.

## Contribution

A feedback is always welcome.

[alfred-workflow]: https://www.alfredapp.com/workflows
[alfy]: https://github.com/sindresorhus/alfy
[melon-chart-api]: https://github.com/hyunchel/melon-chart-api
[demo-gif]: https://raw.githubusercontent.com/hyunchel/alfred-melon-chart/master/demo.gif