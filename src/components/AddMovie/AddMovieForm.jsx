import { useState } from "react";
import Alert from "../Alert/Alert";
import styles from "./AddMovieForm.module.css";
import { nanoid } from "nanoid";

function AddMovieForm(props) {
  const [formData, setFormData] = useState({
    title: "",
    date: "",
    poster: "",
    type: "",
  });

  const [formError, setFormError] = useState({
    title: false,
    date: false,
    poster: false,
    type: false,
  });

  const { movies, setMovies } = props;
  const { title, date, poster, type } = formData;

  function handleChange(e) {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });

    // Reset error saat user mulai mengetik
    setFormError({
      ...formError,
      [name]: false,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    validate() && addMovie();
  }

  function validate() {
    const newErrors = {
      title: formData.title === "",
      date: formData.date === "",
      poster: formData.poster === "",
      type: formData.type === "",
    };

    setFormError(newErrors);

    // Valid jika semua field tidak error
    return !Object.values(newErrors).includes(true);
  }

  function addMovie() {
    const movie = {
      id: nanoid(),
      title,
      year: date,
      type,
      poster,
    };

    setMovies([...movies, movie]);

    setFormData({
      title: "",
      date: "",
      poster: "",
      type: "",
    });

    setFormError({
      title: false,
      date: false,
      poster: false,
      type: false,
    });
  }

  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit}>
        <input className={styles.input_form} id="title" type="text" value={title} name="title" onChange={handleChange} />
        {formError.title && <Alert>Title Wajib Diisi</Alert>}

        <input className={styles.input_form} id="date" type="text" value={date} name="date" onChange={handleChange} />
        {formError.date && <Alert>Date Wajib Diisi</Alert>}

        <input className={styles.input_form} id="poster" type="text" value={poster} name="poster" onChange={handleChange} />
        {formError.poster && <Alert>Poster Wajib Diisi</Alert>}

        <input className={styles.input_form} id="type" type="text" value={type} name="type" onChange={handleChange} />
        {formError.type && <Alert>Type Wajib Diisi</Alert>}

        <button className={styles.button_form}>Add Movie</button>
      </form>
    </div>
  );
}

export default AddMovieForm;
