/*
 * @Date: 2023-06-17 17:27:26
 * @Author: liufan
 * @Description: 公共页面
 */
import headImg from '@/assets/head.jpg'
import { RouterView, useRouter, useRoute } from 'vue-router'
import { defineComponent, ref, reactive, watch } from 'vue'
export default defineComponent({
  setup() {
    const router = useRouter()

    // 导航菜单
    const state = reactive({
      collapsed: false,
      selectedKeys: ['/']
    })
    // 监听路由
    watch(useRoute(), (path) => {
      // 路由初始化
      state.selectedKeys = [path.fullPath]
    })
    // 收缩导航菜单
    const toggleCollapsed = () => {
      state.collapsed = !state.collapsed
    }
    // 点击菜单 路由跳转
    const menuFun = (e: { key: string }) => {
      state.selectedKeys = [e.key]
      router.push({ path: e.key })
    }

    return () => (
      <div>
        {/* top */}
        <div class="h-60 bg-color-brand text-color-white flex align-items-center justify-between px-20">
          <div class="text-2xs-sub flex align-items-center">
            <div class="mr-10 font-bold">财务报表分析器</div>
            <div class="h-40 flex align-items-center font-bold" onClick={toggleCollapsed}>
              {!state.collapsed ? <menu-fold-outlined /> : <menu-unfold-outlined />}
            </div>
          </div>
          <div>
            <img src={headImg} class="w-40 h-40 rounded-50 mr-10" />
            <span>XXX</span>
          </div>
        </div>
        {/* bottom */}
        <div style="height:calc(100% - 60px)" class="w-full h-full flex ">
          <div class={!state.collapsed ? 'w-200' : ''}>
            <a-menu
              style="height:100%;"
              selectedKeys={state.selectedKeys}
              mode="inline"
              inline-collapsed={state.collapsed}
              onClick={menuFun}
            >
              <a-menu-item key="/">
                <fund-outlined />
                <span>公司分析</span>
              </a-menu-item>
              <a-menu-item key="/analyzed">
                <container-outlined />
                <span>已分析</span>
              </a-menu-item>
              <a-menu-item key="3">
                <rotate-right-outlined />
                <span>买进</span>
              </a-menu-item>
              <a-menu-item key="4">
                <rotate-left-outlined />
                <span>卖出</span>
              </a-menu-item>
            </a-menu>
          </div>
          {/* 内容 */}
          <div class="w-full h-full bg-color-grey p-20 flex-1">
            <RouterView class="w-full h-full bg-color-white rounded-xs p-20" />
          </div>
        </div>
      </div>
    )
  }
})
