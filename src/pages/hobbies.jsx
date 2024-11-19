import Layout from '../components/Layout';

const Hobbies = () => {
  return (
    <Layout>
      <div className="card shadow p-4" style={{ backgroundColor: 'lightgrey' }}>
        <h2>My Hobbies</h2>
        <p>
          I’ve always believed that a balanced life includes a mix of intellectual and creative pursuits, and my hobbies reflect that philosophy.
        </p>
        <ul>
          <li>
            <strong>Reading Books</strong>  
            <p>
              I’m an avid reader and believe that books are windows to new worlds. Whether it’s fiction that sparks my imagination or non-fiction that broadens my knowledge, I’m always looking for my next great read. From science fiction to biographies, I love diving into stories that challenge my thinking and expand my perspective.
            </p>
          </li>
          <li>
            <strong>Watching Movies</strong>  
            <p>
              Movies are another passion of mine. I enjoy getting lost in different genres, from heartwarming dramas to thrilling action flicks. I’m especially drawn to films with a compelling storyline or incredible visuals. Cinema has a unique way of transporting me to different times, places, and worlds, and I appreciate the creativity and craftsmanship that go into making every film.
            </p>
          </li>
          <li>
            <strong>Playing Video Games</strong>  
            <p>
              Video games aren’t just a way to unwind for me; they’re an immersive experience. I enjoy everything from strategy games that make me think on my feet to action-packed games that get my heart racing. The worlds in these games are vast, filled with challenges, and often tell intricate stories that captivate me for hours. Plus, it’s a great way to connect with friends and enjoy a little friendly competition.
            </p>
          </li>
          <li>
            <strong>Coding</strong>  
            <p>
              Coding is both a hobby and a career passion. I love the challenge of solving problems and bringing ideas to life through code. Whether I’m building websites or experimenting with new technologies, I find immense satisfaction in writing clean, efficient code. It’s not just about creating functional apps or websites, but about constantly learning and pushing the limits of what’s possible.
            </p>
          </li>
        </ul>
      </div>
    </Layout>
  );
};

export default Hobbies;