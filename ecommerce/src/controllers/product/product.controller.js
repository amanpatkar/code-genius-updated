import Product from "../../models/product.model.js";
import { ObjectId } from "mongodb";
const getProduct = async(req, res) => {

  try {
   let product = await Product.find()
   res.status(200).json({
    data:product,
    message: "fetched Successfully!!",
  });
  } catch (error) {
    res.status(500).json({
      message: "Internal Server Error",
    });
  }
};
const createProduct = async (req, res) => {
  try {
    console.log(req.body);

    let product = await Product.create({
      title: req.body.title,
      price: req.body.price,
      description: req.body.description,
      category: req.body.category,
      image: req.body.image,
      rating: {
        rate: req.body.rating.rate,
        count: req.body.rating.count,
      },
    });


    if (!product) {
      res.status(400).json({
        message: "Something went wrong",
      });
    }
    res.status(200).json({
      message: "created Successfully!!",
    });
  } catch (err) {
    res.status(500).json({
      message: "Internal Server Error",
    });
  }
};

const updateProduct = async (req,res)=>{
try {
  let item = {
    title: req.body.title,
    price: req.body.price,
    description: req.body.description,
    category: req.body.category,
    image: req.body.image,
    rating: {
      rate: req.body.rating.rate,
      count: req.body.rating.count,
    },
  }
  let updatedProductList = await Product.updateOne({_id: new ObjectId(req.params.id)},item);
  console.log(item)
  if (!updatedProductList || !req.params.id) {
    res.status(400).json({
      message: "Something went wrong",
    });
  }
  res.status(200).json({
    message: "updated Successfully!!",
  });
} catch (error) {
  console.log(error);
  res.status(500).json({
    message: "Internal Server Error",
  });
}
}

const deleteProduct = async (req,res) =>{
  try {
    let id = req.params.id;
    let deletedProduct =   await Product.deleteOne({_id: new ObjectId(id)});
    if(!deletedProduct){
      res.status(400).json({
        message: "Something went wrong",
      });
    }
    res.status(200).json({
      message: "deleted Successfully!!",
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Internal Server Error",
    });
  }


}

const getSingleProduct = async (req,res) =>{
try {
  let id = req.params.id;
  let singleProduct =   await Product.findOne({_id: new ObjectId(id)});
  if(!singleProduct){
    res.status(400).json({
      message: "Something went wrong",
    });
  }
  res.status(200).json({
    message: "fetched Successfully!!",
    data:singleProduct
  });
} catch (error) {
  console.log(error);
  res.status(500).json({
    message: "Internal Server Error",
  });
}
}
export default {
  getProduct,
  createProduct,
  updateProduct,
  deleteProduct,
  getSingleProduct
};
