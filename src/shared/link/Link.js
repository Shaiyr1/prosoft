import React from 'react';
import style from './Link.module.scss';
import link from '../../assets/link.svg'

function Link({ selectedLink }) {
    const copyToClipboard = () => {
        navigator.clipboard.writeText(selectedLink);
        alert('Ссылка скопирована!');
    };
    return (
        <div className={style.link}>
            <h2>Ссылка</h2>
            <div className={style.link__block}>
                <span>{selectedLink}</span>
                <img onClick={copyToClipboard} src={link} alt="link" />
            </div>
        </div>
    )
}

export default Link
