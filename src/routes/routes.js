import { createRouter,createWebHistory } from "vue-router";
import Home from "@/pages/Home.vue";
import ProductDetails from "@/pages/ProductDetails.vue";
import Products from "@/pages/Products.vue";
import CartLisiting from "@/pages/CartLisiting.vue";
const routes =[
  
    { path:'/',component:Products},
    { path: '/products/:id', name: 'ProductDetails', component: ProductDetails, props: true },
    { path:'/cartlist',component:CartLisiting},
   
  
];

const router = createRouter({
    history:createWebHistory(),
    routes,
});
export default router;
