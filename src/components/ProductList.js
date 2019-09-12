import { Table, Popconfirm, Button } from 'antd';
import styles from './ProductList.css';

const ProductList = ({ onDelete, products }) => {
  const columns = [
    {
      title: '名称',
      dataIndex: 'name',
    },
    {
      title: '操作',
      render: (text, record) => {
        return (
          <span>
            <Button className={styles.rowBtn} type="primary">查看</Button>
            <Button className={styles.rowBtn}>编辑</Button>
            <Popconfirm title="是否确认删除?" onConfirm={() => onDelete(record.id)}>
              <Button type="danger" value="small">删除</Button>
            </Popconfirm>
          </span>
        );
      },
    },
  ];
  return <Table dataSource={products} columns={columns} rowKey="id" />;
};

export default ProductList;
