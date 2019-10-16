var Product = require('../models/Product');

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/shopping', { useNewUrlParser: true });

var products = [

    new Product({
        imagePath: 'https://res.cloudinary.com/teepublic/image/private/s--CEvzwXby--/t_Resized%20Artwork/c_fit,g_north_west,h_1054,w_1054/co_ffffff,e_outline:53/co_ffffff,e_outline:inner_fill:53/co_bbbbbb,e_outline:3:1000/c_mpad,g_center,h_1260,w_1260/b_rgb:eeeeee/c_limit,f_jpg,h_630,q_90,w_630/v1538410172/production/designs/3241393_0.jpg',
        title: 'Mario Smash Bro',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad vel totam eveniet! Voluptate dolorum quo soluta ipsa vero distinctio provident inventore praesentium. Eos.',
        price: 12.31
    }),

    new Product({
        imagePath: 'https://s.pacn.ws/1500/wa/the-legend-of-zelda-concert-2018-581047.2.jpg?pnzr8k',
        title: 'The Legend of Zelda',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad vel totam eveniet! Voluptate dolorum quo soluta ipsa vero distinctio provident inventore praesentium. Eos.',
        price: 17.50
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
        price: 19.78
    }),


    new Product({
        imagePath: 'https://images-na.ssl-images-amazon.com/images/I/71%2BFmXQukWL._SX342_.jpg',
        title: 'Need for Speed',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad vel totam eveniet! Voluptate dolorum quo soluta ipsa vero distinctio provident inventore praesentium. Eos.',
        price: 12.35
    }),


    new Product({
        imagePath: 'https://i11a.3djuegos.com/juegos/8298/fortnite/fotos/ficha/fortnite-3787420.jpg',
        title: 'Fortnite',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad vel totam eveniet! Voluptate dolorum quo soluta ipsa vero distinctio provident inventore praesentium. Eos.',
        price: 14.68
    }),

    new Product({
        imagePath: 'https://i11d.3djuegos.com/juegos/7379/a_game_of_thrones_rpg/fotos/ficha/a_game_of_thrones_rpg-1980699.jpg',
        title: 'Game of Thrones',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad vel totam eveniet! Voluptate dolorum quo soluta ipsa vero distinctio provident inventore praesentium. Eos.',
        price: 26.01
    }),

    new Product({
        imagePath: 'https://http2.mlstatic.com/pes-2019-ps4-secundaria-D_NQ_NP_691488-MLA28041687159_082018-F.jpg',
        title: 'PES 2019',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad vel totam eveniet! Voluptate dolorum quo soluta ipsa vero distinctio provident inventore praesentium. Eos.',
        price: 16.43
    }),

    new Product({
        imagePath: 'https://www.dhresource.com/0x0/f2/albu/g9/M00/AB/B3/rBVaVVwS_SeAKGRJAAVfwC9VXrw033.jpg',
        title: 'FarCry4',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad vel totam eveniet! Voluptate dolorum quo soluta ipsa vero distinctio provident inventore praesentium. Eos.',
        price: 20.47
    }),

    new Product({
        imagePath: 'https://images-na.ssl-images-amazon.com/images/I/816IMYzvv8L._SL1500_.jpg',
        title: 'TitanFall 2',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad vel totam eveniet! Voluptate dolorum quo soluta ipsa vero distinctio provident inventore praesentium. Eos.',
        price: 18.19
    }),

    new Product({
        imagePath: 'https://images-na.ssl-images-amazon.com/images/I/71eP7oMGrlL.jpg',
        title: 'OverWatch',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad vel totam eveniet! Voluptate dolorum quo soluta ipsa vero distinctio provident inventore praesentium. Eos.',
        price: 11.33
    }),

    new Product({
        imagePath: 'https://media.gamestop.com/i/gamestop/10147001/Dark-Souls-III-The-Fire-Fades-Edition',
        title: 'Dark Soul III',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad vel totam eveniet! Voluptate dolorum quo soluta ipsa vero distinctio provident inventore praesentium. Eos.',
        price: 30.23
    }),

    new Product({
        imagePath: 'https://images-na.ssl-images-amazon.com/images/I/91-d6il-GkL.jpg',
        title: 'Doom Eternal',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad vel totam eveniet! Voluptate dolorum quo soluta ipsa vero distinctio provident inventore praesentium. Eos.',
        price: 13.06
    }),

    new Product({
        imagePath: 'https://images-na.ssl-images-amazon.com/images/S/cmx-images-prod/Item/410554/410554._SX1280_QL80_TTD_.jpg',
        title: 'Dishonored',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad vel totam eveniet! Voluptate dolorum quo soluta ipsa vero distinctio provident inventore praesentium. Eos.',
        price: 24.19
    }),

    new Product({
        imagePath: 'https://images-na.ssl-images-amazon.com/images/I/81bQ2gRlv7L.jpg',
        title: 'God of War',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad vel totam eveniet! Voluptate dolorum quo soluta ipsa vero distinctio provident inventore praesentium. Eos.',
        price: 47.69
    }),

    new Product({
        imagePath: 'https://www.superstationpc.com/wp-content/uploads/2018/09/Fallout-4-VR-PC.jpg',
        title: 'Fallout 4',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad vel totam eveniet! Voluptate dolorum quo soluta ipsa vero distinctio provident inventore praesentium. Eos.',
        price: 7.36
    }),

    new Product({
        imagePath: 'https://image.ceneostatic.pl/data/products/67027963/i-monster-hunter-world-gra-pc.jpg',
        title: 'Monster Hunter World',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad vel totam eveniet! Voluptate dolorum quo soluta ipsa vero distinctio provident inventore praesentium. Eos.',
        price: 8.26
    }),

    new Product({
        imagePath: 'https://s2.gaming-cdn.com/images/products/3160/orig/battlefield-5-deluxe-edition-xbox-one-cover.jpg',
        title: 'BattleField',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad vel totam eveniet! Voluptate dolorum quo soluta ipsa vero distinctio provident inventore praesentium. Eos.',
        price: 10.58
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
