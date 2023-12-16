import React from 'react';
import GitHubTable from './GitHubTable';
const App = () => {
  // 请确保这里的URL是正确的，您应将其更换为您的GitHub JSON文件的实际URL。
  const repoUrl = "https://raw.githubusercontent.com/reborn-sama/Inscription-Aggregation/main/json/eths.json";

  return (
    <div className="App">
      <h1>Token Table</h1>
      <GitHubTable repoUrl={repoUrl} />
    </div>
  );
}

export default App;