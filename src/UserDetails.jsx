import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';

const UserDetails = () => {
    const [user, setUser] = useState({});
    const { id } = useParams();

    useEffect(() => {
        //Llamar a la función para obtener los detalles del usuario
        fetchUserDetails();
    }, [id]);

    const fetchUserDetails = async () => {
        try {
            const response = await fetch(`https://672d9882fd8979715642eac8.mockapi.io/users/${id}`);
            const data = await response.json();
            setUser(data);
        } catch (error) {
            console.error('Error en la solicitud: ', error);
        }
    };

    return (
        <div className='usuario'>
            <h1>Detalles de Usuario</h1>
            <p>ID: {user.id}</p>
            <p>Nombre: {user.name}</p>
            <p>Email: {user.email}</p>
            <div className='btn-usuario'>
            <Link className='link-usuario' to={`/delete/${user.id}`}>Eliminar Usuario</Link>
            <Link className='link-usuario' to={`/edit/${user.id}`}>Editar Usuario</Link>
            <Link className='link-usuario' to={`/`}>Volver</Link>
            </div>
        </div>
    );
};

export default UserDetails;