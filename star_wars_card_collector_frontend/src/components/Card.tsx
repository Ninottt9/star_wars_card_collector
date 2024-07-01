const Card = ({
  eye_color,
  gender,
  skin_color,
  mass,
  name,
  hair_color,
  height,
  image,
  born,
  bornLocation,
  species,
}) => {
  return (
    <div className='bg-white shadow-lg rounded-lg p-4 mb-4 w-64'>
      <h3 className='text-xl font-bold mb-4 text-center'>{name}</h3>
      <img src={image} alt={name} className='w-full h-72 object-cover mb-4 rounded-lg' />
      <div className='grid grid-cols-2 gap-2 text-sm'>
        {eye_color && (
          <p className='text-gray-700'>
            Eye Color: <span className='font-medium'>{eye_color}</span>
          </p>
        )}
        {gender && (
          <p className='text-gray-700'>
            Gender: <span className='font-medium'>{gender}</span>
          </p>
        )}
        {skin_color && (
          <p className='text-gray-700'>
            Skin Color: <span className='font-medium'>{skin_color}</span>
          </p>
        )}
        {mass && (
          <p className='text-gray-700'>
            Mass: <span className='font-medium'>{mass} kg</span>
          </p>
        )}
        {born && (
          <p className='text-gray-700'>
            Birth Year: <span className='font-medium'>{born}</span>
          </p>
        )}
        {hair_color && (
          <p className='text-gray-700'>
            Hair Color: <span className='font-medium'>{hair_color}</span>
          </p>
        )}
        {height && (
          <p className='text-gray-700'>
            Height: <span className='font-medium'>{height} m</span>
          </p>
        )}
        {bornLocation && (
          <p className='text-gray-700'>
            Birth Location: <span className='font-medium'>{bornLocation}</span>
          </p>
        )}
        {species && (
          <p className='text-gray-700'>
            Species: <span className='font-medium'>{species}</span>
          </p>
        )}
      </div>
    </div>
  );
};

export default Card;
