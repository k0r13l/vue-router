<template>
    <form @submit="Submit">
        <label for="uname"><b>Email</b></label>
        <br><br>
        <input type="email" placeholder="Enter Email" v-model.trim="form.email" required>
        <br><br>
        <label for="psw"><b>Password</b></label>
        <br><br>
        <input type="password" placeholder="Enter Password" v-model.trim="form.password" required>
        <br><br>
        <button type="submit">Login</button>
    </form>
</template>
<script>
export default {
    name:'LoginComponent',
    data() {
    return {
      form: {
            email:'',
            password:''
        }
      }
    },
    methods :{
        Submit(event){
            
            event.preventDefault()
            if (this.form.email === 'jdoe@gmail.com' && this.form.password === '12345') {
                alert(this.form.email + ' ' + this.form.password);
                this.$store.commit('login')
                alert('Funciona ' + this.$store.email + ' ' + this.$store.isLoggedIn);
            } 
            alert('Credenciales incorrectas');
        }
    }
    
}
</script>