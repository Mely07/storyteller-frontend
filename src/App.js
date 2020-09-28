import React from 'react';
import StoriesContainer from './containers/StoriesContainer';
import StoryInput from './containers/StoryInput'

const App = () => {
  return (
    <div>
      <StoryInput/>
      <StoriesContainer />
    </div>
  );
};

export default App;

