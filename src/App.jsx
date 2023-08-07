// import data
import { useState } from "react";
import data from "./data";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";

const App = () => {
  // Buat index dari data untuk menampilkan 1 data
  const [index, setIndex] = useState(0);

  // masukan objek datanya dan masukan data indexnya
  const { name, job, image, text } = data[index];

  // Alternatif kondisi buat prev dan next
  // const checkNumber = (number) => {
  //   if (number > data.length - 1) {
  //     return 0;
  //   }
  //   if (number < 0) {
  //     return data.length - 1;
  //   }
  //   return number;
  // };

  // membuat handle prev dan next
  const handlePrevPerson = () => {
    setIndex((prevState) => {
      const newPerson = prevState - 1;

      // Kondisi jika index kurang dari 0
      if (newPerson < 0) {
        return data.length - 1;
      }
      return newPerson;

      // ALternatif kondisi
      // return checkNumber(newPerson);
    });
  };

  const handleNextPerson = () => {
    setIndex((prevState) => {
      const newPerson = prevState + 1;

      // // Kondisi jika data sudah melampaui batas
      if (newPerson > data.length - 1) {
        return 0;
      }
      return newPerson;

      // Pemanggilan data alternatif
      // return checkNumber(newPerson);
    });
  };

  const handleRandomPerson = () => {
    let random = Math.floor(Math.random() * data.length);
    console.log(random);

    // Kondisi biar random tidak double
    if (random === index) {
      random = index + 1;
    }

    // Kondisi biar random tidak lebih dari panjang data
    if (random > data.length - 1) {
      return 0;
    }

    setIndex(random);
  };

  return (
    <main>
      <article className="review">
        <div className="img-container">
          <img src={image} alt={name} className="person-img" />
          <span className="quote-icon">
            <FaQuoteRight />
          </span>
        </div>
        <div>
          <h2 className="author">{name}</h2>
          <p className="job">{job}</p>
          <p className="info">{text}</p>
        </div>
        <div className="btn-container">
          <button className="prev-btn" onClick={handlePrevPerson}>
            <FaChevronLeft />
          </button>
          <button className="next-btn" onClick={handleNextPerson}>
            <FaChevronRight />
          </button>
        </div>
        <button className="btn btn-hipster" onClick={handleRandomPerson}>
          Suprise Me
        </button>
      </article>
    </main>
  );
};
export default App;
