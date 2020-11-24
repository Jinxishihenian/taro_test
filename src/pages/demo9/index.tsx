import {View, SwiperItem, ScrollView, Swiper,MovableArea, MovableView} from "@tarojs/components";
import React, {Component} from "react";

class ViewContainer extends Component {
  // constructor() {
  //   super(...arguments)
  // }
  onScrollToUpper() {
  }

  onScroll(e) {
    console.log(e.detail);
  }

  render() {
    const scrollStyle = {
      height: '200px'
    };
    const scrollTop = 0;
    const Threshold = 20;
    const vStyleA = {
      height: '150px',
      'background-color': 'rgb(26,173,25)',
    }
    const vStyleB = {
      height: '150px',
      'background-color': 'rgb(39,130,215)',
    }
    const vStyleC = {
      height: '150px',
      'background-color': 'rgb(241,241,24)',
      color: '#333'
    }

    return (
      <View>
        <ScrollView
          className='scrollView'
          scrollY
          scrollWithAnimation
          scrollTop={scrollTop}
          style={scrollStyle}
          lowerThreshold={Threshold}
          upperThreshold={Threshold}
          onScrollToUpper={this.onScrollToUpper.bind(this)}
          onScroll={this.onScroll}
        >
          <View style={vStyleA}>scrollView1</View>
          <View style={vStyleB}>scrollView2</View>
          <View style={vStyleC}>scrollView3</View>
        </ScrollView>
        <Swiper
          className='test-h'
          indicatorColor='#333'
          indicatorActiveColor='#999'
          vertical
          circular
          indicatorDots
          autoplay
        >
          <SwiperItem>
            <View className='demo-text-1'>SwiperItem1</View>
          </SwiperItem>
          <SwiperItem>
            <View className='demo-text-2'>SwiperItem2</View>
          </SwiperItem>
          <SwiperItem>
            <View className='demo-text-3'>SwiperItem3</View>
          </SwiperItem>
        </Swiper>
        <MovableArea style='height:200px;width:200px;background:red'>
          <MovableView style='height:50px;width:50px;background:blue;'>旅行的意义</MovableView>
        </MovableArea>
      </View>

    );
  }
}

export default ViewContainer;
