import React from "react"

export default function Drawer({
    children,
    toggleId = "main-drawer",
    user,
    onLogout,
}) {
    // Lista de items del menú
    const menuItems = [
        { label: "Panel", icon: "fa-desktop", href: "/panel" },
        { label: "Usuarios", icon: "fa-users", href: "/usuarios" },
        { label: "Empresas", icon: "fa-building", href: "/empresas" },
        { label: "Roles", icon: "fa-id-card", href: "/roles" },
        { label: "Clientes", icon: "fa-users", href: "/clientes" },
        { label: "Caja", icon: "fa-cash-register", href: "/caja" },
    ]

    return (
        <div className="drawer">
            {/* Checkbox controlador */}
            <input
                id={toggleId}
                type="checkbox"
                className="drawer-toggle peer"
            />

            {/* CONTENIDO PRINCIPAL */}
            <div className="drawer-content">
                <label
                    htmlFor={toggleId}
                    className="
                        menu-button btn btn-secondary fixed top-4 left-4 z-50
                        peer-checked:hidden
                    ">
                    ☰
                </label>

                <div className="pt-0 px-0">{children}</div>
            </div>

            {/* DRAWER SIDE */}
            <div className="drawer-side">
                <label htmlFor={toggleId} className="drawer-overlay"></label>

                <ul className="menu bg-emerald-800 text-white min-h-full w-62 p-4 text-base">
                    {/* Avatar */}
                    <li className="mb-4 flex flex-col items-center">
                        <div className="avatar">
                            <div className="w-20 rounded-full ring ring-white">
                                <img
                                    src={
                                        user?.avatar ??
                                        "https://i.pravatar.cc/150"
                                    }
                                    alt="Avatar"
                                />
                            </div>
                        </div>
                        <p className="font-bold mt-2">{user?.email}</p>
                    </li>

                    <div className="divider divider-success my-2"></div>

                    {/* ↘ GENERACIÓN AUTOMÁTICA DE LA LISTA */}
                    {menuItems.map((item, idx) => (
                        <li key={idx} className="overflow-y-scroll">
                            <a
                                href={item.href}
                                className="hover:bg-emerald-700 px-2 py-1 transition-colors hover:border-r-2 ">
                                <i className={`fas ${item.icon} w-5 mr-3`}></i>
                                {item.label}
                            </a>
                        </li>
                    ))}

                    <div className="divider divider-success my-2"></div>

                    {/* CONFIGURACIÓN */}
                    <li>
                        <a
                            href="/configuracion"
                            className="hover:bg-emerald-700 px-2 py-1 transition-colors hover:border-r-2  ">
                            <i className="fas fa-cog w-5 mr-3"></i>Configuración
                        </a>
                    </li>

                    {/* CERRAR SESIÓN */}
                    <li className="mt-4">
                        <button
                            onClick={onLogout}
                            className="btn btn-neutral w-full text-white">
                            <i className="fas fa-sign-out-alt w-5 mr-3"></i>
                            Cerrar sesión
                        </button>
                    </li>
                </ul>
            </div>
        </div>
    )
}
