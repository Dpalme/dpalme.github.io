import { useModal } from '#/shared/hooks/useModal';
import { useCallback } from 'react';

export const ImageWithCaption = (props: {
  imageUrl: string;
  altText: string;
  caption: string;
}) => {
  const setModal = useModal();

  const imageToModal = useCallback(() => {
    setModal(
      <img
        src={props.imageUrl}
        className="h-full w-full object-contain"
      />,
    );
  }, [setModal]);

  return (
    <figure
      className="mx-auto max-w-md cursor-pointer text-center"
      onClick={imageToModal}
    >
      <img
        src={props.imageUrl}
        alt={props.altText}
        height="320"
        className="mb-4 w-full"
      />
      <figcaption className="small">{props.caption}</figcaption>
    </figure>
  );
};
