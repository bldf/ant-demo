/*
 * @Author: bldf.yaoxinglin 
 * @Date: 2019-05-17 13:54:46 
 * @Last Modified by: bldf.yaoxinglin
 * @Last Modified time: 2019-05-17 18:09:22
 */
export default {
    namespace: 'products',
    state: [],
    reducers: {
      delete(state:[{id:number}],obj:{id:number}) {
        // tslint:disable-next-line:no-console
        console.log("TCL: delete -> obj", obj)
        return state.filter(item => item.id !== obj.id);
      },
    },
  };
