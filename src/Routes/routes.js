import { createRouter,createWebHistory } from "vue-router";
import Home from "@/Pages/Home.vue";
import ProductDetails from "@/Pages/ProductDetails.vue";
import Products from "@/Pages/Products.vue";
import CartLisiting from "@/Pages/CartLisiting.vue";
const routes =[
    {path:'/',component:Home},
    { path:'/products',component:Products},
    { path: '/products/:id', name: 'ProductDetails', component: ProductDetails, props: true },
    { path:'/cartlist',component:CartLisiting},
   
  
];

const router = createRouter({
    history:createWebHistory(),
    routes,
});
export default router;
