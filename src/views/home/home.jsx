import {useEffect, useState} from 'react';
import './home.scss';
import {Map, Marker, Markers} from "react-amap";
import {Input, message} from 'antd';
import axios from 'axios';
import SearchItem from "./components/SearchItem";
import {regeo, inputTips, placeText, placeAround, placeDetail} from '../../api/amap'
import MarkerItem from "./components/MarkerItem";


const {Search} = Input;
const gdMapKey = "66fb965aa12a399cc5cab8f020bf512b"
const plugins = ['ToolBar'];

function Home() {
    const [longitude, SetLongitude] = useState(undefined)//经度
    const [latitude, SetLatitude] = useState(undefined)//纬度
    const [region, setRegion] = useState({})

    const [userPosition, setUserPosition] = useState({})
    const [mapCenterPosition, setMapCenterPosition] = useState({})

    const [searchMarkers, setSearchMarkers] = useState([])


    const [searchList, setSearchList] = useState([])

    useEffect(() => {
        navigator.geolocation.getCurrentPosition(showPosition, showError);
    }, [])


    useEffect(() => {
        if (longitude || latitude) {
            let a = {
                longitude: longitude,
                latitude: latitude
            }
            setMapCenterPosition(a)
        }
    }, [longitude, latitude])

    const showPosition = (position) => {
        let a = {
            longitude: position.coords.longitude,
            latitude: position.coords.latitude
        }
        SetLongitude(position.coords.longitude)
        SetLatitude(position.coords.latitude)
        setUserPosition(a)

        let params = {
            key: gdMapKey,
            location: +position.coords.longitude + ',' + position.coords.latitude
        }
        regeo(params).then(res => {
            if (res.data.status == 1) {
                let a = {
                    country: res.data.regeocode.addressComponent.country,
                    province: res.data.regeocode.addressComponent.province,
                    city: res.data.regeocode.addressComponent.city,
                    cityCode: res.data.regeocode.addressComponent.citycode,//城市编码
                    district: res.data.regeocode.addressComponent.district,
                    adcode: res.data.regeocode.addressComponent.adcode,//行政区编码
                    towncode: res.data.regeocode.addressComponent.towncode,//乡镇街道编码
                    township: res.data.regeocode.addressComponent.township,
                }
                message.success({
                    content: a.province + a.city + a.district + a.township
                })
                setRegion(a)
            }
        })
    }

    const showError = (error) => {
        switch (error.code) {
            case error.PERMISSION_DENIED:
                console.log("用户拒绝请求地理定位");
                break;
            case error.POSITION_UNAVAILABLE:
                console.log("位置信息不可用");
                break;
            case error.TIMEOUT:
                console.log("请求获取用户位置超时");
                break;
            case error.UNKNOWN_ERROR:
                console.log("发生未知错误");
                break;
        }
    }
    const inputChange = (value) => {
        if (value.nativeEvent.data) {
            let b = [
                {
                    "id": "B0FFF5WOKS",
                    "name": "三星(中国)半导体",
                    "district": "陕西省西安市长安区",
                    "adcode": "610116",
                    "location": "108.797393,34.102199",
                    "address": "洨河北路1999号",
                    "typecode": "170300",
                    "city": []
                },
                {
                    "id": "B0G0AHTRU4",
                    "name": "三星授权体验店(高新益田假日里店)",
                    "district": "陕西省西安市雁塔区",
                    "adcode": "610113",
                    "location": "108.881953,34.194544",
                    "address": "锦业路7号高新益田假日里L1-05",
                    "typecode": "060305",
                    "city": []
                },
                {
                    "id": "B0HGSC6OCM",
                    "name": "三星授权体验店(万达one广场店)",
                    "district": "陕西省西安市雁塔区",
                    "adcode": "610113",
                    "location": "108.891639,34.208668",
                    "address": "唐延路49号万达购物中心三层3058A",
                    "typecode": "060305",
                    "city": []
                },
                {
                    "id": "B0HUJ51BGV",
                    "name": "三星专卖店(红星美凯龙至尊店)",
                    "district": "陕西省西安市雁塔区",
                    "adcode": "610113",
                    "location": "108.887126,34.181802",
                    "address": "西沣北路55号红星美凯龙全球家居至尊MALL",
                    "typecode": "060305",
                    "city": []
                },
                {
                    "id": "B0FFHQR2S8",
                    "name": "三星数据系统(中国)有限公司西安分公司",
                    "district": "陕西省西安市雁塔区",
                    "adcode": "610113",
                    "location": "108.833094,34.204803",
                    "address": "天谷八路156号软件新城2期B1栋",
                    "typecode": "060000",
                    "city": []
                },
                {
                    "id": "B0JDLULN0S",
                    "name": "三星授权体验店(大茂城店)",
                    "district": "陕西省西安市雁塔区",
                    "adcode": "610113",
                    "location": "108.871384,34.238625",
                    "address": "丈八北路466号大茂城购物中心1层",
                    "typecode": "060305",
                    "city": []
                },
                {
                    "id": "B0IRXU1J99",
                    "name": "三星授权维修服务中心",
                    "district": "陕西省西安市长安区",
                    "adcode": "610116",
                    "location": "108.912435,34.157733",
                    "address": "府东二路云曼公寓酒店大楼10层1017室",
                    "typecode": "071200",
                    "city": []
                },
                {
                    "id": "B0IG4U3BYR",
                    "name": "三星品牌体验店(苏宁易购长安步行街店)",
                    "district": "陕西省西安市长安区",
                    "adcode": "610116",
                    "location": "108.930268,34.159666",
                    "address": "太阳新城36号一层",
                    "typecode": "060305",
                    "city": []
                },
                {
                    "id": "B0HRUSF2CB",
                    "name": "三星授权体验店(万象天地店)",
                    "district": "陕西省西安市雁塔区",
                    "adcode": "610113",
                    "location": "108.952311,34.199438",
                    "address": "雁展路1111号万象天地T9楼一层L136",
                    "typecode": "060305",
                    "city": []
                },
                {
                    "id": "B0IGN542B4",
                    "name": "三星授权体验店(小寨赛格店)",
                    "district": "陕西省西安市雁塔区",
                    "adcode": "610113",
                    "location": "108.947455,34.224092",
                    "address": "长安中路123号赛格国际购物中心2F西北角",
                    "typecode": "060305",
                    "city": []
                }
            ]
            setSearchList(b)
            // let params = {
            //     key: gdMapKey,
            //     keywords: value.nativeEvent.data,
            //     location: longitude + ',' + latitude
            // }
            // inputTips(params).then(res => {
            //     if (res.data.status == 1) {
            //         setSearchList(res.data.tips)
            //     }
            // })
        }
    }

    const onSearch = (value) => {
        if (value) {
            setSearchList([])
            let params = {
                key: gdMapKey,
                keywords: value,
                region: region.adcode,
                page_size: 25,
                city_limit: true,
                show_fields: "children,business,indoor,navi,photos"
            }
            placeText(params).then(res => {
                if (res.data.status == 1) {
                    const b = res.data.pois.map(v => {
                        let a = v.location.split(',')
                        v.position = {
                            latitude: '',
                            longitude: ''
                        }
                        v.position.latitude = a[1]
                        v.position.longitude = a[0]
                        return v
                    })
                    setSearchMarkers(b)
                }
            })
        }
    }

    const searchListClick = (val) => {
        let params = {
            key: gdMapKey,
            id: val.id,
            show_fields: "children,business,indoor,navi,photos"
        }
        placeDetail(params).then(res => {
            if (res.data.status == 1) {
                const b = res.data.pois.map(v => {
                    let a = v.location.split(',')
                    v.position = {
                        latitude: '',
                        longitude: ''
                    }
                    v.position.latitude = a[1]
                    v.position.longitude = a[0]
                    return v
                })
                setSearchMarkers(b)
            }
        }).finally(() => {
            setSearchList([])
        })
    }

    return (
        <div id="app" className="">
            <Map id='map' amapkey={gdMapKey} zoom={15} center={mapCenterPosition} plugins={plugins}>
                <Marker position={userPosition}/>
                <Markers markers={searchMarkers} useCluster={true}/>
            </Map>
            <div className="search">
                <Search className='search-input'
                        placeholder="请输入您要查询的地点" allowClear enterButton="搜索" onChange={inputChange} onSearch={onSearch}
                />
                <div className='search-content'>
                    {
                        searchList.length > 0 ? searchList.map(v => {
                            return <SearchItem key={v.id} searchInfo={v} searchListClick={searchListClick}/>
                        }) : (searchMarkers.length > 1 ? searchMarkers.map((v, j) => {
                            return <MarkerItem key={v.id} markItem={v} index={j + 1}/>
                        }) : '')

                    }
                </div>
            </div>
        </div>
    );
}

export default Home;
