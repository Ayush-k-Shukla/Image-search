import { useEffect, useState } from 'react';
import { getImageByQuery, getImageList } from './api';
import './App.css';
import Header from './components/header/header.component';
import CustomFullScreenLoader from './components/loader/index.loader';
import { ImagesInfoInterface } from './core/interface';
import HomePage from './pages/home/home.page';

export function App() {
  const [theme, setTheme] = useState('dark');
  const [imageData, setImageData] = useState<ImagesInfoInterface[]>([]);

  useEffect(() => {
    if (!imageData?.length) getIntialImageData();
  }, [imageData]);

  const getImagesBySearchQuery = async (query: string) => {
    const data = await getImageByQuery(query);
    setImageData(data);
  };

  const getIntialImageData = async () => {
    const data = await getImageList();
    setImageData(data);
  };

  return (
    <>
      <CustomFullScreenLoader open={!imageData.length} />
      <div className={`wrapper-${theme}`}>
        <Header
          getImagesBySearchQuery={getImagesBySearchQuery}
          setTheme={setTheme}
          theme={theme}
        />
        <HomePage
          imageData={imageData}
          theme={theme}
          getImagesBySearchQuery={getImagesBySearchQuery}
        />
      </div>
    </>
  );
}
