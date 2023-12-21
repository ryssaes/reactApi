import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './sass/votos.sass';

function Votos(){
    const [dat, setDat] = 
    useState([]);

    useEffect(() => {
        const fetchData = async() => {
            const result = await
            axios.get('https://dadosabertos.camara.leg.br/api/v2/votacoes?itens=30&ordem=DESC&ordenarPor=dataHoraRegistro');
            setDat(result.data.dados);
        };
        fetchData();
    }, []);

    return(
        <div>
            <ul className='votos'>
            {dat.map(item => (
                <li>
                 <span>{item.nome}</span>
                <span className='descricao'>{item.descricao}</span>
                <span className='sigla'>{item.siglaOrgao}</span>
                <span className="aprovacao">{item.aprovacao = 1 ? 'aprovado': 'reprovado'}</span>
                </li>
            ))}
            </ul>
        </div>
    )
}

export default Votos;