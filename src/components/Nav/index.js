import React from 'react'
import { View } from 'react-native'
import { Link } from 'react-router-native'
import items from '../../content/menu'
import styles from './styles'

const Nav = () => (
  <View style={styles.nav}>
    {items.map(item => (
      <Link style={styles.navItem} to={item.path} key={item.path}>
        <item.icon height={35} />
      </Link>
    ))}
  </View>
)

export default Nav
