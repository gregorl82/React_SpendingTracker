import React, {Fragment} from 'react';
import Row from 'react-bootstrap/Row';
import TagItem from './TagItem';

const TagList = ({ tags }) => {
    return (
        <Fragment>
           {tags.map((tag) => {
               return <Row className="mt-5"><TagItem key={tag.id} tag={tag} /></Row>
           })}
        </Fragment>
    )
}

export default TagList;