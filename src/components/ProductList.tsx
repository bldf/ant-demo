import React from 'react';
import PropTypes from 'prop-types';
import { Table, Popconfirm, Button } from 'antd';

const ProductList = ({ onDelete, products }:{onDelete :onDelete, products:products}) => {
  const columns = [{
    title: 'Name',
    dataIndex: 'name',
    key:'name',
  }, {
    title: 'Actions',
    dataIndex: 'actions',
    key:'actions',
    render: (text:any, record:{id:number}) => {
      return (
        <Popconfirm title="Delete?" onConfirm={onDelete(record.id)}>
          <Button>Delete</Button>
        </Popconfirm>
      );
    },
  }];
  return (
    <Table
      dataSource={products}
      columns={columns}
      rowKey="id"
    />
  );
};


ProductList.propTypes = {
  onDelete: PropTypes.func.isRequired,
  products: PropTypes.array.isRequired,
};

export default ProductList;
