import React, { useState } from 'react';
import {
  Box,
  TextField,
  MenuItem,
  Button,
  Tabs,
  Tab,
  Paper,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  IconButton,
} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';

const methods = ['GET', 'POST', 'PUT', 'PATCH', 'DELETE'];

function APi() {
  const [method, setMethod] = useState('POST');
  const [url, setUrl] = useState('');
  const [tab, setTab] = useState(0);
  const [params, setParams] = useState([{ key: '', value: '' }]);
  const [body, setBody] = useState('');
  const [response, setResponse] = useState('');

  const addParam = () => {
    setParams([...params, { key: '', value: '' }]);
  };

  const removeParam = (index) => {
    setParams(params.filter((_, i) => i !== index));
  };

  const updateParam = (index, field, value) => {
    const copy = [...params];
    copy[index][field] = value;
    setParams(copy);
  };

  const handleSend = () => {
    // For now only preview
    const payload = {
      method,
      url,
      params,
      body,
    };

    setResponse(JSON.stringify(payload, null, 2));
  };

  return (
    <Box>
      {/* Top Bar */}
      <Paper sx={{ p: 2, mb: 2, display: 'flex', gap: 2 }}>
        <TextField
          select
          value={method}
          onChange={(e) => setMethod(e.target.value)}
          sx={{ width: 120 }}
        >
          {methods.map((m) => (
            <MenuItem key={m} value={m}>
              {m}
            </MenuItem>
          ))}
        </TextField>

        <TextField
          fullWidth
          placeholder="https://api.example.com/endpoint"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
        />

        <Button variant="contained" onClick={handleSend}>
          Send
        </Button>
      </Paper>

      {/* Tabs */}
      <Paper>
        <Tabs value={tab} onChange={(_, v) => setTab(v)}>
          <Tab label="Params" />
          <Tab label="Body" />
          <Tab label="Response" />
        </Tabs>

        {/* Params Tab */}
        {tab === 0 && (
          <Box p={2}>
            <Table size="small">
              <TableHead>
                <TableRow>
                  <TableCell>Key</TableCell>
                  <TableCell>Value</TableCell>
                  <TableCell width={50}></TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {params.map((row, index) => (
                  <TableRow key={row}>
                    <TableCell>
                      <TextField
                        fullWidth
                        value={row.key}
                        onChange={(e) =>
                          updateParam(index, 'key', e.target.value)
                        }
                      />
                    </TableCell>
                    <TableCell>
                      <TextField
                        fullWidth
                        value={row.value}
                        onChange={(e) =>
                          updateParam(index, 'value', e.target.value)
                        }
                      />
                    </TableCell>
                    <TableCell>
                      <IconButton onClick={() => removeParam(index)}>
                        <DeleteIcon />
                      </IconButton>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>

            <Button startIcon={<AddIcon />} sx={{ mt: 2 }} onClick={addParam}>
              Add Param
            </Button>
          </Box>
        )}

        {/* Body Tab */}
        {tab === 1 && (
          <Box p={2}>
            <TextField
              fullWidth
              multiline
              minRows={10}
              placeholder="Raw JSON body"
              value={body}
              onChange={(e) => setBody(e.target.value)}
              sx={{ fontFamily: 'monospace' }}
            />
          </Box>
        )}

        {/* Response Tab */}
        {tab === 2 && (
          <Box p={2}>
            <TextField
              fullWidth
              multiline
              minRows={10}
              value={response}
              InputProps={{ readOnly: true }}
              sx={{
                fontFamily: 'monospace',
                backgroundColor: '#0f172a',
                color: '#e5e7eb',
              }}
            />
          </Box>
        )}
      </Paper>
    </Box>
  );
}

export default APi;
