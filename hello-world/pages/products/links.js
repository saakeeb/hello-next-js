import styles from '../../styles/Home.module.css';
import Link from 'next/link';

function Links(props) {
    const url = `/products/${props.item}`;
    return (
        <>
            <Link href={url}>Lorem ipsum dolor sit amet.</Link>
        </>
    )
}
export default Links;