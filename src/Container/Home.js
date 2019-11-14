import React, { Component } from 'react';
import { NavBar, Icon,Grid, Carousel} from 'antd-mobile';
import home from '../img/home.jpg'
import img1 from '../img/1.png'
import img2 from '../img/2.png'
import img3 from '../img/3.png'
import img4 from '../img/4.png'


  
const data = [img1,img2,img3];

export default class Home extends Component {
    state = {
        data: ['1', '2', '3'],
        imgHeight: 176,
      }
      componentDidMount() {
        setInterval(() => {
          this.setState({
            data: [home,home,home],
          });
        }, 100);
      }
    
    render() {
        return (
            <div>
                <div>
                    <NavBar
                        style={{backgroundColor:'#3fcccb',color:'#000'}}
                        rightContent={[
                            <Icon key="0" type="search" style={{ marginRight: '16px' }} />
                        ]}
                    >住吧家居</NavBar>

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
                                    src={home}
                                    alt=""
                                    style={{ width: '100%', verticalAlign: 'top' }}
                                    onLoad={() => {
                                    window.dispatchEvent(new Event('resize'));
                                    this.setState({ imgHeight: 'auto' });
                                    }}
                                />
                                </a>
                            ))}
                    </Carousel>



                    <div className="sub-title"></div>
                    <Grid data={data}
                        columnNum={3}
                        renderItem={dataItem => (
                            <div>
                            <img src={dataItem} style={{ width: '100px', height: '100px'}} alt="" />
                            </div>
                        )}
                        />

                    
                    <div className='remen'>
                            <div className="small"></div>
                            <p style={{fontSize:18,lineHeight:'50px',paddingLeft:'20px'}}>热门推荐</p>
                    </div>
                    <img src={img4} style={{display: 'inline-block', width: '100%'}}/>
                </div>
            </div>
        )
    }
}
