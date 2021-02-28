<template>
    <div id="nav">
      <router-link to="/vehicle">Vehicle list</router-link> |
      <router-link to="/vehicle/new">Vehicle new</router-link>
    </div>
  <router-view/>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
  background: #6D245A;
  color: aliceblue;
}

#nav a {
  font-weight: bold;
  color: #ffffff;
}

#nav a.router-link-exact-active {
  color: #9ed1ba;
}

ul li {
    display: inline-block;
    padding: 2px 6px;
}
</style>
