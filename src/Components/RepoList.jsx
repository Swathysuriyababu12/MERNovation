import React, { Component } from "react";
// import RepoListItem from "./RepoListItem";

const RepoList = (props) => {
  const repoUserName = props.username;
  const repoURL = props.reposURL;

  fetch(`https://api.github.com/users/${repoUserName}/repos`)
    .then((response) => response.json())
    .then((data) => {
      //const id = dateData.photos.map(roverdata => roverdata.id);

      console.log(
        "getting mappedrepo array IDs",
        data.map((mappedData) => mappedData.id)
      );

      const mappedIDs = data.map((mappedData) => mappedData.id);
      const mappedRepoNames = data.map((mappedData) => mappedData.full_name);

      console.log("getting mappedrepo array names", mappedRepoNames);

      const arrayItems = data.map((arraySingleItem) => {
        return (
          // <RepoListItem
          //   arrayID={arraySingleItem.id}
          //   key={arraySingleItem.id}
          //   fullName={arraySingleItem.full_name}
          // />
          <></>
        );
      });

      // console.log("repo data map function", repoData);
    });

  return (
    <ul>
      <h4>Repos</h4>
      <a href={repoURL} className="embed-responsive-item">
        {repoURL}
      </a>
      <br />
      <br />
      <h3>List of repositories</h3>
      {/* {arrayItems} */}
    </ul>
  );
};

export default RepoList;
