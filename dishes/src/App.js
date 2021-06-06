import "./App.css";
import { useState } from "react";
import { DishForm, fieldsForm } from "./components/DishForm";
import ButtonsResult from "./components/ButtonsResult";
import Header from "./components/Header";
import { useForm } from "react-hook-form";
import { DishSelect, fieldsSelect } from "./components/DishSelect";
import axios from "axios";

function App() {
    const { handleSubmit, reset, setValue } = useForm();
    const [data, setData] = useState(null);
    const arrValues = [...fieldsSelect, ...fieldsForm];
    const values = { ...arrValues };
    let str = "{";
    arrValues.map((val, i) => {
        str = str + `"${Object.keys(val)}" : `;
        if (parseInt(Object.values(val)[0])) {
            if (Object.keys(val)[0] === "diameter") {
                str = str + parseFloat(Object.values(val)[0]);
            } else {
                str = str + parseInt(Object.values(val)[0]);
            }
        } else {
            str = str + `"${Object.values(val)}"`;
        }
        str = str + ", ";

        console.log("keys", Object.keys(val)[0]);
        console.log("valu", parseInt(Object.values(val)[0]));
        return "";
    });
    str = str.slice(0, -2);
    str = str + "}";
    console.log(str);
    const headers = {
        "Content-Type": "application/json",
    };
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
                        axios
                            .post("https://frosty-wood-6558.getsandbox.com:443/dishes ", str, {
                                headers: headers,
                            })
                            .then((res) => {
                                console.log(res);
                                console.log(res.data);
                                console.log(res.status);
                                if (res.status === 200) {
                                    alert("🦄 Great, status: 200");
                                }
                            });
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
