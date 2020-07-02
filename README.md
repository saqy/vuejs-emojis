# vuejs-emojis
_adds emoji support for vuejs projects_

## Installation
To install `vuejs-emojis`, you need [node.js](http://nodejs.org/) and [npm](https://github.com/npm/npm#super-easy-install).

In your project directory, just run
```sh
npm install --save vuejs-emojis
```

## Usage
import the package and add it to the components and add it in template:
```javascript
<template>
    <emoji name="smile" size="20"/> 
</template>
<script>
import Emoji from 'vuejs-emojis'
export default {
components: { Emoji },
};
</script>
```
### Preview
😄

### Examples with different Sizes
Black Lives Matter (I acknowledge that Black people have to fight for basic rights, against systemic racism, unequal opportunities and injustice across the 🌎.
I know this is wrong and I am 💔!)
```javascript
    <div>
     <emoji name="black_heart" size="50"/> 
     <emoji name="black_medium_square" size="50"/> 
     <emoji name="waving_black_flag" size="50"/> 
     <emoji name="fist_1" size="50"/> 
     <emoji name="fist_2" size="50"/> 
    </div>
```
![node-emoji example](https://i.imgur.com/hTyg0Jh.png)

Carona Care (Stay Safe and Healthy 🙂)
```javascript
  <div>
    <emoji name="virus" size="50" />
    <emoji name="mask" size="50" />
    <emoji name="sneezing_face" size="50" />
    <emoji name="gloves" size="50" />
    <emoji name="soap" size="50" />
  </div>
```
![node-emoji example](https://i.imgur.com/ONDfEWs.png)

Reactions
```javascript
   <div>
    <emoji name="thinking_face" size="20" />
    <emoji name="face-with-tears-of-joy" size="30" />
    <emoji name="wink" size="40" />
    <emoji name="sunglasses" size="50" />
    <emoji name="smiley" size="60" />
  </div>
```
![node-emoji example](https://i.imgur.com/HFTaR4J.png)

Food
```javascript
<div>
    <emoji name="taco" size="20" />
    <emoji name="fries" size="30" />
    <emoji name="burger" size="40" />
    <emoji name="burrito" size="50" />
    <emoji name="pizza" size="60" />
  </div>
```
![node-emoji example](https://i.imgur.com/U1cd4K0.png)

Bright Sky
```javascript
 <div>
    <emoji name="sun_with_face" size="20" />
    <emoji name="full_moon_with_face" size="30" />
    <emoji name="first_quarter_moon_with_face" size="40" />
    <emoji name="star" size="50" />
    <emoji name="star2" size="60" />
  </div>
```
![node-emoji example](https://i.imgur.com/FmN7a1W.png)

Hand gestures
```javascript
  <div>
    <emoji name="thumbsdown" size="20" />
    <emoji name="wave" size="30" />
    <emoji name="crossed_fingers" size="40" />
    <emoji name="thumbsup" size="50" />
    <emoji name="ok_hand" size="60" />
  </div>
```
![node-emoji example](https://i.imgur.com/qHRmLD8.png)

## Full list of emojis with name.
Emoji list come from js-emoji (🙏). You can get a JSON file with all emoji here: https://raw.githubusercontent.com/saqy/vuejs-emojis/master/src/emoji.json

## License
MIT


