import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getCourseById } from "../../services/courseService";

function CourseDetails() {
  const { id } = useParams();
  const [details, setDetails] = useState(null);
  const [loading, setLoading] = useState(true);
  const VND = new Intl.NumberFormat("vi-VN", {
    style: "currency",
    currency: "VND",
  });

  const fetchCourseData = async () => {
    try {
      const courseData = await getCourseById(id);
      console.log(courseData.data);
      setDetails(courseData.data);
    } catch (error) {
      console.error("Error fetching course details:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCourseData();
  }, [id]);

  const handleEdit = () => {
    alert("This Function is not implemented yet!");
  };
  const handleDelete = () => {
    alert("This Function is not implemented yet!");
  };

  return (
    <>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div>
          <div
            style={{
              textAlign: "center",
              margin: "2rem",
              padding: "1rem",
              border: "1px solid #ccc",
              borderRadius: "8px",
            }}
          >
            <h2>{details.title}</h2>
            <p>{details.description}</p>
            <p>Price: {VND.format(details.price)}</p>
            <p>
              Status:{" "}
              {details.status === true || details.status === "true" ? (
                <span style={{ color: "green" }}>Active</span>
              ) : (
                <span style={{ color: "red" }}>Inactive</span>
              )}
            </p>
            <p>
              Verify:{" "}
              {details.isVerified === true || details.isVerified === "true" ? (
                <span style={{ color: "green" }}>Verified</span>
              ) : (
                <span style={{ color: "red" }}>Not Verified</span>
              )}
            </p>
            <p>
              Created At: {new Date(details.createdAt).toLocaleDateString()}
            </p>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <button
                onClick={handleEdit}
                style={{
                  padding: "5px 10px",
                  backgroundColor: "#0077cc",
                  color: "#fff",
                  border: "none",
                  borderRadius: "4px",
                  cursor: "pointer",
                }}
              >
                Edit
              </button>
              <button
                onClick={handleDelete}
                style={{
                  marginLeft: "1rem",
                  padding: "5px 10px",
                  backgroundColor: "#ff4d4d",
                  color: "#fff",
                  border: "none",
                  borderRadius: "4px",
                  cursor: "pointer",
                }}
              >
                Delete
              </button>
            </div>
          </div>
          <div style={{ margin: "1rem" }}>
            <h3>Course Lessons</h3>
            <p>...</p>
          </div>
        </div>
      )}
    </>
  );
}

export default CourseDetails;
