import SearchIcon from '@mui/icons-material/Search';
import { useEffect, useState } from 'react';
import ImageCard from '../../components/image_card/index.image_card';
import CustomModal from '../../components/modal/index.modal';
import { ImagesInfoInterface } from '../../core/interface';
import styles from './home.module.scss';

import CustomInput, {
  CustomInputChangeFuncInterface,
} from '../../components/input/index.input';
import { useDebounce } from '../../core/utils/debounce';

export interface Proptypes {
  imageData: ImagesInfoInterface[];
  theme: string;
  getImagesBySearchQuery: (e: any) => void;
}

const HomePage = ({ imageData, theme, getImagesBySearchQuery }: Proptypes) => {
  const [activeImage, setActiveImage] = useState<ImagesInfoInterface>();
  const [open, setOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState<string>('');

  const handleSearch = ({ name, value }: CustomInputChangeFuncInterface) => {
    setSearchQuery(value || '');
    debouncedApiCall();
  };

  const handleApiCalltoSearch = () => {
    getImagesBySearchQuery(searchQuery);
  };
  const debouncedApiCall = useDebounce({ func: handleApiCalltoSearch });

  useEffect(() => {
    if (activeImage) setOpen(true);
  }, [activeImage]);

  const openModal = (info: ImagesInfoInterface) => {
    setActiveImage(info);
    setOpen(true);
  };

  return (
    <div className={styles.parentWrapper}>
      <CustomModal
        open={open}
        imageInfo={activeImage}
        onClose={() => {
          setOpen(false);
        }}
        theme={theme}
      />
      <div className={styles.topImage}>
        <p className={`primary-h1-${theme}`}>
          Download High Quality Images by creators
        </p>
        <p className={`primary-h2-${theme}`}>
          Over 2.4 million+ stock Images by our talented community
        </p>
        <div className={styles.mobileSearchBox}>
          <CustomInput
            placeholder='Search Images here'
            value={searchQuery}
            handleValueChange={handleSearch}
            prependIcon={<SearchIcon />}
            darkTheme={false}
            fullWidth
          />
        </div>
      </div>
      <div className={styles.imageContainer}>
        {imageData?.map((imageinfo) => (
          <ImageCard
            imageInfo={imageinfo}
            onCardClick={openModal}
            theme={theme}
          />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
