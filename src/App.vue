<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Raleway:wght@300;500;800&family=Rubik+Mono+One&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Montserrat+Alternates&family=Poppins:wght@200;300;500;600;700;900&display=swap');
body {
  margin: 0;
}

#app {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  width: 100vw;
}
</style>
