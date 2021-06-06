import './App.css';
import { useState } from "react";
import { DishForm, fieldsForm } from "./components/DishForm";
import { useForm } from "react-hook-form";

function App() {
  const { handleSubmit, reset, setValue } = useForm();
  const [data, setData] = useState(null);
  const arrValues = [ ...fieldsForm];
  const values = { ...arrValues };
 
  console.log("FIELDS 2 from App.js", fieldsForm);
  return (
      <div className="App">
          <div className="App-content">
              <Header />
              <form
                  onSubmit={handleSubmit((data) => {
                      data = values;
                      setData(data);
                      console.log("data", data);
                      console.log("data", values);
                  })}
                  className="form">
                  <DishForm />
              </form>
          </div>
      </div>
  );
}

export default App;

