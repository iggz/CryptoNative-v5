// this component will be a functional component that is meant to
// purely render two pieces of data as an element in a row.

import React from 'react';
import '../../styles/RowItem.css';

const RowItem = (props) => {
    return (
        <div className="flex-Wrapper">
            <p style={ { textAlign: 'right', margin: 0, alignItem: 'center' } }>{ props.data.price } </p>
            <p style={ { textAlign: 'right', margin: 0, alignItem: 'center' } }>{ props.data.percent_change }</p>
        </div>
    )
}

export default RowItem;