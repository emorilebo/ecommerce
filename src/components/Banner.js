import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

function Banner() {
  return (
    <div className="relative ">
      <div className="absolute w-full h-32 bg-gradient-to-t from-gray-100 to transparent bottom-0 z-20" />

      <Carousel
        autoPlay
        infiniteLoop
        showStatus={false}
        showIndicators={false}
        showThumbs={false}
        interval={5000}
      >
        <div>
          <img loading="lazy" src=" https://tinyurl.com/2ahz4u5h" alt="" />
        </div>
        <div>
          <img loading="lazy" src=" https://tinyurl.com/ytvsrh7n" alt="" />
        </div>
        <div>
          <img loading="lazy" src=" https://tinyurl.com/3rryv7kv" alt="" />
        </div>
      </Carousel>
    </div>
  );
}

export default Banner;
