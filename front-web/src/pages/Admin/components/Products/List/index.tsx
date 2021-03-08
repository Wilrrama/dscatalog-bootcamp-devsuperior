import React from 'react';
import { useHistory} from 'react-router-dom';

const List =() => {
    const history = useHistory();
    const handleCreated = () => {
        history.push('/admin/products/create');
    }
    
    return (
        <div className="admin-products-list">
            <button className="btn btn-primary btn-lg" onClick={handleCreated}>
              ADICIONAR
            </button>
        </div>
    )
}

export default List;