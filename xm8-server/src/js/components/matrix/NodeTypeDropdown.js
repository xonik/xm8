import React from 'react'
import nodeTypes from '../../../../shared/matrix/NodeTypes.js';

const NodeTypeDropdown = ({id, nodeTypeId, onNodeTypeChange}) => (
  <select id={id} value={nodeTypeId} onChange={(e) => (onNodeTypeChange(e.target.value))}>
    {nodeTypes.list.map(function(nodeType){
      return <option key={nodeType.id} value={nodeType.id}>{nodeType.name}</option>
    })}
  </select>
) 

export default NodeTypeDropdown;