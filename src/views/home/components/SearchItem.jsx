import searchLocation from "../../../accents/images/searchLocation.png";

function SearchItem(props) {
    const {searchInfo, searchListClick} = props
    const clickSearchList = () => {
        searchListClick(searchInfo)
    }
    return (
        <div className='search-content-list d-flex align-center pointer'
             onClick={clickSearchList}>
            <img src={searchLocation} alt=""/>
            <div className='text-ellipsis'>{searchInfo.name}<span>{searchInfo.district}</span></div>
        </div>
    )
}

export default SearchItem;
