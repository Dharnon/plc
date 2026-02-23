import { defineComponent, onMounted, ref } from 'vue'
import mermaid from 'mermaid'

export default defineComponent({
  name: 'Mermaid',
  props: {
    chart: {
      type: String,
      required: true
    }
  },
  setup(props) {
    const container = ref<HTMLElement | null>(null)
    
    onMounted(() => {
      mermaid.initialize({
        startOnLoad: false,
        theme: 'dark',
        securityLevel: 'loose',
      })
      
      if (container.value) {
        mermaid.render(`mermaid-${Date.now()}`, props.chart).then((result) => {
          container.value!.innerHTML = result.svg
        })
      }
    })
    
    return () => {
      return {
        render() {
          return null
        }
      }
    }
  },
  template: `<div ref="container" class="mermaid-container"></div>`
})
