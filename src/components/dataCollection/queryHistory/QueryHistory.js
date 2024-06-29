import React from 'react';
import style from './QueryHistory.module.scss';

function QueryHistory() {
    return (
        <section className={style.queryHistory}>
            <div className={style.container}>
                <h2 className={style.queryHistory__title}>История запросов</h2>
                <table className={style.queryHistory__table}>
                    <thead>
                        <tr>
                            <th>Запросы</th>
                            <th>% выполнения</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Окно ПВХ собрано</td>
                            <td className={style.queryHistory__table_secondTd}>70/100</td>
                            <button className={style.queryHistory__table_btn}>Скачать</button>
                        </tr>
                        <tr>
                            <td>Окно ПВХ собрано</td>
                            <td className={style.queryHistory__table_secondTd}>100</td>
                            <button className={`${style.queryHistory__table_btn} ${style.blue}`}>Скачать</button>
                        </tr>
                    </tbody>
                </table>
                <div className={style.adaptive__tables}>
                    <table className={style.queryHistory__tableAdaptive}>
                        <thead>
                            <tr>
                                <th className={style.queryHistory__tableAdaptive_first}>Запросы</th>
                                <th className={style.queryHistory__tableAdaptive_second}>% выполнения</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className={style.queryHistory__tableAdaptive_tdTitle}>Окно ПВХ собрано</td>
                                <td className={style.queryHistory__table_secondTd}>70/100</td>
                                <button className={style.queryHistory__table_btn}>Скачать</button>
                            </tr>
                        </tbody>
                    </table>
                    <table className={style.queryHistory__tableAdaptive}>
                        <thead>
                            <tr>
                                <th className={style.queryHistory__tableAdaptive_first}>Запросы</th>
                                <th className={style.queryHistory__tableAdaptive_second}>% выполнения</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className={style.queryHistory__tableAdaptive_tdTitle}>Окно ПВХ собрано</td>
                                <td className={style.queryHistory__table_secondTd}>100</td>
                                <button className={`${style.queryHistory__table_btn} ${style.blue}`} >Скачать</button>
                            </tr>
                        </tbody>
                    </table>
                </div>

            </div>
        </section>
    )
}

export default QueryHistory
