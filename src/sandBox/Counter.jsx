import { Box, Button, Typography } from "@mui/material";
import useCounter from "./hooks/useCounter";
import useWindowSite from "./hooks/useWindowSite";

export default function Counter() {
  const { counter, increment, decrement, resetCounter } = useCounter(0, 2);
  const { width, height } = useWindowSite();
  console.log(width);
  console.log(height);


  return (
    <Box
      display="flex"
      flexDirection={"column"}
      alignItems="center"
      justifyContent="center"
      height="100vh"
    >
      <Box
        height={200}
        width={200}
        my={4}
        display="flex"
        alignItems="center"
        justifyContent="center"
        gap={4}
        p={2}
        sx={{ border: "2px solid grey" }}
      >
        <Typography variant="h3">{counter}</Typography>
      </Box>
      <Box>
        <Button variant="contained" sx={{ mr: 4 }} onClick={increment}>
          +
        </Button>
        <Button variant="contained" onClick={decrement}>
          -
        </Button>
      </Box>
      <Button variant="contained" sx={{ mt: 2 }} onClick={resetCounter}>
        Reset
      </Button>
    </Box>
  );
}
