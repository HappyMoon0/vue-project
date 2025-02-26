<template>
  <nav>
    <RouterLink to="/">Home</RouterLink> |
    <RouterLink to="/dashboard">Dashboard</RouterLink> | 
    <RouterLink to="/user">About</RouterLink> | 
    <RouterLink to="/login">Login</RouterLink>
  </nav>
</template>

<style>
nav {
  padding: 30px;
  background-color: #f1f1f1;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>