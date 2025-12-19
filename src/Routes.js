import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from 'src/components/Layout/Layout';
import ApiDocs from 'src/pages/ApiDocs';
import CreateApiDoc from 'src/pages/CreateApiDoc';

function AppRoutes() {
  return (
    <Routes>
      {/* Public route */}
      {/* <Route path="/login" element={<Login />} /> */}

      {/* Protected routes */}
      <Route element={<Layout />}>
        <Route path="/" element={<ApiDocs />} />
        <Route path="/api-docs/create" element={<CreateApiDoc />} />
      </Route>
    </Routes>
  );
}

export default AppRoutes;
