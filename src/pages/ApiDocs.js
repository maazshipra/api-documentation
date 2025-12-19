import React from 'react';
import {
  Box,
  Typography,
  Paper,
  Divider,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Chip,
} from '@mui/material';

function ApiDoc() {
  return (
    <Box>
      {/* Title */}
      <Typography variant="h4" gutterBottom>
        Create Production Order API
      </Typography>

      <Typography color="text.secondary" gutterBottom>
        This API is used to create a production order in the system.
      </Typography>

      {/* URL Section */}
      <Paper sx={{ p: 3, mb: 3 }}>
        <Typography variant="h6" gutterBottom>
          URL
        </Typography>
        <Divider sx={{ mb: 2 }} />
        <Typography
          sx={{
            fontFamily: 'monospace',
            backgroundColor: '#f5f5f5',
            p: 1,
            borderRadius: 1,
          }}
        >
          POST /api/production-order/create/
        </Typography>
      </Paper>

      {/* Parameters */}
      <Paper sx={{ p: 3, mb: 3 }}>
        <Typography variant="h6" gutterBottom>
          Query Parameters
        </Typography>
        <Divider sx={{ mb: 2 }} />

        <Table size="small">
          <TableHead>
            <TableRow>
              <TableCell>
                <b>Name</b>
              </TableCell>
              <TableCell>
                <b>Type</b>
              </TableCell>
              <TableCell>
                <b>Required</b>
              </TableCell>
              <TableCell>
                <b>Description</b>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>tenant_id</TableCell>
              <TableCell>UUID</TableCell>
              <TableCell>
                <Chip label="Yes" color="success" size="small" />
              </TableCell>
              <TableCell>Tenant organization ID</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>plant_id</TableCell>
              <TableCell>UUID</TableCell>
              <TableCell>
                <Chip label="Yes" color="success" size="small" />
              </TableCell>
              <TableCell>Plant identifier</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </Paper>

      {/* Request Payload */}
      <Paper sx={{ p: 3, mb: 3 }}>
        <Typography variant="h6" gutterBottom>
          Request Payload
        </Typography>
        <Divider sx={{ mb: 2 }} />

        <Box
          component="pre"
          sx={{
            backgroundColor: '#0f172a',
            color: '#e5e7eb',
            p: 2,
            borderRadius: 1,
            overflow: 'auto',
            fontSize: 14,
          }}
        >
          {`{
  "product_id": 1080,
  "quantity": 5,
  "production_version_id": 22
}`}
        </Box>
      </Paper>

      {/* Response */}
      <Paper sx={{ p: 3 }}>
        <Typography variant="h6" gutterBottom>
          Response (200 OK)
        </Typography>
        <Divider sx={{ mb: 2 }} />

        <Box
          component="pre"
          sx={{
            backgroundColor: '#0f172a',
            color: '#e5e7eb',
            p: 2,
            borderRadius: 1,
            overflow: 'auto',
            fontSize: 14,
          }}
        >
          {`{
  "status": "success",
  "production_order_id": "PO-2025-00045",
  "message": "Production order created successfully"
}`}
        </Box>
      </Paper>
    </Box>
  );
}

export default ApiDoc;
