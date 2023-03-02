import React from 'react';
import { Outlet, useLocation, useMatches, useNavigate } from 'react-router-dom';

const Home = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const matches = useMatches();

  const defaultList = [
    { id: 1, name: 'anh' },
    { id: 2, name: 'tuan' },
    { id: 7, name: 'kaka' },
    { id: 20, name: 'hoa' },
    { id: 2323, name: 'erg' }
  ];

  const uploadList = [
    { id: 2, name: 'tuan' },
    { id: 20, name: 'hoa' },
    { id: 10, name: 'hoang' }
  ];

  const a = defaultList.filter((item) => {
    return uploadList.some((e) => item.id === e.id);
  });

  const b = defaultList.filter((e) => {
    return a.every((it) => it.id !== e.id);
  });

  console.log(a);
  console.log(b);

  return (
    <div onClick={() => navigate('/dashboard')}>
      <div style={{ background: 'red', height: 50, width: 50 }}>
        <Outlet />

        <p>fdgfdgdg</p>
      </div>
    </div>
  );
};

export default Home;
