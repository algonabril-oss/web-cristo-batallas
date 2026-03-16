document.addEventListener('DOMContentLoaded', () => {
    // Titulares Modal Logic
    const modal = document.getElementById('titular-modal');
    const modalBody = document.getElementById('modal-body');
    const closeBtn = document.querySelector('.close-modal');
    
    const titularData = {
        batallas: {
            title: "Santísimo Cristo de las Batallas",
            image: "img/batallas_hd.jpg",
            content: `
                <p>Fue realizado en el año 1953 en Avila, por el artista Antonio Arenas Martinez (1914-1997), natural de la provincia de Ciudad Real, importando dicho trabajo 15.000 pesetas. Mencionada imagen es fiel copia de la existente en Avila, que los Reyes Católicos llevaban en sus campañas y que actualmente se guarda y venera en el Convento de Monsén Rubí de Bracamonte, con la diferencia que aquella es de medio cuerpo y hecha de terracota, siendo portada en unas andas de mano por cuatro personas, y la de Cáceres es talla de madera que representa a Jesús con la Cruz a cuesta, en su primera caída y de tamaño ligeramente mas pequeño que la estatura de una persona. Fue esta la primera copia que se realizó de aquella de los Reyes Católicos, posteriormente se ha hecho alguna más.</p>
                <p>El primer año que procesionó en la Semana Santa de Cáceres, el Lunes Santo de 1954, lo hizo colocada en una especie de carroza por carecer de unas andas adecuadas, lo que fue subsanado al siguiente año al adquirir a la Cofradía de los Ramos por la cantidad de 14.000 pta. las nadas que ha estado utilizando hasta el año 1985, y que fueron hechas en los años cuarenta por el artesano cacereño Ramón Porras, portándolas dieciocho cofrades a hombros. Y es en este mismo año cuando se lleva la imagen a Trujillo donde el sacerdote D. José, restaurador, le arregla el talón izquierdo al Stmo. Cristo.</p>
                <p>En 1986 se hacen unas nuevas andas en Muebles Mayro de Cáceres, que importan 125.000 pesetas. a la que en los años noventa se les agregaría un cuarto varal echo por el artista cacereño Venancio Rubio Solana, pudiendo así portar las andas un total de 28 cofrades, tal y como se ha mantenido hasta este preciso momento. En el verano del año 1987 es restaurada la totalidad de la talla por la señorita Agustina Rollo Martín, por un importe de 60.000 pesetas así como la peana y la antigua corona de espinas, ambas de escayola.</p>
                <p>En 1988 un grupo de seis cofrades les regalan al Stmo. Cristo de las Batallas la cruz de penitente que en la actualidad lleva sobre sus hombros. A mediados de la década de los años noventa son restauradas varias partes del cuerpo de la mencionada imagen por la Licenciada de Bellas Artes, María Antonia González Luceño.</p>
                <p>Una de las mas conocidas particularidades del paso del Stmo. Cristo de las Batallas es que desde la imagen va montada sobre una alfombra de 260 docenas de claveles amarillos, además de llevar otras flores.</p>
                <p>En el año 2005, tras tener la Hermandad en su poder un estudio realizado por el imaginero sevillano Francisco Berlanga de Ávila donde se advertía del mal estado de esta querida talla, se decide acometer la necesaria restauración por todos conocida, restauración tras la cual presenta la imagen el aspecto que ven en la fotografía superior.</p>
                <p>Tras la misma se le ha dotado de una nueva corona de espinas tallada en madera y que como curiosidad, las espinas están realizadas en plomo flexible, lo que las hace irrompibles. También se hicieron arreglos en la peana de la imagen, pasando a tener una pátina de oro, lo que la dota de una mayor belleza.</p>
            `
        },
        dolores: {
            title: "María Santísima de los Dolores",
            image: "img/dolores_hd.jpg",
            content: `
                <p>Imagen de las denominadas de vestir o de candelero. Realizada en el siglo XVIII en Madrid, de autor desconocido. Fue traída a Cáceres en el siglo XIX y en su honor se constituye una Asociación-Cofradía de Damas de la Virgen de los Dolores, cuya principal finalidad es darle culto y devoción pública a mencionada imagen, para lo cual es colocada en la S.I. Concatedral de Santa María La Mayor de esta ciudad. La primera adquisición es la de un artístico retablo que se hace en Cáceres, por artista desconocido en nuestros días. Hay que destacar desde un principio que pocas eran las damas de la nobleza o aristocracia cacereña que no eran miembros de esta Asociación, las cuales llevaban de distintivo un escapulario donde aparecía bordado un corazón con los siete puñales, que es el de la propia imagen. En aquellos orígenes aquella Virgen tenía una altura de un metro y sesenta y siete centímetros, pero por cuestiones no muy claras fue cortada por la cintura y acomodada a un nuevo retablo mas pequeño.</p>
                <p>Además de la propia belleza del rostro de la imagen, destacaba por el amplio y rico vestuario que poseía donado por sus damas y protectoras, entre los que destacaban terciopelos de varios colores, rasos, y otros tejidos, pertenecientes a trajes y vestidos de las mismas, todos con adornos en oro y plata, además de un gran número de pañuelos artísticamente realizados por manos piadosas de la ciudad.</p>
                <p>En los últimos tiempos sabemos que la Virgen de los Dolores de Sta. María, como popularmente se ha conocido siempre por existir otra en la ciudad, ha salido en procesión penitencial con otras cofradías al menos en cuatro ocasiones, en los años cuarenta y cincuenta del siglo XX.</p>
                <p>El 9 de abril de 1985 después de algunos contactos previos con la Presidenta de la Asociación, la Ilma. Sr. Doña Mercedes Blanco, firmamos el correspondiente documento por el cual tanto la imagen como todas sus pertenencias y objetos pasan a ser propiedad de la Cofradía del Stmo. Cristo de las Batallas. El primer paso es llevar la imagen de la Virgen a restaurar y darle su altura real, de todo lo cual se encarga en artista e imaginero hispalense D. Francisco Berlanga de Avila.</p>
                <p>El 1 de abril de 1987 es bendecida en la S.I. Concatedral y ese año estrena unas andas nuevas, que con el paso del tiempo cambiaría por otras adquiridas en el año 1997, más amplias y en la línea de austeridad que la imagen necesita.</p>
            `
        },
        refugio: {
            title: "Cristo del Refugio",
            image: "img/refugio_hd.jpg",
            content: `
                <p>Cristo Crucificado de tamaño natural realizado en el año 1780 por encargo de D. Esteban de Loaisa del Arco y Doña María Lorenzo del Pozo. Según los últimos estudios, se atribuye a D. José de Proenza, imaginero portugués asentado en Cáceres, autor de otras imágenes que se encuentran en diferentes iglesias y ermitas de nuestra ciudad como por ejemplo en la Ermita de la Paz.</p>
                <p>Según parece la intención de sus mecenas, era la de crear aquí en Cáceres una escuela de imaginería, este sería el primer paso para ello, pero no resultó como ellos querían.</p>
                <p>Después de permanecer algunos años bajo el cuidado de tan generoso matrimonio, intentaron en el año 1799 colocarlo en uno de los retablos de la Iglesia de San Mateo,algoque no fue posible por el gran tamaño del Crucificado además del peso tan excesivo del mismo, claros inconvenientes que utilizó el párroco para la necesidad de realización de profundas y costosas obras en el templo para acoplar el Crucificado, lo cual no agradó a parroquianos y a D. Esteban y familia.</p>
                <p>Al final tanto el Cristo del Refugio como otras imágenes más pequeñas son acomodadas en la hoy desaparecida Ermita de San Ildefonso (XVI), depositadas el 30 de abril de 1802 y allí permanecen hasta el año 1832, en el que el Fervoroso Cristo es depositado en el cercano Convento de San Francisco El Real, y después de ocupar varias capillas laterales pasa a rematar el retablo mayor de dicho cenobio.</p>
                <p>En los años setenta por varios motivos es desocupada esta imagen de su lugar de preferencia y comienza a ser colocado en trasteros y lugares nada honrosos para su tan piadosa cuna. Quienes lo conocen por entonces, comienzan a denominarle cariñosamente " Cristo viajero" y después dado el tono que va adquiriendo con la suciedad del tiempo "Cristo blanco".</p>
                <p>Que nosotros conozcamos en el presente siglo ha sufrido al menos tres intentos de restauración, realizados por personas no muy especialistas en dicha tarea lo que también contribuyó a su creciente desperfecto. En el año 1985 fue localizado por el entonces Mayordomo y después de conseguir que la Diputación Provincial lo regalase a la Cofradía se restauró en Coria. Desde el año 1990 procesiona el Lunes Santo, con otra cruz mas liviana.</p>
                <p>En el año 2002, visto el mal estado de conservación en el que se encontraba, la Cofradía decide acometer sobre esta imagen una intensa restauración, tras la cual, la imagen contempla el aspecto que ven en la fotografía, realizada precisamente el día de su bendición tras la restauración. Fue llevada a cabo por Francisco Berlanga de Avila en Bormujos (Sevilla), repitiéndose el proceso en el año 2010.</p>
                <p>Desde 1997 hasta el año 2005 procesionó sobre unas andas de estilo barroco, realizadas en madera por el tallista cacereño Santiago Porras en los años 60 del pasado siglo XX. Dichas andas tienen una amplia historia cofradiera ya que sobre ellas han procesionado imágenes como la Virgen de la Esperanza, el Cristo del Amparo, el Cristo de las Batallas -titular de la Hermandad- o incluso, hasta la Virgen de la Montaña, Patrona de Cáceres.</p>
                <p>Actualmente, desde el año 2006, viene procesionando por las calles y plazas cacereñas en posición vertical. Esta era una pretérita aspiración de la Cofradía que, finalmente, pudo ser posible en ese año gracias a la labor callada de un hermano de la Cofradía.</p>
                <p>En su estancia en la Ermita de las Candelas, podía leerse la siguiente leyenda a sus pies:</p>
                <p style="text-align: center; font-style: italic;">
                    El Ilustrisimo Sr.D.Juan Alvarez de Castro, Obispo de Coria,<br>
                    concedió XXXX días de Indulgencias a todos los fieles de<br>
                    ambos sexos que de rodillas rezasen un credo antes el Señor<br>
                    Crucificado del Refugio, otros XXXX ante el Señor de la Columna,<br>
                    y otros XXXX por una salve ante Ntra.Sra. del Mayor Dolor,<br>
                    rogando a Dios por la paz y concordia de los Principes Cristianos,<br>
                    y extirpación de las heregías.<br>
                    En Cáceres a XX de mayo año de MDCCC.
                </p>
            `
        },
        buenfin: {
            title: "Virgen del Buen Fin y Nazaret",
            image: "img/buen_fin_hd.jpg",
            content: `
                <p>Es una representación iconográfica de la Soledad de María al pie de la Cruz (Stabat Mater Dolorosa). Es realizada en 1.990 a partir de la primitiva mascarilla de la Virgen de los Dolores (XVIII) por el imaginero sevillano D. Francisco Berlanga de Ávila.</p>
                <p>Imagen de vestir que procesiona el Sábado Santo, vestida de hebrea y colocada ante la cruz vacía con sudario, sobre el Monte Calvario, realizado con claveles rojos. En el año 1998 era restaurada por mencionado artista puesto que se habían producido daños el cuello y cabeza de la imagen ocasionados por los cambios bruscos de temperatura y a las goteras existentes en la Capilla de San Miguel, en la S.I.Concatedral de Santa María, dónde se mantenía expuesta al culto. A partir de entonces, se guarda en el Convento de las Religiosas Jerónimas, sito en la calle Olmo de esta ciudad.</p>
                <p>Es procesionada sobre unas andas, donación de una familia de hermanos de la Cofradía en el año 1987, andas sobre las que procesionó María Santísima de los Dolores hasta el año 1997 que estrenó las suyas propias y quedaron definitivamente las anteriores para la Virgen del Buen Fin. En la delantera de las mismas encontramos los motivos del corazón atravesado por los siete puñales, orlado todo ello por la corona de espinas. Este motivo está realizado en bronce.</p>
            `
        }
    };

    function openModal(titular) {
        const data = titularData[titular];
        if (!data) return;

        modalBody.innerHTML = `
            <img src="${data.image}" alt="${data.title}" class="modal-img">
            <h2>${data.title}</h2>
            ${data.content}
        `;
        modal.style.display = 'block';
        document.body.style.overflow = 'hidden'; 
    }

    function closeModal() {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }

    document.querySelectorAll('.title-card').forEach(card => {
        card.style.cursor = 'pointer';
        card.addEventListener('click', () => {
            const titular = card.getAttribute('data-titular');
            openModal(titular);
        });
    });

    if (closeBtn) {
        closeBtn.addEventListener('click', closeModal);
    }

    window.addEventListener('click', (event) => {
        if (event.target == modal) {
            closeModal();
        }
    });

    // Mobile Menu Toggle
    const mobileToggle = document.querySelector('.mobile-toggle');
    const mobileMenu = document.querySelector('.mobile-menu');
    
    if (mobileToggle) {
        mobileToggle.addEventListener('click', () => {
            mobileMenu.classList.toggle('active');
            
            // Animate toggle lines
            const spans = mobileToggle.querySelectorAll('span');
            spans[0].style.transform = mobileMenu.classList.contains('active') ? 'rotate(45deg) translate(5px, 6px)' : 'none';
            spans[1].style.opacity = mobileMenu.classList.contains('active') ? '0' : '1';
            spans[2].style.transform = mobileMenu.classList.contains('active') ? 'rotate(-45deg) translate(5px, -6px)' : 'none';
        });

        // Close mobile menu when clicking a link
        mobileMenu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.remove('active');
                const spans = mobileToggle.querySelectorAll('span');
                spans[0].style.transform = 'none';
                spans[1].style.opacity = '1';
                spans[2].style.transform = 'none';
            });
        });
    }

    // Scroll Animations
    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('reveal');
            }
        });
    }, observerOptions);

    document.querySelectorAll('.reveal-item').forEach(el => {
        observer.observe(el);
    });

    // Map Initialization
    const initMap = () => {
        const mapContainer = document.getElementById('map');
        if (!mapContainer) return;

        // Initialize map centered in Cáceres
        const map = L.map('map').setView([39.4747, -6.3710], 16);

        // Add Dark Matter tiles
        L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
            subdomains: 'abcd',
            maxZoom: 20
        }).addTo(map);

        // Itinerary Coordinates (Approximate based on streets)
        const lunesSantoCoords = [
            [39.4747, -6.36998], // Concatedral
            [39.4751, -6.3708],  // Plaza Santa Maria
            [39.4749, -6.3710],  // Arco de la Estrella
            [39.4752, -6.3714],  // Plaza Mayor
            [39.4745, -6.3725],  // Pintores
            [39.4735, -6.3740],  // Plaza San Juan
            [39.4745, -6.3750],  // Gran Vía (returning)
            [39.4750, -6.3735],  // Back towards Arco
            [39.4749, -6.3710],  // Arco
            [39.4747, -6.36998]  // Concatedral
        ];

        const sabadoSantoCoords = [
            [39.4747, -6.36998], // Concatedral (Salida)
            [39.4748, -6.3705],  // calle Arco de la Estrella
            [39.4749, -6.37095], // Arco de la Estrella
            [39.4747, -6.3707],  // Adarve de la Estrella
            [39.4740, -6.3702],  // Adarve de Santa Ana
            [39.4732, -6.3695],  // Adarve del Padre Rosalío
            [39.4726, -6.3693],  // Adarve de la Puerta de Mérida
            [39.4724, -6.3703],  // Puerta de Mérida
            [39.4727, -6.3708],  // calle de Puerta de Mérida
            [39.4733, -6.3715],  // calle Pizarro
            [39.4735, -6.3725],  // calle Sergio Sánchez
            [39.4736, -6.3739],  // Plaza de San Juan
            [39.4745, -6.3726],  // calle Pintores entera
            [39.4751, -6.3716],  // Plaza Mayor (base de la cuesta)
            [39.4750, -6.3712],  // cuesta del Arco de la Estrella
            [39.4749, -6.3710],  // Arco de la Estrella
            [39.4748, -6.3706],  // calle Arco de la Estrella
            [39.4751, -6.3708]   // Palacio Episcopal (Llegada)
        ];

        // Draw Polylines
        const lunesPoly = L.polyline(lunesSantoCoords, {
            color: '#910a17',
            weight: 5,
            opacity: 0.8,
            lineJoin: 'round'
        }).addTo(map);

        const sabadoPoly = L.polyline(sabadoSantoCoords, {
            color: '#c5a059',
            weight: 5,
            opacity: 0.8,
            lineJoin: 'round'
        }).addTo(map);

        // Add Markers for Departure/Arrival
        const mainIcon = L.icon({
            iconUrl: 'img/escudo_heraldico_white.png',
            iconSize: [30, 30],
            iconAnchor: [15, 15],
            popupAnchor: [0, -15]
        });

        L.marker([39.4747, -6.36998], {icon: mainIcon})
            .addTo(map)
            .bindPopup('<b>Concatedral de Santa María</b><br>Punto de Salida');

        // Legend Control
        const legend = L.control({position: 'bottomright'});
        legend.onAdd = function (map) {
            const div = L.DomUtil.create('div', 'info legend');
            div.style.backgroundColor = 'rgba(0,0,0,0.8)';
            div.style.color = 'white';
            div.style.padding = '10px';
            div.style.borderRadius = '5px';
            div.style.border = '1px solid #c5a059';
            div.innerHTML = `
                <h4 style="margin: 0 0 5px; color: #c5a059; font-size: 0.8rem; text-transform: uppercase;">Itinerarios 2026</h4>
                <div style="display: flex; align-items: center; margin-bottom: 5px;">
                    <span style="width: 20px; height: 3px; background: #910a17; display: inline-block; margin-right: 10px;"></span>
                    <span style="font-size: 0.75rem;">Lunes Santo</span>
                </div>
                <div style="display: flex; align-items: center;">
                    <span style="width: 20px; height: 3px; background: #c5a059; display: inline-block; margin-right: 10px;"></span>
                    <span style="font-size: 0.75rem;">Sábado Santo</span>
                </div>
            `;
            return div;
        };
        legend.addTo(map);
    };

    initMap();
    
    // Navbar background change on scroll
});
