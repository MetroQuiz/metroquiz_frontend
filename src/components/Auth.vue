<template>
  <form @submit="onSubmit($event)">
    <div class="row">
      <img alt="logo" id="logo"  src="../assets/icon.svg">
      <div style="display: flex; flex-direction: column; justify-content: center">
        <h1>Metroquiz</h1>
        <h2>Educational quiz about Moscow subway</h2>
      </div>
    </div>
    <input v-model="form.email" type="email" placeholder="Email" required>
    <input v-model="form.password" type="password" placeholder="Password" required>
    <div class="row" style="justify-content: space-between; max-width: 600px">
      <input type="submit" value="Login" style="margin-right: 100px">
    </div>
  </form>
</template>


<script>
export default {
  name: "Auth",
  data() {
    return {
      form: {
        email: '',
        password: ''
      },
      show: false,
    }
  },
  created() {
    if (this.$cookies.isKey("admin_token")) {
      this.axios.get("http://127.0.0.1:8080/api/auth/me",  {headers : {"Authorization": `Bearer ${this.$cookies.get("admin_token")}`}}).then((response) => {
        if (response.status === 200) {
          this.$router.push({name: "admin"})
        }
      }).catch((error) => {
        console.log(error)
        this.$cookies.remove("admin_token")
      })
    }
  },
  methods: {
    onSubmit(event) {
      event.preventDefault()
      this.axios.post("http://127.0.0.1:8080/api/auth/login", this.qs.stringify({email: this.form.email, password: this.form.password}), {}).then((response) => {
        if (response.status == 200) {
          this.$cookies.set("admin_token", response.data.accessToken)
          this.$router.push({name: "admin"})
        }
        else {
          this.show = true
        }
      }).catch((error) => {
        this.show = true
        console.log(error)
      })

    }
  }
}
</script>
<style scoped>
.row {
  display: flex;
}


#logo {
  padding-right: 15px;
}


form {
  background: #F9F9F9;
  border-radius: 24px;
  padding: 44px;
  min-width: 400px;
  display: flex;
  flex-direction: column;
}



h1 {
  font-family: 'Poppins', sans-serif;
  font-weight: 900;
  font-size: 26px;
  margin: 0;
}

h2 {
  font-family: 'Poppins', sans-serif;
  font-weight: 400;
  font-size: 12px;
  margin: 0;
  line-height: 18px;
  color: #A3A3A3;
}

input[type="text"], input[type="password"], input[type="email"] {
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
  min-width: 400px;

}

input:required {
}

input[type="submit"] {
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

button {
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


a {
  color: inherit;
  text-decoration: inherit;
}

</style>
