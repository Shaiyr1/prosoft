// import React, { useState } from 'react';
// import style from './Content.module.scss';
// import down from '../../../assets/down.svg';


// function Content() {
//     const countriesDataContent = [
//         { id: 1, name: 'АС Остров Вознесения', newClass: style.newClass },
//         { id: 2, name: 'AD Андорра' },
//         { id: 3, name: 'AE Объединенные Арабские Эмираты' },
//         { id: 4, name: 'АО Антигуа и Барбуда', newClass: style.newClass },
//         { id: 5, name: 'AI Ангилья' },
//         { id: 6, name: 'АМ Армения' },
//         { id: 7, name: 'АО Ангола' },
//         { id: 8, name: 'AR Аргентина', newClass: style.newClass },
//         { id: 9, name: 'AS Американская  Самоа', newClass: style.newClass },
//         { id: 10, name: 'AW Аруба' }
//     ];
//     const countriesData = [
//         { id: 1, name: 'AD Андора' },
//         { id: 2, name: 'AE Объединенные Арабские Эмираты' },
//         { id: 3, name: 'AG Антигуа и Барбуда' },
//         { id: 4, name: 'AI Ангилья' },
//         { id: 5, name: 'AL Албания' },
//         { id: 6, name: 'AM Армения' },
//         { id: 7, name: 'AD Андора' },
//         { id: 8, name: 'AD Андора' },
//         { id: 9, name: 'AD Андора' },
//         { id: 10, name: 'AD Андора' },
//         { id: 11, name: 'AD Андора' },
//         { id: 12, name: 'AD Андора' },

//     ];
//     const [selectedCountry, setSelectedCountry] = useState('Выберите страну');
//     const [dropdownOpen, setDropdownOpen] = useState(false);

//     const handleCountrySelect = (country) => {
//         setSelectedCountry(country);
//         setDropdownOpen(false);
//     };

//     const toggleDropdown = () => {
//         setDropdownOpen(!dropdownOpen);
//     };
//     return (
//         <section className={style.content}>
//             <div className={style.container}>
//                 <div className={style.content__tracked}>
//                     <h1>
//                         Отслеживается
//                     </h1>
//                     <div className={style.content__tracked_info}>
//                         {countriesDataContent.map(item => (
//                             <div className={style.content__info_block} key={item.id} >
//                                 <p>{item.name}</p>
//                                 <span className={`${item.newClass} ${style.content__info_new}`}>NEW</span>
//                             </div>
//                         ))}
//                     </div>
//                 </div>
//                 <div className={style.content__add}>
//                         <h2>Добавить отслеживание</h2>
//                         <div className={style.data__country}>
//                             <div className={style.data__select} onClick={toggleDropdown}>
//                                 <p className={style.data__select_text}>{selectedCountry}</p>
//                                 <img className={`${style.data__select_down} ${dropdownOpen ? style.open : ''}`} src={down} alt="down" />

//                             </div>
//                             {dropdownOpen && (
//                                 <ul className={style.data__dropdown}>
//                                     {countriesData.map(country => (
//                                         <li
//                                             key={country.id}
//                                             className={style.data__dropdown_item}
//                                             onClick={() => handleCountrySelect(country.name)}
//                                         >
//                                             {country.name}
//                                         </li>
//                                     ))}
//                                 </ul>
//                             )}
//                         </div>
//                         <input className={style.content__add_input} type="text" placeholder='Имя' />
//                         <button className={style.content__add_btn} type='submit'>Добавить</button>
//                     </div>
//             </div>
//         </section>
//     )
// }

// export default Content



import React, { useState } from 'react';
import style from './Content.module.scss';
import down from '../../../assets/down.svg';
import TrackingHistory from '../trackingHistory/TrackingHistory';

function Content() {
    const initialCountriesDataContent = [
        { id: 1, name: 'АС Остров Вознесения', newClass: style.newClass, user: 'user1' },
        { id: 2, name: 'AD Андорра', user: 'user2' },
        { id: 3, name: 'AE Объединенные Арабские Эмираты', user: 'user3' },
        { id: 4, name: 'АО Антигуа и Барбуда', newClass: style.newClass, user: 'user4' },
        { id: 5, name: 'AI Ангилья', user: 'user5' },
        { id: 6, name: 'АМ Армения', user: 'user6' },
        { id: 7, name: 'АО Ангола', user: 'user7' },
        { id: 8, name: 'AR Аргентина', newClass: style.newClass, user: 'user8' },
        { id: 9, name: 'AS Американская Самоа', newClass: style.newClass, user: 'user9' },
        { id: 10, name: 'AW Аруба', user: 'user10' }
    ];

    const [countriesDataContent, setCountriesDataContent] = useState(initialCountriesDataContent);
    const [trackingHistories, setTrackingHistories] = useState({
        'АС Остров Вознесения': [
            { date: '19 июня', type: 'Статья', link: 'https://vk.com/id145289652wall1452689', views: 4789, likes: 20 },
            { date: '20 июня', type: 'Видео', link: 'https://vk.com/id145289652wall1452689', views: 5692, likes: 1200 },
        ],
        'AD Андорра': [
            { date: '21 июня', type: 'Статья', link: 'https://vk.com/id145289652wall1452689', views: 6532, likes: 800 },
        ],
        // Add more tracking history data for other countries as needed
    });

    const [selectedCountry, setSelectedCountry] = useState('Выберите страну');
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [selectedTrackedCountry, setSelectedTrackedCountry] = useState(null);
    const [newTrackingUser, setNewTrackingUser] = useState('user1'); // Установим 'user1' по умолчанию

    const handleCountrySelect = (country) => {
        setSelectedCountry(country);
        setDropdownOpen(false);
    };

    const toggleDropdown = () => {
        setDropdownOpen(!dropdownOpen);
    };

    const handleTrackedCountryClick = (country) => {
        setSelectedTrackedCountry(country);
    };

    const handleAddTracking = () => {
        if (selectedCountry && newTrackingUser) {
            const newTracking = { id: countriesDataContent.length + 1, name: selectedCountry, newClass: style.newClass, user: newTrackingUser };
            setCountriesDataContent([...countriesDataContent, newTracking]);
            setTrackingHistories({ ...trackingHistories, [selectedCountry]: [] });
            setSelectedTrackedCountry(selectedCountry);
            setSelectedCountry('Выберите страну');
            setNewTrackingUser('user1'); // Сбрасываем значение на 'user1' после добавления
            console.log(setNewTrackingUser)
        }
    };

    return (
        <section className={style.content}>
            <div className={style.container}>
                <div className={style.content__tracked}>
                    <h1>Отслеживается</h1>
                    <div className={style.content__tracked_info}>
                        {countriesDataContent.map(item => (
                            <div
                                className={style.content__info_block}
                                key={item.id}
                                onClick={() => handleTrackedCountryClick(item.name)}
                            ><table>
                                <tr>
                                    <td><p>{item.name}</p></td>
                                    <td><p className={style.text}>{item.user}</p></td>
                                    <td className={style.thirdTd}>{item.newClass && <span className={`${item.newClass} ${style.content__info_new}`}>NEW</span>}</td>
                                </tr>
                                
                                
                                
                            </table>
                                
                            </div>
                        ))}
                    </div>
                </div>
                <div className={style.content__add}>
                    <h2>Добавить отслеживание</h2>
                    <div className={style.data__country}>
                        <div className={style.data__select} onClick={toggleDropdown}>
                            <p className={style.data__select_text}>{selectedCountry}</p>
                            <img className={`${style.data__select_down} ${dropdownOpen ? style.open : ''}`} src={down} alt="down" />
                        </div>
                        {dropdownOpen && (
                            <ul className={style.data__dropdown}>
                                {initialCountriesDataContent.map(country => (
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
                    <input
                        className={style.content__add_input}
                        type="text"
                        placeholder='Имя пользователя'
                        onChange={(e) => setNewTrackingUser(e.target.value)}
                    />
                    <button className={style.content__add_btn} type='button' onClick={handleAddTracking}>Добавить</button>
                </div>

            </div>
            {selectedTrackedCountry && trackingHistories[selectedTrackedCountry] && (
                <TrackingHistory history={trackingHistories[selectedTrackedCountry]} />
            )}
        </section>
    );
}

export default Content;