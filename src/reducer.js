

export default (state,action)=>{
    switch (action.type) {
        case 'LOADING':
            return{
                ...state,
                loading:true
            }
         
       case 'ERROR':
           return {
               ...state,
               error:true,
               loading:false
           } 
           
        case 'LOAD_DATA':
            return{

                loading:false,
                error:false,
                movies:action.payload
            }   

    
        default:
            return state;
    }
}