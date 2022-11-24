import React from "react";
const Footer = () => {
    return (
       <footer>
        <div class="footer__div">
            <ul class="redes__sociales">
                <div class="redes">
                    <li><a href="https://instagram.com"><i class="fa-brands fa-instagram"></i></a></li>
                </div>
                <div class="redes">
                    <li><a href="https://es-la.facebook.com"><i class="fa-brands fa-facebook"></i></a></li>
                </div>
                <div class="redes">
                    <li><a href="https://www.twitter.com"><i class="fa-brands  fa-twitter" ></i></a></li>
                </div>
            </ul>
            <li><a href="https://api.whatsapp.com/send?phone=1158897653" class="social__media--whatsapp"><i class="fa-brands fa-whatsapp"></i></a></li>
        </div>
        <section class="footer_section">
            <p>
                <a href="page/location.html">¿Donde está ubicado nuestro local?</a>
            </p>
            <p>Calle Siempre viva 742,Springfield,Estados Unidos</p>
            <p>Copyright © 2022 Do Sostenido. Todos los derechos reservados.</p>
        </section>
    </footer>  
    )
}

export default Footer;