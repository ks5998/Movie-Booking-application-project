import {
    Select,
    MenuItem,
    Checkbox,
    Input,
    ListItemText,
  } from "@material-ui/core";
import React, { useState } from "react";
import { filterObject } from "./Filters";

   
const Genre = (props)=>{

    const [genreName, setGenreName] = useState([]);
    const handleOnChange = (e)=>{
        if(!filterObject.genres.includes(e.target.value)){
            filterObject.genres = e.target.value;
        }

        setGenreName(e.target.value);
    }


    return(

        <Select
          labelId="genreLabel"
          id="genre"
          multiple
          value={genreName}
          onChange={handleOnChange}
          input={<Input />}
          renderValue={(selected) => selected.join(',')}>
            
          {props.genres.map((genre) => {
            return(
                <MenuItem key={genre.id} value={genre.name}>
                <Checkbox checked={genreName.includes(genre.name)} />
                <ListItemText primary={genre.name} />
                </MenuItem>
            );
          })}
        </Select>
    );
}

export default Genre;