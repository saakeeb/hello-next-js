import { useRouter } from 'next/router';
import styles from '../../styles/Home.module.css';

function Docs() {
    const router = useRouter();
    const { params = [] } = router.query;
    
    console.log(params);

    if (params.length === 2) {
        return (
            <>
                <h1 className={styles.title}>Represant {params[0]} with {params[1]}</h1>
            </>
        )
    }
    else if (params.length === 1) { 
        return (
            <>
                <h1 className={styles.title}>Showing the data of {params[0]}</h1>
            </>
        )
    }

    return (
        <>
            <h1 className={styles.title}>Docs Home Page</h1>
        </>
    )
}
export default Docs;