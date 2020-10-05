import React from 'react';
import { Card } from 'react-bootstrap';

const StoryCard = ({story}) => {
    return (
        <Card className="container-fluid" style={cardStyle}>
            <Card.Body>
                <Card.Img src={story.image} style={imageStyle} /> 
                <Card.ImgOverlay>
                    <Card.Text>GENRE</Card.Text>
                </Card.ImgOverlay>

            </Card.Body>
        </Card>
    );
};
export default StoryCard;


const cardStyle = {
    marginBottom: 25,
    marginTop: 25,
    marginLeft: 25,
    paddingLeft: 25,
    paddingRight: 25,
    paddingBottom: 25,
    paddingTop: 25,
    height: 250,
    width: 250,
    display: 'inline-block',
    textAlign: 'center'
}

const imageStyle = {
    display: 'block',
    // marginLeft: 'auto',
    // marginRight: 'auto',
    // width: 200,
    // height: 200,
    // marginBottom: 10,
}