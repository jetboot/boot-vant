<script setup lang="ts">
defineOptions({
  name: "FooterLayout",
});

const openWindow = (
  url: string,
  {
    target = "_blank",
    features = "noopener=yes,noreferrer=yes",
  }: {
    target?: "_blank" | "_self" | "_parent" | "_top"; // 新窗口的名称或特殊选项，默认为 "_blank"
    features?: string; // 新窗口的特性（大小，位置等），默认为 "noopener=yes,noreferrer=yes"
  } = {},
) => {
  window.open(url, target, features);
};
</script>

<template>
  <VanTabbar v-model="active">
    <VanTabbarItem name="home" icon="home-o" @click="go(`/subsys/xingfangapp/index`)">
      首页
    </VanTabbarItem>
    <VanTabbarItem name="info" icon="info-o" @click="go('/subsys/xingfangapp/task')">
      任务处理
    </VanTabbarItem>
    <VanTabbarItem
      name="trending"
      icon="chart-trending-o"
      @click="openWindow(`/mobile_ex/query.do`, { target: '_self' })"
    >
      信息查询
    </VanTabbarItem>
    <VanTabbarItem name="user" icon="user-o" @click="go(`/subsys/xingfangapp/xingfangapp_user_center`)">
      个人中心
    </VanTabbarItem>
  </VanTabbar>
</template>
