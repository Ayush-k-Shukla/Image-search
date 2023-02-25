import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from '@mui/material';
import { saveAs } from 'file-saver';
import { ImagesInfoInterface } from '../../core/interface';
import styles from './index.module.scss';

interface PropTypes {
  imageInfo?: ImagesInfoInterface;
  open: boolean;
  onClose?: (e: any) => any;
  theme: string;
}

const CustomModal = ({ open, imageInfo, onClose, theme }: PropTypes) => {
  if (!imageInfo) return <></>;
  const onDownload = () => {
    let url = imageInfo?.links?.download;
    saveAs(url, 'image');
  };
  return (
    <Dialog
      sx={{ m: 0, p: 0 }}
      open={open}
      onClose={onClose}
      maxWidth='md'
      fullWidth
    >
      <DialogTitle sx={{ m: 0, p: 0 }}></DialogTitle>
      <DialogContent sx={{ m: 0, p: 0 }}>
        <div className={`${styles.headerWrapper} modal-${theme}`}>
          <div className={styles.image}>
            <img src={imageInfo?.urls?.regular} />
          </div>
          <div className={styles.profileContent}>
            <div className={styles.left}>
              <img src={imageInfo?.user?.profile_image.small} />
              <div className={styles.info}>
                <p className={`primary-h4-${theme}`}>
                  {imageInfo?.user?.first_name} {imageInfo?.user?.last_name}
                </p>
                <p
                  className={`primary-h5-${theme}`}
                >{`@${imageInfo?.user?.username}`}</p>
              </div>
              <div className={styles.icon}>
                {imageInfo?.user?.twitter_username && (
                  <p className={`primary-h5-${theme} ${styles.row}`}>
                    <InstagramIcon fontSize='small' />{' '}
                    {`/${imageInfo?.user?.twitter_username}`}
                  </p>
                )}
                {imageInfo?.user?.twitter_username && (
                  <p className={`primary-h5-${theme} ${styles.row}`}>
                    <TwitterIcon fontSize='small' />{' '}
                    {`/${imageInfo?.user?.twitter_username}`}
                  </p>
                )}
              </div>
            </div>
            <div className={styles.right}>
              <p className={`primary-h5-${theme}`}>{imageInfo?.likes} likes</p>
            </div>
          </div>
        </div>
      </DialogContent>
      <DialogActions
        style={{ backgroundColor: theme === 'dark' ? '#232323' : 'white' }}
      >
        <Button onClick={onDownload} variant='contained' color='success'>
          Download
        </Button>
        <Button onClick={onClose} variant='contained' color='error'>
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default CustomModal;
