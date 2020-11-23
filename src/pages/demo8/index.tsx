import {Map} from "@tarojs/components";
import React, {Component} from "react";

class ComponentsPage extends Component {
//  function onClickMap(){
//     console.log(parps);
// }
  onTap() {
  }

  getLatitude(): number {
    let latitude: number = 31.2494;
    // console.log(value.toString);
    // return Number;
    return latitude;
  }

  getLongitude(): number {
    let longitude: number = 121.397;
    return longitude;
  }

  /// 基础组件.
  render() {
    // @ts-ignore
    return (
      <Map onClick={this.onTap} latitude={this.getLatitude()} longitude={this.getLongitude()}></Map>
      // <View>测试</View>
    );
  }
}

export default ComponentsPage;
