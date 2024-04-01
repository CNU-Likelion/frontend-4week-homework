// Form.jsx
import React, { useState } from 'react';
import './Form.css';
//배열 비구조화 할당 useState() 훅의 반환값을 받아온다.
//ex) firstName : 현재 상태 값, setFirstName : 상태 값을 업데이트 하는 함수 이 함수를 호출하면 상태 값이 변경되고 컴포넌트가 리렌더링
const Form = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: ''
    });

    //handleSubmit이라는 이벤트 헨들러 정의
    //이벤트의 기본 동작(폼 제출 시 새로고침)을 취소하는 메서드
    const handleSubmit = (e) => {
        e.preventDefault();

        const newErrors = {};

        // 유효성 검사
        if (!firstName.trim()) {
            newErrors.firstName = 'First Name cannot be empty';
        }

        if (!lastName.trim()) {
            newErrors.lastName = 'Last Name cannot be empty';
        }

        if (!email.trim()) {
            newErrors.email = 'Email Address cannot be empty';
        } else if (!email.includes('@')) {
            newErrors.email = 'Looks like this is not an Email Address.';
        }

        if (!password.trim()) {
            newErrors.password = 'Password cannot be empty';
        }

        // 새로운 오류 상태를 설정
        setErrors(newErrors);

        // 유효성 검사 통과 시 콘솔에 로깅
        if (Object.keys(newErrors).length === 0) {
            console.log('성:', firstName);
            console.log('이름:', lastName);
            console.log('이메일:', email);
            console.log('비밀번호:', password);

            // 로깅 후 입력값 초기화
            setFirstName('');
            setLastName('');
            setEmail('');
            setPassword('');
        }
    };
    //form onSubmit -> onSubmit이벤트 핸들러를 사용하여 폼이 제출될 때 호출될 함수인 'handleSubmit'을 지정
    // ={} handleSubmit 이벤트 핸들러 등록, 폼 제출 시 발동
    //onChange 이벤트 핸들러에서 setFirstName()함수 사용, 입력값 업데이트
    //e.target.value는 사용자가 입력한 값.
    return (
        <form onSubmit={handleSubmit}>
            <input
                type='text'
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                placeholder='First Name'
            />
            {errors.firstName && <div className='error'>{errors.firstName}</div>}

            <input
                type='text'
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                placeholder='Last Name'
            />
            {errors.lastName && <div className='error'>{errors.lastName}</div>}

            <input
                type='email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder='Email Address'
            />
            {errors.email && <div className='error'>{errors.email}</div>}

            <input
                type='password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder='Password'
            />
            {errors.password && <div className='error'>{errors.password}</div>}

            <button type='submit'>Claim your free trial</button>
        </form>
    );
};

export default Form;
