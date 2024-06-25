import React, { useState } from 'react';
import style from './Data.module.scss';
import down from '../../../assets/down.svg';

function Data() {
    const countriesData = [
        { id: 1, name: 'AD Андора' },
        { id: 2, name: 'AE Объединенные Арабские Эмираты' },
        { id: 3, name: 'AG Антигуа и Барбуда' },
        { id: 4, name: 'AI Ангилья' },
        { id: 5, name: 'AL Албания' },
        { id: 6, name: 'AM Армения' },
        { id: 7, name: 'AD Андора' },
        { id: 8, name: 'AD Андора' },
        { id: 9, name: 'AD Андора' },
        { id: 10, name: 'AD Андора' },
        { id: 11, name: 'AD Андора' },
        { id: 12, name: 'AD Андора' },

    ];

    const [selectedCountry, setSelectedCountry] = useState('Выберите страну');
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const handleCountrySelect = (country) => {
        setSelectedCountry(country);
        setDropdownOpen(false);
    };

    const toggleDropdown = () => {
        setDropdownOpen(!dropdownOpen);
    };

    return (
        <section className={style.data}>
            <div className={style.container}>
                <h1 className={style.data__title}>Сбор по сайтам</h1>
                <div className={style.data__blocks}>
                    <div className={style.data__request}>
                        <p className={style.data__request_title}>Введите запрос</p>
                        <label>
                            <input className={style.data__request_input} type="search" placeholder='Введите запрос для поиска' />
                        </label>
                        <button className={style.data__request_btn} type='submit'>Собрать</button>
                    </div>
                    <div className={style.data__country}>
                        <p className={style.data__country_title}>Выберите страну</p>
                        <div className={style.data__select} onClick={toggleDropdown}>
                            <p className={style.data__select_text}>{selectedCountry}</p>
                            <img className={`${style.data__select_down} ${dropdownOpen ? style.open : ''}`} src={down} alt="down" />
                            
                        </div>
                        {dropdownOpen && (
                                <ul className={style.data__dropdown}>
                                    {countriesData.map(country => (
                                        <li
                                            key={country.id}
                                            className={style.data__dropdown_item}
                                            onClick={() => handleCountrySelect(country.name)}
                                        >
                                            {country.name}
                                        </li>
                                    ))}
                                </ul>
                            )}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Data;
