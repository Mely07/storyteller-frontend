export const fetchStories = () => {
    return (dispatch) => {
        fetch('http://localhost:3000/stories')
        .then(resp => resp.json())
        .then(stories => dispatch({ type: 'FETCH_STORIES', payload: stories}))
    }
}

export const addStory = (story) => {
    return (dispatch) => {
        fetch('http://localhost:3000/stories', {
            method: 'POST',
            body: JSON.stringify(story),
            headers: { 'Content-Type': 'application/json'}
        })
        .then(resp => resp.json())
        .then(story=> dispatch({ type: 'ADD_STORY', payload: story}))
    }
}
