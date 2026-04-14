import Carrito from "./Carrito"


function Header({ cart , removeFromCart, incrementQuantity, decrementQuantity, clearCart}) {
  return (
    <header className="py-5 header">
        <div className="container-xl">
            <div className="row justify-content-center justify-content-md-between">
                <div className="col-8 col-md-3">
                    <a href="index.html">
                        <img className="img-fluid" src="./public/img/logo.svg" alt="imagen logo" />
                    </a>
                </div>

                <Carrito
                    cart = {cart}
                    removeFromCart = {removeFromCart}
                    incrementQuantity = {incrementQuantity}
                    decrementQuantity = {decrementQuantity}
                    clearCart = {clearCart}
                />
                
            </div>
        </div>
    </header>

  
  );
}

export default Header;