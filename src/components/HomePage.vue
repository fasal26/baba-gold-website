<template>
  <div class="banner-container">
    <h1>Unlock the Power of Gold with <strong>Baba Gold</strong></h1>
        <video width="100%" height="550px" autoplay muted loop style="object-fit: cover;width: 100%;height: 550px;">
            <source src="../Assets/pexels-crazy-motions-8733007-3840x2160-30fps.mp4" type="video/mp4">
            Your browser does not support the video tag.
        </video>
  </div>
  <div class="baba-abtus-conatiner">
      <div class="baba-flex baba-abtus">
          <img src="../Assets/scottsdale-mint2.jpg" alt="">
          <div class="baba-flex-col abt-cntnt">
              <h2>About Us</h2>
              <p>
                  At Baba Gold, we are committed to providing exceptional services and guidance to investors seeking to tap into the potential of bullion and forex trading. With a deep understanding of the gold market and extensive experience in forex trading
              </p>
              <p>
                  Our dedicated team is here to help you navigate the complexities of these lucrative markets.
              </p>
              <span class="pointer read-more" @click="handleRoute('/about')">read more</span>
          </div>
      </div>
  </div>
  <div class="baba-abtus-conatiner baba-abtus-mob">
      <div class="baba-flex baba-abtus">
          <img src="../Assets/our-story.jpg" alt="">
          <div class="baba-flex-col abt-cntnt">
              <h2>Our Story</h2>
              <p>
                  Baba Gold was born out of a passion for unlocking the immense potential of bullion and forex gold trading. With a vision to empower individuals and businesses, we embarked on a journey to provide comprehensive services, innovative solutions, and expert guidance.
              </p>
              <p>
                  Join us on our remarkable journey as we continue to redefine the possibilities of bullion and forex gold trading
              </p>
              <span class="pointer read-more" @click="handleRoute('/our-story')">read more</span>
          </div>
      </div>
  </div>
  <div class="baba-flex-col doc-padding baba-svc-container" id="services">
      <h2 class="baba-flex">Services</h2>
      <div class="baba-flex cards-container">
          <div class="baba-flex card">
              <img src="../Assets/investment.png" alt="">
              <div class="svc-cntnt">
                  <h4>Diversify Your Portfolio</h4>
                  <p>Gold has long been recognized as a valuable asset for diversifying investment portfolios. Our gold investment services provide you with access to a range of options, including physical bullion, gold ETFs, and mining stocks.</p>
              </div>
          </div>
          <div class="baba-flex card">
              <img src="../Assets/wallet.png" alt="">
              <div class="svc-cntnt">
                  <h4>Store Your Wealth Securely</h4>
                  <p>With Baba Gold, you can rest assured that your precious metals are stored securely. We offer storage solutions with trusted partners, ensuring your gold investments are protected in state-of-the-art facilities that prioritize safety and accessibility.</p>
              </div>
          </div>
          <div class="baba-flex card">
              <img src="../Assets/statistics.png" alt="">
              <div class="svc-cntnt">
                  <h4>Access Global Markets</h4>
                  <p>Take advantage of the largest financial market in the world through our forex trading services. With Baba Gold, you can access major currency pairs, commodities, and other financial instruments. Enjoy the flexibility of trading across different time zones and diversify your trading strategies</p>
              </div>
          </div>
          <div class="baba-flex card">
              <img src="../Assets/stock.png" alt="">
              <div class="svc-cntnt">
                  <h4>Advanced Trading Tools</h4>
                  <p>We provide you with advanced trading platforms equipped with powerful tools and features. Analyze market trends, execute trades with precision, and monitor your positions in real-time. Our platforms are designed to enhance your trading experience & help you seize opportunities.</p>
              </div>
          </div>
      </div>
  </div>
  <div class="prd-container doc-padding">
    <h1> Our products </h1>
        <img src="../Assets/right.png" alt="" class="pointer" @click="handleSlide('prd-img-id')">
    <div class="prd-img-container" id="prd-img-id" style="scroll-behavior: smooth;">
        <div class="prd-img baba-flex-col">
            <img src="../Assets/Single-Gold-Bar-PNG-Photos.png" alt="gold bar">
            <small>Emirates 1 Gram 999.9 Purity Gold Bar</small>
        </div>
        <div class="prd-img baba-flex-col">
            <img src="../Assets/Single-Gold-Bar-PNG-Photos.png" alt="gold bar">
            <small>Emirates 1 Gram 999.9 Purity Gold Bar</small>
        </div>
        <div class="prd-img baba-flex-col">
            <img src="../Assets/Single-Gold-Bar-PNG-Photos.png" alt="gold bar">
            <small>Emirates 1 Gram 999.9 Purity Gold Bar</small>
        </div>
        <div class="prd-img baba-flex-col">
            <img src="../Assets/Single-Gold-Bar-PNG-Photos.png" alt="gold bar">
            <small>Emirates 1 Gram 999.9 Purity Gold Bar</small>
        </div>
        <div class="prd-img baba-flex-col">
            <img src="../Assets/Single-Gold-Bar-PNG-Photos.png" alt="gold bar">
            <small>Emirates 1 Gram 999.9 Purity Gold Bar</small>
        </div>
        <div class="prd-img baba-flex-col">
            <img src="../Assets/Single-Gold-Bar-PNG-Photos.png" alt="gold bar">
            <small>Emirates 1 Gram 999.9 Purity Gold Bar</small>
        </div>
        <div class="prd-img baba-flex-col">
            <img src="../Assets/Single-Gold-Bar-PNG-Photos.png" alt="gold bar">
            <small>Emirates 1 Gram 999.9 Purity Gold Bar</small>
        </div>
    </div>
  </div>
  <!-- <div class="baba-flex-col doc-padding desc-container">
    <h2 class="baba-flex">Why Choose Baba Gold?</h2>
    <p>Experience the power of gold: Discover the timeless allure and wealth-building potential of gold, a precious metal that has stood the test of time as a reliable investment.
        Expertise you can trust: Our team of seasoned professionals brings years of industry experience and knowledge to help you make informed trading decisions.
        Tailored solutions for you: We understand that every investor is unique, which is why we offer personalized services tailored to your specific needs, risk tolerance, and financial goals.
        Transparent and ethical: At Baba Gold, we uphold the highest ethical standards, ensuring transparency in our pricing, information, and reporting.
        Education and empowerment: We believe in equipping our clients with the knowledge and tools they need to succeed. Benefit from our educational resources, market insights, and expert guidance.
        Discover the World of Bullion and Forex Trading</p>
    <ul class="baba-flex">
        <li class="baba-flex"><img src="../Assets/001-correct.png" alt="">Store of Value</li>
        <li class="baba-flex"><img src="../Assets/001-correct.png" alt="">Diversification</li>
        <li class="baba-flex"><img src="../Assets/001-correct.png" alt="">Hedge against Inflation</li>
        <li class="baba-flex"><img src="../Assets/001-correct.png" alt="">Jewelry and Ornamental Use</li>
        <li class="baba-flex"><img src="../Assets/001-correct.png" alt="">Industrial Applications</li>
        <li class="baba-flex"><img src="../Assets/001-correct.png" alt="">Historical Significance</li>
        <li class="baba-flex"><img src="../Assets/001-correct.png" alt="">Limited Supply</li>
        <li class="baba-flex"><img src="../Assets/001-correct.png" alt="">Investment Asset</li>
    </ul>
  </div> -->
</template>

<script setup>
import { onMounted } from 'vue';
import { useRouter } from 'vue-router';
const router = useRouter()

onMounted(() => {
    carousel('prd-img-id')
})

function handleRoute(path){
    router.push(path)
}
const carousel = (id) => {
    const slider = document.getElementById(id);
    if(id && slider){
        let isdown
        let startX
        let scrollLeft
        slider.addEventListener('mousedown', e => {
            isdown = true
            startX = e.pageX - slider.offsetLeft
            scrollLeft = slider.scrollLeft
        })
        document.addEventListener('mouseup', e => {
            isdown = false
        })
        slider.addEventListener('mousemove', e => {
            document.getElementById(id).style.scrollBehavior = "auto"
            e.preventDefault()
            if(!isdown) return
            const x = e.pageX - slider.offsetLeft
            const walk = x - startX
            slider.scrollLeft = scrollLeft - walk
        })
    }
}
function handleSlide(id){
    const slider = document.getElementById(id);
    slider.style.scrollBehavior = "smooth"
    slider.scrollLeft = slider.scrollLeft + 200
}

</script>

<style scoped>
.read-more{
    color: #09427e;
    font-weight: 500;
    position: relative;
    width: fit-content;
}
.read-more:after{
    content: "";
    width: 0;
    display: block;
    height: 1.5px;
    background-color: #09427e;
    transition: width 0.3s ease-in;
    position: absolute;
    bottom: -2px;
    left: 0;
}

.read-more:hover:after{
  width: 100%;
}
</style>