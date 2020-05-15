import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import CategoryInput from '../components/categories/CategoryInput';
import CategoryList from '../components/categories/CategoryList';

const CategoryContainer = () => {

    const [tags, setTags] = useState([]);

    const getTags = async () => {
        try {
            const response = await fetch("http://localhost:5000/api/categories");
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
            <h2 className="m-5">Spending Categories</h2>
            <CategoryInput />
            <CategoryList tags={tags} />
        </Container>
    )
}

export default CategoryContainer;