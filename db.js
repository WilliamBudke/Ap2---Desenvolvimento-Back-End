import pkg from 'pg'

const { Client } = pkg 

async function conectar(){

    const client = new Client({ 
        connectionString: 'postgresql://ap2db_owner:Noayj1SeRiH5@ep-young-haze-a5pfi5dh.us-east-2.aws.neon.tech/ap2db?sslmode=require'
    })

    return client.connect()
}

export default conectar
