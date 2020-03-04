import React from 'react'
import './shopPage.scss'
import {Route} from 'react-router-dom'
import {connect} from 'react-redux'
import {fetchCollectionAsync} from '../../redux/shop/shop.actions'
import CollectionPageContainer from '../collectionPage/collectionPage.container'
import CollectionOverviewContainer from '../../components/collectionOverview/collectionOverviewContainer'
class ShopPage extends React.Component{
      
       componentDidMount(){
          const {fetchCollectionAsync} = this.props;
          fetchCollectionAsync()
       }

       render(){  
           const {match} = this.props;
           console.log('In ShopPage-render-> props :',this.props)
         return(
            <div className="shop-page">                      
                <Route exact path={`${match.path}`}  component = {CollectionOverviewContainer} />
                <Route  path={`${match.path}/:collectionId`} component ={CollectionPageContainer} />
           </div> 
              )  
         }            
}

const mapDispatchToProps = (dispatch)=>({
     fetchCollectionAsync : () => dispatch(fetchCollectionAsync())
})
export default connect(null,mapDispatchToProps) (ShopPage);