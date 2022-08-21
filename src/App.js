import "./App.css";
import { useEffect, useRef, useState } from "react";
import Table from "./components/Table/Table";
import { getLocalStored, setLocalStored } from "./components/localStored";

function App() {
  const [job, setJob] = useState({ content: "", dateline: "" });
  const [jobs, setJobs] = useState(getLocalStored("todo") || []);
  const ref = useRef(null);
  const ref2 = useRef(null);

  const onSubmit = (e) => {
    setJob({ ...job, [e.target.name]: e.target.value });
  };

  const handleJobs = () => {
    if (job.content === "") {
      return;
    }
    if (job.dateline === "") {
      return;
    }
    let arr = jobs;
    setJobs(arr.concat(job));
    setJob({ content: "", dateline: "" });
    ref.current.value = "";
    ref2.current.value = "";
  };
  console.log(job);
  // set jobs in local stored
  useEffect(() => {
    setLocalStored("todo", jobs);
    ref.current.focus();
  }, [jobs]);

  const handleDelete = (index) => {
    let deleteJobs = jobs;
    deleteJobs.splice(index, 1);
    setJobs(deleteJobs.concat());
  };
  return (
    <div className="App">
      <h1>TODOLISH</h1>
      <input
        name="content"
        type="text"
        placeholder="thêm công việc..."
        onChange={onSubmit}
        ref={ref}
      />
      <input
        name="dateline"
        style={{ marginLeft: 20 }}
        type="date"
        onChange={onSubmit}
        ref={ref2}
      />
      <button style={{ marginLeft: 20 }} onClick={handleJobs}>
        ADD
      </button>
      <Table jobs={jobs} onDelete={handleDelete} />
    </div>
  );
}

export default App;
