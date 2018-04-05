<template>
<div class="blog">
  <v-blog light>
    <v-content>
      <v-container>
        <v-layout row>
          <v-flex xs12 >
            <div class="blog-box" >
              <!-- <span class="headline">{{fdata.title }}</span> -->
              <v-card-media class="white--text" height="300px":src="fdata.imgUrl">
                <v-container fill-height fluid>
                  <v-layout>
                    <v-flex xs12 align-end d-flex>
                      <span class="headline">
                          {{ fdata.title }}
                      </span>
                    </v-flex>
                  </v-layout>
                </v-container>
              </v-card-media>
              <!-- <img :scr="{{fdata.imgUrl}}" class="white--text" height="170px"/> -->
              <div class="flex text-left">{{ fdata.content }}</div>
            </div>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
  </v-blog>
</div>
</template>
<script src="https://unpkg.com/vue/dist/vue.js"></script>
<script src="https://unpkg.com/vuetify/dist/vuetify.js"></script>
<script src="https://use.fontawesome.com/73c8e2621d.js"></script>
<script>
import {getPost} from '@/components/api';
import Data from '@/components/api';

export default {

 data () {
   name: 'Post'
   return {
     loading: false,
     post: null,
     error: null,
     fdata : null
   }
 },
 watch: {
   '$route': 'fetchData'
 },
 mounted() {
   this.fdata = Data.filter(d => d.id == this.$route.params.id)[0]
 },

}
 </script>
 <style scoped>
 h1, h2 {
   font-weight: normal;
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
   color: #42b983;
 }
 .content{
  width: 100%;
  padding: 0px 0px 32px 0px !important;
 }
 .flex{
  max-width: 100% !important;
 }
 .blog-box{
  display: block;
  width: 80%;
  margin: 10px auto;
 }
 </style>
