import {useEffect} from 'react';

function Instagram() {
  useEffect(() => {
    window.location.href = 'https://www.instagram.com/deanzahacks/';
  }, []);
  return <div></div>;
}

export default Instagram;
