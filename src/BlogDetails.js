import {  useNavigate, useParams } from "react-router-dom";
import useFetch from "./useFetch";

const BlogDetails = () => {
    const {id}=useParams();
    const {data:blog , error, isPending}= useFetch("http://localhost:8000/blogs/"+id);
    
    const navigate= useNavigate();
    const deleteBlog = ()=> { 
        fetch ("http://localhost:8000/blogs/"+id, { 
            method: 'DELETE'
            }).then(()=>navigate("/"));
    }
    return (
        <div className="blog-preview">
            {error&& <div>{error}</div>}
            <br />
            {isPending && <div>Loading page...</div> }
            <br />
            {blog && <div>
                <h2>{blog.title}</h2> 
                <p >Written by: {blog.author}</p>
                <br />
                <p>{blog.body}</p>   
            </div>}
                <div className="deleteButton">
                    <button onClick={deleteBlog}>Delete Blog</button>
                </div>
        </div>
        );
}
 
export default BlogDetails;