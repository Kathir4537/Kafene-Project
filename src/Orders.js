import React from 'react';
import './App.css';
import { useState, useEffect } from 'react';

const Orders = () => {
    const Orders_API_URL = 'https://5fc1a1c9cb4d020016fe6b07.mockapi.io/api/v1/orders';
    const [orders, setOrders] = useState([]);
    const [orderFilter, setOrderFilter] = useState({
        New: true,
        Packed: true,
        InTransit: true,
        Delivered: true
    })

    useEffect(() => {

        (async () => await fetchOrders())();
    }, []);

    const fetchOrders = async () => {
        try {
            const response = await fetch(Orders_API_URL);
            const listedOrders = await response.json();
            setOrders(listedOrders);
        } catch (err) {
            console.log(err.stack)
        }
    }

    const filterOrders = (order) => {
        return (
            (orderFilter.New && order.orderStatus === 'New') ||
            (orderFilter.Packed && order.orderStatus === 'Packed') ||
            (orderFilter.InTransit && order.orderStatus === 'InTransit') ||
            (orderFilter.Delivered && order.orderStatus === 'Delivered')
        )
    }

    return (
        <div>
            <section className="orders-page">
                <div className="orders-head">Orders</div>
                <div className="orders-sections">
                    <div className="left-section">
                        <div className="orders-filters">Filters</div>
                        <div className="orders-count">
                            <p>Count:</p>
                            <div className="order-count-nos" id="orderCount">{orders.filter(filterOrders).length}</div>
                        </div>
                        <div className="filter-order-categories filter-categories">
                            <label className="filter-catogry" id="newbox">
                                <input
                                    type="checkbox"
                                    checked={orderFilter.New}
                                    onChange={(e) => setOrderFilter({...orderFilter, New:e.target.checked})}
                                />
                                New
                            </label>
                            <label className="filter-catogry" id="packedbox">
                                <input
                                    type="checkbox"
                                    checked={orderFilter.Packed}
                                    onChange={(e) => setOrderFilter({...orderFilter, Packed:e.target.checked})}
                                />
                                Packed
                            </label>
                            <label className="filter-catogry" id="intransitbox">
                                <input
                                    type="checkbox"
                                    checked={orderFilter.InTransit}
                                    onChange={(e) => setOrderFilter({...orderFilter, InTransit:e.target.checked})}
                                />
                                InTransit
                            </label>
                            <label className="filter-catogry" id="deliveredbox">
                                <input
                                    type="checkbox"
                                    checked={orderFilter.Delivered}
                                    onChange={(e) => setOrderFilter({...orderFilter, Delivered:e.target.checked})}
                                />
                                Delivered
                            </label>
                        </div>
                    </div>
                    <div className="right-section">
                        <table className="orders-table">
                            <thead>
                                <tr className="order-table-head">
                                    <th>ID</th>
                                    <th>Customer</th>
                                    <th>Date</th>
                                    <th>Amount</th>
                                    <th>Status</th>
                                </tr>
                            </thead>
                            <tbody className="table-data-containor" id="orderTableData">
                                {orders.filter(filterOrders).map((values) => (
                                    <tr className="table-data" key={values.id}>
                                        <td id="orderID" className="secondary-data">{values.id}</td>
                                        <td id="customer" className="primary-data">{values.customerName}</td>
                                        <td id="date" className="primary-data">{values.orderDate}
                                            <br />
                                            <span id="time" className="secondary-data">{values.orderTime}</span>
                                        </td>
                                        <td id=" price" className="secondary-data">${values.amount}</td>
                                        <td id="catogry" className="primary-data">{values.orderStatus}</td>
                                    </tr >
                                ))}

                            </tbody>
                        </table>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Orders