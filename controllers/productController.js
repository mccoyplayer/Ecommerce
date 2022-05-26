import productModel from "../models/productModel.js";

//only getAllProducts and getSingleProduct is accessible to public
//rest all controllers are for admin only

export const createProduct = async (req, res) => {
  req.body.user = req.user.userId;
  try {
    const product = await productModel.create(req.body);
    res.status(201).json({
      product,
    });
  } catch (err) {
    console.log(err);
    res.status(400).json({
      msg: "failed to save to database",
    });
  }
};

export const getAllProducts = async (req, res) => {
  const products = await productModel.find({});

  if (!products) {
    return res.status(400).json({
      msg: "no products found",
    });
  }

  res.status(200).json({
    count: products.length,
    products,
  });
};

export const getSingleProduct = async (req, res) => {
  const productId = req.params.id;

  try {
    const product = await productModel.findOne({
      _id: productId,
    });
    if (!product) {
      return res.status(400).json({
        msg: "failed to find any product",
      });
    }
    res.status(200).json({
      product,
    });
  } catch (err) {
    console.log(err);
    res.status(400).json({
      msg: "failed to find any product",
    });
  }
};

export const deleteProduct = async (req, res) => {
  const productId = req.params.id;
  
  try {
    const product = await productModel.findOneAndDelete({
      _id: productId,
    });
    if (!product) {
      return res.status(400).json({
        msg: "failed to find any product",
      });
    }
    res.status(200).json({
      msg:`Successfuly deleted product with ID ${productId}`
    });
  } catch (err) {
    console.log(err);
    res.status(400).json({
      msg: "failed to find any product",
    });
  }
};

export const updateProduct = async (req, res) => {
  const productId = req.params.id;
  
  try {
    const product = await productModel.findOneAndUpdate(
      {
        _id: productId,
      },
      req.body,
      {
        new: true,
        runValidators: true,
      }
      );
      if (!product) {
        return res.status(400).json({
          msg: "failed to find any product",
        });
      }
      res.status(201).json({
        product,
      });
    } catch (err) {
      console.log(err);
      res.status(400).json({
        msg: "failed to find any product",
      });
    }
  };
  
  export const uploadImage = async (req, res) => {
    
  };