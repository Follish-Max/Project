<template>
  <div class="m-menu">
    <dl class="nav" @mouseleave="mouseleave">
      <dt>全部分类</dt>
      <dd @mouseenter="enter" v-for="(item, idx) in menu" :key="idx">
        <i :class="item.type"/>{{item.name}}<span class="arrow"/>
      </dd>
    </dl>
    <div class="detail" v-if="kind" @mouseleave="sout" @mouseenter="sover">
      <template v-for="(item, idx) in curdetail.child">
        <h4 :key="idx">{{item.title}}</h4>
        <span v-for="v in item.child" :key="v">{{v}}</span>
      </template>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      kind: '',
      menu: [{
        type: 'food',
        name: '美食',
        child: [{
          title: '美食',
          child: ['代金券']
        }]
      },{
        type: 'takeout',
        name: '外卖',
        child: [{
          title:'外卖',
          child: ['美团外卖']
        }]
      },{
        type: 'takeout',
        name: '外卖',
        child: [{
          title: '美食',
          child: ['代金券','代金券','代金券','代金券']
        }]
      },{
        type: 'takeout',
        name: '外卖',
        child: [{
          title: '美食',
          child: ['代金券','代金券','代金券','代金券']
        }]
      }]
    }
  },
  methods: {
    mouseleave:function () {
      let self = this
      self._timer = setTimeout(function () {
        self.kind = ''
      }, 150)
    },
    enter:function (e) {
      this.kind = e.target.querySelector('i').className
      // console.log(this.kind)

    },
    sover() {
      clearTimeout(this._timer)
    },
    sout() {
      this.kind = ''
    }
  },
  computed: {
    curdetail: function () {
      return this.menu.filter((item) => item.type===this.kind)[0]
      console.log(this.menu.filter((item) => item.type===this.kind)[0])
    }
  }
}
</script>

<style lang="scss">

</style>
