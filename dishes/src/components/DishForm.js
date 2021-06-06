import "antd/dist/antd.css";
import { TextField, ThemeProvider, createMuiTheme } from "@material-ui/core";
import { useState } from "react";

const theme = createMuiTheme({
    palette: {
        type: "dark",
    },
});

export let fieldsForm = [];

export const DishForm = () => {
    const [name, setName] = useState({ name: "" });
    const [time, setTime] = useState({ preparation_time: "00:15:30" });
    const [fields, setFields] = useState([name, time]);
    fieldsForm = fields;
    return (
        <ThemeProvider theme={theme}>
            <section>
                <label>Dish name</label>
                <div className="name">
                    <TextField
                        required={true}
                        onChange={(evt, value) => {
                            setName({ name: `${evt.target.value}` });
                            setFields([{ name: evt.target.value }, time]);
                        }}
                    />
                </div>
            </section>
            <section style={{ padding: "24px" }}>
                <label>Preparation time</label>
                <div>
                    <TextField
                        required={true}
                        type="time"
                        defaultValue="00:15:10"
                        onChange={(evt, value) => {
                            setTime({ preparation_time: `${evt.target.value}` });
                            setFields([name, { preparation_time: evt.target.value }]);
                        }}
                    />
                </div>
            </section>
        </ThemeProvider>
    );
};
