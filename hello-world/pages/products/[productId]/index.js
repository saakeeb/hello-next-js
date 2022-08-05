import { useRouter } from 'next/router';
import styles from '../../../styles/Home.module.css';

function Products() {
    const router = useRouter();
    const productId = router.query.productId;

    return (
        <>
            <h1 className={styles.title}>{productId} Products Details</h1>
        </>
    )
}
export default Products;