import React from 'react';
import { Table, Badge, Button } from 'react-bootstrap';
import { FaClock, FaBriefcase, FaMapMarkerAlt } from 'react-icons/fa';
import "./JobTable.css";
const JobTable = () => {
  const jobs = [
    {
      title: 'Developer & expert in java c++',
      timeAgo: '12 days ago',
      jobType: 'Full time',
      locationType: 'Remote',
      location: 'Egypt, Alex',
      applications: 27,
      dateApplied: '20 Feb, 2024',
      jobTrack: 'In Progress',
      status: 'Active'
    },
    {
      title: 'Senior Frontend Developer',
      timeAgo: '12 days ago',
      jobType: 'Part time',
      locationType: 'Onsite',
      location: 'Egypt, Alex',
      applications: 27,
      dateApplied: '20 Feb, 2024',
      jobTrack: 'Rejected',
      status: 'Active'
    },
    {
      title: 'UI UX Designer',
      timeAgo: '12 days ago',
      jobType: 'Full time',
      locationType: 'Remote',
      location: 'Egypt, Alex',
      applications: 27,
      dateApplied: '20 Feb, 2024',
      jobTrack: 'Accepted',
      status: 'Active'
    },
  ];

  return (
    <div style={{  border: "1px solid #B4E0D3" ,borderRadius: "16px"}} className='container p-0'>
    <Table striped  hover >
      <thead>
        <tr>
          <th style={{backgroundColor:"#F6F7FF"}}>Job Title</th>
          <th style={{backgroundColor:"#F6F7FF"}}>Applicants</th>
          <th style={{backgroundColor:"#F6F7FF"}}>Date Applied</th>
          <th style={{backgroundColor:"#F6F7FF"}}>Job Track</th>
          <th style={{backgroundColor:"#F6F7FF"}}>Status</th>
          <th style={{backgroundColor:"#F6F7FF"}}>Actions</th>
        </tr>
      </thead>
      <tbody>
        {jobs.map((job, index) => (
          <tr key={index}>
            <td style={{backgroundColor: "#FFFFFF"}}>
              <div>
                <strong>{job.title}</strong>
                <div>
                  <FaClock /> {job.timeAgo}
                </div>
                <div>
                  <Badge bg="secondary" text="light"><FaBriefcase /> {job.jobType}</Badge>{' '}
                  <Badge bg="dark" text="light"><FaMapMarkerAlt /> {job.locationType}</Badge>{' '}
                  <Badge bg="dark" text="light">{job.location}</Badge>
                </div>
              </div>
            </td>
            <td style={{backgroundColor: "#FFFFFF"}}>{job.applications} Applications</td>
            <td style={{backgroundColor: "#FFFFFF"}}>{job.dateApplied}</td>
            <td style={{backgroundColor: "#FFFFFF"}}><Badge bg={job.jobTrack === 'In Progress' ? 'warning' : job.jobTrack === 'Rejected' ? 'danger' : 'success'}>{job.jobTrack}</Badge></td>
            <td style={{backgroundColor: "#FFFFFF"}}><Badge bg="success">{job.status}</Badge></td>
            <td style={{backgroundColor: "#FFFFFF"}}>
              <Button variant="link">...</Button>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
    </div>
  );
};

export default JobTable;
