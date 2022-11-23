import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Create = () => {
    
    const [title, setTitle]= useState('');
    const [author, setAuthor]= useState('Bruce');
    const [body, setBody]=useState('');
    const [isPending,setIsPending]= useState(false);
    const navigate= useNavigate();

    const handleSubmit= (event)=> {
        event.preventDefault();
        const blog = {title,body,author};
        
        setIsPending(true);
        fetch ("http://localhost:8000/blogs/", {
            method: 'POST',
            headers: {"content-type":"application/json"},
            body: JSON.stringify(blog),

            
        }) .then( ()=> {
            console.log("New blog added");
            setIsPending(false);
            navigate("/");
        })
        
    } 
    
    return ( 
    <div className="create">
        <h2>Add a new Blog in here!</h2>
        <form onSubmit={handleSubmit}>
        
            <label>Blog name</label>
                <input type="text" value={title} onChange={(e)=> setTitle(e.target.value)}></input>
            <label>Blog body</label>
                <textarea value={body} onChange={(e)=> setBody(e.target.value)}></textarea>
            <label>Blog author</label>
            <select value={author} onChange={(e)=> setAuthor(e.target.value)}>
                <option value="John">John</option>
                <option value="Bruce">Bruce</option>
                <option value="Other">Other</option>
            </select>
            {!isPending && <button>Add a Blog</button>}        
            {isPending && <button disabled>Adding a new blog...</button>}
        </form>
    </div>
    );
}
 
export default Create;