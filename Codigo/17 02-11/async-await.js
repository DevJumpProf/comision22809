const getnameAsync= async (idPost)=>{

    try {
const resPost = await fetch (`https://jsonplaceholder.typicode.com/posts/${idPost}`)
const post = await resPost.json()
/* console.log(post) */

const resUser = await fetch (`https://jsonplaceholder.typicode.com/users/${post.userId}`)
const user = await resUser.json()

 console.log(`la Persona que escribio el post ${idPost} es ${user.name} y dice ${post.body}`)

    } catch (error) {
console.log(error)

    }   



}

getnameAsync(15)