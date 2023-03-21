import { useModal } from '@/shared/hooks/useModal';
import { useCallback } from 'react';

export const ImageWithCaption = (props: {
  imageUrl: string;
  altText: string;
  caption: string;
}) => {
  const setModal = useModal();

  const imageToModal = useCallback(() => {
    setModal(
      <img src={props.imageUrl} className="w-full h-full object-contain" />
    );
  }, [setModal]);

  return (
    <figure
      className="mx-auto text-center max-w-md cursor-pointer"
      onClick={imageToModal}
    >
      <img
        src={props.imageUrl}
        alt={props.altText}
        height="320"
        className="w-full mb-4"
      />
      <figcaption className="small">{props.caption}</figcaption>
    </figure>
  );
};
