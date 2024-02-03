import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { BiMale } from "react-icons/bi";
import { FaFemale } from "react-icons/fa";

export default function SelectGender() {
  const [selectedGenderIndex, setSelectedGenderIndex] = useState();
  const [selectedGender, setSelectedGender] = useState();
  const data = [
    { gender: "male", img: "#", icon: <BiMale />, color: "purple" },
    { gender: "female", img: "#", icon: <FaFemale />, color: "pink" },
  ];
  return (
    <SelectGenderWrapper>
      <header>
        <div className="logo">
          <img src="#" alt="logo" />
          <h1>Select Your Gender</h1>
        </div>
      </header>

      <div className="gender">
        {data?.map((item, index) => (
          <div
            key={index}
            className={`genderContainer ${
              index === selectedGenderIndex ? "selectedGender" : ""
            }`}
          >
            <div className="icon" style={{ color: `${item.color}` }}>
              {item.icon}
            </div>
            <button
              onClick={() => {
                setSelectedGenderIndex(index);
                setSelectedGender(item.gender);
              }}
            >
              {item.gender}
            </button>
          </div>
        ))}
      </div>

      <Link to={"/capture-image"} className="submit">
        <button>Submit</button>
      </Link>
    </SelectGenderWrapper>
  );
}

const SelectGenderWrapper = styled.div`
  padding: 4vw;
  button {
    border: none;
    outline: none;
    padding: 1vw 2.5vw;
    font-weight: 600;
    font-size: 6vw;
    border-radius: 1vw;
    cursor: pointer;
    box-shadow: 0.3vw 0.3vw 0.8vw rgba(0, 0, 0, 0.5);
    transform: translateY(-0.4vw);
    transition: all ease 0.5s;
    /*  &:hover {
      box-shadow: none;
      transform: translateY(0);
    } */
    background-color: #fcb017;
  }
  header {
    display: flex;
    flex-direction: column;
  }
  .gender {
    border: 1px solid black;
    display: flex;
    justify-content: center;
    gap: 10vw;
    .genderContainer {
      border: 1px solid black;
      display: flex;
      flex-direction: column;
      gap: 4vw;
      align-items: center;
      .icon {
        display: flex;
        align-items: center;
        border: 1px solid black;
        font-size: 25vw;
        transition: background ease 0.5s;
      }
    }
    .selectedGender {
      .icon {
        background-color: #fcb017;
      }
      button {
        box-shadow: none;
        transform: translateY(0);
      }
    }
  }

  .submit {
  }
`;
