import { TextProps, Text, Anchor } from "@mantine/core";
import { isValidUrl } from "~/utils/isValidUrl";

export type AutoLinkTextProps = TextProps & {
  children: string;
};

export function AutoLinkText(props: AutoLinkTextProps) {
  const { children, ...rest } = props;

  return (
    <Text {...rest}>
      {children.split(" ").map((value) =>
        isValidUrl(value) ? (
          <Anchor href={value} target="_blank" {...rest}>
            {value}{" "}
          </Anchor>
        ) : (
          `${value} `
        )
      )}
    </Text>
  );
}
