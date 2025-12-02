import React, { useEffect, useState } from "react";

import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  Typography,
  Select,
  MenuItem,
} from "@mui/material";

import Loader from "./Loader";
import ErrorMessage from "./ErrorMessage";

const UsersData = () => {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const [search, setSearch] = useState("");
  const [sortState, setSortState] = useState("none");
  const sortMethods = {
    none: { method: (a, b) => null },
    ascending: { method: (a, b) => a.name.localeCompare(b.name) },
    descending: { method: (a, b) => b.name.localeCompare(a.name) },
  };

  useEffect(() => {
    async function fetchUsers() {
      try {
        setIsLoading(true); // 1. Indítjuk a loader-t
        setError(null); // 2. Korábbi hibát töröljük

        const res = await fetch("https://jsonplaceholder.typicode.com/users");
        if (!res.ok) throw new Error("Hálózati hiba történt"); // 3. Hálózati hiba ellenőrzés

        const data = await res.json();
        setUsers(data); // 4. Siker: beállítjuk az adatokat
      } catch (err) {
        setError("Hiba történt az adatok lekérésekor!⚠️"); // 5. Hiba kezelése
      } finally {
        setIsLoading(false); // 6. Mindig kikapcsoljuk a loader-t
      }
    }

    fetchUsers();
  }, []);

  // Ha éppen töltünk → mutass loader-t
  if (isLoading) return <Loader />;

  // Ha hiba történt → mutass hibaüzenetet
  if (error) return <ErrorMessage message={error} />;

  return (
    <div style={{ margin: "5px 250px 20px 250px" }}>
      <Typography
        variant="h3"
        align="center"
        sx={{ fontWeight: "bold" }}
        padding="0 0 20px 0"
      >
        Felhasználók listája
      </Typography>
      <Box display="flex" justifyContent="flex-end" mb={1} gap={1}>
        <Select
          size="small"
          value={sortState}
          onChange={(e) => setSortState(e.target.value)}
          displayEmpty
        >
          <MenuItem value="none">Rendezés</MenuItem>
          <MenuItem value="ascending">Növekvő sorrend (A–Z)</MenuItem>
          <MenuItem value="descending">Csökkenő sorrend (Z–A)</MenuItem>
        </Select>
        <TextField
          label="Keresés"
          variant="outlined"
          size="small"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </Box>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow sx={{ backgroundColor: "#757575" }}>
              <TableCell sx={{ fontWeight: "bold" }}>Név</TableCell>
              <TableCell sx={{ fontWeight: "bold" }}>E-mail cím</TableCell>
              <TableCell sx={{ fontWeight: "bold" }}>Város</TableCell>
              <TableCell sx={{ fontWeight: "bold" }}>Telefonszám</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users
              .filter((user) => {
                const searchTerm = search.toLowerCase();
                return (
                  searchTerm === "" ||
                  user.name.toLowerCase().includes(searchTerm)
                );
              })
              .sort(sortMethods[sortState].method)
              .map((users) => (
                <TableRow key={users.id}>
                  <TableCell>{users.name}</TableCell>
                  <TableCell>{users.email}</TableCell>
                  <TableCell>{users.address.city}</TableCell>
                  <TableCell>{users.phone}</TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default UsersData;
