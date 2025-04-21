import React, { useState } from 'react';
import sideImage from '../assets/images/registerLogin/man-showing-calculator.jpg';
import logo from '../assets/images/home/logo-banco-universitario-no-background.png';

function RegistrationForm() {
    const [activeTab, setActiveTab] = useState('register');

    const handleTabChange = (tab) => {
        setActiveTab(tab);
    };

    return (
        <div className="bg-gray-100 py-12">
            <div className="container mx-auto px-4">
                <div className="bg-white rounded-lg shadow-teal-500 shadow-lg overflow-hidden md:flex">
                    <div className="p-6 md:p-8 lg:p-12 md:w-1/2">
                        <div className="mb-4 flex rounded-full overflow-hidden shadow-sm">
                            <button
                                className={`py-2 px-4 font-semibold text-sm md:text-base w-1/2 text-center ${activeTab === 'login'
                                    ? 'bg-teal-500 text-white'
                                    : 'bg-gray-300 text-gray-700'
                                    } focus:outline-none`}
                                onClick={() => handleTabChange('login')}
                            >
                                Iniciar Sesión
                            </button>
                            <button
                                className={`py-2 px-4 font-semibold text-sm md:text-base w-1/2 text-center ${activeTab === 'register'
                                    ? 'bg-teal-500 text-white'
                                    : 'bg-gray-300 text-gray-700'
                                    } focus:outline-none`}
                                onClick={() => handleTabChange('register')}
                            >
                                Registrarse
                            </button>
                        </div>

                        <div className="mb-6 flex flex-col items-center">
                            <div className="text-center mb-4 mt-10">
                                <img
                                    src={logo}
                                    alt="Logo Banco Universitario"
                                    className="h-12 mx-auto"
                                />
                                <p className="mt-2 text-sm">Banco Universal © 2025</p>
                            </div>
                            <div>
                                <h2 className="text-xl font-semibold text-teal-700 mb-0 text-center">Registrarse</h2>
                                <p className="text-gray-600 text-sm text-center">Crea una cuenta y empieza a gestionar tus preferencias.</p>
                            </div>
                        </div>

                        {activeTab === 'register' && (
                            <div className="grid grid-cols-1 gap-4">
                                <div>
                                    <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-1">
                                        Nombre
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-sm"
                                        placeholder="Ejemplo"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="surname" className="block text-gray-700 text-sm font-bold mb-1">
                                        Apellido
                                    </label>
                                    <input
                                        type="text"
                                        id="surname"
                                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-sm"
                                        placeholder="Chavez"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-1">
                                        Correo
                                    </label>
                                    <div className="relative">
                                        <input
                                            type="email"
                                            id="email"
                                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline pr-8 text-sm"
                                            placeholder="your@yourmail.com"
                                        />
                                        <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                                            <svg className="h-5 w-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-1">
                                        Contraseña
                                    </label>
                                    <div className="relative">
                                        <input
                                            type="password"
                                            id="password"
                                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline pr-8 text-sm"
                                            placeholder="********"
                                        />
                                        <div className="absolute inset-y-0 right-0 flex items-center px-2 cursor-pointer">
                                            <svg className="h-5 w-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7 1.274 4.057-1.178 8.995-4.904 12.955-3.726 3.96-7.516 6.904-12.029 6.904-4.513 0-8.304-2.944-12.03-6.905z"></path></svg>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <label htmlFor="birthdate" className="block text-gray-700 text-sm font-bold mb-1">
                                        Fecha De Nacimiento
                                    </label>
                                    <div className="relative">
                                        <input
                                            type="date"
                                            id="birthdate"
                                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline pr-8 text-sm"
                                        />
                                        <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                                            <svg className="h-5 w-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <label htmlFor="gender" className="block text-gray-700 text-sm font-bold mb-1">
                                        Género
                                    </label>
                                    <div className="relative">
                                        <select
                                            id="gender"
                                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline pr-8 text-sm"
                                        >
                                            <option>Seleccionar</option>
                                            <option>Masculino</option>
                                            <option>Femenino</option>
                                        </select>
                                        <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                                            <svg className="h-5 w-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                                        </div>
                                    </div>
                                </div>
                                <div className="grid grid-cols-3 gap-2 items-start">
                                    <div className="col-span-1">
                                        <label htmlFor="phoneCode" className="block text-gray-700 text-sm font-bold mb-1">
                                            Código
                                        </label>
                                        <div className="relative">
                                            <select
                                                id="phoneCode"
                                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-sm"
                                            >
                                                <option>+58</option>
                                            </select>
                                            <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                                                <svg className="h-5 w-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-span-2">
                                        <label htmlFor="phoneNumber" className="block text-gray-700 text-sm font-bold mb-1">
                                            Teléfono
                                        </label>
                                        <input
                                            type="tel"
                                            id="phoneNumber"
                                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-sm"
                                            placeholder="0414-XXXXXXX"
                                        />
                                    </div>
                                </div>
                                <div className="mt-6">
                                    <button className="bg-teal-500 text-white py-2 px-4 rounded-md font-semibold
                                    hover:bg-teal-600 active:bg-teal-600 transition duration-200 focus:outline-none focus:shadow-outline text-sm md:text-base w-full">
                                        Registrarse
                                    </button>
                                    <button className="bg-gray-300 text-gray-700 py-2 px-4 rounded-md font-semibold focus:outline-none focus:shadow-outline
                                    hover:bg-gray-200 active:bg-gray-300 transition duration-200 text-sm md:text-base w-full mt-2">
                                        Cancelar
                                    </button>
                                </div>
                                <p className="mt-4 text-gray-500 text-xs text-center">
                                    Al crear esta cuenta, aceptas nuestros <a href="#" className="text-teal-500">Términos de uso</a> y <a href="#" className="text-teal-500">Política de privacidad</a>.
                                </p>
                            </div>
                        )}

                        {activeTab === 'login' && (
                            <div className="grid grid-cols-1 gap-4">
                                <div>
                                    <label htmlFor="loginEmail" className="block text-gray-700 text-sm font-bold mb-1">
                                        Correo
                                    </label>
                                    <input
                                        type="email"
                                        id="loginEmail"
                                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-sm"
                                        placeholder="your@yourmail.com"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="loginPassword" className="block text-gray-700 text-sm font-bold mb-1">
                                        Contraseña
                                    </label>
                                    <input
                                        type="password"
                                        id="loginPassword"
                                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-sm"
                                        placeholder="********"
                                    />
                                </div>
                                <div className="mt-6">
                                    <button className="bg-teal-500 text-white py-2 px-4 rounded-md font-semibold focus:outline-none focus:shadow-outline text-sm md:text-base w-full ">
                                        Iniciar Sesión
                                    </button>
                                    <p className="mt-4 text-gray-500 text-xs text-center">
                                        ¿Olvidaste tu <a href="#" className="text-teal-500">contraseña</a>?
                                    </p>
                                </div>
                            </div>
                        )}
                    </div>
                    <div className="hidden lg:w-1/2 md:w-1/2  lg:block md:block">
                        <img
                            src={sideImage}
                            alt="Registro"
                            className="w-full h-full object-cover rounded-r-lg md:rounded-r-lg md:rounded-l-none"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default RegistrationForm;