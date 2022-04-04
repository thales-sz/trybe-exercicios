const order = {
  name: "Rafael Andrade",
  phoneNumber: "11-98763-1416",
  address: {
    street: "Rua das Flores",
    number: "389",
    apartment: "701",
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
      },
    },
    drinks: {
      coke: {
        type: "Coca-Cola Zero",
        price: 10,
        amount: 1,
      },
    },
    delivery: {
      deliveryPerson: "Ana Silveira",
      price: 5,
    },
  },
  payment: {
    total: 60,
  },
};

const customerInfo = (order) => {
  const entregador = order.order.delivery.deliveryPerson;
  const cliente = order.name;
  const telefone = order.phoneNumber;
  const rua = order.address['street'];
  const numero = order.address['number'];
  const apt = order.address['apartment'];
  console.log(
    `Olá ${entregador}, entrega para: ${cliente}, Telefone: ${telefone}, R. ${rua}, Nº: ${numero} AP: ${apt}`
  );
};
customerInfo(order);

const orderModifier = (order) => {
  const client = order.name = 'Luiz Silva';
  const pizza = Object.keys(order.order.pizza);
  const bebida = order.order.drinks.coke.type;
  console.log(`Olá ${client}, o total do seu pedido de ${pizza[0]}, ${pizza[1]} e ${bebida}`);
};

orderModifier(order);
