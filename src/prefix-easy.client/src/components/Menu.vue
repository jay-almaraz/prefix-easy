<template>
  <div class="menu-container">
    <div class="menu-item"><router-link to="/">Home</router-link></div>
    <div class="menu-item"><router-link to="/AboutMe">About Me</router-link></div>
    <div class="menu-item"><router-link to="/Photography">Photography</router-link></div>
    <div class="menu-item"><router-link to="/Design">Design</router-link></div>
    <div class="menu-item"><router-link to="/Contact">Contact</router-link></div>
  </div>
</template>

<script>
export default {
  name: 'Menu',
};
</script>

<style lang="scss">
$menu-height: 56px;

.menu-container {
  position: absolute;
  width: 100%;
  margin-top: $menu-height;
  height: $menu-height;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}

$item-margin: 19px;
.menu-item {
  margin-left: $item-margin;
  margin-right: $item-margin;
  color: #282828;
  font-size: 0.7em;
  font-style: normal;
  font-weight: lighter;
  // text-transform: uppercase;
  letter-spacing: 2px;
}

.menu-item>a{
  color: #282828;
  text-decoration: none;
}

.menu-item>a:visited {
  color: #282828;
}

.menu-item>a:hover {
  color: #524a4a;
}
</style>
