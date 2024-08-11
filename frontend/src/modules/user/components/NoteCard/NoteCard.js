import React from 'react';
import './NoteCard.css';

const NoteCard = ({item,data}) => {

    return (<>
   
   
      <div className="NoteCard">
      
      <pre>{data.orgname}     {data.docname}       </pre>
      
      
        <div>{item}</div>

        <pre>                                          {data.date}    </pre>
      </div>
      </>
    )
}

export default NoteCard