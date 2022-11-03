const getnamefetch =(idPost) =>{
    fetch (`https://jsonplaceholder.typicode.com/posts/${idPost}`)
.then (res=>{
return res.json()
})

.then(post=>{
/* console.log(post) */
fetch (`https://jsonplaceholder.typicode.com/users/${post.userId}`)

.then (res=>{
    return res.json()
})
.then (user=>{
    console.log(`la Persona que escribio el post ${idPost} es ${user.name} y dice ${post.body}`)
})
})

}


getnamefetch(14)