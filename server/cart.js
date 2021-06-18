let add = (cart, req) => {
    let find = cart.find(el => el.id === +req.body.id);
    if (find) {
        find.quantity += req.body.quantity;
    } else {
        cart.push(req.body);
    }
    return JSON.stringify(cart, null, 4);
};

let remove = (cart, req) => {
    let findIdx = cart.findIndex(el => el.id === +req.body.id);
    if (findIdx >= 0) {
        cart.splice(findIdx, 1);
    }
    return JSON.stringify(cart, null, 4);
};

// let change = (cart, req) => {
//     let find = cart.find(el => el.id_product === +req.params.id);
//     find.quantity += req.body.quantity;
//     return JSON.stringify(cart, null, 4);
// };

module.exports = {
    add,
    // change,
    remove
};