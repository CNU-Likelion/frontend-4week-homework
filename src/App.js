import './App.css';
import styled from 'styled-components';
import Text from './components/Text';
import Form from './components/Form';

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 1000px;
  gap: 20px;
 `;

const Content = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  gap: 25px;
`;

const TryIt = styled.button`
  background-color : #6055a5;
  color: white;
  width: 100%;
  border-radius: 8px;
  box-shadow: 0px 0.45em 0px 0px #df6d6d;
  height: 55px;
  border: none;
`;


function App() {
  return (
    <div className='App'>
      <Wrapper>
        <Text />
        <Content>
          <TryIt><b>Try it free 7 days</b> then $20/mo. thereafter</TryIt>
          <Form />
        </Content>
      </Wrapper>
    </div>
  );
}

export default App;
