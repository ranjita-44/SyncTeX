import React from "react";
import Splitpane from "react-split-pane";

const NewProject = () => {
  return <>

    <div className="w-screen h-screen flex flex-col items-start justify-start overflow-hidden">

      {/*alert section */}

      {/*header section */}

      {/*coding section */}
      <div>
        {/*horizontal */}
        <Splitpane split="horizontal" minSize={100} max={-100} defaultSize={"50%"}></Splitpane>

        {/*top coding section */}


        {/*bottom result section */}

        {/*vertical section */}

        {/*left coding section */}

        {/*right result section */}
      </div>





    </div>

  </>
}

export default NewProject