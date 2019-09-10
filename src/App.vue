<template lang="pug">
  #app.parent
    //- img(alt="Vue logo" src="./assets/logo.png")
    //- <HelloWorld msg="Welcome to Your Vue.js App"/>
    h1 AFRIZAL DANIEN ANDRIYANTO
    #job
      h3 SOFTWARE ENGINEER
      h3 FULL-STACK WEB DEVELOPER
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'app',
  components: {
    HelloWorld
  }
}
</script>
<style lang="stylus">
@import url('https://fonts.googleapis.com/css?family=Montserrat|Rubik&display=swap')
#app
  font-family: 'Montserrat', 'Rubik',sans-serif
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  text-align center
  height: 100%

.parent
  display flex
  flex-direction column
  justify-content center
  align-items center

body
  background: rgb(14,0,15)
  background: linear-gradient(180deg, rgba(14,0,15,1) 0%, rgba(18,0,25,1) 56%, rgba(75,0,40,1) 100%)
  height: 100vh

p
  font-family: 'Montserrat', sans-serif
  color rgb(255,255,255)

h1, h2, h3, h4, h5
  font-family: 'Rubik',sans-serif
  font-weight: 600
  color rgb(255,255,255)
</style>
