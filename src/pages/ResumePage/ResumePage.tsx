import { Container, Paper, Space } from "@mantine/core";
import { data } from "~/config/data";
import photo from "~/assets/photo.jpg";
import { ResumeTemplate1 } from "~/components/ResumeTemplate1";

export default function ResumePage() {
  return (
    <Container>
      <Space h="xl" />
      <Paper p="xl" shadow="lg">
        <ResumeTemplate1 data={data} photoUrl={photo} />
      </Paper>
      <Space h="xl" />
    </Container>
  );
}
