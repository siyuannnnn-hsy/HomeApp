import React, { Component } from 'react';
import { NavBar, Icon,Tabs, WhiteSpace, Badge,Grid} from 'antd-mobile';
import img5 from '../img/5.png'
import img6 from '../img/6.png'
import img7 from '../img/7.png'
import img8 from '../img/8.png'


const tabs = [
    { title: <Badge>推荐</Badge> },
    { title: <Badge>冬季</Badge> },
    { title: <Badge>宜家</Badge> },
    { title: <Badge>小清新</Badge> },
    { title: <Badge>小户型</Badge> },
    { title: <Badge>个性色彩</Badge> },
  ];

  const data1 = [img5,img6,img7,img8,img5,img6,img7,img8];

 
  

export default class Ins extends Component {
    render() {
        return (
            <div>
                <div>
                    <NavBar
                            style={{backgroundColor:'#3fcccb',color:'#000'}}
                            rightContent={[
                                <Icon key="0" type="search" style={{ marginRight: '16px' }} />
                            ]}
                    >灵感</NavBar>

                    <Tabs tabs={tabs}
                        initialPage={0}
                        onChange={(tab, index) => { console.log('onChange', index, tab); }}
                        onTabClick={(tab, index) => { console.log('onTabClick', index, tab); }}
                        >
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#fff' }}>


                            <div className="sub-title"></div>
                            <Grid data={data1}
                            columnNum={2}
                            itemStyle={{height:'230px',width:'185px'}}
                            renderItem={dataItem => (
                                <div>
                                <img src={dataItem} style={{ width: '160px', height: '200px' }} alt="" />
                                </div>
                            )}
                            />




                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '150px', backgroundColor: '#fff' }}>
                            <h1>冬季</h1>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '150px', backgroundColor: '#fff' }}>
                            <h1>宜家</h1>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '150px', backgroundColor: '#fff' }}>
                            <h1>小清新</h1>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '150px', backgroundColor: '#fff' }}>
                            <h1>小户型</h1>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '150px', backgroundColor: '#fff' }}>
                            <h1>个性色彩</h1>
                        </div>
                        </Tabs>
                    <WhiteSpace />
    




                </div>
            </div>
        )
    }
}
