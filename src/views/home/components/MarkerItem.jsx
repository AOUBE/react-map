function MarkerItem(item) {
    return (
        <div className='search-content-info' key={item.id}>
            <div>{item.name}</div>
            <div>{item.pname}+{item.cityname}+{item.adname}+{item.address}</div>
        </div>
    )
}

export default MarkerItem;
