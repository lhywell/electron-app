<template>
  <a-config-provider :locale="zhCN">
    <div id="app-container">
      <a-layout style="min-height: 100vh">
        <a-layout-header style="background: #001529; padding: 0 24px">
          <div style="color: white; font-size: 20px; font-weight: bold">
            {{ appTitle }}
          </div>
        </a-layout-header>

        <a-layout>
          <a-layout-sider v-model:collapsed="collapsed" collapsible>
            <a-menu
              v-model:selectedKeys="selectedKeys"
              theme="dark"
              mode="inline"
            >
              <a-menu-item key="1">
                <DashboardOutlined />
                <span>仪表盘</span>
              </a-menu-item>
              <a-menu-item key="2">
                <BarChartOutlined />
                <span>数据分析</span>
              </a-menu-item>
              <a-menu-item key="3">
                <SettingOutlined />
                <span>系统设置</span>
              </a-menu-item>
            </a-menu>
          </a-layout-sider>

          <a-layout-content style="margin: 16px">
            <div style="padding: 24px; background: #fff; min-height: 360px">
              <a-card :title="`欢迎使用${appTitle}`">
                <a-space direction="vertical" :size="16" style="width: 100%">
                  <a-alert
                    message="系统已就绪"
                    :description="appConfig.description"
                    type="success"
                    show-icon
                  />

                  <a-descriptions title="系统信息" bordered>
                    <a-descriptions-item label="应用名称">{{
                      appTitle
                    }}</a-descriptions-item>
                    <a-descriptions-item label="版本号">{{
                      appVersion
                    }}</a-descriptions-item>
                    <a-descriptions-item label="框架"
                      >Vue 3</a-descriptions-item
                    >
                    <a-descriptions-item label="语言"
                      >TypeScript</a-descriptions-item
                    >
                    <a-descriptions-item label="UI 库"
                      >Ant Design Vue</a-descriptions-item
                    >
                    <a-descriptions-item label="桌面框架"
                      >Electron</a-descriptions-item
                    >
                    <a-descriptions-item label="构建工具"
                      >Vite</a-descriptions-item
                    >
                    <a-descriptions-item label="API 地址">{{
                      apiBaseUrl
                    }}</a-descriptions-item>
                  </a-descriptions>

                  <a-button type="primary" size="large"> 开始使用 </a-button>
                </a-space>
              </a-card>
            </div>
          </a-layout-content>
        </a-layout>
      </a-layout>
    </div>
  </a-config-provider>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";
import zhCN from "ant-design-vue/es/locale/zh_CN";
import {
  DashboardOutlined,
  BarChartOutlined,
  SettingOutlined,
} from "@ant-design/icons-vue";
import appConfig from "./config/app.config";

const collapsed = ref(false);
const selectedKeys = ref(["1"]);

// 从环境变量获取配置
const appTitle = computed(() => import.meta.env.VITE_APP_TITLE);
const appVersion = computed(() => import.meta.env.VITE_APP_VERSION);
const apiBaseUrl = computed(() => import.meta.env.VITE_API_BASE_URL);
</script>

<style scoped>
#app-container {
  font-family:
    -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue",
    Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji",
    "Segoe UI Symbol", "Noto Color Emoji";
}
</style>
