import React, {Fragment} from 'react';
import Row from 'react-bootstrap/Row';
import CategoryItem from './CategoryItem';

const CategoryList = ({ categories }) => {
    return (
        <Fragment>
           {categories.map((category) => {
               return <Row className="m-5" key={category.id}><CategoryItem category={category} /></Row>
           })}
        </Fragment>
    )
}

export default CategoryList;