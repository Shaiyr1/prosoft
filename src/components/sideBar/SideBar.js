// import React from 'react';
// import { Link } from 'react-router-dom';
// import style from './SideBar.module.scss';
// import menu from '../../assets/menu.svg';
// import navigation from '../../assets/navigation.svg';
// import mail from '../../assets/mail.svg';
// import globe from '../../assets/globe.svg';
// import command from '../../assets/command.svg';
// import vector from '../../assets/Vector.svg';

// function SideBar() {
//     return (
//         <section className={style.sideBar}>
//             <nav>
//                 <div className={style.sideBar__user}>
//                     <h4>Алина Полгина</h4>
//                     <p>oliviabers@mail.com</p>
//                 </div>
//                 <ul className={style.sideBar__ul}>
//                     <li>
//                         <Link className={style.sideBar__ul_link} to='/collection'>
//                             <span>
//                                 <img src={menu} alt="menu" />
//                                 <p>Сбор данных</p>
//                             </span>
//                         </Link>
//                     </li>
//                     <li>
//                         <Link className={style.sideBar__ul_link} to='/tracking'>
//                             <span>
//                                 <img src={navigation} alt="navigation" />
//                                 <p>Отслеживание</p>
//                             </span>
//                         </Link>
//                     </li>
//                     <li>
//                         <Link className={style.sideBar__ul_link} to='/newsletter'>
//                             <span>
//                                 <img src={mail} alt="mail" />
//                                 <p>Рассылка</p>
//                             </span>
//                         </Link>
//                     </li>
//                     <li>
//                         <Link className={style.sideBar__ul_link} to='/orders'>
//                             <span>
//                                 <img src={globe} alt="globe" />
//                                 <p>Заказы</p>
//                             </span>
//                         </Link>
//                     </li>
//                     <li>
//                         <Link className={style.sideBar__ul_link} to='/prototype'>
//                             <span>
//                                 <img src={command} alt="command" />
//                                 <p>Прототип</p>
//                             </span>
//                         </Link>
//                     </li>
//                     <li className={style.sideBar__ul_logOut}>
//                         <Link className={style.sideBar__ul_link} to=''>
//                             <span>
//                                 <img src={vector} alt="vector" />
//                                 <p>Выйти</p>
//                             </span>
//                         </Link>
//                     </li>
//                 </ul>
//             </nav>
//         </section>
//     )
// }

// export default SideBar


import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import style from './SideBar.module.scss';
import menu from '../../assets/menu.svg';
import navigation from '../../assets/navigation.svg';
import mail from '../../assets/mail.svg';
import globe from '../../assets/globe.svg';
import command from '../../assets/command.svg';
import vector from '../../assets/Vector.svg';

function SideBar() {
    const location = useLocation();

    const isActive = (path) => {
        return location.pathname === path ? style.active : '';
    };

    return (
        <section className={style.sideBar}>
            <nav>
                <div className={style.sideBar__user}>
                    <h4>Алина Полгина</h4>
                    <p>oliviabers@mail.com</p>
                </div>
                <ul className={style.sideBar__ul}>
                    <li>
                        <Link className={`${style.sideBar__ul_link} ${isActive('/collection')}`} to='/collection'>
                            <span>
                                <img src={menu} alt="menu" />
                                <p>Сбор данных</p>
                            </span>
                        </Link>
                    </li>
                    <li>
                        <Link className={`${style.sideBar__ul_link} ${isActive('/tracking')}`} to='/tracking'>
                            <span>
                                <img src={navigation} alt="navigation" />
                                <p>Отслеживание</p>
                            </span>
                        </Link>
                    </li>
                    <li>
                        <Link className={`${style.sideBar__ul_link} ${isActive('/newsletter')}`} to='/newsletter'>
                            <span>
                                <img src={mail} alt="mail" />
                                <p>Рассылка</p>
                            </span>
                        </Link>
                    </li>
                    <li>
                        <Link className={`${style.sideBar__ul_link} ${isActive('/orders')}`} to='/orders'>
                            <span>
                                <img src={globe} alt="globe" />
                                <p>Заказы</p>
                            </span>
                        </Link>
                    </li>
                    <li>
                        <Link className={`${style.sideBar__ul_link} ${isActive('/prototype')}`} to='/prototype'>
                            <span>
                                <img src={command} alt="command" />
                                <p>Прототип</p>
                            </span>
                        </Link>
                    </li>
                    <li className={style.sideBar__ul_logOut}>
                        <Link className={`${style.sideBar__ul_link} ${isActive('/')}`} to=''>
                            <span>
                                <img src={vector} alt="vector" />
                                <p>Выйти</p>
                            </span>
                        </Link>
                    </li>
                </ul>
            </nav>
        </section>
    );
}

export default SideBar;
