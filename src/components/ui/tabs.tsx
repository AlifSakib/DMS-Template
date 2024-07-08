import { Tab } from "rizzui";

type TabItem = {
  label: string;
  component: JSX.Element; // Define the type of component
};

interface TabsProps {
  tabs: TabItem[];
  selectedIndex: number;
  onSelect: (index: number) => void;
}

const Tabs: React.FC<TabsProps> = ({ tabs, selectedIndex, onSelect }) => {
  return (
    <Tab selectedIndex={selectedIndex} onChange={onSelect}>
      <Tab.List>
        {tabs.map((tab, index) => (
          <Tab.ListItem key={index}>{tab.label}</Tab.ListItem>
        ))}
      </Tab.List>
      <Tab.Panels>
        {tabs.map((tab, index) => (
          <Tab.Panel key={index}>{tab.component}</Tab.Panel>
        ))}
      </Tab.Panels>
    </Tab>
  );
};

export default Tabs;


// usages

// type TabItem = {
//   label: string;
//   component: JSX.Element; // Define the type of component
// };
// const tabs: TabItem[] = [
//   { label: "Recent", component: <div>Recent panel</div> },
//   { label: "Popular", component: <div>Popular panel</div> },
//   { label: "Trending", component: <div>Trending panel</div> },
// ];

{
  /* <Tabs tabs={tabs} />; */
}
