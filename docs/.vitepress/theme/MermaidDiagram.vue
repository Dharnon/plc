<script setup>
import { onMounted, ref, nextTick } from 'vue'
import mermaid from 'mermaid'

const props = defineProps({
  chart: {
    type: String,
    required: true
  }
})

const container = ref(null)
const id = `mermaid-${Math.random().toString(36).substr(2, 9)}`

onMounted(async () => {
  mermaid.initialize({
    startOnLoad: false,
    theme: 'dark',
    flowchart: {
      curve: 'basis'
    }
  })
  
  await nextTick()
  
  try {
    const { svg } = await mermaid.render(id, props.chart)
    if (container.value) {
      container.value.innerHTML = svg
    }
  } catch (e) {
    console.error('Mermaid render error:', e)
  }
})
</script>

<template>
  <div ref="container" class="mermaid-diagram"></div>
</template>

<style scoped>
.mermaid-diagram {
  display: flex;
  justify-content: center;
  padding: 20px 0;
}
.mermaid-diagram :deep(svg) {
  max-width: 100%;
  height: auto;
}
</style>
