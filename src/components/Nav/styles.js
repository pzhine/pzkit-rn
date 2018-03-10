import { StyleSheet } from 'react-native'
import vars from '../../shared-styles/variables'

// const mixins = StyleSheet.flatten(require('../../shared-styles/mixins'))

const styles = StyleSheet.create({
  nav: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  navItem: {
    // ...mixins.centerBoth,
    borderColor: vars.navBorderColor,
    borderTopWidth: 1,
    borderRightWidth: 1,
  },
})

export default styles
