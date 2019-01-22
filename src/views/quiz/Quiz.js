
import beforeRouteEnter from '../../util/beforeRouteEnter'
import all from '../../util/all'
import { bus } from '../../main'

export default {
  data () {
    return {
      user: null,
      materials: [],
      dialog: false,
      selectedMaterial: null
    }
  },
  created () {
    all.utilities.studAndMat.call(this)
    all.utilities.fetchMaterials()
    this.selectedMaterial = this.materials[0]
    bus.$on('incomingMaterials', () => {
      all.utilities.studAndMat.bind(this)
      this.selectedMaterial = this.materials[0]
    })
    console.log('selected materials', this.selectedMaterial)
  },
  methods: {
    selectMaterial: function (material) {
      this.dialog = true
      this.selectedMaterial = material
    },
    deselectMaterial: function () {
      this.dialog = false
      this.selectedMaterial = null
    }
  },
  beforeRouteEnter: beforeRouteEnter
}
