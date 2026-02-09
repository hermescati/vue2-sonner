<template>
  <div class="min-h-screen bg-gray-50 text-gray-900 p-8">
    <h1 class="text-3xl font-bold mb-1">vue2-sonner Playground</h1>
    <p class="text-gray-500 mb-6">Interactive demo for all toast types, props, and features.</p>

    <!-- Controls bar -->
    <div class="flex flex-wrap items-center gap-4 mb-8 p-4 bg-white rounded-lg border border-gray-200">
      <label class="flex items-center gap-2 text-sm">
        Position
        <select v-model="position" class="border rounded px-2 py-1 text-sm">
          <option v-for="pos in positions" :key="pos" :value="pos">{{ pos }}</option>
        </select>
      </label>

      <label class="flex items-center gap-2 text-sm">
        Theme
        <select v-model="theme" class="border rounded px-2 py-1 text-sm">
          <option value="light">light</option>
          <option value="dark">dark</option>
          <option value="system">system</option>
        </select>
      </label>

      <label class="flex items-center gap-2 text-sm">
        <input type="checkbox" v-model="richColors" />
        Rich Colors
      </label>

      <label class="flex items-center gap-2 text-sm">
        <input type="checkbox" v-model="closeButton" />
        Close Button
      </label>

      <label class="flex items-center gap-2 text-sm">
        <input type="checkbox" v-model="expand" />
        Expand
      </label>

      <label class="flex items-center gap-2 text-sm">
        Duration (ms)
        <input
          type="number"
          v-model.number="duration"
          class="border rounded px-2 py-1 w-20 text-sm"
          min="0"
          step="500"
        />
      </label>
    </div>

    <!-- Demo sections grid -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      <!-- Types -->
      <section class="bg-white rounded-lg border border-gray-200 p-4">
        <h2 class="font-semibold mb-3">Types</h2>
        <div class="flex flex-wrap gap-2">
          <button class="btn" @click="toast('Default toast')">Default</button>
          <button class="btn" @click="toast.success('Operation successful')">Success</button>
          <button class="btn" @click="toast.error('Something went wrong')">Error</button>
          <button class="btn" @click="toast.info('Here is some info')">Info</button>
          <button class="btn" @click="toast.warning('Careful with that')">Warning</button>
          <button class="btn" @click="toast.loading('Loading data...')">Loading</button>
        </div>
      </section>

      <!-- Description -->
      <section class="bg-white rounded-lg border border-gray-200 p-4">
        <h2 class="font-semibold mb-3">Description</h2>
        <div class="flex flex-wrap gap-2">
          <button class="btn" @click="toast('Event created', { description: 'Monday, January 3rd at 6:00pm' })">
            With Description
          </button>
          <button class="btn" @click="toast.success('Changes saved', { description: 'All your settings have been updated.' })">
            Success + Desc
          </button>
        </div>
      </section>

      <!-- Action & Cancel -->
      <section class="bg-white rounded-lg border border-gray-200 p-4">
        <h2 class="font-semibold mb-3">Action &amp; Cancel</h2>
        <div class="flex flex-wrap gap-2">
          <button class="btn" @click="showAction">Action</button>
          <button class="btn" @click="showCancel">Cancel</button>
          <button class="btn" @click="showBoth">Both</button>
        </div>
      </section>

      <!-- Promise -->
      <section class="bg-white rounded-lg border border-gray-200 p-4">
        <h2 class="font-semibold mb-3">Promise</h2>
        <div class="flex flex-wrap gap-2">
          <button class="btn" @click="showPromise">Run Promise (2s)</button>
          <button class="btn" @click="showPromiseError">Run Promise (fail)</button>
        </div>
      </section>

      <!-- Rich Colors -->
      <section class="bg-white rounded-lg border border-gray-200 p-4">
        <h2 class="font-semibold mb-3">Rich Colors</h2>
        <p class="text-xs text-gray-500 mb-2">Toggle "Rich Colors" above to compare.</p>
        <div class="flex flex-wrap gap-2">
          <button class="btn" @click="toast.success('Success')">Success</button>
          <button class="btn" @click="toast.error('Error')">Error</button>
          <button class="btn" @click="toast.info('Info')">Info</button>
          <button class="btn" @click="toast.warning('Warning')">Warning</button>
        </div>
      </section>

      <!-- Positions -->
      <section class="bg-white rounded-lg border border-gray-200 p-4">
        <h2 class="font-semibold mb-3">Positions</h2>
        <p class="text-xs text-gray-500 mb-2">Per-toast position override.</p>
        <div class="grid grid-cols-2 gap-2">
          <button
            v-for="pos in positions"
            :key="pos"
            class="btn text-xs"
            @click="toast(`Toast at ${pos}`, { position: pos })"
          >
            {{ pos }}
          </button>
        </div>
      </section>

      <!-- Custom Duration -->
      <section class="bg-white rounded-lg border border-gray-200 p-4">
        <h2 class="font-semibold mb-3">Custom Duration</h2>
        <div class="flex flex-wrap gap-2">
          <button class="btn" @click="toast('Gone in 1s', { duration: 1000 })">1s</button>
          <button class="btn" @click="toast('Stays for 5s', { duration: 5000 })">5s</button>
          <button class="btn" @click="toast('Stays forever', { duration: Infinity })">Infinity</button>
          <button class="btn" @click="toast.dismiss()">Dismiss All</button>
        </div>
      </section>

      <!-- Invert -->
      <section class="bg-white rounded-lg border border-gray-200 p-4">
        <h2 class="font-semibold mb-3">Invert</h2>
        <div class="flex flex-wrap gap-2">
          <button class="btn" @click="toast('Inverted toast', { invert: true })">Show Inverted</button>
          <button class="btn" @click="toast.success('Inverted success', { invert: true })">Inverted Success</button>
        </div>
      </section>

      <!-- Custom Component -->
      <section class="bg-white rounded-lg border border-gray-200 p-4">
        <h2 class="font-semibold mb-3">Custom Component</h2>
        <div class="flex flex-wrap gap-2">
          <button class="btn" @click="showCustom">Show Custom</button>
        </div>
      </section>

      <!-- Programmatic Dismiss -->
      <section class="bg-white rounded-lg border border-gray-200 p-4">
        <h2 class="font-semibold mb-3">Programmatic Dismiss</h2>
        <div class="flex flex-wrap gap-2">
          <button class="btn" @click="showDismissable">Show Toast</button>
          <button class="btn" :disabled="!dismissId" @click="dismissById">Dismiss It</button>
        </div>
      </section>
    </div>

    <Toaster
      :position="position"
      :theme="theme"
      :rich-colors="richColors"
      :close-button="closeButton"
      :expand="expand"
      :duration="duration"
    />
  </div>
</template>

<script setup lang="ts">
import { ref, h } from 'vue';
import { Toaster, toast } from '@/packages';
import type { Position, Theme } from '@/packages/types';

const positions: Position[] = [
  'top-left', 'top-center', 'top-right',
  'bottom-left', 'bottom-center', 'bottom-right',
];

const position = ref<Position>('bottom-right');
const theme = ref<Theme>('light');
const richColors = ref(false);
const closeButton = ref(false);
const expand = ref(false);
const duration = ref(4000);
const dismissId = ref<string | number | null>(null);

// Action & Cancel
const showAction = () => {
  toast('Event has been created', {
    action: {
      label: 'Undo',
      onClick: () => toast('Undone!'),
    },
  });
};

const showCancel = () => {
  toast('Event has been created', {
    cancel: {
      label: 'Cancel',
      onClick: () => toast('Cancelled!'),
    },
  });
};

const showBoth = () => {
  toast('Event has been created', {
    action: {
      label: 'Undo',
      onClick: () => toast('Undone!'),
    },
    cancel: {
      label: 'Cancel',
      onClick: () => toast('Cancelled!'),
    },
  });
};

// Promise
const showPromise = () => {
  toast.promise(
    new Promise((resolve) => setTimeout(resolve, 2000)),
    {
      loading: 'Loading data...',
      success: 'Data loaded successfully!',
      error: 'Failed to load data.',
    },
  );
};

const showPromiseError = () => {
  toast.promise(
    new Promise((_resolve, reject) => setTimeout(() => reject(new Error('fail')), 2000)),
    {
      loading: 'Loading data...',
      success: 'Data loaded successfully!',
      error: 'Request failed!',
    },
  );
};

// Custom Component
const showCustom = () => {
  toast.custom({
    render() {
      return h(
        'div',
        {
          style: {
            background: '#1a1a2e',
            color: '#e0e0e0',
            padding: '16px',
            borderRadius: '8px',
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
          },
        },
        [
          h('span', { style: { fontSize: '20px' } }, '\u{1F680}'),
          h('div', {}, [
            h('div', { style: { fontWeight: '600' } }, 'Custom Component'),
            h('div', { style: { fontSize: '13px', opacity: '0.7' } }, 'This is a fully custom toast rendered via h().'),
          ]),
        ],
      );
    },
  });
};

// Programmatic Dismiss
const showDismissable = () => {
  dismissId.value = toast('This toast can be dismissed programmatically.', {
    duration: Infinity,
  });
};

const dismissById = () => {
  if (dismissId.value != null) {
    toast.dismiss(dismissId.value);
    dismissId.value = null;
  }
};
</script>

<style scoped>
.btn {
  padding: 6px 14px;
  font-size: 13px;
  font-weight: 500;
  border-radius: 6px;
  border: 1px solid #d1d5db;
  background: #fff;
  color: #374151;
  cursor: pointer;
  transition: all 0.15s;
}
.btn:hover {
  background: #f3f4f6;
  border-color: #9ca3af;
}
.btn:active {
  background: #e5e7eb;
}
.btn:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}
</style>
