
import Spinner from './Spinner';
import useGif from '../hooks/useGif';

const Random = () => {
  // const [loader, setSpinner] = useState(false);
  // const [gif, setGif] = useState('');

  // async function fetchUrl() {
  //   setSpinner(true);
  //   var url = `https://api.giphy.com/v1/gifs/random?apikey=${process.env.REACT_APP_GIPHY_API_KEY}`;
  //   try {
  //     const { data } = await axios.get(url);
  //     const gifUrl = data.data.images.downsized_large.url;
  //     setGif(gifUrl);
  //   } catch (error) {
  //     console.error('Error fetching GIF:', error);
  //   } finally {
  //     setSpinner(false);
  //   }
  // }

  // useEffect(() => {
  //   fetchUrl();
  // }, []);

  const {loader,gif,fetchUrl} = useGif()

  // function btnclickHandler() {
  //   fetchUrl();
  // }

  return (
    <div className="bg-green-500 w-3/4 mx-auto mt-10 p-4 text-center rounded-lg">
      <div className="font-bold text-2xl mb-4">A Random Gif</div>
      <div className="flex justify-center items-center">
        {loader ? <Spinner /> : <img src={gif} alt="Random Gif" className="max-w-full rounded-lg" />}
      </div>
      <button
        onClick={() =>{
          fetchUrl();
        }}
        className="bg-white opacity-90 px-4 py-2 mt-4 rounded-md hover:bg-gray-300 transition duration-300"
      >
        Generate GIF
      </button>
    </div>
  );
};

export default Random;
