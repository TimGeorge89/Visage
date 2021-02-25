<template>
  <header>
    <section>
      <div class="col1">
        <router-link to="/">
          <h3>Visage</h3>
        </router-link>
        <ul class="inline">
          <li>
            <router-link to="/">Dashboard</router-link>
          </li>
          <li>
            <router-link to="/settings">Settings</router-link>
          </li>
          <li><a @click="logout()">logout</a></li>
        </ul>
      </div>
    </section>
  </header>
</template>

<script>
export default {
  methods: {
    logout() {
      this.$store.dispatch('logout')
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

header {
  background-color: #1877F2;
}

section {
  
}

.col1 {
  display: flex;
  a.router-link {
    text-decoration: none;
  }
  h3 {
    font-size: 50px;
    letter-spacing: 2px;
    margin: 20px 0 20px 40px;
    justify-content: center;
    align-items: center;
  }
  ul {
    display: flex;
    justify-content: center;
    align-items: center;
    list-style: none;
    margin-left: auto;
    margin-right: 40px;
    li {
      font-size: 20px;
    }
  }
}


</style>

