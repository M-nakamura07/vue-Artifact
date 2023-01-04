<template>
  <div class="header">
    <h1>M.Nakamura Official Site</h1>
    <nav>
      <router-link to="/" class="select home">HOME</router-link>
      <router-link to="/profile" class="select profile">PROFILE</router-link>
      <router-link to="/achievement" class="select achievement">ACHIEVEMENT</router-link>
    </nav>
  </div>
</template>


<style scoped>
.header {
  width: 100%;
  height: 140px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-image: url(../assets/texture_00202.jpg);
  background-position-y: 270px;
}

h1,
.select {
  font-family: serif;
  font-weight: bold;
  color: rgb(100, 89, 67);
}

h1 {
  margin-left: 16px;
}

.select {
  font-size: 20px;
  display: inline-block;
  padding: 10px 24px;
  margin-right: 22px;
  border-radius: 6px;
  text-decoration: none;
  transition: background .5s 
}

.select.home:hover {
  background: rgba(246, 205, 128, .7);
}

.select.profile:hover {
  background: rgba(246, 205, 128, .7);
}

.select.achievement:hover {
  background: rgba(246, 205, 128, .7);
}

@media (max-width: 1050px){
  .header {
    flex-direction: column;
    padding: 8px;
  }

  .select {
    text-align: center;
    margin: 0 auto;
    padding: 5px 22px;
  }
}
</style>
