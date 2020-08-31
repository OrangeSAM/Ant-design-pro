<template>
  <div style="width: 256px">
    <a-menu
      :defaultSelectedKeys="['1']"
      :defaultOpenKeys="['2']"
      mode="inline"
      :theme="theme"
      :inlineCollapsed="collapsed"
    >
      <template v-for="item in menuData">
        <a-menu-item v-if="!item.children" :key="item.path">
          <a-icon v-if="item.meta.icon" :type="item.meta.icon" />
          <span>{{ item.meta.title }}</span>
        </a-menu-item>
        <sub-menu v-else :menu-info="item" :key="item.path" />
      </template>
    </a-menu>
  </div>
</template>

<script>
/*
 * recommend SubMenu.vue https://github.com/vueComponent/ant-design-vue/blob/master/components/menu/demo/SubMenu.vue
 * SubMenu1.vue https://github.com/vueComponent/ant-design-vue/blob/master/components/menu/demo/SubMenu1.vue
 * */
import SubMenu from "./SubMenu";
export default {
  components: {
    "sub-menu": SubMenu
  },
  data() {
    const menuData = this.getMenuData(this.$router.options.routes);
    return {
      collapsed: false,
      list: [],
      menuData
    };
  },
  props: {
    theme: {
      type: String,
      default: "dark"
    }
  },
  methods: {
    toggleCollapsed() {
      this.collapsed = !this.collapsed;
    },
    getMenuData(routes) {
      console.log(routes);
      // const menuData = [];
      // routes.forEach(e => {
      //   if (e.name && !e.hideInMenu) {
      //     const newItem = { ...e };
      //     delete newItem.children;
      //     if (item.collapsed && !item.hideChildMenu) {
      //     }
      //   }
      // });
    }
  }
};
</script>
