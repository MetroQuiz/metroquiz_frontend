<template>
  <div style="display: flex; flex-direction: column; align-items: center; justify-content: flex-start; width: 100vw; height: 100vh">
    <h1>{{place}} место</h1>
    <div class="row">
      <p style="width: 75px">№</p>
      <p style="width: 500px">Имя</p>
      <p style="width: 200px; padding-left: 30px">Счет</p>

    </div>
    <div v-for="(result, index) in results" class="row" style="margin-top: 0">
      <p style="width: 75px">{{ index + 1 }}</p>
      <p style="width: 500px">{{result[0]}}</p>
      <p style="width: 200px; padding-left: 30px">{{result[1]}}</p>

    </div>
    <div class="row">
      <p style="width: 75px; border-bottom-width: 0 !important;"></p>

      <p style="width: 500px; border-bottom-width: 0 !important;"></p>
      <p style="width: 200px; padding-left: 30px;  border-bottom-width: 0 !important;"></p>

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
    this.axios.get("http://176.99.173.63:8080/api/game/results", {headers: {"Authorization": `Bearer ${this.$cookies.get("token")}`}}).then((response) => {
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