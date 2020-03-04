import shopType from './shopType'
import {firestore,convertCollectionsSnapShotToMap} from '../../firebase/firebase.utils'

export const fetchCollectionStart = ()=>({
              type : shopType.FETCH_COLLECTION_START
})

export const fetchCollectionSuccess = (collections)=>({
              type : shopType.FETCH_COLLECTION_SUCCESS,
              payload: collections
})

export const fetchCollectionFailure = (errorMsg)=>({
               type: shopType.FETCH_COLLECTION_FAILURE,
               payload: errorMsg
})

export const fetchCollectionAsync = ()=>{
    return dispatch=>{
        dispatch(fetchCollectionStart());
        const collectionRef = firestore.collection('collections')
        collectionRef.get().then(snapShot=>{
             console.log('ShopPage - Snapshot : ',snapShot)
             console.log(`ShopPage-Converted Data`,convertCollectionsSnapShotToMap(snapShot))
             const collectionMap = convertCollectionsSnapShotToMap(snapShot)
             dispatch(fetchCollectionSuccess(collectionMap))
        }).catch(error=>{
            dispatch(fetchCollectionFailure(error.message))
        })
    }
}