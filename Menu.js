function menu() {
    
const tableBody = document.querySelector('#menu');
const header = document.createElement("nav");

header.innerHTML = `<div class="logo">
        <img src="./Logos_SIBS_preto_vertical.png" alt="SIBS Logo">
    </div>
    <div class="menu-toggle" id="menu-toggle">☰</div>
    <ul class="nav-links" id="nav-links">
        <li><a href="index.html">Home</a></li>
        <li><a href="#">Sobre</a></li>
        <li class="config-dropdown">
            <a href="#">Marketplace</a>
            <ul class="dropdown-content">
                <li class="nested-dropdown">
                    <a href="#">API's Acquirer</a>
                    <ul class="dropdown-content3">
                        <li><a href="MOlist.html">Lista MO</a></li>
                        <li><a href="SubmerchantsAproveList.html">Lista subMerchants</a></li>
                    </ul>
                </li>
                <li class="nested-dropdown">
                    <a href="#">API's MO</a>
                    <ul class="dropdown-content3">
                        <li><a href="MOlist.html">Split purchase</a></li>
                    </ul>
                </li>
            </ul>
        </li>
        <li class="config-dropdown">
            <a href="#">
                <img src="./setting.png" alt="Configurações" class="config-icon">
            </a>
            <ul class="dropdown-content">
                <li><a href="Credenciais.html">Credenciais</a></li>
            </ul>
        </li>
    </ul>`;
tableBody.appendChild(header);

}            


document.addEventListener('DOMContentLoaded', function () {
    // Menu toggle para dispositivos móveis
    const menuToggle = document.getElementById('menu-toggle');
    const navLinks = document.getElementById('nav-links');
    
    menuToggle.addEventListener('click', function () {
        navLinks.classList.toggle('show');
    });
});
