import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import TagItem from '../components/TagItem';
import TagInput from '../components/TagInput';
import TagList from '../components/TagList';

const TagContainer = () => {

    const [tags, setTags] = useState([]);

    const getTags = async () => {
        try {
            const response = await fetch("http://localhost:5000/tags");
            const json = await response.json();
            setTags(json);
        } catch (err) {
            console.error(err.message);
        }
    }

    useEffect(() => {
        getTags();
    }, [])

    return (
        <Container>
            <h3>Tags</h3>
            <TagInput />
            <TagList tags={tags} />
        </Container>
    )
}

export default TagContainer;