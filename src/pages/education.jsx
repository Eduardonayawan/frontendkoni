import Layout from '../components/Layout';

const Education = () => {
  return (
    <Layout>
      <div className="card shadow p-4" style={{ backgroundColor: 'lightgrey' }}>
        <h2>Education</h2>
        
        <div className="mb-4">
          <h4>Tertiary Education</h4>
          <p><strong>Degree Program:</strong> Bachelor of Science in Computer Science</p>
          <p><strong>University:</strong> Naga College Foundation, Inc.</p>
          <p><strong>Address:</strong> Magsaysay Ave, Naga, Camarines Sur</p>
          <p><strong>Year of Graduation:</strong> 2024 (Ongoing)</p>
        </div>

        <div className="mb-4">
          <h4>Secondary Education</h4>
          <p><strong>School:</strong> Sagurong High School</p>
          <p><strong>Address:</strong> Zone 5B Sagurong, Pili, Camarines Sur</p>
          <p><strong>Year of Graduation:</strong> 2018-2019</p>
        </div>

        <div className="mb-4">
          <h4>Senior High</h4>
          <p><strong>School:</strong> ACLC naga </p>
          <p><strong>Address:</strong> elias angeles street naga city</p>
          <p><strong>Year of Graduation:</strong> 2019-2021</p>
        </div>

        <div className="mb-4">
          <h4>Primary Education</h4>
          <p><strong>School:</strong> Soledad Marasigan Elementary School</p>
          <p><strong>Address:</strong> Zone 1 Sagurong, Pili, Camarines Sur</p>
          <p><strong>Year of Graduation:</strong> 2009</p>
        </div>
      </div>
    </Layout>
  );
};

export default Education;