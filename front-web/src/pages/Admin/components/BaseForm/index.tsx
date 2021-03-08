import React from 'react';
import { useHistory } from 'react-router-dom';
import './styles.scss';

type Props = {
    title: string;
}

const BaseForm = ({title}:Props) => {
    const history = useHistory();

    const handleCancel = () => {
        history.push( '../' );
    }
    
    return (
        <div className="admin-base-form card-base">
            <h1 className="base-form-title">
                {title}
            </h1>

        <div className="base-form-actions">
            <button className="btn btn-outline-danger boder-radius-10 mr-3 btn-lg"
            onClick={handleCancel}
            >
                CANCELAR
            </button>

            <button className="btn btn-primary boder-radius-10 btn-lg">
                CADASTRAR
            </button>

        </div>

        </div>

    )

}

export default BaseForm;
