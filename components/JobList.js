// JobList.js

function JobList() {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    const language = new URLSearchParams(window.location.search).get(
      "language"
    );
    if (language) {
      axios
        .get(`https://api.github.com/jobs?description=${language}`)
        .then((response) => {
          setJobs(response.data);
        })
        .catch((error) => {
          console.error(error);
        });
    }
  }, []);

  return (
    <div>
      <h2 style={{ textAlign: "center" }}>Job Listings</h2>
      <ul>
        {jobs.map((job) => (
          <li key={job.id}>
            <a
              href={`/job/${job.id}`}
              style={{ textDecoration: "none", color: "blue" }}
            >
              {job.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
