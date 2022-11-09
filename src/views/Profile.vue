<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <button @click="logout" type="button" class="btn btn-primary">Logout</button>
  </div>
</template>

<script>
// @ is an alias to /src
//import HelloWorld from '@/components/HelloWorld.vue'
//import router from '@/router';

export default {
  name: 'ProfileView',
  components: {
    //HelloWorld
  },methods:{
    logout(){
      this.$store.commit('removeStateAndLocal')

      //router.push({ path: '/'})
      this.$router.go(this.$router.currentRoute)
    }
  }
}
</script>
