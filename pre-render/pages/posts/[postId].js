export default function PostDetails({post}) {
    return (
        <div>
            <h2>{post.id}. {post.title} </h2>
            <p>{post.body}</p>
            <hr />
        </div>
    );
}

export async function getStaticPaths() {
    return {
        paths: [
            { params: { postId: '1' } },
            { params: { postId: '2' } },
            { params: { postId: '3' } },
            { params: { postId: '4' } },
            { params: { postId: '5' } }
        ],
        fallback: false, // can also be true or 'blocking'
    }
}

export async function getStaticProps(context) {
    const { params } = context;
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`);
    const data = await response.json();
    console.log(data);
    return {
        props: {
            post: data
        }
    }
}