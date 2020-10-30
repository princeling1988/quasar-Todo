<template>
  <div class="q-pa-md q-gutter-md">
    <div class="row justify-between">
    <!-- Basic -->
    <q-parallax
      src="https://cdn.quasar.dev/img/parallax2.jpg"
    >
      <h1 class="text-white">Basic</h1>
    </q-parallax>

    </div>

    <!-- video -->
    <q-parallax :height="150">
      <template v-slot:media>
        <video width="720" height="440" poster="https://cdn.quasar.dev/img/polina.jpg" autoplay loop muted>
          <source type="video/webm" src="https://cdn.quasar.dev/img/polina.webm">
          <source type="video/mp4" src="https://cdn.quasar.dev/img/polina.mp4">
        </video>
      </template>

      <h3 class="text-white">Video</h3>
    </q-parallax>

    <!-- Docks -->
    <q-parallax :height="200" :speed="0.5">
      <template v-slot:media>
        <img src="https://cdn.quasar.dev/img/parallax1.jpg">
      </template>

      <h1 class="text-white">Docks</h1>
    </q-parallax>
    <!-- Quasar -->
    <q-parallax>
      <template v-slot:media>
        <img src="https://cdn.quasar.dev/img/parallax2.jpg">
      </template>

      <template v-slot:content="scope">
        <div
          class="absolute column items-center"
          :style="{
            opacity: 0.45 + (1 - scope.percentScrolled) * 0.55,
            top: (scope.percentScrolled * 60) + '%',
            left: 0,
            right: 0
          }"
        >
          <!-- <img src="https://cdn.quasar.dev/logo/svg/quasar-logo.svg" style="width: 150px; height: 150px"> -->
          <div class="text-h3 text-white text-center">Quasar Framework</div>
          <div class="text-h6 text-grey-3 text-center">
            v{{ $q.version }}
          </div>
        </div>
      </template>
    </q-parallax>
    <!-- Card -->
    <q-card class="my-card">
      <q-parallax
        src="https://cdn.quasar.dev/img/parallax1.jpg"
        :height="250"
      />

      <q-card-section>
        <div class="text-h6">Our Changing Planet</div>
        <div class="text-subtitle2">by John Doe</div>
      </q-card-section>
    </q-card>
  </div>
  
</template>

<script>
export default {

}
</script>
