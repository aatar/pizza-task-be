const { Pizza } = require('../models');

exports.addPizza = (req, res, next) => {
  const { name, description, price } = req.body;
  if (name && description && price) {
    return Pizza.create({
      name,
      description,
      price
    })
      .then(createdUser => res.status(201).send(createdUser))
      .catch(next);
  }
  return res.status(422).send('Incomplete data');
};

exports.getPizzas = (req, res, next) =>
  Pizza.findAll()
    .then(response => res.send(response))
    .catch(next);
