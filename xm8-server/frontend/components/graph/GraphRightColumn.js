import React from 'react'

import NodeFormContainer from './nodeform/NodeFormContainer';
import LinkFormContainer from './linkform/LinkFormContainer';
import NodeLinkListContainer from './NodeLinkListContainer';

const GraphRightColumn = () => {    
  return (  
    <div>
      <NodeFormContainer/>    
      <LinkFormContainer/>
      <NodeLinkListContainer/>
    </div>    
  )
}

export default GraphRightColumn;