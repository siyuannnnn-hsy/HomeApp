import React, { Component } from 'react';
import { NavBar, SearchBar,Carousel,Grid} from 'antd-mobile';
import img9 from '../img/9.png'
import zhuozi from '../img/zhuozi.png'
import img10 from '../img/10.png'
import img11 from '../img/11.png'


    // text : ['床','桌','椅','几','柜','书架','沙发','家居饰品','户外家具','全部分类']
    const data1 = Array.from(new Array(10)).map(() => ({
        icon: zhuozi,
        text:'桌'
      }));
      
      
  
  
      const data = [img10,img11,img10,img11,img10,img11,img10,img11];

  

export default class Shopping extends Component {
    state = {
        data: ['1', '2', '3','4'],
        imgHeight: 176,
      }
      componentDidMount() {
        setInterval(() => {
          this.setState({
            data: [img9,img9,img9,img9],
          });
        }, 100);
      }
    render() {
        return (
            <div>
                <div>
                    <NavBar
                            style={{backgroundColor:'#3fcccb',color:'#000'}}
                            rightContent={<i style={{fontSize:22}} className='iconfont icon-shopcart'></i>}
                            
                    >商城</NavBar>

                    <SearchBar placeholder='输入关键字搜索'/>
                       
                    <Carousel
                        autoplay={true}
                        infinite
                        beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
                        afterChange={index => console.log('slide to', index)}
                        >
                        {this.state.data.map(val => (
                            <a
                            key={val}
                            href=""
                            style={{ display: 'inline-block', width: '100%', height: this.state.imgHeight }}
                            >
                            <img
                                src={img9}
                                alt=""
                                style={{ width: '100%', verticalAlign: 'top' }}
                                onLoad={() => {
                                // fire window resize event to change height
                                window.dispatchEvent(new Event('resize'));
                                this.setState({ imgHeight: 'auto' });
                                }}
                            />
                            </a>
                        ))}
                    </Carousel>


                    {/* <div className="sub-title"></div> */}
                    <Grid data={data1}
                    columnNum={5} 
                    hasLine={false}
                    renderItem={dataItem => (
                        <div style={{}}>
                        <img src={dataItem.icon} style={{ width: '40px', height: '40px' }} alt="" />
                        <div style={{ color: '#888', fontSize: '14px'}}>
                        <span>{dataItem.text}</span>
                        </div>
                        </div>
                    )}
                    />


                    <div className='gray'>

                        <div className="sub-title"></div>
                                <Grid data={data}
                                columnNum={2}
                                itemStyle={{height:'200px',width:'185px'}}
                                renderItem={dataItem => (
                                    <div>
                                    <img src={dataItem} style={{ width: '150px', height: '150px' }} alt="" />
                                    <p>这是一个好看的杯子</p>
                                    </div>
                                )}
                                />


                    </div>

                </div>
            </div>
        )
    }
}
