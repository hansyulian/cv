import { Grid } from "@mantine/core";
import { RT1Portfolio } from "~/components/ResumeTemplate1/ResumeTemplate1.Portfolio";

export type RT1PortfoliosProps = {
  data: ResumePortfolio[];
};

const spanConfig = {
  md: 6,
  lg: 4,
};

export function RT1Portfolios(props: RT1PortfoliosProps) {
  const { data } = props;

  return (
    <Grid>
      {data.map((record) => (
        <Grid.Col span={spanConfig}>
          <RT1Portfolio data={record} />
        </Grid.Col>
      ))}
    </Grid>
  );
}
