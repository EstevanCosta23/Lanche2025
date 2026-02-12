const ProductService = require('../services/productService');

class ProductController {

  async index(req, res) {
    try {
      const products = await ProductService.getAllProducts();
      return res.json(products);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }

  async show(req, res) {
    try {
      const { id } = req.params;
      const product = await ProductService.getProductById(id);
      if (!product) {
        return res.status(404).json({ error: 'Product not found' });
      }
      return res.json(product);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }

  async store(req, res) {
    try {
      const product = await ProductService.createProduct(req.body);
      return res.status(201).json(product);
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  }

  async update(req, res) {
    try {
      const { id } = req.params;
      const product = await ProductService.updateProduct(id, req.body);
      return res.json(product);
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  }

  async delete(req, res) {
    try {
      const { id } = req.params;
      await ProductService.deleteProduct(id);
      return res.status(204).send("Product was deleted");
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }
}

module.exports = new ProductController();