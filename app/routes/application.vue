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

    <div class="main is-fullheight">
      <div class="section columns">
        <div class="column is-4">
          <div class="panel">
            <p class="panel-heading">Projects</p>
            <div class="panel-block is-active">

              <div class="media">
                 <div class="media-left">
                    <figure class="image is-64x64">
                      <!-- <img :src="/images/marvel" alt=""> -->
                    </figure>
                  </div>
                  <div class="media-content">
                    <router-link :to="{ name: 'marvel' }" class="heading title is-large">Marvel Series Page</router-link>
                    <router-link :to="{ name: 'marvel' }">Closer Look</router-link>
                 </div>
               </div>

              <div class="media">
                 <div class="media-left">
                    <figure class="image is-64x64">
                      <!-- <img :src="/images/marvel" alt=""> -->
                    </figure>
                  </div>
                  <div class="media-content">
                    <router-link :to="{ name: 'netflix' }" class="heading title is-large">Netflix Search Page</router-link>
                    <router-link :to="{ name: 'netflix' }">Closer Look</router-link>
                 </div>
               </div>

              <div class="media">
                 <div class="media-left">
                    <figure class="image is-64x64">
                      <!-- <img :src="/images/marvel" alt=""> -->
                    </figure>
                  </div>
                  <div class="media-content">
                    <router-link :to="{ name: 't-shirts' }" class="heading title is-large">T-Shirt Order Page</router-link>
                    <router-link :to="{ name: 't-shirts' }">Closer Look</router-link>
                 </div>
               </div>

              <div class="media">
                 <div class="media-left">
                    <figure class="image is-64x64">
                      <!-- <img :src="/images/marvel" alt=""> -->
                    </figure>
                  </div>
                  <div class="media-content">
                    <router-link :to="{ name: 'monster' }" class="heading title is-large">Monster Maker App</router-link>
                    <router-link :to="{ name: 'monster' }">Closer Look</router-link>
                 </div>
               </div>

              <div class="media">
                 <div class="media-left">
                    <figure class="image is-64x64">
                      <!-- <img :src="/images/marvel" alt=""> -->
                    </figure>
                  </div>
                  <div class="media-content">
                    <router-link :to="{ name: 't-shirts' }" class="heading title is-large">T-Shirt Order Page</router-link>
                    <router-link :to="{ name: 't-shirts' }">Closer Look</router-link>
                 </div>
               </div>

            </div>
          </div>
        </div>
        <div class="column">
          <div class="is-relative">
            <transition name="fade">
              <router-view
              :contact="contact"
              :resume="resume"
              :marvel="marvel"
              :netflix="netflix"
              :t-shirts="t-shirts"
              :monster="monster">

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
