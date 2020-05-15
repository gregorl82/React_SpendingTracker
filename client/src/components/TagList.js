import React, {Fragment} from 'react';
import Row from 'react-bootstrap/Row';
import TagItem from './TagItem';

const TagList = ({ tags }) => {
    return (
        <Fragment>
           {tags.map((tag) => {
               return <Row className="m-5" key={tag.id}><TagItem tag={tag} /></Row>
           })}
        </Fragment>
    )
}

export default TagList;