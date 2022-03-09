const order = {
  name: 'Rafael Andrade',
  phoneNumber: '11-98763-1416',
  address: {
    street: 'Rua das Flores',
    number: '389',
    apartment: '701',
  },
  order: {
    pizza: {
      marguerita: {
        amount: 1,
        price: 25,
      },
      pepperoni: {
        amount: 1,
        price: 20,
      }
    },
    drinks: {
      coke: {
        type: 'Coca-Cola Zero',
        price: 10,
        amount: 1,
      }
    },
    delivery: {
      deliveryPerson: 'Ana Silveira',
      price: 5,
    }
  },
  payment: {
    total: 60,
  },
};

const customerInfo = (order) => {
  const deliveryPerson = order.order.delivery.deliveryPerson;
  const client = order.name;
  const phoneNumber = order.phoneNumber;
  const street = order.address.street;
  const houseNumber = order.address.number;
  const apNumber = order.address.apartment;
  return `Olá ${deliveryPerson}, entrega para: ${client}, Telefone: ${phoneNumber}, R. ${street}, N°: ${houseNumber}, AP: ${apNumber}.`;
}

customerInfo(order);

const orderModifier = (order) => {
  order.name = "Luiz Silva";
  order.order.pizza.marguerita = 20;
  const pizzas = Object.keys(order.order.pizza);
  d
  return `Olá ${order.name} o total do seu pedido de ${pizzas[0]}, ${pizzas[1]} e `
}

orderModifier(order);

console.log(orderModifier(order));