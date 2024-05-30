import React, { useCallback, useEffect, useState } from 'react';
import axios from "axios";
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material';

export default function Countries() {
  const [countriesList, setCountriesList] = useState([]);

  
    const getAllCountries = useCallback(async () => {
      try {
        const response = await axios.get("https://restcountries.com/v3.1/all");
        const data = response.data;
        setCountriesList(data);
      } catch (error) {
        console.log("error", error);
      }
    }, []);

    
      useEffect(() => {
        getAllCountries();
      }, [getAllCountries])
  return (
    <>
      {countriesList.length === 0 ? (
        <Typography>טוען..</Typography>
      ) : (
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                <TableCell align="left">Country Name:</TableCell>
                <TableCell align="left">Languages</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {countriesList.map((country, index) => (
                <TableRow key={index} 
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                  <TableCell component="th" scope="row">{country.name.common}</TableCell>
                  <TableCell component="th" scope="row">
                    {country.languages ? (
                      Object.values(country.languages).map((language, i) => (
                        <span key={i}>{language}</span>
                      ))
                    ) : (
                      <span>No languages</span>
                    )}
                  </TableCell>

                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}
    </>
  );
}
