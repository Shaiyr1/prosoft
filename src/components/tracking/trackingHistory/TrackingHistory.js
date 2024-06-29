import React from 'react';
import { Link } from 'react-router-dom';
import style from './TrackingHistory.module.scss';

function TrackingHistory({ history = [] }) {
    return (
        <section className={style.trackingHistory}>
            <h3 className={style.trackingHistory__title}>История всех упоминаний</h3>
            {history.length === 0 ? (
                <p>Нет данных для отображения.</p>
            ) : (
                <>
                    <table className={style.trackingHistory__table}>
                        <thead>
                            <tr>
                                <th>Дата</th>
                                <th>Тип</th>
                                <th>Ссылка</th>
                                <th>Просмотры</th>
                                <th>Лайки</th>
                            </tr>
                        </thead>
                        <tbody>
                            {history.map((item, index) => (
                                <tr key={index}>
                                    <td>{item.date}</td>
                                    <td>{item.type}</td>
                                    <td><Link href={item.link} target="_blank" rel="noopener noreferrer">{item.link}</Link></td>
                                    <td >{item.views}</td>
                                    <td>{item.likes}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    <div className={style.adaptive__tables}>
                        {history.map((item, idx) => (
                            <table className={style.TrackingHistory__adaptiveTable} key={idx}>
                                <thead>
                                    <tr>
                                        <th>Дата</th>
                                        <th>Тип</th>
                                        <th>Ссылка</th>
                                        <th>Просмотры</th>
                                        <th>Лайки</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr >
                                        <td>{item.date}</td>
                                        <td>{item.type}</td>
                                        <td className={style.tdLink}><Link className={style.adaptive__link} href={item.link}>{item.link.length > 10 ? `${item.link.substr(0, 13)}...` : item.link}</Link></td>
                                        <td className={style.fore}>{item.views}</td>
                                        <td>{item.likes}</td>
                                    </tr>
                                </tbody>
                            </table>
                        ))}
                    </div>
                </>

            )}
        </section>
    );
}

export default TrackingHistory;