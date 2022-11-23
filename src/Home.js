import { useState, useEffect } from "react";
import BlogList from "./BlogList";
import useFetch from "./useFetch";

const Home = () => {
    
    const {data : blogs, error, isPending} = useFetch('http://localhost:8000/blogs')

    const deleteItem = (id) => {
        const newBlogs = blogs.filter((blog)=> blog.id !== id );
        
    }

        
    return (
        <div className="homepage">
            
        {error&& <div>{error}</div>}
        <br />
        {isPending && <div>Loading page...</div> }
        <br />
        {blogs && <BlogList blogs={blogs}  title="All Blogs in here" deleteItem={deleteItem} />}
               
        </div>
          

      );
}
 
export default Home;