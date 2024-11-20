import Layout from '../components/Layout';

const Hobbies = () => {
  return (
    <Layout>
      <div className="card shadow p-4" style={{ backgroundColor: 'darkgrey' }}>
        <h2>My Hobbies</h2>
        <ul>
        <li>

        <strong>BasketBall</strong>  
        <p>
        Basketball has always been more than just a sport to me; it’s a source of pure enjoyment and a passion that fills my heart with energy. From the first time I picked up a basketball, I felt a connection to the game that has only grown stronger over the years. The feeling of the ball bouncing under my hands, the thrill of making a perfect shot, and the rush of competing with friends — it’s an experience I never tire of. For me, playing basketball is about more than just scoring points or winning; it’s about having fun, challenging myself, and feeling alive in the moment.
        </p>
        </li>
        </ul>
        <ul>
          <li>
         <strong>Watching Movies</strong>  
            <p>
            Watching movies has always been one of my favorite hobbies, and it's easy to understand why. For me, movies are more than just a form of entertainment — they are an escape, a way to experience new worlds, and a means of connecting with emotions, ideas, and cultures in a way that is both fun and enriching. Whether I'm watching a thrilling action film, a heartwarming drama, or a thought-provoking documentary, the experience of immersing myself in a great movie brings me a sense of joy and fulfillment.
            </p>
          </li>
          

        </ul>
      </div>
    </Layout>
  );
};

export default Hobbies;