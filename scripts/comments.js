const addComment = (username, text) => {
  const authorNode = document.createElement("div")
  authorNode.classList.add("comment__author")
  authorNode.textContent = `${username} написал:`

  const textNode = document.createElement("div")
  textNode.classList.add("comment__body")
  textNode.textContent = text

  const comment = document.createElement("div")
  comment.classList.add("comment")
  comment.classList.add("comments-list__item")
  comment.appendChild(authorNode)
  comment.appendChild(textNode)

  const root = document.getElementById("comments-list")
  root.appendChild(comment)
}

const isValid = (username, text) => {
  return (username.length > 0) && (text.length > 0)
}

const getComments = () => {
  const key = "posts-first-comments"
  const comments = localStorage.getItem(key) || "[]"
  return JSON.parse(comments)
}

const saveComment = (username, text) => {
  const key = "posts-first-comments"
  const comments = getComments()

  comments.push({ username, text })
  localStorage.setItem(key, JSON.stringify(comments))
}

const loadComments = () => {
  getComments()
    .forEach(comment => {
      addComment(comment.username, comment.text)
    })
}

const onSubmit = e => {
  e.preventDefault()
  const username = document
    .getElementById("comment-form__username")
    .value.trim() || ""
  const text = document
    .getElementById("comment-form__text")
    .value.trim() || ""

  if (isValid(username, text)) {
    addComment(username, text)
    saveComment(username, text)
  }
}

(() => {
  window.addEventListener("load", _ => {
    loadComments()
    document
      .getElementById("comment-form")
      .addEventListener("submit", onSubmit)
  })
})()
