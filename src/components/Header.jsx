import Carrito from "./Carrito";

function Header({ cart }) {
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
                />
                
            </div>
        </div>
    </header>

  
  );
}

export default Header;