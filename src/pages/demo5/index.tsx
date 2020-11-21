import {View, ScrollView} from '@tarojs/components'

function Comp() {
  // 只有 onClick 对应bindtap.
  // 其余内置事件名.
  function clickHandlder(e) {
    // 阻止冒泡.
    e.stopPropagation();
  }

  function scrollHandler(e) {
    //
  }

  return <View></View>
  // return <ScrollView onClick={clickHandlder} />
}
