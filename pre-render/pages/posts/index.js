import Link from "next/link";

export default function Postslist({ posts }) {
    return (
        <div>
            <h2>The list of posts</h2>
            {
                posts.map(post => {
                    return (
                        <div key={post.id}>
                            <Link href={`/posts/${post.id}`}  passHref>
                                <h2>{post.id}. {post.title}</h2>
                            </Link>
                            <hr />
                        </div>
                    )
                })
            }
        </div>
    );
}

export async function getStaticProps() {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await response.json();
    // console.log(data);
    return {
        props: {
            posts: data.slice(0, 5)
        }
    }
}