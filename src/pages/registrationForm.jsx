import React, { useState } from 'react';
import sideImage from '../assets/images/registerLogin/man-showing-calculator.jpg';
import logo from '../assets/images/home/logo-banco-universitario-no-background.png';
import { registerUser, loginUser } from '../api/modules/auth';

function RegistrationForm() {
    const [activeTab, setActiveTab] = useState('register');
    const [cedulaType, setCedulaType] = useState('V');
    const [cedula, setCedula] = useState('');
    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [birthdate, setBirthdate] = useState('');
    const [gender, setGender] = useState('Seleccionar');
    const [phoneCode, setPhoneCode] = useState('+58');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [registrationError, setRegistrationError] = useState(null);
    const [registrationSuccess, setRegistrationSuccess] = useState(false);

    const [loginEmail, setLoginEmail] = useState('');
    const [loginPassword, setLoginPassword] = useState('');
    const [loginError, setLoginError] = useState(null);

    const handleTabChange = (tab) => {
        setActiveTab(tab);
        setLoginError(null); // Limpiar el error al cambiar de tab
        setRegistrationError(null); // Limpiar el error al cambiar de tab
        setRegistrationSuccess(false); // Limpiar el mensaje de éxito al cambiar de tab
    };
    const handleRegistration = async (event) => {
        event.preventDefault(); // Previene la recarga de la página

        const userData = {
            //cedula: `${cedulaType}-${cedula}`,
            document_number: cedula,
            first_name: name,
            last_name: surname,
            email: email,
            password: password,
            birth_date: new Date(birthdate),
            // gender: gender,
            phone_number: `${phoneCode}${phoneNumber}`,
        };

        try {
            const response = await registerUser(userData); // Ajusta el endpoint según tu API
            console.log("response", response);
            // if (response.ok === 1) {
            //     setRegistrationSuccess(true);
            //     setRegistrationError(null);
            //     // Puedes redirigir al usuario a otra página o mostrar un mensaje de éxito
            //     console.log('Registro exitoso:', response);
            // } else {
            //     setRegistrationError(response.message.text || 'Error al registrar el usuario.');
            //     setRegistrationSuccess(false);
            //     console.error('Error en el registro:', response);
            // }
        } catch (error) {
            setRegistrationError('Ocurrió un error al comunicarse con el servidor.');
            setRegistrationSuccess(false);
            console.error('Error en la petición de registro:', error);
        }
    };

    const handleLogin = async (event) => {
        event.preventDefault();

        const loginData = {
            email: loginEmail,
            password: loginPassword,
        };

        try {
            const response = await loginUser(loginData);
            console.log("response inicio sesión", response);
            // if (response.ok === 1) {
            //     // Inicio de sesión exitoso
            //     setLoginError(null);
            //     // Aquí puedes guardar el token de acceso, la información del usuario,
            //     // y redirigir al usuario a la página principal de tu aplicación.
            //     console.log('Inicio de sesión exitoso:', response);
            //     // Ejemplo de redirección (necesitas usar tu sistema de rutas):
            //     // window.location.href = '/dashboard';
            // } else {
            //     setLoginError(response.message.text || 'Correo o contraseña incorrectos.');
            //     console.error('Error al iniciar sesión:', response);
            // }
        } catch (error) {
            setLoginError('Ocurrió un error al comunicarse con el servidor.');
            console.error('Error en la petición de inicio de sesión:', error);
        }
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
                            <form onSubmit={handleRegistration} className="grid grid-cols-1 gap-4">
                                <label htmlFor="cedula" className="block text-gray-700 text-sm font-bold mb-1">
                                    Cédula
                                </label>
                                <div className="grid grid-cols-5 gap-2 items-start">
                                    <div className="col-span-1">
                                        <div className="relative">
                                            <select
                                                id="cedulaType"
                                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-sm"
                                                value={cedulaType}
                                                onChange={(e) => setCedulaType(e.target.value)}
                                            >
                                                <option>V</option>
                                                <option>E</option>
                                            </select>
                                            <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                                                <svg className="h-5 w-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-span-4">
                                        <input
                                            type="number"
                                            id="cedula"
                                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-sm"
                                            placeholder="Cedula"
                                            value={cedula}
                                            onChange={(e) => setCedula(e.target.value)}
                                        />
                                    </div>
                                </div>
                                <div>
                                    <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-1">
                                        Nombre
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-sm"
                                        placeholder="Ejemplo"
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
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
                                        value={surname}
                                        onChange={(e) => setSurname(e.target.value)}
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
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                        />
                                        {/* Icono de validación de correo (puedes implementarlo) */}
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
                                            value={password}
                                            onChange={(e) => setPassword(e.target.value)}
                                        />
                                        {/* Icono de mostrar/ocultar contraseña (puedes implementarlo) */}
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
                                            value={birthdate}
                                            onChange={(e) => setBirthdate(e.target.value)}
                                        />
                                        {/* Icono de calendario (puedes implementarlo) */}
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
                                            value={gender}
                                            onChange={(e) => setGender(e.target.value)}
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
                                                value={phoneCode}
                                                onChange={(e) => setPhoneCode(e.target.value)}
                                            >
                                                <option>+58</option>
                                                {/* Puedes agregar más códigos de país */}
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
                                            value={phoneNumber}
                                            onChange={(e) => setPhoneNumber(e.target.value)}
                                        />
                                    </div>
                                </div>
                                <div className="mt-6">
                                    <button
                                        type="submit"
                                        className="bg-teal-500 text-white py-2 px-4 rounded-md font-semibold
                                        hover:bg-teal-600 active:bg-teal-600 transition duration-200 focus:outline-none focus:shadow-outline text-sm md:text-base w-full"
                                    >
                                        Registrarse
                                    </button>
                                    <button
                                        type="button"
                                        className="bg-gray-300 text-gray-700 py-2 px-4 rounded-md font-semibold focus:outline-none focus:shadow-outline
                                        hover:bg-gray-200 active:bg-gray-300 transition duration-200 text-sm md:text-base w-full mt-2"
                                        onClick={() => {
                                            // Lógica para cancelar o limpiar el formulario
                                            console.log('Cancelar registro');
                                        }}
                                    >
                                        Cancelar
                                    </button>
                                </div>
                                {registrationSuccess && (
                                    <p className="mt-4 text-green-500 text-sm text-center">
                                        Registro exitoso!
                                    </p>
                                )}
                                {registrationError && (
                                    <p className="mt-4 text-red-500 text-sm text-center">
                                        Error: {registrationError}
                                    </p>
                                )}
                                <p className="mt-4 text-gray-500 text-xs text-center">
                                    Al crear esta cuenta, aceptas nuestros <a href="#" className="text-teal-500">Términos de uso</a> y <a href="#" className="text-teal-500">Política de privacidad</a>.
                                </p>
                            </form>
                        )}

                        {activeTab === 'login' && (
                            <form onSubmit={handleLogin} className="grid grid-cols-1 gap-4">
                                <div>
                                    <label htmlFor="loginEmail" className="block text-gray-700 text-sm font-bold mb-1">
                                        Correo
                                    </label>
                                    <input
                                        type="email"
                                        id="loginEmail"
                                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-sm"
                                        placeholder="your@yourmail.com"
                                        value={loginEmail}
                                        onChange={(e) => setLoginEmail(e.target.value)}
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
                                        value={loginPassword}
                                        onChange={(e) => setLoginPassword(e.target.value)}
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
                            </form>
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