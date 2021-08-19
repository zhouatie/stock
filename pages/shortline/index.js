/* eslint-disable @next/next/no-sync-scripts */
import styles from '../../styles/shortline.module.css';
import { Row, Col, List } from 'antd';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import get from 'lodash/get';
import Head from 'next/head';
import { SyncOutlined } from '@ant-design/icons';
React.useLayoutEffect = React.useEffect;

export default function Shortline() {
  const [lists, changeList] = useState([]);

  const getList = () => {
    axios.get('/api/list').then((res) => {
      const list = get(res, 'data', []);
      changeList(list);
    });
  }
  useEffect(() => {
    getList();
  }, [lists.length]);

  return (
    <div className={styles.shortlineContainer}>
      <Head>
        <script src='http://s.thsi.cn/js/chameleon/chameleon.min.js'></script>
      </Head>
      <Row className={styles.height100}>
        <Col className={styles.height100} span={6}>
          <List
            className={styles.stockList}
            bordered
            header={<SyncOutlined onClick={getList} spin />}
            dataSource={lists}
            renderItem={(item) => (
              <List.Item className={styles.listItem}>
                <span>
                  {item.name} ({item.code})
                </span>{' '}
                <span className={styles.colorRed}>↑{item.increase}</span>
              </List.Item>
            )}
          />
        </Col>
        <Col span={18}>col-12</Col>
      </Row>
    </div>
  );
}
