<template>

<div class="d-flex align-items-center" style="height: 5vh;">

</div>

<div class="container" style="width:25%; ">
    <div class="card">

        <div class="container pt-5 pb-5">
        <div class="row">
            <div class="col align-items-center">
                <img class="pic" src="@/assets/logo_kmitl.png" width="100%" height="100%"/> 

            </div>
        </div>
        <div class="row pt-5 ms-2 me-2">

                <form @submit.prevent="login">
                <div class="mb-2 ">
                    <label for="name" class="form-label d-flex justify-content-start">Username</label>
                    <input v-model="username" class="form-control" :class="{ 'is-invalid':isInvalid}" id="name" aria-describedby="emailHelp">                   
                </div>
                <div class="mb-2">
                    <label for="password" class="form-label d-flex justify-content-start">Password</label>
                    <input v-model="password" type="password" :class="{ 'is-invalid':isInvalid}" class="form-control " id="password">
                    <div class="invalid-feedback"><p class="text text-start">* {{validateText}}</p></div>
                </div>
                <div class="mb-2 form-check d-flex justify-content-start">
                    <input type="checkbox" class="form-check-input" id="exampleCheck1">
                    <label class="form-check-label ms-2" for="exampleCheck1">Check me out</label>
                </div>
                <div class="pt-3">
                    <button type="submit" class="btn btn-primary">Submit</button>
                </div>
                
                </form>

        </div>
        </div>
    </div>
</div>


</template>

<script>
import router from '@/router';

export default {
    name: 'LoginView',
    data(){
        return{
            username:"",
            password:"",
            isInvalid:false,
            validateName:"",
            validatePass:"",
            validateText:"",
            
        }
    },methods:{
        commitAuthValue(name){
            this.$store.commit('changeUserStateWithLocal',name)
            router.push({ path: '/home'})
        },
        login(){
            if (this.username == "admin" && this.password == "admin"){
                this.commitAuthValue(this.username)
                console.log(this.$store.getters.getCurrentUser)
            }else{
                this.isInvalid = true
                if (this.username == "" || this.password == ""){
                    this.validateText = "กรุณากรอกชื่อผู้ใช้และรหัสผ่าน"
                }else{
                    this.validateText = "ชื่อผู้ใช้หรือรหัสผ่านผิดพลาด"
                }
                
            }
        }
    },
    created(){

    },
}
</script>

<style scoped>
.pic{
    object-fit: contain;
    width: 300px;
    height: 300px;
}

</style>

