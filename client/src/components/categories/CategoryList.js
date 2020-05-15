import React, {Fragment} from 'react';
import Row from 'react-bootstrap/Row';
import CategoryItem from './CategoryItem';

const CategoryList = ({ tags }) => {
    return (
        <Fragment>
           {tags.map((tag) => {
               return <Row className="m-5" key={tag.id}><CategoryItem tag={tag} /></Row>
           })}
        </Fragment>
    )
}

export default CategoryList;