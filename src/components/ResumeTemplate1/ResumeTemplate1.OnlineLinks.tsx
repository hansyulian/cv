import { Grid } from "@mantine/core";
import { RT1OnlineLink } from "~/components/ResumeTemplate1/ResumeTemplate1.OnlineLink";

export type RT1OnlineLinksProps = {
  onlineLinks: ResumeOnlineLinks[];
};

const spanConfig = {
  sm: 4,
};

export function RT1OnlineLinks(props: RT1OnlineLinksProps) {
  const { onlineLinks } = props;

  return (
    <Grid>
      {onlineLinks.map((record) => (
        <Grid.Col span={spanConfig}>
          <RT1OnlineLink onlineLink={record} />
        </Grid.Col>
      ))}
    </Grid>
  );
}
