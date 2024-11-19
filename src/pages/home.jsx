import Layout from '../components/Layout';

const Home = () => {
  return (
    <Layout>
      <div className="card shadow p-4" style={{ backgroundColor: 'lightgrey' }}>
        <h2>Welcome to My Personal Website</h2>
        <p>
          Thank you for visiting my personal website. This platform serves as an introduction to who I am, my background, and my professional journey. 
          Here, you will find detailed information about my academic achievements, my personal interests and hobbies, as well as ways to get in touch with me.
        </p>
        <p>
          I invite you to explore the various sections of my website, where you can learn more about my education, professional endeavors, and the activities that drive my passion for technology and personal growth.
        </p>
        <p>
          Feel free to reach out if you would like to connect or discuss potential collaborations. I look forward to sharing my work and ideas with you.
        </p>
      </div>
    </Layout>
  );
};

export default Home;