import * as React from 'react';
import * as axios from 'axios';
import html2canvas from 'html2canvas';
import white from '../../media/white.jpg'
import './Scatch.css';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';

let canvas = null;

export default class Scatch extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
         image :''
      }

        this.popUpClick= this.popUpClick.bind(this);
    }

    componentDidMount() {
     //1번만 딱 부르면되는함수들은 여기에 셋팅함
                                                                                              // $(".fullpage").fullpage({          //이새끼는 배경화면을 핑크로 만들어주는새끼같은데 이새끼 주석을 풀면 .fullpage가 정의되지않았다고 오류가뜬다
                                                                                              //     sectionsColor: ["pink", "#4BBFC3"]  //이새끼는 굳이 없어도 기능에 문제 ㄴㄴ
                                                                                              //   });
     initCanvas();
         //너왜 이것만 여기다 따로 붙여준거임 init이라? ㄴㄴ 밑에 보면은  //저 밑에 JS스트립트 부분을 클래스 밖에 선언해준다 JS부분을 선언해야 쓸수있을테니까
         canvas.on('mouse:down', function(options) {     //canvas.on안에 getIndex함수와(앞뒤 순서 자동정렬), deleteObject함수 선언(클릭된놈 delete)
          console.log(options.e.clientX, options.e.clientY);
          // console.log(canvas.toJSON().objects[0].src);
          getIndex(canvas);
      
          $("#delete").click(function(){
            // canvas.isDrawingMode = false;                        //삭제 버튼누르면 삭제 함수 실행
          deleteObjects(canvas);
      
            });
          });
        
      }                                                                                        //addEventListener은 무조건 한번만 해야되기때문에 저 밑에 JS부분을 감싸는 initCanvas()함수를 didMount에다 선언해준다 밑에 저 길다란 함수들은 initCanvas()안에 있는 것들이다.
                                                                                                 //고로 initCanvas()하나면 밑에 JS소스전체가 DidMount할때 호출된다는것이다
    componentDidUpdate(){
     // console.log(this.props.basket);//리덕스를 제대로 연결해놓아야 재렌더링이 재대로 갱신된다,야매 리덕스 배열하용했던거는
                                       //연결이 제대로 안되있어서 갱신이 제대로 안된거임
                                       console.log(this.props.basket);
    }
   /*!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
   여기떄문에 이미지 버튼클릭했을떄 이미지는 추가되는데 삽입이 안되는거임
   canvus란 놈은 애초에 본인이 삽입할 data 셋팅을 딱 하고 그 셋팅된 image에 한정해서
   이미지 삽입이 가능함!!!!(그래서 기존에 있던이미지2개는 DidMount에서 initCanvas()로
   셋팅 완료하여 삽입 가능하지만, 후에 추가된 이미지들은 initCanvas()로 셋팅을 하지못하여
   삽입이 안되는 거임 그래서 추가되면 Didupdate가 된다는 성질을 이용하여 삽입하게 할수있음
   componentDidUpdate()  이거쓰면 새로추가되는 이미지 canvus에 삽입가능하게됨 
   {                        대신 event제거 제대로 안되고 계속event가 쌓여 존나게 느리게됨 이거해결해야함
    initCanvas();
   }*/  
  
  popUpClick(){
  this.props.tochange(false);  //props는 일방적으로 값을 지정당하는대 함수면 이런식으로 값을 바꿀수있음??ㅇㅇ바꿀수있음
  //console.log(this.props.basket); 

  
}

                  
  //라이프사이플 밖의 영역
    render() {
   //라이프사이클안에있는 영역 
   
        return(
          <div style={{
            display: this.props.isOpen   ?  true: 'none',
            backgroundColor:'black',
            width:'40%',
            height:'100%',
            position: 'absolute',
            top: '0',
            
            }}>
           <div className="fullpage">
               
              
                    <div className="canvas-container"  >
                        <canvas id='test'> </canvas>
                    </div>
                {/*
                <div className="furniture">
                        <img draggable ="true" src="https://placeimg.com/80/64/1"/>
                    </div>
                    <div className="furniture">
                        <img draggable ="true" src="https://placeimg.com/80/64/3"/>
                    </div>
                */}
                        
                   
                     <div className="furniture">
                                       {/*권한 안걸리는 이미지 로컬이미지가 basket[0]들어가있다면 crossOrigin검사를 통과해 제대로 표출될것이고, local이 아닌놈이 [0]에있다면 권한에러뜰것이다. */}
                       
                        <img crossOrigin='anonymous' draggable ="true" src={this.props.basket[0]}  width='100' />
                                                {/*여기 크기설정도 영향이 있다!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! canvas안에 들어갈 이미지의 크기를 설정하므로 canvas에서 들어갈때의 크기를 img.width로 지정하면 img.width의 크기가 여기 img의 크기가됨*/} 
                    </div>
                 
                    <div className="furniture">
                     
                        <img crossOrigin='anonymous' draggable ="true" src={this.props.basket[1]}  width='100'/>
                       
                    </div>
                   
                    <div className="furniture">
                   
                        <img crossOrigin='anonymous' draggable ="true" src={this.props.basket[2]}width='100' />
                      
                    </div>
                 
                    <div className="furniture">
                   
                        <img crossOrigin='anonymous' draggable ="true" src={this.props.basket[3]} width='100'/>
                       
                    </div>
                   {/* 무한정 넣을수 없게하여 5개만보여준다, 고로 버튼클릭했을때의 basket에 이미지들어가는부분도 갯수를 통제해야한다.(items.jsx확인해봐라)*/ }
               
                </div>

            <button onClick ={this.popUpClick}>상세정보나가기</button>   
            <button onClick={capturebutton} >캔버스전체캡쳐뜨기</button>
            <button onClick={gotocodi}>캔버스위 object따기</button>
            <button id="delete">Delete selected image</button>
            </div>
              
        );   
    }
}


  //은규가준 이미지 삽입 부분 JS part를 여기다 전역함수로 선언해줘서 사용한다.
  function initCanvas() {
    $(".canvas-container").each(function(index) {
      var canvasContainer = $(this)[0];
      var canvasObject = $("canvas", this)[0];
      var url = $(this).data("floorplan");
      
      canvas = (window._canvas = new fabric.Canvas(canvasObject));


     
      canvas.setHeight(500); //캔버스의 크기설정할수 있음
      canvas.setWidth(500);
      canvas.setBackgroundImage(url, canvas.renderAll.bind(canvas));
  
      var imageOffsetX, imageOffsetY;
  
      function handleDragStart(e) {  //넣을 이미지를 클릭하고 옮기는 딱 start시점에 발생
        console.log('DragStart');
        [].forEach.call(images, function(img) {
          img.classList.remove("img_dragging");
        });
        this.classList.add("img_dragging");
  
        var imageOffset = $(this).offset();
        imageOffsetX = e.clientX - imageOffset.left;  //내가 놓은 위치에 이미지가 그 위치에 안착하게 도와주는부분
        imageOffsetY = e.clientY - imageOffset.top;
      }
  
      function handleDragOver(e) {   //넣을 이미지가 canvas위에서 자리이동할때 불리는함수
        console.log('drag over');
        if (e.preventDefault) {
          e.preventDefault();
        }
        e.dataTransfer.dropEffect = "copy";
        return false;
      }
  
      function handleDragEnter(e) {  //넣을 이미지가 canvas안에 들어가는 시점에서 발생되는 함수(start와는다름)
          console.log('drag enter');
        this.classList.add("over");
      }
  
      function handleDragLeave(e) {  //넣을 이미지가 canvas에서 나오는 시점에서 발생되는함수
        console.log('drag leave');
        this.classList.remove("over");
      }
// ㄴㄴ 그냥 어차피 여기서만 쓰이는 함수이고기addEventListener은 무조건 한번만 해야돼 여러번 하면 여러번 불리게 돼서 하면 안돼 그래서 componentDidMount에 넣어서
// 한번만 호출하게 한거고 거  addEventListener은 무조건 한번만 해야 너 이거 어찌알았냐? 한번만 해야한다는건 의무사항임 시발
//근데 지금이거 응용해서 이미지하나가 아니라 저네 페이지에있는것처럼 다른 이미지도 똑같이 적용할수 있겠지?할수있겠찌 ㅇㅇ시발 고맙ㄷ캉ㅋ ㅇㅋㅇㅋㅇㅋㅇㅋㅇㅋㅇㅋㅇㅋㅇㅋㅇㅋㅇㅋㅇㅋㅇㅋㅋㅇㅋㅋㅋㅋㅇㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅈㅋ캌ㅋㅋㄹㅋ캌ㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅈ캌ㅋㅋㅋㅋㄹ캌ㅋ
      async function handleDrop(e) {    //넣을 이미지가 canvas위에 드랍됬을때 호출되는함수
        console.log('drag drop');
        e = e || window.event;
        if (e.preventDefault) {
          e.preventDefault();
        }
        if (e.stopPropagation) {
          e.stopPropagation();
        }
        var img = document.querySelector(".furniture img.img_dragging");
        
       // console.log("event: ", e);
      //  console.log(img);
        var offset = $(canvasObject).offset();
        var y = e.clientY - (offset.top + imageOffsetY); //내가 놓은 위치에 이미지가 그 위치에 안착하게 도와주는부분
        var x = e.clientX - (offset.left + imageOffsetX);
  
        var newImage = new fabric.Image(img, {//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!1여기서 img란 밑에 삽입되길 기다리는 놈이 img를 의미함,위에서의  src={this.props.basket[0]} width='600' 이놈의 width통제받는다는말
          width: img.width,   //  !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!img.width    이부분존나중요!!!!!!!!!!이미지가 canvas에 들어가는순간 바뀌는 크기지정하는곳!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
          height: img.height,  // !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!img.height    width랑 height을 600 , 600 으로 하면 보임, 사진이 짤리고 안짤리고는 이부분과, Testhome에 있는 이미지원본크기 이 둘사이의 상관관계에 의해 사진이 짤리고 안짤리고가결정남
          left: x,           //!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!1!!!!!!!!!!!!!!!!!!!!!!!!!Testhome에서 받는 원본이미지가 존나 크면 잘려나오고, 감당이 되는 사이즈가 주어지면 제대로나옴, 
          top: y                //!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!Testhome의 원본이미지가 800 800크긴데 여기서 width 400 height 400 주면 짤려나오고
        });                    //!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!Testhome이 800800 인데 여기서 width 800 hetight 800 주면 제대로 다나옴, 여기서 width height은 기준이 Lest ,Top 왼쪽윗꼭지점기준 width height이여서 원본이미지크기보다 작게 canvas에서 찍을경우 잘려나오는것임
      
        canvas.add(newImage);
       
       //////////////////////////////////////////////////////////////////////  
     // 여기부분이 드랍되는 순간 canvas.add로 새로운 이미지 쳐넣는부분 난 이 이미지를 따고싶다
    // canvas.requestRenderAll();  
    //  var can = document.getElementById('test');
    //   setTimeout(() => {
    //     console.log(can.toDataURL('image/png'));
    //    }, 1000)
        ////////////////////////////////////////////////////////////////////이부분이 이미지캡쳐의생명!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
        //이부분만 추가되면 이미지 캡쳐된 파일 딸수있음........근데 local이미지에 한정되서 딸수있음!!!그래서 CORS문제 해결해야함..CORS문제해결하려면 S3와연결된 node서버쪽에서
        //내쪽으로 이미지 보내는 그 js.파일위에다가
        //app.all('/*', function(req, res, next) { //이미지 권한문제의 핵심 나중에 서버쪽 사람들한테 이걸 붙이라고 해라!!!!!!!!!!!!!//
    //res.header("Access-Control-Allow-Origin", "*");
    //res.header("Access-Control-Allow-Headers", "X-Requested-With");
    //next();
 // });            이거 밑에 4줄 붙여주면 이미지파일 헤더에 권한사용할수 있게 보내지므로, 그때부턴 외부 이미지도 캡쳐딸수있게 될것이다!!!!!!!!!!
       //////////////////////////////////////////////////////////////////////
      
         return false;
      }
  
     

      function handleDragEnd(e) {
        console.log('Dragend');
        [].forEach.call(images, function(img) {
          img.classList.remove("img_dragging");
        });
      }
  
      var images = document.querySelectorAll(".furniture img");
      [].forEach.call(images, function(img) {
        img.addEventListener("dragstart", handleDragStart, false);
        img.addEventListener("dragend", handleDragEnd, false);
      });
 
      canvasContainer.addEventListener("dragenter", handleDragEnter, false);
      canvasContainer.addEventListener("dragover", handleDragOver, false);
      canvasContainer.addEventListener("dragleave", handleDragLeave, false);
      canvasContainer.addEventListener("drop", handleDrop, false);
    });
  }
//////////////////////////////////////
//이밑함수는 base64파일 이미지파일로 바꾸기위해만든함수
  function encodeBase64ImageFile (image) {
    return new Promise((resolve, reject) => {
      let reader = new FileReader()
      // convert the file to base64 text
      reader.readAsDataURL(image)
      // on reader load somthing...
      reader.onload = (event) => {
        resolve(event.target.result)
      }
      reader.onerror = (error) => {
        reject(error)
      }
    })
  }


  function capturebutton(){
    canvas.requestRenderAll(); //이함수가 캔버스위에 수정된 최종 이미지상태를 반영하여 뽑아낼수 있는함수임
    var can = document.getElementById('test');
    setTimeout(() => {
      console.log(can.toDataURL('image/png'));
     }, 1000)

    
  }

  function gotocodi()
  {
    console.log(canvas._objects);
    console.log(canvas.toJSON());
  }

  function deleteObjects(canvas){ //삭제하기
    var activeObject = canvas.getActiveObjects(),
        activeobjectGroup = new fabric.ActiveSelection(activeObject, {              //여러개 선택하면 삭제 안되니깐 새로 패브릭으로 만들어주고
        canvas: canvas                                                              // 그걸 통으로 지우는 방식
      });
      if (activeobjectGroup) {
        // console.log(activeobjectGroup);
        activeobjectGroup.forEachObject(function(obj) {
        canvas.remove(obj);
      });
      }
      else {
        canvas.remove(activeObject);
      }
      canvas.discardActiveObject();
      canvas.requestRenderAll();
  }

  function getIndex(canvas){  //이미지 앞뒤 순서 자동으로 정해주는놈

    console.log("aaa");
    var activeObj = canvas.getActiveObject();
    
    // if (activeObj){
    //   if (activeObj._element.currentSrc === canvas.toJSON().objects[0].src){
    // console.log(activeObj._element.currentSrc);
    //   }
      // console.log(activeObj._element.currentSrc);
      //   }
    canvas.bringToFront(activeObj);                                                  //씨발 일단 인덱스는 땄는데 도대체 어케해야 toJSON에 
    console.log(activeObj && canvas.getObjects().indexOf(activeObj));                //이걸 넣을수 있는지 모르겠다
    return activeObj && canvas.getObjects().indexOf(activeObj)
   }