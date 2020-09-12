import React from 'react';
import { format } from 'date-fns';

function ModifiedDate(props) {
    const { modifiedDate } = props;

    return (
        <div>
            {format(new Date(modifiedDate), 'MMM do yyyy')}
        </div>
    )

}

export default ModifiedDate;