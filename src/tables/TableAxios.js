import { useState, useEffect } from "react";
import MUIDataTable from "mui-datatables";
import axios from "axios";

import { createTheme, ThemeProvider } from "@mui/material/styles";

export const TableAxios = () => {
  const getMuiTheme = () =>
    createTheme({
      components: {
        MuiTableCell: {
          styleOverrides: {
            root: {
              padding: "8px",
              backgroundColor: "#FFE8E8",
            },
          },
        },
        MuiToolbar: {
          styleOverrides: {
            regular: {
              minHeight: "8px",
            },
          },
        },
      },
    });

  //1 - configuramos Los hooks
  const [products, setProducts] = useState([]);

  //2 - fcion para mostrar los datos con axios
  const endpoint = "http://www.test.readychatai.com/data";

  const getData = async () => {
    await axios.get(endpoint).then((response) => {
      const data = response.data;
      console.log(data);
      setProducts(data);
    });
  };

  useEffect(() => {
    getData();
  }, []);

  //3 - Definimos las columns
  const columns = [
    {
      name: "bot_sender",
      label: "BOT_SENDER",
    },
    {
      name: "business_id",
      label: "BUSINESS_ID",
    },
    {
      name: "id",
      label: "ID",
    },
    {
      name: "message_date",
      label: "MESSAGE_DATE",
    },
    {
      name: "message_text",
      label: "MESSAGE_TEXT",
    },

    {
      name: "platform",
      label: "PLATFORM",
    },
    {
      name: "received_number",
      label: "RECEIVED_NUMBER",
    },
    {
      name: "reply_to_id",
      label: "REPLY_TO_ID",
    },
    {
      name: "sender_name",
      label: "SENDER_NAME",
    },
    {
      name: "sender_number",
      label: "SENDER_NUMBER",
    },
  ];
  //4 - renderizamos la datatable
  return (
    <ThemeProvider theme={getMuiTheme()}>
      <MUIDataTable
        title={"Show data with Axios"}
        data={products}
        columns={columns}
      />
    </ThemeProvider>
  );
};
