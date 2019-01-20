export default {
  data () {
    return {
      email: 'brnkgabriel@gmail.com',
      first_name: 'Olanrewaju',
      last_name: 'Ibironke',
      roles_permissions: {
        role: 'student'
      },
      uid: '1234',
      birthday: '10/31/1990',
      scores: [],
      state: {}
    }
  },
  created () {
    console.log('this is', this)
  }
}
