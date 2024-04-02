**background와 background-image**
- background 와 backgournd-image 는 모두 배경을 지정할 수 있다. 
- But, background-image 의 경우 배경 사진만 변경할 수 있는 반면, 
- background 는 다른 옵션들까지 변경 가능하다. 

**react** 
*조건부 렌더링*
- {lastnameError && <span className='error'>{lastnameError}</span>}
- lastnameError 가 true 로 평가되면, '<span className='error'>{lastnameError}</span>' 가 렌더링 됨
- lastnameError 가 false 나 null, undefined 등의 false 값으로 평가되면, 아무것도 렌더링되지 않음 

*font 적용*
- fonts 폴더를 만들어 font 파일을 저장
- css 파일에 
@font-face {
  font-family: "Poppins";
  src: url('../font/Poppins/Poppins-Medium.ttf') format('truetype');
} 을 작성 