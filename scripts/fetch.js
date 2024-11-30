const randInt = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const buildComment = comment => {
  const authorNode = document.createElement("div")
  authorNode.classList.add("comment__author")
  authorNode.textContent = `${comment.email} написал:`

  const textNode = document.createElement("div")
  textNode.classList.add("comment__body")
  textNode.textContent = comment.body

  const commentNode = document.createElement("div")
  commentNode.classList.add("comment")
  commentNode.classList.add("comments-list__item")
  commentNode.appendChild(authorNode)
  commentNode.appendChild(textNode)

  return commentNode
}

const fetchComments = async () => {
  const preloader = document.getElementById("comments-preloader")
  const list = document.getElementById("comments-list")
  const error = document.getElementById("comments-error")
  const postId = randInt(1, 100)

  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/comments")
    // const res = await fetch("https://unknown")
    if (!res.ok) {
      throw new Error(res.status)
    }
    const json = await res.json()

    json
      .filter(comment => comment.postId == postId)
      .forEach(comment => {
        list.appendChild(buildComment(comment))
      })
    preloader.classList.add("comments-preloader_hidden")
    list.classList.remove("comments-list_hidden")
  } catch (e) {
    preloader.classList.add("comments-preloader_hidden")
    error.classList.remove("comments-error_hidden")
  }
}

document.addEventListener("DOMContentLoaded", async () => {
  await fetchComments()
  // setTimeout(async () => await fetchComments(), 5000)
})
