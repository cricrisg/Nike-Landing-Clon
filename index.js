
//Primer carrousel

window.addEventListener('load', function(){
    new Glider(document.querySelector('.carousel__container'), {
        slidesToShow: 1.2,
        slidesToScroll: 1,
        draggable: false,
        dots: '.dots',
        arrows: {
        prev: '.btn-prev',
        next: '.btn-next'
    },
    responsive: [
        {
          // screens greater than >= 775px
        breakpoint: 458,
        settings: {
            // Set to `auto` and provide item width to adjust to viewport
            slidesToShow: 2,
            slidesToScroll: 1,
        }
        },{
          // screens greater than >= 1024px
        breakpoint: 800,
        settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
        }
        }
    ]

});
});

// Segundo carrousel
window.addEventListener('load', function(){
    new Glider(document.querySelector('.carousel__container--second'), {
        slidesToShow: 1.2,
        slidesToScroll: 1,
        draggable: true,
        dots: '.dots',
        arrows: {
        prev: '.btn-prev--sec',
        next: '.btn-next--sec'
    },
    responsive: [
        {
          // screens greater than >= 775px
        breakpoint: 458,
        settings: {
            // Set to `auto` and provide item width to adjust to viewport
            slidesToShow: 2,
            slidesToScroll: 1,
        }
        },{
          // screens greater than >= 1024px
        breakpoint: 800,
        settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
        }
        }
    ]

});
});

// Tercer carrousel
window.addEventListener('load', function(){
    new Glider(document.querySelector('.carousel__container--third'), {
        slidesToShow: 1.2,
        slidesToScroll: 1,
        draggable: true,
        arrows: {
    },
    responsive: [
        {
          // screens greater than >= 775px
        breakpoint: 458,
        settings: {
            // Set to `auto` and provide item width to adjust to viewport
            slidesToShow: 1.5,
            slidesToScroll: 1,
        }
        },{
          // screens greater than >= 1024px
        breakpoint: 800,
        settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
        }
        }
    ]

});
});


// Acordeon menú final

const bloque    = document.querySelectorAll('.menu__div')
const h3        = document.querySelectorAll('.h3')
    
h3.forEach( ( cadaH2 , i )=>{
    // Asignando un CLICK a cada h3
    h3[i].addEventListener('click', ()=>{

        // Recorremos los bloques
        bloque.forEach( ( cadaBloque , i )=>{
            // Quitamos la clase activo de TODOS los bloques
            bloque[i].classList.remove('activo')
            
        })
        bloque[i].classList.add('activo')

    })
})

const columna    = document.querySelectorAll('.colum')
const li        = document.querySelectorAll('.li')
    
li.forEach( ( cadaH2 , i )=>{
    // Asignando un CLICK a cada h3
    li[i].addEventListener('click', ()=>{
        // Recorremos los bloques
        columna.forEach( ( cadaBloque , i )=>{
            // Quitamos la clase activo de TODOS los bloques
            columna[i].classList.remove('active')
        })
        columna[i].classList.add('active');

    })
})

// Sidebar

const sidebar= document.querySelector('.sidebar');
const hamburguer = document.querySelector('.hamburguer');
const content = document.querySelector('.main');

hamburguer.addEventListener('click', () => {
    sidebar.classList.toggle('open-sidebar');
    content.classList.toggle('desenfoque');
});
