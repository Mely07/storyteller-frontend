export const fetchStories = () => {
    return (dispatch) => {
        dispatch({ type: 'LOADING_STORIES' });
        fetch('http://localhost:3000/stories')
            .then(response => response.json())
            .then(stories => dispatch({ type: 'FETCH_STORIES', payload: stories }));
    };
}

export const addStory = (story) => {
    return (dispatch) => {
        fetch('http://localhost:3000/stories', {
            method: 'POST',
            body: JSON.stringify(story),
            headers: { 'Content-Type': 'application/json' }
        })
            .then(resp => resp.json())
            .then(story => dispatch({ type: 'ADD_STORY', payload: story }))
    }
}

export const filterByGenre = (genre) => {
    return (dispatch) => {
        fetch('http://localhost:3000/stories')
            .then(resp => resp.json())
            .then(stories => dispatch({ type: 'FILTER_STORIES', payload: stories.filter(story => story.genre === genre) }))
    }
}


export const fetchTopStory = () => {
    return (dispatch) => {
        fetch('http://localhost:3000/stories/top')
            .then(resp => resp.json())
            .then(story => dispatch({ type: 'TOP_STORY', payload: story[0] }))
    }
}