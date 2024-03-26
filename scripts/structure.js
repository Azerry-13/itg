let body = document.getElementsByTagName("body")[0];

if (body.id == "page-w_back") {
    let header_white = document.createElement('div');
    header_white.className = "container desktop";
    
    header_white.innerHTML = `
                    <header>
                        <a href="index.html"><img src="images/logo.png" alt="" class="logo"></a>
                        <nav class="links">
                            <li id="about"><a class="button-text" href="about.html">About us</a></li>
                            <li id="products"><a class="button-text" href="products.html">Products</a></li>
                            <li id="vendors"><a class="button-text" href="vendors.html">Vendors and partners</a></li>
                            <li id="news"><a class="button-text" href="news.html">News</a></li>
                            <li id="contacts"><a class="button-text" href="contacts.html">Contacts</a></li>
                        </nav>
                    </header>
            `
    body.append(header_white);

    let header_mob_white = document.createElement('header');
    header_mob_white.className = "mobile";

    header_mob_white.innerHTML = `<div class="container">
    <a href="index.html"><img src="images/logo.png" alt="" class="logo"></a>
    <div id="burger-menu" class="">
        <div class="top-burger"></div>
        <div class="bottom-burger"></div>
    </div>

    <div class="header-mobile">
            <nav class="links">
                <li><a class="button-text" href="about.html">About us</a></li>
                <li><a class="button-text" href="products.html">Products</a></li>
                <li><a class="button-text" href="vendors.html">Vendors and partners</a></li>
                <li><a class="button-text" href="news.html">News</a></li>
                <li><a class="button-text" href="contacts.html">Contacts</a></li>
            </nav>
    </div>
</div>
`

body.append(header_mob_white);

} else {
    let header_black = document.createElement('div');
    header_black.className = "container desktop";
    
    header_black.innerHTML = `
                    <header>
                        <a href="index.html"><img src="images/logo_black.png" alt="" class="logo-black"></a>
                        <nav class="links-black">
                            <li id="about"><a class="button-text" href="about.html">About us</a></li>
                            <li id="products"><a class="button-text" href="products.html">Products</a></li>
                            <li id="vendors"><a class="button-text" href="vendors.html">Vendors and partners</a></li>
                            <li id="news"><a class="button-text" href="news.html">News</a></li>
                            <li id="contacts"><a class="button-text" href="contacts.html">Contacts</a></li>
                        </nav>
                    </header>
            `
    body.append(header_black);

    let header_mob_black = document.createElement('header');
    header_mob_black.className = "mobile";

    header_mob_black.innerHTML = `<div class="container">
    <a href="index.html"><img src="images/logo_black.png" alt="" class="logo"></a>
    <div id="burger-menu-black" class="">
        <div class="top-burger"></div>
        <div class="bottom-burger"></div>
    </div>

    <div class="header-mobile">
            <nav class="links">
                <li><a class="button-text" href="about.html">About us</a></li>
                <li><a class="button-text" href="products.html">Products</a></li>
                <li><a class="button-text" href="vendors.html">Vendors and partners</a></li>
                <li><a class="button-text" href="news.html">News</a></li>
                <li><a class="button-text" href="contacts.html">Contacts</a></li>
            </nav>
    </div>
</div>
`

body.append(header_mob_black);
}

let footer = document.createElement('footer');

footer.innerHTML = `
            <div class="container">
            <div class="footer__content">
                <a href="index.html"><img src="images/logo.png" alt="" class="logo"></a>
                <nav class="links">
                    <li><a class="button-text" href="about.html">About us</a></li>
                    <li><a class="button-text" href="products.html">Products</a></li>
                    <li><a class="button-text" href="vendors.html">Vendors and partners</a></li>
                    <li><a class="button-text" href="news.html">News</a></li>
                    <li><a class="button-text" href="contacts.html">Contacts</a></li>
                </nav>
            </div>
            <hr>
            <p class="button-text">© 2022, I.T.G. Electronic</p>
            </div>
        `
body.append(footer);

let burger_menu = document.getElementById("burger-menu");
let burger_menu_black = document.getElementById("burger-menu-black");
let header_mobile = document.getElementsByClassName("header-mobile")[0];

if (burger_menu_black) {
    burger_menu_black.addEventListener('click', function () {
        this.classList.toggle('active');
        header_mobile.classList.toggle('is-active');
        body.classList.toggle('hidden');
    });
}

if (burger_menu) {
    burger_menu.addEventListener('click', function () {
        this.classList.toggle('active');
        body.classList.toggle('hidden');
        header_mobile.classList.toggle('is-active');
    });
}

let url = window.location.pathname;
let splitUrl = url.split('/')[2];

switch (splitUrl) {
    case 'about.html': 
        document.getElementById('about').classList.add('underlined');
        break;
    case 'products.html': 
        document.getElementById('products').classList.add('underlined');
        break;
    case 'vendors.html': 
        document.getElementById('vendors').classList.add('underlined');
        break;
    case 'news.html': 
        document.getElementById('news').classList.add('underlined');
        break;
    case 'contacts.html': 
        document.getElementById('contacts').classList.add('underlined');
        break;
}

alert("ПОСМОТРИ МАКЕТ, КУКИ ЗАБЫЛ");