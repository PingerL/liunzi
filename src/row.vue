<template>
  <div class="row" :style="rowStyle" :class="rowClass">
    <slot></slot>
  </div>
</template>

<script>
export default {
  props:{
    gutter:{
      type: [String,Number]
    },
    align: {
      type: String,
      validator (value){
        return ['left','right','center'].includes(value)
      }
    } 
  },
  mounted(){
    console.log(this.$children)
    this.$children.forEach((vm) => {
      vm.gutter = this.gutter
    })
  },
  computed: {
    rowClass(){
      let {align} = this
      return [
        align && `align-${align}`
      ]
    },
    rowStyle(){
      return {
        marginLeft:-this.gutter/2 +'px',
        marginRight:-this.gutter/2+'px'
        }
    }
  }
}
</script>
<style lang="scss" scoped>
.row {
  display: flex;
  height: 100px;
  border: 1px solid red;
  &.align-right {
    justify-content: flex-end;
  }
  &.align-left {
    justify-content: flex-start;
  }
  &.align-center {
    justify-content: center;
  }
}
</style>