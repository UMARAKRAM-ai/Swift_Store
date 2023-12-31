import Product from '../models/productModel.js'

//@desc fetch all products
//@route GET /api/products
//@access public
const getProducts = async (req, res)=>{
  const pageSize = 8;
  const page = Number(req.query.pageNumber) || 1;

  const keyword = req.query.keyword ? { name: { $regex: req.query.keyword, $options: 'i' } } : {}; 

  const count = await Product.countDocuments({...keyword});

  const products = await Product.find({...keyword})
  .limit(pageSize)
  .skip(pageSize * (page - 1));
  res.json({products, page, pages: Math.ceil(count / pageSize)})
}


//@desc fetch product by ID
//@route GET /api/products
//@access public
const getProductById = async (req, res)=>{
  const product = await Product.findById(req.params.id); 

  if(product){
    res.json(product)
  }else {
    res.status(404).json({message: 'page not found'});
  }
}


//@desc Create a product
//@route POST /api/products
//@access privatepublic
const createProduct = async (req, res)=>{
  const product = new Product({
    name: 'Sample name',
    price: 0,
    user: req.user._id,
    image: '/images/sample.jpg',
    brand: 'Sample Brand',
    category: 'Sample category',
    countInStock: 0,
    numReviews: 0,
    description: 'sample description',
  })

  const createdProduct = await product.save();
  res.status(201).json(createdProduct);
}


//@desc update a product
//@route PUT /api/products/:id
//@access private/Admin
const updateProduct = async (req, res)=>{
  const { name, price, description, image, brand, category, countInStock } = req.body;
  const product = await Product.findById(req.params.id);

  if(product){
    product.name = name;
    product.price = price;
    product.description = description;
    product.image = image;
    product.brand = brand;
    product.category = category;
    product.countInStock = countInStock;

    const updatedProduct = await product.save();
    res.status(201).json(updatedProduct);
  } else{
    res.status(404).json({message: 'Resource not found'});
  }
}


//@desc delete a product
//@route DELETE /api/products/:id
//@access private/Admin
const deleteProduct = async (req, res)=>{
  const product = await Product.findById(req.params.id);

  if(product){
    
    await Product.deleteOne({_id: product._id});
    res.status(201).json({message: 'Product deleted'});
  } else{
    res.status(404).json({message: 'Resource not found'});
  }
}

//@desc create a review
//@route POST /api/products/:id/reviews
//@access private
const createProductReview = async (req, res) => {
  const { rating, comment } = req.body;

  const product = await Product.findById(req.params.id);

  if (product) {
    const alreadyReviewed = product.reviews.find(
      (r) => r.user.toString() === req.user._id.toString()
    );

    if (alreadyReviewed) {
      res.status(400);
      throw new Error('Product already reviewed');
    }

    const review = {
      name: req.user.name,
      rating: Number(rating),
      comment,
      user: req.user._id,
    };

    product.reviews.push(review);

    product.numReviews = product.reviews.length;

    product.rating =
      product.reviews.reduce((acc, item) => item.rating + acc, 0) /
      product.reviews.length;

    await product.save();
    res.status(201).json({ message: 'Review added' });
  } else {
    res.status(404);
    throw new Error('Product not found');
  }
};



// @desc    Get top rated products
// @route   GET /api/products/top
// @access  Public
const getTopProducts = async (req, res) => {
  const products = await Product.find({}).sort({ rating: -1 }).limit(3);

  res.json(products);
};



export {getProducts, getProductById, createProduct, updateProduct, deleteProduct, createProductReview, getTopProducts };