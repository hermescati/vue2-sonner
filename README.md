# vue2-sonner

> Vue 2.7 backport of [vue-sonner](https://github.com/xiaoluoboding/vue-sonner) - An opinionated toast component for Vue

⚠️ **This is an unofficial Vue 2.7 backport.** For Vue 3+ projects, please use the official [vue-sonner](https://github.com/xiaoluoboding/vue-sonner) package.

## Why?

`vue-sonner` is an excellent toast notification library, but it only supports Vue 3+. This package backports the functionality to Vue 2.7, maintaining API compatibility so you can easily migrate to the official package when upgrading to Vue 3.

## Installation

```bash
npm install vue2-sonner
# or
yarn add vue2-sonner
# or
pnpm add vue2-sonner
```

## Usage

### Global Registration

```typescript
import Vue from 'vue'
import Vue2Sonner from 'vue2-sonner'
import 'vue2-sonner/style.css'

Vue.use(Vue2Sonner)
```

### Component Registration

```vue
<template>
  <div>
    <Toaster />
    <!-- Your app content -->
  </div>
</template>

<script>
import { Toaster } from 'vue2-sonner'
import 'vue2-sonner/style.css'

export default {
  components: {
    Toaster
  }
}
</script>
```

### Showing Toasts

```typescript
import { toast } from 'vue2-sonner'

// Simple usage
toast('Hello World')

// With options
toast.success('Operation completed')
toast.error('Something went wrong')
toast.info('Information message')
```

## API

The API is designed to match `vue-sonner` as closely as possible. For detailed documentation, refer to the [official vue-sonner documentation](https://github.com/xiaoluoboding/vue-sonner).

## Migration to Vue 3

When you're ready to upgrade to Vue 3:

1. Replace `vue2-sonner` with `vue-sonner`:
   ```bash
   npm uninstall vue2-sonner
   npm install vue-sonner
   ```

2. Update imports:
   ```diff
   - import { Toaster, toast } from 'vue2-sonner'
   + import { Toaster, toast } from 'vue-sonner'
   ```

The API remains the same, so no other code changes should be necessary!

## Maintenance Status

This package is maintained for projects that need toast notifications while still on Vue 2.7. Community contributions are welcome, but please note that support may be limited as the focus is on compatibility rather than new features.

## Credits

This is a backport of [vue-sonner](https://github.com/xiaoluoboding/vue-sonner) by [@xiaoluoboding](https://github.com/xiaoluoboding), which itself is inspired by [sonner](https://github.com/emilkowalski/sonner) by [@emilkowalski](https://github.com/emilkowalski).

All credit for the original design and API goes to the original authors.

## License

MIT - See [LICENSE](./LICENSE) file for details.

This project includes code from vue-sonner, which is also MIT licensed.
