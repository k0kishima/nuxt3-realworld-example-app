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
      <li v-for="tab in tabs" :key="tab.label" class="list-none float-left">
        <NuxtLink
          :href="tab.href"
          class="text-sm leading-6 box-border no-underline block px-4 py-2 rounded-none"
          :class="
            isActiveTab(tab)
              ? 'bg-white border-b-2 border-custom-green text-custom-green'
              : 'text-gray-400 border-none border-transparent bg-transparent'
          "
          @click="setActiveTab(tab.label)"
        >
          {{ tab.label }}
        </NuxtLink>
      </li>
    </ul>
  </div>
</template>

<style scoped>
.switchable:after,
.switchable:before {
  content: '';
  clear: both;
  display: block;
}
</style>
