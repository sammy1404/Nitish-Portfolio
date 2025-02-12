import React, { useEffect, useState } from "react";
import { MDXProvider } from "@mdx-js/react";
import { evaluate } from "@mdx-js/mdx";
import * as runtime from "react/jsx-runtime";

const MDXRenderer = ({ mdxUrl }) => {
  const [MDXContent, setMDXContent] = useState(null);

  useEffect(() => {
    const fetchMDX = async () => {
      try {
        if (!mdxUrl) {
          throw new Error("MDX URL is undefined.");
        }

        const response = await fetch(mdxUrl);
        if (!response.ok) throw new Error("Failed to fetch MDX file");

        const mdxText = await response.text();
        
        // Log the URL and fetched content
        console.log("sample mdx:", mdxUrl, "\n", mdxText);

        // Check if the fetched content is HTML
        if (mdxText.startsWith("<!DOCTYPE html>")) {
          throw new Error("Fetched content is HTML, not MDX.");
        }
        
        // Compile MDX to a React component
        const { default: Component } = await evaluate(mdxText, {
          ...runtime,
          development: false,
        });

        setMDXContent(() => Component);
      } catch (error) {
        console.error("Error loading MDX file:", error);
      }
    };

    fetchMDX();
  }, [mdxUrl]);

  if (!MDXContent) return <p>Loading...</p>;

  return (
    <MDXProvider>
      <MDXContent />
    </MDXProvider>
  );
};

export default MDXRenderer;
