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
      date: "Sep 18 2020",
      title: "NASA",
      des: "Im fine how are you doing today",
    },
    {
      date: "Jan 18 2021",
      title: "Hakathon",
      des: "Lorem ipsum dolor sit amet, consectetur",
    },
    {
      date: "Mar 18 2021",
      title: "NASA",
      des: "Lorem ipsum doloremque  sit amet  doing todayDate ",
    },
    {
      date: "Jun 22 2021",
      title: "NASA",
      des: "Im fine how are you doing today",
    },
    {
      date: "Sep 18 2022",
      title: "NASA",
      des: "Im fine how are you doing today",
    },
  ];
  return (
    <section id="timeline" className="w-full">
      <h3 className="text-center text-[#1976d2]">Timeline</h3>
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
