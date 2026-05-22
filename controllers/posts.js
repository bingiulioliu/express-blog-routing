import posts from "../data/posts.js";

function index (request, response) {
    response.json(posts)
}

function show (request, response) {
    // Recuper l'ID dai params
    const {id} = request.params;

    const realId = Number(id.trim())

    if (isNaN(realId)) {
        response.status(404)
        .json({
            error: 'ID non corretto',
            result: null
        });
        return;
    }

    if (realId<=0 || realId > 5){
        response.status(404)
        .json({
            error: 'ID minore di zero o maggiore di 5',
            result: null
        });
        return;
    }

    const postFound = posts.find(post => {
        return post.id === realId
    });

    if (postFound === undefined) {
        response.status(404)
        .json({
            error: 'Post non trovato',
            result: null
        });
        return;
    }

    response.json({
        error: null,
        results: postFound
    });

}

function create (request, response) {
    response.json({
        messaggio: 'Richiesta di creazione'
    })
}

function destroy (request, response) {
    const {id} = request.params;
    response.json({
        messaggio: `Richiesta di eliminazione per post con ID ${id}`
    })
}


export {
    index, show, create, destroy
}