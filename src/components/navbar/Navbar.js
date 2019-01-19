
export default {
  name: 'Navbar',
  data () {
    return {
      drawer: false,
      links: [
        { icon: 'fa fa-dashboard', text: 'Dashboard', route: '/' },
        { icon: 'fa fa-pencil', text: 'Quiz', route: '/quiz' },
        { icon: 'fa fa-money', text: 'Rank', route: '/rank' },
        { icon: 'fa fa-paperclip', text: 'Material', route: '/material' }
      ]
    }
  }
}
