import { useParams } from 'react-router-dom'

const UserAbout = () => {
  const { id } = useParams();

  return (
    <div>
      <h1>{id}'s About Page</h1>
      <div className="flex gap-3"><button className="bg-gray-400 py-2 px-4 rounded-md text-xl font-bold" onClick={() => navigate('/')}>
        Go to Home
      </button>
      <button  className="bg-gray-400 py-2 px-4 rounded-md text-xl font-bold" onClick={() => navigate(1)}>
        Next page
      </button>
      <button  className="bg-gray-400 py-2 px-4 rounded-md text-xl font-bold" onClick={() => navigate(-1)}>
        Prev page
      </button></div>
    </div>
  );
};

export default UserAbout;
