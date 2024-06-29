import React, { useState } from 'react';
import style from './NewsletterHistory.module.scss';

function NewsletterHistory() {
    const [activeTab, setActiveTab] = useState('Все');

    const tabs = ['Все', 'Отправлено', 'Доставлено', 'Прочитано', 'В ожидании'];

    const newsletters = {
        'Все': [
            { id: 1, title: 'Тема', text: 'Текст', social: 'VK', date: '21 июня', time: '12:30', status: 'Отправлено' },
            { id: 2, title: 'Тема 2', text: 'Текст', social: 'VK', date: '21 июня', time: '12:30', status: 'Доставлено' },
            { id: 3, title: 'Тема 3', text: 'Текст', social: 'VK', date: '21 июня', time: '12:30', status: 'Отправлено' },
            { id: 4, title: 'Тема 4', text: 'Текст', social: 'VK', date: '21 июня', time: '12:30', status: 'Отправлено' }
        ],
        'Отправлено': [
            { id: 1, title: 'Тема', text: 'Текст', social: 'VK', date: '21 июня', time: '12:30', status: 'Отправлено' },
            { id: 3, title: 'Тема 3', text: 'Текст', social: 'VK', date: '21 июня', time: '12:30', status: 'Отправлено' },
            { id: 4, title: 'Тема 4', text: 'Текст', social: 'VK', date: '21 июня', time: '12:30', status: 'Отправлено' }
        ],
        'Доставлено': [
            { id: 2, title: 'Тема 2', text: 'Текст', social: 'VK', date: '21 июня', time: '12:30', status: 'Доставлено' }
        ],
        'Прочитано': [],
        'В ожидании': []
    };

    return (
        <section className={style.newsletterHistory}>
            <h2 className={style.newsletterHistory__title}>История рассылок</h2>
            <div className={style.newsletterHistory__tabs}>
                {tabs.map(tab => (
                    <button
                        key={tab}
                        className={`${style.newsletterHistory__tabs_tab} ${activeTab === tab ? style.active : ''}`}
                        onClick={() => setActiveTab(tab)}
                    >
                        {tab}
                    </button>
                ))}
            </div>
            <div className={style.newsletterHistory__content}>
                <table className={style.newsletterHistory__table}>
                    <thead>
                        <tr>
                            {['Название', 'Текст письма', 'Соцсеть', 'Дата', 'Время', 'Статус'].map((header, index) => (
                                <th key={index}>{header}</th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {newsletters[activeTab].map(newsletter => (
                            <tr key={newsletter.id}>
                                <td>{newsletter.title}</td>
                                <td>{newsletter.text}</td>
                                <td>{newsletter.social}</td>
                                <td>{newsletter.date}</td>
                                <td>{newsletter.time}</td>
                                <td><button>{newsletter.status}</button></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <div className={style.adaptive__tables}>
                {newsletters[activeTab].map((newsletter, index) => (
                    <table className={style.newsletterHistory__table} key={index}>
                        <thead>
                            <tr>
                                {['Название', 'Текст письма', 'Соцсеть', 'Дата', 'Время', 'Статус'].map((header, index) => (
                                    <th key={index}>{header}</th>
                                ))}
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>{newsletter.title}</td>
                                <td>{newsletter.text}</td>
                                <td>{newsletter.social}</td>
                                <td>{newsletter.date}</td>
                                <td>{newsletter.time}</td>
                                <td><button>{newsletter.status}</button></td>
                            </tr>
                        </tbody>
                    </table>
                ))}

            </div>
        </section>
    );
}

export default NewsletterHistory;

