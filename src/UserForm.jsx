import React, { useState } from 'react';

const UserForm = ({ addUser }) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    const handleSubmit = () => {
        //Validar datos antes de agregar
        const newUser = { name, email };
        //Llamar a la función desde las props para agregar usuario
        addUser(newUser);
        setName('')
        setEmail('')
    };

    return (
        <div className='usuario'>
            <h1 className='agregar'>Agregar Usuario</h1>
            <form>
                <div class="input-group mb-3">
                    <input type="text" class="form-control" placeholder="Nombre usuario" aria-label="Nombre" aria-describedby="button-addon2"  value={name} onChange={(e) => setName(e.target.value)}/>
                    <input type="text" class="form-control" placeholder="Email usuario" aria-label="Email" aria-describedby="button-addon2"  value={email} onChange={(e) => setEmail(e.target.value)}/>
                    <button class="btn btn-primary" type="button" id="button-addon2" onClick={handleSubmit}> Agregar </button>
                </div>
            </form>
        </div>
    );
};

export default UserForm;