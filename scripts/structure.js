let body = document.getElementsByTagName("body")[0];

if (body.id == "page-w_back") {
    let header_white = document.createElement('div');
    header_white.className = "container";
    
    header_white.innerHTML = `
                    <header>
                        <a href="index.html"><img src="images/logo.png" alt="" class="logo"></a>
                        <nav class="links">
                            <li><a class="button-text" href="about.html">About us</a></li>
                            <li><a class="button-text" href="products.html">Products</a></li>
                            <li><a class="button-text" href="vendors.html">Vendors and partners</a></li>
                            <li><a class="button-text" href="news.html">News</a></li>
                            <li><a class="button-text" href="contacts.html">Contacts</a></li>
                        </nav>
                    </header>
            `
    body.append(header_white);
} else {
    let header_black = document.createElement('div');
    header_black.className = "container";
    
    header_black.innerHTML = `
                    <header>
                        <a href="index.html"><img src="images/logo_black.png" alt="" class="logo-black"></a>
                        <nav class="links-black">
                            <li><a class="button-text" href="#">About us</a></li>
                            <li><a class="button-text" href="products.html">Products</a></li>
                            <li><a class="button-text" href="vendors.html">Vendors and partners</a></li>
                            <li><a class="button-text" href="#">News</a></li>
                            <li><a class="button-text" href="#">Contacts</a></li>
                        </nav>
                    </header>
            `
    body.append(header_black);
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