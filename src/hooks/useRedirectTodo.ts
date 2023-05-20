import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export const useRedirectTodo= () => {

  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('jwt');
    if (token) navigate('/todo')
  }, []);
};