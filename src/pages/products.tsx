import React from 'react';
import { connect } from 'dva';
import ProductList from '../components/ProductList';

interface ProductAction {
    dispatch(obj:{type:string,payload:number}):any ;
    qbs:products  ;
}
const Products = (dis:ProductAction) => {
	console.log("TCL: Products -> dis", dis)
  function handleDelete(id:number) {
    dis.dispatch({
      type: 'products/delete',
      payload: id,
    });
  }
  return (
    <div>
      <h2>List of Products</h2>
      <ProductList onDelete={handleDelete} products={dis.qbs} />
    </div>
  );
};

// export default Products;
let fn =  (obj:any) => {
console.log("TCL: fn -> obj", obj)

  return {
    qbs:obj.products,
    abc:'abc'
  }
} ;
let aa = connect(fn)(Products) ; 
console.log("TCL: aa", aa)

export default aa;
