import React from "react"
import PanelLayout from "../../layouts/PanelLayout.jsx"

export default function Panel({ users }) {
    const user = users[0] || {}
    const sucursales = [
        {
            titulo: "Sucursal Cobán",
            direccion: "Zona 1, Barrio Central",
            imagen: "/images/local/01-454.jpg",
        },
        {
            titulo: "Sucursal Santa Rosa Cuilapa",
            direccion: "Zona 2, Calzada San Pedro",
            imagen: "/images/local/1561164000.jpg",
        },
        {
            titulo: "Sucursal San Marcos",
            direccion: "Zona 3, Aldea los tres pinos",
            imagen: "/images/local/images.jpg",
        },
    ]

    return (
        <PanelLayout>
            {/* CARD PRINCIPAL */}
            <div className="w-full flex flex-col items-center justify-center p-3">
                <div className="w-full max-w-3xl bg-base-100 shadow-xl rounded-2xl p-6 border border-base-300 flex items-center gap-6">
                    {/* AVATAR */}
                    <div className="avatar placeholder">
                        <div className="bg-emerald-500 text-white rounded-full w-20 h-20 flex items-center justify-center text-3xl font-bold shadow-lg select-none">
                            {user?.tenant?.charAt(0) || "?"}
                        </div>
                    </div>

                    {/* INFORMACIÓN */}
                    <div className="flex flex-col gap-1 select-none">
                        <h1 className="text-2xl font-bold text-emerald-600">
                            {user?.tenant || "Empresa"}
                        </h1>

                        <p className="text-lg text-base-content/70">
                            Bienvenido,
                            <span className="font-semibold ml-1">
                                {user?.username || "Usuario"}
                            </span>
                        </p>

                        <div className="badge badge-success badge-outline mt-1">
                            Usuario Conectado
                        </div>
                    </div>
                </div>

                <div className="flex flex-wrap mt-5 gap-4 items-center justify-center">
                    {sucursales.map((sucursal, index) => (
                        <div
                            key={index}
                            className="relative bg-emerald-900 w-130 h-75 rounded-xl overflow-hidden p-3">
                            <img
                                src={sucursal.imagen}
                                alt={sucursal.titulo}
                                className="object-cover w-full h-full"
                            />

                            <div className="absolute inset-0 bg-black/40" />

                            <div className="absolute bottom-3 left-3 text-white select-none">
                                <h2 className="text-lg font-bold">
                                    {sucursal.titulo}
                                </h2>
                                <p className="text-sm">{sucursal.direccion}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </PanelLayout>
    )
}
