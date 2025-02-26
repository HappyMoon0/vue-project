<template>
  <nav> 
    <ul>
      <li>
        <div>
          <RouterLink to="/">
          <i class="pi pi-home" style="font-size: 1rem"></i>
          Home 
          </RouterLink> 
        </div>
      </li>
      <li>
        <div>
            <RouterLink to="/dashboard">
            <i class="pi pi-desktop" style="font-size: 1rem"></i>
            Dashboard
          </RouterLink> 
        </div>
      </li>
      <li>
        <div>
          <RouterLink to="/user">
            <i class="pi pi-user" style="font-size: 1rem"></i>
            User
          </RouterLink>  
        </div>
      </li>
      <li>
        <div>
          <RouterLink to="/message">
            <i class="pi pi-envelope" style="font-size: 1rem"></i>
            Message
          </RouterLink> 
        </div>
      </li>
      <li>
        <div>
          <RouterLink to="/login">
          <i class="pi pi-file" style="font-size: 1rem"></i>
          정보
          </RouterLink> 
        </div>
      </li>
      <li>
        <div>
        <RouterLink to="/setting">
          <i class="pi pi-cog" style="font-size: 1rem"></i>
          Setting
          
        </RouterLink> 
        </div>
        <ul>
          <li>Setting 1</li>
          <li>Setting 2</li>
          <li>Setting 3</li>
        </ul>
      </li>
    </ul>
       
  </nav>
</template>

<style>
nav {
  padding: 0; 
  display: flex;
  flex-direction: column;
  gap : 30px;
  background: #fff;
  border: 1px solid #d6d5d5;
  border-radius: 0 7px 7px 0;
  border-left: 0;
  overflow:hidden;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}


nav ul li div{
  cursor: pointer;
  padding: 15px 10px;
  box-sizing: border-box;
  border-bottom: 1px solid #d6d5d5;
}
nav ul li:last-child{
  border-bottom: 0;
} 
nav ul li ul{
  background-color: #fdfdfd;
  padding: 10px 0px 10px 30px;
}
nav ul li ul li{
  padding: 10px 0;
  cursor: pointer;
}
</style>