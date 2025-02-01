import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="home">
      <h2>Welcome to Travel Journal</h2>
      <p>A Travel Journal is a personal digital diary where users can document their travel experiences, memories, and adventures. This application allows users to create journals by providing essential details such as the title of their trip, a description of their journey, the location they visited, the date of travel, and images capturing special moments. The goal is to offer a seamless and engaging way for users to preserve their travel experiences in an organized and visually appealing manner. With a user-friendly interface and stylish design, this journal enhances storytelling by allowing users to relive their trips through words and images.

The Create Journal feature is at the heart of the application, providing users with a structured form to input their travel details. Users can enter a title to summarize their journey, describe their experiences in detail, specify the location, and select the date of their trip. Additionally, they can upload images, adding a personal and immersive touch to their entries. The inclusion of images makes the journal visually rich, enabling users to capture and share the essence of their travels effortlessly. The intuitive and polished design ensures that creating a journal entry is both simple and enjoyable.

The Dashboard serves as a collection hub for all journal entries, displaying them in an organized and aesthetically pleasing manner. Users can view their past travels, with each entry showcasing the title, description, location, date, and accompanying images. This makes it easy to browse through memories and reflect on different journeys. The dashboard provides a central space where users can revisit and relive their travel experiences anytime. As the project evolves, additional features like search, filters, favorites, and sharing options could further enhance the experience, making it a complete and interactive travel documentation platform.</p>
    </div>
  );
};

export default Home;
