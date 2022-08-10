import User from "../components/user/user";


export default function Userslist({users}) {
    return (
        <div>
            {
                users.map(user => <User key={user.id} user={user}></User>)
            }
        </div>
    );
}

export async function getStaticProps(context) {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json();
    // console.log(data);
    return {
        props: {
            users: data
        }
    }
}