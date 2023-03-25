const callPost = () => {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(data => displayPost(data))
}
callPost()



const displayPost = posts => {
    const mainDiv = document.getElementById('all-posts')
    for (const post of posts) {
        // console.log(post)
        const div = document.createElement('div')
        div.classList.add('col')

        div.innerHTML = `
        <div class="card">
           <div class="card-body">
            <h5 class="card-title">${post.id}</h5>
            <p class="card-text">${post.title}</p>
            <button onclick="commentDetails('${post.id}')" class="btn btn-primary">Details</button>
           </div>
        </div>
        `

        mainDiv.appendChild(div)
    }
}



const commentDetails = details => {
    const url = 'https://jsonplaceholder.typicode.com/posts'
    fetch(url)
        .then(res => res.json())
        .then(data => displayComment(data[0]))
}


const displayComment = Comment => {
    const commentBox = document.getElementById('comment')
    const h6 = document.createElement('h6')
    h6.innerText = `${Comment.body}`
    commentBox.appendChild(h6)

}
