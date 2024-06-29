import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import style from './SideBar.module.scss';
import menu from '../../assets/menu.svg';
import navigation from '../../assets/navigation.svg';
import mail from '../../assets/mail.svg';
import globe from '../../assets/globe.svg';
import command from '../../assets/command.svg';
import vector from '../../assets/Vector.svg';
import burger from '../../assets/burger.svg';
import closeBurger from '../../assets/closeBurger.svg';

function SideBar() {
    const location = useLocation();
    const [isBurgerOpen, setIsBurgerOpen] = useState(false);

    const isActive = (path) => {
        return location.pathname === path ? style.active : '';
    };

    const toggleBurgerMenu = () => {
        setIsBurgerOpen(!isBurgerOpen);
    };

    const closeBurgerMenu = () => {
        setIsBurgerOpen(false);
    };

    return (
        <section className={style.sideBar}>
            <nav>
                <div className={style.sideBar__user}>
                    <h4>Алина Полгина</h4>
                    <p>oliviabers@mail.com</p>
                </div>
                <ul className={`${style.sideBar__ul} ${isBurgerOpen ? style.open : ''}`}>
                    <li>
                        <Link
                            className={`${style.sideBar__ul_link} ${isActive('/collection')}`}
                            to='/collection'
                            onClick={closeBurgerMenu}
                        >
                            <span>
                                <img src={menu} alt="menu" />
                                <p>Сбор по сайтам</p>
                            </span>
                        </Link>
                    </li>
                    <li>
                        <Link
                            className={`${style.sideBar__ul_link} ${isActive('/tracking')}`}
                            to='/tracking'
                            onClick={closeBurgerMenu}
                        >
                            <span>
                                <img src={navigation} alt="navigation" />
                                <p>Отслеживание</p>
                            </span>
                        </Link>
                    </li>
                    <li>
                        <Link
                            className={`${style.sideBar__ul_link} ${isActive('/newsletter')}`}
                            to='/newsletter'
                            onClick={closeBurgerMenu}
                        >
                            <span>
                                <img src={mail} alt="mail" />
                                <p>Рассылка</p>
                            </span>
                        </Link>
                    </li>
                    <li>
                        <Link
                            className={`${style.sideBar__ul_link} ${isActive('/orders')}`}
                            to='/orders'
                            onClick={closeBurgerMenu}
                        >
                            <span>
                                <img src={globe} alt="globe" />
                                <p>Заказы</p>
                            </span>
                        </Link>
                    </li>
                    <li>
                        <Link
                            className={`${style.sideBar__ul_link} ${isActive('/prototype')}`}
                            to='/prototype'
                            onClick={closeBurgerMenu}
                        >
                            <span>
                                <img src={command} alt="command" />
                                <p>Прототип</p>
                            </span>
                        </Link>
                    </li>
                    <li className={style.sideBar__ul_logOut}>
                        <Link
                            className={`${style.sideBar__ul_link} ${isActive('/')}`}
                            to=''
                            onClick={closeBurgerMenu}
                        >
                            <span>
                                <img src={vector} alt="vector" />
                                <p>Выйти</p>
                            </span>
                        </Link>
                    </li>
                </ul>
                <img
                    className={style.sideBar__burgerIcon}
                    src={isBurgerOpen ? closeBurger : burger}
                    alt="burger-menu"
                    onClick={toggleBurgerMenu}
                />
            </nav>
        </section>
    );
}

export default SideBar;
