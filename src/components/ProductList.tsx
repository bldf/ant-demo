import * as React from 'react';
import { Table, Popconfirm, Button } from 'antd';

interface ProductListProps{
  products:object[];
  onDelete:(id:number)=>void;
}

// const columns = [
//     {
//       title: 'Name',
//       dataIndex: 'name',
//     },
//     {
//       title: 'Actions',
//       render: (text: any, record: { id: number; }) => {
//         return (
//           <Popconfirm title="Delete?" onConfirm={() => onDelete(record.id)}>
//             <Button>Delete</Button>
//           </Popconfirm>
//         );
//       },
//     },
//   ]

// const ProductList = (props: ProductListProps) => {
//     const { products, onDelete} = props;
    // const columns = [
    //   {
    //     title: 'Name',
    //     dataIndex: 'name',
    //   },
    //   {
    //     title: 'Actions',
    //     render: (text: any, record: { id: number; }) => {
    //       return (
    //         <Popconfirm title="Delete?" onConfirm={() => onDelete(record.id)}>
    //           <Button>Delete</Button>
    //         </Popconfirm>
    //       );
    //     },
    //   },
    // ];


//     return <Table dataSource={products} columns={columns} />;

//   };
  
//   export default ProductList;


export default class ProductList extends React.Component<ProductListProps, {}> {
    render() {
           const columns = [
                {
                    title: 'Name',
                    dataIndex: 'name',
                },
                {
                    title: 'Actions',
                    render: (text: any, record: { id: number; }) => {
                    return (
                         // tslint:disable-next-line:jsx-no-lambda
                         <Popconfirm title="Delete?" onConfirm={() =>this.props.onDelete(record.id)}>
                              <Button>Delete</Button>
                        </Popconfirm>
                    );
                    },
                },
                ];
        return (<Table dataSource={this.props.products} columns={columns} />)
    }
    
}
