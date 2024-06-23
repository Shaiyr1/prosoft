import React, { useState } from 'react';
import Link from '../../../shared/link/Link';
import style from './PrototypeLink.module.scss';


function PrototypeLink() {
  const [selectedLink] = useState('https://vk.com/id145289652wall1452689');


  return (
    <section className={style.prototypeLink}>
      <Link selectedLink={selectedLink}/>
      <div className={style.prototypeLink__quanti}>
        <h5>Кол-во человек увидит</h5>
        <div className={style.prototypeLink_people}>
          <p>8 млн.</p>
        </div>
      </div>
      <div className={style.prototypeLink__buttons}>
        <button className={`${style.prototypeLink__button} ${style.btnBlue}`}>Добавить</button>
        <button className={style.prototypeLink__button}>Отмена</button>
      </div>
    </section>
  )
}

export default PrototypeLink