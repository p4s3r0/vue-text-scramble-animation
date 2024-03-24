# vue-text-scramble-animation

## Install

```bash 
npm i vue-text-scramble-animation
```

## Demo

![Word Scr4mbler Demo](https://github.com/p4s3r0/vue-text-scramble-animation/blob/main/public/demo.gif?raw=true)

## Quick Start

Install The package (check install) and import it as follows:

```javascript
import WordScr4mbler from 'word-scr4mbler'
```

You are now able to use it.

```html
<template>
  <WordScr4mbler />
</template>
```




### Props

| Prop                  | Type    | Purpose | Default |
| --------              | ------- | ------- | ------- |
| `text`                | String  | The Text to unscramble to   | `Word-Scr4mbler` |
| `init`                | String  | The Text we start from      | `Scra-mBlErWord` |
| `switchSpeed`         | Number  | Interval in ms of scramble  | `50` |
| `unscrambleTime`      | Number  | The time between scramblinf and finalizing stage | `5` |
| `scramble_character`  | String  | A string of characters to which we can scramble | `ABCDEFGHIJKLM NOPQRSTUVXYZ012345 6789#+;-` |
| `animationType`       | String  | Finalizing Stage unscramble from left to right ('`linear`') or random (`random`)| `random` |

### Text Styling
The component uses the specific class `.WordScr4mblerText` for the content. To manipulate the CSS simply use the `::v-deep .WordScr4mblerText` when the parent is in **scoped** mode. 

```css
::v-deep .WordScr4mblerText {
  color: blue;
  font-size: 10em;
}
```
If the parent is **not scoped**, simply remove the `::v-deep`

```css
.WordScr4mblerText {
  color: blue;
  font-size: 10em;
}
```


