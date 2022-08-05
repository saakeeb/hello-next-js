import { useRouter } from 'next/router';
import styles from '../../../../styles/Home.module.css';

function Review() {
    const router = useRouter();
    const {productId, reviewId} = router.query;

    return (
        <>
            <h1 className={styles.title}>Review of {reviewId} for
                {productId} Products Details</h1>
        </>
    )
}
export default Review;