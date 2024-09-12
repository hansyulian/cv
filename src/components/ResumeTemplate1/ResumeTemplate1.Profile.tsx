import { Grid, Group, Avatar, Stack, Text, Title, Box } from "@mantine/core";
import { Icon } from "~/components/Icon";
import { RT1ProfileInfoRow } from "~/components/ResumeTemplate1/ResumeTemplate1.ProfileInfoRow";
import classes from "./ResumeTemplate1.Profile.module.scss";
import { AutoLinkText } from "~/components/AutoLinkText";
import { PrintOnly } from "~/components/PrintOnly";

export type RT1ProfileProps = {
  data: ResumeProfile;
  photoUrl: string;
};

export function RT1Profile(props: RT1ProfileProps) {
  const { photoUrl } = props;
  const { address, email, name, phone, summary, title, printOnlyHeading } =
    props.data;

  return (
    <>
      <Stack className={classes.container}>
        <Grid gutter="xl">
          <Grid.Col span={{ sm: 8 }}>
            <Stack h="100%" justify="center">
              <Group>
                <Avatar src={photoUrl} size={100} />
                <Stack gap={0}>
                  <Title tt="uppercase">{name}</Title>
                  {title && <Text fz="lg">{title}</Text>}
                </Stack>
              </Group>
              {summary && <Text ta="justify">{summary}</Text>}
            </Stack>
          </Grid.Col>
          <Grid.Col span={{ sm: 4 }}>
            <Stack h="100%" justify="center">
              <RT1ProfileInfoRow
                icon={<Icon name="location" />}
                withDivider
                value={address}
              />
              <RT1ProfileInfoRow
                icon={<Icon name="email" />}
                withDivider
                value={email}
              />

              <RT1ProfileInfoRow
                icon={<Icon name="whatsapp" />}
                withDivider
                value={phone}
              />
            </Stack>
          </Grid.Col>
        </Grid>
      </Stack>

      {printOnlyHeading && (
        <PrintOnly>
          <AutoLinkText fz="xs">{printOnlyHeading}</AutoLinkText>
        </PrintOnly>
      )}
    </>
  );
}
