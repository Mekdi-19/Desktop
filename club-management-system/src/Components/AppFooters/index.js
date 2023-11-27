import React from "react";
import { FaFacebook, FaLinkedinIn, FaTelegram } from "react-icons/fa";

import { Typography} from "antd"

function AppFooter() {
  return (
    <div className="AppFooter">
      <Typography.Link href="https://t.me/CSEC_ASTU"> <FaTelegram />telegram contact
       </Typography.Link>
      <Typography.Link href="https://ift.tt/2PEWePp"  >
      <FaFacebook /> Facebook link
      </Typography.Link>
      <Typography.Link href="https://www.linkedin.com/company/csec-astu"  >
      <FaLinkedinIn />Linkedin link
      </Typography.Link>
      
    </div>
  );
}
export default AppFooter;
