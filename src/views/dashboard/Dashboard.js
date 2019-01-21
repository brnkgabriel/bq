import beforeRouteEnter from '../../util/beforeRouteEnter'
import all from '../../util/all'
import { bus } from '../../main'

export default {
  data () {
    return {
      materials: [],
      email: null,
      first_name: null,
      last_name: null,
      roles_permissions: null,
      uid: null,
      birthday: null,
      scores: [],
      state: {}
    }
  },
  created () {
    all.utilities.studAndMat.call(this)
    all.utilities.fetchMaterials()
    bus.$on('incomingMaterials', () => {
      all.utilities.studAndMat.bind(this)
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
