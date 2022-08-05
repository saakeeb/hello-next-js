import styles from '../styles/Home.module.css';
import Link from 'next/link';
import { useRouter } from 'next/router';

function Home() { 
  const route = useRouter();

  const clickHandle = () => {
    
    console.log("Product pages");
    route.replace("/products");

  }

  return (
    <>
      <h1 className={styles.title}>Hello World</h1>
      <Link href='/'>Home</Link>
      <br />
      <Link href='/about'>About</Link>
      <br />
      <Link href='/profile'>Profile</Link>
      <br />
      <Link href='/blog'>Blog</Link>
      <br />
      <Link href='/products'>Products</Link>
      <br />
      <Link href='/doc'>Doc</Link>
      <br />
      <button onClick={clickHandle}>Add Product</button>
    </>
  )
}

export default Home;