export default {
  namespace: 'products',
  state: [],
  reducers: {
    delete(state : products,payload:{payload:number,type:string}) {
      console.log("TCL: delete -> id", payload)
      console.log("TCL: delete -> state", state)
      return state.filter(item => item.id !== payload.payload);
    },
    add( state: products , py:{payload:{id:number,name:string}}){
      console.log("TCL: add -> py", py)
      console.log("TCL: add -> state", state)
      
      state.push(py.payload) 
      return state ; 
    }
  },
};
