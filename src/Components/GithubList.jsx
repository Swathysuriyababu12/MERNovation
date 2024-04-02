import React, { useState, useEffect } from "react";

const GitHubList = ({ username, type, token }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://api.github.com/users/${username}/${type}`,
          {
            headers: {
              Authorization: `token ${token}`,
            },
          }
        );
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [username, type, token]);

  return (
    <div>
      <h2>{type === "repos" ? "Repositories" : "Gists"}</h2>
      <ul>
        {data.map((item) => (
          <li key={item.id}>
            <a href={item.html_url} target="_blank" rel="noopener noreferrer">
              {item.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default GitHubList;
