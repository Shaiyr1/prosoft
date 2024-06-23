import React from 'react'
import Make from '../../components/newsletter/make/Make'
import NewsletterHistory from '../../components/newsletter/newsletterHistory/NewsletterHistory'
import style from './Newsletter.module.scss'

function Newsletter() {
  return (
    <section className={style.newsletter}>
      <Make/>
      <NewsletterHistory/>
    </section>
  )
}

export default Newsletter
