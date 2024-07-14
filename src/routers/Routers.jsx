import React from "react";
import { Outlet, Route, Routes } from "react-router-dom";
import Layout from "../app/[locale]/layout";
import Home from "../app/[locale]/(root)/(home)/page";
import NotFount from "../app/[locale]/(root)/page";
import Login from "../app/[locale]/(root)/login/page";
import InvitationSingle from "../app/[locale]/(root)/invitation/[slug]/page";
import UserDashboard from "../app/[locale]/(root)/user/dashboard/page";
import Muhiddin from "../components/important/Muhiddin&Aziza";
import CreateInvitation from "../app/[locale]/(root)/create/page";
import AllDesign from "../app/[locale]/(root)/designs/page";

const Routers = () => {
  return (
    <Routes>
      <Route
        element={
          <Layout>
            <Outlet />
          </Layout>
        }
      >
        <Route path="/">
          <Route index element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/create-invitation" element={<CreateInvitation />} />
          <Route path="/invitation/">
            <Route path=":slug" element={<InvitationSingle />} />
            <Route path="muhiddin&aziza" element={<Muhiddin />} />

          </Route>
          <Route path="/designs" element={<AllDesign />} />
          <Route path="/user/dashboard" element={<UserDashboard />} />
        </Route>
      </Route>
      <Route path="*" element={<NotFount />} />
    </Routes>
  );
};
export default Routers;
