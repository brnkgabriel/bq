import beforeRouteEnter from '../../util/beforeRouteEnter'
import all from '../../util/all'
import { bus } from '../../main'

export default {
  data () {
    return {
      search: '',
      headers: [
        {
          text: 'Avatar',
          value: 'avatar'
        },
        {
          text: 'Title',
          value: 'title'
        },
        {
          text: 'Author',
          value: 'author'
        },
        {
          text: 'Time',
          value: 'time'
        },
        {
          text: 'Type',
          value: 'type'
        },
        {
          text: 'Action',
          value: ''
        }
      ],
      user: null,
      materials: [],
      dialog: false,
      selected: [],
      selectedMaterial: null
    }
  },
  created () {
    all.utilities.userAndMat.call(this)
    all.utilities.fetchMaterials()
    this.selectedMaterial = this.materials[0]
    bus.$on('incomingMaterials', () => {
      all.utilities.userAndMat.bind(this)
      this.selectedMaterial = this.materials[0]
    })
  },
  beforeRouteEnter: beforeRouteEnter
}
