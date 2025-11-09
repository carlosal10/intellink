import './Contact.css';
import useTranslate from '../hooks/useTranslate';

export default function Contact() {
  const t = useTranslate();

  return (
    <section className="contact">
      <div className="contact-container">

        <h2>{t('contact.title')}</h2>
        <p className="subtext">{t('contact.subtitle')}</p>

        <form className="contact-form">
          <input type="text" name="name" placeholder={t('contact.form.name')} required />
          <input type="email" name="email" placeholder={t('contact.form.email')} required />
          <input type="text" name="clientPhone" placeholder={t('contact.form.phone')} required />
          <input type="text" name="clientLocation" placeholder={t('contact.form.location')} required />
          <textarea name="message" placeholder={t('contact.form.message')} rows="5" required></textarea>
          <button type="submit">{t('contact.form.submit')}</button>
        </form>

      </div>
    </section>
  );
}
