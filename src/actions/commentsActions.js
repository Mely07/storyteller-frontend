export const fetchComments = () => {
    return (dispatch) => {
        fetch('http://localhost:3000/comments')
            .then(resp => resp.json())
            .then(comments => dispatch({ type: 'FETCH_COMMENTS', payload: comments }))
    }
}

export const addComment = (comment) => {
    return (dispatch) => {
        fetch('http://localhost:3000/comments', {
            method: 'POST',
            body: JSON.stringify(comment),
            headers: { 'Content-Type': 'application/json' }
        })
            .then(resp => resp.json())
            .then(comment => dispatch({ type: 'ADD_COMMENT', payload: comment }))
    }
}

export const increaseLikes = (commentId) => {
    return (dispatch) => {
        fetch('http://localhost:3000/comments/' + commentId)
            .then(resp => resp.json())
            .then(json => {
                let formData = {
                    "likes": json.likes + 1
                };

                let configObj = {
                    method: "PATCH",
                    headers: {
                        "Content-Type": "application/json",
                        "Accept": "application/json"
                    },
                    body: JSON.stringify(formData)
                };

                fetch("http://localhost:3000/comments/" + commentId, configObj)
                    .then(resp => resp.json())
                    .then(comment => dispatch({ type: 'INCREASE_LIKES', payload: comment }))
            })
    }
}

export const increaseDislikes = (commentId) => {
    return (dispatch) => {
        fetch('http://localhost:3000/comments/' + commentId)
            .then(resp => resp.json())
            .then(json => {
                let formData = {
                    "dislikes": json.dislikes + 1
                };

                let configObj = {
                    method: "PATCH",
                    headers: {
                        "Content-Type": "application/json",
                        "Accept": "application/json"
                    },
                    body: JSON.stringify(formData)
                };

                fetch("http://localhost:3000/comments/" + commentId, configObj)
                    .then(resp => resp.json())
                    .then(comment => dispatch({ type: 'INCREASE_DISLIKES', payload: comment }))
            })
    }
}

export const increaseFunnyRating= (commentId) => {
    return (dispatch) => {
        fetch('http://localhost:3000/comments/' + commentId)
            .then(resp => resp.json())
            .then(json => {
                let formData = {
                    "funny_rating": json.funny_rating + 1
                };

                let configObj = {
                    method: "PATCH",
                    headers: {
                        "Content-Type": "application/json",
                        "Accept": "application/json"
                    },
                    body: JSON.stringify(formData)
                };

                fetch("http://localhost:3000/comments/" + commentId, configObj)
                    .then(resp => resp.json())
                    .then(comment => dispatch({ type: 'INCREASE_FUNNY_RATING', payload: comment }))
            })
    }
}

export const increaseScaryRating= (commentId) => {
    return (dispatch) => {
        fetch('http://localhost:3000/comments/' + commentId)
            .then(resp => resp.json())
            .then(json => {
                let formData = {
                    "scary_rating": json.scary_rating + 1
                };

                let configObj = {
                    method: "PATCH",
                    headers: {
                        "Content-Type": "application/json",
                        "Accept": "application/json"
                    },
                    body: JSON.stringify(formData)
                };

                fetch("http://localhost:3000/comments/" + commentId, configObj)
                    .then(resp => resp.json())
                    .then(comment => dispatch({ type: 'INCREASE_SCARY_RATING', payload: comment }))
            })
    }
}