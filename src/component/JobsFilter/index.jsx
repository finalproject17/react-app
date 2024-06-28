import React, { useEffect, useState } from 'react';
import { Form, Button } from 'react-bootstrap';

export default function JobsFilter({ jobs, onFilter }) {
  // console.log(jobs);

  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedExperienceLevels, setSelectedExperienceLevels] = useState([]);
  const [selectedJobTypes, setSelectedJobTypes] = useState([]);
  const [selectedJobLevels, setSelectedJobLevels] = useState([]);
  const [selectedJoblocationType, setSelectedJoblocationType] = useState([]);

  const [selectedState, setSelectedState] = useState(""); 

  const updateFilter = (prevSelected, value) =>
    prevSelected.includes(value) ? prevSelected.filter((v) => v !== value) : [...prevSelected, value];

  const handleFilterChange = (filterType, value) => {
    switch (filterType) {
      case "JobCategory":
        setSelectedCategories((prev) => updateFilter(prev, value));
        break;
      case "jobLevel":
        setSelectedJobLevels((prev) => updateFilter(prev, value));
        break;
      case "JobType":
        setSelectedJobTypes((prev) => updateFilter(prev, value));
        break;
      case "JoblocationType":
        setSelectedJoblocationType((prev) => updateFilter(prev, value));
        break;
      case "State":
        setSelectedState(value);
        break;
      default:
        break;
    }
  };

  useEffect(() => {
    if (jobs) {
      const filteredJobs = jobs.filter((job) => {
        const matchesCategory =
          selectedCategories.length === 0 ||
          job.JobCategory.some((category) => selectedCategories.includes(category));

        const matchesJobLevel =
          selectedJobLevels.length === 0 ||
          selectedJobLevels.includes(job.jobLevel);

        const matchesJobType =
          selectedJobTypes.length === 0 ||
          selectedJobTypes.includes(job.JobType);

        const matchesJoblocationType =
          selectedJoblocationType.length === 0 ||
          selectedJoblocationType.includes(job.JoblocationType);

          const matchesState = selectedState === "" || (job.jobLocation && job.jobLocation.State === selectedState);

        return matchesCategory && matchesJobLevel && matchesJobType && matchesState && matchesJoblocationType;
      });
      // console.log(filteredJobs);
      onFilter(filteredJobs);
    }
  }, [jobs, selectedCategories, selectedJobLevels, selectedJobTypes, selectedState, selectedJoblocationType]);

  const handleSubmit = (e) => {
    e.preventDefault();
    // The filter logic is already handled by useEffect
  };

  return (
    <div className="p-3"
      style={{
        backgroundColor: "#FAFCF8",
        borderRadius: "10px",
        width: "100%",
        maxWidth: "300px",
        border: "1px solid #B4E0D3",
      }}
    >
      <Form onSubmit={handleSubmit}>
        {/* Location Filter */}
        <Form.Group className="mb-3">
          <Form.Label>City</Form.Label>
          <Form.Select
            value={selectedState}
            onChange={(e) => handleFilterChange("State", e.target.value)}
          >
            <option value="">All</option>
            {[
              "Aswan", "Luxor", "Sharm El Sheikh", "Giza", "Alexandria",
              "Cairo", "Hurghada", "Helwan", "Quesna", "Al Khankah",
              "el-Arab", "Badr", "Sadat City", "Obour", "New Cairo",
              "6th of October City", "Banha", "Shibin El Kom", "Qalyub",
              "Marsa Matruh", "Arish", "Kafr El Sheikh", "El-Mahalla El-Kubra",
              "Damietta", "Assiut", "Qena", "Sohag", "Minya", "Beni Suef", "Faiyum"
            ].map((city) => (
              <option key={city}>{city}</option>
            ))}
          </Form.Select>
        </Form.Group>
        <hr />
        {/* Category Filter */}
        <Form.Group className="mb-3">
          <Form.Label>Category</Form.Label>
          {["Programming", "Health Care", "Finance", "Accounting"].map((jobCategory) => (
            <Form.Check
              key={jobCategory}
              type="checkbox"
              label={jobCategory}
              onChange={() => handleFilterChange("JobCategory", jobCategory)}
            />
          ))}
        </Form.Group>
        <hr />
        {/* Experience Level Filter */}
        <Form.Group className="mb-3">
          <Form.Label>Experience Level</Form.Label>
          {["Fresh", "Junior", "Senior", "Expert", "MidLevel"].map((level) => (
            <Form.Check
              key={level}
              type="checkbox"
              label={level}
              onChange={() => handleFilterChange("jobLevel", level)}
            />
          ))}
        </Form.Group>
        <hr />
        {/* Job Type Filter */}
        <Form.Group className="mb-3">
          <Form.Label>Job Type</Form.Label>
          {["Full-Time", "Part-Time", "Internship", "Freelance"].map((jobType) => (
            <Form.Check
              key={jobType}
              type="checkbox"
              label={jobType}
              onChange={() => handleFilterChange("JobType", jobType)}
            />
          ))}
        </Form.Group>
        <hr />
        <Form.Group className="mb-3">
          <Form.Label>Salary</Form.Label>
          <Form.Range min={0} max={10000} />
        </Form.Group>
        <hr />
        {/* Job Location Type Filter */}
        <Form.Group className="mb-3">
          <Form.Label>Job Location Type</Form.Label>
          {["OnSite", "Remote", "Hybrid"].map((jobLocationType) => (
            <Form.Check
              key={jobLocationType}
              type="checkbox"
              label={jobLocationType}
              onChange={() => handleFilterChange("JoblocationType", jobLocationType)}
            />
          ))}
        </Form.Group>
        <hr />
        <Button type="submit" variant="success" className="w-100 m-0">
          Filter Now
        </Button>
      </Form>
    </div>
  );
}
