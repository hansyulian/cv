import { Grid } from "@mantine/core";
import { RT1ProfessionalReference } from "~/components/ResumeTemplate1/ResumeTemplate1.ProfessionalReference";

export type RT1ProfessionalReferencesProps = {
  data: ResumeProfessionalReference[];
};

const spanConfig = {
  md: 6,
  lg: 4,
};

export function RT1ProfessionalReferences(
  props: RT1ProfessionalReferencesProps
) {
  const { data } = props;

  return (
    <Grid>
      {data.map((record) => (
        <Grid.Col span={spanConfig}>
          <RT1ProfessionalReference data={record} />
        </Grid.Col>
      ))}
    </Grid>
  );
}
