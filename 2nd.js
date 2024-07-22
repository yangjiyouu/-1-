import React, { useState } from 'react';

const UserInfo = () => {
    const [user, setName] = useState('');
    const [email, setEmail] = useState('');
    const [age, setAge] = useState('');

    return (
        <div>
      <h2>본인 소개 페이지</h2>
      <div>
        <label>
          이름:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
      </div>
      <div>
        <label>
          이메일:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
      </div>
      <div>
        <label>
          나이:
          <input
            type="number"
            value={age}
            onChange={(e) => setAge(e.target.value)}
          />
        </label>
      </div>
      <div>
        <h3>입력된 정보</h3>
        <p>이름: {name}</p>
        <p>이메일: {email}</p>
        <p>나이: {age}</p>
      </div>
    </div>
    );

};

