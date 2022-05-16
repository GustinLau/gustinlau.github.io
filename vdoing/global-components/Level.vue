<script>
import Badge from './Badge'

export default {
  functional: true,
  props: {
    type: [String, Number]
  },
  render(h, { props }) {
    let type
    let text
    if (props.type === 'easy' || props.type === 1) {
      type = 'green'
      text = '简单'
    } else if (props.type === 'medium' || props.type === 2) {
      type = 'yellow'
      text = '中等'
    } else {
      type = 'red'
      text = '困难'
    }
    return h(Badge, {
      props: {
        type,
        text,
        vertical: 'middle'
      }
    })
  }
}
</script>
