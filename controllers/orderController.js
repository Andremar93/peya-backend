const Order = require('../models/Order');

// Crear un nuevo pedido
const createOrder = async (req, res) => {
  try {
    const order = new Order(req.body);
    const saved = await order.save();
    res.status(201).json(saved);
  } catch (error) {
    res.status(400).json({ message: 'Error al crear pedido', error });
  }
};

// Obtener historial de pedidos
const getOrders = async (req, res) => {
  try {
    const orders = await Order.find().sort({ timestamp: -1 });
    res.json(orders);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener pedidos', error });
  }
};


const getOrdersByUserId = async (req, res) => {
  try {
    const { userId } = req.params;

    const orders = await Order.find({ userId }).sort({ timestamp: -1 });

    if (orders.length === 0) {
      return res.status(404).json({ message: 'No se encontraron pedidos para este usuario.' });
    }

    res.json(orders);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener pedidos por usuario', error });
  }
};


module.exports = {
  createOrder,
  getOrders,
  getOrdersByUserId
};
