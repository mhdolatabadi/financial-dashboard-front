import { Typography } from "@mui/material";
import { Section } from ".";
import { ReactElement } from "react";

interface Props {
  header: string;
  children: ReactElement | ReactElement[];
}

export function SectionWithHeader({ children, header }: Props) {
  return (
    <Section>
      <div
        style={{
          display: "flex",
          justifyContent: "flex-start",
          flexDirection: "row",
          width: "100%",
          marginBottom: "15px",
        }}
      >
        <Typography color="primary" fontSize="20px" fontWeight="600">
          {header}
        </Typography>
      </div>
      {children}
    </Section>
  );
}
