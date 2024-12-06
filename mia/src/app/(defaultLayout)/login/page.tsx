"use client";
import "@/app/css/login.css";
import { useState } from "react";
import bcrypt from "bcryptjs";
import { useRouter } from "next/navigation";
import * as user from '@/app/service/user.service'

export default function Login() {
  const router = useRouter();
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const response = await user.login(username,password)
      const userAccount = await response.json();
      localStorage.setItem('user',JSON.stringify(userAccount))
      const accesstoken = userAccount.access_token
      const refreshtoken = userAccount.refresh_token
      document.cookie = `token = ${accesstoken}`
      document.cookie = `refreshtoken = ${refreshtoken}`
      if(!username){
        alert('Tài khoản không tồn tại')
      }
      router.push('/')
  };

  return (
    <form onSubmit={handleSubmit} className="login_container">
      <h2 className="login_title">Đăng nhập Tài Khoản </h2>
      <div className="form-group">
        <label htmlFor="exampleInputEmail1" className="login_email">
          Tên Đăng Nhập
        </label>
        <input
          onChange={(e) => setUserName(e.target.value)}
          type="text"
          className="form-control"
          placeholder="Nhập UserName"
        />
      </div>
      <div className="form-group">
        <label htmlFor="exampleInputPassword1" className="login_password">
          Mật Khẩu
        </label>
        <input
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          className="form-control"
        />
      </div>
      <button className="btn">Đăng Nhập</button>
      <h3 className="btn-register">
        <p className="register-text">Chưa có tài khoản </p>
        <a href="" className="register">
          {" "}
          Đăng Ký Mới{" "}
        </a>
      </h3>
    </form>
  );
}
