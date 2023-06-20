import pngGrain from '@assets/noise.png';
import gifGrain from '@assets/noise.gif';

export default () => {
  return (
    <>
      <img
        src={pngGrain}
        alt=""
        className="png-grain hidden"
        onLoad={(ev) => ev.currentTarget.classList.remove('hidden')}
      />
      <img
        src={gifGrain}
        alt=""
        className="gif-grain hidden"
        onLoad={(ev) => ev.currentTarget.classList.remove('hidden')}
      />
    </>
  );
};
