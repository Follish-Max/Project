<template>
  <transition name="slide">
    <music-list :title="title" :bg-image="bgImage" :songs="songs"></music-list>
  </transition>
</template>

<script type="text/ecmascript-6">
import {mapGetters} from 'vuex'
import {getSingerDetail, getSongvKey} from 'api/singer'
import {ERR_OK} from 'api/config'
import {createSong} from 'common/js/song'
import MusicList from 'components/music-list/music-list'

export default {
  data () {
    return {
      songs: []
    }
  },
  computed: {
    title() {
      return this.singer.name
    },
    bgImage() {
      return this.singer.avatar
    },
    ...mapGetters([
      'singer'
    ])
  },
  created() {
    this._getDetail()
    // console.log(this.singer)
  },
  methods: {
    _getDetail() {
      if (!this.singer.id) {
        this.$router.push('/singer')
        return
      }
      getSingerDetail(this.singer.id).then((res) => {
        if (res.code === ERR_OK) {
          // console.log(res.data.list)
          this.songs = this._normalizeSongs(res.data.list)
          // console.log(this.songs)
        }
      })
    },
    _normalizeSongs(list) {
      let ret = []
      list.forEach((item) => {
        let {musicData} = item
        // console.log(musicData)
        getSongvKey(musicData.songmid).then((res) => {
          // console.log(res.req_0.data.midurlinfo[0].purl)
          // console.log(res.req.data.vkey)
          // console.log(res)
          // const vkey = res.req.data.vkey
          if (res.req_0.data.midurlinfo[0].purl) {
            const vkey = res.req_0.data.midurlinfo[0].purl
            // console.log(vkey)
            if (musicData.songid && musicData.albummid) {
              ret.push(createSong(musicData, vkey))
              // console.log(vkey.length)
            }
          }
          // console.log(ret)
        })
      })
      return ret
    }
  },
  components: {
    MusicList
  }
}
</script>
<style scoped lang="stylus" rel="stylesheet/stylus">
  .slide-enter-active,.slide-leave-active
    // transition: all .4s
    transition: all 0.4s cubic-bezier(0.86, 0.18, 0.82, 1.32)

  .slide-enter, .slide-leave-to
    transform: translate3d(100%, 0, 0)
</style>
