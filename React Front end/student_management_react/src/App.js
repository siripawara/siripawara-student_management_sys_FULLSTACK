import "./App.css";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import Header from "./component/header";
import { StudentTab } from "./component/StudentTab";
import { CourseTab } from "./component/CourseTab";

function App() {
  return (
    <>
      <Header />
      <Tabs variant="enclosed">
        <TabList>
          <Tab>
            <h1 className="text-2 ml-5 mr-5">Students</h1>
          </Tab>
          <Tab>
            <h1 className="text-2 ml-5 mr-5">Courses</h1>
          </Tab>
        </TabList>

        <TabPanels>
          <TabPanel>
            <StudentTab />
          </TabPanel>
          <TabPanel>
            <CourseTab />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </>
  );
}

export default App;
