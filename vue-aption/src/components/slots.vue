<template>
  <h3>slot插槽</h3>
  <p>在之前的章节中，我们已经了解到组件能够接收任意类型的 JavaScript 值作为 props，但组件要如何接收模板内容呢？在某些场景中，我们可能想要为子组件传递一些模板片段，让子组件在它们的组件中渲染这些片段。</p>
  <SlotsBase />
  <p>我们可以通过修改标签来让组件接受模板内容，如下所示</p>
  <SlotsBase>
    <div>
      <p>插槽内容</p>
    </div>
  </SlotsBase>
  <p>在子组件中需要通过slot来展示你的模板，slot在哪里，模板就展示在哪里。</p>
  <p>如果这份数据是一份动态数据，那么你需要把数据的获取写在父元素中</p>
  <SlotsBase>
    <p>{{ msg }}</p>
  </SlotsBase>
  <p>如果你的插槽没有传值，那么你可以在子组件中slot里写插槽的默认值</p>
  <p>我们可以通过添加名字来更改插槽，这种方法称为具名插槽,通过v-slot: 来添加。v-slot可以简写为‘#’</p>
  <SlotsBase>
    <template v-slot:header>
    </template>
    <template v-slot:main>
    </template>
  </SlotsBase>
  <p>插槽的内容可能需要同时使用父组件域内和子组件域内的数据<br>要做到这一点,我们先要把子元素的数据传给父元素，在将两个元素传给slot</p>
  <SlotsBase v-slot="slotprops">
    <h3>{{ father }} - {{ slotprops.message }}</h3>
  </SlotsBase>
  <p>如果是具名插槽，那么我们需要在父组件中template处添加#header = "slotprops" header表示插槽名字，slotprops表示接受的子元素数据</p>
</template>


<script>
import SlotsBase from './components/VueSlots.vue'

export default{
  components:{
    SlotsBase,
  },
  data(){
    return{
      msg:"我在父元素中",
      father:"父元素数据"
    }
  }
}
</script>