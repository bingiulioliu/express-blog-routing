import posts from "../data/posts.js";

function index (request, response) {
    response.json(posts)
}

function show (request, response) {
    response.json(posts)
}

function create (request, response) {
    response.json(posts)
}

export {
    index, show, create
}