<template>
  <div class="col" :class="colClass" :style="colStyle">
      <slot></slot>
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
  },
  computed:{
    colClass(){
      let {span,offset} = this
      return [
        span && `col-${span}`, 
        offset && `offset-${offset}`]
    },
    colStyle(){
      return {
        paddingLeft:this.gutter/2+ 'px',
        paddingRight:this.gutter/2+'px'
      }
    }
  }
}
</script>
<style lang="scss" scoped>
  .col {
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