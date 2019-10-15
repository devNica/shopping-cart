var Product = require('../models/Product');

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/shopping', { useNewUrlParser: true });

var products = [

    new Product({
        imagePath: 'https://res.cloudinary.com/teepublic/image/private/s--CEvzwXby--/t_Resized%20Artwork/c_fit,g_north_west,h_1054,w_1054/co_ffffff,e_outline:53/co_ffffff,e_outline:inner_fill:53/co_bbbbbb,e_outline:3:1000/c_mpad,g_center,h_1260,w_1260/b_rgb:eeeeee/c_limit,f_jpg,h_630,q_90,w_630/v1538410172/production/designs/3241393_0.jpg',
        title: 'Mario Smash Bro',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad vel totam eveniet! Voluptate dolorum quo soluta ipsa vero distinctio provident inventore praesentium. Eos.',
        price: 12.00
    }),

    new Product({
        imagePath: 'https://s.pacn.ws/1500/wa/the-legend-of-zelda-concert-2018-581047.2.jpg?pnzr8k',
        title: 'The Legend of Zelda',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad vel totam eveniet! Voluptate dolorum quo soluta ipsa vero distinctio provident inventore praesentium. Eos.',
        price: 17.00
    }),

    new Product({
        imagePath: 'https://m.media-amazon.com/images/M/MV5BOGQwYjkzODktNzE1Zi00N2IyLThmMmEtZDRmNDI4MjFjMjZhL2ltYWdlXkEyXkFqcGdeQXVyMTEyMDcwNw@@._V1_.jpg',
        title: 'GoldenEye',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad vel totam eveniet! Voluptate dolorum quo soluta ipsa vero distinctio provident inventore praesentium. Eos.',
        price: 6.75
    }),

    new Product({
        imagePath: 'https://static-cdn.jtvnw.net/ttv-boxart/Call%20of%20Duty%3A%20WWII.jpg',
        title: 'Call of Duty',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad vel totam eveniet! Voluptate dolorum quo soluta ipsa vero distinctio provident inventore praesentium. Eos.',
        price: 22.36
    }),

    new Product({
        imagePath: 'https://i11b.3djuegos.com/juegos/2884/diablo_3/fotos/ficha/diablo_3-1953745.jpg',
        title: 'Diablo III',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad vel totam eveniet! Voluptate dolorum quo soluta ipsa vero distinctio provident inventore praesentium. Eos.',
        price: 14.65
    }),

    new Product({
        imagePath: 'https://i.blogs.es/c65bb0/mario1/450_1000.jpg',
        title: 'Mario Kart',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad vel totam eveniet! Voluptate dolorum quo soluta ipsa vero distinctio provident inventore praesentium. Eos.',
        price: 9.25
    }),


    new Product({
        imagePath: 'https://cdna.artstation.com/p/assets/images/images/019/307/468/large/jae-haru-inside-limbo.jpg?1562889010',
        title: 'Limbo Inside',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad vel totam eveniet! Voluptate dolorum quo soluta ipsa vero distinctio provident inventore praesentium. Eos.',
        price: 19.00
    }),


    new Product({
        imagePath: 'https://images-na.ssl-images-amazon.com/images/I/915BYoO50oL._SL1500_.jpg',
        title: 'Fifa 19',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad vel totam eveniet! Voluptate dolorum quo soluta ipsa vero distinctio provident inventore praesentium. Eos.',
        price: 21.13
    }),



    new Product({
        imagePath: 'https://pictures.abebooks.com/isbn/9781589943018-es.jpg',
        title: 'World of WarCraft',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad vel totam eveniet! Voluptate dolorum quo soluta ipsa vero distinctio provident inventore praesentium. Eos.',
        price: 19.00
    }),


    new Product({
        imagePath: 'https://images-na.ssl-images-amazon.com/images/I/71%2BFmXQukWL._SX342_.jpg',
        title: 'Need for Speed',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad vel totam eveniet! Voluptate dolorum quo soluta ipsa vero distinctio provident inventore praesentium. Eos.',
        price: 12.35
    }),

];

var done = 0;

for (let index = 0; index < products.length; index++) {
    products[index].save(function (err, result) {
        done++;
        if (done === products.length) {
            exit();
        }
    })

}

function exit() {
    mongoose.disconnect();
}
