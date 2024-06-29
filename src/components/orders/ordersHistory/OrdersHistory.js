import React, { useState } from 'react';
import style from './OrdersHistory.module.scss';

function OrdersHistory() {

    const [activeTab, setActiveTab] = useState('Все');

    const orders = [
        {

            id: 1, service: 'Текст', date: '21 июня', startQty: 120, qty: 500, remaining: 500, status: 'В очереди'
        },
        { id: 2, service: 'Текст', date: '21 июня', startQty: 120, qty: 500, remaining: 500, status: 'Выполнено частично' },
        // Add more orders as needed
    ];

    const tabs = ['Все', 'В очереди', 'Обработка заказов', 'В процессе', 'Выполнено частично', 'Завершено', 'Отменено'];

    const handleTabClick = (tab) => {
        setActiveTab(tab);
    };

    const filteredOrders = activeTab === 'Все' ? orders : orders.filter(order => order.status === activeTab);

    return (
        <section className={style.ordersHistory}>
            <h2>История заказов</h2>
            <div className={style.ordersHistory__tabs}>
                {tabs.map(tab => (
                    <button
                        key={tab}
                        className={`${style.ordersHistory__tab} ${activeTab === tab ? style.activeTab : ''}`}
                        onClick={() => handleTabClick(tab)}
                    >
                        {tab}
                    </button>
                ))}
            </div>
            <table className={style.ordersHistory__content}>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th className={style.ordersHistory__content_second}>Услуга</th>
                        <th>Дата</th>
                        <th>Начальное кол-во</th>
                        <th>Кол-во</th>
                        <th>Осталось</th>
                        <th>Статус</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredOrders.map(order => (
                        <tr key={order.id}>
                            <td>{order.id}</td>
                            <td>{order.service}</td>
                            <td>{order.date}</td>
                            <td>{order.startQty}</td>
                            <td>{order.qty}</td>
                            <td>{order.remaining}</td>
                            <td>{order.status}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <div className={style.adaptive__block}>
                {filteredOrders.map((order, index) => (
                    <table className={style.ordersHistory__contentAdaptive} key={index}>
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th className={style.ordersHistory__content_second}>Услуга</th>
                                <th>Дата</th>
                                <th>Начальное кол-во</th>
                                <th>Кол-во</th>
                                <th>Осталось</th>
                                <th>Статус</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr key={order.id}>
                                <td>{order.id}</td>
                                <td>{order.service}</td>
                                <td>{order.date}</td>
                                <td>{order.startQty}</td>
                                <td>{order.qty}</td>
                                <td>{order.remaining}</td>
                                <td>{order.status}</td>
                            </tr>
                        </tbody>
                    </table>
                ))}

            </div>
        </section>
    );
}

export default OrdersHistory
