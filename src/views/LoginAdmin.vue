<template>
  <div>
    <h2>登入頁面</h2>
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-8">
          <form id="form" class="form-signin" @submit.prevent="login">
            <div class="form-floating mb-3">
              <input type="email" class="form-control" id="username" placeholder="name@example.com" required autofocus
                v-model="user.username" />
              <label for="username">Email address</label>
            </div>
            <div class="form-floating">
              <input type="password" class="form-control" id="password" placeholder="Password" required
                v-model="user.password" />
              <label for="password">Password</label>
            </div>
            <br>
            <button type="button" class="btn btn-lg btn-primary w-100 mt-3" @click="login()">
              登入
            </button>
          </form>
        </div>
      </div>
      <p class="mt-5 mb-3 text-muted">&copy; 2024~∞ - 六角學院</p>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

const { VITE_URL } = import.meta.env

export default {
  data () {
    return {
      apiUrl: `${VITE_URL}`,
      user: {
        username: '',
        password: ''
      }
    }
  },
  methods: {
    login () {
      const api = `${this.apiUrl}/admin/signin`

      axios.post(api, this.user)
        .then((res) => {
          console.log('燈入成功', res.data)
          const { token, expired } = res.data
          document.cookie = `hexToken=${token};expires=${new Date(expired)}; path=/`
          this.$router.push('/admin/product')
        }).catch((err) => {
          console.log('登入失敗' + err.data.message)
        })
    }
  }
}

</script>
