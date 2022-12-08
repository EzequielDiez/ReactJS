import React from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import ItemDetailContainer from '../components/ItemDetailContainer';

const DetailPage = () => {
  let { id } = useParams();

  id = parseInt(id);

  return (
    <main className="detail-page-container">
      <ItemDetailContainer id={id} />
      <Link to="/productos"> Volver atrás </Link>
    </main>
  );
};

export default DetailPage;