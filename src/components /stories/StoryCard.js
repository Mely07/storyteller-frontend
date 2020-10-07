import React from 'react';
import { Card } from 'react-bootstrap';

const StoryCard = ({ story }) => {
    return (
        <Card style={cardStyle}>
            <Card.Img src={story.image} style={cardStyle, imageStyle} />
            <Card.ImgOverlay>
                <Card.Text>{story.opening_line}</Card.Text>
            </Card.ImgOverlay>

        </Card>

    );
};
export default StoryCard;


const cardStyle = {
    marginBottom: 25,
    marginTop: 25,
    marginLeft: 25,

    height: 250,
    width: 250,
    display: 'inline-block',
    textAlign: 'center'
}

const imageStyle = {
    height: '100%',
    display: 'block',
}