import React from 'react'

import NodeFormContainer from './nodeform/NodeFormContainer';
import LinkFormContainer from './LinkFormContainer';
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