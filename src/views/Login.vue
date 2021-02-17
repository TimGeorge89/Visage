<template>
  <div id="login">
    <PasswordReset v-if="showPasswordReset" @close="togglePasswordReset()"></PasswordReset>
    <section>
      <div class="col1">
        <h1>Visage</h1>
        <p>Welcome to the Visage, sample social media web app powered by Vue.js and firebaase.</p>
      </div>
      <div class="col2">
        <div class="col2-wrapper">
          <form v-if="showLoginForm" @submit.prevent>
          <h1>Welcome Back</h1>
          <div>
            <!-- <label for="email">Email</label> -->
            <input v-model.trim="loginForm.email" type="text" placeholder="Email" id="email1"/>
          </div>
          <div class="button">
            <!-- <label for="password1">Password</label> -->
            <input v-model.trim="loginForm.password" type="password" placeholder="Password" id="password1"/>
            <button @click="login()" class="button">Log In</button>
            <div class="extras">
              <a @click="togglePasswordReset()" >Forgot Password</a>
              <a @click="toggleForm()" >Create an Account</a>
            </div>
          </div>
        </form>
        <!-- sign up form -->
        <form v-else @submit.prevent>
          <h1>Get Started</h1>
          <div>
            <!-- <label for="name">Name</label> -->
            <input v-model.trim="signupForm.name" type="text" placeholder="Name" id="name" />
          </div>
          <div>
            <!-- <label for="title">Title</label> -->
            <input v-model.trim="signupForm.title" type="text" placeholder="Company" id="title" />
          </div>
          <div>
            <!-- <label for="email2">Email</label> -->
            <input v-model.trim="signupForm.email" type="text" placeholder="you@email.com" id="email2" />
          </div>
          <div>
            <!-- <label for="password2">Password</label> -->
            <input v-model.trim="signupForm.password" type="password" placeholder="min 6 characters" id="password2" />
          </div>
          <div class="button">
            <button @click="signup()" class="button">Sign Up</button>
          </div>
          <div class="extras">
            <a @click="toggleForm()" >Back to Log In</a>
          </div>
        </form>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import PasswordReset from '@/components/PasswordReset'

export default {
  data() {
    return {
      loginForm: {
        email: '',
        password: ''
      },
      signupForm: {
        name: '',
        title: '',
        email: '',
        password: ''
      },
      showLoginForm: true,
      showPasswordReset: false
    }
  },
  components: {
    PasswordReset
  },
  methods: {
    login() {
      this.$store.dispatch('login', {
        email: this.loginForm.email,
        password: this.loginForm.password
      })
    },
    signup() {
      this.$store.dispatch('signup', {
        email: this.signupForm.email,
        password: this.signupForm.password,
        name: this.signupForm.name,
        title: this.signupForm.title,
      })
    },
    toggleForm() {
      this.showLoginForm = !this.showLoginForm
    },
    togglePasswordReset() {
      this.showPasswordReset = !this.showPasswordReset
    }
  }
}

</script>
  
<style lang="scss">
* {
  margin: 0;
  padding: 0;
}

html {
  height: 100vh;
  font-family: 'Open Sans', sans-serif;
}

#login {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  height: 100vh;
  display: grid;
  background-color: #F0F2F5;
}

section {
  display: flex;
}

.col1 {
  margin: auto;
  text-align: left;
  padding-left: 75px;
  width: 50%;
  background-color: #F0F2F5;
  h1 {
    font-size: 80px;
    color: #1877F2;
    margin-bottom: 15px;
    letter-spacing: 1px;
    font-weight: 700;
    font-style: italic;
  }
  p {
    font-size: 30px;
    font-weight: 400;
    padding: 0 50px 0 0;
  }
}

input {
  font-size: 25px;
  margin: 10px;
  padding: 8px;
  border-radius: 5px;
  border: 1px solid;
}

.button {
  display: block;
  button {
    font-size: 25px;
    color: white;
    padding: 10px 0;
    width: 285px;
    margin: 10px auto;
    background-color: #42B72A;
    border: none;
    border-radius: 5px;
  }
}

.col2-wrapper {
  border: 1px solid black;
  background-color: white;
  padding: 40px;
  margin-right: 40px;
  border: 1px solid white;
  border-radius: 10px;
  box-shadow: 5px 8px 20px grey;
  h1 {
    font-size: 60px;
    padding: 20px 0;
    letter-spacing: 1px;
    color: #1877F2;
  }
  label {
    font-size: 20px;
  }
}

.col2 {
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 50%;
  background-color: #F0F2F5;
}

.extras {
  margin-top: 12px;
  a {
    color: #1877F2;
    margin: 0 10px;
  }
  a:hover {
    cursor: pointer;
  }
}
</style>