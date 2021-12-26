import { NextPage } from 'next'
import { useCallback, useState } from 'react'

import { SiteHeader, SiteHeaderItem } from '@/components/site-header'
import { Editor } from '@/components/editer'
import { Button } from '@/components/button'

import styles from './index.module.css'

const PostPage: NextPage = () => {
  const [subject, setSubject] = useState('')
  const [content, setContent] = useState('')

  const handleChangeSubject = useCallback(
    (ev: React.ChangeEvent<HTMLInputElement>) => {
      setSubject(ev.target.value)
    },
    [],
  )

  const siteHeaderRight = (
    <>
      <SiteHeaderItem>
        <Button type="submit">
          <span>投稿する</span>
        </Button>
      </SiteHeaderItem>
      <SiteHeaderItem>
        <img className={styles.userIcon} src="/profile.png" />
      </SiteHeaderItem>
    </>
  )

  return (
    <>
      <SiteHeader right={siteHeaderRight} />
      <div className={styles.editContent}>
        <input
          className={styles.subject}
          type="text"
          placeholder="タイトル"
          value={subject}
          onChange={handleChangeSubject}
        />
        <Editor
          className={styles.editor}
          placeholder="本文を書きましょう"
          value={content}
          onEdit={setContent}
        />
      </div>
      <footer className={styles.footer}>
        <Button className={styles.submitButton}>投稿する</Button>
      </footer>
    </>
  )
}

export default PostPage
