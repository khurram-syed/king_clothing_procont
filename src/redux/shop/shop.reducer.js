import  shopType  from './shopType'
const initialState = {
       collections : null,
       isFetching:false,
       errorMsg : undefined
     //  collections : SHOP_DATA
}

export const shopReducer = (state=initialState,action) =>{
       switch(action.type){
           case  shopType.FETCH_COLLECTION_START:
                    return {...state, 
                             isFetching:true}                              
            case  shopType.FETCH_COLLECTION_SUCCESS:
                    return {...state, 
                            isFetching:false,
                            collections:action.payload
                         }                              
            case  shopType.FETCH_COLLECTION_FAILURE:
                              return {...state, 
                                      isFetching:false,
                                      errorMsg:action.payload
                                   }                              
                   
                             default : 
                 return state
       }
}