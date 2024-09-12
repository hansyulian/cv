import { Grid } from "@mantine/core";
import { RT1ProfessionalReference } from "~/components/ResumeTemplate1/ResumeTemplate1.ProfessionalReference";

export type RT1ProfessionalReferencesProps = {
  professionalReferences: ResumeProfessionalReference[];
};

const spanConfig = {
  sm: 4,
};

export function RT1ProfessionalReferences(
  props: RT1ProfessionalReferencesProps
) {
  const { professionalReferences } = props;

  return (
    <Grid>
      {professionalReferences.map((record) => (
        <Grid.Col span={spanConfig}>
          <RT1ProfessionalReference professionalReference={record} />
        </Grid.Col>
      ))}
    </Grid>
  );
}
