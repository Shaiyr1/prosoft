import React from 'react';
import NetWork from '../../components/orders/network/NetWork';
import OrdersHistory from '../../components/orders/ordersHistory/OrdersHistory';
import style from './Orders.module.scss';

function Orders() {
  return (
    <section className={style.orders}>
      <NetWork/>
      <OrdersHistory/>
    </section>
  )
}

export default Orders
