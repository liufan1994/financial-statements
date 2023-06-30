/*
 * @Date: 2023-06-17 16:56:28
 * @Author: liufan
 * @Description:
 */
import Layout from './views/layout'
import './style/index.scss'
import { defineComponent, ref } from 'vue'
export default defineComponent({
  setup() {
    return () => (
      <div class="w-full h-full">
        <Layout class="w-full h-full"></Layout>
      </div>
    )
  }
})
