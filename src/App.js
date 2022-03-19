import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import TimelineDot from "@mui/lab/TimelineDot";
import Typography from "@mui/material/Typography";
import { events } from "./data";

function App() {
  return (
    <>
      {events.map((event, index) => {
        return (
          <Timeline position="alternate">
            {index % 2 == 0 ? (
              <TimelineItem>
                <TimelineOppositeContent
                  sx={{ m: "auto 0" }}
                  align="right"
                  variant="body2"
                  color="text.secondary"
                >
                  {event.date}
                  <Typography>{event.time}</Typography>
                </TimelineOppositeContent>
                <TimelineSeparator>
                  <TimelineConnector sx={{ bgcolor: "warning.main" }} />
                  <TimelineDot
                    color="secondary"
                    variant="outlined"
                  ></TimelineDot>
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent sx={{ py: "20px", px: 2 }}>
                  <Typography variant="h6" component="span">
                    {event.title.toUpperCase()}
                  </Typography>
                </TimelineContent>
              </TimelineItem>
            ) : (
              <TimelineItem>
                <TimelineOppositeContent
                  sx={{ py: "20px", px: 2 }}
                  variant="body2"
                >
                  <Typography variant="h6" component="span">
                    {event.title.toUpperCase()}
                  </Typography>
                </TimelineOppositeContent>
                <TimelineSeparator>
                  <TimelineConnector sx={{ bgcolor: "secondary.main" }} />
                  <TimelineDot color="primary" variant="filled"></TimelineDot>
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent sx={{ m: "auto 0" }} color="text.secondary">
                  {event.date}
                  <Typography>{event.time}</Typography>
                </TimelineContent>
              </TimelineItem>
            )}
          </Timeline>
        );
      })}
    </>
  );
}

export default App;
