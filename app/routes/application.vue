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
        <div class="column is-3">
          <div class="panel">
            <p class="panel-heading">Projects</p>
            <div class="panel-block is-active">

              <div class="media">
                 <div class="media-left">
                    <figure class="image is-64x64">
                      <img src="/images/marvel.png" alt="">
                    </figure>
                  </div>
                  <div class="media-content">
                    <router-link :to="{ name: 'marvel' }" class="heading title is-large">Marvel Series Page</router-link>
                    <router-link :to="{ name: 'marvel' }">Take a Closer Look</router-link>
                 </div>
               </div>

              <div class="media">
                 <div class="media-left">
                    <figure class="image is-64x64">
                      <img src="/images/netflix.png" alt="">
                    </figure>
                  </div>
                  <div class="media-content">
                    <router-link :to="{ name: 'netflix' }" class="heading title is-large">Netflix Search Page</router-link>
                    <router-link :to="{ name: 'netflix' }">Take a Closer Look</router-link>
                 </div>
               </div>

              <div class="media">
                 <div class="media-left">
                    <figure class="image is-64x64">
                      <img src="/images/t-shirts.png" alt="">
                    </figure>
                  </div>
                  <div class="media-content">
                    <router-link :to="{ name: 't-shirts' }" class="heading title is-large">T-Shirt Order Page</router-link>
                    <router-link :to="{ name: 't-shirts' }">Take a Closer Look</router-link>
                 </div>
               </div>

              <div class="media">
                 <div class="media-left">
                    <figure class="image is-64x64">
                      <img src="/images/monster.png" alt="">
                    </figure>
                  </div>
                  <div class="media-content">
                    <router-link :to="{ name: 'monster' }" class="heading title is-large">Monster Maker App</router-link>
                    <router-link :to="{ name: 'monster' }">Take a Closer Look</router-link>
                 </div>
               </div>

              <div class="media">
                 <div class="media-left">
                    <figure class="image is-64x64">
                      <img src="/images/twitch.png" alt="">
                    </figure>
                  </div>
                  <div class="media-content">
                    <router-link :to="{ name: 'twitch' }" class="heading title is-large">Twitch Copy</router-link>
                    <router-link :to="{ name: 'twitch' }">Take a Closer Look</router-link>
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
              :monster="monster"
              :twitch="twitch">

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
