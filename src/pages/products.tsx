import * as React from 'react';
import { connect } from 'dva';
import ProductList from '../components/ProductList';

interface IEntranceState{
  products:object[];
}

// const Products = ({ dispatch, products }) => {
//   function handleDelete(id) {
//     dispatch({
//       type: 'products/delete',
//       payload: id,
//     });
//   }
//   return (
//     <div>
//       <h2>List of Products</h2>
//       <ProductList onDelete={handleDelete} products={products} />
//     </div>
//   );
// };

// export default connect(({ products }) => ({
//   products,
// }))(Products);
interface IEntranceProps {
  dispatch?: any;
  loading?: boolean;
  onDelete:(id:number)=>void;
}
// interface IEntranceState {
//   selected: number;
//   chapterValue: [];
//   chapterLabel: string;
//   visible: boolean;
// }





// @connect(({ h5, loading }) => ({
//   h5,
//   loading: loading.models.h5,
// }))
@connect(({ products:object[]}) => ({
  Products
}))
class Products extends React.Component<IEntranceProps, IEntranceState> {
  // public readonly state: Readonly<IEntranceState> = {
  //   products:[{ name: 'dva', id: 1 }, { name: 'antd', id: 259 }]
  // }
  constructor(props:IEntranceProps) {
    super(props);

    // tslint:disable-next-line:no-console
		console.log("TCL: Products -> constructor -> this.state", this.state)
    // console.log("TCL: Products -> constructor -> this.data", data)
		// console.log("TCL: Products -> constructor -> initialState", this.initialState)
		
    // this.state = IEntranceState

      // this.state = {products:[{ name: 'dva', id: 1 }, { name: 'antd', id: 2 }]}
  }

  handleDelete(id:number){
    this.props.dispatch({
      type: 'products/delete',
      payload: id,
    });
  }

  render() {
  return (
    <div>
      <h2>List of Products</h2>
      <ProductList onDelete={this.handleDelete} products={this.state.products} />
    </div>
  );
  }

}
export default Products;
