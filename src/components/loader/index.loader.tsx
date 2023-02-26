import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';

import styles from './index.module.scss';

interface PropTypes {
  open: boolean;
}

function CustomFullScreenLoader({ open }: PropTypes) {
  return (
    <Backdrop open={open} className={styles.container}>
      <CircularProgress className={styles.progress} />
    </Backdrop>
  );
}

export default CustomFullScreenLoader;
