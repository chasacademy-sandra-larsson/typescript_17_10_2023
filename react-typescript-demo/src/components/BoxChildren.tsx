import { PropsWithChildren } from "react";

interface BoxProps {
    children: React.ReactNode;
  color?: "red" | "green" | "yellow";
}


const Box = ({children, color = "green"} : BoxProps )=> {
    return (
      <section
        style={{ padding: '1em', border: '5px solid purple', color}}
      >
        {children}
      </section>
    );
  };
  
  const BoxApplication = () => {
    return (
      <main>
        <Box>
          Just a string.
          <p>Some HTML that is not nested.</p>
          <Box>
            <h2>Another React component with one child.</h2>
          </Box>
          <Box>
            <h2>A nested React component with two children.</h2>
            <p>The second child.</p>
          </Box>
        </Box>
      </main>
    );
  };
  
  export default BoxApplication;