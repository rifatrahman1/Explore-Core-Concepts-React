
export default function Post ({post}) {
    console.log(post)
    const {id, title, body} = post;

    return (
        <div className="box">
            <h2>ID: {id}</h2>
            <h3>Title: {title}</h3>
            <p>Body: {body}</p>
        </div>
    )
}