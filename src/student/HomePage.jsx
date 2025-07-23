import React, { useEffect, useState } from 'react';
import MathCenterList from '../components/student/MathCenterList';
import { getCenter } from '../services/mathcenterService';
import { getAllCourses } from '../services/courseService';
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const [centers, setCenters] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const handleGoToMyCourses = () => {
    navigate("/MyCourses");
  };


  useEffect(() => {
    const fetchData = async () => {
      try {
        const [centersRes, coursesRes] = await Promise.all([
          getCenter(),
          getAllCourses()
        ]);

        const centers = centersRes.data;
        const courses = coursesRes.data;

        // Combine courses into their respective centers
        const centersWithCourses = centers.map(center => ({
          ...center,
          name: center.centerName,
          courses: courses.filter(course => course.mathCenterId === center.id)
        }));

        setCenters(centersWithCourses);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Welcome to Math Learning App</h1>
      <button onClick={handleGoToMyCourses}>My Enrolled Courses</button>
    
    <div style={{ padding: '20px' }}>
      <h1>Math Centers & Courses</h1>
      {loading ? <p>Loading...</p> : <MathCenterList centers={centers} />}
    </div>
    </div>
  );
};

export default HomePage;
