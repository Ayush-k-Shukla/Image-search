import SearchIcon from '@mui/icons-material/Search';
import { Switch } from '@mui/material';
import { useEffect, useState } from 'react';
import { useDebounce } from '../../core/utils/debounce';
import CustomInput, {
  CustomInputChangeFuncInterface,
} from '../input/index.input';
import styles from './header.module.scss';
export interface PropTypes {
  setTheme: Function;
  getImagesBySearchQuery: (e: any) => void;
  theme: string;
}

const Header = ({ setTheme, getImagesBySearchQuery, theme }: PropTypes) => {
  const [searchQuery, setSearchQuery] = useState<string>('');

  const handleSearch = ({ name, value }: CustomInputChangeFuncInterface) => {
    setSearchQuery(value || '');
  };
  useEffect(() => {
    debouncedApiCall();
  }, [searchQuery]);

  const handleApiCalltoSearch = () => {
    getImagesBySearchQuery(searchQuery);
  };
  const debouncedApiCall = useDebounce({ func: handleApiCalltoSearch });

  return (
    <div className={`${styles.wrapper} header-${theme}`}>
      <div className={styles.appIcon}>
        <p className={`logo-${theme}`}>Image Gallery</p>
      </div>
      <div className={styles.search}>
        <CustomInput
          placeholder='Search Images here'
          value={searchQuery}
          handleValueChange={handleSearch}
          prependIcon={<SearchIcon />}
          fullWidth
          darkTheme={theme === 'dark'}
        />
      </div>
      <div className={styles.toggle}>
        <p className={`primary-h5-${theme}`}>Dark Mode</p>
        <Switch
          checked={theme === 'dark'}
          onChange={() => {
            setTheme(theme === 'dark' ? 'light' : 'dark');
          }}
          inputProps={{ 'aria-label': 'controlled' }}
          color='success'
        />
      </div>
    </div>
  );
};

export default Header;
