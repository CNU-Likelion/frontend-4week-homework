import styled from 'styled-components';

const Wrapper = styled.div`
  width: 50%;
  color: white;
  display: flex;
  flex-direction: column;
`;

const Text = () => {
  return(
    <Wrapper>
      <h1 style={{fontSize: 36, lineHeight: "45px"}}>Learn to code by <br></br> watching others</h1>
      <p style={{fontSize: 14}}>
        See how experienced developers solve problems in real-time. Watching scripted tutorials is great, but understanding how developers think is invaluable.
      </p>
    </Wrapper> 
  );
}

export default Text;