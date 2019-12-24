import React, { useEffect } from "react";

import "./navigation.css";

function Navigation(props) {
  const { list } = props;
  let indicator_ref = null;
  let width = 100 / list.length;

  useEffect(() => {
    indicator_ref.style.width = width + "%";
  }, []);

  const onTabClick = (idx) => {
    let translate = 100*idx;
    indicator_ref.style.transform = `translateX(${translate}%)`
  };

  const renderList = () => {
    return list.map((item, index) => {
      return <div key={index} onClick={() => onTabClick(index)} className="tab">
        {item}
      </div>;
    });
  };

  return (
    <div className="navigation">
      <div className="navigation_tabs">{renderList()}</div>
      <div ref={ref => (indicator_ref = ref)} className="indicator" />
    </div>
  );
}

export default Navigation;
