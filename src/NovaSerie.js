import React, { useState } from 'react'
import { Label } from 'reactstrap'
import axios from 'axios'
import { Redirect } from 'react-router'

const NovaSerie = () => {
    const [name, setName] = useState('')
    const [success,setSuccess] = useState(false)
    const onChange = evt => {
        setName(evt.target.value)
    }
    const save = () => {
        axios
        .post('/api/series', {
            name
        })
        .then(res => {
            setSuccess(true)
        })
    }
    if (success) {
        return(
            <Redirect to='/series' />
        ) 
    }

    return (
        <div className='container'>
            <h1>Nova Serie</h1>
            <form>
                <div className='form-group'>
                    <Label htmlfor='name'>Nome</Label>
                    <input type='text' value={name} onChange={onChange} className='form-control' id='name' placeholder='Nome do Série' />
                </div>
                <button type='button' onClick={save} className='btn btn-primary'>Salvar</button>
            </form>
        </div>
    )
}

export default NovaSerie