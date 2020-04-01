<template>
  <div class="wrapper" :class="{'error': error}">
    <input type="text" :placeholder="value" :disabled="disabled" :readonly="readonly">
    <template v-if="error">
      <icon  name="error"></icon>
      <span class="error-message">{{error}}</span>
    </template>
  </div>
</template>

<script>
import Icon from './icon'
export default {
  components:{Icon},
  props:{
    value:{
      type:String
    },
    disabled:{
      type: Boolean,
      default:false
    },
    readonly:{
      type: Boolean,
      default:false
    },
    error:{
      type:String
    }
  }
}
</script>
<style lang="scss" scoped>
$height: 32px;
$border-color: #999;
$border-color-hover: #666;
$font-size: 12px;
$border-radius:4px;
.wrapper {
  margin-bottom: 10px;
  font-size: $font-size;
  display: inline-flex;
  align-items: center;
  > :not(:last-child){
    margin-right: .5em;
  }
  > input {
    height: $height;
    border: 1px solid $border-color;
    border-radius: $border-radius;
    padding: 0 8px;
    outline: none;
    &:hover {
      border-color: $border-color-hover;
    }
    &:focus {
      box-shadow: inset 0 1px 3px rgba($color: #f597e5, $alpha: .5);
    }
    &[disabled],&[read-only] {
      border-color: #bbb;
      color: #bbb;
      cursor: not-allowed;
    }
  }
  &.error{
    > input {
      border-color: #FF6750;
    }
    .error-message {
      color: #FF6750;
    }
  }
}
</style>