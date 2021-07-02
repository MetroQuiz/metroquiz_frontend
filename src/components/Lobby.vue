<template>
  <div>
    <div class="bg"></div>
    <div class="bg bg2"></div>
    <div class="bg bg3"></div>
    <div class="card">
      <div style="padding: 65px 40px;">
        <h1>Wait, please!</h1>
        <h5 style="padding-top: 30px">Now other players are entering the game. <br> It will start very soon. </h5>
        <h5 style="color: #007118; font-weight: 600;">Have a good game!</h5>
      </div>
    </div>
  </div>
</template>

<script>
export default {
name: "Lobby"
}
</script>

<style scoped>
.bg {
  animation: slide 3s ease-in-out infinite alternate;
  background-image: linear-gradient(-60deg, #6c3 50%, #09f 50%);
  bottom: 0;
  left: -50%;
  opacity: .5;
  position: fixed;
  right: -50%;
  top: 0;
  z-index: -1;
}

.bg2 {
  animation-direction: alternate-reverse;
  animation-duration: 4s;
}

.bg3 {
  animation-duration: 5s;

}

.card {
  background: #FFFFFF;
  border: 10px solid #5934DD;
  box-sizing: border-box;
  border-radius: 20px;
  width: 50vw;
  height: 329px;
  margin-top: 50%;
  margin-left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
}

h1 {
  font-family: Poppins, sans-serif;
  font-weight: 400;
}

h5 {
  font-family: Poppins, sans-serif;
  font-weight: 390;
}

@media screen and (max-width: 775px) and (min-width: 532px) {
  .card {
    background: #FFFFFF;
    border: 10px solid #5934DD;
    box-sizing: border-box;
    border-radius: 20px;
    width: 70vw;
    height: 329px;
    margin-top: 50%;
    margin-left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
  }
}

@media screen and (max-width: 532px) {
  .card {
    background: #FFFFFF;
    border: 10px solid #5934DD;
    box-sizing: border-box;
    border-radius: 20px;
    width: 80vw;
    height: 329px;
    margin-top: 50%;
    margin-left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
  }
}

@keyframes slide {
  0% {
    transform: translateX(-25%);
  }
  100% {
    transform: translateX(25%);
  }
}
</style>