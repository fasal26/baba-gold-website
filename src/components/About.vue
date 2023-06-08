<template>
    <div class="baba-flex baba-abtus">
          <img src="../Assets/scottsdale-mint2.jpg" alt="">
          <div class="baba-flex-col abt-cntnt">
              <h2>About Us</h2>
              <p>
                  At Baba Gold, we are committed to providing exceptional services and guidance to investors seeking to tap into the potential of bullion and forex trading. With a deep understanding of the gold market and extensive experience in forex trading.We are passionate about precious metals and dedicated to providing you with a secure and reliable platform to buy and sell bullion. With our extensive knowledge and expertise in the industry, we strive to make your bullion investing experience seamless and rewarding.Our mission is to empower individuals and investors like you to diversify their portfolios and protect their wealth by offering a wide range of high-quality bullion products. Whether you're a seasoned investor or just starting your journey into precious metals, we are here to guide and support you every step of the way.
              </p>
              <!-- <p>
                we are passionate about precious metals and dedicated to providing you with a secure and reliable platform to buy and sell bullion. With our extensive knowledge and expertise in the industry, we strive to make your bullion investing experience seamless and rewarding.
              </p> -->
          </div>
      </div>
</template>

<script setup>
import { onMounted } from 'vue';


onMounted(() => {
    // let id = document.getElementById('app')
    // if(id){
        // if(displayFlg) displayFlg.style.display = 'none'
        // document.body.style.overflow = 'auto'
        let element = document.getElementById('app')
        element.scrollIntoView({
            behavior: 'smooth'
        })
    // }
})
</script>

<style scoped>
.baba-abtus{
    padding-top: 150px;
    align-items: center;
}

</style>