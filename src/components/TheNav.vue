<template>
  <nav> 
    <ul>
      <li>
        <RouterLink to="/">
        <i class="pi pi-home" style="font-size: 1rem"></i>
        Home
      </RouterLink> 
      </li>
      <li>
        <RouterLink to="/dashboard">
        <i class="pi pi-desktop" style="font-size: 1rem"></i>
        Dashboard
      </RouterLink> 
      </li>
      <li>
        <RouterLink to="/user">
        <i class="pi pi-user" style="font-size: 1rem"></i>
        User
      </RouterLink>  
      </li>
      <li>
        <RouterLink to="/login">
        <i class="pi pi-file" style="font-size: 1rem"></i>
        정보
      </RouterLink> 
      </li>
      
    </ul>
      
      
      
      
 
        <button>
          <i class="pi pi-sign-out" style="font-size: 1rem"></i>
          Logout
        </button> 
  </nav>
</template>

<style>
nav {
  padding: 0; 
  display: flex;
  flex-direction: column;
  gap : 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}

nav ul li{
  cursor: pointer;
  padding: 15px 10px;
  box-sizing: border-box;
  border-bottom: 1px solid #d6d5d5;
}
nav ul li:last-child{
  border-bottom: 0;
}
nav button{
  border-top: 1px solid #d6d5d5;
  text-align: center;
  cursor: pointer;
  display: flex;
  align-content: stretch;
  justify-content: center;
  align-items: center;
}
</style>