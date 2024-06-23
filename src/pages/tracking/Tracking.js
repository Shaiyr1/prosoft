import React from 'react';
import Content from '../../components/tracking/content/Content';
import TrackingHistory from '../../components/tracking/trackingHistory/TrackingHistory';
import style from  './Tracking.module.scss';

function Tracking() {
  return (
    <section className={style.tracking}>
      <Content/>
      <TrackingHistory/>
    </section>
  )
}

export default Tracking
