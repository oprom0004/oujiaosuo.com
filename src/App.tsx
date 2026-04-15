/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import OuyiWeb from './pages/OuyiWeb';
import OuyiPc from './pages/OuyiPc';
import OuyiJiaoyisuo from './pages/OuyiJiaoyisuo';
import OuyiApp from './pages/OuyiApp';
import OuyiAppPingguo from './pages/OuyiAppPingguo';
import OuyiAppAnzhuo from './pages/OuyiAppAnzhuo';
import OuyiXiazai from './pages/OuyiXiazai';
import OuyiZhuce from './pages/OuyiZhuce';
import OuyiOfficial from './pages/OuyiOfficial';

export default function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/ouyi-web" element={<OuyiWeb />} />
          <Route path="/ouyi-pc" element={<OuyiPc />} />
          <Route path="/ouyijiaoyisuo" element={<OuyiJiaoyisuo />} />
          <Route path="/ouyi-app" element={<OuyiApp />} />
          <Route path="/ouyi-app/pingguo" element={<OuyiAppPingguo />} />
          <Route path="/ouyi-app/anzhuo" element={<OuyiAppAnzhuo />} />
          <Route path="/ouyi-xiazai" element={<OuyiXiazai />} />
          <Route path="/ouyi-zhuce" element={<OuyiZhuce />} />
          <Route path="/ouyi-offcial" element={<OuyiOfficial />} />
        </Routes>
      </Layout>
    </Router>
  );
}
