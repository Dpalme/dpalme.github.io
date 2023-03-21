import Img1 from '@/assets/c0665453126ac5c151442cda0764b720.jpeg';
import Img2 from '@/assets/f57677a88dc9f3f66c57e23bbefbd306.jpeg';
import Img3 from '@/assets/8ec43bd46f66c80756c0cd518561f9a9.jpeg';
import Img4 from '@/assets/e65dd16e3d65f878c5c320246566f2ce.jpeg';
import Img5 from '@/assets/f076d068a5ddbaeccdf6dcce659cc28a.jpeg';
import Img6 from '@/assets/noise.png';

export const PreloadedImages = () => {
  return (
    <>
      {[Img1, Img2, Img3, Img4, Img5, Img6].map((image) => {
        <img
          className="h-[1px] w-[1px] opacity-0"
          src={image}
          key={image}
          loading="eager"
        />;
      })}
    </>
  );
};
