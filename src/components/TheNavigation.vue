<template>  

  <nav>
      <ul>
        <li>
          <i class="pi pi-home" style="font-size: 1rem"></i>
          <router-link to="/" :class="{ active: $route.path === '/' }">Home</router-link>
        </li>
        <li>
          <i class="pi pi-desktop" style="font-size: 1rem"></i>
          <router-link to="/depth1" :class="{ active: $route.path.startsWith('/depth1') }">Depth1</router-link>
          <ul v-if="$route.path.startsWith('/depth1')">
            <li><router-link to="/depth1/depth2" :class="{ active: $route.path === '/depth1/depth2' }">Depth2</router-link></li>
          </ul>
        </li>
      </ul>
    </nav>
</template>

<style scoped>
 
 nav ul {
  /* list-style-type: none; */
  padding: 0;
  display: inline;
}

nav li {
  margin: 10px 0;
  display: inline;
}

nav a {
  text-decoration: none;
  color: #333;
}

nav a.active {
  font-weight: bold;
  color: #007bff;
}
</style>