/*
 * @Date: 2023-06-20 16:56:12
 * @Author: liufan
 * @Description: Title 标题
 */
import { defineComponent, ref } from 'vue'
export default defineComponent({
  props: { name: String },
  setup(props) {
    return () => (
      <div class="flex align-items-center">
        <div class="w-6 h-6 bg-color-brand rounded-50 mr-10"></div>
        <div class="text-2xs font-bold">{props.name}</div>
      </div>
    )
  }
})
