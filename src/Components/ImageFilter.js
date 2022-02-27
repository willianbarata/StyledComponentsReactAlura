import React from "react";
import alimentacao from '../assets/images/alimentacao.svg';
import outros from '../assets/images/outros.svg';
import transporte from '../assets/images/transporte.svg';
import saude from '../assets/images/saude.svg';
import utilidades from '../assets/images/utilidades.svg';
import { Icone } from '../Components/UI';

export default (type) => {
    const Images = {
        Restaurante: <Icone src={alimentacao} alt="Restaurante" />,
        Transporte: <Icone src={transporte} alt="Transporte" />,
        Utilidades: <Icone src={utilidades} alt="utilidades" />,
        Saude: <Icone src={saude} alt="Saude" />,
        default: <Icone src={outros} alt="Outros" />,
    };

    return Images[type] || Images.default;
}