import React, { useState, useEffect } from "react";
import TextField from "@material-ui/core/TextField/TextField";
import Select from "@material-ui/core/Select/Select";
import MenuItem from "@material-ui/core/MenuItem/MenuItem";
import axios from "axios";
import ImageResults from "./ImageResults"

const Search = () => {
  const [searchText, setSearchText] = useState("");
  const [amount, setAmount] = useState(15);
  const [apiUrl, setApiUrl] = useState("https://pixabay.com/api");
  const [apiKey, setApiKey] = useState("19654978-fcba37d39110c9f4ab3bb0081");
  const [images, setImages] = useState([]);

  const APIcall =  async () => {
    if(searchText===""){
      setImages([])
    }else{
      const response = await axios.get(
        `${apiUrl}/?key=${apiKey}&q=${searchText}&image_type=photo&per_page=${amount}&safesearch=true`
      );
      setImages(response.data.hits);
    }
    
  };

  useEffect(() => {
    APIcall();
  }, [searchText,amount]);

  console.log(images);
  return (
    <div>
      <TextField
        name="searchText"
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
        id="standard-basic"
        label="Search for image"
        fullWidth={true}
      />
      <br />
      <br/>
      <Select
        name="amount"
        label="amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      >
        <MenuItem value={5}>5</MenuItem>
        <MenuItem value={10}>10</MenuItem>
        <MenuItem value={15}>15</MenuItem>
        <MenuItem value={20}>20</MenuItem>
        <MenuItem value={25}>25</MenuItem>
      </Select>
      <br />
      <br />

      {images.length>0?(<ImageResults images={images}/>): null}
    </div>
  );
};

export default Search;
