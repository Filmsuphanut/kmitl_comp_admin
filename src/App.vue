<template>
	<div class="position-fixed sticky-top">
		<div v-if="checkAuth()">
			<SideBar/>
		</div>
	</div>
	<div class="app">
		<router-view/>
	</div>

</template>

<script>
// @ is an alias to /src
import SideBar from '@/components/SideBar.vue'
import router from '@/router';
import { useRouter } from 'vue-router';
import { computed } from "vue";
//import { mapGetters } from 'vuex'

export default {
  name: 'app',
  setup () {
    const currentRoute = computed(() => {
      return useRouter().currentRoute.value.name;
    })
    return {currentRoute}
  },
  components: {
	SideBar
  },
  methods:{
	checkAuth(){
		//let user = mapGetters(['getCurrentUser']).val
		let user = this.$store.getters.getCurrentUser
		console.log('current user',user)
		return user != ""? true : false

	},

  },
  created(){
	if (this.checkAuth() == false) {
		router.push({ path: '/login'})
	}else{
		router.push({ path: '/home'})
	}
  }, 
//   watch: {
//     $route(to, from) {
// 		if (this.checkAuth() == false) {

// 		}
//     }
//   }
}
</script>



<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
:root {
	--primary: #4ade80;
	--primary-alt: #22c55e;
	--grey: #64748b;
	--dark: #1e293b;
	--dark-alt: #334155;
	--light: #f1f5f9;
	--sidebar-width: 300px;
}
* {
	margin: 0;
	padding: 0;
	box-sizing: border-box;
	font-family: 'Fira sans', sans-serif;
}
body {
	background: var(--light);
}
button {
	cursor: pointer;
	appearance: none;
	border: none;
	outline: none;
	background: none;
}

.slide {
	/* display: flex; */
	position: fixed;
}

/* .content {
	padding-left: 20vh;
} */


</style>
