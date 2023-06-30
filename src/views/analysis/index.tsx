/*
 * @Date: 2023-06-17 19:40:15
 * @Author: liufan
 * @Description: 公司分析 analysis
 */
import AnalysisOne from '@/components/AnalysisOne'
import AnalysisTwo from '@/components/AnalysisTwo'
import { defineComponent, ref, reactive, onMounted } from 'vue'

export default defineComponent({
  emits: ['resultFun'],
  setup() {
    // tab 选中值
    const activeKey = ref(1)
    // tab 触发
    const tabChange = (val: any) => {
      activeKey.value = val
    }
    // 点击 分析结果
    const resultFun = (val: any) => {
      activeKey.value = val
    }
    const analysisOne = ref()
    onMounted(() => {
      //analysisOne 我是子组件暴露的属性
      // console.log(
      //   '%c [ resultFun ]-21-「index.tsx」',
      //   'font-size:13px; background:#35ea01; color:#79ff45;',
      //   analysisOne.value
      // )
    })

    return () => (
      <div>
        <a-tabs activeKey={activeKey.value} type="card" class="h-full" onChange={tabChange}>
          <a-tab-pane key={1} tab="输入数据">
            <AnalysisOne ref={analysisOne} onResultFun={resultFun}></AnalysisOne>
          </a-tab-pane>
          <a-tab-pane key={2} tab="分析结果" disabled={activeKey.value == 1}>
            <AnalysisTwo></AnalysisTwo>
          </a-tab-pane>
        </a-tabs>
      </div>
    )
  }
})
