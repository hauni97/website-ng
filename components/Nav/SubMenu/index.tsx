import React from 'react'
import I18n from '../../I18n'
import styles from './index.module.scss'
import TagA from '../../TagA'

type Props = {
  data: {
    name: { [key: string]: string }
    href: { [key: string]: string }
  }[]
}

const SubMenu: React.FC<Props> = (props) => {
  const { data } = props

  return (
    <div className={styles.subMenu}>
      <div className={styles.content}>
        <div className={styles.arrow}></div>

        {data.map((item) => {
          return (
            <div className={styles.item} key={item.name.en}>
              <TagA href={item.href}>
                <I18n {...item.name}></I18n>
              </TagA>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default SubMenu
