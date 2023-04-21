export const addtodo=(data)=>{
    return{
    
        type:"ADDTODO",
        payload: {
            id:new Date().getTime().toString(),
            data:data
        }
    }
}
export const removetodo=(id)=>{
    return {
        type:"REMOVE_TODO",
      id
        
    }
}
export const deletetodo=()=>{
    return{
        type:"DELETEALL_TODO"
    }
}
