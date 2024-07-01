// import React, { useState } from 'react';
// import style from './Make.module.scss';
// import vk from '../../../assets/vk.svg';
// import telegram from '../../../assets/telegram.svg';
// import google from '../../../assets/google.svg';
// import instagram from '../../../assets/instagram.svg';
// import down from '../../../assets/down.svg';
// import clock from '../../../assets/clock.svg';

// function Make() {
//     const socialData = [
//         { id: 1, logo: vk, name: 'Вконтакте' },
//         { id: 2, logo: telegram, name: 'Телеграм' },
//         { id: 3, logo: google, name: 'Ютуб' },
//         { id: 4, logo: instagram, name: 'Инстаграм' },
//     ];

//     const [selectedCountry, setSelectedCountry] = useState('Выберите');
//     const [selectedLogo, setSelectedLogo] = useState(null);
//     const [dropdownOpen, setDropdownOpen] = useState(false);

//     const handleCountrySelect = (country, logo) => {
//         setSelectedCountry(country);
//         setSelectedLogo(logo);
//         setDropdownOpen(false);
//     };

//     const toggleDropdown = () => {
//         setDropdownOpen(!dropdownOpen);
//     };

//     const [showDateInput, setShowDateInput] = useState(false);
//     const [selectedDate, setSelectedDate] = useState('');

//     const handleDateClick = () => {
//         setShowDateInput(true);
//     };

//     const handleDateChange = (event) => {
//         setSelectedDate(event.target.value);
//     };
//     return (
//         <section className={style.make}>
//             <h1 className={style.make__title}>Сделать рассылку</h1>
//             <div className={style.make__blocks}>
//                 <div className={style.make__social}>
//                     <p className={style.make__social_title}>Соцсеть/Почта</p>
//                     <div className={style.make__block}>
//                         <div className={style.make__select} onClick={toggleDropdown}>
//                             <div>
//                                 {selectedLogo && <img className={style.make__select_logo} src={selectedLogo} alt="logo" />}
//                                 <p className={style.make__select_text}>{selectedCountry}</p>
//                             </div>
//                             <img className={`${style.make__select_down} ${dropdownOpen ? style.open : ''}`} src={down} alt="down" />
//                         </div>
//                         {dropdownOpen && (
//                             <ul className={style.make__dropdown}>
//                                 {socialData.map(item => (
//                                     <li
//                                         key={item.id}
//                                         className={style.make__dropdown_item}
//                                         onClick={() => handleCountrySelect(item.name, item.logo)}
//                                     >
//                                         <img src={item.logo} alt={item.name} />
//                                         {item.name}
//                                     </li>
//                                 ))}
//                             </ul>
//                         )}
//                     </div>
//                     <button className={style.make__social_btn}>Загрузить аккаунты</button>
//                 </div>
//                 <div className={style.make__message}>
//                     <label>
//                         <input className={style.make__message_input} type="text" placeholder='Сообщение' />
//                         <div>
//                             <button className={style.make__message_btn} type='submit'>Отправить</button>
//                             {showDateInput ? (
//                                 <input
//                                     className={style.make__message_data}
//                                     type="date"
//                                     value={selectedDate}
//                                     onChange={handleDateChange}
//                                 />
//                             ) : (
//                                 <span className={style.datePlaceholder} onClick={handleDateClick}>
//                                     <img src={clock} alt="clock" />
//                                     <p>Дата и время отправки</p>
//                                 </span>
//                             )}
//                         </div>
//                     </label>
//                 </div>
//             </div>
//         </section>
//     );
// }

// export default Make;



import React, { useState } from 'react';
import style from './Make.module.scss';
import vk from '../../../assets/vk.svg';
import telegram from '../../../assets/telegram.svg';
import google from '../../../assets/google.svg';
import instagram from '../../../assets/instagram.svg';
import down from '../../../assets/down.svg';
import clock from '../../../assets/clock.svg';

function Make() {
    const socialData = [
        { id: 1, logo: vk, name: 'Вконтакте' },
        { id: 2, logo: telegram, name: 'Телеграм' },
        { id: 3, logo: google, name: 'Ютуб' },
        { id: 4, logo: instagram, name: 'Инстаграм' },
        { id: 5, logo: null, name: 'Email' } // Добавлено
    ];

    const [selectedCountry, setSelectedCountry] = useState('Выберите');
    const [selectedLogo, setSelectedLogo] = useState(null);
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const handleCountrySelect = (country, logo) => {
        setSelectedCountry(country);
        setSelectedLogo(logo);
        setDropdownOpen(false);
    };

    const toggleDropdown = () => {
        setDropdownOpen(!dropdownOpen);
    };

    const [showDateInput, setShowDateInput] = useState(false);
    const [selectedDate, setSelectedDate] = useState('');

    const handleDateClick = () => {
        setShowDateInput(true);
    };

    const handleDateChange = (event) => {
        setSelectedDate(event.target.value);
    };

    const [subject, setSubject] = useState('');

    return (
        <section className={style.make}>
            <h1 className={style.make__title}>Сделать рассылку</h1>
            <div className={style.make__blocks}>
                <div className={style.make__social}>
                    <p className={style.make__social_title}>Соцсеть/Почта</p>
                    <div className={style.make__block}>
                        <div className={style.make__select} onClick={toggleDropdown}>
                            <div>
                                {selectedLogo && <img className={style.make__select_logo} src={selectedLogo} alt="logo" />}
                                <p className={style.make__select_text}>{selectedCountry}</p>
                            </div>
                            <img className={`${style.make__select_down} ${dropdownOpen ? style.open : ''}`} src={down} alt="down" />
                        </div>
                        {dropdownOpen && (
                            <ul className={style.make__dropdown}>
                                {socialData.map(item => (
                                    <li
                                        key={item.id}
                                        className={style.make__dropdown_item}
                                        onClick={() => handleCountrySelect(item.name, item.logo)}
                                    >
                                        {item.logo && <img src={item.logo} alt={item.name} />}
                                        {item.name}
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>
                    <button className={style.make__social_btn}>Загрузить аккаунты</button>
                </div>
                <div className={style.make__message}>
                    {selectedCountry === 'Email' && (
                        <label>
                            <input
                                className={style.make__message_input}
                                type="text"
                                placeholder='Тема'
                                value={subject}
                                onChange={(e) => setSubject(e.target.value)}
                            />
                        </label>
                    )}
                    <label>
                        <textarea
                            className={style.make__message_input}
                            placeholder='Сообщение'
                        />
                        <div>
                            <button className={style.make__message_btn} type='submit'>Отправить</button>
                            {showDateInput ? (
                                <input
                                    className={style.make__message_data}
                                    type="date"
                                    value={selectedDate}
                                    onChange={handleDateChange}
                                />
                            ) : (
                                <span className={style.datePlaceholder} onClick={handleDateClick}>
                                    <img src={clock} alt="clock" />
                                    <p>Дата и время отправки</p>
                                </span>
                            )}
                        </div>
                    </label>
                </div>
            </div>
        </section>
    );
}

export default Make;
