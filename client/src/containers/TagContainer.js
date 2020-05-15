import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
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
            <h2 className="m-5">Tags</h2>
            <TagInput />
            <TagList tags={tags} />
        </Container>
    )
}

export default TagContainer;