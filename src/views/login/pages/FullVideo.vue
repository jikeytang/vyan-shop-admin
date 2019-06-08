<template>
  <div class="login-video" @click.stop="changeVideo" @contextmenu.stop="changeMusic">
    <video ref="mitVideo" autoplay="autoplay" muted="muted" loop="loop" class="mit-video" />
    <point :video-length="videoList.length" :video-index="videoIndex" @change="updateVideo" />
  </div>
</template>

<script>
import Point from './Point'

const jscss = 'http://www.jscss.me/Public/blog/media/'

export default {
  name: 'FullVideo',
  components: {
    Point
  },
  data () {
    return {
      video: null,
      videoList: [`${jscss}jing.mp4`, `${jscss}gril.mp4`, `${jscss}mountain.mp4`],
      videoIndex: 0
    }
  },
  mounted () {
    this.initVideo()
  },
  methods: {
    changeVideo () {
      const _index = this.videoIndex >= this.videoList.length - 1 ? this.videoIndex = 0 : ++this.videoIndex
      this.initVideo(_index)
    },
    initVideo (i = 0) {
      this.video = this.$refs.mitVideo
      this.video.src = this.videoList[i]
    },
    changeMusic (e) {
      this.video.muted = !this.video.muted
      e.preventDefault()
    },
    updateVideo (index) {
      this.initVideo(index)
      this.videoIndex = index
    }
  }
}
</script>

<style lang="scss">
#app {
  .login-video{
    background: #000;
    height: 100vh;
    overflow: hidden;
    position: relative;
    z-index: 1;
    .mit-video{
      width: 100vw;
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%,-50%);
    }
  }
}
</style>
