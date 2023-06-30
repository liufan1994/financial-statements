/*
 * @Date: 2023-06-17 16:56:28
 * @Author: liufan
 * @Description:
 */

import { defineComponent, ref, defineExpose } from 'vue'
export default defineComponent({
  props: {
    msg: String
  },
  setup(props) {
    const a = ref(1)
    const getFun = () => {
      a.value++
    }

    // defineExpose({ a })
    return () => (
      <div>
        <div>{props.msg}</div>
      </div>
    )
  }
})
