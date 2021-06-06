import React from "react";
import { useState } from "react";
import { TextField, Select, MenuItem, Slider } from "@material-ui/core";
export let fieldsSelect = [];

export const DishSelect = () => {
    const [type, setType] = useState("");
    const [slices, setSlices] = useState({ no_of_slices: 0 });
    const [diameter, setDiameter] = useState({ diameter: 0 });
    const [bread, setBread] = useState({ slices_of_bread: 0 });
    const [spiciness, setSpiciness] = useState({ spiciness_scale: 6 });
    const [fields, setFields] = useState([]);
    fieldsSelect = fields;

    return (
        <React.Fragment>
            <section>
                <label>Dish type</label>
            </section>
            <section>
                <Select
                    required={true}
                    onChange={(evt) => {
                        setType(evt.target.value);
                        if (evt.target.value == "pizza") {
                            setFields([{ type: `${evt.target.value}` }, diameter, slices]);
                        }
                        if (evt.target.value == "soup") {
                            setFields([{ type: `${evt.target.value}` }, spiciness]);
                        }
                        if (evt.target.value == "sandwich") {
                            setFields([{ type: `${evt.target.value}` }, bread]);
                        }
                    }}
                    value={type}>
                    <MenuItem value={"pizza"}>Pizza</MenuItem>
                    <MenuItem value={"soup"}>Soup</MenuItem>
                    <MenuItem value={"sandwich"}>Sandwich</MenuItem>
                </Select>
                <br></br>
                {type === "pizza" && (
                    <div className="select-container">
                        <section>
                            <label>Number of slices</label>
                            <div>
                                <TextField
                                    required={true}
                                    onChange={(evt) => {
                                        setSlices({ no_of_slices: `${evt.target.value}` });
                                        setFields([{ type: type }, { no_of_slices: evt.target.value }, diameter]);
                                    }}
                                    type="number"
                                    defaultValue="0"
                                />
                            </div>
                        </section>
                        <section>
                            <label>Diameter</label>
                            <div>
                                <TextField
                                    required={true}
                                    onChange={(evt) => {
                                        setDiameter({ diameter: `${evt.target.value}` });
                                        setFields([{ type: type }, slices, diameter]);
                                        setFields([{ type: type }, slices, { diameter: evt.target.value }]);
                                    }}
                                    type="number"
                                    defaultValue={0}
                                />
                            </div>
                        </section>
                    </div>
                )}
                {type === "soup" && (
                    <div className="select-container">
                        <label>Spiciness scale</label>
                        <Slider
                            required={true}
                            onChange={(evt, value) => {
                                setSpiciness({ spiciness_scale: `${value}` });
                                setFields([{ type: type }, { spiciness_scale: `${value}` }]);
                            }}
                            valueLabelDisplay="auto"
                            defaultValue={5}
                            max={10}
                            step={1}
                        />
                    </div>
                )}
                {type === "sandwich" && (
                    <div className="select-container">
                        <section>
                            <label>Slices of bread</label>
                            <div>
                                <TextField
                                    required={true}
                                    onChange={(evt) => {
                                        setBread({ slices_of_bread: evt.target.value });
                                        setFields([{ type: type }, { slices_of_bread: evt.target.value }]);
                                    }}
                                    type="number"
                                />
                            </div>
                        </section>
                    </div>
                )}
            </section>
        </React.Fragment>
    );
};
