<template>
  <div class="container">
    <div class="row">
      <div class="col m12">
        <div class="card">
          <div class="card-image">
            <div class="ToggleCard-content">
              <img :src="$route.params.post.image">
              <span class="card-title">
                {{ $route.params.post.title }}
              </span>
              <div class="card-content">
                {{ $route.params.post.content }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Article',
  data () {
    return {
      post: []
    }
  }
}
</script>

<style scoped>
</style>
