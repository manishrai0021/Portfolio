import * as React from "react";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import TimelineDot from "@mui/lab/TimelineDot";

// import { Timeline, Grid, Row, Col } from "rsuite";

import "./timeline.css";
// import { Timeline } from "rsuite";

const TimelineC = () => {
  const data = [
    {
      date: "Dec 2 2022",
      title: "Leapfrog",
      des: "Intership in Software Engineer",
    },
    {
      date: "Jul 7 2022",
      title: "Blue Fox Pvt.Ltd",
      des: "Intership in Frontend Developer.",
    },
    {
      date: "Nov 25 2021",
      title: "Second Semester First Year",
      des: "Learned HTML CSS and JS in second Semester.",
    },
    {
      date: "Jun 22 2020",
      title: "Itahari International College",
      des: "Joined IIC in BIT",
    },
    {
      date: "Dec 20 2019",
      title: "Dharan Adarsha",
      des: "Passed out +2 with Computer Science.",
    },
  ];
  return (
    <section id="timeline" className="w-full">
      <h3 className="text-center text-[#1976d2] text-[2rem] mb-12">Timeline</h3>
      <Timeline position="alternate">
        {data.map((data) => {
          return (
            <TimelineItem>
              <TimelineOppositeContent
                sx={{ m: "auto 0" }}
                align="right"
                variant="body2"
                color="text.secondary"
              >
                <span className="border-solid border-[#1976d2] border-2 p-2">
                  {data.date}
                </span>
              </TimelineOppositeContent>
              <TimelineSeparator>
                <TimelineConnector />
                <TimelineDot color="primary">
                  {/* <FastfoodIcon /> */}
                </TimelineDot>
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent sx={{ py: "12px", px: 2 }}>
                <div className="border-solid border-[#1976d2] border-2 p-2">
                  <h2 className="text-[#1976d2]">{data.title}</h2>
                  <p>{data.des}</p>
                </div>
              </TimelineContent>
            </TimelineItem>
          );
        })}
      </Timeline>
    </section>
  );
};

export default TimelineC;
