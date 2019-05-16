import * as React from 'react';
import { Table, Popconfirm, Button } from 'antd';

const ProductList = ({ onDelete, products }) => {
  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
    },
    {
      title: 'Actions',
      render: (text, record) => {
        return (
          <Popconfirm title="Delete?" onConfirm={() => onDelete(record.id)}>
            <Button>Delete</Button>
          </Popconfirm>
        );
      },
    },
  ];
  return <Table dataSource={products} columns={columns} />;
};

export default ProductList;


// import * as React from 'react';
// // import Button from 'antd/lib/button';
// import { Table, Popconfirm, Button } from 'antd';
// import './App.css';

// class ProductList extends React.Component {
    
//   render(text,record) {
//     return (
//         <Popconfirm title="Delete?" onConfirm={() => onDelete(record.id)}>
//             <Button>Delete</Button>
//         </Popconfirm>
//     );
//   }
// }

// export default ProductList
