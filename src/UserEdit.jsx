import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const UserEdit = () => {
    const [user, setUser] = useState({});
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        //Llamar a la función para obtener los detalles del usuario
        fetchUserDetails();
    }, [id]);

    const fetchUserDetails = async () => {
        try {
            const response = await fetch(`https://672d9882fd8979715642eac8.mockapi.io/users/${id}`);
            const data = await response.json();
            setUser(data);
            setName(data.name);
            setEmail(data.email);
        } catch (error) {
            console.error('Error en la solicitud: ', error);
        }
    };

    const handleUpdate = async () => {
        try {
            const response = await fetch(`https://672d9882fd8979715642eac8.mockapi.io/users/${id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ name, email }),
            });
            if (response.ok) {
                navigate(`/users/${id}`);
            } else {
                console.error('Error al actualizar usuario');
            }
        } catch (error) {
            console.error('Error en la solicitud: ', error);
        }
    };

    return (
        <div className='usuario'>
            <h1>Editar Usuario</h1>
            <label>Nombre: </label>
            <input className='input-nombre' type="text" value={name} onChange={(e) => setName(e.target.value)} />
            <br/>
            <label>Email: </label>
            <input className='input-email' type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
            <br/>
            <button className='link-usuario actualizar' onClick={handleUpdate}>Actualizar</button>
        </div>
    );
};

export default UserEdit;