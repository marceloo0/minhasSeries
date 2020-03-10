import React, { useState } from 'react'
import { Label } from 'reactstrap'
import axios from 'axios'
import { Redirect } from 'react-router'

const NovoGenero = () => {
    const [name, setName] = useState('')
    const [success,setSuccess] = useState(false)
    const onChange = evt => {
        setName(evt.target.value)
    }
    const save = () => {
        axios
        .post('/api/genres', {
            name
        })
        .then(res => {
            setSuccess(true)
        })
    }
    if (success) {
        return(
            <Redirect to='/generos' />
        ) 
    }

    return (
        <div className='container'>
            <h1>Novo Genero</h1>
            <form>
                <div className='form-group'>
                    <Label htmlfor='name'>Nome</Label>
                    <input type='text' value={name} onChange={onChange} className='form-control' id='name' placeholder='Nome do Genero' />
                </div>
                <button type='button' onClick={save} className='btn btn-primary'>Salvar</button>
            </form>
        </div>
    )
}

export default NovoGenero