export default {
  namespace: 'products',
  state: [],
  reducers: {
    delete(state : products,payload:{payload:number,type:string}) {
			console.log("TCL: delete -> id", payload)
      return state.filter(item => item.id !== payload.payload);
    },
  },
};
