import {connect} from 'react-redux'
import {compose} from 'redux'
import CollectionOverview from '../../components/collectionOverview/collectionOverview'
import {selectIsCollectionsFetching,selectShopDataAsCollectionPreview} from '../../redux/shop/shop.selector'
import WithSpinner from '../../components/withSpinner/withSpinner'

const mapStateToProps = (state)=>({
    isLoading : !selectIsCollectionsFetching(state),
    collections : selectShopDataAsCollectionPreview(state)
})

const CollectionOverviewContainer = compose(
       connect(mapStateToProps),
       WithSpinner
)(CollectionOverview)

export default CollectionOverviewContainer