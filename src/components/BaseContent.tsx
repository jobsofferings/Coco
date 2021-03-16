import React from "react";
import Footer from "src/page/Head/Footer";
import Header from "src/page/Head/Header";
import './BaseContent.less';

const BaseContent: (fn: any) => () => JSX.Element = (fn: any) => {
  return () => <div className="head">
    <Header />
    <div className="content">
      {fn()}
    </div>
    <Footer />
  </div>
}

export default BaseContent;