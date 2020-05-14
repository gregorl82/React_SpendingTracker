import React, {Fragment} from 'react';
import TagItem from './TagItem';

const TagList = ({ tags }) => {
    return (
        <Fragment>
           {tags.map((tag) => {
               return <TagItem key={tag.id} tag={tag} />
           })}
        </Fragment>
    )
}

export default TagList;