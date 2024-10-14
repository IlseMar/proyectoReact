import mockProducts from "../assets/mokckData.json";
import React, { useEffect, useState } from "react";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";

//Logica (que va por fuera del return) para traer los productos. Promise, setTimeOut, etc.

//falta generar la promise o el retraso de 2 seg

const ItemListContainer = () => {
  const [products, setProducts] = useState([]);

  //{categoryId: "electronics"}
  const { categoryId } = useParams();

  useEffect(() => {
    let productsFiltered;
    if (categoryId) {
      productsFiltered = mockProducts.filter(
        (product) => product.category === categoryId
      );
    } else {
      productsFiltered = mockProducts;
    }
    setProducts(productsFiltered);
  }, [categoryId]);
  console.log(products);

  return <ItemList products={products} />;
};

export default ItemListContainer;
