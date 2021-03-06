import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEllipsisH, faThumbsUp } from '@fortawesome/free-solid-svg-icons'
import { faTwitter, faFacebook } from '@fortawesome/free-brands-svg-icons'
import { Users } from '@/generated/graphql'
import { UserIcon } from '@/components/user-icon'
import { Button } from '@/components/button'
import styles from './index.module.css'

type ArticleFooterProps = {
  user: Pick<Users, 'display_id' | 'display_name'>
}
export const ArticleFooter: React.FC<ArticleFooterProps> = ({ user }) => {
  return (
    <>
      {' '}
      <div className={styles.articleFooterContainer}>
        <div>
          <FontAwesomeIcon icon={faThumbsUp} className={styles.icon} />
          &nbsp; 65536イイネ！
        </div>
        <div>
          <FontAwesomeIcon icon={faTwitter} className={styles.icon} />
          <FontAwesomeIcon icon={faFacebook} className={styles.icon} />
          <FontAwesomeIcon icon={faEllipsisH} className={styles.icon} />
        </div>
      </div>
      <div className={styles.articleFooter}>
        <UserIcon src="/profile.png" />
        <div className={styles.userText}>
          <div>{user.display_name}</div>
          <p className={styles.userDescription}>
            ほげほげでふがふがをやっています。
          </p>
        </div>
        <div className={styles.userRight}>
          <Button>Follow</Button>
        </div>
      </div>
    </>
  )
}
