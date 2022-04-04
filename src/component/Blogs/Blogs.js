import React from 'react';
import './Blogs.css'

const Blogs = () => {
    return (
        <div>
            <h1>Interesting Blogs</h1>
            <div className='blogs-container'>
                <h2>What is context API?</h2>
                <p>Context API is a famous React structure that recently used by developers. Mainly Context API Helps us to exchange or change our web details which one is unique. We can called it as a prop-driller. Because, it's works up to down like a drill machine. We can call Context API is a way to create global variables. We can pass that variables around the component tree. Another thing is we can use context as a hook as well.</p>
                <h2>What is semantic tag?</h2>
                <p>Well, semantic tag is a most famous thing in HTML. As a developer or coder, we always want to make our code much cleaner and understandable. In HTML5 semantic tags make them much easier. There are several kinds of semantic tags. Such as: header, footer, article, aside, section and so on. If we can use those semantic tags on our code, other developers when they read our codes they will understand it pretty much easily where we use those tags and why we use that. Because if a non-developer person show that, they will understand easily this tag is for this and that is for that. when we read header we can understand maybe this one for my header part. As a developer, we should use semantic tags on our code.</p>
            </div>
        </div>
    );
};

export default Blogs;