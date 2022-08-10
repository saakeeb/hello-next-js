import Title from '../components/Title';
import styles from '../styles/Home.module.css';

export default function Contact() {
    return (
        <div className={styles.container}>
            <Title title="Contact" />
            <h2>Contact Page</h2>
            <p className={styles.container}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut dicta ducimus deserunt et deleniti
                perspiciatis alias qui non debitis, libero quibusdam magni soluta facilis tempora inventore dolore
                autem id quo officia adipisci deleniti, quis, culpa nam doloribus quibusdam porro natus
                dignissimos, quidem recusandae voluptatum.
            </p>
        </div>
    );
}