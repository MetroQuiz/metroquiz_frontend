<template>
  <div class="div_body">
    <div class="content">

      <div>
        <h1>Admin panel</h1>
        <p>Metroquiz</p>
      </div>

      <div class="content_body">

        <div class="content-table">

          <div class="info">
            <div class="row">
              <div class="card" style="background-color: #AB54DB">
                <div style="display: block">
                  <div style="display: inline-block">
                    <h4 style="display: inline-block; padding-bottom: 5px">{{ created }}</h4>
                    <p style="color: white">Created</p>
                  </div>
                  <img style="display: inline-block; float: right;" src="../assets/folder.svg"/>
                </div>
              </div>

              <div class="card" style="background-color: #FF5B5B">
                <div style="display: block">
                  <div style="display: inline-block">
                    <h4 style="display: inline-block; padding-bottom: 5px">{{ pending }}</h4>
                    <p style="color: white">Pending start</p>
                  </div>
                  <img style="display: inline-block; float: right;" src="../assets/wait.svg"/>
                </div>
              </div>

            </div>

            <div class="row">

              <div class="card" style="background-color: #FFBB54">
                <div style="display: block">
                  <div style="display: inline-block">
                    <h4 style="display: inline-block; padding-bottom: 5px">{{ playing }}</h4>
                    <p style="color: white">Playing now</p>
                  </div>
                  <img style="display: inline-block; float: right;" src="../assets/progress.svg"/>
                </div>
              </div>

              <div class="card" style="background-color: #00A389">
                <div style="display: block">
                  <div style="display: inline-block">
                    <h4 style="display: inline-block; padding-bottom: 5px">{{ finished }}</h4>
                    <p style="color: white">Finished</p>
                  </div>
                  <img style="display: inline-block; float: right;" src="../assets/finished.svg"/>
                </div>
              </div>

            </div>
          </div>

          <div class="question">
            <div class="question-card" style="padding: 50px 40px;">
              <h3>Questions in base:</h3>
              <h3 style="margin-bottom: 15px; font-weight: 500; font-size: 48px;">{{ question_amount }} questions</h3>
            </div>
          </div>
        </div>

        <div style="display: block; margin-top: 30px;">
          <div class="gam_bik">
            <h1 style="font-weight: 600">Game history</h1>
            <p>Here you can view and edit your games</p>
            <div class="games" style="margin-top: 30px">
              <div class="head" style="display: -webkit-inline-flex; padding: 20px 50px; width: 100%; padding-bottom: 17px;  padding-left: 20px !important; border-bottom-color: #F0F0F0; border-bottom-style: solid; border-bottom-width: 2px">
                <p class="distance_pstyle" style="margin-left: 15px">Game pin</p>
                <p class="distance_pstyle">Origin</p>
                <p class="distance_pstyle">Destination</p>
                <p class="distance_pstyle">Players amount</p>
                <p class="distance_pstyle">Status</p>
                <p>Action</p>
              </div>

              <div style="display: -webkit-inline-flex; align-content: center;" v-for="(game, index) in games.slice().reverse()" :key="game.pin" class="table" v-bind:style="index === 0 ? {'margin-top': '15px'} : {}">
                <p class="distance_pstyle">{{ game.pin }}</p>
                <p class="distance_pstyle">{{ game.origin }}</p>
                <p class="distance_pstyle">{{ game.destination }}</p>
                <p class="distance_pstyle">{{ game.player_amount }} players</p>
                <div v-if="game.status === 'in_process'" style="margin-left: 0px; padding: 10px 20px; border-radius: 10px; align-items: center; justify-content: center; width: 120px;margin-top: -5px;background-color: rgb(254,228,228);"><h5 style="font-size: 10px; color: rgb(255, 90, 90)">In process</h5></div>
                <div v-if="game.status === 'lobby'" style="margin-left: 0px; padding: 10px 20px; border-radius: 10px; align-items: center; justify-content: center; width: 120px;margin-top: -5px;background-color: rgb(255,245,229);"><h5 style="font-size: 10px">Lobby</h5></div>
                <div v-if="game.status === 'preparing'" style="margin-left: 0px; padding: 10px 20px; border-radius: 10px; align-items: center; justify-content: center; width: 120px;margin-top: -5px;background-color: rgb(255,245,229);"><h5 style="font-size: 10px">Preparing</h5></div>
                <div v-if="game.status === 'end'"  style="margin-left: 0px; padding: 10px 20px; border-radius: 10px; align-items: center; justify-content: center; width: 120px;margin-top: -5px;background-color: rgb(224,249,241);"><h5 style="font-size: 10px; color: rgb(0, 163, 137)">Finished</h5></div>

                <div style="width: 55px; margin-left: 80px; " class="row">
                  <img src="../assets/next.svg" style="height: 20px; margin-right: 15px"/>
                  <img src="../assets/share.svg" @click="togleGame($event, game.id)" style="height: 20px"/>
                </div>
              </div>
            </div>
          </div>
          <div class="gam_create">
            <h1 style="font-weight: 600">Create new game</h1>
            <p>Here you can create new games</p>
            <form @submit="onSubmit($event)" style="width: 300px; margin-top: 30px;">
              <select v-model="origin" required style="margin-top: 0px !important;">
                <optgroup label="">
                  <option value="" disabled selected>Select your option</option>
                  <option v-for="station in stations" :ket="station.id" v-bind:value="station.id">{{station.name}}</option>
                </optgroup>
              </select>
              <select v-model="destination" required>
                <optgroup label="">
                  <option value="" disabled selected>Select your option</option>
                  <option v-for="station in stations" :ket="station.id" v-bind:value="station.id">{{station.name}}</option>
                </optgroup>
              </select>
              <div  class="row" style="justify-content: space-between; max-width: 600px;margin-left: 0px">
                <input type="submit" value="Create" style="margin-right: 100px">
              </div>
            </form>
          </div>
        </div>
      </div>

    </div>
    <div id="messageSame" style="position: absolute; top: 20px; left: -540px; padding: 20px; padding-left: 50px; border-radius: 15px; background-color: #FF5A5A">
      <p style="color: white">You cannot use the same station as origin and destination</p>
      <p  style="color: white">Choose another destination or origin station</p>
    </div>
    <div id="messageOK" style="position: absolute; top: 20px; left: -540px; padding: 20px; padding-left: 50px; border-radius: 15px; background-color: rgb(0, 163, 137)">
      <p style="color: white">Successfully added new game</p>
      <p  style="color: white">Everything is ok</p>
    </div>
    <div id="messageTogle" style="position: absolute; top: 20px; left: -540px; padding: 20px; padding-left: 50px; border-radius: 15px; background-color: #FF5A5A">
      <p style="color: white">Something went wrong you cannot change that status</p>
      <p  style="color: white">Maybe it's to old finished game to change it</p>
    </div>
  </div>
</template>


<script>
export default {
  name: "Admin",
  data() {
    return {
      search: '',
      stations : [],
      origin: '',
      destination: '',
      created: 0,
      pending: 0,
      playing: 0,
      finished: 0,
      question_amount: 0,
      games: []
    }
  },
  created() {
    if (!this.$cookies.isKey("admin_token")) {
      this.$router.push({name: "auth"})
    }
    else {
      this.axios.get("http://127.0.0.1:8080/api/admin/stations", {headers : {"Authorization": `Bearer ${this.$cookies.get("admin_token")}`}}).then((response) => {
        if (response.status === 200) {
          response.data.forEach((station) => {
            station.name = this.$CyrillicToTranslit().transform(station.name)
            this.stations.push(station)
          })
          this.axios.get("http://127.0.0.1:8080/api/admin/me", {headers : {"Authorization": `Bearer ${this.$cookies.get("admin_token")}`}}).then((response) => {
            if (response.status === 200) {
              this.created = response.data.games.length
              response.data.games.forEach((game) => {
                let new_game = {}
                new_game.pin = game.pin.slice(0, 4) + '-' + game.pin.slice(4, 8)
                new_game.player_amount = game.player_count
                new_game.destination = this.stations.find((station) => station.id === game.destination_id).name
                new_game.origin = this.stations.find((station) => station.id === game.origin_id).name
                new_game.status = game.status
                new_game.id = game.id
                if (game.status === "in_process") {
                  this.playing += 1
                }
                if (game.status === "lobby") {
                  this.pending += 1
                }
                if (game.status === "preparing") {
                  this.pending += 1
                }
                if (game.status === "end") {
                  this.finished += 1
                }
                this.games.push(new_game)
              })
              this.question_amount = response.data.question_amount
            }
          }).catch((error) => {
            console.log(error)
            if (error.response.status === 401) {
              this.$cookies.remove("admin_token")
              this.$router.push("auth")
            }
          })
        }
      }).catch((error) => {
        console.log(error)
        if (error.response.status === 401) {
          this.$cookies.remove("admin_token")
          this.$router.push("auth")
        }
      })
    }
  },
  methods: {
    togleGame(event, id) {
      console.log(id)
      this.axios.post("http://127.0.0.1:8080/api/admin/toggle_status", this.qs.stringify({game_id: id}), {headers : {"Authorization": `Bearer ${this.$cookies.get("admin_token")}`}}).then((response) => {
        if (response.status === 200) {
          var index = this.games.findIndex((game) => game.id === id)
          this.games[index].status = response.data.status
        }
      }).catch((error) => {
        console.log(error)
        if (error.response.status === 401) {
          document.querySelector("#messageTogle").style.left = "-0px"
          setTimeout(() => document.querySelector("#messageTogle").style.left = "-540px", 3000)
        }
      })
    },
    onSubmit(event) {
      if (this.destination == this.origin) {
        document.querySelector("#message").style.left = "-0px"
        setTimeout(() => document.querySelector("#messageSame").style.left = "-540px", 3000)
      }
      this.axios.post("http://127.0.0.1:8080/api/admin", this.qs.stringify({origin_id: this.origin, destination_id: this.destination}), {headers : {"Authorization": `Bearer ${this.$cookies.get("admin_token")}`}}).then((response) => {
        if (response.status === 200) {
          document.querySelector("#messageOK").style.left = "-0px"
          setTimeout(() => document.querySelector("#messageOK").style.left = "-540px", 3000)
          let game = response.data
          let new_game = {}
          new_game.pin = game.pin.slice(0, 4) + '-' + game.pin.slice(4, 8)
          new_game.player_amount = game.player_count
          new_game.destination = this.stations.find((station) => station.id === game.destination_id).name
          new_game.origin = this.stations.find((station) => station.id === game.origin_id).name
          new_game.status = game.status
          new_game.id = game.id
          this.created += 1
          this.pending += 1
          this.games.push(new_game)
        }
      }).catch((error) => {
        console.log(error)
        if (error.response.status === 401) {
          this.$cookies.remove("admin_token")
          this.$router.push("auth")
        }
      })
      event.preventDefault()
    }
  }
}
</script>

<style scoped>
#messageSame {
  transition: left 0.5s ease-in-out;
}
#messageOK {
  transition: left 0.5s ease-in-out;
}
#messageTogle {
  transition: left 0.5s ease-in-out;
}
.container {
  width: 1200px;
}
.div_body {
  background-color: #F3F2F7;
  width: 100%;
  min-height: 100%;
}
.content {
  margin-left: 100px;
  margin-top: 70px;
}
.content_body {
  margin-top: 40px;
  display: block;
  margin-left: 10px;
}
.row {
  display: block;
}
.card {
  border-radius: 20px;
  width: 25%;
  height: 150px;
  padding: 30px 40px;
  align-content: baseline;
  display: inline-block;
  margin-bottom: 30px;
  margin-right: 30px;
}
.content-table {
  display: flex;
}
.info {
  width: 55%;
}
.question {
  width: 40%;
}
.question-card {
  border-radius: 24px;
  background: linear-gradient(112.89deg, #464255 35.16%, #332D45 97.44%);
  height: 330px;
  margin-right: 100px;
  width: 100%;
}
@media screen and (min-width: 1288px) {
  .card {
    width: 40% !important;
  }
}
@media screen and (max-width: 1288px) and (min-width: 950px) {
  .card {
    width: 45% !important;
  }
  .content {
    margin-left: 50px !important;
    margin-right: 50px !important;
    margin-top: 50px !important;
  }
  .content-table {
    display: flex;
    flex-wrap: wrap;
    flex-direction: row-reverse;
  }
  .info {
    width: 100% !important;
  }
  .question {
    width: 100% !important;
  }
  .question-card {
    border-radius: 20px;
    background: linear-gradient(112.89deg, #464255 35.16%, #332D45 97.44%);
    width: 95%;
    height: 300px;
    margin-left: -13px !important;
  }
}
@media screen and (max-width: 950px) {
  .card {
    width: 100% !important;
  }
  .content {
    margin-left: 50px !important;
    margin-right: 50px !important;
    margin-top: 50px !important;
  }
  .content-table {
    display: flex;
    flex-wrap: wrap;
    flex-direction: row-reverse;
  }
  .info {
    width: 100% !important;
  }
  .question {
    width: 100% !important;
  }
  .question-card {
    border-radius: 20px;
    background: linear-gradient(112.89deg, #464255 35.16%, #332D45 97.44%);
    width: 103.5%;
    height: 300px;
    margin-left: -13px !important;
  }
}
.gam_bik {
  display: inline-block;
  float: left;
  margin-left: -10px;
  width: 60%;
}
.gam_create {
  display: inline-block;
  float: right;
  width: 33%;
}
.distance_pstyle {
  margin-right: 10%;
}
@media screen and (min-width: 1148px) {
  .distance_pstyle {
    margin-right: 10% !important;
  }
}
@media screen and (max-width: 1148px) and (min-width: 926px) {
  .distance_pstyle {
    margin-right: 13% !important;
  }
  .gam_bik {
    float: left;
    margin-left: -10px;
    width: 95%;
  }
  .gam_create {
    margin-top: 30px;
    margin-left: -10px !important;
    float: left;
  }
}
@media screen and (max-width: 926px) {
  .gam_bik {
    float: left;
    margin-left: -10px !important;
    width: 103.5%;
  }
  .gam_create {
    margin-top: 30px;
    width: 103.5%;
    margin-left: -10px;
  }
}
.games {
  border-radius: 20px;
  height: 200px;
  background-color: white;
  overflow-y: scroll;
  scrollbar-width: none;
}
.head {
  padding: 20px 50px;
  padding-bottom: 17px;
  border-bottom-color: #F0F0F0;
  border-bottom-style: solid;
  border-bottom-width: 2px;
}
.head p {
  color: #A3A3A3;
  font-weight: 200;
  font-size: 14px;
}
.table {
  padding: 20px 50px;
  padding-bottom: 17px;
  padding-top: 10px;
  border-bottom-color: #F0F0F0;
  border-bottom-style: solid;
  border-bottom-width: 2px;
}
.table p {
  font-weight: 200;
  font-size: 14px;
}
form .row {
  display: flex;
}
form #logo {
  padding-right: 15px;
}
form {
  background: white;
  border-radius: 24px;
  padding: 44px;
  width: 300px;
  height: 350px;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  margin-bottom: 30px;
}
form h3 {
  font-family: 'Poppins', sans-serif;
  font-weight: 400;
  font-size: 24px;
  margin: 0;
  line-height: 18px;
  color: #A3A3A3;
}
form h1 {
  font-family: 'Poppins', sans-serif;
  font-weight: 900;
  font-size: 26px;
  margin: 0;
}
form h2 {
  font-family: 'Poppins', sans-serif;
  font-weight: 400;
  font-size: 12px;
  margin: 0;
  line-height: 18px;
  color: #A3A3A3;
}
select {
  margin-top: 30px;
  outline: none;
  padding: 20px;
  font-family: 'Poppins', sans-serif;
  font-weight: normal;
  font-size: 14px;
  border: none;
  background: #FFFFFF;
  border: 1px solid #ECEAF3;
  border-radius: 18px;
  min-width: 150px;
  -webkit-appearance: none;
  -moz-appearance: none;
  text-indent: 1px;
  text-overflow: '';
}
form input:required {
}
form input[type="submit"] {
  margin-top: 30px;
  color: white;
  font-size: 16px;
  font-family: 'Poppins', sans-serif;
  font-weight: 700;
  padding: 20px 40px;
  background: #AB54DB;
  border-radius: 18px;
  border: none;
}
form button {
  margin-top: 30px;
  color: black;
  font-size: 16px;
  font-family: 'Poppins', sans-serif;
  font-weight: 700;
  padding: 20px 40px;
  background: #E5E5E5;
  border-radius: 18px;
  border: none;
}
form a {
  color: inherit;
  text-decoration: inherit;
}
h1 {
  font-family: 'Poppins', sans-serif;
  font-weight: 700;
  font-size: 32px;
}
h3 {
  font-family: 'Poppins', sans-serif;
  font-size: 24px;
  margin-bottom: 10px;
  color: white;
}
h4 {
  font-family: 'Poppins', sans-serif;
  font-weight: 600;
  font-size: 32px;
  margin: 0;
  color: white;
}
p {
  font-family: 'Poppins', sans-serif;
  font-weight: 300;
  margin: 0;
}
</style>