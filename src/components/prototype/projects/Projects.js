import React from 'react';
import style from './Projects.module.scss';
import chechen from '../../../assets/chechen.png';
import british from '../../../assets/kingdom.png';
import germany from '../../../assets/germany.png';
import tatarstan from '../../../assets/tatarstan.svg';
import quanti from '../../../assets/quanti.svg';
import chart from '../../../assets/karta.svg';
import remove from '../../../assets/remove.svg';
import add from '../../../assets/add.svg';

function Projects() {

    const countryData = [
        { id: 1, name: 'АС Остров Вознесения' }, { id: 2, name: 'AD Андора' }, { id: 3, name: 'AE Объединенные Арабские Эмираты' }, { id: 4, name: 'АС Остров Вознесения' },
        { id: 5, name: 'AI Ангилья' }, { id: 6, name: 'AL Албания' }, { id: 7, name: 'AM Армения' }, { id: 8, name: 'AM Армения' },
        { id: 9, name: 'AM Армения' }, { id: 10, name: 'NO Норвегия' }, { id: 11, name: 'AM Армения' }, { id: 12, name: 'АС Остров Вознесения' },
        { id: 13, name: 'АС Остров Вознесения' }, { id: 14, name: 'АС Остров Вознесения' }, { id: 15, name: 'АС Остров Вознесения' }, { id: 16, name: 'АС Остров Вознесения' },
        { id: 17, name: 'АС Остров Вознесения' }, { id: 18, name: 'АС Остров Вознесения' }, { id: 19, name: 'АС Остров Вознесения' }, { id: 20, name: 'АС Остров Вознесения' },
    ];
    const popularData = [
        { id: 1, flag: british, name: 'Английский', quanti: '7 млн.' },
        { id: 2, flag: british, name: 'Английский', quanti: '7 млн.' },
        { id: 3, flag: tatarstan, name: 'Квенский', quanti: '4 млн.' },
        { id: 1, flag: germany, name: 'Германия', quanti: '2 млн.' },
        { id: 1, flag: chechen, name: 'Курдский', quanti: '1.3 млн.' },
    ];
    return (
        <section className={style.projects}>
            <h1>Проекты</h1>
            <div className={style.projects__blocks}>
                <div className={style.adaptive__count}>
                    <h1>Проекты</h1>
                    <div className={style.projects__country}>
                        {countryData.map(item => (
                            <p>{item.name}</p>
                        ))}
                    </div>
                </div>
                <div className={`${style.projects__country} ${style.secondCountry}`}>
                        {countryData.map(item => (
                            <p>{item.name}</p>
                        ))}
                    </div>
                <div className={style.projects__popular}>
                    <div className={style.projects__popularBlock}>
                        <h5>Популярные языки</h5>
                        <div className={style.projects__popular_country}>
                            {popularData.map(item => (
                                <div className={style.projects__popular_countryItem} key={item.id}>
                                    <div>
                                        <img src={item.flag} alt="flag" />
                                        <p>{item.name}</p>
                                    </div>
                                    <span>{item.quanti}</span>
                                </div>
                            ))}
                        </div>

                    </div>
                    <div className={style.projects__quantiPeople}>
                        <h5>Всего людей, млн.</h5>
                        <img src={quanti} alt="quanti" />
                        <p>Ознакомлено</p>
                    </div>
                </div>
                <div className={style.projects__cart}>
                    <img className={style.projects__cart_chart} src={chart} alt="chart" />
                    <div className={style.projects__cart_buttons}>
                        <button>
                            <img src={remove} alt="remove" />
                        </button>
                        <button>
                            <img src={add} alt="add" />
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Projects
