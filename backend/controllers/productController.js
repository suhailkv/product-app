const { mysql, postgres } = require('../config/database');
const Product = require('../models/product');
const Profit = require('../models/profit');

exports.getAllProducts = async (req,res) => {
  try {

    const products = await Product.findAll();
    res.status(200).json(products)
  } catch (error) {
    res.json(500).json({error:"Internal Error"})
  }
}

exports.createProduct = async (req, res) => {
  const transactionMySQL = await mysql.transaction();
  const transactionPostgres = await postgres.transaction();

  try {
    const { name, purchase_price, sales_price } = req.body;

    const profit = sales_price - purchase_price;

    const productObj = await Product.create({
      name,
      purchase_price,
      sales_price,
      profit
    },{transaction:transactionMySQL});

    const product_id = productObj.insertId;

    const profitObj = await Profit.create({
      product_id,profit
    },{transaction:transactionPostgres})

    await transactionMySQL.commit();
    await transactionPostgres.commit();

    res.status(201).json(productObj);
  } catch (err) {
    console.error(err);

    await transactionMySQL.rollback();
    await transactionPostgres.rollback();

    res.status(500).json({ error: 'Internal server error' });
  }
};

exports.getProductWithProfit = async (req, res) => {
  try {
    const {product_id} = req.params
    const product = await Product.findOne({where:{product_id}})

    if (!product) return res.status(404).json({ error: 'Product not found' });

    const profictRecords = Profit.findAll({where:{product_id}})

    if (!profictRecords) return res.status(404).json({ error: 'Profit record not found' });

    res.json({ product, 
      profit: profictRecords.profit 
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal server error' });
  }
};
