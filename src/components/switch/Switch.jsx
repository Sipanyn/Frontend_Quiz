import styled from "styled-components";
import { useContext } from "react";
import { ThemeContext } from "styled-components";

const Switch = () => {
  const { changeTheme, theme } = useContext(ThemeContext);

  return (
    <StyledWrapper>
      <label className="toggle-switch">
        <input
          onChange={changeTheme}
          checked={theme === "dark"}
          type="checkbox"
        />
        <div className="toggle-switch-background">
          <div className="toggle-switch-handle" />
        </div>
      </label>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .toggle-switch {
    position: relative;
    display: inline-block;
    width: 60px;
    height: 30px;
    cursor: pointer;
  }

  .toggle-switch input[type="checkbox"] {
    display: none;
  }

  .toggle-switch-background {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #e5e6e7;
    border-radius: 20px;
    transition: background-color 0.3s ease-in-out;
  }

  .toggle-switch-handle {
    position: absolute;
    top: 5px;
    left: 5px;
    width: 20px;
    height: 20px;
    background-color: white;
    border-radius: 50%;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
    transition: transform 0.3s ease-in-out;
  }

  .toggle-switch::before {
    content: "";
    position: absolute;
    top: -25px;
    right: -35px;
    font-size: 12px;
    font-weight: bold;
    color: #aaa;
    text-shadow: 1px 1px #fff;
    transition: color 0.3s ease-in-out;
  }

  .toggle-switch input[type="checkbox"]:checked + .toggle-switch-handle {
    transform: translateX(45px);
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2), 0 0 0 3px #05c46b;
  }

  .toggle-switch input[type="checkbox"]:checked + .toggle-switch-background {
    background-color: purple;
    // light mode
  }

  .toggle-switch input[type="checkbox"]:checked + .toggle-switch:before {
    content: "On";
    color: #05c46b;
    right: -15px;
  }

  .toggle-switch
    input[type="checkbox"]:checked
    + .toggle-switch-background
    .toggle-switch-handle {
    transform: translateX(30px);
  }
`;

export default Switch;
