import React from "react";
import { useState, useEffect } from "react";
import ProfileOverlay from "../components/ProfileOverlay";

const Profile = () => {
    return (
        <div className="min-h-screen bg-gray-50">
            {/* Contenido principal */}
            <main className="max-w-7xl mx-auto sm:px-6 lg:px-5 py-12">
                {/* Sección Perfil */}
                <section className="mb-20 mt-10">
                    <ProfileOverlay />
                </section>
            </main>
        </div>
    );
}
export default Profile;