import "./Selection.css";
import SelectionItem from "../SelectionItem/SelectionItem";

function Selection() {
  const arrayofObjects = [
    { SelectionName: "GitHub" ,
        uniqueID:1
    },
    { SelectionName: "Frontend Mentor" ,
        uniqueID:2
    },
    {
      SelectionName: "LinkedIn",
      uniqueID:3
    },
    { SelectionName: "Twitter" ,
        uniqueID:4
    },
    {
      SelectionName: "Instagram",
      uniqueID:5
    },
  ];
  return (
    <div id="selection">
      {arrayofObjects.map((item) => {
        return (
          <SelectionItem 
          key={item.uniqueID} SelectionName={item.SelectionName}>

          </SelectionItem>
        );
      })}
    </div>
  );
}
export default Selection;
