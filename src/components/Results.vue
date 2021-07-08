<template>
  <div style="display: flex; flex-direction: column; align-items: center; justify-content: flex-start; width: 100vw; height: 100vh">
    <h1>{{place}} place</h1>
    <div class="row">
      <p style="width: 10vw">№</p>
      <p class="nick">Nickname</p>
      <p class="score" style="padding-left: 30px">Score</p>

    </div>
    <div v-for="(result, index) in results" class="row" style="margin-top: 0">
      <p style="width: 10vw">{{ index + 1 }}</p>
      <p class="nick">{{result[0]}}</p>
      <p class="score" style="padding-left: 30px">{{result[1]}}</p>

    </div>
    <div class="row">
      <p style="width: 10vw; border-bottom-width: 0 !important;"></p>

      <p class="nick" style="border-bottom-width: 0 !important;"></p>
      <p class="score" style="padding-left: 30px;  border-bottom-width: 0 !important;"></p>

    </div>
    <div class="bg"></div>
    <div class="bg bg2"></div>
    <div class="bg bg3"></div>
  </div>
</template>

<script>
export default {
  name: "Results",
  data:() => ({
      place: -1,
      results: []
  }),
  created() {
    this.axios.get("http://127.0.0.1:8080/api/game/results", {headers: {"Authorization": `Bearer ${this.$cookies.get("token")}`}}).then((response) => {
      if (response.status === 200) {
        var results_table = response.data.results
        let name = response.data.name
        var sortable = [];
        for (var person in results_table) {
          sortable.push([person, results_table[person]]);
        }

        sortable.sort(function(a, b) {
          return b[1] - a[1];
        });
        this.results = sortable
        this.place = sortable.findIndex((o) => o[0] === name) + 1
      }
      else {
        this.$cookies.remove("token")
        this.$router.push({name : "EnterForm"})
      }

    }).catch((error) => {
      this.$cookies.remove("token")
      this.$router.push({name : "EnterForm"})
    })
  }
}
</script>

<style scoped>

h1 {
  margin-top: 100px;
  font-family: 'Rubik Mono One', sans-serif;
  font-size: 100px;
  text-align: center;
  color: white;
  margin-bottom: 80px;
}
p {
  margin-top: 0;
  padding-top: 20px;
  margin-bottom: 0;
  font-family: 'Rubik Mono One', sans-serif;
  font-size: 30px;
  color: white;
  padding-bottom: 10px;
  padding-right: 15px;
  padding-left: 15px;
  border-bottom-style: solid;
  border-bottom-color: white;

}
p:nth-child(1)  {
  border-right-style: solid;
  border-right-color: white;
}
p:nth-child(2)  {
  border-right-style: solid;
  border-right-color: white;
}

.nick {
  width: 60vw;
}

.score {
  width: 20vw;
}

@media screen and (max-width: 600px){
  h1 {
    margin-top: 200px;
    font-family: 'Rubik Mono One', sans-serif;
    font-size: 50px;
    text-align: center;
    color: white;
    margin-bottom: 80px;
  }
  p {
    margin-top: 0;
    padding-top: 20px;
    margin-bottom: 0;
    font-family: 'Rubik Mono One', sans-serif;
    font-size: 25px;
    color: white;
    padding-bottom: 10px;
    padding-right: 15px;
    padding-left: 15px;
    border-bottom-style: solid;
    border-bottom-color: white;
  }
  .nick {
    width: 40vw;
  }
  .score {
    width: 30vw;
  }
}

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

@keyframes slide {
  0% {
    transform: translateX(-25%);
  }
  100% {
    transform: translateX(25%);
  }
}
</style>