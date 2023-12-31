import React from 'react'
import { Table, TableCell, TableHead, TableRow, TableBody, Container, Box } from '@mui/material'
const data = [
  { id: 1, actName: 'Акт 1', period: 'Січень - Лютий', date: '10.02.2023' },
  { id: 2, actName: 'Акт 2', period: 'Березень - Квітень', date: '15.04.2023' },
  { id: 3, actName: 'Акт 3', period: 'Травень - Червень', date: '20.06.2023' }]
export const DeniedActsPage = () => {
  return (
    <Container maxWidth='xl'>
      <Box sx={{ borderBottom: 2, borderColor: 'divider', borderTop: 1 }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Протерміновані акти</TableCell>
              <TableCell>Період</TableCell>
              <TableCell>Дата</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((row) => (<TableRow key={row.id}>
                <TableCell>{row.id}</TableCell>
                <TableCell>{row.actName}</TableCell>
                <TableCell>{row.period}</TableCell>
                <TableCell>{row.date}</TableCell>
              </TableRow>))}
          </TableBody>
        </Table>
      </Box>
    </Container>)
}
