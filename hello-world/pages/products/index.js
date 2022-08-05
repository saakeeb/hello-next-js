import styles from '../../styles/Home.module.css';
import Links from './links';

const num = [1, 2, 3, 4, 5];

function Products() {
    return (
        <>
            <h1 className={styles.title}>Products Store</h1>
            <ul>
                {
                    num.map(item => <li key={item}><Links item={item}></Links></li>)
                }
            </ul>
        </>
    )
}
export default Products;