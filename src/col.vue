<template>
  <div class="col" :class="[span && `col-${span}`, offset && `offset-${offset}`]"
    :style="{paddingLeft:gutter/2+ 'px',paddingRight:gutter/2+'px'}"
  >
    <div style="border:1px solid green; height:100px">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  props:{
    span:{
      type:[Number,String]
    },
    offset:{
      type:[Number,String]
    }
  },
  // vue 提示要将 gutter 放在 data 中
  data(){
    return {
      gutter:0
    }
  }
}
</script>
<style lang="scss" scoped>
  .col {
    width: 50%;
    $class-prefix: col-;
    @for $n from 1 through 24 {
      &.#{$class-prefix}#{$n} {
        width: ($n / 24) * 100%;
      }
    }
    $class-prefix: offset-;
    @for $n from 1 through 24 {
      &.#{$class-prefix}#{$n} {
        margin-left: ($n / 24) * 100%;
      }
    }
  }
  

</style>