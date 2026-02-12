const { Product, Category } = require('../database/models');

class ProductService {

  async getAllProducts() {
    try {
      return await Product.findAll({
        include: {
          model: Category,
          as: 'category',
          attributes: ['id', 'name']
        }
      });
    } catch (error) {
      throw new Error(error.message);
    }
  }

  async getProductById(id) {
    try {
      const product = await Product.findByPk(id, {
        include: {
          model: Category,
          as: 'category',
          attributes: ['id', 'name']
        }
      });
      if (!product) throw new Error('Produto não encontrado');
      return product;
    } catch (error) {
      throw new Error(error.message);
    }
  }

  async createProduct(data) {
    try {
      return await Product.create(data);
    } catch (error) {
      throw new Error(error.message);
    }
  }

  async updateProduct(id, data) {
    try {
      const product = await Product.findByPk(id);
      if (!product) throw new Error('Produto não encontrado');
      return await product.update(data);
    } catch (error) {
      throw new Error(error.message);
    }
  }

  async deleteProduct(id) {
    try {
      const product = await Product.findByPk(id);
      if (!product) throw new Error('Produto não encontrado');
      await product.destroy();
      return true;
    } catch (error) {
      throw new Error(error.message);
    }
  }

}

module.exports = new ProductService();