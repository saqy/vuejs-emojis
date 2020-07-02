<template>
  <span v-bind:style="{'fontSize': size+'px'}">{{emojiIcon}}</span>
</template>

<script>
import emojiData from "./emoji.json";
export default {
  props: {
    name: {
      type: String,
      default: "smile"
    },
    size: {
      type: String,
      default: "30"
    }
  },
  data: () => ({
    emojiIcon: null
  }),
  mounted() {
    this.emojiIcon = emojiData[this.name];
  }
};
</script>