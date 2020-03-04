import {connect} from 'react-redux'
import {compose} from 'redux'
import CollectionPage from '../collectionPage/collectionPage'
import {selectIsCollectionsFetching} from '../../redux/shop/shop.selector'
import WithSpinner from '../../components/withSpinner/withSpinner'

const mapStateToProps = (state)=>({
    isLoading : !selectIsCollectionsFetching(state),
})

const CollectionPageContainer = compose(
       connect(mapStateToProps),
       WithSpinner
)(CollectionPage)

export default CollectionPageContainer