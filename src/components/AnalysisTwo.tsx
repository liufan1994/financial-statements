/* eslint-disable prefer-const */
/*
 * @Date: 2023-06-28 11:16:42
 * @Author: liufan
 * @Description: 公司分析-第二步 AnalysisTwo
 */
import Title from '@/components/Title'
import { defineComponent, reactive, ref } from 'vue'
export default defineComponent({
  setup() {
    // 总体分析 数据
    const dataSource = reactive([
      {
        content: '总资产',
        conTitle: '了解公司的实力和成长性',
        conTexts: ['1.总资产的规模；', '2.总资产的同比增长率。']
      },
      {
        content: '负债',
        conTitle: '了解公司的偿债风险',
        conTexts: ['1.资产负债率；', '2.准货币资金减有息负债的差额。']
      },
      {
        content: '“应付预收”减“应收预付”',
        conTitle: '了解公司的竞争优势',
        conTexts: [
          '1.差额越大，公司的竞争优势越强；',
          '2.差额小于0，公司的竞争力弱，淘汰掉。',
          '差额=（应付票据+应付账款+预收款项+合同负债）-（应收票据+应收账款+应收款项融资+预付款项+合同资产）'
        ]
      },
      {
        content: '应收账款、合同资产',
        conTitle: '了解公司的产品竞争力',
        conTexts: [
          '1.最优秀的公司（应收账款+合同资产）占总资产的比率小于1%，优秀的公司一般小于3%；',
          '2.应收账款+合同资产）占总资产的比率大于15%的公司需要淘汰掉。'
        ]
      },
      {
        content: '固定资产',
        conTitle: '了解公司维持竞争力的成本',
        conTexts: [
          '1.固定资产+在建工程）与总资产的比率大于40%的公司为重资产型公司，重资产型公司保持竞争力的成本比较高，风险比较大；',
          '2.（固定资产+在建工程）与总资产的比率保持稳定或持续下降的公司风险较小，比率短期内增幅较大的公司财务造假的可能性较大。'
        ]
      },
      {
        content: '投资类资产',
        conTitle: '了解公司的主业专注度',
        conTexts: ['1.投资类资产占总资产的比率大于10%的公司不够专注，需要淘汰掉。']
      },
      {
        content: '存货、商誉',
        conTitle: '了解公司未来业绩爆雷的风险',
        conTexts: [
          '1.“应付预收”减“应收预付”的差额大于0并且应收账款占总资产比率小于1%的公司，存货基本没有爆雷的风险；',
          '2.应收账款占总资产的比率大于5%并且存货占总资产的比率大于15%的公司，爆雷的风险比较大，需要淘汰掉。'
        ]
      },
      {
        content: '营业收入',
        conTitle: '了解公司的行业地位及成长性',
        conTexts: ['1.营业收入的规模越大越好；', '2.增长率最好要大于10%，越高越好。']
      },
      {
        content: '毛利率',
        conTitle: '了解公司的产品竞争力及风险',
        conTexts: ['1.毛利率小于40%或波动幅度大于20%的公司淘汰掉。']
      },
      {
        content: '期间费用率',
        conTitle: '了解公司的成本管控能力',
        conTexts: [
          '1.优秀公司的期间费用率与毛利率的比率一般小于40%；',
          '2.期间费用率与毛利率的比率大于60%的公司淘汰掉。'
        ]
      },
      {
        content: '销售费用率',
        conTitle: '了解公司产品的销售难易度',
        conTexts: [
          '1.一般来说，销售费用率小于15%的公司，其产品比较容易销售，销售风险相对较小；',
          '2.销售费用率大于30%的公司，其产品销售难度大，销售风险也大，淘汰掉。'
        ]
      },
      {
        content: '主营利润',
        conTitle: '了解公司主业的盈利能力及利润质量',
        conTexts: [
          '1.主营利润率小于15%的公司主业盈利能力差，淘汰掉；',
          '2.主营利润与营业利润的比率小于80%的公司利润质量较差，淘汰掉。'
        ]
      },
      {
        content: '净利润',
        conTitle: '了解公司的经营成果及含金量，净利润主要看净利润含金量',
        conTexts: ['1.过去5年的平均净利润现金比率小于100%的公司，淘汰掉。']
      },
      {
        content: '归母净利润',
        conTitle: '了解公司的整体盈利能力及持续性',
        conTexts: [
          '1.用“归母净利润”除以“归母所有者权益”可以得到净资产收益率，也叫ROE；',
          '2.最优秀公司的ROE一般会持续大于20%，优秀公司的ROE也会持续大于15%；',
          '3.ROE小于15%的公司需要淘汰掉；',
          '4.归母净利润增长率持续小于10%的公司也要淘汰掉。'
        ]
      },
      {
        content: '购买固定资产、无形资产和其他长期资产支付的现金',
        conTitle: '了解公司的增长潜力',
        conTexts: [
          '1.购建固定资产、无形资产和其他长期资产支付的现金与经营活动产生的现金流量净额的比率大于100%或持续小于3%的公司需要淘汰掉；',
          '2.这两种类型的公司前者风险较大，后者回报较低。'
        ]
      },
      {
        content: '分红率（也叫股利支付率）',
        conTitle: '了解公司的现金分红情况',
        conTexts: ['1.分红率最好在30%-70%之间，比率小于30%不够厚道，大于70%难以持续。']
      }
    ])
    const columns = reactive<any>([
      {
        title: '分析内容',
        dataIndex: 'content',
        key: 'content',
        width: 180,
        customRender: (row: any) => {
          return (
            <div class="flex align-items-center">
              {row.value}
              <a-tooltip
                placement="top"
                title={
                  <div>
                    <span class="font-bold">{row.record.conTitle}</span>
                    {row.record.conTexts.map((val: any) => {
                      return <div>{val}</div>
                    })}
                  </div>
                }
              >
                <question-circle-outlined class="ml-5" />
              </a-tooltip>
            </div>
          )
        }
      }
    ])
    // 年份
    const dayGet = localStorage.getItem('day')
    if (typeof dayGet === 'string') {
      JSON.parse(dayGet).map((val: any) => {
        columns.push({
          title: val.year + '年',
          dataIndex: val.year,
          key: val.year,
          customRender: (row: any) => {
            let color = ref(false)
            if (row.record.content == '总资产' && row.value > 100) {
              color.value = true
            } else if (row.record.content == '负债' && row.value < 100) {
              color.value = true
            }
            return (
              <div class={color.value ? 'text-color-red' : 'text-color-black-light'}>
                {row.value}
              </div>
            )
          }
        })
      })
      //   columns.push({
      //     title: '分析结果',
      //     dataIndex: 'result',
      //     key: 'result'
      //   })
    }
    // 造假分析 数据
    const dataSource2 = reactive([
      {
        content: '虚增应收账款',
        conTitle: '没有现金流入的虚增收入造假',
        conTexts: ['1.这种造假方式必定导致应收账款占总资产的比率异常高，比如大于20%，甚至大于30%']
      },
      {
        content: '虚增货币资金',
        conTitle: '没有现金流入的虚增收入造假',
        conTexts: [
          '1.通过利息收入、利息支出及有息负债金额是否有异常来判断货币资金造假的可能性。',
          '2.当利息收入小于货币资金金额的2%，并且利息支出占净利润的比例在10%以上时，说明货币资金有造假的嫌疑，需要高度重视。'
        ]
      },
      {
        content: '虚增流动资产',
        conTitle: '有现金流入的虚增收入造假',
        conTexts: [
          '1.预付款项或其他应收款或（预付款项+其他应收款）占总资产的比率大于10%的公司，要小心，异常往往意味着风险，高度异常往往意味着高度风险'
        ]
      },
      {
        content: '虚增非流动资产',
        conTitle: '有现金流入的虚增收入造假',
        conTexts: [
          '1.如果一家公司的应收账款占总资产的比率小于1%并且存货占总资产的比率小于10%，那么公司的固定资产或在建工程占总资产的比率可以增长较快；',
          '2.如果公司的产品不那么畅销，比如应收账款占总资产的比率大于5%或存货占总资产的比率大于15%，固定资产或在建工程占总资产的比率增长较快，那么固定资产或在建工程很可能有问题。'
        ]
      }
    ])
    return () => (
      <div>
        <div style="height:calc(100vh - 250px)" class="overflow-y-scroll">
          <div>
            <Title name="总体分析" class="pb-20"></Title>
            <a-table dataSource={dataSource} columns={columns} pagination={false} bordered />
          </div>
          <div class="mt-20">
            <Title name="造假分析" class="pb-20"></Title>
            <a-table dataSource={dataSource2} columns={columns} pagination={false} bordered />
          </div>
        </div>
        {/* 按钮 */}
        <div class="py-20 ">
          <a-button class="mr-20">修改数据</a-button>
          <a-button class="mr-20">保存数据</a-button>
          <a-button type="primary">添加为好公司</a-button>
        </div>
      </div>
    )
  }
})
