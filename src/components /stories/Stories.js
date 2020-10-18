import React from 'react';
import StoryCard from './StoryCard'
import StoryInput from './StoryInput';
import { connect } from 'react-redux';
import { filterByGenre } from '../../actions/storiesActions';


const Stories = ({ stories, filterByGenre }) => {
    const renderStories = stories.map(story =>
        <div className="col-md-3 mt-3 mb-3" key={story.id}> 
            <StoryCard story={stories.find(s => s.id === story.id)} />
        </div>
    );

    const handleOnChange = (e) => {
        let genre = e.target.value
        filterByGenre(genre)
    }

    return (
        <div className="mx-5">
            <StoryInput />
            <div className="text-secondary font-weight-bold text-warning">Filter Stories by Genre:</div>
            <div className="row">
                <div className="col-md-3" style={{padding: '0'}}>
                    <form className="mt-2">
                        <div className="mb-3">
                            <select className="custom-select d-block w-100" onChange={handleOnChange}>
                                <option selected="true" disabled="disabled"> -- Select a genre --</option>
                                <option>Comedy</option>
                                <option>Horror</option>
                                <option>Action</option>
                                <option>Fantasy</option>
                            </select>
                        </div>
                    </form>
                </div>
            </div>

            <div className="row">
                {renderStories}
            </div>
        </div>
    );
};

export default connect(null, { filterByGenre })(Stories);


