import { Container, Paper } from "@mantine/core";
import { data } from "~/config/data";
import photo from "~/assets/photo.jpg";
import { ResumeTemplate1 } from "~/components/ResumeTemplate1";

export default function ResumePage() {
  return (
    <Container>
      <Paper py="xl">
        <ResumeTemplate1 data={data} photoUrl={photo} />
      </Paper>
    </Container>
  );
}
