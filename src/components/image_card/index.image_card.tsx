import ThumbUpTwoToneIcon from '@mui/icons-material/ThumbUpTwoTone';
import { ImagesInfoInterface } from '../../core/interface';
import styles from './index.module.scss';
interface PropTypes {
  imageInfo: ImagesInfoInterface;
  onCardClick: (e: any) => any;
  theme: string;
}

const ImageCard = ({ imageInfo, onCardClick, theme }: PropTypes) => {
  const applyClick = () => {
    onCardClick(imageInfo);
  };
  return (
    <div className={styles.cardWrapper} onClick={applyClick}>
      <img src={imageInfo.urls.thumb} className={styles.image} />
      <div className={styles.content}>
        <div className={styles.leftcontent}>
          <img
            className={styles.userpic}
            src={imageInfo.user.profile_image.small}
          />
          <div className={styles.userInfo}>
            <p className={`primary-h3-${theme}`}>{imageInfo.user.first_name}</p>
            <p className={`primary-h4-${theme}`}>{imageInfo.user.username}</p>
          </div>
        </div>
        <div className={styles.rightcontent}>
          <ThumbUpTwoToneIcon
            fontSize='small'
            style={{ color: theme === 'dark' ? 'white' : '#4F4F4F' }}
          />
          <p className={`primary-h5-${theme}`}>{imageInfo.likes}</p>
        </div>
      </div>
    </div>
  );
};

export default ImageCard;
