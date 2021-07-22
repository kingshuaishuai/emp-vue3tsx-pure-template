import { defineComponent } from 'vue'
import './HelloWorld.less'
import logo from '../logo.png'

export default defineComponent({
  name: 'Layout',
  setup() {
    return () => {
      return (
        <div class="layout-app">
          <img class="img" src={logo} width="30" />
          <p>EMP Vue3 TSX Pure template</p>
        </div>
      )
    }
  },
})
