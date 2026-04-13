export default function Carrito({ cart }) {
    // state derivado
    const isEmpty = () => cart.length === 0

    return (

        <nav className="col-md-6 a mt-5 d-flex align-items-start justify-content-end">
                    <div 
                        className="carrito"
                    >
                        <img className="img-fluid" src="./public/img/carrito.png" alt="imagen carrito" />

                        <div id="carrito" className="bg-white p-3">
                            {isEmpty() ? (<p className="text-center">El carrito esta vacio</p>) : (
                                <div>

                                    <table className="w-100 table">
                                        <thead>
                                            <tr>
                                                <th>Imagen</th>
                                                <th>Nombre</th>
                                            <th>Precio</th>
                                            <th>Cantidad</th>
                                            <th></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {cart.map((element) => (
                                            <tr key={element.id}>
                                                <td>
                                                    <img className="img-fluid" src={`./public/img/${element.image}.jpg`} alt="imagen guitarra" />
                                                </td>
                                                <td>{element.name}</td>
                                                <td className="fw-bold">${element.price}</td>
                                                <td className="flex align-items-start gap-4">
                                                    <button
                                                        type="button"
                                                        className="btn btn-dark"
                                                    >
                                                        -
                                                    </button>
                                                        <span>{element.quantity}</span>
                                                    <button
                                                        type="button"
                                                        className="btn btn-dark"
                                                    >
                                                        +
                                                    </button>
                                                </td>
                                                <td>
                                                    <button
                                                        className="btn btn-danger"
                                                        type="button"
                                                    >
                                                        X
                                                    </button>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>

                                <p className="text-end">Total pagar: <span className="fw-bold">$899</span></p>
                                <button className="btn btn-dark w-100 mt-3 p-2">Vaciar Carrito</button>
                                    </div>
                            
                                )}
                            </div>
                       
                    </div>
                </nav>
   )
}