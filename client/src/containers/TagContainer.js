import React from 'react';

const TagContainer = ({tags}) => {
    return (
        <div>
            <h2>Tags</h2>
            {tags.map(tag => <p>{tag}</p>)}
        </div>
    )
}

export default TagContainer;