import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import TagItem from './TagItem';

const TagContainer = ({tags}) => {
    return (
        <Container>
            <h2>Tags</h2>
            {tags.map((tag, index) => <Row key={index}><TagItem tag={tag}/></Row>)}
        </Container>
    )
}

export default TagContainer;