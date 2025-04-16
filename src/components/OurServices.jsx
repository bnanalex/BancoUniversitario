import React from 'react';
import transferIcon from '../assets/icons/service-1-vr-svg.svg'; // Reemplaza con la ruta correcta
import depositIcon from '../assets/icons/service-2-vr-svg.svg';   // Reemplaza con la ruta correcta
import withdrawIcon from '../assets/icons/service-3-vr-svg.svg'; // Reemplaza con la ruta correcta
import scholarshipIcon from '../assets/icons/service-4-vr-svg.svg'; // Reemplaza con la ruta correcta
import paymentIcon from '../assets/icons/service-5-vr-svg.svg';   // Reemplaza con la ruta correcta

function OurServices() {
    return (
        <div className="bg-gray-100 py-12">
            <div className="container mx-auto px-16">
                <h2 className="text-3xl font-semibold text-center text-teal-800 mb-8">
                    Nuestros Servicios
                </h2>
                <div className="grid lg:grid-cols-1 gap-6 lg:mx-16 sm:mx-2">
                    <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center text-center">
                        <div className="flex items-center justify-center w-full mb-2">
                            <img src={transferIcon} alt="Transferencias" className="h-8 w-8 mr-4 text-teal-800" />
                            <h3 className="text-xl font-semibold text-center text-teal-700 flex-grow">Transferencias entre estudiantes sin comisión</h3>
                        </div>
                    </div>
                    <p className="text-gray-700 text-sm pb-12">
                        El Banco Universitario ofrece un servicio de transferencias entre estudiantes sin costo alguno con el objetivo de facilitar el intercambio de dinero entre los estudiantes universitarios. Este servicio permite transferir dinero de manera rápida, segura y eficiente, lo que permite a los estudiantes contar con una alternativa más para realizar sus pagos y transacciones.
                    </p>

                    <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center text-center">
                        <div className="flex items-center justify-center w-full mb-2">
                            <img src={depositIcon} alt="Depósitos" className="h-8 w-8 mb-4 text-teal-800" />
                            <h3 className="text-xl font-semibold text-center mb-2 text-teal-700 flex-grow">Depósitos en efectivo</h3>
                        </div>
                    </div>
                    <p className="text-gray-700 text-sm pb-12">
                        Banco Universitario permite a los estudiantes realizar depósitos en efectivo de manera sencilla y cómoda en cualquiera de sus sucursales. Este servicio está disponible las 24 horas del día, los 7 días de la semana, lo que permite a los estudiantes realizar sus depósitos en cualquier momento que lo necesiten.
                    </p>


                    <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center text-center">
                        <div className="flex items-center justify-center w-full mb-2">
                            <img src={withdrawIcon} alt="Retiros" className="h-10 w-10 mb-4 text-teal-800" />
                            <h3 className="text-xl font-semibold text-center mb-2 text-teal-700 flex-grow">Retiros en efectivo</h3>
                        </div>
                    </div>
                    <p className="text-gray-700 text-sm pb-12">
                        El Banco Universitario también permite a los estudiantes realizar retiros en efectivo de manera rápida y segura. Los estudiantes pueden realizar retiros en cualquiera de las sucursales del banco, con la tranquilidad de que sus fondos están seguros y protegidos.
                    </p>


                    <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center text-center">
                        <div className="flex items-center justify-center w-full mb-2">
                            <img src={scholarshipIcon} alt="Cobro de becas" className="h-10 w-10 mb-4 text-teal-800" />
                            <h3 className="text-xl font-semibold text-center mb-2 text-teal-700 flex-grow">Cobro de becas estudiantiles</h3>
                        </div>
                    </div>
                    <p className="text-gray-700 text-sm">
                        Banco Universitario también permite a los estudiantes universitarios cobrar sus becas estudiantiles de manera sencilla y eficiente. Este servicio está disponible en cualquiera de las sucursales del banco, lo que permite a los estudiantes acceder a sus fondos de manera rápida y segura.
                    </p>


                    <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center text-center">
                        <div className="flex items-center justify-center w-full mb-2">
                            <img src={paymentIcon} alt="Pago de matrícula" className="h-10 w-10 mb-4 text-teal-800" />
                            <h3 className="text-xl font-semibold text-center mb-2 text-teal-700 flex-grow">Pago de matrícula estudiantil</h3>
                        </div>
                    </div>
                    <p className="text-gray-700 text-sm">
                        El Banco Universitario también ofrece un servicio de pago de matrícula estudiantil que permite a los estudiantes universitarios pagar sus matrículas de manera rápida y sencilla. Este servicio se realiza en línea y está disponible las 24 horas del día, lo que permite a los estudiantes realizar sus pagos en cualquier momento que lo necesiten.
                    </p>

                </div>
            </div>
        </div>
    );
}

export default OurServices;