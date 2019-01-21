import firebase from 'firebase/app'
import 'firebase/auth'
import { bus } from '../../main'

export default {
  name: 'Navbar',
  data () {
    return {
      drawer: false,
      isLoggedIn: false,
      user: null,
      page: 'Home',
      links: [
        { icon: 'fa fa-dashboard', text: 'Dashboard', route: '/' },
        { icon: 'fa fa-pencil', text: 'Quiz', route: '/quiz' },
        { icon: 'fa fa-money', text: 'Rank', route: '/rank' },
        { icon: 'fa fa-paperclip', text: 'Materials', route: '/materials' }
      ]
    }
  },
  created () {
    this.user = JSON.parse(localStorage.getItem('user'))
    this.isLoggedIn = !!localStorage.getItem('user')

    bus.$on('isLoggedIn', user => {
      this.isLoggedIn = !!user
      this.user = user
    })
  },
  methods: {
    setPage: function (page) {
      this.page = page
    },
    logout: function () {
      firebase.auth().signOut()
        .then(() => {
          this.$store.commit('removeUser')
          this.isLoggedIn = false
          this.$router.push('/login')
        })
    }
  }
}
