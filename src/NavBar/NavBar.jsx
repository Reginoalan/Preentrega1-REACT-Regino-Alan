import { CartWidget } from "./Components/CartWidget";

export const NavBar = () => {
return (
    <>
    <nav class="navbar navbar-expand-lg bg-light">
        <div class="container-fluid">
        <a class="navbar-brand" href="#">
            Tienda Pokemon TCG
        </a>
        <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
        >
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
            <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">
                Inicio
                </a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#">
                Lista de Cartas
                </a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#">
                Nosotros
                </a>
            </li>
            </ul>
        </div>
        </div>

        <CartWidget />
    </nav>
    </>
);
};
