<script setup lang="ts">
import { defineProps, defineEmits } from 'vue';

interface Tab {
  label: string;
  href: string;
}

const props = defineProps({
  tabs: {
    type: Array as () => Tab[],
    required: true,
  },
  activeTab: {
    type: String,
    required: true,
  },
});

const emit = defineEmits(['update:activeTab']);

const isActiveTab = (tab: Tab) => tab.label === props.activeTab;
const setActiveTab = (tabLabel: string) => {
  emit('update:activeTab', tabLabel);
};
</script>

<template>
  <div class="switchable">
    <ul>
      <li v-for="tab in tabs" :key="tab.label">
        <NuxtLink
          :href="tab.href"
          :class="{ active: isActiveTab(tab) }"
          @click="setActiveTab(tab.label)"
          >{{ tab.label }}</NuxtLink
        >
      </li>
    </ul>
  </div>
</template>

<style scoped>
.switchable {
  font-family: 'Source Sans Pro', sans-serif;
  font-size: 1rem;
  line-height: 1.5;
  box-sizing: inherit;
  margin: 1.5rem 0 -1px 0;

  ul {
    font-size: 1rem;
    line-height: 1.5;
    box-sizing: inherit;
    list-style: none;

    li {
      font-size: 1rem;
      line-height: 1.5;
      list-style: none;
      box-sizing: inherit;
      float: left;

      a {
        font-size: 1rem;
        line-height: 1.5;
        list-style: none;
        box-sizing: inherit;
        text-decoration: none;
        touch-action: manipulation;
        display: block;
        padding: 0.5em 1em;
        border-radius: 0px;
        border: none;
        border-bottom: 2px solid transparent;
        background: transparent;
        color: #aaa;
      }
      .active {
        background: #fff;
        border-bottom: 2px solid #5cb85c;
        color: #5cb85c;
      }
    }
  }
}
.switchable:after,
.switchable:before {
  content: '';
  clear: both;
  display: block;
}
</style>
