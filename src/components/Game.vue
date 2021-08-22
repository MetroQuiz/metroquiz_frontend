<template>
<div>
  <div v-if="state === 1">
    <div id="map">
      <Map ref="map"/>
    </div>
    <div v-if="stationChooseDialog.show" style="position: absolute; z-index: 2; top: 0; left: 0; width: 100vw; height: 100vh; background-color: transparent; display: flex; justify-content: center; align-items: center">
      <div class="choose-dialog"  style="background-color: #F9F9F9; border-color: #6225E6; border-style: solid;">
        <h1 style="margin-left: 20px;">Сhoose station color</h1>
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
    <div v-if="answerQuestion.show" style="position: absolute; z-index: 2; top: 0; left: 0; width: 100vw; height: 100vh; background-color: transparent; display: flex;  justify-content: center; align-items: center">
      <div class="choose-dialog"  style="background-color: #F9F9F9; border-color: #6225E6; max-width: 1000px; border-style: solid; align-items: flex-start !important;">
        <h1 style="margin-bottom: 15px">{{answerQuestion.station_name}} </h1>
        <p style="max-width: 400px">{{answerQuestion.text}}</p>
        <div style="display: flex">
          <input v-model="answerQuestion.answer" placeholder="Your answer" type="text"/>
          <input @click="answer()" style="margin-left: 20px" value="Submit" type="submit"/>
        </div>
      </div>
    </div>
    <div v-if="showCorrect" style="position: absolute; z-index: 2; top: 0; left: 0; width: 100vw; height: 100vh; background-color: transparent; display: flex; justify-content: center; align-items: center">
      <div class="correct"  style="background-color: #F9F9F9; border-color: rgb(0, 163, 137); border-style: solid; border-radius: 20px">
        <h1 style="margin-left: 20px;">Correct answer</h1>
        <div style="margin-top: -70px" class="success-checkmark">
          <div class="check-icon">
            <span class="icon-line line-tip"></span>
            <span class="icon-line line-long"></span>
            <div class="icon-circle"></div>
            <div class="icon-fix"></div>
          </div>
        </div>
      </div>

    </div>
    <div v-if="showFailure" style="position: absolute; z-index: 2; top: 0; left: 0; width: 100vw; height: 100vh; background-color: transparent; display: flex; justify-content: center; align-items: center">
      <div class="failure"  style="display: flex; flex-direction: column; justify-content: center; align-items: center;background-color: #F9F9F9; border-color: rgb(255, 91, 91); border-style: solid; border-radius: 20px">
        <h1 style="margin-left: 20px;">Wrong answer</h1>
        <svg width="150px" height="150px" style="margin-top: -70px; margin-bottom: 30px;" class="fail-icon" viewBox="0 0 206 206" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
          <title>Group</title>
          <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
            <g id="Group" stroke="#FF5B5B">
              <line x1="56.5054348" y1="149.494565" x2="148.494565" y2="57.5054348" id="Line" stroke-width="4" stroke-linecap="square"></line>
              <line x1="57.5054348" y1="148.494565" x2="149.494565" y2="56.5054348" id="Line" stroke-width="4" stroke-linecap="square" transform="translate(103.500000, 102.500000) scale(-1, 1) translate(-103.500000, -102.500000) "></line>
              <circle id="Oval" stroke-width="5" cx="103" cy="103" r="100.5"></circle>
            </g>
          </g>
        </svg>
      </div>

    </div>
    <p v-if="(train_fullness % 100 < 10 || train_fullness % 100 > 20) && (train_fullness % 10 > 1 && train_fullness % 10 < 5)" class="score-info">{{score}} points <br/>
      {{tickets}} tickets  <br/>
      {{train_fullness}} people on the train
    </p>
    <p v-if="!(train_fullness % 100 < 10 || train_fullness % 100 > 20) || !(train_fullness % 10 > 1 && train_fullness % 10 < 5)" class="score-info">{{score}} points <br/>
      {{tickets}} tikets  <br/>
      {{train_fullness}} people on the train
    </p>
  </div>
  <div v-if="state === 0">
    <Lobby/>
  </div>
  <div v-if="state === 2">
    <Results/>
  </div>
  <div id="messageWS" style="z-index: 2; position: absolute; top: 20px; left: -540px; padding: 20px; padding-left: 50px; border-radius: 15px; background-color: #FF5A5A">
    <p style="color: white">Something went wrong while connecting websocket</p>
    <p  style="color: white">Check your traffic blockers to accept websocket connections</p>
  </div>
  <div id="messageAlready" style="z-index: 2; position: absolute; top: 20px; left: -540px; padding: 20px; padding-left: 50px; border-radius: 15px; background-color: #FF5A5A">
    <p style="color: white">Your already answered question on this station</p>
    <p  style="color: white">Try to answer questions on other stations</p>
  </div>
  <button class="exitGame" v-on:click="exitGame()">Leave game</button>

</div>
</template>

<script>
import Map from '@/components/Map'
import Lobby from "@/components/Lobby";
import Results from "@/components/Results"
export default {
  name: "Game",
  components : {
    Map,
    Lobby,
    Results
  },
  data:() => ({
    score: 15,
    tickets: 2,
    train_fullness: 3,
    state: -1,
    connection: null,
    stationChooseDialog: {
      show: false,
      variants: [],
      variants_full: [],
      station_name: ''
    },
    answerQuestion: {
      show: false,
      station_name: '',
      text: '',
      answer: '',
      showTimeout: null
    },
    firstStation: false,
    showCorrect: false,
    showFailure: false,
    stations : {}
  }),
  created() {
    this.axios.get("http://127.0.0.1:8080/api/stations", ).then((response) => {
        if (response.status === 200) {
          this.stations = response.data
          setTimeout(() => this.firstStation = true, 500)
        }
      }).catch((error) => {
        this.$router.push({name : "EnterForm"})
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
      let message = JSON.parse(event.data)
      console.log(message.error)
      if (message.error) {
        this.axios.get("http://127.0.0.1:8080/api/game", {headers: {"Authorization": `Bearer ${this.$cookies.get("token")}`}}).then((response) => {
          if (response.status === 200) {
            document.querySelector("#messageWS").style.left = "-0px"
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
      else {
        if (message.action === 0) {
          if (message.data.state === "preparing") {
            this.$router.push({name: "EnterForm"})
          }
          else if (message.data.state === "lobby") {
            this.state = 0
          }
          else if (message.data.state === "in_process") {
            this.axios.get("http://127.0.0.1:8080/api/game/passed", {headers: {"Authorization": `Bearer ${this.$cookies.get("token")}`}}).then((response) => {
              if (response.status === 200) {
                for (var station of response.data.stations) {
                  this.$refs.map.activate(station.svg_id)
                }
                this.score = response.data.score
                this.tickets = response.data.tickets
                this.train_fullness = response.data.train_fullness
              }
              else {
                this.$cookies.remove("token")
                this.$router.push({name : "EnterForm"})
              }

            }).catch((error) => {
              this.$cookies.remove("token")
              this.$router.push({name : "EnterForm"})
            })
            this.state = 1
          }
          else if (message.data.state === "end") {
            console.log("Finish game")
            this.state = 2
          }
        }
        else if (message.action === 1) {
          this.answerQuestion.show = false
        }
        else if (this.state === -1) {
          document.querySelector("#messageWS").style.left = "-0px"
        }
      }
    }

  },
  methods: {
    stationChoose: function(stations, station_name) {
      this.station_name = station_name

      this.stationChooseDialog.variants = []
      this.stationChooseDialog.variants_full = []


      for (var station of stations) {
        if (!this.$refs.map.check(station)) {
          continue;
        }
        this.stationChooseDialog.variants.push(station.slice(4).split("_")[0])
        this.stationChooseDialog.variants_full.push(station)
      }
      if (this.stationChooseDialog.variants.length === 1) {
        this.requestQuestion(this.stationChooseDialog.variants_full[0])
        return
      }
      if (this.stationChooseDialog.variants.length === 0) {
        return
      }
      this.stationChooseDialog.show = true
    },
    admin: function() {
      this.$router.push({name : 'auth'})
    },
    exitGame: function() {
      this.$cookies.remove("token")
      this.$router.push({name : 'EnterForm'})
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
      var station_id = this.stations.find((o) => o.svg_id === station).id
      this.axios.post("http://127.0.0.1:8080/api/game/question_get", {station_id: station_id},{headers: {"Authorization": `Bearer ${this.$cookies.get("token")}`}}).then((response) => {
        if (response.status === 208) {
          document.querySelector("#messageAlready").style.left = "-20px"
          setTimeout(() => document.querySelector("#messageAlready").style.left = "-540px", 5000)
          return
        }
        this.answerQuestion.show = true
        this.answerQuestion.text = response.data.text_question
        this.answerQuestion.station_name = this.station_name
        this.answerQuestion.showTimeout = setTimeout(() => {
          this.answerQuestion.show = false
          this.answerQuestion.answer = "NA"
          this.answer()
        }, 90000)
      }).catch((error) => {
        console.log(error)
      })
    },
    answer: function() {
      this.axios.post("http://127.0.0.1:8080/api/game/question", {text: this.answerQuestion.answer},{headers: {"Authorization": `Bearer ${this.$cookies.get("token")}`}}).then((response) => {
        this.answerQuestion.show = false
        this.answerQuestion.answer = ""
        if (response.status === 200) {
          if (response.data.verdict === "ok") {
            setTimeout(() => this.showCorrect = true, 500)
            setTimeout(() => this.showCorrect = false, 2500)
          }
          else {
            setTimeout(() => this.showFailure = true, 500)
            setTimeout(() => this.showFailure = false, 2500)
          }
          this.train_fullness = response.data.train_fullness
          this.score = response.data.score
          this.tickets = response.data.tickets

        }
        clearTimeout(this.answerQuestion.showTimeout)
      }).catch((error) => {
        console.log(error)
      })
    }
  }

}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;800&display=swap');
input[type="text"] {
  margin-top: 30px;
  outline: none;
  padding: 20px;
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  font-weight: normal;
  font-size: 18px;
  border: none;
  background: #FFFFFF;
  border: 1px solid #ECEAF3;
  border-radius: 18px;
  min-width: 400px;

}

input:required {
}
.correct h1 {
  padding: 60px 60px;
  padding-right: 80px;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 40px;
  font-family: 'Rubik Mono One', sans-serif;
  color: rgb(0, 163, 137);
  margin-bottom: 40px;
}

.failure h1 {
  padding: 60px 60px;
  padding-right: 80px;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 40px;
  font-family: 'Rubik Mono One', sans-serif;
  color: rgb(255, 91, 91);
  margin-bottom: 40px;
}

input[type="submit"] {
  margin-top: 30px;
  color: white;
  font-size: 16px;
  font-family: 'Rubik Mono One', sans-serif;
  font-weight: 700;
  padding: 20px 40px;
  background: #6225E6;
  border-radius: 18px;
  border: none;
}
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
.choose-dialog p {
  font-size: 28px;
  font-family: 'Roboto', sans-serif;
  font-weight: 800;
  color: black;

}
.choose-dialog img:last-child
{
  margin-right: 0px !important;
}

.score-info {
  z-index: 3;
  position: absolute;
  left: 20px;
  top: 20px;
  background-color:  #6225E6;
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: start;
  text-decoration: none;
  display: inline-block;
  font-size: 14px;
  font-family: 'Rubik Mono One', sans-serif;

}

.exitGame {
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
  margin-top: 100px;
  margin-left: 25px;
  transition: left 0.5s ease-in-out;
}
#messageAlready {
  margin-top: 100px;
  margin-left: 25px;
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

.success-checkmark {
  width: 80px;
  height: 115px;
  margin: 0 auto;
}
.success-checkmark .check-icon {
  width: 80px;
  height: 80px;
  position: relative;
  border-radius: 50%;
  box-sizing: content-box;
  border: 4px solid #4caf50;
}
.success-checkmark .check-icon::before {
  top: 3px;
  left: -2px;
  width: 30px;
  transform-origin: 100% 50%;
  border-radius: 100px 0 0 100px;
}
.success-checkmark .check-icon::after {
  top: 0;
  left: 30px;
  width: 60px;
  transform-origin: 0 50%;
  border-radius: 0 100px 100px 0;
  animation: rotate-circle 4.25s ease-in;
}
.success-checkmark .check-icon::before, .success-checkmark .check-icon::after {
  content: "";
  height: 100px;
  position: absolute;
  background: #ffffff;
  transform: rotate(-45deg);
}
.success-checkmark .check-icon .icon-line {
  height: 5px;
  background-color: rgb(0, 163, 137);
  display: block;
  border-radius: 2px;
  position: absolute;
  z-index: 10;
}
.success-checkmark .check-icon .icon-line.line-tip {
  top: 46px;
  left: 14px;
  width: 25px;
  transform: rotate(45deg);
  animation: icon-line-tip 0.75s;
}
.success-checkmark .check-icon .icon-line.line-long {
  top: 38px;
  right: 8px;
  width: 47px;
  transform: rotate(-45deg);
  animation: icon-line-long 0.75s;
}
.success-checkmark .check-icon .icon-circle {
  top: -4px;
  left: -4px;
  z-index: 10;
  width: 80px;
  height: 80px;
  border-radius: 50%;
  position: absolute;
  box-sizing: content-box;
  border: 4px solid rgba(0, 163, 137, 0.75);
}
.success-checkmark .check-icon .icon-fix {
  top: 8px;
  width: 5px;
  left: 26px;
  z-index: 1;
  height: 85px;
  position: absolute;
  transform: rotate(-45deg);
  background-color: #ffffff;
}

@keyframes rotate-circle {
  0% {
    transform: rotate(-45deg);
  }
  5% {
    transform: rotate(-45deg);
  }
  12% {
    transform: rotate(-405deg);
  }
  100% {
    transform: rotate(-405deg);
  }
}
@keyframes icon-line-tip {
  0% {
    width: 0;
    left: 1px;
    top: 19px;
  }
  54% {
    width: 0;
    left: 1px;
    top: 19px;
  }
  70% {
    width: 50px;
    left: -8px;
    top: 37px;
  }
  84% {
    width: 17px;
    left: 21px;
    top: 48px;
  }
  100% {
    width: 25px;
    left: 14px;
    top: 45px;
  }
}
@keyframes icon-line-long {
  0% {
    width: 0;
    right: 46px;
    top: 54px;
  }
  65% {
    width: 0;
    right: 46px;
    top: 54px;
  }
  84% {
    width: 55px;
    right: 0px;
    top: 35px;
  }
  100% {
    width: 47px;
    right: 8px;
    top: 38px;
  }
}

.fail-icon {
  animation-timing-function: ease-in;
  animation: fail-icon-rotate 0.5s;
  animation-delay: 0.1s;
}
@keyframes fail-icon-rotate {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(270deg);
  }
}

</style>
