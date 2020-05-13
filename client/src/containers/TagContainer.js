import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import TagItem from '../components/TagItem';
import TagInput from '../components/TagInput';

const TagContainer = ({tags}) => {
    return (
        <Container>
            <h3>Tags</h3>
            <TagInput />
            {tags.map((tag, index) => <Row key={index}><TagItem tag={tag}/></Row>)}
        </Container>
    )
}

export default TagContainer;