<template>
  <transition name="slide">
    <music-list :title="title" :bg-image="bgImage" :songs="songs"></music-list>
  </transition>
</template>

<script type="text/ecmascript-6">
import MusicList from 'components/music-list/music-list'
import {mapGetters} from 'vuex'
import {getSongList} from 'api/recommend'
import {ERR_OK} from 'api/config'
import {createSong} from 'common/js/song'
import {getSingerDetail, getSongvKey} from 'api/singer'

export default {
  data() {
    return {
      songs: []
    }
  },
  computed: {
    title() {
      return this.disc.dissname
    },
    bgImage() {
      return this.disc.imgurl
    },
    ...mapGetters([
      'disc'
    ])
  },
  created() {
    this._getSongList()
  },
  methods: {
    _getSongList() {
      if (!this.disc.dissid) {
        this.$router.push('/recommend')
        return
      }
      getSongList(this.disc.dissid).then((res) => {
        // console.log(this.disc.imgurl)
        if (res.code === ERR_OK) {
          // console.log(res.cdlist[0].songlist)
          this.songs = this._normalizeSongs(res.cdlist[0].songlist)
        }
      })
    },
    _normalizeSongs(list) {
      let ret = []
      // console.log(list)
      list.forEach((item) => {
        // console.log(item)
        getSongvKey(item.songmid).then((res) => {
          // console.log(res.req_0.data.midurlinfo[0].purl)
          // console.log(res.req.data.vkey)
          // console.log(res)
          // const vkey = res.req.data.vkey
          if (res.req_0.data.midurlinfo[0].purl) {
            const vkey = res.req_0.data.midurlinfo[0].purl
            // console.log(vkey)
            if (item.songid && item.albummid) {
              ret.push(createSong(item, vkey))
              // console.log(vkey.length)
            }
          }
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
  .slide-enter-active, .slide-leave-active
    transition: all 0.3s

  .slide-enter, .slide-leave-to
    transform: translate3d(100%, 0, 0)
</style>
