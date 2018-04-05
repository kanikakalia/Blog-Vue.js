<template>
<div class="blog">
  <v-blog light>
    <v-content>
      <v-container fluid grid-list-md>
        <v-layout row wrap>
          <v-flex xs12 >
            <div class="blog-box" v-for="post in posts" :key="post.title">
              <v-card class="my-3" hover>
                <v-card-media
                  class="white--text"
                  height="170px"
                  :src="post.imgUrl"
                >
                  <v-container fill-height fluid>
                    <v-layout>
                      <v-flex xs12 align-end d-flex>
                        <span class="headline">
                          <router-link :to="{ name: 'Post', params: { id: post.id } }">
                            {{ post.title }}
                          </router-link>
                        </span>
                      </v-flex>
                    </v-layout>
                  </v-container>
                </v-card-media>
                <v-card-text>
                  {{ post.content }}
                </v-card-text>
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <router-link flat class="blue--text" :to="{ name: 'Post', params: { id: post.id } }">
                    Read More
                  </router-link>
                </v-card-actions>
              </v-card>
            </div>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
  </v-blog>
</div>
</template>
<script>
/* eslint-disable */
 export default {
   name: 'Blog',
   data () {
     return {
     title: 'Your Logo',
     posts: [
       {
         id: 1,
         title: 'Fusce ullamcorper tellus',
         content: 'Fusce ullamcorper tellus sed maximus rutrum. Donec imperdiet ultrices maximus. Donec non tellus non neque pellentesque fermentum. Aenean in pellentesque urna.',
         imgUrl: 'https://raw.githubusercontent.com/vuetifyjs/docs/dev/static/doc-images/cards/drop.jpg'
       },
       {
         id: 2,
         title: 'Donec vitae suscipit lectus, a luctus diam.',
         content: 'Donec vitae suscipit lectus, a luctus diam. Proin vitae felis gravida, lobortis massa sit amet, efficitur erat. Morbi vel ultrices nisi.',
         imgUrl: 'https://raw.githubusercontent.com/vuetifyjs/docs/dev/static/doc-images/cards/docks.jpg'
       },
       {
         id: 3,
         title: 'Vestibulum condimentum quam',
         content: 'At sagittis sapien vulputate. Vivamus laoreet lacus id magna rutrum dapibus. Donec vel pellentesque arcu. Maecenas mollis odio tempus felis elementum commodo.',
         imgUrl: 'https://raw.githubusercontent.com/vuetifyjs/docs/dev/static/doc-images/cards/plane.jpg'
       }
     ]
     }
   }
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
  width: 31%;
  float:left;
  margin: 10px;
 }
 </style>
