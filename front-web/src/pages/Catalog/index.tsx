import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ProductsResponse } from '../../core/types/Product';
import { makeRequest } from '../../core/utils/request';
import ProductCard from './components/ProductCard';
import './styles.scss';

const Catalog = () => {
    //quando a lista de produtos estiver disponivel,
    //popular um estado no componente, e listar os produtos dinamicamente
    const [productsResponse, setProductsResponse] = useState<ProductsResponse>();

    console.log (productsResponse);
    //quando o componente iniciar, buscar a lista de produtos 
    useEffect ( () => {
        const params = {
            page: 0,
            linesPerPage:12
        }
        
        makeRequest ({ url: '/products', params})
            .then (response => setProductsResponse(response.data));
    },  []);

    return (
        <div className="catalog-container">
            <h1 className="catalog-title"> 
                Catálogo de Produtos 
            </h1>
            <div className="catalog-products">
             {productsResponse?.content.map(product =>(
            <Link to={`/products/${product.id}`} key={product.id}>
                <ProductCard product={product} />
            </Link>
             ))}
            </div>
         </div>
    
    );

}

export default Catalog;
