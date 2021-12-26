import { NextPage } from 'next'

import styles from './index.module.css'

const PostPage: NextPage = () => {
  return (
    <div className={styles.editContent}>
      <input className={styles.subject} type="text" placeholder="タイトル" />
      <textarea className={styles.editer} placeholder="本文を書きましょう" />
    </div>
  )
}

export default PostPage
