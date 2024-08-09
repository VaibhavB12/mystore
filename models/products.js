const pool = require("../utils/database");

module.exports = class Products {
  constructor(id, productname, price, image) {
    this.id = id;
    this.productname = productname;
    this.price = price;
    this.image = image;
  }

  static fetchProduct() {
    return pool.execute("select * from products");
  }

  postData() {
    // pool.execute("query", [values])
    return pool.execute(
      "insert into products(productname,price,img) values(?,?,?)",
      [this.productname, this.price, this.image],
    );
  }

  static fetchProductById(id) {
    return pool.execute("select * from products where id=?", [id]);
  }

  editData() {
    return pool.execute(
      "update products set productname=?,price=?,img=? where id=?",
      [this.productname, this.price, this.image, this.id],
    );
  }

  static deleteProductById(id) {
    return pool.execute("delete from products where id=?", [id]);
  }
};

//pool.execute Method: The execute method is used to run SQL queries against the database. It is designed to handle parameterized queries, which helps in preventing SQL injection attacks.
