<template>
    <div class="sa-dialog" id="dlg" @click.self="closeNav">
        <div class="sa-dialog-body sa-fixed-right">
            <p>BG</p>
            <div class="dialog-items-container">
                <div class="dialog-items doc-flex">
                    <img src="../Assets/home.svg" alt="">
                    <p>Home</p>
                </div>
                <div class="dialog-items doc-flex">
                    <img src="../Assets/about.svg" alt="">
                    <p>About Us</p>
                </div>
                <div class="dialog-items doc-flex">
                    <img src="../Assets/blog.svg" alt="">
                    <p>Services</p>
                </div>
                <div class="dialog-items doc-flex">
                    <img src="../Assets/contact-mail.svg" alt="">
                    <p>Contact Us</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
function closeNav(evt){
    console.log(evt,'evt');
    let displayFlg = document.getElementById('dlg')
    if(evt.target.classList.contains('sa-dialog')){
        displayFlg.style.display = 'none'
        document.body.style.overflow = 'auto'
    }
}
</script>