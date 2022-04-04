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

const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

const addTurno = (obj, key, value) => {
  obj[key] = value;
  return obj;
}
console.log(addTurno(lesson2, 'turno', 'noite'));

const keysList = (obj) => {
  const lista = Object.keys(obj);
  return lista;
}
console.log(keysList(lesson1));

const objLength = (obj) => {
  const tamanho = Object.keys(obj).length;
  return tamanho;
}
console.log(`O objeto possui tamanho de ${objLength(lesson2)}`);

const valueList = (obj) => {
  const valores = Object.values(obj);
  return valores;
}
console.log(valueList(lesson1));

const allLessons = () => {
  const result = Object.assign({}, {lesson1, lesson2, lesson3});
  return result;
}
console.log(allLessons());