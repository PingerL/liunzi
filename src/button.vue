<template>
  <button class="g-button" :class="{[`icon-${iconPosition}`]:true}" @click="$emit('click')">
    <!-- <svg class="icon" v-if="icon">
      <use :xlink:href="`#i-${icon}`" />
    </svg>
     -->
     <!-- 将上面改写为 icon 单文件组件 -->
    <g-icon :name = "icon" v-if="icon && !loading" class="icon"></g-icon>
    <g-icon name = "loading" class="loading icon" v-if="loading "></g-icon>
    <div class="content">
      <slot></slot>
    </div>
  </button>
</template>
<script>

export default {
  // props: ["icon", "iconPosition"] //props:接收父组件传递过来的参数
  // props的第二种写法
  props: {
    icon: {},
    loading: {
      type:Boolean,
      default:false
    },
    iconPosition: {
      type: String,
      default: 'left',
      validator (value){  //validator 属性的检查器
        /*if(value !== 'left' && value !== 'right'){
          return false
        } else {
          return true
        }
        */
       //上面的if-else可以简化成
       return value === 'left' || value === 'right'
      }
    }
  }
};
</script>
<style lang="scss">
@keyframes spin {
  0%{
    transform: rotate(0deg)
  }
  100%{
    transform: rotate(360deg)
  }
}
.g-button {
  font-size: var(--font-size);
  height: var(--button-height);
  padding: 0 1em; /*按钮不用写width,用padding来做就好了，两边各空出一个字的位置*/
  border-radius: 1px solid var(--border-radius);
  border: 1px solid var(--border-color);
  background: var(--button-bg);
  display: inline-flex;
  justify-content: center;
  align-items: center;
  vertical-align: middle;
  &:hover {
    border-color: var(--border-color-hover);
  }
  &:active {
    background: var(--button-active-bg);
  }
  &:focus {
    outline: none;
  }
  > .icon {
    order: 1;
    margin-right: .3em
  }
  > .content {
    order: 2;
  }
  &.icon-right {
    > .icon {
      order: 2;
      margin-right: 0;
      margin-left: .3em;
    }
    > .content {
      order: 1;
    }
  }
  .loading {
    animation: spin 1s infinite linear
  }
}
</style>