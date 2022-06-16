import React, { createContext, useState } from 'react'

export const PostContext = createContext();


const PostContextProvider = ({ children }) => {
    const [post, setPost] = useState([
        { id: 0, title: "Summer Times", author: "Royal", details: "This is the best book of the world" },
        { id: 1, title: "Summer Times", author: "Royal", details: "This is the best book of the world" },
        { id: 2, title: "Summer Times", author: "Royal", details: "This is the best book of the world" }
    ])
    const addPost = (title, author, details) => {
        setPost([...post, { title, author, details, id: post.length }])
    }
    const deletePost = (id) => {
        setPost(post.filter(item => item.id !== id))
    }
    return (
        <PostContext.Provider value={{ post, addPost, deletePost }}>
            {children}
        </PostContext.Provider>
    )
}

export default PostContextProvider