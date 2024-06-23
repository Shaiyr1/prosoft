import React, { useState } from 'react';
import style from './NetWork.module.scss';
import vk from '../../../assets/vk.svg';
import telegram from '../../../assets/telegram.svg';
import google from '../../../assets/google.svg';
import instagram from '../../../assets/instagram.svg';
import down from '../../../assets/down.svg';
import download from '../../../assets/download.svg';
import Link from '../../../shared/link/Link';

function NetWork() {
    const socialData = [
        { id: 1, logo: vk, name: 'Вконтакте', link: 'https://vk.com/id145289652wall1452689' },
        { id: 2, logo: telegram, name: 'Телеграм', link: 'https://tg.com/id145289652wall1452689' },
        { id: 3, logo: google, name: 'Ютуб', link: 'https://gg.com/id145289652wall1452689' },
        { id: 4, logo: instagram, name: 'Инстаграм', link: 'https://inst.com/id145289652wall1452689' },
    ];

    const [selectedCountry, setSelectedCountry] = useState('Вконтакте');
    const [selectedService, setSelectedService] = useState('Репосты');
    const [selectedLogo, setSelectedLogo] = useState(vk);
    const [selectedLink, setSelectedLink] = useState('https://vk.com/id145289652wall1452689');
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [quantity, setQuantity] = useState(0);

    const handleCountrySelect = (social, logo, link) => {
        setSelectedCountry(social);
        setSelectedLogo(logo);
        setSelectedLink(link);
        setDropdownOpen(false);
    };

    const toggleDropdown = () => {
        setDropdownOpen(!dropdownOpen);
    };


    const handleQuantityChange = (e) => {
        setQuantity(e.target.value);
    };

    const handleServiceSelect = (service) => {
        setSelectedService(service);
    };

    return (
        <section className={style.network}>
            <h1 className={style.network__title}>Заказы</h1>
            <div className={style.network__blocks}>
                <div className={style.network__social}>
                    <p className={style.network__social_title}>Соцсеть</p>
                    <div className={style.network__block}>
                        <div className={style.network__select} onClick={toggleDropdown}>
                            <div>
                                {selectedLogo && <img className={style.network__select_logo} src={selectedLogo} alt="logo" />}
                                <p className={style.network__select_text}>{selectedCountry}</p>
                            </div>
                            <img className={`${style.network__select_down} ${dropdownOpen ? style.open : ''}`} src={down} alt="down" />
                        </div>
                        {dropdownOpen && (
                            <ul className={style.network__dropdown}>
                                {socialData.map(item => (
                                    <li
                                        key={item.id}
                                        className={style.network__dropdown_item}
                                        onClick={() => handleCountrySelect(item.name, item.logo, item.link)}
                                    >
                                        <img src={item.logo} alt={item.name} />
                                        {item.name}
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>
                    <div className={style.network__serviceType}>
                        <p className={style.network__serviceType_title}>Тип услуги</p>
                        <div className={style.network__serviceType_buttons}>
                            {['Репосты', 'Бусты', 'Опросы', 'Реакции', 'Подписчики', 'Просмотры', 'TapSwap', 'Catizen'].map(service => (
                                <button
                                    key={service}
                                    className={`${style.network__serviceType_button} ${selectedService === service ? style.btnActive : ''}`}
                                    onClick={() => handleServiceSelect(service)}
                                >
                                    {service}
                                </button>
                            ))}
                        </div>
                        <button className={style.network__serviceType_download}><img src={download} alt="download" /><span>Загрузить аккаунты</span></button>
                    </div>
                    <div className={style.network__check}>
                        <button className={style.network__check_btn}>Проверить накрутки</button>
                        <button className={style.network__check_cancel}>Отмена</button>
                    </div>
                </div>
                <div className={style.network__right}>
                    <Link selectedLink={selectedLink}/>
                    <div className={style.network__right_quantity}>
                        <p>Количество</p>
                        <div className={style.network__quantity_num}>
                            <span>{quantity}</span>
                        </div>
                        <input
                            type="range"
                            min="0"
                            max="200000"
                            value={quantity}
                            onChange={handleQuantityChange}
                            className={style.network__quantity_range}
                        />
                        <div className={style.network__right_quanti}>
                            <span>0 шт</span>
                            <span>200 тыс. шт</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default NetWork;
