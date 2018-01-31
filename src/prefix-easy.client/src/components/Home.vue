<template>
  <div class="home-container">
    <div class="home-content">

      <div class="title-block two-line-grid">
        <div class="left-cell row-one">PREFIX</div>
        <div class="right-cell row-one">EASY</div>
        <div class="left-cell row-two">prefiX</div>
        <div class="right-cell row-two">easy</div>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
.home-container {
  background-color: white;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: nowrap;
}

.home-content {
  text-align: center;
  color: #282828;
  display: flex;
  flex-grow: 0;
  flex-wrap: nowrap;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

$row-offset: -0.25em;
.row-one {
  margin-bottom: $row-offset;
}

.row-two {
  margin-top: $row-offset;
}

.two-line-grid {
  display: grid;

  grid-template-columns: auto auto;
  grid-template-rows: 50% 50%;
  grid-column-gap: 50px;
}

.left-cell {
  justify-self: end;
}

.right-cell {
  justify-self: start;
}

%large-text {
  font-size: 4.25em;
  font-weight: lighter;
  letter-spacing: 0.25em;
  text-align: center;
}

.title-block {
  @extend %large-text;
}

.title-block:hover {
  cursor: default;
}
</style>
