import { Link } from "react-router-dom";


const BlogList = ({blogs,title, deleteItem}) => {

      
    return (
       
       <div className="blog-list">
           <h2>{title}</h2>
           
           
           {blogs.map((i) => 
           
           <Link to={`/blogs/${i.id}`}>
            
                    <div className="blog-preview"  key={i.id}>
                        <h2>{i.title}  </h2>
                        <p> Author : {i.author}  </p>
                
                    </div> 
       
            </Link>)
       }
           
           

       </div>
       
       
        
       
       );
}

export default BlogList;