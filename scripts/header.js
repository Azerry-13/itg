let body_header = document.getElementById('page-w_back');

let header = document.createElement('div');
    header.className = "container";
    
    header.innerHTML = `
                    <header>
                        <a href=""><img src="images/logo.png" alt="" class="logo"></a>
                        <nav class="links">
                            <li><a class="button-text" href="#">About us</a></li>
                            <li><a class="button-text" href="#">Products</a></li>
                            <li><a class="button-text" href="#">Vendors and partners</a></li>
                            <li><a class="button-text" href="#">News</a></li>
                            <li><a class="button-text" href="#">Contacts</a></li>
                        </nav>
                    </header>
            `
    
    body_header.append(header);