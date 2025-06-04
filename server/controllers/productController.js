import Product from '../models/Product.js';

export const getProducts = async (req, res) => {
  const { keyword, category, color, size } = req.query;
  const filter = {};
  if (keyword) filter.name = { $regex: keyword, $options: 'i' };
  if (category) filter.category = category;
  if (color) filter.colors = color;
  if (size) filter.sizes = size;
  const products = await Product.find(filter);
  res.json(products);
};

export const getProductById = async (req, res) => {
  const product = await Product.findById(req.params.id);
  if (product) res.json(product);
  else res.status(404).json({ message: 'Product not found' });
};

export const createProduct = async (req, res) => {
  const { name, brand, category, description, price, images, sizes, colors, tags } = req.body;
  const newProduct = await Product.create({ name, brand, category, description, price, images, sizes, colors, tags, inStock: true });
  res.status(201).json(newProduct);
};

export const updateProduct = async (req, res) => {
  const product = await Product.findById(req.params.id);
  if (!product) return res.status(404).json({ message: 'Product not found' });
  Object.assign(product, req.body);
  await product.save();
  res.json(product);
};

export const deleteProduct = async (req, res) => {
  const product = await Product.findById(req.params.id);
  if (!product) return res.status(404).json({ message: 'Product not found' });
  await product.remove();
  res.json({ message: 'Product removed' });
}; 