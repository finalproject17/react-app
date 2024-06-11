///if chekecked remove it
////hyrg3 kolo m3ada aly btsawy
//  If it's already included (prevValues.includes(value) evaluates to true), it means the user is deselecting this filter option. So, it filters out that value from the array using filter.
// If it's not included, it means the user is selecting this filter option. So, it creates a new array by spreading the prevValues array ([...prevValues]) and appends the new value to it.
import React, { useState, useEffect } from "react";
import { Form, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const CandidatesFilter = ({ candidates, onFilter }) => {
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedExperienceLevels, setSelectedExperienceLevels] = useState([]);
  const [selectedJobTypes, setSelectedJobTypes] = useState([]);
  const [selectedQualifications, setSelectedQualifications] = useState([]);
  const [selectedLocation, setSelectedLocation] = useState("");

  const updateFilter = (prevSelected, value) =>
    prevSelected.includes(value)
      ? prevSelected.filter((v) => v !== value)
      : [...prevSelected, value];

  const handleFilterChange = (filterType, value) => {
    switch (filterType) {
      case "category":
        setSelectedCategories((prev) => updateFilter(prev, value));
        break;
      case "experience":
        setSelectedExperienceLevels((prev) => updateFilter(prev, value));
        break;
      case "desiredJobType":
        setSelectedJobTypes((prev) => updateFilter(prev, value));
        break;
      case "qualification":
        setSelectedQualifications((prev) => updateFilter(prev, value));
        break;
      case "city":
        setSelectedLocation(value);
        break;

      default:
        break;
    }
  };

  useEffect(() => {
    const filteredCandidates = candidates.filter((candidate) => {
      const matchesCategory =
        selectedCategories.length === 0 ||
        selectedCategories.includes(candidate.category);
      const matchesExperience =
        selectedExperienceLevels.length === 0 ||
        selectedExperienceLevels.includes(candidate.experienceLevel);
      const matchesJobType =
        selectedJobTypes.length === 0 ||
        selectedJobTypes.includes(candidate.desiredJobType);
      const matchesQualification =
        selectedQualifications.length === 0 ||
        selectedQualifications.includes(candidate.qualifications);
      const matchesLocation =
        selectedLocation === "" || selectedLocation === candidate.city;

      return (
        matchesCategory &&
        matchesExperience &&
        matchesJobType &&
        matchesQualification &&
        matchesLocation
      );
    });
    onFilter(filteredCandidates);
  }, [
    selectedCategories,
    selectedExperienceLevels,
    selectedJobTypes,
    selectedQualifications,
    selectedLocation,
    candidates,
    
  ]);



  return (
    <div
      className="p-3"
      style={{
        backgroundColor: "#FAFCF8",
        borderRadius: "10px",
        width: "100%",
        maxWidth: "300px",
        border: "1px solid #B4E0D3",
      }}
    >
      <Form>
        {/* location Filter */}

        <Form.Group className="mb-3">
          <Form.Label>City</Form.Label>
          <Form.Select
            value={selectedLocation}
            onChange={(e) => handleFilterChange("city", e.target.value)}
          >
            <option value="">All</option>
            {[
              "Aswan",
              "Luxor",
              "Sharm El Sheikh",
              "Giza",
              "Alexandria",
              "Cairo",
              "Hurghada",
              "Helwan",
              "Sohag",
              "Quesna",
              "Al Khankah",
              "el-Arab",
              "Badr",
              "Sadat City",
              "Obour",
              "New Cairo",
              "6th of October City",
              "Banha",
              "Shibin El Kom",
              "Qalyub",
              "Marsa Matruh",
              "Arish",
              "Kafr El Sheikh",
              "El-Mahalla El-Kubra",
              "Damietta",
              "Assiut",
              "Qena",
              "Sohag",
              "Minya",
              "Beni Suef",
              "Faiyum",
            ].map((city) => (
              <option key={city}>{city}</option>
            ))}
          </Form.Select>
        </Form.Group>
        <hr />
        {/* Category Filter */}
        <Form.Group className="mb-3">
          <Form.Label>Category</Form.Label>
          {["Programming", "Health Care", "Finance", "Accounting"].map(
            (category) => (
              <Form.Check
                key={category}
                type="checkbox"
                label={category}
                onChange={() => handleFilterChange("category", category)}
              />
            )
          )}
        </Form.Group>
        <hr />
        {/* Experience Level Filter */}
        <Form.Group className="mb-3">
          <Form.Label>Experience Level</Form.Label>
          {["Fresh", "Junior", "Senior", "Expert"].map((level) => (
            <Form.Check
              key={level}
              type="checkbox"
              label={level}
              onChange={() => handleFilterChange("experience", level)}
            />
          ))}
        </Form.Group>
        <hr />
        {/* Job Type Filter */}
        <Form.Group className="mb-3">
          <Form.Label>Desired Job Type</Form.Label>
          {["Full Time", "Part Time", "Internship", "Freelance"].map(
            (jobType) => (
              <Form.Check
                key={jobType}
                type="checkbox"
                label={jobType}
                onChange={() => handleFilterChange("desiredJobType", jobType)}
              />
            )
          )}
        </Form.Group>
        <hr />
        {/* Qualifications Filter */}
        <Form.Group className="mb-3">
          <Form.Label>Qualifications</Form.Label>
          {["Master’s Degree", "Bachelors Degree", "None"].map(
            (qualification) => (
              <Form.Check
                key={qualification}
                type="checkbox"
                label={qualification}
                onChange={() =>
                  handleFilterChange("qualification", qualification)
                }
              />
            )
          )}
        </Form.Group>
        <hr />
        <Button type="submit" variant="success" className="w-100">
          Filter Now
        </Button>
      </Form>
    </div>
  );
};

export default CandidatesFilter;
