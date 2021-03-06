// Routes actions to backend or frontend (or both) based on their target attribute
export default ws => store => next => action => {
  if(action.target !== 'GUI'){
    ws.send(JSON.stringify(action));
  }
  if(action.target !== 'SERVER'){
    return next(action);
  }
}