import React, { useState, useEffect } from 'react';

function MyAccount() {
  const [myAccount, setMyAccount] = useState([]);

  useEffect(() => {
    // 백엔드에서 데이터 가져오기
    fetch('/myaccount')
      .then(response => response.json())
      .then(accountData => setMyAccount(accountData))
      .catch(error => console.log(error));
  }, []);

  const fields = myAccount.length > 0 ? Object.keys(myAccount[0]) : [];

  return (
    <table>
      <thead>
        <tr>
          {fields.map(field => <th key={field}>{field}</th>)}
        </tr>
      </thead>
      <tbody>
        {myAccount.map((row, index) => (
          <tr key={index}>
            {fields.map(field => (
              <td key={field}>{row[field] !== null ? row[field] : ''}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default MyAccount;
