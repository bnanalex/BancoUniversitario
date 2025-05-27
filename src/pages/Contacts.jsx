import React, {useState} from "react";
import ContactsMenu from "../components/ContactsMenu";
import { getContacts } from "../api/modules/contacts";
const Contacts = () => {
    const [contacts, setContacts] = useState([]);
    const fetchContacts = async () => {
        const token = localStorage.getItem('token');
        if (token) {
            try {
                const response = await getContacts(token);
                console.log('response', response);
                setContacts(response.data.contacts || []);
            } catch (error) {
                console.error("Error fetching contacts:", error);
            }
        }
    };

    // Llama a fetchContacts cuando el componente se monta
    React.useEffect(() => {
        fetchContacts();
    }, []);
    return (
        <div className="min-h-screen bg-gray-50">
        {/* Contenido principal */}
        <main className="max-w-7xl mx-auto sm:px-6 lg:px-5 py-12">
            {/* Sección Menú de Contactos */}
            <section className="mb-5">
            <ContactsMenu contacts={contacts}/>
            </section>
        </main>
        </div>
    );
    }
export default Contacts;