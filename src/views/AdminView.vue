<template>
  <div>
    <h1>後台頁面</h1>
    <nav>
      <RouterLink to="/admin/product">產品管理</RouterLink> |
      <RouterLink to="/admin/order">訂單管理</RouterLink> |
      <RouterLink to="/">前台頁面</RouterLink>
    </nav>
  </div>
  <RouterView></RouterView>
</template>

<script>
import axios from 'axios'

const { VITE_URL } = import.meta.env

export default {
  data () {
    return {}
  },
  methods: {
    checkAdmin () {
      const url = `${VITE_URL}/api/user/check`
      axios.post(url)
        .then((res) => {
          console.log('驗證成功', res.data)
        })
        .catch((err) => {
          alert(err.data.message)
          this.$router.push('/login')
        })
    }
  },
  mounted () {
    const token = document.cookie.replace(/(?:(?:^|.*;\s*)hexToken\s*=\s*([^;]*).*$)|^.*$/, '$1')
    if (!token) {
      this.$router.push('/login')
      console.log('請先登入')
    } else {
      console.log('已登入')
    }
    axios.defaults.headers.common.Authorization = token
    this.checkAdmin()
  }
}
</script>
