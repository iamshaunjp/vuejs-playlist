import addBlog from './components/addBlog.vue';
import showBlogs from './components/showBlogs.vue';

export default [
    { path: '/', component: showBlogs},
    { path: '/add', component: addBlog}
]
