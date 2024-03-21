let bodies = document.getElementsByTagName("body");
let body_footer = bodies[0];

let footer = document.createElement('footer');
header.className = "container";

footer.innerHTML = `
            <div class="container">
            <div class="footer__content">
                <a href=""><img src="images/logo.png" alt="" class="logo"></a>
                <nav class="links">
                    <li><a class="button-text" href="#">About us</a></li>
                    <li><a class="button-text" href="#">Products</a></li>
                    <li><a class="button-text" href="#">Vendors and partners</a></li>
                    <li><a class="button-text" href="#">News</a></li>
                    <li><a class="button-text" href="#">Contacts</a></li>
                </nav>
            </div>
            <hr>
            <p class="button-text">© 2022, I.T.G. Electronic</p>
            </div>
        `
body_footer.append(footer);