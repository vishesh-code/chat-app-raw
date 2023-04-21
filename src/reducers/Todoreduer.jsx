const initialData={
    list:[]
}
const Todoreducer=(state=initialData,action)=>{
    switch (action.type){
        case "ADDTODO":
            const {id,data}=action.payload;
            if (data !== null && data !== '') {
            return{
                ...state,
                list:[
                    ...state.list,
                    {
                        id:id,
                        data:data
                    }
                ]
            }
        }
            case "REMOVE_TODO":
                const newList=state.list.filter((elem)=>elem.id!==action.id)
                return{
                    ...state,
                    list:newList
                }


            case "DELETEALL_TODO": 
            return {
                ...state,
                list:  []
            }

            default:return state;
    }
} 
export default Todoreducer;