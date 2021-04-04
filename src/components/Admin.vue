<template>
  <div style="height: 100vh; width: 100vw;  background-color: #F3F2F7; margin-left: 0; display: flex; justify-content: center">
    <div style="padding-top: 40px;  width: 1250px; height: 100vh">
      <div class="row" style="align-items: center; justify-content: space-between; margin-bottom: 40px">
        <div>
          <h1>Admin panel</h1>
          <p>Welcome to Metro quiz admin panel</p>
        </div>
        <div class="row" style="margin-right: 0px">
          <img src="../assets/avatar.jpg" height="60px" style="border-radius: 17px;"/>
        </div>
      </div>
      <div class="row" style="justify-content: space-between">
        <div>
          <div class="row" style="">
            <div class="row info-card" style="align-items: flex-start; margin-right: 20px; width: 335px; border-radius: 20px; justify-content: space-between; margin-left: 15px; padding: 30px 40px; background-color: #AB54DB">
              <div>
                <h4>{{ created }}</h4>
                <p style="color: white">Created</p>
              </div>
              <img src="../assets/folder.svg" />
            </div>
            <div class="row info-card" style="align-items: flex-start;  width: 335px; border-radius: 20px; justify-content: space-between; margin-left: 15px; padding: 30px 40px; background: #FF5B5B;">
              <div>
                <h4>{{ pending }}</h4>
                <p style="color: white">Pending start</p>
              </div>


              <img src="../assets/wait.svg" />
            </div>
          </div>
          <div class="row" style="margin-top: 30px">
            <div class="row info-card" style="align-items: flex-start; margin-right: 20px; width: 335px; border-radius: 20px; justify-content: space-between; margin-left: 15px; padding: 30px 40px; background-color: #FFBB54">
              <div>
                <h4>{{ playing }}</h4>
                <p style="color: white">Playing now</p>
              </div>
              <img src="../assets/progress.svg" />
            </div>
            <div  class="row info-card" style="align-items: flex-start; width: 335px;   border-radius: 20px; justify-content: space-between; margin-left: 15px; padding: 30px 40px; background-color: #00A389">
              <div>
                <h4>{{ finished }}</h4>
                <p style="color: white">Finished</p>
              </div>
              <img src="../assets/finished.svg" />
            </div>
          </div>
        </div>
        <div class="big-info-card" style="width: 530px;  border-radius: 24px; background: linear-gradient(112.89deg, #464255 35.16%, #332D45 97.44%); flex-direction: column;  padding: 50px 40px; display:  flex; justify-content: space-between; ">
          <div>
            <h3 style="font-size: 24px; margin-bottom: 10px">Questions in base:</h3>
            <h3 style="margin-bottom: 15px">{{ question_amount }} questions</h3>
          </div>
          <div class="row" style="margin-left: 0px; padding: 10px 20px; border-radius: 10px; align-items: center; justify-content: space-between; width: 180px;margin-top: 10px;background-color: rgba(96,82,83);"><img src="../assets/edit.svg"/><h5>Add question</h5></div>
        </div>
      </div>
      <div class="row" style="margin-top: 40px">
        <div style="width: 900px; margin-right: 50px;">
          <div style=" margin-bottom: 30px">
            <h1 style="font-weight: 600">Game history</h1>
            <p>Here you can view and edit your games</p>
          </div>
          <div class="games" style="border-radius: 20px; background-color: white;  height: calc(100vh - 610px);overflow-y: scroll; scrollbar-width: none;">
            <div class="head row" style="padding: 20px 50px; padding-bottom: 17px;  border-bottom-color: #F0F0F0; border-bottom-style: solid; border-bottom-width: 2px">
              <p style="width: 100px; margin-right: 15px; margin-left: 5px">Game pin</p>
              <p style="width: 120px; margin-right: 15px">Origin</p>
              <p style="width: 120px; margin-right: 15px">Destination</p>
              <p style="width: 150px; margin-right: 25px">Player amount</p>
              <p style="width: 170px; margin-right: 15px">Status</p>
              <p style="width: 55px">Action</p>
            </div>

            <div v-for="(game, index) in games" :key="game.pin" class="table row" v-bind:style="index === 0 ? {'margin-top': '15px'} : {}">
              <p style="width: 100px; margin-right: 15px;  margin-left: 5px">{{ game.pin }}</p>
              <p style="width: 120px; margin-right: 15px">{{ game.origin }}</p>
              <p style="width: 120px; margin-right: 15px">{{ game.destination }}</p>
              <p style="width: 150px; margin-right: 25px">{{ game.player_amount }} players</p>
              <div v-if="game.status === 'in_process'" class="row" style="margin-left: 0px; padding: 10px 20px; border-radius: 10px; align-items: center; justify-content: center; width: 120px;margin-top: -5px;background-color: rgb(254,228,228);"><h5 style="font-size: 10px; color: rgb(255, 90, 90)">In process</h5></div>
              <div v-if="game.status === 'lobby'" class="row" style="margin-left: 0px; padding: 10px 20px; border-radius: 10px; align-items: center; justify-content: center; width: 120px;margin-top: -5px;background-color: rgb(255,245,229);"><h5 style="font-size: 10px">Lobby</h5></div>
              <div v-if="game.status === 'preparing'" class="row" style="margin-left: 0px; padding: 10px 20px; border-radius: 10px; align-items: center; justify-content: center; width: 120px;margin-top: -5px;background-color: rgb(255,245,229);"><h5 style="font-size: 10px">Preparing</h5></div>
              <div v-if="game.status === 'end'" class="row" style="margin-left: 0px; padding: 10px 20px; border-radius: 10px; align-items: center; justify-content: center; width: 120px;margin-top: -5px;background-color: rgb(224,249,241);"><h5 style="font-size: 10px; color: rgb(0, 163, 137)">Finished</h5></div>

              <div style="width: 55px; margin-left: 80px; " class="row">
                <img src="../assets/next.svg" style="height: 20px; margin-right: 15px"/>
                <img src="../assets/share.svg" @click="togleGame($event, game.id)" style="height: 20px"/>
              </div>
            </div>

          </div>
        </div>
        <div style="width: 300px;">
          <div>
            <h1 style="font-weight: 600">Create new game</h1>
            <p>Here you can create new games</p>
            <form @submit="onSubmit($event)" style="width: 300px; margin-top: 30px; height:  calc(100vh - 610px)">
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
            station.name = this.translit.transform(station.name)
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
          document.querySelector("#messageTogle").style.left = "-20px"
          setTimeout(() => document.querySelector("#messageTogle").style.left = "-540px", 3000)
        }
      })
    },
    onSubmit(event) {
      if (this.destination == this.origin) {
        document.querySelector("#message").style.left = "-20px"
        setTimeout(() => document.querySelector("#messageSame").style.left = "-540px", 3000)
      }
      this.axios.post("http://127.0.0.1:8080/api/admin", this.qs.stringify({origin_id: this.origin, destination_id: this.destination}), {headers : {"Authorization": `Bearer ${this.$cookies.get("admin_token")}`}}).then((response) => {
        if (response.status === 200) {
          document.querySelector("#messageOK").style.left = "-20px"
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
h1 {
  font-family: 'Poppins', sans-serif;
  font-weight: 700;
  font-size: 32px;
}
h4 {
  font-family: 'Poppins', sans-serif;
  font-weight: 600;
  font-size: 32px;
  margin: 0;
  color: white;
}
h3 {
  font-family: 'Poppins', sans-serif;
  font-weight: 500;
  font-size: 48px;
  margin: 0;
  color: white;
}
h6 {
  font-family: 'Poppins', sans-serif;
  font-weight: 300;
  font-size: 14px;
  margin: 0;
  color: white;
}
h5 {
  font-family: 'Poppins', sans-serif;
  font-weight: 400;
  font-size: 16px;
  margin: 0;
  color: #FFBB54;;
}
p {
  font-family: 'Poppins', sans-serif;
  font-weight: 300;
  margin: 0;
}
optgroup {
  font-family: 'Poppins', sans-serif;
}
input[type="text"], input[type="password"], input[type="email"] {
  outline: none;
  padding: 20px;
  font-family: 'Poppins', sans-serif;
  font-weight: normal;
  font-size: 14px;
  border: none;
  background: #FFFFFF;
  border: 1px solid #ECEAF3;
  border-radius: 18px;
  max-width: 200px;


}

.big-info-card {
  border-radius: 25px !important;
  transition: all 0.2s ease-in-out;
}

.big-info-card:hover {
  border-radius: 18px !important;
  transition: all 0.2s ease-in-out;
}

.info-card {
  border-radius: 20px !important;
  transition: all 0.2s ease-in-out;
}

.info-card:hover {
  border-radius: 15px !important;
  transition: all 0.2s ease-in-out;
}

input:required {
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
.game {
  overflow-x: hidden;
}
.game::-webkit-scrollbar {
  display: none;  /* Safari and Chrome */
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
  display: flex;
  justify-content: space-between;
  flex-direction: column;
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


</style>