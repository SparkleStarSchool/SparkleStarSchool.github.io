$(document).ready(()=>{
    $header = $(
        `<header>
            <nav class="navbar fixed-top navbar-expand-lg navbar-light">
                <a class="navbar-brand" href="/index.html">
                    <img id='logo' src="assets/images/logo.png" />
                    <img id='title' src="assets/images/title.png" alt="">
                </a>
                <button id="collapse-btn" class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav ml-auto navStyle">
                        <li class="nav-item active">
                            <a class="nav-link " href="/index.html">主页</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/index.html#learn">关于我们</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/courses.html">精品课程</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">公益俱乐部<img src="assets/images/free3.png" alt=""></a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/schedule.html">课表展示</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/index.html#teacher">特色教师</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/index.html#contact">联系我们</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>`
    )
    $('body').append($header)
})