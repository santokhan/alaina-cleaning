import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import SLayout, {
  SDes,
  SHeader,
  SMain,
  STitle,
} from "../../section-layout/SectionLayout";
import TabPanel1 from "./tab-panel/TabPanel1";
import TabPanel2 from "./tab-panel/TabPanel2";
import TabPanel3 from "./tab-panel/TabPanel3";
import TabPanel4 from "./tab-panel/TabPanel4";
import TabPanel5 from "./tab-panel/TabPanel5";
import TabPanel6 from "./tab-panel/TabPanel6";
import Dots from "../../dots/Dots";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
      className="w-full"
    >
      {value === index && <Box sx={{ px: { md: 3 } }}>{children}</Box>}
    </div>
  );
}

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

export default function VerticalTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div id="massages">
      <SLayout>
        <Dots></Dots>
        <SHeader>
          <STitle>Massages</STitle>
          <SDes>
            Massage is een ervaring met jezelf, gegeven door een ander...
          </SDes>
        </SHeader>
        <SMain>
          <Box
            sx={{
              flexGrow: 1,
              bgcolor: "background.paper",
              display: "flex",
              flexWrap: { xs: "wrap", md: "nowrap" },
              backgroundColor: "transparent",
            }}
          >
            <Tabs
              orientation="vertical"
              variant="scrollable"
              value={value}
              onChange={handleChange}
              aria-label="Vertical tabs example"
              sx={{
                borderRight: 1,
                borderColor: "transparent",
                display: "flex",
                gap: "1rem",
                alignItems: {
                  xs: "center",
                  sm: "center",
                  md: "start",
                  lg: "start",
                  marginBottom: "1rem",
                },
                columnGap: ".75rem",
                width: { xs: 1, md: 300 },
                backgroundColor: "transparent",
              }}
            >
              <Tab
                sx={{
                  paddingX: "2rem",
                  background: "#fff",
                  my: 1,
                  py: 3,
                  borderRadius: 2,
                  width: 1,
                }}
                label="Shiatsu massage"
                {...a11yProps(0)}
              />
              <Tab
                sx={{
                  paddingX: "2rem",
                  background: "#fff",
                  my: 1,
                  py: 3,
                  borderRadius: 2,
                  width: 1,
                }}
                label="Relaxation massage"
                {...a11yProps(1)}
              />
              <Tab
                sx={{
                  paddingX: "2rem",
                  background: "#fff",
                  my: 1,
                  py: 3,
                  borderRadius: 2,
                  width: 1,
                }}
                label="Chair massage"
                {...a11yProps(2)}
              />
              <Tab
                sx={{
                  paddingX: "2rem",
                  background: "#fff",
                  my: 1,
                  py: 3,
                  borderRadius: 2,
                  width: 1,
                }}
                label="Sports massage"
                {...a11yProps(4)}
              />
            </Tabs>
            <TabPanel value={value} index={0}>
              <TabPanel1></TabPanel1>
            </TabPanel>
            <TabPanel value={value} index={1}>
              <TabPanel2></TabPanel2>
            </TabPanel>
            <TabPanel value={value} index={2}>
              <TabPanel3></TabPanel3>
            </TabPanel>
            <TabPanel value={value} index={3}>
              <TabPanel5></TabPanel5>
            </TabPanel>
          </Box>
        </SMain>
      </SLayout>
    </div>
  );
}
