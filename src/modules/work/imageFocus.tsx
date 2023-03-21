import { useNavigate, useParams } from 'react-router-dom';
import BackArrow from '@/assets/thin_big_left.min.svg';
import { useModal } from '@/shared/hooks/useModal';
import { useEffect } from 'react';
import { m } from 'framer-motion';

export const ImageFocus = () => {
  const { imgUrl } = useParams();
  const navigate = useNavigate();

  const setModal = useModal();
  useEffect(() => {
    setModal(
      <m.div
        initial={{ y: '100%', z: 10 }}
        animate={{ y: 0, z: 10 }}
        exit={{ y: '100%', z: 10 }}
        className="fixed z-10 w-full h-full isolate"
      >
        <div
          onClick={() => navigate(-1)}
          className="fixed w-full h-full bg-black bg-opacity-5
                    backdrop-blur-sm cursor-pointer"
        />
        <p
          onClick={() => navigate(-1)}
          className="absolute left-12 top-12 cursor-pointer flex flex-row gap-2 items-center"
        >
          <img src={BackArrow} alt="Back" className="h-4" />
          BACK
        </p>
        <div
          className="flex w-screen h-screen items-center
        justify-center z-20 p-24 pointer-events-none"
        >
          {!!imgUrl && (
            <img
              src={decodeURIComponent(imgUrl)}
              alt=""
              className="w-full h-full object-contain z-10"
            />
          )}
        </div>
      </m.div>
    );
    return () => setModal(<></>);
  }, []);
  return <></>;
};
