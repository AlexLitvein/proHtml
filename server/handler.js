const cart = require('./cart');
const fs = require('fs');

const actions = {
    add: cart.add,
    // change: cart.change,
    remove: cart.remove
};
//HANDLER отвечает за изменение данных в самом файле
let handler = (req, res, action, file) => {
    fs.readFile(file, 'utf-8', (err, data) => {
        if (err) {
            res.sendStatus(404, JSON.stringify({ result: 0, text: err }));
        } else {
            let newCart = actions[action](JSON.parse(data), req);
            fs.writeFile(file, newCart, (err) => {
                if (err) {
                    res.sendStatus(404, JSON.stringify({ result: 0, text: err }));
                } else {
                    const data = new Date();
                    fs.appendFile('server/stats.json', JSON.stringify({ date: data, act: action, name: req.body.name }) + ',\n', 'utf8', () => { });
                    return res.send(JSON.stringify({ result: 1 }));
                }
            })
        }
    })
};



module.exports = handler;