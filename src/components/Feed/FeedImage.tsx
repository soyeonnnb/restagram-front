import { FeedImageInterface } from "../../interfaces/FeedInterfaces";
import * as S from "./FeedImage.styles";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { ReactComponent as NextArrowIcon } from "../../assets/icons/chevron-forward.svg";
import { ReactComponent as PrevArrowIcon } from "../../assets/icons/chevron-back.svg";
import { useEffect } from "react";

interface FeedImageProps {
  width: number | null;
  images: FeedImageInterface[];
}

function FeedImage({ images, width }: FeedImageProps) {
  // 슬라이더 기본 셋팅
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return width ? (
    <S.Layout width={width}>
      <Slider {...settings}>
        {images.map((image, idx) => (
          <S.Box key={idx}>
            <S.Image src={image.url} width={width} />
          </S.Box>
        ))}
      </Slider>
    </S.Layout>
  ) : (
    <></>
  );
}

export default FeedImage;

interface ArrowProps {
  className?: string;
  onClick?: React.MouseEventHandler<any> | undefined;
}

const NextArrow = ({ className, onClick }: ArrowProps) => {
  return (
    <S.NextArrow className={className} onClick={onClick}>
      <NextArrowIcon width={40} height={40} fill="#ffffffb4" />
    </S.NextArrow>
  );
};
const PrevArrow = ({ className, onClick }: ArrowProps) => {
  return (
    <S.PrevArrow className={className} onClick={onClick}>
      <PrevArrowIcon width={40} height={40} fill="#ffffffb4" />
    </S.PrevArrow>
  );
};
