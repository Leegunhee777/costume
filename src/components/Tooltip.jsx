import React, { useState } from "react";
import ReactDOM from "react-dom";
// import Slide from "react-swipeable-views";
import Button from "@material-ui/core/Button";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { red, blue, green } from "@material-ui/core/colors";
import { AutoRotatingCarousel, Slide } from "material-auto-rotating-carousel";
import a from '../../media/111.png';
import b from '../../media/222.png';
import c from '../../media/333.png';
import d from '../../media/444.png';

export default function Tooltip(){
  const [handleOpen, setHandleOpen] = useState({ open: false });
  const handleClick = () => {
    setHandleOpen({ open: true });
  };
  const matches = useMediaQuery("(max-width:600px)");
  return (
    <>
      <Button onClick={handleClick}>toolbar 가이드</Button>
      <AutoRotatingCarouselModal
        isMobile={matches}
        handleOpen={handleOpen}
        setHandleOpen={setHandleOpen}
      />
    </>
  );
}




const AutoRotatingCarouselModal = ({ handleOpen, setHandleOpen, isMobile }) => {
  return (
    <div>
      {/* <Button onClick={() => setHandleOpen({ open: true })}>Open carousel</Button> */}
      <AutoRotatingCarousel
        label="Close"
        open={handleOpen.open}
        onClose={() => setHandleOpen({ open: false })}
        onStart={() => setHandleOpen({ open: false })}
        autoplay={false}
        mobile={isMobile}
        style={{ position: "absolute" }}
      >
        <Slide
          media={
            <img src={d} width='450' height='400'/>
          }
          mediaBackgroundStyle={{ backgroundColor: red[400] }}
          style={{ backgroundColor: red[600] }}
          title="코디할 상품 등록"
          subtitle="상품상세페이지의 <코디해보기>버튼을 눌러 원하는 옷을 Toolbar에서 코디해보세요"
        />

        <Slide
          media={
            <img src={a} width='450' height='400'/>
          }
          mediaBackgroundStyle={{ backgroundColor: green[400] }}
          style={{ backgroundColor: green[600] }}
          title="코디할 상품 편집"
          subtitle="코디해 볼 상품을 드래그하여 코디창 위에 올려놓고, 자유롭게 코디해보세요"
        />


<Slide
          media={
            <img src={c} width='450' height='400'/>
          }
          mediaBackgroundStyle={{ backgroundColor: red[400] }}
          style={{ backgroundColor: red[600] }}
          title="나의옷장"
          subtitle="Toolbar에서 만든 코디를 <나의옷장>카테고리에 저장해 원하실 때 언제든 열어보세요"
        />
         
        <Slide
          media={
            <img src={b} width='450' height='400'/>
          }
          mediaBackgroundStyle={{ backgroundColor: blue[400] }}
          style={{ backgroundColor: blue[600] }}
          title="간단하고 빠른구매"
          subtitle="Toolbar를 통한 간단하고 빠른 구매가 가능합니다."
        />
        
      </AutoRotatingCarousel>
    </div>
  );
};




