import { Grid } from "@mantine/core";
import { RT1OnlineLink } from "~/components/ResumeTemplate1/ResumeTemplate1.OnlineLink";

export type RT1OnlineLinksProps = {
  data: ResumeOnlineLinks[];
};

const spanConfig = {
  lg: 4,
};

export function RT1OnlineLinks(props: RT1OnlineLinksProps) {
  const { data } = props;

  return (
    <Grid>
      {data.map((record) => (
        <Grid.Col span={spanConfig}>
          <RT1OnlineLink data={record} />
        </Grid.Col>
      ))}
    </Grid>
  );
}
