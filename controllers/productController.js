const Products = require("../models/products");

// const products = [
// {
//     id: 1,
//     productname: "Apple",
//     price: 20,
//     img: 'apples.jpg'
// },
// {
//     id: 1,
//     productname: "Banana",
//     price: 20,
//     img: 'bananas.jpg'
// },
// {
//     id: 1,
//     productname: "Orange",
//     price: 20,
//     img: 'orange.jpg'
// },
// {
//     id: 1,
//     productname: "Pineapple",
//     price: 20,
//     img: 'pineapple.jpg'
// },
// {
//     id: 1,
//     productname: "Strawberry",
//     price: 20,
//     img: 'strawberry.jpg'
// },
// ]

exports.renderProducts = (req, res) => {
  // res.send('Welcome to home route')
  // const cookie = req.get("Cookie").split(';')[0].split('=')[1]; // use cookie-parser middleware instead
  // const cookie = req.cookies;
  const cookie = req.session.isLoggedIn;
  console.log(cookie); // isLoggedIn=invalidUsername

  Products.fetchProduct().then(([rows, fieldData]) => {
    // console.log(rows);
    // console.log(fieldData);
    res.render("home", { 
      products:rows, 
      // isLoggedIn:cookie.isLoggedIn,
      isLoggedIn:cookie 
    });
  });
  // res.render("home", {products: products})
};

exports.renderAddProduct = (req, res) => {
  const cookie = req.session.isLoggedIn;
  res.render("add-product", 
    { 
      // isLoggedIn: req.cookies.isLoggedIn,
      isLoggedIn: req.cookie
    });
};

exports.renderEditProducts = (req, res) => {
  const cookie = req.session.isLoggedIn;
  Products.fetchProductById(req.params.id).then(
    ([[productData], fieldData]) => {
      // console.log(productData);
      res.render("edit-product", { 
        product: productData, 
        // isLoggedIn: req.cookies.isLoggedIn, 
        isLoggedIn: req.cookie
      });
    },
  );
  // res.render("edit-product", { product: products[--req.params.id]})

  // Decrementing the ID (--req.params.id) in the given code suggests that the products array is being accessed with a zero-based index, while the id parameter from the URL might be one-based. This approach adjusts the ID to match the array indexing.
};

exports.postAddProduct = (req, res) => {
  // console.log(req.body);
  const { productname, price, image } = req.body;
  const products = new Products(null, productname, price, image);
  products.postData().then(() => {
    res.redirect("/"); // user will be redirected to home page
  });
};

exports.editProduct = (req, res) => {
  const { productname, price, image } = req.body;
  const id = req.params.id;
  const products = new Products(id, productname, price, image);
  products.editData().then(() => {
    res.redirect("/");
  });
};

exports.deleteProduct = (req, res) => {
  Products.deleteProductById(req.params.id).then(() => {
    res.redirect("/");
  });
};
