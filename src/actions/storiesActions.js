export const fetchStories = () => {
    return (dispatch) => {
        fetch('http://localhost:3000/stories')
        .then(resp => resp.json())
        .then(stories => dispatch({ type: 'FETCH_STORIES', payload: stories}))
    }
}




