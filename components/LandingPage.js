// LandingPage.js

function LandingPage() {
  const history = useHistory();
  const [language, setLanguage] = useState("");

  const handleSearch = () => {
    history.push(`/jobs?language=${language}`);
  };

  return (
    <div style={{ textAlign: "center" }}>
      <h2>Find a Job</h2>
      <input
        type="text"
        placeholder="Enter a programming language"
        value={language}
        onChange={(e) => setLanguage(e.target.value)}
        style={{ padding: "10px", marginRight: "10px" }}
      />
      <button
        onClick={handleSearch}
        style={{
          background: "blue",
          color: "white",
          border: "none",
          padding: "10px 20px",
          cursor: "pointer",
        }}
      >
        Search
      </button>
    </div>
  );
}
