import React from 'react'
import {connect} from 'react-redux'
import  CollectionPreview from '../../components/preview-collection/preview-collection.component'
import './collections-overview.styles.scss'
import {createStructuredSelector} from 'reselect'
import {selectCollectionsForPreview} from '../../redux/shop/shop.selectors'


const CollectionsOverview = ({collections}) => (
    <div className = 'collections-preview'>
         {collections.map(({id, ...otherCollectionProps}) => (
                    < CollectionPreview key = {id} {...otherCollectionProps} />
             )) }

    </div>
)

const mapStateToProps = createStructuredSelector ({
    collections: selectCollectionsForPreview
})

export default connect(mapStateToProps)(CollectionsOverview)

