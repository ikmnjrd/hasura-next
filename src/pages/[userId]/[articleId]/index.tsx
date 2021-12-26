import { useRouter } from 'next/router'
import { NextPage } from 'next'
import Error from 'next/error'
import styles from './index.module.css'
import { Article } from '@/pages/components/article'

import { useGetArticleQuery } from '@/generated/graphql'

const ArticlePage: NextPage = () => {
  const router = useRouter()
  const { articleId } = router.query

  const { loading, error, data } = useGetArticleQuery({
    variables: {
      id: articleId as string,
    },
  })

  if (loading) {
    return <p>...loading</p>
  }
  if (error) {
    return <p>{error.toString()}</p>
  }

  if (!data || !data.articles_by_pk) {
    return <Error statusCode={404} />
  }

  const { user, subject, content, published_at } = data.articles_by_pk
  if (!published_at) {
    return <Error statusCode={404} />
  }

  return (
    <div className={styles.contentContainer}>
      <h1 className={styles.subject}>{subject}</h1>
      <div className={styles.userContainer}>
        <div>
          <img className={styles.userIcon} src="/profile.png" />
        </div>
        <div className={styles.userText}>
          <div className={styles.userId}>
            {user.display_name} @{user.display_id}
          </div>
          <span className={styles.published_at}>
            {new Date(published_at).toLocaleString()}
          </span>
        </div>
      </div>
      <div className={styles.content}>
        <Article content={content} />
      </div>
    </div>
  )
}

export default ArticlePage
