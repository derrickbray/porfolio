<template lang="html">
  <div class="">
  <nav class="nav">
  <div class="nav-left">
    <router-link :to="{ name: 'index' }" class="nav-item is-brand">Derrick Bray</router-link>
  </div>
  <div class="nav-center">
    <router-link :to="{ name: 'contact' }" class="nav-item">Contact Me</router-link>
    <router-link :to="{ name: 'resume' }" class="nav-item">Resume</router-link>
  </div>
</nav>

  <div class="main">
    <div class="section columns">
      <div class="column is-4">
        <div class="panel">
          <p class="panel-heading">Adopt a Pupper</p>
          <div class="panel-block is-active" v-for="puppy in puppies">
            <div class="media">
               <div class="media-left">
                  <figure class="image is-64x64">
                    <img :src="puppy.image_url" alt="">
                  </figure>
                </div>
                <div class="media-content">
                  <h2 class="subtitle">{{ puppy.name }}</h2>
                  <router-link :to="{ name: 'detail', params: {id:puppy.id} }">Read More</router-link>

               </div>
             </div>
          </div>
        </div>
      </div>
      <div class="column">
        <div class="is-relative">
          <transition name="fade">
            <router-view
              :puppies="puppies"
              :api-url="apiUrl"
              @addPuppy="addPuppy"
              @removePuppy="removePuppy"
              @updatePuppy="updatePuppy"
              >
            </router-view>
          </transition>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  data() {
    return {
    };
  },

  methods: {

  },
};
</script>
