<template>
    <div class="doc-banner-container" id="doc-banner">
            <!-- <img src="../Assets/WhatsApp Image 2023-06-06 at 14.10.30.jpg" alt=""> -->
        <div class="docdet-mob doc-padding" @click="openMenu">
            <img src="../Assets/bars-staggered.png" alt="menu" class="navbar_menu" id="burger">
        </div>
        <div class="doc-flex nav-container">
            <p class="pointer underline-anim" :class="$route.name && $route.name.includes('HomePage') ? 'route-active' : ''" @click="handleRoute('/')" 
                :style="getColor() ">Home</p>
            <p class="pointer underline-anim" :class="$route.name && $route.name.includes('About') ? 'route-active' : ''" @click="handleRoute('/about')" 
                :style="getColor()">About Us</p>
            <p class="pointer underline-anim" :class="$route.name && $route.name.includes('Services') ? 'route-active' : ''" @click="handleRoute('/services')" 
                :style="getColor()">Services</p>
            <p class="pointer underline-anim" @click="scrollInto('footer')" 
                :style="getColor()">Contact Us</p>
        </div>
    </div>
    <MobileNavbar/>
</template>

<script setup>
import { useRoute, useRouter } from 'vue-router';
import { ref, onMounted } from "vue"
import MobileNavbar from './MobileNavbar.vue';
const route = useRoute()
const router = useRouter()
let displayFlg = document.getElementById('dlg')
let menu = document.getElementById('burger')

let isMounted = ref(false)
onMounted(() => {
    // isMounted.value = true
})

function openMenu(evt){
    if(evt.target == menu){
        displayFlg.style.display = 'block'
        document.body.style.overflow = 'hidden'
    }
}
function getColor(){
    if(route.path != '/'){
        return 'color:initial;'
    }else{
        'color:var(--color-bg);'
    }
}
function handleRoute(path){
    let element = document.querySelectorAll('.underline-anim')
    console.log(element,'element');
    // for(let el of element){
    //     el.style.setProperty('--underline', 'blue')
    // }
    console.log(element,'element');
    router.push(path)
}
function scrollInto(id){
    if(id){
        if(displayFlg) displayFlg.style.display = 'none'
        document.body.style.overflow = 'auto'
        let element = document.getElementById(id)
        if(element)
            element.scrollIntoView({
                behavior: 'smooth'
            })
    }
}
</script>

<style scoped>
.route-active:after{
    width: 100%;
}
</style>