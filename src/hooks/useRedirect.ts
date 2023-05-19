import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export const useRedirect= () => {
  const navigate = useNavigate();

  useEffect(() => {
    const accesstoken = localStorage.getItem('jwt');
    if (accesstoken) navigate('/todo');
  }, []);
};