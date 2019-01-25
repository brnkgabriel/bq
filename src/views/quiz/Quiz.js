
import beforeRouteEnter from '../../util/beforeRouteEnter'
import all from '../../util/all'
import quizUtil from '../../util/quiz-util'
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
    all.utilities.userAndMat.call(this)
    all.utilities.fetchMaterials()
    this.selectedMaterial = this.materials[0]
    bus.$on('incomingMaterials', () => {
      all.utilities.userAndMat.bind(this)
      this.selectedMaterial = this.materials[0]
    })
    console.log('selected materials', this.selectedMaterial)
  },
  computed: {
    sortedMaterials: function () {
      var materials = []
      all.timelineNos.forEach(timelineNo => {
        this.materials
          .filter(mat => quizUtil.text2No(mat.time) === timelineNo)
          .forEach(mat => materials.push(mat))
      })
      return materials
    }
  },
  methods: {
    sortMaterials: function () {
      var materials = []
      for (var i = 0; i < all.utilities.timelineNumbers.length; i++) {
        var filtered = this.materials.filter(mat => {
          return quizUtil.convert2No(mat.time) === all.utilities.timelineNumbers[i]
        })
        filtered.forEach(mat => materials.push(mat))
      }
      return materials
    },
    selectMaterial: function (material) {
      this.dialog = true
      this.selectedMaterial = material
    }
  },
  beforeRouteEnter: beforeRouteEnter
}
