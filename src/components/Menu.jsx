import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './sass/main.sass';

function Menu() {
    const [dat, setDat] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const result = await axios.get(
                'https://dadosabertos.camara.leg.br/api/v2/deputados?siglaUf=CE&ordem=ASC&ordenarPor=nome'
            );
            setDat(result.data.dados);
        };
        fetchData();
    }, []);

    return (
        <div>
            <ul>


                {dat.map(item => (
                    <li>
                        <span>{item.nome}</span>
                        <img src={item.urlFoto} />
                        <span>{item.siglaPartido}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Menu;
