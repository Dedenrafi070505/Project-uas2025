import { useState } from "react";

function CreateMovie() {
  const [form, setForm] = useState({
    id: "",
    title: "",
    year: "",
    type: "",
    poster: "",
  });

  const [movie, setMovie] = useState(null); 

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setMovie(form); 
    setForm({
      id: "",
      title: "",
      year: "",
      type: "",
      poster: "",
    }); // reset form
  };

  return (
    <main style={{ padding: "20px", minHeight: "80vh" }}>
      <h2 style={{ textAlign: "center", marginBottom: "20px" }}>Create Movie</h2>
      <form
        onSubmit={handleSubmit}
        style={{
          maxWidth: "400px",
          margin: "0 auto",
          display: "flex",
          flexDirection: "column",
          gap: "12px",
        }}
      >
        <input
          type="text"
          name="id"
          placeholder="ID (ex: tt14060094)"
          value={form.id}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="title"
          placeholder="Title (ex: Eternals)"
          value={form.title}
          onChange={handleChange}
          required
        />
        <input
          type="number"
          name="year"
          placeholder="Year (ex: 2021)"
          value={form.year}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="type"
          placeholder="Type (ex: movie)"
          value={form.type}
          onChange={handleChange}
          required
        />
        <input
          type="url"
          name="poster"
          placeholder="Poster URL"
          value={form.poster}
          onChange={handleChange}
          required
        />
        <button
          type="submit"
          style={{
            backgroundColor: "#f89940",
            color: "white",
            border: "none",
            padding: "10px",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          Tambah Film
        </button>
      </form>

      {/* Tampilkan data yang ditambahkan */}
      {movie && (
        <div
          style={{
            marginTop: "40px",
            maxWidth: "600px",
            marginInline: "auto",
            padding: "20px",
            border: "1px solid #ccc",
            borderRadius: "10px",
            textAlign: "center",
          }}
        >
          <h3>Film Ditambahkan:</h3>
          <p><strong>ID:</strong> {movie.id}</p>
          <p><strong>Title:</strong> {movie.title}</p>
          <p><strong>Year:</strong> {movie.year}</p>
          <p><strong>Type:</strong> {movie.type}</p>
          <img
            src={movie.poster}
            alt={movie.title}
            style={{ maxWidth: "100%", marginTop: "10px", borderRadius: "8px" }}
          />
        </div>
      )}
    </main>
  );
}

export default CreateMovie;
