<template>
  <button class="g-button">按钮</button>
</template>
<script>
  export default {
    
  }
</script>
<style lang="scss">
 .g-button {
      font-size: var(--font-size);
      height: var(--button-height);
      padding: 0 1em; /*按钮不用写width,用padding来做就好了，两边各空出一个字的位置*/
      border-radius: 1px solid var(--border-radius);
      border: 1px solid var(--border-color);
      background: var(--button-bg);
      &:hover{
        border-color: var(--border-color-hover);
      }
      &:active{
        background: var(--button-active-bg);
      }
      &:focus{
        outline: none;
      }
    }
   
</style>