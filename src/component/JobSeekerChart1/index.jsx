import * as React from "react";
import { useEffect, useMemo, useState } from "react";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import { BarChart } from "@mui/x-charts/BarChart";
import { fetchAppliedJobsByJobSeeker } from "../../store/Slices/AppliedJobsSlice";
import { useDispatch, useSelector } from "react-redux";
import  Style  from "./JobSeekerChart1.module.css"
import { width } from "@mui/system";

export default function JobTrackingChart() {
  const appliedJobs =
    useSelector((state) => state.appliedJobs.appliedJobs) || [];
  const dispatch = useDispatch();
  const userId = "6681e2ab75a50c5ecc4d8e02";

  useEffect(() => {
    // Fetch the applied jobs when the component mounts
    dispatch(fetchAppliedJobsByJobSeeker({ userId }));
  }, [dispatch, userId]);

  // Process the applied jobs data to count the number of jobs in each status category
  const chartData = useMemo(() => {
    const statusCounts = appliedJobs.reduce((accumulator, job) => {
      const status = job.appliedJobStatus; // Get the job status
      if (status) {
        // Increment the count for this status
        if (accumulator[status]) {
          accumulator[status]++;
        } else {
          accumulator[status] = 1;
        }
      }
      return accumulator; // Return the accumulator for the next iteration
    }, {}); // Initialize the accumulator as an empty object

    
    return {
      
      labels: Object.keys(statusCounts),
      data: Object.values(statusCounts),
  
    };
  }, [appliedJobs]); // Recalculate only when appliedJobs changes

  const barChartsParams = {
    
    series: [
      {

        id: "applied-jobs",
        data: chartData.data,
        highlightScope: {
          highlighted: "item",
        },
  
      },
    ],
    xAxis: [{ data: chartData.labels, scaleType: "band", id: "axis1" }],
    height: 400,
  };

  return (
    <Stack
      direction={{ xs: "column", md: "row" }}
      spacing={{ xs: 0, md: 4 }}
      sx={{ width: "100%" }}
    >
      <Box sx={{ flexGrow: 1 }}>
        <BarChart
          {...barChartsParams}
          onItemClick={(event, d) => setItemData(d)}
          onAxisClick={(event, d) => setAxisData(d)}
        />
      </Box>
    </Stack>
  );
}
