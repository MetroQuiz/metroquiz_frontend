<template>
<div>
  <div v-if="state === 1">
    <div id="map">
      <Map ref="map"/>
    </div>
    <div v-if="stationChooseDialog.show" style="position: absolute; z-index: 2; top: 0; left: 0; width: 100vw; height: 100vh; background-color: transparent; display: flex; justify-content: center; align-items: center">
      <div class="choose-dialog"  style="background-color: #F9F9F9; border-color: #6225E6; border-style: solid;">
        <h1 style="margin-left: 20px;">Выберите цвет станции</h1>
        <div>
          <img @click="chooseColor($event, '1')" v-if="stationChooseDialog.variants.includes('1')" src="../assets/lines_icons/1.svg" height="200px" width="200px" style="margin-right: 50px" />
          <img @click="chooseColor($event, '2')" v-if="stationChooseDialog.variants.includes('2')" src="../assets/lines_icons/2.svg" height="200px" width="200px" style="margin-right: 50px" />
          <img @click="chooseColor($event, '3')" v-if="stationChooseDialog.variants.includes('3')" src="../assets/lines_icons/3.svg" height="200px" width="200px" style="margin-right: 50px" />
          <img @click="chooseColor($event, '4')" v-if="stationChooseDialog.variants.includes('4')" src="../assets/lines_icons/4.svg" height="200px" width="200px" style="margin-right: 50px" />
          <img @click="chooseColor($event, '5')" v-if="stationChooseDialog.variants.includes('5')" src="../assets/lines_icons/5.svg" height="200px" width="200px" style="margin-right: 50px" />
          <img @click="chooseColor($event, '6')" v-if="stationChooseDialog.variants.includes('6')" src="../assets/lines_icons/6.svg" height="200px" width="200px" style="margin-right: 50px" />
          <img @click="chooseColor($event, '7')" v-if="stationChooseDialog.variants.includes('7')" src="../assets/lines_icons/7.svg" height="200px" width="200px" style="margin-right: 50px" />
          <img @click="chooseColor($event, '8')" v-if="stationChooseDialog.variants.includes('8')" src="../assets/lines_icons/8.svg" height="200px" width="200px" style="margin-right: 50px" />
          <img @click="chooseColor($event, '8A')" v-if="stationChooseDialog.variants.includes('8A')" src="../assets/lines_icons/8A.svg" height="200px" width="200px" style="margin-right: 50px" />

          <img @click="chooseColor($event, '9')" v-if="stationChooseDialog.variants.includes('9')" src="../assets/lines_icons/9.svg" height="200px" width="200px" style="margin-right: 50px" />
          <img @click="chooseColor($event, '10')" v-if="stationChooseDialog.variants.includes('10')" src="../assets/lines_icons/10.svg" height="200px" width="200px" style="margin-right: 50px" />
          <img @click="chooseColor($event, '11')" v-if="stationChooseDialog.variants.includes('11')" src="../assets/lines_icons/11.svg" height="200px" width="200px" style="margin-right: 50px" />
          <img @click="chooseColor($event, '12')" v-if="stationChooseDialog.variants.includes('12')" src="../assets/lines_icons/12.svg" height="200px" width="200px" style="margin-right: 50px" />
          <img @click="chooseColor($event, '14')" v-if="stationChooseDialog.variants.includes('14')" src="../assets/lines_icons/14.svg" height="200px" width="200px" style="margin-right: 50px" />
          <img @click="chooseColor($event, '15')" v-if="stationChooseDialog.variants.includes('15')" src="../assets/lines_icons/15.svg" height="200px" width="200px" style="margin-right: 50px" />
          <img @click="chooseColor($event, 'D1')" v-if="stationChooseDialog.variants.includes('D1')" src="../assets/lines_icons/D1.svg" height="200px" width="250px" style="margin-right: 50px" />
          <img @click="chooseColor($event, 'D2')" v-if="stationChooseDialog.variants.includes('D2')" src="../assets/lines_icons/D2.svg" height="200px" width="250px" style="margin-right: 50px" />

        </div>
    </div>

    </div>
  </div>
  <div v-if="state === 0">
    <Lobby/>
  </div>
  <div id="messageWS" style="position: absolute; top: 20px; left: -540px; padding: 20px; padding-left: 50px; border-radius: 15px; background-color: #FF5A5A">
    <p style="color: white">Something went wrong while connecting websocket</p>
    <p  style="color: white">Check your traffic blockers to accept webscket connections</p>
  </div>
  <button class="admin" v-on:click="admin()">Вход для админов</button>

</div>
</template>

<script>
import Map from '@/components/Map'
import Lobby from "@/components/Lobby";
export default {
  name: "Game",
  components : {
    Map,
    Lobby
  },
  data:() => ({
    score: 15,
    ticket: 2,
    peoples: 3,
    state: -1,
    connection: null,
    stationChooseDialog: {
      show: false,
      variants: [],
      variants_full: []
    }
  }),
  created() {
    this.axios.get("http://127.0.0.1:8080/api/admin/stations", {headers : {"Authorization": `Bearer ${this.$cookies.get("admin_token")}`}}).then((response) => {
      }).catch((error) => {
        console.log(error)
        if (error.response.status === 401) {
          this.$cookies.remove("admin_token")
          this.$router.push("auth")
        }
    })
    if (!this.$cookies.isKey("token")) {
      this.$router.push({name: "EnterForm"})
      return
    }
    this.connection = new WebSocket("ws://127.0.0.1:8080/ws");
    this.connection.onopen = (event) => {
      this.connection.send(this.$cookies.get("token"))
    }

    this.connection.onmessage = (event) => {
      console.log(event.data)
      let message = JSON.parse(event.data)
      if (message.error) {
        document.querySelector("#messageWS").style.left = "-20px"
      }
      else {
        if (message.action === 0) {
          if (message.data.state === "preparing") {
            this.$router.push({name: "EnterForm"})
          }
          else if (message.data.state === "lobby") {
            this.state = 0
          }
          else if (message.data.state === "in_process") {
            this.state = 1
          }
          else if (message.data.state === "end") {
            this.state = 2
          }
        }
        else if (this.state === -1) {
          document.querySelector("#messageWS").style.left = "-20px"
        }
      }
    }

  },
  methods: {
    stationChoose: function(stations) {
      if (stations.length === 1) {
        this.requestQuestion(stations[0])
        return
      }
      this.stationChooseDialog.variants = []
      this.stationChooseDialog.variants_full = []


      for (var station of stations) {
        this.stationChooseDialog.variants.push(station.slice(4).split("_")[0])
        this.stationChooseDialog.variants_full.push(station)
      }
      this.stationChooseDialog.show = true
    },
    admin: function() {
      this.$router.push({name : 'auth'})
    },
    chooseColor: function(event, color) {
      this.stationChooseDialog.show = false
        for (const full_var of this.stationChooseDialog.variants_full) {
          if (full_var.includes(`line${color}_`)) {
            this.requestQuestion(full_var)
            break
          }

        }
    },
    requestQuestion: function (station) {
      this.$refs.map.activate(station)
      console.log(station)
    }
  }

}
</script>

<style scoped>
.choose-dialog {
  padding: 60px 60px;
  padding-right: 80px;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.choose-dialog h1 {
  font-size: 40px;
  font-family: 'Rubik Mono One', sans-serif;
  color: #6225E6;
  margin-bottom: 40px;

}
.choose-dialog img:last-child
{
  margin-right: 0px !important;
}

.admin {
  z-index: 3;
  position: absolute;
  left: 20px;
  bottom: 20px;
  background-color:  #6225E6;
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 14px;
  font-family: 'Rubik Mono One', sans-serif;

}
#messageWS {
  transition: left 0.5s ease-in-out;
}

#map {
  position: absolute;
  top: 0;
  right: 0;
  width: 100vw;
  height: 100vh;
  z-index: 1;
}

</style>
