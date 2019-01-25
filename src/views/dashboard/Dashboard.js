import beforeRouteEnter from '../../util/beforeRouteEnter'
import all from '../../util/all'
import { bus } from '../../main'

export default {
  data () {
    return {
      materials: [],
      user: null
    }
  },
  created () {
    all.utilities.userAndMat.call(this)
    all.utilities.fetchMaterials()
    bus.$on('incomingMaterials', () => {
      all.utilities.userAndMat.bind(this)
    })
  },
  computed: {
    totalPts: function () {
      return all.utilities.totalPts(this.user.scores, this.materials)
    },
    age: function () {
      return all.utilities.age(this.user.birthday, all.utilities.today)
    },
    totalAggregate: function () {
      return all.utilities.aggregate(
        this.user.scores, this.materials, this.user.birthday
      )
    }
  },
  beforeRouteEnter: beforeRouteEnter
}
