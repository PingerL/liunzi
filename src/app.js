import Vue from 'vue'
import Button from './button'
import Icon from './icon'
import ButtonGroup from './button-group.vue'
import Input from './input.vue'
Vue.component('g-button',Button)
Vue.component('g-icon',Icon)
Vue.component('g-button-group',ButtonGroup)
Vue.component('g-input',Input)
new Vue({
  el: '#app',
  data:{
      loading1: false,
      loading2: true,
      loading3: false,
      msg:'hi'
    },
    methods:{
      inputChange(e){
        console.log(e.target)
      }
    }
})

// 单元测试,使用 chai 来做单元测试
import chai from 'chai'
import spies from 'chai-spies'

chai.use(spies)
const expect = chai.expect
{
  const Constructor = Vue.extend(Button)
  const vm = new Constructor({
    propsData:{
      icon:'settings'
    }
  })
  console.log(vm)
  vm.$mount('#test') //动态生成 button,并将其挂在页面上

  let useElement = vm.$el.querySelector('use')
  console.log(useElement)

  let href = useElement.getAttribute('xlink:href')
  expect(href).to.eq('#i-settings')
  vm.$el.remove()  //删除元素
  vm.$destroy()   //把vm对像删掉，不然会占用内存

}
{
  const Constructor = Vue.extend(Button)
  const vm = new Constructor({
    propsData:{
      icon:'settings',
      loading: true
    }
  })

  vm.$mount()
  let useElement = vm.$el.querySelector('use')

  let href = useElement.getAttribute('xlink:href')
  expect(href).to.eq('#i-loading')
  vm.$el.remove()  //删除元素
  vm.$destroy()   //把vm对像删掉，不然会占用内存
}
{
  const div = document.createElement('div')
  document.body.appendChild(div)

  const Constructor = Vue.extend(Button)
  const vm = new Constructor({
    propsData: {
      icon:'settings'
    }
  })
  vm.$mount(div)
  let svg = vm.$el.querySelector('svg')
  let {order} = window.getComputedStyle(svg)
  expect(order).to.eq('1')
  vm.$el.remove()  //删除元素
  vm.$destroy()   //把vm对像删掉，不然会占用内存
}
{
  const div = document.createElement('div')
  document.body.appendChild(div)

  const Constructor = Vue.extend(Button)
  const vm = new Constructor({
    propsData: {
      icon:'settings',
      iconPosition: 'right'
    }
  })
  vm.$mount(div)
  let svg = vm.$el.querySelector('svg')
  let {order} = window.getComputedStyle(svg)
  expect(order).to.eq('2')
  vm.$el.remove()  //删除元素
  vm.$destroy()   //把button对像删掉，不然会占用内存
}
{
  const Constructor = Vue.extend(Button)
  const vm = new Constructor({
    propsData: {
      icon:'settings',
    }
  })
  vm.$mount()
  // 判断点击事件是否执行
  /*
  vm.$on('click',function(){
    expect(1).to.eq(1)  // 一般人是想到这样断言的
  })
  */
 // 使用 chai.spy监听回调函数
 const spy = chai.spy(()=>{})
 vm.$on('click',spy)
  let button = vm.$el
  button.click()
  expect(spy).to.have.been.called()
}