import React, { useState } from "react";
import PropTypes from "prop-types";
import axios from 'axios';
import shape from "../Assets/shape.png";
import shape2 from "../Assets/shape1.png";
import polygon from "../Assets/polygon-9.png";
import polygon2 from "../Assets/polygon-10.png";
import polygon3 from "../Assets/account-icon.png";
import account from "../Assets/account@2x.png";
import email from "../Assets/image-3@2x.png";
import password from "../Assets/image-4@2x.png";
import eye from "../Assets/eyefill.png";
import eyeOff from "../Assets/eyeoff.png";
const Signup = ({ className = "" }) => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [errors, setErrors] = useState({});
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = {};
    if (!formData.fullName) newErrors.fullName = 'Full Name is required';
    if (!formData.email) newErrors.email = 'Email is required';
    if (!formData.password) newErrors.password = 'Password is required';
    if (formData.password !== formData.confirmPassword)
        newErrors.confirmPassword = 'Passwords do not match';
    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
        try {
            const response = await axios.post(`https://signup-wpiq.onrender.com/api/signup`, formData, {
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            if (response.status === 201) {
                alert('User signed up successfully');
                 // Reset form data after successful signup
                 setFormData({
                  fullName: "",
                  email: "",
                  password: "",
                  confirmPassword: "",
                });
                setErrors({});
            } else {
                throw new Error(`Signup failed with status ${response.status}`);
            }
        } catch (error) {
            let errorMessage = 'Signup failed';
            if (error.response) {
                errorMessage = error.response.data.message;
            } else if (error.request) {
                errorMessage = 'No response from server';
            } else {
                errorMessage = error.message;
            }
            alert(errorMessage);
        }
    }
};

  return (
    <div className={`flex-1 flex flex-row items-start justify-start relative min-w-[466px] max-w-full mq1050:min-w-full ${className}`}>
      <img className="h-44 w-[174.5px] absolute !m-[0] top-[-83px] left-[114px] object-contain" alt="" src={shape} />
      <img className="h-[123px] w-[118px] absolute !m-[0] bottom-[-49px] left-[171px] object-contain" loading="lazy" alt="" src={polygon} />
      <div className="h-[639px] w-[411.2px] absolute !m-[0] top-[0px] left-[-354px]">
        <img className="absolute top-[-19px] left-[-226px] w-[550.7px] h-[552.5px] object-contain" alt="" src={shape2} />
        <img className="absolute top-[402px] left-[184px] w-[227.2px] h-[237px] object-contain z-[1]" loading="lazy" alt="" src={polygon2} />
      </div>
      <div className="flex-1 flex flex-col items-start justify-start pt-[124px] px-0 pb-0 box-border max-w-full mq1050:pt-[81px] mq1050:box-border mq450:pt-[53px] mq450:box-border">
        <form className="m-0 self-stretch flex flex-col items-center justify-start pt-[109px] pb-[70px] pr-5 pl-[21px] box-border relative gap-[38px] max-w-full mq1050:pt-[71px] mq1050:pb-[45px] mq1050:box-border mq450:gap-[19px] mq450:pt-[46px] mq450:pb-[29px] mq450:box-border"
          onSubmit={handleSubmit}>
          <div className="w-full h-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] rounded-51xl bg-gray-300 z-[2]" />
          <div className="w-[416px] flex flex-row items-start justify-center pt-0 px-0 pb-[5px] box-border max-w-full">
            <div className="w-[196px] flex flex-row items-start justify-start relative">
              <h1 className="m-0 h-[69px] flex-1 relative text-29xl font-extrabold font-inter text-black text-left inline-block z-[3] mq1050:text-19xl mq450:text-10xl">
                Signup
              </h1>
            </div>
          </div>
          <div className="w-[416px] flex flex-row items-start justify-start relative max-w-full">
            <img className="h-[552.5px] w-[550.7px] absolute !m-[0] right-[-143.7px] bottom-[-338.5px] object-contain" alt="" src={polygon3} />
            <div className="flex-1 shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] rounded-3xl bg-white flex flex-row items-start justify-start pt-[5px] px-[29px] pb-3 box-border gap-[21px] max-w-full z-[3] mq450:flex-wrap mq450:justify-center">
              <div className="h-[52px] w-[416px] relative shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] rounded-3xl bg-white hidden max-w-full" />
              <img className="h-[35px] w-[30px] relative object-contain min-h-[35px] z-[4]" alt="" src={account} />
              <input className="w-[214px] [border:none] [outline:none] bg-[transparent] h-[35px] flex flex-col items-start justify-start pt-[7px] px-0 pb-0 box-border font-asap font-semibold text-5xl text-gray-100" placeholder="Full Name"
                type="text" name="fullName" value={formData.fullName} onChange={handleChange} />
              {errors.fullName && <span className="error">{errors.fullName}</span>}
            </div>
          </div>
          <div className="w-[416px] flex flex-col items-start justify-start pt-0 px-0 pb-[21px] box-border gap-[39px] max-w-full mq450:gap-[19px]">
            <div className="self-stretch flex flex-col items-start justify-start gap-[35px] max-w-full mq450:gap-[17px]">
              <div className="self-stretch shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] rounded-3xl bg-white flex flex-row items-start justify-start pt-2 px-[19px] pb-[11px] box-border gap-[19px] max-w-full z-[3] mq450:flex-wrap">
                <div className="h-[52px] w-[416px] relative shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] rounded-3xl bg-white hidden max-w-full" />
                <img className="self-stretch w-[51px] relative max-h-full object-cover min-h-[33px] z-[4]" alt="" src={email} />
                <input className="w-[214px] [border:none] [outline:none] bg-[transparent] h-8 flex flex-col items-start justify-start pt-[5px] px-0 pb-0 box-border font-asap font-semibold text-5xl text-gray-100" placeholder="Email ID"
                  type="email" name="email" value={formData.email} onChange={handleChange} />
                {errors.email && <span className="error">{errors.email}</span>}
              </div>
              <div className="self-stretch shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] rounded-3xl bg-white flex flex-row items-start justify-start pt-2.5 px-5 pb-[13px] box-border gap-[12px] max-w-full z-[3] mq450:flex-wrap">
                <div className="h-[52px] w-[416px] relative shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] rounded-3xl bg-white hidden max-w-full" />
                <img className="h-[27px] w-12 relative object-cover z-[4]" alt="" src={password} />
                <input className="w-[214px] [border:none] [outline:none] bg-[transparent] h-8 flex flex-col items-start justify-start pt-[5px] px-0 pb-0 box-border font-asap font-semibold text-5xl text-gray-100" placeholder="Create a Password"
                  type="password" name="password" value={formData.password} onChange={handleChange} />
                {errors.password && <span className="error">{errors.password}</span>}
              </div>
            </div>
            <div className="self-stretch shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] rounded-3xl bg-white flex flex-row items-start justify-start pt-[9px] pb-2.5 pr-[35px] pl-12 box-border gap-[48px] max-w-full z-[3] mq450:flex-wrap mq450:gap-[24px] mq450:pl-5 mq450:box-border">
              <div className="h-[52px] w-[416px] relative shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] rounded-3xl bg-white hidden max-w-full" />
              <div className="flex-1 flex flex-col items-start justify-start pt-[3px] px-0 pb-0 box-border min-w-[164px]">
                <input className="w-[214px] [border:none] [outline:none] bg-[transparent] h-8 flex flex-col items-start justify-start pt-[5px] px-0 pb-0 box-border font-asap font-semibold text-5xl text-gray-100" placeholder="Confirm Password"
                  type={showConfirmPassword ? "text" : "password"} name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} />
                {errors.confirmPassword && <span className="error">{errors.confirmPassword}</span>}
              </div>
              <img className="h-[33px] w-[33px] relative overflow-hidden shrink-0 z-[4] cursor-pointer" alt="" src={showConfirmPassword ? eyeOff : eye} onClick={() => setShowConfirmPassword(!showConfirmPassword)} />
            </div>
          </div>
          <div className="w-[416px] flex flex-row items-start justify-start py-0 pr-[68px] pl-[67px] box-border max-w-full mq450:pl-5 mq450:pr-5 mq450:box-border">
            <div className="flex-1 flex flex-col items-end justify-start gap-[19px]">
              <div className="self-stretch flex flex-row items-start justify-end py-0 pr-9 pl-[37px]">
                <button className="cursor-pointer [border:none] pt-2.5 px-[50px] pb-[17px] bg-dodgerblue flex-1 rounded-xl flex flex-row items-start justify-start z-[3] hover:bg-cornflowerblue" type="submit">
                  <div className="h-16 w-52 relative rounded-xl bg-dodgerblue hidden" />
                  <div className="relative text-13xl font-semibold font-asap text-white text-left inline-block min-w-[96px] z-[4] mq1050:text-7xl mq450:text-lgi">
                    Signup
                  </div>
                </button>
              </div>
              <div className="relative text-xl font-semibold font-asap text-center z-[3] mq450:text-base">
                <span className="text-gray-200">Already have an Account?</span>
                <span className="text-red text-decoration-none">{` `}</span>
                  <a className="text-red cursor-pointer hover:text-dodgerblue" style={{ textDecoration: 'none' }} href="#">
                    Login
                  </a>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

Signup.propTypes = {
  className: PropTypes.string,
};

export default Signup;
