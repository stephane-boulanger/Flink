import { ConsoleSqlOutlined } from "@ant-design/icons";
import React from "react";
import Header from "../header/Header";
import Sidebar from "../sidebar/Sidebar";

function Products() {
  const [data, setData] = React.useState(null);
  const [productsdata, setProductsData] = React.useState([]);

  // React.useEffect(() => {
  //   fetch("http://localhost:4000/categories")
  //     .then((res) => res.json())
  //     .then((data) =>
  //       data.map((item) => {
  //         let newArray = [];
  //         item.product_skus.map((item) => {
  //           newArray.push(item);
  //           setProductsData(newArray);
  //           return item;
  //         });
  //       })
  //     );
  // }, []);

  // React.useEffect(() => {
  //   fetch("http://localhost:4000/products", productsdata)
  //     .then((res) => res.json())
  //     .then((data) => console.log(data)
  // }, [productsdata]);

  React.useEffect(() => {
    fetch("http://localhost:4000/categories")
      .then((res) => res.json())
      .then((data) => setProductsData(data));
  }, []);

  console.log(productsdata);

  return (
    <div>
      <Header />
      <Sidebar categoriesData={productsdata} />
    </div>
  );
}

export default Products;
