import _ from 'lodash';

const controllers = [
  {id: 0, name: "Bank select", hiRes: true},
  {id: 1, name: "Mod wheel", hiRes: true},
  {id: 2, name: "Breath controller", hiRes: true},
  {id: 3, name: "", hiRes: true},
  {id: 4, name: "Foot controller", hiRes: true},
  {id: 5, name: "Portamento time", hiRes: true},
  {id: 6, name: "Data entry", hiRes: true},
  {id: 7, name: "Channel volume", hiRes: true},
  {id: 8, name: "Balance", hiRes: true},
  {id: 9, name: "", hiRes: true},
  {id: 10, name: "Pan", hiRes: true},
  {id: 11, name: "Expression controller", hiRes: true},
  {id: 12, name: "FX control 1", hiRes: true},
  {id: 13, name: "FX control 2", hiRes: true},
  {id: 14, name: "", hiRes: true},
  {id: 15, name: "", hiRes: true},
  {id: 16, name: "General purpose 1", hiRes: true},
  {id: 17, name: "General purpose 2", hiRes: true},
  {id: 18, name: "General purpose 3", hiRes: true},
  {id: 19, name: "General purpose 4", hiRes: true},
  {id: 20, name: "", hiRes: true},
  {id: 21, name: "", hiRes: true},
  {id: 22, name: "", hiRes: true},
  {id: 23, name: "", hiRes: true},
  {id: 24, name: "", hiRes: true},
  {id: 25, name: "", hiRes: true},
  {id: 26, name: "", hiRes: true},
  {id: 27, name: "", hiRes: true},
  {id: 28, name: "", hiRes: true},
  {id: 29, name: "", hiRes: true},
  {id: 30, name: "", hiRes: true},
  {id: 31, name: "", hiRes: true},

  {id: 64, name: "Damper pedal", hiRes: false},
  {id: 65, name: "Portamento", hiRes: false},
  {id: 66, name: "Sostenuto", hiRes: false},
  {id: 67, name: "Soft pedal", hiRes: false},
  {id: 68, name: "Legato footswitch", hiRes: false},
  {id: 69, name: "Hold 2", hiRes: false},

  {id: 70, name: "Sound controller 1 - sound variation", hiRes: false},
  {id: 71, name: "Sound controller 2 - timbre/harmonic intens.", hiRes: false},
  {id: 72, name: "Sound controller 3 - release time", hiRes: false},
  {id: 73, name: "Sound controller 4 - attack time", hiRes: false},
  {id: 74, name: "Sound controller 5 - brightness", hiRes: false},
  {id: 75, name: "Sound controller 6 - decay time", hiRes: false},
  {id: 76, name: "Sound controller 7 - vibrato rate", hiRes: false},
  {id: 77, name: "Sound controller 8 - vibrato depth", hiRes: false},  
  {id: 78, name: "Sound controller 9 - vibrato delay", hiRes: false},    
  {id: 79, name: "Sound controller 10", hiRes: false},      

  {id: 80, name: "General purpose 5", hiRes: false},
  {id: 81, name: "General purpose 6", hiRes: false},
  {id: 82, name: "General purpose 7", hiRes: false},
  {id: 83, name: "General purpose 8", hiRes: false},
  {id: 84, name: "Portamento control", hiRes: false},
  {id: 85, name: "", hiRes: false}, 
  {id: 86, name: "", hiRes: false}, 
  {id: 87, name: "", hiRes: false}, 
  {id: 88, name: "High resolution velocity prefix", hiRes: false}, 
  {id: 89, name: "", hiRes: false}, 
  {id: 90, name: "", hiRes: false}, 

  {id: 91, name: "FX 1 depth", hiRes: false},
  {id: 92, name: "FX 2 depth", hiRes: false},
  {id: 93, name: "FX 3 depth", hiRes: false},
  {id: 94, name: "FX 4 depth", hiRes: false},
  {id: 95, name: "FX 5 depth", hiRes: false},

  {id: 96, name: "Data increment", hiRes: false},
  {id: 97, name: "Data increment", hiRes: false},

  {id: 98, name: "Non-registered parameter number LSB", hiRes: false},
  {id: 99, name: "Non-registered parameter number MSB", hiRes: false}, 

  {id: 100, name: "Registered parameter number LSB", hiRes: false},
  {id: 101, name: "Registered parameter number MSB", hiRes: false}, 
  {id: 102, name: "", hiRes: false}, 
  {id: 103, name: "", hiRes: false}, 
  {id: 104, name: "", hiRes: false}, 
  {id: 105, name: "", hiRes: false}, 
  {id: 106, name: "", hiRes: false}, 
  {id: 107, name: "", hiRes: false}, 
  {id: 108, name: "", hiRes: false}, 
  {id: 109, name: "", hiRes: false}, 
  {id: 110, name: "", hiRes: false}, 
  {id: 111, name: "", hiRes: false}, 
  {id: 112, name: "", hiRes: false}, 
  {id: 113, name: "", hiRes: false}, 
  {id: 114, name: "", hiRes: false}, 
  {id: 115, name: "", hiRes: false}, 
  {id: 116, name: "", hiRes: false}, 
  {id: 117, name: "", hiRes: false}, 
  {id: 118, name: "", hiRes: false}, 
  {id: 119, name: "", hiRes: false}
];

let controllersById = {};
_.each(controllers, controller => {
  controllersById[controller.id] = controller;
});

export {controllersById};
export default controllers;

