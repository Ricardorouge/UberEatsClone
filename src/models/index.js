// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';

const OrderStatus = {
  "NEW": "NEW",
  "PREPARING": "PREPARING",
  "READY_FOR_PICKUP": "READY_FOR_PICKUP",
  "PICKED_UP": "PICKED_UP",
  "COMPLETED": "COMPLETED"
};

const { Cart, CartDish, Dish, OrderDish, Order, Restaurant, User } = initSchema(schema);

export {
  Cart,
  CartDish,
  Dish,
  OrderDish,
  Order,
  Restaurant,
  User,
  OrderStatus
};