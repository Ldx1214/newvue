<template>
  <div class="hello">
      1111
 </div>
</template>

<script>
export default {
  name: 'SmartHome',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
.img{
  display: inline-block;
  width: 12px;
  height: 12px;
  background: url(/../images/top_03.png) no-repeat center;
  background-size: contain;
  margin-left: 5px;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: black;
}
.menu_li_c{
  position: absolute;
  left: 0px;
  top: 60px;
  padding: 10px 0;
  display: block;
}
a{
  text-decoration:none;
}
b{
  width: 32px;
  height: 4px;
  display: block;
  overflow: hidden;
  background-color: #f5a21b;
  position: absolute;
  left: 0px;
  bottom: 0px;
  display: none;
}
.img{
  background: url(/images/top_04.png) no-repeat center;
}
</style>
