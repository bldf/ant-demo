import React from 'react';
import { connect } from 'dva';
import ProductList from '../components/ProductList';

interface ProductAction {
    dispatch(obj:{type:string,payload:number}):any ;
    products:products  ;
}

const Products = (dis:ProductAction) => {
  function handleDelete(id:number) {
    dis.dispatch({
      type: 'products/delete',
      payload: id,
    });
  }
  return (
    <div>
      <h2>List of Products</h2>
      <ProductList onDelete={handleDelete} products={dis.products} />
    </div>
  );
};

// export default Products;
export default connect(
  (obj:ProductAction) => ({
    products:obj.products
})
)(Products);
