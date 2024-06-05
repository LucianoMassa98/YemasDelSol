import React from 'react'
import DeleteIcon from '@mui/icons-material/Delete';
import "./Table-production.css"


export default function TableProduction({ array, setArrayResumen, tableModal, mostrarDelete }) {

    const deleteProduct = (id) => {

        const updatedArray = array.filter(product => product.id !== id);
        setArrayResumen(updatedArray);

    };
    const sectionClass = tableModal ? "with-modal-production" : "section-table-production";
    return (
        <section className={sectionClass}>
            <table>
                <thead>
                    <tr>
                        <th>Producto</th>
                        <th>Cantidad</th>

                        {mostrarDelete === false ? (
                            <th>
                                Precio
                            </th>
                        ) : (
                            <th></th>
                        )}
                    </tr>
                </thead>
                <tbody  className='tbody-table-production'>
                    {array.length > 0 ? array.map((prod, i) => (
                        <tr key={i}>
                            <td>{prod.nombre}</td>
                            <td>
                                {prod.ProduccionProducto
                                    ? prod.ProduccionProducto.cnt
                                    : prod.CompraProducto
                                        ? prod.CompraProducto.cnt
                                        : prod.cnt}
                            </td>
                            {mostrarDelete === false ? (
                                <td>
                                    ${prod.precio * prod.cnt}
                                </td>
                            ) : (

                                <td>
                                    {prod.ProduccionProducto || prod.CompraProducto ? (

                                        <></>
                                    ) : (
                                     
                                        <button type="button" className="btn-delete-production" onClick={() => deleteProduct(prod.id)} >
                                            <DeleteIcon sx={{ color: "#ff2727" }} />
                                        </button>
                                    )}
                                </td>
                            )}
                        </tr>
                    )) : (
                        <tr className="tr-rare-production" >
                            <td>
                                ...
                            </td>
                            <td>
                                ...
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
        </section>
    )
}
