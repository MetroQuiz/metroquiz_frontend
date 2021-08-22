<template>
  <div id="enter_view">
    <div class="bg"></div>
    <div class="bg bg2"></div>
    <div class="bg bg3"></div>
    <div class="content" id="enter_form">
      <h1 class="pin_message" v-bind:style="!tried ? {'color' : 'white'} : {'color' : '#FF5A5A'}">{{message}}</h1>
      <a class="cta" href="#">
        <span class="form_item">
          <input placeholder="1234-1234" v-model="pincode" @keypress="pinChanged" @keydown.delete="pinChanged">
        </span>
        <span style="margin-left: 5% !important;">
        <svg @click="submit()" width="66px" height="43px" viewBox="0 0 66 43" version="1.1" xmlns="http://www.w3.org/2000/svg"
             xmlns:xlink="http://www.w3.org/1999/xlink">
          <g id="arrow" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" >
            <path class="one"
                  d="M40.1543933,3.89485454 L43.9763149,0.139296592 C44.1708311,-0.0518420739 44.4826329,-0.0518571125 44.6771675,0.139262789 L65.6916134,20.7848311 C66.0855801,21.1718824 66.0911863,21.8050225 65.704135,22.1989893 C65.7000188,22.2031791 65.6958657,22.2073326 65.6916762,22.2114492 L44.677098,42.8607841 C44.4825957,43.0519059 44.1708242,43.0519358 43.9762853,42.8608513 L40.1545186,39.1069479 C39.9575152,38.9134427 39.9546793,38.5968729 40.1481845,38.3998695 C40.1502893,38.3977268 40.1524132,38.395603 40.1545562,38.3934985 L56.9937789,21.8567812 C57.1908028,21.6632968 57.193672,21.3467273 57.0001876,21.1497035 C56.9980647,21.1475418 56.9959223,21.1453995 56.9937605,21.1432767 L40.1545208,4.60825197 C39.9574869,4.41477773 39.9546013,4.09820839 40.1480756,3.90117456 C40.1501626,3.89904911 40.1522686,3.89694235 40.1543933,3.89485454 Z"
                  fill="#FFFFFF"></path>
            <path class="two"
                  d="M20.1543933,3.89485454 L23.9763149,0.139296592 C24.1708311,-0.0518420739 24.4826329,-0.0518571125 24.6771675,0.139262789 L45.6916134,20.7848311 C46.0855801,21.1718824 46.0911863,21.8050225 45.704135,22.1989893 C45.7000188,22.2031791 45.6958657,22.2073326 45.6916762,22.2114492 L24.677098,42.8607841 C24.4825957,43.0519059 24.1708242,43.0519358 23.9762853,42.8608513 L20.1545186,39.1069479 C19.9575152,38.9134427 19.9546793,38.5968729 20.1481845,38.3998695 C20.1502893,38.3977268 20.1524132,38.395603 20.1545562,38.3934985 L36.9937789,21.8567812 C37.1908028,21.6632968 37.193672,21.3467273 37.0001876,21.1497035 C36.9980647,21.1475418 36.9959223,21.1453995 36.9937605,21.1432767 L20.1545208,4.60825197 C19.9574869,4.41477773 19.9546013,4.09820839 20.1480756,3.90117456 C20.1501626,3.89904911 20.1522686,3.89694235 20.1543933,3.89485454 Z"
                  fill="#FFFFFF"></path>
            <path class="three"
                  d="M0.154393339,3.89485454 L3.97631488,0.139296592 C4.17083111,-0.0518420739 4.48263286,-0.0518571125 4.67716753,0.139262789 L25.6916134,20.7848311 C26.0855801,21.1718824 26.0911863,21.8050225 25.704135,22.1989893 C25.7000188,22.2031791 25.6958657,22.2073326 25.6916762,22.2114492 L4.67709797,42.8607841 C4.48259567,43.0519059 4.17082418,43.0519358 3.97628526,42.8608513 L0.154518591,39.1069479 C-0.0424848215,38.9134427 -0.0453206733,38.5968729 0.148184538,38.3998695 C0.150289256,38.3977268 0.152413239,38.395603 0.154556228,38.3934985 L16.9937789,21.8567812 C17.1908028,21.6632968 17.193672,21.3467273 17.0001876,21.1497035 C16.9980647,21.1475418 16.9959223,21.1453995 16.9937605,21.1432767 L0.15452076,4.60825197 C-0.0425130651,4.41477773 -0.0453986756,4.09820839 0.148075568,3.90117456 C0.150162624,3.89904911 0.152268631,3.89694235 0.154393339,3.89485454 Z"
                  fill="#FFFFFF"></path>
          </g>
        </svg>
      </span>
      </a>
      <a class="cta cta2" href="#">
        <span class="form_item">
          <input placeholder="Type name" v-model="name" >
        </span>
        <span style="margin-left: 8% !important;">
        <svg @click="submit()" width="66px" height="43px" viewBox="0 0 66 43" version="1.1" xmlns="http://www.w3.org/2000/svg"
             xmlns:xlink="http://www.w3.org/1999/xlink">
          <g id="arrow" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" >
            <path class="one"
                  d="M40.1543933,3.89485454 L43.9763149,0.139296592 C44.1708311,-0.0518420739 44.4826329,-0.0518571125 44.6771675,0.139262789 L65.6916134,20.7848311 C66.0855801,21.1718824 66.0911863,21.8050225 65.704135,22.1989893 C65.7000188,22.2031791 65.6958657,22.2073326 65.6916762,22.2114492 L44.677098,42.8607841 C44.4825957,43.0519059 44.1708242,43.0519358 43.9762853,42.8608513 L40.1545186,39.1069479 C39.9575152,38.9134427 39.9546793,38.5968729 40.1481845,38.3998695 C40.1502893,38.3977268 40.1524132,38.395603 40.1545562,38.3934985 L56.9937789,21.8567812 C57.1908028,21.6632968 57.193672,21.3467273 57.0001876,21.1497035 C56.9980647,21.1475418 56.9959223,21.1453995 56.9937605,21.1432767 L40.1545208,4.60825197 C39.9574869,4.41477773 39.9546013,4.09820839 40.1480756,3.90117456 C40.1501626,3.89904911 40.1522686,3.89694235 40.1543933,3.89485454 Z"
                  fill="#FFFFFF"></path>
            <path class="two"
                  d="M20.1543933,3.89485454 L23.9763149,0.139296592 C24.1708311,-0.0518420739 24.4826329,-0.0518571125 24.6771675,0.139262789 L45.6916134,20.7848311 C46.0855801,21.1718824 46.0911863,21.8050225 45.704135,22.1989893 C45.7000188,22.2031791 45.6958657,22.2073326 45.6916762,22.2114492 L24.677098,42.8607841 C24.4825957,43.0519059 24.1708242,43.0519358 23.9762853,42.8608513 L20.1545186,39.1069479 C19.9575152,38.9134427 19.9546793,38.5968729 20.1481845,38.3998695 C20.1502893,38.3977268 20.1524132,38.395603 20.1545562,38.3934985 L36.9937789,21.8567812 C37.1908028,21.6632968 37.193672,21.3467273 37.0001876,21.1497035 C36.9980647,21.1475418 36.9959223,21.1453995 36.9937605,21.1432767 L20.1545208,4.60825197 C19.9574869,4.41477773 19.9546013,4.09820839 20.1480756,3.90117456 C20.1501626,3.89904911 20.1522686,3.89694235 20.1543933,3.89485454 Z"
                  fill="#FFFFFF"></path>
            <path class="three"
                  d="M0.154393339,3.89485454 L3.97631488,0.139296592 C4.17083111,-0.0518420739 4.48263286,-0.0518571125 4.67716753,0.139262789 L25.6916134,20.7848311 C26.0855801,21.1718824 26.0911863,21.8050225 25.704135,22.1989893 C25.7000188,22.2031791 25.6958657,22.2073326 25.6916762,22.2114492 L4.67709797,42.8607841 C4.48259567,43.0519059 4.17082418,43.0519358 3.97628526,42.8608513 L0.154518591,39.1069479 C-0.0424848215,38.9134427 -0.0453206733,38.5968729 0.148184538,38.3998695 C0.150289256,38.3977268 0.152413239,38.395603 0.154556228,38.3934985 L16.9937789,21.8567812 C17.1908028,21.6632968 17.193672,21.3467273 17.0001876,21.1497035 C16.9980647,21.1475418 16.9959223,21.1453995 16.9937605,21.1432767 L0.15452076,4.60825197 C-0.0425130651,4.41477773 -0.0453986756,4.09820839 0.148075568,3.90117456 C0.150162624,3.89904911 0.152268631,3.89694235 0.154393339,3.89485454 Z"
                  fill="#FFFFFF"></path>
          </g>
        </svg>
      </span>
      </a>
    </div>
    <button class="admin" v-on:click="admin()">Entrance for teachers</button>
  </div>

</template>


<script>
export default {
  name: 'EnterForm',
  data:() => ({
    pincode: '',
    message: 'Enter your nickname & gamepin',
    tried: false,
    name: ''
  }),
  mounted() {
    if (this.$cookies.isKey("token")) {
      this.axios.get("http://127.0.0.1:8080/api/game", {headers: {"Authorization": `Bearer ${this.$cookies.get("token")}`}}).then((response) => {
        if (response.status === 200) {
          this.$router.push({ name: 'game'})
        }
        else {
          this.$cookies.remove("token")
        }
      }).catch((error) => {
        console.log(error)
        this.$cookies.remove("token")
      })
    }
    var input = document.querySelectorAll('input');
    for(var i=0; i<input.length; i++){
      input[i].setAttribute('size',input[i].getAttribute('placeholder').length);
    }
  },
  methods: {
    admin: function() {
      this.$router.push({name : 'auth'})
    },
    pinChanged: function ($event) {
      var keyCode = ($event.keyCode ? $event.keyCode : $event.which);
      if (!(keyCode > 47 && keyCode < 58) && !(keyCode === 8)) {
        $event.preventDefault();
      }
      else if (keyCode === 8 && $event.target.value.length === 6) {
        $event.target.value = $event.target.value.slice(0, -1)
      }
      else if (keyCode > 47 && keyCode < 58 && $event.target.value.length === 4) {
        $event.target.value = $event.target.value + "-";
      }
      else if (keyCode > 47 && keyCode < 58 && $event.target.value.length === 8) {
        if (name === "") {
          return
        }
      }
      else if (keyCode > 47 && keyCode < 58 && $event.target.value.length === 9) {
        $event.preventDefault()
      }
    },
    submit() {
      if (this.name.length >= 4 && this.pincode.length === 9) {
        this.axios.post("http://127.0.0.1:8080/api/enter", this.qs.stringify({pin: this.pincode.slice(0, 4) + this.pincode.slice(5, 9), name: this.name})).then((response) => {
          if (response.status === 200) {
            this.$cookies.set("token", response.data.token)
            this.$router.push({ name: 'game'})
          }
          else if (response.status === 208) {
            this.message = "You are too early. The game has not started yet"
            this.tried = true
          }
          else if (response.status === 409) {
            this.message = "This nickname is already in use"
            this.tried = true
          }
        }).catch((error) => {
          if (error.response.status === 409) {
            this.message = "This nickname is already in use"
            this.tried = true
          }
          else {
            this.message = "Wrong gamepin"
            this.tried = true
          }
        })
      }
    }
  },
}
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.pin_message {
  margin-left: 25px;
  font-family: 'Rubik Mono One', sans-serif;
  color: white;
  font-size: 25px;
  margin-bottom: 15px;
}
.admin {
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

.content {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
}

.cta {
  font-family: 'Rubik Mono One', sans-serif;
  box-sizing: border-box;
  width: 100%;
  display: flex;
  padding-top: 10px;
  padding-bottom: 10px;
  text-decoration: none;
  font-size: 40px;
  color: white;
  background: #6225E6;
  transition: 1s;
  box-shadow: 6px 6px 0 black;
  align-content: center;
  transform: skewX(-15deg);
}

.cta2 {
  margin-top: 25px;
  margin-left: -20px;
}

.cta:focus {
  outline: none;
}

.cta:hover {
  transition: 0.5s;
  box-shadow: 10px 10px 0 #FBC638;
}

.cta span:nth-child(2) {
  transition: 0.5s;
  margin-right: 0px;
}

.cta:hover span:nth-child(2) {
  transition: 0.5s;
  margin-right: 45px;
}

.form_item {
  margin-left: 25%;
}

@media screen and (max-width: 950px) {
  .cta {
    font-family: 'Rubik Mono One', sans-serif;
    box-sizing: border-box;
    width: 80%;
    display: flex;
    paddin-top: 10px;
    padding-bottom: 10px;
    padding-left: 60px;
    padding-right: 100px;
    text-decoration: none;
    align-items: center;
    font-size: 40px;
    color: white;
    background: #6225E6;
    transition: 1s;
    box-shadow: 6px 6px 0 black;
    transform: skewX(-15deg);
    vertical-align: center;
    margin-left: 10%;
  }
  .cta2 {
    margin-top: 25px;
    margin-left: 30px;
  }
  .form_item {
    margin-left: -20px !important;
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

#enter_view {
  background: transparent;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

* {
  box-sizing: border-box;
}


.wrapper {
  display: flex;
  justify-content: center;
}

span {
  margin-top: 5px;
  transform: skewX(15deg);
}

span:nth-child(2) {
  width: 20px;
  margin-left: 30px;
  position: relative;
  top: 12%;
}

/**************SVG****************/

path.one {
  transition: 0.4s;
  transform: translateX(-60%);
}

path.two {
  transition: 0.5s;
  transform: translateX(-30%);
}

.cta:hover path.three {
  animation: color_anim 1s infinite 0.2s;
}

.cta:hover path.one {
  transform: translateX(0%);
  animation: color_anim 1s infinite 0.6s;
}

.cta:hover path.two {
  transform: translateX(0%);
  animation: color_anim 1s infinite 0.4s;
}

/* SVG animations */

@keyframes color_anim {
  0% {
    fill: white;
  }
  50% {
    fill: #FBC638;
  }
  100% {
    fill: white;
  }
}

input {
  font-size: 32px;
  font-family: 'Rubik Mono One', sans-serif;
  color: white;
  background: transparent;
  border-color: transparent;
}
::placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */
  color: white;
  opacity: 0.7; /* Firefox */
}

:-ms-input-placeholder { /* Internet Explorer 10-11 */
  color: white;
}

::-ms-input-placeholder { /* Microsoft Edge */
  color: white;
}

</style>
