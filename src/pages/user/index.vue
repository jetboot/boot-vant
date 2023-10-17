<script setup lang="ts">
import { showConfirmDialog } from "vant";
import { onMounted, ref } from "vue";
import { useRouter } from "vue-router";

const user = ref(); // 从数据源获取用户信息并将其赋值给 user 变量

onMounted(async () => {
  // 从数据源获取用户信息
  // const res = await getUserInfo();
  // user.value = res; // 将获取的用户信息赋值给 user
});

// 初始化快捷工具
const tools = [
  { label: "菜单1", path: "/user" },
  { label: "个人信息修改", path: "/user" },
  { label: "手机绑定", path: "/user" },
  { label: "菜单4", path: "/user" },
  { label: "系统设置", path: "/user" },
];
const router = useRouter();
const handleLogout = async () => {
  await showConfirmDialog({
    title: "温馨提示",
    message: "您是否确认退出信访云APP？",
  });
  await router.push("/login");
};
</script>

<template>
  <div class="user-page">
    <div class="user-page-head">
      <div class="user-page-head-top">
        <VanImage class="user-avatar" round fit="cover" :src="user?.avatar" />
        <div class="user-name">
          <p>用户名</p>
          <p>签名</p>
        </div>
      </div>
      <VanRow>
        <VanCol span="6">
          <p>{{ user?.points || 0 }}</p>
          <p>当前积分</p>
        </VanCol>
        <VanCol span="6">
          <p>{{ user?.pendingWork || 0 }}</p>
          <p>待处理工作</p>
        </VanCol>
        <VanCol span="6">
          <p>{{ user?.pendingPoints || 0 }}</p>
          <p>数量</p>
        </VanCol>
        <VanCol span="6">
          <p>{{ user?.registrationCount || 0 }}</p>
          <p>数量</p>
        </VanCol>
      </VanRow>
    </div>
    <div class="user-page-user-tasks">
      <div class="user-page-user-tasks-head">
        <h3>待办工作</h3>
        <RouterLink to="/tasks">
          全部工作 <VanIcon name="arrow" />
        </RouterLink>
      </div>
      <VanRow>
        <VanCol span="6">
          <VanBadge :content="user?.orderInfo?.handling || 2">
            <div class="flex-col-center">
              <svg class="" />
              <p>工作1</p>
            </div>
          </VanBadge>
        </VanCol>
        <VanCol span="6">
          <VanBadge :content="user?.orderInfo?.approval || 42">
            <div class="flex-col-center">
              <svg class="" />
              <p>工作2</p>
            </div>
          </VanBadge>
        </VanCol>
        <VanCol span="6">
          <VanBadge :content="user?.orderInfo?.processing || 24">
            <div class="flex-col-center">
              <svg class="" />
              <p>工作3</p>
            </div>
          </VanBadge>
        </VanCol>
        <VanCol span="6">
          <VanBadge :content="user?.orderInfo?.review || 75">
            <div class="flex-col-center">
              <svg class="" />
              <p>工作4</p>
            </div>
          </VanBadge>
        </VanCol>
      </VanRow>
    </div>
    <!-- 快捷工具 -->
    <div class="user-page-group">
      <h3>快捷工具</h3>
      <VanCell v-for="item in tools" :key="item.label" :title="item.label" :to="item.path" is-link :border="false">
        <template #icon>
          <!--          <svg class="" /> -->
        </template>
      </VanCell>
    </div>
    <!-- 退出登录 -->
    <span class="user-logout" @click="handleLogout">退出登录</span>
  </div>
</template>

<style lang="scss" scoped>
.user-page {
  background-color: var(--bv-bg);
  padding: 0 15px 150px;
  &-head {
    height: 200px;
    background: linear-gradient(180deg, rgb(149, 206, 232), rgba(44, 181, 165, 0));
    margin: 0 -15px;
    padding: 0 15px;
    &-top {
      display: flex;
      padding-top: 50px;
      align-items: center;
      .user-avatar {
        width: 70px;
        height: 70px;
      }
      .user-name {
        padding-left: 10px;
        p {
          &:first-child {
            font-size: 18px;
            font-weight: 500;
          }
          &:last-child {
            margin-top: 10px;
            color: var(--bv-primary);
            font-size: 16px;
          }
        }
      }
    }
    .van-row {
      margin: 0 -15px;
      padding-top: 15px;
      p {
        text-align: center;
        &:first-child {
          font-size: 18px;
          font-weight: 500;
        }
        &:last-child {
          color: var(--bv-dark);
          font-size: 12px;
          padding-top: 4px;
        }
      }
    }
  }
  &-user-tasks {
    background-color: #fff;
    border-radius: 8px;
    margin-bottom: 15px;
    padding-bottom: 15px;
    &-head {
      display: flex;
      justify-content: space-between;
      line-height: 50px;
      padding: 0 15px;
      a {
        color: var(--bv-tip);
      }
    }
    .van-col {
      text-align: center;
      svg {
        height: 28px !important;
        width: 28px !important;
      }
      p {
        padding-top: 4px;
        font-size: 12px;
      }
    }
  }
  &-group {
    background-color: #fff;
    border-radius: 8px;
    overflow: hidden;
    h3 {
      padding-left: 16px;
      line-height: 44px;
    }
    .van-cell {
      align-items: center;
    }
    svg {
      font-size: 17px;
      margin-right: 10px;
    }
  }
  .user-logout {
    display: block;
    margin: 20px auto;
    width: 100px;
    text-align: center;
    color: var(--bv-price);
  }
}
</style>
