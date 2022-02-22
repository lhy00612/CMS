<template>
  <div>
    <h1>欢迎来到登录页面</h1>
    <el-button @click="goHome">回首页</el-button>
  </div>
</template>

<script >
export default {
  name: 'login',
  mounted() {
    // this.$request({
    //   method: "get",
    //   url: '/login',
    //   data: {
    //     name:'Zn'
    //   }
    // }).then((res)=>{
    //   console.log(res)
    // })

    // request 是一个obj对象 
    this.$request.get('/login', { name: 'Zn' }, { mock: true, loading: true }).then((res) => {
      console.log(res);
    })
  },
  methods: {
    goHome() {
      this.$router.push('/welcome')
    }
  },
}

</script>

<style>
</style>