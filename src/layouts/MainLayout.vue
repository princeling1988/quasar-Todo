<template>
  <q-layout view="lHh Lpr lFf">
    <q-header class="header">
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="leftDrawerOpen = !leftDrawerOpen"
        />
         <q-page-sticky position="bottom-left" :offset="[18, 18]">
        <q-fab color="amber" text-color="black" icon="keyboard_arrow_left" direction="left" @click="leftDrawerOpen = !leftDrawerOpen" ></q-fab>
         </q-page-sticky>
      </q-toolbar>
      <div class="q-px-lg q-pt-xl q-mb-md">
        <div class="text-h3">Princeling1988</div>
        <div class="text-subtitle">{{ todaysDate }}</div>
      </div>
      <q-img 
      src="../images/a.jpeg"
      class="header-image absolute-top"
      />
    </q-header>

    <q-drawer
        v-model="leftDrawerOpen"
        show-if-above
        :width="250"
        :breakpoint="600"
      >
        <q-scroll-area style="height: calc(100% - 170px); margin-top: 170px; border-right: 1px solid #ddd">
          <q-list padding>
            <q-item
            to='/'
            exact
            clickable 
            v-ripple>
              <q-item-section avatar>
                <q-icon name="inbox" />
              </q-item-section>

              <q-item-section>
                Todo
              </q-item-section>
            </q-item>

            <q-item
            to='/star'
            exact
            clickable 
            v-ripple>
              <q-item-section avatar>
                <q-icon name="star" />
              </q-item-section>

              <q-item-section>
                Star
              </q-item-section>
            </q-item>

            <q-item 
            to='/send'
            exact 
            clickable 
            v-ripple>
              <q-item-section avatar>
                <q-icon name="send" />
              </q-item-section>

              <q-item-section>
                Send
              </q-item-section>
            </q-item>

            <q-item 
            to='/drafts'
            exact
            clickable 
            v-ripple>
              <q-item-section avatar>
                <q-icon name="drafts" />
              </q-item-section>

              <q-item-section>
                Drafts
              </q-item-section>
            </q-item>

            <q-item 
            to='/swiper'
            exact
            clickable
            v-ripple>
              <q-item-section avatar>
                <q-icon name="style" />
              </q-item-section>

              <q-item-section>
                Swiper
              </q-item-section>
            </q-item>
          </q-list>
        </q-scroll-area>

        <q-img class="absolute-top" src="../images/a.jpeg" style="height: 170px">
          <div class="absolute-bottom bg-transparent">
            <q-avatar size="56px" class="q-mb-sm">
              <img src="../images/logo.jpg">
            </q-avatar>
            <div class="text-weight-bold">Princeling1988</div>
            <div>@Princeling1988</div>
          </div>
        </q-img>
      </q-drawer>

    <q-page-container>
      <keep-alive>
      <router-view />
      </keep-alive>
    </q-page-container>
  </q-layout>
</template>

<script>
import { date } from 'quasar'

export default {
  name: 'MainLayout',
  data () {
    return {
      leftDrawerOpen: false,
    }
  },
  computed:{
    todaysDate(){
      let timeStamp = Date.now()
      return date.formatDate(timeStamp, 'dddd D MMM')
    },
    onClick(){
      
    }
  }
}
</script>

<style lang="scss">
.header{
  height: 170px;
  padding: 0;
}
.header-image{
  height: 100%;
  z-index: -1;
  opacity: 0.2;
  fill: grayscale(100%);
}
</style>