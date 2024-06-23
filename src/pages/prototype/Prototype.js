import React from 'react';
import Projects from '../../components/prototype/projects/Projects';
import PrototypeLink from '../../components/prototype/prototypeLink/PrototypeLink';
import style from './Prototype.module.scss';

function Prototype() {
  return (
    <section className={style.prototype}>
      <Projects/>
      <PrototypeLink/>
    </section>
  )
}

export default Prototype
