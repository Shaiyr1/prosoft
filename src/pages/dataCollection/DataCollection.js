import React from 'react';
import Data from '../../components/dataCollection/data/Data';
import QueryHistory from '../../components/dataCollection/queryHistory/QueryHistory';
import style from './DataCollection.module.scss';

function DataCollection() {
  return (
    <section className={style.dataCollection}>
      <Data/>
      <QueryHistory/>
    </section>
  )
}

export default DataCollection
