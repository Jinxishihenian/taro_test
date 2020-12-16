import {
  View,
  SwiperItem,
  ScrollView,
  Swiper,
  CoverView,
  CoverImage,
  Icon,
  Text,
  Button,
  Progress,
  RichText,
  // MatchMedia,
  // MovableArea,
  // MovableView,
} from "@tarojs/components";
import React, {Component} from "react";

class ViewContainer extends Component {

  state = {
    contents: [],
    contentsLen: 0,
    nodes: [{
      name: 'div', attrs: {
        class: 'div_class',
        style: 'line-height:60px;color:red',
      },
      children: [{
        type: 'text',
        text: 'Hello World',
      },]
    },],
  }
  add = () => {
    this.setState(prev => {
      const cot = prev.contents.slice();
      cot.push({text: 'hello word'});
      return {
        contents: cot,
        contentsLen: cot.length
      }
    })
  }
  remove = () => {
    this.setState(prev => {
      const cot = prev.contents.slice();
      cot.pop();
      return {
        contents: cot,
        contentLen: cot.length,
      }
    });
  }

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
        <CoverView className='play'>CoverView</CoverView>
        <CoverImage className='img' src=''>CoverImage</CoverImage>
        <Icon size='60' type='success'></Icon>
        <View className='container'>
          {/*{*/}
          {/*  this.state.contents.map((item, index) => {*/}
          {/*    <Text key={index}>{item.text}<Text>*/}
          {/*  })}*/}
          {this.state.contents.map((item, index) => (
            <Text key={index}>{item.text}</Text>
          ))}
          <Button className='btn-max-w button_style' type='default' onClick={this.add}>add line</Button>
          <Button className='btn-max-w button_style' type='default' onClick={this.remove}
                  disabled={this.state.contentsLen ? false : true}>remove line</Button>
        </View>
        <View className='components-page'>
          <Progress percent={20} showInfo strokeWidth={2} />
          <Progress percent={20} strokeWidth={2} active />
          <Progress percent={20} strokeWidth={2} active activeColor='blue' />
        </View>
        <RichText nodes={this.state.nodes} />
        {/*<MovableArea style='height:200px;width:200px;background:red'>*/}
        {/*  <MovableView style='height:50px;width:50px;background:blue;'>旅行的意义</MovableView>*/}
        {/*</MovableArea>*/}
        {/*  <MatchMedia min-width='300' max-width='600'>*/}
        {/*    <View>当页面宽度在300~600px之间时展示</View>*/}
        {/*  </MatchMedia>*/}
      </View>

    );
  }
}

export default ViewContainer;
