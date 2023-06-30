/* eslint-disable prefer-const */
/*
 * @Date: 2023-06-25 15:56:43
 * @Author: liufan
 * @Description: 公司分析-第一步 AnalysisOne
 */
import { message } from 'ant-design-vue'
import dayjs from 'dayjs'
import Title from '@/components/Title'
import { defineComponent, ref, reactive, defineExpose } from 'vue'
export default defineComponent({
  setup(props, { emit }) {
    // 输入数据
    const dataType = reactive<any>([
      {
        name: '合并资产负债表',
        formState: [
          { label: '总资产', msg: '总资产', num: 0 },
          { label: '总负债', msg: '总负债', num: 0 },
          { label: '货币资金', msg: '货币资金', num: 0 },
          { label: '交易性金融资产', msg: '交易性金融资产', num: 0 },
          { label: '短期借款', msg: '短期借款', num: 0 },
          { label: '一年内到期的非流动负债', msg: '一年内到期的非流动负债', num: 0 },
          { label: '长期借款', msg: '长期借款', num: 0 },
          { label: '应付债券', msg: '应付债券', num: 0 },
          { label: '长期应付款', msg: '长期应付款', num: 0 },
          { label: '应付票据', msg: '应付票据', num: 0 },
          { label: '应付账款', msg: '应付账款', num: 0 },
          { label: '预收款项', msg: '预收款项', num: 0 },
          { label: '合同负债', msg: '合同负债', num: 0 },
          { label: '应收票据', msg: '应收票据', num: 0 },
          { label: '应收帐款', msg: '应收帐款', num: 0 },
          { label: '应收款项融资', msg: '应收款项融资', num: 0 },
          { label: '预付款项', msg: '预付款项', num: 0 },
          { label: '合同资产', msg: '合同资产', num: 0 },
          { label: '固定资产', msg: '固定资产', num: 0 },
          { label: '在建工程', msg: '在建工程', num: 0 },
          { label: '无形资产', msg: '无形资产', num: 0 },
          {
            label: '以公允价值...金融资产',
            msg: '以公允价值计量且其变动计入当期损益的金融资产',
            num: 0
          },
          { label: '债权投资', msg: '债权投资', num: 0 },
          { label: '可供出售金融资产', msg: '可供出售金融资产', num: 0 },
          { label: '其他权益工具投资', msg: '其他权益工具投资', num: 0 },
          { label: '其他债权投资', msg: '其他债权投资', num: 0 },
          { label: '持有至到期投资', msg: '持有至到期投资', num: 0 },
          { label: '其他非流动金融资产', msg: '其他非流动金融资产', num: 0 },
          { label: '长期股权投资', msg: '长期股权投资', num: 0 },
          { label: '投资性房地产', msg: '投资性房地产', num: 0 },
          { label: '存货', msg: '存货', num: 0 },
          { label: '商誉', msg: '商誉', num: 0 }
        ]
      },
      {
        name: '其他',
        formState: [
          { label: '营业收入', msg: '营业收入', num: 0 },
          { label: '营业成本', msg: '营业成本', num: 0 },
          { label: '营业税金及附加', msg: '营业税金及附加', num: 0 },
          { label: '销售费用', msg: '销售费用', num: 0 },
          { label: '管理费用', msg: '管理费用', num: 0 },
          { label: '研发费用', msg: '研发费用', num: 0 },
          { label: '财务费用', msg: '财务费用', num: 0 },
          { label: '主营利润', msg: '主营利润', num: 0 },
          { label: '营业利润', msg: '营业利润', num: 0 },
          {
            label: '经营活动产生的现金流量净额',
            msg: '经营活动产生的现金流量净额',
            num: 0
          },
          { label: '净利润', msg: '净利润', num: 0 },
          {
            label: '归属于母公司所有者的净利润',
            msg: '归属于母公司所有者的净利润',
            num: 0
          },
          {
            label: '归属于母公司所有者权益合计',
            msg: '归属于母公司所有者权益合计',
            num: 0
          },
          { label: '长期资产', msg: '长期资产', num: 0 },
          { label: '现金分红金额', msg: '现金分红金额', num: 0 }
        ]
      }
    ])
    const dataTypeJ = JSON.stringify(dataType)
    // 公司信息 表单
    let formState = reactive({
      username: '',
      code: ''
    })
    // 提交表单且数据验证成功后回调事件
    const onFinish = (values: any) => {
      console.log(
        '%c [ values ]-97-「analysisOne.tsx」',
        'font-size:13px; background:#fb7840; color:#ffbc84;',
        values
      )
    }

    // 选中的年份
    const yearStateGet = localStorage.getItem('yearState')
    let yearState =
      typeof yearStateGet === 'string'
        ? ref(JSON.parse(yearStateGet || ''))
        : ref(Number(dayjs().format('YYYY')) - 1)
    // 年份
    const dayGet = localStorage.getItem('day')
    let day =
      typeof dayGet === 'string'
        ? JSON.parse(dayGet)
        : reactive([{ year: yearState.value, checked: true }])

    // 填写的数据
    const stateGet = localStorage.getItem('state')

    let state =
      typeof stateGet === 'string'
        ? JSON.parse(stateGet)
        : reactive<any>({
            2022: typeof dataTypeJ === 'string' && JSON.parse(dataTypeJ)
          })
    // 点击添加年份
    const addYearFun = () => {
      const yearNum = day[day.length - 1].year - 1
      day.push({ year: yearNum, checked: false })
      // 选中最新添加的
      day.forEach((val: any, index: any) => {
        if (day.length - 1 == index) {
          val.checked = true
          yearState.value = val.year
        } else {
          val.checked = false
        }
      })
      state[yearNum] = typeof dataTypeJ === 'string' && JSON.parse(dataTypeJ)
    }
    // 点击移除年份
    const delFun = (ind: any) => {
      yearState.value = day[ind - 1].year
      day.splice(ind, 1)
    }
    // 点击选择年份
    const radioYear = (ind: any) => {
      day.forEach((val: any, index: any) => {
        if (ind == index) {
          val.checked = true
          yearState.value = val.year
        } else {
          val.checked = false
        }
      })
    }

    // 清空数据
    const emptyFun = () => {
      state[yearState.value].forEach((val: any) => {
        val.formState.forEach((value: any) => {
          value.num = 0
        })
      })
    }

    // 保存公司数据
    const saveStateFun = () => {
      localStorage.setItem('day', JSON.stringify(day))
      localStorage.setItem('yearState', JSON.stringify(yearState))
      localStorage.setItem('state', JSON.stringify(state))
      message.info('保存成功')
    }

    // 分析结果
    const resultFun = () => {
      saveStateFun()
      emit('resultFun', 2)
    }
    defineExpose({ yearState: yearState.value })
    return () => (
      <div>
        {/* 公司信息 */}
        <a-form model={formState} name="basic" autocomplete="off" onFinish={onFinish}>
          <a-row gutter={24}>
            <a-col span={12}>
              <a-form-item
                label="公司名称"
                name="username"
                rules={[{ required: true, message: '请输入公司名称', trigger: 'blur' }]}
              >
                <a-input placeholder="请输入公司名称" v-model:value={formState.username} />
              </a-form-item>
            </a-col>
            <a-col span={12}>
              <a-form-item
                label="股票代码"
                name="code"
                rules={[{ required: true, message: '请输入股票代码', trigger: 'blur' }]}
              >
                <a-input placeholder="请输入股票代码" v-model:value={formState.code} />
              </a-form-item>
            </a-col>
          </a-row>
        </a-form>
        {/* 年份 */}
        <div>
          <a-row gutter={24}>
            {day?.map((item: any, ind: any) => {
              return (
                <a-col
                  span={4}
                  style="position:relative;display:flex;align-items:center;"
                  class="mb-20"
                >
                  <a-radio
                    checked={item.checked}
                    onClick={() => {
                      radioYear(ind)
                    }}
                  ></a-radio>
                  <a-input
                    placeholder="请输入年份"
                    defaultValue={item.year}
                    v-model:value={item.year}
                  />
                  {/* 移除 */}
                  {ind === day.length - 1 && ind !== 0 && (
                    <minus-circle-outlined
                      style="position:absolute;top:8px;right:20px"
                      onClick={() => delFun(ind)}
                    />
                  )}
                </a-col>
              )
            })}
            <a-col span={4}>
              <a-button onClick={addYearFun}>+添加年份</a-button>
            </a-col>
          </a-row>
        </div>
        {/* 数据内容 */}
        <div style="height:calc(100vh - 356px)" class="overflow-y-scroll">
          {state[yearState.value]?.map((val: any, ind: any) => {
            return (
              <div>
                <Title name={val.name} class="pb-20"></Title>
                {/* 表单 */}
                <a-form model={val.formState} name="basic" autocomplete="off">
                  <a-row gutter={24}>
                    {val.formState?.map((value: any, index: any) => {
                      return (
                        <a-col span={6}>
                          <a-form-item label={value.label} name={'name' + ind + index}>
                            <a-input-number
                              style="width:100%"
                              placeholder={value.msg}
                              defaultValue={value.num}
                              v-model:value={value.num}
                              formatter={(value: any) =>
                                `${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')
                              }
                              parser={(value: any) => value.replace(/\$\s?|(,*)/g, '')}
                            />
                          </a-form-item>
                        </a-col>
                      )
                    })}
                  </a-row>
                </a-form>
              </div>
            )
          })}
        </div>
        {/* 按钮 */}
        <div class="py-20 ">
          <a-button class="mr-20" onClick={emptyFun}>
            清空{yearState.value}年数据
          </a-button>
          <a-button class="mr-20" onClick={saveStateFun}>
            保存公司数据
          </a-button>
          <a-button type="primary" onClick={resultFun}>
            分析结果
          </a-button>
        </div>
      </div>
    )
  }
})
