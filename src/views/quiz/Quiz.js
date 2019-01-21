import beforeRouteEnter from '../../util/beforeRouteEnter'
import all from '../../util/all'
import { bus } from '../../main'

export default {
  data () {
    return {
      user: null,
      materials: []
    }
  },
  created () {
    all.utilities.studAndMat.call(this)
    all.utilities.fetchMaterials()
    bus.$on('incomingMaterials', () => {
      all.utilities.studAndMat.bind(this)
    })
    console.log('this.materials is', this.materials)
  },
  beforeRouteEnter: beforeRouteEnter
}
