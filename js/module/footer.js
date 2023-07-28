$(document).ready(()=>{
    $footer = $(`
        <footer id="contact">
            <div class="container">
            <div class="row">
                <div class="col col-md-8 layout">
                <img id='footer-logo' src="./img/footer.png" alt="">
                </div>
                <div class="col col-md-4 layout">
                <div class="row">
                    <div class="col">
                    <p>咨询详情</p>
                    <img id='footer-code' src="./img/code.png" alt="">
                    <p>sparklestar.ca@gmail.com</p>
                    </div>
                </div>
                </div>
            </div>
            <div class="row">
                <div class="col copyright">
                    <p>Copyright@sparklestar</p>
                </div>
            </div>
            </div>
        </footer>
    `)
    $('body').append($footer)
})