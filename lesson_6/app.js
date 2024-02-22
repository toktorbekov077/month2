function addBlogPost() {
    const titleInput = document.getElementById('title')
    const contentInput = document.getElementById('content')
    const blogPostContainer = document.getElementById('blog-posts')

    const title = titleInput.value
    const content = contentInput.value

    if(title && content){
        const article = document.createElement('article')
        article.innerHTML = `
            <h2>${title}</h2>
            <p>${content}</p>
        `
        blogPostContainer.appendChild(article)

        titleInput.value = ''
        contentInput.value = ''
    }else{
        alert('Заполните все поля')
    }
}