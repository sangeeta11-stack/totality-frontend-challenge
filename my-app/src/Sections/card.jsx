import React from 'react';
import { useCard } from '../components/context';
import { FaTrash } from 'react-icons/fa';

function CardPage() {
  const { savedProperties, removeFromCard } = useCard();

  return (
    <div className='w-full lg:w-[90%] m-auto lg:px-20 px-6 py-20'>
      <h1 className='text-4xl font-bold mb-10'>Your Saved Properties</h1>

      {savedProperties.length === 0 ? (
        <p className='text-lg'>No properties saved yet.</p>
      ) : (
        <div className='grid lg:grid-cols-3 grid-cols-1 gap-10'>
          {savedProperties.map((property, index) => (
            <div key={index} className='bg-white dark:bg-grey-800 rounded-xl p-6'>
              <div
                className='bg-cover bg-center h-[250px] rounded-xl mb-4'
                style={{ backgroundImage: `url(${property.images})` }}
              ></div>
              <h2 className='text-2xl font-bold mb-2'>{property.title}</h2>
              <p className='text-lg text-red-600 mb-4'>$ {property.price}</p>
              <p className='text-sm'>{property.description}</p>
              <button
                className='mt-4 p-2 bg-red-600 text-white rounded'
                onClick={() => removeFromCard(property.id)}
              >
                <FaTrash className='inline mr-2' /> Remove from Card
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default CardPage;
