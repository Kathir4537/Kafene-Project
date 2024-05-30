import React, { useEffect, useState } from 'react';
import './App.css';

const Products = () => {
    const Product_URL = 'https://5fc1a1c9cb4d020016fe6b07.mockapi.io/api/v1/products';
    const [products, setProducts] = useState([]);
    const [showExpired, setShowExpired] = useState(true);
    const [showLowStock, setShowLowStock] = useState(true);


    useEffect(() => {
        (async () => await fetchProducts())()
    }, []);

    const fetchProducts = async () => {
        try {
            const response = await fetch(Product_URL);
            const listedProducts = await response.json();
            setProducts(listedProducts)
        } catch (err) {
            console.log(err.stack)
        }
    }

    const currentDate = new Date();

    const filteredProducts = products.filter(product => {
        if (!showExpired && (new Date(product.expiryDate) < currentDate)) {
            return false;
        }
        if (!showLowStock && (product.stock < 100)) {
            return false;
        }
        return true;
    });

    return (
        <div>
            <section className="products-page">
                <div className="products-head">Products</div>
                <div className="products-sections">
                    <div className="left-section">
                        <div className="products-filters">Filters</div>
                        <div className="products-count">
                            <p>Count:</p>
                            <div className="product-count-nos" id="productCount">{filteredProducts.length}</div>
                        </div>
                        <div className="filter-categories filter-product-categories">
                            <label className="filter-catogry" for="Expired">
                                <input
                                    type="checkbox"
                                    id="Expired"
                                    checked={showExpired}
                                    onChange={() => setShowExpired(!showExpired)}
                                />
                                Expired
                            </label>
                            <label className="filter-catogry" for="LowStock">
                                <input type="checkbox"
                                    id="LowStock"
                                    checked={showLowStock}
                                    onChange={() => setShowLowStock(!showLowStock)}
                                />
                                LowStock
                            </label>
                        </div>
                    </div>
                    <div className="right-section">
                        <table className="products-table">
                            <tr className="product-table-head">
                                <th>ID</th>
                                <th>Product Name</th>
                                <th>Product Brand</th>
                                <th>Expiry Date</th>
                                <th>Unit Price</th>
                                <th>Stock</th>
                            </tr>
                            <tbody className="table-data-containor" id="productTableData">
                                {filteredProducts.map((values) => (
                                    <tr className="product-table-data" key={values.id}>
                                        <td id="productID" className="secondary-data">{values.id}</td>
                                        <td id="productName" className="primary-data">{values.medicineName}</td>
                                        <td id="ProductBrand" className="secondary-data">{values.medicineBrand}</td>
                                        <td id="ExpiryDate" className="primary-data">{values.expiryDate}</td>
                                        <td id="UnitPrice" className="secondary-data">{values.unitPrice}</td>
                                        <td id="Stock" className="secondary-data">{values.stock}</td>
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

export default Products