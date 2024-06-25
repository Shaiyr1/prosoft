// import React from 'react'
// import style from './TrackingHistory.module.scss'


// function TrackingHistory() {
//   return (
//     <section className={style.trackingHistory}>
//       <h3 className={style.trackingHistory__title}>История всех упоминаний</h3>
//       <table className={style.trackingHistory__table}>
//         <thead>
//             <tr>
//                 <th>Дата</th>
//                 <th>Тип</th>
//                 <th>Ссылка </th>
//                 <th>Просмотры</th>
//                 <th>Лайки</th>
//             </tr>
//         </thead>
//         <tbody>
//             <tr>
//                 <td>19 июня</td>
//                 <td>Статья</td>
//                 <td>https://vk.com/id145289652wall1452689</td>
//                 <td>4789</td>
//                 <td>20</td>
//             </tr>
//             <tr>
//                 <td>19 июня</td>
//                 <td>Видео</td>
//                 <td>https://vk.com/id145289652wall1452689</td>
//                 <td>5692</td>
//                 <td>1200</td>
//             </tr>
//             <tr>
//                 <td>20 июня</td>
//                 <td>Статья</td>
//                 <td>https://vk.com/id145289652wall1452689</td>
//                 <td>6532</td>
//                 <td>800</td>
//             </tr>
//             <tr>
//                 <td>20 июня</td>
//                 <td>Статья</td>
//                 <td>https://vk.com/id145289652wall1452689</td>
//                 <td>4856</td>
//                 <td>248</td>
//             </tr>
//         </tbody>
//       </table>
//     </section>
//   )
// }

// export default TrackingHistory



import React from 'react';
import style from './TrackingHistory.module.scss';

function TrackingHistory({ history = [] }) {
    return (
        <section className={style.trackingHistory}>
            <h3 className={style.trackingHistory__title}>История всех упоминаний</h3>
            {history.length === 0 ? (
                <p>Нет данных для отображения.</p>
            ) : (
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
                                <td><a href={item.link} target="_blank" rel="noopener noreferrer">{item.link}</a></td>
                                <td>{item.views}</td>
                                <td>{item.likes}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </section>
    );
}

export default TrackingHistory;
