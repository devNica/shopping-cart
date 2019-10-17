module.exports = function Cart(oldCart) {
    this.items = oldCart.items || {};
    this.totalQty = oldCart.totalQty || 0;
    this.totalPrice = oldCart.totalPrice || 0;

    this.add = function (item, id) {
        /* 
        item:{
            _id: productId,
            imagePath: "url",
            title: "",
            description: "",
        }

        id: productId
        
        */

        //this.items[id] is an array of objects
        var storedItem = this.items[id];

        //storedItem undefined ? storedItem = {item: item, qty: 0, price: 0}
        /*it is validated only when items [id] does not return a value, that is, when it does not find within the array a product with that id that is already stored*/
        if (!storedItem) {
            console.log("storedItem: " + storedItem);
            storedItem = this.items[id] = { item: item, qty: 0, price: 0 };
        }

        storedItem.qty++;
        storedItem.price = storedItem.item.price * storedItem.qty; //subtotal
        this.totalQty++;
        this.totalPrice += storedItem.item.price;
    };

    this.reduceByOne = function (id) {
        this.items[id].qty--;
        this.items[id].price -= this.items[id].item.price;
        this.totalQty--;
        this.totalPrice -= this.items[id].item.price;

        if (this.items[id].qty <= 0) {
            delete this.items[id];
        }
    }

    this.removeItems = (id) => {
        this.totalQty -= this.items[id].qty;
        this.totalPrice -= this.items[id].price;
        delete this.items[id];
    }

    this.generateArray = function () {
        var arr = [];
        for (var id in this.items) {
            arr.push(this.items[id]);
        }
        return arr;
    };
}