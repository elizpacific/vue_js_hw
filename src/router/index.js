import {createRouter, createWebHistory} from "vue-router";

import MyComponent from "../components/MyComponent.vue";
import MyComponent2 from "../components/MyComponent2.vue";
import UsersIndex from "../components/users/UsersIndex.vue";
import UsersCreate from "../components/users/UsersCreate.vue";
import UserDetails from "../components/users/UserDetails.vue";
//import Login from "../components/Login.vue";
// import BooksIndex from "../components/books/BooksIndex.vue";

const ifNotAuthenticated = (to, from, next) => {
    if(!!localStorage.getItem('user-token')) {
        next()
        return
    }
    next('/login')
}

const routes = [
    {
        path: '/my-comp-1',
        name:'dashboard',
        component: MyComponent
    },
    {
        path: '/users',
        name:'users.index',
        component: UsersIndex
    },
    {
        path: '/users',
        name:'users.create',
        component: UsersCreate
    },
    {
        path: '/users/:id/details',
        name:'users.details',
        component: UserDetails
    },
    // {
    //     path: '/login',
    //     name:'users.login',
    //     component: Login
    // }
];

export default createRouter({
    history: createWebHistory(),
    routes
})