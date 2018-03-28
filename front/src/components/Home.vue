<template>
  <div class="container">
    <div class="Listing">
      <div class="row"
            v-bind:key="item.title"
            v-for="item in posts">
        <div class="col m6 s12">
          <div @mouseover="active = true" @mouseleave="active = false" class="card">
            <router-link :to="{ name: 'Article', params: { post: item }}" class="card-image waves-effect waves-light">
              <div v-show="active" class="ToggleCard animated fadeInLeft">
                <a href="#!" class="ToggleCard-bouton btn-floating btn-large scale-transition waves-effect waves-light">
                  <i class="material-icons">favorite</i>
                </a>
              </div>
              <div class="ToggleCard-content">
                <img :src="item.image">
                <span class="card-title">
                  {{ item.title }}
                </span>
              </div>

            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
      posts: [],
      active: false
    }
  },
  created: function () {
    fetch('http://localhost:3000/posts')
      .then(stream => stream.json())
      .then(data => {
        this.posts = data
      })
      .catch(error => console.error(error))
  }
}
</script>

<style scoped>
  .ToggleCard {
    display: block;
    position: absolute;
    left: 0;
    width: 60px;
    top: 0;
  }
  .ToggleCard-bouton {
    display: inline-block;
    float: left;
    background-color: rgba(255,255,255,0.2);
    margin: 10px;
    font-size: 2.4rem;
  }

  .ToggleCard-content {
    display: block;
  }

</style>
