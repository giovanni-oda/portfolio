<template>
  <Teleport to="body">
    <Transition name="modal-outer">
      <div
        v-show="props.showModal"
        class="modal-overlay fixed top-0 left-0 flex w-full justify-center items-center h-full px-8 z-[31]"
        :style="{ backgroundColor: `rgba(0, 0, 0, 0.${overlayOpacity})` }"
        @click.self="$emit('close-modal')">
        <Transition name="modal-inner">
          <div
            v-if="props.showModal"
            class="bg-surface rounded-md shadow-lg shadow-black/25 max-w-s"
            :class="{
              'max-w-screen-md': !maxSize || maxSize === 'md',
              'max-w-screen-sm': maxSize && maxSize === 'sm',
              'max-w-screen-lg': maxSize && maxSize === 'lg',
              'max-w-screen-xl': maxSize && maxSize === 'xl'
            }">
            <div
              class="modal-header flex justify-between items-center px-4 pt-3"
              :class="{
                'border-b': props.title,
                'pb-3': props.title,
                'border-black/40': darkMode,
                'border-black/20': !darkMode
              }">
              <h3 class="text-xl font-semibold pr-4">
                {{ props.title }}
              </h3>
              <div class="flex items-center gap-3">
                <slot name="tools"></slot>
                <button
                  class="opacity-40"
                  @click="$emit('close-modal')">
                  <span class="material-icons"> close </span>
                </button>
              </div>
            </div>

            <div
              class="modal-body max-h-[80vh] overflow-y-auto px-6 pb-6 pt-0 text-lg"
              :class="{ 'pt-6': props.title }">
              <slot />
            </div>
            <div
              v-if="!hideFooter"
              class="modal-footer flex items-center justify-start px-4 py-3 border-t"
              :class="{ 'border-black/40': darkMode, 'border-black/20': !darkMode }">
              <slot name="actions">
                <button
                  class="btn"
                  @click="$emit('close-modal')">
                  Close
                </button>
              </slot>
            </div>
          </div>
        </Transition>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup>
  import { useMainStore } from '~/stores/main';

  // macros
  defineEmits(['close-modal']);

  // consts
  const props = defineProps(['showModal', 'title', 'overlay', 'maxSize', 'hideFooter']);
  const mainStore = useMainStore();

  // Computed
  const darkMode = computed(() => mainStore.getTheme === 'dark');
  const overlayOpacity = computed(() => (props.overlay ? props.overlay : darkMode.value ? 60 : 40));
</script>

<style scoped>
  .modal-outer-enter-active,
  .modal-outer-leave-active {
    transition: opacity 0.3s cubic-bezier(0.52, 0.02, 0.19, 1.02);
  }
  .modal-outer-enter-from,
  .modal-outer-leave-to {
    opacity: 0;
  }
  .modal-inner-enter-active {
    transition: all 0.3s cubic-bezier(0.52, 0.02, 0.19, 1.02) 0.15s;
  }
  .modal-inner-leave-active {
    transition: all 0.3s cubic-bezier(0.52, 0.02, 0.19, 1.02);
  }
  .modal-inner-enter-from {
    opacity: 0;
    transform: scale(0.8);
  }
  .modal-inner-leave-to {
    transform: scale(0.8);
  }
  .modal-body::-webkit-scrollbar {
    width: 2px;
  }
  .modal-body::-webkit-scrollbar-track {
    background-color: rgba(var(--text-rgb), 0.3);
  }
  .modal-body::-webkit-scrollbar-thumb {
    background-color: rgba(var(--text-rgb), 0.5);
  }
</style>
