import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getAuth } from "../../services/authenService";
import { getCourseOfCenter } from "../../services/courseService";

function CourseManagement() {
  const center = getAuth();
  console.log(center);
  const [loading, setLoading] = useState(true);
  const [courses, setCourses] = useState([]);
  const VND = new Intl.NumberFormat("vi-VN", {
    style: "currency",
    currency: "VND",
  });

  const fetchCourseData = async () => {
    try {
      const coursesRes = await getCourseOfCenter(center.userId);
      setCourses(coursesRes.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCourseData();
  }, [center.userId]);

  const handleCreate = () => {
    alert("This Function is not implemented yet!");
  };

  return (
    <>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <>
          <h1 style={{ textAlign: "center" }}>Course Management</h1>
          <div
            key={center.id}
            style={{
              border: "1px solid #ccc",
              padding: "0 1rem 0.5rem 1rem",
              margin: "0.5rem",
              borderRadius: "8px",
            }}
          >
            <div>
              <div style={{ textAlign: "center", margin: "0.5rem" }}>
                <button
                  onClick={handleCreate}
                  style={{
                    padding: "10px 10px",
                    backgroundColor: "#0077cc",
                    color: "#fff",
                    border: "none",
                    borderRadius: "4px",
                    cursor: "pointer",
                    fontSize: "16px",
                  }}
                >
                  Create Course
                </button>
              </div>
              {courses.map((course) => (
                <div
                  key={course.id}
                  style={{
                    marginBottom: "0.5rem",
                    borderTop: "1px solid #ccc",
                    paddingBottom: "0.5rem",
                  }}
                >
                  <h3>Title: {course.title}</h3>
                  <p>Description: {course.description}</p>
                  <p>Price: {VND.format(course.price)}</p>
                  <p>
                    Status:{" "}
                    {course.status === true || course.status === "true" ? (
                      <span style={{ color: "green" }}>Active</span>
                    ) : (
                      <span style={{ color: "red" }}>Inactive</span>
                    )}
                  </p>
                  <Link to={`/mathcenter/courses/${course.id}`}>
                    <button
                      style={{
                        padding: "5px 10px",
                        backgroundColor: "#0077cc",
                        color: "#fff",
                        border: "none",
                        borderRadius: "4px",
                        cursor: "pointer",
                      }}
                    >
                      View Course Details
                    </button>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default CourseManagement;
