export default function User({ user }) {
    return (
        <div>
            <h2>Name : {user.name}</h2>
            <p>Email : {user.email}</p>
        </div>
    );
}