// // src/MultiSkillsInput.js
// import React, { useState } from "react";
// import styles from './multiSkills.module.css'
// const MultiSkillsInput = () => {



//     const [selectedSkills, setSelectedSkills] = useState([]);
//     const [inputValue, setInputValue] = useState("");

//     const handleInputChange = (e) => {
//         setInputValue(e.target.value);
//     };

//     const handleAddSkill = () => {
//         if (inputValue && !selectedSkills.includes(inputValue)) {
//             setSelectedSkills([...selectedSkills, inputValue]);
//         }
//         setInputValue("");
//     };
//     const handleKeyDown = (e) => {
//         if (e.key === "Enter") {
//             e.preventDefault();
//             handleAddSkill();
//         }
//     };

//     const handleRemoveSkill = (skill) => {
//         setSelectedSkills(selectedSkills.filter((item) => item !== skill));
//     };

//     return (

        
//     );
// };

// export default MultiSkillsInput;
