import "./App.css";
import { useState } from "react";
import { DishForm, fieldsForm } from "./components/DishForm";
import ButtonsResult from "./components/ButtonsResult";
import { useForm } from "react-hook-form";
import { DishSelect, fieldsSelect } from "./components/DishSelect";

function App() {
    const { handleSubmit, reset, setValue } = useForm();
    const [data, setData] = useState(null);
    const arrValues = [...fieldsSelect, ...fieldsForm];
    const values = { ...arrValues };
    console.log("FIELDS 1 from App.js", fieldsSelect);
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
                    <DishSelect />
                    <ButtonsResult {...{ data, reset, setValue }} />
                </form>
            </div>
        </div>
    );
}

export default App;
