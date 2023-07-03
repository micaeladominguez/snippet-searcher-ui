"use client"
import {Button} from "@mui/material";
import axios from "@/util/axios";

export default function FetchButton(){
  const fetchData = async () => {
    // Fetch /snippets via axios
    // Set the data in state
    const response = await axios.get(`/test-cases/2a2171d6-2f64-449d-b689-a7acce30efda`)
    console.log(response.data)
  }
  return (
      <Button onClick={fetchData}>Fetch Data</Button>
  )
}
