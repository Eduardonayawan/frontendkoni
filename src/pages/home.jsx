import Layout from '../components/Layout';

const Home = () => {
  return (
    <Layout>
      <div className="card shadow p-4" style={{ backgroundColor: 'darkgrey' }}>
        <h2>Welcome to My Personal Website</h2>
        <p>
        Thank you for visiting my website! This is where you can learn more about me, my background, and my career. You'll find information about my education, interests, and how to contact me.
        </p>
  
      </div>
    </Layout>
  );
};

export default Home;