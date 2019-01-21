import { bus } from '../../main'
import firebase from 'firebase/app'
import 'firebase/auth'

export default {
  data () {
    return {
      email: null,
      password: null,
      interval: null
    }
  },
  methods: {
    login: function (evt) {
      evt.preventDefault()
      firebase.auth().signInWithEmailAndPassword(this.email, this.password)
        .then(credential => {
          this.$store.dispatch('getUser', { uid: credential.user.uid })
          this.interval = setInterval(this.checkuser, 10)
        }).catch(err => console.log(err))
    },
    checkuser: function () {
      console.log('inside checkuser')
      if (this.$store.state.user) {
        bus.$emit('isLoggedIn', this.$store.state.user)
        this.$router.push('/')
        clearInterval(this.interval)
      }
    }
  }
}
