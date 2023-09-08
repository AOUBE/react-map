import {Rate} from 'antd';

function MarkerItem(props) {
    const {markItem, index} = props

    return (
        <div className='search-content-info d-flex justify-between' key={markItem.id}>
            <div className="">
                <div className="">{index}.{markItem.name}</div>
                {markItem.business.rating ? <Rate defaultValue={markItem.business.rating}/> : null}
                <div>{markItem.address}</div>
            </div>
            <div className='search-content-info-img'>
                {markItem.photos ? <img src={markItem.photos[0].url} alt=""/> : <img src="" alt=""/>}
            </div>
        </div>
    )
}

export default MarkerItem;
