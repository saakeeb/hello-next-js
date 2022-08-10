import Link from "next/link";

function Prerender() { 
  return (
    <>
      <h1>This is pre render</h1>
      <Link href="./users">
        <a>Users</a>
      </Link>
      <Link href="./posts">
        <a>Posts</a>
      </Link>
    </>
  )
}

export default Prerender;