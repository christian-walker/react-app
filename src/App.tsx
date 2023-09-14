import Alert from "./components/Alert";
import ListGroup from "./components/ListGroup";
import Button from "./components/Button";
import { useState } from "react";

function App() {
  let items = ["New York", "San Francisco", "Tokyo", "London", "New Zealand"];

  const handleSelectItem = (item: string) => {
    console.log(item);
  };

  const [alertMessage, setAlerMessage] = useState(false);

  return (
    <div>
      <ListGroup
        items={items}
        heading="Cities"
        onSelectItem={handleSelectItem}
      />
      {alertMessage && (
        <Alert onClose={() => setAlerMessage(false)}>Hello World</Alert>
      )}

      <Button
        onClick={() => {
          setAlerMessage(true);
        }}
      >
        <span>Primary Button</span>
      </Button>
    </div>
  );
}

export default App;
