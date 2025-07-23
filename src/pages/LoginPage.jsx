import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { saveAuth } from "../services/authenService";

export default function LoginPage() {
  const [isRegister, setIsRegister] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    fullName: "",
    phone: "",
    address: "",
  });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (isRegister) {
      if (formData.password !== formData.confirmPassword) {
        setError("Mật khẩu không khớp.");
        return;
      }

      try {
        await axios.post("https://localhost:7226/api/Auth/signup/student", {
          email: formData.email,
          password: formData.password,
          fullName: formData.fullName,
          phone: formData.phone,
          address: formData.address,
        });
        alert("Đăng ký thành công. Mời bạn đăng nhập.");
        setIsRegister(false);
      } catch (error) {
        console.log("Đăng ký lỗi:", error.response?.data);
        setError(error.response?.data?.message || "Đã xảy ra lỗi.");
      }
    } else {
      try {
        const response = await axios.post(
          "https://localhost:7226/api/Auth/signin",
          {
            email: formData.email,
            password: formData.password,
          }
        );

        const { token, role } = response.data;
        localStorage.setItem("token", token);
        localStorage.setItem("role", role);

        saveAuth(response.data);

        if (role === "Admin") {
          navigate("/admin");
        } else if (role === "MathCenter") {
          navigate("/mathcenter");
        } else {
          navigate("/");
        }
      } catch (error) {
        console.log("Đăng nhập lỗi:", error.response?.data);
        setError(error.response?.data?.message || "Đăng nhập thất bại.");
      }
    }
  };

  return (
    <div style={{ maxWidth: "500px", margin: "auto", padding: "2rem" }}>
      <h2 style={{ textAlign: "center" }}>
        {isRegister ? "Đăng ký" : "Đăng nhập"}
      </h2>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
          style={{ width: "100%", margin: "0.5rem 0", padding: "0.5rem" }}
        />
        <input
          type="password"
          name="password"
          placeholder="Mật khẩu"
          value={formData.password}
          onChange={handleChange}
          required
          style={{ width: "100%", margin: "0.5rem 0", padding: "0.5rem" }}
        />
        {isRegister && (
          <>
            <input
              type="password"
              name="confirmPassword"
              placeholder="Xác nhận mật khẩu"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
              style={{ width: "100%", margin: "0.5rem 0", padding: "0.5rem" }}
            />
            <input
              type="text"
              name="fullName"
              placeholder="Họ và tên"
              value={formData.fullName}
              onChange={handleChange}
              required
              style={{ width: "100%", margin: "0.5rem 0", padding: "0.5rem" }}
            />
            <input
              type="text"
              name="phone"
              placeholder="Số điện thoại"
              value={formData.phone}
              onChange={handleChange}
              required
              style={{ width: "100%", margin: "0.5rem 0", padding: "0.5rem" }}
            />
            <input
              type="text"
              name="address"
              placeholder="Địa chỉ"
              value={formData.address}
              onChange={handleChange}
              required
              style={{ width: "100%", margin: "0.5rem 0", padding: "0.5rem" }}
            />
          </>
        )}

        {error && <p style={{ color: "red", marginTop: "0.5rem" }}>{error}</p>}

        <button
          type="submit"
          style={{
            width: "100%",
            padding: "0.7rem",
            marginTop: "1rem",
            backgroundColor: "#2e79f6",
            color: "white",
            border: "none",
            borderRadius: "5px",
            fontWeight: "bold",
          }}
        >
          {isRegister ? "Đăng ký" : "Đăng nhập"}
        </button>
      </form>

      <p style={{ marginTop: "1rem", textAlign: "center" }}>
        {isRegister ? "Đã có tài khoản?" : "Chưa có tài khoản?"}{" "}
        <span
          style={{ color: "blue", cursor: "pointer" }}
          onClick={() => setIsRegister(!isRegister)}
        >
          {isRegister ? "Đăng nhập" : "Đăng ký"}
        </span>
      </p>
    </div>
  );
}
