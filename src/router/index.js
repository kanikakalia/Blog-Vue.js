import Vue from 'vue'
import Router from 'vue-router'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import Blog from '@/components/Blog.vue'
import Post from '@/components/Post.vue'



Vue.use(Vuetify)
Vue.use(Router)
Vue.component()
/* eslint-disable */
export default new Router({
  routes: [
    {
      path: '/',
      name: 'Blog',
      component: Blog
    },
    {
      path: '/post/:id',
      name: 'Post',
      component: Post,
      props: true
    }

  ]
})
